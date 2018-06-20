import 'dart:async';

import 'package:vue/vue.dart';

import 'package:vdmc/vdmc.dart';

import 'package:vuedart_site/common.dart';
import 'package:vuedart_site/site_navbar.dart';


@VueApp(el: '#app', components: [SiteNavbar, MButton, MLayoutGrid, MLayoutGridCell,
                                 MLayoutGridInner, MTypography, MTypoHeadline])
class App extends VueAppBase {
}


App app;


Future main() async {
  setup();
  app = new App();
  app.create();
}
