import 'package:vue2/vue.dart';


@VueComponent('site-navbar', template: '<<')
class SiteNavbar extends VueComponentBase {
  SiteNavbar(context): super(context);

  @method
  String relUrl(String url) => nested != null ? '../$url' : url;

  @prop
  dynamic nested;
}
