import 'package:vue2/vue.dart';
import 'todo_item.dart';

import 'dart:async';


@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);

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
  app = new App();
}
