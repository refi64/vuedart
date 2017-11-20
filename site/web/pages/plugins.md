{"title": "Working with plugins"}

# Working with plugins

<div id="work"></div>

## How do plugins work in VueDart?

As of right now, you can't easily define bindings to Vue plugins; support for many of
them needs to be embedded into VueDart itself. (Generic support is a planned feature.) In
the meantime, VueDart contains support for some commonly used Vue plugins.

Note that for all of the below plugins, you still need to manually load their
corresponding assets, [preferably using Aspen](/pages/advanced.html#assets).

<div id="vue-router"></div>

## VueRouter

```dart
import 'vue2/vue.dart';
import 'vue2/plugins/vue_router.dart';


// Define some components to be used in the router
@VueComponent(template: '''<p>vue-router demo! Id is: {{id}}</p>
                           <router-view></router-view>''')
class RootComponent extends VueComponentBase with VueRouterMixin {
  RootComponent(context): super(context);

  // Params can be accessed just like in the JS world.
  @computed
  int get id => $route.params['id']
}

@VueComponent(template: '<p>child component!</p>')
class ChildComponent extends VueComponentBase with VueRouterMixin {
  DemoComponent(context): super(context);
}


@VueApp(el: '#app')
class App extends VueAppBase {
  // When using vue-router, the factory here changes a bit. Notice that now we're passing
  // down a 'router' named parameter. You should be able to mostly just copy-paste this
  // without needing to worry about its workings.
  factory App({router}) => VueAppBase.create((context) => new App._(context),
                                             router: router);
  App._(context): super(context);
}


App app;


Future main() async {
  await initVue();

  // Here is an example router. This should look quite close to the official VueRouter,
  // except for the extra type constructors. Note that each component is prefixed with a
  // # sign: this is very important!
  final router = new VueRouter(routes: [
    new VueRoute(path: '/item/:id', component: #RootComponent, children: [
      // Nested children work
      new VueRoute(path: 'info', component: #ChildComponent),
    ]),
    // As do named views:
    new VueRoute(path: '/named-view/:id', components: {
      'root': #RootComponent,
    }),
  ]);
}
```

<div id="vuematerial"></div>

## VueMaterial

Note that this is only for VueMaterial 0.7, not 0.8 (yet!).

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
@VueComponent(name: 'my-component', template: '<<')
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
