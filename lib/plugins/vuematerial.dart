@JS()
library vue2.plugins.vuematerial;

import 'package:vue2/vue.dart';

import 'package:js/js.dart';
import 'package:js/js_util.dart';



@anonymous
@JS()
class Color {
  String color;
  dynamic hue;
  String textColor;

  external factory Color({String color, dynamic hue, String textColor});
}

@anonymous
@JS()
class ThemeSpec {
  dynamic primary, accent, warn, background;
  external factory ThemeSpec({dynamic primary, dynamic accent, dynamic warn,
                              dynamic background});
}


class VueMaterial extends VuePlugin {
  static void use() => VuePlugin.use('VueMaterial');

  static void registerPalette(String name, dynamic palette) =>
    VueMaterial._call('registerPalette', [name, palette]);
  static void registerTheme(String name, ThemeSpec spec) =>
    VueMaterial._call('registerTheme', [name, spec]);
  static void setCurrentTheme(String name) =>
    VueMaterial._call('setCurrentTheme', [name]);

  static dynamic _call(String meth, List args) =>
    callMethod(getProperty(getWindowProperty('Vue'), 'material'), meth, args);
}
