define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const title_default = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/ui_elements/title_default.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C5;
  let C1;
  let C0;
  const TitleDefault_title = dart.privateName(title_default, "TitleDefault.title");
  title_default.TitleDefault = class TitleDefault extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    build(context) {
      let deviceWidth = media_query.MediaQuery.of(context).size.width;
      return new text.Text.new(this.title, {overflow: paragraph.TextOverflow.fade, softWrap: false, style: new text_style.TextStyle.new({fontSize: dart.notNull(deviceWidth) > 500 ? 26.0 : 14.0, fontWeight: ui.FontWeight.bold, fontFamily: "Oswald"}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (title_default.TitleDefault.new = function(title, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    title_default.TitleDefault.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = title_default.TitleDefault.prototype;
  dart.addTypeTests(title_default.TitleDefault);
  const title$ = TitleDefault_title;
  dart.setMethodSignature(title_default.TitleDefault, () => ({
    __proto__: dart.getMethods(title_default.TitleDefault.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(title_default.TitleDefault, "package:flutter_course/widgets/ui_elements/title_default.dart");
  dart.setFieldSignature(title_default.TitleDefault, () => ({
    __proto__: dart.getFields(title_default.TitleDefault.__proto__),
    title: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_course/widgets/ui_elements/title_default", {
    "package:flutter_course/widgets/ui_elements/title_default.dart": title_default
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["title_default.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;UAKa;AAClB,wBAAwB,AAAY,AAAK,0BAAd,OAAO;AACxC,YAAO,mBACL,uBACuB,uCACb,cACH,wCACmB,aAAZ,WAAW,IAAG,MAAM,OAAO,kBAA6B,gCAAkB;IAE5F;;6CAZkB;;;AAAlB;;EAAwB","file":"title_default.ddc.js"}');
  // Exports:
  return {
    widgets__ui_elements__title_default: title_default
  };
});

//# sourceMappingURL=title_default.ddc.js.map
