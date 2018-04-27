import 'package:barback/barback.dart';

import 'transformers/vue_transformer.dart';
import 'transformers/initialize_transformer.dart';
import 'transformers/html_transformer.dart';


class VueTransformerGroup extends TransformerGroup {
  final BarbackSettings _settings;

  VueTransformerGroup.asPlugin(this._settings):
    super([[new DartTransformer.asPlugin(_settings),
            new HtmlTransformer.asPlugin(_settings, justRelativizePaths: true)],
           [new CustomInitializeTransformer.asPlugin(_settings)],
           [new HtmlTransformer.asPlugin(_settings, justRelativizePaths: false)]]);
}
