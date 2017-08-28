@JS()
library vue2;


import 'package:initialize/initialize.dart';
import 'package:js/js.dart';
import 'package:js/js_util.dart';

import 'dart:async';


@JS('eval')
external dynamic eval(String value);
dynamic _vue = eval('Vue');

// @JS('console.log')
// external dynamic _log(dynamic value);

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

class VueComputed {
  final Function getter, setter;

  VueComputed(this.getter, this.setter);
}

dynamic convertComputed(Map<String, VueComputed> computed) {
  var jscomputed = <String, dynamic>{};

  for (var name in computed.keys) {
    var comp = computed[name];
    jscomputed[name] = newObject();
    setProperty(jscomputed[name], 'get', allowInterop((_) => comp.getter()));

    if (comp.setter != null) {
      setProperty(jscomputed[name], 'set', allowInterop((v) => comp.setter(v)));
    }
  }

  return mapToJs(jscomputed);
}

class VueComponentConstructor {
  final String name, template;
  final Map<String, VueProp> props;
  final Map<String, Object> data;
  final Map<String, VueComputed> computed;
  Function creator;

  VueComponentConstructor({this.name = null, this.template = null, this.props = null,
                           this.data = null, this.computed = null, this.creator = null});

  dynamic jsprops() {
    var jsprops = <String, dynamic>{};

    for (var prop in props.keys) {
      jsprops[prop] = mapToJs({
        'default': props[prop].initializer,
        // 'validator': allowInterop(props[prop].validator),
      });
    }

    return mapToJs(jsprops);
  }

  dynamic jscomputed() => convertComputed(computed);
}

class VueAppConstructor {
  final String el;
  final Map<String, Object> data;
  final Map<String, VueComputed> computed;

  VueAppConstructor({this.el, this.data, this.computed});

  dynamic jscomputed() => convertComputed(computed);
}

class _VueBase {
  dynamic vuethis;

  dynamic vuedart_get(String key) => getProperty(vuethis, key);
  void vuedart_set(String key, dynamic value) => setProperty(vuethis, key, value);
}

class VueComponentBase extends _VueBase {
  VueComponentBase(dynamic context) {
    vuethis = context;
  }

  static void register(VueComponentConstructor constr) {
    var props = constr.jsprops();
    var computed = constr.jscomputed();

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
      'computed': computed,
      'template': constr.template,
    });

    callMethod(_vue, 'component', [constr.name, args]);
  }
}

class VueAppBase extends _VueBase {
  VueAppConstructor get constructor => null;

  VueAppBase() {
    var constr = this.constructor;
    var computed = constr.jscomputed();

    var args = mapToJs({
      'el': constr.el,
      'data': mapToJs(constr.data),
      'computed': computed,
    });

    vuethis = callConstructor(_vue, [args]);
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
