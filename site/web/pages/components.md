{"title": "Components"}

# Components

<div id="component"></div>

## Defining a component

This example app isn't too interesting, though. I mean, it's not really *doing* anything.

But before we get that far, let's try defining a component. Toss this in
`lib/show_name.dart`:

```dart
import 'package:vue2/vue.dart';


@VueComponent('show-name', template: '<p>My name is {{name}}</p>')
class ShowName extends VueComponentBase {
  ShowName(context): super(context);

  @prop
  String name;
}
```

Also, add the following import to `index.dart`:

```dart
import 'package:vuedart_example/show_name.dart'; // <-- Component import goes here
```

and change `index.html` like so:

```html
<body vuedart>
  <div id="app">
    <show-name name="Bob"></show-name>
  </div>
</body>
```

Now refresh your browser page. You should see it now say, *Your name is Bob*.

But let's take a few steps back. What exactly is going on here?

- New components are defined using the *VueComponent* annotation and the *VueComponentBase*
  base class. You pass your template through the *template:* argument on the annotation
  (there's a better way, but we'll get to that later).
- Props in VueDart are declared via the *prop* annotation, and the syntax is just like
  normal Dart. You can also give a default value by doing `String name = "default name"`.
- As before, it's important to declare your constructor, except now it's taking a single
  argument, though it's still just passing it up a level.

That being said, putting templates in the annotation string is just nasty. In vanilla Vue,
you can use webpack for stuff like this. Does VueDart have an alternative? *Yup!*

Change the *VueComponent* annotation in `show_name.dart` to read:

```dart
@VueComponent('show-name', template: '<<show_name.html')
```

and create `lib/show_name.html` containing the following:

```html
<template vuedart>
  <p>My name is {{name}}</p>
</template>
```

The `<<show_name.html` syntax means *read show_name.html and use the template inside here*.
VueDart will read the file, extract the contents of the template element, and use that
for your template. However, this gets even better! Since your template is almost always
the same name as your Dart code (e.g. `show_name.dart` and `show_name.html`), VueDart
uses that as the default. Therefore, you can abbreviate all this to:

```dart
@VueComponent('show-name', template: '<<')
```

and VueDart will automatically use the template in `show_name.html`.
