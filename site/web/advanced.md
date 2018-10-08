# Advanced topics

<div id="assets"></div>

## Bundling your assets via Aspen

All the examples thus far have manually loaded Vue:

```html
<head>
  <title>VueDart first example</title>
  <!-- Here -->
  <script src="https://unpkg.com/vue"></script>
  <script defer src="index.vue.dart.js"></script>
</head>
```

Obviously, once you start to throw in plugins and UI libraries, this doesn't scale
well:

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-router"></script>
<script src="https://unpkg.com/vue-material"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-material/dist/vue-material.css">
```

The preferred way to bundle these assets together is via
[Aspen](https://pub.dartlang.org/packages/aspen) + yarn/npm. Install Aspen via:

```
$ pub global activate aspen
```

and add `aspen_assets` to your `pubspec.yaml`:

```yaml
dependencies:
  aspen_assets: any
  vue: any
```

Now run `yarn init` to set up your `package.json`, and `yarn add` your dependencies:

```
$ yarn init
# Follow the prompts
$ yarn add vue
$ yarn add vue-router
# and so forth...
```

Now create a file named `aspen.yml` containing something like the following:

```yaml
targets:
  default:
    outputs:
      default: web/vendor.js

    assets:
    - dev: node_modules/vue/dist/vue.js
      prod: node_modules/vue/dist/vue.min.js
```

This says that when bundling in development mode, `vue.js` will be used, else
`vue.min.js` will be used. This and any others assets will be bundled into
`web/vendor.js`.

Other assets can be added too:

```yaml
targets:
  default:
    outputs:
      default: web/vendor.js

    assets:
    - dev: node_modules/vue/dist/vue.js
      prod: node_modules/vue/dist/vue.min.js
    - dev: node_modules/vue-material/dist/vue-material.debug.js
      prod: node_modules/vue-material/dist/vue-material.js
    - name: vue-material-css
      # 'default' is used to declare the same file for both dev and prod
      default: node_modules/vue-material/dist/vue-material.css
```

Notice that `vue-material-css` is named; this is because CSS assets are not
automatically applied to the document (similar to Webpack). In order to do so,
you need to use `aspen_assets`:

```dart
import 'package:vue/vue.dart';
import 'package:aspen_assets/aspen_assets.dart' as aspen;

// ..

void main() {
  // This will apply the style to the document.
  aspen.loadGlobal('vue-material-css');
}
```

In order to bundle the assets, run `aspen`, or `aspen -m prod` to bundle in production
mode. Now only `vendor.js` needs to be included:

```
<script src="vendor.js"></script>
```

If you're using the VueDart CLI, you can use `vuedart create my-project --aspen` to
create a new project that uses Aspen and npm/Yarn instead of the default that uses
the unpkg CDN.

<div id="boundary"></div>

## Crossing the JavaScript and Dart boundary

This is one of the trickier things you'll need to know to use VueDart efficiently. Going
back to the `show-name` component from the last section, what if you wanted a property
value to be an object? For instance:

```dart
// DO NOT DO THIS; IT DOESN'T WORK

class Person {
  String name;
  int age;

  Person({this.name, this.age});
}

@VueComponent(template: '<p>{{person.name}} is {{person.age}}</p>')
class ShowName extends VueComponentBase {
  @prop
  Person person;
}
```

If you couldn't tell by the giant warning comment...this won't work. The problem here is
that the JavaScript world doesn't see objects like the Dart world does. The answer to this
dilemma is [the js package](https://pub.dartlang.org/packages/js).

Before you continue, look through the package documentation (especially the *JavaScript
object literals* section) and the Chart.js example.

Now, with that in mind, here's how you'd do the above *properly*:

```dart
@anonymous
@JS()
class Person {
  String name;
  int age;

  external Person({String name, int age});
}
```

Since `@anonymous` is declaring a normal JavaScript anonymous object, this version of
`Person` will survive being passed over the JS-and-Dart boundary. You can use basic types,
like `String`, `int`, and `List`.

Another thing to note: *you cannot put maps in your objects if you plan to use them from the
JS side*. For instance, this won't work:

```dart
// DON'T DO THIS

@anonymous
@JS()
class Things {
  Map<String, String> things;

  external Person({Map<String, String> things});
}
```

Instead, you need to use `package:js/js_util.dart`, whose documentation is (confusingly!)
available under the name
[`dart:js_util`](https://api.dartlang.org/stable/dart-js_util/dart-js_util-library.html),
and the `mapToJs` helper function. Here's a concrete example:

```dart
@anonymous
@JS()
class Things {
  // Use 'dynamic' to reference JavaScript objects.
  dynamic things;

  external Person({dynamic things});
}

// ...

