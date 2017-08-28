import 'package:vue2/vue.dart';
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
