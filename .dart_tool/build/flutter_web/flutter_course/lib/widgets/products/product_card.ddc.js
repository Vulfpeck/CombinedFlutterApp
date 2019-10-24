define(['dart_sdk', 'packages/scoped_model/scoped_model', 'packages/flutter_course/scoped-models/main', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter_course/models/product'], function(dart_sdk, packages__scoped_model__scoped_model, packages__flutter_course__scoped_models__main, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter_course__models__product) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const heroes = packages__flutter__src__widgets__actions.src__widgets__heroes;
  const fade_in_image = packages__flutter__src__widgets__actions.src__widgets__fade_in_image;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const theme = packages__flutter__material.src__material__theme;
  const card = packages__flutter__material.src__material__card;
  const product = packages__flutter_course__models__product.models__product;
  const product_card = Object.create(dart.library);
  const $toString = dartx.toString;
  let ScopedModelDescendantOfMainModel = () => (ScopedModelDescendantOfMainModel = dart.constFn(scoped_model.ScopedModelDescendant$(main.MainModel)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndWidgetAndMainModelToColumn = () => (BuildContextAndWidgetAndMainModelToColumn = dart.constFn(dart.fnType(basic.Column, [framework.BuildContext, framework.Widget, main.MainModel])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let BuildContextAndWidgetAndMainModelToGestureDetector = () => (BuildContextAndWidgetAndMainModelToGestureDetector = dart.constFn(dart.fnType(gesture_detector.GestureDetector, [framework.BuildContext, framework.Widget, main.MainModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 25,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 25,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 31,
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
        [_Location_column]: 30,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 31,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 84,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 23,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 23,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 23,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 23,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "image",
        [_Location_column]: 19,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 19,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "placeholder",
        [_Location_column]: 19,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76, C77 || CT.C77, C78 || CT.C78, C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 17,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_card.dart"
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
  let C8;
  let C7;
  let C6;
  let C11;
  let C10;
  let C9;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C17;
  let C16;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C23;
  let C22;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C31;
  let C30;
  let C36;
  let C37;
  let C38;
  let C39;
  let C35;
  let C34;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C45;
  let C44;
  let C49;
  let C48;
  let C47;
  let C52;
  let C53;
  let C54;
  let C55;
  let C51;
  let C50;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C61;
  let C60;
  let C65;
  let C64;
  let C63;
  let C68;
  let C69;
  let C70;
  let C67;
  let C66;
  let C73;
  let C72;
  let C71;
  const _buildTitlePriceRow = dart.privateName(product_card, "_buildTitlePriceRow");
  let C76;
  let C77;
  let C78;
  let C79;
  let C80;
  let C75;
  let C74;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C88;
  let C86;
  let C85;
  let C91;
  let C90;
  let C89;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C97;
  let C96;
  const ProductCard_product = dart.privateName(product_card, "ProductCard.product");
  product_card.ProductCard = class ProductCard extends framework.StatelessWidget {
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    [_buildTitlePriceRow]() {
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.end, crossAxisAlignment: flex.CrossAxisAlignment.end, children: JSArrayOfWidget().of([new container.Container.new({padding: new edge_insets.EdgeInsets.only({top: 24.0, left: 24.0, right: 24.0, bottom: 16.0}), child: new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new basic.Expanded.new({child: new container.Container.new({child: new text.Text.new(this.product.title, {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w700, fontSize: 24.0}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new flat_button.FlatButton.new({onPressed: dart.fn(() => {
                      model.selectProduct(this.product.id);
                      model.toggleProductFavoriteStatus();
                    }, VoidToNull()), child: new basic.Row.new({children: JSArrayOfWidget().of([new icon.Icon.new(dart.test(this.product.isFavorite) ? icons.Icons.favorite : icons.Icons.favorite_border, {color: colors.Colors.red, $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new basic.SizedBox.new({width: 8.0, $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22})]), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 24.0, right: 24.0}), child: new text.Text.new("$" + dart.toString(this.product.price) + " • " + dart.str(this.product.location.address), {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44})]), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 24.0, right: 24.0, top: 8.0, bottom: 24.0}), child: new text.Text.new(dart.str(this.product.description), {maxLines: 1, overflow: paragraph.TextOverflow.ellipsis, style: new text_style.TextStyle.new({color: theme.Theme.of(context).hintColor, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60})]), $creationLocationd_0dea112b090073317d4: C63 || CT.C63})]), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), BuildContextAndWidgetAndMainModelToColumn()), $creationLocationd_0dea112b090073317d4: C71 || CT.C71});
    }
    build(context) {
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
            model.selectProduct(this.product.id);
            navigator.Navigator.pushNamed(core.bool, context, "/product/" + dart.notNull(this.product.id)).then(core.Null, dart.fn(_ => {
              model.selectProduct(null);
            }, boolToNull()));
          }, VoidToNull()), child: new card.Card.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new heroes.Hero.new({tag: this.product.id, child: new fade_in_image.FadeInImage.new({image: new _network_image_web.NetworkImage.new(this.product.image), fit: box_fit.BoxFit.cover, width: media_query.MediaQuery.of(context).size.width, height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.3, placeholder: new image_resolution.AssetImage.new("assets/placeholder.png"), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), this[_buildTitlePriceRow]()]), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), BuildContextAndWidgetAndMainModelToGestureDetector()), $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
    }
  };
  (product_card.ProductCard.new = function(product, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[product$] = product;
    product_card.ProductCard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_card.ProductCard.prototype;
  dart.addTypeTests(product_card.ProductCard);
  const product$ = ProductCard_product;
  dart.setMethodSignature(product_card.ProductCard, () => ({
    __proto__: dart.getMethods(product_card.ProductCard.__proto__),
    [_buildTitlePriceRow]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(product_card.ProductCard, "package:flutter_course/widgets/products/product_card.dart");
  dart.setFieldSignature(product_card.ProductCard, () => ({
    __proto__: dart.getFields(product_card.ProductCard.__proto__),
    product: dart.finalFieldType(product.Product)
  }));
  dart.trackLibraries("packages/flutter_course/widgets/products/product_card", {
    "package:flutter_course/widgets/products/product_card.dart": product_card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product_card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOgB;;;;;;;AAKZ,YAAO,wDACI,SAAc,SAAgB,OAAiB,UAC/C,yCACgC,gDACE,uCACrB,sBAChB,sCACsB,sCACX,YAAY,aAAa,cAAc,eACzC,uCACkC,0CACrB,sBAChB,+BACS,oCACE,kBACL,AAAQ,+BACE,aACa,wCAChB,0CACkB,8BACb,6KAKlB,2CACa;AACsB,sBAA/B,AAAM,KAAD,eAAe,AAAQ;AACO,sBAAnC,AAAM,KAAD;6CAEA,6BACa,sBAChB,4BACE,AAAQ,2BACI,uBACA,qCACE,4EAEhB,+BACS,sSAQrB,6BACoB,sBAChB,+BACS,sCACe,uCAAW,aAAa,eACrC,kBACL,AAA6D,MAA1C,cAAd,AAAQ,sBAAiB,iBAAK,AAAQ,AAAS,2CAC1C,aACa,wCAChB,wCACK,8OAOtB,6BACoB,sBAChB,+BACS,sCACe,uCACV,aAAa,WAAW,aAAa,eACxC,kBACmB,SAArB,AAAQ,sCACD,aACa,wCAChB,qCACQ,AAAY,eAAT,OAAO,uBACb;IAWhC;UAG0B;AACxB,YAAO,wDACM,SAAc,SAAgB,OAAiB,UACnD,iDACE;AAC0B,YAA/B,AAAM,KAAD,eAAe,AAAQ;AAI1B,YAHQ,AACL,yCADqB,OAAO,EAAE,AAAY,2BAAE,AAAQ,kCAC/C,QAAC;AACgB,cAAzB,AAAM,KAAD,eAAe;;mCAGjB,0BACE,yCACgC,wCACnB,sBAChB,0BACO,AAAQ,wBACN,0CACE,wCAAa,AAAQ,0BAChB,6BACM,AAAY,AAAK,0BAAd,OAAO,sBACe,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,kBAChC,oCAAW,6IAG5B;IAMZ;;2CA5HiB;;;AAAjB;;EAAyB","file":"product_card.ddc.js"}');
  // Exports:
  return {
    widgets__products__product_card: product_card
  };
});

//# sourceMappingURL=product_card.ddc.js.map