// Now we want to create a new instance of Things
Things(
  things: mapToJs({
    'thing1': 'value',
    'thing2': 'value',
  }),
)
```

`mapToJs` converts a Dart map to a standard JavaScript object. After this, use the `js_util`
functions to access the properties on the object (such as `getProperty` and `setProperty`).

All this seems rather complex, but once you've got it down, you'll be passing objects around
in no time!!

<div id="events"></div>

## Emitting and listening to events

Of course, VueDart already supports the standard Vue way of listening to events:
`<my-component @event="callback">`. However, instead of using `$emit`, `$on`, `$off`,
and `$once`, VueDart provides a type-safe event API that uses Dart's own `Stream` system.

Let's say we're creating a `TimeClickedButton` that emits the time the button was clicked along
with the event. First, we need a `VueEventSpec`:

```dart
@VueComponent(template: '<button @click="click">Click me!</button>')
class TimeClickedButton extends VueComponentBase {
  static final buttonClicked = VueEventSpec<int>('button-clicked');
}
```

`int` is the type of the data being passed along with the event, and `button-clicked` is the
event name.

Now, we also need a `VueEventSink` and a `VueEventStream`:

```dart
@VueComponent(template: '<button @click="click">Click me!</button>')
class TimeClickedButton extends VueComponentBase {
  static final buttonClicked = VueEventSpec<int>('button-clicked');

  VueEventSink<int> buttonClickedSink;
  VueEventStream<int> buttonClickedStream;

  @override
  void lifecycleCreated() {
    buttonClickedSink = buttonClicked.createSink(this);
    buttonClickedStream = buttonClickedStream.createStream(this);
  }
}
```

The `VueEventSink` is used for emitting events, and the `VueEventStream` is used for listening
to them. They're subclasses of `StreamSink` and `Stream`, respectively.

Last of all, we need to emit some events:

```dart
@VueComponent(template: '<button @click="click">Click me!</button>')
class TimeClickedButton extends VueComponentBase {
  static final buttonClicked = VueEventSpec<int>('button-clicked');

  VueEventSink<int> buttonClickedSink;
  VueEventStream<int> buttonClickedStream;

  @override
  void lifecycleCreated() {
    buttonClickedSink = buttonClicked.createSink(this);
    buttonClickedStream = buttonClickedStream.createStream(this);
  }

  // Equivalent to $emit
  @method
  void click() => buttonClickedStream.add(DateTime.now().millisecondsSinceEpoch);
}
```

Listening for events is now easy and type-safe:

```dart
@VueComponent(template: '<time-clicked-button ref="button"></time-clicked-button>',
              components: [TimeClickedButton])
class AnotherComponent {
  @ref
  TimeClickedButton button;

  @override
  void lifecycleCreated() {
    // Listen to some events (equivalent to $on).
    var subscription = button.buttonClickedStream.listen((time) {
      print('Milliseconds since epoch when clicked: $time');
    });

    // Later on, cancel the subscription (equivalent to $off)
    subscription.cancel();

    // Listen to one event (equivalent to $once)
    button.buttonClickedStream.first.then((time) {
      print('Milliseconds since epoch when clicked: $time');
    });
  }
}
```

<div id="instance"></div>

## Miscellaneous instance methods

VueDart supports the `$nextTick`, `$forceUpdate`, and `$destroy` instance methods:

```dart
@VueComponent(template: '<<')
class MyComponent extends VueComponentBase {
  @method
  void click(event) {
    // $nextTick returns a Future
    $nextTick().then(() => {
      print('In \$nextTick callback!');
    });

    // $forceUpdate is simple
    $forceUpdate();
    // same for $destroy
    $destroy();
  }
}
```

<div id="render"></div>

## Render functions

**Note that render functions in VueDart right now are rather suboptimal from a Dart-ish-ness
perspective; they will eventually be improved, and this section will be rewritten.**

To declare a custom render function, you just leave out the `template:` value and override
the `render` method:

```dart
@VueComponent() // <-- no template!
class MyComponent extends VueComponentBase {
  @override
  void render(CreateElement createElement) =>
    // function body goes here
}
```

The hard part isn't *declaring* it though: it's *writing* it. Here's an example:

```dart
void render(CreateElement createElement) =>
  createElement('div', {'style': mapToJs({'color': 'red'})},
                'div contents here');
```

The main difference here in comparison to vanilla Vue is the `mapToJs` function: although
the outer maps are converted automatically, the inner maps aren't. In this case, the
`{'style': ...}` map is automatically converted, but the `{'color': 'red'}` map isn't.

Other than that, just note that all the return values here are `dynamic`, and if
you make a mistake, Dart's type system isn't going to be there to save you when it fails.
Beware!

<div id="ignore"></div>

## Ignoring elements

The VueDart equivalent of `Vue.config.ignoredElements` is `VueConfig.ignoredElements`:

```dart
void main() async {
  VueConfig.ignoredElements = ['my-element'];
  // ...
}
```
