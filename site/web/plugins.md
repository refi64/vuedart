# Working with plugins

<div id="work"></div>

## How do plugins work in VueDart?

As of right now, you can't easily define bindings to Vue plugins; support for many of
them needs to be embedded into VueDart itself. (Generic support is a planned feature.) In
the meantime, VueDart contains support for some commonly used Vue plugins.

Note that for all of the below plugins, you still need to manually load their
corresponding assets, [preferably using Aspen](advanced.html#assets).

<div id="app-options"></div>

## Passing options to the Vue constructor

In many JS plugins, options need to be passed to the `Vue({...})` constructor. In order
to accomplish this in VueDart, derive your plugin class from `VueAppOptions` and pass it to
`VueAppBase.create`:

```dart
import 'package:vue/vue.dart';

class MyPlugin extends VuePlugin implements VueAppOptions {
  static void use() => VuePlugin.use('my-plugin-name');

  // These options will be passed to the Vue constructor.
  Map<String, dynamic> get appOptions => {
    'some-option': 'some-value'
  };
}
```

<div id="vue-router"></div>

## VueRouter

```dart
import 'package:vue/vue.dart';
import 'package:vue/plugins/vue_router.dart';


// Define some components to be used in the router
@VueComponent(template: '''<p>vue-router demo! Id is: {{id}}</p>
                           <router-view></router-view>''')
class RootComponent extends VueComponentBase with VueRouterMixin {
  // Params can be accessed just like in the JS world.
  @computed
  int get id => $route.params['id'];
}

@VueComponent(template: '<p>child component!</p>')
class ChildComponent extends VueComponentBase with VueRouterMixin {
}


@VueApp(el: '#app')
class App extends VueAppBase {
}


App app;


Future main() async {
  // Here is an example router. This should look quite close to the official VueRouter,
  // except for the extra type constructors.
  final router = VueRouter(routes: [
    VueRoute(path: '/item/:id', component: RootComponent(), children: [
      // Nested children work
      VueRoute(path: 'info', component: ChildComponent()),
    ]),
    // As do named views:
    VueRoute(path: '/named-view/:id', components: {
      'root': RootComponent(),
    }),
  ]);

  app = App();
  // Note that we're passing the router to the options: argument.
  app.create(options: [router]);
}
```

<div id="vuematerial"></div>

## VueMaterial

**Note:** The VueMaterial API here is going to eventually be superceded by
[vdmc](https://github.com/kirbyfan64/vdmc), a VueDart wrapper over
[Material Components Vue](https://matsp.github.io/material-components-vue/), which is in turn a
Vue wrapper over Google's official
[Material Components for Web](https://github.com/material-components/material-components-web).
This change will likely be complete by either VueDart 0.4.1 or 0.5, pending a new revamp of
Aspen.

Note that this is only for VueMaterial 0.7, not 0.8.

Here's a pretty thorough example:

```dart
import 'package:vue/vue.dart';
import 'package:vue/plugins/vuematerial_legacy.dart';


@VueApp(el: '#app')
class App extends VueAppBase {
}


App app;


void main() {
  // Equivalent to Vue.use(VueMaterial)
  VueMaterial.use();

  // Equivalent to Vue.material.registerTheme
  VueMaterial.registerTheme('main', MdTheme(
    // Simple color names.
    primary: 'indigo',
    // You can give hues, too.
    accent: MdColor(color: 'blue', hue: 800),
    warn: 'red',
    background: 'white',
  ));

  // Equivalent to Vue.material.setCurrentTheme
  VueMaterial.setCurrentTheme('main');

  app = App();
  app.create();
}
```

For menus, dialogs, sidenavs, and snackbars, you can use the `Md*` types:

```dart
@VueComponent(name: 'my-component', template: '<<')
class MyComponent extends VueComponentBase {
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
