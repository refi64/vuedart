@JS()
library vue;


import 'package:async/async.dart';
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

@JS('eval')
external dynamic _eval(String code);

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
  final Function initializer, validator;

  VueProp(this.type, this.initializer, this.validator);
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

class VueConstructor {
  final String name;
  final VueModel model;
  final Map<String, VueProp> props;
  final Map<String, Object> data;
  final Map<String, VueComputed> computed;
  final Map<String, Function> methods;
  final Map<String, VueWatcher> watchers;
  final List<Vue> mixins;
  Vue Function() creator;

  bool didAlreadyInjectStyle = false;

  VueConstructor({this.name: null, this.model: null, this.props: null, this.data: null,
                  this.computed: null, this.methods: null, this.watchers: null,
                  this.creator: null, this.mixins: null});

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
        'default': allowInterop(prop.initializer),
        'validator': allowInterop(prop.validator),
      });
    }

    return mapToJs(jsprops);
  }

  dynamic jscomputed() => _convertComputed(computed);
  dynamic jswatch() => _convertWatchers(watchers);
}

class Vue {
  dynamic vuethis;
  List<Sink> _toClose = [];

  /// Set to null to use a render function.
  String get template => '';
  String get styles => '';

  List<Vue> get components => <Vue>[];

  VueConstructor get constructor =>
    throw UnsupportedError('The VueDart builder has not processed this component.');
  bool get isMixin => false;
  String get _name => null;

  dynamic vuedart_get(String key) => getProperty(vuethis, key);
  void vuedart_set(String key, dynamic value) => setProperty(vuethis, key, value);

  dynamic render(CreateElement createElement) => null;

  void created() {}
  void mounted() {}
  void beforeUpdate() {}
  void updated() {}
  void activated() {}
  void deactivated() {}
  void beforeDestroy() { }
  void destroyed() {}

  void _wrapDestroyed() {
    for (var sink in _toClose) {
      sink.close();
    }

    destroyed();
  }

  static Map<String, dynamic> lifecycleHooks = {
    'mounted': _interopWithObj((obj) => obj.mounted()),
    'beforeUpdate': _interopWithObj((obj) => obj.beforeUpdate()),
    'updated': _interopWithObj((obj) => obj.updated()),
    'activated': _interopWithObj((obj) => obj.activated()),
    'deactivated': _interopWithObj((obj) => obj.deactivated()),
    'beforeDestroy': _interopWithObj((obj) => obj.beforeDestroy()),
    'destroyed': _interopWithObj((obj) => obj._wrapDestroyed()),
  };

  void $mount(String selector) => callMethod(vuethis, r'$mount', [selector]);
  void $mountOn(Element el) => callMethod(vuethis, r'$mount', [el]);

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

  Future<Null> $nextTick() {
    var compl = new Completer<Null>();
    callMethod(vuethis, r'$nextTick', [allowInterop(() => compl.complete(null))]);
    return compl.future;
  }

  void $forceUpdate() => callMethod(vuethis, r'$forceUpdate', []);
  void $destroy() => callMethod(vuethis, r'$destroy', []);

  void _setContext(dynamic context) {
    vuethis = context;
    setProperty(vuethis, r'$dartobj', this);
  }

  dynamic jsargs([Map<String, dynamic> extraOptions = const <String, dynamic>{}]) {
    var model = constructor.jsmodel();
    var props = constructor.jsprops();
    var computed = constructor.jscomputed();
    var watch = constructor.jswatch();
    var renderFunc;

    if ((styles?.isNotEmpty ?? false) && !constructor.didAlreadyInjectStyle) {
      var el = new StyleElement();
      el.appendText(styles);
      document.head.append(el);

      constructor.didAlreadyInjectStyle = true;
    }

    if (template == null && !isMixin) {
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
      'template': template,
      'render': renderFunc,
      'components': _componentsMap(components),
      'mixins': _mixinsArgs(constructor.mixins),
    }..addAll(lifecycleHooks)
     ..addAll(extraOptions));

    if (!isMixin) {
      setProperty(args, 'created', allowInteropCaptureThis((dynamic context) {
        var dartobj = constructor.creator();
        dartobj._setContext(context);
        dartobj.created();
      }));
    }

