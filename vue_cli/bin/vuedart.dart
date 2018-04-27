import 'package:args/command_runner.dart';
import 'package:ansicolor/ansicolor.dart';
import 'package:path/path.dart' as pathmod;
import 'package:source_span/source_span.dart' show SourceFile;
import 'package:source_maps/refactor.dart';

import 'dart:async';
import 'dart:io';
import 'dart:mirrors';

final TEMPLATE_README_MD = '''
# {{project}}

Enter your README contents here.
''';

final TEMPLATE_ASPEN_YML = '''
targets:
  default:
    outputs:
      default: web/vendor.js

    assets:
    - dev: node_modules/vue/dist/vue.js
      prod: node_modules/vue/dist/vue.min.js
''';

final TEMPLATE_PACKAGE_JSON = '''
{
  "name": "{{project}}",
  "version": "0.1.0",
  "dependencies": {
    "vue": "^2.0.0"
  }
}
''';

final TEMPLATE_PUBSPEC = '''
name: {{project}}
author: {{author}}
version: 0.1.0
description: Project description goes here
dependencies:
  browser: any
  dart_to_js_script_rewriter: any
  vue: ^0.3.0
transformers:
  - vue:
      entry_points:
        - web/index.dart
  - dart_to_js_script_rewriter
''';

final TEMPLATE_PUBSPEC_ASPEN = '''
name: {{project}}
author: {{author}}
version: 0.1.0
description: Project description goes here
dependencies:
  aspen_assets: ^0.2.0
  browser: any
  dart_to_js_script_rewriter: any
  vue: ^0.3.0
transformers:
  - vue:
      entry_points:
        - web/index.dart
  - dart_to_js_script_rewriter
''';

final TEMPLATE_INDEX_HTML = '''
<!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>

  <script src="https://unpkg.com/vue"></script>

  <script defer type="application/dart" src="index.dart"></script>
  <script defer src="packages/browser/dart.js"></script>
</head>

<body vuedart>
  <div id="app">
    <my-component></my-component>
  </div>
</body>
''';

final TEMPLATE_INDEX_HTML_ASPEN =
        TEMPLATE_INDEX_HTML.replaceAll('https://unpkg.com/vue', 'vendor.js');

final TEMPLATE_INDEX_DART = '''
import 'package:vue/vue.dart';

import 'dart:async';

import 'package:{{project}}/my_component.dart';

@VueApp(el: '#app')
class App extends VueAppBase {
  factory App() => VueAppBase.create((context) => new App._(context));
  App._(context): super(context);
}

App app;

Future main() async {
  await initVue();
  app = new App();
}
''';

final TEMPLATE_INDEX_DART_ASPEN = "import 'package:aspen_assets/aspen_assets.dart';\n" +
                                  TEMPLATE_INDEX_DART;

final TEMPLATE_MY_COMPONENT_HTML = '''
<template vuedart>
  <div id="parent">
    <span id="child">Hello, VueDart world!</span>
  </div>
</template>

<style scoped>
  #parent {
    text-align: center;
    width: 100%;
  }

  #child {
    border: solid 1px black;
    font-family: sans-serif;
    padding: 3px;
  }
</style>
''';

final TEMPLATE_MY_COMPONENT_DART = '''
import 'package:vue/vue.dart';

@VueComponent(name: 'my-component', template: '<<')
class MyComponent extends VueComponentBase {
  MyComponent(context): super(context);
}

''';

final TEMPLATES = {
  'README.md': TEMPLATE_README_MD,
  'pubspec.yaml': TEMPLATE_PUBSPEC,
  'web/index.html': TEMPLATE_INDEX_HTML,
  'web/index.dart': TEMPLATE_INDEX_DART,
  'lib/my_component.html': TEMPLATE_MY_COMPONENT_HTML,
  'lib/my_component.dart': TEMPLATE_MY_COMPONENT_DART,
};

