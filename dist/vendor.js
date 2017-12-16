window.aspenAssets$v1 = window.aspenAssets$v1 || {};
/*!
 * Vue.js v2.5.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return!1===e}function i(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}function o(e){return null!==e&&"object"==typeof e}function a(e){return"[object Object]"===Oi.call(e)}function s(e){return"[object RegExp]"===Oi.call(e)}function c(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function u(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function l(e){var t=parseFloat(e);return isNaN(t)?e:t}function f(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function d(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function p(e,t){return Ei.call(e,t)}function v(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function h(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function m(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function y(e,t){for(var n in t)e[n]=t[n];return e}function g(e){for(var t={},n=0;n<e.length;n++)e[n]&&y(t,e[n]);return t}function _(e,t,n){}function b(e,t){if(e===t)return!0;var n=o(e),r=o(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),a=Array.isArray(t);if(i&&a)return e.length===t.length&&e.every(function(e,n){return b(e,t[n])});if(i||a)return!1;var s=Object.keys(e),c=Object.keys(t);return s.length===c.length&&s.every(function(n){return b(e[n],t[n])})}catch(e){return!1}}function $(e,t){for(var n=0;n<e.length;n++)if(b(e[n],t))return n;return-1}function C(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function w(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function x(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function k(e){if(!Vi.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function A(e){return"function"==typeof e&&/native code/.test(e.toString())}function O(e){co.target&&uo.push(co.target),co.target=e}function S(){co.target=uo.pop()}function T(e){return new lo(void 0,void 0,void 0,String(e))}function E(e,t){var n=e.componentOptions,r=new lo(e.tag,e.data,e.children,e.text,e.elm,e.context,n,e.asyncFactory);return r.ns=e.ns,r.isStatic=e.isStatic,r.key=e.key,r.isComment=e.isComment,r.isCloned=!0,t&&(e.children&&(r.children=j(e.children,!0)),n&&n.children&&(n.children=j(n.children,!0))),r}function j(e,t){for(var n=e.length,r=new Array(n),i=0;i<n;i++)r[i]=E(e[i],t);return r}function N(e,t,n){e.__proto__=t}function L(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];x(e,o,t[o])}}function I(e,t){if(o(e)&&!(e instanceof lo)){var n;return p(e,"__ob__")&&e.__ob__ instanceof go?n=e.__ob__:yo.shouldConvert&&!ro()&&(Array.isArray(e)||a(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new go(e)),t&&n&&n.vmCount++,n}}function M(e,t,n,r,i){var o=new co,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&I(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return co.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(t)&&F(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!==t&&r!==r||(c?c.call(e,t):n=t,u=!i&&I(t),o.notify())}})}}function D(e,t,n){if(Array.isArray(e)&&c(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(M(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function P(e,t){if(Array.isArray(e)&&c(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||p(e,t)&&(delete e[t],n&&n.dep.notify())}}function F(e){for(var t=void 0,n=0,r=e.length;n<r;n++)(t=e[n])&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&F(t)}function R(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),s=0;s<o.length;s++)r=e[n=o[s]],i=t[n],p(e,n)?a(r)&&a(i)&&R(r,i):D(e,n,i);return e}function H(e,t,n){return n?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):e;return r?R(r,i):i}:t?e?function(){return R("function"==typeof t?t.call(this):t,"function"==typeof e?e.call(this):e)}:t:e}function B(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function U(e,t,n,r){var i=Object.create(e||null);return t?y(i,t):i}function V(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[Ni(i)]={type:null});else if(a(n))for(var s in n)i=n[s],o[Ni(s)]=a(i)?i:{type:i};e.props=o}}function z(e,t){var n=e.inject,r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(a(n))for(var o in n){var s=n[o];r[o]=a(s)?y({from:o},s):{from:s}}}function K(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function J(e,t,n){function r(r){var i=_o[r]||Co;c[r]=i(e[r],t[r],n,r)}"function"==typeof t&&(t=t.options),V(t,n),z(t,n),K(t);var i=t.extends;if(i&&(e=J(e,i,n)),t.mixins)for(var o=0,a=t.mixins.length;o<a;o++)e=J(e,t.mixins[o],n);var s,c={};for(s in e)r(s);for(s in t)p(e,s)||r(s);return c}function q(e,t,n,r){if("string"==typeof n){var i=e[t];if(p(i,n))return i[n];var o=Ni(n);if(p(i,o))return i[o];var a=Li(o);if(p(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function W(e,t,n,r){var i=t[e],o=!p(n,e),a=n[e];if(Y(Boolean,i.type)&&(o&&!p(i,"default")?a=!1:Y(String,i.type)||""!==a&&a!==Mi(e)||(a=!0)),void 0===a){a=G(r,i,e);var s=yo.shouldConvert;yo.shouldConvert=!0,I(a),yo.shouldConvert=s}return a}function G(e,t,n){if(p(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==Z(t.type)?r.call(e):r}}function Z(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function Y(e,t){if(!Array.isArray(t))return Z(t)===Z(e);for(var n=0,r=t.length;n<r;n++)if(Z(t[n])===Z(e))return!0;return!1}function Q(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){X(e,r,"errorCaptured hook")}}X(e,t,n)}function X(e,t,n){if(Bi.errorHandler)try{return Bi.errorHandler.call(null,e,t,n)}catch(e){ee(e,null,"config.errorHandler")}ee(e,t,n)}function ee(e,t,n){if(!Ki||"undefined"==typeof console)throw e;console.error(e)}function te(){xo=!1;var e=wo.slice(0);wo.length=0;for(var t=0;t<e.length;t++)e[t]()}function ne(e){return e._withTask||(e._withTask=function(){ko=!0;var t=e.apply(null,arguments);return ko=!1,t})}function re(e,t){var n;if(wo.push(function(){if(e)try{e.call(t)}catch(e){Q(e,t,"nextTick")}else n&&n(t)}),xo||(xo=!0,ko?$o():bo()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}function ie(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,e)}return t.fns=e,t}function oe(t,n,r,i,o){var a,s,c,u;for(a in t)s=t[a],c=n[a],u=Eo(a),e(s)||(e(c)?(e(s.fns)&&(s=t[a]=ie(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in n)e(t[a])&&i((u=Eo(a)).name,n[a],u.capture)}function ae(r,i,o){function a(){o.apply(this,arguments),d(s.fns,a)}r instanceof lo&&(r=r.data.hook||(r.data.hook={}));var s,c=r[i];e(c)?s=ie([a]):t(c.fns)&&n(c.merged)?(s=c).fns.push(a):s=ie([c,a]),s.merged=!0,r[i]=s}function se(n,r,i){var o=r.options.props;if(!e(o)){var a={},s=n.attrs,c=n.props;if(t(s)||t(c))for(var u in o){var l=Mi(u);ce(a,c,u,l,!0)||ce(a,s,u,l,!1)}return a}}function ce(e,n,r,i,o){if(t(n)){if(p(n,r))return e[r]=n[r],o||delete n[r],!0;if(p(n,i))return e[r]=n[i],o||delete n[i],!0}return!1}function ue(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function le(e){return i(e)?[T(e)]:Array.isArray(e)?de(e):void 0}function fe(e){return t(e)&&t(e.text)&&r(e.isComment)}function de(r,o){var a,s,c,u,l=[];for(a=0;a<r.length;a++)e(s=r[a])||"boolean"==typeof s||(u=l[c=l.length-1],Array.isArray(s)?s.length>0&&(fe((s=de(s,(o||"")+"_"+a))[0])&&fe(u)&&(l[c]=T(u.text+s[0].text),s.shift()),l.push.apply(l,s)):i(s)?fe(u)?l[c]=T(u.text+s):""!==s&&l.push(T(s)):fe(s)&&fe(u)?l[c]=T(u.text+s.text):(n(r._isVList)&&t(s.tag)&&e(s.key)&&t(o)&&(s.key="__vlist"+o+"_"+a+"__"),l.push(s)));return l}function pe(e,t){return(e.__esModule||oo&&"Module"===e[Symbol.toStringTag])&&(e=e.default),o(e)?t.extend(e):e}function ve(e,t,n,r,i){var o=po();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function he(r,i,a){if(n(r.error)&&t(r.errorComp))return r.errorComp;if(t(r.resolved))return r.resolved;if(n(r.loading)&&t(r.loadingComp))return r.loadingComp;if(!t(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var e=0,t=s.length;e<t;e++)s[e].$forceUpdate()},l=C(function(e){r.resolved=pe(e,i),c||u()}),f=C(function(e){t(r.errorComp)&&(r.error=!0,u())}),d=r(l,f);return o(d)&&("function"==typeof d.then?e(r.resolved)&&d.then(l,f):t(d.component)&&"function"==typeof d.component.then&&(d.component.then(l,f),t(d.error)&&(r.errorComp=pe(d.error,i)),t(d.loading)&&(r.loadingComp=pe(d.loading,i),0===d.delay?r.loading=!0:setTimeout(function(){e(r.resolved)&&e(r.error)&&(r.loading=!0,u())},d.delay||200)),t(d.timeout)&&setTimeout(function(){e(r.resolved)&&f(null)},d.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}function me(e){return e.isComment&&e.asyncFactory}function ye(e){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];if(t(r)&&(t(r.componentOptions)||me(r)))return r}}function ge(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&$e(e,t)}function _e(e,t,n){n?To.$once(e,t):To.$on(e,t)}function be(e,t){To.$off(e,t)}function $e(e,t,n){To=e,oe(t,n||{},_e,be,e),To=void 0}function Ce(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.functionalContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=o.data.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children):c.push(o)}}for(var u in n)n[u].every(we)&&delete n[u];return n}function we(e){return e.isComment||" "===e.text}function xe(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?xe(e[n],t):t[e[n].key]=e[n].fn;return t}function ke(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Ae(e,t,n){e.$el=t,e.$options.render||(e.$options.render=po),je(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new Ro(e,r,_),n=!1,null==e.$vnode&&(e._isMounted=!0,je(e,"mounted")),e}function Oe(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==Ui);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data&&r.data.attrs||Ui,e.$listeners=n||Ui,t&&e.$options.props){yo.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=W(u,e.$options.props,t,e)}yo.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,$e(e,n,l)}o&&(e.$slots=Ce(i,r.context),e.$forceUpdate())}function Se(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Te(e,t){if(t){if(e._directInactive=!1,Se(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Te(e.$children[n]);je(e,"activated")}}function Ee(e,t){if(!(t&&(e._directInactive=!0,Se(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Ee(e.$children[n]);je(e,"deactivated")}}function je(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){Q(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function Ne(){Po=No.length=Lo.length=0,Io={},Mo=Do=!1}function Le(){Do=!0;var e,t;for(No.sort(function(e,t){return e.id-t.id}),Po=0;Po<No.length;Po++)t=(e=No[Po]).id,Io[t]=null,e.run();var n=Lo.slice(),r=No.slice();Ne(),De(n),Ie(r),io&&Bi.devtools&&io.emit("flush")}function Ie(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&je(r,"updated")}}function Me(e){e._inactive=!1,Lo.push(e)}function De(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Te(e[t],!0)}function Pe(e){var t=e.id;if(null==Io[t]){if(Io[t]=!0,Do){for(var n=No.length-1;n>Po&&No[n].id>e.id;)n--;No.splice(n+1,0,e)}else No.push(e);Mo||(Mo=!0,re(Le))}}function Fe(e){Ho.clear(),Re(e,Ho)}function Re(e,t){var n,r,i=Array.isArray(e);if((i||o(e))&&Object.isExtensible(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(i)for(n=e.length;n--;)Re(e[n],t);else for(n=(r=Object.keys(e)).length;n--;)Re(e[r[n]],t)}}function He(e,t,n){Bo.get=function(){return this[t][n]},Bo.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Bo)}function Be(e){e._watchers=[];var t=e.$options;t.props&&Ue(e,t.props),t.methods&&We(e,t.methods),t.data?Ve(e):I(e._data={},!0),t.computed&&Ke(e,t.computed),t.watch&&t.watch!==Qi&&Ge(e,t.watch)}function Ue(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;yo.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=W(o,t,n,e);M(r,o,a),o in e||He(e,"_props",o)}(a);yo.shouldConvert=!0}function Ve(e){var t=e.$options.data;a(t=e._data="function"==typeof t?ze(t,e):t||{})||(t={});for(var n=Object.keys(t),r=e.$options.props,i=n.length;i--;){var o=n[i];r&&p(r,o)||w(o)||He(e,"_data",o)}I(t,!0)}function ze(e,t){try{return e.call(t,t)}catch(e){return Q(e,t,"data()"),{}}}function Ke(e,t){var n=e._computedWatchers=Object.create(null),r=ro();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new Ro(e,a||_,_,Uo)),i in e||Je(e,i,o)}}function Je(e,t,n){var r=!ro();"function"==typeof n?(Bo.get=r?qe(t):n,Bo.set=_):(Bo.get=n.get?r&&!1!==n.cache?qe(t):n.get:_,Bo.set=n.set?n.set:_),Object.defineProperty(e,t,Bo)}function qe(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),co.target&&t.depend(),t.value}}function We(e,t){for(var n in t)e[n]=null==t[n]?_:h(t[n],e)}function Ge(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Ze(e,n,r[i]);else Ze(e,n,r)}}function Ze(e,t,n,r){return a(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Ye(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Qe(e){var t=Xe(e.$options.inject,e);t&&(yo.shouldConvert=!1,Object.keys(t).forEach(function(n){M(e,n,t[n])}),yo.shouldConvert=!0)}function Xe(e,t){if(e){for(var n=Object.create(null),r=oo?Reflect.ownKeys(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}):Object.keys(e),i=0;i<r.length;i++){for(var o=r[i],a=e[o].from,s=t;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}return n}}function et(e,n){var r,i,a,s,c;if(Array.isArray(e)||"string"==typeof e)for(r=new Array(e.length),i=0,a=e.length;i<a;i++)r[i]=n(e[i],i);else if("number"==typeof e)for(r=new Array(e),i=0;i<e;i++)r[i]=n(i+1,i);else if(o(e))for(s=Object.keys(e),r=new Array(s.length),i=0,a=s.length;i<a;i++)c=s[i],r[i]=n(e[c],c,i);return t(r)&&(r._isVList=!0),r}function tt(e,t,n,r){var i,o=this.$scopedSlots[e];if(o)n=n||{},r&&(n=y(y({},r),n)),i=o(n)||t;else{var a=this.$slots[e];a&&(a._rendered=!0),i=a||t}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function nt(e){return q(this.$options,"filters",e,!0)||Pi}function rt(e,t,n,r){var i=Bi.keyCodes[t]||n;return i?Array.isArray(i)?-1===i.indexOf(e):i!==e:r?Mi(r)!==t:void 0}function it(e,t,n,r,i){if(n)if(o(n)){Array.isArray(n)&&(n=g(n));var a;for(var s in n)!function(o){if("class"===o||"style"===o||Ti(o))a=e;else{var s=e.attrs&&e.attrs.type;a=r||Bi.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}o in a||(a[o]=n[o],i&&((e.on||(e.on={}))["update:"+o]=function(e){n[o]=e}))}(s)}else;return e}function ot(e,t){var n=this.$options,r=n.cached||(n.cached=[]),i=r[e];return i&&!t?Array.isArray(i)?j(i):E(i):(i=r[e]=n.staticRenderFns[e].call(this._renderProxy,null,this),st(i,"__static__"+e,!1),i)}function at(e,t,n){return st(e,"__once__"+t+(n?"_"+n:""),!0),e}function st(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&ct(e[r],t+"_"+r,n);else ct(e,t,n)}function ct(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function ut(e,t){if(t)if(a(t)){var n=e.on=e.on?y({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function lt(e){e._o=at,e._n=l,e._s=u,e._l=et,e._t=tt,e._q=b,e._i=$,e._m=ot,e._f=nt,e._k=rt,e._b=it,e._v=T,e._e=po,e._u=xe,e._g=ut}function ft(e,t,r,i,o){var a=o.options;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||Ui,this.injections=Xe(a.inject,i),this.slots=function(){return Ce(r,i)};var s=Object.create(i),c=n(a._compiled),u=!c;c&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||Ui),a._scopeId?this._c=function(e,t,n,r){var o=_t(s,e,t,n,r,u);return o&&(o.functionalScopeId=a._scopeId,o.functionalContext=i),o}:this._c=function(e,t,n,r){return _t(s,e,t,n,r,u)}}function dt(e,n,r,i,o){var a=e.options,s={},c=a.props;if(t(c))for(var u in c)s[u]=W(u,c,n||Ui);else t(r.attrs)&&pt(s,r.attrs),t(r.props)&&pt(s,r.props);var l=new ft(r,s,o,i,e),f=a.render.call(null,l._c,l);return f instanceof lo&&(f.functionalContext=i,f.functionalOptions=a,r.slot&&((f.data||(f.data={})).slot=r.slot)),f}function pt(e,t){for(var n in t)e[Ni(n)]=t[n]}function vt(r,i,a,s,c){if(!e(r)){var u=a.$options._base;if(o(r)&&(r=u.extend(r)),"function"==typeof r){var l;if(e(r.cid)&&(l=r,void 0===(r=he(l,u,a))))return ve(l,i,a,s,c);i=i||{},xt(r),t(i.model)&&gt(r.options,i);var f=se(i,r,c);if(n(r.options.functional))return dt(r,f,i,a,s);var d=i.on;if(i.on=i.nativeOn,n(r.options.abstract)){var p=i.slot;i={},p&&(i.slot=p)}mt(i);var v=r.options.name||c;return new lo("vue-component-"+r.cid+(v?"-"+v:""),i,void 0,void 0,void 0,a,{Ctor:r,propsData:f,listeners:d,tag:c,children:s},l)}}}function ht(e,n,r,i){var o=e.componentOptions,a={_isComponent:!0,parent:n,propsData:o.propsData,_componentTag:o.tag,_parentVnode:e,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:r||null,_refElm:i||null},s=e.data.inlineTemplate;return t(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function mt(e){e.hook||(e.hook={});for(var t=0;t<zo.length;t++){var n=zo[t],r=e.hook[n],i=Vo[n];e.hook[n]=r?yt(i,r):i}}function yt(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function gt(e,n){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});t(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}function _t(e,t,r,o,a,s){return(Array.isArray(r)||i(r))&&(a=o,o=r,r=void 0),n(s)&&(a=Jo),bt(e,t,r,o,a)}function bt(e,n,r,i,o){if(t(r)&&t(r.__ob__))return po();if(t(r)&&t(r.is)&&(n=r.is),!n)return po();Array.isArray(i)&&"function"==typeof i[0]&&((r=r||{}).scopedSlots={default:i[0]},i.length=0),o===Jo?i=le(i):o===Ko&&(i=ue(i));var a,s;if("string"==typeof n){var c;s=e.$vnode&&e.$vnode.ns||Bi.getTagNamespace(n),a=Bi.isReservedTag(n)?new lo(Bi.parsePlatformTagName(n),r,i,void 0,void 0,e):t(c=q(e.$options,"components",n))?vt(c,r,e,i,n):new lo(n,r,i,void 0,void 0,e)}else a=vt(n,r,e,i);return t(a)?(s&&$t(a,s),a):po()}function $t(r,i,o){if(r.ns=i,"foreignObject"===r.tag&&(i=void 0,o=!0),t(r.children))for(var a=0,s=r.children.length;a<s;a++){var c=r.children[a];t(c.tag)&&(e(c.ns)||n(o))&&$t(c,i,o)}}function Ct(e){e._vnode=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=Ce(t._renderChildren,r),e.$scopedSlots=Ui,e._c=function(t,n,r,i){return _t(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return _t(e,t,n,r,i,!0)};var i=n&&n.data;M(e,"$attrs",i&&i.attrs||Ui,null,!0),M(e,"$listeners",t._parentListeners||Ui,null,!0)}function wt(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function xt(e){var t=e.options;if(e.super){var n=xt(e.super);if(n!==e.superOptions){e.superOptions=n;var r=kt(e);r&&y(e.extendOptions,r),(t=e.options=J(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function kt(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=At(n[o],r[o],i[o]));return t}function At(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(t.indexOf(e[i])>=0||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function Ot(e){this._init(e)}function St(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=m(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}function Tt(e){e.mixin=function(e){return this.options=J(this.options,e),this}}function Et(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=J(n.options,e),a.super=n,a.options.props&&jt(a),a.options.computed&&Nt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Ri.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=y({},a.options),i[r]=a,a}}function jt(e){var t=e.options.props;for(var n in t)He(e.prototype,"_props",n)}function Nt(e){var t=e.options.computed;for(var n in t)Je(e.prototype,n,t[n])}function Lt(e){Ri.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&a(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function It(e){return e&&(e.Ctor.options.name||e.tag)}function Mt(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!s(e)&&e.test(t)}function Dt(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=It(a.componentOptions);s&&!t(s)&&Pt(n,o,r,i)}}}function Pt(e,t,n,r){var i=e[t];i&&i!==r&&i.componentInstance.$destroy(),e[t]=null,d(n,t)}function Ft(e){for(var n=e.data,r=e,i=e;t(i.componentInstance);)(i=i.componentInstance._vnode).data&&(n=Rt(i.data,n));for(;t(r=r.parent);)r.data&&(n=Rt(n,r.data));return Ht(n.staticClass,n.class)}function Rt(e,n){return{staticClass:Bt(e.staticClass,n.staticClass),class:t(e.class)?[e.class,n.class]:n.class}}function Ht(e,n){return t(e)||t(n)?Bt(e,Ut(n)):""}function Bt(e,t){return e?t?e+" "+t:e:t||""}function Ut(e){return Array.isArray(e)?Vt(e):o(e)?zt(e):"string"==typeof e?e:""}function Vt(e){for(var n,r="",i=0,o=e.length;i<o;i++)t(n=Ut(e[i]))&&""!==n&&(r&&(r+=" "),r+=n);return r}function zt(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function Kt(e){return ha(e)?"svg":"math"===e?"math":void 0}function Jt(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function qt(e,t){var n=e.data.ref;if(n){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?d(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function Wt(r,i){return r.key===i.key&&(r.tag===i.tag&&r.isComment===i.isComment&&t(r.data)===t(i.data)&&Gt(r,i)||n(r.isAsyncPlaceholder)&&r.asyncFactory===i.asyncFactory&&e(i.asyncFactory.error))}function Gt(e,n){if("input"!==e.tag)return!0;var r,i=t(r=e.data)&&t(r=r.attrs)&&r.type,o=t(r=n.data)&&t(r=r.attrs)&&r.type;return i===o||ga(i)&&ga(o)}function Zt(e,n,r){var i,o,a={};for(i=n;i<=r;++i)t(o=e[i].key)&&(a[o]=i);return a}function Yt(e,t){(e.data.directives||t.data.directives)&&Qt(e,t)}function Qt(e,t){var n,r,i,o=e===$a,a=t===$a,s=Xt(e.data.directives,e.context),c=Xt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,tn(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(tn(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)tn(u[n],"inserted",t,e)};o?ae(t,"insert",f):f()}if(l.length&&ae(t,"postpatch",function(){for(var n=0;n<l.length;n++)tn(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||tn(s[n],"unbind",e,e,a)}function Xt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)(i=e[r]).modifiers||(i.modifiers=xa),n[en(i)]=i,i.def=q(t.$options,"directives",i.name,!0);return n}function en(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function tn(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){Q(r,n.context,"directive "+e.name+" "+t+" hook")}}function nn(n,r){var i=r.componentOptions;if(!(t(i)&&!1===i.Ctor.options.inheritAttrs||e(n.data.attrs)&&e(r.data.attrs))){var o,a,s=r.elm,c=n.data.attrs||{},u=r.data.attrs||{};t(u.__ob__)&&(u=r.data.attrs=y({},u));for(o in u)a=u[o],c[o]!==a&&rn(s,o,a);(Wi||Gi)&&u.value!==c.value&&rn(s,"value",u.value);for(o in c)e(u[o])&&(la(o)?s.removeAttributeNS(ua,fa(o)):sa(o)||s.removeAttribute(o))}}function rn(e,t,n){ca(t)?da(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):sa(t)?e.setAttribute(t,da(n)||"false"===n?"false":"true"):la(t)?da(n)?e.removeAttributeNS(ua,fa(t)):e.setAttributeNS(ua,t,n):da(n)?e.removeAttribute(t):e.setAttribute(t,n)}function on(n,r){var i=r.elm,o=r.data,a=n.data;if(!(e(o.staticClass)&&e(o.class)&&(e(a)||e(a.staticClass)&&e(a.class)))){var s=Ft(r),c=i._transitionClasses;t(c)&&(s=Bt(s,Ut(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function an(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,d=0,p=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||d||p){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:p++;break;case 41:p--;break;case 91:d++;break;case 93:d--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&Sa.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=sn(o,a[i]);return o}function sn(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function cn(e){console.error("[Vue compiler]: "+e)}function un(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function ln(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function fn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function dn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function pn(e,t,n,r,i,o){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t),r&&r.passive&&(delete r.passive,t="&"+t);var a;r&&r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n,modifiers:r},c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s}function vn(e,t,n){var r=hn(e,":"+t)||hn(e,"v-bind:"+t);if(null!=r)return an(r);if(!1!==n){var i=hn(e,t);if(null!=i)return JSON.stringify(i)}}function hn(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function mn(e,t,n){var r=n||{},i=r.number,o="$$v";r.trim&&(o="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(o="_n("+o+")");var a=yn(t,o);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+a+"}"}}function yn(e,t){var n=gn(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function gn(e){if(Zo=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Zo-1)return(Xo=e.lastIndexOf("."))>-1?{exp:e.slice(0,Xo),key:'"'+e.slice(Xo+1)+'"'}:{exp:e,key:null};for(Yo=e,Xo=ea=ta=0;!bn();)$n(Qo=_n())?wn(Qo):91===Qo&&Cn(Qo);return{exp:e.slice(0,ea),key:e.slice(ea+1,ta)}}function _n(){return Yo.charCodeAt(++Xo)}function bn(){return Xo>=Zo}function $n(e){return 34===e||39===e}function Cn(e){var t=1;for(ea=Xo;!bn();)if(e=_n(),$n(e))wn(e);else if(91===e&&t++,93===e&&t--,0===t){ta=Xo;break}}function wn(e){for(var t=e;!bn()&&(e=_n())!==t;);}function xn(e,t,n){var r=n&&n.number,i=vn(e,"value")||"null",o=vn(e,"true-value")||"true",a=vn(e,"false-value")||"false";ln(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),pn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+t+"=$$a.concat([$$v]))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+yn(t,"$$c")+"}",null,!0)}function kn(e,t,n){var r=n&&n.number,i=vn(e,"value")||"null";ln(e,"checked","_q("+t+","+(i=r?"_n("+i+")":i)+")"),pn(e,"change",yn(t,i),null,!0)}function An(e,t,n){var r="var $$selectedVal = "+('Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"})")+";";pn(e,"change",r=r+" "+yn(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),null,!0)}function On(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Ta:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=yn(t,l);c&&(f="if($event.target.composing)return;"+f),ln(e,"value","("+t+")"),pn(e,u,f,null,!0),(s||a)&&pn(e,"blur","$forceUpdate()")}function Sn(e){if(t(e[Ta])){var n=qi?"change":"input";e[n]=[].concat(e[Ta],e[n]||[]),delete e[Ta]}t(e[Ea])&&(e.change=[].concat(e[Ea],e.change||[]),delete e[Ea])}function Tn(e,t,n){var r=na;return function i(){null!==e.apply(null,arguments)&&jn(t,i,n,r)}}function En(e,t,n,r,i){t=ne(t),n&&(t=Tn(t,e,r)),na.addEventListener(e,t,Xi?{capture:r,passive:i}:r)}function jn(e,t,n,r){(r||na).removeEventListener(e,t._withTask||t,n)}function Nn(t,n){if(!e(t.data.on)||!e(n.data.on)){var r=n.data.on||{},i=t.data.on||{};na=n.elm,Sn(r),oe(r,i,En,jn,n.context),na=void 0}}function Ln(n,r){if(!e(n.data.domProps)||!e(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};t(c.__ob__)&&(c=r.data.domProps=y({},c));for(i in s)e(c[i])&&(a[i]="");for(i in c){if(o=c[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i){a._value=o;var u=e(o)?"":String(o);In(a,u)&&(a.value=u)}else a[i]=o}}}function In(e,t){return!e.composing&&("OPTION"===e.tagName||Mn(e,t)||Dn(e,t))}function Mn(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}function Dn(e,n){var r=e.value,i=e._vModifiers;return t(i)&&i.number?l(r)!==l(n):t(i)&&i.trim?r.trim()!==n.trim():r!==n}function Pn(e){var t=Fn(e.style);return e.staticStyle?y(e.staticStyle,t):t}function Fn(e){return Array.isArray(e)?g(e):"string"==typeof e?La(e):e}function Rn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode).data&&(n=Pn(i.data))&&y(r,n);(n=Pn(e.data))&&y(r,n);for(var o=e;o=o.parent;)o.data&&(n=Pn(o.data))&&y(r,n);return r}function Hn(n,r){var i=r.data,o=n.data;if(!(e(i.staticStyle)&&e(i.style)&&e(o.staticStyle)&&e(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,d=Fn(r.data.style)||{};r.data.normalizedStyle=t(d.__ob__)?y({},d):d;var p=Rn(r,!0);for(s in f)e(p[s])&&Da(c,s,"");for(s in p)(a=p[s])!==f[s]&&Da(c,s,null==a?"":a)}}function Bn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Un(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?e.setAttribute("class",n):e.removeAttribute("class")}}function Vn(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&y(t,Ha(e.name||"v")),y(t,e),t}return"string"==typeof e?Ha(e):void 0}}function zn(e){Wa(function(){Wa(e)})}function Kn(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Bn(e,t))}function Jn(e,t){e._transitionClasses&&d(e._transitionClasses,t),Un(e,t)}function qn(e,t,n){var r=Wn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Ua?Ka:qa,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Wn(e,t){var n,r=window.getComputedStyle(e),i=r[za+"Delay"].split(", "),o=r[za+"Duration"].split(", "),a=Gn(i,o),s=r[Ja+"Delay"].split(", "),c=r[Ja+"Duration"].split(", "),u=Gn(s,c),l=0,f=0;return t===Ua?a>0&&(n=Ua,l=a,f=o.length):t===Va?u>0&&(n=Va,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?Ua:Va:null)?n===Ua?o.length:c.length:0,{type:n,timeout:l,propCount:f,hasTransform:n===Ua&&Ga.test(r[za+"Property"])}}function Gn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Zn(t)+Zn(e[n])}))}function Zn(e){return 1e3*Number(e.slice(0,-1))}function Yn(n,r){var i=n.elm;t(i._leaveCb)&&(i._leaveCb.cancelled=!0,i._leaveCb());var a=Vn(n.data.transition);if(!e(a)&&!t(i._enterCb)&&1===i.nodeType){for(var s=a.css,c=a.type,u=a.enterClass,f=a.enterToClass,d=a.enterActiveClass,p=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,b=a.beforeAppear,$=a.appear,w=a.afterAppear,x=a.appearCancelled,k=a.duration,A=jo,O=jo.$vnode;O&&O.parent;)A=(O=O.parent).context;var S=!A._isMounted||!n.isRootInsert;if(!S||$||""===$){var T=S&&p?p:u,E=S&&h?h:d,j=S&&v?v:f,N=S?b||m:m,L=S&&"function"==typeof $?$:y,I=S?w||g:g,M=S?x||_:_,D=l(o(k)?k.enter:k),P=!1!==s&&!Wi,F=er(L),R=i._enterCb=C(function(){P&&(Jn(i,j),Jn(i,E)),R.cancelled?(P&&Jn(i,T),M&&M(i)):I&&I(i),i._enterCb=null});n.data.show||ae(n,"insert",function(){var e=i.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),L&&L(i,R)}),N&&N(i),P&&(Kn(i,T),Kn(i,E),zn(function(){Kn(i,j),Jn(i,T),R.cancelled||F||(Xn(D)?setTimeout(R,D):qn(i,c,R))})),n.data.show&&(r&&r(),L&&L(i,R)),P||F||R()}}}function Qn(n,r){function i(){x.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),b&&(Kn(a,f),Kn(a,p),zn(function(){Kn(a,d),Jn(a,f),x.cancelled||$||(Xn(w)?setTimeout(x,w):qn(a,u,x))})),h&&h(a,x),b||$||x())}var a=n.elm;t(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=Vn(n.data.transition);if(e(s))return r();if(!t(a._leaveCb)&&1===a.nodeType){var c=s.css,u=s.type,f=s.leaveClass,d=s.leaveToClass,p=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,y=s.leaveCancelled,g=s.delayLeave,_=s.duration,b=!1!==c&&!Wi,$=er(h),w=l(o(_)?_.leave:_),x=a._leaveCb=C(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),b&&(Jn(a,d),Jn(a,p)),x.cancelled?(b&&Jn(a,f),y&&y(a)):(r(),m&&m(a)),a._leaveCb=null});g?g(i):i()}}function Xn(e){return"number"==typeof e&&!isNaN(e)}function er(n){if(e(n))return!1;var r=n.fns;return t(r)?er(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function tr(e,t){!0!==t.data.show&&Yn(t)}function nr(e,t,n){rr(e,t,n),(qi||Gi)&&setTimeout(function(){rr(e,t,n)},0)}function rr(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=$(r,or(a))>-1,a.selected!==o&&(a.selected=o);else if(b(or(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function ir(e,t){return t.every(function(t){return!b(t,e)})}function or(e){return"_value"in e?e._value:e.value}function ar(e){e.target.composing=!0}function sr(e){e.target.composing&&(e.target.composing=!1,cr(e.target,"input"))}function cr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ur(e){return!e.componentInstance||e.data&&e.data.transition?e:ur(e.componentInstance._vnode)}function lr(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?lr(ye(t.children)):e}function fr(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Ni(o)]=i[o];return t}function dr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function pr(e){for(;e=e.parent;)if(e.data.transition)return!0}function vr(e,t){return t.key===e.key&&t.tag===e.tag}function hr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function mr(e){e.data.newPos=e.elm.getBoundingClientRect()}function yr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function gr(e,t){var n=t?as(t):is;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){(i=r.index)>a&&o.push(JSON.stringify(e.slice(a,i)));var s=an(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function _r(e,t){var n=t?Fs:Ps;return e.replace(n,function(e){return Ds[e]})}function br(e,t){function n(t){l+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||Di,u=t.canBeLeftOpenTag||Di,l=0;e;){if(i=e,o&&Is(o)){var f=0,d=o.toLowerCase(),p=Ms[d]||(Ms[d]=new RegExp("([\\s\\S]*?)(</"+d+"[^>]*>)","i")),v=e.replace(p,function(e,n,r){return f=r.length,Is(d)||"noscript"===d||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Hs(d,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});l+=e.length-v.length,e=v,r(d,l-f,l)}else{var h=e.indexOf("<");if(0===h){if(bs.test(e)){var m=e.indexOf("--\x3e");if(m>=0){t.shouldKeepComment&&t.comment(e.substring(4,m)),n(m+3);continue}}if($s.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var g=e.match(_s);if(g){n(g[0].length);continue}var _=e.match(gs);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var t=e.match(ms);if(t){var r={tagName:t[1],attrs:[],start:l};n(t[0].length);for(var i,o;!(i=e.match(ys))&&(o=e.match(ps));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&ds(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||!!i,f=e.attrs.length,d=new Array(f),p=0;p<f;p++){var v=e.attrs[p];Cs&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;d[p]={name:v[1],value:_r(h,m)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:d}),o=n),t.start&&t.start(n,d,l,e.start,e.end)}($),Hs(o,e)&&n(1);continue}}var C=void 0,w=void 0,x=void 0;if(h>=0){for(w=e.slice(h);!(gs.test(w)||ms.test(w)||bs.test(w)||$s.test(w)||(x=w.indexOf("<",1))<0);)h+=x,w=e.slice(h);C=e.substring(0,h),n(h)}h<0&&(C=e,e=""),t.chars&&C&&t.chars(C)}if(e===i){t.chars&&t.chars(e);break}}r()}function $r(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:Rr(t),parent:n,children:[]}}function Cr(e,t){function n(e){e.pre&&(s=!1),Ss(e.tag)&&(c=!1)}ws=t.warn||cn,Ss=t.isPreTag||Di,Ts=t.mustUseProp||Di,Es=t.getTagNamespace||Di,ks=un(t.modules,"transformNode"),As=un(t.modules,"preTransformNode"),Os=un(t.modules,"postTransformNode"),xs=t.delimiters;var r,i,o=[],a=!1!==t.preserveWhitespace,s=!1,c=!1;return br(e,{warn:ws,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,start:function(e,a,u){var l=i&&i.ns||Es(e);qi&&"svg"===l&&(a=Ur(a));var f=$r(e,a,i);l&&(f.ns=l),Br(f)&&!ro()&&(f.forbidden=!0);for(var d=0;d<As.length;d++)f=As[d](f,t)||f;if(s||(wr(f),f.pre&&(s=!0)),Ss(f.tag)&&(c=!0),s?xr(f):f.processed||(Sr(f),Tr(f),Lr(f),kr(f,t)),r?o.length||r.if&&(f.elseif||f.else)&&Nr(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)Er(f,i);else if(f.slotScope){i.plain=!1;var p=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[p]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f));for(var v=0;v<Os.length;v++)Os[v](f,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!qi||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Hr(i)?e:Ws(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=gr(e,xs))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}},comment:function(e){i.children.push({type:3,text:e,isComment:!0})}}),r}function wr(e){null!=hn(e,"v-pre")&&(e.pre=!0)}function xr(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function kr(e,t){Ar(e),e.plain=!e.key&&!e.attrsList.length,Or(e),Ir(e),Mr(e);for(var n=0;n<ks.length;n++)e=ks[n](e,t)||e;Dr(e)}function Ar(e){var t=vn(e,"key");t&&(e.key=t)}function Or(e){var t=vn(e,"ref");t&&(e.ref=t,e.refInFor=Pr(e))}function Sr(e){var t;if(t=hn(e,"v-for")){var n=t.match(Vs);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(zs);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function Tr(e){var t=hn(e,"v-if");if(t)e.if=t,Nr(e,{exp:t,block:e});else{null!=hn(e,"v-else")&&(e.else=!0);var n=hn(e,"v-else-if");n&&(e.elseif=n)}}function Er(e,t){var n=jr(t.children);n&&n.if&&Nr(n,{exp:e.elseif,block:e})}function jr(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Nr(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Lr(e){null!=hn(e,"v-once")&&(e.once=!0)}function Ir(e){if("slot"===e.tag)e.slotName=vn(e,"name");else{var t;"template"===e.tag?(t=hn(e,"scope"),e.slotScope=t||hn(e,"slot-scope")):(t=hn(e,"slot-scope"))&&(e.slotScope=t);var n=vn(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,"template"===e.tag||e.slotScope||fn(e,"slot",n))}}function Mr(e){var t;(t=vn(e,"is"))&&(e.component=t),null!=hn(e,"inline-template")&&(e.inlineTemplate=!0)}function Dr(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,Us.test(r))if(e.hasBindings=!0,(a=Fr(r))&&(r=r.replace(qs,"")),Js.test(r))r=r.replace(Js,""),o=an(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=Ni(r))&&(r="innerHTML")),a.camel&&(r=Ni(r)),a.sync&&pn(e,"update:"+Ni(r),yn(o,"$event"))),s||!e.component&&Ts(e.tag,e.attrsMap.type,r)?ln(e,r,o):fn(e,r,o);else if(Bs.test(r))pn(e,r=r.replace(Bs,""),o,a,!1,ws);else{var u=(r=r.replace(Us,"")).match(Ks),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),dn(e,r,i,o,l,a)}else fn(e,r,JSON.stringify(o)),!e.component&&"muted"===r&&Ts(e.tag,e.attrsMap.type,r)&&ln(e,r,"true")}function Pr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Fr(e){var t=e.match(qs);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Rr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Hr(e){return"script"===e.tag||"style"===e.tag}function Br(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Ur(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Gs.test(r.name)||(r.name=r.name.replace(Zs,""),t.push(r))}return t}function Vr(e){return $r(e.tag,e.attrsList.slice(),e.parent)}function zr(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Kr(e,t){e&&(js=Xs(t.staticKeys||""),Ns=t.isReservedTag||Di,Jr(e),qr(e,!1))}function Jr(e){if(e.static=Wr(e),1===e.type){if(!Ns(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Jr(r),r.static||(e.static=!1)}if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++){var a=e.ifConditions[i].block;Jr(a),a.static||(e.static=!1)}}}function qr(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)qr(e.children[n],t||!!e.for);if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++)qr(e.ifConditions[i].block,t)}}function Wr(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Si(e.tag)||!Ns(e.tag)||Gr(e)||!Object.keys(e).every(js))))}function Gr(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}function Zr(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e){var o=e[i];r+='"'+i+'":'+Yr(i,o)+","}return r.slice(0,-1)+"}"}function Yr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Yr(e,t)}).join(",")+"]";var n=tc.test(t.value),r=ec.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)if(ic[s])o+=ic[s],nc[s]&&a.push(s);else if("exact"===s){var c=t.modifiers;o+=rc(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+=Qr(a)),o&&(i+=o),"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Qr(e){return"if(!('button' in $event)&&"+e.map(Xr).join("&&")+")return null;"}function Xr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=nc[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key)"}function ei(e,t){var n=new ac(t);return{render:"with(this){return "+(e?ti(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function ti(e,t){if(e.staticRoot&&!e.staticProcessed)return ni(e,t);if(e.once&&!e.onceProcessed)return ri(e,t);if(e.for&&!e.forProcessed)return ai(e,t);if(e.if&&!e.ifProcessed)return ii(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return _i(e,t);var n;if(e.component)n=bi(e.component,e,t);else{var r=e.plain?void 0:si(e,t),i=e.inlineTemplate?null:pi(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return pi(e,t)||"void 0"}function ni(e,t){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+ti(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function ri(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ii(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+ti(e,t)+","+t.onceId+++","+n+")":ti(e,t)}return ni(e,t)}function ii(e,t,n,r){return e.ifProcessed=!0,oi(e.ifConditions.slice(),t,n,r)}function oi(e,t,n,r){function i(e){return n?n(e,t):e.once?ri(e,t):ti(e,t)}if(!e.length)return r||"_e()";var o=e.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+oi(e,t,n,r):""+i(o.block)}function ai(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||ti)(e,t)+"})"}function si(e,t){var n="{",r=ci(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:{"+$i(e.attrs)+"},"),e.props&&(n+="domProps:{"+$i(e.props)+"},"),e.events&&(n+=Zr(e.events,!1,t.warn)+","),e.nativeEvents&&(n+=Zr(e.nativeEvents,!0,t.warn)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=li(e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=ui(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function ci(e,t){var n=e.directives;if(n){var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=t.directives[o.name];u&&(a=!!u(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}function ui(e,t){var n=e.children[0];if(1===n.type){var r=ei(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function li(e,t){return"scopedSlots:_u(["+Object.keys(e).map(function(n){return fi(n,e[n],t)}).join(",")+"])"}function fi(e,t,n){return t.for&&!t.forProcessed?di(e,t,n):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(pi(t,n)||"undefined")+":undefined":pi(t,n)||"undefined":ti(t,n))+"}")+"}"}function di(e,t,n){var r=t.for,i=t.alias,o=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+fi(e,t,n)+"})"}function pi(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||ti)(a,t);var s=n?vi(o,t.maybeComponent):0,c=i||mi;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(s?","+s:"")}}function vi(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(hi(i)||i.ifConditions&&i.ifConditions.some(function(e){return hi(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}function hi(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function mi(e,t){return 1===e.type?ti(e,t):3===e.type&&e.isComment?gi(e):yi(e)}function yi(e){return"_v("+(2===e.type?e.expression:Ci(JSON.stringify(e.text)))+")"}function gi(e){return"_e("+JSON.stringify(e.text)+")"}function _i(e,t){var n=e.slotName||'"default"',r=pi(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return Ni(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}function bi(e,t,n){var r=t.inlineTemplate?null:pi(t,n,!0);return"_c("+e+","+si(t,n)+(r?","+r:"")+")"}function $i(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Ci(r.value)+","}return t.slice(0,-1)}function Ci(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function wi(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),_}}function xi(e){var t=Object.create(null);return function(n,r,i){delete(r=y({},r)).warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=wi(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return wi(e,c)}),t[o]=s}}function ki(e){return Ls=Ls||document.createElement("div"),Ls.innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',Ls.innerHTML.indexOf("&#10;")>0}function Ai(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Oi=Object.prototype.toString,Si=f("slot,component",!0),Ti=f("key,ref,slot,slot-scope,is"),Ei=Object.prototype.hasOwnProperty,ji=/-(\w)/g,Ni=v(function(e){return e.replace(ji,function(e,t){return t?t.toUpperCase():""})}),Li=v(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Ii=/\B([A-Z])/g,Mi=v(function(e){return e.replace(Ii,"-$1").toLowerCase()}),Di=function(e,t,n){return!1},Pi=function(e){return e},Fi="data-server-rendered",Ri=["component","directive","filter"],Hi=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],Bi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Di,isReservedAttr:Di,isUnknownElement:Di,getTagNamespace:_,parsePlatformTagName:Pi,mustUseProp:Di,_lifecycleHooks:Hi},Ui=Object.freeze({}),Vi=/[^\w.$]/,zi="__proto__"in{},Ki="undefined"!=typeof window,Ji=Ki&&window.navigator.userAgent.toLowerCase(),qi=Ji&&/msie|trident/.test(Ji),Wi=Ji&&Ji.indexOf("msie 9.0")>0,Gi=Ji&&Ji.indexOf("edge/")>0,Zi=Ji&&Ji.indexOf("android")>0,Yi=Ji&&/iphone|ipad|ipod|ios/.test(Ji),Qi=(Ji&&/chrome\/\d+/.test(Ji),{}.watch),Xi=!1;if(Ki)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Xi=!0}}),window.addEventListener("test-passive",null,eo)}catch(e){}var to,no,ro=function(){return void 0===to&&(to=!Ki&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),to},io=Ki&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,oo="undefined"!=typeof Symbol&&A(Symbol)&&"undefined"!=typeof Reflect&&A(Reflect.ownKeys);no="undefined"!=typeof Set&&A(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ao=_,so=0,co=function(){this.id=so++,this.subs=[]};co.prototype.addSub=function(e){this.subs.push(e)},co.prototype.removeSub=function(e){d(this.subs,e)},co.prototype.depend=function(){co.target&&co.target.addDep(this)},co.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},co.target=null;var uo=[],lo=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.functionalOptions=void 0,this.functionalScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},fo={child:{configurable:!0}};fo.child.get=function(){return this.componentInstance},Object.defineProperties(lo.prototype,fo);var po=function(e){void 0===e&&(e="");var t=new lo;return t.text=e,t.isComment=!0,t},vo=Array.prototype,ho=Object.create(vo);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=vo[e];x(ho,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var mo=Object.getOwnPropertyNames(ho),yo={shouldConvert:!0},go=function(e){this.value=e,this.dep=new co,this.vmCount=0,x(e,"__ob__",this),Array.isArray(e)?((zi?N:L)(e,ho,mo),this.observeArray(e)):this.walk(e)};go.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)M(e,t[n],e[t[n]])},go.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)I(e[t])};var _o=Bi.optionMergeStrategies;_o.data=function(e,t,n){return n?H(e,t,n):t&&"function"!=typeof t?e:H(e,t)},Hi.forEach(function(e){_o[e]=B}),Ri.forEach(function(e){_o[e+"s"]=U}),_o.watch=function(e,t,n,r){if(e===Qi&&(e=void 0),t===Qi&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};y(i,e);for(var o in t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},_o.props=_o.methods=_o.inject=_o.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return y(i,e),t&&y(i,t),i},_o.provide=H;var bo,$o,Co=function(e,t){return void 0===t?e:t},wo=[],xo=!1,ko=!1;if("undefined"!=typeof setImmediate&&A(setImmediate))$o=function(){setImmediate(te)};else if("undefined"==typeof MessageChannel||!A(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())$o=function(){setTimeout(te,0)};else{var Ao=new MessageChannel,Oo=Ao.port2;Ao.port1.onmessage=te,$o=function(){Oo.postMessage(1)}}if("undefined"!=typeof Promise&&A(Promise)){var So=Promise.resolve();bo=function(){So.then(te),Yi&&setTimeout(_)}}else bo=$o;var To,Eo=v(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}),jo=null,No=[],Lo=[],Io={},Mo=!1,Do=!1,Po=0,Fo=0,Ro=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Fo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new no,this.newDepIds=new no,this.expression="","function"==typeof t?this.getter=t:(this.getter=k(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Ro.prototype.get=function(){O(this);var e,t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Q(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Fe(e),S(),this.cleanupDeps()}return e},Ro.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},Ro.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Ro.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Pe(this)},Ro.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||o(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Q(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},Ro.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ro.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},Ro.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||d(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var Ho=new no,Bo={enumerable:!0,configurable:!0,get:_,set:_},Uo={lazy:!0};lt(ft.prototype);var Vo={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed)(e.componentInstance=ht(e,jo,n,r)).$mount(t?e.elm:void 0,t);else if(e.data.keepAlive){var i=e;Vo.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;Oe(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,je(n,"mounted")),e.data.keepAlive&&(t._isMounted?Me(n):Te(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Ee(t,!0):t.$destroy())}},zo=Object.keys(Vo),Ko=1,Jo=2,qo=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=qo++,t._isVue=!0,e&&e._isComponent?wt(t,e):t.$options=J(xt(t.constructor),e||{},t),t._renderProxy=t,t._self=t,ke(t),ge(t),Ct(t),je(t,"beforeCreate"),Qe(t),Be(t),Ye(t),je(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(Ot),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=D,e.prototype.$delete=P,e.prototype.$watch=function(e,t,n){var r=this;if(a(t))return Ze(r,e,t,n);(n=n||{}).user=!0;var i=new Ro(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(Ot),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(!t)return r._events[e]=null,r;if(t)for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?m(n):n;for(var r=m(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(t,r)}catch(n){Q(n,t,'event handler for "'+e+'"')}}return t}}(Ot),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&je(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=jo;jo=n,n._vnode=e,i?n.$el=n.__patch__(i,e):(n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),jo=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){je(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||d(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),je(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(Ot),function(e){lt(e.prototype),e.prototype.$nextTick=function(e){return re(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t._parentVnode;if(e._isMounted)for(var i in e.$slots){var o=e.$slots[i];o._rendered&&(e.$slots[i]=j(o,!0))}e.$scopedSlots=r&&r.data.scopedSlots||Ui,e.$vnode=r;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){Q(t,e,"render"),a=e._vnode}return a instanceof lo||(a=po()),a.parent=r,a}}(Ot);var Wo=[String,RegExp,Array],Go={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Wo,exclude:Wo,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){var e=this;for(var t in e.cache)Pt(e.cache,t,e.keys)},watch:{include:function(e){Dt(this,function(t){return Mt(e,t)})},exclude:function(e){Dt(this,function(t){return!Mt(e,t)})}},render:function(){var e=ye(this.$slots.default),t=e&&e.componentOptions;if(t){var n=It(t);if(n&&(this.exclude&&Mt(this.exclude,n)||this.include&&!Mt(this.include,n)))return e;var r=this,i=r.cache,o=r.keys,a=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;i[a]?(e.componentInstance=i[a].componentInstance,d(o,a),o.push(a)):(i[a]=e,o.push(a),this.max&&o.length>parseInt(this.max)&&Pt(i,o[0],o,this._vnode)),e.data.keepAlive=!0}return e}}};!function(e){var t={};t.get=function(){return Bi},Object.defineProperty(e,"config",t),e.util={warn:ao,extend:y,mergeOptions:J,defineReactive:M},e.set=D,e.delete=P,e.nextTick=re,e.options=Object.create(null),Ri.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,y(e.options.components,Go),St(e),Tt(e),Et(e),Lt(e)}(Ot),Object.defineProperty(Ot.prototype,"$isServer",{get:ro}),Object.defineProperty(Ot.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Ot.version="2.5.3";var Zo,Yo,Qo,Xo,ea,ta,na,ra,ia=f("style,class"),oa=f("input,textarea,option,select,progress"),aa=function(e,t,n){return"value"===n&&oa(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},sa=f("contenteditable,draggable,spellcheck"),ca=f("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ua="http://www.w3.org/1999/xlink",la=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},fa=function(e){return la(e)?e.slice(6,e.length):""},da=function(e){return null==e||!1===e},pa={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},va=f("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ha=f("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ma=function(e){return va(e)||ha(e)},ya=Object.create(null),ga=f("text,number,password,search,email,tel,url"),_a=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(e,t){return document.createElementNS(pa[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setAttribute:function(e,t,n){e.setAttribute(t,n)}}),ba={create:function(e,t){qt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(qt(e,!0),qt(t))},destroy:function(e){qt(e,!0)}},$a=new lo("",{},[]),Ca=["create","activate","update","remove","destroy"],wa={create:Yt,update:Yt,destroy:function(e){Yt(e,$a)}},xa=Object.create(null),ka=[ba,wa],Aa={create:nn,update:nn},Oa={create:on,update:on},Sa=/[\w).+\-_$\]]/,Ta="__r",Ea="__c",ja={create:Nn,update:Nn},Na={create:Ln,update:Ln},La=v(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),Ia=/^--/,Ma=/\s*!important$/,Da=function(e,t,n){if(Ia.test(t))e.style.setProperty(t,n);else if(Ma.test(n))e.style.setProperty(t,n.replace(Ma,""),"important");else{var r=Fa(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Pa=["Webkit","Moz","ms"],Fa=v(function(e){if(ra=ra||document.createElement("div").style,"filter"!==(e=Ni(e))&&e in ra)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Pa.length;n++){var r=Pa[n]+t;if(r in ra)return r}}),Ra={create:Hn,update:Hn},Ha=v(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Ba=Ki&&!Wi,Ua="transition",Va="animation",za="transition",Ka="transitionend",Ja="animation",qa="animationend";Ba&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(za="WebkitTransition",Ka="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ja="WebkitAnimation",qa="webkitAnimationEnd"));var Wa=Ki?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()},Ga=/\b(transform|all)(,|$)/,Za=function(r){function o(e){return new lo(j.tagName(e).toLowerCase(),{},[],void 0,e)}function a(e,t){function n(){0==--n.listeners&&s(e)}return n.listeners=t,n}function s(e){var n=j.parentNode(e);t(n)&&j.removeChild(n,e)}function c(e,r,i,o,a){if(e.isRootInsert=!a,!u(e,r,i,o)){var s=e.data,c=e.children,l=e.tag;t(l)?(e.elm=e.ns?j.createElementNS(e.ns,l):j.createElement(l,e),y(e),v(e,c,r),t(s)&&m(e,r),p(i,e.elm,o)):n(e.isComment)?(e.elm=j.createComment(e.text),p(i,e.elm,o)):(e.elm=j.createTextNode(e.text),p(i,e.elm,o))}}function u(e,r,i,o){var a=e.data;if(t(a)){var s=t(e.componentInstance)&&a.keepAlive;if(t(a=a.hook)&&t(a=a.init)&&a(e,!1,i,o),t(e.componentInstance))return l(e,r),n(s)&&d(e,r,i,o),!0}}function l(e,n){t(e.data.pendingInsert)&&(n.push.apply(n,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,h(e)?(m(e,n),y(e)):(qt(e),n.push(e))}function d(e,n,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,t(o=a.data)&&t(o=o.transition)){for(o=0;o<T.activate.length;++o)T.activate[o]($a,a);n.push(a);break}p(r,e.elm,i)}function p(e,n,r){t(e)&&(t(r)?r.parentNode===e&&j.insertBefore(e,n,r):j.appendChild(e,n))}function v(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)c(t[r],n,e.elm,null,!0);else i(e.text)&&j.appendChild(e.elm,j.createTextNode(e.text))}function h(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return t(e.tag)}function m(e,n){for(var r=0;r<T.create.length;++r)T.create[r]($a,e);t(O=e.data.hook)&&(t(O.create)&&O.create($a,e),t(O.insert)&&n.push(e))}function y(e){var n;if(t(n=e.functionalScopeId))j.setAttribute(e.elm,n,"");else for(var r=e;r;)t(n=r.context)&&t(n=n.$options._scopeId)&&j.setAttribute(e.elm,n,""),r=r.parent;t(n=jo)&&n!==e.context&&n!==e.functionalContext&&t(n=n.$options._scopeId)&&j.setAttribute(e.elm,n,"")}function g(e,t,n,r,i,o){for(;r<=i;++r)c(n[r],o,e,t)}function _(e){var n,r,i=e.data;if(t(i))for(t(n=i.hook)&&t(n=n.destroy)&&n(e),n=0;n<T.destroy.length;++n)T.destroy[n](e);if(t(n=e.children))for(r=0;r<e.children.length;++r)_(e.children[r])}function b(e,n,r,i){for(;r<=i;++r){var o=n[r];t(o)&&(t(o.tag)?($(o),_(o)):s(o.elm))}}function $(e,n){if(t(n)||t(e.data)){var r,i=T.remove.length+1;for(t(n)?n.listeners+=i:n=a(e.elm,i),t(r=e.componentInstance)&&t(r=r._vnode)&&t(r.data)&&$(r,n),r=0;r<T.remove.length;++r)T.remove[r](e,n);t(r=e.data.hook)&&t(r=r.remove)?r(e,n):n()}else s(e.elm)}function C(n,r,i,o,a){for(var s,u,l,f=0,d=0,p=r.length-1,v=r[0],h=r[p],m=i.length-1,y=i[0],_=i[m],$=!a;f<=p&&d<=m;)e(v)?v=r[++f]:e(h)?h=r[--p]:Wt(v,y)?(x(v,y,o),v=r[++f],y=i[++d]):Wt(h,_)?(x(h,_,o),h=r[--p],_=i[--m]):Wt(v,_)?(x(v,_,o),$&&j.insertBefore(n,v.elm,j.nextSibling(h.elm)),v=r[++f],_=i[--m]):Wt(h,y)?(x(h,y,o),$&&j.insertBefore(n,h.elm,v.elm),h=r[--p],y=i[++d]):(e(s)&&(s=Zt(r,f,p)),e(u=t(y.key)?s[y.key]:w(y,r,f,p))?c(y,o,n,v.elm):Wt(l=r[u],y)?(x(l,y,o),r[u]=void 0,$&&j.insertBefore(n,l.elm,v.elm)):c(y,o,n,v.elm),y=i[++d]);f>p?g(n,e(i[m+1])?null:i[m+1].elm,i,d,m,o):d>m&&b(n,r,f,p)}function w(e,n,r,i){for(var o=r;o<i;o++){var a=n[o];if(t(a)&&Wt(e,a))return o}}function x(r,i,o,a){if(r!==i){var s=i.elm=r.elm;if(n(r.isAsyncPlaceholder))t(i.asyncFactory.resolved)?A(r.elm,i,o):i.isAsyncPlaceholder=!0;else if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))i.componentInstance=r.componentInstance;else{var c,u=i.data;t(u)&&t(c=u.hook)&&t(c=c.prepatch)&&c(r,i);var l=r.children,f=i.children;if(t(u)&&h(i)){for(c=0;c<T.update.length;++c)T.update[c](r,i);t(c=u.hook)&&t(c=c.update)&&c(r,i)}e(i.text)?t(l)&&t(f)?l!==f&&C(s,l,f,o,a):t(f)?(t(r.text)&&j.setTextContent(s,""),g(s,null,f,0,f.length-1,o)):t(l)?b(s,l,0,l.length-1):t(r.text)&&j.setTextContent(s,""):r.text!==i.text&&j.setTextContent(s,i.text),t(u)&&t(c=u.hook)&&t(c=c.postpatch)&&c(r,i)}}}function k(e,r,i){if(n(i)&&t(e.parent))e.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function A(e,r,i){if(n(r.isComment)&&t(r.asyncFactory))return r.elm=e,r.isAsyncPlaceholder=!0,!0;r.elm=e;var o=r.tag,a=r.data,s=r.children;if(t(a)&&(t(O=a.hook)&&t(O=O.init)&&O(r,!0),t(O=r.componentInstance)))return l(r,i),!0;if(t(o)){if(t(s))if(e.hasChildNodes())if(t(O=a)&&t(O=O.domProps)&&t(O=O.innerHTML)){if(O!==e.innerHTML)return!1}else{for(var c=!0,u=e.firstChild,f=0;f<s.length;f++){if(!u||!A(u,s[f],i)){c=!1;break}u=u.nextSibling}if(!c||u)return!1}else v(r,s,i);if(t(a))for(var d in a)if(!N(d)){m(r,i);break}}else e.data!==r.text&&(e.data=r.text);return!0}var O,S,T={},E=r.modules,j=r.nodeOps;for(O=0;O<Ca.length;++O)for(T[Ca[O]]=[],S=0;S<E.length;++S)t(E[S][Ca[O]])&&T[Ca[O]].push(E[S][Ca[O]]);var N=f("attrs,style,class,staticClass,staticStyle,key");return function(r,i,a,s,u,l){if(!e(i)){var f=!1,d=[];if(e(r))f=!0,c(i,d,u,l);else{var p=t(r.nodeType);if(!p&&Wt(r,i))x(r,i,d,s);else{if(p){if(1===r.nodeType&&r.hasAttribute(Fi)&&(r.removeAttribute(Fi),a=!0),n(a)&&A(r,i,d))return k(i,d,!0),r;r=o(r)}var v=r.elm,m=j.parentNode(v);if(c(i,d,v._leaveCb?null:m,j.nextSibling(v)),t(i.parent))for(var y=i.parent,g=h(i);y;){for(var $=0;$<T.destroy.length;++$)T.destroy[$](y);if(y.elm=i.elm,g){for(var C=0;C<T.create.length;++C)T.create[C]($a,y);var w=y.data.hook.insert;if(w.merged)for(var O=1;O<w.fns.length;O++)w.fns[O]()}else qt(y);y=y.parent}t(m)?b(m,[r],0,0):t(r.tag)&&_(r)}}return k(i,d,f),i.elm}t(r)&&_(r)}}({nodeOps:_a,modules:[Aa,Oa,ja,Na,Ra,Ki?{create:tr,activate:tr,remove:function(e,t){!0!==e.data.show?Qn(e,t):t()}}:{}].concat(ka)});Wi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&cr(e,"input")});var Ya={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ae(n,"postpatch",function(){Ya.componentUpdated(e,t,n)}):nr(e,t,n.context),e._vOptions=[].map.call(e.options,or)):("textarea"===n.tag||ga(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("change",sr),Zi||(e.addEventListener("compositionstart",ar),e.addEventListener("compositionend",sr)),Wi&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){nr(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,or);i.some(function(e,t){return!b(e,r[t])})&&(e.multiple?t.value.some(function(e){return ir(e,i)}):t.value!==t.oldValue&&ir(t.value,i))&&cr(e,"change")}}},Qa={model:Ya,show:{bind:function(e,t,n){var r=t.value,i=(n=ur(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Yn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&((n=ur(n)).data&&n.data.transition?(n.data.show=!0,r?Yn(n,function(){e.style.display=e.__vOriginalDisplay}):Qn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Xa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},es={name:"transition",props:Xa,abstract:!0,render:function(e){var t=this,n=this.$options._renderChildren;if(n&&(n=n.filter(function(e){return e.tag||me(e)})).length){var r=this.mode,o=n[0];if(pr(this.$vnode))return o;var a=lr(o);if(!a)return o;if(this._leaving)return dr(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:i(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=fr(this),u=this._vnode,l=lr(u);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),l&&l.data&&!vr(a,l)&&!me(l)){var f=l.data.transition=y({},c);if("out-in"===r)return this._leaving=!0,ae(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),dr(e,o);if("in-out"===r){if(me(a))return u;var d,p=function(){d()};ae(c,"afterEnter",p),ae(c,"enterCancelled",p),ae(f,"delayLeave",function(e){d=e})}}return o}}},ts=y({tag:String,moveClass:String},Xa);delete ts.mode;var ns={Transition:es,TransitionGroup:{props:ts,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=fr(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var d=r[f];d.data.transition=a,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(hr),e.forEach(mr),e.forEach(yr),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Kn(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ka,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ka,e),n._moveCb=null,Jn(n,t))})}}))},methods:{hasMove:function(e,t){if(!Ba)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Un(n,e)}),Bn(n,t),n.style.display="none",this.$el.appendChild(n);var r=Wn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Ot.config.mustUseProp=aa,Ot.config.isReservedTag=ma,Ot.config.isReservedAttr=ia,Ot.config.getTagNamespace=Kt,Ot.config.isUnknownElement=function(e){if(!Ki)return!0;if(ma(e))return!1;if(e=e.toLowerCase(),null!=ya[e])return ya[e];var t=document.createElement(e);return e.indexOf("-")>-1?ya[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ya[e]=/HTMLUnknownElement/.test(t.toString())},y(Ot.options.directives,Qa),y(Ot.options.components,ns),Ot.prototype.__patch__=Ki?Za:_,Ot.prototype.$mount=function(e,t){return e=e&&Ki?Jt(e):void 0,Ae(this,e,t)},Ot.nextTick(function(){Bi.devtools&&io&&io.emit("init",Ot)},0);var rs,is=/\{\{((?:.|\n)+?)\}\}/g,os=/[-.*+?^${}()|[\]\/\\]/g,as=v(function(e){var t=e[0].replace(os,"\\$&"),n=e[1].replace(os,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),ss={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=hn(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=vn(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}},cs={staticKeys:["staticStyle"],transformNode:function(e,t){var n=hn(e,"style");n&&(e.staticStyle=JSON.stringify(La(n)));var r=vn(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},us={decode:function(e){return rs=rs||document.createElement("div"),rs.innerHTML=e,rs.textContent}},ls=f("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),fs=f("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),ds=f("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),ps=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,vs="[a-zA-Z_][\\w\\-\\.]*",hs="((?:"+vs+"\\:)?"+vs+")",ms=new RegExp("^<"+hs),ys=/^\s*(\/?)>/,gs=new RegExp("^<\\/"+hs+"[^>]*>"),_s=/^<!DOCTYPE [^>]+>/i,bs=/^<!--/,$s=/^<!\[/,Cs=!1;"x".replace(/x(.)?/g,function(e,t){Cs=""===t});var ws,xs,ks,As,Os,Ss,Ts,Es,js,Ns,Ls,Is=f("script,style,textarea",!0),Ms={},Ds={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},Ps=/&(?:lt|gt|quot|amp);/g,Fs=/&(?:lt|gt|quot|amp|#10|#9);/g,Rs=f("pre,textarea",!0),Hs=function(e,t){return e&&Rs(e)&&"\n"===t[0]},Bs=/^@|^v-on:/,Us=/^v-|^@|^:/,Vs=/(.*?)\s+(?:in|of)\s+(.*)/,zs=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Ks=/:(.*)$/,Js=/^:|^v-bind:/,qs=/\.[^.]+/g,Ws=v(us.decode),Gs=/^xmlns:NS\d+/,Zs=/^NS\d+:/,Ys=[ss,cs,{preTransformNode:function(e,t){if("input"===e.tag){var n=e.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=vn(e,"type"),i=hn(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=hn(e,"v-else",!0),s=hn(e,"v-else-if",!0),c=Vr(e);Sr(c),zr(c,"type","checkbox"),kr(c,t),c.processed=!0,c.if="("+r+")==='checkbox'"+o,Nr(c,{exp:c.if,block:c});var u=Vr(e);hn(u,"v-for",!0),zr(u,"type","radio"),kr(u,t),Nr(c,{exp:"("+r+")==='radio'"+o,block:u});var l=Vr(e);return hn(l,"v-for",!0),zr(l,":type",r),kr(l,t),Nr(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}],Qs={expectHTML:!0,modules:Ys,directives:{model:function(e,t,n){var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return mn(e,r,i),!1;if("select"===o)An(e,r,i);else if("input"===o&&"checkbox"===a)xn(e,r,i);else if("input"===o&&"radio"===a)kn(e,r,i);else if("input"===o||"textarea"===o)On(e,r,i);else if(!Bi.isReservedTag(o))return mn(e,r,i),!1;return!0},text:function(e,t){t.value&&ln(e,"textContent","_s("+t.value+")")},html:function(e,t){t.value&&ln(e,"innerHTML","_s("+t.value+")")}},isPreTag:function(e){return"pre"===e},isUnaryTag:ls,mustUseProp:aa,canBeLeftOpenTag:fs,isReservedTag:ma,getTagNamespace:Kt,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(Ys)},Xs=v(function(e){return f("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}),ec=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,tc=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,nc={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},rc=function(e){return"if("+e+")return null;"},ic={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:rc("$event.target !== $event.currentTarget"),ctrl:rc("!$event.ctrlKey"),shift:rc("!$event.shiftKey"),alt:rc("!$event.altKey"),meta:rc("!$event.metaKey"),left:rc("'button' in $event && $event.button !== 0"),middle:rc("'button' in $event && $event.button !== 1"),right:rc("'button' in $event && $event.button !== 2")},oc={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}},cloak:_},ac=function(e){this.options=e,this.warn=e.warn||cn,this.transforms=un(e.modules,"transformCode"),this.dataGenFns=un(e.modules,"genData"),this.directives=y(y({},oc),e.directives);var t=e.isReservedTag||Di;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]},sc=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(e){return function(t){function n(n,r){var i=Object.create(t),o=[],a=[];if(i.warn=function(e,t){(t?a:o).push(e)},r){r.modules&&(i.modules=(t.modules||[]).concat(r.modules)),r.directives&&(i.directives=y(Object.create(t.directives),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=e(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:xi(n)}}}(function(e,t){var n=Cr(e.trim(),t);Kr(n,t);var r=ei(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})(Qs).compileToFunctions),cc=!!Ki&&ki(!1),uc=!!Ki&&ki(!0),lc=v(function(e){var t=Jt(e);return t&&t.innerHTML}),fc=Ot.prototype.$mount;return Ot.prototype.$mount=function(e,t){if((e=e&&Jt(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=lc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Ai(e));if(r){var i=sc(r,{shouldDecodeNewlines:cc,shouldDecodeNewlinesForHref:uc,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return fc.call(this,e,t)},Ot.compile=sc,Ot});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory(require("vue"));
	else
		root["VueMaterial"] = factory(root["Vue"]);
})(this, (function(__WEBPACK_EXTERNAL_MODULE_349__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 446);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ ((function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Theme mixin

// Grab the closest ancestor component's `md-theme` attribute OR grab the
// `md-name` attribute from an `<md-theme>` component.
function getAncestorThemeName(component) {
  if (!component) {
    return null;
  }

  var name = component.mdTheme;

  if (!name && component.$options._componentTag === 'md-theme') {
    name = component.mdName;
  }

  return name || getAncestorThemeName(component.$parent);
}

exports.default = {
  props: {
    mdTheme: String
  },
  computed: {
    mdEffectiveTheme: function mdEffectiveTheme() {
      return getAncestorThemeName(this) || this.$material.currentTheme;
    },
    themeClass: function themeClass() {
      return this.$material.prefix + this.mdEffectiveTheme;
    }
  },
  watch: {
    mdTheme: function mdTheme(value) {
      this.$material.useTheme(value);
    }
  },
  beforeMount: function beforeMount() {
    var localTheme = this.mdTheme;

    this.$material.useTheme(localTheme ? localTheme : 'default');
  }
};
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)((function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
}));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(25)
  , defined = __webpack_require__(14);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(13)
  , IE8_DOM_DEFINE = __webpack_require__(31)
  , toPrimitive    = __webpack_require__(27)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(9)
  , createDesc = __webpack_require__(17);
module.exports = __webpack_require__(3) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getClosestVueParent = function getClosestVueParent($parent, cssClass) {
  if (!$parent || !$parent.$el) {
    return false;
  }

  if ($parent._uid === 0) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return getClosestVueParent($parent.$parent, cssClass);
};

exports.default = getClosestVueParent;
module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(22)('wks')
  , uid        = __webpack_require__(20)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(29)
  , hide      = __webpack_require__(10)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(30)
  , enumBugKeys = __webpack_require__(23);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys')
  , uid    = __webpack_require__(20);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(35);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(8)
  , toIObject    = __webpack_require__(7)
  , arrayIndexOf = __webpack_require__(33)(false)
  , IE_PROTO     = __webpack_require__(19)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(5)((function(){
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', {get: function(){ return 7; }}).a != 7;
}));

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7)
  , toLength  = __webpack_require__(28)
  , toIndex   = __webpack_require__(34);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var uniqueId = function uniqueId() {
  return Math.random().toString(36).slice(4);
};

exports.default = uniqueId;
module.exports = exports["default"];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f
  , has = __webpack_require__(8)
  , TAG = __webpack_require__(12)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function transitionEndEventName() {
  var el = document.createElement('span');
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };

  for (var transition in transitions) {
    if (el.style[transition] !== undefined) {
      return transitions[transition];
    }
  }
}

exports.default = transitionEndEventName();
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(40)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(49)
  , hide           = __webpack_require__(10)
  , has            = __webpack_require__(8)
  , Iterators      = __webpack_require__(32)
  , $iterCreate    = __webpack_require__(52)
  , setToStringTag = __webpack_require__(37)
  , getPrototypeOf = __webpack_require__(55)
  , ITERATOR       = __webpack_require__(12)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
module.exports = __webpack_require__(4).Object.keys;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(21)
  , $keys    = __webpack_require__(18);

__webpack_require__(47)('keys', (function(){
  return function keys(it){
    return $keys(toObject(it));
  };
}));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(16)
  , core    = __webpack_require__(4)
  , fails   = __webpack_require__(5);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails((function(){ fn(1); })), 'Object', exp);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(51)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(43)(String, 'String', (function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}), (function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
}));

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(13)
  , dPs         = __webpack_require__(53)
  , enumBugKeys = __webpack_require__(23)
  , IE_PROTO    = __webpack_require__(19)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(26)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(54).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , defined   = __webpack_require__(14);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(50)
  , descriptor     = __webpack_require__(17)
  , setToStringTag = __webpack_require__(37)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(12)('iterator'), (function(){ return this; }));

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(9)
  , anObject = __webpack_require__(13)
  , getKeys  = __webpack_require__(18);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(8)
  , toObject    = __webpack_require__(21)
  , IE_PROTO    = __webpack_require__(19)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(16);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(58)});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(18)
  , gOPS     = __webpack_require__(41)
  , pIE      = __webpack_require__(39)
  , toObject = __webpack_require__(21)
  , IObject  = __webpack_require__(25)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(5)((function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach((function(k){ B[k] = k; }));
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
})) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var debounce = function debounce(callback, limit) {
  var wait = false;

  return function () {
    if (!wait) {
      callback.call();
      wait = true;

      window.setTimeout((function () {
        wait = false;
      }), limit);
    }
  };
};

exports.default = debounce;
module.exports = exports["default"];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(61)
  , ITERATOR  = __webpack_require__(12)('iterator')
  , Iterators = __webpack_require__(32);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24)
  , TAG = __webpack_require__(12)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    value: [String, Number],
    debounce: {
      type: Number,
      default: 1E2
    },
    disabled: Boolean,
    required: Boolean,
    maxlength: [Number, String],
    max: [Number, String],
    min: [Number, String],
    name: String,
    placeholder: String,
    readonly: Boolean
  },
  data: function data() {
    return {
      timeout: 0
    };
  },

  watch: {
    value: function value() {
      this.updateValues();
    },
    disabled: function disabled() {
      this.setParentDisabled();
    },
    required: function required() {
      this.setParentRequired();
    },
    placeholder: function placeholder() {
      this.setParentPlaceholder();
    },
    maxlength: function maxlength() {
      this.handleMaxLength();
    },
    max: function max() {
      this.handleMax();
    },
    min: function min() {
      this.handleMin();
    }
  },
  methods: {
    handleMaxLength: function handleMaxLength() {
      this.parentContainer.enableCounter = this.maxlength > 0;
      this.parentContainer.counterLength = this.maxlength;
    },
    handleMin: function handleMin() {
      this.parentContainer.min = this.min;
    },
    handleMax: function handleMax() {
      this.parentContainer.min = this.max;
    },
    lazyEventEmitter: function lazyEventEmitter() {
      var _this = this;

      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }
      this.timeout = window.setTimeout((function () {
        _this.$emit('change', _this.$el.value);
        _this.$emit('input', _this.$el.value);
      }), this.debounce);
    },
    setParentValue: function setParentValue(value) {
      this.parentContainer.setValue(value || this.$el.value);
    },
    setParentDisabled: function setParentDisabled() {
      this.parentContainer.isDisabled = this.disabled;
    },
    setParentRequired: function setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },
    setParentPlaceholder: function setParentPlaceholder() {
      this.parentContainer.hasPlaceholder = !!this.placeholder;
    },
    updateValues: function updateValues() {
      var _this2 = this;

      this.$nextTick((function () {
        var newValue = _this2.$el.value || _this2.value;

        _this2.setParentValue(newValue);
        _this2.parentContainer.inputLength = newValue ? newValue.length : 0;
      }));
    },
    onFocus: function onFocus(event) {
      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }

      this.$emit('focus', this.$el.value, event);
    },
    onBlur: function onBlur(event) {
      this.parentContainer.isFocused = false;
      this.setParentValue();

      this.$emit('blur', this.$el.value, event);
    },
    onInput: function onInput() {
      this.updateValues();
      this.lazyEventEmitter();
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(12);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(2)
  , core           = __webpack_require__(4)
  , LIBRARY        = __webpack_require__(40)
  , wksExt         = __webpack_require__(63)
  , defineProperty = __webpack_require__(9).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getImageLightness = function getImageLightness(image, onLoad, onError) {
  var canvas = document.createElement('canvas');

  image.crossOrigin = 'Anonymous';

  image.onload = function () {
    var colorSum = 0;
    var ctx = void 0;
    var imageData = void 0;
    var imageMetadata = void 0;
    var r = void 0;
    var g = void 0;
    var b = void 0;
    var average = void 0;

    canvas.width = this.width;
    canvas.height = this.height;
    ctx = canvas.getContext('2d');

    ctx.drawImage(this, 0, 0);

    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imageMetadata = imageData.data;

    for (var x = 0, len = imageMetadata.length; x < len; x += 4) {
      r = imageMetadata[x];
      g = imageMetadata[x + 1];
      b = imageMetadata[x + 2];

      average = Math.floor((r + g + b) / 3);
      colorSum += average;
    }

    onLoad(Math.floor(colorSum / (this.width * this.height)));
  };

  image.onerror = onError;
};

exports.default = getImageLightness;
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(69);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isArray = function isArray(value) {
  return value && value.constructor === Array;
};

exports.default = isArray;
module.exports = exports["default"];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
var global        = __webpack_require__(2)
  , hide          = __webpack_require__(10)
  , Iterators     = __webpack_require__(32)
  , TO_STRING_TAG = __webpack_require__(12)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(71);
module.exports = __webpack_require__(4).Array.from;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(29)
  , $export        = __webpack_require__(16)
  , toObject       = __webpack_require__(21)
  , call           = __webpack_require__(72)
  , isArrayIter    = __webpack_require__(73)
  , toLength       = __webpack_require__(28)
  , createProperty = __webpack_require__(74)
  , getIterFn      = __webpack_require__(60);

$export($export.S + $export.F * !__webpack_require__(75)((function(iter){ Array.from(iter); })), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(32)
  , ITERATOR   = __webpack_require__(12)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(9)
  , createDesc      = __webpack_require__(17);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(12)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, (function(){ throw 2; }));
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(77)
  , step             = __webpack_require__(78)
  , Iterators        = __webpack_require__(32)
  , toIObject        = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(43)(Array, 'Array', (function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}), (function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}), 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(30)
  , hiddenKeys = __webpack_require__(23).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdTheme = __webpack_require__(81);

var _mdTheme2 = _interopRequireDefault(_mdTheme);

var _mdInkRipple = __webpack_require__(88);

var _mdInkRipple2 = _interopRequireDefault(_mdInkRipple);

var _core = __webpack_require__(93);

var _core2 = _interopRequireDefault(_core);

__webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Code Components */
function install(Vue) {
  if (install.installed) {
    console.warn('Vue Material is already installed.');

    return;
  }

  install.installed = true;

  Vue.use(_mdTheme2.default);
  Vue.use(_mdInkRipple2.default);
  Vue.material.styles.push(_core2.default);
}

/* Core Stylesheets */
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(38);

var _keys2 = _interopRequireDefault(_keys);

exports.default = install;

var _palette = __webpack_require__(82);

var _palette2 = _interopRequireDefault(_palette);

var _rgba = __webpack_require__(83);

var _rgba2 = _interopRequireDefault(_rgba);

var _mdTheme = __webpack_require__(84);

var _mdTheme2 = _interopRequireDefault(_mdTheme);

var _dom = __webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALID_THEME_TYPE = ['primary', 'accent', 'background', 'warn', 'hue-1', 'hue-2', 'hue-3'];
var TYPE_REGEX = new RegExp('(' + VALID_THEME_TYPE.join('|').toUpperCase() + ')-(COLOR|CONTRAST)-?(A?\\d*)-?(\\d*\\.?\\d+)?', 'g');
var DEFAULT_THEME_COLORS = {
  primary: 'indigo',
  accent: 'pink',
  background: 'white',
  warn: 'deep-orange'
};
/*const DEFAULT_HUES = {
  accent: {
    'hue-1': 'A100',
    'hue-2': 'A400',
    'hue-3': 'A700'
  },
  background: {
    'hue-1': 'A100',
    'hue-2': '100',
    'hue-3': '300'
  }
};*/

var registeredPrimaryColor = {};
var injectedStyles = {};

var parseStyle = function parseStyle(style, theme, name) {
  return style.replace(TYPE_REGEX, (function (match, type, colorType, hue, opacity) {
    var color = void 0;
    var colorVariant = +hue === 0 ? 500 : hue;

    type = type.toLowerCase();

    if (theme[type]) {
      if (typeof theme[type] === 'string') {
        color = _palette2.default[theme[type]];
      } else {
        color = _palette2.default[theme[type].color] || _palette2.default[DEFAULT_THEME_COLORS[type]];
        colorVariant = +hue === 0 ? theme[type].hue : hue;
      }
    } else {
      color = _palette2.default[DEFAULT_THEME_COLORS[type]];
    }

    if (colorType === 'COLOR') {
      var isDefault = _palette2.default[theme[type]];

      if (!colorVariant && !isDefault) {
        if (type === 'accent') {
          colorVariant = 'A200';
        } else if (type === 'background') {
          colorVariant = 50;
        }
      }

      if (type === 'primary') {
        registeredPrimaryColor[name] = color[colorVariant];
      }

      if (opacity) {
        return (0, _rgba2.default)(color[colorVariant], opacity);
      }

      return color[colorVariant];
    }

    var isDarkText = color.darkText.indexOf(colorVariant) >= 0;

    if (theme[type] && typeof theme[type] !== 'string' && theme[type].textColor) {
      if (theme[type].textColor === 'black') {
        isDarkText = true;
      } else if (theme[type].textColor === 'white') {
        isDarkText = false;
      }
    }

    if (isDarkText) {
      if (opacity) {
        return (0, _rgba2.default)('#000', opacity);
      }

      return 'rgba(0, 0, 0, .87)';
    }

    if (opacity) {
      return (0, _rgba2.default)('#fff', opacity);
    }

    return 'rgba(255, 255, 255, .87)';
  }));
};

function warnNotFound(themeName) {
  console.warn('The theme \'' + themeName + '\' doesn\'t exists. You need to register' + ' it first in order to use.');
}

function injectStyle(style, spec, name, styleId) {
  if (_dom.createNewStyleElement) {
    style = parseStyle(style, spec, name);
    style = style.replace(/THEME_NAME/g, styleId);

    (0, _dom.createNewStyleElement)(style, styleId);
  }
}

function install(Vue) {
  Vue.material = new Vue({
    data: {
      currentTheme: null,
      inkRipple: true,
      prefix: 'md-theme-',
      styles: [],
      themes: {
        default: DEFAULT_THEME_COLORS
      }
    },
    watch: {
      styles: function styles() {
        this.refreshInjectedStyles();
      }
    },
    methods: {
      registerPalette: function registerPalette(name, spec) {
        _palette2.default[name] = spec;
      },
      useTheme: function useTheme(name) {
        if (name in injectedStyles) {
          return;
        }
        var spec = this.themes[name];

        if (!spec) {
          return warnNotFound(name);
        }

        injectStyle(this.styles.join('\n'), spec, name, this.prefix + name);

        return injectedStyles[name] = true;
      },
      refreshInjectedStyles: function refreshInjectedStyles() {
        var _this = this;

        var styles = this.styles.join('\n');
        var prefix = this.prefix;

        (0, _keys2.default)(injectedStyles).forEach((function (name) {
          var spec = _this.themes[name];

          injectStyle(styles, spec, name, prefix + name);
        }));
      },
      registerTheme: function registerTheme(name, spec) {
        var _this2 = this;

        if (typeof name === 'string') {
          this.themes[name] = spec;
        } else {
          (0, _keys2.default)(name).forEach((function (k) {
            return _this2.themes[k] = name[k];
          }));
        }
      },
      setCurrentTheme: function setCurrentTheme(name) {
        if (name === this.currentTheme) {
          return;
        }

        var prefix = this.prefix;

        this.useTheme(name);

        if (_dom.changeHtmlMetaColor) {
          (0, _dom.changeHtmlMetaColor)(registeredPrimaryColor[name], prefix + name, prefix + this.currentTheme);
        }

        this.currentTheme = name;
      }
    },
    created: function created() {
      // set the default theme by default
      this.setCurrentTheme('default');
    }
  });

  Vue.component('md-theme', _mdTheme2.default);

  Vue.prototype.$material = Vue.material;
}
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  red: {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
    darkText: [50, 100, 200, 300, 'A100']
  },
  pink: {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162',
    darkText: [50, 100, 200, 'A100']
  },
  purple: {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
    darkText: [50, 100, 200, 'A100']
  },
  'deep-purple': {
    50: '#ede7f6',
    100: '#d1c4e9',
    200: '#b39ddb',
    300: '#9575cd',
    400: '#7e57c2',
    500: '#673ab7',
    600: '#5e35b1',
    700: '#512da8',
    800: '#4527a0',
    900: '#311b92',
    A100: '#b388ff',
    A200: '#7c4dff',
    A400: '#651fff',
    A700: '#6200ea',
    darkText: [50, 100, 200, 'A100']
  },
  indigo: {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe',
    darkText: [50, 100, 200, 'A100']
  },
  blue: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
    darkText: [50, 100, 200, 300, 400, 'A100']
  },
  'light-blue': {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
    darkText: [50, 100, 200, 300, 400, 500, 'A100', 'A200', 'A300']
  },
  cyan: {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4',
    600: '#00acc1',
    700: '#0097a7',
    800: '#00838f',
    900: '#006064',
    A100: '#84ffff',
    A200: '#18ffff',
    A400: '#00e5ff',
    A700: '#00b8d4',
    darkText: [50, 100, 200, 300, 400, 500, 600, 'A100', 'A200', 'A300', 'A400']
  },
  teal: {
    50: '#e0f2f1',
    100: '#b2dfdb',
    200: '#80cbc4',
    300: '#4db6ac',
    400: '#26a69a',
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
    800: '#00695c',
    900: '#004d40',
    A100: '#a7ffeb',
    A200: '#64ffda',
    A400: '#1de9b6',
    A700: '#00bfa5',
    darkText: [50, 100, 200, 300, 400, 'A100', 'A200', 'A300', 'A400']
  },
  green: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
    darkText: [50, 100, 200, 300, 400, 500, 'A100', 'A200', 'A300', 'A400']
  },
  'light-green': {
    50: '#f1f8e9',
    100: '#dcedc8',
    200: '#c5e1a5',
    300: '#aed581',
    400: '#9ccc65',
    500: '#8bc34a',
    600: '#7cb342',
    700: '#689f38',
    800: '#558b2f',
    900: '#33691e',
    A100: '#ccff90',
    A200: '#b2ff59',
    A400: '#76ff03',
    A700: '#64dd17',
    darkText: [50, 100, 200, 300, 400, 500, 600, 'A100', 'A200', 'A300', 'A400']
  },
  lime: {
    50: '#f9fbe7',
    100: '#f0f4c3',
    200: '#e6ee9c',
    300: '#dce775',
    400: '#d4e157',
    500: '#cddc39',
    600: '#c0ca33',
    700: '#afb42b',
    800: '#9e9d24',
    900: '#827717',
    A100: '#f4ff81',
    A200: '#eeff41',
    A400: '#c6ff00',
    A700: '#aeea00',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 'A100', 'A200', 'A300', 'A400']
  },
  yellow: {
    50: '#fffde7',
    100: '#fff9c4',
    200: '#fff59d',
    300: '#fff176',
    400: '#ffee58',
    500: '#ffeb3b',
    600: '#fdd835',
    700: '#fbc02d',
    800: '#f9a825',
    900: '#f57f17',
    A100: '#ffff8d',
    A200: '#ffff00',
    A400: '#ffea00',
    A700: '#ffd600',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
  },
  amber: {
    50: '#fff8e1',
    100: '#ffecb3',
    200: '#ffe082',
    300: '#ffd54f',
    400: '#ffca28',
    500: '#ffc107',
    600: '#ffb300',
    700: '#ffa000',
    800: '#ff8f00',
    900: '#ff6f00',
    A100: '#ffe57f',
    A200: '#ffd740',
    A400: '#ffc400',
    A700: '#ffab00',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
  },
  orange: {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 'A100', 'A200', 'A300', 'A400']
  },
  'deep-orange': {
    50: '#fbe9e7',
    100: '#ffccbc',
    200: '#ffab91',
    300: '#ff8a65',
    400: '#ff7043',
    500: '#ff5722',
    600: '#f4511e',
    700: '#e64a19',
    800: '#d84315',
    900: '#bf360c',
    A100: '#ff9e80',
    A200: '#ff6e40',
    A400: '#ff3d00',
    A700: '#dd2c00',
    darkText: [50, 100, 200, 300, 400, 'A100', 'A200']
  },
  brown: {
    50: '#efebe9',
    100: '#d7ccc8',
    200: '#bcaaa4',
    300: '#a1887f',
    400: '#8d6e63',
    500: '#795548',
    600: '#6d4c41',
    700: '#5d4037',
    800: '#4e342e',
    900: '#3e2723',
    A100: '#d7ccc8',
    A200: '#bcaaa4',
    A400: '#8d6e63',
    A700: '#5d4037',
    darkText: [50, 100, 200, 'A100', 'A200', 'A300', 'A400']
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#fff',
    A200: '#000000',
    A400: '#303030',
    A700: '#616161',
    darkText: [50, 100, 200, 300, 400, 500, 'A100']
  },
  'blue-grey': {
    50: '#eceff1',
    100: '#cfd8dc',
    200: '#b0bec5',
    300: '#90a4ae',
    400: '#78909c',
    500: '#607d8b',
    600: '#546e7a',
    700: '#455a64',
    800: '#37474f',
    900: '#263238',
    A100: '#cfd8dc',
    A200: '#b0bec5',
    A400: '#78909c',
    A700: '#455a64',
    darkText: [50, 100, 200, 300, 'A100', 'A200', 'A300', 'A400']
  },
  white: {
    50: '#fff',
    100: '#fff',
    200: '#fff',
    300: '#fff',
    400: '#fff',
    500: '#fff',
    600: '#fff',
    700: '#fff',
    800: '#fff',
    900: '#fff',
    A100: '#fff',
    A200: '#fff',
    A400: '#fff',
    A700: '#fff',
    darkText: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']
  },
  black: {
    50: '#000',
    100: '#000',
    200: '#000',
    300: '#000',
    400: '#000',
    500: '#000',
    600: '#000',
    700: '#000',
    800: '#000',
    900: '#000',
    A100: '#000',
    A200: '#000',
    A400: '#000',
    A700: '#000',
    darkText: []
  }
};
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (hex, opacity) {
  var r = '';
  var g = '';
  var b = '';
  var match = hex.toString().match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);

  if (!match) {
    throw new Error('Invalid color' + hex);
  }

  hex = match[1];

  if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else if (hex.length === 3) {
    var rSubstring = hex.substring(0, 1);
    var gSubstring = hex.substring(1, 2);
    var bSubstring = hex.substring(2, 3);

    r = parseInt(rSubstring + rSubstring, 16);
    g = parseInt(gSubstring + gSubstring, 16);
    b = parseInt(bSubstring + bSubstring, 16);
  }

  if (opacity) {
    if (opacity > 1) {
      opacity = opacity / 100;
    }

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
  }

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/core/components/mdTheme/mdTheme.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78f39aae", Component.options)
  } else {
    hotAPI.reload("data-v-78f39aae", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'md-theme',
  props: {
    mdTag: String,
    mdName: {
      type: String,
      default: 'default'
    }
  },
  render: function render(createElement) {
    if (this.mdTag || this.$slots.default.length > 1) {
      return createElement(this.mdTag || 'div', {
        staticClass: this.$material.prefix + this.mdName
      }, this.$slots.default);
    }

    return this.$slots.default[0];
  },

  watch: {
    mdName: function mdName(value) {
      this.$material.useTheme(value);
    }
  },
  beforeMount: function beforeMount() {
    var localTheme = this.mdName;

    if (localTheme) {
      this.$material.useTheme(localTheme);
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var changeHtmlMetaColor = exports.changeHtmlMetaColor = undefined;
var createNewStyleElement = exports.createNewStyleElement = undefined;

if (process.env.VUE_ENV !== 'server') {
  exports.changeHtmlMetaColor = changeHtmlMetaColor = function changeHtmlMetaColor(color, themeClass, previousClass) {
    var elem = document.querySelector('meta[name="theme-color"]');

    if (elem) {
      elem.setAttribute('content', color);
    } else {
      elem = document.createElement('meta');
      elem.setAttribute('name', 'theme-color');
      elem.setAttribute('content', color);

      document.head.appendChild(elem);
    }

    document.body.classList.remove(previousClass);
    document.body.classList.add(themeClass);
  };

  exports.createNewStyleElement = createNewStyleElement = function createNewStyleElement(style, styleId) {
    var head = document.head;
    var styleElement = head.querySelector('#' + styleId);

    if (!styleElement) {
      var newTag = document.createElement('style');

      newTag.type = 'text/css';
      newTag.id = styleId;
      newTag.textContent = style;

      head.appendChild(newTag);
    } else {
      styleElement.textContent = style;
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)))

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdInkRipple = __webpack_require__(89);

var _mdInkRipple2 = _interopRequireDefault(_mdInkRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-ink-ripple', _mdInkRipple2.default);
}
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(92),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/core/components/mdInkRipple/mdInkRipple.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdInkRipple.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62c1a2f0", Component.options)
  } else {
    hotAPI.reload("data-v-62c1a2f0", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

var addEvent = function addEvent(target, type, handler) {
  if (type === 'start') {
    target.addEventListener('mousedown', handler);
    target.addEventListener('touchstart', handler);
  } else {
    target.addEventListener('mouseup', handler);
    target.addEventListener('touchend', handler);
  }
};
var removeEvent = function removeEvent(target, type, handler) {
  if (type === 'start') {
    target.removeEventListener('mousedown', handler);
    target.removeEventListener('touchstart', handler);
  } else {
    target.removeEventListener('mouseup', handler);
    target.removeEventListener('touchend', handler);
  }
};

exports.default = {
  name: 'md-ink-ripple',
  props: {
    mdDisabled: Boolean
  },
  data: function data() {
    return {
      mounted: false,
      rippleElement: null,
      parentElement: null,
      parentDimensions: {
        width: null,
        height: null,
        top: null,
        left: null
      },
      awaitingComplete: false,
      hasCompleted: false,
      fadeOut: false,
      active: false
    };
  },
  computed: {
    classes: function classes() {
      return {
        'md-fadeout': this.fadeOut,
        'md-active': this.active
      };
    },
    styles: function styles() {
      return {
        width: this.parentDimensions.width,
        height: this.parentDimensions.height,
        top: this.parentDimensions.top,
        left: this.parentDimensions.left
      };
    },
    disabled: function disabled() {
      return this.mdDisabled || !this.$material.inkRipple;
    }
  },
  watch: {
    disabled: function disabled(_disabled) {
      if (!_disabled) {
        this.init();
      } else {
        this.destroy();
      }
    }
  },
  methods: {
    checkAvailablePositions: function checkAvailablePositions(element) {
      var availablePositions = ['relative', 'absolute', 'fixed'];

      return availablePositions.indexOf(getComputedStyle(element).position) > -1;
    },
    getClosestPositionedParent: function getClosestPositionedParent(element) {
      var parent = element && element.parentNode;

      if (!parent || parent.tagName.toLowerCase() === 'body') {
        return false;
      }

      if (this.checkAvailablePositions(element)) {
        return element;
      }

      return this.getClosestPositionedParent(parent);
    },
    getParentSize: function getParentSize() {
      var parent = this.parentElement;

      return Math.round(Math.max(parent.offsetWidth, parent.offsetHeight)) + 'px';
    },
    getClickPosition: function getClickPosition(event) {
      if (this.$refs.ripple) {
        var rect = this.parentElement.getBoundingClientRect();
        var top = event.pageY;
        var left = event.pageX;

        if (event.type === 'touchstart') {
          top = event.changedTouches[0].pageY;
          left = event.changedTouches[0].pageX;
        }

        return {
          top: top - rect.top - this.$refs.ripple.offsetHeight / 2 - document.body.scrollTop + 'px',
          left: left - rect.left - this.$refs.ripple.offsetWidth / 2 - document.body.scrollLeft + 'px'
        };
      }

      return false;
    },
    setDimensions: function setDimensions() {
      var size = this.getParentSize();

      this.parentDimensions.width = size;
      this.parentDimensions.height = size;
    },
    setPositions: function setPositions(event) {
      var positions = this.getClickPosition(event);

      if (positions) {
        this.parentDimensions.top = positions.top;
        this.parentDimensions.left = positions.left;
      }
    },
    clearState: function clearState() {
      this.active = false;
      this.fadeOut = false;
      this.hasCompleted = false;
      this.setDimensions();
      window.clearTimeout(this.awaitingComplete);
      removeEvent(document.body, 'end', this.endRipple);
    },
    startRipple: function startRipple(event) {
      var _this = this;

      if (event.type === 'touchstart') {
        this.previous.push('touch');
      } else {
        this.previous.push('mouse');
      }

      this.previous = this.previous.splice(this.previous.length - 2, this.previous.length);

      if (this.previous.length >= 2 && this.previous[1] === 'touch' && this.previous[0] === 'mouse') {
        return;
      }

      this.clearState();
      this.awaitingComplete = window.setTimeout((function () {
        _this.hasCompleted = true;
      }), 400);

      addEvent(document.body, 'end', this.endRipple);

      this.$nextTick((function () {
        _this.setPositions(event);
        _this.active = true;
      }));
    },
    endRipple: function endRipple() {
      var _this2 = this;

      if (this.hasCompleted) {
        this.fadeOut = true;
      } else {
        this.awaitingComplete = window.setTimeout((function () {
          _this2.fadeOut = true;
        }), 200);
      }

      removeEvent(document.body, 'end', this.endRipple);
    },
    registerTriggerEvent: function registerTriggerEvent() {
      addEvent(this.parentElement, 'start', this.startRipple);
    },
    unregisterTriggerEvent: function unregisterTriggerEvent() {
      if (this.parentElement) {
        removeEvent(this.parentElement, 'start', this.startRipple);
      }
    },
    init: function init() {
      this.rippleElement = this.$el;
      this.parentElement = this.getClosestPositionedParent(this.$el.parentNode);
      this.previous = ['mouse'];

      if (this.parentElement) {
        this.rippleElement.parentNode.removeChild(this.rippleElement);

        if (this.parentElement.querySelectorAll('.md-ink-ripple').length > 0) {
          this.$destroy();
        } else {
          this.parentElement.appendChild(this.rippleElement);
          this.registerTriggerEvent();
          this.setDimensions();
        }
      } else {
        this.$destroy();
      }
    },
    destroy: function destroy() {
      if (this.rippleElement && this.rippleElement.parentNode) {
        this.unregisterTriggerEvent();
        this.rippleElement.parentNode.removeChild(this.rippleElement);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    window.setTimeout((function () {
      if (!_this3.disabled) {
        _this3.init();
      } else {
        _this3.destroy();
      }

      _this3.$nextTick((function () {
        _this3.mounted = true;
      }));
    }), 100);
  },
  beforeDestroy: function beforeDestroy() {
    this.destroy();
  }
};
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.mounted || !_vm.disabled) ? _c('div', {
    staticClass: "md-ink-ripple"
  }, [_c('div', {
    ref: "ripple",
    staticClass: "md-ripple",
    class: _vm.classes,
    style: (_vm.styles)
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-62c1a2f0", module.exports)
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME :not(input):not(textarea)::selection {\n  background: ACCENT-COLOR;\n  color: ACCENT-CONTRAST; }\n\n.THEME_NAME a:not(.md-button) {\n  color: ACCENT-COLOR; }\n  .THEME_NAME a:not(.md-button):hover {\n    color: ACCENT-COLOR-800; }\n\nbody.THEME_NAME {\n  background-color: BACKGROUND-COLOR;\n  color: BACKGROUND-CONTRAST-0.87; }\n\n/* Typography */\n.THEME_NAME .md-caption,\n.THEME_NAME .md-display-1,\n.THEME_NAME .md-display-2,\n.THEME_NAME .md-display-3,\n.THEME_NAME .md-display-4 {\n  color: BACKGROUND-CONTRAST-0.57; }\n\n.THEME_NAME code:not(.hljs) {\n  background-color: ACCENT-COLOR-A100-0.2;\n  color: ACCENT-COLOR-800; }\n"

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdAvatar = __webpack_require__(96);

var _mdAvatar2 = _interopRequireDefault(_mdAvatar);

var _mdAvatar3 = __webpack_require__(100);

var _mdAvatar4 = _interopRequireDefault(_mdAvatar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-avatar', _mdAvatar2.default);

  Vue.material.styles.push(_mdAvatar4.default);
}
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(97)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(99),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdAvatar/mdAvatar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdAvatar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fb5ecf8", Component.options)
  } else {
    hotAPI.reload("data-v-4fb5ecf8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-avatar',
  mixins: [_mixin2.default]
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-avatar",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4fb5ecf8", module.exports)
  }
}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-avatar.md-primary.md-avatar-icon {\n  background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-avatar.md-primary.md-avatar-icon .md-icon {\n    color: PRIMARY-CONTRAST-0.99999; }\n\n.THEME_NAME.md-avatar.md-accent.md-avatar-icon {\n  background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-avatar.md-accent.md-avatar-icon .md-icon {\n    color: ACCENT-CONTRAST-0.99999; }\n\n.THEME_NAME.md-avatar.md-warn.md-avatar-icon {\n  background-color: WARN-COLOR; }\n  .THEME_NAME.md-avatar.md-warn.md-avatar-icon .md-icon {\n    color: WARN-CONTRAST-0.99999; }\n"

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdBackdrop = __webpack_require__(102);

var _mdBackdrop2 = _interopRequireDefault(_mdBackdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-backdrop', _mdBackdrop2.default);
}
module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdBackdrop/mdBackdrop.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdBackdrop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e09d01b8", Component.options)
  } else {
    hotAPI.reload("data-v-e09d01b8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-backdrop',
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-backdrop",
    on: {
      "click": _vm.close,
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.close($event)
      }
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e09d01b8", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdBottomBar = __webpack_require__(107);

var _mdBottomBar2 = _interopRequireDefault(_mdBottomBar);

var _mdBottomBarItem = __webpack_require__(111);

var _mdBottomBarItem2 = _interopRequireDefault(_mdBottomBarItem);

var _mdBottomBar3 = __webpack_require__(114);

var _mdBottomBar4 = _interopRequireDefault(_mdBottomBar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-bottom-bar', _mdBottomBar2.default);
  Vue.component('md-bottom-bar-item', _mdBottomBarItem2.default);

  Vue.material.styles.push(_mdBottomBar4.default);
}
module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(108)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(110),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdBottomBar/mdBottomBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdBottomBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-197179a8", Component.options)
  } else {
    hotAPI.reload("data-v-197179a8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-bottom-bar',
  props: {
    mdShift: Boolean
  },
  mixins: [_mixin2.default],
  computed: {
    classes: function classes() {
      return this.mdShift ? 'md-shift' : 'md-fixed';
    }
  },
  methods: {
    setActive: function setActive(item) {
      this.$children.forEach((function (child) {
        child.active = child === item;
      }));

      this.$emit('change', this.$children.findIndex((function (i) {
        return i === item;
      })));
    }
  }
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-bottom-bar",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-197179a8", module.exports)
  }
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(113),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdBottomBar/mdBottomBarItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdBottomBarItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b798f5b", Component.options)
  } else {
    hotAPI.reload("data-v-1b798f5b", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-bottom-bar-item',
  props: {
    mdIcon: String,
    mdIconSrc: String,
    mdIconset: String,
    mdActive: Boolean,
    disabled: Boolean,
    href: String
  },
  data: function data() {
    return {
      active: false
    };
  },

  computed: {
    classes: function classes() {
      return {
        'md-active': this.active
      };
    }
  },
  watch: {
    mdActive: function mdActive(active) {
      this.setActive(active);
    }
  },
  methods: {
    setActive: function setActive(active, $event) {
      if (active) {
        this.$parent.setActive(this);
      }

      if ($event) {
        this.$emit('click', $event);
      }
    }
  },
  mounted: function mounted() {
    if (!this.$parent.$el.classList.contains('md-bottom-bar')) {
      this.$destroy();

      throw new Error('You should wrap the md-bottom-bar-item in a md-bottom-bar');
    }

    if (this.mdActive) {
      this.active = true;
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.href) ? _c('a', {
    staticClass: "md-bottom-bar-item",
    class: _vm.classes,
    attrs: {
      "href": _vm.href,
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.setActive(true, $event)
      }
    }
  }, [(_vm.mdIcon || _vm.mdIconSrc || _vm.mdIconset) ? _c('md-icon', {
    attrs: {
      "md-src": _vm.mdIconSrc,
      "md-iconset": _vm.mdIconset
    }
  }, [_vm._v(_vm._s(_vm.mdIcon))]) : _vm._e(), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-text"
  }, [_vm._t("default")], 2)], 1) : _c('button', {
    staticClass: "md-bottom-bar-item",
    class: _vm.classes,
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.setActive(true, $event)
      }
    }
  }, [(_vm.mdIcon || _vm.mdIconSrc || _vm.mdIconset) ? _c('md-icon', {
    attrs: {
      "md-src": _vm.mdIconSrc,
      "md-iconset": _vm.mdIconset
    }
  }, [_vm._v(_vm._s(_vm.mdIcon))]) : _vm._e(), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-text"
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b798f5b", module.exports)
  }
}

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-bottom-bar.md-fixed {\n  background-color: BACKGROUND-COLOR; }\n  .THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item {\n    color: BACKGROUND-CONTRAST-0.54; }\n    .THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n      color: BACKGROUND-CONTRAST-0.87; }\n    .THEME_NAME.md-bottom-bar.md-fixed .md-bottom-bar-item.md-active {\n      color: PRIMARY-COLOR; }\n  .THEME_NAME.md-bottom-bar.md-fixed.md-accent .md-bottom-bar-item.md-active {\n    color: ACCENT-COLOR; }\n  .THEME_NAME.md-bottom-bar.md-fixed.md-warn .md-bottom-bar-item.md-active {\n    color: WARN-COLOR; }\n  .THEME_NAME.md-bottom-bar.md-fixed.md-transparent .md-bottom-bar-item.md-active {\n    color: BACKGROUND-CONTRAST; }\n\n.THEME_NAME.md-bottom-bar.md-shift {\n  background-color: PRIMARY-COLOR;\n  color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item {\n    color: PRIMARY-CONTRAST-0.54; }\n    .THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n      color: PRIMARY-CONTRAST-0.87; }\n    .THEME_NAME.md-bottom-bar.md-shift .md-bottom-bar-item.md-active {\n      color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-bottom-bar.md-shift.md-accent {\n    background-color: ACCENT-COLOR; }\n    .THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item {\n      color: ACCENT-CONTRAST-0.54; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n        color: ACCENT-CONTRAST-0.87; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-accent .md-bottom-bar-item.md-active {\n        color: ACCENT-CONTRAST; }\n  .THEME_NAME.md-bottom-bar.md-shift.md-warn {\n    background-color: WARN-COLOR; }\n    .THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item {\n      color: WARN-CONTRAST-0.54; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n        color: WARN-CONTRAST-0.87; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-warn .md-bottom-bar-item.md-active {\n        color: WARN-CONTRAST; }\n  .THEME_NAME.md-bottom-bar.md-shift.md-transparent {\n    background-color: transparent; }\n    .THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item {\n      color: BACKGROUND-CONTRAST-0.54; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item:hover:not([disabled]):not(.md-active) {\n        color: BACKGROUND-CONTRAST-0.87; }\n      .THEME_NAME.md-bottom-bar.md-shift.md-transparent .md-bottom-bar-item.md-active {\n        color: BACKGROUND-CONTRAST; }\n"

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdButton = __webpack_require__(116);

var _mdButton2 = _interopRequireDefault(_mdButton);

var _mdButton3 = __webpack_require__(120);

var _mdButton4 = _interopRequireDefault(_mdButton3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-button', _mdButton2.default);

  Vue.material.styles.push(_mdButton4.default);
}
module.exports = exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(118),
  /* template */
  __webpack_require__(119),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdButton/mdButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dc87da4", Component.options)
  } else {
    hotAPI.reload("data-v-6dc87da4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-button',
  props: {
    href: String,
    target: String,
    rel: String,
    type: {
      type: String,
      default: 'button'
    },
    disabled: Boolean
  },
  mixins: [_mixin2.default],
  computed: {
    newRel: function newRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener';
      }

      return this.rel;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.href) ? _c('a', {
    staticClass: "md-button",
    class: [_vm.themeClass],
    attrs: {
      "href": _vm.href,
      "disabled": _vm.disabled,
      "target": _vm.target,
      "rel": _vm.newRel
    },
    on: {
      "click": function($event) {
        _vm.$emit('click', $event)
      }
    }
  }, [_c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _vm._t("default")], 2) : _c('button', {
    staticClass: "md-button",
    class: [_vm.themeClass],
    attrs: {
      "type": _vm.type,
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.$emit('click', $event)
      }
    }
  }, [_c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  }), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6dc87da4", module.exports)
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button) {\n  color: BACKGROUND-CONTRAST;\n  background-color: BACKGROUND-COLOR; }\n  .THEME_NAME.md-button:not([disabled]).md-raised:not(.md-icon-button):hover {\n    background-color: BACKGROUND-COLOR-200; }\n\n.THEME_NAME.md-button:not([disabled]).md-raised.md-icon-button:not(.md-raised) {\n  color: BACKGROUND-CONTRAST; }\n\n.THEME_NAME.md-button:not([disabled]).md-fab {\n  color: ACCENT-CONTRAST;\n  background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-button:not([disabled]).md-fab:hover {\n    background-color: ACCENT-COLOR-600; }\n  .THEME_NAME.md-button:not([disabled]).md-fab.md-clean {\n    color: BACKGROUND-CONTRAST;\n    background-color: BACKGROUND-COLOR; }\n    .THEME_NAME.md-button:not([disabled]).md-fab.md-clean:hover {\n      background-color: BACKGROUND-COLOR-200; }\n\n.THEME_NAME.md-button:not([disabled]).md-primary:not(.md-icon-button) {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-button:not([disabled]).md-primary.md-raised, .THEME_NAME.md-button:not([disabled]).md-primary.md-fab {\n  background-color: PRIMARY-COLOR;\n  color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-button:not([disabled]).md-primary.md-raised:hover, .THEME_NAME.md-button:not([disabled]).md-primary.md-fab:hover {\n    background-color: PRIMARY-COLOR-600; }\n\n.THEME_NAME.md-button:not([disabled]).md-primary.md-icon-button:not(.md-raised) {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-button:not([disabled]).md-accent:not(.md-icon-button) {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-button:not([disabled]).md-accent.md-raised {\n  background-color: ACCENT-COLOR;\n  color: ACCENT-CONTRAST; }\n  .THEME_NAME.md-button:not([disabled]).md-accent.md-raised:hover {\n    background-color: ACCENT-COLOR-600; }\n\n.THEME_NAME.md-button:not([disabled]).md-accent.md-icon-button:not(.md-raised) {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-button:not([disabled]).md-warn:not(.md-icon-button) {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-button:not([disabled]).md-warn.md-raised, .THEME_NAME.md-button:not([disabled]).md-warn.md-fab {\n  background-color: WARN-COLOR;\n  color: WARN-CONTRAST; }\n  .THEME_NAME.md-button:not([disabled]).md-warn.md-raised:hover, .THEME_NAME.md-button:not([disabled]).md-warn.md-fab:hover {\n    background-color: WARN-COLOR-600; }\n\n.THEME_NAME.md-button:not([disabled]).md-warn.md-icon-button:not(.md-raised) {\n  color: WARN-COLOR; }\n"

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdButtonToggle = __webpack_require__(122);

var _mdButtonToggle2 = _interopRequireDefault(_mdButtonToggle);

var _mdButtonToggle3 = __webpack_require__(126);

var _mdButtonToggle4 = _interopRequireDefault(_mdButtonToggle3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-button-toggle', _mdButtonToggle2.default);

  Vue.material.styles.push(_mdButtonToggle4.default);
}
module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdButtonToggle/mdButtonToggle.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdButtonToggle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c5891b8", Component.options)
  } else {
    hotAPI.reload("data-v-0c5891b8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onClickButton = void 0; //
//
//
//
//
//
//
//

exports.default = {
  name: 'md-button-toggle',
  props: {
    mdSingle: Boolean,
    mdManualToggle: Boolean
  },
  mixins: [_mixin2.default],
  mounted: function mounted() {
    var _this = this;

    if (!this.mdManualToggle) {
      this.$children.forEach((function (child) {
        var element = child.$el;
        var toggleClass = 'md-toggle';

        onClickButton = function onClickButton() {
          if (_this.mdSingle) {
            _this.$children.forEach((function (child) {
              child.$el.classList.remove(toggleClass);
            }));

            element.classList.add(toggleClass);
          } else {
            element.classList.toggle(toggleClass);
          }
        };

        if (element && element.classList.contains('md-button')) {
          element.addEventListener('click', onClickButton);
        }
      }));
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.mdManualToggle) {
      this.$children.forEach((function (child) {
        var element = child.$el;

        if (element && element.classList.contains('md-button')) {
          element.removeEventListener('click', onClickButton);
        }
      }));
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-button-toggle",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c5891b8", module.exports)
  }
}

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-button-toggle .md-button:after {\n  width: 1px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  content: \" \"; }\n\n.THEME_NAME.md-button-toggle .md-toggle {\n  color: BACKGROUND-CONTRAST-0.54;\n  background-color: BACKGROUND-CONTRAST-0.26; }\n  .THEME_NAME.md-button-toggle .md-toggle:hover:not([disabled]) {\n    background-color: BACKGROUND-CONTRAST-0.38; }\n  .THEME_NAME.md-button-toggle .md-toggle + .md-toggle:after {\n    background-color: BACKGROUND-CONTRAST-0.12; }\n\n.THEME_NAME.md-button-toggle.md-raised .md-toggle {\n  color: BACKGROUND-CONTRAST-0.54;\n  background-color: BACKGROUND-CONTRAST-0.26; }\n  .THEME_NAME.md-button-toggle.md-raised .md-toggle:hover:not([disabled]) {\n    background-color: BACKGROUND-CONTRAST-0.38; }\n  .THEME_NAME.md-button-toggle.md-raised .md-toggle + .md-toggle:after {\n    background-color: BACKGROUND-CONTRAST-0.12; }\n\n.THEME_NAME.md-button-toggle.md-primary .md-toggle {\n  color: PRIMARY-CONTRAST;\n  background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-button-toggle.md-primary .md-toggle:hover:not([disabled]) {\n    background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-button-toggle.md-primary .md-toggle + .md-toggle:after {\n    background-color: PRIMARY-COLOR-600; }\n\n.THEME_NAME.md-button-toggle.md-accent .md-toggle {\n  color: ACCENT-CONTRAST;\n  background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-button-toggle.md-accent .md-toggle:hover:not([disabled]) {\n    background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-button-toggle.md-accent .md-toggle + .md-toggle:after {\n    background-color: ACCENT-COLOR-600; }\n\n.THEME_NAME.md-button-toggle.md-warn .md-toggle {\n  color: WARN-CONTRAST;\n  background-color: WARN-COLOR; }\n  .THEME_NAME.md-button-toggle.md-warn .md-toggle:hover:not([disabled]) {\n    background-color: WARN-COLOR; }\n  .THEME_NAME.md-button-toggle.md-warn .md-toggle + .md-toggle:after {\n    background-color: WARN-COLOR-600; }\n\n.THEME_NAME.md-button-toggle [disabled] {\n  color: rgba(0, 0, 0, 0.26); }\n  .THEME_NAME.md-button-toggle [disabled].md-toggle {\n    color: BACKGROUND-CONTRAST-0.2;\n    background-color: rgba(0, 0, 0, 0.26); }\n"

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdCard = __webpack_require__(128);

var _mdCard2 = _interopRequireDefault(_mdCard);

var _mdCardMedia = __webpack_require__(132);

var _mdCardMedia2 = _interopRequireDefault(_mdCardMedia);

var _mdCardMediaCover = __webpack_require__(135);

var _mdCardMediaCover2 = _interopRequireDefault(_mdCardMediaCover);

var _mdCardMediaActions = __webpack_require__(138);

var _mdCardMediaActions2 = _interopRequireDefault(_mdCardMediaActions);

var _mdCardHeader = __webpack_require__(141);

var _mdCardHeader2 = _interopRequireDefault(_mdCardHeader);

var _mdCardHeaderText = __webpack_require__(144);

var _mdCardHeaderText2 = _interopRequireDefault(_mdCardHeaderText);

var _mdCardContent = __webpack_require__(147);

var _mdCardContent2 = _interopRequireDefault(_mdCardContent);

var _mdCardActions = __webpack_require__(150);

var _mdCardActions2 = _interopRequireDefault(_mdCardActions);

var _mdCardArea = __webpack_require__(153);

var _mdCardArea2 = _interopRequireDefault(_mdCardArea);

var _mdCardExpand = __webpack_require__(156);

var _mdCardExpand2 = _interopRequireDefault(_mdCardExpand);

var _mdCard3 = __webpack_require__(159);

var _mdCard4 = _interopRequireDefault(_mdCard3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-card', _mdCard2.default);
  Vue.component('md-card-media', _mdCardMedia2.default);
  Vue.component('md-card-media-cover', _mdCardMediaCover2.default);
  Vue.component('md-card-media-actions', _mdCardMediaActions2.default);
  Vue.component('md-card-header', _mdCardHeader2.default);
  Vue.component('md-card-header-text', _mdCardHeaderText2.default);
  Vue.component('md-card-content', _mdCardContent2.default);
  Vue.component('md-card-actions', _mdCardActions2.default);
  Vue.component('md-card-area', _mdCardArea2.default);
  Vue.component('md-card-expand', _mdCardExpand2.default);

  Vue.material.styles.push(_mdCard4.default);
}
module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(131),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-214af038", Component.options)
  } else {
    hotAPI.reload("data-v-214af038", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-card',
  props: {
    mdWithHover: Boolean
  },
  mixins: [_mixin2.default],
  computed: {
    classes: function classes() {
      return {
        'md-with-hover': this.mdWithHover
      };
    }
  }
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-214af038", module.exports)
  }
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(134),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardMedia.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardMedia.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-137f4a90", Component.options)
  } else {
    hotAPI.reload("data-v-137f4a90", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-card-media',
  props: {
    mdRatio: String,
    mdMedium: Boolean,
    mdBig: Boolean
  },
  computed: {
    classes: function classes() {
      var classes = {};

      if (this.mdRatio) {
        var ratio = [];

        if (this.mdRatio.indexOf(':') !== -1) {
          ratio = this.mdRatio.split(':');
        } else if (this.mdRatio.indexOf('/') !== -1) {
          ratio = this.mdRatio.split('/');
        }

        if (ratio.length === 2) {
          classes['md-' + ratio[0] + '-' + ratio[1]] = true;
        }
      }

      if (this.mdMedium || this.mdBig) {
        classes = {
          'md-medium': this.mdMedium,
          'md-big': this.mdBig
        };
      }

      return classes;
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-media",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-137f4a90", module.exports)
  }
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(137),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardMediaCover.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardMediaCover.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0df115b7", Component.options)
  } else {
    hotAPI.reload("data-v-0df115b7", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getImageLightness = __webpack_require__(65);

var _getImageLightness2 = _interopRequireDefault(_getImageLightness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-card-media-cover',
  props: {
    mdTextScrim: Boolean,
    mdSolid: Boolean
  },
  data: function data() {
    return {
      backdropBg: {}
    };
  },

  computed: {
    classes: function classes() {
      return {
        'md-text-scrim': this.mdTextScrim,
        'md-solid': this.mdSolid
      };
    },
    styles: function styles() {
      return {
        background: this.backdropBg
      };
    }
  },
  methods: {
    applyScrimColor: function applyScrimColor(darkness) {
      if (this.$refs.backdrop) {
        this.backdropBg = 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ' + darkness / 2 + ') 66%, rgba(0, 0, 0, ' + darkness + ') 100%)';
      }
    },
    applySolidColor: function applySolidColor(darkness) {
      var area = this.$el.querySelector('.md-card-area');

      if (area) {
        area.style.background = 'rgba(0, 0, 0, ' + darkness + ')';
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    var applyBackground = function applyBackground() {
      var darkness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.6;

      if (_this.mdTextScrim) {
        _this.applyScrimColor(darkness);
      } else if (_this.mdSolid) {
        _this.applySolidColor(darkness);
      }
    };
    var image = this.$el.querySelector('img');

    if (image && (this.mdTextScrim || this.mdSolid)) {
      (0, _getImageLightness2.default)(image, (function (lightness) {
        var limit = 256;
        var darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

        if (darkness >= 0.7) {
          darkness = 0.7;
        }

        applyBackground(darkness);
      }), applyBackground);
    }
  }
}; //
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-media-cover",
    class: _vm.classes
  }, [_vm._t("default"), _vm._v(" "), (_vm.mdTextScrim) ? _c('div', {
    ref: "backdrop",
    staticClass: "md-card-backdrop",
    style: (_vm.styles)
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0df115b7", module.exports)
  }
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(139),
  /* template */
  __webpack_require__(140),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardMediaActions.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardMediaActions.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04064406", Component.options)
  } else {
    hotAPI.reload("data-v-04064406", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-card-media-actions'
};
module.exports = exports['default'];

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-media-actions"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-04064406", module.exports)
  }
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(143),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61490f11", Component.options)
  } else {
    hotAPI.reload("data-v-61490f11", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-card-header'
};
module.exports = exports['default'];

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-header"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61490f11", module.exports)
  }
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(146),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardHeaderText.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardHeaderText.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5744755e", Component.options)
  } else {
    hotAPI.reload("data-v-5744755e", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-card-header-text',
  mounted: function mounted() {
    this.parentClasses = this.$parent.$el.classList;

    if (this.parentClasses.contains('md-card-header')) {
      this.insideParent = true;
      this.parentClasses.add('md-card-header-flex');
    }
  },
  destroyed: function destroyed() {
    this.parentClasses.remove('md-card-header-flex');
  }
};
module.exports = exports['default'];

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-header-text"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5744755e", module.exports)
  }
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(149),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardContent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6cb287a5", Component.options)
  } else {
    hotAPI.reload("data-v-6cb287a5", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-card-content'
};
module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-content"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6cb287a5", module.exports)
  }
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(151),
  /* template */
  __webpack_require__(152),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardActions.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardActions.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39548bae", Component.options)
  } else {
    hotAPI.reload("data-v-39548bae", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-card-actions'
};
module.exports = exports['default'];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-actions"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-39548bae", module.exports)
  }
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(155),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardArea.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardArea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-180bafde", Component.options)
  } else {
    hotAPI.reload("data-v-180bafde", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-card-area',
  props: {
    mdInset: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'md-inset': this.mdInset
      };
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-card-area",
    class: _vm.classes
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-180bafde", module.exports)
  }
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(158),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCard/mdCardExpand.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCardExpand.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b963c9e", Component.options)
  } else {
    hotAPI.reload("data-v-0b963c9e", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: 'md-card-expand',
  data: function data() {
    return {
      trigger: null,
      content: null
    };
  },

  methods: {
    toggle: function toggle() {
      this.$refs.expand.classList.toggle('md-active');
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.setTimeout((function () {
      _this.trigger = _this.$el.querySelector('[md-expand-trigger]');
      _this.content = _this.$el.querySelector('.md-card-content');

      if (_this.content) {
        _this.trigger.addEventListener('click', _this.toggle);
      }
    }), 200);
  },
  destroyed: function destroyed() {
    if (this.content) {
      this.trigger.removeEventListener('click', this.toggle);
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "expand",
    staticClass: "md-card-expand"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0b963c9e", module.exports)
  }
}

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-card {\n  background-color: BACKGROUND-COLOR; }\n  .THEME_NAME.md-card.md-primary {\n    background-color: PRIMARY-COLOR;\n    color: PRIMARY-CONTRAST; }\n    .THEME_NAME.md-card.md-primary .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n    .THEME_NAME.md-card.md-primary .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n      color: PRIMARY-CONTRAST-0.87; }\n    .THEME_NAME.md-card.md-primary .md-input-container.md-input-focused input,\n    .THEME_NAME.md-card.md-primary .md-input-container.md-input-focused textarea {\n      color: PRIMARY-CONTRAST;\n      text-shadow: 0 0 0 PRIMARY-CONTRAST; }\n    .THEME_NAME.md-card.md-primary .md-input-container.md-input-focused label,\n    .THEME_NAME.md-card.md-primary .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: PRIMARY-CONTRAST; }\n    .THEME_NAME.md-card.md-primary .md-input-container:after {\n      background-color: PRIMARY-CONTRAST; }\n    .THEME_NAME.md-card.md-primary .md-input-container input,\n    .THEME_NAME.md-card.md-primary .md-input-container textarea {\n      color: PRIMARY-CONTRAST;\n      text-shadow: 0 0 0 PRIMARY-CONTRAST; }\n      .THEME_NAME.md-card.md-primary .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-card.md-primary .md-input-container textarea::-webkit-input-placeholder {\n        color: PRIMARY-CONTRAST-0.54; }\n    .THEME_NAME.md-card.md-primary .md-input-container label,\n    .THEME_NAME.md-card.md-primary .md-input-container .md-icon:not(.md-icon-delete) {\n      color: PRIMARY-CONTRAST; }\n    .THEME_NAME.md-card.md-primary .md-card-expand .md-card-actions {\n      background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-card.md-accent {\n    background-color: ACCENT-COLOR;\n    color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-card.md-accent .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n    .THEME_NAME.md-card.md-accent .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n      color: ACCENT-CONTRAST-0.87; }\n    .THEME_NAME.md-card.md-accent .md-input-container.md-input-focused input,\n    .THEME_NAME.md-card.md-accent .md-input-container.md-input-focused textarea {\n      color: ACCENT-CONTRAST;\n      text-shadow: 0 0 0 ACCENT-CONTRAST; }\n    .THEME_NAME.md-card.md-accent .md-input-container.md-input-focused label,\n    .THEME_NAME.md-card.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-card.md-accent .md-input-container:after {\n      background-color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-card.md-accent .md-input-container input,\n    .THEME_NAME.md-card.md-accent .md-input-container textarea {\n      color: ACCENT-CONTRAST;\n      text-shadow: 0 0 0 ACCENT-CONTRAST; }\n      .THEME_NAME.md-card.md-accent .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-card.md-accent .md-input-container textarea::-webkit-input-placeholder {\n        color: ACCENT-CONTRAST-0.54; }\n    .THEME_NAME.md-card.md-accent .md-input-container label,\n    .THEME_NAME.md-card.md-accent .md-input-container .md-icon:not(.md-icon-delete) {\n      color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-card.md-accent .md-card-expand .md-card-actions {\n      background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-card.md-warn {\n    background-color: WARN-COLOR;\n    color: WARN-CONTRAST; }\n    .THEME_NAME.md-card.md-warn .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n    .THEME_NAME.md-card.md-warn .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n      color: WARN-CONTRAST-0.87; }\n    .THEME_NAME.md-card.md-warn .md-input-container.md-input-focused input,\n    .THEME_NAME.md-card.md-warn .md-input-container.md-input-focused textarea {\n      color: WARN-CONTRAST;\n      text-shadow: 0 0 0 WARN-CONTRAST; }\n    .THEME_NAME.md-card.md-warn .md-input-container.md-input-focused label,\n    .THEME_NAME.md-card.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: WARN-CONTRAST; }\n    .THEME_NAME.md-card.md-warn .md-input-container:after {\n      background-color: WARN-CONTRAST; }\n    .THEME_NAME.md-card.md-warn .md-input-container input,\n    .THEME_NAME.md-card.md-warn .md-input-container textarea {\n      color: WARN-CONTRAST;\n      text-shadow: 0 0 0 WARN-CONTRAST; }\n      .THEME_NAME.md-card.md-warn .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-card.md-warn .md-input-container textarea::-webkit-input-placeholder {\n        color: WARN-CONTRAST-0.54; }\n    .THEME_NAME.md-card.md-warn .md-input-container label,\n    .THEME_NAME.md-card.md-warn .md-input-container .md-icon:not(.md-icon-delete) {\n      color: WARN-CONTRAST; }\n    .THEME_NAME.md-card.md-warn .md-card-expand .md-card-actions {\n      background-color: WARN-COLOR; }\n  .THEME_NAME.md-card .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n  .THEME_NAME.md-card .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n    color: BACKGROUND-CONTRAST-0.54; }\n  .THEME_NAME.md-card > .md-card-area:after {\n    background-color: BACKGROUND-CONTRAST-0.12; }\n  .THEME_NAME.md-card .md-card-media-cover.md-text-scrim .md-backdrop {\n    background: linear-gradient(to bottom, BACKGROUND-CONTRAST-0.0 20%, BACKGROUND-CONTRAST-0.275 66%, BACKGROUND-CONTRAST-0.55 100%); }\n  .THEME_NAME.md-card .md-card-media-cover.md-solid .md-card-area {\n    background-color: BACKGROUND-CONTRAST-0.4; }\n  .THEME_NAME.md-card .md-card-media-cover .md-card-header .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon,\n  .THEME_NAME.md-card .md-card-media-cover .md-card-actions .md-icon-button:not(.md-primary):not(.md-warn):not(.md-accent) .md-icon {\n    color: #fff; }\n  .THEME_NAME.md-card .md-card-expand .md-card-actions {\n    background-color: BACKGROUND-COLOR; }\n"

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdCheckbox = __webpack_require__(161);

var _mdCheckbox2 = _interopRequireDefault(_mdCheckbox);

var _mdCheckbox3 = __webpack_require__(165);

var _mdCheckbox4 = _interopRequireDefault(_mdCheckbox3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-checkbox', _mdCheckbox2.default);

  Vue.material.styles.push(_mdCheckbox4.default);
}
module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(164),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdCheckbox/mdCheckbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdCheckbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9f41cdf8", Component.options)
  } else {
    hotAPI.reload("data-v-9f41cdf8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 162 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-checkbox',
  props: {
    name: String,
    value: [String, Boolean, Array],
    id: String,
    disabled: Boolean,
    mdValue: [String]
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      checked: this.value || false
    };
  },

  computed: {
    classes: function classes() {
      return {
        'md-checked': this.isArray() ? this.value.indexOf(this.mdValue) >= 0 : this.checked,
        'md-disabled': this.disabled
      };
    }
  },
  watch: {
    value: function value() {
      if (!this.isArray()) {
        this.checked = !!this.value;
      }
    }
  },
  methods: {
    toggleCheck: function toggleCheck($event) {

      if (!this.disabled) {
        if (this.isArray()) {
          var index = this.value.indexOf(this.mdValue);

          if (index >= 0) {
            this.value.splice(index, 1);
          } else {
            this.value.push(this.mdValue);
          }

          this.$emit('change', this.value, $event);
          this.$emit('input', this.value, $event);
        } else {
          this.checked = !this.checked;
          this.$emit('change', this.checked, $event);
          this.$emit('input', this.checked, $event);
        }
      }
    },
    isArray: function isArray() {
      return Array.isArray(this.value);
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-checkbox",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-checkbox-container",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toggleCheck($event)
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "id": _vm.id,
      "disabled": _vm.disabled,
      "tabindex": "-1"
    },
    domProps: {
      "value": _vm.mdValue,
      "checked": _vm.checked
    }
  }), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 1), _vm._v(" "), (_vm.$slots.default) ? _c('label', {
    staticClass: "md-checkbox-label",
    attrs: {
      "for": _vm.id || _vm.name
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.toggleCheck($event)
      }
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9f41cdf8", module.exports)
  }
}

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-checkbox.md-checked .md-checkbox-container {\n  background-color: ACCENT-COLOR;\n  border-color: ACCENT-COLOR; }\n  .THEME_NAME.md-checkbox.md-checked .md-checkbox-container:after {\n    border-color: ACCENT-CONTRAST; }\n\n.THEME_NAME.md-checkbox .md-ink-ripple {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-checkbox .md-ripple {\n  opacity: .26; }\n\n.THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container {\n  background-color: PRIMARY-COLOR;\n  border-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-checkbox.md-primary.md-checked .md-checkbox-container:after {\n    border-color: PRIMARY-CONTRAST; }\n\n.THEME_NAME.md-checkbox.md-primary .md-ink-ripple {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container {\n  background-color: WARN-COLOR;\n  border-color: WARN-COLOR; }\n  .THEME_NAME.md-checkbox.md-warn.md-checked .md-checkbox-container:after {\n    border-color: WARN-CONTRAST; }\n\n.THEME_NAME.md-checkbox.md-warn .md-ink-ripple {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-checkbox.md-disabled.md-checked .md-checkbox-container {\n  background-color: rgba(0, 0, 0, 0.26);\n  border-color: transparent; }\n\n.THEME_NAME.md-checkbox.md-disabled:not(.md-checked) .md-checkbox-container {\n  border-color: rgba(0, 0, 0, 0.26); }\n"

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdChips = __webpack_require__(167);

var _mdChips2 = _interopRequireDefault(_mdChips);

var _mdChip = __webpack_require__(171);

var _mdChip2 = _interopRequireDefault(_mdChip);

var _mdChips3 = __webpack_require__(174);

var _mdChips4 = _interopRequireDefault(_mdChips3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-chips', _mdChips2.default);
  Vue.component('md-chip', _mdChip2.default);

  Vue.material.styles.push(_mdChips4.default);
}
module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(169),
  /* template */
  __webpack_require__(170),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdChips/mdChips.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdChips.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cd17226", Component.options)
  } else {
    hotAPI.reload("data-v-5cd17226", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _uniqueId = __webpack_require__(36);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-chips',
  props: {
    value: Array,
    disabled: Boolean,
    debounce: {
      type: Number,
      default: 1E2
    },
    mdInputId: String,
    mdInputName: String,
    mdInputPlaceholder: String,
    mdInputType: {
      type: String,
      default: 'text'
    },
    mdStatic: Boolean,
    mdMax: {
      type: Number,
      default: Infinity
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      currentChip: null,
      selectedChips: this.value,
      inputId: this.mdInputId || 'chips-' + (0, _uniqueId2.default)()
    };
  },

  watch: {
    value: function value(_value) {
      this.selectedChips = _value;
    }
  },
  computed: {
    classes: function classes() {
      return {
        'md-static': this.mdStatic,
        'md-disabled': this.disabled,
        'md-chips': true
      };
    }
  },
  methods: {
    applyInputFocus: function applyInputFocus() {
      var _this = this;

      this.$nextTick((function () {
        _this.$refs.input.$el.focus();
      }));
    },
    addChip: function addChip() {
      if (this.currentChip && this.selectedChips.length < this.mdMax) {
        var value = this.currentChip.trim();

        if (this.selectedChips.indexOf(value) < 0) {
          this.selectedChips.push(value);
          this.currentChip = null;
          this.$emit('input', this.selectedChips);
          this.$emit('change', this.selectedChips);
          this.applyInputFocus();
        }
      }
    },
    deleteChip: function deleteChip(chip) {
      var index = this.selectedChips.indexOf(chip);

      if (index >= 0) {
        this.selectedChips.splice(index, 1);
      }

      this.$emit('change', this.selectedChips);
      this.applyInputFocus();
    },
    editChip: function editChip(chip) {
      var index = this.selectedChips.indexOf(chip);

      if (index >= 0) {
        this.selectedChips.splice(index, 1);
      }

      this.currentChip = chip;
      this.$emit('change', this.selectedChips);
      this.applyInputFocus();
    },
    deleteLastChip: function deleteLastChip() {
      if (!this.currentChip) {
        this.selectedChips.pop();
        this.$emit('change', this.selectedChips);
        this.applyInputFocus();
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-input-container', {
    staticClass: "md-chips",
    class: [_vm.themeClass, _vm.classes],
    on: {
      "click": _vm.applyInputFocus
    }
  }, [_vm._l((_vm.selectedChips), (function(chip) {
    return _c('md-chip', {
      key: chip,
      attrs: {
        "md-editable": !_vm.mdStatic,
        "md-deletable": !_vm.mdStatic,
        "disabled": _vm.disabled
      },
      on: {
        "edit": function($event) {
          _vm.editChip(chip)
        },
        "delete": function($event) {
          _vm.deleteChip(chip)
        }
      }
    }, [_vm._t("chip", [_vm._v(_vm._s(chip))], {
      value: chip
    })], 2)
  })), _vm._v(" "), _c('md-input', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.mdStatic),
      expression: "!mdStatic"
    }],
    ref: "input",
    attrs: {
      "type": _vm.mdInputType,
      "placeholder": _vm.mdInputPlaceholder,
      "id": _vm.inputId,
      "name": _vm.mdInputName,
      "disabled": _vm.disabled,
      "tabindex": "0",
      "debounce": 0
    },
    nativeOn: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
        _vm.deleteLastChip($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.addChip($event)
      }, function($event) {
        if (!('button' in $event) && $event.keyCode !== 186) { return null; }
        $event.preventDefault();
        _vm.addChip($event)
      }]
    },
    model: {
      value: (_vm.currentChip),
      callback: function($$v) {
        _vm.currentChip = $$v
      },
      expression: "currentChip"
    }
  }), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cd17226", module.exports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(173),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdChips/mdChip.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdChip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c2a829d", Component.options)
  } else {
    hotAPI.reload("data-v-2c2a829d", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-chip',
  props: {
    disabled: Boolean,
    mdDeletable: Boolean,
    mdEditable: Boolean
  },
  mixins: [_mixin2.default],
  computed: {
    classes: function classes() {
      return {
        'md-deletable': this.mdDeletable,
        'md-disabled': this.disabled,
        'md-editable': this.mdEditable
      };
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-chip",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-chip-container",
    on: {
      "click": function($event) {
        !_vm.disabled && _vm.mdEditable && _vm.$emit('edit')
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.mdDeletable) ? _c('md-button', {
    staticClass: "md-icon-button md-dense md-delete",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": function($event) {
        !_vm.disabled && _vm.$emit('delete')
      }
    },
    nativeOn: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
        !_vm.disabled && _vm.$emit('delete')
      }
    }
  }, [_c('md-icon', {
    staticClass: "md-icon-delete"
  }, [_vm._v("cancel")])], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2c2a829d", module.exports)
  }
}

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-chip {\n  background-color: BACKGROUND-CONTRAST-0.12; }\n  .THEME_NAME.md-chip.md-deletable:hover, .THEME_NAME.md-chip.md-deletable:focus, .THEME_NAME.md-chip.md-editable:hover, .THEME_NAME.md-chip.md-editable:focus {\n    background-color: BACKGROUND-CONTRAST-0.54;\n    color: BACKGROUND-COLOR; }\n    .THEME_NAME.md-chip.md-deletable:hover .md-delete, .THEME_NAME.md-chip.md-deletable:focus .md-delete, .THEME_NAME.md-chip.md-editable:hover .md-delete, .THEME_NAME.md-chip.md-editable:focus .md-delete {\n      color: BACKGROUND-COLOR; }\n  .THEME_NAME.md-chip .md-delete {\n    color: BACKGROUND-CONTRAST-0.38; }\n    .THEME_NAME.md-chip .md-delete .md-ripple {\n      color: BACKGROUND-COLOR; }\n  .THEME_NAME.md-chip.md-primary {\n    color: PRIMARY-CONTRAST;\n    background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-chip.md-accent {\n    color: ACCENT-CONTRAST;\n    background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-chip.md-warn {\n    color: WARN-CONTRAST;\n    background-color: WARN-COLOR; }\n"

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdDialog = __webpack_require__(176);

var _mdDialog2 = _interopRequireDefault(_mdDialog);

var _mdDialogTitle = __webpack_require__(180);

var _mdDialogTitle2 = _interopRequireDefault(_mdDialogTitle);

var _mdDialogContent = __webpack_require__(183);

var _mdDialogContent2 = _interopRequireDefault(_mdDialogContent);

var _mdDialogActions = __webpack_require__(186);

var _mdDialogActions2 = _interopRequireDefault(_mdDialogActions);

var _mdDialogAlert = __webpack_require__(189);

var _mdDialogAlert2 = _interopRequireDefault(_mdDialogAlert);

var _mdDialogConfirm = __webpack_require__(192);

var _mdDialogConfirm2 = _interopRequireDefault(_mdDialogConfirm);

var _mdDialogPrompt = __webpack_require__(195);

var _mdDialogPrompt2 = _interopRequireDefault(_mdDialogPrompt);

var _mdDialog3 = __webpack_require__(198);

var _mdDialog4 = _interopRequireDefault(_mdDialog3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-dialog', _mdDialog2.default);
  Vue.component('md-dialog-title', _mdDialogTitle2.default);
  Vue.component('md-dialog-content', _mdDialogContent2.default);
  Vue.component('md-dialog-actions', _mdDialogActions2.default);

  /* Presets */
  Vue.component('md-dialog-alert', _mdDialogAlert2.default);
  Vue.component('md-dialog-confirm', _mdDialogConfirm2.default);
  Vue.component('md-dialog-prompt', _mdDialogPrompt2.default);

  Vue.material.styles.push(_mdDialog4.default);
}
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(177)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(179),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdDialog/mdDialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdDialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-341e9664", Component.options)
  } else {
    hotAPI.reload("data-v-341e9664", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 177 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _transitionEndEventName = __webpack_require__(42);

var _transitionEndEventName2 = _interopRequireDefault(_transitionEndEventName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-dialog',
  props: {
    mdClickOutsideToClose: {
      type: Boolean,
      default: true
    },
    mdEscToClose: {
      type: Boolean,
      default: true
    },
    mdBackdrop: {
      type: Boolean,
      default: true
    },
    mdOpenFrom: String,
    mdCloseTo: String,
    mdFullscreen: {
      type: Boolean,
      default: false
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      active: false,
      transitionOff: false,
      dialogTransform: ''
    };
  },
  computed: {
    classes: function classes() {
      return {
        'md-active': this.active
      };
    },
    dialogClasses: function dialogClasses() {
      return {
        'md-fullscreen': this.mdFullscreen,
        'md-transition-off': this.transitionOff,
        'md-reference': this.mdOpenFrom || this.mdCloseTo
      };
    },
    styles: function styles() {
      return {
        transform: this.dialogTransform
      };
    }
  },
  methods: {
    removeDialog: function removeDialog() {
      if (document.body.contains(this.dialogElement)) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
    calculateDialogPos: function calculateDialogPos(ref) {
      var reference = document.querySelector(ref);

      if (reference) {
        var openFromRect = reference.getBoundingClientRect();
        var dialogRect = this.dialogInnerElement.getBoundingClientRect();
        var widthInScale = openFromRect.width / dialogRect.width;
        var heightInScale = openFromRect.height / dialogRect.height;
        var distance = {
          top: -(dialogRect.top - openFromRect.top),
          left: -(dialogRect.left - openFromRect.left + openFromRect.width)
        };

        if (openFromRect.top > dialogRect.top + dialogRect.height) {
          distance.top = openFromRect.top - dialogRect.top;
        }

        if (openFromRect.left > dialogRect.left + dialogRect.width) {
          distance.left = openFromRect.left - dialogRect.left - openFromRect.width;
        }

        this.dialogTransform = 'translate3D(' + distance.left + 'px, ' + distance.top + 'px, 0) scale(' + widthInScale + ', ' + heightInScale + ')';
      }
    },
    open: function open() {
      var _this = this;

      document.body.appendChild(this.dialogElement);
      this.transitionOff = true;
      this.calculateDialogPos(this.mdOpenFrom);

      window.setTimeout((function () {
        _this.dialogElement.focus();
        _this.transitionOff = false;
        _this.active = true;
      }));

      this.$emit('open');
    },
    closeOnEsc: function closeOnEsc() {
      if (this.mdEscToClose) {
        this.close();
      }
    },
    close: function close() {
      var _this2 = this;

      if (document.body.contains(this.dialogElement)) {
        this.$nextTick((function () {
          var cleanElement = function cleanElement() {
            var activeRipple = _this2.dialogElement.querySelector('.md-ripple.md-active');

            if (activeRipple) {
              activeRipple.classList.remove('md-active');
            }

            _this2.dialogInnerElement.removeEventListener(_transitionEndEventName2.default, cleanElement);
            document.body.removeChild(_this2.dialogElement);
            _this2.dialogTransform = '';
          };

          _this2.transitionOff = true;
          _this2.dialogTransform = '';
          _this2.calculateDialogPos(_this2.mdCloseTo);

          window.setTimeout((function () {
            _this2.transitionOff = false;
            _this2.active = false;
            _this2.dialogInnerElement.addEventListener(_transitionEndEventName2.default, cleanElement);
          }));

          _this2.$emit('close');
        }));
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick((function () {
      _this3.dialogElement = _this3.$el;
      _this3.dialogInnerElement = _this3.$refs.dialog;
      _this3.removeDialog();
    }));
  },
  beforeDestroy: function beforeDestroy() {
    this.removeDialog();
  }
};
module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-container",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        $event.stopPropagation();
        _vm.closeOnEsc($event)
      }
    }
  }, [_c('div', {
    ref: "dialog",
    staticClass: "md-dialog",
    class: _vm.dialogClasses,
    style: (_vm.styles)
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.mdBackdrop) ? _c('md-backdrop', {
    ref: "backdrop",
    staticClass: "md-dialog-backdrop",
    class: _vm.classes,
    on: {
      "close": function($event) {
        _vm.mdClickOutsideToClose && _vm.close()
      }
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-341e9664", module.exports)
  }
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(182),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdDialog/mdDialogTitle.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdDialogTitle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ec2b6f8", Component.options)
  } else {
    hotAPI.reload("data-v-2ec2b6f8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-dialog-title'
};
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ec2b6f8", module.exports)
  }
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(185),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdDialog/mdDialogContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdDialogContent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44792925", Component.options)
  } else {
    hotAPI.reload("data-v-44792925", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-dialog-content'
};
module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-content"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44792925", module.exports)
  }
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(187),
  /* template */
  __webpack_require__(188),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdDialog/mdDialogActions.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdDialogActions.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-89c748ae", Component.options)
  } else {
    hotAPI.reload("data-v-89c748ae", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-dialog-actions'
};
module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-actions"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-89c748ae", module.exports)
  }
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(190),
  /* template */
  __webpack_require__(191),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdDialog/presets/mdDialogAlert.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdDialogAlert.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d32a2a6", Component.options)
  } else {
    hotAPI.reload("data-v-5d32a2a6", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-dialog-alert',
  props: {
    mdTitle: String,
    mdContent: String,
    mdContentHtml: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    }
  },
  data: function data() {
    return {
      debounce: false
    };
  },
  methods: {
    fireCloseEvent: function fireCloseEvent() {
      if (!this.debounce) {
        this.$emit('close');
      }
    },
    open: function open() {
      this.$emit('open');
      this.debounce = false;
      this.$refs.dialog.open();
    },
    close: function close() {
      this.fireCloseEvent();
      this.debounce = true;
      this.$refs.dialog.close();
    }
  },
  mounted: function mounted() {
    if (!this.mdContent && !this.mdContentHtml) {
      throw new Error('Missing md-content or md-content-html attributes');
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-dialog', {
    ref: "dialog",
    staticClass: "md-dialog-alert",
    on: {
      "close": function($event) {
        _vm.fireCloseEvent()
      }
    }
  }, [(_vm.mdTitle) ? _c('md-dialog-title', [_vm._v(_vm._s(_vm.mdTitle))]) : _vm._e(), _vm._v(" "), (_vm.mdContentHtml) ? _c('md-dialog-content', {
    domProps: {
      "innerHTML": _vm._s(_vm.mdContentHtml)
    }
  }) : _c('md-dialog-content', [_vm._v(_vm._s(_vm.mdContent))]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v(_vm._s(_vm.mdOkText))])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d32a2a6", module.exports)
  }
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(193),
  /* template */
  __webpack_require__(194),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdDialog/presets/mdDialogConfirm.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdDialogConfirm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c309205e", Component.options)
  } else {
    hotAPI.reload("data-v-c309205e", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-dialog-confirm',
  props: {
    mdTitle: String,
    mdContent: String,
    mdContentHtml: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    },
    mdCancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data: function data() {
    return {
      debounce: false
    };
  },
  methods: {
    fireCloseEvent: function fireCloseEvent(type) {
      if (!this.debounce) {
        this.$emit('close', type);
      }
    },
    open: function open() {
      this.$emit('open');
      this.debounce = false;
      this.$refs.dialog.open();
    },
    close: function close(type) {
      this.fireCloseEvent(type);
      this.debounce = true;
      this.$refs.dialog.close();
    }
  },
  mounted: function mounted() {
    if (!this.mdContent && !this.mdContentHtml) {
      throw new Error('Missing md-content or md-content-html attributes');
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-dialog', {
    ref: "dialog",
    staticClass: "md-dialog-confirm",
    on: {
      "close": function($event) {
        _vm.fireCloseEvent('cancel')
      }
    }
  }, [(_vm.mdTitle) ? _c('md-dialog-title', [_vm._v(_vm._s(_vm.mdTitle))]) : _vm._e(), _vm._v(" "), (_vm.mdContentHtml) ? _c('md-dialog-content', {
    domProps: {
      "innerHTML": _vm._s(_vm.mdContentHtml)
    }
  }) : _c('md-dialog-content', [_vm._v(_vm._s(_vm.mdContent))]), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.close('cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.mdCancelText))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.close('ok')
      }
    }
  }, [_vm._v(_vm._s(_vm.mdOkText))])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c309205e", module.exports)
  }
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(196),
  /* template */
  __webpack_require__(197),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdDialog/presets/mdDialogPrompt.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdDialogPrompt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-288a5063", Component.options)
  } else {
    hotAPI.reload("data-v-288a5063", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-dialog-prompt',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    mdTitle: String,
    mdContent: String,
    mdContentHtml: String,
    mdOkText: {
      type: String,
      default: 'Ok'
    },
    mdCancelText: {
      type: String,
      default: 'Cancel'
    },
    mdInputId: String,
    mdInputName: String,
    mdInputMaxlength: [String, Number],
    mdInputPlaceholder: String
  },
  data: function data() {
    return {
      debounce: false
    };
  },
  methods: {
    fireCloseEvent: function fireCloseEvent(type) {
      if (!this.debounce) {
        this.$emit('close', type);
      }
    },
    open: function open() {
      var _this = this;

      this.$emit('open');
      this.debounce = false;
      this.$refs.dialog.open();

      window.setTimeout((function () {
        _this.$refs.input.$el.focus();
      }));
    },
    close: function close(type) {
      this.fireCloseEvent(type);
      this.debounce = true;
      this.$refs.dialog.close();
    },
    confirmValue: function confirmValue() {
      this.$emit('input', this.$refs.input.$el.value);
      this.close('ok');
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-dialog', {
    ref: "dialog",
    staticClass: "md-dialog-prompt",
    on: {
      "close": function($event) {
        _vm.fireCloseEvent('cancel')
      }
    }
  }, [(_vm.mdTitle) ? _c('md-dialog-title', [_vm._v(_vm._s(_vm.mdTitle))]) : _vm._e(), _vm._v(" "), (_vm.mdContentHtml) ? _c('md-dialog-content', {
    domProps: {
      "innerHTML": _vm._s(_vm.mdContentHtml)
    }
  }) : _vm._e(), _vm._v(" "), (_vm.mdContent) ? _c('md-dialog-content', [_vm._v(_vm._s(_vm.mdContent))]) : _vm._e(), _vm._v(" "), _c('md-dialog-content', [_c('md-input-container', [_c('md-input', {
    ref: "input",
    attrs: {
      "id": _vm.mdInputId,
      "name": _vm.mdInputName,
      "maxlength": _vm.mdInputMaxlength,
      "placeholder": _vm.mdInputPlaceholder,
      "value": _vm.value
    },
    nativeOn: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.confirmValue($event)
      }
    }
  })], 1)], 1), _vm._v(" "), _c('md-dialog-actions', [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.close('cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.mdCancelText))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": _vm.confirmValue
    }
  }, [_vm._v(_vm._s(_vm.mdOkText))])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-288a5063", module.exports)
  }
}

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-dialog-container .md-dialog {\n  background-color: BACKGROUND-COLOR;\n  color: BACKGROUND-CONTRAST; }\n"

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdDivider = __webpack_require__(200);

var _mdDivider2 = _interopRequireDefault(_mdDivider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-divider', _mdDivider2.default);
}
module.exports = exports['default'];

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(201)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(202),
  /* template */
  __webpack_require__(203),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdDivider/mdDivider.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdDivider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e9f054a", Component.options)
  } else {
    hotAPI.reload("data-v-5e9f054a", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 201 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-divider'
};
module.exports = exports['default'];

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('hr', {
    staticClass: "md-divider"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e9f054a", module.exports)
  }
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdFile = __webpack_require__(205);

var _mdFile2 = _interopRequireDefault(_mdFile);

var _mdFile3 = __webpack_require__(209);

var _mdFile4 = _interopRequireDefault(_mdFile3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-file', _mdFile2.default);

  Vue.material.styles.push(_mdFile4.default);
}
module.exports = exports['default'];

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(206)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(207),
  /* template */
  __webpack_require__(208),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdFile/mdFile.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdFile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5120f664", Component.options)
  } else {
    hotAPI.reload("data-v-5120f664", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 206 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(66);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-file',
  props: {
    value: String,
    id: String,
    name: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: String,
    accept: String,
    multiple: Boolean
  },
  data: function data() {
    return {
      filename: this.value
    };
  },

  watch: {
    value: function value() {
      this.filename = this.value;
    }
  },
  methods: {
    getMultipleName: function getMultipleName(files) {
      var names = [];

      [].concat((0, _toConsumableArray3.default)(files)).forEach((function (file) {
        names.push(file.name);
      }));

      return names.join(', ');
    },
    openPicker: function openPicker() {
      if (!this.disabled) {
        this.resetFile();
        this.$refs.fileInput.click();
        this.$refs.textInput.$el.focus();
      }
    },
    resetFile: function resetFile() {
      this.parentContainer.value = '';
      this.$refs.fileInput.value = '';
    },
    onFileSelected: function onFileSelected($event) {
      var files = $event.target.files || $event.dataTransfer.files;

      if (files) {
        if (files.length > 1) {
          this.filename = this.getMultipleName(files);
        } else if (files.length === 1) {
          this.filename = files[0].name;
        } else {
          this.filename = null;
        }
      } else {
        this.filename = $event.target.value.split('\\').pop();
      }

      this.$emit('selected', files || $event.target.value);
      this.$emit('input', this.filename);
    }
  },
  mounted: function mounted() {
    this.parentContainer = (0, _getClosestVueParent2.default)(this.$parent, 'md-input-container');

    if (!this.parentContainer) {
      this.$destroy();

      throw new Error('You should wrap the md-file in a md-input-container');
    }

    this.parentContainer.hasFile = true;
  },
  beforeDestroy: function beforeDestroy() {
    this.parentContainer.hasFile = false;
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-file",
    on: {
      "click": _vm.openPicker
    }
  }, [_c('md-input', {
    ref: "textInput",
    attrs: {
      "readonly": "",
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "disabled": _vm.disabled
    },
    model: {
      value: (_vm.filename),
      callback: function($$v) {
        _vm.filename = $$v
      },
      expression: "filename"
    }
  }), _vm._v(" "), _c('md-icon', [_vm._v("attach_file")]), _vm._v(" "), _c('input', {
    ref: "fileInput",
    attrs: {
      "type": "file",
      "id": _vm.id,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "multiple": _vm.multiple,
      "accept": _vm.accept
    },
    on: {
      "change": _vm.onFileSelected
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5120f664", module.exports)
  }
}

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdIcon = __webpack_require__(211);

var _mdIcon2 = _interopRequireDefault(_mdIcon);

var _mdIcon3 = __webpack_require__(215);

var _mdIcon4 = _interopRequireDefault(_mdIcon3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-icon', _mdIcon2.default);

  Vue.material.styles.push(_mdIcon4.default);
}
module.exports = exports['default'];

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(212)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(213),
  /* template */
  __webpack_require__(214),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdIcon/mdIcon.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdIcon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2423dfc4", Component.options)
  } else {
    hotAPI.reload("data-v-2423dfc4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 212 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registeredIcons = {}; //
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-icon',
  props: {
    mdSrc: String,
    mdIconset: {
      type: String,
      default: 'material-icons'
    }
  },
  data: function data() {
    return {
      svgContent: null,
      imageSrc: null
    };
  },
  mixins: [_mixin2.default],
  watch: {
    mdSrc: function mdSrc() {
      this.svgContent = null;
      this.imageSrc = null;
      this.checkSrc();
    }
  },
  methods: {
    isImage: function isImage(mimetype) {
      return mimetype.indexOf('image') >= 0;
    },
    isSVG: function isSVG(mimetype) {
      return mimetype.indexOf('svg') >= 0;
    },
    setSVGContent: function setSVGContent(value) {
      var _this = this;

      this.svgContent = value;

      this.$nextTick((function () {
        _this.$el.children[0].removeAttribute('fill');
      }));
    },
    loadSVG: function loadSVG() {
      if (!registeredIcons[this.mdSrc]) {
        var request = new XMLHttpRequest();
        var self = this;

        request.open('GET', this.mdSrc, true);

        request.onload = function () {
          var mimetype = this.getResponseHeader('content-type');

          if (this.status >= 200 && this.status < 400 && self.isImage(mimetype)) {
            if (self.isSVG(mimetype)) {
              registeredIcons[self.mdSrc] = this.response;
              self.setSVGContent(this.response);
            } else {
              self.loadImage();
            }
          } else {
            console.warn('The file ' + self.mdSrc + ' is not a valid image.');
          }
        };

        request.send();
      } else {
        this.setSVGContent(registeredIcons[this.mdSrc]);
      }
    },
    loadImage: function loadImage() {
      this.imageSrc = this.mdSrc;
    },
    checkSrc: function checkSrc() {
      if (this.mdSrc) {
        if (this.mdSrc.indexOf('.svg') >= 0) {
          this.loadSVG();
        } else {
          this.loadImage();
        }
      }
    }
  },
  mounted: function mounted() {
    this.checkSrc();
  }
};
module.exports = exports['default'];

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.svgContent) ? _c('i', {
    staticClass: "md-icon",
    class: [_vm.themeClass],
    domProps: {
      "innerHTML": _vm._s(_vm.svgContent)
    }
  }) : (_vm.imageSrc) ? _c('md-image', {
    staticClass: "md-icon",
    class: [_vm.themeClass],
    attrs: {
      "md-src": _vm.imageSrc
    }
  }) : _c('i', {
    staticClass: "md-icon",
    class: [_vm.themeClass, _vm.mdIconset],
    attrs: {
      "aria-hidden": !!_vm.mdIconset
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2423dfc4", module.exports)
  }
}

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-icon.md-primary {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-icon.md-accent {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-icon.md-warn {\n  color: WARN-COLOR; }\n"

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdImage = __webpack_require__(217);

var _mdImage2 = _interopRequireDefault(_mdImage);

var _mdImage3 = __webpack_require__(221);

var _mdImage4 = _interopRequireDefault(_mdImage3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-image', _mdImage2.default);

  Vue.material.styles.push(_mdImage4.default);
}
module.exports = exports['default'];

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(218)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(219),
  /* template */
  __webpack_require__(220),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdImage/mdImage.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdImage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0fc1ce4", Component.options)
  } else {
    hotAPI.reload("data-v-b0fc1ce4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 218 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getImageLightness = __webpack_require__(65);

var _getImageLightness2 = _interopRequireDefault(_getImageLightness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-image',
  props: {
    mdSrc: String
  },
  data: function data() {
    return {
      loaded: false,
      applyBlack: true,
      imageElement: null
    };
  },
  watch: {
    mdSrc: function mdSrc() {
      this.createImage();
    }
  },
  computed: {
    classes: function classes() {
      return {
        'md-loaded': this.loaded,
        'md-black-output': this.applyBlack
      };
    }
  },
  methods: {
    analyzeLightness: function analyzeLightness(image) {
      var _this = this;

      var applyLoad = function applyLoad() {
        _this.loaded = true;
      };

      (0, _getImageLightness2.default)(image, (function (lightness) {
        var limit = 256;
        var darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100;

        if (darkness >= 0.7) {
          _this.applyBlack = true;
        }

        _this.$nextTick(applyLoad);
      }), applyLoad);
    },
    createImage: function createImage() {
      this.loaded = false;
      this.applyBlack = false;
      this.imageElement = null;

      if (this.mdSrc) {
        this.imageElement = document.createElement('img');
        this.imageElement.crossOrigin = '';
        this.imageElement.src = this.mdSrc;
        this.analyzeLightness(this.imageElement);
      }
    }
  },
  created: function created() {
    this.createImage();
  }
}; //
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('img', {
    staticClass: "md-image",
    class: _vm.classes,
    attrs: {
      "src": _vm.mdSrc
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b0fc1ce4", module.exports)
  }
}

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdInputContainer = __webpack_require__(223);

var _mdInputContainer2 = _interopRequireDefault(_mdInputContainer);

var _mdInput = __webpack_require__(227);

var _mdInput2 = _interopRequireDefault(_mdInput);

var _mdAutocomplete = __webpack_require__(230);

var _mdAutocomplete2 = _interopRequireDefault(_mdAutocomplete);

var _mdTextarea = __webpack_require__(238);

var _mdTextarea2 = _interopRequireDefault(_mdTextarea);

var _mdInputContainer3 = __webpack_require__(242);

var _mdInputContainer4 = _interopRequireDefault(_mdInputContainer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-input-container', _mdInputContainer2.default);
  Vue.component('md-input', _mdInput2.default);
  Vue.component('md-autocomplete', _mdAutocomplete2.default);
  Vue.component('md-textarea', _mdTextarea2.default);

  Vue.material.styles.push(_mdInputContainer4.default);
}
module.exports = exports['default'];

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(224)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(226),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdInputContainer/mdInputContainer.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdInputContainer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-271c2778", Component.options)
  } else {
    hotAPI.reload("data-v-271c2778", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 224 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _isArray = __webpack_require__(67);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-input-container',
  props: {
    mdInline: Boolean,
    mdHasPassword: Boolean,
    mdClearable: Boolean
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      value: '',
      input: false,
      inputInstance: null,
      showPassword: false,
      enableCounter: false,
      hasSelect: false,
      hasPlaceholder: false,
      hasFile: false,
      isDisabled: false,
      isRequired: false,
      isFocused: false,
      counterLength: 0,
      inputLength: 0
    };
  },

  computed: {
    hasValue: function hasValue() {
      if ((0, _isArray2.default)(this.value)) {
        return this.value.length > 0;
      }

      return Boolean(this.value);
    },
    classes: function classes() {
      return {
        'md-input-inline': this.mdInline,
        'md-has-password': this.mdHasPassword,
        'md-clearable': this.mdClearable,
        'md-has-select': this.hasSelect,
        'md-has-file': this.hasFile,
        'md-has-value': this.hasValue,
        'md-input-placeholder': this.hasPlaceholder,
        'md-input-disabled': this.isDisabled,
        'md-input-required': this.isRequired,
        'md-input-focused': this.isFocused
      };
    }
  },
  methods: {
    isInput: function isInput() {
      return this.input && this.input.tagName.toLowerCase() === 'input';
    },
    togglePasswordType: function togglePasswordType() {
      if (this.isInput()) {
        if (this.input.type === 'password') {
          this.input.type = 'text';
          this.showPassword = true;
        } else {
          this.input.type = 'password';
          this.showPassword = false;
        }

        this.input.focus();
      }
    },
    clearInput: function clearInput() {
      this.inputInstance.$el.value = '';
      this.inputInstance.$emit('input', '');
      this.setValue('');
    },
    setValue: function setValue(value) {
      this.value = value;
    }
  },
  mounted: function mounted() {
    this.input = this.$el.querySelectorAll('input, textarea, select, .md-file')[0];

    if (!this.input) {
      this.$destroy();

      throw new Error('Missing input/select/textarea inside md-input-container');
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-input-container",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default"), _vm._v(" "), (_vm.enableCounter) ? _c('span', {
    staticClass: "md-count"
  }, [_vm._v(_vm._s(_vm.inputLength) + " / " + _vm._s(_vm.counterLength))]) : _vm._e(), _vm._v(" "), (_vm.mdHasPassword) ? _c('md-button', {
    staticClass: "md-icon-button md-toggle-password",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.togglePasswordType($event)
      }
    }
  }, [_c('md-icon', [_vm._v(_vm._s(_vm.showPassword ? 'visibility_off' : 'visibility'))])], 1) : _vm._e(), _vm._v(" "), (_vm.mdClearable && _vm.hasValue) ? _c('md-button', {
    staticClass: "md-icon-button md-clear-input",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": _vm.clearInput
    }
  }, [_c('md-icon', [_vm._v("clear")])], 1) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-271c2778", module.exports)
  }
}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(228),
  /* template */
  __webpack_require__(229),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdInputContainer/mdInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22df0c6d", Component.options)
  } else {
    hotAPI.reload("data-v-22df0c6d", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__(62);

var _common2 = _interopRequireDefault(_common);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-input',
  props: {
    type: {
      type: String,
      default: 'text'
    }
  },
  mixins: [_common2.default],
  mounted: function mounted() {
    var _this = this;

    this.$nextTick((function () {
      _this.parentContainer = (0, _getClosestVueParent2.default)(_this.$parent, 'md-input-container');

      if (!_this.parentContainer) {
        _this.$destroy();

        throw new Error('You should wrap the md-input in a md-input-container');
      }

      _this.parentContainer.inputInstance = _this;
      _this.setParentDisabled();
      _this.setParentRequired();
      _this.setParentPlaceholder();
      _this.handleMaxLength();
      _this.updateValues();
    }));
  }
};
module.exports = exports['default'];

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticClass: "md-input",
    attrs: {
      "type": _vm.type,
      "name": _vm.name,
      "disabled": _vm.disabled,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "min": _vm.min,
      "max": _vm.max,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": _vm.onInput,
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        _vm.onInput($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        _vm.onInput($event)
      }]
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22df0c6d", module.exports)
  }
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(231),
  /* template */
  __webpack_require__(237),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdInputContainer/mdAutocomplete.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdAutocomplete.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27018515", Component.options)
  } else {
    hotAPI.reload("data-v-27018515", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(232);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(44);

var _assign2 = _interopRequireDefault(_assign);

var _autocompleteCommon = __webpack_require__(236);

var _autocompleteCommon2 = _interopRequireDefault(_autocompleteCommon);

var _common = __webpack_require__(62);

var _common2 = _interopRequireDefault(_common);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_common2.default, _autocompleteCommon2.default],
  data: function data() {
    return {
      items: [],
      loading: false,
      query: '',
      selected: null,
      isItemSelected: 0,
      timeout: 0,
      parentContainer: null,
      searchButton: null
    };
  },

  computed: {
    listIsEmpty: function listIsEmpty() {
      return this.list.length === 0;
    },
    itemsEmpty: function itemsEmpty() {
      return this.items.length === 0;
    },
    filterItemsByResLength: function filterItemsByResLength() {
      if (this.maxRes === 0) {
        return this.items;
      }
      return this.items.slice(0, this.maxRes);
    }
  },
  watch: {
    list: function list(value) {
      this.items = (0, _assign2.default)([], value);
    },
    query: function query(value) {
      this.$refs.input.value = value;
      this.setParentUpdateValue(value);
    },
    value: function value(_value) {
      this.query = _value;
      this.setParentUpdateValue(_value);
    }
  },
  methods: {
    debounceUpdate: function debounceUpdate() {
      var _this = this;

      this.onInput();

      if (this.timeout) {
        window.clearTimeout(this.timeout);
      }

      this.timeout = window.setTimeout((function () {
        if (!_this.listIsEmpty) {
          _this.renderFilteredList();
          return;
        }
        _this.update();
      }), this.debounce);
    },
    hit: function hit(item) {
      this.query = item[this.printAttribute];
      this.$refs.input.value = item[this.printAttribute];
      this.selected = item;
      this.onInput();
      this.$emit('selected', this.selected, this.$refs.input.value);

      this.closeMenu();
    },
    makeFetchRequest: function makeFetchRequest(queryObject) {
      var _this2 = this;

      return this.fetch(queryObject).then((function (response) {
        var data = response || response.data || response.body;

        data = _this2.prepareResponseData ? _this2.prepareResponseData(data) : data;
        _this2.items = _this2.limit ? data.slice(0, _this2.limit) : data;

        _this2.loading = false;

        if (!_this2.itemsEmpty && !_this2.isItemSelected) {
          _this2.openMenu();
        } else {
          _this2.closeMenu();
        }
      }));
    },
    onFocus: function onFocus(event) {
      this.isItemSelected = 0;

      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }

      this.$refs.input.focus();

      if (this.query && this.query.length >= this.minChars) {
        this.renderFilteredList();
        this.openMenu();
      }

      this.$emit('focus', this.$el.value, event);
    },
    onInput: function onInput() {
      this.updateValues();
      this.$emit('change', this.$refs.input.value);
      this.$emit('input', this.$refs.input.value);
    },
    renderFilteredList: function renderFilteredList() {
      if (this.filterList && this.query.length >= this.minChars) {
        this.items = this.filterList((0, _assign2.default)([], this.list), this.query);
      }

      if (this.query.length < this.minChars || this.itemsEmpty) {
        this.closeMenu();
      }

      if (!this.itemsEmpty && this.isItemSelected === 0) {
        this.openMenu();
      } else if (this.isItemSelected === 1) {
        this.isItemSelected = 0;
      }
    },
    reset: function reset() {
      this.items = [];
      this.query = '';
      this.loading = false;
    },
    setParentValue: function setParentValue(value) {
      // In some cases parentContainer would be null and value would be present
      if (this.parentContainer === null) {
        return;
      }
      this.parentContainer.setValue(value || this.$refs.input.value);
    },
    setParentDisabled: function setParentDisabled() {
      this.parentContainer.isDisabled = this.disabled;
    },
    setParentRequired: function setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },
    setParentPlaceholder: function setParentPlaceholder() {
      this.parentContainer.hasPlaceholder = !!this.placeholder;
    },
    setParentUpdateValue: function setParentUpdateValue(value) {
      this.setParentValue(value);
      this.updateValues(value);
    },
    setSearchButton: function setSearchButton() {
      this.searchButton = this.parentContainer.$el.querySelector('[md-autocomplete-search]');

      if (this.searchButton) {
        this.searchButton.addEventListener('click', this.makeFetchRequest);
      }
    },
    update: function update() {
      if (!this.query && !this.list.length) {
        return this.reset();
      }

      if (this.minChars && this.query.length < this.minChars) {
        return;
      }

      this.loading = true;

      var queryObject = (0, _defineProperty3.default)({}, this.queryParam, this.query);

      return this.makeFetchRequest(queryObject);
    },
    toggleMenu: function toggleMenu() {
      if (this.items.length) {
        this.$refs.menu.toggle();
      }
    },
    openMenu: function openMenu() {
      if (this.items.length && !this.itemsEmpty) {
        this.$refs.menu.open();
        this.$refs.input.focus();
      }
    },
    closeMenu: function closeMenu() {
      this.$refs.menu.close();
    },
    updateValues: function updateValues(value) {
      var newValue = value || this.$refs.input.value || this.value;

      this.setParentValue(newValue);
      // In some cases parentContainer would be null and value would be present
      if (this.parentContainer === null) {
        return;
      }
      this.parentContainer.inputLength = newValue ? newValue.length : 0;
    },
    contentHighlightItem: function contentHighlightItem(direction) {
      this.menuContent = document.body.querySelector('.md-autocomplete-content');

      if (this.menuContent === null) {
        return false;
      }

      this.menuContent.__vue__.highlightItem(direction);

      return true;
    },
    contentFireClick: function contentFireClick() {
      this.menuContent = document.body.querySelector('.md-autocomplete-content');

      if (this.menuContent === null || this.menuContent.__vue__.highlighted === false || this.menuContent.__vue__.highlighted < 1) {

        this.closeMenu();

        return false;
      }

      var index = this.menuContent.__vue__.$children[0].$children[this.menuContent.__vue__.highlighted - 1].index;

      this.isItemSelected = 1;

      this.hit(this.items[index - 1]);
      this.closeMenu();

      return true;
    },
    setItemSelected: function setItemSelected(item) {
      this.isItemSelected = 2;
      this.hit(item);

      this.closeMenu();

      return true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.searchButton) {
      this.searchButton.removeEventListener('click', this.makeFetchRequest);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.query = this.value;
    this.$nextTick((function () {
      _this3.parentContainer = (0, _getClosestVueParent2.default)(_this3.$parent, 'md-input-container');
      _this3.menuContent = document.body.querySelector('.md-autocomplete-content');

      if (!_this3.listIsEmpty) {
        _this3.items = (0, _assign2.default)([], _this3.list);
      }

      _this3.verifyProps();
      _this3.setSearchButton();

      _this3.setParentDisabled();
      _this3.setParentRequired();
      _this3.setParentPlaceholder();
      _this3.handleMaxLength();
      _this3.updateValues();
    }));
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(233);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(234), __esModule: true };

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(235);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(3), 'Object', {defineProperty: __webpack_require__(9).f});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    debounce: {
      type: Number,
      default: 1E3
    },
    disabled: Boolean,
    fetch: {
      type: Function
    },
    filterList: Function,
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    minChars: {
      type: Number,
      default: 1
    },
    name: String,
    prepareResponseData: Function,
    printAttribute: {
      type: String,
      default: 'name'
    },
    queryParam: {
      type: String,
      default: 'q'
    },

    maxHeight: {
      type: Number,
      default: 0
    },

    required: Boolean,

    maxRes: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onFocus: function onFocus() {
      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }
    },
    onBlur: function onBlur() {
      this.parentContainer.isFocused = false;
      this.setParentValue();
    },
    verifyProps: function verifyProps() {
      if (!this.parentContainer) {
        return this.throwErrorDestroy('You should wrap the md-input in a md-input-container');
      } else if (this.listIsEmpty && this.filterList) {
        return this.throwErrorDestroy('You should use a `filterList` function prop with the `list` prop');
      } else if (!this.fetch && this.listIsEmpty) {
        return this.throwErrorDestroy('You should use a `fetch` function prop');
      }
    },
    throwErrorDestroy: function throwErrorDestroy(errorMessage) {
      this.$destroy();
      throw new Error(errorMessage);
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-autocomplete",
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur
    }
  }, [_c('md-menu', {
    ref: "menu",
    staticClass: "md-autocomplete-menu",
    attrs: {
      "md-align-trigger": "",
      "md-auto-width": "",
      "md-fixed": "",
      "md-no-focus": "",
      "md-manual-toggle": "",
      "md-max-height": _vm.maxHeight,
      "md-close-on-select": false,
      "md-align-trigger": ""
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.query),
      expression: "query"
    }],
    ref: "input",
    staticClass: "md-input",
    attrs: {
      "type": "text",
      "disabled": _vm.disabled,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "name": _vm.name,
      "md-menu-trigger": ""
    },
    domProps: {
      "value": (_vm.query)
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.query = $event.target.value
      }, _vm.debounceUpdate],
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.contentHighlightItem('up')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.contentHighlightItem('down')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.contentFireClick()
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) { return null; }
        _vm.closeMenu()
      }]
    }
  }), _vm._v(" "), _c('md-menu-content', {
    staticClass: "md-autocomplete-content"
  }, _vm._l((_vm.filterItemsByResLength), (function(item, index) {
    return (_vm.items.length) ? _c('md-menu-item', {
      key: index,
      attrs: {
        "listIndex": index,
        "manual-highlight": ""
      },
      on: {
        "click": function($event) {
          _vm.setItemSelected(item)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item[_vm.printAttribute]) + "\n      ")]) : _vm._e()
  })))], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27018515", module.exports)
  }
}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(239),
  /* template */
  __webpack_require__(241),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdInputContainer/mdTextarea.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTextarea.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6243e5e7", Component.options)
  } else {
    hotAPI.reload("data-v-6243e5e7", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autosize = __webpack_require__(240);

var _autosize2 = _interopRequireDefault(_autosize);

var _common = __webpack_require__(62);

var _common2 = _interopRequireDefault(_common);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-textarea',
  mixins: [_common2.default],
  watch: {
    value: function value() {
      var _this = this;

      this.$nextTick((function () {
        return _autosize2.default.update(_this.$el);
      }));
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick((function () {
      _this2.parentContainer = (0, _getClosestVueParent2.default)(_this2.$parent, 'md-input-container');

      if (!_this2.parentContainer) {
        _this2.$destroy();

        throw new Error('You should wrap the md-textarea in a md-input-container');
      }

      _this2.parentContainer.inputInstance = _this2;
      _this2.setParentDisabled();
      _this2.setParentRequired();
      _this2.setParentPlaceholder();
      _this2.handleMaxLength();
      _this2.updateValues();

      if (!_this2.$el.getAttribute('rows')) {
        _this2.$el.setAttribute('rows', '1');
      }

      (0, _autosize2.default)(_this2.$el);
      setTimeout((function () {
        return _autosize2.default.update(_this2.$el);
      }), 200);
    }));
  },
  beforeDestroy: function beforeDestroy() {
    _autosize2.default.destroy(this.$el);
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.autosize = mod.exports;
	}
})(this, (function (exports, module) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : (function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			'delete': function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	})();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function (name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = ta.clientWidth;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			var originalHeight = ta.style.height;
			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = 'auto';

			var endHeight = ta.scrollHeight + heightOffset;

			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				ta.style.height = originalHeight;
				return;
			}

			ta.style.height = endHeight + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach((function (el) {
				el.node.scrollTop = el.scrollTop;
			}));

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);
			var actualHeight = Math.round(parseFloat(computed.height));

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be set to visible.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY !== 'visible') {
					changeOverflow('visible');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = (function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach((function (key) {
				ta.style[key] = style[key];
			}));

			map['delete'](ta);
		}).bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function (el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function (el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], (function (x) {
					return assign(x, options);
				}));
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	module.exports = autosize;
}));

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('textarea', {
    staticClass: "md-input",
    attrs: {
      "name": _vm.name,
      "disabled": _vm.disabled,
      "required": _vm.required,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": _vm.onInput
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6243e5e7", module.exports)
  }
}

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-input-container.md-input-invalid:after {\n  background-color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-invalid label,\n.THEME_NAME.md-input-container.md-input-invalid input,\n.THEME_NAME.md-input-container.md-input-invalid textarea,\n.THEME_NAME.md-input-container.md-input-invalid .md-error,\n.THEME_NAME.md-input-container.md-input-invalid .md-count,\n.THEME_NAME.md-input-container.md-input-invalid .md-icon:not(.md-icon-delete) {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused.md-input-inline label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.THEME_NAME.md-input-container.md-input-focused.md-input-required label:after {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused:after {\n  height: 2px;\n  background-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-focused input,\n.THEME_NAME.md-input-container.md-input-focused textarea {\n  color: PRIMARY-COLOR;\n  text-shadow: 0 0 0 BACKGROUND-CONTRAST;\n  -webkit-text-fill-color: transparent; }\n\n.THEME_NAME.md-input-container.md-input-focused label,\n.THEME_NAME.md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-input-container.md-input-disabled label,\n.THEME_NAME.md-input-container.md-input-disabled input,\n.THEME_NAME.md-input-container.md-input-disabled textarea,\n.THEME_NAME.md-input-container.md-input-disabled .md-error,\n.THEME_NAME.md-input-container.md-input-disabled .md-count,\n.THEME_NAME.md-input-container.md-input-disabled .md-icon:not(.md-icon-delete),\n.THEME_NAME.md-input-container.md-input-disabled ::-webkit-input-placeholder {\n  color: BACKGROUND-CONTRAST-0.38; }\n"

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdLayout = __webpack_require__(244);

var _mdLayout2 = _interopRequireDefault(_mdLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-layout', _mdLayout2.default);
}
module.exports = exports['default'];

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(245)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(246),
  /* template */
  null,
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdLayout/mdLayout.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a85016b8", Component.options)
  } else {
    hotAPI.reload("data-v-a85016b8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 245 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//

exports.default = {
  name: 'md-layout',
  props: {
    mdTag: {
      type: String,
      default: 'div'
    },
    mdRow: Boolean,
    mdRowXsmall: Boolean,
    mdRowSmall: Boolean,
    mdRowMedium: Boolean,
    mdRowLarge: Boolean,
    mdRowXlarge: Boolean,
    mdColumn: Boolean,
    mdColumnXsmall: Boolean,
    mdColumnSmall: Boolean,
    mdColumnMedium: Boolean,
    mdColumnLarge: Boolean,
    mdColumnXlarge: Boolean,
    mdHideXsmall: Boolean,
    mdHideSmall: Boolean,
    mdHideMedium: Boolean,
    mdHideLarge: Boolean,
    mdHideXlarge: Boolean,
    mdHideXsmallAndUp: Boolean,
    mdHideSmallAndUp: Boolean,
    mdHideMediumAndUp: Boolean,
    mdHideLargeAndUp: Boolean,
    mdHideXlargeAndUp: Boolean,
    mdGutter: [String, Number, Boolean],
    mdAlign: String,
    mdAlignXsmall: String,
    mdAlignSmall: String,
    mdAlignMedium: String,
    mdAlignLarge: String,
    mdAlignXlarge: String,
    mdVerticalAlign: String,
    mdVerticalAlignXsmall: String,
    mdVerticalAlignSmall: String,
    mdVerticalAlignMedium: String,
    mdVerticalAlignLarge: String,
    mdVerticalAlignXlarge: String,
    mdFlex: [String, Number, Boolean],
    mdFlexXsmall: [String, Number, Boolean],
    mdFlexSmall: [String, Number, Boolean],
    mdFlexMedium: [String, Number, Boolean],
    mdFlexLarge: [String, Number, Boolean],
    mdFlexXlarge: [String, Number, Boolean],
    mdFlexOffset: [String, Number, Boolean],
    mdFlexOffsetXsmall: [String, Number, Boolean],
    mdFlexOffsetSmall: [String, Number, Boolean],
    mdFlexOffsetMedium: [String, Number, Boolean],
    mdFlexOffsetLarge: [String, Number, Boolean],
    mdFlexOffsetXlarge: [String, Number, Boolean]
  },
  computed: {
    classes: function classes() {
      var classes = {
        'md-row': this.mdRow,
        'md-row-xsmall': this.mdRowXsmall,
        'md-row-small': this.mdRowSmall,
        'md-row-medium': this.mdRowMedium,
        'md-row-large': this.mdRowLarge,
        'md-row-xlarge': this.mdRowXlarge,
        'md-column': this.mdColumn,
        'md-column-xsmall': this.mdColumnXsmall,
        'md-column-small': this.mdColumnSmall,
        'md-column-medium': this.mdColumnMedium,
        'md-column-large': this.mdColumnLarge,
        'md-column-xlarge': this.mdColumnXlarge,
        'md-hide-xsmall': this.mdHideXsmall,
        'md-hide-small': this.mdHideSmall,
        'md-hide-medium': this.mdHideMedium,
        'md-hide-large': this.mdHideLarge,
        'md-hide-xlarge': this.mdHideXlarge,
        'md-hide-xsmall-and-up': this.mdHideXsmallAndUp,
        'md-hide-small-and-up': this.mdHideSmallAndUp,
        'md-hide-medium-and-up': this.mdHideMediumAndUp,
        'md-hide-large-and-up': this.mdHideLargeAndUp,
        'md-hide-xlarge-and-up': this.mdHideXlargeAndUp
      };

      if (this.mdGutter) {
        if (typeof this.mdGutter === 'boolean') {
          classes['md-gutter'] = true;
        } else if (this.mdGutter) {
          classes['md-gutter-' + this.mdGutter] = true;
        }
      }

      /* Flex */
      this.generatePropClasses('md-flex', '', 'mdFlex', classes);
      this.generatePropClasses('md-flex', 'xsmall', 'mdFlexXsmall', classes);
      this.generatePropClasses('md-flex', 'small', 'mdFlexSmall', classes);
      this.generatePropClasses('md-flex', 'medium', 'mdFlexMedium', classes);
      this.generatePropClasses('md-flex', 'large', 'mdFlexLarge', classes);
      this.generatePropClasses('md-flex', 'xlarge', 'mdFlexXlarge', classes);

      /* Flex Offset */
      this.generatePropClasses('md-flex-offset', '', 'mdFlexOffset', classes);
      this.generatePropClasses('md-flex-offset', 'xsmall', 'mdFlexOffsetXsmall', classes);
      this.generatePropClasses('md-flex-offset', 'small', 'mdFlexOffsetSmall', classes);
      this.generatePropClasses('md-flex-offset', 'medium', 'mdFlexOffsetMedium', classes);
      this.generatePropClasses('md-flex-offset', 'large', 'mdFlexOffsetLarge', classes);
      this.generatePropClasses('md-flex-offset', 'xlarge', 'mdFlexOffsetXlarge', classes);

      /* Horizontal Alignment */
      this.generatePropClasses('md-align', '', 'mdAlign', classes);
      this.generatePropClasses('md-align', 'xsmall', 'mdAlignXsmall', classes);
      this.generatePropClasses('md-align', 'small', 'mdAlignSmall', classes);
      this.generatePropClasses('md-align', 'medium', 'mdAlignMedium', classes);
      this.generatePropClasses('md-align', 'large', 'mdAlignLarge', classes);
      this.generatePropClasses('md-align', 'xlarge', 'mdAlignXlarge', classes);

      /* Vertical Alignment */
      this.generatePropClasses('md-vertical-align', '', 'mdVerticalAlign', classes);
      this.generatePropClasses('md-vertical-align', 'xsmall', 'mdVerticalAlignXsmall', classes);
      this.generatePropClasses('md-vertical-align', 'small', 'mdVerticalAlignSmall', classes);
      this.generatePropClasses('md-vertical-align', 'medium', 'mdVerticalAlignMedium', classes);
      this.generatePropClasses('md-vertical-align', 'large', 'mdVerticalAlignLarge', classes);
      this.generatePropClasses('md-vertical-align', 'xlarge', 'mdVerticalAlignXlarge', classes);

      return classes;
    }
  },
  methods: {
    generatePropClasses: function generatePropClasses(prop, size, name, object) {
      if (size) {
        size = '-' + size;
      }

      if (this[name]) {
        if (typeof this[name] === 'boolean') {
          if (!this[name]) {
            object[prop + size + '-none'] = true;
          } else {
            object[prop + size] = true;
          }
        } else {
          object[prop + size + '-' + this[name]] = true;
        }
      }
    }
  },
  render: function render(createElement) {
    return createElement(this.mdTag, {
      staticClass: 'md-layout',
      class: this.classes
    }, this.$slots.default);
  }
};
module.exports = exports['default'];

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdList = __webpack_require__(248);

var _mdList2 = _interopRequireDefault(_mdList);

var _mdListItem = __webpack_require__(252);

var _mdListItem2 = _interopRequireDefault(_mdListItem);

var _mdListExpand = __webpack_require__(284);

var _mdListExpand2 = _interopRequireDefault(_mdListExpand);

var _mdList3 = __webpack_require__(287);

var _mdList4 = _interopRequireDefault(_mdList3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-list', _mdList2.default);
  Vue.component('md-list-item', _mdListItem2.default);
  Vue.component('md-list-expand', _mdListExpand2.default);

  Vue.material.styles.push(_mdList4.default);
}
module.exports = exports['default'];

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(249)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(250),
  /* template */
  __webpack_require__(251),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdList/mdList.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d60a7b8", Component.options)
  } else {
    hotAPI.reload("data-v-3d60a7b8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 249 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-list',
  mixins: [_mixin2.default]
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "md-list",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d60a7b8", module.exports)
  }
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(253);

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__(254);

var _typeof3 = _interopRequireDefault(_typeof2);

var _mdListItemButton = __webpack_require__(269);

var _mdListItemButton2 = _interopRequireDefault(_mdListItemButton);

var _mdListItemLink = __webpack_require__(272);

var _mdListItemLink2 = _interopRequireDefault(_mdListItemLink);

var _mdListItemRouter = __webpack_require__(275);

var _mdListItemRouter2 = _interopRequireDefault(_mdListItemRouter);

var _mdListItemExpand = __webpack_require__(278);

var _mdListItemExpand2 = _interopRequireDefault(_mdListItemExpand);

var _mdListItemDefault = __webpack_require__(281);

var _mdListItemDefault2 = _interopRequireDefault(_mdListItemDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  functional: true,
  props: {
    href: String,
    disabled: Boolean
  },
  render: function render(createElement, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;

    var getItemComponent = function getItemComponent() {
      var on = data.on;
      var interactionEvents = ['contextmenu', 'dblclick', 'dragend', 'mousedown', 'touchstart', 'click'];
      var childrenCount = children.length;

      if (props.href) {
        return _mdListItemLink2.default;
      }

      while (childrenCount--) {
        var options = children[childrenCount].componentOptions;

        if (options) {
          if (options.tag === 'md-list-expand') {
            var _ret = (function () {
              var expandComponent = children[childrenCount];

              data.scopedSlots = {
                expand: function expand() {
                  return expandComponent;
                }
              };

              children.splice(childrenCount, 1);

              return {
                v: _mdListItemExpand2.default
              };
            })();

            if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
          } else if (options.tag === 'router-link') {
            children[childrenCount].data.staticClass = 'md-list-item-container md-button';

            return _mdListItemRouter2.default;
          }
        }
      }

      if (on) {
        var counter = interactionEvents.length;

        while (counter--) {
          if (on[interactionEvents[counter]]) {
            return _mdListItemButton2.default;
          }
        }
      }

      return _mdListItemDefault2.default;
    };

    return createElement(getItemComponent(), (0, _extends3.default)({ props: props }, data), children);
  }
};
module.exports = exports['default'];

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(44);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(255);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(257);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(68);
module.exports = __webpack_require__(63).f('iterator');

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(258), __esModule: true };

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(259);
__webpack_require__(266);
__webpack_require__(267);
__webpack_require__(268);
module.exports = __webpack_require__(4).Symbol;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(2)
  , has            = __webpack_require__(8)
  , DESCRIPTORS    = __webpack_require__(3)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(49)
  , META           = __webpack_require__(260).KEY
  , $fails         = __webpack_require__(5)
  , shared         = __webpack_require__(22)
  , setToStringTag = __webpack_require__(37)
  , uid            = __webpack_require__(20)
  , wks            = __webpack_require__(12)
  , wksExt         = __webpack_require__(63)
  , wksDefine      = __webpack_require__(64)
  , keyOf          = __webpack_require__(261)
  , enumKeys       = __webpack_require__(262)
  , isArray        = __webpack_require__(263)
  , anObject       = __webpack_require__(13)
  , toIObject      = __webpack_require__(7)
  , toPrimitive    = __webpack_require__(27)
  , createDesc     = __webpack_require__(17)
  , _create        = __webpack_require__(50)
  , gOPNExt        = __webpack_require__(264)
  , $GOPD          = __webpack_require__(265)
  , $DP            = __webpack_require__(9)
  , $keys          = __webpack_require__(18)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails((function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
})) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', (function toString(){
    return this._k;
  }));

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(79).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(39).f  = $propertyIsEnumerable;
  __webpack_require__(41).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(40)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails((function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
}))), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(20)('meta')
  , isObject = __webpack_require__(6)
  , has      = __webpack_require__(8)
  , setDesc  = __webpack_require__(9).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(5)((function(){
  return isExtensible(Object.preventExtensions({}));
}));
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(18)
  , toIObject = __webpack_require__(7);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18)
  , gOPS    = __webpack_require__(41)
  , pIE     = __webpack_require__(39);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7)
  , gOPN      = __webpack_require__(79).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(39)
  , createDesc     = __webpack_require__(17)
  , toIObject      = __webpack_require__(7)
  , toPrimitive    = __webpack_require__(27)
  , has            = __webpack_require__(8)
  , IE8_DOM_DEFINE = __webpack_require__(31)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(3) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 266 */
/***/ (function(module, exports) {



/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64)('asyncIterator');

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64)('observable');

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(270),
  /* template */
  __webpack_require__(271),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdList/mdListItemButton.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdListItemButton.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-105b12e9", Component.options)
  } else {
    hotAPI.reload("data-v-105b12e9", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-list-item',
  props: {
    disabled: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'md-disabled': this.disabled
      };
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "md-list-item-container md-button"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('md-button', {
    staticClass: "md-button-ghost",
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.$emit('click', $event)
      }
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-105b12e9", module.exports)
  }
}

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(273),
  /* template */
  __webpack_require__(274),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdList/mdListItemLink.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdListItemLink.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44f9f371", Component.options)
  } else {
    hotAPI.reload("data-v-44f9f371", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-list-item',
  props: {
    href: String,
    target: String,
    disabled: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'md-disabled': this.disabled
      };
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes
  }, [_c('a', {
    staticClass: "md-list-item-container md-button",
    attrs: {
      "href": _vm.href,
      "target": _vm.target,
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        _vm.$emit('click', $event)
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "disabled": _vm.disabled
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44f9f371", module.exports)
  }
}

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(276),
  /* template */
  __webpack_require__(277),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdList/mdListItemRouter.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdListItemRouter.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32609f80", Component.options)
  } else {
    hotAPI.reload("data-v-32609f80", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//

exports.default = {
  name: 'md-list-item',
  props: {
    disabled: Boolean
  },
  computed: {
    classes: function classes() {
      return {
        'md-disabled': this.disabled
      };
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item",
    class: _vm.classes,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_vm._t("default"), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "disabled": _vm.disabled
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32609f80", module.exports)
  }
}

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(279),
  /* template */
  __webpack_require__(280),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdList/mdListItemExpand.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdListItemExpand.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b27d651", Component.options)
  } else {
    hotAPI.reload("data-v-1b27d651", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-list-item',
  props: {
    disabled: Boolean,
    mdExpandMultiple: Boolean
  },
  data: function data() {
    return {
      parentList: false,
      active: false,
      height: 0,
      contentObserver: null,
      transitionOff: true
    };
  },

  computed: {
    classes: function classes() {
      return {
        'md-disabled': this.disabled,
        'md-active': this.active
      };
    },
    expandClasses: function expandClasses() {
      return {
        'md-transition-off': this.transitionOff
      };
    },
    expandStyles: function expandStyles() {
      return {
        'margin-bottom': this.height
      };
    }
  },
  methods: {
    resetSiblings: function resetSiblings() {
      var _this = this;

      this.parentList.$children.forEach((function (child) {
        if (child.$el !== _this.$el && child.$el.classList.contains('md-list-item-expand')) {
          child.active = false;
        }
      }));
    },
    calculatePadding: function calculatePadding() {
      var _this2 = this;

      window.requestAnimationFrame((function () {
        if (_this2._destroyed) {
          return;
        }

        _this2.height = -_this2.$refs.expand.scrollHeight + 'px';

        window.setTimeout((function () {
          _this2.transitionOff = false;
        }));
      }));
    },
    toggleExpandList: function toggleExpandList($event) {
      if (!this.mdExpandMultiple) {
        this.resetSiblings();
      }

      this.calculatePadding();
      this.active = !this.active;
      this.$emit('click', $event);
    },
    recalculateAfterChange: function recalculateAfterChange() {
      this.transitionOff = true;
      this.calculatePadding();
    },
    observeChildChanges: function observeChildChanges() {
      this.contentObserver = new MutationObserver(this.recalculateAfterChange);
      this.contentObserver.observe(this.$refs.expand, {
        childList: true,
        characterData: true,
        subtree: true
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick((function () {
      _this3.parentList = (0, _getClosestVueParent2.default)(_this3.$parent, 'md-list');
      _this3.calculatePadding();
      _this3.observeChildChanges();
      window.addEventListener('resize', _this3.recalculateAfterChange);
    }));
  },
  beforeDestroy: function beforeDestroy() {
    if (this.contentObserver) {
      this.contentObserver.disconnect();
    }

    window.removeEventListener('resize', this.recalculateAfterChange);

    this._destroyed = true;
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item md-list-item-expand",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "md-list-item-container md-button"
  }, [_vm._t("default"), _vm._v(" "), _c('md-icon', {
    staticClass: "md-list-expand-indicator"
  }, [_vm._v("keyboard_arrow_down")])], 2), _vm._v(" "), _c('md-button', {
    staticClass: "md-button-ghost",
    attrs: {
      "type": "button",
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.toggleExpandList
    }
  }), _vm._v(" "), _c('div', {
    ref: "expand",
    staticClass: "md-list-expand",
    class: _vm.expandClasses,
    style: (_vm.expandStyles)
  }, [_vm._t("expand")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b27d651", module.exports)
  }
}

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(283),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdList/mdListItemDefault.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdListItemDefault.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c7aa21a", Component.options)
  } else {
    hotAPI.reload("data-v-4c7aa21a", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-list-item'
};
module.exports = exports['default'];

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "md-list-item"
  }, [_c('div', {
    staticClass: "md-list-item-container"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c7aa21a", module.exports)
  }
}

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(285),
  /* template */
  __webpack_require__(286),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdList/mdListExpand.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdListExpand.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e8a19e44", Component.options)
  } else {
    hotAPI.reload("data-v-e8a19e44", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'md-list-expand'
};
module.exports = exports['default'];

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-list-expand-container"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e8a19e44", module.exports)
  }
}

/***/ }),
/* 287 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-list {\n  background-color: BACKGROUND-COLOR;\n  color: BACKGROUND-CONTRAST; }\n  .THEME_NAME.md-list.md-transparent {\n    background-color: transparent;\n    color: inherit; }\n  .THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container {\n    color: PRIMARY-COLOR; }\n    .THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container > .md-icon {\n      color: PRIMARY-COLOR; }\n  .THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container {\n    color: PRIMARY-COLOR; }\n    .THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container > .md-icon {\n      color: PRIMARY-COLOR; }\n  .THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container {\n    color: ACCENT-COLOR; }\n    .THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container > .md-icon {\n      color: ACCENT-COLOR; }\n  .THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container {\n    color: WARN-COLOR; }\n    .THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container > .md-icon {\n      color: WARN-COLOR; }\n  .THEME_NAME.md-list .md-list-item-expand .md-list-item-container {\n    background-color: BACKGROUND-COLOR; }\n    .THEME_NAME.md-list .md-list-item-expand .md-list-item-container:hover, .THEME_NAME.md-list .md-list-item-expand .md-list-item-container:focus {\n      background-color: rgba(153, 153, 153, 0.2); }\n"

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdMenu = __webpack_require__(289);

var _mdMenu2 = _interopRequireDefault(_mdMenu);

var _mdMenuItem = __webpack_require__(294);

var _mdMenuItem2 = _interopRequireDefault(_mdMenuItem);

var _mdMenuContent = __webpack_require__(298);

var _mdMenuContent2 = _interopRequireDefault(_mdMenuContent);

var _mdMenu3 = __webpack_require__(301);

var _mdMenu4 = _interopRequireDefault(_mdMenu3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-menu', _mdMenu2.default);
  Vue.component('md-menu-item', _mdMenuItem2.default);
  Vue.component('md-menu-content', _mdMenuContent2.default);

  Vue.material.styles.push(_mdMenu4.default);
}
module.exports = exports['default'];

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(291),
  /* template */
  __webpack_require__(293),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdMenu/mdMenu.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdMenu.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c2b6ddf8", Component.options)
  } else {
    hotAPI.reload("data-v-c2b6ddf8", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 290 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transitionEndEventName = __webpack_require__(42);

var _transitionEndEventName2 = _interopRequireDefault(_transitionEndEventName);

var _getInViewPosition = __webpack_require__(292);

var _getInViewPosition2 = _interopRequireDefault(_getInViewPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-menu',
  props: {
    mdSize: {
      type: [Number, String],
      default: 0
    },
    mdDirection: {
      type: String,
      default: 'bottom right'
    },
    mdAlignTrigger: {
      type: Boolean,
      default: false
    },
    mdOffsetX: {
      type: [Number, String],
      default: 0
    },
    mdOffsetY: {
      type: [Number, String],
      default: 0
    },
    mdCloseOnSelect: {
      type: Boolean,
      default: true
    },
    mdAutoWidth: {
      type: Boolean,
      default: false
    },
    mdFixed: {
      type: Boolean,
      default: false
    },
    mdNoFocus: {
      type: Boolean,
      default: false
    },
    mdManualToggle: {
      type: Boolean,
      default: false
    },
    mdMaxHeight: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  watch: {
    mdSize: function mdSize(current, previous) {
      if (current >= 1 && current <= 7) {
        this.removeLastSizeMenuContentClass(previous);
        this.addNewSizeMenuContentClass(current);
      }
    },
    mdDirection: function mdDirection(current, previous) {
      this.removeLastDirectionMenuContentClass(previous);
      this.addNewDirectionMenuContentClass(current);
    },
    mdAlignTrigger: function mdAlignTrigger(trigger) {
      this.handleAlignTriggerClass(trigger);
    }
  },
  methods: {
    validateMenu: function validateMenu() {
      if (!this.menuContent) {
        this.$destroy();

        throw new Error('You must have a md-menu-content inside your menu.');
      }

      if (!this.menuTrigger) {
        this.$destroy();

        throw new Error('You must have an element with a md-menu-trigger attribute inside your menu.');
      }
    },
    removeLastSizeMenuContentClass: function removeLastSizeMenuContentClass(size) {
      this.menuContent.classList.remove('md-size-' + size);
    },
    removeLastDirectionMenuContentClass: function removeLastDirectionMenuContentClass(direction) {
      this.menuContent.classList.remove('md-direction-' + direction.replace(/ /g, '-'));
    },
    addNewSizeMenuContentClass: function addNewSizeMenuContentClass(size) {
      this.menuContent.classList.add('md-size-' + size);
    },
    addNewDirectionMenuContentClass: function addNewDirectionMenuContentClass(direction) {
      this.menuContent.classList.add('md-direction-' + direction.replace(/ /g, '-'));
    },
    handleAlignTriggerClass: function handleAlignTriggerClass(trigger) {
      if (trigger) {
        this.menuContent.classList.add('md-align-trigger');
      }
    },
    getPosition: function getPosition(vertical, horizontal) {
      var menuTriggerRect = this.menuTrigger.getBoundingClientRect();

      var top = vertical === 'top' ? menuTriggerRect.top + menuTriggerRect.height - this.menuContent.offsetHeight : menuTriggerRect.top;

      var left = horizontal === 'left' ? menuTriggerRect.left - this.menuContent.offsetWidth + menuTriggerRect.width : menuTriggerRect.left;

      top += parseInt(this.mdOffsetY, 10);
      left += parseInt(this.mdOffsetX, 10);

      if (this.mdAlignTrigger) {
        if (vertical === 'top') {
          top -= menuTriggerRect.height + 11;
        } else {
          top += menuTriggerRect.height + 11;
        }
      }

      return { top: top, left: left };
    },
    calculateMenuContentPos: function calculateMenuContentPos() {
      var position = void 0;
      var width = void 0;

      var margin = 8;

      if (this._destroyed) {
        return;
      }

      if (!this.mdDirection) {
        position = this.getPosition('bottom', 'right');
      } else {
        position = this.getPosition.apply(this, this.mdDirection.trim().split(' '));
      }

      if (this.mdAutoWidth) {
        width = this.menuTrigger.getBoundingClientRect().width;
        this.menuContent.style.width = parseInt(width, 10) + 'px';
      }

      if (!this.mdFixed) {
        position = (0, _getInViewPosition2.default)(this.menuContent, position);
      } else if (this.mdMaxHeight === 0) {
        this.menuContent.style.maxHeight = window.innerHeight - this.menuTrigger.getBoundingClientRect().bottom - margin + 'px';
      } else if (this.menuContent.children[0].children.length > 0) {
        var listElemHeight = this.menuContent.children[0].children[0].clientHeight;

        this.menuContent.style.maxHeight = margin * 2 + listElemHeight * this.mdMaxHeight + 'px';
      }

      this.menuContent.style.top = position.top + window.pageYOffset + 'px';
      this.menuContent.style.left = position.left + window.pageXOffset + 'px';
    },
    recalculateOnResize: function recalculateOnResize() {
      window.requestAnimationFrame(this.calculateMenuContentPos);
    },
    open: function open() {
      if (document.body.contains(this.menuContent)) {
        document.body.removeChild(this.menuContent);
      }

      document.body.appendChild(this.menuContent);
      document.body.appendChild(this.backdropElement);
      window.addEventListener('resize', this.recalculateOnResize);

      this.calculateMenuContentPos();

      getComputedStyle(this.menuContent).top;
      this.menuContent.classList.add('md-active');

      if (!this.mdNoFocus) {
        this.menuContent.focus();
      }

      this.active = true;
      this.$emit('open');
    },
    close: function close() {
      var _this = this;

      var close = function close(event) {
        if (_this.menuContent && event.target === _this.menuContent) {
          var activeRipple = _this.menuContent.querySelector('.md-ripple.md-active');

          _this.menuContent.removeEventListener(_transitionEndEventName2.default, close);

          if (!_this.mdNoFocus) {
            _this.menuTrigger.focus();
          }

          _this.active = false;

          if (activeRipple) {
            activeRipple.classList.remove('md-active');
          }

          if (document.body.contains(_this.menuContent)) {
            document.body.removeChild(_this.menuContent);
          }

          if (document.body.contains(_this.backdropElement)) {
            document.body.removeChild(_this.backdropElement);
          }

          window.removeEventListener('resize', _this.recalculateOnResize);
        }
      };

      this.menuContent.addEventListener(_transitionEndEventName2.default, close);
      this.menuContent.classList.remove('md-active');
      this.$emit('close');
    },
    toggle: function toggle() {
      if (this.active) {
        this.close();
      } else {
        this.open();
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick((function () {
      _this2.menuTrigger = _this2.$el.querySelector('[md-menu-trigger]');
      _this2.menuContent = _this2.$el.querySelector('.md-menu-content');
      _this2.backdropElement = _this2.$refs.backdrop.$el;
      _this2.validateMenu();
      _this2.handleAlignTriggerClass(_this2.mdAlignTrigger);
      _this2.addNewSizeMenuContentClass(_this2.mdSize);
      _this2.addNewDirectionMenuContentClass(_this2.mdDirection);
      _this2.$el.removeChild(_this2.$refs.backdrop.$el);
      _this2.menuContent.parentNode.removeChild(_this2.menuContent);

      if (!_this2.mdManualToggle) {
        _this2.menuTrigger.addEventListener('click', _this2.toggle);
      }
    }));
  },
  beforeDestroy: function beforeDestroy() {
    if (document.body.contains(this.menuContent)) {
      document.body.removeChild(this.menuContent);
      document.body.removeChild(this.backdropElement);
    }

    if (!this.mdManualToggle) {
      this.menuTrigger.removeEventListener('click', this.toggle);
    }

    window.removeEventListener('resize', this.recalculateOnResize);

    this._destroyed = true;
  }
};
module.exports = exports['default'];

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var margin = 0;

var isAboveOfViewport = function isAboveOfViewport(element, position) {
  return position.top <= margin - parseInt(getComputedStyle(element).marginTop, 10);
};

var isBelowOfViewport = function isBelowOfViewport(element, position) {
  return position.top + element.offsetHeight + margin >= window.innerHeight - parseInt(getComputedStyle(element).marginTop, 10);
};

var isOnTheLeftOfViewport = function isOnTheLeftOfViewport(element, position) {
  return position.left <= margin - parseInt(getComputedStyle(element).marginLeft, 10);
};

var isOnTheRightOfViewport = function isOnTheRightOfViewport(element, position) {
  return position.left + element.offsetWidth + margin >= window.innerWidth - parseInt(getComputedStyle(element).marginLeft, 10);
};

var getInViewPosition = function getInViewPosition(element, position) {
  var computedStyle = getComputedStyle(element);

  if (isAboveOfViewport(element, position)) {
    position.top = margin - parseInt(computedStyle.marginTop, 10);
  }

  if (isOnTheLeftOfViewport(element, position)) {
    position.left = margin - parseInt(computedStyle.marginLeft, 10);
  }

  if (isOnTheRightOfViewport(element, position)) {
    position.left = window.innerWidth - margin - element.offsetWidth - parseInt(computedStyle.marginLeft, 10);
  }

  if (isBelowOfViewport(element, position)) {
    position.top = window.innerHeight - margin - element.offsetHeight - parseInt(computedStyle.marginTop, 10);
  }

  return position;
};

exports.default = getInViewPosition;
module.exports = exports["default"];

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-menu"
  }, [_vm._t("default"), _vm._v(" "), _c('md-backdrop', {
    ref: "backdrop",
    staticClass: "md-menu-backdrop md-transparent md-active",
    on: {
      "close": _vm.close
    }
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c2b6ddf8", module.exports)
  }
}

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(295),
  /* template */
  __webpack_require__(297),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdMenu/mdMenuItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdMenuItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-185998b7", Component.options)
  } else {
    hotAPI.reload("data-v-185998b7", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

__webpack_require__(296);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-menu-item',
  props: {
    href: String,
    target: String,
    disabled: Boolean,
    listIndex: {
      type: Number,
      default: -1
    },
    manualHighlight: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      parentContent: {},
      index: 0,
      highlighted: false
    };
  },
  computed: {
    classes: function classes() {
      return {
        'md-highlighted': this.highlighted
      };
    },
    getHighlight: function getHighlight() {
      if (!this.manualHighlight) {
        if (this.index === this.parentContent.highlighted) {
          if (this.disabled) {
            if (this.parentContent.oldHighlight > this.parentContent.highlighted) {
              this.parentContent.highlighted--;
            } else {
              this.parentContent.highlighted++;
            }
          }

          if (this.index === 1) {
            this.parentContent.$el.scrollTop = 0;
          } else if (this.index === this.parentContent.itemsAmount) {
            this.parentContent.$el.scrollTop = this.parentContent.$el.scrollHeight;
          } else {
            this.$el.scrollIntoViewIfNeeded(false);
          }

          this.highlighted = true;
          return true;
        }

        this.highlighted = false;
        return false;
      }
    }
  },
  methods: {
    close: function close($event) {
      if (!this.parentMenu.mdManualToggle) {
        if (!this.disabled) {
          if (this.parentMenu.mdCloseOnSelect) {
            this.parentContent.close();
          }

          this.$emit('click', $event);
          this.$emit('selected', $event);
        }
      } else if (!this.disabled) {
        this.$emit('click', $event);
        this.$emit('selected', $event);
      }
    }
  },
  mounted: function mounted() {
    this.parentContent = (0, _getClosestVueParent2.default)(this.$parent, 'md-menu-content');
    this.parentMenu = (0, _getClosestVueParent2.default)(this.$parent, 'md-menu');

    if (!this.parentContent) {
      this.$destroy();

      throw new Error('You must wrap the md-menu-item in a md-menu-content');
    }

    if (this.listIndex === -1) {
      this.parentContent.itemListCount++;
      this.index = this.parentContent.itemListCount;
    } else {
      this.index = this.listIndex + 1;
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 296 */
/***/ (function(module, exports) {

if (!Element.prototype.scrollIntoViewIfNeeded) {
  Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
    centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;

    var parent = this.parentNode,
        parentComputedStyle = window.getComputedStyle(parent, null),
        parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width')),
        parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width')),
        overTop = this.offsetTop - parent.offsetTop < parent.scrollTop,
        overBottom = (this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth) > (parent.scrollTop + parent.clientHeight),
        overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft,
        overRight = (this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth) > (parent.scrollLeft + parent.clientWidth),
        alignWithTop = overTop && !overBottom;

    if ((overTop || overBottom) && centerIfNeeded) {
      parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + this.clientHeight / 2;
    }

    if ((overLeft || overRight) && centerIfNeeded) {
      parent.scrollLeft = this.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + this.clientWidth / 2;
    }

    if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
      this.scrollIntoView(alignWithTop);
    }
  };
}

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-list-item', {
    staticClass: "md-menu-item",
    class: _vm.classes,
    attrs: {
      "href": _vm.href,
      "target": _vm.target,
      "disabled": _vm.disabled
    },
    on: {
      "click": _vm.close
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-185998b7", module.exports)
  }
}

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(299),
  /* template */
  __webpack_require__(300),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdMenu/mdMenuContent.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdMenuContent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-863c0af6", Component.options)
  } else {
    hotAPI.reload("data-v-863c0af6", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-menu-content',
  data: function data() {
    return {
      oldHighlight: false,
      highlighted: false,
      itemsAmount: 0,
      itemListCount: 0
    };
  },

  methods: {
    close: function close() {
      this.highlighted = false;
      this.$parent.close();
    },
    highlightItem: function highlightItem(direction) {
      this.itemsAmount = this.$children[0].$children.length;

      if (this.itemsAmount < this.highlighted - 1) {
        this.highlighted = 1;
      }

      this.oldHighlight = this.highlighted;

      if (direction === 'up') {
        if (this.highlighted === 1) {
          this.highlighted = this.itemsAmount;
        } else {
          this.highlighted--;
        }
      }

      if (direction === 'down') {
        if (this.highlighted === this.itemsAmount) {
          this.highlighted = 1;
        } else {
          this.highlighted++;
        }
      }

      this.$children[0].$children[this.highlighted - 1].$el.scrollIntoView({
        block: 'end', behavior: 'smooth'
      });

      for (var i = 0; i < this.itemsAmount; i++) {
        this.$children[0].$children[i].highlighted = false;
      }

      this.$children[0].$children[this.highlighted - 1].highlighted = true;
    },
    fireClick: function fireClick() {
      if (this.highlighted > 0) {
        this.getOptions()[this.highlighted - 1].$el.click();
      }
    },
    getOptions: function getOptions() {
      return this.$children[0].$children.filter((function (child) {
        return child.$el.classList.contains('md-option');
      }));
    }
  },
  mounted: function mounted() {
    if (!this.$parent.$el.classList.contains('md-menu')) {
      this.$destroy();

      throw new Error('You must wrap the md-menu-content in a md-menu');
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-menu-content",
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        $event.preventDefault();
        _vm.close($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "tab", 9)) { return null; }
        $event.preventDefault();
        _vm.close($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.highlightItem('up')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.highlightItem('down')
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.fireClick($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) { return null; }
        _vm.fireClick($event)
      }]
    }
  }, [_c('md-list', [_vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-863c0af6", module.exports)
  }
}

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = ".md-menu-content .THEME_NAME.md-list {\n  background-color: BACKGROUND-COLOR;\n  color: BACKGROUND-CONTRAST; }\n  .md-menu-content .THEME_NAME.md-list .md-menu-item:hover .md-button:not([disabled]), .md-menu-content .THEME_NAME.md-list .md-menu-item:focus .md-button:not([disabled]), .md-menu-content .THEME_NAME.md-list .md-menu-item.md-highlighted .md-button:not([disabled]) {\n    background-color: BACKGROUND-CONTRAST-0.12; }\n  .md-menu-content .THEME_NAME.md-list .md-menu-item[disabled] {\n    color: BACKGROUND-CONTRAST-0.38; }\n"

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdBoards = __webpack_require__(303);

var _mdBoards2 = _interopRequireDefault(_mdBoards);

var _mdBoard = __webpack_require__(307);

var _mdBoard2 = _interopRequireDefault(_mdBoard);

var _mdBoards3 = __webpack_require__(310);

var _mdBoards4 = _interopRequireDefault(_mdBoards3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-boards', _mdBoards2.default);
  Vue.component('md-board', _mdBoard2.default);

  Vue.material.styles.push(_mdBoards4.default);
}
module.exports = exports['default'];

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(304)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(305),
  /* template */
  __webpack_require__(306),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdOnboarding/mdBoards.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdBoards.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-999a2014", Component.options)
  } else {
    hotAPI.reload("data-v-999a2014", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 304 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(38);

var _keys2 = _interopRequireDefault(_keys);

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _throttle = __webpack_require__(59);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    mdFixed: Boolean,
    mdCentered: Boolean,
    mdRight: Boolean,
    mdDynamicHeight: {
      type: Boolean,
      default: true
    },
    mdElevation: {
      type: [String, Number],
      default: 0
    },
    mdAuto: {
      type: Boolean,
      default: false
    },
    mdDuration: {
      type: Number,
      default: 5000
    },
    mdControls: {
      type: Boolean,
      default: false
    },
    mdInfinite: {
      type: Boolean,
      default: false
    },
    mdSwipeable: Boolean,
    mdSwipeDistance: {
      type: Number,
      default: 100
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      boardList: {},
      activeBoard: null,
      activeBoardNumber: 0,
      hasIcons: false,
      hasLabel: false,
      transitionControl: null,
      transitionOff: false,
      contentHeight: '0px',
      contentWidth: '0px',
      autoTransition: null
    };
  },
  computed: {
    boardClasses: function boardClasses() {
      return {
        'md-dynamic-height': this.mdDynamicHeight,
        'md-transition-off': this.transitionOff
      };
    },
    navigationClasses: function navigationClasses() {
      return {
        'md-has-icon': this.hasIcons,
        'md-has-label': this.hasLabel,
        'md-fixed': this.mdFixed,
        'md-right': !this.mdCentered && this.mdRight,
        'md-centered': this.mdCentered || this.mdFixed
      };
    },
    indicatorClasses: function indicatorClasses() {
      var toLeft = this.lastIndicatorNumber > this.activeBoardNumber;

      this.lastIndicatorNumber = this.activeBoardNumber;

      return {
        'md-transition-off': this.transitionOff,
        'md-to-right': !toLeft,
        'md-to-left': toLeft
      };
    }
  },
  methods: {
    getHeaderClass: function getHeaderClass(header) {
      return {
        'md-active': this.activeBoard === header.id,
        'md-disabled': header.disabled
      };
    },
    registerBoard: function registerBoard(boardData) {
      this.boardList[boardData.id] = boardData;
    },
    unregisterBoard: function unregisterBoard(boardData) {
      delete this.boardList[boardData.id];
    },
    updateBoard: function updateBoard(boardData) {
      this.registerBoard(boardData);

      if (boardData.active) {
        if (!boardData.disabled) {
          this.setActiveBoard(boardData);
        } else if ((0, _keys2.default)(this.boardList).length) {
          var boardsIds = (0, _keys2.default)(this.boardList);
          var targetIndex = boardsIds.indexOf(boardData.id) + 1;
          var target = boardsIds[targetIndex];

          if (target) {
            this.setActiveBoard(this.boardList[target]);
          } else {
            this.setActiveBoard(this.boardList[0]);
          }
        }
      }
    },
    observeElementChanges: function observeElementChanges() {
      this.parentObserver = new MutationObserver((0, _throttle2.default)(this.calculateOnWatch, 50));
      this.parentObserver.observe(this.$refs.boardsContent, {
        childList: true,
        attributes: true,
        subtree: true
      });
    },
    getBoardIndex: function getBoardIndex(id) {
      var idList = (0, _keys2.default)(this.boardList);

      return idList.indexOf(id);
    },
    calculateIndicatorPos: function calculateIndicatorPos() {
      if (this.$refs.boardHeader && this.$refs.boardHeader[this.activeBoardNumber]) {
        var boardsWidth = this.$el.offsetWidth;
        var activeBoard = this.$refs.boardHeader[this.activeBoardNumber];
        var left = activeBoard.offsetLeft;
        var right = boardsWidth - left - activeBoard.offsetWidth;

        this.$refs.indicator.style.left = left + 'px';
        this.$refs.indicator.style.right = right + 'px';
      }
    },
    calculateBoardsWidthAndPosition: function calculateBoardsWidthAndPosition() {
      var width = this.$el.offsetWidth;
      var index = 0;

      this.contentWidth = width * this.activeBoardNumber + 'px';

      for (var boardId in this.boardList) {
        var board = this.boardList[boardId];

        board.ref.width = width + 'px';
        board.ref.left = width * index + 'px';
        index++;
      }
    },
    calculateContentHeight: function calculateContentHeight() {
      var _this = this;

      this.$nextTick((function () {
        if ((0, _keys2.default)(_this.boardList).length) {
          var height = _this.boardList[_this.activeBoard].ref.$el.offsetHeight;

          _this.contentHeight = height + 'px';
        }
      }));
    },
    calculatePosition: function calculatePosition() {
      var _this2 = this;

      window.requestAnimationFrame((function () {
        if (_this2._destroyed) {
          return;
        }

        _this2.calculateIndicatorPos();
        _this2.calculateBoardsWidthAndPosition();
        _this2.calculateContentHeight();
      }));
    },
    debounceTransition: function debounceTransition() {
      var _this3 = this;

      window.clearTimeout(this.transitionControl);
      this.transitionControl = window.setTimeout((function () {
        _this3.calculatePosition();
        _this3.transitionOff = false;
      }), 200);
    },
    calculateOnWatch: function calculateOnWatch() {
      this.calculatePosition();
      this.debounceTransition();
    },
    calculateOnResize: function calculateOnResize() {
      this.transitionOff = true;
      this.calculateOnWatch();
    },
    start: function start() {
      var _this4 = this;

      if (this.autoTransition) {
        window.clearInterval(this.autoTransition);
      }
      this.autoTransition = window.setInterval((function () {
        _this4.moveNextBoard();
      }), this.mdDuration);
    },
    setActiveBoard: function setActiveBoard(boardData, reset) {
      if (this.mdAuto && reset) {
        this.start();
      }
      this.hasIcons = !!boardData.icon;
      this.hasLabel = !!boardData.label;
      this.activeBoard = boardData.id;
      this.activeBoardNumber = this.getBoardIndex(this.activeBoard);
      this.calculatePosition();
      this.$emit('change', this.activeBoardNumber);
    },
    movePrevBoard: function movePrevBoard() {
      var boardsIds = (0, _keys2.default)(this.boardList);
      var targetIndex = boardsIds.indexOf(this.activeBoard) - 1;
      var target = boardsIds[targetIndex];

      if (target) {
        this.setActiveBoard(this.boardList[target], true);
      } else if (this.mdInfinite) {
        var lastBoard = (0, _keys2.default)(this.boardList)[(0, _keys2.default)(this.boardList).length - 1];

        this.setActiveBoard(this.boardList[lastBoard], true);
      }
    },
    moveNextBoard: function moveNextBoard() {
      var boardsIds = (0, _keys2.default)(this.boardList);
      var targetIndex = boardsIds.indexOf(this.activeBoard) + 1;
      var target = boardsIds[targetIndex];

      if (target) {
        this.setActiveBoard(this.boardList[target], true);
      } else if (this.mdInfinite) {
        var firstBoard = (0, _keys2.default)(this.boardList)[0];

        this.setActiveBoard(this.boardList[firstBoard], true);
      }
    },
    isHorizontallyInside: function isHorizontallyInside(positionX) {
      return positionX > this.mountedRect.left && positionX < this.mountedRect.left + this.mountedRect.width;
    },
    isVerticallyInside: function isVerticallyInside(positionY) {
      return positionY > this.mountedRect.top && positionY < this.mountedRect.top + this.mountedRect.height;
    },
    handleTouchStart: function handleTouchStart(event) {
      this.mountedRect = this.$refs.boardsContent.getBoundingClientRect();
      var positionX = event.changedTouches[0].clientX;
      var positionY = event.changedTouches[0].clientY;

      if (this.isHorizontallyInside(positionX) && this.isVerticallyInside(positionY)) {
        this.initialTouchPosition = positionX;
        this.canMove = true;
      }
    },
    handleTouchEnd: function handleTouchEnd(event) {
      if (this.canMove) {
        var positionX = event.changedTouches[0].clientX;

        var difference = this.initialTouchPosition - positionX;

        var action = difference > 0 ? 'moveNextBoard' : 'movePrevBoard';

        if (Math.abs(difference) > this.mdSwipeDistance) {
          this[action]();
        }

        this.canMove = false;
        this.initialTouchPosition = null;
      }
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.$nextTick((function () {
      _this5.observeElementChanges();
      window.addEventListener('resize', _this5.calculateOnResize);

      if ((0, _keys2.default)(_this5.boardList).length && !_this5.activeBoard) {
        var firstBoard = (0, _keys2.default)(_this5.boardList)[0];

        _this5.setActiveBoard(_this5.boardList[firstBoard]);
      }

      if (_this5.mdSwipeable) {
        _this5.mountedRect = _this5.$refs.boardsContent.getBoundingClientRect();
        _this5.initialTouchPosition = null;
        _this5.canMove = false;

        document.addEventListener('touchstart', _this5.handleTouchStart);
        document.addEventListener('touchend', _this5.handleTouchEnd);
      }

      if (_this5.mdAuto) {
        _this5.start();
      }
    }));
  },
  beforeDestroy: function beforeDestroy() {
    if (this.parentObserver) {
      this.parentObserver.disconnect();
    }

    if (this.autoTransition) {
      window.clearTimeout(this.autoTransition);
    }

    window.removeEventListener('resize', this.calculateOnResize);

    if (this.mdSwipeable) {
      document.removeEventListener('touchstart', this.handleTouchStart);
      document.removeEventListener('touchend', this.handleTouchEnd);
    }

    this._destroyed = true;
  }
};
module.exports = exports['default'];

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-boards",
    class: [_vm.themeClass, _vm.boardClasses]
  }, [_c('div', {
    ref: "boardsContent",
    staticClass: "md-boards-content",
    style: ({
      height: _vm.contentHeight
    })
  }, [_c('div', {
    staticClass: "md-boards-wrapper",
    style: ({
      transform: ("translate3D(-" + _vm.contentWidth + ", 0, 0)")
    })
  }, [_vm._t("default")], 2)]), _vm._v(" "), _c('nav', {
    ref: "boardNavigation",
    staticClass: "md-boards-navigation",
    class: _vm.navigationClasses
  }, [(!_vm.mdControls) ? _c('span', {
    staticStyle: {
      "flex": "1"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.mdControls) ? _c('md-button', {
    on: {
      "click": function($event) {
        _vm.movePrevBoard()
      }
    }
  }, [_c('div', {
    staticClass: "md-board-header-container"
  }, [_c('md-icon', {
    staticClass: "md-control"
  }, [_vm._v("chevron_left")])], 1)]) : _vm._e(), _vm._v(" "), _c('span', {
    staticStyle: {
      "flex": "1"
    }
  }), _vm._v(" "), _vm._l((_vm.boardList), (function(header) {
    return _c('button', {
      key: header.id,
      ref: "boardHeader",
      refInFor: true,
      staticClass: "md-board-header",
      class: _vm.getHeaderClass(header),
      attrs: {
        "type": "button",
        "disabled": header.disabled
      },
      on: {
        "click": function($event) {
          _vm.setActiveBoard(header, true)
        }
      }
    }, [_c('div', {
      staticClass: "md-board-header-container"
    }, [_c('md-icon', [_vm._v("fiber_manual_record")])], 1)])
  })), _vm._v(" "), _c('span', {
    staticStyle: {
      "flex": "1"
    }
  }), _vm._v(" "), (_vm.mdControls) ? _c('md-button', {
    on: {
      "click": function($event) {
        _vm.moveNextBoard()
      }
    }
  }, [_c('div', {
    staticClass: "md-board-header-container"
  }, [_c('md-icon', {
    staticClass: "md-control"
  }, [_vm._v("chevron_right")])], 1)]) : _vm._e(), _vm._v(" "), (!_vm.mdControls) ? _c('span', {
    staticStyle: {
      "flex": "1"
    }
  }) : _vm._e(), _vm._v(" "), _c('span', {
    ref: "indicator"
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-999a2014", module.exports)
  }
}

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(308),
  /* template */
  __webpack_require__(309),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdOnboarding/mdBoard.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdBoard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47ba0acd", Component.options)
  } else {
    hotAPI.reload("data-v-47ba0acd", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueId = __webpack_require__(36);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
  props: {
    id: [String, Number],
    mdLabel: [String, Number],
    mdIcon: String,
    mdActive: Boolean,
    mdDisabled: Boolean,
    mdTooltip: String,
    mdTooltipDelay: {
      type: String,
      default: '0'
    },
    mdTooltipDirection: {
      type: String,
      default: 'bottom'
    }
  },
  data: function data() {
    return {
      mounted: false,
      boardId: this.id || 'board-' + (0, _uniqueId2.default)(),
      width: '0px',
      left: '0px'
    };
  },

  watch: {
    mdActive: function mdActive() {
      this.updateBoardData();
    },
    mdDisabled: function mdDisabled() {
      this.updateBoardData();
    },
    mdIcon: function mdIcon() {
      this.updateBoardData();
    },
    mdLabel: function mdLabel() {
      this.updateBoardData();
    },
    mdTooltip: function mdTooltip() {
      this.updateBoardData();
    },
    mdTooltipDelay: function mdTooltipDelay() {
      this.updateBoardData();
    },
    mdTooltipDirection: function mdTooltipDirection() {
      this.updateBoardData();
    }
  },
  computed: {
    styles: function styles() {
      return {
        width: this.width,
        left: this.left
      };
    }
  },
  methods: {
    getBoardData: function getBoardData() {
      return {
        id: this.boardId,
        label: this.mdLabel,
        icon: this.mdIcon,
        active: this.mdActive,
        disabled: this.mdDisabled,
        tooltip: this.mdTooltip,
        tooltipDelay: this.mdTooltipDelay,
        tooltipDirection: this.mdTooltipDirection,
        ref: this
      };
    },
    updateBoardData: function updateBoardData() {
      this.parentBoards.updateBoard(this.getBoardData());
    }
  },
  mounted: function mounted() {
    var boardData = this.getBoardData();

    this.parentBoards = (0, _getClosestVueParent2.default)(this.$parent, 'md-boards');

    if (!this.parentBoards) {
      throw new Error('You must wrap the md-board in a md-boards');
    }

    this.mounted = true;
    this.parentBoards.updateBoard(boardData);

    if (this.mdActive) {
      this.parentBoards.setActiveBoard(boardData);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.parentBoards.unregisterBoard(this.getBoardData());
  }
};
module.exports = exports['default'];

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-board",
    style: (_vm.styles),
    attrs: {
      "id": _vm.boardId
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-47ba0acd", module.exports)
  }
}

/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-boards > .md-boards-navigation {\n  background-color: transparent; }\n  .THEME_NAME.md-boards > .md-boards-navigation .md-board-header {\n    color: BACKGROUND-CONTRAST-0.54; }\n    .THEME_NAME.md-boards > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards > .md-boards-navigation .md-board-header:active {\n      color: PRIMARY-COLOR; }\n    .THEME_NAME.md-boards > .md-boards-navigation .md-board-header.md-disabled {\n      color: BACKGROUND-CONTRAST-0.26; }\n  .THEME_NAME.md-boards > .md-boards-navigation .md-button {\n    color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-boards.md-transparent > .md-boards-navigation {\n  background-color: transparent; }\n  .THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-board-header {\n    color: PRIMARY-CONTRAST-0.54; }\n    .THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-board-header:active {\n      color: PRIMARY-CONTRAST; }\n    .THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-board-header.md-disabled {\n      color: PRIMARY-CONTRAST-0.26; }\n  .THEME_NAME.md-boards.md-transparent > .md-boards-navigation .md-button {\n    color: PRIMARY-CONTRAST-0.54; }\n\n.THEME_NAME.md-boards.md-primary > .md-boards-navigation {\n  background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-board-header {\n    color: PRIMARY-CONTRAST-0.54; }\n    .THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-board-header:active {\n      color: PRIMARY-CONTRAST; }\n    .THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-board-header.md-disabled {\n      color: PRIMARY-CONTRAST-0.26; }\n  .THEME_NAME.md-boards.md-primary > .md-boards-navigation .md-button {\n    color: PRIMARY-CONTRAST-0.54; }\n\n.THEME_NAME.md-boards.md-accent > .md-boards-navigation {\n  background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-board-header {\n    color: ACCENT-CONTRAST-0.54; }\n    .THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-board-header:active {\n      color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-board-header.md-disabled {\n      color: ACCENT-CONTRAST-0.26; }\n  .THEME_NAME.md-boards.md-accent > .md-boards-navigation .md-button {\n    color: ACCENT-CONTRAST-0.54; }\n\n.THEME_NAME.md-boards.md-warn > .md-boards-navigation {\n  background-color: WARN-COLOR; }\n  .THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-board-header {\n    color: WARN-CONTRAST-0.54; }\n    .THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-board-header.md-active, .THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-board-header:active {\n      color: WARN-CONTRAST; }\n    .THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-board-header.md-disabled {\n      color: WARN-CONTRAST-0.26; }\n  .THEME_NAME.md-boards.md-warn > .md-boards-navigation .md-button {\n    color: WARN-CONTRAST-0.54; }\n"

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdProgress = __webpack_require__(312);

var _mdProgress2 = _interopRequireDefault(_mdProgress);

var _mdProgress3 = __webpack_require__(316);

var _mdProgress4 = _interopRequireDefault(_mdProgress3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-progress', _mdProgress2.default);

  Vue.material.styles.push(_mdProgress4.default);
}
module.exports = exports['default'];

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(313)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(314),
  /* template */
  __webpack_require__(315),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdProgress/mdProgress.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdProgress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2816f2c4", Component.options)
  } else {
    hotAPI.reload("data-v-2816f2c4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 313 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-progress',
  props: {
    mdIndeterminate: Boolean,
    mdProgress: {
      type: Number,
      default: 0
    }
  },
  mixins: [_mixin2.default],
  computed: {
    classes: function classes() {
      return {
        'md-indeterminate': this.mdIndeterminate
      };
    },
    styles: function styles() {
      if (!this.mdIndeterminate) {
        return {
          width: this.mdProgress + '%'
        };
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "md-progress",
      "appear": ""
    }
  }, [_c('div', {
    staticClass: "md-progress",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-progress-track",
    style: (_vm.styles)
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2816f2c4", module.exports)
  }
}

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-progress {\n  background-color: PRIMARY-COLOR-0.38; }\n  .THEME_NAME.md-progress:not(.md-indeterminate) .md-progress-track {\n    background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-progress .md-progress-track:after, .THEME_NAME.md-progress .md-progress-track:before {\n    background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-progress.md-accent {\n    background-color: ACCENT-COLOR-0.38; }\n    .THEME_NAME.md-progress.md-accent:not(.md-indeterminate) .md-progress-track {\n      background-color: ACCENT-COLOR; }\n    .THEME_NAME.md-progress.md-accent .md-progress-track:after, .THEME_NAME.md-progress.md-accent .md-progress-track:before {\n      background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-progress.md-warn {\n    background-color: WARN-COLOR-0.38; }\n    .THEME_NAME.md-progress.md-warn:not(.md-indeterminate) .md-progress-track {\n      background-color: WARN-COLOR; }\n    .THEME_NAME.md-progress.md-warn .md-progress-track:after, .THEME_NAME.md-progress.md-warn .md-progress-track:before {\n      background-color: WARN-COLOR; }\n"

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdRadio = __webpack_require__(318);

var _mdRadio2 = _interopRequireDefault(_mdRadio);

var _mdRadio3 = __webpack_require__(322);

var _mdRadio4 = _interopRequireDefault(_mdRadio3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-radio', _mdRadio2.default);

  Vue.material.styles.push(_mdRadio4.default);
}
module.exports = exports['default'];

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(319)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(320),
  /* template */
  __webpack_require__(321),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdRadio/mdRadio.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdRadio.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-079386ce", Component.options)
  } else {
    hotAPI.reload("data-v-079386ce", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 319 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-radio',
  props: {
    name: String,
    id: String,
    value: [String, Boolean, Number],
    mdValue: {
      type: [String, Boolean, Number],
      required: true
    },
    disabled: Boolean
  },
  mixins: [_mixin2.default],
  computed: {
    classes: function classes() {
      return {
        'md-checked': typeof this.value !== 'undefined' && this.value !== null && this.mdValue.toString() === this.value.toString(),
        'md-disabled': this.disabled
      };
    }
  },
  methods: {
    toggleCheck: function toggleCheck($event) {
      if (!this.disabled) {
        this.$emit('change', this.mdValue, $event);
        this.$emit('input', this.mdValue, $event);
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-radio",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-radio-container",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.toggleCheck($event)
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": _vm.name,
      "id": _vm.id,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    }
  }), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 1), _vm._v(" "), (_vm.$slots.default) ? _c('label', {
    staticClass: "md-radio-label",
    attrs: {
      "for": _vm.id || _vm.name
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.toggleCheck($event)
      }
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-079386ce", module.exports)
  }
}

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-radio .md-radio-container:after {\n  background-color: ACCENT-COLOR; }\n\n.THEME_NAME.md-radio.md-checked .md-radio-container {\n  border-color: ACCENT-COLOR; }\n\n.THEME_NAME.md-radio.md-checked .md-ink-ripple {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-radio.md-checked .md-ripple {\n  opacity: .38; }\n\n.THEME_NAME.md-radio.md-primary .md-radio-container:after {\n  background-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-radio.md-primary.md-checked .md-radio-container {\n  border-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-radio.md-primary.md-checked .md-ink-ripple {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-radio.md-warn .md-radio-container:after {\n  background-color: WARN-COLOR; }\n\n.THEME_NAME.md-radio.md-warn.md-checked .md-radio-container {\n  border-color: WARN-COLOR; }\n\n.THEME_NAME.md-radio.md-warn.md-checked .md-ink-ripple {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-radio.md-disabled .md-radio-container {\n  border-color: rgba(0, 0, 0, 0.26); }\n  .THEME_NAME.md-radio.md-disabled .md-radio-container:after {\n    background-color: rgba(0, 0, 0, 0.26); }\n\n.THEME_NAME.md-radio.md-disabled.md-checked .md-radio-container {\n  border-color: rgba(0, 0, 0, 0.26); }\n"

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdRatingBar = __webpack_require__(324);

var _mdRatingBar2 = _interopRequireDefault(_mdRatingBar);

var _mdRatingBar3 = __webpack_require__(328);

var _mdRatingBar4 = _interopRequireDefault(_mdRatingBar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-rating-bar', _mdRatingBar2.default);

  Vue.material.styles.push(_mdRatingBar4.default);
}
module.exports = exports['default'];

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(325)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(326),
  /* template */
  __webpack_require__(327),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdRatingBar/mdRatingBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdRatingBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c037d44", Component.options)
  } else {
    hotAPI.reload("data-v-4c037d44", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 325 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconSize = 24; //size of each icon from rating bar in pixels

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    mdMaxRating: {
      type: Number,
      default: 5
    },
    disabled: Boolean,
    value: {
      type: Number,
      default: 0
    },
    mdIconSize: {
      type: Number,
      default: 1
    },
    mdFullIconset: String,
    mdEmptyIconset: String,
    mdFullIcon: {
      type: String,
      default: 'star'
    },
    mdEmptyIcon: {
      type: String,
      default: 'star'
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      srcFullIcon: null,
      srcEmptyIcon: null,
      rating: this.value
    };
  },

  mounted: function mounted() {
    this.srcFullIcon = this.checkSrc(this.mdFullIcon);
    this.srcEmptyIcon = this.checkSrc(this.mdEmptyIcon);
  },
  computed: {
    emptyIcon: function emptyIcon() {
      if (this.mdEmptyIconset) {
        return '';
      }

      return this.mdEmptyIcon;
    },
    fullIcon: function fullIcon() {
      if (this.mdFullIconset) {
        return '';
      }

      return this.mdFullIcon;
    },
    iconClasses: function iconClasses() {
      var classes = {};

      if (this.mdIconSize) {
        classes['md-size-' + this.mdIconSize + 'x'] = true;
      }

      return classes;
    },
    fullIconStyle: function fullIconStyle() {
      return {
        width: 100 / this.mdMaxRating * this.rating + '%',
        'margin-left': -iconSize * this.mdIconSize * this.mdMaxRating + 'px'
      };
    }
  },
  watch: {
    mdFullIcon: function mdFullIcon() {
      this.srcFullIcon = this.checkSrc(this.mdFullIcon);
    },
    mdEmptyIcon: function mdEmptyIcon() {
      this.srcEmptyIcon = this.checkSrc(this.mdEmptyIcon);
    },
    value: function value() {
      this.rating = this.value;
    }
  },
  methods: {
    hoverStars: function hoverStars(evt) {
      if (!this.disabled) {
        this.rating = this.getIconIndex(evt.currentTarget);
        this.$emit('hover', this.rating);
      }
    },
    clickStars: function clickStars(evt) {
      if (!this.disabled) {
        var selected = this.getIconIndex(evt.currentTarget);

        this.$emit('input', selected);
        this.$emit('change', selected);
      }
    },
    getIconIndex: function getIconIndex(iconSelected) {
      var _this = this;

      //iconSelected is a dom element
      var ratingIcons = this.$el.querySelectorAll('.md-empty-icon > .md-icon, .md-full-icon > .md-icon');
      var selected = -1;

      ratingIcons = Array.prototype.slice.call(ratingIcons);
      //find index from iconSelected
      ratingIcons.some((function (icon, i) {
        if (icon === iconSelected) {
          selected = (i + 1) % _this.mdMaxRating;
          selected = !selected ? _this.mdMaxRating : selected;
          return true;
        }
      }));

      return selected;
    },
    checkSrc: function checkSrc(src) {
      if (src && /.+\.(svg|png)/.test(src)) {
        //check if src is a image source
        return src;
      }

      return null;
    },
    onMouseOut: function onMouseOut() {
      this.rating = this.value;
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-rating-bar",
    class: [_vm.themeClass],
    attrs: {
      "disabled": _vm.disabled
    }
  }, [(_vm.srcEmptyIcon) ? _c('div', {
    staticClass: "md-empty-icon"
  }, _vm._l((_vm.mdMaxRating), (function(i) {
    return (_vm.srcEmptyIcon) ? _c('md-icon', {
      key: i,
      class: [_vm.iconClasses],
      attrs: {
        "md-src": _vm.srcEmptyIcon
      },
      nativeOn: {
        "mouseover": function($event) {
          _vm.hoverStars($event)
        },
        "click": function($event) {
          _vm.clickStars($event)
        },
        "mouseout": function($event) {
          _vm.onMouseOut($event)
        }
      }
    }) : _vm._e()
  }))) : _c('div', {
    staticClass: "md-empty-icon"
  }, _vm._l((_vm.mdMaxRating), (function(i) {
    return _c('md-icon', {
      key: i,
      class: [_vm.iconClasses],
      attrs: {
        "md-iconset": _vm.mdEmptyIconset
      },
      domProps: {
        "innerHTML": _vm._s(_vm.emptyIcon)
      },
      nativeOn: {
        "mouseover": function($event) {
          _vm.hoverStars($event)
        },
        "click": function($event) {
          _vm.clickStars($event)
        },
        "mouseout": function($event) {
          _vm.onMouseOut($event)
        }
      }
    })
  }))), _vm._v(" "), (_vm.srcFullIcon) ? _c('div', {
    staticClass: "md-full-icon",
    style: (_vm.fullIconStyle)
  }, _vm._l((_vm.mdMaxRating), (function(i) {
    return (_vm.srcFullIcon) ? _c('md-icon', {
      key: i,
      class: [_vm.iconClasses],
      attrs: {
        "md-src": _vm.srcFullIcon
      },
      nativeOn: {
        "mouseover": function($event) {
          _vm.hoverStars($event)
        },
        "click": function($event) {
          _vm.clickStars($event)
        },
        "mouseout": function($event) {
          _vm.onMouseOut($event)
        }
      }
    }) : _vm._e()
  }))) : _c('div', {
    staticClass: "md-full-icon",
    style: (_vm.fullIconStyle)
  }, _vm._l((_vm.mdMaxRating), (function(i) {
    return _c('md-icon', {
      key: i,
      class: [_vm.iconClasses],
      attrs: {
        "md-iconset": _vm.mdFullIconset
      },
      domProps: {
        "innerHTML": _vm._s(_vm.fullIcon)
      },
      nativeOn: {
        "mouseover": function($event) {
          _vm.hoverStars($event)
        },
        "click": function($event) {
          _vm.clickStars($event)
        },
        "mouseout": function($event) {
          _vm.onMouseOut($event)
        }
      }
    })
  })))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c037d44", module.exports)
  }
}

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-rating-bar > .md-empty-icon .md-icon {\n  color: BACKGROUND-CONTRAST-0.26; }\n\n.THEME_NAME.md-rating-bar > .md-full-icon .md-icon {\n  color: BACKGROUND-CONTRAST-0.38; }\n\n.THEME_NAME.md-rating-bar.md-primary > .md-full-icon .md-icon {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-rating-bar.md-accent > .md-full-icon .md-icon {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-rating-bar.md-warn > .md-full-icon .md-icon {\n  color: WARN-COLOR; }\n"

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdSelect = __webpack_require__(330);

var _mdSelect2 = _interopRequireDefault(_mdSelect);

var _mdOption = __webpack_require__(334);

var _mdOption2 = _interopRequireDefault(_mdOption);

var _mdSelect3 = __webpack_require__(337);

var _mdSelect4 = _interopRequireDefault(_mdSelect3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-select', _mdSelect2.default);
  Vue.component('md-option', _mdOption2.default);

  Vue.material.styles.push(_mdSelect4.default);
}
module.exports = exports['default'];

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(331)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(332),
  /* template */
  __webpack_require__(333),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdSelect/mdSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSelect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a6127e38", Component.options)
  } else {
    hotAPI.reload("data-v-a6127e38", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 331 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(44);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(38);

var _keys2 = _interopRequireDefault(_keys);

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

var _isArray = __webpack_require__(67);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-select',
  props: {
    name: String,
    id: String,
    required: Boolean,
    multiple: Boolean,
    value: [String, Boolean, Number, Array],
    disabled: Boolean,
    placeholder: String,
    mdMenuClass: String,
    mdMenuOptions: Object
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      lastSelected: null,
      selectedValue: null,
      selectedText: null,
      multipleOptions: {},
      options: {},
      optionsAmount: 0
    };
  },

  computed: {
    classes: function classes() {
      return {
        'md-disabled': this.disabled,
        'md-select-icon': this.hasIcon
      };
    },
    contentClasses: function contentClasses() {
      if (this.multiple) {
        return 'md-multiple ' + this.mdMenuClass;
      }

      return this.mdMenuClass;
    },
    hasIcon: function hasIcon() {
      return this.$slots['icon'];
    },
    valueStyle: function valueStyle() {
      return this.hasIcon ? {
        display: 'none'
      } : {};
    }
  },
  watch: {
    value: function value(_value) {
      this.setTextAndValue(_value);

      if (this.multiple) {
        this.selectOptions(_value);
      }
    },
    disabled: function disabled() {
      this.setParentDisabled();
    },
    required: function required() {
      this.setParentRequired();
    },
    placeholder: function placeholder() {
      this.setParentPlaceholder();
    }
  },
  methods: {
    changeValue: function changeValue(value) {
      this.$emit('input', value);
      this.$emit('change', value);
      this.$emit('selected', value);
    },
    getSingleValue: function getSingleValue(value) {
      var _this = this;

      var output = {};

      (0, _keys2.default)(this.options).forEach((function (index) {
        var options = _this.options[index];

        if (options.value === value) {
          output.value = value;
          output.text = options.$refs.item.textContent, output.el = options.$refs.item;
        }
      }));

      return output;
    },
    getMultipleValue: function getMultipleValue(modelValue) {
      var _this2 = this;

      if ((0, _isArray2.default)(this.value)) {
        var outputText = [];

        modelValue.forEach((function (value) {
          (0, _keys2.default)(_this2.options).forEach((function (index) {
            var options = _this2.options[index];

            if (options.value === value) {
              var text = options.$refs.item.textContent;

              _this2.multipleOptions[index] = {
                value: value,
                text: text
              };
              outputText.push(text);
            }
          }));
        }));

        return {
          value: modelValue,
          text: outputText.join(', ')
        };
      }

      return {};
    },
    onOpen: function onOpen() {
      if (this.lastSelected) {
        this.lastSelected.scrollIntoViewIfNeeded(true);
      }

      this.$emit('opened');
    },
    removeChild: function removeChild(index) {
      this.optionsAmount--;
      var selection = (0, _assign2.default)({}, this.options[index]);

      delete this.options[index];
      delete this.multipleOptions[index];

      if (this.multiple) {
        var element = this.selectedValue.find((function (el) {
          return el.name === selection.$refs.item.textContent.trim();
        }));
        var selectionIndex = this.selectedValue.indexOf(element);

        if (selectionIndex !== -1) {
          this.selectedValue.splice(selectionIndex, 1);
        }
      }
    },
    setParentDisabled: function setParentDisabled() {
      this.parentContainer.isDisabled = this.disabled;
    },
    setParentRequired: function setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },
    setParentPlaceholder: function setParentPlaceholder() {
      this.parentContainer.hasPlaceholder = !!this.placeholder;
    },
    selectOptions: function selectOptions(modelValue) {
      var _this3 = this;

      var optionsArray = (0, _keys2.default)(this.options).map((function (el) {
        return _this3.options[el];
      }));

      if (optionsArray && optionsArray.length) {
        var selectedOptions = optionsArray.filter((function (el) {
          return modelValue.includes(el.value);
        }));
        var unselectedOptions = optionsArray.filter((function (el) {
          return !modelValue.includes(el.value);
        }));

        selectedOptions.forEach((function (el) {
          el.check = true;
        }));
        unselectedOptions.forEach((function (el) {
          el.check = false;
        }));
      }
    },
    setTextAndValue: function setTextAndValue(modelValue) {
      var output = this.multiple ? this.getMultipleValue(modelValue) : this.getSingleValue(modelValue);

      this.selectedValue = output.value;
      this.selectedText = output.text;
      this.lastSelected = output.el;

      if (this.parentContainer) {
        this.parentContainer.setValue(this.selectedText);
      }
    },
    selectMultiple: function selectMultiple(index, value, text) {
      var _this4 = this;

      this.$nextTick((function () {
        var values = [];

        _this4.multipleOptions[index] = {
          value: value,
          text: text
        };

        for (var key in _this4.multipleOptions) {
          if (_this4.multipleOptions.hasOwnProperty(key) && _this4.multipleOptions[key].value) {
            values.push(_this4.multipleOptions[key].value);
          }
        }

        _this4.changeValue(values);
      }));
    },
    selectOption: function selectOption(value, text, el) {
      this.lastSelected = el;
      this.selectedText = text;
      this.setTextAndValue(value);
      this.changeValue(value);
    }
  },
  mounted: function mounted() {
    this.parentContainer = (0, _getClosestVueParent2.default)(this.$parent, 'md-input-container');

    if (this.parentContainer) {
      this.setParentDisabled();
      this.setParentRequired();
      this.setParentPlaceholder();
      this.parentContainer.hasSelect = true;
    }

    this.setTextAndValue(this.value);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.parentContainer) {
      this.parentContainer.setValue('');
      this.parentContainer.hasSelect = false;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-select",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('md-menu', _vm._b({
    attrs: {
      "md-close-on-select": !_vm.multiple
    },
    on: {
      "open": _vm.onOpen,
      "close": function($event) {
        _vm.$emit('closed')
      }
    }
  }, 'md-menu', _vm.mdMenuOptions, false), [_vm._t("icon"), _vm._v(" "), _c('span', {
    ref: "value",
    staticClass: "md-select-value",
    style: (_vm.valueStyle),
    attrs: {
      "md-menu-trigger": ""
    }
  }, [_vm._v("\n      " + _vm._s(_vm.selectedText || _vm.placeholder) + "\n    ")]), _vm._v(" "), _c('md-menu-content', {
    staticClass: "md-select-content",
    class: [_vm.themeClass, _vm.contentClasses]
  }, [_vm._t("default")], 2)], 2), _vm._v(" "), _c('select', {
    attrs: {
      "name": _vm.name,
      "id": _vm.id,
      "required": _vm.required,
      "disabled": _vm.disabled,
      "tabindex": "-1"
    }
  }, [(!_vm.multiple) ? _c('option', {
    attrs: {
      "selected": "true"
    },
    domProps: {
      "value": _vm.selectedValue
    }
  }, [_vm._v("\n      " + _vm._s(_vm.selectedText) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.multipleOptions), (function(option, index) {
    return (option.value) ? _c('option', {
      key: index,
      attrs: {
        "selected": "true"
      },
      domProps: {
        "value": option.value
      }
    }, [_vm._v("\n      " + _vm._s(option.text) + "\n    ")]) : _vm._e()
  }))], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a6127e38", module.exports)
  }
}

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(335),
  /* template */
  __webpack_require__(336),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdSelect/mdOption.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdOption.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6189afdd", Component.options)
  } else {
    hotAPI.reload("data-v-6189afdd", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-option',
  props: {
    value: [String, Boolean, Number, Object]
  },
  data: function data() {
    return {
      parentSelect: {},
      check: false,
      index: 0
    };
  },
  computed: {
    isSelected: function isSelected() {
      if (this.value && this.parentSelect.value) {
        var thisValue = this.value.toString();

        if (this.parentSelect.multiple) {
          return this.parentSelect.value.indexOf(thisValue) >= 0;
        }

        return this.value && this.parentSelect.value && thisValue === this.parentSelect.value.toString();
      }

      return false;
    },
    classes: function classes() {
      return {
        'md-selected': this.isSelected,
        'md-checked': this.check
      };
    }
  },
  methods: {
    isMultiple: function isMultiple() {
      return this.parentSelect.multiple;
    },
    setParentOption: function setParentOption() {
      if (!this.isMultiple()) {
        this.parentSelect.selectOption(this.value, this.$refs.item.textContent, this.$el);
      } else {
        this.check = !this.check;
      }
    },
    selectOption: function selectOption($event) {
      if (this.disabled) {
        return;
      }
      this.setParentOption();
      this.$emit('selected', $event);
    }
  },
  watch: {
    isSelected: function isSelected(selected) {
      if (this.isMultiple()) {
        this.check = selected;
      }
    },
    check: function check(_check) {
      if (_check) {
        this.parentSelect.selectMultiple(this.index, this.value, this.$refs.item.textContent);
      } else {
        this.parentSelect.selectMultiple(this.index);
      }
    }
  },
  mounted: function mounted() {
    this.parentSelect = (0, _getClosestVueParent2.default)(this.$parent, 'md-select');
    this.parentContent = (0, _getClosestVueParent2.default)(this.$parent, 'md-menu-content');

    if (!this.parentSelect) {
      throw new Error('You must wrap the md-option in a md-select');
    }

    this.parentSelect.optionsAmount++;
    this.index = this.parentSelect.optionsAmount;

    this.parentSelect.multipleOptions[this.index] = {};
    this.parentSelect.options[this.index] = this;

    if (this.isMultiple() && this.parentSelect.value.indexOf(this.value) >= 0 || this.parentSelect.value === this.value) {
      this.setParentOption();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.parentSelect) {
      this.parentSelect.removeChild(this.index);
      // delete this.parentSelect.options[this.index];
      // delete this.parentSelect.multipleOptions[this.index];
      // delete this.parentSelect.selectedValue[this.index];
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-menu-item', {
    staticClass: "md-option",
    class: _vm.classes,
    attrs: {
      "tabindex": "-1"
    },
    on: {
      "click": _vm.selectOption
    }
  }, [(_vm.parentSelect.multiple) ? _c('md-checkbox', {
    staticClass: "md-primary",
    model: {
      value: (_vm.check),
      callback: function($$v) {
        _vm.check = $$v
      },
      expression: "check"
    }
  }, [_c('span', {
    ref: "item"
  }, [_vm._t("default")], 2)]) : _c('span', {
    ref: "item"
  }, [_vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6189afdd", module.exports)
  }
}

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-select:after {\n  color: BACKGROUND-CONTRAST-0.54; }\n\n.THEME_NAME.md-select:after {\n  color: BACKGROUND-CONTRAST-0.38; }\n\n.THEME_NAME.md-select-content .md-menu-item.md-selected, .THEME_NAME.md-select-content .md-menu-item.md-checked {\n  color: PRIMARY-COLOR; }\n"

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdSidenav = __webpack_require__(339);

var _mdSidenav2 = _interopRequireDefault(_mdSidenav);

var _mdSidenav3 = __webpack_require__(343);

var _mdSidenav4 = _interopRequireDefault(_mdSidenav3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-sidenav', _mdSidenav2.default);

  Vue.material.styles.push(_mdSidenav4.default);
}
module.exports = exports['default'];

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(340)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(341),
  /* template */
  __webpack_require__(342),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdSidenav/mdSidenav.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSidenav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52912130", Component.options)
  } else {
    hotAPI.reload("data-v-52912130", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 340 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-sidenav',
  data: function data() {
    return {
      mdVisible: false
    };
  },

  mixins: [_mixin2.default],
  props: {
    mdSwipeable: Boolean,
    mdSwipeThreshold: {
      type: Number,
      default: 15
    },
    mdSwipeDistance: {
      type: Number,
      default: 100
    }
  },
  computed: {
    classes: function classes() {
      return this.mdVisible && 'md-active';
    }
  },
  methods: {
    show: function show() {
      this.open();
    },
    open: function open() {
      this.mdVisible = true;
      this.$el.focus();
      this.$emit('open');
    },
    close: function close() {
      this.mdVisible = false;
      this.$el.blur();
      this.$emit('close');
    },
    toggle: function toggle() {
      if (this.mdVisible) {
        this.close();
      } else {
        this.open();
      }
    },
    isHorizontallyInside: function isHorizontallyInside(positionX) {
      return positionX > 0 && positionX < this.mountedRect.left + this.mountedRect.width;
    },
    isVerticallyInside: function isVerticallyInside(positionY) {
      return positionY > 0 && positionY < this.mountedRect.top + this.mountedRect.height;
    },
    isFromStartWhenClosed: function isFromStartWhenClosed(positionX) {
      if (this.mdVisible) {
        return true;
      }

      return positionX < this.mdSwipeThreshold;
    },
    handleTouchStart: function handleTouchStart(event) {
      var positionX = event.touches[0].clientX - this.mountedRect.left;
      var positionY = event.touches[0].clientY - this.mountedRect.top;

      if (!this.isHorizontallyInside(positionX) || !this.isVerticallyInside(positionY) || !this.isFromStartWhenClosed(positionX)) {
        return;
      }

      this.initialTouchPosition = positionX;
      this.canMove = true;
    },
    handleTouchEnd: function handleTouchEnd() {
      this.canMove = false;
      this.initialTouchPosition = null;
    },
    handleTouchMove: function handleTouchMove(event) {
      if (!this.canMove) {
        return;
      }

      var positionX = event.touches[0].clientX;

      var difference = this.mdVisible ? this.initialTouchPosition - positionX : positionX - this.initialTouchPosition;

      var action = this.mdVisible ? 'close' : 'open';

      if (difference > this.mdSwipeDistance) {
        this[action]();
      }
    }
  },
  mounted: function mounted() {
    if (!this.mdSwipeable) {
      return;
    }

    this.mountedRect = this.$refs.backdrop.$el.getBoundingClientRect();
    this.initialTouchPosition = null;
    this.canMove = false;

    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchend', this.handleTouchEnd);
    document.addEventListener('touchmove', this.handleTouchMove);
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.mdSwipeable) {
      return;
    }

    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchend', this.handleTouchEnd);
    document.removeEventListener('touchmove', this.handleTouchMove);
  }
}; //
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-sidenav",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "tabindex": "0"
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.close($event)
      }
    }
  }, [_c('div', {
    staticClass: "md-sidenav-content"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('md-backdrop', {
    ref: "backdrop",
    staticClass: "md-sidenav-backdrop",
    on: {
      "close": _vm.close
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52912130", module.exports)
  }
}

/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-sidenav .md-sidenav-content {\n  background-color: BACKGROUND-COLOR;\n  color: BACKGROUND-CONTRAST; }\n"

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdSnackbar = __webpack_require__(345);

var _mdSnackbar2 = _interopRequireDefault(_mdSnackbar);

var _mdSnackbar3 = __webpack_require__(351);

var _mdSnackbar4 = _interopRequireDefault(_mdSnackbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-snackbar', _mdSnackbar2.default);

  Vue.material.styles.push(_mdSnackbar4.default);
}
module.exports = exports['default'];

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(346)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(347),
  /* template */
  __webpack_require__(350),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdSnackbar/mdSnackbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSnackbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b6cb8878", Component.options)
  } else {
    hotAPI.reload("data-v-b6cb8878", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 346 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueId = __webpack_require__(36);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _transitionEndEventName = __webpack_require__(42);

var _transitionEndEventName2 = _interopRequireDefault(_transitionEndEventName);

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _manager = __webpack_require__(348);

var _manager2 = _interopRequireDefault(_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-snackbar',
  props: {
    id: [String, Number],
    mdPosition: {
      type: String,
      default: 'bottom center'
    },
    mdDuration: {
      type: [String, Number],
      default: 4000
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      snackbarId: this.id || 'snackbar-' + (0, _uniqueId2.default)(),
      removedSnackBarElementEventName: 'removedSnackBarElement',
      active: false,
      rootElement: {},
      snackbarElement: {},
      directionClass: null,
      closeTimeout: null,
      removedSnackBarElementEvent: null
    };
  },

  computed: {
    classes: function classes() {
      var cssClasses = {
        'md-active': this.active
      };

      this.directionClass = this.mdPosition.replace(/ /g, '-');

      cssClasses['md-position-' + this.directionClass] = true;

      return cssClasses;
    }
  },
  watch: {
    active: function active(_active) {
      var directionClass = 'md-has-toast-' + this.directionClass;
      var toastClass = 'md-has-toast';

      if (_active) {
        document.body.classList.add(directionClass);
        document.body.classList.add(toastClass);
      } else {
        document.body.classList.remove(directionClass);
        document.body.classList.remove(toastClass);
      }
    }
  },
  methods: {
    removeElement: function removeElement() {
      // if we have the element and we don't want it active anymore, remove it
      if (document.body.contains(this.snackbarElement) && !this.active) {
        var activeRipple = this.snackbarElement.querySelector('.md-ripple.md-active');

        if (activeRipple) {
          activeRipple.classList.remove('md-active');
        }

        document.body.removeChild(this.snackbarElement);
      }
      document.dispatchEvent(this.removedSnackBarElementEvent);
    },
    open: function open() {
      if (_manager2.default.current) {
        // we need to wait for the old element to finishing closing before we can open a new one
        document.removeEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
        document.addEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
        _manager2.default.current.close();
        return;
      }

      this.showElementAndStartTimer();
    },
    showElementAndStartTimer: function showElementAndStartTimer() {
      if (document.body.contains(this.snackbarElement)) {
        return;
      }
      document.removeEventListener(this.removedSnackBarElementEventName, this.showElementAndStartTimer);
      _manager2.default.current = this;
      document.body.appendChild(this.snackbarElement);
      if (this.$refs.container !== null && this.$refs.container !== undefined) {
        window.getComputedStyle(this.$refs.container).backgroundColor;
      }
      this.active = true;
      this.$emit('open');
      if (this.mdDuration !== Infinity) {
        this.setCloseTimeout(this.mdDuration);
      }
      this.timeoutStartedAt = Date.now();
    },
    close: function close() {
      var _this = this;

      if (this.$refs.container) {
        //we set the flag to false here, because we need to inform the removeElement method that we really
        // want to remove the element - we're in closing action
        this.active = false;

        var removeElement = function removeElement() {
          document.removeEventListener(_transitionEndEventName2.default, removeElement);
          _this.removeElement();
        };

        _manager2.default.current = null;
        this.$emit('close');
        document.removeEventListener(_transitionEndEventName2.default, removeElement);
        document.addEventListener(_transitionEndEventName2.default, removeElement);
        this.clearCloseTimeout();
        this.pendingDuration = this.mdDuration;
      }
    },
    pauseTimeout: function pauseTimeout() {
      this.pendingDuration = this.pendingDuration - (Date.now() - this.timeoutStartedAt);
      this.timeoutStartedAt = 0;
      this.clearCloseTimeout();
    },
    resumeTimeout: function resumeTimeout() {
      this.timeoutStartedAt = Date.now();
      if (this.pendingDuration === Infinity) {
        return;
      }
      this.setCloseTimeout(this.pendingDuration);
    },
    setCloseTimeout: function setCloseTimeout(delay) {
      this.clearCloseTimeout();
      this.closeTimeout = window.setTimeout(this.close, delay);
    },
    clearCloseTimeout: function clearCloseTimeout() {
      if (!this.closeTimeout) {
        return;
      }
      window.clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick((function () {
      _this2.snackbarElement = _this2.$el;
      _this2.snackbarElement.parentNode.removeChild(_this2.snackbarElement);
      _this2.timeoutStartedAt = 0;
      _this2.pendingDuration = _this2.mdDuration;
    }));
    this.removedSnackBarElementEvent = new Event(this.removedSnackBarElementEventName);
  },
  beforeDestroy: function beforeDestroy() {
    this.clearCloseTimeout();
    this.active = false;
    this.removeElement();
  }
};
module.exports = exports['default'];

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(349);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var manager = new _vue2.default({
  data: function data() {
    return {
      current: null
    };
  }
});

exports.default = manager;
module.exports = exports['default'];

/***/ }),
/* 349 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_349__;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-snackbar",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "id": _vm.snackbarId
    },
    on: {
      "mouseenter": _vm.pauseTimeout,
      "mouseleave": _vm.resumeTimeout
    }
  }, [_c('div', {
    ref: "container",
    staticClass: "md-snackbar-container"
  }, [_c('div', {
    staticClass: "md-snackbar-content"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b6cb8878", module.exports)
  }
}

/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME .md-snackbar .md-ink-ripple, .THEME_NAME.md-snackbar .md-ink-ripple {\n  color: #fff; }\n"

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdSpeedDial = __webpack_require__(353);

var _mdSpeedDial2 = _interopRequireDefault(_mdSpeedDial);

var _mdSpeedDial3 = __webpack_require__(357);

var _mdSpeedDial4 = _interopRequireDefault(_mdSpeedDial3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-speed-dial', _mdSpeedDial2.default);

  Vue.material.styles.push(_mdSpeedDial4.default);
}
module.exports = exports['default'];

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(354)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(355),
  /* template */
  __webpack_require__(356),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdSpeedDial/mdSpeedDial.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSpeedDial.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50d48906", Component.options)
  } else {
    hotAPI.reload("data-v-50d48906", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 354 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-speed-dial',
  props: {
    mdOpen: {
      type: String,
      default: 'click'
    },
    mdMode: {
      type: String,
      default: 'fling'
    },
    mdDirection: {
      type: String,
      default: 'top'
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      fabTrigger: null,
      active: false
    };
  },
  computed: {
    classes: function classes() {
      var classes = {
        'md-active': this.active
      };

      classes['md-mode-' + this.mdMode] = true;
      classes['md-direction-' + this.mdDirection] = true;

      return classes;
    }
  },
  methods: {
    closeSpeedDial: function closeSpeedDial(event) {
      if (!event.target === this.fabTrigger || !this.fabTrigger.contains(event.target)) {
        this.active = false;
        document.body.removeEventListener('click', this.closeSpeedDial);
      }
    },
    toggleSpeedDial: function toggleSpeedDial() {
      var _this = this;

      this.active = !this.active;

      window.setTimeout((function () {
        document.body.addEventListener('click', _this.closeSpeedDial);
      }), 50);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick((function () {
      _this2.fabTrigger = _this2.$el.querySelector('[md-fab-trigger]');

      if (_this2.mdOpen === 'click') {
        _this2.fabTrigger.addEventListener('click', _this2.toggleSpeedDial);
      } else {
        _this2.$el.addEventListener('mouseenter', _this2.toggleSpeedDial);
        _this2.$el.addEventListener('mouseleave', _this2.closeSpeedDial);
      }
    }));
  },
  beforeDestroy: function beforeDestroy() {
    this.fabTrigger.removeEventListener('click', this.toggleSpeedDial);
    document.body.removeEventListener('click', this.closeSpeedDial);
  }
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-speed-dial",
    class: [_vm.themeClass, _vm.classes]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-50d48906", module.exports)
  }
}

/***/ }),
/* 357 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdSpinner = __webpack_require__(359);

var _mdSpinner2 = _interopRequireDefault(_mdSpinner);

var _mdSpinner3 = __webpack_require__(363);

var _mdSpinner4 = _interopRequireDefault(_mdSpinner3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-spinner', _mdSpinner2.default);

  Vue.material.styles.push(_mdSpinner4.default);
}
module.exports = exports['default'];

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(360)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(361),
  /* template */
  __webpack_require__(362),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdSpinner/mdSpinner.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSpinner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15aaf96c", Component.options)
  } else {
    hotAPI.reload("data-v-15aaf96c", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 360 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-spinner',
  props: {
    mdSize: {
      type: Number,
      default: 50
    },
    mdStroke: {
      type: Number,
      default: 3.5
    },
    mdIndeterminate: Boolean,
    mdProgress: {
      type: Number,
      default: 0
    }
  },
  mixins: [_mixin2.default],
  computed: {
    classes: function classes() {
      return {
        'md-indeterminate': this.mdIndeterminate
      };
    },
    styles: function styles() {
      var newSize = this.mdSize + 'px';

      return {
        width: newSize,
        height: newSize
      };
    },
    dashProgress: function dashProgress() {
      var progress = this.mdProgress * 125 / 100;

      if (this.mdIndeterminate) {
        return false;
      }

      if (progress >= 125) {
        progress = 130;
      }

      return progress + ', 200';
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "md-spinner",
      "appear": ""
    }
  }, [_c('div', {
    staticClass: "md-spinner",
    class: [_vm.themeClass, _vm.classes],
    style: (_vm.styles)
  }, [_c('svg', {
    staticClass: "md-spinner-draw",
    attrs: {
      "viewBox": "25 25 50 50"
    }
  }, [_c('circle', {
    staticClass: "md-spinner-path",
    attrs: {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "stroke-width": _vm.mdStroke,
      "stroke-dasharray": _vm.dashProgress
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-15aaf96c", module.exports)
  }
}

/***/ }),
/* 363 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-spinner .md-spinner-path {\n  stroke: PRIMARY-COLOR; }\n\n.THEME_NAME.md-spinner.md-accent .md-spinner-path {\n  stroke: ACCENT-COLOR; }\n\n.THEME_NAME.md-spinner.md-warn .md-spinner-path {\n  stroke: WARN-COLOR; }\n"

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdStepper = __webpack_require__(365);

var _mdStepper2 = _interopRequireDefault(_mdStepper);

var _mdStep = __webpack_require__(369);

var _mdStep2 = _interopRequireDefault(_mdStep);

var _mdStepHeaderContainer = __webpack_require__(372);

var _mdStepHeaderContainer2 = _interopRequireDefault(_mdStepHeaderContainer);

var _mdStepHeader = __webpack_require__(373);

var _mdStepHeader2 = _interopRequireDefault(_mdStepHeader);

var _mdStepper3 = __webpack_require__(376);

var _mdStepper4 = _interopRequireDefault(_mdStepper3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-stepper', _mdStepper2.default);
  Vue.component('md-step', _mdStep2.default);
  Vue.component('md-step-header-container', _mdStepHeaderContainer2.default);
  Vue.component('md-step-header', _mdStepHeader2.default);

  Vue.material.styles.push(_mdStepper4.default);
}
module.exports = exports['default'];

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(366)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(367),
  /* template */
  __webpack_require__(368),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdStepper/mdStepper.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdStepper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4122aeba", Component.options)
  } else {
    hotAPI.reload("data-v-4122aeba", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 366 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(38);

var _keys2 = _interopRequireDefault(_keys);

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _throttle = __webpack_require__(59);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-stepper',
  props: {
    mdAlternateLabels: {
      type: Boolean,
      default: false
    },
    mdElevation: {
      type: [String, Number],
      default: 1
    },
    mdVertical: {
      type: Boolean,
      default: false
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      stepList: {},
      activeStep: null,
      activeStepNumber: 0,
      contentHeight: '0px',
      contentWidth: '0px'
    };
  },
  computed: {
    navigationClasses: function navigationClasses() {
      return {
        'md-alternate-labels': this.mdAlternateLabels
      };
    },
    stepsClasses: function stepsClasses() {
      return {
        'md-steps-vertical': this.mdVertical
      };
    }
  },
  methods: {
    getNextStep: function getNextStep(id) {
      var currentIndex = this.getStepIndex(id);

      if (currentIndex === this.stepList.length) {
        return undefined;
      }

      var nextStepId = (0, _keys2.default)(this.stepList)[currentIndex + 1];
      var nextStep = this.stepList[nextStepId];

      return nextStep;
    },
    getPreviousStep: function getPreviousStep(id) {
      var currentIndex = this.getStepIndex(id);

      if (currentIndex === 0) {
        return undefined;
      }

      var previousStepId = (0, _keys2.default)(this.stepList)[currentIndex - 1];
      var previousStep = this.stepList[previousStepId];

      return previousStep;
    },
    getStepsCount: function getStepsCount() {
      var idList = (0, _keys2.default)(this.stepList);

      return idList.length;
    },
    getStepIndex: function getStepIndex(id) {
      var idList = (0, _keys2.default)(this.stepList);

      return idList.indexOf(id);
    },
    registerStep: function registerStep(stepData) {
      this.$set(this.stepList, stepData.id, stepData);
    },
    moveNextStep: function moveNextStep() {
      if (this.activeStepNumber < this.getStepsCount() - 1) {
        var nextStep = this.getNextStep(this.activeStep);

        this.setActiveStep(nextStep);
      } else {
        this.$emit('completed');
      }
    },
    movePreviousStep: function movePreviousStep() {
      if (this.activeStepNumber > 0 && this.activeStepNumber < this.getStepsCount()) {
        var prevStep = this.getPreviousStep(this.activeStep);

        this.setActiveStep(prevStep);
      }
    },
    setActiveStep: function setActiveStep(stepData) {
      if (this.activeStepNumber > this.getStepIndex(stepData.id) && !stepData.editable) {
        return;
      }

      this.activeStep = stepData.id;
      this.activeStepNumber = this.getStepIndex(this.activeStep);
      this.calculatePosition();
      this.$emit('change', this.activeStepNumber);
    },
    unregisterStep: function unregisterStep(stepData) {
      this.$delete(this.stepList, stepData.id);
    },
    updateStep: function updateStep(stepData) {
      this.registerStep(stepData);

      if (stepData.active) {
        if (!stepData.disabled) {
          this.setActiveStep(stepData);
        } else if ((0, _keys2.default)(this.stepList).length) {
          var stepIds = (0, _keys2.default)(this.stepList);
          var targetIndex = stepIds.indexOf(stepData.id) + 1;
          var target = stepIds[targetIndex];

          if (target) {
            this.setActiveStep(this.stepList[target]);
          } else {
            this.setActiveStep(this.stepList[0]);
          }
        }
      }
    },
    observeElementChanges: function observeElementChanges() {
      this.parentObserver = new MutationObserver((0, _throttle2.default)(this.calculateOnWatch, 50));
      this.parentObserver.observe(this.$refs.stepContent, {
        childList: true,
        attributes: true,
        subtree: true
      });
    },
    calculateStepsWidthAndPosition: function calculateStepsWidthAndPosition() {
      if (!this.mdVertical) {
        var width = this.$el.offsetWidth;
        var index = 0;

        this.contentWidth = width * this.activeStepNumber + 'px';

        for (var stepId in this.stepList) {
          var step = this.stepList[stepId];

          step.ref.width = width + 'px';
          step.ref.left = width * index + 'px';
          index++;
        }
      } else {
        this.contentWidth = 'initial';
      }
    },
    calculateContentHeight: function calculateContentHeight() {
      var _this = this;

      this.$nextTick((function () {
        if (!_this.mdVertical && (0, _keys2.default)(_this.stepList).length) {
          var height = _this.stepList[_this.activeStep].ref.$el.offsetHeight;

          _this.contentHeight = height + 'px';
        } else {
          _this.contentHeight = 'initial';
        }
      }));
    },
    calculatePosition: function calculatePosition() {
      var _this2 = this;

      window.requestAnimationFrame((function () {
        if (_this2._destroyed) {
          return;
        }

        _this2.calculateStepsWidthAndPosition();
        _this2.calculateContentHeight();
      }));
    },
    debounceTransition: function debounceTransition() {
      var _this3 = this;

      window.clearTimeout(this.transitionControl);
      this.transitionControl = window.setTimeout((function () {
        _this3.calculatePosition();
        _this3.transitionOff = false;
      }), 200);
    },
    calculateOnWatch: function calculateOnWatch() {
      this.calculatePosition();
      this.debounceTransition();
    },
    calculateOnResize: function calculateOnResize() {
      this.transitionOff = true;
      this.calculateOnWatch();
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.$nextTick((function () {
      _this4.observeElementChanges();
      window.addEventListener('resize', _this4.calculateOnResize);

      if ((0, _keys2.default)(_this4.stepList).length && !_this4.activeStep) {
        var firstStep = (0, _keys2.default)(_this4.stepList)[0];

        _this4.setActiveStep(_this4.stepList[firstStep]);
      }
    }));
  },
  beforeDestroy: function beforeDestroy() {
    if (this.parentObserver) {
      this.parentObserver.disconnect();
    }

    window.removeEventListener('resize', this.calculateOnResize);

    this._destroyed = true;
  }
};
module.exports = exports['default'];

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-stepper",
    class: [_vm.themeClass, _vm.stepsClasses]
  }, [(!_vm.mdVertical) ? _c('md-whiteframe', {
    ref: "stepNavigation",
    staticClass: "md-steps-navigation",
    class: _vm.navigationClasses,
    attrs: {
      "md-tag": "nav",
      "md-elevation": _vm.mdElevation
    }
  }, [_c('md-step-header-container', {
    ref: "stepHeader",
    attrs: {
      "md-vertical": _vm.mdVertical
    }
  }, _vm._l((_vm.stepList), (function(step, index) {
    return _c('md-step-header', {
      key: step.id,
      attrs: {
        "step": step,
        "md-alternate-labels": _vm.mdAlternateLabels
      },
      nativeOn: {
        "click": function($event) {
          _vm.setActiveStep(step)
        }
      }
    })
  })))], 1) : _vm._e(), _vm._v(" "), _c('md-whiteframe', {
    attrs: {
      "md-elevation": _vm.mdElevation
    }
  }, [(!_vm.mdVertical) ? _c('div', {
    ref: "stepContent",
    staticClass: "md-steps-container",
    style: ({
      height: _vm.contentHeight
    })
  }, [_c('div', {
    staticClass: "md-steps-wrapper",
    style: ({
      transform: ("translate3D(-" + _vm.contentWidth + ", 0, 0)")
    })
  }, [_vm._t("default")], 2)]) : _vm._e(), _vm._v(" "), (_vm.mdVertical) ? _c('div', {
    ref: "stepContent",
    staticClass: "md-steps-vertical-container"
  }, [_vm._t("default")], 2) : _vm._e()])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4122aeba", module.exports)
  }
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(370),
  /* template */
  __webpack_require__(371),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdStepper/mdStep.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdStep.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a2a8733", Component.options)
  } else {
    hotAPI.reload("data-v-5a2a8733", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueId = __webpack_require__(36);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-step',
  props: {
    id: [String, Number],
    mdActive: Boolean,
    mdButtonBack: {
      type: String,
      default: 'BACK'
    },
    mdButtonContinue: {
      type: String,
      default: 'CONTINUE'
    },
    mdContinue: {
      type: Boolean,
      default: true
    },
    mdDisabled: Boolean,
    mdError: Boolean,
    mdEditable: {
      type: Boolean,
      default: true
    },
    mdIcon: String,
    mdLabel: [String, Number],
    mdMessage: [String],
    mdTooltip: String,
    mdTooltipDelay: {
      type: String,
      default: '0'
    },
    mdTooltipDirection: {
      type: String,
      default: 'bottom'
    }
  },
  data: function data() {
    return {
      index: 0,
      left: '0px',
      mounted: false,
      parentStepper: undefined,
      stepId: this.id || 'step-' + (0, _uniqueId2.default)(),
      vertical: false,
      width: '0px'
    };
  },

  watch: {
    mdActive: function mdActive() {
      this.updateStepData();
    },
    mdContinue: function mdContinue() {
      this.updateStepData();
    },
    mdEditable: function mdEditable() {
      this.updateStepData();
    },
    mdDisabled: function mdDisabled() {
      this.updateStepData();
    },
    mdError: function mdError() {
      this.updateStepData();
    },
    mdIcon: function mdIcon() {
      this.updateStepData();
    },
    mdLabel: function mdLabel() {
      this.updateStepData();
    },
    mdMessage: function mdMessage() {
      this.updateStepData();
    },
    mdTooltip: function mdTooltip() {
      this.updateStepData();
    },
    mdTooltipDelay: function mdTooltipDelay() {
      this.updateStepData();
    },
    mdTooltipDirection: function mdTooltipDirection() {
      this.updateStepData();
    }
  },
  computed: {
    canGoBack: function canGoBack() {
      if (this.index === 0) {
        return false;
      }

      if (!this.parentStepper) {
        return false;
      }

      var previousStep = this.parentStepper.getPreviousStep(this.stepId);

      if (previousStep !== undefined && !previousStep.editable) {
        return false;
      }

      return true;
    },
    continueText: function continueText() {
      if (!this.parentStepper) {
        return this.mdButtonContinue;
      }

      if (this.index + 1 === this.parentStepper.getStepsCount() && this.mdButtonContinue === 'CONTINUE') {
        return 'FINISH';
      }

      return this.mdButtonContinue;
    },
    isCurrentStep: function isCurrentStep() {
      return this.index === this.parentStepper.activeStepNumber;
    },
    styles: function styles() {
      if (this.vertical) {
        return {};
      }

      return {
        width: this.width,
        left: this.left
      };
    }
  },
  methods: {
    getStepData: function getStepData() {
      return {
        id: this.stepId,
        label: this.mdLabel,
        message: this.mdMessage,
        icon: this.mdIcon,
        active: this.mdActive,
        continue: this.mdContinue,
        editable: this.mdEditable,
        disabled: this.mdDisabled,
        error: this.mdError,
        toolTip: this.mdTooltip,
        tooltipDelay: this.mdTooltipDelay,
        tooltipDirection: this.mdTooltipDirection,
        ref: this
      };
    },
    moveNextStep: function moveNextStep() {
      this.parentStepper.moveNextStep();
    },
    movePreviousStep: function movePreviousStep() {
      this.parentStepper.movePreviousStep();
    },
    setActiveStep: function setActiveStep() {
      this.parentStepper.setActiveStep(this.getStepData());
    },
    updateStepData: function updateStepData() {
      this.parentStepper.updateStep(this.getStepData());
    }
  },
  mounted: function mounted() {
    var stepData = this.getStepData();

    this.parentStepper = (0, _getClosestVueParent2.default)(this.$parent, 'md-stepper');

    if (!this.parentStepper) {
      throw new Error('You must wrap the md-step in a md-stepper');
    }

    this.mounted = true;
    this.parentStepper.updateStep(stepData);

    if (this.mdActive) {
      this.parentStepper.setActiveStep(stepData);
    }

    this.vertical = this.parentStepper.mdVertical;

    this.index = this.parentStepper.getStepIndex(this.stepId);
  },
  beforeDestroy: function beforeDestroy() {
    this.parentStepper.unregisterStep(this.getStepData());
  }
};
module.exports = exports['default'];

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-step",
    style: (_vm.styles),
    attrs: {
      "id": _vm.stepId
    }
  }, [(_vm.vertical) ? _c('md-step-header', {
    attrs: {
      "step": _vm.getStepData()
    }
  }) : _vm._e(), _vm._v(" "), (!_vm.vertical || (_vm.vertical && _vm.isCurrentStep)) ? _c('div', {
    staticClass: "md-step-content"
  }, [_vm._t("default"), _vm._v(" "), (!_vm.vertical || (_vm.vertical && _vm.isCurrentStep)) ? _c('div', {
    staticClass: "md-step-actions"
  }, [_c('md-button', {
    staticClass: "md-raised md-primary",
    attrs: {
      "disabled": !_vm.mdContinue
    },
    on: {
      "click": _vm.moveNextStep
    }
  }, [_vm._v(_vm._s(_vm.continueText))]), _vm._v(" "), _c('md-button', {
    attrs: {
      "disabled": !_vm.canGoBack
    },
    on: {
      "click": _vm.movePreviousStep
    }
  }, [_vm._v(_vm._s(_vm.mdButtonBack))])], 1) : _vm._e()], 2) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5a2a8733", module.exports)
  }
}

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueId = __webpack_require__(36);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  functional: true,
  props: {
    mdVertical: {
      type: Boolean,
      default: false
    }
  },
  render: function render(createElement, _ref) {
    var children = _ref.children,
        props = _ref.props;

    var insertDividerIntoArray = function insertDividerIntoArray(arr) {
      return arr.reduce((function (result, element, index, array) {

        result.push(element);

        if (index < array.length - 1) {
          var mdDivider = createElement('md-divider', { key: 'divider-' + (0, _uniqueId2.default)() });

          result.push(mdDivider);
        }

        return result;
      }), []);
    };

    if (!props.mdVertical) {
      children = insertDividerIntoArray(children);
    }

    return createElement('div', { class: 'md-steps-navigation-container' }, children);
  }
};
module.exports = exports['default'];

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(374),
  /* template */
  __webpack_require__(375),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdStepper/mdStepHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdStepHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-462bd1c0", Component.options)
  } else {
    hotAPI.reload("data-v-462bd1c0", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    step: Object,
    mdAlternateLabels: Boolean
  },
  data: function data() {
    return {
      index: Number,
      parentStepper: {}
    };
  },

  computed: {
    isCompleted: function isCompleted() {
      return this.index < this.parentStepper.activeStepNumber;
    },
    getHeaderClasses: function getHeaderClasses() {
      return {
        'md-active': this.parentStepper.activeStep === this.step.id,
        'md-alternate-labels': this.mdAlternateLabels,
        'md-disabled': this.step.disabled,
        'md-has-sub-message': this.step.message,
        'md-primary': this.isCompleted,
        'md-warn': this.step.error
      };
    },
    icon: function icon() {
      if (!this.step.disabled && this.step.editable && this.isCompleted && !this.step.error) {
        return 'mode_edit';
      }

      if (!this.step.disabled && this.isCompleted && !this.step.error) {
        return 'check';
      }

      if (!this.step.disabled && this.step.error) {
        return 'warning';
      }
      return this.step.icon;
    },
    stepNumber: function stepNumber() {
      return this.index + 1;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick((function () {
      _this.parentStepper = (0, _getClosestVueParent2.default)(_this.$parent, 'md-stepper');

      if (!_this.parentStepper) {
        _this.$destroy();

        throw new Error('You should wrap the md-step-header in a md-stepper');
      }

      _this.index = _this.parentStepper.getStepIndex(_this.step.id);
    }));
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-step-header",
    class: _vm.getHeaderClasses
  }, [_c('div', {
    staticClass: "md-step-icons"
  }, [(_vm.icon && !_vm.step.error) ? _c('md-icon', {
    staticClass: "md-step-icon"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), (_vm.icon && _vm.step.error) ? _c('md-icon', {
    staticClass: "md-step-error"
  }, [_vm._v(_vm._s(_vm.icon))]) : _vm._e(), _vm._v(" "), (!_vm.icon) ? _c('div', {
    staticClass: "md-step-number"
  }, [_c('span', [_vm._v(_vm._s(_vm.stepNumber))])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "md-step-titles"
  }, [_c('div', {
    staticClass: "md-step-title"
  }, [_vm._v(_vm._s(_vm.step.label))]), _vm._v(" "), (_vm.step.message) ? _c('small', [_vm._v(_vm._s(_vm.step.message))]) : _vm._e()]), _vm._v(" "), (_vm.step.toolTip) ? _c('md-tooltip', {
    attrs: {
      "md-direction": _vm.step.tooltipDirection,
      "md-delay": _vm.step.tooltipDelay
    }
  }, [_vm._v(_vm._s(_vm.step.toolTip))]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-462bd1c0", module.exports)
  }
}

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-stepper .md-step-header .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header .md-step-number {\n  color: BACKGROUND-CONTRAST;\n  background-color: #bdbdbd; }\n\n.THEME_NAME.md-stepper .md-step-header.md-primary .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-primary .md-step-number, .THEME_NAME.md-stepper .md-step-header.md-active .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-active .md-step-number {\n  color: PRIMARY-CONTRAST;\n  background-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-stepper .md-step-header.md-accent .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-accent .md-step-number {\n  color: ACCENT-CONTRAST;\n  background-color: ACCENT-COLOR; }\n\n.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-icon,\n.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-number {\n  color: WARN-CONTRAST;\n  background-color: WARN-COLOR; }\n\n.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-error,\n.THEME_NAME.md-stepper .md-step-header.md-warn .md-step-titles {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-stepper .md-step-header.md-disabled {\n  color: #bdbdbd; }\n  .THEME_NAME.md-stepper .md-step-header.md-disabled .md-step-icon,\n  .THEME_NAME.md-stepper .md-step-header.md-disabled .md-step-number {\n    color: white;\n    background-color: #bdbdbd; }\n"

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdSubheader = __webpack_require__(378);

var _mdSubheader2 = _interopRequireDefault(_mdSubheader);

var _mdSubheader3 = __webpack_require__(382);

var _mdSubheader4 = _interopRequireDefault(_mdSubheader3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-subheader', _mdSubheader2.default);

  Vue.material.styles.push(_mdSubheader4.default);
}
module.exports = exports['default'];

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(379)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(380),
  /* template */
  __webpack_require__(381),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdSubheader/mdSubheader.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSubheader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c68ea1c", Component.options)
  } else {
    hotAPI.reload("data-v-6c68ea1c", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 379 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-subheader',
  mixins: [_mixin2.default]
}; //
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.$parent.$options._componentTag === 'md-list') ? _c('li', {
    staticClass: "md-subheader",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2) : _c('div', {
    staticClass: "md-subheader",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6c68ea1c", module.exports)
  }
}

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-subheader.md-primary {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-subheader.md-accent {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-subheader.md-warn {\n  color: WARN-COLOR; }\n"

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdSwitch = __webpack_require__(384);

var _mdSwitch2 = _interopRequireDefault(_mdSwitch);

var _mdSwitch3 = __webpack_require__(388);

var _mdSwitch4 = _interopRequireDefault(_mdSwitch3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-switch', _mdSwitch2.default);

  Vue.material.styles.push(_mdSwitch4.default);
}
module.exports = exports['default'];

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(385)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(386),
  /* template */
  __webpack_require__(387),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdSwitch/mdSwitch.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSwitch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c623fe4", Component.options)
  } else {
    hotAPI.reload("data-v-7c623fe4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 385 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkedPosition = 75; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var initialPosition = '-1px';

exports.default = {
  name: 'md-switch',
  props: {
    name: String,
    value: Boolean,
    id: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'button'
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      leftPos: initialPosition,
      checked: Boolean(this.value)
    };
  },

  computed: {
    classes: function classes() {
      return {
        'md-checked': this.checked,
        'md-disabled': this.disabled
      };
    },
    styles: function styles() {
      return {
        transform: 'translate3D(' + this.leftPos + ', -50%, 0)'
      };
    }
  },
  watch: {
    checked: function checked() {
      this.setPosition();
    },
    value: function value(_value) {
      this.changeState(_value);
    }
  },
  methods: {
    setPosition: function setPosition() {
      this.leftPos = this.checked ? checkedPosition + '%' : initialPosition;
    },
    changeState: function changeState(checked, $event) {
      if (typeof $event !== 'undefined') {
        this.$emit('change', checked, $event);

        if (!$event.defaultPrevented) {
          this.checked = checked;
        }
        this.$emit('input', this.checked, $event);
      } else {
        this.checked = checked;
      }
    },
    toggle: function toggle($event) {
      if (!this.disabled) {
        this.changeState(!this.checked, $event);
      }
    }
  },
  mounted: function mounted() {
    this.$nextTick(this.setPosition);
  }
};
module.exports = exports['default'];

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-switch",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('div', {
    staticClass: "md-switch-container",
    on: {
      "click": function($event) {
        _vm.toggle($event)
      }
    }
  }, [_c('div', {
    staticClass: "md-switch-thumb",
    style: (_vm.styles)
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "id": _vm.id,
      "disabled": _vm.disabled,
      "tabindex": "-1"
    },
    domProps: {
      "value": _vm.value
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "md-switch-holder",
    attrs: {
      "type": _vm.type
    }
  }), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": _vm.disabled
    }
  })], 1)]), _vm._v(" "), (_vm.$slots.default) ? _c('label', {
    staticClass: "md-switch-label",
    attrs: {
      "for": _vm.id || _vm.name
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c623fe4", module.exports)
  }
}

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-switch.md-checked .md-switch-container {\n  background-color: ACCENT-COLOR-500-0.5; }\n\n.THEME_NAME.md-switch.md-checked .md-switch-thumb {\n  background-color: ACCENT-COLOR; }\n\n.THEME_NAME.md-switch.md-checked .md-ink-ripple {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-switch.md-checked .md-ripple {\n  opacity: .38; }\n\n.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container {\n  background-color: PRIMARY-COLOR-500-0.5; }\n\n.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb {\n  background-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container {\n  background-color: WARN-COLOR-500-0.5; }\n\n.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb {\n  background-color: WARN-COLOR; }\n\n.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple {\n  color: WARN-COLOR; }\n\n.THEME_NAME.md-switch.md-disabled .md-switch-container, .THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.THEME_NAME.md-switch.md-disabled .md-switch-thumb, .THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb {\n  background-color: #bdbdbd; }\n"

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdTable = __webpack_require__(390);

var _mdTable2 = _interopRequireDefault(_mdTable);

var _mdTableRow = __webpack_require__(394);

var _mdTableRow2 = _interopRequireDefault(_mdTableRow);

var _mdTableHead = __webpack_require__(397);

var _mdTableHead2 = _interopRequireDefault(_mdTableHead);

var _mdTableCell = __webpack_require__(400);

var _mdTableCell2 = _interopRequireDefault(_mdTableCell);

var _mdTableEdit = __webpack_require__(403);

var _mdTableEdit2 = _interopRequireDefault(_mdTableEdit);

var _mdTableCard = __webpack_require__(406);

var _mdTableCard2 = _interopRequireDefault(_mdTableCard);

var _mdTableAlternateHeader = __webpack_require__(409);

var _mdTableAlternateHeader2 = _interopRequireDefault(_mdTableAlternateHeader);

var _mdTablePagination = __webpack_require__(412);

var _mdTablePagination2 = _interopRequireDefault(_mdTablePagination);

var _mdTable3 = __webpack_require__(418);

var _mdTable4 = _interopRequireDefault(_mdTable3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-table', _mdTable2.default);
  Vue.component('md-table-header', {
    functional: true,
    render: function render(h, scope) {
      return h('thead', {
        staticClass: 'md-table-header'
      }, scope.children);
    }
  });
  Vue.component('md-table-body', {
    functional: true,
    render: function render(h, scope) {
      return h('tbody', {
        staticClass: 'md-table-body'
      }, scope.children);
    }
  });
  Vue.component('md-table-row', _mdTableRow2.default);
  Vue.component('md-table-head', _mdTableHead2.default);
  Vue.component('md-table-cell', _mdTableCell2.default);
  Vue.component('md-table-edit', _mdTableEdit2.default);
  Vue.component('md-table-card', _mdTableCard2.default);
  Vue.component('md-table-pagination', _mdTablePagination2.default);
  Vue.component('md-table-alternate-header', _mdTableAlternateHeader2.default);

  Vue.material.styles.push(_mdTable4.default);
}
module.exports = exports['default'];

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(391)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(392),
  /* template */
  __webpack_require__(393),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTable/mdTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cf99074", Component.options)
  } else {
    hotAPI.reload("data-v-0cf99074", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 391 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(44);

var _assign2 = _interopRequireDefault(_assign);

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-table',
  props: {
    mdSortType: String,
    mdSort: String
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      sortType: this.mdSortType,
      sortBy: this.mdSort,
      hasRowSelection: false,
      data: [],
      selectedRows: []
    };
  },

  computed: {
    numberOfRows: function numberOfRows() {
      return this.data ? this.data.length : 0;
    },
    numberOfSelected: function numberOfSelected() {
      return this.selectedRows ? this.selectedRows.length : 0;
    }
  },
  methods: {
    emitSort: function emitSort(name) {
      this.sortBy = name;
      this.$emit('sort', {
        name: name,
        type: this.sortType
      });
    },
    emitSelection: function emitSelection() {
      this.$emit('select', this.selectedRows);
    },
    removeRow: function removeRow(row) {
      var index = this.data.indexOf(row);

      if (index !== -1) {
        this.data.splice(index, 1);
      }

      this.removeSelectedRow(row);
    },
    removeSelectedRow: function removeSelectedRow(row) {
      var selectedIndex = this.selectedRows.indexOf(row);

      if (selectedIndex !== -1) {
        this.selectedRows.splice(selectedIndex, 1);
      }
    },
    setRowSelection: function setRowSelection(isSelected, row) {
      if (isSelected) {
        this.selectedRows.push(row);
        return;
      }
      this.removeSelectedRow(row);
    },
    setMultipleRowSelection: function setMultipleRowSelection(isSelected) {
      this.selectedRows = isSelected ? (0, _assign2.default)([], this.data) : [];
    }
  },
  watch: {
    mdSort: function mdSort() {
      this.sortBy = this.mdSort;
      this.$emit('sortInput');
    },
    mdSortType: function mdSortType() {
      this.sortType = this.mdSortType;
      this.$emit('sortInput');
    }
  },
  mounted: function mounted() {
    this.parentCard = (0, _getClosestVueParent2.default)(this.$parent, 'md-table-card');

    if (this.parentCard) {
      this.parentCard.tableInstance = this;
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table",
    class: [_vm.themeClass]
  }, [_c('table', [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0cf99074", module.exports)
  }
}

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(395),
  /* template */
  __webpack_require__(396),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTable/mdTableRow.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableRow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a848bf6", Component.options)
  } else {
    hotAPI.reload("data-v-4a848bf6", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

var _uniqueId = __webpack_require__(36);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var transitionClass = 'md-transition-off';

exports.default = {
  name: 'md-table-row',
  props: {
    mdAutoSelect: Boolean,
    mdSelection: Boolean,
    mdItem: Object
  },
  data: function data() {
    return {
      parentTable: {},
      headRow: false,
      checkbox: false,
      index: 0,
      uuid: 'mdrow_uuid_' + (0, _uniqueId2.default)()
    };
  },

  computed: {
    isDisabled: function isDisabled() {
      return !this.mdSelection && !this.headRow;
    },
    hasSelection: function hasSelection() {
      return this.mdSelection || this.headRow && this.parentTable.hasRowSelection;
    },
    classes: function classes() {
      return {
        'md-selected': this.checkbox
      };
    }
  },
  watch: {
    mdItem: function mdItem(newValue, oldValue) {
      this.parentTable.data[this.index] = this.mdItem;
      this.handleMultipleSelection(newValue === oldValue);
    }
  },
  methods: {
    setRowSelection: function setRowSelection(value, row) {
      this.parentTable.setRowSelection(value, row);
    },
    setHeadRowSelection: function setHeadRowSelection() {
      if (this.hasSelection) {
        this.parentTable.$children[0].checkbox = this.parentTable.numberOfSelected > 0 && this.parentTable.numberOfSelected === this.parentTable.numberOfRows;
      }
    },
    handleSingleSelection: function handleSingleSelection(value) {
      this.parentTable.setRowSelection(value, this.mdItem);
      this.setHeadRowSelection();
    },
    handleMultipleSelection: function handleMultipleSelection(value) {
      var _this = this;

      if (this.parentTable.numberOfRows > 25) {
        this.parentTable.$el.classList.add(transitionClass);
      }

      this.parentTable.$children.forEach((function (row) {
        row.checkbox = value;
      }));

      this.parentTable.setMultipleRowSelection(value);
      this.setHeadRowSelection();

      window.setTimeout((function () {
        return _this.parentTable.$el.classList.remove(transitionClass);
      }), 100);
    },
    select: function select(value) {
      if (!this.hasSelection) {
        return;
      }

      if (this.headRow) {
        this.handleMultipleSelection(value);
      } else {
        this.handleSingleSelection(value);
      }

      this.parentTable.emitSelection();
      this.$emit(value ? 'selected' : 'deselected', value);
    },
    autoSelect: function autoSelect() {
      if (this.mdAutoSelect && this.hasSelection) {
        this.checkbox = !this.checkbox;
        this.handleSingleSelection(this.checkbox);
        this.parentTable.emitSelection();
      }
    },
    startTableRow: function startTableRow() {
      this.parentTable = (0, _getClosestVueParent2.default)(this.$parent, 'md-table');

      if (this.$el.parentNode.tagName.toLowerCase() === 'thead') {
        this.headRow = true;
      } else {
        if (!this.mdItem && this.mdSelection) {
          throw new Error('You should set the md-item property when using mdSelection. Example: <md-table-row md-selection :md-item="ITEM" ...>');
        }

        if (this.mdSelection) {
          this.parentTable.hasRowSelection = true;
        }
        this.parentTable.data.push(this.mdItem);
      }
    }
  },
  destroyed: function destroyed() {
    this.parentTable.removeRow(this.mdItem);
    this.setHeadRowSelection();
  },
  mounted: function mounted() {
    this.startTableRow();
  }
};
module.exports = exports['default'];

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "md-table-row",
    class: _vm.classes,
    on: {
      "click": _vm.autoSelect
    },
    nativeOn: {
      "click": function($event) {
        _vm.autoSelect($event)
      }
    }
  }, [(_vm.hasSelection) ? _c('md-table-cell', {
    staticClass: "md-table-selection"
  }, [_c('md-checkbox', {
    attrs: {
      "disabled": _vm.isDisabled
    },
    on: {
      "change": _vm.select
    },
    nativeOn: {
      "change": function($event) {
        _vm.select($event)
      }
    },
    model: {
      value: (_vm.checkbox),
      callback: function($$v) {
        _vm.checkbox = $$v
      },
      expression: "checkbox"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a848bf6", module.exports)
  }
}

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(398),
  /* template */
  __webpack_require__(399),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTable/mdTableHead.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableHead.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78def718", Component.options)
  } else {
    hotAPI.reload("data-v-78def718", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-table-head',
  props: {
    mdNumeric: Boolean,
    mdSortBy: String,
    mdTooltip: String
  },
  data: function data() {
    return {
      sortType: null,
      sorted: false,
      parentTable: {}
    };
  },

  computed: {
    classes: function classes() {
      var matchSort = this.hasMatchSort();

      if (!matchSort) {
        this.sorted = false;
      }

      return {
        'md-numeric': this.mdNumeric,
        'md-sortable': this.mdSortBy,
        'md-sorted': matchSort && this.sorted,
        'md-sorted-descending': matchSort && this.sortType === 'desc'
      };
    }
  },
  methods: {
    hasMatchSort: function hasMatchSort() {
      return this.parentTable.sortBy === this.mdSortBy;
    },
    changeSort: function changeSort() {
      if (this.mdSortBy) {
        if (this.sortType === 'asc' && this.sorted) {
          this.sortType = 'desc';
        } else {
          this.sortType = 'asc';
        }

        this.sorted = true;

        this.parentTable.sortType = this.sortType;
        this.parentTable.emitSort(this.mdSortBy);
      }
    },
    initSort: function initSort() {
      if (this.hasMatchSort()) {
        this.sorted = true;
        this.sortType = this.parentTable.sortType || 'asc';
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.parentTable = (0, _getClosestVueParent2.default)(this.$parent, 'md-table');
    this.initSort();
    this.parentTable.$on('sortInput', (function () {
      _this.initSort();
    }));
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('th', {
    staticClass: "md-table-head",
    class: _vm.classes,
    on: {
      "click": _vm.changeSort
    }
  }, [_c('div', {
    staticClass: "md-table-head-container"
  }, [_c('div', {
    staticClass: "md-table-head-text md-test"
  }, [(_vm.mdSortBy) ? _c('md-icon', {
    staticClass: "md-sortable-icon"
  }, [_vm._v("arrow_upward")]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.mdTooltip) ? _c('md-tooltip', [_vm._v(_vm._s(_vm.mdTooltip))]) : _vm._e()], 2), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": !_vm.mdSortBy
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78def718", module.exports)
  }
}

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(401),
  /* template */
  __webpack_require__(402),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTable/mdTableCell.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableCell.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-613ea214", Component.options)
  } else {
    hotAPI.reload("data-v-613ea214", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-table-cell',
  props: {
    mdNumeric: Boolean
  },
  data: function data() {
    return {
      hasAction: false
    };
  },
  computed: {
    classes: function classes() {
      return {
        'md-numeric': this.mdNumeric,
        'md-has-action': this.hasAction
      };
    }
  },
  mounted: function mounted() {
    if (this.$children.length > 0) {
      this.hasAction = true;
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "md-table-cell",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "md-table-cell-container"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-613ea214", module.exports)
  }
}

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(404),
  /* template */
  __webpack_require__(405),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTable/mdTableEdit.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableEdit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-658eff9e", Component.options)
  } else {
    hotAPI.reload("data-v-658eff9e", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-table-edit',
  props: {
    value: [String, Number],
    mdLarge: Boolean,
    mdId: String,
    mdName: String,
    mdPlaceholder: String,
    mdMaxlength: [Number, String]
  },
  data: function data() {
    return {
      active: false
    };
  },

  computed: {
    triggerClasses: function triggerClasses() {
      return {
        'md-edited': this.value
      };
    },
    dialogClasses: function dialogClasses() {
      return {
        'md-active': this.active,
        'md-large': this.mdLarge
      };
    },
    realValue: function realValue() {
      console.log(this.value);
    }
  },
  methods: {
    openDialog: function openDialog() {
      this.active = true;
      this.$refs.input.$el.focus();
      document.addEventListener('click', this.closeDialogOnOffClick);
    },
    closeDialog: function closeDialog() {
      if (this.active) {
        this.active = false;
        this.$refs.input.$el.blur();
        document.removeEventListener('click', this.closeDialogOnOffClick);
      }
    },
    closeDialogOnOffClick: function closeDialogOnOffClick(event) {
      if (!this.$refs.dialog.contains(event.target)) {
        this.closeDialog();
      }
    },
    confirmDialog: function confirmDialog() {
      var value = this.$refs.input.$el.value;

      this.closeDialog();
      this.$emit('input', value);
      this.$emit('edited', value);
    }
  }
};
module.exports = exports['default'];

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-edit",
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.closeDialog($event)
      }
    }
  }, [_c('div', {
    staticClass: "md-table-edit-trigger",
    class: _vm.triggerClasses,
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openDialog($event)
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.value || _vm.mdPlaceholder) + "\n  ")]), _vm._v(" "), _c('div', {
    ref: "dialog",
    staticClass: "md-table-dialog",
    class: _vm.dialogClasses
  }, [_c('md-input-container', [_c('md-input', {
    ref: "input",
    attrs: {
      "id": _vm.mdId,
      "name": _vm.mdName,
      "maxlength": _vm.mdMaxlength,
      "value": _vm.value,
      "placeholder": _vm.mdPlaceholder
    },
    nativeOn: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.confirmDialog($event)
      }
    }
  })], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-658eff9e", module.exports)
  }
}

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(407),
  /* template */
  __webpack_require__(408),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTable/mdTableCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-059419a4", Component.options)
  } else {
    hotAPI.reload("data-v-059419a4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-table-card',
  mixins: [_mixin2.default]
}; //
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-card', {
    staticClass: "md-table-card",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-059419a4", module.exports)
  }
}

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(410),
  /* template */
  __webpack_require__(411),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTable/mdTableAlternateHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableAlternateHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6215c943", Component.options)
  } else {
    hotAPI.reload("data-v-6215c943", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-table-alternate-header',
  mixins: [_mixin2.default],
  props: {
    mdSelectedLabel: {
      type: String,
      default: 'selected'
    }
  },
  data: function data() {
    return {
      classes: {},
      tableInstance: {}
    };
  },

  computed: {
    numberOfSelected: function numberOfSelected() {
      return this.tableInstance.numberOfSelected || 0;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.parentCard = (0, _getClosestVueParent2.default)(this.$parent, 'md-table-card');

    this.$nextTick((function () {
      _this.tableInstance = _this.parentCard.tableInstance;

      _this.$watch('tableInstance.numberOfSelected', (function () {
        _this.$refs.counter.textContent = _this.tableInstance.numberOfSelected;
        _this.classes = {
          'md-active': _this.tableInstance.numberOfSelected > 0
        };
      }));
    }));
  }
};
module.exports = exports['default'];

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-alternate-header",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('md-toolbar', [_c('div', {
    staticClass: "md-counter"
  }, [_c('span', {
    ref: "counter"
  }, [_vm._v(_vm._s(_vm.numberOfSelected))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.mdSelectedLabel))])]), _vm._v(" "), _vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6215c943", module.exports)
  }
}

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(413),
  /* template */
  __webpack_require__(417),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTable/mdTablePagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTablePagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09f9942e", Component.options)
  } else {
    hotAPI.reload("data-v-09f9942e", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _maxSafeInteger = __webpack_require__(414);

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-table-pagination',
  props: {
    mdSize: {
      type: [Number, String],
      default: 10
    },
    mdPageOptions: {
      type: [Array, Boolean],
      default: function _default() {
        return [10, 25, 50, 100];
      }
    },
    mdPage: {
      type: [Number, String],
      default: 1
    },
    mdTotal: {
      type: [Number, String],
      default: 'Many'
    },
    mdLabel: {
      type: String,
      default: 'Rows per page'
    },
    mdSeparator: {
      type: String,
      default: 'of'
    }
  },
  data: function data() {
    return {
      totalItems: 0,
      currentPage: parseInt(this.mdPage, 10),
      currentSize: parseInt(this.mdSize, 10)
    };
  },

  watch: {
    mdTotal: function mdTotal(val) {
      this.totalItems = isNaN(val) ? _maxSafeInteger2.default : parseInt(val, 10);
    },
    mdSize: function mdSize(val) {
      this.currentSize = parseInt(val, 10);
    },
    mdPage: function mdPage(val) {
      this.currentPage = parseInt(val, 10);
    }
  },
  computed: {
    lastPage: function lastPage() {
      return false;
    },
    shouldDisable: function shouldDisable() {
      return this.currentSize * this.currentPage >= this.totalItems;
    },
    subTotal: function subTotal() {
      var sub = this.currentPage * this.currentSize;

      return sub > this.mdTotal ? this.mdTotal : sub;
    }
  },
  methods: {
    emitPaginationEvent: function emitPaginationEvent() {
      if (this.canFireEvents) {
        this.$emit('pagination', {
          size: this.currentSize,
          page: this.currentPage
        });
      }
    },
    changeSize: function changeSize() {
      if (this.canFireEvents) {
        this.$emit('size', this.currentSize);
        this.emitPaginationEvent();
      }
    },
    previousPage: function previousPage() {
      if (this.canFireEvents) {
        this.currentPage--;
        this.$emit('page', this.currentPage);
        this.emitPaginationEvent();
      }
    },
    nextPage: function nextPage() {
      if (this.canFireEvents) {
        this.currentPage++;
        this.$emit('page', this.currentPage);
        this.emitPaginationEvent();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick((function () {
      _this.totalItems = isNaN(_this.mdTotal) ? _maxSafeInteger2.default : parseInt(_this.mdTotal, 10);
      if (_this.mdPageOptions) {
        _this.currentSize = _this.mdPageOptions.includes(_this.currentSize) ? _this.currentSize : _this.mdPageOptions[0];
      } else {
        _this.currentSize = _this.mdSize;
      }
      _this.canFireEvents = true;
    }));
  }
};
module.exports = exports['default'];

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(415), __esModule: true };

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(416);
module.exports = 0x1fffffffffffff;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(16);

$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-pagination"
  }, [(_vm.mdPageOptions !== false) ? [_c('span', {
    staticClass: "md-table-pagination-label"
  }, [_vm._v(_vm._s(_vm.mdLabel) + ":")]), _vm._v(" "), _c('md-select', {
    attrs: {
      "md-menu-class": "md-pagination-select"
    },
    on: {
      "change": _vm.changeSize
    },
    model: {
      value: (_vm.currentSize),
      callback: function($$v) {
        _vm.currentSize = $$v
      },
      expression: "currentSize"
    }
  }, _vm._l((_vm.mdPageOptions), (function(amount) {
    return _c('md-option', {
      key: amount,
      attrs: {
        "value": amount
      }
    }, [_vm._v(_vm._s(amount))])
  })))] : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(((_vm.currentPage - 1) * _vm.currentSize) + 1) + "-" + _vm._s(_vm.subTotal) + " " + _vm._s(_vm.mdSeparator) + " " + _vm._s(_vm.mdTotal))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-table-pagination-previous",
    attrs: {
      "disabled": _vm.currentPage === 1
    },
    on: {
      "click": _vm.previousPage
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_left")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-table-pagination-next",
    attrs: {
      "disabled": _vm.shouldDisable
    },
    on: {
      "click": _vm.nextPage
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_right")])], 1)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-09f9942e", module.exports)
  }
}

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-table-card .md-toolbar {\n  background-color: BACKGROUND-COLOR;\n  color: BACKGROUND-CONTRAST; }\n\n.THEME_NAME.md-table-alternate-header {\n  background-color: BACKGROUND-COLOR; }\n  .THEME_NAME.md-table-alternate-header .md-toolbar {\n    background-color: ACCENT-COLOR-A100-0.2;\n    color: ACCENT-CONTRAST-A100; }\n  .THEME_NAME.md-table-alternate-header .md-counter {\n    color: ACCENT-COLOR; }\n"

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdTabs = __webpack_require__(420);

var _mdTabs2 = _interopRequireDefault(_mdTabs);

var _mdTab = __webpack_require__(427);

var _mdTab2 = _interopRequireDefault(_mdTab);

var _mdTabs3 = __webpack_require__(430);

var _mdTabs4 = _interopRequireDefault(_mdTabs3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-tabs', _mdTabs2.default);
  Vue.component('md-tab', _mdTab2.default);

  Vue.material.styles.push(_mdTabs4.default);
}
module.exports = exports['default'];

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(421)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(422),
  /* template */
  __webpack_require__(426),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTabs/mdTabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d9eb024", Component.options)
  } else {
    hotAPI.reload("data-v-3d9eb024", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 421 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(38);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(423);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

var _throttle = __webpack_require__(59);

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'md-tabs',
  props: {
    mdFixed: Boolean,
    mdCentered: Boolean,
    mdRight: Boolean,
    mdNavigation: {
      type: Boolean,
      default: true
    },
    mdDynamicHeight: {
      type: Boolean,
      default: true
    },
    mdElevation: {
      type: [String, Number],
      default: 0
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      tabList: {},
      activeTab: null,
      activeTabNumber: 0,
      hasIcons: false,
      hasLabel: false,
      hasNavigationScroll: false,
      isNavigationOnStart: true,
      isNavigationOnEnd: false,
      transitionControl: null,
      transitionOff: false,
      contentHeight: '0px',
      contentWidth: '0px'
    };
  },
  computed: {
    tabClasses: function tabClasses() {
      return {
        'md-dynamic-height': this.mdDynamicHeight,
        'md-transition-off': this.transitionOff
      };
    },
    navigationClasses: function navigationClasses() {
      return {
        'md-has-icon': this.hasIcons,
        'md-has-label': this.hasLabel,
        'md-fixed': this.mdFixed,
        'md-right': !this.mdCentered && this.mdRight,
        'md-centered': this.mdCentered || this.mdFixed,
        'md-has-navigation-scroll': this.hasNavigationScroll
      };
    },
    indicatorClasses: function indicatorClasses() {
      var toLeft = this.lastIndicatorNumber > this.activeTabNumber;

      this.lastIndicatorNumber = this.activeTabNumber;

      return {
        'md-transition-off': this.transitionOff,
        'md-to-right': !toLeft,
        'md-to-left': toLeft
      };
    },
    navigationLeftButtonClasses: function navigationLeftButtonClasses() {
      return {
        'md-disabled': this.isNavigationOnStart
      };
    },
    navigationRightButtonClasses: function navigationRightButtonClasses() {
      return {
        'md-disabled': this.isNavigationOnEnd
      };
    }
  },
  methods: {
    getHeaderClass: function getHeaderClass(header) {
      return {
        'md-active': this.activeTab === header.id,
        'md-disabled': header.disabled
      };
    },
    registerTab: function registerTab(tabData) {
      var hasActive = false;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(this.tabList)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tab = _step.value;

          if (this.tabList[tab].active) {
            hasActive = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.$set(this.tabList, tabData.id, tabData);

      if (!hasActive && !tabData.disabled) {
        this.tabList[tabData.id].active = true;
      }
    },
    unregisterTab: function unregisterTab(tabData) {
      this.$delete(this.tabList, tabData.id);
    },
    updateTab: function updateTab(tabData) {
      this.registerTab(tabData);

      if (tabData.active) {
        if (!tabData.disabled) {
          this.setActiveTab(tabData);
        } else if ((0, _keys2.default)(this.tabList).length) {
          var tabsIds = (0, _keys2.default)(this.tabList);
          var targetIndex = tabsIds.indexOf(tabData.id) + 1;
          var target = tabsIds[targetIndex];

          if (target) {
            this.setActiveTab(this.tabList[target]);
          } else {
            this.setActiveTab(this.tabList[0]);
          }
        }
      }
    },
    observeElementChanges: function observeElementChanges() {
      this.parentObserver = new MutationObserver((0, _throttle2.default)(this.calculateOnWatch, 50));
      this.parentObserver.observe(this.$refs.tabContent, {
        childList: true,
        attributes: true,
        subtree: true
      });
    },
    getTabIndex: function getTabIndex(id) {
      var idList = (0, _keys2.default)(this.tabList);

      return idList.indexOf(id);
    },
    calculateIndicatorPos: function calculateIndicatorPos() {
      if (this.$refs.tabHeader && this.$refs.tabHeader[this.activeTabNumber]) {
        var tabsWidth = this.$el.offsetWidth;
        var activeTab = this.$refs.tabHeader[this.activeTabNumber];
        var left = activeTab.offsetLeft - this.$refs.tabsContainer.scrollLeft;
        var right = tabsWidth - left - activeTab.offsetWidth;

        this.$refs.indicator.style.left = left + 'px';
        this.$refs.indicator.style.right = right + 'px';
      }
    },
    calculateTabsWidthAndPosition: function calculateTabsWidthAndPosition() {
      var width = this.$el.offsetWidth;
      var index = 0;

      this.contentWidth = width * this.activeTabNumber + 'px';

      for (var tabId in this.tabList) {
        var tab = this.tabList[tabId];

        tab.ref.width = width + 'px';
        tab.ref.left = width * index + 'px';
        index++;
      }
    },
    calculateContentHeight: function calculateContentHeight() {
      var _this = this;

      this.$nextTick((function () {
        if ((0, _keys2.default)(_this.tabList).length) {
          var height = _this.tabList[_this.activeTab].ref.$el.offsetHeight;

          _this.contentHeight = height + 'px';
        }
      }));
    },
    calculatePosition: function calculatePosition() {
      var _this2 = this;

      window.requestAnimationFrame((function () {
        if (_this2._destroyed) {
          return;
        }

        _this2.calculateIndicatorPos();
        _this2.calculateTabsWidthAndPosition();
        _this2.calculateContentHeight();
        _this2.checkNavigationScroll();
      }));
    },
    debounceTransition: function debounceTransition() {
      var _this3 = this;

      window.clearTimeout(this.transitionControl);
      this.transitionControl = window.setTimeout((function () {
        _this3.calculatePosition();
        _this3.transitionOff = false;
      }), 200);
    },
    calculateOnWatch: function calculateOnWatch() {
      this.calculatePosition();
      this.debounceTransition();
    },
    calculateOnResize: function calculateOnResize() {
      this.transitionOff = true;
      this.calculateOnWatch();
    },
    calculateScrollPos: function calculateScrollPos() {
      var _$refs$tabsContainer = this.$refs.tabsContainer,
          scrollLeft = _$refs$tabsContainer.scrollLeft,
          scrollWidth = _$refs$tabsContainer.scrollWidth,
          clientWidth = _$refs$tabsContainer.clientWidth;


      this.isNavigationOnStart = scrollLeft < 32;
      this.isNavigationOnEnd = scrollWidth - scrollLeft - 32 < clientWidth;
    },
    handleNavigationScroll: function handleNavigationScroll() {
      var _this4 = this;

      window.requestAnimationFrame((function () {
        if (_this4._destroyed) {
          return;
        }

        _this4.calculateIndicatorPos();
        _this4.calculateScrollPos();
      }));
    },
    checkNavigationScroll: function checkNavigationScroll() {
      var _$refs$tabsContainer2 = this.$refs.tabsContainer,
          scrollWidth = _$refs$tabsContainer2.scrollWidth,
          clientWidth = _$refs$tabsContainer2.clientWidth;


      this.hasNavigationScroll = scrollWidth > clientWidth;
    },
    setActiveTab: function setActiveTab(tabData) {
      this.hasIcons = !!tabData.icon || !!tabData.iconset || !!tabData.iconSrc;
      this.hasLabel = !!tabData.label;
      this.activeTab = tabData.id;
      this.activeTabNumber = this.getTabIndex(this.activeTab);
      this.calculatePosition();
      this.$emit('change', this.activeTabNumber);
    },
    navigationScrollLeft: function navigationScrollLeft() {
      var _$refs$tabsContainer3 = this.$refs.tabsContainer,
          scrollLeft = _$refs$tabsContainer3.scrollLeft,
          clientWidth = _$refs$tabsContainer3.clientWidth;


      this.$refs.tabsContainer.scrollLeft = Math.max(0, scrollLeft - clientWidth);
    },
    navigationScrollRight: function navigationScrollRight() {
      var _$refs$tabsContainer4 = this.$refs.tabsContainer,
          scrollLeft = _$refs$tabsContainer4.scrollLeft,
          clientWidth = _$refs$tabsContainer4.clientWidth,
          scrollWidth = _$refs$tabsContainer4.scrollWidth;


      this.$refs.tabsContainer.scrollLeft = Math.min(scrollWidth, scrollLeft + clientWidth);
    }
  },
  activated: function activated() {
    this.calculateOnResize();
  },
  mounted: function mounted() {
    var _this5 = this;

    this.$nextTick((function () {
      _this5.observeElementChanges();
      window.addEventListener('resize', _this5.calculateOnResize);

      if ((0, _keys2.default)(_this5.tabList).length && !_this5.activeTab) {
        var firstTab = (0, _keys2.default)(_this5.tabList)[0];

        _this5.setActiveTab(_this5.tabList[firstTab]);
      }
    }));
  },
  beforeDestroy: function beforeDestroy() {
    if (this.parentObserver) {
      this.parentObserver.disconnect();
    }

    window.removeEventListener('resize', this.calculateOnResize);

    this._destroyed = true;
  }
};
module.exports = exports['default'];

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(424), __esModule: true };

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(68);
__webpack_require__(48);
module.exports = __webpack_require__(425);

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13)
  , get      = __webpack_require__(60);
module.exports = __webpack_require__(4).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-tabs",
    class: [_vm.themeClass, _vm.tabClasses]
  }, [_c('md-whiteframe', {
    ref: "tabNavigation",
    staticClass: "md-tabs-navigation",
    class: _vm.navigationClasses,
    attrs: {
      "md-tag": "nav",
      "md-elevation": _vm.mdElevation
    }
  }, [_c('div', {
    ref: "tabsContainer",
    staticClass: "md-tabs-navigation-container",
    on: {
      "scroll": _vm.handleNavigationScroll
    }
  }, [_c('div', {
    staticClass: "md-tabs-navigation-scroll-container"
  }, [_vm._l((_vm.tabList), (function(header) {
    return _c('button', {
      key: header.id,
      ref: "tabHeader",
      refInFor: true,
      staticClass: "md-tab-header",
      class: _vm.getHeaderClass(header),
      attrs: {
        "type": "button",
        "disabled": header.disabled
      },
      on: {
        "click": function($event) {
          _vm.setActiveTab(header)
        }
      }
    }, [_c('md-ink-ripple', {
      attrs: {
        "md-disabled": header.disabled
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "md-tab-header-container"
    }, [_vm._t("header-item", [(header.icon) ? _c('md-icon', [_vm._v(_vm._s(header.icon))]) : (header.iconset) ? _c('md-icon', {
      attrs: {
        "md-iconset": header.iconset
      }
    }, [_vm._v(_vm._s(header.icon))]) : (header.iconSrc) ? _c('md-icon', {
      attrs: {
        "md-src": header.iconSrc
      }
    }) : _vm._e(), _vm._v(" "), (header.label) ? _c('span', [_vm._v(_vm._s(header.label))]) : _vm._e()], {
      header: header
    })], 2), _vm._v(" "), (header.tooltip) ? _c('md-tooltip', {
      attrs: {
        "md-direction": header.tooltipDirection,
        "md-delay": header.tooltipDelay
      }
    }, [_vm._v(_vm._s(header.tooltip))]) : _vm._e()], 1)
  })), _vm._v(" "), _c('span', {
    ref: "indicator",
    staticClass: "md-tab-indicator",
    class: _vm.indicatorClasses
  })], 2)]), _vm._v(" "), (_vm.mdNavigation && _vm.hasNavigationScroll) ? _c('button', {
    staticClass: "md-tab-header-navigation-button md-left",
    class: _vm.navigationLeftButtonClasses,
    on: {
      "click": _vm.navigationScrollLeft
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_left")])], 1) : _vm._e(), _vm._v(" "), (_vm.mdNavigation && _vm.hasNavigationScroll) ? _c('button', {
    staticClass: "md-tab-header-navigation-button md-right",
    class: _vm.navigationRightButtonClasses,
    on: {
      "click": _vm.navigationScrollRight
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_right")])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    ref: "tabContent",
    staticClass: "md-tabs-content",
    style: ({
      height: _vm.contentHeight
    })
  }, [_c('div', {
    staticClass: "md-tabs-wrapper",
    style: ({
      transform: ("translate3D(-" + _vm.contentWidth + ", 0, 0)")
    })
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d9eb024", module.exports)
  }
}

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(428),
  /* template */
  __webpack_require__(429),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTabs/mdTab.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01de8cdf", Component.options)
  } else {
    hotAPI.reload("data-v-01de8cdf", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniqueId = __webpack_require__(36);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _getClosestVueParent = __webpack_require__(11);

var _getClosestVueParent2 = _interopRequireDefault(_getClosestVueParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
  name: 'md-tab',
  props: {
    id: [String, Number],
    mdLabel: [String, Number],
    mdIcon: String,
    mdIconset: String,
    mdIconSrc: String,
    mdActive: Boolean,
    mdDisabled: Boolean,
    mdOptions: {
      default: undefined
    },
    mdTooltip: String,
    mdTooltipDelay: {
      type: String,
      default: '0'
    },
    mdTooltipDirection: {
      type: String,
      default: 'bottom'
    }
  },
  data: function data() {
    return {
      mounted: false,
      tabId: this.id || 'tab-' + (0, _uniqueId2.default)(),
      width: '0px',
      left: '0px'
    };
  },

  watch: {
    mdActive: function mdActive() {
      this.updateTabData();
    },
    mdDisabled: function mdDisabled() {
      this.updateTabData();
    },
    mdIcon: function mdIcon() {
      this.updateTabData();
    },
    mdIconset: function mdIconset() {
      this.updateTabData();
    },
    mdIconSrc: function mdIconSrc() {
      this.updateTabData();
    },

    mdOptions: {
      deep: true,
      handler: function handler() {
        this.updateTabData();
      }
    },
    mdLabel: function mdLabel() {
      this.updateTabData();
    },
    mdTooltip: function mdTooltip() {
      this.updateTabData();
    },
    mdTooltipDelay: function mdTooltipDelay() {
      this.updateTabData();
    },
    mdTooltipDirection: function mdTooltipDirection() {
      this.updateTabData();
    }
  },
  computed: {
    styles: function styles() {
      return {
        width: this.width,
        left: this.left
      };
    }
  },
  methods: {
    getTabData: function getTabData() {
      return {
        id: this.tabId,
        label: this.mdLabel,
        icon: this.mdIcon,
        iconset: this.mdIconset,
        iconSrc: this.mdIconSrc,
        options: this.mdOptions,
        active: this.mdActive,
        disabled: this.mdDisabled,
        tooltip: this.mdTooltip,
        tooltipDelay: this.mdTooltipDelay,
        tooltipDirection: this.mdTooltipDirection,
        ref: this
      };
    },
    updateTabData: function updateTabData() {
      this.parentTabs.updateTab(this.getTabData());
    }
  },
  mounted: function mounted() {
    var tabData = this.getTabData();

    this.parentTabs = (0, _getClosestVueParent2.default)(this.$parent, 'md-tabs');

    if (!this.parentTabs) {
      throw new Error('You must wrap the md-tab in a md-tabs');
    }

    this.mounted = true;
    this.parentTabs.updateTab(tabData);

    if (this.mdActive) {
      this.parentTabs.setActiveTab(tabData);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.parentTabs.unregisterTab(this.getTabData());
  }
};
module.exports = exports['default'];

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-tab",
    style: (_vm.styles),
    attrs: {
      "id": _vm.tabId
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-01de8cdf", module.exports)
  }
}

/***/ }),
/* 430 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-tabs > .md-tabs-navigation {\n  background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header {\n    color: PRIMARY-CONTRAST-0.54; }\n    .THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header.md-active, .THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header:focus {\n      color: PRIMARY-CONTRAST; }\n    .THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header.md-disabled {\n      color: PRIMARY-CONTRAST-0.26; }\n  .THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-indicator {\n    background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-tabs > .md-tabs-navigation .md-tab-header-navigation-button {\n    color: PRIMARY-CONTRAST-0.54;\n    background-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation {\n  background-color: transparent;\n  border-bottom: 1px solid BACKGROUND-CONTRAST-0.12; }\n  .THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-header {\n    color: BACKGROUND-CONTRAST-0.54; }\n    .THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-header.md-active, .THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-header:focus {\n      color: PRIMARY-COLOR; }\n    .THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-header.md-disabled {\n      color: BACKGROUND-CONTRAST-0.26; }\n  .THEME_NAME.md-tabs.md-transparent > .md-tabs-navigation .md-tab-indicator {\n    background-color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-tabs.md-accent > .md-tabs-navigation {\n  background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-header {\n    color: ACCENT-CONTRAST-0.54; }\n    .THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-header.md-active, .THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-header:focus {\n      color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-header.md-disabled {\n      color: ACCENT-CONTRAST-0.26; }\n  .THEME_NAME.md-tabs.md-accent > .md-tabs-navigation .md-tab-indicator {\n    background-color: BACKGROUND-COLOR; }\n\n.THEME_NAME.md-tabs.md-warn > .md-tabs-navigation {\n  background-color: WARN-COLOR; }\n  .THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-header {\n    color: WARN-CONTRAST-0.54; }\n    .THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-header.md-active, .THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-header:focus {\n      color: WARN-CONTRAST; }\n    .THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-header.md-disabled {\n      color: WARN-CONTRAST-0.26; }\n  .THEME_NAME.md-tabs.md-warn > .md-tabs-navigation .md-tab-indicator {\n    background-color: BACKGROUND-COLOR; }\n"

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdToolbar = __webpack_require__(432);

var _mdToolbar2 = _interopRequireDefault(_mdToolbar);

var _mdToolbar3 = __webpack_require__(436);

var _mdToolbar4 = _interopRequireDefault(_mdToolbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-toolbar', _mdToolbar2.default);

  Vue.material.styles.push(_mdToolbar4.default);
}
module.exports = exports['default'];

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(433)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(434),
  /* template */
  __webpack_require__(435),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdToolbar/mdToolbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdToolbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44d8bce4", Component.options)
  } else {
    hotAPI.reload("data-v-44d8bce4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 433 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-toolbar',
  mixins: [_mixin2.default]
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-toolbar",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-44d8bce4", module.exports)
  }
}

/***/ }),
/* 436 */
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-toolbar {\n  background-color: PRIMARY-COLOR;\n  color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar .md-input-container.md-input-focused input,\n  .THEME_NAME.md-toolbar .md-input-container.md-input-focused textarea {\n    color: PRIMARY-CONTRAST;\n    text-shadow: 0 0 0 PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar .md-input-container.md-input-focused label,\n  .THEME_NAME.md-toolbar .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n    color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar .md-input-container:after {\n    background-color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar .md-input-container input,\n  .THEME_NAME.md-toolbar .md-input-container textarea {\n    color: PRIMARY-CONTRAST;\n    text-shadow: 0 0 0 PRIMARY-CONTRAST; }\n    .THEME_NAME.md-toolbar .md-input-container input::-webkit-input-placeholder,\n    .THEME_NAME.md-toolbar .md-input-container textarea::-webkit-input-placeholder {\n      color: PRIMARY-CONTRAST-0.54; }\n  .THEME_NAME.md-toolbar .md-input-container label,\n  .THEME_NAME.md-toolbar .md-input-container .md-icon:not(.md-icon-delete) {\n    color: PRIMARY-CONTRAST; }\n  .THEME_NAME.md-toolbar.md-accent {\n    background-color: ACCENT-COLOR;\n    color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused input,\n    .THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused textarea {\n      color: ACCENT-CONTRAST;\n      text-shadow: 0 0 0 ACCENT-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused label,\n    .THEME_NAME.md-toolbar.md-accent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container:after {\n      background-color: ACCENT-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container input,\n    .THEME_NAME.md-toolbar.md-accent .md-input-container textarea {\n      color: ACCENT-CONTRAST;\n      text-shadow: 0 0 0 ACCENT-CONTRAST; }\n      .THEME_NAME.md-toolbar.md-accent .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-toolbar.md-accent .md-input-container textarea::-webkit-input-placeholder {\n        color: ACCENT-CONTRAST-0.54; }\n    .THEME_NAME.md-toolbar.md-accent .md-input-container label,\n    .THEME_NAME.md-toolbar.md-accent .md-input-container .md-icon:not(.md-icon-delete) {\n      color: ACCENT-CONTRAST; }\n  .THEME_NAME.md-toolbar.md-warn {\n    background-color: WARN-COLOR;\n    color: WARN-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused input,\n    .THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused textarea {\n      color: WARN-CONTRAST;\n      text-shadow: 0 0 0 WARN-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused label,\n    .THEME_NAME.md-toolbar.md-warn .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: WARN-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container:after {\n      background-color: WARN-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container input,\n    .THEME_NAME.md-toolbar.md-warn .md-input-container textarea {\n      color: WARN-CONTRAST;\n      text-shadow: 0 0 0 WARN-CONTRAST; }\n      .THEME_NAME.md-toolbar.md-warn .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-toolbar.md-warn .md-input-container textarea::-webkit-input-placeholder {\n        color: WARN-CONTRAST-0.54; }\n    .THEME_NAME.md-toolbar.md-warn .md-input-container label,\n    .THEME_NAME.md-toolbar.md-warn .md-input-container .md-icon:not(.md-icon-delete) {\n      color: WARN-CONTRAST; }\n  .THEME_NAME.md-toolbar.md-transparent {\n    background-color: transparent;\n    color: BACKGROUND-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused input,\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused textarea {\n      color: BACKGROUND-CONTRAST;\n      text-shadow: 0 0 0 BACKGROUND-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused label,\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container.md-input-focused .md-icon:not(.md-icon-delete) {\n      color: BACKGROUND-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container:after {\n      background-color: BACKGROUND-CONTRAST; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container input,\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container textarea {\n      color: BACKGROUND-CONTRAST;\n      text-shadow: 0 0 0 BACKGROUND-CONTRAST; }\n      .THEME_NAME.md-toolbar.md-transparent .md-input-container input::-webkit-input-placeholder,\n      .THEME_NAME.md-toolbar.md-transparent .md-input-container textarea::-webkit-input-placeholder {\n        color: BACKGROUND-CONTRAST-0.54; }\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container label,\n    .THEME_NAME.md-toolbar.md-transparent .md-input-container .md-icon:not(.md-icon-delete) {\n      color: BACKGROUND-CONTRAST; }\n"

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdTooltip = __webpack_require__(438);

var _mdTooltip2 = _interopRequireDefault(_mdTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-tooltip', _mdTooltip2.default);
}
module.exports = exports['default'];

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(439)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(440),
  /* template */
  __webpack_require__(441),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdTooltip/mdTooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTooltip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-afcfcec4", Component.options)
  } else {
    hotAPI.reload("data-v-afcfcec4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 439 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(66);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _transitionEndEventName = __webpack_require__(42);

var _transitionEndEventName2 = _interopRequireDefault(_transitionEndEventName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'md-tooltip',
  props: {
    mdDirection: {
      type: String,
      default: 'bottom'
    },
    mdDelay: {
      type: String,
      default: '0'
    }
  },
  data: function data() {
    return {
      active: false,
      parentClass: null,
      transitionOff: false,
      topPosition: false,
      leftPosition: false
    };
  },
  computed: {
    classes: function classes() {
      var cssClasses = {
        'md-active': this.active,
        'md-transition-off': this.transitionOff,
        'md-tooltip-top': this.mdDirection === 'top',
        'md-tooltip-right': this.mdDirection === 'right',
        'md-tooltip-bottom': this.mdDirection === 'bottom',
        'md-tooltip-left': this.mdDirection === 'left'
      };

      if (this.parentClass) {
        cssClasses[this.parentClass] = true;
      }

      return cssClasses;
    },
    style: function style() {
      return {
        'transition-delay': this.mdDelay + 'ms',
        top: this.topPosition + 'px',
        left: this.leftPosition + 'px'
      };
    }
  },
  watch: {
    mdDirection: function mdDirection() {
      this.calculateTooltipPosition();
    }
  },
  methods: {
    removeTooltips: function removeTooltips() {
      if (this.tooltipElement && this.tooltipElement.parentNode) {
        this.tooltipElement.removeEventListener(_transitionEndEventName2.default, this.removeTooltips);
        this.tooltipElement.parentNode.removeChild(this.tooltipElement);
      }
    },
    calculateTooltipPosition: function calculateTooltipPosition() {
      var position = this.parentElement.getBoundingClientRect();
      var cssPosition = {};

      switch (this.mdDirection) {
        case 'top':
          cssPosition.top = position.top - this.$el.offsetHeight;
          cssPosition.left = position.left + position.width / 2;

          break;

        case 'right':
          cssPosition.top = position.top;
          cssPosition.left = position.left + position.width;

          break;

        case 'bottom':
          cssPosition.top = position.bottom;
          cssPosition.left = position.left + position.width / 2;

          break;

        case 'left':
          cssPosition.top = position.top;
          cssPosition.left = position.left - this.$el.offsetWidth;

          break;

        default:
          console.warn('Invalid ' + this.mdDirection + ' option to md-direction option');
      }

      this.topPosition = cssPosition.top;
      this.leftPosition = cssPosition.left;
    },
    generateTooltipClasses: function generateTooltipClasses() {
      var classes = [];

      [].concat((0, _toConsumableArray3.default)(this.parentElement.classList)).forEach((function (cssClass) {
        if (cssClass.indexOf('md-') >= 0 && cssClass !== 'md-active') {
          classes.push(cssClass + '-tooltip');
        }
      }));

      this.parentClass = classes.join(' ');
    },
    open: function open() {
      var _this = this;

      this.removeTooltips();

      this.$nextTick((function () {
        document.body.appendChild(_this.tooltipElement);
        getComputedStyle(_this.tooltipElement).top;
        _this.transitionOff = true;
        _this.generateTooltipClasses();
        _this.calculateTooltipPosition();

        window.setTimeout((function () {
          _this.transitionOff = false;
          _this.active = true;
        }), 10);
      }));
    },
    close: function close() {
      this.active = false;
      this.tooltipElement.removeEventListener(_transitionEndEventName2.default, this.removeTooltips);
      this.tooltipElement.addEventListener(_transitionEndEventName2.default, this.removeTooltips);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick((function () {
      _this2.tooltipElement = _this2.$el;
      _this2.parentElement = _this2.tooltipElement.parentNode;

      _this2.$el.parentNode.removeChild(_this2.$el);

      _this2.parentElement.addEventListener('mouseenter', _this2.open);
      _this2.parentElement.addEventListener('focus', _this2.open);
      _this2.parentElement.addEventListener('mouseleave', _this2.close);
      _this2.parentElement.addEventListener('blur', _this2.close);
    }));
  },
  beforeDestroy: function beforeDestroy() {
    this.active = false;

    this.removeTooltips();

    if (this.parentElement) {
      this.parentElement.removeEventListener('mouseenter', this.open);
      this.parentElement.removeEventListener('focus', this.open);
      this.parentElement.removeEventListener('mouseleave', this.close);
      this.parentElement.removeEventListener('blur', this.close);
    }
  }
}; //
//
//
//
//
//
//
//

module.exports = exports['default'];

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "md-tooltip",
    class: _vm.classes,
    style: (_vm.style)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-afcfcec4", module.exports)
  }
}

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdWhiteframe = __webpack_require__(443);

var _mdWhiteframe2 = _interopRequireDefault(_mdWhiteframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-whiteframe', _mdWhiteframe2.default);
}
module.exports = exports['default'];

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(444)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(445),
  /* template */
  null,
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/marcosmoura/Projects/github/vue-material/src/components/mdWhiteframe/mdWhiteframe.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key.substr(0, 2) !== "__"}))) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-489a6ee4", Component.options)
  } else {
    hotAPI.reload("data-v-489a6ee4", Component.options)
  }
  module.hot.dispose((function (data) {
    disposed = true
  }))
})()}

module.exports = Component.exports


/***/ }),
/* 444 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//

exports.default = {
  name: 'md-whiteframe',
  props: {
    mdElevation: {
      type: [String, Number],
      default: 1
    },
    mdTag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes: function classes() {
      var numberedElevation = parseInt(this.mdElevation, 10);
      var elevationClass = 'md-whiteframe-';

      if (!isNaN(numberedElevation) && typeof numberedElevation === 'number') {
        elevationClass += numberedElevation;
        elevationClass += 'dp';
      } else if (this.mdElevation.indexOf('dp') > -1) {
        elevationClass += this.mdElevation;
      }

      return elevationClass;
    }
  },
  render: function render(createElement) {
    return createElement(this.mdTag, {
      staticClass: 'md-whiteframe',
      class: this.classes
    }, this.$slots.default);
  }
};
module.exports = exports['default'];

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(447);


/***/ }),
/* 447 */
/***/ ((function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = __webpack_require__(80);

var _core2 = _interopRequireDefault(_core);

var _mdAvatar = __webpack_require__(95);

var _mdAvatar2 = _interopRequireDefault(_mdAvatar);

var _mdBackdrop = __webpack_require__(101);

var _mdBackdrop2 = _interopRequireDefault(_mdBackdrop);

var _mdBottomBar = __webpack_require__(106);

var _mdBottomBar2 = _interopRequireDefault(_mdBottomBar);

var _mdButton = __webpack_require__(115);

var _mdButton2 = _interopRequireDefault(_mdButton);

var _mdButtonToggle = __webpack_require__(121);

var _mdButtonToggle2 = _interopRequireDefault(_mdButtonToggle);

var _mdCard = __webpack_require__(127);

var _mdCard2 = _interopRequireDefault(_mdCard);

var _mdCheckbox = __webpack_require__(160);

var _mdCheckbox2 = _interopRequireDefault(_mdCheckbox);

var _mdChips = __webpack_require__(166);

var _mdChips2 = _interopRequireDefault(_mdChips);

var _mdDialog = __webpack_require__(175);

var _mdDialog2 = _interopRequireDefault(_mdDialog);

var _mdDivider = __webpack_require__(199);

var _mdDivider2 = _interopRequireDefault(_mdDivider);

var _mdFile = __webpack_require__(204);

var _mdFile2 = _interopRequireDefault(_mdFile);

var _mdIcon = __webpack_require__(210);

var _mdIcon2 = _interopRequireDefault(_mdIcon);

var _mdImage = __webpack_require__(216);

var _mdImage2 = _interopRequireDefault(_mdImage);

var _mdInputContainer = __webpack_require__(222);

var _mdInputContainer2 = _interopRequireDefault(_mdInputContainer);

var _mdLayout = __webpack_require__(243);

var _mdLayout2 = _interopRequireDefault(_mdLayout);

var _mdList = __webpack_require__(247);

var _mdList2 = _interopRequireDefault(_mdList);

var _mdMenu = __webpack_require__(288);

var _mdMenu2 = _interopRequireDefault(_mdMenu);

var _mdOnboarding = __webpack_require__(302);

var _mdOnboarding2 = _interopRequireDefault(_mdOnboarding);

var _mdProgress = __webpack_require__(311);

var _mdProgress2 = _interopRequireDefault(_mdProgress);

var _mdRadio = __webpack_require__(317);

var _mdRadio2 = _interopRequireDefault(_mdRadio);

var _mdRatingBar = __webpack_require__(323);

var _mdRatingBar2 = _interopRequireDefault(_mdRatingBar);

var _mdSelect = __webpack_require__(329);

var _mdSelect2 = _interopRequireDefault(_mdSelect);

var _mdSidenav = __webpack_require__(338);

var _mdSidenav2 = _interopRequireDefault(_mdSidenav);

var _mdSnackbar = __webpack_require__(344);

var _mdSnackbar2 = _interopRequireDefault(_mdSnackbar);

var _mdSpeedDial = __webpack_require__(352);

var _mdSpeedDial2 = _interopRequireDefault(_mdSpeedDial);

var _mdSpinner = __webpack_require__(358);

var _mdSpinner2 = _interopRequireDefault(_mdSpinner);

var _mdStepper = __webpack_require__(364);

var _mdStepper2 = _interopRequireDefault(_mdStepper);

var _mdSubheader = __webpack_require__(377);

var _mdSubheader2 = _interopRequireDefault(_mdSubheader);

var _mdSwitch = __webpack_require__(383);

var _mdSwitch2 = _interopRequireDefault(_mdSwitch);

var _mdTable = __webpack_require__(389);

var _mdTable2 = _interopRequireDefault(_mdTable);

var _mdTabs = __webpack_require__(419);

var _mdTabs2 = _interopRequireDefault(_mdTabs);

var _mdToolbar = __webpack_require__(431);

var _mdToolbar2 = _interopRequireDefault(_mdToolbar);

var _mdTooltip = __webpack_require__(437);

var _mdTooltip2 = _interopRequireDefault(_mdTooltip);

var _mdWhiteframe = __webpack_require__(442);

var _mdWhiteframe2 = _interopRequireDefault(_mdWhiteframe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  MdCore: _core2.default,
  MdAvatar: _mdAvatar2.default,
  MdBackdrop: _mdBackdrop2.default,
  MdBottomBar: _mdBottomBar2.default,
  MdButton: _mdButton2.default,
  MdButtonToggle: _mdButtonToggle2.default,
  MdCard: _mdCard2.default,
  MdCheckbox: _mdCheckbox2.default,
  MdChips: _mdChips2.default,
  MdDialog: _mdDialog2.default,
  MdDivider: _mdDivider2.default,
  MdFile: _mdFile2.default,
  MdIcon: _mdIcon2.default,
  MdImage: _mdImage2.default,
  MdInputContainer: _mdInputContainer2.default,
  MdLayout: _mdLayout2.default,
  MdList: _mdList2.default,
  MdMenu: _mdMenu2.default,
  MdOnboarding: _mdOnboarding2.default,
  MdProgress: _mdProgress2.default,
  MdRadio: _mdRadio2.default,
  MdRatingBar: _mdRatingBar2.default,
  MdSelect: _mdSelect2.default,
  MdSidenav: _mdSidenav2.default,
  MdSnackbar: _mdSnackbar2.default,
  MdSpeedDial: _mdSpeedDial2.default,
  MdSpinner: _mdSpinner2.default,
  MdStepper: _mdStepper2.default,
  MdSubheader: _mdSubheader2.default,
  MdSwitch: _mdSwitch2.default,
  MdTable: _mdTable2.default,
  MdTabs: _mdTabs2.default,
  MdToolbar: _mdToolbar2.default,
  MdTooltip: _mdTooltip2.default,
  MdWhiteframe: _mdWhiteframe2.default
};

options.install = function (Vue) {
  for (var component in options) {
    var componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }
};

exports.default = options;
module.exports = exports['default'];

/***/ }))
/******/ ]);
}));window.aspenAssets$v1 = window.aspenAssets$v1 || {};
window.aspenAssets$v1['pygments-css'] = {
  value: ('LmhpZ2hsaWdodCAuaGxsIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZjYyB9Ci5oaWdobGlnaHQgIHsgYmFja2dyb3VuZDogI2YwZjBmMDsgfQouaGlnaGxpZ2h0IC5jIHsgY29sb3I6ICM2MGEwYjA7IGZvbnQtc3R5bGU6IGl0YWxpYyB9IC8qIENvbW1lbnQgKi8KLmhpZ2hsaWdodCAuZXJyIHsgYm9yZGVyOiAxcHggc29saWQgI0ZGMDAwMCB9IC8qIEVycm9yICovCi5oaWdobGlnaHQgLmsgeyBjb2xvcjogIzAwNzAyMDsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBLZXl3b3JkICovCi5oaWdobGlnaHQgLm8geyBjb2xvcjogIzY2NjY2NiB9IC8qIE9wZXJhdG9yICovCi5oaWdobGlnaHQgLmNoIHsgY29sb3I6ICM2MGEwYjA7IGZvbnQtc3R5bGU6IGl0YWxpYyB9IC8qIENvbW1lbnQuSGFzaGJhbmcgKi8KLmhpZ2hsaWdodCAuY20geyBjb2xvcjogIzYwYTBiMDsgZm9udC1zdHlsZTogaXRhbGljIH0gLyogQ29tbWVudC5NdWx0aWxpbmUgKi8KLmhpZ2hsaWdodCAuY3AgeyBjb2xvcjogIzAwNzAyMCB9IC8qIENvbW1lbnQuUHJlcHJvYyAqLwouaGlnaGxpZ2h0IC5jcGYgeyBjb2xvcjogIzYwYTBiMDsgZm9udC1zdHlsZTogaXRhbGljIH0gLyogQ29tbWVudC5QcmVwcm9jRmlsZSAqLwouaGlnaGxpZ2h0IC5jMSB7IGNvbG9yOiAjNjBhMGIwOyBmb250LXN0eWxlOiBpdGFsaWMgfSAvKiBDb21tZW50LlNpbmdsZSAqLwouaGlnaGxpZ2h0IC5jcyB7IGNvbG9yOiAjNjBhMGIwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMGYwIH0gLyogQ29tbWVudC5TcGVjaWFsICovCi5oaWdobGlnaHQgLmdkIHsgY29sb3I6ICNBMDAwMDAgfSAvKiBHZW5lcmljLkRlbGV0ZWQgKi8KLmhpZ2hsaWdodCAuZ2UgeyBmb250LXN0eWxlOiBpdGFsaWMgfSAvKiBHZW5lcmljLkVtcGggKi8KLmhpZ2hsaWdodCAuZ3IgeyBjb2xvcjogI0ZGMDAwMCB9IC8qIEdlbmVyaWMuRXJyb3IgKi8KLmhpZ2hsaWdodCAuZ2ggeyBjb2xvcjogIzAwMDA4MDsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBHZW5lcmljLkhlYWRpbmcgKi8KLmhpZ2hsaWdodCAuZ2kgeyBjb2xvcjogIzAwQTAwMCB9IC8qIEdlbmVyaWMuSW5zZXJ0ZWQgKi8KLmhpZ2hsaWdodCAuZ28geyBjb2xvcjogIzg4ODg4OCB9IC8qIEdlbmVyaWMuT3V0cHV0ICovCi5oaWdobGlnaHQgLmdwIHsgY29sb3I6ICNjNjVkMDk7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogR2VuZXJpYy5Qcm9tcHQgKi8KLmhpZ2hsaWdodCAuZ3MgeyBmb250LXdlaWdodDogYm9sZCB9IC8qIEdlbmVyaWMuU3Ryb25nICovCi5oaWdobGlnaHQgLmd1IHsgY29sb3I6ICM4MDAwODA7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogR2VuZXJpYy5TdWJoZWFkaW5nICovCi5oaWdobGlnaHQgLmd0IHsgY29sb3I6ICMwMDQ0REQgfSAvKiBHZW5lcmljLlRyYWNlYmFjayAqLwouaGlnaGxpZ2h0IC5rYyB7IGNvbG9yOiAjMDA3MDIwOyBmb250LXdlaWdodDogYm9sZCB9IC8qIEtleXdvcmQuQ29uc3RhbnQgKi8KLmhpZ2hsaWdodCAua2QgeyBjb2xvcjogIzAwNzAyMDsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBLZXl3b3JkLkRlY2xhcmF0aW9uICovCi5oaWdobGlnaHQgLmtuIHsgY29sb3I6ICMwMDcwMjA7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogS2V5d29yZC5OYW1lc3BhY2UgKi8KLmhpZ2hsaWdodCAua3AgeyBjb2xvcjogIzAwNzAyMCB9IC8qIEtleXdvcmQuUHNldWRvICovCi5oaWdobGlnaHQgLmtyIHsgY29sb3I6ICMwMDcwMjA7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogS2V5d29yZC5SZXNlcnZlZCAqLwouaGlnaGxpZ2h0IC5rdCB7IGNvbG9yOiAjOTAyMDAwIH0gLyogS2V5d29yZC5UeXBlICovCi5oaWdobGlnaHQgLm0geyBjb2xvcjogIzQwYTA3MCB9IC8qIExpdGVyYWwuTnVtYmVyICovCi5oaWdobGlnaHQgLnMgeyBjb2xvcjogIzQwNzBhMCB9IC8qIExpdGVyYWwuU3RyaW5nICovCi5oaWdobGlnaHQgLm5hIHsgY29sb3I6ICM0MDcwYTAgfSAvKiBOYW1lLkF0dHJpYnV0ZSAqLwouaGlnaGxpZ2h0IC5uYiB7IGNvbG9yOiAjMDA3MDIwIH0gLyogTmFtZS5CdWlsdGluICovCi5oaWdobGlnaHQgLm5jIHsgY29sb3I6ICMwZTg0YjU7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogTmFtZS5DbGFzcyAqLwouaGlnaGxpZ2h0IC5ubyB7IGNvbG9yOiAjNjBhZGQ1IH0gLyogTmFtZS5Db25zdGFudCAqLwouaGlnaGxpZ2h0IC5uZCB7IGNvbG9yOiAjNTU1NTU1OyBmb250LXdlaWdodDogYm9sZCB9IC8qIE5hbWUuRGVjb3JhdG9yICovCi5oaWdobGlnaHQgLm5pIHsgY29sb3I6ICNkNTU1Mzc7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogTmFtZS5FbnRpdHkgKi8KLmhpZ2hsaWdodCAubmUgeyBjb2xvcjogIzAwNzAyMCB9IC8qIE5hbWUuRXhjZXB0aW9uICovCi5oaWdobGlnaHQgLm5mIHsgY29sb3I6ICMwNjI4N2UgfSAvKiBOYW1lLkZ1bmN0aW9uICovCi5oaWdobGlnaHQgLm5sIHsgY29sb3I6ICMwMDIwNzA7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogTmFtZS5MYWJlbCAqLwouaGlnaGxpZ2h0IC5ubiB7IGNvbG9yOiAjMGU4NGI1OyBmb250LXdlaWdodDogYm9sZCB9IC8qIE5hbWUuTmFtZXNwYWNlICovCi5oaWdobGlnaHQgLm50IHsgY29sb3I6ICMwNjI4NzM7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogTmFtZS5UYWcgKi8KLmhpZ2hsaWdodCAubnYgeyBjb2xvcjogI2JiNjBkNSB9IC8qIE5hbWUuVmFyaWFibGUgKi8KLmhpZ2hsaWdodCAub3cgeyBjb2xvcjogIzAwNzAyMDsgZm9udC13ZWlnaHQ6IGJvbGQgfSAvKiBPcGVyYXRvci5Xb3JkICovCi5oaWdobGlnaHQgLncgeyBjb2xvcjogI2JiYmJiYiB9IC8qIFRleHQuV2hpdGVzcGFjZSAqLwouaGlnaGxpZ2h0IC5tYiB7IGNvbG9yOiAjNDBhMDcwIH0gLyogTGl0ZXJhbC5OdW1iZXIuQmluICovCi5oaWdobGlnaHQgLm1mIHsgY29sb3I6ICM0MGEwNzAgfSAvKiBMaXRlcmFsLk51bWJlci5GbG9hdCAqLwouaGlnaGxpZ2h0IC5taCB7IGNvbG9yOiAjNDBhMDcwIH0gLyogTGl0ZXJhbC5OdW1iZXIuSGV4ICovCi5oaWdobGlnaHQgLm1pIHsgY29sb3I6ICM0MGEwNzAgfSAvKiBMaXRlcmFsLk51bWJlci5JbnRlZ2VyICovCi5oaWdobGlnaHQgLm1vIHsgY29sb3I6ICM0MGEwNzAgfSAvKiBMaXRlcmFsLk51bWJlci5PY3QgKi8KLmhpZ2hsaWdodCAuc2EgeyBjb2xvcjogIzQwNzBhMCB9IC8qIExpdGVyYWwuU3RyaW5nLkFmZml4ICovCi5oaWdobGlnaHQgLnNiIHsgY29sb3I6ICM0MDcwYTAgfSAvKiBMaXRlcmFsLlN0cmluZy5CYWNrdGljayAqLwouaGlnaGxpZ2h0IC5zYyB7IGNvbG9yOiAjNDA3MGEwIH0gLyogTGl0ZXJhbC5TdHJpbmcuQ2hhciAqLwouaGlnaGxpZ2h0IC5kbCB7IGNvbG9yOiAjNDA3MGEwIH0gLyogTGl0ZXJhbC5TdHJpbmcuRGVsaW1pdGVyICovCi5oaWdobGlnaHQgLnNkIHsgY29sb3I6ICM0MDcwYTA7IGZvbnQtc3R5bGU6IGl0YWxpYyB9IC8qIExpdGVyYWwuU3RyaW5nLkRvYyAqLwouaGlnaGxpZ2h0IC5zMiB7IGNvbG9yOiAjNDA3MGEwIH0gLyogTGl0ZXJhbC5TdHJpbmcuRG91YmxlICovCi5oaWdobGlnaHQgLnNlIHsgY29sb3I6ICM0MDcwYTA7IGZvbnQtd2VpZ2h0OiBib2xkIH0gLyogTGl0ZXJhbC5TdHJpbmcuRXNjYXBlICovCi5oaWdobGlnaHQgLnNoIHsgY29sb3I6ICM0MDcwYTAgfSAvKiBMaXRlcmFsLlN0cmluZy5IZXJlZG9jICovCi5oaWdobGlnaHQgLnNpIHsgY29sb3I6ICM3MGEwZDA7IGZvbnQtc3R5bGU6IGl0YWxpYyB9IC8qIExpdGVyYWwuU3RyaW5nLkludGVycG9sICovCi5oaWdobGlnaHQgLnN4IHsgY29sb3I6ICNjNjVkMDkgfSAvKiBMaXRlcmFsLlN0cmluZy5PdGhlciAqLwouaGlnaGxpZ2h0IC5zciB7IGNvbG9yOiAjMjM1Mzg4IH0gLyogTGl0ZXJhbC5TdHJpbmcuUmVnZXggKi8KLmhpZ2hsaWdodCAuczEgeyBjb2xvcjogIzQwNzBhMCB9IC8qIExpdGVyYWwuU3RyaW5nLlNpbmdsZSAqLwouaGlnaGxpZ2h0IC5zcyB7IGNvbG9yOiAjNTE3OTE4IH0gLyogTGl0ZXJhbC5TdHJpbmcuU3ltYm9sICovCi5oaWdobGlnaHQgLmJwIHsgY29sb3I6ICMwMDcwMjAgfSAvKiBOYW1lLkJ1aWx0aW4uUHNldWRvICovCi5oaWdobGlnaHQgLmZtIHsgY29sb3I6ICMwNjI4N2UgfSAvKiBOYW1lLkZ1bmN0aW9uLk1hZ2ljICovCi5oaWdobGlnaHQgLnZjIHsgY29sb3I6ICNiYjYwZDUgfSAvKiBOYW1lLlZhcmlhYmxlLkNsYXNzICovCi5oaWdobGlnaHQgLnZnIHsgY29sb3I6ICNiYjYwZDUgfSAvKiBOYW1lLlZhcmlhYmxlLkdsb2JhbCAqLwouaGlnaGxpZ2h0IC52aSB7IGNvbG9yOiAjYmI2MGQ1IH0gLyogTmFtZS5WYXJpYWJsZS5JbnN0YW5jZSAqLwouaGlnaGxpZ2h0IC52bSB7IGNvbG9yOiAjYmI2MGQ1IH0gLyogTmFtZS5WYXJpYWJsZS5NYWdpYyAqLwouaGlnaGxpZ2h0IC5pbCB7IGNvbG9yOiAjNDBhMDcwIH0gLyogTGl0ZXJhbC5OdW1iZXIuSW50ZWdlci5Mb25nICovCg=='),
  globalLoad: (  function (data) {
    var st = document.createElement('style');
    st.appendChild(document.createTextNode(data));
    document.head.appendChild(st);
  }
  ),
  globalLoadCompleted: false,
  kind: 'string'
};
      
window.aspenAssets$v1['vue-material-css'] = {
  value: ('LyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLWluay1yaXBwbGUgewogIHBvaW50ZXItZXZlbnRzOiBub25lOwogIG92ZXJmbG93OiBoaWRkZW47CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogMDsKICByaWdodDogMDsKICBib3R0b206IDA7CiAgbGVmdDogMDsKICAtd2Via2l0LW1hc2staW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHdoaXRlIDEwMCUsIGJsYWNrIDEwMCUpOwogIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpOwp9Ci5tZC1yaXBwbGUgewogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7CiAgYm9yZGVyLXJhZGl1czogNTAlOwogIG9wYWNpdHk6IC4yOwogIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWigwKTsKICB0cmFuc2l0aW9uOiBub25lOwogIHdpbGwtY2hhbmdlOiBiYWNrZ3JvdW5kLWNvbG9yLCBvcGFjaXR5LCB0cmFuc2Zvcm0sIHdpZHRoLCBoZWlnaHQsIHRvcCwgbGVmdDsKfQoubWQtcmlwcGxlLm1kLWFjdGl2ZSB7CiAgICBhbmltYXRpb246IHJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSBmb3J3YXJkczsKfQoubWQtcmlwcGxlLm1kLWFjdGl2ZS5tZC1mYWRlb3V0IHsKICAgICAgb3BhY2l0eTogMCAhaW1wb3J0YW50OwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjZzOwp9CkBrZXlmcmFtZXMgcmlwcGxlIHsKdG8gewogICAgdHJhbnNmb3JtOiBzY2FsZSgyLjIpIHRyYW5zbGF0ZVooMCk7Cn0KfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiAgVGV4dCBhbmQgVGl0bGVzCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCi5tZC1jYXB0aW9uIHsKICBmb250LXNpemU6IDEycHg7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBsZXR0ZXItc3BhY2luZzogLjAyZW07CiAgbGluZS1oZWlnaHQ6IDE3cHg7IH0KCi5tZC1ib2R5LTEsIGJvZHkgewogIGZvbnQtc2l6ZTogMTRweDsKICBmb250LXdlaWdodDogNDAwOwogIGxldHRlci1zcGFjaW5nOiAuMDFlbTsKICBsaW5lLWhlaWdodDogMjBweDsgfQoKLm1kLWJvZHktMiB7CiAgZm9udC1zaXplOiAxNHB4OwogIGZvbnQtd2VpZ2h0OiA1MDA7CiAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtOwogIGxpbmUtaGVpZ2h0OiAyNHB4OyB9CgoubWQtc3ViaGVhZGluZyB7CiAgZm9udC1zaXplOiAxNnB4OwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtOwogIGxpbmUtaGVpZ2h0OiAyNHB4OyB9CgoubWQtdGl0bGUgewogIGZvbnQtc2l6ZTogMjBweDsKICBmb250LXdlaWdodDogNTAwOwogIGxldHRlci1zcGFjaW5nOiAuMDA1ZW07CiAgbGluZS1oZWlnaHQ6IDI2cHg7IH0KCi5tZC1oZWFkbGluZSB7CiAgZm9udC1zaXplOiAyNHB4OwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgbGV0dGVyLXNwYWNpbmc6IDA7CiAgbGluZS1oZWlnaHQ6IDMycHg7IH0KCi5tZC1kaXNwbGF5LTEgewogIGZvbnQtc2l6ZTogMzRweDsKICBmb250LXdlaWdodDogNDAwOwogIGxldHRlci1zcGFjaW5nOiAwOwogIGxpbmUtaGVpZ2h0OiA0MHB4OyB9CgoubWQtZGlzcGxheS0yIHsKICBmb250LXNpemU6IDQ1cHg7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBsZXR0ZXItc3BhY2luZzogMDsKICBsaW5lLWhlaWdodDogNDhweDsgfQoKLm1kLWRpc3BsYXktMyB7CiAgZm9udC1zaXplOiA1NnB4OwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgbGV0dGVyLXNwYWNpbmc6IC0uMDA1ZW07CiAgbGluZS1oZWlnaHQ6IDU4cHg7IH0KCi5tZC1kaXNwbGF5LTQgewogIGZvbnQtc2l6ZTogMTEycHg7CiAgZm9udC13ZWlnaHQ6IDMwMDsKICBsZXR0ZXItc3BhY2luZzogLS4wMWVtOwogIGxpbmUtaGVpZ2h0OiAxMTJweDsgfQoKLyogIExpbmtzICYgQnV0dG9ucwogICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwphOm5vdCgubWQtYnV0dG9uKTpub3QoLm1kLWJvdHRvbS1iYXItaXRlbSkgewogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfQogIGE6bm90KC5tZC1idXR0b24pOm5vdCgubWQtYm90dG9tLWJhci1pdGVtKTpob3ZlciB7CiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfQoKYnV0dG9uOmZvY3VzIHsKICBvdXRsaW5lOiBub25lOyB9CgovKiAgU3RydWN0dXJlCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCmh0bWwgewogIGhlaWdodDogMTAwJTsKICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9CiAgaHRtbCAqLAogIGh0bWwgKjpiZWZvcmUsCiAgaHRtbCAqOmFmdGVyIHsKICAgIGJveC1zaXppbmc6IGluaGVyaXQ7IH0KCmJvZHkgewogIG1pbi1oZWlnaHQ6IDEwMCU7CiAgbWFyZ2luOiAwOwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OwogIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsKICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7CiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsKICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsKICBmb250LWZhbWlseTogUm9ib3RvLCAiTm90byBTYW5zIiwgTm90bywgc2Fucy1zZXJpZjsgfQoKLyogIEZsdWlkIE1lZGlhCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCnVsOm5vdCgubWQtbGlzdCkgPiBsaSArIGxpIHsKICBtYXJnaW4tdG9wOiA4cHg7IH0KCi8qICBGbHVpZCBNZWRpYQogICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwphdWRpbywKaW1nLApzdmcsCm9iamVjdCwKZW1iZWQsCmNhbnZhcywKdmlkZW8sCmlmcmFtZSB7CiAgbWF4LXdpZHRoOiAxMDAlOwogIGZvbnQtc3R5bGU6IGl0YWxpYzsKICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9CiAgYXVkaW86bm90KC5tZC1pbWFnZSksCiAgaW1nOm5vdCgubWQtaW1hZ2UpLAogIHN2Zzpub3QoLm1kLWltYWdlKSwKICBvYmplY3Q6bm90KC5tZC1pbWFnZSksCiAgZW1iZWQ6bm90KC5tZC1pbWFnZSksCiAgY2FudmFzOm5vdCgubWQtaW1hZ2UpLAogIHZpZGVvOm5vdCgubWQtaW1hZ2UpLAogIGlmcmFtZTpub3QoLm1kLWltYWdlKSB7CiAgICBoZWlnaHQ6IGF1dG87IH0KCi8qICBTdXBwcmVzcyB0aGUgZm9jdXMgb3V0bGluZSBvbiBsaW5rcyB0aGF0IGNhbm5vdCBiZSBhY2Nlc3NlZCB2aWEga2V5Ym9hcmQuCiAgICBUaGlzIHByZXZlbnRzIGFuIHVud2FudGVkIGZvY3VzIG91dGxpbmUgZnJvbSBhcHBlYXJpbmcgYXJvdW5kIGVsZW1lbnRzCiAgICB0aGF0IG1pZ2h0IHN0aWxsIHJlc3BvbmQgdG8gcG9pbnRlciBldmVudHMuCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovClt0YWJpbmRleD0iLTEiXTpmb2N1cyB7CiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50OyB9CgovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciwKLm1kLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyIHsKICB3aWR0aDogMTBweDsKICBoZWlnaHQ6IDEwcHg7CiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7CiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpOwogIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7IH0KICAubWQtc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciwKICAubWQtc2Nyb2xsYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIgewogICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNTQpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMDM4KTsKICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wODcpOyB9CgoubWQtc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24sCi5tZC1zY3JvbGxiYXIgOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24gewogIGRpc3BsYXk6IG5vbmU7IH0KCi5tZC1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciwKLm1kLXNjcm9sbGJhciA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7CiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH0KCi5tZC1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLAoubWQtc2Nyb2xsYmFyIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgewogIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7CiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNTQpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMDg3KTsKICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7IH0KCi8qICBUZXh0IGFuZCBUaXRsZXMKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KLm1kLWNhcHRpb24gewogIGZvbnQtc2l6ZTogMTJweDsKICBmb250LXdlaWdodDogNDAwOwogIGxldHRlci1zcGFjaW5nOiAuMDJlbTsKICBsaW5lLWhlaWdodDogMTdweDsgfQoKLm1kLWJvZHktMSwgYm9keSB7CiAgZm9udC1zaXplOiAxNHB4OwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgbGV0dGVyLXNwYWNpbmc6IC4wMWVtOwogIGxpbmUtaGVpZ2h0OiAyMHB4OyB9CgoubWQtYm9keS0yIHsKICBmb250LXNpemU6IDE0cHg7CiAgZm9udC13ZWlnaHQ6IDUwMDsKICBsZXR0ZXItc3BhY2luZzogLjAxZW07CiAgbGluZS1oZWlnaHQ6IDI0cHg7IH0KCi5tZC1zdWJoZWFkaW5nIHsKICBmb250LXNpemU6IDE2cHg7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBsZXR0ZXItc3BhY2luZzogLjAxZW07CiAgbGluZS1oZWlnaHQ6IDI0cHg7IH0KCi5tZC10aXRsZSB7CiAgZm9udC1zaXplOiAyMHB4OwogIGZvbnQtd2VpZ2h0OiA1MDA7CiAgbGV0dGVyLXNwYWNpbmc6IC4wMDVlbTsKICBsaW5lLWhlaWdodDogMjZweDsgfQoKLm1kLWhlYWRsaW5lIHsKICBmb250LXNpemU6IDI0cHg7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBsZXR0ZXItc3BhY2luZzogMDsKICBsaW5lLWhlaWdodDogMzJweDsgfQoKLm1kLWRpc3BsYXktMSB7CiAgZm9udC1zaXplOiAzNHB4OwogIGZvbnQtd2VpZ2h0OiA0MDA7CiAgbGV0dGVyLXNwYWNpbmc6IDA7CiAgbGluZS1oZWlnaHQ6IDQwcHg7IH0KCi5tZC1kaXNwbGF5LTIgewogIGZvbnQtc2l6ZTogNDVweDsKICBmb250LXdlaWdodDogNDAwOwogIGxldHRlci1zcGFjaW5nOiAwOwogIGxpbmUtaGVpZ2h0OiA0OHB4OyB9CgoubWQtZGlzcGxheS0zIHsKICBmb250LXNpemU6IDU2cHg7CiAgZm9udC13ZWlnaHQ6IDQwMDsKICBsZXR0ZXItc3BhY2luZzogLS4wMDVlbTsKICBsaW5lLWhlaWdodDogNThweDsgfQoKLm1kLWRpc3BsYXktNCB7CiAgZm9udC1zaXplOiAxMTJweDsKICBmb250LXdlaWdodDogMzAwOwogIGxldHRlci1zcGFjaW5nOiAtLjAxZW07CiAgbGluZS1oZWlnaHQ6IDExMnB4OyB9CgovKiAgTGlua3MgJiBCdXR0b25zCiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCmE6bm90KC5tZC1idXR0b24pOm5vdCgubWQtYm90dG9tLWJhci1pdGVtKSB7CiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9CiAgYTpub3QoLm1kLWJ1dHRvbik6bm90KC5tZC1ib3R0b20tYmFyLWl0ZW0pOmhvdmVyIHsKICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9CgpidXR0b246Zm9jdXMgewogIG91dGxpbmU6IG5vbmU7IH0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLWF2YXRhciB7CiAgd2lkdGg6IDQwcHg7CiAgbWluLXdpZHRoOiA0MHB4OwogIGhlaWdodDogNDBweDsKICBtaW4taGVpZ2h0OiA0MHB4OwogIG1hcmdpbjogYXV0bzsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICBib3JkZXItcmFkaXVzOiA0MHB4OwogIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Cn0KLm1kLWF2YXRhci5tZC1sYXJnZSB7CiAgICB3aWR0aDogNjRweDsKICAgIG1pbi13aWR0aDogNjRweDsKICAgIGhlaWdodDogNjRweDsKICAgIG1pbi1oZWlnaHQ6IDY0cHg7CiAgICBib3JkZXItcmFkaXVzOiA2NHB4Owp9Ci5tZC1hdmF0YXIubWQtbGFyZ2UgLm1kLWljb24gewogICAgICB3aWR0aDogNDBweDsKICAgICAgbWluLXdpZHRoOiA0MHB4OwogICAgICBoZWlnaHQ6IDQwcHg7CiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7CiAgICAgIGZvbnQtc2l6ZTogNDBweDsKICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7Cn0KLm1kLWF2YXRhci5tZC1hdmF0YXItaWNvbiB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOwp9Ci5tZC1hdmF0YXIubWQtYXZhdGFyLWljb24gLm1kLWljb24gewogICAgICBjb2xvcjogI2ZmZjsKfQoubWQtYXZhdGFyIC5tZC1pY29uIHsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHRvcDogNTAlOwogICAgbGVmdDogNTAlOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Cn0KLm1kLWF2YXRhciBpbWcgewogICAgd2lkdGg6IDEwMCU7CiAgICBoZWlnaHQ6IDEwMCU7CiAgICBkaXNwbGF5OiBibG9jazsKfQoubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxlIHsKICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKfQoubWQtYXZhdGFyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGUubWQtYWN0aXZlIHsKICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOXM7Cn0KLm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtdG9wIHsKICBtYXJnaW4tdG9wOiAtOHB4Owp9Ci5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0IHsKICBtYXJnaW4tbGVmdDogOHB4Owp9Ci5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbSB7CiAgbWFyZ2luLXRvcDogOHB4Owp9Ci5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWxlZnQgewogIG1hcmdpbi1sZWZ0OiAtOHB4Owp9Ci8qIENvbW1vbiAqLwovKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovCi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi5tZC1iYWNrZHJvcCB7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogMDsKICByaWdodDogMDsKICBib3R0b206IDA7CiAgbGVmdDogMDsKICB6LWluZGV4OiA5OTsKICBwb2ludGVyLWV2ZW50czogbm9uZTsKICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOwogIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7CiAgb3BhY2l0eTogMDsKICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7Cn0KLm1kLWJhY2tkcm9wLm1kLWFjdGl2ZSB7CiAgICBvcGFjaXR5OiAxOwogICAgcG9pbnRlci1ldmVudHM6IGF1dG87Cn0KLm1kLWJhY2tkcm9wLm1kLXRyYW5zcGFyZW50IHsKICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDUpOwp9Ci8qIENvbW1vbiAqLwovKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovCi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi5tZC1ib3R0b20tYmFyIHsKICB3aWR0aDogMTAwJTsKICBtaW4td2lkdGg6IDEwMCU7CiAgaGVpZ2h0OiA1NnB4OwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwogIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC1ib3R0b20tYmFyLWl0ZW0gewogIG1heC13aWR0aDogMTY4cHg7CiAgbWluLXdpZHRoOiA4MHB4OwogIGhlaWdodDogMTAwJTsKICBwYWRkaW5nOiA4cHggMTJweCAxMHB4OwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLW1zLWZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDsKICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwOwogIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTsKICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogIC1tcy1mbGV4OiAxOwogICAgICBmbGV4OiAxOwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICBjdXJzb3I6IHBvaW50ZXI7CiAgYm9yZGVyOiBub25lOwogIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7CiAgY29sb3I6IGN1cnJlbnRDb2xvcjsKICBmb250LWZhbWlseTogaW5oZXJpdDsKICBmb250LXNpemU6IDE0cHg7CiAgbGluZS1oZWlnaHQ6IDFlbTsKICB0ZXh0LWRlY29yYXRpb246IG5vbmU7Cn0KLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgewogICAgcGFkZGluZy10b3A6IDZweDsKfQoubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dCB7CiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7Cn0KLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHQsCiAgICAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtaWNvbiB7CiAgICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7Cn0KLm1kLWJvdHRvbS1iYXItaXRlbVtkaXNhYmxlZF0gewogICAgb3BhY2l0eTogLjM4Owp9Ci5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0gewogICAgbWluLXdpZHRoOiA1NnB4OwogICAgbWF4LXdpZHRoOiA5NnB4OwogICAgcG9zaXRpb246IHN0YXRpYzsKICAgIC1tcy1mbGV4OiAxIDEgMzJweDsKICAgICAgICBmbGV4OiAxIDEgMzJweDsKICAgIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmbGV4LCBtaW4td2lkdGgsIG1heC13aWR0aDsKICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGZsZXgsIG1pbi13aWR0aCwgbWF4LXdpZHRoLCAtbXMtZmxleDsKfQoubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29uIHsKICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA4cHgsIDApOwp9Ci5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0gLm1kLXRleHQgewogICAgICBvcGFjaXR5OiAwOwogICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZTNkKDAsIDZweCwgMCk7Cn0KLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgewogICAgICBtaW4td2lkdGg6IDk2cHg7CiAgICAgIG1heC13aWR0aDogMTY4cHg7CiAgICAgIC1tcy1mbGV4OiAxIDEgNzJweDsKICAgICAgICAgIGZsZXg6IDEgMSA3MnB4Owp9Ci5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29uLAogICAgICAubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dCB7CiAgICAgICAgb3BhY2l0eTogMTsKfQoubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtaWNvbiB7CiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTsKfQoubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dCB7CiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLCAycHgsIDApOwp9Ci5tZC1ib3R0b20tYmFyLWl0ZW0gLm1kLXRleHQgewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1NzEpIHRyYW5zbGF0ZVkoMnB4KTsKICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBjb2xvciAwLjE1cyBsaW5lYXIsIG9wYWNpdHkgMC4xNXMgbGluZWFyOwp9Ci5tZC1ib3R0b20tYmFyLWl0ZW0gLm1kLWljb24gewogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGNvbG9yIDAuMTVzIGxpbmVhcjsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtYnV0dG9uIHsKICBtaW4td2lkdGg6IDg4cHg7CiAgbWluLWhlaWdodDogMzZweDsKICBtYXJnaW46IDZweCA4cHg7CiAgcGFkZGluZzogMCAxNnB4OwogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOwogIGN1cnNvcjogcG9pbnRlcjsKICBvdXRsaW5lOiBub25lOwogIGJhY2tncm91bmQ6IG5vbmU7CiAgYm9yZGVyOiAwOwogIGJvcmRlci1yYWRpdXM6IDJweDsKICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICBjb2xvcjogY3VycmVudENvbG9yOwogIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogIGZvbnQtc2l6ZTogMTRweDsKICBmb250LXN0eWxlOiBpbmhlcml0OwogIGZvbnQtdmFyaWFudDogaW5oZXJpdDsKICBmb250LXdlaWdodDogNTAwOwogIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OwogIGxpbmUtaGVpZ2h0OiAzNnB4OwogIHRleHQtYWxpZ246IGNlbnRlcjsKICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICB2ZXJ0aWNhbC1hbGlnbjogdG9wOwogIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLm1kLWJ1dHRvbjpmb2N1cyB7CiAgICBvdXRsaW5lOiBub25lOwp9Ci5tZC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIgewogICAgYm9yZGVyOiAwOwp9Ci5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdCgubWQtcmFpc2VkKSB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7CiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7Cn0KLm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkubWQtcmFpc2VkIHsKICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLWJ1dHRvbjphY3RpdmU6bm90KFtkaXNhYmxlZF0pIHsKICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC40KTsKfQoubWQtYnV0dG9uLm1kLXJhaXNlZDpub3QoW2Rpc2FibGVkXSkgewogICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLWJ1dHRvbi5tZC1kZW5zZSB7CiAgICBtaW4taGVpZ2h0OiAzMnB4OwogICAgbGluZS1oZWlnaHQ6IDMycHg7CiAgICBmb250LXNpemU6IDEzcHg7Cn0KLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaWNvbiwgLm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWljb24gewogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgdG9wOiAxcHg7CiAgICByaWdodDogMDsKICAgIGJvdHRvbTogMDsKICAgIGxlZnQ6IDA7Cn0KLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiB7CiAgICB3aWR0aDogNDBweDsKICAgIG1pbi13aWR0aDogNDBweDsKICAgIGhlaWdodDogNDBweDsKICAgIG1hcmdpbjogMCA2cHg7CiAgICBwYWRkaW5nOiA4cHg7CiAgICBib3JkZXItcmFkaXVzOiA1MCU7CiAgICBsaW5lLWhlaWdodDogMjRweDsKfQoubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7Cn0KLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbi5tZC1kZW5zZSB7CiAgICAgIHdpZHRoOiAzMnB4OwogICAgICBtaW4td2lkdGg6IDMycHg7CiAgICAgIGhlaWdodDogMzJweDsKICAgICAgbWluLWhlaWdodDogMzJweDsKICAgICAgcGFkZGluZzogNHB4OwogICAgICBsaW5lLWhlaWdodDogMzJweDsKfQoubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pbmstcmlwcGxlIHsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwp9Ci5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZSB7CiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7CiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDsKICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDsKICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7Cn0KLm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtcmlwcGxlLm1kLWFjdGl2ZSB7CiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjlzOwp9Ci5tZC1idXR0b24ubWQtZmFiIHsKICAgIHdpZHRoOiA1NnB4OwogICAgaGVpZ2h0OiA1NnB4OwogICAgcGFkZGluZzogMDsKICAgIG1pbi13aWR0aDogMDsKICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKICAgIGJvcmRlci1yYWRpdXM6IDU2cHg7CiAgICBsaW5lLWhlaWdodDogNTZweDsKICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3csIHRyYW5zZm9ybTsKfQoubWQtYnV0dG9uLm1kLWZhYjpob3ZlciwgLm1kLWJ1dHRvbi5tZC1mYWI6Zm9jdXMgewogICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLWJ1dHRvbi5tZC1mYWIubWQtbWluaSB7CiAgICAgIHdpZHRoOiA0MHB4OwogICAgICBoZWlnaHQ6IDQwcHg7CiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4Owp9Ci5tZC1idXR0b24ubWQtZmFiIC5tZC1pbmstcmlwcGxlIHsKICAgICAgYm9yZGVyLXJhZGl1czogNTZweDsKfQoubWQtYnV0dG9uW2Rpc2FibGVkXSB7CiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsKICAgIGN1cnNvcjogZGVmYXVsdDsKICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwp9Ci5tZC1idXR0b25bZGlzYWJsZWRdLm1kLXJhaXNlZCwgLm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtZmFiIHsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsKfQoubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1mYWIgewogICAgICBib3gtc2hhZG93OiBub25lOwp9Ci5tZC1idXR0b246YWZ0ZXIgewogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7Cn0KLm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZSB7CiAgICBib3JkZXItcmFkaXVzOiAycHg7CiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OwogICAgb3ZlcmZsb3c6IGhpZGRlbjsKfQoubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pY29uLAoubWQtYnV0dG9uLm1kLWZhYiAubWQtaWNvbiB7CiAgY29sb3I6IGluaGVyaXQ7CiAgZGlzcGxheTogYmxvY2s7Cn0KLm1kLWZhYi5tZC1mYWItdG9wLWxlZnQsIC5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIsIC5tZC1mYWIubWQtZmFiLXRvcC1yaWdodCwgLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQsIC5tZC1mYWIubWQtZmFiLWJvdHRvbS1jZW50ZXIsIC5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCwKLm1kLXNwZWVkLWRpYWwubWQtZmFiLXRvcC1sZWZ0LAoubWQtc3BlZWQtZGlhbC5tZC1mYWItdG9wLWNlbnRlciwKLm1kLXNwZWVkLWRpYWwubWQtZmFiLXRvcC1yaWdodCwKLm1kLXNwZWVkLWRpYWwubWQtZmFiLWJvdHRvbS1sZWZ0LAoubWQtc3BlZWQtZGlhbC5tZC1mYWItYm90dG9tLWNlbnRlciwKLm1kLXNwZWVkLWRpYWwubWQtZmFiLWJvdHRvbS1yaWdodCB7CiAgbWFyZ2luOiAwOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB6LWluZGV4OiAxMDsKfQoubWQtZmFiLm1kLWZhYi10b3AtbGVmdCwKLm1kLXNwZWVkLWRpYWwubWQtZmFiLXRvcC1sZWZ0IHsKICB0b3A6IDI0cHg7CiAgbGVmdDogMjRweDsKfQoubWQtZmFiLm1kLWZhYi10b3AtY2VudGVyLAoubWQtc3BlZWQtZGlhbC5tZC1mYWItdG9wLWNlbnRlciB7CiAgdG9wOiAyNHB4OwogIGxlZnQ6IDUwJTsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7Cn0KLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0LAoubWQtc3BlZWQtZGlhbC5tZC1mYWItdG9wLXJpZ2h0IHsKICB0b3A6IDI0cHg7CiAgcmlnaHQ6IDI0cHg7Cn0KLm1kLWZhYi5tZC1mYWItYm90dG9tLWxlZnQsCi5tZC1zcGVlZC1kaWFsLm1kLWZhYi1ib3R0b20tbGVmdCB7CiAgYm90dG9tOiAyNHB4OwogIGxlZnQ6IDI0cHg7Cn0KLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlciwKLm1kLXNwZWVkLWRpYWwubWQtZmFiLWJvdHRvbS1jZW50ZXIgewogIGJvdHRvbTogMjRweDsKICBsZWZ0OiA1MCU7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOwp9Ci5tZC1mYWIubWQtZmFiLWJvdHRvbS1yaWdodCwKLm1kLXNwZWVkLWRpYWwubWQtZmFiLWJvdHRvbS1yaWdodCB7CiAgcmlnaHQ6IDI0cHg7CiAgYm90dG9tOiAyNHB4Owp9Ci5tZC1idXR0b24tdG9vbHRpcC5tZC10b29sdGlwLXRvcCB7CiAgbWFyZ2luLXRvcDogLThweDsKfQoubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1yaWdodCB7CiAgbWFyZ2luLWxlZnQ6IDhweDsKfQoubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20gewogIG1hcmdpbi10b3A6IDhweDsKfQoubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0IHsKICBtYXJnaW4tbGVmdDogLThweDsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtYnV0dG9uLXRvZ2dsZSB7CiAgd2lkdGg6IGF1dG87CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKfQoubWQtYnV0dG9uLXRvZ2dsZSA+IC5tZC1idXR0b24gewogICAgbWFyZ2luOiAwOwogICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgIGJvcmRlci13aWR0aDogMXB4IDAgMXB4IDFweDsKICAgIGJvcmRlci1yYWRpdXM6IDA7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsKICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7Cn0KLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uOmZpcnN0LWNoaWxkIHsKICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7Cn0KLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uOmxhc3QtY2hpbGQgewogICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDsKICAgICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7Cn0KLm1kLWJ1dHRvbi10b2dnbGUgPiAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7CiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOwp9Ci5tZC1idXR0b24tdG9nZ2xlID4gLm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXI6bm90KC5tZC10b2dnbGUpOm5vdCgubWQtcmFpc2VkKSB7CiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MywgMTUzLCAwLjIpOwogICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKfQoubWQtYnV0dG9uLXRvZ2dsZSA+IC5tZC1idXR0b24gLm1kLWluay1yaXBwbGUgewogICAgICBib3JkZXItcmFkaXVzOiAycHg7Cn0KLm1kLWJ1dHRvbi10b2dnbGUubWQtcmFpc2VkIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSkgewogICAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogSW1hZ2UgYXNwZWN0IHJhdGlvIGNhbGN1bGF0b3IgKi8KLyogUmVzcG9uc2l2ZSBicmVha3BvaW50cyAqLwoubWQtY2FyZCB7CiAgb3ZlcmZsb3c6IGF1dG87CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgei1pbmRleDogMTsKICBib3JkZXItcmFkaXVzOiAycHg7CiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLWNhcmQubWQtd2l0aC1ob3ZlciB7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3c7Cn0KLm1kLWNhcmQubWQtd2l0aC1ob3Zlcjpob3ZlciB7CiAgICAgIHotaW5kZXg6IDI7CiAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYSB7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOSB7CiAgICAgIG92ZXJmbG93OiBoaWRkZW47Cn0KLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOTpiZWZvcmUgewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7CiAgICAgICAgZGlzcGxheTogYmxvY2s7CiAgICAgICAgY29udGVudDogIiAiOwp9Ci5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTkgaW1nIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgdG9wOiA1MCU7CiAgICAgICAgcmlnaHQ6IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtNC0zIHsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTM6YmVmb3JlIHsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBwYWRkaW5nLXRvcDogNzUlOwogICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgIGNvbnRlbnQ6ICIgIjsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTMgaW1nIHsKICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgdG9wOiA1MCU7CiAgICAgICAgcmlnaHQ6IDA7CiAgICAgICAgbGVmdDogMDsKICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xIHsKICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xLTE6YmVmb3JlIHsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICBjb250ZW50OiAiICI7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xIGltZyB7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHRvcDogNTAlOwogICAgICAgIHJpZ2h0OiAwOwogICAgICAgIGxlZnQ6IDA7CiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOwp9Ci5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhICsgLm1kLWNhcmQtaGVhZGVyIHsKICAgICAgcGFkZGluZy10b3A6IDI0cHg7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEgKyAubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGQgewogICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYSBpbWcgewogICAgICB3aWR0aDogMTAwJTsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgewogICAgcGFkZGluZzogMTZweDsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQgPiAubWQtdGl0bGU6Zmlyc3QtY2hpbGQsCiAgICAubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQgPiAubWQtY2FyZC1oZWFkZXItdGV4dCA+IC5tZC10aXRsZTpmaXJzdC1jaGlsZCB7CiAgICAgIG1hcmdpbi10b3A6IDhweDsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6bGFzdC1jaGlsZCB7CiAgICAgIG1hcmdpbi1ib3R0b206IDhweDsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIubWQtY2FyZC1oZWFkZXItZmxleCB7CiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5OwogICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwp9Ci5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciArIC5tZC1jYXJkLWNvbnRlbnQgewogICAgICBwYWRkaW5nLXRvcDogMDsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgKyAubWQtY2FyZC1hY3Rpb25zOm5vdCg6bGFzdC1jaGlsZCkgewogICAgICBwYWRkaW5nOiAwIDhweDsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWF2YXRhciB7CiAgICAgIG1hcmdpbi1yaWdodDogMTZweDsKICAgICAgZmxvYXQ6IGxlZnQ7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXIgfiAubWQtdGl0bGUgewogICAgICAgIGZvbnQtc2l6ZTogMTRweDsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWF2YXRhciB+IC5tZC10aXRsZSwKICAgICAgLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXIgfiAubWQtc3ViaGVhZCB7CiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgICAgICBsaW5lLWhlaWdodDogMjBweDsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbiB7CiAgICAgIG1hcmdpbjogMDsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWJ1dHRvbjpsYXN0LWNoaWxkIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IC00cHg7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1idXR0b24gKyAubWQtYnV0dG9uIHsKICAgICAgICBtYXJnaW4tbGVmdDogOHB4Owp9Ci5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1oZWFkZXItdGV4dCB7CiAgICAgIC1tcy1mbGV4OiAxOwogICAgICAgICAgZmxleDogMTsKfQoubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWEgewogICAgICB3aWR0aDogODBweDsKICAgICAgLW1zLWZsZXg6IDAgMCA4MHB4OwogICAgICAgICAgZmxleDogMCAwIDgwcHg7CiAgICAgIGhlaWdodDogODBweDsKICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLW1lZGl1bSB7CiAgICAgICAgd2lkdGg6IDEyMHB4OwogICAgICAgIC1tcy1mbGV4OiAwIDAgMTIwcHg7CiAgICAgICAgICAgIGZsZXg6IDAgMCAxMjBweDsKICAgICAgICBoZWlnaHQ6IDEyMHB4Owp9Ci5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYS5tZC1iaWcgewogICAgICAgIHdpZHRoOiAxNjBweDsKICAgICAgICAtbXMtZmxleDogMCAwIDE2MHB4OwogICAgICAgICAgICBmbGV4OiAwIDAgMTYwcHg7CiAgICAgICAgaGVpZ2h0OiAxNjBweDsKfQoubWQtY2FyZCAubWQtc3ViaGVhZCwKICAubWQtY2FyZCAubWQtdGl0bGUsCiAgLm1kLWNhcmQgLm1kLXN1YmhlYWRpbmcgewogICAgbWFyZ2luOiAwOwogICAgZm9udC13ZWlnaHQ6IDQwMDsKfQoubWQtY2FyZCAubWQtc3ViaGVhZCB7CiAgICBvcGFjaXR5OiAuNTQ7CiAgICBmb250LXNpemU6IDE0cHg7CiAgICBsZXR0ZXItc3BhY2luZzogLjAxZW07CiAgICBsaW5lLWhlaWdodDogMjBweDsKfQoubWQtY2FyZCAubWQtc3ViaGVhZCArIC5tZC10aXRsZSB7CiAgICAgIG1hcmdpbi10b3A6IDRweDsKfQoubWQtY2FyZCAubWQtdGl0bGUgewogICAgZm9udC1zaXplOiAyNHB4OwogICAgbGV0dGVyLXNwYWNpbmc6IDA7CiAgICBsaW5lLWhlaWdodDogMzJweDsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIHsKICAgIHBhZGRpbmc6IDE2cHg7CiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLW1lZGlhIHsKICAgICAgbWF4LXdpZHRoOiAyNDBweDsKICAgICAgbWF4LWhlaWdodDogMjQwcHg7CiAgICAgIC1tcy1mbGV4OiAxOwogICAgICAgICAgZmxleDogMTsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLWFjdGlvbnMgewogICAgICBtYXJnaW4tbGVmdDogMTZweDsKICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsKICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsKICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24gKyAubWQtYnV0dG9uIHsKICAgICAgICBtYXJnaW46IDhweCAwIDA7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtY29udGVudCB7CiAgICBwYWRkaW5nOiAxNnB4OwogICAgZm9udC1zaXplOiAxNHB4OwogICAgbGluZS1oZWlnaHQ6IDIycHg7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtY29udGVudDpsYXN0LWNoaWxkIHsKICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyB7CiAgICBwYWRkaW5nOiA4cHg7CiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICAtbXMtZmxleC1wYWNrOiBlbmQ7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKfQoubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24gewogICAgICBtYXJnaW46IDA7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9uOmZpcnN0LWNoaWxkIHsKICAgICAgICBtYXJnaW4tbGVmdDogMDsKfQoubWQtY2FyZCAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b246bGFzdC1jaGlsZCB7CiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOwp9Ci5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbiArIC5tZC1idXR0b24gewogICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtYXJlYSB7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7Cn0KLm1kLWNhcmQgPiAubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCkgewogICAgcG9zaXRpb246IHJlbGF0aXZlOwp9Ci5tZC1jYXJkID4gLm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpOmFmdGVyIHsKICAgICAgaGVpZ2h0OiAxcHg7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgYm90dG9tOiAwOwogICAgICBjb250ZW50OiAiICI7Cn0KLm1kLWNhcmQgPiAubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5tZC1pbnNldCk6YWZ0ZXIgewogICAgICByaWdodDogMDsKICAgICAgbGVmdDogMDsKfQoubWQtY2FyZCA+IC5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKS5tZC1pbnNldDphZnRlciB7CiAgICAgIHJpZ2h0OiAxNnB4OwogICAgICBsZWZ0OiAxNnB4Owp9Ci5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIHsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGNvbG9yOiAjZmZmOwp9Ci5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyLm1kLXRleHQtc2NyaW0gLm1kLWNhcmQtYmFja2Ryb3AgewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogMDsKICAgICAgcmlnaHQ6IDA7CiAgICAgIGJvdHRvbTogMDsKICAgICAgbGVmdDogMDsKICAgICAgei1pbmRleDogMTsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciAubWQtY2FyZC1hcmVhIHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICByaWdodDogMDsKICAgICAgYm90dG9tOiAwOwogICAgICBsZWZ0OiAwOwogICAgICB6LWluZGV4OiAyOwp9Ci5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVyIC5tZC1jYXJkLWhlYWRlciArIC5tZC1jYXJkLWFjdGlvbnMgewogICAgICBwYWRkaW5nLXRvcDogMDsKfQoubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciAubWQtc3ViaGVhZCB7CiAgICAgIG9wYWNpdHk6IDE7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIHsKICAgIG92ZXJmbG93OiBoaWRkZW47Cn0KLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSBbbWQtZXhwYW5kLXRyaWdnZXJdIHsKICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlM0QoMCwgMCwgMCk7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kLm1kLWFjdGl2ZSAubWQtY2FyZC1jb250ZW50IHsKICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OwogICAgICBvcGFjaXR5OiAxOwogICAgICBwYWRkaW5nOiA0cHggMTZweCAyNHB4IDE2cHg7CiAgICAgIGhlaWdodDogYXV0bzsKfQoubWQtY2FyZCAubWQtY2FyZC1leHBhbmQgLm1kLWNhcmQtYWN0aW9ucyB7CiAgICAgIHBhZGRpbmctdG9wOiAwOwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIHotaW5kZXg6IDI7Cn0KLm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIFttZC1leHBhbmQtdHJpZ2dlcl0gewogICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsKfQoubWQtY2FyZCAubWQtY2FyZC1leHBhbmQgLm1kLWNhcmQtY29udGVudCB7CiAgICAgIGhlaWdodDogMDsKICAgICAgcGFkZGluZzogMCAxNnB4OwogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgIHotaW5kZXg6IDE7CiAgICAgIG9wYWNpdHk6IDA7CiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMCwgMCk7CiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogICAgICB3aWxsLWNoYW5nZTogbWFyZ2luLCBoZWlnaHQ7Cn0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLWNoZWNrYm94IHsKICB3aWR0aDogYXV0bzsKICBtYXJnaW46IDE2cHggOHB4IDE2cHggMDsKICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7CiAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgcG9zaXRpb246IHJlbGF0aXZlOwp9Ci5tZC1jaGVja2JveDpub3QoLm1kLWRpc2FibGVkKSB7CiAgICBjdXJzb3I6IHBvaW50ZXI7Cn0KLm1kLWNoZWNrYm94Om5vdCgubWQtZGlzYWJsZWQpIC5tZC1jaGVja2JveC1sYWJlbCB7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKfQoubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciB7CiAgICB3aWR0aDogMjBweDsKICAgIG1pbi13aWR0aDogMjBweDsKICAgIGhlaWdodDogMjBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGJvcmRlci1yYWRpdXM6IDJweDsKICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQoubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpmb2N1cyB7CiAgICAgIG91dGxpbmU6IG5vbmU7Cn0KLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YmVmb3JlIHsKICAgICAgd2lkdGg6IDQ4cHg7CiAgICAgIGhlaWdodDogNDhweDsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICB0b3A6IDUwJTsKICAgICAgbGVmdDogNTAlOwogICAgICBib3JkZXItcmFkaXVzOiA1MCU7CiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTsKICAgICAgY29udGVudDogIiAiOwp9Ci5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVyIHsKICAgICAgd2lkdGg6IDZweDsKICAgICAgaGVpZ2h0OiAxM3B4OwogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogMDsKICAgICAgbGVmdDogNXB4OwogICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmOwogICAgICBib3JkZXItdG9wOiAwOwogICAgICBib3JkZXItbGVmdDogMDsKICAgICAgb3BhY2l0eTogMDsKICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlM0QoMC4xNSwgMC4xNSwgMSk7CiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpOwogICAgICBjb250ZW50OiAiICI7Cn0KLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgaW5wdXQgewogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIGxlZnQ6IC05OTllbTsKfQoubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZSB7CiAgICAgIHRvcDogLTE2cHg7CiAgICAgIHJpZ2h0OiAtMTZweDsKICAgICAgYm90dG9tOiAtMTZweDsKICAgICAgbGVmdDogLTE2cHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7Cn0KLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZSB7CiAgICAgICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDsKICAgICAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDsKICAgICAgICB0b3A6IDAgIWltcG9ydGFudDsKICAgICAgICByaWdodDogMCAhaW1wb3J0YW50OwogICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50OwogICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDsKfQoubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWxhYmVsIHsKICAgIGhlaWdodDogMjBweDsKICAgIHBhZGRpbmctbGVmdDogOHB4OwogICAgbGluZS1oZWlnaHQ6IDIwcHg7Cn0KLm1kLWNoZWNrYm94Lm1kLWNoZWNrZWQgLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlciB7CiAgb3BhY2l0eTogMTsKICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUzRCgxLCAxLCAxKTsKICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtY2hpcCB7CiAgaGVpZ2h0OiAzMnB4OwogIHBhZGRpbmc6IDhweCAxMnB4OwogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICBib3JkZXItcmFkaXVzOiAzMnB4OwogIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogIGZvbnQtc2l6ZTogMTNweDsKICBsaW5lLWhlaWdodDogMTZweDsKICB3aGl0ZS1zcGFjZTogbm93cmFwOwp9Ci5tZC1jaGlwLm1kLWRlbGV0YWJsZSB7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4Owp9Ci5tZC1jaGlwLm1kLWVkaXRhYmxlIC5tZC1jaGlwLWNvbnRhaW5lciB7CiAgICBjdXJzb3I6IHBvaW50ZXI7Cn0KLm1kLWNoaXA6Zm9jdXMsIC5tZC1jaGlwOmFjdGl2ZSB7CiAgICBvdXRsaW5lOiBub25lOwp9Ci5tZC1jaGlwOmZvY3VzOm5vdCgubWQtZGlzYWJsZWQpLCAubWQtY2hpcDphY3RpdmU6bm90KC5tZC1kaXNhYmxlZCkgewogICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC1jaGlwLm1kLWRpc2FibGVkIC5tZC1idXR0b24gewogICAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgICBjdXJzb3I6IGRlZmF1bHQ7Cn0KLm1kLWNoaXAgLm1kLWJ1dHRvbi5tZC1kZWxldGUgewogICAgd2lkdGg6IDI0cHg7CiAgICBtaW4td2lkdGg6IDI0cHg7CiAgICBoZWlnaHQ6IDI0cHg7CiAgICBtaW4taGVpZ2h0OiAyNHB4OwogICAgbWFyZ2luOiAwOwogICAgcGFkZGluZzogMDsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHRvcDogNHB4OwogICAgcmlnaHQ6IDRweDsKICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQoubWQtY2hpcCAubWQtYnV0dG9uLm1kLWRlbGV0ZSAubWQtaWNvbiB7CiAgICAgIHdpZHRoOiAyMHB4OwogICAgICBtaW4td2lkdGg6IDIwcHg7CiAgICAgIGhlaWdodDogMjBweDsKICAgICAgbWluLWhlaWdodDogMjBweDsKICAgICAgbWFyZ2luOiAwOwogICAgICBmb250LXNpemU6IDIwcHg7Cn0KLm1kLWNoaXAgLm1kLWJ1dHRvbi5tZC1kZWxldGUgLm1kLWluay1yaXBwbGUgewogICAgICBib3JkZXItcmFkaXVzOiAzMnB4Owp9Ci5tZC1jaGlwIC5tZC1idXR0b24ubWQtZGVsZXRlIC5tZC1yaXBwbGUgewogICAgICBvcGFjaXR5OiAuNTQ7Cn0KLm1kLWNoaXBzIHsKICBtaW4taGVpZ2h0OiA1NHB4OwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLW1zLWZsZXgtd3JhcDogd3JhcDsKICAgICAgZmxleC13cmFwOiB3cmFwOwp9Ci5tZC1jaGlwcyAubWQtY2hpcCB7CiAgICBtYXJnaW4tcmlnaHQ6IDhweDsKICAgIG1hcmdpbi1ib3R0b206IDRweDsKfQoubWQtY2hpcHMgLm1kLWlucHV0IHsKICAgIHdpZHRoOiAxMjhweDsKICAgIC1tcy1mbGV4OiAxOwogICAgICAgIGZsZXg6IDE7Cn0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLWRpYWxvZy1jb250YWluZXIgewogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLW1zLWZsZXgtZmxvdzogY29sdW1uOwogICAgICBmbGV4LWZsb3c6IGNvbHVtbjsKICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgcG9zaXRpb246IGZpeGVkOwogIHRvcDogMDsKICByaWdodDogMDsKICBib3R0b206IDA7CiAgbGVmdDogMDsKICB6LWluZGV4OiAxMDg7Cn0KLm1kLWRpYWxvZy1jb250YWluZXIubWQtYWN0aXZlIHsKICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvOwp9Ci5tZC1kaWFsb2ctY29udGFpbmVyLm1kLWFjdGl2ZSAubWQtZGlhbG9nIHsKICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50OwogICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpICFpbXBvcnRhbnQ7CiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB0cmFuc2Zvcm07Cn0KLm1kLWRpYWxvZy1iYWNrZHJvcCB7CiAgcG9zaXRpb246IGZpeGVkOwogIHotaW5kZXg6IDEwOTsKfQoubWQtZGlhbG9nIHsKICBtaW4td2lkdGg6IDI4MHB4OwogIG1heC13aWR0aDogODAlOwogIG1heC1oZWlnaHQ6IDgwJTsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjsKICAgICAgZmxleC1mbG93OiBjb2x1bW47CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgei1pbmRleDogMTEwOwogIG91dGxpbmU6IG5vbmU7CiAgYm9yZGVyLXJhZGl1czogMnB4OwogIG9wYWNpdHk6IDA7CiAgYm94LXNoYWRvdzogMCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE0cHggMjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC44NSk7CiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjsKICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIHRyYW5zZm9ybSAwLjRzIDAuMDVzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07Cn0KLm1kLWRpYWxvZy5tZC1yZWZlcmVuY2UgewogICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlcjsKfQoubWQtZGlhbG9nLm1kLXRyYW5zaXRpb24tb2ZmIHsKICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDsKfQoubWQtZGlhbG9nIHAgewogICAgbWFyZ2luOiAwOwp9Ci5tZC1kaWFsb2ctdGl0bGUgewogIG1hcmdpbi1ib3R0b206IDIwcHg7CiAgcGFkZGluZzogMjRweCAyNHB4IDA7Cn0KLm1kLWRpYWxvZy1jb250ZW50IHsKICBwYWRkaW5nOiAwIDI0cHggMjRweDsKICAtbXMtZmxleDogMTsKICAgICAgZmxleDogMTsKICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogYXV0bzsKICAgICAgZmxleC1iYXNpczogYXV0bzsKICBvdmVyZmxvdzogYXV0bzsKICBwb3NpdGlvbjogcmVsYXRpdmU7Cn0KLm1kLWRpYWxvZy1jb250ZW50OmZpcnN0LWNoaWxkIHsKICAgIHBhZGRpbmctdG9wOiAyNHB4Owp9Ci5tZC1kaWFsb2ctY29udGVudCBwOmZpcnN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCkgewogICAgbWFyZ2luLXRvcDogMDsKfQoubWQtZGlhbG9nLWNvbnRlbnQgcDpsYXN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCkgewogICAgbWFyZ2luLWJvdHRvbTogMDsKfQoubWQtZGlhbG9nLWJvZHkgewogIG1hcmdpbjogMCAtMjRweDsKICBwYWRkaW5nOiAwIDI0cHg7CiAgb3ZlcmZsb3c6IGF1dG87Cn0KLm1kLWRpYWxvZy1hY3Rpb25zIHsKICBtaW4taGVpZ2h0OiA1MnB4OwogIHBhZGRpbmc6IDhweCA4cHggOHB4IDI0cHg7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogIC1tcy1mbGV4LXBhY2s6IGVuZDsKICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKICBwb3NpdGlvbjogcmVsYXRpdmU7Cn0KLm1kLWRpYWxvZy1hY3Rpb25zOmJlZm9yZSB7CiAgICBoZWlnaHQ6IDFweDsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHRvcDogLTFweDsKICAgIHJpZ2h0OiAwOwogICAgbGVmdDogMDsKICAgIGNvbnRlbnQ6ICIgIjsKfQoubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbiB7CiAgICBtaW4td2lkdGg6IDY0cHg7CiAgICBtYXJnaW46IDA7CiAgICBwYWRkaW5nOiAwIDhweDsKfQoubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbiArIC5tZC1idXR0b24gewogICAgICBtYXJnaW4tbGVmdDogOHB4Owp9Ci8qIENvbW1vbiAqLwovKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovCi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi5tZC1kaXZpZGVyIHsKICBoZWlnaHQ6IDFweDsKICBtYXJnaW46IDA7CiAgcGFkZGluZzogMDsKICBkaXNwbGF5OiBibG9jazsKICBib3JkZXI6IDA7CiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsKfQoubWQtZGl2aWRlci5tZC1pbnNldCB7CiAgICBtYXJnaW4tbGVmdDogNzJweDsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtZmlsZSB7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtbXMtZmxleDogMTsKICAgICAgZmxleDogMTsKfQoubWQtZmlsZSBpbnB1dFt0eXBlPSJmaWxlIl0gewogICAgd2lkdGg6IDFweDsKICAgIGhlaWdodDogMXB4OwogICAgbWFyZ2luOiAtMXB4OwogICAgcGFkZGluZzogMDsKICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBjbGlwOiByZWN0KDAgMCAwIDApOwogICAgYm9yZGVyOiAwOwp9Ci5tZC1maWxlIC5tZC1pY29uIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtaWNvbiB7CiAgd2lkdGg6IDI0cHg7CiAgbWluLXdpZHRoOiAyNHB4OwogIGhlaWdodDogMjRweDsKICBtaW4taGVpZ2h0OiAyNHB4OwogIGZvbnQtc2l6ZTogMjRweDsKICBtYXJnaW46IGF1dG87CiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94OwogIGRpc3BsYXk6IGlubGluZS1mbGV4OwogIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgZmlsbDogY3VycmVudENvbG9yOwogIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7CiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsKfQoubWQtaWNvbi5tZC1zaXplLTJ4IHsKICAgIHdpZHRoOiA0OHB4OwogICAgbWluLXdpZHRoOiA0OHB4OwogICAgaGVpZ2h0OiA0OHB4OwogICAgbWluLWhlaWdodDogNDhweDsKICAgIGZvbnQtc2l6ZTogNDhweDsKfQoubWQtaWNvbi5tZC1zaXplLTN4IHsKICAgIHdpZHRoOiA3MnB4OwogICAgbWluLXdpZHRoOiA3MnB4OwogICAgaGVpZ2h0OiA3MnB4OwogICAgbWluLWhlaWdodDogNzJweDsKICAgIGZvbnQtc2l6ZTogNzJweDsKfQoubWQtaWNvbi5tZC1zaXplLTR4IHsKICAgIHdpZHRoOiA5NnB4OwogICAgbWluLXdpZHRoOiA5NnB4OwogICAgaGVpZ2h0OiA5NnB4OwogICAgbWluLWhlaWdodDogOTZweDsKICAgIGZvbnQtc2l6ZTogOTZweDsKfQoubWQtaWNvbi5tZC1zaXplLTV4IHsKICAgIHdpZHRoOiAxMjBweDsKICAgIG1pbi13aWR0aDogMTIwcHg7CiAgICBoZWlnaHQ6IDEyMHB4OwogICAgbWluLWhlaWdodDogMTIwcHg7CiAgICBmb250LXNpemU6IDEyMHB4Owp9Ci5tZC1pY29uIHN2ZyB7CiAgICB3aWR0aDogMTAwJTsKICAgIGhlaWdodDogMTAwJTsKfQppbWcubWQtaWNvbiB7CiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtaW1hZ2UgewogIG9wYWNpdHk6IDA7CiAgLXdlYmtpdC1maWx0ZXI6IHNhdHVyYXRlKDIwJSk7CiAgICAgICAgICBmaWx0ZXI6IHNhdHVyYXRlKDIwJSk7Cn0KLm1kLWltYWdlLm1kLWJsYWNrLW91dHB1dCB7CiAgICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygwLjQpIHNhdHVyYXRlKDIwJSk7CiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjQpIHNhdHVyYXRlKDIwJSk7Cn0KLm1kLWltYWdlLm1kLWxvYWRlZCB7CiAgICBvcGFjaXR5OiAxOwogICAgLXdlYmtpdC1maWx0ZXI6IHNhdHVyYXRlKDEwMCUpOwogICAgICAgICAgICBmaWx0ZXI6IHNhdHVyYXRlKDEwMCUpOwogICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjFzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCAtd2Via2l0LWZpbHRlciAyLjJzIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGZpbHRlciAyLjJzIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIGZpbHRlciAyLjJzIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIC13ZWJraXQtZmlsdGVyIDIuMnMgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtaW5wdXQtY29udGFpbmVyIHsKICB3aWR0aDogMTAwJTsKICBtaW4taGVpZ2h0OiA0OHB4OwogIG1hcmdpbjogNHB4IDAgMjRweDsKICBwYWRkaW5nLXRvcDogMTZweDsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoubWQtaW5wdXQtY29udGFpbmVyOmFmdGVyIHsKICAgIGhlaWdodDogMXB4OwogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgcmlnaHQ6IDA7CiAgICBib3R0b206IDA7CiAgICBsZWZ0OiAwOwogICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsKICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogICAgY29udGVudDogIiAiOwp9Ci5tZC1pbnB1dC1jb250YWluZXIgbGFiZWwgewogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgdG9wOiAyM3B4OwogICAgbGVmdDogMDsKICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7CiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKICAgIGZvbnQtc2l6ZTogMTZweDsKICAgIGxpbmUtaGVpZ2h0OiAyMHB4Owp9Ci5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQsCiAgLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7CiAgICB3aWR0aDogMTAwJTsKICAgIGhlaWdodDogMzJweDsKICAgIHBhZGRpbmc6IDA7CiAgICBkaXNwbGF5OiBibG9jazsKICAgIC1tcy1mbGV4OiAxOwogICAgICAgIGZsZXg6IDE7CiAgICBib3JkZXI6IG5vbmU7CiAgICBiYWNrZ3JvdW5kOiBub25lOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBmb250LXNpemU7CiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogICAgZm9udC1zaXplOiAxcHg7CiAgICBsaW5lLWhlaWdodDogMzJweDsKfQoubWQtaW5wdXQtY29udGFpbmVyIGlucHV0OmZvY3VzLAogICAgLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1cyB7CiAgICAgIG91dGxpbmU6IG5vbmU7Cn0KLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwKICAgIC5tZC1pbnB1dC1jb250YWluZXIgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgewogICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKICAgICAgZm9udC1zaXplOiAxNnB4OwogICAgICB0ZXh0LXNoYWRvdzogbm9uZTsKICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGluaXRpYWw7Cn0KLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dCB+IC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpLAogICAgLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB+IC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIHsKICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7Cn0KLm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dCB+IC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpOmFmdGVyLAogICAgICAubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIH4gLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSk6YWZ0ZXIgewogICAgICAgIHJpZ2h0OiAwOwogICAgICAgIGxlZnQ6IGF1dG87Cn0KLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7CiAgICBtaW4taGVpZ2h0OiAzMnB4OwogICAgbWF4LWhlaWdodDogMjMwcHg7CiAgICBwYWRkaW5nOiA1cHggMDsKICAgIHJlc2l6ZTogbm9uZTsKICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTsKfQoubWQtaW5wdXQtY29udGFpbmVyIC5tZC1lcnJvciwKICAubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudCB7CiAgICBoZWlnaHQ6IDIwcHg7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBib3R0b206IC0yMnB4OwogICAgZm9udC1zaXplOiAxMnB4Owp9Ci5tZC1pbnB1dC1jb250YWluZXIgLm1kLWVycm9yIHsKICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7CiAgICBsZWZ0OiAwOwogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLThweCwgMCk7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTsKfQoubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudCB7CiAgICByaWdodDogMDsKfQoubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIHsKICAgIG1hcmdpbjogNHB4IGF1dG87CiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC1pbnB1dC1jb250YWluZXIgLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSk6YWZ0ZXIgewogICAgICB3aWR0aDogMzZweDsKICAgICAgaGVpZ2h0OiAycHg7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgbGVmdDogMDsKICAgICAgYm90dG9tOiAwOwogICAgICB6LWluZGV4OiAyOwogICAgICBjb250ZW50OiAiIjsKfQoubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIH4gbGFiZWwgewogICAgICBsZWZ0OiAzNnB4Owp9Ci5tZC1pbnB1dC1jb250YWluZXIgLm1kLWljb246bm90KC5tZC1pY29uLWRlbGV0ZSkgfiAubWQtaW5wdXQsCiAgICAubWQtaW5wdXQtY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtaWNvbi1kZWxldGUpIH4gLm1kLXRleHRhcmVhLAogICAgLm1kLWlucHV0LWNvbnRhaW5lciAubWQtaWNvbjpub3QoLm1kLWljb24tZGVsZXRlKSB+IC5tZC1maWxlIHsKICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7Cn0KLm1kLWlucHV0LWNvbnRhaW5lciAubWQtYXV0b2NvbXBsZXRlLAoubWQtaW5wdXQtY29udGFpbmVyIC5tZC1hdXRvY29tcGxldGUgLm1kLW1lbnUsCi5tZC1pbnB1dC1jb250YWluZXIgLm1kLWF1dG9jb21wbGV0ZSAubWQtbWVudSAubWQtaW5wdXQgewogIHdpZHRoOiAxMDAlOwp9Ci5tZC10aGVtZS1kZWZhdWx0Lm1kLWlucHV0LWNvbnRhaW5lciAubWQtYXV0b2NvbXBsZXRlIC5tZC1pY29uOm5vdCgubWQtaWNvbi1zZWFyY2gpOmFmdGVyIHsKICBoZWlnaHQ6IDA7Cn0KLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBsYWJlbCB7CiAgcG9pbnRlci1ldmVudHM6IGF1dG87CiAgdG9wOiAxMHB4OwogIG9wYWNpdHk6IDA7CiAgZm9udC1zaXplOiAxMnB4Owp9Ci5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQsCi5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgdGV4dGFyZWEgewogIGZvbnQtc2l6ZTogMTZweDsKfQoubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgbGFiZWwsIC5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGxhYmVsIHsKICBwb2ludGVyLWV2ZW50czogYXV0bzsKICB0b3A6IDA7CiAgb3BhY2l0eTogMTsKICBmb250LXNpemU6IDEycHg7Cn0KLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIGlucHV0LAoubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgdGV4dGFyZWEsIC5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LAoubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYSB7CiAgZm9udC1zaXplOiAxNnB4Owp9Ci5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LAoubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYSB7CiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7Cn0KLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUgbGFiZWwgewogIHBvaW50ZXItZXZlbnRzOiBub25lOwp9Ci5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lLm1kLWlucHV0LWZvY3VzZWQgbGFiZWwgewogIHRvcDogMjNweDsKICBmb250LXNpemU6IDE2cHg7Cn0KLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaGFzLXZhbHVlIGxhYmVsIHsKICBvcGFjaXR5OiAwOwp9Ci5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQ6YWZ0ZXIgewogIGJhY2tncm91bmQ6IGJvdHRvbSBsZWZ0IHJlcGVhdC14OwogIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjM4KSAwJSwgcmdiYSgwLCAwLCAwLCAwLjM4KSAzMyUsIHRyYW5zcGFyZW50IDAlKTsKICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxcHg7Cn0KLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCBsYWJlbCwKLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCBpbnB1dCwKLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCB0ZXh0YXJlYSB7CiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7Cn0KLm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQubWQtaW5wdXQtZm9jdXNlZCAubWQtdG9nZ2xlLXBhc3N3b3JkIHsKICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKfQoubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3JkIHsKICBtYXJnaW46IDA7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHJpZ2h0OiAwOwogIGJvdHRvbTogLTJweDsKICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsKfQoubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3JkIC5tZC1pbmstcmlwcGxlIHsKICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOwp9Ci5tZC1pbnB1dC1jb250YWluZXIubWQtY2xlYXJhYmxlLm1kLWlucHV0LWZvY3VzZWQgLm1kLWNsZWFyLWlucHV0IHsKICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKfQoubWQtaW5wdXQtY29udGFpbmVyLm1kLWNsZWFyYWJsZSAubWQtY2xlYXItaW5wdXQgewogIG1hcmdpbjogMDsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgcmlnaHQ6IDA7CiAgYm90dG9tOiAtMnB4OwogIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOwp9Ci5tZC1pbnB1dC1jb250YWluZXIubWQtY2xlYXJhYmxlIC5tZC1jbGVhci1pbnB1dCAubWQtaW5rLXJpcHBsZSB7CiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsKfQoubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWludmFsaWQgLm1kLWVycm9yIHsKICBvcGFjaXR5OiAxOwogIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7Cn0KLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1yZXF1aXJlZCBsYWJlbDphZnRlciB7CiAgdG9wOiAycHg7CiAgcmlnaHQ6IDA7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSArIDJweCkpOwogIGNvbnRlbnQ6ICIqIjsKICBmb250LXNpemU6IDEycHg7CiAgbGluZS1oZWlnaHQ6IDFlbTsKICB2ZXJ0aWNhbC1hbGlnbjogdG9wOwp9Ci5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXNlbGVjdDpob3ZlciAubWQtc2VsZWN0Om5vdCgubWQtZGlzYWJsZWQpOmFmdGVyIHsKICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBJbWFnZSBhc3BlY3QgcmF0aW8gY2FsY3VsYXRvciAqLwovKiBSZXNwb25zaXZlIGJyZWFrcG9pbnRzICovCi8qIFJvd3MgYW5kIENvbHVtbnMgKi8KLm1kLWxheW91dCB7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdzsKICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsKICAtbXMtZmxleC13cmFwOiB3cmFwOwogICAgICBmbGV4LXdyYXA6IHdyYXA7CiAgLW1zLWZsZXg6IDE7CiAgICAgIGZsZXg6IDE7Cn0KLm1kLXJvdyB7CiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7Cn0KLm1kLWNvbHVtbiB7CiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Cn0KCi8qIENvbnRhaW5lciAqLwoubWQtbGF5b3V0Lm1kLWNvbnRhaW5lciB7CiAgd2lkdGg6IDEwMCU7CiAgbWF4LXdpZHRoOiAxMjAwcHg7Cn0KLm1kLWxheW91dC5tZC1jb250YWluZXIubWQtY2VudGVyZWQgewogICAgbWFyZ2luOiAwIGF1dG87Cn0KCi8qIEFsaWdubWVudHMgKi8KLm1kLWFsaWduLXN0YXJ0IHsKICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0Owp9Ci5tZC1hbGlnbi1jZW50ZXIgewogIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjsKICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Cn0KLm1kLWFsaWduLWVuZCB7CiAgLW1zLWZsZXgtcGFjazogZW5kOwogICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOwp9CgovKiBWZXJ0aWNhbCBBbGlnbm1lbnRzICovCi5tZC12ZXJ0aWNhbC1hbGlnbi1zdGFydCB7CiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0OwogICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsKICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0OwogICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0Owp9Ci5tZC12ZXJ0aWNhbC1hbGlnbi1jZW50ZXIgewogIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7CiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsKfQoubWQtdmVydGljYWwtYWxpZ24tZW5kIHsKICAtbXMtZmxleC1hbGlnbjogZW5kOwogICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7CiAgLW1zLWZsZXgtbGluZS1wYWNrOiBlbmQ7CiAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kOwp9Ci5tZC12ZXJ0aWNhbC1hbGlnbi1zdHJldGNoIHsKICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDsKICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7CiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoOwogICAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoOwp9CgovKiBHdXR0ZXIgU2l6ZSAqLwoubWQtZ3V0dGVyOm5vdCgubWQtY29sdW1uKSB7CiAgbWFyZ2luLXJpZ2h0OiAtMTJweDsKICBtYXJnaW4tbGVmdDogLTEycHg7Cn0KLm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbikgPiAubWQtbGF5b3V0IHsKICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7CiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7Cn0KLm1kLWd1dHRlciAubWQtY29sdW1uIHsKICBtYXJnaW4tdG9wOiAtMTJweDsKICBtYXJnaW4tYm90dG9tOiAtMTJweDsKfQoubWQtZ3V0dGVyIC5tZC1jb2x1bW4gPiAubWQtbGF5b3V0IHsKICAgIHBhZGRpbmctdG9wOiAxMnB4OwogICAgcGFkZGluZy1ib3R0b206IDEycHg7Cn0KLm1kLWd1dHRlci04Om5vdCgubWQtY29sdW1uKSB7CiAgbWFyZ2luLXJpZ2h0OiAtNHB4OwogIG1hcmdpbi1sZWZ0OiAtNHB4Owp9Ci5tZC1ndXR0ZXItODpub3QoLm1kLWNvbHVtbikgPiAubWQtbGF5b3V0IHsKICAgIHBhZGRpbmctcmlnaHQ6IDRweDsKICAgIHBhZGRpbmctbGVmdDogNHB4Owp9Ci5tZC1ndXR0ZXItOCAubWQtY29sdW1uIHsKICBtYXJnaW4tdG9wOiAtNHB4OwogIG1hcmdpbi1ib3R0b206IC00cHg7Cn0KLm1kLWd1dHRlci04IC5tZC1jb2x1bW4gPiAubWQtbGF5b3V0IHsKICAgIHBhZGRpbmctdG9wOiA0cHg7CiAgICBwYWRkaW5nLWJvdHRvbTogNHB4Owp9Ci5tZC1ndXR0ZXItMTY6bm90KC5tZC1jb2x1bW4pIHsKICBtYXJnaW4tcmlnaHQ6IC04cHg7CiAgbWFyZ2luLWxlZnQ6IC04cHg7Cn0KLm1kLWd1dHRlci0xNjpub3QoLm1kLWNvbHVtbikgPiAubWQtbGF5b3V0IHsKICAgIHBhZGRpbmctcmlnaHQ6IDhweDsKICAgIHBhZGRpbmctbGVmdDogOHB4Owp9Ci5tZC1ndXR0ZXItMTYgLm1kLWNvbHVtbiB7CiAgbWFyZ2luLXRvcDogLThweDsKICBtYXJnaW4tYm90dG9tOiAtOHB4Owp9Ci5tZC1ndXR0ZXItMTYgLm1kLWNvbHVtbiA+IC5tZC1sYXlvdXQgewogICAgcGFkZGluZy10b3A6IDhweDsKICAgIHBhZGRpbmctYm90dG9tOiA4cHg7Cn0KLm1kLWd1dHRlci0yNDpub3QoLm1kLWNvbHVtbikgewogIG1hcmdpbi1yaWdodDogLTEycHg7CiAgbWFyZ2luLWxlZnQ6IC0xMnB4Owp9Ci5tZC1ndXR0ZXItMjQ6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7CiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4OwogICAgcGFkZGluZy1sZWZ0OiAxMnB4Owp9Ci5tZC1ndXR0ZXItMjQgLm1kLWNvbHVtbiB7CiAgbWFyZ2luLXRvcDogLTEycHg7CiAgbWFyZ2luLWJvdHRvbTogLTEycHg7Cn0KLm1kLWd1dHRlci0yNCAubWQtY29sdW1uID4gLm1kLWxheW91dCB7CiAgICBwYWRkaW5nLXRvcDogMTJweDsKICAgIHBhZGRpbmctYm90dG9tOiAxMnB4Owp9Ci5tZC1ndXR0ZXItNDA6bm90KC5tZC1jb2x1bW4pIHsKICBtYXJnaW4tcmlnaHQ6IC0yMHB4OwogIG1hcmdpbi1sZWZ0OiAtMjBweDsKfQoubWQtZ3V0dGVyLTQwOm5vdCgubWQtY29sdW1uKSA+IC5tZC1sYXlvdXQgewogICAgcGFkZGluZy1yaWdodDogMjBweDsKICAgIHBhZGRpbmctbGVmdDogMjBweDsKfQoubWQtZ3V0dGVyLTQwIC5tZC1jb2x1bW4gewogIG1hcmdpbi10b3A6IC0yMHB4OwogIG1hcmdpbi1ib3R0b206IC0yMHB4Owp9Ci5tZC1ndXR0ZXItNDAgLm1kLWNvbHVtbiA+IC5tZC1sYXlvdXQgewogICAgcGFkZGluZy10b3A6IDIwcHg7CiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsKfQoKLyogRmxleCBTaXplICovCi5tZC1mbGV4IHsKICAtbXMtZmxleDogMSAxOwogICAgICBmbGV4OiAxIDE7Cn0KLm1kLWZsZXgtMzMgewogIG1pbi13aWR0aDogMzMuMzMzMzMlOwogIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlOwogICAgICBmbGV4OiAwIDEgMzMuMzMzMzMlOwp9Ci5tZC1mbGV4LTY2IHsKICBtaW4td2lkdGg6IDMzLjMzMzMzJTsKICAtbXMtZmxleDogMCAxIDY2LjY2NjY2JTsKICAgICAgZmxleDogMCAxIDY2LjY2NjY2JTsKfQoubWQtZmxleC1vZmZzZXQtMzMgewogIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7Cn0KLm1kLWZsZXgtb2Zmc2V0LTY2IHsKICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlOwp9Ci5tZC1mbGV4LTUgewogIG1pbi13aWR0aDogNSU7CiAgLW1zLWZsZXg6IDAgMSA1JTsKICAgICAgZmxleDogMCAxIDUlOwp9Ci5tZC1mbGV4LW9mZnNldC01IHsKICBtYXJnaW4tbGVmdDogNSU7Cn0KLm1kLWZsZXgtMTAgewogIG1pbi13aWR0aDogMTAlOwogIC1tcy1mbGV4OiAwIDEgMTAlOwogICAgICBmbGV4OiAwIDEgMTAlOwp9Ci5tZC1mbGV4LW9mZnNldC0xMCB7CiAgbWFyZ2luLWxlZnQ6IDEwJTsKfQoubWQtZmxleC0xNSB7CiAgbWluLXdpZHRoOiAxNSU7CiAgLW1zLWZsZXg6IDAgMSAxNSU7CiAgICAgIGZsZXg6IDAgMSAxNSU7Cn0KLm1kLWZsZXgtb2Zmc2V0LTE1IHsKICBtYXJnaW4tbGVmdDogMTUlOwp9Ci5tZC1mbGV4LTIwIHsKICBtaW4td2lkdGg6IDIwJTsKICAtbXMtZmxleDogMCAxIDIwJTsKICAgICAgZmxleDogMCAxIDIwJTsKfQoubWQtZmxleC1vZmZzZXQtMjAgewogIG1hcmdpbi1sZWZ0OiAyMCU7Cn0KLm1kLWZsZXgtMjUgewogIG1pbi13aWR0aDogMjUlOwogIC1tcy1mbGV4OiAwIDEgMjUlOwogICAgICBmbGV4OiAwIDEgMjUlOwp9Ci5tZC1mbGV4LW9mZnNldC0yNSB7CiAgbWFyZ2luLWxlZnQ6IDI1JTsKfQoubWQtZmxleC0zMCB7CiAgbWluLXdpZHRoOiAzMCU7CiAgLW1zLWZsZXg6IDAgMSAzMCU7CiAgICAgIGZsZXg6IDAgMSAzMCU7Cn0KLm1kLWZsZXgtb2Zmc2V0LTMwIHsKICBtYXJnaW4tbGVmdDogMzAlOwp9Ci5tZC1mbGV4LTM1IHsKICBtaW4td2lkdGg6IDM1JTsKICAtbXMtZmxleDogMCAxIDM1JTsKICAgICAgZmxleDogMCAxIDM1JTsKfQoubWQtZmxleC1vZmZzZXQtMzUgewogIG1hcmdpbi1sZWZ0OiAzNSU7Cn0KLm1kLWZsZXgtNDAgewogIG1pbi13aWR0aDogNDAlOwogIC1tcy1mbGV4OiAwIDEgNDAlOwogICAgICBmbGV4OiAwIDEgNDAlOwp9Ci5tZC1mbGV4LW9mZnNldC00MCB7CiAgbWFyZ2luLWxlZnQ6IDQwJTsKfQoubWQtZmxleC00NSB7CiAgbWluLXdpZHRoOiA0NSU7CiAgLW1zLWZsZXg6IDAgMSA0NSU7CiAgICAgIGZsZXg6IDAgMSA0NSU7Cn0KLm1kLWZsZXgtb2Zmc2V0LTQ1IHsKICBtYXJnaW4tbGVmdDogNDUlOwp9Ci5tZC1mbGV4LTUwIHsKICBtaW4td2lkdGg6IDUwJTsKICAtbXMtZmxleDogMCAxIDUwJTsKICAgICAgZmxleDogMCAxIDUwJTsKfQoubWQtZmxleC1vZmZzZXQtNTAgewogIG1hcmdpbi1sZWZ0OiA1MCU7Cn0KLm1kLWZsZXgtNTUgewogIG1pbi13aWR0aDogNTUlOwogIC1tcy1mbGV4OiAwIDEgNTUlOwogICAgICBmbGV4OiAwIDEgNTUlOwp9Ci5tZC1mbGV4LW9mZnNldC01NSB7CiAgbWFyZ2luLWxlZnQ6IDU1JTsKfQoubWQtZmxleC02MCB7CiAgbWluLXdpZHRoOiA2MCU7CiAgLW1zLWZsZXg6IDAgMSA2MCU7CiAgICAgIGZsZXg6IDAgMSA2MCU7Cn0KLm1kLWZsZXgtb2Zmc2V0LTYwIHsKICBtYXJnaW4tbGVmdDogNjAlOwp9Ci5tZC1mbGV4LTY1IHsKICBtaW4td2lkdGg6IDY1JTsKICAtbXMtZmxleDogMCAxIDY1JTsKICAgICAgZmxleDogMCAxIDY1JTsKfQoubWQtZmxleC1vZmZzZXQtNjUgewogIG1hcmdpbi1sZWZ0OiA2NSU7Cn0KLm1kLWZsZXgtNzAgewogIG1pbi13aWR0aDogNzAlOwogIC1tcy1mbGV4OiAwIDEgNzAlOwogICAgICBmbGV4OiAwIDEgNzAlOwp9Ci5tZC1mbGV4LW9mZnNldC03MCB7CiAgbWFyZ2luLWxlZnQ6IDcwJTsKfQoubWQtZmxleC03NSB7CiAgbWluLXdpZHRoOiA3NSU7CiAgLW1zLWZsZXg6IDAgMSA3NSU7CiAgICAgIGZsZXg6IDAgMSA3NSU7Cn0KLm1kLWZsZXgtb2Zmc2V0LTc1IHsKICBtYXJnaW4tbGVmdDogNzUlOwp9Ci5tZC1mbGV4LTgwIHsKICBtaW4td2lkdGg6IDgwJTsKICAtbXMtZmxleDogMCAxIDgwJTsKICAgICAgZmxleDogMCAxIDgwJTsKfQoubWQtZmxleC1vZmZzZXQtODAgewogIG1hcmdpbi1sZWZ0OiA4MCU7Cn0KLm1kLWZsZXgtODUgewogIG1pbi13aWR0aDogODUlOwogIC1tcy1mbGV4OiAwIDEgODUlOwogICAgICBmbGV4OiAwIDEgODUlOwp9Ci5tZC1mbGV4LW9mZnNldC04NSB7CiAgbWFyZ2luLWxlZnQ6IDg1JTsKfQoubWQtZmxleC05MCB7CiAgbWluLXdpZHRoOiA5MCU7CiAgLW1zLWZsZXg6IDAgMSA5MCU7CiAgICAgIGZsZXg6IDAgMSA5MCU7Cn0KLm1kLWZsZXgtb2Zmc2V0LTkwIHsKICBtYXJnaW4tbGVmdDogOTAlOwp9Ci5tZC1mbGV4LTk1IHsKICBtaW4td2lkdGg6IDk1JTsKICAtbXMtZmxleDogMCAxIDk1JTsKICAgICAgZmxleDogMCAxIDk1JTsKfQoubWQtZmxleC1vZmZzZXQtOTUgewogIG1hcmdpbi1sZWZ0OiA5NSU7Cn0KLm1kLWZsZXgtMTAwIHsKICBtaW4td2lkdGg6IDEwMCU7CiAgLW1zLWZsZXg6IDAgMSAxMDAlOwogICAgICBmbGV4OiAwIDEgMTAwJTsKfQoubWQtZmxleC1vZmZzZXQtMTAwIHsKICBtYXJnaW4tbGVmdDogMTAwJTsKfQoKLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwoKQG1lZGlhIChtYXgtd2lkdGg6IDk0NHB4KSB7CiAgLm1kLWd1dHRlcjpub3QoLm1kLWNvbHVtbikgewogICAgbWFyZ2luLXJpZ2h0OiAtOHB4OwogICAgbWFyZ2luLWxlZnQ6IC04cHg7CiAgfQogIC5tZC1ndXR0ZXI6bm90KC5tZC1jb2x1bW4pID4gLm1kLWxheW91dCB7CiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7CiAgICBwYWRkaW5nLWxlZnQ6IDhweDsKICB9CiAgLm1kLWd1dHRlciAubWQtY29sdW1uIHsKICAgIG1hcmdpbi10b3A6IC04cHg7CiAgICBtYXJnaW4tYm90dG9tOiAtOHB4OwogIH0KICAubWQtZ3V0dGVyIC5tZC1jb2x1bW4gPiAubWQtbGF5b3V0IHsKICAgIHBhZGRpbmctdG9wOiA4cHg7CiAgICBwYWRkaW5nLWJvdHRvbTogOHB4OwogIH0KICAubWQtcm93LXNtYWxsIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93OwogICAgZmxleC1kaXJlY3Rpb246IHJvdzsKICB9CiAgLm1kLWNvbHVtbi1zbWFsbCB7CiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgfQogIC5tZC1mbGV4LXNtYWxsIHsKICAgIC1tcy1mbGV4OiAxIDE7CiAgICBmbGV4OiAxIDE7CiAgfQogIC5tZC1mbGV4LXNtYWxsLTMzIHsKICAgIG1pbi13aWR0aDogMzMuMzMzMzMlOwogICAgLW1zLWZsZXg6IDAgMSAzMy4zMzMzMyU7CiAgICBmbGV4OiAwIDEgMzMuMzMzMzMlOwogIH0KICAubWQtZmxleC1zbWFsbC02NiB7CiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTsKICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlOwogICAgZmxleDogMCAxIDY2LjY2NjY2JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTMzIHsKICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC02NiB7CiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlOwogIH0KICAubWQtZmxleC1zbWFsbC01IHsKICAgIG1pbi13aWR0aDogNSU7CiAgICAtbXMtZmxleDogMCAxIDUlOwogICAgZmxleDogMCAxIDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtNSB7CiAgICBtYXJnaW4tbGVmdDogNSU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLTEwIHsKICAgIG1pbi13aWR0aDogMTAlOwogICAgLW1zLWZsZXg6IDAgMSAxMCU7CiAgICBmbGV4OiAwIDEgMTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtMTAgewogICAgbWFyZ2luLWxlZnQ6IDEwJTsKICB9CiAgLm1kLWZsZXgtc21hbGwtMTUgewogICAgbWluLXdpZHRoOiAxNSU7CiAgICAtbXMtZmxleDogMCAxIDE1JTsKICAgIGZsZXg6IDAgMSAxNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC0xNSB7CiAgICBtYXJnaW4tbGVmdDogMTUlOwogIH0KICAubWQtZmxleC1zbWFsbC0yMCB7CiAgICBtaW4td2lkdGg6IDIwJTsKICAgIC1tcy1mbGV4OiAwIDEgMjAlOwogICAgZmxleDogMCAxIDIwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTIwIHsKICAgIG1hcmdpbi1sZWZ0OiAyMCU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLTI1IHsKICAgIG1pbi13aWR0aDogMjUlOwogICAgLW1zLWZsZXg6IDAgMSAyNSU7CiAgICBmbGV4OiAwIDEgMjUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtMjUgewogICAgbWFyZ2luLWxlZnQ6IDI1JTsKICB9CiAgLm1kLWZsZXgtc21hbGwtMzAgewogICAgbWluLXdpZHRoOiAzMCU7CiAgICAtbXMtZmxleDogMCAxIDMwJTsKICAgIGZsZXg6IDAgMSAzMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC0zMCB7CiAgICBtYXJnaW4tbGVmdDogMzAlOwogIH0KICAubWQtZmxleC1zbWFsbC0zNSB7CiAgICBtaW4td2lkdGg6IDM1JTsKICAgIC1tcy1mbGV4OiAwIDEgMzUlOwogICAgZmxleDogMCAxIDM1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTM1IHsKICAgIG1hcmdpbi1sZWZ0OiAzNSU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLTQwIHsKICAgIG1pbi13aWR0aDogNDAlOwogICAgLW1zLWZsZXg6IDAgMSA0MCU7CiAgICBmbGV4OiAwIDEgNDAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtNDAgewogICAgbWFyZ2luLWxlZnQ6IDQwJTsKICB9CiAgLm1kLWZsZXgtc21hbGwtNDUgewogICAgbWluLXdpZHRoOiA0NSU7CiAgICAtbXMtZmxleDogMCAxIDQ1JTsKICAgIGZsZXg6IDAgMSA0NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC00NSB7CiAgICBtYXJnaW4tbGVmdDogNDUlOwogIH0KICAubWQtZmxleC1zbWFsbC01MCB7CiAgICBtaW4td2lkdGg6IDUwJTsKICAgIC1tcy1mbGV4OiAwIDEgNTAlOwogICAgZmxleDogMCAxIDUwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTUwIHsKICAgIG1hcmdpbi1sZWZ0OiA1MCU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLTU1IHsKICAgIG1pbi13aWR0aDogNTUlOwogICAgLW1zLWZsZXg6IDAgMSA1NSU7CiAgICBmbGV4OiAwIDEgNTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtNTUgewogICAgbWFyZ2luLWxlZnQ6IDU1JTsKICB9CiAgLm1kLWZsZXgtc21hbGwtNjAgewogICAgbWluLXdpZHRoOiA2MCU7CiAgICAtbXMtZmxleDogMCAxIDYwJTsKICAgIGZsZXg6IDAgMSA2MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC02MCB7CiAgICBtYXJnaW4tbGVmdDogNjAlOwogIH0KICAubWQtZmxleC1zbWFsbC02NSB7CiAgICBtaW4td2lkdGg6IDY1JTsKICAgIC1tcy1mbGV4OiAwIDEgNjUlOwogICAgZmxleDogMCAxIDY1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTY1IHsKICAgIG1hcmdpbi1sZWZ0OiA2NSU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLTcwIHsKICAgIG1pbi13aWR0aDogNzAlOwogICAgLW1zLWZsZXg6IDAgMSA3MCU7CiAgICBmbGV4OiAwIDEgNzAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtNzAgewogICAgbWFyZ2luLWxlZnQ6IDcwJTsKICB9CiAgLm1kLWZsZXgtc21hbGwtNzUgewogICAgbWluLXdpZHRoOiA3NSU7CiAgICAtbXMtZmxleDogMCAxIDc1JTsKICAgIGZsZXg6IDAgMSA3NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC03NSB7CiAgICBtYXJnaW4tbGVmdDogNzUlOwogIH0KICAubWQtZmxleC1zbWFsbC04MCB7CiAgICBtaW4td2lkdGg6IDgwJTsKICAgIC1tcy1mbGV4OiAwIDEgODAlOwogICAgZmxleDogMCAxIDgwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTgwIHsKICAgIG1hcmdpbi1sZWZ0OiA4MCU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLTg1IHsKICAgIG1pbi13aWR0aDogODUlOwogICAgLW1zLWZsZXg6IDAgMSA4NSU7CiAgICBmbGV4OiAwIDEgODUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtODUgewogICAgbWFyZ2luLWxlZnQ6IDg1JTsKICB9CiAgLm1kLWZsZXgtc21hbGwtOTAgewogICAgbWluLXdpZHRoOiA5MCU7CiAgICAtbXMtZmxleDogMCAxIDkwJTsKICAgIGZsZXg6IDAgMSA5MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC05MCB7CiAgICBtYXJnaW4tbGVmdDogOTAlOwogIH0KICAubWQtZmxleC1zbWFsbC05NSB7CiAgICBtaW4td2lkdGg6IDk1JTsKICAgIC1tcy1mbGV4OiAwIDEgOTUlOwogICAgZmxleDogMCAxIDk1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTk1IHsKICAgIG1hcmdpbi1sZWZ0OiA5NSU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLTEwMCB7CiAgICBtaW4td2lkdGg6IDEwMCU7CiAgICAtbXMtZmxleDogMCAxIDEwMCU7CiAgICBmbGV4OiAwIDEgMTAwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLTEwMCB7CiAgICBtYXJnaW4tbGVmdDogMTAwJTsKICB9CiAgLm1kLWFsaWduLXNtYWxsLXN0YXJ0IHsKICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0OwogICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OwogIH0KICAubWQtYWxpZ24tc21hbGwtY2VudGVyIHsKICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjsKICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIH0KICAubWQtYWxpZ24tc21hbGwtZW5kIHsKICAgIC1tcy1mbGV4LXBhY2s6IGVuZDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7CiAgfQogIC5tZC1oaWRlLXNtYWxsIHsKICAgIGRpc3BsYXk6IG5vbmU7CiAgfQp9CgpAbWVkaWEgKG1pbi13aWR0aDogMTkwNHB4KSB7CiAgLm1kLXJvdy14bGFyZ2UgewogICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICBmbGV4LWRpcmVjdGlvbjogcm93OwogIH0KICAubWQtY29sdW1uLXhsYXJnZSB7CiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgfQogIC5tZC1mbGV4LXhsYXJnZSB7CiAgICAtbXMtZmxleDogMSAxOwogICAgZmxleDogMSAxOwogIH0KICAubWQtZmxleC14bGFyZ2UtMzMgewogICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7CiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTsKICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7CiAgfQogIC5tZC1mbGV4LXhsYXJnZS02NiB7CiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTsKICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlOwogICAgZmxleDogMCAxIDY2LjY2NjY2JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zMyB7CiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTY2IHsKICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7CiAgfQogIC5tZC1mbGV4LXhsYXJnZS01IHsKICAgIG1pbi13aWR0aDogNSU7CiAgICAtbXMtZmxleDogMCAxIDUlOwogICAgZmxleDogMCAxIDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTUgewogICAgbWFyZ2luLWxlZnQ6IDUlOwogIH0KICAubWQtZmxleC14bGFyZ2UtMTAgewogICAgbWluLXdpZHRoOiAxMCU7CiAgICAtbXMtZmxleDogMCAxIDEwJTsKICAgIGZsZXg6IDAgMSAxMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMTAgewogICAgbWFyZ2luLWxlZnQ6IDEwJTsKICB9CiAgLm1kLWZsZXgteGxhcmdlLTE1IHsKICAgIG1pbi13aWR0aDogMTUlOwogICAgLW1zLWZsZXg6IDAgMSAxNSU7CiAgICBmbGV4OiAwIDEgMTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTE1IHsKICAgIG1hcmdpbi1sZWZ0OiAxNSU7CiAgfQogIC5tZC1mbGV4LXhsYXJnZS0yMCB7CiAgICBtaW4td2lkdGg6IDIwJTsKICAgIC1tcy1mbGV4OiAwIDEgMjAlOwogICAgZmxleDogMCAxIDIwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0yMCB7CiAgICBtYXJnaW4tbGVmdDogMjAlOwogIH0KICAubWQtZmxleC14bGFyZ2UtMjUgewogICAgbWluLXdpZHRoOiAyNSU7CiAgICAtbXMtZmxleDogMCAxIDI1JTsKICAgIGZsZXg6IDAgMSAyNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14bGFyZ2UtMjUgewogICAgbWFyZ2luLWxlZnQ6IDI1JTsKICB9CiAgLm1kLWZsZXgteGxhcmdlLTMwIHsKICAgIG1pbi13aWR0aDogMzAlOwogICAgLW1zLWZsZXg6IDAgMSAzMCU7CiAgICBmbGV4OiAwIDEgMzAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTMwIHsKICAgIG1hcmdpbi1sZWZ0OiAzMCU7CiAgfQogIC5tZC1mbGV4LXhsYXJnZS0zNSB7CiAgICBtaW4td2lkdGg6IDM1JTsKICAgIC1tcy1mbGV4OiAwIDEgMzUlOwogICAgZmxleDogMCAxIDM1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS0zNSB7CiAgICBtYXJnaW4tbGVmdDogMzUlOwogIH0KICAubWQtZmxleC14bGFyZ2UtNDAgewogICAgbWluLXdpZHRoOiA0MCU7CiAgICAtbXMtZmxleDogMCAxIDQwJTsKICAgIGZsZXg6IDAgMSA0MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNDAgewogICAgbWFyZ2luLWxlZnQ6IDQwJTsKICB9CiAgLm1kLWZsZXgteGxhcmdlLTQ1IHsKICAgIG1pbi13aWR0aDogNDUlOwogICAgLW1zLWZsZXg6IDAgMSA0NSU7CiAgICBmbGV4OiAwIDEgNDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTQ1IHsKICAgIG1hcmdpbi1sZWZ0OiA0NSU7CiAgfQogIC5tZC1mbGV4LXhsYXJnZS01MCB7CiAgICBtaW4td2lkdGg6IDUwJTsKICAgIC1tcy1mbGV4OiAwIDEgNTAlOwogICAgZmxleDogMCAxIDUwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS01MCB7CiAgICBtYXJnaW4tbGVmdDogNTAlOwogIH0KICAubWQtZmxleC14bGFyZ2UtNTUgewogICAgbWluLXdpZHRoOiA1NSU7CiAgICAtbXMtZmxleDogMCAxIDU1JTsKICAgIGZsZXg6IDAgMSA1NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNTUgewogICAgbWFyZ2luLWxlZnQ6IDU1JTsKICB9CiAgLm1kLWZsZXgteGxhcmdlLTYwIHsKICAgIG1pbi13aWR0aDogNjAlOwogICAgLW1zLWZsZXg6IDAgMSA2MCU7CiAgICBmbGV4OiAwIDEgNjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTYwIHsKICAgIG1hcmdpbi1sZWZ0OiA2MCU7CiAgfQogIC5tZC1mbGV4LXhsYXJnZS02NSB7CiAgICBtaW4td2lkdGg6IDY1JTsKICAgIC1tcy1mbGV4OiAwIDEgNjUlOwogICAgZmxleDogMCAxIDY1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS02NSB7CiAgICBtYXJnaW4tbGVmdDogNjUlOwogIH0KICAubWQtZmxleC14bGFyZ2UtNzAgewogICAgbWluLXdpZHRoOiA3MCU7CiAgICAtbXMtZmxleDogMCAxIDcwJTsKICAgIGZsZXg6IDAgMSA3MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14bGFyZ2UtNzAgewogICAgbWFyZ2luLWxlZnQ6IDcwJTsKICB9CiAgLm1kLWZsZXgteGxhcmdlLTc1IHsKICAgIG1pbi13aWR0aDogNzUlOwogICAgLW1zLWZsZXg6IDAgMSA3NSU7CiAgICBmbGV4OiAwIDEgNzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTc1IHsKICAgIG1hcmdpbi1sZWZ0OiA3NSU7CiAgfQogIC5tZC1mbGV4LXhsYXJnZS04MCB7CiAgICBtaW4td2lkdGg6IDgwJTsKICAgIC1tcy1mbGV4OiAwIDEgODAlOwogICAgZmxleDogMCAxIDgwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS04MCB7CiAgICBtYXJnaW4tbGVmdDogODAlOwogIH0KICAubWQtZmxleC14bGFyZ2UtODUgewogICAgbWluLXdpZHRoOiA4NSU7CiAgICAtbXMtZmxleDogMCAxIDg1JTsKICAgIGZsZXg6IDAgMSA4NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14bGFyZ2UtODUgewogICAgbWFyZ2luLWxlZnQ6IDg1JTsKICB9CiAgLm1kLWZsZXgteGxhcmdlLTkwIHsKICAgIG1pbi13aWR0aDogOTAlOwogICAgLW1zLWZsZXg6IDAgMSA5MCU7CiAgICBmbGV4OiAwIDEgOTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTkwIHsKICAgIG1hcmdpbi1sZWZ0OiA5MCU7CiAgfQogIC5tZC1mbGV4LXhsYXJnZS05NSB7CiAgICBtaW4td2lkdGg6IDk1JTsKICAgIC1tcy1mbGV4OiAwIDEgOTUlOwogICAgZmxleDogMCAxIDk1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhsYXJnZS05NSB7CiAgICBtYXJnaW4tbGVmdDogOTUlOwogIH0KICAubWQtZmxleC14bGFyZ2UtMTAwIHsKICAgIG1pbi13aWR0aDogMTAwJTsKICAgIC1tcy1mbGV4OiAwIDEgMTAwJTsKICAgIGZsZXg6IDAgMSAxMDAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteGxhcmdlLTEwMCB7CiAgICBtYXJnaW4tbGVmdDogMTAwJTsKICB9CiAgLm1kLWFsaWduLXhsYXJnZS1zdGFydCB7CiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsKICB9CiAgLm1kLWFsaWduLXhsYXJnZS1jZW50ZXIgewogICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgfQogIC5tZC1hbGlnbi14bGFyZ2UtZW5kIHsKICAgIC1tcy1mbGV4LXBhY2s6IGVuZDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7CiAgfQogIC5tZC1oaWRlLXhsYXJnZSB7CiAgICBkaXNwbGF5OiBub25lOwogIH0KfQoKQG1lZGlhIChtYXgtd2lkdGg6IDE5MDNweCkgewogIC5tZC1yb3ctbGFyZ2UgewogICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICBmbGV4LWRpcmVjdGlvbjogcm93OwogIH0KICAubWQtY29sdW1uLWxhcmdlIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICB9CiAgLm1kLWZsZXgtbGFyZ2UgewogICAgLW1zLWZsZXg6IDEgMTsKICAgIGZsZXg6IDEgMTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtMzMgewogICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7CiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTsKICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLTY2IHsKICAgIG1pbi13aWR0aDogMzMuMzMzMzMlOwogICAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7CiAgICBmbGV4OiAwIDEgNjYuNjY2NjYlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzMgewogICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTY2IHsKICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLTUgewogICAgbWluLXdpZHRoOiA1JTsKICAgIC1tcy1mbGV4OiAwIDEgNSU7CiAgICBmbGV4OiAwIDEgNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS01IHsKICAgIG1hcmdpbi1sZWZ0OiA1JTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtMTAgewogICAgbWluLXdpZHRoOiAxMCU7CiAgICAtbXMtZmxleDogMCAxIDEwJTsKICAgIGZsZXg6IDAgMSAxMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS0xMCB7CiAgICBtYXJnaW4tbGVmdDogMTAlOwogIH0KICAubWQtZmxleC1sYXJnZS0xNSB7CiAgICBtaW4td2lkdGg6IDE1JTsKICAgIC1tcy1mbGV4OiAwIDEgMTUlOwogICAgZmxleDogMCAxIDE1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTE1IHsKICAgIG1hcmdpbi1sZWZ0OiAxNSU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLTIwIHsKICAgIG1pbi13aWR0aDogMjAlOwogICAgLW1zLWZsZXg6IDAgMSAyMCU7CiAgICBmbGV4OiAwIDEgMjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtMjAgewogICAgbWFyZ2luLWxlZnQ6IDIwJTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtMjUgewogICAgbWluLXdpZHRoOiAyNSU7CiAgICAtbXMtZmxleDogMCAxIDI1JTsKICAgIGZsZXg6IDAgMSAyNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS0yNSB7CiAgICBtYXJnaW4tbGVmdDogMjUlOwogIH0KICAubWQtZmxleC1sYXJnZS0zMCB7CiAgICBtaW4td2lkdGg6IDMwJTsKICAgIC1tcy1mbGV4OiAwIDEgMzAlOwogICAgZmxleDogMCAxIDMwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTMwIHsKICAgIG1hcmdpbi1sZWZ0OiAzMCU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLTM1IHsKICAgIG1pbi13aWR0aDogMzUlOwogICAgLW1zLWZsZXg6IDAgMSAzNSU7CiAgICBmbGV4OiAwIDEgMzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtMzUgewogICAgbWFyZ2luLWxlZnQ6IDM1JTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtNDAgewogICAgbWluLXdpZHRoOiA0MCU7CiAgICAtbXMtZmxleDogMCAxIDQwJTsKICAgIGZsZXg6IDAgMSA0MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS00MCB7CiAgICBtYXJnaW4tbGVmdDogNDAlOwogIH0KICAubWQtZmxleC1sYXJnZS00NSB7CiAgICBtaW4td2lkdGg6IDQ1JTsKICAgIC1tcy1mbGV4OiAwIDEgNDUlOwogICAgZmxleDogMCAxIDQ1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTQ1IHsKICAgIG1hcmdpbi1sZWZ0OiA0NSU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLTUwIHsKICAgIG1pbi13aWR0aDogNTAlOwogICAgLW1zLWZsZXg6IDAgMSA1MCU7CiAgICBmbGV4OiAwIDEgNTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtNTAgewogICAgbWFyZ2luLWxlZnQ6IDUwJTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtNTUgewogICAgbWluLXdpZHRoOiA1NSU7CiAgICAtbXMtZmxleDogMCAxIDU1JTsKICAgIGZsZXg6IDAgMSA1NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS01NSB7CiAgICBtYXJnaW4tbGVmdDogNTUlOwogIH0KICAubWQtZmxleC1sYXJnZS02MCB7CiAgICBtaW4td2lkdGg6IDYwJTsKICAgIC1tcy1mbGV4OiAwIDEgNjAlOwogICAgZmxleDogMCAxIDYwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTYwIHsKICAgIG1hcmdpbi1sZWZ0OiA2MCU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLTY1IHsKICAgIG1pbi13aWR0aDogNjUlOwogICAgLW1zLWZsZXg6IDAgMSA2NSU7CiAgICBmbGV4OiAwIDEgNjUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtNjUgewogICAgbWFyZ2luLWxlZnQ6IDY1JTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtNzAgewogICAgbWluLXdpZHRoOiA3MCU7CiAgICAtbXMtZmxleDogMCAxIDcwJTsKICAgIGZsZXg6IDAgMSA3MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS03MCB7CiAgICBtYXJnaW4tbGVmdDogNzAlOwogIH0KICAubWQtZmxleC1sYXJnZS03NSB7CiAgICBtaW4td2lkdGg6IDc1JTsKICAgIC1tcy1mbGV4OiAwIDEgNzUlOwogICAgZmxleDogMCAxIDc1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTc1IHsKICAgIG1hcmdpbi1sZWZ0OiA3NSU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLTgwIHsKICAgIG1pbi13aWR0aDogODAlOwogICAgLW1zLWZsZXg6IDAgMSA4MCU7CiAgICBmbGV4OiAwIDEgODAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtODAgewogICAgbWFyZ2luLWxlZnQ6IDgwJTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtODUgewogICAgbWluLXdpZHRoOiA4NSU7CiAgICAtbXMtZmxleDogMCAxIDg1JTsKICAgIGZsZXg6IDAgMSA4NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS04NSB7CiAgICBtYXJnaW4tbGVmdDogODUlOwogIH0KICAubWQtZmxleC1sYXJnZS05MCB7CiAgICBtaW4td2lkdGg6IDkwJTsKICAgIC1tcy1mbGV4OiAwIDEgOTAlOwogICAgZmxleDogMCAxIDkwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLTkwIHsKICAgIG1hcmdpbi1sZWZ0OiA5MCU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLTk1IHsKICAgIG1pbi13aWR0aDogOTUlOwogICAgLW1zLWZsZXg6IDAgMSA5NSU7CiAgICBmbGV4OiAwIDEgOTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtOTUgewogICAgbWFyZ2luLWxlZnQ6IDk1JTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtMTAwIHsKICAgIG1pbi13aWR0aDogMTAwJTsKICAgIC1tcy1mbGV4OiAwIDEgMTAwJTsKICAgIGZsZXg6IDAgMSAxMDAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtMTAwIHsKICAgIG1hcmdpbi1sZWZ0OiAxMDAlOwogIH0KICAubWQtYWxpZ24tbGFyZ2Utc3RhcnQgewogICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7CiAgfQogIC5tZC1hbGlnbi1sYXJnZS1jZW50ZXIgewogICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgfQogIC5tZC1hbGlnbi1sYXJnZS1lbmQgewogICAgLW1zLWZsZXgtcGFjazogZW5kOwogICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKICB9CiAgLm1kLWhpZGUtbGFyZ2UgewogICAgZGlzcGxheTogbm9uZTsKICB9Cn0KCkBtZWRpYSAobWF4LXdpZHRoOiAxMjY0cHgpIHsKICAubWQtcm93LW1lZGl1bSB7CiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdzsKICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgfQogIC5tZC1jb2x1bW4tbWVkaXVtIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICB9CiAgLm1kLWZsZXgtbWVkaXVtIHsKICAgIC1tcy1mbGV4OiAxIDE7CiAgICBmbGV4OiAxIDE7CiAgfQogIC5tZC1mbGV4LW1lZGl1bS0zMyB7CiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTsKICAgIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlOwogICAgZmxleDogMCAxIDMzLjMzMzMzJTsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLTY2IHsKICAgIG1pbi13aWR0aDogMzMuMzMzMzMlOwogICAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7CiAgICBmbGV4OiAwIDEgNjYuNjY2NjYlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLTMzIHsKICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjYgewogICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2JTsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLTUgewogICAgbWluLXdpZHRoOiA1JTsKICAgIC1tcy1mbGV4OiAwIDEgNSU7CiAgICBmbGV4OiAwIDEgNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNSB7CiAgICBtYXJnaW4tbGVmdDogNSU7CiAgfQogIC5tZC1mbGV4LW1lZGl1bS0xMCB7CiAgICBtaW4td2lkdGg6IDEwJTsKICAgIC1tcy1mbGV4OiAwIDEgMTAlOwogICAgZmxleDogMCAxIDEwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0xMCB7CiAgICBtYXJnaW4tbGVmdDogMTAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tMTUgewogICAgbWluLXdpZHRoOiAxNSU7CiAgICAtbXMtZmxleDogMCAxIDE1JTsKICAgIGZsZXg6IDAgMSAxNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTUgewogICAgbWFyZ2luLWxlZnQ6IDE1JTsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLTIwIHsKICAgIG1pbi13aWR0aDogMjAlOwogICAgLW1zLWZsZXg6IDAgMSAyMCU7CiAgICBmbGV4OiAwIDEgMjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLTIwIHsKICAgIG1hcmdpbi1sZWZ0OiAyMCU7CiAgfQogIC5tZC1mbGV4LW1lZGl1bS0yNSB7CiAgICBtaW4td2lkdGg6IDI1JTsKICAgIC1tcy1mbGV4OiAwIDEgMjUlOwogICAgZmxleDogMCAxIDI1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS0yNSB7CiAgICBtYXJnaW4tbGVmdDogMjUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tMzAgewogICAgbWluLXdpZHRoOiAzMCU7CiAgICAtbXMtZmxleDogMCAxIDMwJTsKICAgIGZsZXg6IDAgMSAzMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMzAgewogICAgbWFyZ2luLWxlZnQ6IDMwJTsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLTM1IHsKICAgIG1pbi13aWR0aDogMzUlOwogICAgLW1zLWZsZXg6IDAgMSAzNSU7CiAgICBmbGV4OiAwIDEgMzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLTM1IHsKICAgIG1hcmdpbi1sZWZ0OiAzNSU7CiAgfQogIC5tZC1mbGV4LW1lZGl1bS00MCB7CiAgICBtaW4td2lkdGg6IDQwJTsKICAgIC1tcy1mbGV4OiAwIDEgNDAlOwogICAgZmxleDogMCAxIDQwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS00MCB7CiAgICBtYXJnaW4tbGVmdDogNDAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tNDUgewogICAgbWluLXdpZHRoOiA0NSU7CiAgICAtbXMtZmxleDogMCAxIDQ1JTsKICAgIGZsZXg6IDAgMSA0NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNDUgewogICAgbWFyZ2luLWxlZnQ6IDQ1JTsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLTUwIHsKICAgIG1pbi13aWR0aDogNTAlOwogICAgLW1zLWZsZXg6IDAgMSA1MCU7CiAgICBmbGV4OiAwIDEgNTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLTUwIHsKICAgIG1hcmdpbi1sZWZ0OiA1MCU7CiAgfQogIC5tZC1mbGV4LW1lZGl1bS01NSB7CiAgICBtaW4td2lkdGg6IDU1JTsKICAgIC1tcy1mbGV4OiAwIDEgNTUlOwogICAgZmxleDogMCAxIDU1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS01NSB7CiAgICBtYXJnaW4tbGVmdDogNTUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tNjAgewogICAgbWluLXdpZHRoOiA2MCU7CiAgICAtbXMtZmxleDogMCAxIDYwJTsKICAgIGZsZXg6IDAgMSA2MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNjAgewogICAgbWFyZ2luLWxlZnQ6IDYwJTsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLTY1IHsKICAgIG1pbi13aWR0aDogNjUlOwogICAgLW1zLWZsZXg6IDAgMSA2NSU7CiAgICBmbGV4OiAwIDEgNjUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLTY1IHsKICAgIG1hcmdpbi1sZWZ0OiA2NSU7CiAgfQogIC5tZC1mbGV4LW1lZGl1bS03MCB7CiAgICBtaW4td2lkdGg6IDcwJTsKICAgIC1tcy1mbGV4OiAwIDEgNzAlOwogICAgZmxleDogMCAxIDcwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS03MCB7CiAgICBtYXJnaW4tbGVmdDogNzAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tNzUgewogICAgbWluLXdpZHRoOiA3NSU7CiAgICAtbXMtZmxleDogMCAxIDc1JTsKICAgIGZsZXg6IDAgMSA3NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tNzUgewogICAgbWFyZ2luLWxlZnQ6IDc1JTsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLTgwIHsKICAgIG1pbi13aWR0aDogODAlOwogICAgLW1zLWZsZXg6IDAgMSA4MCU7CiAgICBmbGV4OiAwIDEgODAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLTgwIHsKICAgIG1hcmdpbi1sZWZ0OiA4MCU7CiAgfQogIC5tZC1mbGV4LW1lZGl1bS04NSB7CiAgICBtaW4td2lkdGg6IDg1JTsKICAgIC1tcy1mbGV4OiAwIDEgODUlOwogICAgZmxleDogMCAxIDg1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS04NSB7CiAgICBtYXJnaW4tbGVmdDogODUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tOTAgewogICAgbWluLXdpZHRoOiA5MCU7CiAgICAtbXMtZmxleDogMCAxIDkwJTsKICAgIGZsZXg6IDAgMSA5MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tOTAgewogICAgbWFyZ2luLWxlZnQ6IDkwJTsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLTk1IHsKICAgIG1pbi13aWR0aDogOTUlOwogICAgLW1zLWZsZXg6IDAgMSA5NSU7CiAgICBmbGV4OiAwIDEgOTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLTk1IHsKICAgIG1hcmdpbi1sZWZ0OiA5NSU7CiAgfQogIC5tZC1mbGV4LW1lZGl1bS0xMDAgewogICAgbWluLXdpZHRoOiAxMDAlOwogICAgLW1zLWZsZXg6IDAgMSAxMDAlOwogICAgZmxleDogMCAxIDEwMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tMTAwIHsKICAgIG1hcmdpbi1sZWZ0OiAxMDAlOwogIH0KICAubWQtYWxpZ24tbWVkaXVtLXN0YXJ0IHsKICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0OwogICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OwogIH0KICAubWQtYWxpZ24tbWVkaXVtLWNlbnRlciB7CiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICB9CiAgLm1kLWFsaWduLW1lZGl1bS1lbmQgewogICAgLW1zLWZsZXgtcGFjazogZW5kOwogICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKICB9CiAgLm1kLWhpZGUtbWVkaXVtIHsKICAgIGRpc3BsYXk6IG5vbmU7CiAgfQp9CgpAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsKICAubWQtcm93LXhzbWFsbCB7CiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdzsKICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgfQogIC5tZC1jb2x1bW4teHNtYWxsIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICB9CiAgLm1kLWZsZXgteHNtYWxsIHsKICAgIC1tcy1mbGV4OiAxIDE7CiAgICBmbGV4OiAxIDE7CiAgfQogIC5tZC1mbGV4LXhzbWFsbC0zMyB7CiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTsKICAgIC1tcy1mbGV4OiAwIDEgMzMuMzMzMzMlOwogICAgZmxleDogMCAxIDMzLjMzMzMzJTsKICB9CiAgLm1kLWZsZXgteHNtYWxsLTY2IHsKICAgIG1pbi13aWR0aDogMzMuMzMzMzMlOwogICAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7CiAgICBmbGV4OiAwIDEgNjYuNjY2NjYlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLTMzIHsKICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtNjYgewogICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2JTsKICB9CiAgLm1kLWZsZXgteHNtYWxsLTUgewogICAgbWluLXdpZHRoOiA1JTsKICAgIC1tcy1mbGV4OiAwIDEgNSU7CiAgICBmbGV4OiAwIDEgNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtNSB7CiAgICBtYXJnaW4tbGVmdDogNSU7CiAgfQogIC5tZC1mbGV4LXhzbWFsbC0xMCB7CiAgICBtaW4td2lkdGg6IDEwJTsKICAgIC1tcy1mbGV4OiAwIDEgMTAlOwogICAgZmxleDogMCAxIDEwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0xMCB7CiAgICBtYXJnaW4tbGVmdDogMTAlOwogIH0KICAubWQtZmxleC14c21hbGwtMTUgewogICAgbWluLXdpZHRoOiAxNSU7CiAgICAtbXMtZmxleDogMCAxIDE1JTsKICAgIGZsZXg6IDAgMSAxNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtMTUgewogICAgbWFyZ2luLWxlZnQ6IDE1JTsKICB9CiAgLm1kLWZsZXgteHNtYWxsLTIwIHsKICAgIG1pbi13aWR0aDogMjAlOwogICAgLW1zLWZsZXg6IDAgMSAyMCU7CiAgICBmbGV4OiAwIDEgMjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLTIwIHsKICAgIG1hcmdpbi1sZWZ0OiAyMCU7CiAgfQogIC5tZC1mbGV4LXhzbWFsbC0yNSB7CiAgICBtaW4td2lkdGg6IDI1JTsKICAgIC1tcy1mbGV4OiAwIDEgMjUlOwogICAgZmxleDogMCAxIDI1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC0yNSB7CiAgICBtYXJnaW4tbGVmdDogMjUlOwogIH0KICAubWQtZmxleC14c21hbGwtMzAgewogICAgbWluLXdpZHRoOiAzMCU7CiAgICAtbXMtZmxleDogMCAxIDMwJTsKICAgIGZsZXg6IDAgMSAzMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtMzAgewogICAgbWFyZ2luLWxlZnQ6IDMwJTsKICB9CiAgLm1kLWZsZXgteHNtYWxsLTM1IHsKICAgIG1pbi13aWR0aDogMzUlOwogICAgLW1zLWZsZXg6IDAgMSAzNSU7CiAgICBmbGV4OiAwIDEgMzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLTM1IHsKICAgIG1hcmdpbi1sZWZ0OiAzNSU7CiAgfQogIC5tZC1mbGV4LXhzbWFsbC00MCB7CiAgICBtaW4td2lkdGg6IDQwJTsKICAgIC1tcy1mbGV4OiAwIDEgNDAlOwogICAgZmxleDogMCAxIDQwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC00MCB7CiAgICBtYXJnaW4tbGVmdDogNDAlOwogIH0KICAubWQtZmxleC14c21hbGwtNDUgewogICAgbWluLXdpZHRoOiA0NSU7CiAgICAtbXMtZmxleDogMCAxIDQ1JTsKICAgIGZsZXg6IDAgMSA0NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtNDUgewogICAgbWFyZ2luLWxlZnQ6IDQ1JTsKICB9CiAgLm1kLWZsZXgteHNtYWxsLTUwIHsKICAgIG1pbi13aWR0aDogNTAlOwogICAgLW1zLWZsZXg6IDAgMSA1MCU7CiAgICBmbGV4OiAwIDEgNTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLTUwIHsKICAgIG1hcmdpbi1sZWZ0OiA1MCU7CiAgfQogIC5tZC1mbGV4LXhzbWFsbC01NSB7CiAgICBtaW4td2lkdGg6IDU1JTsKICAgIC1tcy1mbGV4OiAwIDEgNTUlOwogICAgZmxleDogMCAxIDU1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC01NSB7CiAgICBtYXJnaW4tbGVmdDogNTUlOwogIH0KICAubWQtZmxleC14c21hbGwtNjAgewogICAgbWluLXdpZHRoOiA2MCU7CiAgICAtbXMtZmxleDogMCAxIDYwJTsKICAgIGZsZXg6IDAgMSA2MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtNjAgewogICAgbWFyZ2luLWxlZnQ6IDYwJTsKICB9CiAgLm1kLWZsZXgteHNtYWxsLTY1IHsKICAgIG1pbi13aWR0aDogNjUlOwogICAgLW1zLWZsZXg6IDAgMSA2NSU7CiAgICBmbGV4OiAwIDEgNjUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLTY1IHsKICAgIG1hcmdpbi1sZWZ0OiA2NSU7CiAgfQogIC5tZC1mbGV4LXhzbWFsbC03MCB7CiAgICBtaW4td2lkdGg6IDcwJTsKICAgIC1tcy1mbGV4OiAwIDEgNzAlOwogICAgZmxleDogMCAxIDcwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC03MCB7CiAgICBtYXJnaW4tbGVmdDogNzAlOwogIH0KICAubWQtZmxleC14c21hbGwtNzUgewogICAgbWluLXdpZHRoOiA3NSU7CiAgICAtbXMtZmxleDogMCAxIDc1JTsKICAgIGZsZXg6IDAgMSA3NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtNzUgewogICAgbWFyZ2luLWxlZnQ6IDc1JTsKICB9CiAgLm1kLWZsZXgteHNtYWxsLTgwIHsKICAgIG1pbi13aWR0aDogODAlOwogICAgLW1zLWZsZXg6IDAgMSA4MCU7CiAgICBmbGV4OiAwIDEgODAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLTgwIHsKICAgIG1hcmdpbi1sZWZ0OiA4MCU7CiAgfQogIC5tZC1mbGV4LXhzbWFsbC04NSB7CiAgICBtaW4td2lkdGg6IDg1JTsKICAgIC1tcy1mbGV4OiAwIDEgODUlOwogICAgZmxleDogMCAxIDg1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC04NSB7CiAgICBtYXJnaW4tbGVmdDogODUlOwogIH0KICAubWQtZmxleC14c21hbGwtOTAgewogICAgbWluLXdpZHRoOiA5MCU7CiAgICAtbXMtZmxleDogMCAxIDkwJTsKICAgIGZsZXg6IDAgMSA5MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtOTAgewogICAgbWFyZ2luLWxlZnQ6IDkwJTsKICB9CiAgLm1kLWZsZXgteHNtYWxsLTk1IHsKICAgIG1pbi13aWR0aDogOTUlOwogICAgLW1zLWZsZXg6IDAgMSA5NSU7CiAgICBmbGV4OiAwIDEgOTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLTk1IHsKICAgIG1hcmdpbi1sZWZ0OiA5NSU7CiAgfQogIC5tZC1mbGV4LXhzbWFsbC0xMDAgewogICAgbWluLXdpZHRoOiAxMDAlOwogICAgLW1zLWZsZXg6IDAgMSAxMDAlOwogICAgZmxleDogMCAxIDEwMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtMTAwIHsKICAgIG1hcmdpbi1sZWZ0OiAxMDAlOwogIH0KICAubWQtYWxpZ24teHNtYWxsLXN0YXJ0IHsKICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0OwogICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OwogIH0KICAubWQtYWxpZ24teHNtYWxsLWNlbnRlciB7CiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICB9CiAgLm1kLWFsaWduLXhzbWFsbC1lbmQgewogICAgLW1zLWZsZXgtcGFjazogZW5kOwogICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKICB9CiAgLm1kLWhpZGUteHNtYWxsIHsKICAgIGRpc3BsYXk6IG5vbmU7CiAgfQp9CgpAbWVkaWEgKG1pbi13aWR0aDogMTI2NXB4KSB7CiAgLm1kLXJvdy1sYXJnZS1hbmQtdXAgewogICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICBmbGV4LWRpcmVjdGlvbjogcm93OwogIH0KICAubWQtY29sdW1uLWxhcmdlLWFuZC11cCB7CiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cCB7CiAgICAtbXMtZmxleDogMSAxOwogICAgZmxleDogMSAxOwogIH0KICAubWQtZmxleC1sYXJnZS1hbmQtdXAtMzMgewogICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7CiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTsKICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cC02NiB7CiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTsKICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlOwogICAgZmxleDogMCAxIDY2LjY2NjY2JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0zMyB7CiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTY2IHsKICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cC01IHsKICAgIG1pbi13aWR0aDogNSU7CiAgICAtbXMtZmxleDogMCAxIDUlOwogICAgZmxleDogMCAxIDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTUgewogICAgbWFyZ2luLWxlZnQ6IDUlOwogIH0KICAubWQtZmxleC1sYXJnZS1hbmQtdXAtMTAgewogICAgbWluLXdpZHRoOiAxMCU7CiAgICAtbXMtZmxleDogMCAxIDEwJTsKICAgIGZsZXg6IDAgMSAxMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMTAgewogICAgbWFyZ2luLWxlZnQ6IDEwJTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTE1IHsKICAgIG1pbi13aWR0aDogMTUlOwogICAgLW1zLWZsZXg6IDAgMSAxNSU7CiAgICBmbGV4OiAwIDEgMTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTE1IHsKICAgIG1hcmdpbi1sZWZ0OiAxNSU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cC0yMCB7CiAgICBtaW4td2lkdGg6IDIwJTsKICAgIC1tcy1mbGV4OiAwIDEgMjAlOwogICAgZmxleDogMCAxIDIwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0yMCB7CiAgICBtYXJnaW4tbGVmdDogMjAlOwogIH0KICAubWQtZmxleC1sYXJnZS1hbmQtdXAtMjUgewogICAgbWluLXdpZHRoOiAyNSU7CiAgICAtbXMtZmxleDogMCAxIDI1JTsKICAgIGZsZXg6IDAgMSAyNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtMjUgewogICAgbWFyZ2luLWxlZnQ6IDI1JTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTMwIHsKICAgIG1pbi13aWR0aDogMzAlOwogICAgLW1zLWZsZXg6IDAgMSAzMCU7CiAgICBmbGV4OiAwIDEgMzAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTMwIHsKICAgIG1hcmdpbi1sZWZ0OiAzMCU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cC0zNSB7CiAgICBtaW4td2lkdGg6IDM1JTsKICAgIC1tcy1mbGV4OiAwIDEgMzUlOwogICAgZmxleDogMCAxIDM1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC0zNSB7CiAgICBtYXJnaW4tbGVmdDogMzUlOwogIH0KICAubWQtZmxleC1sYXJnZS1hbmQtdXAtNDAgewogICAgbWluLXdpZHRoOiA0MCU7CiAgICAtbXMtZmxleDogMCAxIDQwJTsKICAgIGZsZXg6IDAgMSA0MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNDAgewogICAgbWFyZ2luLWxlZnQ6IDQwJTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTQ1IHsKICAgIG1pbi13aWR0aDogNDUlOwogICAgLW1zLWZsZXg6IDAgMSA0NSU7CiAgICBmbGV4OiAwIDEgNDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTQ1IHsKICAgIG1hcmdpbi1sZWZ0OiA0NSU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cC01MCB7CiAgICBtaW4td2lkdGg6IDUwJTsKICAgIC1tcy1mbGV4OiAwIDEgNTAlOwogICAgZmxleDogMCAxIDUwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC01MCB7CiAgICBtYXJnaW4tbGVmdDogNTAlOwogIH0KICAubWQtZmxleC1sYXJnZS1hbmQtdXAtNTUgewogICAgbWluLXdpZHRoOiA1NSU7CiAgICAtbXMtZmxleDogMCAxIDU1JTsKICAgIGZsZXg6IDAgMSA1NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNTUgewogICAgbWFyZ2luLWxlZnQ6IDU1JTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTYwIHsKICAgIG1pbi13aWR0aDogNjAlOwogICAgLW1zLWZsZXg6IDAgMSA2MCU7CiAgICBmbGV4OiAwIDEgNjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTYwIHsKICAgIG1hcmdpbi1sZWZ0OiA2MCU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cC02NSB7CiAgICBtaW4td2lkdGg6IDY1JTsKICAgIC1tcy1mbGV4OiAwIDEgNjUlOwogICAgZmxleDogMCAxIDY1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC02NSB7CiAgICBtYXJnaW4tbGVmdDogNjUlOwogIH0KICAubWQtZmxleC1sYXJnZS1hbmQtdXAtNzAgewogICAgbWluLXdpZHRoOiA3MCU7CiAgICAtbXMtZmxleDogMCAxIDcwJTsKICAgIGZsZXg6IDAgMSA3MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtNzAgewogICAgbWFyZ2luLWxlZnQ6IDcwJTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTc1IHsKICAgIG1pbi13aWR0aDogNzUlOwogICAgLW1zLWZsZXg6IDAgMSA3NSU7CiAgICBmbGV4OiAwIDEgNzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTc1IHsKICAgIG1hcmdpbi1sZWZ0OiA3NSU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cC04MCB7CiAgICBtaW4td2lkdGg6IDgwJTsKICAgIC1tcy1mbGV4OiAwIDEgODAlOwogICAgZmxleDogMCAxIDgwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC04MCB7CiAgICBtYXJnaW4tbGVmdDogODAlOwogIH0KICAubWQtZmxleC1sYXJnZS1hbmQtdXAtODUgewogICAgbWluLXdpZHRoOiA4NSU7CiAgICAtbXMtZmxleDogMCAxIDg1JTsKICAgIGZsZXg6IDAgMSA4NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1sYXJnZS1hbmQtdXAtODUgewogICAgbWFyZ2luLWxlZnQ6IDg1JTsKICB9CiAgLm1kLWZsZXgtbGFyZ2UtYW5kLXVwLTkwIHsKICAgIG1pbi13aWR0aDogOTAlOwogICAgLW1zLWZsZXg6IDAgMSA5MCU7CiAgICBmbGV4OiAwIDEgOTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTkwIHsKICAgIG1hcmdpbi1sZWZ0OiA5MCU7CiAgfQogIC5tZC1mbGV4LWxhcmdlLWFuZC11cC05NSB7CiAgICBtaW4td2lkdGg6IDk1JTsKICAgIC1tcy1mbGV4OiAwIDEgOTUlOwogICAgZmxleDogMCAxIDk1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LWxhcmdlLWFuZC11cC05NSB7CiAgICBtYXJnaW4tbGVmdDogOTUlOwogIH0KICAubWQtZmxleC1sYXJnZS1hbmQtdXAtMTAwIHsKICAgIG1pbi13aWR0aDogMTAwJTsKICAgIC1tcy1mbGV4OiAwIDEgMTAwJTsKICAgIGZsZXg6IDAgMSAxMDAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbGFyZ2UtYW5kLXVwLTEwMCB7CiAgICBtYXJnaW4tbGVmdDogMTAwJTsKICB9CiAgLm1kLWFsaWduLWxhcmdlLWFuZC11cC1zdGFydCB7CiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsKICB9CiAgLm1kLWFsaWduLWxhcmdlLWFuZC11cC1jZW50ZXIgewogICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgfQogIC5tZC1hbGlnbi1sYXJnZS1hbmQtdXAtZW5kIHsKICAgIC1tcy1mbGV4LXBhY2s6IGVuZDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7CiAgfQogIC5tZC1oaWRlLWxhcmdlLWFuZC11cCB7CiAgICBkaXNwbGF5OiBub25lOwogIH0KfQoKQG1lZGlhIChtaW4td2lkdGg6IDk0NXB4KSB7CiAgLm1kLXJvdy1tZWRpdW0tYW5kLXVwIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93OwogICAgZmxleC1kaXJlY3Rpb246IHJvdzsKICB9CiAgLm1kLWNvbHVtbi1tZWRpdW0tYW5kLXVwIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICB9CiAgLm1kLWZsZXgtbWVkaXVtLWFuZC11cCB7CiAgICAtbXMtZmxleDogMSAxOwogICAgZmxleDogMSAxOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTMzIHsKICAgIG1pbi13aWR0aDogMzMuMzMzMzMlOwogICAgLW1zLWZsZXg6IDAgMSAzMy4zMzMzMyU7CiAgICBmbGV4OiAwIDEgMzMuMzMzMzMlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTY2IHsKICAgIG1pbi13aWR0aDogMzMuMzMzMzMlOwogICAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7CiAgICBmbGV4OiAwIDEgNjYuNjY2NjYlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0zMyB7CiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC02NiB7CiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTUgewogICAgbWluLXdpZHRoOiA1JTsKICAgIC1tcy1mbGV4OiAwIDEgNSU7CiAgICBmbGV4OiAwIDEgNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1tZWRpdW0tYW5kLXVwLTUgewogICAgbWFyZ2luLWxlZnQ6IDUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTEwIHsKICAgIG1pbi13aWR0aDogMTAlOwogICAgLW1zLWZsZXg6IDAgMSAxMCU7CiAgICBmbGV4OiAwIDEgMTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0xMCB7CiAgICBtYXJnaW4tbGVmdDogMTAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTE1IHsKICAgIG1pbi13aWR0aDogMTUlOwogICAgLW1zLWZsZXg6IDAgMSAxNSU7CiAgICBmbGV4OiAwIDEgMTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0xNSB7CiAgICBtYXJnaW4tbGVmdDogMTUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTIwIHsKICAgIG1pbi13aWR0aDogMjAlOwogICAgLW1zLWZsZXg6IDAgMSAyMCU7CiAgICBmbGV4OiAwIDEgMjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0yMCB7CiAgICBtYXJnaW4tbGVmdDogMjAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTI1IHsKICAgIG1pbi13aWR0aDogMjUlOwogICAgLW1zLWZsZXg6IDAgMSAyNSU7CiAgICBmbGV4OiAwIDEgMjUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0yNSB7CiAgICBtYXJnaW4tbGVmdDogMjUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTMwIHsKICAgIG1pbi13aWR0aDogMzAlOwogICAgLW1zLWZsZXg6IDAgMSAzMCU7CiAgICBmbGV4OiAwIDEgMzAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0zMCB7CiAgICBtYXJnaW4tbGVmdDogMzAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTM1IHsKICAgIG1pbi13aWR0aDogMzUlOwogICAgLW1zLWZsZXg6IDAgMSAzNSU7CiAgICBmbGV4OiAwIDEgMzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC0zNSB7CiAgICBtYXJnaW4tbGVmdDogMzUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTQwIHsKICAgIG1pbi13aWR0aDogNDAlOwogICAgLW1zLWZsZXg6IDAgMSA0MCU7CiAgICBmbGV4OiAwIDEgNDAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC00MCB7CiAgICBtYXJnaW4tbGVmdDogNDAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTQ1IHsKICAgIG1pbi13aWR0aDogNDUlOwogICAgLW1zLWZsZXg6IDAgMSA0NSU7CiAgICBmbGV4OiAwIDEgNDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC00NSB7CiAgICBtYXJnaW4tbGVmdDogNDUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTUwIHsKICAgIG1pbi13aWR0aDogNTAlOwogICAgLW1zLWZsZXg6IDAgMSA1MCU7CiAgICBmbGV4OiAwIDEgNTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC01MCB7CiAgICBtYXJnaW4tbGVmdDogNTAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTU1IHsKICAgIG1pbi13aWR0aDogNTUlOwogICAgLW1zLWZsZXg6IDAgMSA1NSU7CiAgICBmbGV4OiAwIDEgNTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC01NSB7CiAgICBtYXJnaW4tbGVmdDogNTUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTYwIHsKICAgIG1pbi13aWR0aDogNjAlOwogICAgLW1zLWZsZXg6IDAgMSA2MCU7CiAgICBmbGV4OiAwIDEgNjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC02MCB7CiAgICBtYXJnaW4tbGVmdDogNjAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTY1IHsKICAgIG1pbi13aWR0aDogNjUlOwogICAgLW1zLWZsZXg6IDAgMSA2NSU7CiAgICBmbGV4OiAwIDEgNjUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC02NSB7CiAgICBtYXJnaW4tbGVmdDogNjUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTcwIHsKICAgIG1pbi13aWR0aDogNzAlOwogICAgLW1zLWZsZXg6IDAgMSA3MCU7CiAgICBmbGV4OiAwIDEgNzAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC03MCB7CiAgICBtYXJnaW4tbGVmdDogNzAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTc1IHsKICAgIG1pbi13aWR0aDogNzUlOwogICAgLW1zLWZsZXg6IDAgMSA3NSU7CiAgICBmbGV4OiAwIDEgNzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC03NSB7CiAgICBtYXJnaW4tbGVmdDogNzUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTgwIHsKICAgIG1pbi13aWR0aDogODAlOwogICAgLW1zLWZsZXg6IDAgMSA4MCU7CiAgICBmbGV4OiAwIDEgODAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC04MCB7CiAgICBtYXJnaW4tbGVmdDogODAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTg1IHsKICAgIG1pbi13aWR0aDogODUlOwogICAgLW1zLWZsZXg6IDAgMSA4NSU7CiAgICBmbGV4OiAwIDEgODUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC04NSB7CiAgICBtYXJnaW4tbGVmdDogODUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTkwIHsKICAgIG1pbi13aWR0aDogOTAlOwogICAgLW1zLWZsZXg6IDAgMSA5MCU7CiAgICBmbGV4OiAwIDEgOTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC05MCB7CiAgICBtYXJnaW4tbGVmdDogOTAlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTk1IHsKICAgIG1pbi13aWR0aDogOTUlOwogICAgLW1zLWZsZXg6IDAgMSA5NSU7CiAgICBmbGV4OiAwIDEgOTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtbWVkaXVtLWFuZC11cC05NSB7CiAgICBtYXJnaW4tbGVmdDogOTUlOwogIH0KICAubWQtZmxleC1tZWRpdW0tYW5kLXVwLTEwMCB7CiAgICBtaW4td2lkdGg6IDEwMCU7CiAgICAtbXMtZmxleDogMCAxIDEwMCU7CiAgICBmbGV4OiAwIDEgMTAwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LW1lZGl1bS1hbmQtdXAtMTAwIHsKICAgIG1hcmdpbi1sZWZ0OiAxMDAlOwogIH0KICAubWQtYWxpZ24tbWVkaXVtLWFuZC11cC1zdGFydCB7CiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsKICB9CiAgLm1kLWFsaWduLW1lZGl1bS1hbmQtdXAtY2VudGVyIHsKICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjsKICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIH0KICAubWQtYWxpZ24tbWVkaXVtLWFuZC11cC1lbmQgewogICAgLW1zLWZsZXgtcGFjazogZW5kOwogICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKICB9CiAgLm1kLWhpZGUtbWVkaXVtLWFuZC11cCB7CiAgICBkaXNwbGF5OiBub25lOwogIH0KfQoKQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7CiAgLm1kLXJvdy1zbWFsbC1hbmQtdXAgewogICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICBmbGV4LWRpcmVjdGlvbjogcm93OwogIH0KICAubWQtY29sdW1uLXNtYWxsLWFuZC11cCB7CiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cCB7CiAgICAtbXMtZmxleDogMSAxOwogICAgZmxleDogMSAxOwogIH0KICAubWQtZmxleC1zbWFsbC1hbmQtdXAtMzMgewogICAgbWluLXdpZHRoOiAzMy4zMzMzMyU7CiAgICAtbXMtZmxleDogMCAxIDMzLjMzMzMzJTsKICAgIGZsZXg6IDAgMSAzMy4zMzMzMyU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cC02NiB7CiAgICBtaW4td2lkdGg6IDMzLjMzMzMzJTsKICAgIC1tcy1mbGV4OiAwIDEgNjYuNjY2NjYlOwogICAgZmxleDogMCAxIDY2LjY2NjY2JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0zMyB7CiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTY2IHsKICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NiU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cC01IHsKICAgIG1pbi13aWR0aDogNSU7CiAgICAtbXMtZmxleDogMCAxIDUlOwogICAgZmxleDogMCAxIDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTUgewogICAgbWFyZ2luLWxlZnQ6IDUlOwogIH0KICAubWQtZmxleC1zbWFsbC1hbmQtdXAtMTAgewogICAgbWluLXdpZHRoOiAxMCU7CiAgICAtbXMtZmxleDogMCAxIDEwJTsKICAgIGZsZXg6IDAgMSAxMCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC1hbmQtdXAtMTAgewogICAgbWFyZ2luLWxlZnQ6IDEwJTsKICB9CiAgLm1kLWZsZXgtc21hbGwtYW5kLXVwLTE1IHsKICAgIG1pbi13aWR0aDogMTUlOwogICAgLW1zLWZsZXg6IDAgMSAxNSU7CiAgICBmbGV4OiAwIDEgMTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTE1IHsKICAgIG1hcmdpbi1sZWZ0OiAxNSU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cC0yMCB7CiAgICBtaW4td2lkdGg6IDIwJTsKICAgIC1tcy1mbGV4OiAwIDEgMjAlOwogICAgZmxleDogMCAxIDIwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0yMCB7CiAgICBtYXJnaW4tbGVmdDogMjAlOwogIH0KICAubWQtZmxleC1zbWFsbC1hbmQtdXAtMjUgewogICAgbWluLXdpZHRoOiAyNSU7CiAgICAtbXMtZmxleDogMCAxIDI1JTsKICAgIGZsZXg6IDAgMSAyNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC1hbmQtdXAtMjUgewogICAgbWFyZ2luLWxlZnQ6IDI1JTsKICB9CiAgLm1kLWZsZXgtc21hbGwtYW5kLXVwLTMwIHsKICAgIG1pbi13aWR0aDogMzAlOwogICAgLW1zLWZsZXg6IDAgMSAzMCU7CiAgICBmbGV4OiAwIDEgMzAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTMwIHsKICAgIG1hcmdpbi1sZWZ0OiAzMCU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cC0zNSB7CiAgICBtaW4td2lkdGg6IDM1JTsKICAgIC1tcy1mbGV4OiAwIDEgMzUlOwogICAgZmxleDogMCAxIDM1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC0zNSB7CiAgICBtYXJnaW4tbGVmdDogMzUlOwogIH0KICAubWQtZmxleC1zbWFsbC1hbmQtdXAtNDAgewogICAgbWluLXdpZHRoOiA0MCU7CiAgICAtbXMtZmxleDogMCAxIDQwJTsKICAgIGZsZXg6IDAgMSA0MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC1hbmQtdXAtNDAgewogICAgbWFyZ2luLWxlZnQ6IDQwJTsKICB9CiAgLm1kLWZsZXgtc21hbGwtYW5kLXVwLTQ1IHsKICAgIG1pbi13aWR0aDogNDUlOwogICAgLW1zLWZsZXg6IDAgMSA0NSU7CiAgICBmbGV4OiAwIDEgNDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTQ1IHsKICAgIG1hcmdpbi1sZWZ0OiA0NSU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cC01MCB7CiAgICBtaW4td2lkdGg6IDUwJTsKICAgIC1tcy1mbGV4OiAwIDEgNTAlOwogICAgZmxleDogMCAxIDUwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC01MCB7CiAgICBtYXJnaW4tbGVmdDogNTAlOwogIH0KICAubWQtZmxleC1zbWFsbC1hbmQtdXAtNTUgewogICAgbWluLXdpZHRoOiA1NSU7CiAgICAtbXMtZmxleDogMCAxIDU1JTsKICAgIGZsZXg6IDAgMSA1NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC1hbmQtdXAtNTUgewogICAgbWFyZ2luLWxlZnQ6IDU1JTsKICB9CiAgLm1kLWZsZXgtc21hbGwtYW5kLXVwLTYwIHsKICAgIG1pbi13aWR0aDogNjAlOwogICAgLW1zLWZsZXg6IDAgMSA2MCU7CiAgICBmbGV4OiAwIDEgNjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTYwIHsKICAgIG1hcmdpbi1sZWZ0OiA2MCU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cC02NSB7CiAgICBtaW4td2lkdGg6IDY1JTsKICAgIC1tcy1mbGV4OiAwIDEgNjUlOwogICAgZmxleDogMCAxIDY1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC02NSB7CiAgICBtYXJnaW4tbGVmdDogNjUlOwogIH0KICAubWQtZmxleC1zbWFsbC1hbmQtdXAtNzAgewogICAgbWluLXdpZHRoOiA3MCU7CiAgICAtbXMtZmxleDogMCAxIDcwJTsKICAgIGZsZXg6IDAgMSA3MCU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC1hbmQtdXAtNzAgewogICAgbWFyZ2luLWxlZnQ6IDcwJTsKICB9CiAgLm1kLWZsZXgtc21hbGwtYW5kLXVwLTc1IHsKICAgIG1pbi13aWR0aDogNzUlOwogICAgLW1zLWZsZXg6IDAgMSA3NSU7CiAgICBmbGV4OiAwIDEgNzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTc1IHsKICAgIG1hcmdpbi1sZWZ0OiA3NSU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cC04MCB7CiAgICBtaW4td2lkdGg6IDgwJTsKICAgIC1tcy1mbGV4OiAwIDEgODAlOwogICAgZmxleDogMCAxIDgwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC04MCB7CiAgICBtYXJnaW4tbGVmdDogODAlOwogIH0KICAubWQtZmxleC1zbWFsbC1hbmQtdXAtODUgewogICAgbWluLXdpZHRoOiA4NSU7CiAgICAtbXMtZmxleDogMCAxIDg1JTsKICAgIGZsZXg6IDAgMSA4NSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC1zbWFsbC1hbmQtdXAtODUgewogICAgbWFyZ2luLWxlZnQ6IDg1JTsKICB9CiAgLm1kLWZsZXgtc21hbGwtYW5kLXVwLTkwIHsKICAgIG1pbi13aWR0aDogOTAlOwogICAgLW1zLWZsZXg6IDAgMSA5MCU7CiAgICBmbGV4OiAwIDEgOTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTkwIHsKICAgIG1hcmdpbi1sZWZ0OiA5MCU7CiAgfQogIC5tZC1mbGV4LXNtYWxsLWFuZC11cC05NSB7CiAgICBtaW4td2lkdGg6IDk1JTsKICAgIC1tcy1mbGV4OiAwIDEgOTUlOwogICAgZmxleDogMCAxIDk1JTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXNtYWxsLWFuZC11cC05NSB7CiAgICBtYXJnaW4tbGVmdDogOTUlOwogIH0KICAubWQtZmxleC1zbWFsbC1hbmQtdXAtMTAwIHsKICAgIG1pbi13aWR0aDogMTAwJTsKICAgIC1tcy1mbGV4OiAwIDEgMTAwJTsKICAgIGZsZXg6IDAgMSAxMDAlOwogIH0KICAubWQtZmxleC1vZmZzZXQtc21hbGwtYW5kLXVwLTEwMCB7CiAgICBtYXJnaW4tbGVmdDogMTAwJTsKICB9CiAgLm1kLWFsaWduLXNtYWxsLWFuZC11cC1zdGFydCB7CiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsKICB9CiAgLm1kLWFsaWduLXNtYWxsLWFuZC11cC1jZW50ZXIgewogICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgfQogIC5tZC1hbGlnbi1zbWFsbC1hbmQtdXAtZW5kIHsKICAgIC1tcy1mbGV4LXBhY2s6IGVuZDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7CiAgfQogIC5tZC1oaWRlLXNtYWxsLWFuZC11cCB7CiAgICBkaXNwbGF5OiBub25lOwogIH0KfQoKQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSB7CiAgLm1kLXJvdy14c21hbGwtYW5kLXVwIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93OwogICAgZmxleC1kaXJlY3Rpb246IHJvdzsKICB9CiAgLm1kLWNvbHVtbi14c21hbGwtYW5kLXVwIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICB9CiAgLm1kLWZsZXgteHNtYWxsLWFuZC11cCB7CiAgICAtbXMtZmxleDogMSAxOwogICAgZmxleDogMSAxOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTMzIHsKICAgIG1pbi13aWR0aDogMzMuMzMzMzMlOwogICAgLW1zLWZsZXg6IDAgMSAzMy4zMzMzMyU7CiAgICBmbGV4OiAwIDEgMzMuMzMzMzMlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTY2IHsKICAgIG1pbi13aWR0aDogMzMuMzMzMzMlOwogICAgLW1zLWZsZXg6IDAgMSA2Ni42NjY2NiU7CiAgICBmbGV4OiAwIDEgNjYuNjY2NjYlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0zMyB7CiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC02NiB7CiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjYlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTUgewogICAgbWluLXdpZHRoOiA1JTsKICAgIC1tcy1mbGV4OiAwIDEgNSU7CiAgICBmbGV4OiAwIDEgNSU7CiAgfQogIC5tZC1mbGV4LW9mZnNldC14c21hbGwtYW5kLXVwLTUgewogICAgbWFyZ2luLWxlZnQ6IDUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTEwIHsKICAgIG1pbi13aWR0aDogMTAlOwogICAgLW1zLWZsZXg6IDAgMSAxMCU7CiAgICBmbGV4OiAwIDEgMTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0xMCB7CiAgICBtYXJnaW4tbGVmdDogMTAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTE1IHsKICAgIG1pbi13aWR0aDogMTUlOwogICAgLW1zLWZsZXg6IDAgMSAxNSU7CiAgICBmbGV4OiAwIDEgMTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0xNSB7CiAgICBtYXJnaW4tbGVmdDogMTUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTIwIHsKICAgIG1pbi13aWR0aDogMjAlOwogICAgLW1zLWZsZXg6IDAgMSAyMCU7CiAgICBmbGV4OiAwIDEgMjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0yMCB7CiAgICBtYXJnaW4tbGVmdDogMjAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTI1IHsKICAgIG1pbi13aWR0aDogMjUlOwogICAgLW1zLWZsZXg6IDAgMSAyNSU7CiAgICBmbGV4OiAwIDEgMjUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0yNSB7CiAgICBtYXJnaW4tbGVmdDogMjUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTMwIHsKICAgIG1pbi13aWR0aDogMzAlOwogICAgLW1zLWZsZXg6IDAgMSAzMCU7CiAgICBmbGV4OiAwIDEgMzAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0zMCB7CiAgICBtYXJnaW4tbGVmdDogMzAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTM1IHsKICAgIG1pbi13aWR0aDogMzUlOwogICAgLW1zLWZsZXg6IDAgMSAzNSU7CiAgICBmbGV4OiAwIDEgMzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC0zNSB7CiAgICBtYXJnaW4tbGVmdDogMzUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTQwIHsKICAgIG1pbi13aWR0aDogNDAlOwogICAgLW1zLWZsZXg6IDAgMSA0MCU7CiAgICBmbGV4OiAwIDEgNDAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC00MCB7CiAgICBtYXJnaW4tbGVmdDogNDAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTQ1IHsKICAgIG1pbi13aWR0aDogNDUlOwogICAgLW1zLWZsZXg6IDAgMSA0NSU7CiAgICBmbGV4OiAwIDEgNDUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC00NSB7CiAgICBtYXJnaW4tbGVmdDogNDUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTUwIHsKICAgIG1pbi13aWR0aDogNTAlOwogICAgLW1zLWZsZXg6IDAgMSA1MCU7CiAgICBmbGV4OiAwIDEgNTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC01MCB7CiAgICBtYXJnaW4tbGVmdDogNTAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTU1IHsKICAgIG1pbi13aWR0aDogNTUlOwogICAgLW1zLWZsZXg6IDAgMSA1NSU7CiAgICBmbGV4OiAwIDEgNTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC01NSB7CiAgICBtYXJnaW4tbGVmdDogNTUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTYwIHsKICAgIG1pbi13aWR0aDogNjAlOwogICAgLW1zLWZsZXg6IDAgMSA2MCU7CiAgICBmbGV4OiAwIDEgNjAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC02MCB7CiAgICBtYXJnaW4tbGVmdDogNjAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTY1IHsKICAgIG1pbi13aWR0aDogNjUlOwogICAgLW1zLWZsZXg6IDAgMSA2NSU7CiAgICBmbGV4OiAwIDEgNjUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC02NSB7CiAgICBtYXJnaW4tbGVmdDogNjUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTcwIHsKICAgIG1pbi13aWR0aDogNzAlOwogICAgLW1zLWZsZXg6IDAgMSA3MCU7CiAgICBmbGV4OiAwIDEgNzAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC03MCB7CiAgICBtYXJnaW4tbGVmdDogNzAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTc1IHsKICAgIG1pbi13aWR0aDogNzUlOwogICAgLW1zLWZsZXg6IDAgMSA3NSU7CiAgICBmbGV4OiAwIDEgNzUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC03NSB7CiAgICBtYXJnaW4tbGVmdDogNzUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTgwIHsKICAgIG1pbi13aWR0aDogODAlOwogICAgLW1zLWZsZXg6IDAgMSA4MCU7CiAgICBmbGV4OiAwIDEgODAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC04MCB7CiAgICBtYXJnaW4tbGVmdDogODAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTg1IHsKICAgIG1pbi13aWR0aDogODUlOwogICAgLW1zLWZsZXg6IDAgMSA4NSU7CiAgICBmbGV4OiAwIDEgODUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC04NSB7CiAgICBtYXJnaW4tbGVmdDogODUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTkwIHsKICAgIG1pbi13aWR0aDogOTAlOwogICAgLW1zLWZsZXg6IDAgMSA5MCU7CiAgICBmbGV4OiAwIDEgOTAlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC05MCB7CiAgICBtYXJnaW4tbGVmdDogOTAlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTk1IHsKICAgIG1pbi13aWR0aDogOTUlOwogICAgLW1zLWZsZXg6IDAgMSA5NSU7CiAgICBmbGV4OiAwIDEgOTUlOwogIH0KICAubWQtZmxleC1vZmZzZXQteHNtYWxsLWFuZC11cC05NSB7CiAgICBtYXJnaW4tbGVmdDogOTUlOwogIH0KICAubWQtZmxleC14c21hbGwtYW5kLXVwLTEwMCB7CiAgICBtaW4td2lkdGg6IDEwMCU7CiAgICAtbXMtZmxleDogMCAxIDEwMCU7CiAgICBmbGV4OiAwIDEgMTAwJTsKICB9CiAgLm1kLWZsZXgtb2Zmc2V0LXhzbWFsbC1hbmQtdXAtMTAwIHsKICAgIG1hcmdpbi1sZWZ0OiAxMDAlOwogIH0KICAubWQtYWxpZ24teHNtYWxsLWFuZC11cC1zdGFydCB7CiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsKICB9CiAgLm1kLWFsaWduLXhzbWFsbC1hbmQtdXAtY2VudGVyIHsKICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjsKICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwogIH0KICAubWQtYWxpZ24teHNtYWxsLWFuZC11cC1lbmQgewogICAgLW1zLWZsZXgtcGFjazogZW5kOwogICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKICB9CiAgLm1kLWhpZGUteHNtYWxsLWFuZC11cCB7CiAgICBkaXNwbGF5OiBub25lOwogIH0KfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtbGlzdCB7CiAgbWFyZ2luOiAwOwogIHBhZGRpbmc6IDhweCAwOwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLW1zLWZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDsKICAgICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwOwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKICBsaXN0LXN0eWxlOiBub25lOwp9Ci5tZC1saXN0Lm1kLWRlbnNlIHsKICAgIHBhZGRpbmc6IDRweCAwOwp9Ci5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0ubWQtaW5zZXQgLm1kLWxpc3QtaXRlbS1jb250YWluZXIgewogICAgICBwYWRkaW5nLWxlZnQ6IDcycHg7Cn0KLm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7CiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7CiAgICAgIGZvbnQtc2l6ZTogMTNweDsKfQoubWQtbGlzdC5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGQsCiAgICAgIC5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxkIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7Cn0KLm1kLWxpc3QubWQtZGVuc2UgLm1kLWF2YXRhciB7CiAgICAgIHdpZHRoOiAzMnB4OwogICAgICBtaW4td2lkdGg6IDMycHg7CiAgICAgIGhlaWdodDogMzJweDsKICAgICAgbWluLWhlaWdodDogMzJweDsKfQoubWQtbGlzdC5tZC1kZW5zZSAubWQtbGlzdC1pdGVtLWV4cGFuZCB7CiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7Cn0KLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7CiAgICBtaW4taGVpZ2h0OiA2MHB4Owp9Ci5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciB7CiAgICB3aWR0aDogMzZweDsKICAgIG1pbi13aWR0aDogMzZweDsKICAgIGhlaWdodDogMzZweDsKICAgIG1pbi1oZWlnaHQ6IDM2cHg7Cn0KLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGQsCiAgICAubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIgLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxkIHsKICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4Owp9Ci5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgxKSB7CiAgICBmb250LXNpemU6IDEzcHg7Cn0KLm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpIHsKICAgIGZvbnQtc2l6ZTogMTNweDsKfQoubWQtbGlzdC5tZC1kb3VibGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHsKICAgIG1pbi1oZWlnaHQ6IDcycHg7Cn0KLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7CiAgICBtaW4taGVpZ2h0OiA3NnB4Owp9Ci5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciB7CiAgICB3aWR0aDogMzZweDsKICAgIG1pbi13aWR0aDogMzZweDsKICAgIGhlaWdodDogMzZweDsKICAgIG1pbi1oZWlnaHQ6IDM2cHg7Cn0KLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtYXZhdGFyIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGQsCiAgICAubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIgLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxkIHsKICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4Owp9Ci5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgxKSB7CiAgICBmb250LXNpemU6IDEzcHg7Cn0KLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpIHsKICAgIGZvbnQtc2l6ZTogMTNweDsKfQoubWQtbGlzdC5tZC10cmlwbGUtbGluZSAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHsKICAgIG1pbi1oZWlnaHQ6IDg4cHg7Cn0KLm1kLWxpc3QubWQtdHJpcGxlLWxpbmUgLm1kLWF2YXRhciB7CiAgICBtYXJnaW46IDA7Cn0KLm1kLWxpc3QgLm1kLXN1YmhlYWRlci5tZC1pbnNldCB7CiAgICBwYWRkaW5nLWxlZnQ6IDcycHg7Cn0KLm1kLWxpc3QgPiAubWQtc3ViaGVhZGVyOmZpcnN0LW9mLXR5cGUgewogICAgbWFyZ2luLXRvcDogLThweDsKfQoubWQtbGlzdC1pdGVtIHsKICBoZWlnaHQ6IGF1dG87CiAgcG9zaXRpb246IHJlbGF0aXZlOwogIHotaW5kZXg6IDI7Cn0KLm1kLWxpc3QtaXRlbS5tZC1kaXNhYmxlZCB7CiAgICBjdXJzb3I6IGRlZmF1bHQ7CiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKfQoubWQtbGlzdC1pdGVtLm1kLWluc2V0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHsKICAgIHBhZGRpbmctbGVmdDogNzJweDsKfQoubWQtbGlzdC1pdGVtIC5tZC1idXR0b24tZ2hvc3QgewogICAgd2lkdGg6IDEwMCU7CiAgICBtYXJnaW46IDA7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICB0b3A6IDA7CiAgICByaWdodDogMDsKICAgIGJvdHRvbTogMDsKICAgIGxlZnQ6IDA7CiAgICB6LWluZGV4OiAxOwogICAgYm9yZGVyLXJhZGl1czogMDsKfQoubWQtbGlzdC1pdGVtIC5tZC1idXR0b246bm90KC5tZC1idXR0b24tZ2hvc3QpOm5vdCgubWQtbGlzdC1pdGVtLWNvbnRhaW5lcikgewogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgei1pbmRleDogMjsKfQoubWQtbGlzdC1pdGVtIC5tZC1idXR0b246bm90KC5tZC1idXR0b24tZ2hvc3QpOm5vdCgubWQtbGlzdC1pdGVtLWNvbnRhaW5lcikgLm1kLWljb24gewogICAgICBwb3NpdGlvbjogcmVsYXRpdmU7Cn0KLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciB7CiAgICBtaW4taGVpZ2h0OiA0OHB4OwogICAgbWFyZ2luOiAwOwogICAgcGFkZGluZzogMCAxNnB4OwogICAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgICBkaXNwbGF5OiBmbGV4OwogICAgLW1zLWZsZXgtZmxvdzogcm93IG5vd3JhcDsKICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7CiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgIC1tcy1mbGV4OiAxOwogICAgICAgIGZsZXg6IDE7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBmb250LXNpemU6IDE2cHg7CiAgICBmb250LXdlaWdodDogNDAwOwogICAgdGV4dC1hbGlnbjogbGVmdDsKICAgIHRleHQtdHJhbnNmb3JtOiBub25lOwp9Ci5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXI6aG92ZXIgewogICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7Cn0KLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciA+IC5tZC1pY29uOmZpcnN0LWNoaWxkIHsKICAgICAgbWFyZ2luLXJpZ2h0OiAzMnB4Owp9Ci5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWF2YXRhcjpmaXJzdC1jaGlsZCwKICAgIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtYWN0aW9uOmZpcnN0LWNoaWxkIHsKICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4Owp9Ci5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXIgLm1kLWxpc3QtYWN0aW9uIHsKICAgICAgbWFyZ2luOiAwIC0xMHB4IDAgMDsKfQoubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIC5tZC1saXN0LWFjdGlvbjpudGgtY2hpbGQoMykgewogICAgICAgIG1hcmdpbjogMCAtMTBweCAwIDE2cHg7Cn0KLm1kLWxpc3QtaXRlbSAubWQtZGl2aWRlciB7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICBib3R0b206IDA7CiAgICByaWdodDogMDsKICAgIGxlZnQ6IDA7Cn0KLm1kLWxpc3QtaXRlbSAubWQtaWNvbiwKICAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXIsCiAgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1hY3Rpb246Zmlyc3QtY2hpbGQgewogICAgbWFyZ2luOiAwOwp9Ci5tZC1saXN0LWl0ZW0gLm1kLWljb246Zmlyc3Qtb2YtdHlwZSArICosCiAgICAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXI6Zmlyc3Qtb2YtdHlwZSArICosCiAgICAubWQtbGlzdC1pdGVtIC5tZC1saXN0LWFjdGlvbjpmaXJzdC1jaGlsZDpmaXJzdC1vZi10eXBlICsgKiB7CiAgICAgIC1tcy1mbGV4OiAxIDEgYXV0bzsKICAgICAgICAgIGZsZXg6IDEgMSBhdXRvOwp9Ci5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciB7CiAgICBtYXJnaW4tdG9wOiA4cHg7CiAgICBtYXJnaW4tYm90dG9tOiA4cHg7Cn0KLm1kLWxpc3QtaXRlbSAubWQtaWNvbiB7CiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKfQoubWQtbGlzdC1pdGVtIC5tZC1pbmstcmlwcGxlIHsKICAgIGJvcmRlci1yYWRpdXM6IDA7Cn0KLm1kLWxpc3QtaXRlbS1leHBhbmQgewogIG1pbi1oZWlnaHQ6IDQ4cHg7CiAgLW1zLWZsZXgtZmxvdzogY29sdW1uIHdyYXA7CiAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApOwp9Ci5tZC1saXN0LWl0ZW0tZXhwYW5kOmJlZm9yZSwgLm1kLWxpc3QtaXRlbS1leHBhbmQ6YWZ0ZXIgewogICAgaGVpZ2h0OiAxcHg7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICByaWdodDogMDsKICAgIGxlZnQ6IDA7CiAgICB6LWluZGV4OiAzOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICBjb250ZW50OiAiICI7Cn0KLm1kLWxpc3QtaXRlbS1leHBhbmQ6YmVmb3JlIHsKICAgIHRvcDogMDsKfQoubWQtbGlzdC1pdGVtLWV4cGFuZDphZnRlciB7CiAgICBib3R0b206IDA7Cn0KLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlIHsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6YmVmb3JlLCAubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmU6YWZ0ZXIgewogICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpmaXJzdC1vZi10eXBlOmJlZm9yZSB7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7Cn0KLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmxhc3Qtb2YtdHlwZTphZnRlciB7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7Cn0KLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlLm1kLWFjdGl2ZSArIC5tZC1hY3RpdmU6YmVmb3JlIHsKICAgICAgYmFja2dyb3VuZDogbm9uZTsKfQoubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmUgPiAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtbGlzdC1leHBhbmQtaW5kaWNhdG9yIHsKICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlM0QoMCwgMCwgMCk7Cn0KLm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlID4gLm1kLWxpc3QtZXhwYW5kIHsKICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50Owp9Ci5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1leHBhbnNpb24taW5kaWNhdG9yLAogIC5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyLAogIC5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1pY29uIHsKICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZCB7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICB6LWluZGV4OiAxOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAwLCAwKTsKICAgIHdpbGwtY2hhbmdlOiBtYXJnaW4tYm90dG9tOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpOwp9Ci5tZC1saXN0LWl0ZW0tZXhwYW5kIC5tZC1saXN0LWV4cGFuZC5tZC10cmFuc2l0aW9uLW9mZiB7CiAgICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDsKfQoubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1leHBhbmQgLm1kLWxpc3QgewogICAgICBwYWRkaW5nOiAwOwp9Ci5tZC1saXN0LXRleHQtY29udGFpbmVyIHsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIC1tcy1mbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7CiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDsKICAtbXMtZmxleDogMTsKICAgICAgZmxleDogMTsKICBvdmVyZmxvdzogaGlkZGVuOwogIGxpbmUtaGVpZ2h0OiAxLjI1ZW07CiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsKfQoubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+ICogewogICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKfQoubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMSkgewogICAgZm9udC1zaXplOiAxNnB4Owp9Ci5tZC1saXN0LXRleHQtY29udGFpbmVyID4gOm50aC1jaGlsZCgyKSwKICAubWQtbGlzdC10ZXh0LWNvbnRhaW5lciA+IDpudGgtY2hpbGQoMykgewogICAgbWFyZ2luOiAwOwogICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7CiAgICBmb250LXNpemU6IDE0cHg7Cn0KLm1kLWxpc3QtdGV4dC1jb250YWluZXIgPiA6bnRoLWNoaWxkKDIpOm5vdCg6bGFzdC1jaGlsZCkgewogICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7Cn0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLW1lbnUgewogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKfQoubWQtbWVudS1jb250ZW50IHsKICB3aWR0aDogMTY4cHg7CiAgbWluLXdpZHRoOiA4NHB4OwogIG1heC13aWR0aDogMzkycHg7CiAgbWluLWhlaWdodDogNjRweDsKICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzJweCk7CiAgb3ZlcmZsb3cteDogaGlkZGVuOwogIG92ZXJmbG93LXk6IGF1dG87CiAgcG9zaXRpb246IGFic29sdXRlOwogIHotaW5kZXg6IDEzMTsKICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC44NSkgdHJhbnNsYXRlWigwKTsKICBib3JkZXItcmFkaXVzOiAycHg7CiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7CiAgb3BhY2l0eTogMDsKICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMiksIG1hcmdpbiAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpLCB0cmFuc2Zvcm0gMHMgMC40cyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTsKICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5LCB3aWR0aDsKfQoubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQgewogICAgbWFyZ2luLXRvcDogLTIwcHg7CiAgICBtYXJnaW4tbGVmdDogLThweDsKICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0Owp9Ci5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodC5tZC1hY3RpdmUgewogICAgICBtYXJnaW4tdG9wOiAtMTFweDsKfQoubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tbGVmdCB7CiAgICBtYXJnaW4tdG9wOiAtMjBweDsKICAgIG1hcmdpbi1sZWZ0OiA4cHg7CiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7Cn0KLm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnQubWQtYWN0aXZlIHsKICAgICAgbWFyZ2luLXRvcDogLTExcHg7Cn0KLm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0IHsKICAgIG1hcmdpbi10b3A6IDIwcHg7CiAgICBtYXJnaW4tbGVmdDogLThweDsKICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0Owp9Ci5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1yaWdodC5tZC1hY3RpdmUgewogICAgICBtYXJnaW4tdG9wOiAxMXB4Owp9Ci5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1sZWZ0IHsKICAgIG1hcmdpbi10b3A6IDIwcHg7CiAgICBtYXJnaW4tbGVmdDogOHB4OwogICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0Owp9Ci5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLXRvcC1sZWZ0Lm1kLWFjdGl2ZSB7CiAgICAgIG1hcmdpbi10b3A6IDExcHg7Cn0KLm1kLW1lbnUtY29udGVudC5tZC1hbGlnbi10cmlnZ2VyIHsKICAgIG1hcmdpbjogMDsKfQoubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMSB7CiAgICB3aWR0aDogODRweDsKfQoubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMiB7CiAgICB3aWR0aDogMTEycHg7Cn0KLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTMgewogICAgd2lkdGg6IDE2OHB4Owp9Ci5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS00IHsKICAgIHdpZHRoOiAyMjRweDsKfQoubWQtbWVudS1jb250ZW50Lm1kLXNpemUtNSB7CiAgICB3aWR0aDogMjgwcHg7Cn0KLm1kLW1lbnUtY29udGVudC5tZC1zaXplLTYgewogICAgd2lkdGg6IDMzNnB4Owp9Ci5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS03IHsKICAgIHdpZHRoOiAzOTJweDsKfQoubWQtbWVudS1jb250ZW50Lm1kLWFjdGl2ZSB7CiAgICBwb2ludGVyLWV2ZW50czogYXV0bzsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVooMCk7CiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBvcGFjaXR5IDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSksIHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZlIC5tZC1saXN0IHsKICAgICAgb3BhY2l0eTogMTsKICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC1tZW51LWNvbnRlbnQgLm1kLWxpc3QgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQoubWQtbWVudS1pdGVtIHsKICBjdXJzb3I6IHBvaW50ZXI7CiAgZm9udC1zaXplOiAxNnB4OwogIGxpbmUtaGVpZ2h0OiAxLjJlbTsKfQoubWQtbWVudS1pdGVtW2Rpc2FibGVkXSB7CiAgICBjdXJzb3I6IGRlZmF1bHQ7Cn0KLm1kLW1lbnUtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciB7CiAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7Cn0KLm1kLW1lbnUtYmFja2Ryb3AgewogIHotaW5kZXg6IDEzMDsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtYm9hcmRzIHsKICB3aWR0aDogMTAwJTsKICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjsKICAgICAgZmxleC1mbG93OiBjb2x1bW47CiAgcG9zaXRpb246IHJlbGF0aXZlOwp9Ci5tZC1ib2FyZHMubWQtdHJhbnNpdGlvbi1vZmYgKiB7CiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7Cn0KLm1kLWJvYXJkcy5tZC1keW5hbWljLWhlaWdodCAubWQtYm9hcmRzLWNvbnRlbnQgewogICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7Cn0KLm1kLWJvYXJkcyAubWQtYm9hcmRzLW5hdmlnYXRpb24gewogICAgYm90dG9tOiAwOwogICAgd2lkdGg6IDEwMCU7CiAgICBoZWlnaHQ6IDQ4cHg7CiAgICBtaW4taGVpZ2h0OiA0OHB4OwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgei1pbmRleDogMTsKICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogICAgZGlzcGxheTogZmxleDsKICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47Cn0KLm1kLWJvYXJkcyAubWQtYm9hcmQtaGVhZGVyIHsKICAgIG1pbi13aWR0aDogMjRweDsKICAgIG1heC13aWR0aDogMjRweDsKICAgIG1hcmdpbjogMDsKICAgIHBhZGRpbmc6IDAgMTJweDsKICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIGJvcmRlcjogMDsKICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogICAgZm9udC1zaXplOiAxNHB4OwogICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Cn0KLm1kLWJvYXJkcyAubWQtYm9hcmQtaGVhZGVyLm1kLWRpc2FibGVkIHsKICAgICAgY3Vyc29yOiBkZWZhdWx0OwogICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7Cn0KLm1kLWJvYXJkcyAubWQtYm9hcmQtaGVhZGVyLWNvbnRhaW5lciB7CiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICAtbXMtZmxleC1mbG93OiBjb2x1bW47CiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47CiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Cn0KLm1kLWJvYXJkcyAubWQtYm9hcmQtaGVhZGVyLWNvbnRhaW5lciAubWQtaWNvbiB7CiAgICAgIG1hcmdpbjogMDsKfQoubWQtYm9hcmRzIC5tZC1ib2FyZC1oZWFkZXItY29udGFpbmVyIC5tZC1pY29uOm5vdCgubWQtY29udHJvbCkgewogICAgICB3aWR0aDogMTZweDsKICAgICAgbWluLXdpZHRoOiAxNnB4OwogICAgICBoZWlnaHQ6IDE2cHg7CiAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7CiAgICAgIGZvbnQtc2l6ZTogMTZweDsKfQoubWQtYm9hcmRzIC5tZC1ib2FyZHMtY29udGVudCB7CiAgICB3aWR0aDogMTAwJTsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIG92ZXJmbG93OiBoaWRkZW47Cn0KLm1kLWJvYXJkcyAubWQtYm9hcmRzLXdyYXBwZXIgewogICAgd2lkdGg6IDk5OTllbTsKICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50OwogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgdG9wOiAwOwogICAgcmlnaHQ6IDA7CiAgICBib3R0b206IDA7CiAgICBsZWZ0OiAwOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsKICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC1ib2FyZHMgLm1kLWJvYXJkIHsKICAgIHBhZGRpbmc6IDE2cHg7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICB0b3A6IDA7CiAgICBsZWZ0OiAwOwogICAgcmlnaHQ6IDA7Cn0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLXByb2dyZXNzIHsKICB3aWR0aDogMTAwJTsKICBoZWlnaHQ6IDRweDsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQoubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2sgewogICAgcmlnaHQ6IDA7Cn0KLm1kLXByb2dyZXNzLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXByb2dyZXNzLXRyYWNrOmJlZm9yZSwgLm1kLXByb2dyZXNzLm1kLWluZGV0ZXJtaW5hdGUgLm1kLXByb2dyZXNzLXRyYWNrOmFmdGVyIHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICB0b3A6IDA7CiAgICAgIGJvdHRvbTogMDsKICAgICAgbGVmdDogMDsKICAgICAgd2lsbC1jaGFuZ2U6IGxlZnQsIHJpZ2h0OwogICAgICBjb250ZW50OiAnJzsKfQoubWQtcHJvZ3Jlc3MubWQtaW5kZXRlcm1pbmF0ZSAubWQtcHJvZ3Jlc3MtdHJhY2s6YmVmb3JlIHsKICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1pbmRldGVybWluYXRlIDIuM3MgY3ViaWMtYmV6aWVyKDAuNjUsIDAuODE1LCAwLjczNSwgMC4zOTUpIGluZmluaXRlOwp9Ci5tZC1wcm9ncmVzcy5tZC1pbmRldGVybWluYXRlIC5tZC1wcm9ncmVzcy10cmFjazphZnRlciB7CiAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZS1zaG9ydCAyLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgaW5maW5pdGU7CiAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4xNXM7Cn0KLm1kLXByb2dyZXNzLm1kLXByb2dyZXNzLWVudGVyLCAubWQtcHJvZ3Jlc3MubWQtcHJvZ3Jlc3MtbGVhdmUtYWN0aXZlIHsKICAgIG9wYWNpdHk6IDA7CiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKSB0cmFuc2xhdGVaKDApOwp9Ci5tZC1wcm9ncmVzcy5tZC1wcm9ncmVzcy1lbnRlci1hY3RpdmUgewogICAgdHJhbnNmb3JtOiBzY2FsZVkoMSkgdHJhbnNsYXRlWigwKTsKfQoubWQtcHJvZ3Jlc3MtdHJhY2sgewogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB0b3A6IDA7CiAgYm90dG9tOiAwOwogIGxlZnQ6IDA7CiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7Cn0KQGtleWZyYW1lcyBwcm9ncmVzcy1pbmRldGVybWluYXRlIHsKMCUgewogICAgcmlnaHQ6IDEwMCU7CiAgICBsZWZ0OiAtMzUlOwp9CjYwJSB7CiAgICByaWdodDogLTEwMCU7CiAgICBsZWZ0OiAxMDAlOwp9CjEwMCUgewogICAgcmlnaHQ6IC0xMDAlOwogICAgbGVmdDogMTAwJTsKfQp9CkBrZXlmcmFtZXMgcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZS1zaG9ydCB7CjAlIHsKICAgIHJpZ2h0OiAxMDAlOwogICAgbGVmdDogLTIwMCU7Cn0KNjAlIHsKICAgIHJpZ2h0OiAtOCU7CiAgICBsZWZ0OiAxMDclOwp9CjEwMCUgewogICAgcmlnaHQ6IC04JTsKICAgIGxlZnQ6IDEwNyU7Cn0KfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtcmFkaW8gewogIHdpZHRoOiBhdXRvOwogIG1hcmdpbjogMTZweCA4cHggMTZweCAwOwogIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDsKICBkaXNwbGF5OiBpbmxpbmUtZmxleDsKICBwb3NpdGlvbjogcmVsYXRpdmU7Cn0KLm1kLXJhZGlvOm5vdCgubWQtZGlzYWJsZWQpIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKfQoubWQtcmFkaW86bm90KC5tZC1kaXNhYmxlZCkgLm1kLXJhZGlvLWxhYmVsIHsKICAgICAgY3Vyc29yOiBwb2ludGVyOwp9Ci5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIHsKICAgIHdpZHRoOiAyMHB4OwogICAgaGVpZ2h0OiAyMHB4OwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTsKICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyOmJlZm9yZSB7CiAgICAgIHdpZHRoOiA0OHB4OwogICAgICBoZWlnaHQ6IDQ4cHg7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgdG9wOiA1MCU7CiAgICAgIGxlZnQ6IDUwJTsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsKICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNTUsIDAsIDAuNTUsIDAuMik7CiAgICAgIGNvbnRlbnQ6ICIgIjsKfQoubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lcjphZnRlciB7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgdG9wOiAzcHg7CiAgICAgIHJpZ2h0OiAzcHg7CiAgICAgIGJvdHRvbTogM3B4OwogICAgICBsZWZ0OiAzcHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgb3BhY2l0eTogMDsKICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAuMzgsIDAuMzgsIDEpOwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTsKICAgICAgY29udGVudDogIiAiOwp9Ci5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIGlucHV0IHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICBsZWZ0OiAtOTk5ZW07Cn0KLm1kLXJhZGlvIC5tZC1yYWRpby1jb250YWluZXIgLm1kLWluay1yaXBwbGUgewogICAgICB0b3A6IC0xNnB4OwogICAgICByaWdodDogLTE2cHg7CiAgICAgIGJvdHRvbTogLTE2cHg7CiAgICAgIGxlZnQ6IC0xNnB4OwogICAgICBib3JkZXItcmFkaXVzOiA1MCU7CiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOwp9Ci5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGUgewogICAgICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7CiAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7CiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7CiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDsKICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDsKICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7Cn0KLm1kLXJhZGlvIC5tZC1yYWRpby1sYWJlbCB7CiAgICBoZWlnaHQ6IDIwcHg7CiAgICBwYWRkaW5nLWxlZnQ6IDhweDsKICAgIGxpbmUtaGVpZ2h0OiAyMHB4Owp9Ci5tZC1yYWRpby5tZC1jaGVja2VkIC5tZC1yYWRpby1jb250YWluZXI6YWZ0ZXIgewogIG9wYWNpdHk6IDE7CiAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpOwogIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci8qIENvbW1vbiAqLwovKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovCi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi5tZC1yYXRpbmctYmFyIHsKICB3aWR0aDogYXV0bzsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50OwogIHdpZHRoOiAtbW96LWZpdC1jb250ZW50OwogIHdpZHRoOiBmaXQtY29udGVudDsKICBwYWRkaW5nOiAzcHg7CiAgYm9yZGVyLXJhZGl1czogMnB4Owp9Ci5tZC1yYXRpbmctYmFyID4gLm1kLWZ1bGwtaWNvbiB7CiAgICBvdmVyZmxvdy14OiBoaWRkZW47CiAgICBkaXNwbGF5OiBpbmhlcml0Owp9Ci5tZC1yYXRpbmctYmFyID4gLm1kLWVtcHR5LWljb24gPiAubWQtaWNvbiwKICAubWQtcmF0aW5nLWJhciA+IC5tZC1mdWxsLWljb24gPiAubWQtaWNvbiB7CiAgICBtYXJnaW46IDA7CiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOwogICAgY3Vyc29yOiBwb2ludGVyOwp9Ci5tZC1yYXRpbmctYmFyOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMik7Cn0KLm1kLXJhdGluZy1iYXJbZGlzYWJsZWRdID4gLm1kLWVtcHR5LWljb24gPiAubWQtaWNvbiwKICAubWQtcmF0aW5nLWJhcltkaXNhYmxlZF0gPiAubWQtZnVsbC1pY29uID4gLm1kLWljb24gewogICAgY3Vyc29yOiBkZWZhdWx0Owp9Ci8qIENvbW1vbiAqLwovKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovCi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi5tZC1zZWxlY3QgewogIHdpZHRoOiAxMDAlOwogIG1pbi13aWR0aDogMTI4cHg7CiAgaGVpZ2h0OiAzMnB4OwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoubWQtc2VsZWN0OmZvY3VzIHsKICAgIG91dGxpbmU6IG5vbmU7Cn0KLm1kLXNlbGVjdDpub3QoLm1kLXNlbGVjdC1pY29uKTphZnRlciB7CiAgICBtYXJnaW4tdG9wOiAycHg7CiAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICB0b3A6IDUwJTsKICAgIHJpZ2h0OiAwOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlWSgwLjQ1KSBzY2FsZVgoMC44NSk7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyOwogICAgY29udGVudDogIlwyNUJDIjsKfQoubWQtc2VsZWN0Lm1kLWFjdGl2ZSAubWQtc2VsZWN0LW1lbnUgewogICAgdG9wOiAtOHB4OwogICAgcG9pbnRlci1ldmVudHM6IGF1dG87CiAgICBvcGFjaXR5OiAxOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHNjYWxlM0QoMSwgMSwgMSk7CiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzOwogICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgdHJhbnNmb3JtLCB0b3A7Cn0KLm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51ID4gKiB7CiAgICAgIG9wYWNpdHk6IDE7CiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpOwogICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMTVzOwogICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMXM7Cn0KLm1kLXNlbGVjdC5tZC1kaXNhYmxlZCB7CiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7CiAgICB1c2VyLWRyYWc6IG5vbmU7Cn0KLm1kLXNlbGVjdC5tZC1kaXNhYmxlZCBsYWJlbCwKICAgIC5tZC1zZWxlY3QubWQtZGlzYWJsZWQgc3BhbiwKICAgIC5tZC1zZWxlY3QubWQtZGlzYWJsZWQgaW5wdXQsCiAgICAubWQtc2VsZWN0Lm1kLWRpc2FibGVkIHRleHRhcmVhIHsKICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7Cn0KLm1kLXNlbGVjdCBzZWxlY3QgewogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgbGVmdDogLTk5OWVtOwp9Ci5tZC1zZWxlY3QgLm1kLW1lbnUgewogICAgd2lkdGg6IDEwMCU7CiAgICBoZWlnaHQ6IDMycHg7CiAgICBkaXNwbGF5OiBibG9jazsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoubWQtc2VsZWN0IC5tZC1zZWxlY3QtdmFsdWUgewogICAgd2lkdGg6IDEwMCU7CiAgICBoZWlnaHQ6IDMycHg7CiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4OwogICAgZGlzcGxheTogYmxvY2s7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgei1pbmRleDogMjsKICAgIGZvbnQtc2l6ZTogMTZweDsKICAgIGxpbmUtaGVpZ2h0OiAzM3B4OwogICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7CiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOwp9Ci5tZC1zZWxlY3QgLm1kLXN1YmhlYWRlciB7CiAgICBjb2xvcjogcmdiYSgxMTcsIDExNywgMTE3LCAwLjg3KTsKICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Cn0KLm1kLXNlbGVjdCAubWQtc3ViaGVhZGVyOmZpcnN0LWNoaWxkIHsKICAgICAgbWFyZ2luLXRvcDogLThweDsKfQoubWQtc2VsZWN0LWNvbnRlbnQgewogIHdpZHRoOiBhdXRvOwogIG1heC1oZWlnaHQ6IDI1NnB4Owp9Ci5tZC1zZWxlY3QtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLXJpZ2h0IHsKICAgIG1hcmdpbi10b3A6IC0xNXB4OwogICAgbWFyZ2luLWxlZnQ6IC0xNnB4Owp9Ci5tZC1zZWxlY3QtY29udGVudCAubWQtb3B0aW9uW2Rpc2FibGVkXSB7CiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7CiAgICB1c2VyLWRyYWc6IG5vbmU7Cn0KLm1kLXNlbGVjdC1jb250ZW50IC5tZC1tZW51LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXIgewogICAgb3ZlcmZsb3c6IHZpc2libGU7CiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7Cn0KLm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveCB7CiAgICBtYXJnaW46IDA7Cn0KLm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveC1sYWJlbCB7CiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7CiAgICBjdXJzb3I6IHBvaW50ZXI7Cn0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLXNpZGVuYXYubWQtbGVmdCAubWQtc2lkZW5hdi1jb250ZW50IHsKICBsZWZ0OiAwOwogIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTEwMCUsIDAsIDApOwp9Ci5tZC1zaWRlbmF2Lm1kLXJpZ2h0IC5tZC1zaWRlbmF2LWNvbnRlbnQgewogIHJpZ2h0OiAwOwogIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMTAwJSwgMCwgMCk7Cn0KLm1kLXNpZGVuYXYubWQtZml4ZWQgLm1kLXNpZGVuYXYtY29udGVudCwKLm1kLXNpZGVuYXYubWQtZml4ZWQgLm1kLXNpZGVuYXYtYmFja2Ryb3AgewogIHBvc2l0aW9uOiBmaXhlZDsKfQoubWQtc2lkZW5hdiAubWQtc2lkZW5hdi1jb250ZW50IHsKICB3aWR0aDogMzA0cHg7CiAgcG9zaXRpb246IGFic29sdXRlOwogIHRvcDogMDsKICBib3R0b206IDA7CiAgei1pbmRleDogMTAwOwogIHBvaW50ZXItZXZlbnRzOiBub25lOwogIG92ZXJmbG93OiBhdXRvOwogIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsKICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07CiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsKfQoubWQtc2lkZW5hdiAubWQtYmFja2Ryb3AgewogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB0b3A6IDA7CiAgcmlnaHQ6IDA7CiAgYm90dG9tOiAwOwogIGxlZnQ6IDA7CiAgei1pbmRleDogOTk7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKICBvcGFjaXR5OiAwOwogIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTsKICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5OwogIHdpbGwtY2hhbmdlOiBvcGFjaXR5Owp9Ci5tZC1zaWRlbmF2Lm1kLWFjdGl2ZSAubWQtc2lkZW5hdi1jb250ZW50IHsKICBib3gtc2hhZG93OiAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKICBwb2ludGVyLWV2ZW50czogYXV0bzsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApOwp9Ci5tZC1zaWRlbmF2Lm1kLWFjdGl2ZSAubWQtc2lkZW5hdi1iYWNrZHJvcCB7CiAgb3BhY2l0eTogMTsKICBwb2ludGVyLWV2ZW50czogYXV0bzsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBJbWFnZSBhc3BlY3QgcmF0aW8gY2FsY3VsYXRvciAqLwovKiBSZXNwb25zaXZlIGJyZWFrcG9pbnRzICovCi5tZC1zbmFja2JhciB7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICBwb3NpdGlvbjogZml4ZWQ7CiAgcmlnaHQ6IDA7CiAgbGVmdDogMDsKICB6LWluZGV4OiAxMjA7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLXRvcCwgbWFyZ2luLWJvdHRvbTsKfQoubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIgewogICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOwp9Ci5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHQsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHQgewogICAgbWFyZ2luLXJpZ2h0OiAyNHB4OwogICAgLW1zLWZsZXgtcGFjazogZW5kOwogICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7Cn0KLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQgewogICAgbWFyZ2luLWxlZnQ6IDI0cHg7CiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7Cn0KLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1yaWdodCwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWNlbnRlciB7CiAgICBtYXJnaW4tdG9wOiAyNHB4Owp9Ci5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHQsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tbGVmdCB7CiAgICBtYXJnaW4tYm90dG9tOiAyNHB4Owp9Ci5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtY2VudGVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLXJpZ2h0LCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tdG9wLWxlZnQgewogICAgdG9wOiAwOwp9Ci5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtY2VudGVyIC5tZC1zbmFja2Jhci1jb250YWluZXIsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi10b3AtcmlnaHQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLXRvcC1sZWZ0IC5tZC1zbmFja2Jhci1jb250YWluZXIgewogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIGNhbGMoLTEwMCUgLSAyNHB4KSwgMCk7Cn0KLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tcmlnaHQsIC5tZC1zbmFja2Jhci5tZC1wb3NpdGlvbi1ib3R0b20tbGVmdCB7CiAgICBib3R0b206IDA7Cn0KLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1jZW50ZXIgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciwgLm1kLXNuYWNrYmFyLm1kLXBvc2l0aW9uLWJvdHRvbS1yaWdodCAubWQtc25hY2tiYXItY29udGFpbmVyLCAubWQtc25hY2tiYXIubWQtcG9zaXRpb24tYm90dG9tLWxlZnQgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciB7CiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgY2FsYygxMDAlICsgMjRweCksIDApOwp9Ci5tZC1zbmFja2Jhci5tZC1hY3RpdmUgLm1kLXNuYWNrYmFyLWNvbnRhaW5lciB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDAsIDApOwp9Ci5tZC1zbmFja2Jhci5tZC1hY3RpdmUgLm1kLXNuYWNrYmFyLWNvbnRlbnQgewogICAgb3BhY2l0eTogMTsKICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyAwLjFzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC1zbmFja2JhciAubWQtc25hY2tiYXItY29udGVudCB7CiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5OwogICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgIG9wYWNpdHk6IDA7CiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eTsKfQoubWQtc25hY2tiYXIgLm1kLWJ1dHRvbiB7CiAgICBtaW4td2lkdGg6IDY0cHg7CiAgICBtYXJnaW46IC04cHggLTE2cHg7Cn0KLm1kLXNuYWNrYmFyIC5tZC1idXR0b246bGFzdC1jaGlsZCB7CiAgICAgIG1hcmdpbi1sZWZ0OiA0OHB4Owp9Ci5tZC1zbmFja2Jhci1jb250YWluZXIgewogIHdpZHRoOiBhdXRvOwogIG1pbi13aWR0aDogMjg4cHg7CiAgbWF4LXdpZHRoOiA1NjhweDsKICBtaW4taGVpZ2h0OiA0OHB4OwogIHBhZGRpbmc6IDE0cHggMjRweDsKICBvdmVyZmxvdzogaGlkZGVuOwogIHBvaW50ZXItZXZlbnRzOiBhdXRvOwogIGJvcmRlci1yYWRpdXM6IDJweDsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMjMyOwogIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogIGNvbG9yOiAjZmZmOwogIGZvbnQtc2l6ZTogMTRweDsKfQoubWQtaGFzLXRvYXN0LXRvcC1yaWdodCAubWQtZmFiLm1kLWZhYi10b3AtcmlnaHQgewogIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgNjhweCwgMCk7Cn0KLm1kLWhhcy10b2FzdC10b3AtY2VudGVyIC5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIgewogIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTUwJSwgNjhweCwgMCk7Cn0KLm1kLWhhcy10b2FzdC10b3AtbGVmdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdCB7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA2OHB4LCAwKTsKfQoubWQtaGFzLXRvYXN0LWJvdHRvbS1yaWdodCAubWQtZmFiLm1kLWZhYi1ib3R0b20tcmlnaHQgewogIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTY4cHgsIDApOwp9Ci5tZC1oYXMtdG9hc3QtYm90dG9tLWNlbnRlciAubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyIHsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKC01MCUsIC02OHB4LCAwKTsKfQoubWQtaGFzLXRvYXN0LWJvdHRvbS1sZWZ0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0IHsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC02OHB4LCAwKTsKfQpAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsKICAubWQtc25hY2tiYXIgewogICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7CiAgfQogIC5tZC1zbmFja2Jhci1jb250YWluZXIgewogICAgd2lkdGg6IDEwMCU7CiAgICBtYXgtd2lkdGg6IDEwMCU7CiAgICBib3JkZXItcmFkaXVzOiAwOwogIH0KICAubWQtaGFzLXRvYXN0LXRvcC1yaWdodCAubWQtZmFiLm1kLWZhYi10b3AtcmlnaHQgewogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCA0OHB4LCAwKTsKICB9CiAgLm1kLWhhcy10b2FzdC10b3AtY2VudGVyIC5tZC1mYWIubWQtZmFiLXRvcC1jZW50ZXIgewogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgtNTAlLCA0OHB4LCAwKTsKICB9CiAgLm1kLWhhcy10b2FzdC10b3AtbGVmdCAubWQtZmFiLm1kLWZhYi10b3AtbGVmdCB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIDQ4cHgsIDApOwogIH0KICAubWQtaGFzLXRvYXN0LWJvdHRvbS1yaWdodCAubWQtZmFiLm1kLWZhYi1ib3R0b20tcmlnaHQgewogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgwLCAtNDhweCwgMCk7CiAgfQogIC5tZC1oYXMtdG9hc3QtYm90dG9tLWNlbnRlciAubWQtZmFiLm1kLWZhYi1ib3R0b20tY2VudGVyIHsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoLTUwJSwgLTQ4cHgsIDApOwogIH0KICAubWQtaGFzLXRvYXN0LWJvdHRvbS1sZWZ0IC5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0IHsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLTQ4cHgsIDApOwogIH0KfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtc3BlZWQtZGlhbCB7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlOwogICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7CiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKfQoubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tdG9wLm1kLW1vZGUtZmxpbmcgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b24gewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGUzRCgwLCA4MCUsIDApOwp9Ci5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi10b3AgW21kLWZhYi10cmlnZ2VyXSB7CiAgICBtYXJnaW4tdG9wOiA4cHg7Cn0KLm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXRvcCBbbWQtZmFiLXRyaWdnZXJdIH4gLm1kLWJ1dHRvbiB7CiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7Cn0KLm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXJpZ2h0IHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93OwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Cn0KLm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXJpZ2h0Lm1kLW1vZGUtZmxpbmcgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b24gewogICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpIHRyYW5zbGF0ZTNEKC04MCUsIDAsIDApOwp9Ci5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1yaWdodCBbbWQtZmFiLXRyaWdnZXJdIHsKICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7Cn0KLm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLXJpZ2h0IFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uIHsKICAgICAgICBtYXJnaW4tbGVmdDogMTZweDsKfQoubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tYm90dG9tIHsKICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uOwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Cn0KLm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLWJvdHRvbS5tZC1tb2RlLWZsaW5nIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGUzRCgwLCAtODAlLCAwKTsKfQoubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tYm90dG9tIFttZC1mYWItdHJpZ2dlcl0gewogICAgICBtYXJnaW4tYm90dG9tOiA4cHg7Cn0KLm1kLXNwZWVkLWRpYWwubWQtZGlyZWN0aW9uLWJvdHRvbSBbbWQtZmFiLXRyaWdnZXJdIH4gLm1kLWJ1dHRvbiB7CiAgICAgICAgbWFyZ2luLXRvcDogMTZweDsKfQoubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tbGVmdCB7CiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOwogICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTsKICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjsKICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKfQoubWQtc3BlZWQtZGlhbC5tZC1kaXJlY3Rpb24tbGVmdC5tZC1tb2RlLWZsaW5nIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uIHsKICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGUzRCg4MCUsIDAsIDApOwp9Ci5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1sZWZ0IFttZC1mYWItdHJpZ2dlcl0gewogICAgICBtYXJnaW4tbGVmdDogOHB4Owp9Ci5tZC1zcGVlZC1kaWFsLm1kLWRpcmVjdGlvbi1sZWZ0IFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uIHsKICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7Cn0KLm1kLXNwZWVkLWRpYWwubWQtbW9kZS1zY2FsZSBbbWQtZmFiLXRyaWdnZXJdIH4gLm1kLWJ1dHRvbiB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7Cn0KLm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uIHsKICAgIG9wYWNpdHk6IDE7CiAgICBwb2ludGVyLWV2ZW50czogYXV0bzsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMCwgMCkgIWltcG9ydGFudDsKfQoubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b246bnRoLWNoaWxkKDIpIHsKICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7Cn0KLm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uOm50aC1jaGlsZCgzKSB7CiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7Cn0KLm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uOm50aC1jaGlsZCg0KSB7CiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzOwp9Ci5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdIH4gLm1kLWJ1dHRvbjpudGgtY2hpbGQoNSkgewogICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzOwp9Ci5tZC1zcGVlZC1kaWFsLm1kLWFjdGl2ZSBbbWQtZmFiLXRyaWdnZXJdIH4gLm1kLWJ1dHRvbjpudGgtY2hpbGQoNikgewogICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI1czsKfQoubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b246bnRoLWNoaWxkKDcpIHsKICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zczsKfQoubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b246bnRoLWNoaWxkKDgpIHsKICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zNXM7Cn0KLm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uOm50aC1jaGlsZCg5KSB7CiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7Cn0KLm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uOm50aC1jaGlsZCgxMCkgewogICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjQ1czsKfQoubWQtc3BlZWQtZGlhbC5tZC1hY3RpdmUgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b246bnRoLWNoaWxkKDExKSB7CiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7Cn0KLm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl0gW21kLWljb24tbW9ycGhdIHsKICAgIHRyYW5zZm9ybTogcm90YXRlWigwKTsKICAgIG9wYWNpdHk6IDE7Cn0KLm1kLXNwZWVkLWRpYWwubWQtYWN0aXZlIFttZC1mYWItdHJpZ2dlcl0gW21kLWljb24tbW9ycGhdICsgLm1kLWljb24gewogICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDAuOCk7CiAgICAgIG9wYWNpdHk6IDA7Cn0KLm1kLXNwZWVkLWRpYWwgLm1kLWJ1dHRvbiB7CiAgICBtYXJnaW46IDA7Cn0KLm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXSB7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICB6LWluZGV4OiAyOwp9Ci5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uIHsKICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICB6LWluZGV4OiAxOwogICAgICBvcGFjaXR5OiAwOwogICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7Cn0KLm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b246bnRoLWxhc3QtY2hpbGQoMikgewogICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzOwp9Ci5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDMpIHsKICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzOwp9Ci5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDQpIHsKICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1czsKfQoubWQtc3BlZWQtZGlhbCBbbWQtZmFiLXRyaWdnZXJdIH4gLm1kLWJ1dHRvbjpudGgtbGFzdC1jaGlsZCg1KSB7CiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yczsKfQoubWQtc3BlZWQtZGlhbCBbbWQtZmFiLXRyaWdnZXJdIH4gLm1kLWJ1dHRvbjpudGgtbGFzdC1jaGlsZCg2KSB7CiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7Cn0KLm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b246bnRoLWxhc3QtY2hpbGQoNykgewogICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7Cn0KLm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b246bnRoLWxhc3QtY2hpbGQoOCkgewogICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzOwp9Ci5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDkpIHsKICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzOwp9Ci5tZC1zcGVlZC1kaWFsIFttZC1mYWItdHJpZ2dlcl0gfiAubWQtYnV0dG9uOm50aC1sYXN0LWNoaWxkKDEwKSB7CiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40NXM7Cn0KLm1kLXNwZWVkLWRpYWwgW21kLWZhYi10cmlnZ2VyXSB+IC5tZC1idXR0b246bnRoLWxhc3QtY2hpbGQoMTEpIHsKICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzOwp9Ci5tZC1zcGVlZC1kaWFsIFttZC1pY29uLW1vcnBoXSArIC5tZC1pY29uLAogIC5tZC1zcGVlZC1kaWFsIFttZC1pY29uLW1vcnBoXSB7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQoubWQtc3BlZWQtZGlhbCBbbWQtaWNvbi1tb3JwaF0gewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogcm90YXRlWigtOTBkZWcpIHNjYWxlKDAuOCk7Cn0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLXNwaW5uZXIgewogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTsKfQoubWQtc3Bpbm5lci5tZC1pbmRldGVybWluYXRlIC5tZC1zcGlubmVyLWRyYXcgewogICAgYW5pbWF0aW9uOiBzcGlubmVyLXJvdGF0ZSAxLjlzIGxpbmVhciBpbmZpbml0ZTsKICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVooMCk7Cn0KLm1kLXNwaW5uZXIubWQtaW5kZXRlcm1pbmF0ZSAubWQtc3Bpbm5lci1wYXRoIHsKICAgIHN0cm9rZS1kYXNoYXJyYXk6IDIsIDIwMDsKICAgIGFuaW1hdGlvbjogc3Bpbm5lci1kYXNoIDEuNDI1cyBlYXNlLWluLW91dCBpbmZpbml0ZTsKfQoubWQtc3Bpbm5lci5tZC1zcGlubmVyLWxlYXZlLWFjdGl2ZSB7CiAgICBvcGFjaXR5OiAwOwogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHRyYW5zbGF0ZVooMCk7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQoubWQtc3Bpbm5lcjpub3QoLm1kLWluZGV0ZXJtaW5hdGUpLm1kLXNwaW5uZXItZW50ZXItYWN0aXZlIHsKICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDJzOwp9Ci5tZC1zcGlubmVyOm5vdCgubWQtaW5kZXRlcm1pbmF0ZSkubWQtc3Bpbm5lci1lbnRlci1hY3RpdmUgLm1kLXNwaW5uZXItZHJhdyB7CiAgICAgIGFuaW1hdGlvbjogc3Bpbm5lci1pbml0aWFsLXJvdGF0ZSAxLjk4cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSBmb3J3YXJkczsKfQoubWQtc3Bpbm5lci1kcmF3IHsKICB3aWR0aDogMTAwJTsKICBoZWlnaHQ6IDEwMCU7CiAgbWFyZ2luOiBhdXRvOwogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB0b3A6IDA7CiAgcmlnaHQ6IDA7CiAgYm90dG9tOiAwOwogIGxlZnQ6IDA7CiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB0cmFuc2xhdGVaKDApOwogIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7CiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTsKfQoubWQtc3Bpbm5lci1wYXRoIHsKICBmaWxsOiBub25lOwogIHN0cm9rZS1kYXNob2Zmc2V0OiAwOwogIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKfQpAa2V5ZnJhbWVzIHNwaW5uZXItcm90YXRlIHsKdG8gewogICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB0cmFuc2xhdGVaKDApOwp9Cn0KQGtleWZyYW1lcyBzcGlubmVyLWluaXRpYWwtcm90YXRlIHsKMCUgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgdHJhbnNsYXRlWigwKTsKfQoyMCUgewogICAgb3BhY2l0eTogMTsKfQoxMDAlIHsKICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgdHJhbnNsYXRlWigwKTsKfQp9CkBrZXlmcmFtZXMgc3Bpbm5lci1kYXNoIHsKMCUgewogICAgc3Ryb2tlLWRhc2hhcnJheTogMiwgMjAwOwogICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7Cn0KNTAlIHsKICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7CiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7Cn0KMTAwJSB7CiAgICBzdHJva2UtZGFzaGFycmF5OiA4OSwgMjAwOwogICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDsKfQp9Ci8qIENvbW1vbiAqLwovKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovCi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEltYWdlIGFzcGVjdCByYXRpbyBjYWxjdWxhdG9yICovCi8qIFJlc3BvbnNpdmUgYnJlYWtwb2ludHMgKi8KLm1kLXN0ZXBwZXIgewogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLW1zLWZsZXgtZmxvdzogY29sdW1uOwogICAgICBmbGV4LWZsb3c6IGNvbHVtbjsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgd2lkdGg6IDEwMCU7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXAtaGVhZGVyIHsKICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICBib3JkZXI6IDA7CiAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDsKICAgICAgICBmbGV4LXNocmluazogMDsKICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogICAgZm9udC1zaXplOiAxMnB4OwogICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgIG1hcmdpbjogMDsKICAgIG1heC1oZWlnaHQ6IDcycHg7CiAgICBwYWRkaW5nOiAyNHB4OwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXAtaGVhZGVyIC5tZC1zdGVwLWljb25zLCAubWQtc3RlcHBlciAubWQtc3RlcC1oZWFkZXIgLm1kLXN0ZXAtdGl0bGVzIHsKICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOwogICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwp9Ci5tZC1zdGVwcGVyIC5tZC1zdGVwLWhlYWRlci5tZC1oYXMtc3ViLW1lc3NhZ2UgewogICAgICBwYWRkaW5nOiAxNXB4IDI0cHg7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXAtaGVhZGVyLm1kLWhhcy1zdWItbWVzc2FnZSAubWQtc3RlcC10aXRsZSB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRweDsKfQoubWQtc3RlcHBlciAubWQtc3RlcC1oZWFkZXIgLm1kLXN0ZXAtaWNvbiB7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICBoZWlnaHQ6IDI0cHg7CiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4OwogICAgICBtYXJnaW4tcmlnaHQ6IDhweDsKICAgICAgbWluLXdpZHRoOiAyNHB4OwogICAgICBwYWRkaW5nOiAwcHggNnB4OwogICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgd2lkdGg6IDI0cHg7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXAtaGVhZGVyIC5tZC1zdGVwLWVycm9yIHsKICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7CiAgICAgIG1pbi13aWR0aDogMjRweDsKICAgICAgaGVpZ2h0OiAyNHB4OwogICAgICB3aWR0aDogMjRweDsKICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7CiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOwogICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOwp9Ci5tZC1zdGVwcGVyIC5tZC1zdGVwLWhlYWRlciAubWQtc3RlcC1udW1iZXIgewogICAgICBib3JkZXItcmFkaXVzOiA1MCU7CiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgICAgZm9udC1zaXplOiAxMnB4OwogICAgICBtYXJnaW4tcmlnaHQ6IDhweDsKICAgICAgd2lkdGg6IDI0cHg7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXAtaGVhZGVyIC5tZC1zdGVwLW51bWJlciBzcGFuIHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICBsaW5lLWhlaWdodDogMjRweDsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXAtaGVhZGVyIC5tZC1zdGVwLXRpdGxlIHsKICAgICAgZm9udC1zaXplOiBpbmhlcml0Owp9Ci5tZC1zdGVwcGVyIC5tZC1zdGVwLWhlYWRlci5tZC1kaXNhYmxlZCB7CiAgICAgIGN1cnNvcjogZGVmYXVsdDsKICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lOwp9Ci5tZC1zdGVwcGVyIC5tZC1zdGVwcy1uYXZpZ2F0aW9uIHsKICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogICAgZGlzcGxheTogZmxleDsKICAgIGhlaWdodDogNzJweDsKICAgIG1pbi1oZWlnaHQ6IDcycHg7CiAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB6LWluZGV4OiAxOwp9Ci5tZC1zdGVwcGVyIC5tZC1zdGVwcy1uYXZpZ2F0aW9uLm1kLWFsdGVybmF0ZS1sYWJlbHMgewogICAgICBoZWlnaHQ6IDEwNHB4OwogICAgICBtaW4taGVpZ2h0OiAxMDRweDsKfQoubWQtc3RlcHBlciAubWQtc3RlcHMtbmF2aWdhdGlvbiAubWQtc3RlcHMtbmF2aWdhdGlvbi1jb250YWluZXIgewogICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgICAgZGlzcGxheTogZmxleDsKICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTsKICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsKICAgICAgd2lkdGg6IDEwMCU7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXBzLW5hdmlnYXRpb24gLm1kLXN0ZXBzLW5hdmlnYXRpb24tY29udGFpbmVyIC5tZC1kaXZpZGVyIHsKICAgICAgICBtYXJnaW46IDM2cHggMDsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICAgICAgd2lkdGg6IDEwMCU7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXBzLW5hdmlnYXRpb24gLm1kLXN0ZXBzLW5hdmlnYXRpb24tY29udGFpbmVyIC5tZC1zdGVwLWhlYWRlci5tZC1hbHRlcm5hdGUtbGFiZWxzIHsKICAgICAgICBtYXgtaGVpZ2h0OiAxMDRweDsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXBzLW5hdmlnYXRpb24gLm1kLXN0ZXBzLW5hdmlnYXRpb24tY29udGFpbmVyIC5tZC1zdGVwLWhlYWRlci5tZC1hbHRlcm5hdGUtbGFiZWxzLm1kLWhhcy1zdWItbWVzc2FnZSB7CiAgICAgICAgICBwYWRkaW5nOiAyNHB4Owp9Ci5tZC1zdGVwcGVyIC5tZC1zdGVwcy1uYXZpZ2F0aW9uIC5tZC1zdGVwcy1uYXZpZ2F0aW9uLWNvbnRhaW5lciAubWQtc3RlcC1oZWFkZXIubWQtYWx0ZXJuYXRlLWxhYmVscyAubWQtc3RlcC1pY29ucywgLm1kLXN0ZXBwZXIgLm1kLXN0ZXBzLW5hdmlnYXRpb24gLm1kLXN0ZXBzLW5hdmlnYXRpb24tY29udGFpbmVyIC5tZC1zdGVwLWhlYWRlci5tZC1hbHRlcm5hdGUtbGFiZWxzIC5tZC1zdGVwLXRpdGxlcyB7CiAgICAgICAgICBkaXNwbGF5OiBibG9jazsKfQoubWQtc3RlcHBlciAubWQtc3RlcHMtbmF2aWdhdGlvbiAubWQtc3RlcHMtbmF2aWdhdGlvbi1jb250YWluZXIgLm1kLXN0ZXAtaGVhZGVyLm1kLWFsdGVybmF0ZS1sYWJlbHMgLm1kLXN0ZXAtdGl0bGVzIHsKICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXBzLWNvbnRhaW5lciB7CiAgICBoZWlnaHQ6IDA7CiAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgd2lkdGg6IDEwMCU7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXBzLWNvbnRhaW5lciAubWQtc3RlcHMtd3JhcHBlciB7CiAgICAgIGJvdHRvbTogMDsKICAgICAgbGVmdDogMDsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICByaWdodDogMDsKICAgICAgdG9wOiAwOwogICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOwogICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICAgICAgd2lkdGg6IDk5OTllbTsKfQoubWQtc3RlcHBlciAubWQtc3RlcHMtY29udGFpbmVyIC5tZC1zdGVwcy13cmFwcGVyIC5tZC1zdGVwIHsKICAgICAgICBsZWZ0OiAwOwogICAgICAgIHBhZGRpbmc6IDE2cHg7CiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICAgIHJpZ2h0OiAwOwogICAgICAgIHRvcDogMDsKfQoubWQtc3RlcHBlciAubWQtc3RlcHMtY29udGFpbmVyIC5tZC1zdGVwcy13cmFwcGVyIC5tZC1zdGVwIC5tZC1zdGVwLWNvbnRlbnQgewogICAgICAgICAgcGFkZGluZzogMTZweDsKICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4Owp9Ci5tZC1zdGVwcGVyIC5tZC1zdGVwcy1jb250YWluZXIgLm1kLXN0ZXBzLXdyYXBwZXIgLm1kLXN0ZXAgLm1kLXN0ZXAtY29udGVudDpsYXN0LWNoaWxkIHsKICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXBzLXZlcnRpY2FsLWNvbnRhaW5lciAubWQtc3RlcCAubWQtc3RlcC1oZWFkZXIgewogICAgcGFkZGluZy1ib3R0b206IDhweDsKfQoubWQtc3RlcHBlciAubWQtc3RlcHMtdmVydGljYWwtY29udGFpbmVyIC5tZC1zdGVwOm5vdCg6Zmlyc3Qtb2YtdHlwZSkgLm1kLXN0ZXAtaGVhZGVyIHsKICAgIHBhZGRpbmctdG9wOiA4cHg7Cn0KLm1kLXN0ZXBwZXIgLm1kLXN0ZXBzLXZlcnRpY2FsLWNvbnRhaW5lciAubWQtc3RlcCAubWQtc3RlcC1jb250ZW50IHsKICAgIG1hcmdpbjogMCAyNHB4IDAgMzRweDsKICAgIHBhZGRpbmctYm90dG9tOiAzMnB4OwogICAgcGFkZGluZy1sZWZ0OiAyNHB4OwogICAgcGFkZGluZy10b3A6IDhweDsKfQoubWQtc3RlcHBlciAubWQtc3RlcHMtdmVydGljYWwtY29udGFpbmVyIC5tZC1zdGVwOm5vdCg6bGFzdC1vZi10eXBlKSAubWQtc3RlcC1jb250ZW50IHsKICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0JEQkRCRDsKfQpAbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHsKICAubWQtc3RlcHBlciAubWQtc3RlcHMtbmF2aWdhdGlvbiAubWQtc3RlcHMtbmF2aWdhdGlvbi1jb250YWluZXIgewogICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7CiAgfQp9Ci8qIENvbW1vbiAqLwovKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovCi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi5tZC1zdWJoZWFkZXIgewogIG1pbi1oZWlnaHQ6IDQ4cHg7CiAgcGFkZGluZzogMCAxNnB4OwogIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogIGRpc3BsYXk6IGZsZXg7CiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsKICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDsKICAgICAgZmxleC1mbG93OiByb3cgd3JhcDsKICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKICBmb250LXNpemU6IDE0cHg7CiAgZm9udC13ZWlnaHQ6IDUwMDsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtc3dpdGNoIHsKICB3aWR0aDogYXV0bzsKICBtYXJnaW46IDE2cHggOHB4IDE2cHggMDsKICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7CiAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgcG9zaXRpb246IHJlbGF0aXZlOwp9Ci5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgewogICAgd2lkdGg6IDM0cHg7CiAgICBoZWlnaHQ6IDE0cHg7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBib3JkZXItcmFkaXVzOiAxNHB4OwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOwp9Ci5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC10aHVtYiB7CiAgICAgIHdpZHRoOiAyMHB4OwogICAgICBoZWlnaHQ6IDIwcHg7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgdG9wOiA1MCU7CiAgICAgIGxlZnQ6IDA7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7CiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsKICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7CiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7Cn0KLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciBpbnB1dCB7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgbGVmdDogLTk5OWVtOwp9Ci5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGUgewogICAgICB0b3A6IC0xNnB4OwogICAgICByaWdodDogLTE2cHg7CiAgICAgIGJvdHRvbTogLTE2cHg7CiAgICAgIGxlZnQ6IC0xNnB4OwogICAgICBib3JkZXItcmFkaXVzOiA1MCU7CiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOwp9Ci5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZSB7CiAgICAgICAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDsKICAgICAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDsKICAgICAgICB0b3A6IDAgIWltcG9ydGFudDsKICAgICAgICByaWdodDogMCAhaW1wb3J0YW50OwogICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50OwogICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDsKfQoubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1zd2l0Y2gtaG9sZGVyIHsKICAgICAgd2lkdGg6IDQwcHg7CiAgICAgIGhlaWdodDogNDBweDsKICAgICAgbWFyZ2luOiAwOwogICAgICBwYWRkaW5nOiAwOwogICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgIHRvcDogNTAlOwogICAgICBsZWZ0OiA1MCU7CiAgICAgIHotaW5kZXg6IDI7CiAgICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICAgIGJvcmRlcjogbm9uZTsKICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Cn0KLm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLWhvbGRlcjpmb2N1cyB7CiAgICAgICAgb3V0bGluZTogbm9uZTsKfQoubWQtc3dpdGNoIC5tZC1zd2l0Y2gtbGFiZWwgewogICAgaGVpZ2h0OiAxNHB4OwogICAgcGFkZGluZy1sZWZ0OiA4cHg7CiAgICBsaW5lLWhlaWdodDogMTRweDsKfQoubWQtc3dpdGNoLm1kLWRyYWdnaW5nIC5tZC1zd2l0Y2gtdGh1bWIgewogIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZzsKICBjdXJzb3I6IGdyYWJiaW5nOwp9Ci5tZC1zd2l0Y2gubWQtZGlzYWJsZWQgLm1kLXN3aXRjaC10aHVtYiB7CiAgY3Vyc29yOiBkZWZhdWx0Owp9Ci8qIENvbW1vbiAqLwovKiBSZXNwb25zaXZlIEJyZWFrcG9pbnRzICovCi8qIFRyYW5zaXRpb25zIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBFbGV2YXRpb24gLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi5tZC10YWJsZSB7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtbXMtZmxleC1mbG93OiBjb2x1bW4gd3JhcDsKICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDsKICBvdmVyZmxvdy14OiBhdXRvOwp9Ci5tZC10YWJsZS5tZC10cmFuc2l0aW9uLW9mZiAubWQtdGFibGUtY2VsbCwKICAubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXIsCiAgLm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVyIHsKICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDsKfQoubWQtdGFibGUgdGFibGUgewogICAgd2lkdGg6IDEwMCU7CiAgICBib3JkZXItc3BhY2luZzogMDsKICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7CiAgICBvdmVyZmxvdzogaGlkZGVuOwp9Ci5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93IHsKICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwOwp9Ci5tZC10YWJsZSB0Ym9keSAubWQtdGFibGUtcm93Lm1kLXNlbGVjdGVkIC5tZC10YWJsZS1jZWxsIHsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsKfQoubWQtdGFibGUgdGJvZHkgLm1kLXRhYmxlLXJvdzpob3ZlciAubWQtdGFibGUtY2VsbCB7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIHsKICAgIHBhZGRpbmc6IDA7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsKICAgIGZvbnQtc2l6ZTogMTJweDsKICAgIGxpbmUtaGVpZ2h0OiAxNnB4OwogICAgdGV4dC1hbGlnbjogbGVmdDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQ6bGFzdC1jaGlsZCAubWQtdGFibGUtaGVhZC1jb250YWluZXIgLm1kLXRhYmxlLWhlYWQtdGV4dCB7CiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLm1kLW51bWVyaWMgewogICAgICB0ZXh0LWFsaWduOiByaWdodDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb24gewogICAgICB3aWR0aDogMTZweDsKICAgICAgbWluLXdpZHRoOiAxNnB4OwogICAgICBoZWlnaHQ6IDE2cHg7CiAgICAgIG1pbi1oZWlnaHQ6IDE2cHg7CiAgICAgIGZvbnQtc2l6ZTogMTZweDsKICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uOm5vdCgubWQtc29ydGFibGUtaWNvbikgewogICAgICAgIG1hcmdpbjogMCA0cHg7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uOmZpcnN0LWNoaWxkIHsKICAgICAgICBtYXJnaW4tbGVmdDogMDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQgLm1kLWljb246bGFzdC1jaGlsZCB7CiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOwp9Ci5tZC10YWJsZSAubWQtdGFibGUtaGVhZC1jb250YWluZXIgewogICAgaGVpZ2h0OiA1NnB4OwogICAgcGFkZGluZzogMTRweCAwOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkLXRleHQgewogICAgaGVpZ2h0OiAyOHB4OwogICAgcGFkZGluZy1yaWdodDogMzJweDsKICAgIHBhZGRpbmctbGVmdDogMjRweDsKICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICBsaW5lLWhlaWdodDogMjhweDsKICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOwogICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKfQoubWQtdGFibGUgLm1kLXNvcnRhYmxlIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKfQoubWQtdGFibGUgLm1kLXNvcnRhYmxlOmZpcnN0LW9mLXR5cGUgLm1kLXNvcnRhYmxlLWljb24gewogICAgICBsZWZ0OiBhdXRvOwogICAgICByaWdodDogMTBweDsKfQoubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVyLCAubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCB7CiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOwp9Ci5tZC10YWJsZSAubWQtc29ydGFibGU6aG92ZXIgLm1kLXNvcnRhYmxlLWljb24sIC5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIC5tZC1zb3J0YWJsZS1pY29uIHsKICAgICAgICBvcGFjaXR5OiAxOwp9Ci5tZC10YWJsZSAubWQtc29ydGFibGUubWQtc29ydGVkIC5tZC1zb3J0YWJsZS1pY29uIHsKICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7Cn0KLm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQtZGVzY2VuZGluZyAubWQtc29ydGFibGUtaWNvbiB7CiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKTsKfQoubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1zb3J0YWJsZS1pY29uIHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICB0b3A6IDUwJTsKICAgICAgbGVmdDogMnB4OwogICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOwogICAgICBvcGFjaXR5OiAwOwogICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsKfQoubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1pbmstcmlwcGxlIHsKICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIHsKICAgIGhlaWdodDogNDhweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7CiAgICBmb250LXNpemU6IDEzcHg7CiAgICBsaW5lLWhlaWdodDogMThweDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLWNlbGw6bGFzdC1jaGlsZCAubWQtdGFibGUtY2VsbC1jb250YWluZXIgewogICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4Owp9Ci5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmljIHsKICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLW51bWVyaWMgLm1kLWljb24gewogICAgICAgIG1hcmdpbjogMDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtbnVtZXJpYyAubWQtdGFibGUtY2VsbC1jb250YWluZXIgewogICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogICAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsKICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwp9Ci5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmljIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lciAubWQtaWNvbiwKICAgICAgICAubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtbnVtZXJpYyAubWQtdGFibGUtY2VsbC1jb250YWluZXIgLm1kLWJ1dHRvbiAubWQtaWNvbiB7CiAgICAgICAgICBtYXJnaW46IGF1dG87Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLWhhcy1hY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHsKICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgICAgIGRpc3BsYXk6IGZsZXg7CiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5OwogICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwp9Ci5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtdGFibGUtY2VsbC1jb250YWluZXIgewogICAgICBwYWRkaW5nOiA2cHggMzJweCA2cHggMjRweDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbiB7CiAgICAgIHdpZHRoOiAzNnB4OwogICAgICBtaW4td2lkdGg6IDM2cHg7CiAgICAgIGhlaWdodDogMzZweDsKICAgICAgbWluLWhlaWdodDogMzZweDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwgLm1kLWJ1dHRvbjpsYXN0LWNoaWxkIHsKICAgICAgICBtYXJnaW46IDAgLTEwcHggMCAwOwp9Ci5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9uIC5tZC1pY29uIHsKICAgICAgICBtYXJnaW46IGF1dG87CiAgICAgICAgd2lkdGg6IDE4cHg7CiAgICAgICAgbWluLXdpZHRoOiAxOHB4OwogICAgICAgIGhlaWdodDogMThweDsKICAgICAgICBtaW4taGVpZ2h0OiAxOHB4OwogICAgICAgIGNvbG9yOiBpbmhlcml0OwogICAgICAgIGZvbnQtc2l6ZTogMThweDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiB7CiAgICB3aWR0aDogNjBweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gKyAubWQtdGFibGUtY2VsbCAubWQtdGFibGUtY2VsbC1jb250YWluZXIsCiAgICAubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiArIC5tZC10YWJsZS1oZWFkIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciAubWQtdGFibGUtaGVhZC10ZXh0IHsKICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyIHsKICAgICAgcGFkZGluZy1yaWdodDogMTZweDsKICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4Owp9Ci5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveCB7CiAgICAgIG1hcmdpbjogMDsKfQoubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVyIHsKICAgICAgd2lkdGg6IDE4cHg7CiAgICAgIGhlaWdodDogMThweDsKICAgICAgbWluLXdpZHRoOiBhdXRvOwogICAgICBtYXJnaW4tdG9wOiAxcHg7Cn0KLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlciB7CiAgICAgICAgdG9wOiAtMXB4OwogICAgICAgIGxlZnQ6IDRweDsKfQoubWQtdGFibGUgLm1kLXNlbGVjdCB7CiAgICBtaW4td2lkdGg6IDg0cHg7Cn0KLm1kLXRhYmxlIC5tZC1zZWxlY3QtdmFsdWUsCiAgLm1kLXRhYmxlIC5tZC1vcHRpb24gewogICAgZm9udC1zaXplOiAxM3B4Owp9Ci5tZC10YWJsZS1lZGl0LXRyaWdnZXIgewogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKICBjdXJzb3I6IHBvaW50ZXI7CiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7Cn0KLm1kLXRhYmxlLWVkaXQtdHJpZ2dlci5tZC1lZGl0ZWQgewogICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7Cn0KLm1kLXRhYmxlLWRpYWxvZyB7CiAgbWF4LWhlaWdodDogMDsKICBtYXJnaW46IDA7CiAgcGFkZGluZzogMCAyNHB4IDJweDsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgdG9wOiAwOwogIHJpZ2h0OiAwOwogIGxlZnQ6IDI0cHg7CiAgei1pbmRleDogNjA7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICBwb2ludGVyLWV2ZW50czogbm9uZTsKICBib3JkZXItcmFkaXVzOiAycHg7CiAgYm94LXNoYWRvdzogMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7CiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsKICBvcGFjaXR5OiAwOwogIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpLCBtYXgtaGVpZ2h0IDBzIDAuNXM7CiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjNzOwogIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgLThweCwgMCk7Cn0KLm1kLXRhYmxlLWRpYWxvZy5tZC1hY3RpdmUgewogICAgbWF4LWhlaWdodDogNDAwcHg7CiAgICBwb2ludGVyLWV2ZW50czogYXV0bzsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoIzAwMCk7CiAgICBvcGFjaXR5OiAxOwogICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7CiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7Cn0KLm1kLXRhYmxlLWRpYWxvZy5tZC1sYXJnZSB7CiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMnB4Owp9Ci5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lciB7CiAgICBtYXJnaW4tdG9wOiAwOwogICAgbWFyZ2luLWJvdHRvbTogMTZweDsKfQoubWQtdGFibGUtZGlhbG9nIC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgaW5wdXQgewogICAgICBmb250LXNpemU6IDEzcHg7Cn0KLm1kLXRhYmxlLWRpYWxvZyAubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsKICAgICAgICBmb250LXNpemU6IDEzcHg7Cn0KLm1kLXRhYmxlLWRpYWxvZyAubWQtY2hhci1jb3VudGVyIHsKICAgIGZvbnQtc2l6ZTogMTMuNXB4OwogICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7Cn0KLm1kLXRhYmxlLWRpYWxvZyAubWQtYnV0dG9uIHsKICAgIG1pbi13aWR0aDogNjRweDsKfQoubWQtdGFibGUtY2FyZCB7CiAgb3ZlcmZsb3c6IHZpc2libGU7Cn0KLm1kLXRhYmxlLWNhcmQgLm1kLXRvb2xiYXIgewogICAgcGFkZGluZy1sZWZ0OiAxNnB4OwogICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsKfQoubWQtdGFibGUtY2FyZCAubWQtdGl0bGUgewogICAgLW1zLWZsZXg6IDE7CiAgICAgICAgZmxleDogMTsKICAgIGZvbnQtc2l6ZTogMjBweDsKfQoubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiB7CiAgICBoZWlnaHQ6IDU2cHg7CiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICAtbXMtZmxleDogMTsKICAgICAgICBmbGV4OiAxOwogICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgLW1zLWZsZXgtcGFjazogZW5kOwogICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7CiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDsKICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOwogICAgZm9udC1zaXplOiAxMnB4Owp9Ci5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC10YWJsZS1wYWdpbmF0aW9uLXByZXZpb3VzIHsKICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7CiAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4Owp9Ci5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3QgewogICAgICB3aWR0aDogYXV0bzsKICAgICAgbWluLXdpZHRoOiAzNnB4OwogICAgICBtYXJnaW46IDAgMzJweDsKfQoubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtc2VsZWN0OmFmdGVyIHsKICAgICAgICBtYXJnaW4tdG9wOiAwOwp9Ci5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZSB7CiAgICAgICAgcGFkZGluZzogMDsKICAgICAgICBib3JkZXI6IG5vbmU7CiAgICAgICAgZm9udC1zaXplOiAxM3B4Owp9Ci5tZC10YWJsZS1jYXJkIC5tZC10YWJsZS1wYWdpbmF0aW9uIC5tZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHsKICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7Cn0KLm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLWJ1dHRvbltkaXNhYmxlZF0gLm1kLWljb24gewogICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsKfQoubWQtcGFnaW5hdGlvbi1zZWxlY3QubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodCB7CiAgbWFyZ2luLXRvcDogLTE2cHg7Cn0KLm1kLXBhZ2luYXRpb24tc2VsZWN0IC5tZC1saXN0LWl0ZW0taG9sZGVyIHsKICBmb250LXNpemU6IDEzcHg7Cn0KLm1kLXRhYmxlLWFsdGVybmF0ZS1oZWFkZXIgewogIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICB0b3A6IDA7CiAgcmlnaHQ6IDA7CiAgbGVmdDogMDsKICB6LWluZGV4OiAxMDsKICBwb2ludGVyLWV2ZW50czogbm9uZTsKICBvcGFjaXR5OiAwOwogIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogIHRyYW5zaXRpb24tZHVyYXRpb246IC4zczsKfQoubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlci5tZC1hY3RpdmUgewogICAgcG9pbnRlci1ldmVudHM6IGF1dG87CiAgICBvcGFjaXR5OiAxOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRCgjMDAwKTsKfQoubWQtdGFibGUtYWx0ZXJuYXRlLWhlYWRlciAubWQtY291bnRlciB7CiAgICBtYXJnaW4tbGVmdDogOHB4OwogICAgLW1zLWZsZXg6IDE7CiAgICAgICAgZmxleDogMTsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwovKiBJbWFnZSBhc3BlY3QgcmF0aW8gY2FsY3VsYXRvciAqLwovKiBSZXNwb25zaXZlIGJyZWFrcG9pbnRzICovCi5tZC10YWJzIHsKICB3aWR0aDogMTAwJTsKICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICBkaXNwbGF5OiBmbGV4OwogIC1tcy1mbGV4LWZsb3c6IGNvbHVtbjsKICAgICAgZmxleC1mbG93OiBjb2x1bW47CiAgcG9zaXRpb246IHJlbGF0aXZlOwp9Ci5tZC10YWJzLm1kLXRyYW5zaXRpb24tb2ZmICogewogICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50Owp9Ci5tZC10YWJzLm1kLWR5bmFtaWMtaGVpZ2h0IC5tZC10YWJzLWNvbnRlbnQgewogICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7Cn0KLm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbiB7CiAgICBoZWlnaHQ6IDQ4cHg7CiAgICBtaW4taGVpZ2h0OiA0OHB4OwogICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgei1pbmRleDogMTsKICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94OwogICAgZGlzcGxheTogZmxleDsKICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogICAgb3ZlcmZsb3c6IGhpZGRlbjsKfQoubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWhhcy1uYXZpZ2F0aW9uLXNjcm9sbCAubWQtdGFiLWhlYWRlci1uYXZpZ2F0aW9uLWJ1dHRvbi5tZC1sZWZ0IHsKICAgICAgLW1zLWZsZXgtb3JkZXI6IDE7CiAgICAgICAgICBvcmRlcjogMTsKfQoubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWhhcy1uYXZpZ2F0aW9uLXNjcm9sbCAubWQtdGFicy1uYXZpZ2F0aW9uLWNvbnRhaW5lciB7CiAgICAgIC1tcy1mbGV4LW9yZGVyOiAyOwogICAgICAgICAgb3JkZXI6IDI7Cn0KLm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtbmF2aWdhdGlvbi1zY3JvbGwgLm1kLXRhYi1oZWFkZXItbmF2aWdhdGlvbi1idXR0b24ubWQtcmlnaHQgewogICAgICAtbXMtZmxleC1vcmRlcjogMzsKICAgICAgICAgIG9yZGVyOiAzOwp9Ci5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtaGFzLWljb24ubWQtaGFzLWxhYmVsIHsKICAgICAgbWluLWhlaWdodDogNzJweDsKfQoubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWhhcy1pY29uLm1kLWhhcy1sYWJlbCAubWQtaWNvbiB7CiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsKfQoubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWNlbnRlcmVkIHsKICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyOwogICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Cn0KLm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1maXhlZCAubWQtdGFicy1uYXZpZ2F0aW9uLWNvbnRhaW5lciwKICAgIC5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtZml4ZWQgLm1kLXRhYnMtbmF2aWdhdGlvbi1zY3JvbGwtY29udGFpbmVyIHsKICAgICAgLW1zLWZsZXg6IDE7CiAgICAgICAgICBmbGV4OiAxOwp9Ci5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtZml4ZWQgLm1kLXRhYi1oZWFkZXIgewogICAgICAtbXMtZmxleDogMTsKICAgICAgICAgIGZsZXg6IDE7CiAgICAgIG1heC13aWR0aDogbm9uZTsKfQoubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLXJpZ2h0IHsKICAgICAgLW1zLWZsZXgtcGFjazogZW5kOwogICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsKfQoubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLWNvbnRhaW5lciB7CiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICBvdmVyZmxvdy14OiBhdXRvOwp9Ci5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24tc2Nyb2xsLWNvbnRhaW5lciB7CiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgIGRpc3BsYXk6IGZsZXg7Cn0KLm1kLXRhYnMgLm1kLXRhYi1oZWFkZXIgewogICAgbWluLXdpZHRoOiA3MnB4OwogICAgbWF4LXdpZHRoOiAyNjRweDsKICAgIG1hcmdpbjogMDsKICAgIHBhZGRpbmc6IDAgMTJweDsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIGJvcmRlcjogMDsKICAgIGJhY2tncm91bmQ6IG5vbmU7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTsKICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OwogICAgZm9udC1zaXplOiAxNHB4OwogICAgZm9udC13ZWlnaHQ6IDUwMDsKICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDsKICAgICAgICBmbGV4LXNocmluazogMDsKfQoubWQtdGFicyAubWQtdGFiLWhlYWRlci5tZC1kaXNhYmxlZCB7CiAgICAgIGN1cnNvcjogZGVmYXVsdDsKICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lOwp9Ci5tZC10YWJzIC5tZC10YWItaGVhZGVyLWNvbnRhaW5lciB7CiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDsKICAgIGRpc3BsYXk6IGZsZXg7CiAgICAtbXMtZmxleC1mbG93OiBjb2x1bW47CiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47CiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7CiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Cn0KLm1kLXRhYnMgLm1kLXRhYi1oZWFkZXItY29udGFpbmVyIC5tZC1pY29uIHsKICAgICAgbWFyZ2luOiAwOwp9Ci5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yIHsKICAgIGhlaWdodDogMnB4OwogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgYm90dG9tOiAwOwogICAgbGVmdDogMDsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMCwgMCk7Cn0KLm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdHJhbnNpdGlvbi1vZmYgewogICAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7Cn0KLm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3IubWQtdG8tcmlnaHQgewogICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKSwgcmlnaHQgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpOwp9Ci5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yLm1kLXRvLWxlZnQgewogICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSwgcmlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSksIGxlZnQgMC4xNXMgY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpOwp9Ci5tZC10YWJzIC5tZC10YWItaGVhZGVyLW5hdmlnYXRpb24tYnV0dG9uIHsKICAgIGJvcmRlcjogbm9uZTsKICAgIGhlaWdodDogMTAwJTsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQoubWQtdGFicyAubWQtdGFiLWhlYWRlci1uYXZpZ2F0aW9uLWJ1dHRvbi5tZC1sZWZ0IHsKICAgICAgbGVmdDogMDsKfQoubWQtdGFicyAubWQtdGFiLWhlYWRlci1uYXZpZ2F0aW9uLWJ1dHRvbi5tZC1yaWdodCB7CiAgICAgIHJpZ2h0OiAwOwp9Ci5tZC10YWJzIC5tZC10YWItaGVhZGVyLW5hdmlnYXRpb24tYnV0dG9uLm1kLWRpc2FibGVkIHsKICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgICAgIG9wYWNpdHk6IC40Owp9Ci5tZC10YWJzIC5tZC10YWJzLWNvbnRlbnQgewogICAgd2lkdGg6IDEwMCU7CiAgICBoZWlnaHQ6IDA7CiAgICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgICBvdmVyZmxvdzogaGlkZGVuOwp9Ci5tZC10YWJzIC5tZC10YWJzLXdyYXBwZXIgewogICAgcG9zaXRpb246IGFic29sdXRlOwogICAgdG9wOiAwOwogICAgcmlnaHQ6IDA7CiAgICBib3R0b206IDA7CiAgICBsZWZ0OiAwOwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsKICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwp9Ci5tZC10YWJzIC5tZC10YWIgewogICAgcGFkZGluZzogMTZweDsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHRvcDogMDsKICAgIGxlZnQ6IDA7CiAgICByaWdodDogMDsKfQpAbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHsKICAubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWhhcy1uYXZpZ2F0aW9uLXNjcm9sbCAubWQtdGFicy1uYXZpZ2F0aW9uLWNvbnRhaW5lciB7CiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDsKICB9Cn0KLyogQ29tbW9uICovCi8qIFJlc3BvbnNpdmUgQnJlYWtwb2ludHMgKi8KLyogVHJhbnNpdGlvbnMgLSBCYXNlZCBvbiBBbmd1bGFyIE1hdGVyaWFsICovCi8qIEVsZXZhdGlvbiAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLm1kLXRvb2xiYXIgewogIG1pbi1oZWlnaHQ6IDY0cHg7CiAgcGFkZGluZzogMCA4cHg7CiAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgZGlzcGxheTogZmxleDsKICAtbXMtZmxleC1hbGlnbjogY2VudGVyOwogICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyOwogICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7CiAgLW1zLWZsZXgtZmxvdzogcm93IHdyYXA7CiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7CiAgcG9zaXRpb246IHJlbGF0aXZlOwogIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoMCwgMCwgMCk7Cn0KLm1kLXRvb2xiYXIubWQtZGVuc2UgewogICAgbWluLWhlaWdodDogNDhweDsKfQoubWQtdG9vbGJhci5tZC1kZW5zZS5tZC1tZWRpdW0gewogICAgICBtaW4taGVpZ2h0OiA3MnB4Owp9Ci5tZC10b29sYmFyLm1kLWRlbnNlLm1kLWxhcmdlIHsKICAgICAgbWluLWhlaWdodDogOTZweDsKfQoubWQtdG9vbGJhci5tZC1kZW5zZSAubWQtdG9vbGJhci1jb250YWluZXIgewogICAgICBoZWlnaHQ6IDQ4cHg7Cn0KLm1kLXRvb2xiYXIubWQtbWVkaXVtIHsKICAgIG1pbi1oZWlnaHQ6IDg4cHg7Cn0KLm1kLXRvb2xiYXIubWQtbWVkaXVtIC5tZC10b29sYmFyLWNvbnRhaW5lcjpudGgtY2hpbGQoMikgLm1kLXRpdGxlOmZpcnN0LWNoaWxkIHsKICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7Cn0KLm1kLXRvb2xiYXIubWQtbGFyZ2UgewogICAgbWluLWhlaWdodDogMTI4cHg7CiAgICAtbXMtZmxleC1saW5lLXBhY2s6IGluaGVyaXQ7CiAgICAgICAgYWxpZ24tY29udGVudDogaW5oZXJpdDsKfQoubWQtdG9vbGJhci5tZC1sYXJnZSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZCB7CiAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4Owp9Ci5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIHsKICAgIG1pbi1oZWlnaHQ6IDE2NHB4Owp9Ci5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1pbmstcmlwcGxlIHsKICAgICAgY29sb3I6ICNmZmY7Cn0KLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWxpc3QtaXRlbS1jb250YWluZXI6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTsKfQoubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtYXZhdGFyLWxpc3QgewogICAgICBtYXJnaW46IDE2cHggMCA4cHg7Cn0KLm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWF2YXRhci1saXN0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVyIHsKICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7CiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0Owp9Ci5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdCAubWQtYXZhdGFyICsgLm1kLWF2YXRhciB7CiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7Cn0KLm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVyIHsKICAgIHdpZHRoOiAxMDAlOwogICAgaGVpZ2h0OiA2NHB4OwogICAgZGlzcGxheTogLW1zLWZsZXhib3g7CiAgICBkaXNwbGF5OiBmbGV4OwogICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjsKICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOwogICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RhcnQ7CiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsKfQoubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXIgPiAubWQtYnV0dG9uOmZpcnN0LWNoaWxkIHsKICAgICAgbWFyZ2luLWxlZnQ6IDA7CiAgICAgIG1hcmdpbi1yaWdodDogMTZweDsKfQoubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXIgPiAubWQtYnV0dG9uICsgLm1kLWJ1dHRvbiB7CiAgICAgIG1hcmdpbi1sZWZ0OiAwOwp9Ci5tZC10b29sYmFyID4gLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZCB7CiAgICBtYXJnaW4tbGVmdDogMDsKICAgIG1hcmdpbi1yaWdodDogMTZweDsKfQoubWQtdG9vbGJhciA+IC5tZC1idXR0b24gKyAubWQtYnV0dG9uIHsKICAgIG1hcmdpbi1sZWZ0OiAwOwp9Ci5tZC10b29sYmFyIC5tZC1idXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdCgubWQtcmFpc2VkKTpub3QoLm1kLWljb24tYnV0dG9uKTpub3QoLm1kLWZhYikgewogICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOwp9Ci5tZC10b29sYmFyIC5tZC10aXRsZSB7CiAgICBtYXJnaW46IDA7CiAgICBmb250LXNpemU6IDIwcHg7CiAgICBmb250LXdlaWdodDogNDAwOwp9Ci5tZC10b29sYmFyIC5tZC10aXRsZTpmaXJzdC1jaGlsZCB7CiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7Cn0KLm1kLXRvb2xiYXIgLm1kLXRpdGxlICsgLm1kLWlucHV0LWNvbnRhaW5lciB7CiAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4Owp9Ci5tZC10b29sYmFyIC5tZC1pbnB1dC1jb250YWluZXIgewogICAgbWluLWhlaWdodDogMzJweDsKICAgIG1hcmdpbi10b3A6IDA7CiAgICBtYXJnaW4tYm90dG9tOiAwOwogICAgcGFkZGluZy10b3A6IDA7Cn0KLm1kLXRvb2xiYXIgLm1kLWxpc3QgewogICAgcGFkZGluZzogMDsKICAgIG1hcmdpbjogMCAtOHB4OwogICAgLW1zLWZsZXg6IDE7CiAgICAgICAgZmxleDogMTsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtdG9vbHRpcCB7CiAgaGVpZ2h0OiAyMHB4OwogIHBhZGRpbmc6IDAgOHB4OwogIHBvc2l0aW9uOiBmaXhlZDsKICB6LWluZGV4OiAyMDA7CiAgcG9pbnRlci1ldmVudHM6IG5vbmU7CiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgOTcsIDk3LCAwLjg3KTsKICBib3JkZXItcmFkaXVzOiAycHg7CiAgb3BhY2l0eTogMDsKICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgdG9wOwogIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpOwogIHRyYW5zaXRpb24tZHVyYXRpb246IC4zczsKICB0cmFuc2l0aW9uLWRlbGF5OiAwczsKICBjb2xvcjogI2ZmZjsKICBmb250LWZhbWlseTogUm9ib3RvLCAiTm90byBTYW5zIiwgTm90bywgc2Fucy1zZXJpZjsKICBmb250LXNpemU6IDEwcHg7CiAgbGluZS1oZWlnaHQ6IDIwcHg7CiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7CiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsKICBsZXR0ZXItc3BhY2luZzogMC4xZW07Cn0KLm1kLXRvb2x0aXAubWQtYWN0aXZlIHsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKTsKICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4zczsKfQoubWQtdG9vbHRpcDpub3QoLm1kLWFjdGl2ZSkgewogICAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDsKfQoubWQtdG9vbHRpcC5tZC10cmFuc2l0aW9uLW9mZiB7CiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7Cn0KLm1kLXRvb2x0aXAubWQtdG9vbHRpcC10b3AgewogICAgbWFyZ2luLXRvcDogLTE0cHg7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA4cHgpOwp9Ci5tZC10b29sdGlwLm1kLXRvb2x0aXAtdG9wLm1kLWFjdGl2ZSB7CiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApOwp9Ci5tZC10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQgewogICAgbWFyZ2luLWxlZnQ6IDE0cHg7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOHB4LCA1MCUpOwp9Ci5tZC10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHQubWQtYWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTsKfQoubWQtdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbSB7CiAgICBtYXJnaW4tdG9wOiAxNHB4OwogICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLThweCk7Cn0KLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20ubWQtYWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7Cn0KLm1kLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0IHsKICAgIG1hcmdpbi1sZWZ0OiAtMTRweDsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgNTAlKTsKfQoubWQtdG9vbHRpcC5tZC10b29sdGlwLWxlZnQubWQtYWN0aXZlIHsKICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNTAlKTsKfQovKiBDb21tb24gKi8KLyogUmVzcG9uc2l2ZSBCcmVha3BvaW50cyAqLwovKiBUcmFuc2l0aW9ucyAtIEJhc2VkIG9uIEFuZ3VsYXIgTWF0ZXJpYWwgKi8KLyogRWxldmF0aW9uIC0gQmFzZWQgb24gQW5ndWxhciBNYXRlcmlhbCAqLwoubWQtd2hpdGVmcmFtZSB7CiAgcG9zaXRpb246IHJlbGF0aXZlOwogIHotaW5kZXg6IDE7Cn0KLm1kLXdoaXRlZnJhbWUtMWRwIHsKICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKfQoubWQtd2hpdGVmcmFtZS0yZHAgewogIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTNkcCB7CiAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLXdoaXRlZnJhbWUtNGRwIHsKICBib3gtc2hhZG93OiAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLXdoaXRlZnJhbWUtNWRwIHsKICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLXdoaXRlZnJhbWUtNmRwIHsKICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTdkcCB7CiAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDdweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLThkcCB7CiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTlkcCB7CiAgYm94LXNoYWRvdzogMCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTEwZHAgewogIGJveC1zaGFkb3c6IDAgNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxMHB4IDE0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLXdoaXRlZnJhbWUtMTFkcCB7CiAgYm94LXNoYWRvdzogMCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDExcHggMTVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKfQoubWQtd2hpdGVmcmFtZS0xMmRwIHsKICBib3gtc2hhZG93OiAwIDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTEzZHAgewogIGJveC1zaGFkb3c6IDAgN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxM3B4IDE5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLXdoaXRlZnJhbWUtMTRkcCB7CiAgYm94LXNoYWRvdzogMCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDE0cHggMjFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKfQoubWQtd2hpdGVmcmFtZS0xNWRwIHsKICBib3gtc2hhZG93OiAwIDhweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAyOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTE2ZHAgewogIGJveC1zaGFkb3c6IDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTE3ZHAgewogIGJveC1zaGFkb3c6IDAgOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTdweCAyNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTE4ZHAgewogIGJveC1zaGFkb3c6IDAgOXB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAzNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTE5ZHAgewogIGJveC1zaGFkb3c6IDAgOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTlweCAyOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTIwZHAgewogIGJveC1zaGFkb3c6IDAgMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDIwcHggMzFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKfQoubWQtd2hpdGVmcmFtZS0yMWRwIHsKICBib3gtc2hhZG93OiAwIDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOHB4IDQwcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KLm1kLXdoaXRlZnJhbWUtMjJkcCB7CiAgYm94LXNoYWRvdzogMCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMjJweCAzNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpOwp9Ci5tZC13aGl0ZWZyYW1lLTIzZHAgewogIGJveC1zaGFkb3c6IDAgMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDIzcHggMzZweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsKfQoubWQtd2hpdGVmcmFtZS0yNGRwIHsKICBib3gtc2hhZG93OiAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7Cn0KCi8qIyBzb3VyY2VNYXBwaW5nVVJMPXZ1ZS1tYXRlcmlhbC5jc3MubWFwKi8='),
  globalLoad: (  function (data) {
    var st = document.createElement('style');
    st.appendChild(document.createTextNode(data));
    document.head.appendChild(st);
  }
  ),
  globalLoadCompleted: false,
  kind: 'string'
};
      