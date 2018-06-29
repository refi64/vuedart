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
    throw new Exception("Can't get window.Vue. Please make sure that vue.js is "
                        "referenced in your html <script> tag");
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

dynamic vueGetObj(dynamic vuethis) => getProperty(vuethis, r'$dartobj');
dynamic _interopWithObj(Function func) =>
  allowInteropCaptureThis((context) => func(vueGetObj(context)));

typedef dynamic CreateElement(dynamic tag, [dynamic arg1, dynamic arg2]);

class VueProp {
  final Symbol type;
  final Function validator;
  final Object initializer;

  VueProp(this.type, this.validator, this.initializer);
}

class VueModel {
  final String prop, event;

  VueModel(this.prop, this.event);
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
  final VueModel model;
  final Map<String, VueProp> props;
  final Map<String, Object> data;
  final Map<String, VueComputed> computed;
  final Map<String, Function> methods;
  final Map<String, VueWatcher> watchers;
  final List<VueComponentBase> components;
  final List<VueComponentBase> mixins;
  Function creator;

  bool hasInjectedStyle = false;

  VueComponentConstructor({this.name: null, this.template: null, this.styleInject: null,
                           this.model: null, this.props: null, this.data: null,
                           this.computed: null, this.methods: null, this.watchers: null,
                           this.creator: null, this.components, this.mixins: null});

  dynamic jsmodel() {
    if (model == null) {
      return null;
    }

    var jsmodel = <String, String>{};
    jsmodel['prop'] = model.prop;

    if (model.event != null) {
      jsmodel['event'] = model.event;
    }

    return mapToJs(jsmodel);
  }

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
  final List<VueComponentBase> components;
  final List<VueComponentBase> mixins;

  VueAppConstructor({this.el, this.data, this.computed, this.methods, this.watchers,
                     this.components, this.mixins: null});

  dynamic jscomputed() => _convertComputed(computed);
  dynamic jswatch() => _convertWatchers(watchers);
}

abstract class _VueApi {
  dynamic vuethis;

  dynamic vuedart_get(String key);
  void vuedart_set(String key, dynamic value);

  void lifecycleCreated();
  void lifecycleMounted();
  void lifecycleBeforeUpdate();
  void lifecycleUpdated();
  void lifecycleActivated();
  void lifecycleDeactivated();
  void lifecycleBeforeDestroy();
  void lifecycleDestroyed();

  dynamic $ref(String name);

  dynamic get $data;
  dynamic get $props;
  Element get $el;
  dynamic get $options;
  dynamic get $parent;
  dynamic get $root;

  void $on(dynamic event, Function callback);
  void $once(dynamic event, Function callback);
  void $off(dynamic event, Function callback);
  void $emit(String event, [List args]);

  Future<Null> $nextTick();

  void $forceUpdate();
  void $destroy();
}

abstract class VueMixinRequirements implements _VueApi {}

class _VueBase implements _VueApi {
  dynamic vuethis;

  dynamic vuedart_get(String key) => getProperty(vuethis, key);
  void vuedart_set(String key, dynamic value) => setProperty(vuethis, key, value);

  dynamic render(CreateElement createElement) => null;

  void lifecycleCreated() {}
  void lifecycleMounted() {}
  void lifecycleBeforeUpdate() {}
  void lifecycleUpdated() {}
  void lifecycleActivated() {}
  void lifecycleDeactivated() {}
  void lifecycleBeforeDestroy() { }
  void lifecycleDestroyed() {}

  static Map<String, dynamic> lifecycleHooks = {
    'mounted': _interopWithObj((obj) => obj.lifecycleMounted()),
    'beforeUpdate': _interopWithObj((obj) => obj.lifecycleBeforeDestroy()),
    'updated': _interopWithObj((obj) => obj.lifecycleUpdated()),
    'activated': _interopWithObj((obj) => obj.lifecycleActivated()),
    'deactivated': _interopWithObj((obj) => obj.lifecycleDeactivated()),
    'beforeDestroy': _interopWithObj((obj) => obj.lifecycleBeforeDestroy()),
    'destroyed': _interopWithObj((obj) => obj.lifecycleDestroyed()),
  };

  dynamic $ref(String name) {
    var refs = getProperty(vuethis, r'$refs');
    var ref = getProperty(refs, name);
    if (ref == null) return null;
    return vueGetObj(ref) ?? ref;
  }

  dynamic get $data => vuedart_get(r'$data');
  dynamic get $props => vuedart_get(r'$props');
  Element get $el => vuedart_get(r'$el');
  dynamic get $options => vuedart_get(r'$options');

  dynamic get $parent {
    var parent = vuedart_get(r'$parent');
    if (parent == null) return null;

    return vueGetObj(parent) ?? parent;
  }

