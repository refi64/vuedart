import 'dart:async';

import 'package:analyzer/analyzer.dart';
import 'package:barback/barback.dart';
import 'package:html/parser.dart' show parse;
// import 'package:html/dom.dart';
import 'package:source_span/source_span.dart' show SourceFile;
import 'package:source_maps/refactor.dart';



class AnnotationArgs {
  final List<Expression> positional;
  final Map<String, Expression> named;

  AnnotationArgs(this.positional, this.named);
}


class Prop {
  final String name;
  final TypeName type;
  final Expression initializer;

  Prop(this.name, this.type, this.initializer);
}


class Data {
  final String name;
  final Expression initializer;

  Data(this.name, this.initializer);
}


class DartTransformer extends Transformer {
  final BarbackSettings _settings;

  DartTransformer.asPlugin(this._settings);

  String get allowedExtensions => '.dart';

  Annotation _getAnn(AnnotatedNode node, List<String> annotations) {
    var it = node.metadata.where((ann) => annotations.contains(ann.name.name));
    return it.isNotEmpty ? it.first : null;
  }

  Annotation _getVueAnn(ClassDeclaration cls) => _getAnn(cls, ['VueApp', 'VueComponent']);
  bool _containsVueAnn(ClassDeclaration cls) => _getVueAnn(cls) != null;

  AnnotationArgs _getAnnArgs(Annotation ann) {
    var positional = <Expression>[];
    var named = <String, Expression>{};

    for (var arg in ann.arguments.arguments) {
      if (arg is NamedExpression) {
        named[arg.name.label.name] = arg.expression;
      } else {
        positional.add(arg);
      }
    }

    return new AnnotationArgs(positional, named);
  }

  String _initOrNull(AstNode node) => node?.toSource() ?? 'null';

  String _codegenProp(Prop prop) =>
    ''' '${prop.name}': new VueProp(() => true, ${_initOrNull(prop.initializer)}), ''';

  String _codegenData(Data data) =>
    ''' '${data.name}': ${_initOrNull(data.initializer)}, ''';

  Future apply(Transform transform) async {
    var primary = transform.primaryInput;
    var contents = await primary.readAsString();
    var rewriter = new TextEditTransaction(contents,
                                           new SourceFile.fromString(contents));
    CompilationUnit unit;

    try {
      unit = parseCompilationUnit(contents, name: primary.id.path,
                                            parseFunctionBodies: false);
    } catch (ex) {
      // Just ignore it; it will propagate to the Dart compiler anyway.
      transform.addOutput(primary);
      return new Future.value();
    }

    var classes = unit.declarations.where((d) => d is ClassDeclaration &&
                                                 _containsVueAnn(d))
                                          .map((d) => d as ClassDeclaration).toList();
    if (classes.isEmpty) {
      transform.addOutput(primary);
      return new Future.value();
    }

    var begin = unit.directives.isEmpty ? unit.offset : unit.directives.last.end;
    rewriter.edit(begin, begin, '''
import 'package:initialize/initialize.dart';
import 'dart:js';
    ''');

    var components = [];

    for (var cls in classes) {
      // rewriter.edit(cls.offset, cls.offset, '@anonymous\n@JS()\n');
      var ann = _getVueAnn(cls);
      var args = _getAnnArgs(ann);

      var props = [];
      var data = [];

      for (var member in cls.members) {
        if (member is FieldDeclaration) {
          var ann = _getAnn(member, ['prop', 'data']);
          if (ann == null) continue;

          var fields = member.fields;
          var type = fields.type;
          var typename = type.toSource();

          for (var decl in member.fields.variables) {
            var name = decl.name.name;
            rewriter.edit(fields.offset, fields.end+1, '''
$typename get $name => vuethis['$name'];
void set $name($typename value) => vuethis['$name'] = value;
              ''');

            switch (ann.name.name) {
            case 'prop':
              props.add(new Prop(name, type, decl.initializer));
              break;
            case 'data':
              data.add(new Data(name, decl.initializer));
              break;
            }
          }
        } else if (member is MethodDeclaration) {
          if (!member.isGetter && !member.isSetter) continue;
          var ann = _getAnn(member, ['computed']);
          if (ann == null) continue;

          print("$member");
        }
      }

      var opts = '''
  data: {${data.map(_codegenData).join('\n')}},
      ''';
      var code;

      if (ann.name.name == 'VueComponent') {
        components.add(cls);
        var template = (args.named['template'] as StringLiteral).stringValue;

        if (template.startsWith('<<')) {
          var relhtmlpath = template.substring(2);
          var htmlasset;

          if (relhtmlpath == '') {
            htmlasset = primary.id.changeExtension('.html');
          } else {
            htmlasset = new AssetId(primary.id.package,
                                    primary.id.path + '/../' + relhtmlpath);
          }

          if (await transform.hasInput(htmlasset)) {
            var doc = parse(await transform.readInputAsString(htmlasset));
            template = doc.body.children[0].innerHtml;
          }
        }

        code = '''
static VueComponentConstructor constructor = new VueComponentConstructor(
  name: '${(args.positional[0] as StringLiteral).stringValue}',
  creator: (JsObject context) => new ${cls.name.name}(context),
  template: r"""${template.replaceAll('"""', '\\"""')}""",
  props: {${props.map(_codegenProp).join('\n')}},
  $opts
);
        ''';
      } else {
        code = '''
@override
VueAppConstructor get constructor => new VueAppConstructor(
  el: ${args.named['el'].toSource()},
  $opts
);
        ''';
      }

      rewriter.edit(cls.end-2, cls.end-2, code);
    }

    rewriter.edit(unit.end, unit.end, '''
@initMethod
void vuedart_INTERNAL() {
${components.map((comp) =>
      "  VueComponentBase.register(${comp.name.name}.constructor);").join('\n')}
}
    ''');

    var printer = rewriter.commit();
    printer.build(null);
    // print(printer.text);
    transform.addOutput(new Asset.fromString(transform.primaryInput.id,
                                             printer.text));
    return new Future.value();
  }
}

class HtmlEntryTransformer extends Transformer {
  final BarbackSettings _settings;

  HtmlEntryTransformer.asPlugin(this._settings);

  String get allowedExtensions => '.html';

  Future apply(Transform transform) async {


    return new Future.value();
  }
}

class HtmlCleanupTransformer extends Transformer {
  final BarbackSettings _settings;

  HtmlCleanupTransformer.asPlugin(this._settings);

  String get allowedExtensions => '.html';

  Future apply(Transform transform) async {
    var doc = parse(await transform.primaryInput.readAsString());
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

      transform.addOutput(new Asset.fromString(transform.primaryInput.id,
                                               doc.outerHtml));
    } else {
      transform.addOutput(transform.primaryInput);
    }
  }
}
