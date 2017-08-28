import 'package:vue2/vue.dart';


@VueComponent('site-navbar', template: '<<')
class SiteNavbar extends VueComponentBase {
  SiteNavbar(context): super(context);

  @method
  String relUrl(String url) {
    print("$this ${nested != null ? '../$url' : url}");
    return nested != null ? '../$url' : url;
  }

  @prop
  dynamic nested;
}
