@JS()
library vue;


import 'package:initialize/initialize.dart';
import 'package:js/js.dart';
import 'package:js/js_util.dart';

import 'dart:async';


@JS('vuedart_getvue')
external dynamic _getVue();

@JS('console.log')
external dynamic _log(dynamic value);

dynamic mapToJs(Map<String, dynamic> map) {
  var obj = newObject();
  for (var key in map.keys) {
    setProperty(obj, key, map[key]);
  }
  return obj;
}

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

  dynamic jsprops() {
    var jsprops = <String, dynamic>{};

    for (var prop in props.keys) {
      jsprops[prop] = mapToJs({
        // 'default': _jsify(props[prop].initializer),
        'default': props[prop].initializer,
        // 'validator': new JsFunction.withThis(props[prop].validator),
      });
    }

    return mapToJs(jsprops);
  }
}

class VueAppConstructor {
  final String el;
  final Map<String, Object> data;

  VueAppConstructor({this.el, this.data});
}

class VueComponentBase {
  dynamic vuethis;

  VueComponentBase(dynamic context) {
    vuethis = context;
  }

  static void register(VueComponentConstructor constr) {
    print('Registering component ${constr.name}...');

    var props = constr.jsprops();

    var args = mapToJs({
      'props': props,
      'created': allowInteropCaptureThis((context) {
        setProperty(context, '\$dartobj', constr.creator(context));
      }),
      'data': allowInterop(() {
        var data = mapToJs(constr.data);
        setProperty(data, '\$dartobj', null);
        return data;
      }),
      'template': constr.template,
    });

    callMethod(_getVue(), 'component', [constr.name, args]);
  }
}

class VueAppBase {
  dynamic vuethis;
  VueAppConstructor get constructor => null;

  VueAppBase() {
    var constr = this.constructor;
    print('Registering app ${constr.el}...');

    var args = mapToJs({
      'el': constr.el,
      'data': mapToJs(constr.data),
    });
    // _log(mapToJs(constr.data));

    vuethis = callConstructor(_getVue(), [args]);
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

Future initVue() async => run();