  dynamic get $root {
    var root = vuedart_get(r'$root');
    return vueGetObj(root) ?? root;
  }

  void $on(dynamic event, Function callback) =>
    callMethod(vuethis, r'$on', [event, allowInterop(callback)]);

  void $once(dynamic event, Function callback) =>
    callMethod(vuethis, r'$once', [event, allowInterop(callback)]);

  void $off(dynamic event, Function callback) =>
    callMethod(vuethis, r'$off', [event, allowInterop(callback)]);

  void $emit(String event, [List args]) =>
    callMethod(vuethis, r'$emit', [event]..addAll(args ?? []));

  Future<Null> $nextTick() {
    var compl = new Completer<Null>();
    callMethod(vuethis, r'$nextTick', [allowInterop(() => compl.complete(null))]);
    return compl.future;
  }

  void $forceUpdate() => callMethod(vuethis, r'$forceUpdate', []);
  void $destroy() => callMethod(vuethis, r'$destroy', []);
}

class VueComponentBase extends _VueBase {
  VueComponentConstructor get constructor => null;
  bool get isMixin => false;

  void _setContext(dynamic context) {
    vuethis = context;
    setProperty(vuethis, r'$dartobj', this);
  }

  dynamic componentArgs() {
    var model = constructor.jsmodel();
    var props = constructor.jsprops();
    var computed = constructor.jscomputed();
    var watch = constructor.jswatch();
    var renderFunc;

    if (constructor.styleInject.isNotEmpty && !constructor.hasInjectedStyle) {
      var el = new StyleElement();
      el.appendText(constructor.styleInject);
      document.head.append(el);

      constructor.hasInjectedStyle = true;
    }

    if (constructor.template == null && !isMixin) {
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
      'model': model,
      'props': props,
      'data': allowInterop(([dynamic _=null]) {
        var data = mapToJs(constructor.data);
        setProperty(data, r'$dartobj', null);
        return data;
      }),
      'computed': computed,
      'methods': _mapMethodsToJs(constructor.methods),
      'watch': watch,
      'template': constructor.template,
      'render': renderFunc,
      'components': VueComponentBase.componentsMap(constructor.components),
      'mixins': VueComponentBase.mixinsArgs(constructor.mixins),
    }..addAll(_VueBase.lifecycleHooks));

    if (!isMixin) {
      setProperty(args, 'created', allowInteropCaptureThis((dynamic context) {
        var dartobj = constructor.creator();
        dartobj._setContext(context);
        dartobj.lifecycleCreated();
      }));
    }

    return args;
  }

  static dynamic componentsMap(List<VueComponentBase> components) =>
    mapToJs(
      new Map.fromIterable(components, key: (component) => component.constructor.name,
                           value: (component) => component.componentArgs()));

  static List mixinsArgs(List<VueComponentBase> mixins) =>
    mixins.map((mixin) => mixin.componentArgs()).toList();
}


abstract class VueAppOptions {
  Map<String, dynamic> get appOptions;
}

class VueAppBase extends _VueBase {
  VueAppConstructor get constructor => null;

  void _setContext(dynamic context) {
    vuethis = context;
    setProperty(vuethis, '\$dartobj', this);
  }

  static Map<String, dynamic> _mergeOptions(List<VueAppOptions> options) {
    if (options == null) {
      return <String, dynamic>{};
    }

    return options.fold(<String, dynamic>{},
                        (result, opts) => result..addAll(opts.appOptions));
  }

  void create({List<VueAppOptions> options}) {
    var computed = constructor.jscomputed();
    var watch = constructor.jswatch();

    var args = mapToJs({
      'el': constructor.el,
      'created': allowInteropCaptureThis((context) {
        _setContext(context);
        lifecycleCreated();
      }),
      'data': mapToJs(constructor.data),
      'computed': computed,
      'methods': _mapMethodsToJs(constructor.methods),
      'watch': watch,
      'components': VueComponentBase.componentsMap(constructor.components),
      'mixins': VueComponentBase.mixinsArgs(constructor.mixins),
    }..addAll(_VueBase.lifecycleHooks)
     ..addAll(VueAppBase._mergeOptions(options)));

      callConstructor(_vue, [args]);
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
  final List components;
  const VueComponent({this.template, this.components});
}

class VueApp {
  final String el;
  final List components;
  const VueApp({this.el, this.components});
}

class VueMixin {
  final List components;
  const VueMixin({this.components});
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

class model {
  final String event;
  const model({this.event});
}


@JS('Vue.config.ignoredElements')
external get _ignoredElements;
@JS('Vue.config.ignoredElements')
external set _ignoredElements(elements);

class VueConfig {
  static get ignoredElements => _ignoredElements;
  static set ignoredElements(elements) => _ignoredElements = elements;
}
