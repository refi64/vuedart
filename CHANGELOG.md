## development

- **BREAKING CHANGE** Require explicit declaration of entry points.
- **BREAKING CHANGE** The `VueComponent` annotation now requires the name to be in
  a named argument (e.g. `@VueComponent(name: 'foo')`, instead of
  `@VueComponent('foo')`). This was necessary to support unnamed components.
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

## 0.2.0

*Yes this should have been a minor release, but I was tired.*

- Upgrade initialize dependency for strong mode/DDC support.

## 0.1.0

- Initial.
