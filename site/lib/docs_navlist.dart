@JS()
library docs_navlist;


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

  @data
  List<Entry> entries = [
    new Entry(
      title: 'Intro',
      addr: 'intro.html',
      contents: [
        ['First steps', 'first-steps'],
      ],
    ),
  ];
}
