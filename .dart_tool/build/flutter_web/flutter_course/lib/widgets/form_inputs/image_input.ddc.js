define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_course/models/product', 'packages/image_picker/image_picker', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_course__models__product, packages__image_picker__image_picker, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const io = dart_sdk.io;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const product = packages__flutter_course__models__product.models__product;
  const image_picker = packages__image_picker__image_picker.image_picker;
  const bottom_sheet = packages__flutter__material.src__material__bottom_sheet;
  const divider = packages__flutter__material.src__material__divider;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icons = packages__flutter__material.src__material__icons;
  const theme = packages__flutter__material.src__material__theme;
  const colors = packages__flutter__material.src__material__colors;
  const outline_button = packages__flutter__material.src__material__outline_button;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const image_input = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FileToNull = () => (FileToNull = dart.constFn(dart.fnType(core.Null, [io.File])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextToContainer = () => (BuildContextToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 19,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C6() {
      return C6 = dart.constList([], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 39,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 19,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 56,
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
        [_Location_column]: 17,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 39,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 19,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 40,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "file",
        [_Location_column]: 9,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 9,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 24,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 9,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 23,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 24,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 23,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 23,
        [_Location_line]: 132,
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
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 121,
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
        [_Location_column]: 18,
        [_Location_line]: 119,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderSide",
        [_Location_column]: 11,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/form_inputs/image_input.dart"
      });
    }
  });
  const ImageInput_setImage = dart.privateName(image_input, "ImageInput.setImage");
  const ImageInput_product = dart.privateName(image_input, "ImageInput.product");
  image_input.ImageInput = class ImageInput extends framework.StatefulWidget {
    get setImage() {
      return this[setImage$];
    }
    set setImage(value) {
      super.setImage = value;
    }
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    createState() {
      return new image_input._ImageInputState.new();
    }
  };
  (image_input.ImageInput.new = function(setImage, product, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[setImage$] = setImage;
    this[product$] = product;
    image_input.ImageInput.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = image_input.ImageInput.prototype;
  dart.addTypeTests(image_input.ImageInput);
  const setImage$ = ImageInput_setImage;
  const product$ = ImageInput_product;
  dart.setMethodSignature(image_input.ImageInput, () => ({
    __proto__: dart.getMethods(image_input.ImageInput.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(image_input.ImageInput, "package:flutter_course/widgets/form_inputs/image_input.dart");
  dart.setFieldSignature(image_input.ImageInput, () => ({
    __proto__: dart.getFields(image_input.ImageInput.__proto__),
    setImage: dart.finalFieldType(core.Function),
    product: dart.finalFieldType(product.Product)
  }));
  const _imageFile = dart.privateName(image_input, "_imageFile");
  const _getImage = dart.privateName(image_input, "_getImage");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C6;
  let C5;
  let C9;
  let C8;
  let C7;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  let C20;
  let C19;
  let C18;
  let C23;
  let C22;
  let C21;
  let C26;
  let C27;
  let C28;
  let C25;
  let C24;
  let C31;
  let C32;
  let C30;
  let C29;
  let C35;
  let C36;
  let C37;
  let C38;
  let C34;
  let C33;
  const _buildBottomSheet = dart.privateName(image_input, "_buildBottomSheet");
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C44;
  let C43;
  let C48;
  let C49;
  let C50;
  let C51;
  let C47;
  let C46;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C53;
  let C52;
  let C61;
  let C62;
  let C63;
  let C64;
  let C65;
  let C60;
  let C59;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C71;
  let C70;
  let C75;
  let C76;
  let C74;
  let C73;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C88;
  let C89;
  let C86;
  let C85;
  let C90;
  let C93;
  let C92;
  let C91;
  image_input._ImageInputState = class _ImageInputState extends framework.State$(image_input.ImageInput) {
    [_getImage](context, source) {
      image_picker.ImagePicker.pickImage({source: source, maxWidth: 400.0}).then(core.Null, dart.fn(image => {
        this.setState(dart.fn(() => {
          this[_imageFile] = image;
        }, VoidToNull()));
        dart.dsend(this.widget, 'setImage', [image]);
        navigator.Navigator.pop(core.Object, context);
      }, FileToNull()));
    }
    [_buildBottomSheet](context) {
      bottom_sheet.showModalBottomSheet(dart.dynamic, {context: context, builder: dart.fn(context => new container.Container.new({height: 200.0, alignment: alignment.Alignment.centerLeft, padding: new edge_insets.EdgeInsets.only({top: 20.0}), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new("Select Photo", {style: new text_style.TextStyle.new({fontSize: 24.0, fontWeight: ui.FontWeight.w400}), textAlign: ui.TextAlign.left, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.add_photo_alternate, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), title: new text.Text.new("From Gallery", {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), onTap: dart.fn(() => {
                  this[_getImage](context, image_picker.ImageSource.gallery);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.add_a_photo, {$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), title: new text.Text.new("From Camera", {$creationLocationd_0dea112b090073317d4: C21 || CT.C21}), onTap: dart.fn(() => {
                  this[_getImage](context, image_picker.ImageSource.camera);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C24 || CT.C24})]), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), BuildContextToContainer())});
    }
    build(context) {
      let buttonAccentColor = theme.Theme.of(context).accentColor;
      let previewImage = new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: box_border.Border.all({color: colors.Colors.white12, style: borders.BorderStyle.solid, width: 1.0})}), padding: new edge_insets.EdgeInsets.all(16.0), margin: new edge_insets.EdgeInsets.only({top: 16.0, bottom: 16.0}), child: new basic.Center.new({child: new text.Text.new("Select an image", {style: new text_style.TextStyle.new({color: colors.Colors.white24}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46});
      if (this[_imageFile] != null) {
        previewImage = new image.Image.file(this[_imageFile], {fit: box_fit.BoxFit.cover, height: 300.0, width: media_query.MediaQuery.of(context).size.width, alignment: alignment.Alignment.center, $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
      } else if (this.widget.product != null) {
        previewImage = new image.Image.network(this.widget.product.image, {fit: box_fit.BoxFit.cover, height: 300.0, width: media_query.MediaQuery.of(context).size.width, alignment: alignment.Alignment.center, $creationLocationd_0dea112b090073317d4: C59 || CT.C59});
      }
      return new basic.Column.new({children: JSArrayOfWidget().of([new outline_button.OutlineButton.new({borderSide: new borders.BorderSide.new({color: buttonAccentColor, width: 2.0, style: borders.BorderStyle.solid}), onPressed: dart.fn(() => {
              core.print("pressed button");
              this[_buildBottomSheet](context);
            }, VoidToNull()), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon.Icon.new(icons.Icons.camera_alt, {color: buttonAccentColor, $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), new basic.SizedBox.new({width: 16.0, $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), this[_imageFile] == null ? new text.Text.new("Add Image", {style: new text_style.TextStyle.new({color: buttonAccentColor}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}) : new text.Text.new("Change Image", {style: new text_style.TextStyle.new({color: buttonAccentColor}), $creationLocationd_0dea112b090073317d4: C77 || CT.C77})]), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), previewImage, new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C90 || CT.C90})]), $creationLocationd_0dea112b090073317d4: C91 || CT.C91});
    }
  };
  (image_input._ImageInputState.new = function() {
    this[_imageFile] = null;
    image_input._ImageInputState.__proto__.new.call(this);
    ;
  }).prototype = image_input._ImageInputState.prototype;
  dart.addTypeTests(image_input._ImageInputState);
  dart.setMethodSignature(image_input._ImageInputState, () => ({
    __proto__: dart.getMethods(image_input._ImageInputState.__proto__),
    [_getImage]: dart.fnType(dart.void, [framework.BuildContext, image_picker.ImageSource]),
    [_buildBottomSheet]: dart.fnType(dart.void, [framework.BuildContext]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(image_input._ImageInputState, "package:flutter_course/widgets/form_inputs/image_input.dart");
  dart.setFieldSignature(image_input._ImageInputState, () => ({
    __proto__: dart.getFields(image_input._ImageInputState.__proto__),
    [_imageFile]: dart.fieldType(io.File)
  }));
  dart.trackLibraries("packages/flutter_course/widgets/form_inputs/image_input", {
    "package:flutter_course/widgets/form_inputs/image_input.dart": image_input
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_input.dart"],"names":[],"mappings":"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","file":"image_input.ddc.js"}');
  // Exports:
  return {
    widgets__form_inputs__image_input: image_input
  };
});

//# sourceMappingURL=image_input.ddc.js.map
