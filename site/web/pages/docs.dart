import 'package:vue/vue.dart';

import 'package:vuedart_site/site_navbar.dart';
import 'package:vuedart_site/docs_navlist.dart';
import 'package:vuedart_site/common.dart';

import 'dart:async';


@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);
}


App app;


Future main() async {
  setup();
  app = new App();
}
