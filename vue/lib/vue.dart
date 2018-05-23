@JS()
library vue;


import 'package:js/js.dart';
import 'package:js/js_util.dart';

import 'dart:async';
import 'dart:html';


@JS('window')
external dynamic get _window;

@JS('String')
external dynamic get _jsString;

@JS('Number')
external dynamic get _jsNumber;

@JS('Boolean')
external dynamic get _jsBool;

dynamic getWindowProperty(String name) {
  return getProperty(_window, name);
}

dynamic get _vue {
  var vue = getWindowProperty('Vue');
  if (vue == null) {
    throw new Exception("Can't get window.vue. Please make sure the vue.js is referenced in your html <script> tag");
  }
  return vue;
}


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
  final Symbol type;
  final Function validator;
  final Object initializer;

  VueProp(this.type, this.validator, this.initializer);
}

class VueComputed {
  final Function getter, setter;

  VueComputed(this.getter, this.setter);
}

class VueWatcher {
  final Function watcher;
  final bool deep;

  VueWatcher(this.watcher, this.deep);
}

dynamic _convertComputed(Map<String, VueComputed> computed) {
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

dynamic _convertWatchers(Map<String, VueWatcher> watchers) {
  var jswatch = <String, dynamic>{};

  for (var name in watchers.keys) {
    var watcher = watchers[name];
    jswatch[name] = newObject();
    setProperty(jswatch[name], 'handler', allowInteropCaptureThis(watcher.watcher));
    setProperty(jswatch[name], 'deep', watcher.deep);
  }

  return mapToJs(jswatch);
}

class VueComponentConstructor {
  final String name, template, styleInject;
  final Map<String, VueProp> props;
  final Map<String, Object> data;
  final Map<String, VueComputed> computed;
  final Map<String, Function> methods;
  final Map<String, VueWatcher> watchers;
  final List<VueComponentConstructor> components;
  final List<VueComponentConstructor> mixins;
  Function creator;

  VueComponentConstructor({this.name: null, this.template: null, this.styleInject: null,
                           this.props: null, this.data: null, this.computed: null,
                           this.methods: null, this.watchers: null, this.creator: null,
                           this.components, this.mixins: null});

  dynamic jsprops() {
    var jsprops = <String, dynamic>{};

    for (var name in props.keys) {
      var prop = props[name];

      var type = null;
      if (prop.type != null) {
        switch (prop.type) {
        case #number:
          type = _jsNumber;
          break;
        case #string:
          type = _jsString;
          break;
        case #bool:
          type = _jsBool;
          break;
        }
      }

      jsprops[name] = mapToJs({
        'type': type,
        'default': prop.initializer,
        'validator': allowInterop(prop.validator),
      });
    }

    return mapToJs(jsprops);
  }

  dynamic jscomputed() => _convertComputed(computed);
  dynamic jswatch() => _convertWatchers(watchers);
}

class VueAppConstructor {
  final String el;
  final Map<String, Object> data;
  final Map<String, VueComputed> computed;
  final Map<String, Function> methods;
  final Map<String, VueWatcher> watchers;
  final List<VueComponentConstructor> components;

  VueAppConstructor({this.el, this.data, this.computed, this.methods, this.watchers,
                     this.components});

  dynamic jscomputed() => _convertComputed(computed);
  dynamic jswatch() => _convertWatchers(watchers);
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

  dynamic get $data => vuedart_get('\$data');
  dynamic get $props => vuedart_get('\$props');
  Element get $el => vuedart_get('\$el');
  dynamic get $options => vuedart_get('\$options');

  dynamic get $parent {
    var parent = vuedart_get('\$parent');
    if (parent == null) return null;

    return vueGetObj(parent) ?? parent;
  }

  dynamic get $root {
    var root = vuedart_get('\$root');
    return vueGetObj(root) ?? root;
  }

  void $on(dynamic event, Function callback) =>
    callMethod(vuethis, '\$on', [event, allowInterop(callback)]);

  void $once(dynamic event, Function callback) =>
    callMethod(vuethis, '\$once', [event, allowInterop(callback)]);

  void $off(dynamic event, Function callback) =>
    callMethod(vuethis, '\$off', [event, allowInterop(callback)]);

  void $emit(String event, [List args]) =>
    callMethod(vuethis, '\$emit', [event]..addAll(args ?? []));

  Future<Null> $nextTick() {
    var compl = new Completer<Null>();
    callMethod(vuethis, '\$nextTick', [allowInterop(() => compl.complete(null))]);
    return compl.future;
  }

  void $forceUpdate() => callMethod(vuethis, '\$forceUpdate', []);
  void $destroy() => callMethod(vuethis, '\$destroy', []);
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

  static Map<Symbol, dynamic> componentArgStore = {};

  static dynamic componentArgs(VueComponentConstructor constr, {bool isMixin: false}) {
    var props = constr.jsprops();
    var computed = constr.jscomputed();
    var watch = constr.jswatch();
    var renderFunc;

    if (constr.styleInject.isNotEmpty) {
      var el = new StyleElement();
      el.appendText(constr.styleInject);
      document.head.append(el);
    }

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

    return mapToJs({
      'props': props,
      'created': !isMixin ? allowInteropCaptureThis(constr.creator) : null,
      'data': allowInterop(([dynamic _=null]) {
        var data = mapToJs(constr.data);
        setProperty(data, '\$dartobj', null);
        return data;
      }),
      'computed': computed,
      'methods': _mapMethodsToJs(constr.methods),
      'watch': watch,
      'template': constr.template,
      'render': renderFunc,
      'components': VueComponentBase.componentsMap(constr.components),
      'mixins': VueComponentBase.componentListArgs(constr.mixins, isMixin: true),
    }..addAll(_VueBase.lifecycleHooks));
  }

  static dynamic componentsMap(List<VueComponentConstructor> constrs) =>
    mapToJs(
      new Map.fromIterable(constrs, key: (constr) => constr.name,
                           value: (constr) => VueComponentBase.componentArgs(constr)));

  static List componentListArgs(List<VueComponentConstructor> constrs,
                                {bool isMixin: false}) =>
    constrs
      .map((constr) => VueComponentBase.componentArgs(constr, isMixin: isMixin))
      .toList();

  static void register(Symbol name, VueComponentConstructor constr) {
    // var args = VueComponentBase.componentArgs(constr);
    // VueComponentBase.componentArgStore[name] = args;
    // if (constr.name != null) {
    //   callMethod(_vue, 'component', [constr.name, args]);
    // }
  }
}

class VueAppBase extends _VueBase {
  VueAppConstructor get constructor => null;

  VueAppBase(dynamic context) {
    if (context == null) throw new _FakeException(constructor);
    vuethis = context;
    setProperty(vuethis, '\$dartobj', this);
  }

  static create(Function creator, {dynamic router: null}) {
    var constr;

    try {
      creator(null);
    } on _FakeException catch (ex) {
      constr = ex.constr;
    }

    var computed = constr.jscomputed();
    var watch = constr.jswatch();
    var result;

    var args = mapToJs({
      'el': constr.el,
      'created': allowInteropCaptureThis((context) {
        result = creator(context);
      }),
      'data': mapToJs(constr.data),
      'computed': computed,
      'methods': _mapMethodsToJs(constr.methods),
      'watch': watch,
      'components': VueComponentBase.componentsMap(constr.components),
    }..addAll(_VueBase.lifecycleHooks));

    if (router != null) {
      setProperty(args, 'router', router.js);
    }

    callConstructor(_vue, [args]);
    return result;
  }
}

class VuePlugin {
  static Set<String> _plugins = new Set<String>();

  static void use(String pluginName) {
    if (_plugins.contains(pluginName)) {
      return;
    }

    var plugin = getWindowProperty(pluginName);
    callMethod(_vue, 'use', [plugin]);
    _plugins.add(pluginName);
  }
}

class VueComponent {
  final String template;
  final List components, mixins;
  const VueComponent({this.template, this.components, this.mixins});
}

class VueApp {
  final String el;
  final List components;
  const VueApp({this.el, this.components});
}

class VueMixin {
  const VueMixin();
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

class watch {
  final String name;
  final bool deep;
  const watch(this.name, {this.deep});
}


@JS('Vue.config.ignoredElements')
external get _ignoredElements;
@JS('Vue.config.ignoredElements')
external set _ignoredElements(elements);

class VueConfig {
  static get ignoredElements => _ignoredElements;
  static set ignoredElements(elements) => _ignoredElements = elements;
}
