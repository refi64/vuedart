import 'package:vue2/plugins/vuematerial.dart';


void setup() {
  VueMaterial.use();
  VueMaterial.registerTheme('main', new ThemeSpec(
    primary: new Color(color: 'blue-grey', hue: 900),
    accent: new Color(color: 'blue', hue: 800),
    warn: 'red',
    background: 'white',
  ));
  VueMaterial.setCurrentTheme('main');
}
