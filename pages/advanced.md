{"title": "Advanced topics"}

# Advanced topics

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

@VueComponent('show-name', template: '<p>{{person.name}} is {{person.age}}</p>')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);

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
new Things(
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

<div id="lifecycle"></div>

## Lifecycle callbacks

Luckily, lifecycle callbacks are much simpler! For starters, the `created` lifecycle
callback is just your constructor. For example:

```dart
@VueComponent('my-component', template: '<pHello!</p>')
class MyComponent extends VueComponentBase {
  MyComponent(context): super(context) {
    // This is the VueDart equivalent of the 'created' lifecycle callback
  }
}

@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context) {
    // Same here.
  }
}
```

The others are just method overrides:

```dart
@VueComponent('my-component', template: '<pHello!</p>')
class MyComponent extends VueComponentBase {
  MyComponent(context): super(context);

  @override
  void mounted() => print("mounted!");
  @override
  void destroyed() => print("destroyed!");
}
```

and so forth for all the other lifecycle callbacks.

<div id="refs"></div>

## Accessing refs

Take the following component:

```dart
@VueComponent('my-component', template: '<div ref="text">Hello!</div>')
class MyComponent extends VueComponentBase {
  MyComponent(context): super(context);

  @override
  void mounted() {
    // How to access the div element?
  }
}
```

For this, you can use the `@ref` annotation:

```dart
import 'dart:html'; // to get DivElement

@VueComponent('my-component', template: '<div ref="text">Hello!</div>')
class MyComponent extends VueComponentBase {
  MyComponent(context): super(context);

  @ref
  DivElement text;

  @override
  void mounted() => print(text.text);
}
```

Piece of cake, right? It's like declaring a normal attribute.

Accessing component refs is just as simple:

```dart
@VueComponent('first-component', template: '<div>Hello!</div>')
class FirstComponent extends VueComponentBase {
  FirstComponent(context): super(context);

  @computed
  String get stuff => 'Hello!';
}

@VueComponent('second-component',
              template: '<first-component ref="first"></first-component>')
class SecondComponent extends VueComponentBase {
  SecondComponent(context): super(context);

  @ref
  FirstComponent first;

  @override
  void mounted() => print(first.stuff); // Hello!
}
```

If you need to get a ref by name instead of declaring it ahead-of-type, use the `$ref`
function:

```dart
void mounted() {
  print($ref('first') as FirstComponent);
}
```

<div id="render"></div>

## Render functions

**Note that render functions in VueDart right now are rather suboptimal from a Dart-ish-ness
perspective; they will eventually be improved, and this section will be rewritten.**

To declare a custom render function, you just leave out the `template:` value and override
the `render` method:

```dart
@VueComponent('my-component') // <-- no template!
class MyComponent extends VueComponentBase {
  MyComponent(context): super(context);

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
