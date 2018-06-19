import 'package:vue/vue.dart';


@VueComponent(template: '<<')
class SiteNavbar extends VueComponentBase {
  @method
  String relUrl(String url) => nested != null ? '../$url' : url;

  @prop
  dynamic nested;
}
