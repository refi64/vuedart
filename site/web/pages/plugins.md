{"title": "Working with plugins"}

# Working with plugins

<div id="work"></div>

## How do plugins work in VueDart?

As of right now, you can't easily define bindings to Vue plugins; support for many of
them needs to be embedded into VueDart itself. (Generic support is a planned feature.) In
the meantime, VueDart contains support for some commonly used Vue plugins.

Note that for all of the below plugins, you still need to manually load their
corresponding assets, e.g.:

```html
<script src="https://unpkg.com/vue-material"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-material/dist/vue-material.css">
```

<div id="vuematerial"></div>

## VueMaterial

Here's a pretty thorough example:

```dart
import 'vue2/vue.dart';
import 'vue2/plugins/vuematerial.dart';


@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);
}


App app;


Future main() async {
  await initVue();

  // Equivalent to Vue.use(VueMaterial)
  VueMaterial.use();

  // Equivalent to Vue.material.registerTheme
  VueMaterial.registerTheme('main', new MdTheme(
    // Simple color names.
    primary: 'indigo',
    // You can give hues, too.
    accent: new MdColor(color: 'blue', hue: 800),
    warn: 'red',
    background: 'white',
  ));

  // Equivalent to Vue.material.setCurrentTheme
  VueMaterial.setCurrentTheme('main');

  app = new App();
}
```

For menus, dialogs, sidenavs, and snackbars, you can use the `Md*` types:

```dart
@VueComponent('my-component', template: '<<')
class MyComponent extends VueComponentBase {
  MyComponent(context): super(context);

  // Dialog ref.
  @ref
  MdDialog dialog;
  // Sidenav ref.
  @ref
  MdSidenav sidenav;

  // and so forth...

  // example usage:

  void mounted() {
    dialog.open();
    sidenav.toggle();
  }
}
```
