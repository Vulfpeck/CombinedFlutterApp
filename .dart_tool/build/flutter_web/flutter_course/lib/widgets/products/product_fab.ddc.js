define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_course/models/product', 'packages/flutter/src/animation/animation', 'packages/scoped_model/scoped_model', 'packages/flutter_course/scoped-models/main', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/url_launcher/url_launcher', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_course__models__product, packages__flutter__src__animation__animation, packages__scoped_model__scoped_model, packages__flutter_course__scoped_models__main, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__url_launcher__url_launcher, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const product = packages__flutter_course__models__product.models__product;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animations = packages__flutter__src__animation__animation.src__animation__animations;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const fractional_offset = packages__flutter__src__painting___network_image_web.src__painting__fractional_offset;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const theme = packages__flutter__material.src__material__theme;
  const icons = packages__flutter__material.src__material__icons;
  const colors = packages__flutter__material.src__material__colors;
  const url_launcher = packages__url_launcher__url_launcher.url_launcher;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const product_fab = Object.create(dart.library);
  let ScopedModelDescendantOfMainModel = () => (ScopedModelDescendantOfMainModel = dart.constFn(scoped_model.ScopedModelDescendant$(main.MainModel)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextAndWidgetToTransform = () => (BuildContextAndWidgetToTransform = dart.constFn(dart.fnType(basic.Transform, [framework.BuildContext, framework.Widget])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndWidgetAndMainModelToColumn = () => (BuildContextAndWidgetAndMainModelToColumn = dart.constFn(dart.fnType(basic.Column, [framework.BuildContext, framework.Widget, main.MainModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 27,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 19,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heroTag",
        [_Location_column]: 19,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mini",
        [_Location_column]: 19,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 17,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 25,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 19,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "heroTag",
        [_Location_column]: 19,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mini",
        [_Location_column]: 19,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 85,
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
        [_Location_column]: 22,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 47,
        [_Location_line]: 121,
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
        [_Location_column]: 28,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 21,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transform",
        [_Location_column]: 21,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 17,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 17,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/product_fab.dart"
      });
    }
  });
  const ProductFab_product = dart.privateName(product_fab, "ProductFab.product");
  product_fab.ProductFab = class ProductFab extends framework.StatefulWidget {
    get product() {
      return this[product$];
    }
    set product(value) {
      super.product = value;
    }
    createState() {
      return new product_fab._ProductFabState.new();
    }
  };
  (product_fab.ProductFab.new = function(product, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[product$] = product;
    product_fab.ProductFab.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_fab.ProductFab.prototype;
  dart.addTypeTests(product_fab.ProductFab);
  const product$ = ProductFab_product;
  dart.setMethodSignature(product_fab.ProductFab, () => ({
    __proto__: dart.getMethods(product_fab.ProductFab.__proto__),
    createState: dart.fnType(product_fab._ProductFabState, [])
  }));
  dart.setLibraryUri(product_fab.ProductFab, "package:flutter_course/widgets/products/product_fab.dart");
  dart.setFieldSignature(product_fab.ProductFab, () => ({
    __proto__: dart.getFields(product_fab.ProductFab.__proto__),
    product: dart.finalFieldType(product.Product)
  }));
  const _controller = dart.privateName(product_fab, "_controller");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C5;
  let C4;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C24;
  let C23;
  let C32;
  let C33;
  let C31;
  let C30;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C39;
  let C38;
  let C43;
  let C44;
  let C45;
  let C42;
  let C41;
  let C48;
  let C49;
  let C47;
  let C46;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C57;
  let C55;
  let C54;
  let C60;
  let C59;
  let C58;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(product_fab.ProductFab) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(product_fab.ProductFab)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(product_fab.ProductFab));
  product_fab._ProductFabState = class _ProductFabState extends State_TickerProviderStateMixin$36 {
    initState() {
      this[_controller] = new animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({milliseconds: 200})});
      super.initState();
    }
    build(context) {
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new container.Container.new({margin: new edge_insets.EdgeInsets.only({bottom: 16.0}), child: new transitions.ScaleTransition.new({scale: new animations.CurvedAnimation.new({parent: this[_controller], curve: new curves.Interval.new(0.0, 1.0, {curve: curves.Curves.easeInOutSine})}), child: new floating_action_button.FloatingActionButton.new({backgroundColor: theme.Theme.of(context).cardColor, onPressed: dart.fn(() => async.async(core.Null, (function*() {
                    let url = "mailto:" + dart.str(this.widget.product.userEmail);
                    if (dart.test(yield url_launcher.canLaunch(url))) {
                      yield url_launcher.launch(url);
                    } else {
                      dart.throw("Could not launch");
                    }
                  }).bind(this)), VoidToFutureOfNull()), heroTag: "contact", mini: true, child: new icon.Icon.new(icons.Icons.mail, {color: theme.Theme.of(context).accentColor, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new container.Container.new({margin: new edge_insets.EdgeInsets.only({bottom: 16.0}), child: new transitions.ScaleTransition.new({scale: new animations.CurvedAnimation.new({parent: this[_controller], curve: new curves.Interval.new(0.0, 0.5, {curve: curves.Curves.easeInOutSine})}), child: new floating_action_button.FloatingActionButton.new({backgroundColor: theme.Theme.of(context).cardColor, onPressed: dart.fn(() => {
                    model.selectProduct(this.widget.product.id);
                    model.toggleProductFavoriteStatus();
                  }, VoidToNull()), heroTag: "favorite", mini: true, child: new icon.Icon.new(dart.test(model.selectedProduct.isFavorite) ? icons.Icons.favorite : icons.Icons.favorite_border, {color: colors.Colors.red, $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => {
                if (dart.test(this[_controller].isDismissed)) {
                  this[_controller].forward();
                } else {
                  this[_controller].reverse();
                }
              }, VoidToNull()), child: new transitions.AnimatedBuilder.new({animation: this[_controller], builder: dart.fn((context, child) => new basic.Transform.new({alignment: fractional_offset.FractionalOffset.center, transform: vector_math_64.Matrix4.rotationZ(dart.notNull(this[_controller].value) * 0.5 * 3.141592653589793), child: new icon.Icon.new(dart.test(this[_controller].isDismissed) ? icons.Icons.more_vert : icons.Icons.close, {$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), BuildContextAndWidgetToTransform()), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50})]), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), BuildContextAndWidgetAndMainModelToColumn()), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
    }
  };
  (product_fab._ProductFabState.new = function() {
    this[_controller] = null;
    product_fab._ProductFabState.__proto__.new.call(this);
    ;
  }).prototype = product_fab._ProductFabState.prototype;
  dart.addTypeTests(product_fab._ProductFabState);
  dart.setMethodSignature(product_fab._ProductFabState, () => ({
    __proto__: dart.getMethods(product_fab._ProductFabState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(product_fab._ProductFabState, "package:flutter_course/widgets/products/product_fab.dart");
  dart.setFieldSignature(product_fab._ProductFabState, () => ({
    __proto__: dart.getFields(product_fab._ProductFabState.__proto__),
    [_controller]: dart.fieldType(animation_controller.AnimationController)
  }));
  dart.trackLibraries("packages/flutter_course/widgets/products/product_fab", {
    "package:flutter_course/widgets/products/product_fab.dart": product_fab
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product_fab.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUgB;;;;;;;AAKoB;IAAkB;;yCAHpC;;;AAAhB;;EAAwB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoBrB,MALD,oBAAkB,yDACT,gBACG,qCACM;AAGD,MAAX;IACR;UAG0B;AACxB,YAAO,wDACI,SAAc,SAAgB,OAAiB,UAC/C,oCACsB,iCACT,sBAChB,qCACqB,yCAAa,eACzB,4CACE,4CACG,0BACD,wBACL,KACA,aACc,wCAGX,sEACkB,AAAY,eAAT,OAAO,wBACtB;AACH,8BAAM,AAAoC,qBAA1B,AAAO,AAAQ;AACrC,kCAAI,MAAM,uBAAU,GAAG;AACJ,sBAAjB,MAAM,oBAAO,GAAG;;AAEQ,sBAAxB,WAAM;;kBAET,gDACQ,iBACH,aACC,kBACC,0BACO,AAAY,eAAT,OAAO,+OAK/B,qCACqB,yCAAa,eACzB,4CACE,4CACG,0BACD,wBACL,KACA,aACc,wCAGX,sEACkB,AAAY,eAAT,OAAO,wBACtB;AAC6B,oBAAtC,AAAM,KAAD,eAAe,AAAO,AAAQ;AACA,oBAAnC,AAAM,KAAD;6CAEE,kBACH,aACC,4BACL,AAAM,AAAgB,KAAjB,+BACO,uBACA,qCACE,uPAKtB,gEACa;AAET,8BAAI,AAAY;AAEO,kBAArB,AAAY;;AAES,kBAArB,AAAY;;uCAGT,gDACM,4BACF,SAAc,SAAgB,UAC9B,oCACuB,sDACT,iCACC,AAAM,aAAxB,AAAY,2BAAQ,iCAEf,4BACL,AAAY,iCAAoB,wBAAkB;IAUtE;;;IA7GoB;;;EA8GtB","file":"product_fab.ddc.js"}');
  // Exports:
  return {
    widgets__products__product_fab: product_fab
  };
});

//# sourceMappingURL=product_fab.ddc.js.map
