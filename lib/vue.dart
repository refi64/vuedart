@JS()
library vue2;


import 'package:initialize/initialize.dart';
import 'package:js/js.dart';
import 'package:js/js_util.dart';

import 'dart:async';

export 'package:initialize/initialize.dart' show initMethod;


@JS('eval')
external dynamic _eval(String value);
dynamic _vue = _eval('Vue');

// @JS('console.log')
// external dynamic _log(dynamic value);

dynamic mapToJs(Map<String, dynamic> map) {
  var obj = newObject();
  for (var key in map.keys) {
    setProperty(obj, key, map[key]);
  }
  return obj;
}

dynamic _mapMethodsToJs(Map<String, Function> methods) =>
  mapToJs(new Map.fromIterables(methods.keys,
                                methods.values.map(allowInteropCaptureThis)));

dynamic vueGetObj(dynamic vuethis) => getProperty(vuethis, '\$dartobj');
dynamic _interopWithObj(Function func) =>
  allowInteropCaptureThis((context) => func(vueGetObj(context)));

typedef dynamic CreateElement(dynamic tag, [dynamic arg1, dynamic arg2]);

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
    setProperty(jscomputed[name], 'get',
                allowInteropCaptureThis((vuethis, misc) => comp.getter(vuethis)));

    if (comp.setter != null) {
      setProperty(jscomputed[name], 'set', allowInteropCaptureThis(comp.setter));
    }
  }

  return mapToJs(jscomputed);
}

class VueComponentConstructor {
  final String name, template;
  final Map<String, VueProp> props;
  final Map<String, Object> data;
  final Map<String, VueComputed> computed;
  final Map<String, Function> methods;
  Function creator;

  VueComponentConstructor({this.name: null, this.template: null, this.props: null,
                           this.data: null, this.computed: null, this.methods: null,
                           this.creator: null});

  dynamic jsprops() {
    var jsprops = <String, dynamic>{};

    for (var prop in props.keys) {
      jsprops[prop] = mapToJs({
        'default': props[prop].initializer,
        'validator': allowInterop(props[prop].validator),
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
  final Map<String, Function> methods;

  VueAppConstructor({this.el, this.data, this.computed, this.methods});

  dynamic jscomputed() => convertComputed(computed);
}

class _VueBase {
  dynamic vuethis;

  dynamic vuedart_get(String key) => getProperty(vuethis, key);
  void vuedart_set(String key, dynamic value) => setProperty(vuethis, key, value);

  dynamic render(CreateElement createElement) => null;

  void mounted() {}
  void beforeUpdate() {}
  void updated() {}
  void activated() {}
  void deactivated() {}
  void beforeDestroy() { }
  void destroyed() {}

  static Map<String, dynamic> lifecycleHooks = {
    'mounted': _interopWithObj((obj) => obj.mounted()),
    'beforeUpdate': _interopWithObj((obj) => obj.beforeUpdate()),
    'updated': _interopWithObj((obj) => obj.updated()),
    'activated': _interopWithObj((obj) => obj.activated()),
    'deactivated': _interopWithObj((obj) => obj.deactivated()),
    'beforeDestroy': _interopWithObj((obj) => obj.beforeDestroy()),
    'destroyed': _interopWithObj((obj) => obj.destroyed()),
  };

  dynamic $ref(String name) {
    var refs = getProperty(vuethis, '\$refs');
    var ref = getProperty(refs, name);
    if (ref == null) return null;
    return vueGetObj(ref) ?? ref;
  }
}

class _FakeException {
  VueAppConstructor constr;
  _FakeException(this.constr);
}

class VueComponentBase extends _VueBase {
  VueComponentBase(dynamic context) {
    vuethis = context;
    setProperty(vuethis, '\$dartobj', this);
  }

  static void register(VueComponentConstructor constr) {
    var props = constr.jsprops();
    var computed = constr.jscomputed();
    var renderFunc;

    if (constr.template == null) {
      renderFunc = allowInteropCaptureThis((context, jsCreateElement) {
        dynamic createElement(dynamic tag, [dynamic arg1, dynamic arg2]) {
          return jsCreateElement(tag is Map ? mapToJs(tag) : tag,
                                 arg1 != null && arg1 is Map ? mapToJs(arg1) : arg1,
                                 arg2);
        };

        return vueGetObj(context).render(createElement);
      });
    }

    var args = mapToJs({
      'props': props,
      'created': allowInteropCaptureThis(constr.creator),
      'data': allowInterop(() {
        var data = mapToJs(constr.data);
        setProperty(data, '\$dartobj', null);
        return data;
      }),
      'computed': computed,
      'methods': _mapMethodsToJs(constr.methods),
      'template': constr.template,
      'render': renderFunc,
    }..addAll(_VueBase.lifecycleHooks));

    callMethod(_vue, 'component', [constr.name, args]);
  }
}

class VueAppBase extends _VueBase {
  VueAppConstructor get constructor => null;

  VueAppBase(dynamic context) {
    if (context == null) throw new _FakeException(constructor);
    vuethis = context;
    setProperty(vuethis, '\$dartobj', this);
  }

  static create(Function creator) {
    var constr;

    try {
      creator(null);
    } on _FakeException catch (ex) {
      constr = ex.constr;
    }

    var computed = constr.jscomputed();
    var result;

    var args = mapToJs({
      'el': constr.el,
      'created': allowInteropCaptureThis((context) {
        result = creator(context);
      }),
      'data': mapToJs(constr.data),
      'computed': computed,
      'methods': _mapMethodsToJs(constr.methods),
    }..addAll(_VueBase.lifecycleHooks));

    callConstructor(_vue, [args]);
    return result;
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
class _VueComputed { const _VueComputed(); }
class _VueMethod { const _VueMethod(); }
class _VueRef { const _VueRef(); }

const data = const _VueData();
const prop = const _VueProp();
const computed = const _VueComputed();
const method = const _VueMethod();
const ref = const _VueRef();

Future initVue() async => run();
