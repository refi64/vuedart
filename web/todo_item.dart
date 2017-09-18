@JS()
library todo_item;

import 'package:js/js.dart';
import 'package:vue2/vue.dart';

import 'dart:html';


@anonymous
@JS()
class TodoEntry {
  external int get id;
  external String get text;

  external factory TodoEntry({int id, String text});
}

@VueComponent('test-component', template: '<p><slot></slot></p>')
class TestComponent extends VueComponentBase {
  TestComponent(context): super(context);
}

@VueMixin()
abstract class TodoMixin {
  @method
  String getTodoText(TodoEntry todo) => todo.text;
}

@VueComponent('todo-item', template: '<<', mixins: const [TodoMixin])
// @VueComponent('todo-item')
class TodoItem extends VueComponentBase with TodoMixin {
  TodoItem(context): super(context) { test = 'abc'; }

  @override
  void mounted() {
    print(li.runtimeType);
    print(tstcomp.runtimeType);
  }

  // @override
  // dynamic render(CreateElement createElement) =>
  //   createElement('li', {'style': mapToJs({'color': 'red'})},
  //                       getTodoText(todo) + ' ' + test);

  @ref
  LIElement li;
  @ref
  TestComponent tstcomp;

  @prop
  TodoEntry todo;

  // @method
  // String getTodoText(TodoEntry todo) => todo.text;

  @computed
  String get test => 'test';
  @computed
  set test(String value) { print('setter called: $value'); }
}
