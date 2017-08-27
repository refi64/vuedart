import 'package:barback/barback.dart';


import 'transformers.dart';


class VueTransformerGroup extends TransformerGroup {
  final BarbackSettings _settings;

  VueTransformerGroup.asPlugin(this._settings):
    super([
      [new DartTransformer.asPlugin(_settings),
       new HtmlCleanupTransformer.asPlugin(_settings),
       new HtmlEntryTransformer.asPlugin(_settings)],
    ]);
}
