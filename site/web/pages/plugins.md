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
  VueMaterial.registerTheme('main', new ThemeSpec(
    // Simple color names.
    primary: 'indigo',
    // You can give hues, too.
    accent: new Color(color: 'blue', hue: 800),
    warn: 'red',
    background: 'white',
  ));

  // Equivalent to Vue.material.setCurrentTheme
  VueMaterial.setCurrentTheme('main');

  app = new App();
}
```
