import 'dart:async';

import 'package:analyzer/analyzer.dart';
import 'package:barback/barback.dart';
import 'package:csslib/parser.dart' as css;
import 'package:csslib/visitor.dart' show CssPrinter;
import 'package:html/parser.dart' as html;
import 'package:scopify/scopify.dart';
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


class Computed {
  final String name;
  bool hasSetter;

  Computed(this.name);
}


class Method {
  final String name;
  final List<FormalParameter> params;

  Method(this.name, this.params);
}


class Watcher {
  final String funcName, propName;
  final int nparams;
  final bool deep;

  Watcher(this.funcName, this.propName, this.nparams, this.deep);
}


class VueClassInfo {
  List<Prop> props = [];
  List<Data> data = [];
  Map<String, Computed> computed = {};
  List<Method> methods = [];
  List<Watcher> watchers = [];

  VueClassInfo();
}


class VuedartApplyTransform {
  final BarbackSettings settings;
  final Transform transform;

  SourceFile source;
  Asset primary;
  TextEditTransaction rewriter;
  CompilationUnit unit;

  List<ClassDeclaration> components = [];

  VuedartApplyTransform(this.settings, this.transform):
    primary = transform.primaryInput;

  void error(AstNode node, String error) {
    var span = source.span(node.offset, node.end);
    transform.logger.error(span.message(error), asset: primary.id);
  }

  Annotation getAnn(AnnotatedNode node, List<String> annotations) {
    var it = node.metadata.where((ann) => annotations.contains(ann.name.name));
    return it.isNotEmpty ? it.first : null;
  }

  Annotation getVueAnn(ClassDeclaration cls) =>
    getAnn(cls, ['VueApp', 'VueComponent', 'VueMixin']);
  bool containsVueAnn(ClassDeclaration cls) => getVueAnn(cls) != null;

