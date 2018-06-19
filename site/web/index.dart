import 'dart:async';

import 'package:vue/vue.dart';

import 'package:vuedart_site/common.dart';
import 'package:vuedart_site/site_navbar.dart';


@VueApp(el: '#app', components: [SiteNavbar])
class App extends VueAppBase {
}


App app;


Future main() async {
  setup();
  app = new App();
  app.create();
}
