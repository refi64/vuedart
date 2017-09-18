@JS()
library vuedart_site.docs_navlist;


import 'package:vue2/vue.dart';
import 'package:js/js.dart';

@anonymous
@JS()
class Entry {
  String title, addr;
  List<List<String>> contents;

  external factory Entry({String title, String addr, List<List<String>> contents});
}

@VueComponent('docs-navlist', template: '<<')
class DocsNavlist extends VueComponentBase {
  DocsNavlist(context): super(context);

  @method
  String getUrl(Entry entry, String ref) => '../pages/${entry.addr}#$ref';

  @data
  List<Entry> entries = [
    new Entry(
      title: 'Intro',
      addr: 'intro.html',
      contents: [
        ['Welcome', 'welcome'],
        ['First steps', 'first-steps'],
        ['Declaring data', 'data'],
        ['Declaring computed data', 'computed'],
        ['Final code', 'final'],
      ],
    ),
    new Entry(
      title: 'Components',
      addr: 'components.html',
      contents: [
        ['Defining a component', 'component'],
        ['Declaring properties', 'props'],
        ['Declaring methods', 'methods'],
        ['Mixins', 'mixins'],
        ['Final code', 'final'],
      ],
    ),
    new Entry(
      title: 'Advanced topics',
      addr: 'advanced.html',
      contents: [
        ['Crossing the JavaScript and Dart boundary', 'boundary'],
        ['Lifecycle callbacks', 'lifecycle'],
        ['Accessing refs', 'refs'],
        ['Render functions', 'render'],
      ],
    ),
    new Entry(
      title: 'Working with plugins',
      addr: 'plugins.html',
      contents: [
        ['How do plugins work in VueDart?', 'work'],
        ['VueMaterial', 'vuematerial'],
      ],
    ),
  ];
}
