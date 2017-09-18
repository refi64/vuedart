{"title": "Components"}

# Components

<div id="component"></div>

## Defining a component

Unfortunately, as awesome as our example app is, it's kinda messy. You probably don't want
this much stuff in one place. Therefore, we're going to move out displaying the name into
its own component, `show-name`.

Toss this in `lib/show_name.dart`:

```dart
import 'package:vue2/vue.dart';


@VueComponent('show-name', template: '<p>Your name is: Bob</p>')
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
@VueComponent('show-name', template: '<<')
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

<div id="methods"></div>

## Declaring methods

There are two more things I want to touch: methods and mixins. You know what methods are
already; the question is, how do you define them in VueDart? Try this in `show_name.dart`:

```dart
@VueComponent('show-name', template: '<<')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);

  @prop
  String name;

  @method
  String capitalize(String thing) => thing.toUpperCase();
}
```

As you can see, declaring Vue methods is the same as declaring a normal method, except
for the `@method` decorator.

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
@VueComponent('show-name', template: '<<', mixins: const [TodoMixin])
class ShowName extends VueComponentBase with TodoMixin {
  // ...
}
```

Note that the only difference between using a standard Dart mixin and a VueDart mixin is
the extra `mixins:` argument to `@VueComponent`.

<div id="final"></div>

## Final code

### `lib/show_name.dart`:

```dart
import 'package:vue2/vue.dart';

@VueComponent('show-name', template: '<<')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);

  @prop
  String name;
}
```

### `lib/show_name.html`:

```html
<template vuedart>
  <p>Your name is: {{name}}</p>
</template>
```

### `web/index.dart`:

```dart
import 'package:vue2/vue.dart';
import 'package:vuedart_example/show_name.dart';
import 'dart:async';

@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);

  @data
  String name;
}

App app;

Future main() async {
  await initVue();
  app = new App();
}
```

### `web/index.html`:

```html
<!DOCTYPE html>

<head>
  <title>VueDart first example</title>

  <script src="https://unpkg.com/vue"></script>

  <script defer type="application/dart" src="index.dart"></script>
  <script defer src="packages/browser/dart.js"></script>
</head>

<body vuedart>
  <div id="app">
    <input v-model="name">
    <show-name :name="name"></show-name>
  </div>
</body>
```

### `pubspec.yaml`:

```yaml
name: vuedart_example
version: 0.2.0
description: VueDart example app
author: Foo Bar
dependencies:
  browser: any
  initialize: any
  vue2: any
transformers:
  - vue2:
      entry_points:
        - web/index.dart
```
