import 'package:aspen_assets/aspen_assets.dart' as aspen;
import 'package:vue2/plugins/vuematerial.dart';


void setup() {
  aspen.loadGlobal('pygments-css');
  aspen.loadGlobal('vue-material-css');

  VueMaterial.use();
  VueMaterial.registerTheme('main', new MdTheme(
    primary: new MdColor(color: 'blue-grey', hue: 900),
    accent: new MdColor(color: 'blue', hue: 800),
    warn: 'red',
    background: 'white',
  ));
  VueMaterial.setCurrentTheme('main');
}
