define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_course/models/auth', 'packages/flutter/src/animation/animation', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/gestures/arena', 'packages/scoped_model/scoped_model', 'packages/flutter_course/scoped-models/main', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_course__models__auth, packages__flutter__src__animation__animation, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__gestures__arena, packages__scoped_model__scoped_model, packages__flutter_course__scoped_models__main, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const auth = packages__flutter_course__models__auth.models__auth;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const switch_list_tile = packages__flutter__material.src__material__switch_list_tile;
  const dialog = packages__flutter__material.src__material__dialog;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const card = packages__flutter__material.src__material__card;
  const divider = packages__flutter__material.src__material__divider;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const colors = packages__flutter__material.src__material__colors;
  const theme = packages__flutter__material.src__material__theme;
  const button_bar = packages__flutter__material.src__material__button_bar;
  const material_button = packages__flutter__material.src__material__material_button;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const auth$ = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $_set = dartx._set;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let ScopedModelDescendantOfMainModel = () => (ScopedModelDescendantOfMainModel = dart.constFn(scoped_model.ScopedModelDescendant$(main.MainModel)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextAndWidgetAndMainModelToWidget = () => (BuildContextAndWidgetAndMainModelToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, main.MainModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 7,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 7,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 7,
        [_Location_line]: 83,
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
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 7,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSaved",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 7,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "validator",
        [_Location_column]: 7,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 134,
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
        [_Location_column]: 14,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 7,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 7,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 159,
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
        [_Location_column]: 22,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 47,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 15,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 15,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 24,
        [EdgeInsets_right]: 24,
        [EdgeInsets_top]: 24,
        [EdgeInsets_left]: 24
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 195,
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
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C53() {
      return C53 = dart.constList([], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 32,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 206,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 222,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 27,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 27,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 27,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 27,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 27,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 204,
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
        [_Location_column]: 15,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 187,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 9,
        [_Location_line]: 178,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 179,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87, C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 175,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 250,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 254,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 259,
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
        [_Location_column]: 15,
        [_Location_line]: 258,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 261,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 263,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 265,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 264,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 270,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 32,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111], widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 270,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 287,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 27,
        [_Location_line]: 272,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 27,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 274,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 27,
        [_Location_line]: 280,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 285,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 27,
        [_Location_line]: 286,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 287,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 27,
        [_Location_line]: 288,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120, C121 || CT.C121, C122 || CT.C122, C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 271,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 267,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 247,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "clipBehavior",
        [_Location_column]: 9,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 9,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139, C140 || CT.C140], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 237,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 7,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 237,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144], widget_inspector._Location);
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 17,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.constList([C147 || CT.C147, C148 || CT.C148, C149 || CT.C149], widget_inspector._Location);
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C146 || CT.C146,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 309,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 15,
        [_Location_line]: 308,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C151 || CT.C151,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 307,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 331,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 332,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 330,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 21,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 329,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 330,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 334,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160, C161 || CT.C161, C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 322,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.constList([C166 || CT.C166, C167 || CT.C167], widget_inspector._Location);
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C165 || CT.C165,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 320,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.constList([C170 || CT.C170], widget_inspector._Location);
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C169 || CT.C169,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174], widget_inspector._Location);
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 21,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 354,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 355,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 359,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178, C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C176 || CT.C176,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 347,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 19,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C182 || CT.C182,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 345,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 319,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187], widget_inspector._Location);
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 318,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.constList([C190 || CT.C190, C191 || CT.C191], widget_inspector._Location);
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C189 || CT.C189,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 304,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 301,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 302,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 303,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194, C195 || CT.C195, C196 || CT.C196], widget_inspector._Location);
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 300,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 21,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.constList([C199 || CT.C199, C200 || CT.C200], widget_inspector._Location);
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C198 || CT.C198,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 390,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 21,
        [_Location_line]: 400,
        [_Location_file]: null
      });
    },
    get C202() {
      return C202 = dart.constList([C203 || CT.C203], widget_inspector._Location);
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C202 || CT.C202,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 399,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 403,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 387,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 388,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.constList([C209 || CT.C209, C210 || CT.C210, C211 || CT.C211], widget_inspector._Location);
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C208 || CT.C208,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 386,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 15,
        [_Location_line]: 385,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 386,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 383,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.constList([C218 || CT.C218, C219 || CT.C219], widget_inspector._Location);
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C217 || CT.C217,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 382,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 11,
        [_Location_line]: 381,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 382,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222, C223 || CT.C223], widget_inspector._Location);
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C221 || CT.C221,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 380,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 380,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.constList([C226 || CT.C226], widget_inspector._Location);
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C225 || CT.C225,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 379,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 379,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 378,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/auth.dart"
      });
    }
  });
  auth$.AuthPage = class AuthPage extends framework.StatefulWidget {
    createState() {
      return new auth$._AuthPageState.new();
    }
  };
  (auth$.AuthPage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    auth$.AuthPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auth$.AuthPage.prototype;
  dart.addTypeTests(auth$.AuthPage);
  dart.setMethodSignature(auth$.AuthPage, () => ({
    __proto__: dart.getMethods(auth$.AuthPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(auth$.AuthPage, "package:flutter_course/pages/auth.dart");
  const _formData = dart.privateName(auth$, "_formData");
  const _formKey = dart.privateName(auth$, "_formKey");
  const _emailTextController = dart.privateName(auth$, "_emailTextController");
  const _passwordTextController = dart.privateName(auth$, "_passwordTextController");
  const _authMode = dart.privateName(auth$, "_authMode");
  const _controller = dart.privateName(auth$, "_controller");
  const _slideModeAnimation = dart.privateName(auth$, "_slideModeAnimation");
  const _slideFormLoginAnimation = dart.privateName(auth$, "_slideFormLoginAnimation");
  const _slideFormSignupAnimation = dart.privateName(auth$, "_slideFormSignupAnimation");
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
  const _buildEmailTextField = dart.privateName(auth$, "_buildEmailTextField");
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C8;
  let C7;
  const _buildPasswordTextField = dart.privateName(auth$, "_buildPasswordTextField");
  let C16;
  let C17;
  let C18;
  let C15;
  let C14;
  const _buildPasswordConfirmTextField = dart.privateName(auth$, "_buildPasswordConfirmTextField");
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C26;
  let C23;
  let C22;
  const _buildAcceptSwitch = dart.privateName(auth$, "_buildAcceptSwitch");
  let C29;
  let C28;
  let C27;
  let C32;
  let C31;
  let C30;
  let C35;
  let C34;
  let C33;
  let C38;
  let C39;
  let C37;
  let C36;
  let C42;
  let C43;
  let C44;
  let C41;
  let C40;
  const _submitForm = dart.privateName(auth$, "_submitForm");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C45;
  let C48;
  let C47;
  let C46;
  let C51;
  let C50;
  let C49;
  let C53;
  let C52;
  let C54;
  let C57;
  let C56;
  let C55;
  let C58;
  let C61;
  let C60;
  let C59;
  let C64;
  let C63;
  let C62;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C66;
  let C65;
  let C76;
  let C75;
  let C74;
  let C79;
  let C78;
  let C77;
  let C82;
  let C83;
  let C81;
  let C80;
  let C86;
  let C87;
  let C88;
  let C89;
  let C85;
  let C84;
  let C92;
  let C93;
  let C91;
  let C90;
  const _buildLoginForm = dart.privateName(auth$, "_buildLoginForm");
  let C96;
  let C95;
  let C94;
  let C99;
  let C98;
  let C97;
  let C102;
  let C101;
  let C100;
  let C103;
  let C104;
  let C107;
  let C106;
  let C105;
  let C108;
  let C111;
  let C110;
  let C109;
  let C114;
  let C113;
  let C112;
  let C117;
  let C118;
  let C119;
  let C120;
  let C121;
  let C122;
  let C123;
  let C124;
  let C116;
  let C115;
  let C127;
  let C126;
  let C125;
  let C130;
  let C129;
  let C128;
  let C133;
  let C134;
  let C132;
  let C131;
  let C137;
  let C138;
  let C139;
  let C140;
  let C136;
  let C135;
  let C143;
  let C144;
  let C142;
  let C141;
  const _buildSignUpForm = dart.privateName(auth$, "_buildSignUpForm");
  let C147;
  let C148;
  let C149;
  let C146;
  let C145;
  let C152;
  let C153;
  let C151;
  let C150;
  let C156;
  let C157;
  let C155;
  let C154;
  let C160;
  let C161;
  let C162;
  let C163;
  let C159;
  let C158;
  let C166;
  let C167;
  let C165;
  let C164;
  let C170;
  let C169;
  let C168;
  let C173;
  let C174;
  let C172;
  let C171;
  let C177;
  let C178;
  let C179;
  let C180;
  let C176;
  let C175;
  let C183;
  let C184;
  let C182;
  let C181;
  let C187;
  let C186;
  let C185;
  let C190;
  let C191;
  let C189;
  let C188;
  let C194;
  let C195;
  let C196;
  let C193;
  let C192;
  const _buildTopRow = dart.privateName(auth$, "_buildTopRow");
  let C199;
  let C200;
  let C198;
  let C197;
  let C203;
  let C202;
  let C201;
  let C206;
  let C205;
  let C204;
  let C209;
  let C210;
  let C211;
  let C208;
  let C207;
  let C214;
  let C215;
  let C213;
  let C212;
  let C218;
  let C219;
  let C217;
  let C216;
  let C222;
  let C223;
  let C221;
  let C220;
  let C226;
  let C225;
  let C224;
  let C229;
  let C228;
  let C227;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(auth$.AuthPage) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(auth$.AuthPage)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(auth$.AuthPage));
  auth$._AuthPageState = class _AuthPageState extends State_TickerProviderStateMixin$36 {
    initState() {
      this[_controller] = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({milliseconds: 350})});
      this[_slideModeAnimation] = new (TweenOfOffset()).new({begin: new ui.Offset.new(0.75, 8.0), end: new ui.Offset.new(-0.75, 8.0)}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: curves.Curves.easeInOutExpo}));
      this[_slideFormLoginAnimation] = new (TweenOfOffset()).new({begin: new ui.Offset.new(0.0, 0.0), end: new ui.Offset.new(2.0, 0.0)}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: curves.Curves.easeInOutExpo}));
      this[_slideFormSignupAnimation] = new (TweenOfOffset()).new({begin: new ui.Offset.new(-2.0, 0.0), end: new ui.Offset.new(0.0, 0.0)}).animate(new animations.CurvedAnimation.new({parent: this[_controller], curve: curves.Curves.easeInOutExpo}));
      super.initState();
    }
    [_buildEmailTextField]() {
      return new text_form_field.TextFormField.new({decoration: new input_decorator.InputDecoration.new({labelText: "E-Mail", border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(8.0)})}), keyboardType: text_input.TextInputType.emailAddress, controller: this[_emailTextController], validator: dart.fn(value => {
          if (value[$isEmpty] || !dart.test(core.RegExp.new("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?").hasMatch(value))) {
            return "Please enter a valid email";
          }
        }, StringToString()), onSaved: dart.fn(value => {
          this[_formData][$_set]("email", this[_emailTextController].text);
        }, StringToNull()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    [_buildPasswordTextField]() {
      return new text_form_field.TextFormField.new({decoration: new input_decorator.InputDecoration.new({labelText: "Password", border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(8.0)})}), obscureText: true, controller: this[_passwordTextController], validator: dart.fn(value => {
          if (value[$isEmpty] || value.length < 6) {
            return "Password invalid";
          }
        }, StringToString()), onSaved: dart.fn(value => {
          this[_formData][$_set]("password", value);
        }, StringToNull()), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
    [_buildPasswordConfirmTextField]() {
      return new text_form_field.TextFormField.new({decoration: new input_decorator.InputDecoration.new({labelText: "Confirm Password", border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(8.0)})}), obscureText: true, validator: dart.fn(value => {
          if (value != this[_passwordTextController].text && dart.equals(this[_authMode], auth.AuthMode.Signup)) {
            return "Password's do not match";
          }
        }, StringToString()), $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
    }
    [_buildAcceptSwitch]() {
      return new switch_list_tile.SwitchListTile.new({value: core.bool._check(this[_formData][$_get]("acceptTerms")), onChanged: dart.fn(value => {
          this.setState(dart.fn(() => {
            this[_formData][$_set]("acceptTerms", value);
          }, VoidToNull()));
        }, boolToNull()), title: new text.Text.new("Accept Terms", {$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
    [_submitForm](authenticate) {
      return async.async(dart.void, (function* _submitForm() {
        if (!dart.test(this[_formKey].currentState.validate()) || !dart.dtest(this[_formData][$_get]("acceptTerms"))) {
          return;
        }
        this[_formKey].currentState.save();
        let successInformation = null;
        successInformation = MapOfString$dynamic()._check(yield dart.dcall(authenticate, [this[_emailTextController].text, this[_passwordTextController].text, this[_authMode]]));
        if (dart.dtest(successInformation[$_get]("success"))) {
          core.print("****** success ****");
          navigator.Navigator.pushReplacementNamed(core.Object, core.Object, this.context, "/");
        } else {
          dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: new text.Text.new("An error occured!", {$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), content: new text.Text.new(core.String._check(successInformation[$_get]("message")), {$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Okay", {$creationLocationd_0dea112b090073317d4: C33 || CT.C33}), onPressed: dart.fn(() => {
                    navigator.Navigator.of(context).pop(core.Object);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C36 || CT.C36})]), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), BuildContextToAlertDialog())});
        }
      }).bind(this));
    }
    [_buildLoginForm]() {
      return new transitions.SlideTransition.new({position: this[_slideFormLoginAnimation], child: new card.Card.new({clipBehavior: ui.Clip.antiAlias, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(12.0))}), elevation: 2.0, child: new basic.Padding.new({padding: C45 || CT.C45, child: new basic.Column.new({children: JSArrayOfWidget().of([this[_buildEmailTextField](), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), this[_buildPasswordTextField](), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C52 || CT.C52}), this[_buildAcceptSwitch](), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => dart.test(model.isLoading) ? new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}) : new raised_button.RaisedButton.new({clipBehavior: ui.Clip.antiAlias, elevation: 5.0, padding: new edge_insets.EdgeInsets.only({left: 32.0, right: 32.0, top: 16.0, bottom: 16.0}), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(56.0))}), textColor: colors.Colors.white, child: new text.Text.new("LOGIN", {$creationLocationd_0dea112b090073317d4: C62 || CT.C62}), onPressed: dart.fn(() => this[_submitForm](dart.bind(model, 'authenticate')), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), BuildContextAndWidgetAndMainModelToWidget()), $creationLocationd_0dea112b090073317d4: C74 || CT.C74})]), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90});
    }
    [_buildSignUpForm]() {
      return new transitions.SlideTransition.new({position: this[_slideFormSignupAnimation], child: new card.Card.new({clipBehavior: ui.Clip.antiAlias, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(12.0))}), elevation: 2.0, child: new container.Container.new({padding: new edge_insets.EdgeInsets.all(24.0), child: new basic.Column.new({children: JSArrayOfWidget().of([this[_buildEmailTextField](), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), this[_buildPasswordTextField](), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), this[_buildPasswordConfirmTextField](), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C103 || CT.C103}), this[_buildAcceptSwitch](), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C104 || CT.C104}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => dart.test(model.isLoading) ? new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}) : new raised_button.RaisedButton.new({clipBehavior: ui.Clip.antiAlias, elevation: 5.0, padding: new edge_insets.EdgeInsets.only({left: 32.0, right: 32.0, top: 16.0, bottom: 16.0}), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(56.0))}), color: theme.Theme.of(context).primaryColor, textColor: colors.Colors.white, child: new text.Text.new("SIGN UP", {$creationLocationd_0dea112b090073317d4: C112 || CT.C112}), onPressed: dart.fn(() => this[_submitForm](dart.bind(model, 'authenticate')), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), BuildContextAndWidgetAndMainModelToWidget()), $creationLocationd_0dea112b090073317d4: C125 || CT.C125})]), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), $creationLocationd_0dea112b090073317d4: C141 || CT.C141});
    }
    [_buildTopRow]() {
      return new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Stack.new({alignment: alignment.Alignment.center, children: JSArrayOfWidget().of([new transitions.SlideTransition.new({position: this[_slideModeAnimation], child: new container.Container.new({width: 120.0, height: 4.0, decoration: new box_decoration.BoxDecoration.new({color: theme.Theme.of(this.context).accentColor, borderRadius: new border_radius.BorderRadius.circular(56.0)}), $creationLocationd_0dea112b090073317d4: C145 || CT.C145}), $creationLocationd_0dea112b090073317d4: C150 || CT.C150}), new button_bar.ButtonBar.new({children: JSArrayOfWidget().of([new container.Container.new({width: 100.0, child: new material_button.MaterialButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(100.0), side: new borders.BorderSide.new({style: borders.BorderStyle.none})}), height: 56.0, child: new text.Text.new("SIGN UP", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), onPressed: dart.fn(() => {
                        this.setState(dart.fn(() => {
                          this[_authMode] = auth.AuthMode.Signup;
                          this[_controller].forward();
                        }, VoidToNull()));
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), $creationLocationd_0dea112b090073317d4: C164 || CT.C164}), new basic.SizedBox.new({width: 48.0, $creationLocationd_0dea112b090073317d4: C168 || CT.C168}), new container.Container.new({width: 100.0, child: new material_button.MaterialButton.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(100.0), side: new borders.BorderSide.new({style: borders.BorderStyle.none})}), height: 56.0, child: new text.Text.new("LOGIN", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C171 || CT.C171}), onPressed: dart.fn(() => {
                        this[_authMode] = auth.AuthMode.Login;
                        this[_controller].reverse();
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), $creationLocationd_0dea112b090073317d4: C181 || CT.C181})]), $creationLocationd_0dea112b090073317d4: C185 || CT.C185})]), $creationLocationd_0dea112b090073317d4: C188 || CT.C188})]), $creationLocationd_0dea112b090073317d4: C192 || CT.C192});
    }
    build(context) {
      let deviceWidth = media_query.MediaQuery.of(context).size.width;
      let targetWidth = dart.notNull(deviceWidth) > 550.0 ? 500.0 : deviceWidth;
      return new scaffold.Scaffold.new({body: new basic.Center.new({child: new single_child_scroll_view.SingleChildScrollView.new({physics: new scroll_physics.BouncingScrollPhysics.new(), child: new container.Container.new({width: targetWidth, child: new form.Form.new({key: this[_formKey], child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.center, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new text.Text.new("EASYLIST", {style: new text_style.TextStyle.new({color: theme.Theme.of(context).primaryColor, fontWeight: ui.FontWeight.w200, letterSpacing: 15.0, fontSize: 56.0}), $creationLocationd_0dea112b090073317d4: C197 || CT.C197}), new basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C201 || CT.C201}), this[_buildTopRow](), new basic.Stack.new({children: JSArrayOfWidget().of([this[_buildSignUpForm](), this[_buildLoginForm]()]), $creationLocationd_0dea112b090073317d4: C204 || CT.C204})]), $creationLocationd_0dea112b090073317d4: C207 || CT.C207}), $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), $creationLocationd_0dea112b090073317d4: C216 || CT.C216}), $creationLocationd_0dea112b090073317d4: C220 || CT.C220}), $creationLocationd_0dea112b090073317d4: C224 || CT.C224}), $creationLocationd_0dea112b090073317d4: C227 || CT.C227});
    }
  };
  (auth$._AuthPageState.new = function() {
    this[_formData] = new (IdentityMapOfString$dynamic()).from(["email", null, "password", null, "acceptTerms", false]);
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_emailTextController] = new editable_text.TextEditingController.new();
    this[_passwordTextController] = new editable_text.TextEditingController.new();
    this[_authMode] = auth.AuthMode.Login;
    this[_controller] = null;
    this[_slideModeAnimation] = null;
    this[_slideFormLoginAnimation] = null;
    this[_slideFormSignupAnimation] = null;
    auth$._AuthPageState.__proto__.new.call(this);
    ;
  }).prototype = auth$._AuthPageState.prototype;
  dart.addTypeTests(auth$._AuthPageState);
  dart.setMethodSignature(auth$._AuthPageState, () => ({
    __proto__: dart.getMethods(auth$._AuthPageState.__proto__),
    [_buildEmailTextField]: dart.fnType(framework.Widget, []),
    [_buildPasswordTextField]: dart.fnType(framework.Widget, []),
    [_buildPasswordConfirmTextField]: dart.fnType(framework.Widget, []),
    [_buildAcceptSwitch]: dart.fnType(framework.Widget, []),
    [_submitForm]: dart.fnType(dart.void, [core.Function]),
    [_buildLoginForm]: dart.fnType(framework.Widget, []),
    [_buildSignUpForm]: dart.fnType(framework.Widget, []),
    [_buildTopRow]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(auth$._AuthPageState, "package:flutter_course/pages/auth.dart");
  dart.setFieldSignature(auth$._AuthPageState, () => ({
    __proto__: dart.getFields(auth$._AuthPageState.__proto__),
    [_formData]: dart.finalFieldType(core.Map$(core.String, dart.dynamic)),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_emailTextController]: dart.finalFieldType(editable_text.TextEditingController),
    [_passwordTextController]: dart.finalFieldType(editable_text.TextEditingController),
    [_authMode]: dart.fieldType(auth.AuthMode),
    [_controller]: dart.fieldType(animation_controller.AnimationController),
    [_slideModeAnimation]: dart.fieldType(animation.Animation$(ui.Offset)),
    [_slideFormLoginAnimation]: dart.fieldType(animation.Animation$(ui.Offset)),
    [_slideFormSignupAnimation]: dart.fieldType(animation.Animation$(ui.Offset))
  }));
  dart.trackLibraries("packages/flutter_course/pages/auth", {
    "package:flutter_course/pages/auth.dart": auth$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuBK,MALD,oBAAc,yDACL,gBACG,qCACM;AAYjB,MARD,4BAAsB,AAGpB,kCAFO,kBAAO,MAAM,WACf,kBAAO,CAAC,MAAM,eAEnB,4CACU,0BACM;AAWjB,MARD,iCAA2B,AAGzB,kCAFO,kBAAO,KAAK,WACd,kBAAO,KAAK,eAEjB,4CACU,0BACM;AAWjB,MARD,kCAA4B,AAG1B,kCAFO,kBAAO,CAAC,KAAK,WACf,kBAAO,KAAK,eAEjB,4CACU,0BACM;AAGD,MAAX;IACR;;AAGE,YAAO,oDACO,oDACG,kBACH,uDACqB,wCAAS,wBAEd,mDAChB,uCACD,QAAQ;AACjB,cAAI,AAAM,KAAD,yBACJ,AACI,gBADG,oJACM,KAAK;AACrB,kBAAO;;uCAGF,QAAQ;AAC+B,UAA9C,AAAS,uBAAC,SAAW,AAAqB;;IAGhD;;AAGE,YAAO,oDACO,oDACG,oBACH,uDACqB,wCAAS,uBAE7B,kBACD,0CACD,QAAQ;AACjB,cAAI,AAAM,KAAD,cAAY,AAAM,AAAO,KAAR,UAAU;AAClC,kBAAO;;uCAGF,QAAQ;AACc,UAA7B,AAAS,uBAAC,YAAc,KAAK;;IAGnC;;AAGE,YAAO,oDACO,oDACG,4BACH,uDACqB,wCAAS,uBAE7B,iBACF,QAAQ;AACjB,cAAI,KAAK,IAAI,AAAwB,sCACvB,YAAV,iBAAsB;AACxB,kBAAO;;;IAIf;;AAGE,YAAO,kEACE,AAAS,uBAAC,4BACN,QAAM;AAGb,UAFF,cAAS;AACyB,YAAhC,AAAS,uBAAC,eAAiB,KAAK;;iCAG7B,kBAAK;IAEhB;kBAE0B;AAAV;AACd,uBAAK,AAAS,AAAa,uDAAe,AAAS,uBAAC;AAClD;;AAE0B,QAA5B,AAAS,AAAa;AAED;AAMpB,6BAJD,6BAAqB,MAAkB,WAAZ,YAAY,GACrC,AAAqB,iCACrB,AAAwB,oCACxB;AAEF,uBAAI,AAAkB,kBAAA,QAAC;AACO,UAA5B,WAAM;AACsC,UAAlC,mEAAqB,cAAS;;AAiBlC,UAfN,0CACa,uBACA,QAAc,WACd,mCACE,kBAAK,wFACH,qCAAK,AAAkB,kBAAA,QAAC,gFAChB,sBACf,uCACS,kBAAK,6EACD;AACkB,oBAAjB,AAAY,uBAAT,OAAO;;;MAOtC;;;AAGE,YAAO,gDACK,uCACH,iCACc,0BACZ,uEACsB,mCAClB,uBAAS,qBAGT,YACJ,sDAEE,gCACa,sBAChB,8BACA,gCACU,+DAEV,iCACA,gCACU,+DAEV,kFACA,4BACA,kFACA,gCACU,+DAEV,uDACW,SAAc,SAAgB,OAAiB,oBAC/C,AAAM,KAAD,cACN,6BAAc,yKACd,kDACqB,8BACR,cACS,uCACZ,aACC,WACF,cACG,eAEH,uEACsB,mCAClB,uBAAS,qBAGF,4BACX,kBAAK,8EACD,cAAM,kBAAkB,UAAN,KAAK;IAS1D;;AAGE,YAAO,gDACK,wCACH,iCACc,0BACZ,uEACsB,mCAClB,uBAAS,qBAGT,YACJ,sCACe,+BAAI,cACjB,gCACa,sBAChB,8BACA,gCACU,+DAEV,iCACA,gCACU,+DAEV,wCACA,gCACU,iEAEV,oFACA,4BACA,oFACA,gCACU,iEAEV,uDACW,SAAc,SAAgB,OAAiB,oBAC/C,AAAM,KAAD,cACN,6BAAc,6KACd,kDACqB,8BACR,cACS,uCACZ,aACC,WACF,cACG,eAEH,uEACsB,mCAClB,uBAAS,iBAGP,AAAY,eAAT,OAAO,2BACL,4BACX,kBAAK,kFACD,cAAM,kBAAkB,UAAN,KAAK;IAS1D;;AAGE,YAAO,uCACgC,mDACE,yCACrB,sBAChB,gCACuB,sCACH,sBAChB,+CACY,kCACH,oCACE,eACC,iBACI,6CACG,AAAY,eAAT,yCACW,wCAAS,+HAI1C,wCACoB,sBAChB,oCACS,cACA,+CACE,uEACsB,wCAAS,cAC9B,mCACe,sCAGf,aACD,kBACL,mBACO,0CAAiC,4FAE/B;AAIP,wBAHF,cAAS;AACoB,0BAA3B,kBAAqB;AACA,0BAArB,AAAY;;8JAKpB,+BACS,iEAET,oCACS,cACA,+CACE,uEACsB,wCAAS,cAC9B,mCACe,sCAGf,aACD,kBACL,iBACO,0CAAiC,4FAE/B;AACiB,wBAA1B,kBAAqB;AACA,wBAArB,AAAY;;IAUhC;UAG0B;AACX,wBAAyB,AAAY,AAAK,0BAAd,OAAO;AACnC,wBAA0B,aAAZ,WAAW,IAAG,QAAQ,QAAQ,WAAW;AAEpE,YAAO,kCACC,6BACG,iEACI,uDACF,oCACE,WAAW,SACX,wBACA,uBACE,0CACkC,mDACF,yCACnB,sBAChB,kBACE,oBACO,qCACQ,AAAY,eAAT,OAAO,4BACA,mCACR,gBACL,mEAGd,gCACU,iEAEV,sBACA,+BACoB,sBAChB,0BACA;IAUpB;;;IAjZ2B,kBAAY,0CACrC,SAAS,MACT,YAAY,MACZ,eAAe;IAEU,iBAAW;IACV,6BAAuB;IACvB,gCAA0B;IAC7C,kBAAqB;IACV;IACF;IACA;IACA;;;EAsYpB","file":"auth.ddc.js"}');
  // Exports:
  return {
    pages__auth: auth$
  };
});

//# sourceMappingURL=auth.ddc.js.map