final ASPEN_TEMPLATES = {
  'README.md': TEMPLATE_README_MD,
  'aspen.yml': TEMPLATE_ASPEN_YML,
  'package.json': TEMPLATE_PACKAGE_JSON,
  'pubspec.yaml': TEMPLATE_PUBSPEC_ASPEN,
  'web/index.html': TEMPLATE_INDEX_HTML_ASPEN,
  'web/index.dart': TEMPLATE_INDEX_DART_ASPEN,
  'lib/my_component.html': TEMPLATE_MY_COMPONENT_HTML,
  'lib/my_component.dart': TEMPLATE_MY_COMPONENT_DART,
};

AnsiPen errorPen = new AnsiPen()..red(),
        warnPen = new AnsiPen()..magenta(),
        notePen = new AnsiPen()..cyan();

void note(String message) {
  print(notePen(message));
}

void warn(String message) {
  print(warnPen(message));
}

void error(String message) {
  print(errorPen(message));
  exit(1);
}

class CreateCommand extends Command {
  final name = 'create';
  final description = 'Create a new VueDart project';

  CreateCommand() {
    argParser.addOption('author', help: 'The author to use for the template',
                        defaultsTo: 'the author');
    argParser.addOption('name', help: 'The project name');
    argParser.addFlag('aspen',
                      help: 'Use Aspen + package.json instead of a CDN for loading Vue');
  }

  void run() {
    if (argResults.rest.length != 1) {
      print('A project directory is required!');
      exit(1);
    }

    var outdirPath = argResults.rest[0];
    var outdir = new Directory(outdirPath);
    var name = argResults['name'] ?? pathmod.basename(outdirPath);
    var author = argResults['author'];

    var replacements = {'project': name, 'author': author};

    if (outdir.existsSync()) {
      error('Directory $outdirPath already exists!');
    }

    note('Creating $outdirPath...');

    outdir.createSync();
    Directory.current = outdir;
    var templates = argResults['aspen'] ? ASPEN_TEMPLATES : TEMPLATES;

    for (var templatePath in templates.keys) {
      note('Writing $templatePath...');

      var templateText = templates[templatePath];
      var rootPath = pathmod.dirname(templatePath);
      var root = new Directory(rootPath);

      if (!root.existsSync()) {
        root.createSync();
      }

      for (var replacementKey in replacements.keys) {
        var replacementValue = replacements[replacementKey];
        templateText = templateText.replaceAll('{{$replacementKey}}',
                                               replacementValue);
      }

      new File(templatePath).writeAsStringSync(templateText);
    }

    note('Done!');
  }
}

class MigrateCommand extends Command {
  final name = 'migrate';
  final description = 'Migrate your code between VueDart releases';

  MigrateCommand() {
    argParser.addOption('source', help: 'The source version', defaultsTo: '0.3');
    argParser.addOption('target', help: 'The target version', defaultsTo: '0.4');
  }

  void explicitEntryPoints(Map<String, String> sources,
                           Map<String, TextEditTransaction> rewriters) {
    var entryPoints = [];

    var pubspec = sources['pubspec.yaml'];
    if (pubspec == null) {
      warn('    No pubspec.yaml found; skipping.');
      return;
    } else if (pubspec.contains('entry_points:')) {
      warn('  pubspec.yaml already contains entry_points; skipping.');
      return;
    }

    for (var path in sources.keys) {
      if (!path.endsWith('.dart')) continue;
      var source = sources[path];

      if (source.contains('main()') &&
          (source.contains('initVue') || source.contains('vue2/vue') ||
           source.contains('@VueApp'))) {
        entryPoints.add(path);
      }
    }

    var insertPoint = pubspec.indexOf('- vue2');
    if (insertPoint == -1) {
      warn('  pubspec.yaml does not contain vue2 transformer; skipping.');
      return;
    }

    var indent = 0, indentPoint = insertPoint - 1;
    while (indentPoint > 0 && pubspec[indentPoint] == ' ') {
      indent++;
      indentPoint--;
    }

    var builder = new StringBuffer();
    builder.writeln("${' ' * (indent + 4)}entry_points:");
    for (var entryPoint in entryPoints) {
      builder.writeln("${' ' * (indent + 6)}- $entryPoint");
    }

    rewriters['pubspec.yaml'].edit(insertPoint + 7, insertPoint + 7, builder.toString());
  }

