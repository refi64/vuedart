import 'package:vue2/vue.dart';

@VueComponent('show-name', template: '<<')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);

  @prop
  String name;
}
