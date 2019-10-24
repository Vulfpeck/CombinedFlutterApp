define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/gestures/arena', 'packages/scoped_model/scoped_model', 'packages/flutter_course/scoped-models/main', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_course/widgets/form_inputs/location', 'packages/flutter_course/widgets/form_inputs/image_input', 'packages/flutter_course/models/product', 'packages/flutter_course/models/location_data'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__gestures__arena, packages__scoped_model__scoped_model, packages__flutter_course__scoped_models__main, packages__flutter__src__painting___network_image_web, packages__flutter_course__widgets__form_inputs__location, packages__flutter_course__widgets__form_inputs__image_input, packages__flutter_course__models__product, packages__flutter_course__models__location_data) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const focus_manager = packages__flutter__src__widgets__actions.src__widgets__focus_manager;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const focus_scope = packages__flutter__src__widgets__actions.src__widgets__focus_scope;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const colors = packages__flutter__material.src__material__colors;
  const dialog = packages__flutter__material.src__material__dialog;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const material = packages__flutter__material.src__material__material;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const location = packages__flutter_course__widgets__form_inputs__location.widgets__form_inputs__location;
  const image_input = packages__flutter_course__widgets__form_inputs__image_input.widgets__form_inputs__image_input;
  const product = packages__flutter_course__models__product.models__product;
  const location_data = packages__flutter_course__models__location_data.models__location_data;
  const product_edit = Object.create(dart.library);
  const $trim = dartx.trim;
  const $isEmpty = dartx.isEmpty;
  const $_set = dartx._set;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $replaceFirst = dartx.replaceFirst;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let ScopedModelDescendantOfMainModel = () => (ScopedModelDescendantOfMainModel = dart.constFn(scoped_model.ScopedModelDescendant$(main.MainModel)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextAndWidgetAndMainModelToWidget = () => (BuildContextAndWidgetAndMainModelToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, main.MainModel])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let FutureOfObject = () => (FutureOfObject = dart.constFn(async.Future$(core.Object)))();
  let dynamicToFutureOfObject = () => (dynamicToFutureOfObject = dart.constFn(dart.fnType(FutureOfObject(), [dart.dynamic])))();
  let BuildContextAndWidgetAndMainModelToStatefulWidget = () => (BuildContextAndWidgetAndMainModelToStatefulWidget = dart.constFn(dart.fnType(framework.StatefulWidget, [framework.BuildContext, framework.Widget, main.MainModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 7,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 7,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 7,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 7,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 7,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "focusNode",
        [_Location_column]: 7,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 7,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C23() {
      return C23 = dart.constList([], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 22,
        [_Location_line]: 129,
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
        [_Location_column]: 15,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 17,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "setLocation",
        [_Location_column]: 29,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 43,
        [_Location_line]: 164,
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
        [_Location_column]: 15,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "setImage",
        [_Location_column]: 26,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 37,
        [_Location_line]: 165,
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
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 155,
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
        [_Location_column]: 16,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 153,
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
        [_Location_column]: 14,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 151,
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
        [_Location_column]: 12,
        [_Location_line]: 147,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 219,
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
        [_Location_column]: 28,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 35,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 223,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 221,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 19,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 19,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 253,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 257,
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
        [_Location_column]: 26,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "automaticallyImplyLeading",
        [_Location_column]: 19,
        [_Location_line]: 258,
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
        [_Location_column]: 25,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 17,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 17,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_edit.dart"
      });
    }
  });
  product_edit.ProductEditPage = class ProductEditPage extends framework.StatefulWidget {
    createState() {
      return new product_edit._ProductEditPageState.new();
    }
  };
  (product_edit.ProductEditPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    product_edit.ProductEditPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_edit.ProductEditPage.prototype;
  dart.addTypeTests(product_edit.ProductEditPage);
  dart.setMethodSignature(product_edit.ProductEditPage, () => ({
    __proto__: dart.getMethods(product_edit.ProductEditPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(product_edit.ProductEditPage, "package:flutter_course/pages/product_edit.dart");
  const _formData = dart.privateName(product_edit, "_formData");
  const _formKey = dart.privateName(product_edit, "_formKey");
  const _titleFocusNode = dart.privateName(product_edit, "_titleFocusNode");
  const _descriptionFocusNode = dart.privateName(product_edit, "_descriptionFocusNode");
  const _priceFocusNode = dart.privateName(product_edit, "_priceFocusNode");
  const _titleTextEditController = dart.privateName(product_edit, "_titleTextEditController");
  const _descriptionTextEditController = dart.privateName(product_edit, "_descriptionTextEditController");
  const _priceTextEditController = dart.privateName(product_edit, "_priceTextEditController");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C1;
  let C0;
  const _buildTitleTextField = dart.privateName(product_edit, "_buildTitleTextField");
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C8;
  let C7;
  const _buildDescriptionTextField = dart.privateName(product_edit, "_buildDescriptionTextField");
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C16;
  let C15;
  const _buildPriceTextField = dart.privateName(product_edit, "_buildPriceTextField");
  let C23;
  let C22;
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  const _submitForm = dart.privateName(product_edit, "_submitForm");
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C37;
  let C36;
  let C35;
  const _buildSubmitButton = dart.privateName(product_edit, "_buildSubmitButton");
  let C40;
  let C39;
  let C38;
  const _setLocation = dart.privateName(product_edit, "_setLocation");
  let C43;
  let C44;
  let C42;
  let C41;
  const _setImage = dart.privateName(product_edit, "_setImage");
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C50;
  let C49;
  let C54;
  let C55;
  let C53;
  let C52;
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
  const _buildPageContent = dart.privateName(product_edit, "_buildPageContent");
  let C70;
  let C69;
  let C68;
  let C73;
  let C72;
  let C71;
  let C76;
  let C75;
  let C74;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
  let C88;
  let C87;
  let C86;
  let C91;
  let C90;
  let C89;
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C99;
  let C97;
  let C96;
  let C102;
  let C101;
  let C100;
  product_edit._ProductEditPageState = class _ProductEditPageState extends framework.State$(product_edit.ProductEditPage) {
    [_buildTitleTextField](product) {
      if (product == null && this[_titleTextEditController].text[$trim]() === "") {
        this[_titleTextEditController].text = "";
      } else if (product != null && this[_titleTextEditController].text[$trim]() === "") {
        this[_titleTextEditController].text = product.title;
      } else if (product != null && this[_titleTextEditController].text !== "") {
        this[_titleTextEditController].text = this[_titleTextEditController].text;
      } else if (product == null && this[_titleTextEditController].text[$trim]() !== "") {
        this[_titleTextEditController].text = this[_titleTextEditController].text;
      } else {
        this[_titleTextEditController].text = "";
      }
      return new text_form_field.TextFormField.new({focusNode: this[_titleFocusNode], decoration: new input_decorator.InputDecoration.new({labelText: "Product Title"}), validator: dart.fn(value => {
          if (value[$isEmpty] || value.length < 5) {
            return "Title is required and should be 5+ characters long.";
          }
          return "";
        }, StringToString()), controller: this[_titleTextEditController], onSaved: dart.fn(value => {
          this[_formData][$_set]("title", value);
        }, StringToNull()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    [_buildDescriptionTextField](product) {
      if (product == null && this[_descriptionTextEditController].text[$trim]() === "") {
        this[_descriptionTextEditController].text = "";
      } else if (product != null && this[_descriptionTextEditController].text[$trim]() === "") {
        this[_descriptionTextEditController].text = product.description;
      }
      return new text_form_field.TextFormField.new({focusNode: this[_descriptionFocusNode], maxLines: 4, decoration: new input_decorator.InputDecoration.new({labelText: "Product Description"}), controller: this[_descriptionTextEditController], validator: dart.fn(value => {
          if (value[$isEmpty] || value.length < 10) {
            return "Description is required and should be 10+ characters long.";
          }
          return "";
        }, StringToString()), onSaved: dart.fn(value => {
          this[_formData][$_set]("description", this[_descriptionTextEditController].text);
        }, StringToNull()), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
    [_buildPriceTextField](product) {
      if (product == null && this[_priceTextEditController].text[$trim]() === "") {
        this[_priceTextEditController].text = "";
      } else if (product != null && this[_priceTextEditController].text[$trim]() === "") {
        this[_priceTextEditController].text = dart.toString(product.price);
      }
      return new text_form_field.TextFormField.new({focusNode: this[_priceFocusNode], controller: this[_priceTextEditController], keyboardType: text_input.TextInputType.number, decoration: new input_decorator.InputDecoration.new({labelText: "Product Price"}), validator: dart.fn(value => {
          if (value[$isEmpty] || !dart.test(core.RegExp.new("^(?:[1-9]\\d*|0)?(?:[.,]?\\d+)r?$").hasMatch(value))) {
            return "Price is required and should be a number.";
          }
          return "";
        }, StringToString()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
    [_buildSubmitButton]() {
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => dart.test(model.isLoading) ? new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C22 || CT.C22}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}) : new raised_button.RaisedButton.new({child: new text.Text.new("Save", {$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), textColor: colors.Colors.white, onPressed: dart.fn(() => this[_submitForm](dart.bind(model, 'addProduct'), dart.bind(model, 'updateProduct'), dart.bind(model, 'selectProduct'), model.selectedProductIndex), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), BuildContextAndWidgetAndMainModelToWidget()), $creationLocationd_0dea112b090073317d4: C35 || CT.C35});
    }
    [_buildPageContent](context, product) {
      let deviceWidth = media_query.MediaQuery.of(context).size.width;
      let targetWidth = dart.notNull(deviceWidth) > 550.0 ? 500.0 : dart.notNull(deviceWidth) * 0.95;
      let targetPadding = dart.notNull(deviceWidth) - targetWidth;
      return new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          focus_scope.FocusScope.of(context).requestFocus(new focus_manager.FocusNode.new());
        }, VoidToNull()), child: new container.Container.new({margin: new edge_insets.EdgeInsets.all(10.0), child: new form.Form.new({key: this[_formKey], child: new scroll_view.ListView.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: targetPadding / 2}), children: JSArrayOfWidget().of([this[_buildTitleTextField](product), this[_buildDescriptionTextField](product), this[_buildPriceTextField](product), new basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), new location.LocationInput.new(dart.bind(this, _setLocation), product, {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), new image_input.ImageInput.new(dart.bind(this, _setImage), product, {$creationLocationd_0dea112b090073317d4: C45 || CT.C45}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), this[_buildSubmitButton]()]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64});
    }
    [_setLocation](locData) {
      this[_formData][$_set]("location", locData);
    }
    [_setImage](image) {
      this[_formData][$_set]("image", image);
    }
    [_submitForm](addProduct, updateProduct, setSelectedProduct, selectedProductIndex) {
      if (selectedProductIndex === void 0) selectedProductIndex = null;
      if (!dart.test(this[_formKey].currentState.validate()) || this[_formData][$_get]("image") == null && selectedProductIndex === -1) {
        return;
      }
      this[_formKey].currentState.save();
      if (selectedProductIndex === -1) {
        dart.dsend(dart.dcall(addProduct, [this[_titleTextEditController].text, this[_descriptionTextEditController].text, this[_formData][$_get]("image"), core.double.parse(this[_priceTextEditController].text[$replaceFirst](core.RegExp.new(","), ".")), this[_formData][$_get]("location")]), 'then', [dart.fn(success => {
            if (dart.test(success)) {
              navigator.Navigator.pushReplacementNamed(core.Object, core.Object, this.context, "/products");
            } else {
              dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("Something went wrong", {$creationLocationd_0dea112b090073317d4: C68 || CT.C68}), content: new text.Text.new("Please try again", {$creationLocationd_0dea112b090073317d4: C71 || CT.C71}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({onPressed: dart.fn(() => navigator.Navigator.of(context).pop(core.Object), VoidTobool()), child: new text.Text.new("Okay", {$creationLocationd_0dea112b090073317d4: C74 || CT.C74}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77})]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), BuildContextToAlertDialog())});
            }
          }, boolToNull())]);
      } else {
        dart.dsend(dart.dcall(updateProduct, [this[_titleTextEditController].text, this[_descriptionTextEditController].text, this[_formData][$_get]("image"), core.double.parse(this[_priceTextEditController].text[$replaceFirst](core.RegExp.new(","), ".")), this[_formData][$_get]("location")]), 'then', [dart.fn(_ => navigator.Navigator.pushReplacementNamed(core.Object, core.Object, this.context, "/products"), dynamicToFutureOfObject())]);
      }
    }
    build(context) {
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => {
          core.print("build edit screen");
          core.print(model.selectedProductIndex);
          let pageContent = this[_buildPageContent](context, model.selectedProduct);
          return model.selectedProductIndex === -1 ? new material.Material.new({child: pageContent, $creationLocationd_0dea112b090073317d4: C86 || CT.C86}) : new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Edit Product", {$creationLocationd_0dea112b090073317d4: C89 || CT.C89}), automaticallyImplyLeading: false, $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), body: pageContent, $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
        }, BuildContextAndWidgetAndMainModelToStatefulWidget()), $creationLocationd_0dea112b090073317d4: C100 || CT.C100});
    }
  };
  (product_edit._ProductEditPageState.new = function() {
    this[_formData] = new (IdentityMapOfString$dynamic()).from(["title", null, "description", null, "price", null, "image", null, "location", null]);
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_titleFocusNode] = new focus_manager.FocusNode.new();
    this[_descriptionFocusNode] = new focus_manager.FocusNode.new();
    this[_priceFocusNode] = new focus_manager.FocusNode.new();
    this[_titleTextEditController] = new editable_text.TextEditingController.new();
    this[_descriptionTextEditController] = new editable_text.TextEditingController.new();
    this[_priceTextEditController] = new editable_text.TextEditingController.new();
    product_edit._ProductEditPageState.__proto__.new.call(this);
    ;
  }).prototype = product_edit._ProductEditPageState.prototype;
  dart.addTypeTests(product_edit._ProductEditPageState);
  dart.setMethodSignature(product_edit._ProductEditPageState, () => ({
    __proto__: dart.getMethods(product_edit._ProductEditPageState.__proto__),
    [_buildTitleTextField]: dart.fnType(framework.Widget, [product.Product]),
    [_buildDescriptionTextField]: dart.fnType(framework.Widget, [product.Product]),
    [_buildPriceTextField]: dart.fnType(framework.Widget, [product.Product]),
    [_buildSubmitButton]: dart.fnType(framework.Widget, []),
    [_buildPageContent]: dart.fnType(framework.Widget, [framework.BuildContext, product.Product]),
    [_setLocation]: dart.fnType(dart.void, [location_data.LocationStorageData]),
    [_setImage]: dart.fnType(dart.void, [io.File]),
    [_submitForm]: dart.fnType(dart.void, [core.Function, core.Function, core.Function], [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(product_edit._ProductEditPageState, "package:flutter_course/pages/product_edit.dart");
  dart.setFieldSignature(product_edit._ProductEditPageState, () => ({
    __proto__: dart.getFields(product_edit._ProductEditPageState.__proto__),
    [_formData]: dart.finalFieldType(core.Map$(core.String, dart.dynamic)),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_titleFocusNode]: dart.finalFieldType(focus_manager.FocusNode),
    [_descriptionFocusNode]: dart.finalFieldType(focus_manager.FocusNode),
    [_priceFocusNode]: dart.finalFieldType(focus_manager.FocusNode),
    [_titleTextEditController]: dart.finalFieldType(editable_text.TextEditingController),
    [_descriptionTextEditController]: dart.finalFieldType(editable_text.TextEditingController),
    [_priceTextEditController]: dart.finalFieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/flutter_course/pages/product_edit", {
    "package:flutter_course/pages/product_edit.dart": product_edit
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product_edit.dart"],"names":[],"mappings":"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","file":"product_edit.ddc.js"}');
  // Exports:
  return {
    pages__product_edit: product_edit
  };
});

//# sourceMappingURL=product_edit.ddc.js.map
