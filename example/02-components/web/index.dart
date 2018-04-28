import 'package:vue/vue.dart';
import 'package:vuedart_example/show_name.dart';
import 'dart:async';

@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);

  @data
  String name = '';
}

App app;

Future main() async {
  app = new App();
}
