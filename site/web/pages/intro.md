{"title": "Intro"}

# Intro to VueDart

<div id="welcome"></div>

## Welcome

Welcome to the VueDart docs!

First off, note that this documentation assumes you already know how Vue works. If you
don't, then first check out the [official Vue guide](https://vuejs.org/v2/guide/), then
come back once you're done.

Also, the examples shown in this documentation are available
[on GitHub](https://github.com/kirbyfan64/vuedart/tree/master/example).

<div id="first-steps"></div>

## First steps

Let's define a basic app with VueDart. Create a new directory:

```bash
$ mkdir my-project
$ cd my-project
```

Now create a new file `web/index.dart` and add this:

```dart
import 'package:vue2/vue.dart';
import 'dart:async';


@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);
}

App app;

Future main() async {
  await initVue();
  app = new App();
}
```

For those familiar with Vue, this should be rather self-explanatory. Only point of
interest is the whole factory+constructor dance; that's just boilerplate that will
hopefully be removed in the future version of VueDart. Here, *App* is the equivalent of
a global *Vue* instance. The *VueApp* annotation is where you declare which element is
your root. *initVue* does what you think it does: it initializes VueDart.

Also, add this to `web/index.html`:

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
    <p>My first Vue app!</p>
  </div>
</body>
```

Again, this should be pretty self-explanatory. Interesting things to note:

- VueDart will automatically change your Vue script imports to `vue.min.js` when you're
  building in release mode.
- Note the *vuedart* tag on the *body* element. This is pretty important, since that's
  VueDart uses to know if it's working with a Vue application.
- The `defer` tag is to prevent your Dart code from running before the page has finished
  loading.

Now's to build it! Make a `pubspec.yml` that looks like this:

```yaml
name: vuedart_example
version: 0.1.0
description: VueDart example app
author: Foo Bar
dependencies:
  browser: any
  vue2: any
transformers:
  - vue2:
      entry_points:
        - web/index.dart
```

Note that the `entry_points` argument should only contain your Vue-using web entry
points, not all your Dart files. **TL;DR:** all your Dart files that define `main` and
also setup a Vue app should be in `entry_points`.

Now that everything's been put together, run:

```bash
$ pub get
$ pub serve --web-compiler dartdevc
```

and open your browser to `localhost:8080`. Congratulations, you just made your first
VueDart app!

### Addendum #1: Why dartdevc?

As a quick side note, Dart has two different Dart-to-JavaScript compilers. dart2js, the
default, is designed for production use; it has powerful, awesome optimizations, but it's
also really slow. DDC, the Dart Dev Compiler, is designed for development like we're
doing; it has faster compile times and compiles down to readable ES6 code to make it
easier to debug.

### Addendum #2: Building for production

If you want to deploy a VueDart app in production, you'll want to run `pub build`; while
`pub serve` defaults to debug mode builds, `pub build` defaults to release mode. Also note
that, when doing a release build, your `vue` scripts from unpkg will automatically be
converted to `vue.min.js`.

<div id="data"></div>

## Declaring data

This app is cool and all...but it's not actually *doing* anything. Let's read in a name
and show it to the screen.

Modify your app class to look like so:

```dart
@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);

  @data
  String name;
}
```

This is how you declare data in VueDart: the *data* annotation. Just put it on an instance
variable, and VueDart will compile it into Vue data accesses. Now it's time to read in
a name in our HTML file:

```html
<body vuedart>
  <div id="app">
    <input v-model="name">
    <p>Your name is: {{name}}</p>
  </div>
</body>
```

Now run your app, enter a name, and watch the fireworks. (Not really, but actual fireworks
take far too much effort.)

<div id="methods"></div>

## Declaring methods

What if we want to, for instance, capitalize the name? One approach to this is to
use methods:

```dart
@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);

  @data
  String name;

  @method
  void capitalize(String str) => str.toUpperCase();
}
```

```html
<body vuedart>
  <div id="app">
    <input v-model="name">
    <p>Your name is: {{capitalize(name)}}</p>
  </div>
</body>
```

As you can see, declaring Vue methods is the same as declaring a normal method, except
for the `@method` decorator.


<div id="computed"></div>

## Declaring computed data

Of course, a better approach in this case would be to use computed data. Here's how
that's done in VueDart:

```dart
@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);

  @data
  String name;

  // The computed data
  @computed
  String get capitalizedName => name.toUpperCase();
}
```

```html
<body vuedart>
  <div id="app">
    <input v-model="name">
    <p>Your name is: {{capitalizedName}}</p>
  </div>
</body>
```

You can also define setters on computed properties using the normal Dart setter syntax:

```dart
@computed
void set capitalizedName(String newValue) { /* ... */ }
```