    return args;
  }

  dynamic _componentsMap(List<Vue> components) =>
    mapToJs(Map.fromIterable(components,
                             key: (component) => component._name ?? component.constructor.name,
                             value: (component) => component.jsargs()));

  List _mixinsArgs(List<Vue> mixins) =>
    mixins.map((mixin) => mixin.jsargs()).toList();
}

abstract class VueAppOptions {
  Map<String, dynamic> get appOptions;
}

class VueApp {
  final Vue app;

  VueApp._(dynamic context): app = vueGetObj(context);

  static Map<String, dynamic> _mergeOptions(List<VueAppOptions> options) {
    if (options == null) {
      return <String, dynamic>{};
    }

    return options.fold(<String, dynamic>{},
                        (result, opts) => result..addAll(opts.appOptions));
  }

  factory VueApp.create(Vue app, {List<VueAppOptions> options}) {
    var args = app.jsargs(VueApp._mergeOptions(options));
    var context = callConstructor(_vue, [args]);
    return VueApp._(context);
  }

  void mount(String selector) => app.$mount(selector);
  void mountOn(Element el) => app.$mountOn(el);
}

class VueEventSink<E> extends DelegatingSink<E> {
  final VueEventSpec<E> spec;

  VueEventSink._(this.spec, StreamSink<E> sink): super(sink);

  factory VueEventSink._create(VueEventSpec<E> spec, dynamic owner, dynamic vue) {
    var controller = new StreamController<E>();
    controller.stream.listen((E evt) {
      var args = [spec.name as dynamic];
      args.addAll(spec.toJs != null ? spec.toJs(evt) : [evt]);
      callMethod(vue, r'$emit', args);
    });

    var result = new VueEventSink._(spec, controller.sink);
    if (owner is Vue) {
      owner._toClose.add(result);
    }

    return result;
  }
}

class VueEventStream<E> extends DelegatingStream<E> {
  final VueEventSpec<E> spec;

  VueEventStream._(this.spec, Stream<E> stream): super(stream);

  factory VueEventStream._create(VueEventSpec<E> spec, dynamic vue) {
    var argProxy = _eval('''(function (callback) {
      return (function () {
        var args = [];
        for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
        callback(args);
      });
    })''');

    StreamController<E> controller;

    var onEvent = argProxy(allowInterop((List args) {
      var event = spec.fromJs != null ? spec.fromJs(args) : args[0];
      controller.sink.add(event);
    }));

    controller = new StreamController<E>.broadcast(
      onListen: () => callMethod(vue, r'$on', [spec.name, onEvent]),
      onCancel: () => callMethod(vue, r'$off', [spec.name, onEvent]),
    );

    return new VueEventStream._(spec, controller.stream);
  }
}

class VueEventSpec<E> {
  final String name;
  final E Function(List args) fromJs;
  final List Function(E event) toJs;

  VueEventSpec(this.name, {this.fromJs, this.toJs});

  dynamic _getVueObj(obj) => obj is Vue ? obj.vuethis : obj;

  void check(void func(E)) {}
  VueEventSink<E> createSink(obj) =>
    new VueEventSink<E>._create(this, obj, _getVueObj(obj));
  VueEventStream<E> createStream(obj) =>
    new VueEventStream<E>._create(this, _getVueObj(obj));
}


class VueAsyncComponent<T> extends Vue {
  final String _name;
  final Future<T> _waitFor;
  Vue Function(T value) _callback;

  VueAsyncComponent(this._name, this._waitFor, this._callback);

  @override
  dynamic jsargs([Map<String, dynamic> extraOptions = const <String, dynamic>{}]) =>
    allowInterop((resolve, reject) =>
      _waitFor
        .then((value) => Future.value(_callback(value)))
        .then((value) => resolve(value.jsargs(extraOptions)))
        .catchError((error) => reject(error.toString())));
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

class _VueDart { const _VueDart(); }
const vuedart = _VueDart();

@Deprecated('TODO')
class AutoTemplate {
  final String template;
  const AutoTemplate(this.template);
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
