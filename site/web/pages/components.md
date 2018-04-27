{"title": "Components"}

# Components

<div id="component"></div>

## Defining a component

Unfortunately, as awesome as our example app is, it's kinda messy. You probably don't want
this much stuff in one place. Therefore, we're going to move out displaying the name into
its own component, `show-name`.

Toss this in `lib/show_name.dart`:

```dart
import 'package:vue/vue.dart';


@VueComponent(name: 'show-name', template: '<p>Your name is: Bob</p>')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);
}
```

Also, add the following import to `index.dart`:

```dart
import 'package:vuedart_example/show_name.dart'; // <-- Component import goes here
```

and change `index.html` like so:

```html
<body vuedart>
  <div id="app">
    <input v-model="name">
    <show-name></show-name>
  </div>
</body>
```

Now refresh your browser page. You should see it now say, *Your name is Bob*.

But let's take a few steps back. What exactly is going on here?

- New components are defined using the *VueComponent* annotation and the *VueComponentBase*
  base class. You pass your template through the *template:* argument on the annotation
  (there's a better way, but we'll get to that later).
- As before, it's important to declare your constructor, except now it's taking a single
  argument, though it's still just passing it up a level.

That being said, putting templates in the annotation string is just nasty. In vanilla Vue,
you can use webpack for stuff like this. Does VueDart have an alternative? *Yup!*

Change the *VueComponent* annotation in `show_name.dart` to read:

```dart
@VueComponent('show-name', template: '<<show_name.html')
```

and create `lib/show_name.html` containing the following:

```html
<template vuedart>
  <p>Your name is: Bob</p>
</template>
```

The `<<show_name.html` syntax means *read show_name.html and use the template inside here*.
VueDart will read the file, extract the contents of the template element, and use that
for your template. However, this gets even better! Since your template is almost always
the same name as your Dart code (e.g. `show_name.dart` and `show_name.html`), VueDart
uses that as the default. Therefore, you can abbreviate all this to:

```dart
@VueComponent('show-name', template: '<<')
```

and VueDart will automatically use the template in `show_name.html`.

<div id="props"></div>

## Declaring properties

Well, this component is a bit of a downgrade. Before, we could display *any* name; now
we're limited to Bob's. Let's try using some properties:

```dart
@VueComponent(name: 'show-name', template: '<<')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);

  @prop
  String name;
}
```

```html
<template vuedart>
  <p>Your name is: {{name}}</p>
</template>
```

Props in VueDart are declared via the *prop* annotation, and the syntax is just like normal
Dart. You can also give a default value by doing `String name = "default name"`.

Now modify `index.html`:

```html
<body vuedart>
  <div id="app">
    <input v-model="name">
    <show-name :name="name"></show-name>
  </div>
</body>
```

Voila! We're back to the same code, but now it's better organized. Yaaay!!

(Yes, I left out the capitalization; that's an exercise for the reader!)

<div id="scoped"></div>

## Scoped styles

VueDart also supports scoped styles via
[scopify](https://pub.dartlang.org/packages/scopify). Here's how they work:

```dart
@VueComponent(name: 'show-name', template: '<<')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);

  @prop
  String name;
}
```

```html
<template vuedart>
  <p>Your name is: {{name}}</p>
</template>

<style scoped>
p { color: purple; }
</style>
```

The syntax for scoped styles closely resembles Vue's own single-file components.

If you want scoped styles to "bleed" into `v-html` elements other similar items (e.g.
jQuery plugins), you can add the *bleeds* attribute to your *style* element:

```html
<template vuedart>
  <div v-html="'<p>Inside v-html!</p>'"></div>
</template>

<style scoped bleeds>
p { color: purple; }
</style>
```

<div id="mixins"></div>

## Mixins

Mixins are easy to declare in VueDart. Take this example:

```dart
@VueMixin()
abstract class TodoMixin {
  @method
  String capitalize(String thing) => thing.toUpperCase();
}
```

There are three important things about this:

- The `@VueMixin()` annotation should go on *any* VueDart mixin, otherwise you'll get
  incredibly bizarre analyzer errors.
- Mixins must not use other mixins!
- Mixins must be `abstract`.

Now you can use your mixin:

```dart
@VueComponent(name: 'show-name', template: '<<', mixins: const [TodoMixin])
class ShowName extends VueComponentBase with TodoMixin {
  // ...
}
```

Note that the only difference between using a standard Dart mixin and a VueDart mixin is
the extra `mixins:` argument to `@VueComponent`.

<div id="lifecycle"></div>

## Lifecycle callbacks

Lifecycle callbacks are dead simple in VueDart! For starters, the `created` lifecycle
callback is just your constructor. For example:

```dart
@VueComponent(name: 'my-component', template: '<pHello!</p>')
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
@VueComponent(name: 'my-component', template: '<pHello!</p>')
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
@VueComponent(name: 'my-component', template: '<div ref="text">Hello!</div>')
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

@VueComponent(name: 'my-component', template: '<div ref="text">Hello!</div>')
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
