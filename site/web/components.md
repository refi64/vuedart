# Components

<div id="component"></div>

## Defining a component

Unfortunately, as awesome as our example app is, it's kinda messy. You probably don't want
this much stuff in one place. Therefore, we're going to move out displaying the name into
its own component, `show-name`.

Toss this in `lib/show_name.dart`:

```dart
import 'package:vue/vue.dart';


@VueComponent(template: '<p>Your name is: Bob</p>')
class ShowName extends VueComponentBase {
}
```

Also, change `index.dart`:

```dart
import 'package:vuedart_example/show_name.dart';  // <-- This imports your component

@VueApp(el: '#app', components: [ShowName])  // <-- Use the component here
class App // ...
```

and `index.html`:

```html
<body>
  <div id="app">
    <input v-model="name">
    <show-name></show-name>
  </div>
</body>
```

Now refresh your browser page. You should see it now say, *Your name is Bob*.

Let's take a few steps back. What exactly is going on here?

- New components are defined using the *VueComponent* annotation and the *VueComponentBase*
  base class. You pass your template through the *template:* argument on the annotation
  (there's a better way, but we'll get to that later).
- The component name is given to `@VueApp`, just like `components:` does in Vue.

That being said, putting templates in the annotation string is just nasty. In vanilla Vue,
you can use webpack for stuff like this. Does VueDart have an alternative? *Yup!*

Change the *VueComponent* annotation in `show_name.dart` to read:

```dart
@VueComponent(template: '<<show_name.html')
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
@VueComponent(template: '<<')
```

and VueDart will automatically use the template in `show_name.html`.

<div id="props"></div>

## Declaring properties

Well, this component is a bit of a downgrade. Before, we could display *any* name; now
we're limited to Bob's. Let's try using some properties:

```dart
@VueComponent(template: '<<')
class ShowName extends VueComponentBase {
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
@VueComponent(template: '<<')
class ShowName extends VueComponentBase {
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
abstract class TodoMixin implements VueMixinRequirements {
  @method
  String capitalize(String thing) => thing.toUpperCase();
}
```

There are three important things about this:

- The `@VueMixin()` annotation defines a mixin. You can also use `components: [...]` just like
  on other VueDart annotations.
  mixin, otherwise you'll get incredibly bizarre analyzer errors.
- Mixins must not use other mixins!
- Mixins must be `abstract`.
- Mixins must have `implements VueMixinRequirements`.

Now you can use your mixin:

```dart
@VueComponent(template: '<<')
class ShowName extends VueComponentBase with TodoMixin {
  // ...
}
```

This looks exactly like a normal Dart mixin, except the `@VueMixin()` annotation from earlier
makes it a Vue mixin.

<div id="lifecycle"></div>

## Lifecycle callbacks

Lifecycle callbacks are dead simple in VueDart! They're just simple method overrides:

```dart
@VueComponent(template: '<pHello!</p>')
class MyComponent extends VueComponentBase {
  @override
  void lifecycleCreated() => print("created!");
  @override
  void lifecycleMounted() => print("mounted!");
  @override
  void lifecycleDestroyed() => print("destroyed!");
}
```

and so forth for all the other lifecycle callbacks.

<div id="refs"></div>

## Accessing refs

Take the following component:

```dart
@VueComponent(template: '<div ref="text">Hello!</div>')
class MyComponent extends VueComponentBase {
  @override
  void lifecycleMounted() {
    // How to access the div element?
  }
}
```

For this, you can use the `@ref` annotation:

```dart
import 'dart:html';  // to get DivElement

@VueComponent(template: '<div ref="text">Hello!</div>')
class MyComponent extends VueComponentBase {
  @ref
  DivElement text;

  @override
  void lifecycleMounted() => print(text.text);
}
```

Piece of cake, right? It's like declaring a normal attribute.

Accessing component refs is just as simple:

```dart
@VueComponent(template: '<div>Hello!</div>')
class FirstComponent extends VueComponentBase {
  FirstComponent(context): super(context);

  @computed
  String get stuff => 'Hello!';
}

@VueComponent(template: '<first-component ref="first"></first-component>',
              components: [FirstComponent])
class SecondComponent extends VueComponentBase {
  @ref
  FirstComponent first;

  @override
  void lifecycleMounted() => print(first.stuff); // Hello!
}
```

If you need to get a ref by name instead of declaring it ahead-of-type, use the `$ref`
function:

```dart
void lifecycleMounted() {
  print($ref('first') as FirstComponent);
}
```

## Models

<div id="models"></div>

Vue 2.2's [model property](https://vuejs.org/v2/api/#model) is also supported, except it
instead uses the `@model` annotation.

```dart
@VueComponent(template: '<<')
class MyComponent extends VueComponentBase {
  @model(event: 'my-event')
  @prop
  bool myProp = false;
}
```

If you omit `event: ...`, it will default to *input* just like Vue itself.