  void rewriteComponentAnnotations(Map<String, String> sources,
                                   Map<String, TextEditTransaction> rewriters) {
    var re = new RegExp('@VueComponent\\s*\\(\\s*([\'"])');

    for (var path in sources.keys) {
      if (!path.endsWith('.dart')) continue;
      var source = sources[path];
      var rewriter = rewriters[path];

      for (var match in re.allMatches(source)) {
        var beginOffset = match[0].indexOf(match[1]);
        var offset = match.start + beginOffset;
        rewriter.edit(offset, offset, 'name: ');
      }
    }
  }

  void renameVue2ToVue(Map<String, String> sources,
                       Map<String, TextEditTransaction> rewriters) {
    var importRe = new RegExp('\\bpackage:vue2/');
    var pubspecRe = new RegExp('\\bvue2:');

    for (var path in sources.keys) {
      var source = sources[path];
      var rewriter = rewriters[path];

      if (path.endsWith('.dart')) {
        for (var match in importRe.allMatches(source)) {
          rewriter.edit(match.start, match.end, 'package:vue/');
        }
      } else if (path == 'pubspec.yml' || path == 'pubspec.yaml') {
        for (var match in pubspecRe.allMatches(source)) {
          rewriter.edit(match.start, match.end, 'vue:');
        }
      }
    }
  }

  void run() {
    final VERSIONS = ['0.2', '0.3', '0.4'];

    final TRANSFORMS = {
      '0.2': [explicitEntryPoints, rewriteComponentAnnotations],
      '0.3': [renameVue2ToVue],
    };

    if (argResults.rest.length < 1) {
      error('A root directory is required!');
    }

    var root = argResults.rest[0];
    var state = <String, String>{};
    for (var path in argResults.rest.sublist(1)) {
      note('Loading $path...');
      var fullpath = pathmod.join(root, path);

      var file = new File(fullpath);
      if (!file.existsSync()) {
        error('$path does not exist!');
      }

      state[path] = new File(fullpath).readAsStringSync();
    }

    var source = argResults['source'];
    var target = argResults['target'];

    var sourceIndex = VERSIONS.indexOf(source);
    var targetIndex = VERSIONS.indexOf(target);

    if (sourceIndex == -1) {
      error('Invalid version $source');
    } else if (targetIndex == -1) {
      error('Invalid version $target');
    } else if (sourceIndex >= targetIndex) {
      error('Source version $source does not come before target version $target');
    }

    for (var versionIndex = sourceIndex; versionIndex < targetIndex; versionIndex++) {
      var version = VERSIONS[versionIndex];
      var nextVersion = VERSIONS[versionIndex + 1];
      var transforms = TRANSFORMS[version];

      note('Migrating from $version to $nextVersion...');

      for (var transform in transforms) {
        var name = MirrorSystem.getName(reflect(transform).function.simpleName);
        note('  - Running transform $name...');

        var rewriters = {};

        for (var path in state.keys) {
          var original = state[path];
          var source = new SourceFile.fromString(original);
          rewriters[path] = new TextEditTransaction(original, source);
        }

        transform(state, rewriters);

        for (var path in state.keys) {
          var printer = rewriters[path].commit();
          printer.build(null);
          state[path] = printer.text;
        }
      }
    }

    for (var path in state.keys) {
      note('Writing $path...');
      new File(pathmod.join(root, path)).writeAsStringSync(state[path]);
    }
  }
}

Future main(List<String> args) async {
  try {
    await new CommandRunner('vuedart', 'The VueDart CLI')
        ..addCommand(new CreateCommand())
        ..addCommand(new MigrateCommand())
        ..run(args);
  } on UsageException catch (ex) {
    print(ex);
  }

  return new Future.value();
}
