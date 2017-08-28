{"title": "Intro"}

# Intro to VueDart

<div id="welcome"></div>

## Welcome

Welcome to the VueDart docs!

First off, note that this documentation assumes you already know how Vue works. If you
don't, then first check out the [official Vue guide](https://vuejs.org/v2/guide/), then
come back once you're done.

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
  App(): super();
}

Future main() async {
  await initVue();
  app = new App();
}
```

For those familiar with Vue, this should be rather self-explanatory. Here, *App* is the
equivalent of a global *Vue* instance. The *VueApp* annotation is where you declare which
element is your root. *initVue* does what you think it does.

Note that you need to override the *App* constructor and delegate to the superclass as
shown above: `App(): super()`.

Also, add this to `web/index.html`:

```html
<!DOCTYPE html>

<head>
  <title>VueDart first example</title>

  <script src="https://unpkg.com/vue"></script>

  <script type="application/dart" src="index.dart"></script>
  <script src="packages/browser/dart.js"></script>
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

Now's to build it! Make a `pubspec.yml` that looks like this:

```yaml
name: vuedart_example
version: 0.1.0
description: VueDart example app
author: Foo Bar
dependencies:
  browser: any
  initialize: any
  vue2: any
transformers:
  - vue2
  - initialize:
      entry_points:
        - web/index.html
```

Another note of interest: we also added a dependency on the *initialize* package: without
this, VueDart will flat-out not work! In addition, note the `entry_points` argument: your
VueDart `.html` files will need to go here.

Now that everything's been put together, run:

```bash
$ pub get
$ pub serve
```

and open your browser to `localhost:8080`. Congratulations, you just made your first
VueDart app!

<div id="data"></div>

## Declaring data and computed data

Of course, VueDart also supports normal data and computed data.
