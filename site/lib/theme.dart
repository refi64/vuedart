@JS()
library vuedart_site;

import 'package:vue2/vue.dart';
import 'package:js/js.dart';


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


@JS('Vue.material.registerTheme')
external void registerTheme(String name, ThemeSpec spec);


void setupTheme() {
  registerTheme('default', new ThemeSpec(
    primary: new Color(color: 'blue-grey', hue: 900),
    accent: new Color(color: 'light-blue', hue: 800),
    warn: 'red',
    background: 'white',
  ));
}
