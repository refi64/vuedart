import 'package:vue2/vue.dart';
import 'dart:async';


@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);

  @data
  String name;

  @computed
  String get capitalizedName => name.toUpperCase();
}

App app;

Future main() async {
  await initVue();
  app = new App();
}
