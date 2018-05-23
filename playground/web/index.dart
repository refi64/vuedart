import 'package:vue/vue.dart';
import 'package:vue/plugins/vue_router.dart';
import 'package:vue_playground/todo_item.dart';

import 'dart:async';
import 'dart:html';


@VueComponent(template: '<p>todo item #{{id}} <router-view></router-view></p>')
class SingleItem extends VueComponentBase with VueRouterMixin {
  SingleItem(context): super(context);

  static final constructor = null;

  @computed
  int get id => int.parse($route.params['id']);
}


@VueComponent(template: '<p>todo item #{{id}} INFO</p>')
class SingleItemInfo extends VueComponentBase with VueRouterMixin {
  SingleItemInfo(context): super(context);

  static final constructor = null;

  @computed
  int get id => int.parse($route.params['id']);
}


@VueApp(el: '#app', components: const [TodoItem])
class App extends VueAppBase with VueRouterMixin {
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

  @method
  void click(MouseEvent evt) {
    $router.replace(new VueRouterLocation(path: '/item/10')).onComplete.then((VueRouteInfo info) {
      print('replace onComplete: ${info.params}');
    });
  }
}


App app;


Future main() async {
  final router = new VueRouter(routes: [
    new VueRoute(path: '/item/:id', component: SingleItem.constructor, children: [
      new VueRoute(path: 'info', component: SingleItemInfo.constructor),
    ]),
    new VueRoute(path: '/singleitem/:id', components: {
      'single': SingleItem.constructor,
    }),
  ]);
  app = new App(router: router);
}
