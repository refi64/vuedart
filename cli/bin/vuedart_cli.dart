import 'package:args/command_runner.dart';
import 'package:ansicolor/ansicolor.dart';
import 'package:path/path.dart' as path;

import 'dart:io';

final TEMPLATE_README_MD = '''
# {{project}}

Enter your README contents here.
''';

final TEMPLATE_PUBSPEC = '''
name: {{project}}
author: {{author}}
version: 0.1.0
description: Project description goes here
dependencies:
  browser: any
  dart_to_js_script_rewriter: any
  vue2: ^0.3.0
transformers:
  - vue2:
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

final TEMPLATE_INDEX_DART = '''
import 'package:vue2/vue.dart';

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
import 'package:vue2/vue.dart';

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

AnsiPen errorPen = new AnsiPen()..red(),
        notePen = new AnsiPen()..cyan();

void note(String message) {
  print(notePen(message));
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
  }

  void run() {
    if (argResults.rest.length != 1) {
      print('A project directory is required!');
      exit(1);
    }

    var outdirPath = argResults.rest[0];
    var outdir = new Directory(outdirPath);
    var name = argResults['name'] ?? path.basename(outdirPath);
    var author = argResults['author'];

    var replacements = {'project': name, 'author': author};

    if (outdir.existsSync()) {
      error('Directory $outdirPath already exists!');
    }

    note('Creating $outdirPath...');

    outdir.createSync();
    Directory.current = outdir;

    for (var templatePath in TEMPLATES.keys) {
      note('Writing $templatePath...');

      var templateText = TEMPLATES[templatePath];
      var rootPath = path.dirname(templatePath);
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

void main(List<String> args) {
  new CommandRunner('vuedart', 'The VueDart CLI')
      ..addCommand(new CreateCommand())
      ..run(args);
}
