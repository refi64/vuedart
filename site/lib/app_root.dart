import 'dart:html';

import 'package:vue/vue.dart';

import 'package:vdmc/vdmc.dart';

import 'app_navlist.vue.dart';


bool isMobile() => document.body.clientWidth <= 480;


@VueComponent(template: '<<', components: [AppNavlist, MDrawerPersistent,
                                           MDrawerTemporary, MIcon, MLayoutGrid,
                                           MLayoutGridCell, MLayoutGridInner,
                                           MTypography, MTopAppBar,
                                           MTopAppBarFixedAdjust])
class AppRoot extends VueComponentBase {
  @override
  void lifecycleMounted() {
    window.onResize.listen((Event event) {
      mobile = isMobile();
    });
  }

  @data
  bool mobile = isMobile();
  @data
  bool navOpen = false;

  @method
  void toggleNav() {
    navOpen = !mobileNav.open;
  }

  @method
  void navChanged(bool value) {
    navOpen = value;
  }

  @ref
  MDrawerTemporary mobileNav;
}
