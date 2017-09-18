## development

- **BREAKING CHANGE** Require explicit declaration of entry points.
- Proper error messages.
- Add VueMaterial support.
- Avoid needlessly rewriting HTML source files by switching from html package's DOM
  manipulation to using Dart's refactoring libraries.
- Change *all* `vue.js` script tags to `vue.min.js` when in release mode, not just unpkg
  ones.
- Implement support for mixins.

## 0.1.1

- Upgrade initialize dependency for strong mode/DDC support.

## 0.1.0

- Initial.
