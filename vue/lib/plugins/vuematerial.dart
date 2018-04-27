@JS()
library vue.plugins.vuematerial;

import 'package:vue/vue.dart';

import 'package:js/js.dart';
import 'package:js/js_util.dart';



@anonymous
@JS()
class MdColor {
  String color;
  dynamic hue;
  String textColor;

  external factory MdColor({String color, dynamic hue, String textColor});
}


@anonymous
@JS()
class MdTheme {
  dynamic primary, accent, warn, background;
  external factory MdTheme({dynamic primary, dynamic accent, dynamic warn,
                            dynamic background});
}


@anonymous
@JS()
class MdDialog {
  external void open();
  external void close();
}


@anonymous
@JS()
class MdMenu {
  external void open();
  external void close();
}


@anonymous
@JS()
class MdSidenav {
  external void open();
  external void close();
  external void toggle();
}


@anonymous
@JS()
class MdSnackbar {
  external void open();
  external void close();
  external void toggle();
}


class VueMaterial extends VuePlugin {
  static void use() => VuePlugin.use('VueMaterial');

  static void registerPalette(String name, dynamic palette) =>
    VueMaterial._call('registerPalette', [name, palette]);
  static void registerTheme(String name, MdTheme theme) =>
    VueMaterial._call('registerTheme', [name, theme]);
  static void setCurrentTheme(String name) =>
    VueMaterial._call('setCurrentTheme', [name]);

  static dynamic _call(String meth, List args) =>
    callMethod(getProperty(getWindowProperty('Vue'), 'material'), meth, args);
}
