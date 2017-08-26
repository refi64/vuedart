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
  TodoItem(context): super(context) {}

  @prop
  TodoEntry todo;
}
