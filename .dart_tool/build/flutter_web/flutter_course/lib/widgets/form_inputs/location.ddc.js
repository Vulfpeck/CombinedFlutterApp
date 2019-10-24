define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_course/models/product', 'packages/location/location', 'packages/http/http', 'packages/flutter/material', 'packages/flutter_course/models/location_data', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_course__models__product, packages__location__location, packages__http__http, packages__flutter__material, packages__flutter_course__models__location_data, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const focus_manager = packages__flutter__src__widgets__actions.src__widgets__focus_manager;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const product = packages__flutter_course__models__product.models__product;
  const location = packages__location__location.location;
  const http = packages__http__http.http;
  const dialog = packages__flutter__material.src__material__dialog;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const theme = packages__flutter__material.src__material__theme;
  const icons = packages__flutter__material.src__material__icons;
  const divider = packages__flutter__material.src__material__divider;
  const location_data = packages__flutter_course__models__location_data.models__location_data;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const location$ = Object.create(dart.library);
  const $toString = dartx.toString;
  const $isEmpty = dartx.isEmpty;
  const $replaceAll = dartx.replaceAll;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 91,
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
        [_Location_column]: 20,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 92,
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
        [_Location_column]: 22,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 95,
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
        [_Location_column]: 24,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 11,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 11,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 11,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 11,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 181,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 180,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C28() {
      return C28 = dart.constList([], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 30,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 184,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 31,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 209,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 32,
        [_Location_line]: 213,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 216,
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
        [_Location_column]: 23,
        [_Location_line]: 214,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 21,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 204,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 202,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 226,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 43,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 227,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 228,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/location.dart"
      });
    }
  });
  const LocationInput_setLocation = dart.privateName(location$, "LocationInput.setLocation");
  const LocationInput_product = dart.privateName(location$, "LocationInput.product");
  location$.LocationInput = class LocationInput extends framework.StatefulWidget {
    get setLocation() {
      return this[setLocation$];
    }
    set setLocation(value) {
      super.setLocation = value;
    }
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    createState() {
      return new location$._LocationInputState.new();
    }
  };
  (location$.LocationInput.new = function(setLocation, product, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[setLocation$] = setLocation;
    this[product$] = product;
    location$.LocationInput.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = location$.LocationInput.prototype;
  dart.addTypeTests(location$.LocationInput);
  const setLocation$ = LocationInput_setLocation;
  const product$ = LocationInput_product;
  dart.setMethodSignature(location$.LocationInput, () => ({
    __proto__: dart.getMethods(location$.LocationInput.__proto__),
    createState: dart.fnType(location$._LocationInputState, [])
  }));
  dart.setLibraryUri(location$.LocationInput, "package:flutter_course/widgets/form_inputs/location.dart");
  dart.setFieldSignature(location$.LocationInput, () => ({
    __proto__: dart.getFields(location$.LocationInput.__proto__),
    setLocation: dart.finalFieldType(core.Function),
    product: dart.finalFieldType(product.Product)
  }));
  const _locationData = dart.privateName(location$, "_locationData");
  const _staticMapUri = dart.privateName(location$, "_staticMapUri");
  const _addressInputController = dart.privateName(location$, "_addressInputController");
  const _addressInputFocusNode = dart.privateName(location$, "_addressInputFocusNode");
  const _loadingData = dart.privateName(location$, "_loadingData");
  const _updateLocation = dart.privateName(location$, "_updateLocation");
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
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  const _getUserLocation = dart.privateName(location$, "_getUserLocation");
  let C20;
  let C21;
  let C22;
  let C23;
  let C19;
  let C18;
  let C26;
  let C25;
  let C24;
  let C28;
  let C27;
  let C31;
  let C32;
  let C33;
  let C30;
  let C29;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C54;
  let C53;
  let C58;
  let C59;
  let C57;
  let C56;
  let C62;
  let C63;
  let C61;
  let C60;
  let C66;
  let C67;
  let C65;
  let C64;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C73;
  let C72;
  let C75;
  let C78;
  let C77;
  let C76;
  let C79;
  let C82;
  let C81;
  let C80;
  location$._LocationInputState = class _LocationInputState extends framework.State$(location$.LocationInput) {
    initState() {
      this[_addressInputFocusNode].addListener(dart.bind(this, _updateLocation));
      if (this.widget.product != null) {
        this.getStaticMap(this.widget.product.location.address, {geocode: false});
      }
      super.initState();
    }
    dispose() {
      this[_addressInputFocusNode].removeListener(dart.bind(this, _updateLocation));
      super.dispose();
    }
    [_updateLocation]() {
      if (!dart.test(this[_addressInputFocusNode].hasFocus)) {
        this.getStaticMap(this[_addressInputController].text);
      }
    }
    [_getUserLocation]() {
      return async.async(dart.void, (function* _getUserLocation() {
        this.setState(dart.fn(() => {
          this[_loadingData] = !dart.test(this[_loadingData]);
        }, VoidToNull()));
        let locationObject = new location.Location.new();
        let currentLocation = null;
        let hasPermission = (yield locationObject.hasPermission());
        try {
          currentLocation = (yield locationObject.getLocation());
          core.print(hasPermission);
          core.print(dart.dload(currentLocation, 'latitude'));
          core.print(dart.dload(currentLocation, 'longitude'));
          let response = (yield http.get("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + dart.str(dart.dload(currentLocation, 'latitude')) + "&lon=" + dart.str(dart.dload(currentLocation, 'longitude'))));
          let decodedResponse = convert.json.decode(response.body);
          core.print(dart.toString(decodedResponse));
          this.getStaticMap(core.String._check(dart.dsend(decodedResponse, '_get', ["display_name"])), {geocode: false, lat: core.double.parse(core.String._check(dart.dsend(decodedResponse, '_get', ["lat"]))), lon: core.double.parse(core.String._check(dart.dsend(decodedResponse, '_get', ["lon"])))});
          this.setState(dart.fn(() => {
            this[_loadingData] = !dart.test(this[_loadingData]);
          }, VoidToNull()));
        } catch (e) {
          let error = dart.getThrown(e);
          this.setState(dart.fn(() => {
            this[_loadingData] = !dart.test(this[_loadingData]);
          }, VoidToNull()));
          dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Could not get location", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), content: new text.Text.new("Enter location manualy", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Okay", {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), onPressed: dart.fn(() => navigator.Navigator.pop(core.Object, context), VoidTobool()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9})]), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), BuildContextToAlertDialog())});
        }
      }).bind(this));
    }
    getStaticMap(address, opts) {
      let geocode = opts && 'geocode' in opts ? opts.geocode : true;
      let lat = opts && 'lat' in opts ? opts.lat : null;
      let lon = opts && 'lon' in opts ? opts.lon : null;
      return async.async(dart.void, (function* getStaticMap() {
        if (address[$isEmpty]) {
          this.setState(dart.fn(() => {
            this[_staticMapUri] = null;
          }, VoidToNull()));
          dart.dsend(this.widget, 'setLocation', [null]);
        }
        if (dart.dtest(geocode)) {
          address = address[$replaceAll](" ", "+");
          core.print(" ================================" + dart.notNull(address));
          let response = (yield http.get("https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=" + dart.str(address) + "&format=json&limit=1"));
          let decodedResponse = convert.json.decode(response.body);
          core.print(decodedResponse);
          let formattedAddress = dart.dsend(dart.dsend(decodedResponse, '_get', [0]), '_get', ["display_name"]);
          let lat = core.double.parse(core.String._check(dart.dsend(dart.dsend(decodedResponse, '_get', [0]), '_get', ["lat"])));
          let lng = core.double.parse(core.String._check(dart.dsend(dart.dsend(decodedResponse, '_get', [0]), '_get', ["lon"])));
          this[_locationData] = new location_data.LocationStorageData.new({address: core.String._check(formattedAddress), latitude: lat, longitude: lng});
          core.print(dart.toString(formattedAddress));
        } else if (lat == null && lon == null) {
          this[_locationData] = this.widget.product.location;
        } else {
          this[_locationData] = new location_data.LocationStorageData.new({address: address, longitude: lon, latitude: lat});
        }
        dart.dsend(this.widget, 'setLocation', [this[_locationData]]);
        if (dart.test(this.mounted)) {
          this.setState(dart.fn(() => {
            this[_addressInputController].text = this[_locationData].address;
          }, VoidToNull()));
        }
      }).bind(this));
    }
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new text_form_field.TextFormField.new({controller: this[_addressInputController], focusNode: this[_addressInputFocusNode], validator: dart.fn(value => {
              if (this[_locationData] == null || value[$isEmpty]) {
                return "No valid location found";
              }
              return "";
            }, StringToString()), decoration: new input_decorator.InputDecoration.new({labelText: "Enter the address"}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), dart.test(this[_loadingData]) ? new container.Container.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 24.0, width: 24.0, child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new basic.SizedBox.new({width: 16.0, $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new text.Text.new("Loading Location", {style: new text_style.TextStyle.new({color: theme.Theme.of(context).accentColor}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37})]), mainAxisAlignment: flex.MainAxisAlignment.center, $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), height: 48.0, $creationLocationd_0dea112b090073317d4: C45 || CT.C45}) : new container.Container.new({height: 48.0, child: new flat_button.FlatButton.new({onPressed: dart.bind(this, _getUserLocation), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.location_searching, {color: theme.Theme.of(context).accentColor, $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new basic.SizedBox.new({width: 16.0, $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), new text.Text.new("Get User Location", {style: new text_style.TextStyle.new({color: theme.Theme.of(context).accentColor}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56})]), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), this[_staticMapUri] == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C75 || CT.C75}) : new image.Image.network(dart.toString(this[_staticMapUri]), {$creationLocationd_0dea112b090073317d4: C76 || CT.C76}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C79 || CT.C79})]), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
    }
  };
  (location$._LocationInputState.new = function() {
    this[_locationData] = null;
    this[_staticMapUri] = null;
    this[_addressInputController] = new editable_text.TextEditingController.new();
    this[_addressInputFocusNode] = new focus_manager.FocusNode.new();
    this[_loadingData] = false;
    location$._LocationInputState.__proto__.new.call(this);
    ;
  }).prototype = location$._LocationInputState.prototype;
  dart.addTypeTests(location$._LocationInputState);
  dart.setMethodSignature(location$._LocationInputState, () => ({
    __proto__: dart.getMethods(location$._LocationInputState.__proto__),
    [_updateLocation]: dart.fnType(dart.void, []),
    [_getUserLocation]: dart.fnType(dart.void, []),
    getStaticMap: dart.fnType(dart.void, [core.String], {geocode: dart.dynamic, lat: core.double, lon: core.double}),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(location$._LocationInputState, "package:flutter_course/widgets/form_inputs/location.dart");
  dart.setFieldSignature(location$._LocationInputState, () => ({
    __proto__: dart.getFields(location$._LocationInputState.__proto__),
    [_locationData]: dart.fieldType(location_data.LocationStorageData),
    [_staticMapUri]: dart.fieldType(core.Uri),
    [_addressInputController]: dart.finalFieldType(editable_text.TextEditingController),
    [_addressInputFocusNode]: dart.finalFieldType(focus_manager.FocusNode),
    [_loadingData]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flutter_course/widgets/form_inputs/location", {
    "package:flutter_course/widgets/form_inputs/location.dart": location$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["location.dart"],"names":[],"mappings":"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","file":"location.ddc.js"}');
  // Exports:
  return {
    widgets__form_inputs__location: location$
  };
});

//# sourceMappingURL=location.ddc.js.map
