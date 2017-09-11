import 'dart:async';

import 'package:barback/barback.dart';
import 'package:html/parser.dart' show parse;
// import 'package:html/dom.dart';
// import 'package:source_span/source_span.dart' show SourceFile;
// import 'package:source_maps/refactor.dart';


class HtmlTransformer extends Transformer {
  final BarbackSettings _settings;

  HtmlTransformer.asPlugin(this._settings);

  String get allowedExtensions => '.html';

  Future apply(Transform transform) async {
    var primary = transform.primaryInput;
    var doc = parse(await primary.readAsString());
    var children = doc.body.children;
    var isTemplate = !children.isEmpty && children[0].localName == 'template' &&
                     children[0].attributes.containsKey('vuedart');
    var isEntry = doc.body.attributes.containsKey('vuedart');
    var isRelease = _settings.mode == BarbackMode.RELEASE;

    if (isTemplate) {
      if (isRelease) {
        transform.consumePrimary();
      }
    } else if (isEntry) {
      doc.body.attributes.remove('vuedart');

      if (isRelease) {
        var vuescripts = doc.querySelectorAll('script[src="https://unpkg.com/vue"]');
        for (var vuescript in vuescripts) {
          vuescript.attributes['src'] = 'https://unpkg.com/vue/dist/vue.min.js';
        }
      }

      var dartscripts = doc.querySelectorAll('script[src\$=".dart"]');
      for (var dartscript in dartscripts) {
        var init = dartscript.attributes['src'].replaceAll('.dart', '.initialize.dart');
        if (init.startsWith('/') || init.contains('://'))
          continue;

        var asset = new AssetId(primary.id.package, primary.id.path + '/../' + init);
        if (await transform.hasInput(asset)) {
          dartscript.attributes['src'] = init;
        }
      }

      transform.addOutput(new Asset.fromString(transform.primaryInput.id,
                                               doc.outerHtml));
    } else {
      transform.addOutput(transform.primaryInput);
    }
  }
}
