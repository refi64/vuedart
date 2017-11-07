import 'dart:async';

import 'package:barback/barback.dart';
import 'package:html/parser.dart' show parse;
// import 'package:html/dom.dart';
import 'package:source_span/source_span.dart' show SourceFile;
import 'package:source_maps/refactor.dart';


class HtmlTransformer extends Transformer {
  final BarbackSettings _settings;
  final bool justRelativizePaths;

  HtmlTransformer.asPlugin(this._settings, {this.justRelativizePaths});

  String get allowedExtensions => '.html';

  Future apply(Transform transform) async {
    var primary = transform.primaryInput;
    var contents = await primary.readAsString();
    var rewriter = new TextEditTransaction(contents,
                                           new SourceFile.fromString(contents));

    var doc = parse(await primary.readAsString(), generateSpans: true);
    var body = doc.body;

    var isTemplate = !body.children.isEmpty &&
                     body.querySelector('template[vuedart]') != null;
    var isEntry = body.attributes.containsKey('vuedart');
    var isRelease = _settings.mode == BarbackMode.RELEASE;

    if (isTemplate) {
      if (isRelease) {
        transform.consumePrimary();
      }
    } else if (isEntry) {
      if (!justRelativizePaths) {
        var vuedartTag = body.attributeSpans['vuedart'];
        rewriter.edit(vuedartTag.start.offset, vuedartTag.end.offset, '');

        if (isRelease) {
          var vuescripts = doc.querySelectorAll(
                            r'script[src$="//unpkg.com/vue"], script[src$="vue.js"]');
          for (var vuescript in vuescripts) {
            var src = vuescript.attributes['src'];
            var pos = vuescript.attributeValueSpans['src'];

            if (src.endsWith('//unpkg.com/vue')) {
              src = 'https://unpkg.com/vue/dist/vue.js';
            }

            rewriter.edit(pos.start.offset, pos.end.offset,
                          src.replaceAll(new RegExp(r'vue\.js$'), 'vue.min.js'));
          }
        }
      }

      var dartscripts = doc.querySelectorAll(r'script[src$=".dart"]');
      for (var dartscript in dartscripts) {
        var src = dartscript.attributes['src'];
        var pos = dartscript.attributeValueSpans['src'];

        if (src.startsWith('//') || src.contains('://')) {
          // URI, e.g. http://, //unpkg.src.
          continue;
        }

        if (justRelativizePaths) {
          if (src.startsWith('/') && !src.startsWith('//')) {
            // Relativize the path.
            var prefix = '../' * primary.id.path.allMatches('/').length;
            rewriter.edit(pos.start.offset, pos.end.offset, prefix + src.substring(1));
          }
          continue;
        }

        assert(!src.startsWith('/'),
               'absolute path should have already been relativized');

        var init = src.replaceAll('.dart', '.initialize.dart');
        var asset = new AssetId(primary.id.package, '${primary.id.path}/../$init');
        if (await transform.hasInput(asset)) {
          rewriter.edit(pos.start.offset, pos.end.offset, init);
        }
      }

      var printer = rewriter.commit();
      printer.build(null);

      transform.addOutput(new Asset.fromString(primary.id, printer.text));
    } else {
      transform.addOutput(primary);
    }
  }
}
