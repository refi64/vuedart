import 'package:vue2/vue.dart';
import 'package:vue2/plugins/vue_router.dart';
import 'todo_item.dart';

import 'dart:async';


@VueComponent(template: '<p>todo item #{{id}} <router-view></router-view></p>')
class SingleItem extends VueComponentBase with VueRouterMixin {
  SingleItem(context): super(context);

  @computed
  int get id => $route.params['id'];
}


@VueComponent(template: '<p>todo item #{{id}} INFO</p>')
class SingleItemInfo extends VueComponentBase with VueRouterMixin {
  SingleItemInfo(context): super(context);

  @computed
  int get id => $route.params['id'];
}


@VueApp(el: '#app')
class App extends VueAppBase {
  factory App({router}) => VueAppBase.create((context) => new App._(context),
                                             router: router);
  App._(context): super(context);

  @override
  void mounted() {
    print('mounted!');
    $nextTick().then((_) {
      print('nextTick called');
    });
  }

  @data
  List<TodoEntry> groceryList = <TodoEntry>[
    new TodoEntry(id: 0, text: 'Vegetables'),
    new TodoEntry(id: 1, text: 'Cheese'),
    new TodoEntry(id: 2, text: 'Whatever else humans are supposed to eat'),
  ];
}


App app;


Future main() async {
  await initVue();

  final router = new VueRouter(routes: [
    new VueRoute(path: '/item/:id', component: #SingleItem, children: [
      new VueRoute(path: 'info', component: #SingleItemInfo),
    ]),
    new VueRoute(path: '/singleitem/:id', components: {
      'single': #SingleItem,
    }),
  ]);
  app = new App(router: router);
}
