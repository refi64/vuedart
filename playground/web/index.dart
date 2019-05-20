import 'package:vue/vue.dart';
import 'package:vue/plugins/vue_router.dart';
import 'package:vue_playground/todo_item.dart';
// import 'package:vue_playground/todo_item.dart' deferred as todo_item;

import 'dart:async';
import 'dart:html';


@vuedart
@AutoTemplate('<p>todo item #{{id}} <router-view></router-view></p>')
class SingleItem extends Vue with VueRouterMixin {
  @computed
  int get id => int.parse($route.params['id']);
}


@vuedart
@AutoTemplate('<p>todo item #{{id}} INFO</p>')
class SingleItemInfo extends Vue with VueRouterMixin {
  @computed
  int get id => int.parse($route.params['id']);
}


@vuedart
@AutoTemplate('''
  <div>
    <input v-model="checkedModel" type="checkbox"/>
    <button @click="reset">Reset</button>
  </div>
''')
class CheckBox extends Vue {
  static const _EVENT = 'check-status-changed';
  static final checkStatusChanged = VueEventSpec<bool>(CheckBox._EVENT);
  VueEventSink<bool> checkStatusChangedSink;
  VueEventStream<bool> checkStatusChangedStream;

  @override
  void created() {
    checkStatusChangedSink = checkStatusChanged.createSink(this);
    checkStatusChangedStream = checkStatusChanged.createStream(this);

    checkStatusChangedStream.listen((bool checked) => print('checked is now $checked'));
  }


  @model(event: CheckBox._EVENT)
  // @model()
  @prop
  bool checked = false;

  @computed
  bool get checkedModel => checked;
  @computed
  set checkedModel(bool value) => checkStatusChangedSink.add(value);

  @method
  void reset() => checkedModel = false;
}


@vuedart
class App extends Vue with VueRouterMixin, TodoMixin {
  // TODO: async
  final components = <Vue>[CheckBox(), TodoItem()];

  @override
  void mounted() {
    print('mounted!');
    $nextTick().then((_) {
      print('nextTick called');
    });
  }

  @data
  bool checked = false;

  @data
  List groceryList = [
    TodoEntry(id: 0, text: 'Vegetables'),
    TodoEntry(id: 1, text: 'Cheese'),
    TodoEntry(id: 2, text: 'Whatever else humans are supposed to eat'),
  ];

  @method
  void click(MouseEvent evt) {
    $router.replace(VueRouterLocation(path: '/item/10')).onComplete.then((VueRouteInfo info) {
      print('replace onComplete: ${info.params}');
    });
  }
}


Future main() async {
  final router = VueRouter(routes: [
    VueRoute(path: '/item/:id', component: SingleItem(), children: [
      VueRoute(path: 'info', component: SingleItemInfo()),
    ]),
    VueRoute(path: '/singleitem/:id', components: {
      'single': SingleItem(),
    }),
  ]);

  final app = VueApp.create(App(), options: [router]);
  app.mount('#app');
}
