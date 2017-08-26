import 'package:vue2/vue.dart';

import 'dart:async';

import 'package:vuedart_site/site_navbar.dart';
import 'package:vuedart_site/theme.dart';


@VueApp(el: '#app')
class App extends VueAppBase {
  App(): super();
}


App app;


Future main() async {
  await initVue();
  setupTheme();
  app = new App();
}
