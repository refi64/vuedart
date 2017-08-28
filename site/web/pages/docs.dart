import 'package:vue2/vue.dart';

import 'package:vuedart_site/site_navbar.dart';
import 'package:vuedart_site/docs_navlist.dart';
import 'package:vuedart_site/common.dart';

import 'dart:async';
// import 'dart:html';


@VueApp(el: '#app')
class App extends VueAppBase {
  App(): super();

  // @computed
  // bool get isMobile => window.innerWidth <= 480;
}


App app;


Future main() async {
  await initVue();
  setupTheme();
  app = new App();
}
