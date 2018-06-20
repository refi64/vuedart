import 'package:vue/vue.dart';

import 'package:vdmc/vdmc.dart';


@VueComponent(template: '<<', components: [MTopAppBar, MTopAppBarFixedAdjust])
class SiteNavbar extends VueComponentBase {
  @method
  String relUrl(String url) => nested != null ? '../$url' : url;

  @prop
  dynamic nested;
}
