import 'package:vue/vue.dart';

@VueComponent(template: '<<')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);

  @prop
  String name;
}
