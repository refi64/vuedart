@JS()
library todo_item;

import 'package:js/js.dart';
import 'package:vue/vue.dart';

import 'dart:html';


@anonymous
@JS()
class TodoEntry {
  external int get id;
  external String get text;

  external factory TodoEntry({int id, String text});
}

@VueComponent(template: '<p><slot></slot></p>')
class TestComponent extends VueComponentBase {
}

@VueMixin(components: const [TestComponent])
abstract class TodoMixin implements VueMixinRequirements {
  @method
  String getTodoText(TodoEntry todo) => todo.text;

  @computed
  String get todoMixinData => 'TodoMixin data!';
}

@VueComponent(template: '<<')
class TodoItem extends VueComponentBase with TodoMixin {
  @method
  String getTodoText2(TodoEntry todo) => todo.text;

  @override
  void lifecycleMounted() {
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

  @watch('test')
  void watchTest(String val) {
    print('watch $val');
  }

  @prop
  TodoEntry todo;

  @prop
  bool first = false;

  // @method
  // String getTodoText(TodoEntry todo) => todo.text;

  @data
  String test = 'test', test2 = 'test2';
  // @computed
  // String get test => 'test';
  // @computed
  // set test(String value) { print('setter called: $value'); }
}
