import 'dart:async';

import 'package:vue/vue.dart';

import 'package:vdmc/vdmc.dart';

import 'package:vuedart_site/common.dart';
import 'package:vuedart_site/app_root.dart';


@VueApp(el: '#app', components: [AppRoot])
class App extends VueAppBase with MComponentsMixin {
}


App app;


Future main() async {
  setup();
  app = new App();
  app.create();
}
