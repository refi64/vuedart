import 'package:barback/barback.dart';


import 'transformers.dart';


class VueTransformerGroup extends TransformerGroup {
  final BarbackSettings _settings;

  VueTransformerGroup.asPlugin(this._settings):
    super([
      [new DartTransformer.asPlugin(_settings),
       new HtmlTransformer.asPlugin(_settings)],
    ]);
}
