define(['dart_sdk', 'packages/scoped_model/scoped_model', 'packages/flutter_course/scoped-models/main', 'packages/flutter/material', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__scoped_model__scoped_model, packages__flutter_course__scoped_models__main, packages__flutter__material, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icons = packages__flutter__material.src__material__icons;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const logout_list_tile = Object.create(dart.library);
  let ScopedModelDescendantOfMainModel = () => (ScopedModelDescendantOfMainModel = dart.constFn(scoped_model.ScopedModelDescendant$(main.MainModel)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextAndWidgetAndMainModelToListTile = () => (BuildContextAndWidgetAndMainModelToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, framework.Widget, main.MainModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/ui_elements/logout_list_tile.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 31,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/ui_elements/logout_list_tile.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 11,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/ui_elements/logout_list_tile.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/ui_elements/logout_list_tile.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  let C13;
  let C12;
  let C11;
  logout_list_tile.LogoutListTile = class LogoutListTile extends framework.StatelessWidget {
    build(context) {
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, widget, model) => new list_tile.ListTile.new({title: new text.Text.new("Logout", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), leading: new icon.Icon.new(icons.Icons.exit_to_app, {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), onTap: dart.fn(() => {
            model.logout();
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), BuildContextAndWidgetAndMainModelToListTile()), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
  };
  (logout_list_tile.LogoutListTile.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    logout_list_tile.LogoutListTile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = logout_list_tile.LogoutListTile.prototype;
  dart.addTypeTests(logout_list_tile.LogoutListTile);
  dart.setMethodSignature(logout_list_tile.LogoutListTile, () => ({
    __proto__: dart.getMethods(logout_list_tile.LogoutListTile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(logout_list_tile.LogoutListTile, "package:flutter_course/widgets/ui_elements/logout_list_tile.dart");
  dart.trackLibraries("packages/flutter_course/widgets/ui_elements/logout_list_tile", {
    "package:flutter_course/widgets/ui_elements/logout_list_tile.dart": logout_list_tile
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["logout_list_tile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,wDACI,SAAc,SAAgB,QAAkB,UAChD,mCACE,kBAAK,2EACH,kBAAW,wFACb;AACS,YAAd,AAAM,KAAD;;IAKf;;;;;;EACF","file":"logout_list_tile.ddc.js"}');
  // Exports:
  return {
    widgets__ui_elements__logout_list_tile: logout_list_tile
  };
});

//# sourceMappingURL=logout_list_tile.ddc.js.map
