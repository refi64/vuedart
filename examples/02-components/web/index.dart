import 'package:vue2/vue.dart';
import 'package:vuedart_example/show_name.dart';
import 'dart:async';

@VueApp(el: '#app')
class App extends VueAppBase {
  App(): super();

  @data
  String name;
}

App app;

Future main() async {
  await initVue();
  app = new App();
}
