## 0.3.1

- Upgrade scopify to 0.2.0.
- **BREAKING CHANGE** Due to the above upgrade, scoped styles no longer "bleed" into
  child elements. This behavior can still be manually re-enabled via the *bleeds* option
  to the *style* element. (AFAIK no one actually really used this, so it's not really
  a big change.)

## 0.3.0

- **BREAKING CHANGE** Require explicit declaration of entry points.
- **BREAKING CHANGE** The `VueComponent` annotation now requires the name to be in
  a named argument (e.g. `@VueComponent(name: 'foo')`, instead of
  `@VueComponent('foo')`). This was necessary to support unnamed components.
- Added the VueDart CLI.
- Proper error messages.
- Add VueMaterial 0.7 support.
- Add vue-router support.
- Avoid needlessly rewriting HTML source files by switching from html package's DOM
  manipulation to using Dart's refactoring libraries.
- Change *all* `vue.js` script tags to `vue.min.js` when in release mode, not just unpkg
  ones.
- Implement support for mixins (for components only for now).
- Implement scoped styles.
- Implement watchers.
- Add support for more instance methods: `$data`, `$props`, `$el`, `$options`, `$parent`,
  `$root`, `$on`, `$once`, `$off`, `$emit`, `$nextTick`, `$forceUpdate`, and `$destroy`.
- Add `VueConfig` and `VueConfig.ignoredElements`.

## 0.2.0

- Remove need for explicit *initialize* transformer usage.
- Upgrade initialize dependency for strong mode/DDC support.

## 0.1.0

- Initial.
