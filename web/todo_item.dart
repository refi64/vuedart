@JS()
library todo_item;

import 'package:js/js.dart';
import 'package:vue2/vue.dart';


@anonymous
@JS()
class TodoEntry {
  external int get id;
  external String get text;

  external factory TodoEntry({int id, String text});
}

@VueComponent('todo-item', template: '<<')
class TodoItem extends VueComponentBase {
  TodoItem(context): super(context) { test = 'abc'; }

  @prop
  TodoEntry todo;

  @method
  String getTodoText(TodoItem item) => todo.text;

  @computed
  String get test => 'test';
  @computed
  set test(String value) { print('setter called: $value'); }
}
