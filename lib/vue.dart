@JS()
library vue;


import 'package:initialize/initialize.dart';
import 'package:js/js.dart';
import 'dart:js';


Object _jsify(Object obj) =>
  obj is Map || obj is Iterable ? new JsObject.jsify(obj) : obj;

class VueProp {
  final Function validator;
  final Object initializer;

  VueProp(this.validator, this.initializer);
}

class VueComponentConstructor {
  final String name, template;
  final Map<String, VueProp> props;
  final Map<String, Object> data;
  Function creator;

  VueComponentConstructor({this.name = null, this.template = null, this.props = null,
                           this.data = null, this.creator = null});

  Object jsprops() {
    Map<String, Object> jsprops = {};

    for (var prop in props.keys) {
      jsprops[prop] = {
        'default': _jsify(props[prop].initializer),
        // 'validator': new JsFunction.withThis(props[prop].validator),
      };
    }

    return jsprops;
  }
}

class VueAppConstructor {
  final String el;
  final Map<String, Object> data;

  VueAppConstructor({this.el, this.data});
}

class VueComponentBase {
  JsObject vuethis;

  VueComponentBase(JsObject context) {
    vuethis = context;
  }

  static void register(VueComponentConstructor constr) {
    print('Registering component ${constr.name}...');

    var props = constr.jsprops();

    var args = new JsObject.jsify({
      'props': props,
      'created': new JsFunction.withThis((context) {
        context['\$dartobj'] = constr.creator(context);
      }),
      'data': () {
        var data = new JsObject.jsify(constr.data);
        data['\$dartobj'] = null;
        return data;
      },
      'template': constr.template,
    });

    context['Vue'].callMethod('component', [constr.name, args]);
  }
}

class VueAppBase {
  JsObject vuethis;
  VueAppConstructor get constructor => null;

  VueAppBase() {
    var constr = this.constructor;
    print('Registering app ${constr.el}...');

    var args = new JsObject.jsify({
      'el': constr.el,
      'data': constr.data,
    });
    print(context['JSON'].callMethod('stringify', [new JsObject.jsify(constr.data)]));

    vuethis = new JsObject(context['Vue'] as JsFunction, [args]);
  }
}

class VueComponent {
  final String name, template;
  const VueComponent(this.name, {this.template});
}

class VueApp {
  final String el;
  const VueApp({this.el});
}

class _VueData { const _VueData(); }
class _VueProp { const _VueProp(); }

const data = const _VueData();
const prop = const _VueProp();