  AnnotationArgs getAnnArgs(Annotation ann) {
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

  String computedGet(String name) => 'vuedart_INTERNAL_cg_$name';
  String computedSet(String name) => 'vuedart_INTERNAL_cs_$name';
  String method(String name) => 'vuedart_INTERAL_m_$name';

  String methodParams(List<FormalParameter> params) =>
    params.map((p) => p.identifier.name).join(', ');

  String sourceOrNull(AstNode node) => node?.toSource() ?? 'null';

  String codegenProp(Prop prop) =>
    ''' '${prop.name}': new VueProp((_) => true, ${sourceOrNull(prop.initializer)}), ''';

  String codegenData(Data data) =>
    ''' '${data.name}': ${sourceOrNull(data.initializer)}, ''';

  String codegenComputed(Computed computed) =>
    '''
  '${computed.name}': new VueComputed(
    (_) => vueGetObj(_).${computedGet(computed.name)}(),
    ${computed.hasSetter
      ? '(_,__) => vueGetObj(_).${computedSet(computed.name)}(__)'
      : 'null'}),
    ''';

  String codegenWatch(Watcher watcher) =>
    '''
  '${watcher.propName}': new VueWatcher(
    (_, _nv, _ov) => vueGetObj(_).${watcher.funcName}(
        ${['_nv', '_ov'].getRange(0, watcher.nparams).join(', ')}
      ),
    ${watcher.deep},
  ),
    ''';

  String codegenMethod(Method meth) =>
    '''
    '${meth.name}': (_, ${methodParams(meth.params)}) =>
              vueGetObj(_).${method(meth.name)}(${methodParams(meth.params)}),
    ''';

  String codegenString(String str) => 'r"""${str.replaceAll('"""', '\\"""')}"""';

  void processField(FieldDeclaration member, VueClassInfo info) {
    var ann = getAnn(member, ['prop', 'data', 'ref']);
    if (ann == null) return;

    var fields = member.fields;
    var type = fields.type;
    var typestring = type.toSource();

    for (var decl in member.fields.variables) {
      var name = decl.name.name;

      if (ann.name.name == 'ref') {
        rewriter.edit(fields.offset, fields.end+1, '''
$typestring get $name => \$ref('$name');
        ''');
      } else {
        rewriter.edit(fields.offset, fields.end+1, '''
$typestring get $name => vuedart_get('$name');
void set $name($typestring value) => vuedart_set('$name', value);
        ''');

        switch (ann.name.name) {
        case 'prop':
          info.props.add(new Prop(name, type, decl.initializer));
          break;
        case 'data':
          info.data.add(new Data(name, decl.initializer));
          break;
        }
      }
    }
  }

  void processMethod(MethodDeclaration member, VueClassInfo info) {
    var ann = getAnn(member, ['computed', 'method', 'watch']);
    if (ann == null) return;

    if ((ann.name.name == 'computed' && !member.isGetter && !member.isSetter) ||
        (ann.name.name != 'computed' && (member.isGetter || member.isSetter))) {
      error(member, 'annotation on invalid member');
      return;
    }

    var name = member.name.name;
    var typestring = member.returnType?.name?.name ?? '';

    if (member.isGetter) {
      rewriter.edit(member.offset, member.end, '''
$typestring ${computedGet(name)}() ${member.body.toSource()}
$typestring get $name => vuedart_get('$name');
      ''');
      info.computed[name] = new Computed(name);
    } else if (member.isSetter) {
      if (!info.computed.containsKey(name)) {
        error(member, 'computed setters must follow getters');
        return;
      }

      info.computed[name].hasSetter = true;
      rewriter.edit(member.offset, member.end, '''
$typestring ${computedSet(name)}${member.parameters.toSource()}
  ${member.body.toSource()}
$typestring set $name($typestring value) => vuedart_set('$name', value);
      ''');
    } else if (ann.name.name == 'watch') {
      if (member.parameters.parameters.length > 2) {
        error(member.parameters, 'watchers can only take up to 2 parameters');
        return;
      }

      var args = getAnnArgs(ann);
      var propName = (args.positional[0] as StringLiteral).stringValue;
      var deep = false;

      if (args.named.containsKey('deep') && args.named['deep'] is BooleanLiteral) {
        deep = (args.named['deep'] as BooleanLiteral).value;
      }

      rewriter.edit(member.offset, member.end, '''
$typestring $name${member.parameters.toSource()}
  ${member.body.toSource()}
        ''');
      info.watchers.add(new Watcher(name, propName, member.parameters.parameters.length,
                                    deep));
    } else if (ann.name.name == 'method') {
      rewriter.edit(member.offset, member.end, '''
$typestring ${method(name)}${member.parameters.toSource()}
  ${member.body.toSource()}
$typestring $name${member.parameters.toSource()} =>
  vuedart_get('$name')(${methodParams(member.parameters.parameters)});
        ''');
      info.methods.add(new Method(name, member.parameters.parameters));
    }
  }

  Future readTemplate(Annotation ann, String path) async {
    var relhtmlpath = path.substring(2);
    var htmlasset;

    if (relhtmlpath == '') {
      htmlasset = primary.id.changeExtension('.html');
    } else {
      htmlasset = new AssetId(primary.id.package,
                              primary.id.path + '/../' + relhtmlpath);
    }

    if (await transform.hasInput(htmlasset)) {
      var doc = html.parse(await transform.readInputAsString(htmlasset));

      if (doc.querySelector('template') == null) {
        error(ann, 'template file does not have a template');
        return new Future.value();
      }

      var templates = doc.querySelectorAll('template[vuedart]');
      if (templates.isEmpty) {
        error(ann, 'no VueDart templates; did you forget the vuedart attribute?');
        return new Future.value();
      } else if (templates.length != 1) {
        error(ann, 'only one vuedart template is allowed');
        return new Future.value();
      }

      var template = templates[0];

      var styleInject = '';
      var styles = doc.querySelectorAll('style[scoped]');
      if (styles.isNotEmpty) {
        var parsedStyles = [];

        for (var style in styles) {
          var errors = [];
          var parsed = css.parse(style.innerHtml, errors: errors);

          if (errors.isNotEmpty) {
            error(ann, 'errors parsing CSS style');
            for (var error in errors) {
              transform.logger.error(error.toString());
            }
            continue;
          }

          parsedStyles.add(parsed);
        }

        scopify(html: [template], css: parsedStyles);

        var printer = new CssPrinter();
        for (var style in parsedStyles) {
          style.visit(printer);
        }

        styleInject = printer.toString();
      }

      return new Future.value([template.innerHtml, styleInject]);
    } else {
      error(ann, 'template file $relhtmlpath does not exist');
      return new Future.value();
    }
  }

  Future processClass(ClassDeclaration cls) async {
    var ann = getVueAnn(cls);
    var args = getAnnArgs(ann);
    var info = new VueClassInfo();

    for (var member in cls.members) {
      if (member is FieldDeclaration) {
        processField(member, info);
      } else if (member is MethodDeclaration) {
        processMethod(member, info);
      }
    }

    var opts = '''
  data: {${info.data.map(codegenData).join('\n')}},
  computed: {${info.computed.values.map(codegenComputed).join('\n')}},
  watchers: {${info.watchers.map(codegenWatch).join('\n')}},
  methods: {${info.methods.map(codegenMethod).join('\n')}},
    ''';
    var code;

    if (ann.name.name == 'VueComponent' || ann.name.name == 'VueMixin') {
      var name = null, creator = null;

      if (ann.name.name == 'VueComponent') {
        if (args.positional.length != 1) {
          error(ann, 'invalid number of arguments to VueComponent');
          return new Future.value();
        }

        name = "'${(args.positional[0] as StringLiteral).stringValue}'";
        creator = '(context) => new ${cls.name.name}(context)';
        components.add(cls);
      }

      var template = args.named['template'] as StringLiteral;
      var templateString = '';
      var styleInject = '';

      if (template == null) {
        templateString = 'null';
      } else {
        templateString = template.stringValue;

        if (templateString.startsWith('<<')) {
          var result = await readTemplate(ann, templateString);
          if (result != null) {
            templateString = result[0];
            styleInject = result[1];
          }
        }

        templateString = codegenString(templateString);
      }

      styleInject = codegenString(styleInject);

      var mixins = (args.named['mixins'] as ListLiteral)?.elements ?? [];

      code = '''
static VueComponentConstructor constructor = new VueComponentConstructor(
  name: $name,
  creator: $creator,
  template: $templateString,
  styleInject: $styleInject,
  props: {${info.props.map(codegenProp).join('\n')}},
  mixins: [${mixins.map((mixin) => '${mixin.name}.constructor').join(', ')}],
$opts
);
      ''';

      if (ann.name.name == 'VueMixin') {
        rewriter.edit(cls.end-1, cls.end-1, r'''
  dynamic vuedart_get(String key);
  void vuedart_set(String key, dynamic value);
  dynamic $ref(String name);
        ''');
      }
    } else {
      if (!args.named.containsKey('el')) {
        error(ann, 'VueApp annotations need el key');
        return new Future.value();
      }

      code = '''
@override
VueAppConstructor get constructor => new VueAppConstructor(
  el: ${args.named['el'].toSource()},
$opts
);
      ''';
    }

    rewriter.edit(cls.end-1, cls.end-1, code);
  }

  Future apply() async {
    var contents = await primary.readAsString();
    source = new SourceFile.fromString(contents);
    rewriter = new TextEditTransaction(contents, source);

    try {
      unit = parseCompilationUnit(contents, name: primary.id.path);
    } catch (ex) {
      // Just ignore it; it will propagate to the Dart compiler anyway.
      transform.logger.warning('Error parsing ${primary.id.path}', asset: primary.id);
      transform.addOutput(primary);
      return new Future.value();
    }

    var classes = unit.declarations.where((d) => d is ClassDeclaration &&
                                                 containsVueAnn(d))
                                          .map((d) => d as ClassDeclaration).toList();
    if (classes.isEmpty) {
      transform.addOutput(primary);
      return new Future.value();
    }

    for (var cls in classes) {
      await processClass(cls);
    }

    rewriter.edit(unit.end, unit.end, '''
@initMethod
void vuedart_INTERNAL_init() {
${components.map((comp) =>
      "  VueComponentBase.register(${comp.name.name}.constructor);").join('\n')}
}
    ''');

    var printer = rewriter.commit();
    printer.build(null);
    // print(printer.text);
    transform.addOutput(new Asset.fromString(primary.id, printer.text));

    return new Future.value();
  }
}


class DartTransformer extends Transformer {
  final BarbackSettings _settings;

  DartTransformer.asPlugin(this._settings);

  String get allowedExtensions => '.dart';

  Future apply(Transform transform) async =>
    await new VuedartApplyTransform(_settings, transform).apply();
}
