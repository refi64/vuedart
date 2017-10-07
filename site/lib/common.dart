import 'package:vue2/plugins/vuematerial.dart';


void setup() {
  VueMaterial.use();
  VueMaterial.registerTheme('main', new MdTheme(
    primary: new MdColor(color: 'blue-grey', hue: 900),
    accent: new MdColor(color: 'blue', hue: 800),
    warn: 'red',
    background: 'white',
  ));
  VueMaterial.setCurrentTheme('main');
}
