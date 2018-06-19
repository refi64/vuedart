@JS()
library vue.plugins.vue_router;


import 'package:vue/vue.dart';

import 'package:js/js.dart';
import 'package:js/js_util.dart';

import 'dart:async';


@JS('Object.keys')
external List<String> _keys(dynamic object);

@JS('VueRouter')
external dynamic get _vueRouter;

class VueRouteInfo {
  // ignore: unused_field
  final dynamic _route;
  final Map<String, dynamic> params;

  VueRouteInfo(this._route): params = VueRouteInfo._convertParams(_route);

  static Map<String, dynamic> _convertParams(dynamic route) {
    var params = <String, dynamic>{};
    var jsparams = getProperty(route, 'params');

    for (var key in _keys(jsparams)) {
      params[key] = getProperty(jsparams, key);
    }
    return new Map.unmodifiable(params);
  }
}

typedef void VueRouterCallback(VueRouteInfo info);

class VueRouterEvents {
  final Future<VueRouteInfo> onComplete, onAbort;
  VueRouterEvents({this.onComplete, this.onAbort});
}

class _EventInfo {
  final Completer<VueRouteInfo> completer;
  final Function callback;
  _EventInfo(this.completer, this.callback);
}

class VueRouterLocation {
  String path, name;
  Map<String, dynamic> params;
  VueRouterLocation({this.path, this.name, this.params});

  dynamic jsargs() {
    var obj = newObject();

    setProperty(obj, 'path', path);
    setProperty(obj, 'name', name);
    setProperty(obj, 'params', params != null ? mapToJs(params) : null);

    return obj;
  }
}

class VueRoute<T extends VueComponentBase> {
  String path, name;
  VueComponentBase component;
  Map<String, VueComponentBase> components;
  dynamic redirect, props;
  List<VueRoute> children;

  VueRoute({this.path, this.name: null, this.component: null, this.components: null,
            this.redirect: null, this.props: null, this.children: const []});

  dynamic jsargs() {
    var obj = newObject();

    var singleComponent = this.component != null;
    var components = this.components ?? {'default': this.component};
    var jsComponent, jsComponents = <String, dynamic>{};

    for (var view in components.keys) {
      var component = components[view];
      jsComponents[view] = component.componentArgs();
    }

    // Round-trip: treat a single component as named views, then undo it.
    if (singleComponent) {
      jsComponent = jsComponents['default'];
      jsComponents = null;
    }

    var jsRedirect;

    if (redirect is VueRouterLocation) {
      jsRedirect = mapToJs(redirect.jsargs());
    } else if (redirect is Function) {
      jsRedirect = allowInterop(redirect as Function);
    } else {
      jsRedirect = redirect;
    }

    var jsProps;
    if (props is Map) {
      jsProps = mapToJs(props);
    } else if (props is Function) {
      jsProps = allowInterop(props as Function);
    } {
      jsProps = props ?? false;
    }

    var jsChildren = children.map((route) => route.jsargs()).toList();

    setProperty(obj, 'path', path);
    setProperty(obj, 'name', name);
    setProperty(obj, 'component', jsComponent);
    setProperty(obj, 'components', jsComponents != null ? mapToJs(jsComponents) : null);
    setProperty(obj, 'redirect', jsRedirect);
    setProperty(obj, 'props', jsProps);
    setProperty(obj, 'children', jsChildren);

    return obj;
  }
}

enum VueRouterMode { hash, history, abstract_ }

class VueRouter extends VuePlugin implements VueAppOptions {
  static void use() => VuePlugin.use('VueRouter');

  dynamic _router;

  VueRouter({List<VueRoute> routes, VueRouterMode mode: null, String base: null}) {
    var jsRoutes = routes.map((route) => route.jsargs()).toList();
    var jsMode = null;

    if (mode != null) {
      switch (mode) {
      case VueRouterMode.hash: jsMode = 'hash'; break;
      case VueRouterMode.history: jsMode = 'history'; break;
      case VueRouterMode.abstract_: jsMode = 'abstract'; break;
      }
    }

    var args = newObject();
    setProperty(args, 'routes', jsRoutes);
    setProperty(args, 'mode', jsMode);
    setProperty(args, 'base', base);

    _router = callConstructor(_vueRouter, [args]);
  }

  VueRouter._(this._router);

  VueRouterEvents push(VueRouterLocation location) => _call('push', location);
  VueRouterEvents replace(VueRouterLocation location) => _call('replace', location);

  VueRouterEvents _call(String name, VueRouterLocation location) {
    var onComplete = _newEventInfo();
    var onAbort = _newEventInfo();
    callMethod(_router, name, [location.jsargs(), onComplete.callback,
                               onAbort.callback]);
    return new VueRouterEvents(onComplete: onComplete.completer.future,
                               onAbort: onAbort.completer.future);
  }

  void go(int where) => callMethod(_router, 'go', [where]);

  _EventInfo _newEventInfo() {
    var compl = new Completer<VueRouteInfo>();
    return new _EventInfo(compl,
                          allowInterop((route) =>
                                        compl.complete(route != null ?
                                                       new VueRouteInfo(route) :
                                                       null)));
  }

  Map<String, dynamic> get appOptions => {'router': _router};
}

abstract class VueRouterMixin {
  dynamic vuedart_get(String key);

  VueRouter get $router => new VueRouter._(vuedart_get(r'$router'));
  VueRouteInfo get $route => new VueRouteInfo(vuedart_get(r'$route'));
}
