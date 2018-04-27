import 'dart:async';

import 'package:barback/barback.dart';
import 'package:initialize/transformer.dart';


class CustomInitializeTransformer extends InitializeTransformer {
  BarbackSettings _settings;

  CustomInitializeTransformer(this._settings): super([]);

  factory CustomInitializeTransformer.asPlugin(BarbackSettings settings) =>
    new CustomInitializeTransformer(settings);

  bool isPrimary(AssetId id) => id.extension == '.dart';

  Future apply(Transform transform) async {
    if (!_settings.configuration.containsKey('entry_points')) {
      transform.logger.error('An entry_points setting is required for VueDart');
      return new Future.value();
    }

    var entryPoints = _settings.configuration['entry_points'];

    if (!(entryPoints is List)) {
      transform.logger.error('entry_points setting must be a list');
    }

    if (entryPoints.contains(transform.primaryInput.id.path)) {
      await super.apply(transform);
    }

    return new Future.value();
  }
}
