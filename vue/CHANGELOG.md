## development (0.4.0)

- **BREAKING CHANGE** vue2 and vue2_cli have been renamed to vue and vue_cli, respectively.
- **BREAKING CHANGE** `package:build` is now used instead of Pub transformers. Using Pub
  is no longer supported.
- **BREAKING CHANGE** Components are never globally registered. Instead, they must
  explicitly be passed to the `VueComponent` annotation.
- **BREAKING CHANGE** A new, extensible `VueAppOptions` API has been added for passing
  miscellaneous options to app constructors, and the specialized `router` argument
  has been dropped in favor of `options`.
- **BREAKING CHANGE** The overridable lifecycle methods now all have a `lifecycle`
  prefix, e.g. `void mounted` became `void lifecycleMounted`.
- **BREAKING CHANGE** The constructor boilerplate has all been dropped! No more
  `Component(context) => super(context)` or `factory App(context) => ...`.
- **BREAKING CHANGE** As a side-effect of the above, it is now *prohibited* to access
  anything Vue-related in your constructors. To be precise, *constructors can no longer be
  used as a substitute for the created lifecycle hook*. Instead, override the new
  `void lifecycleCreated()` method.
- Dart 2.0 is now supported!
- You can now use Sass in your styles!! Just set `lang="sass"` or `lang="scss"` on your
  `<style scoped>` tags.
- Mixins are now supported on a `VueApp`.
- `bool` props now created a boolean prop, instead of a prop that's either `null` or
  an empty string.

## 0.3.2

- Fix [#13](https://github.com/kirbyfan64/vuedart/issues/13): internal symbols were
  duplicated when using `part` with component files.
- Merged [#12](https://github.com/kirbyfan64/vuedart/pull/12): fixed typos in
  documentation.
- Merged [#16](https://github.com/kirbyfan64/vuedart/pull/16): check `window.Vue` to
  make sure it's been defined.

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
