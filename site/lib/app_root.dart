import 'dart:html';

import 'package:vue/vue.dart';

import 'package:vdmc/vdmc.dart';

import 'app_navlist.template.dart';


bool checkIsMobile() => document.body.clientWidth <= 480;
bool checkUseToggleNav() => document.body.clientWidth < 1200;


@VueComponent(template: '<<', components: [AppNavlist, MDrawerPersistent,
                                           MDrawerTemporary, MIcon, MLayoutGrid,
                                           MLayoutGridCell, MLayoutGridInner,
                                           MTypography, MTopAppBar,
                                           MTopAppBarFixedAdjust])
class AppRoot extends VueComponentBase {
  @override
  void lifecycleMounted() {
    window.onResize.listen((Event event) {
      isMobile = checkIsMobile();
      useToggleNav = checkUseToggleNav();
    });
  }

  @data
  bool isMobile = checkIsMobile();
  @data
  bool useToggleNav = checkUseToggleNav();
  @data
  bool navOpen = false;

  @method
  void toggleNav() {
    navOpen = !mobileNav.open;
  }

  @ref
  MDrawerTemporary mobileNav;
}
