import 'dart:async';

import 'package:build/build.dart';
import 'package:markdown/markdown.dart';
import 'package:protic/protic.dart';


class MarkdownBuilder implements Builder {
  @override
  final buildExtensions = const {
    '.md': const ['.html']
  };

  @override
  Future build(BuildStep buildStep) async {
    var inputId = buildStep.inputId;
    var markdown = await buildStep.readAsString(inputId);
    var html = markdownToHtml(markdown, extensionSet: ExtensionSet.gitHubWeb);

    var firstLine = markdown.split('\n')[0];
    var title = firstLine.substring(2);

    var template = await buildStep.readAsString(new AssetId(inputId.package,
                                                            'web/template.html'));
    var result = compile(template, vars: {'title': title, 'content': html});

    for (var error in result.errors) {
      log.severe(error.toString());
    }

    await buildStep.writeAsString(inputId.changeExtension('.html'), result.code);
  }
}

Builder markdownBuilder(BuilderOptions options) => new MarkdownBuilder();
