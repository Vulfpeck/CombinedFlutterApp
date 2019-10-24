define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/gestures/arena', 'packages/flutter_course/scoped-models/main', 'packages/scoped_model/scoped_model', 'packages/flutter/material', 'packages/flutter_course/pages/auth', 'packages/flutter_course/pages/products', 'packages/flutter_course/pages/products_admin', 'packages/flutter_course/models/product', 'packages/flutter_course/widgets/helpers/custom_route', 'packages/flutter_course/pages/product'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__gestures__arena, packages__flutter_course__scoped_models__main, packages__scoped_model__scoped_model, packages__flutter__material, packages__flutter_course__pages__auth, packages__flutter_course__pages__products, packages__flutter_course__pages__products_admin, packages__flutter_course__models__product, packages__flutter_course__widgets__helpers__custom_route, packages__flutter_course__pages__product) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const app = packages__flutter__material.src__material__app;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const page = packages__flutter__material.src__material__page;
  const auth = packages__flutter_course__pages__auth.pages__auth;
  const products = packages__flutter_course__pages__products.pages__products;
  const products_admin = packages__flutter_course__pages__products_admin.pages__products_admin;
  const product = packages__flutter_course__models__product.models__product;
  const custom_route = packages__flutter_course__widgets__helpers__custom_route.widgets__helpers__custom_route;
  const product$ = packages__flutter_course__pages__product.pages__product;
  const main$ = Object.create(dart.library);
  const $split = dartx.split;
  const $_get = dartx._get;
  const $firstWhere = dartx.firstWhere;
  let ScopedModelOfMainModel = () => (ScopedModelOfMainModel = dart.constFn(scoped_model.ScopedModel$(main.MainModel)))();
  let BuildContextToStatefulWidget = () => (BuildContextToStatefulWidget = dart.constFn(dart.fnType(framework.StatefulWidget, [framework.BuildContext])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let IdentityMapOfString$BuildContextToWidget = () => (IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, BuildContextToWidget())))();
  let ProductTobool = () => (ProductTobool = dart.constFn(dart.fnType(core.bool, [product.Product])))();
  let CustomRouteOfbool = () => (CustomRouteOfbool = dart.constFn(custom_route.CustomRoute$(core.bool)))();
  let RouteSettingsToCustomRouteOfbool = () => (RouteSettingsToCustomRouteOfbool = dart.constFn(dart.fnType(CustomRouteOfbool(), [navigator.RouteSettings])))();
  let RouteSettingsToMaterialPageRoute = () => (RouteSettingsToMaterialPageRoute = dart.constFn(dart.fnType(page.MaterialPageRoute, [navigator.RouteSettings])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 61,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 48,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 66,
        [_Location_line]: 64,
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
        [_Location_column]: 48,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 64,
        [_Location_line]: 77,
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
        [_Location_column]: 52,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 63,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 50,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 9,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routes",
        [_Location_column]: 9,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onGenerateRoute",
        [_Location_column]: 9,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onUnknownRoute",
        [_Location_column]: 9,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/main.dart"
      });
    }
  });
  main$.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new main$._MyAppState.new();
    }
  };
  (main$.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main$.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main$.MyApp.prototype;
  dart.addTypeTests(main$.MyApp);
  dart.setMethodSignature(main$.MyApp, () => ({
    __proto__: dart.getMethods(main$.MyApp.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(main$.MyApp, "package:flutter_course/main.dart");
  const _platformChannel = dart.privateName(main$, "_platformChannel");
  const _model = dart.privateName(main$, "_model");
  const _isAuthenticated = dart.privateName(main$, "_isAuthenticated");
  const _getBatteryLevel = dart.privateName(main$, "_getBatteryLevel");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C4;
  let C3;
  let C2;
  let C5;
  let C8;
  let C7;
  let C6;
  let C9;
  let C12;
  let C11;
  let C10;
  let C13;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C18;
  let C17;
  let C26;
  let C27;
  let C25;
  let C24;
  main$._MyAppState = class _MyAppState extends framework.State$(main$.MyApp) {
    [_getBatteryLevel]() {
      return async.async(core.Null, (function* _getBatteryLevel() {
        let batteryLevel = null;
        try {
          let result = (yield this[_platformChannel].invokeMethod(core.int, "getBatteryLevel"));
          batteryLevel = "Battery level is " + dart.str(result) + " %.";
        } catch (e) {
          let error = dart.getThrown(e);
          core.print(error);
          batteryLevel = "failed to get battery level";
        }
        core.print(batteryLevel);
      }).bind(this));
    }
    build(context) {
      core.print("BUilding main page");
      return new (ScopedModelOfMainModel()).new({model: this[_model], child: new app.MaterialApp.new({title: "EasyList", theme: theme_data.ThemeData.new({canvasColor: new ui.Color.new(4294244080), brightness: ui.Brightness.light, primaryColor: new ui.Color.new(4282930512), accentColor: new ui.Color.new(4290833258), buttonColor: new ui.Color.new(4282930512)}), routes: new (IdentityMapOfString$BuildContextToWidget()).from(["/", dart.fn(context => !dart.test(this[_isAuthenticated]) ? new auth.AuthPage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}) : new products.ProductsPage.new(this[_model], {$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), BuildContextToStatefulWidget()), "/admin", dart.fn(context => !dart.test(this[_isAuthenticated]) ? new auth.AuthPage.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}) : new products_admin.ProductsAdminPage.new(this[_model], {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), BuildContextToWidget())]), onGenerateRoute: dart.fn(settings => {
            let pathElements = settings.name[$split]("/");
            if (pathElements[$_get](0) !== "") {
              return null;
            }
            if (pathElements[$_get](1) === "product") {
              let productId = pathElements[$_get](2);
              let product = this[_model].allProducts[$firstWhere](dart.fn(product => product.id == productId, ProductTobool()));
              return new (CustomRouteOfbool()).new({builder: dart.fn(context => !dart.test(this[_isAuthenticated]) ? new auth.AuthPage.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}) : new product$.ProductPage.new(product, {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), BuildContextToWidget())});
            }
            return null;
          }, RouteSettingsToCustomRouteOfbool()), onUnknownRoute: dart.fn(settings => new page.MaterialPageRoute.new({builder: dart.fn(context => !dart.test(this[_isAuthenticated]) ? new auth.AuthPage.new({$creationLocationd_0dea112b090073317d4: C13 || CT.C13}) : new products.ProductsPage.new(this[_model], {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), BuildContextToStatefulWidget())}), RouteSettingsToMaterialPageRoute()), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
  };
  (main$._MyAppState.new = function() {
    this[_platformChannel] = new platform_channel.MethodChannel.new("flutter-course.com/battery");
    this[_model] = new main.MainModel.new();
    this[_isAuthenticated] = false;
    main$._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = main$._MyAppState.prototype;
  dart.addTypeTests(main$._MyAppState);
  dart.setMethodSignature(main$._MyAppState, () => ({
    __proto__: dart.getMethods(main$._MyAppState.__proto__),
    [_getBatteryLevel]: dart.fnType(async.Future$(core.Null), []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main$._MyAppState, "package:flutter_course/main.dart");
  dart.setFieldSignature(main$._MyAppState, () => ({
    __proto__: dart.getFields(main$._MyAppState.__proto__),
    [_platformChannel]: dart.finalFieldType(platform_channel.MethodChannel),
    [_model]: dart.finalFieldType(main.MainModel),
    [_isAuthenticated]: dart.fieldType(core.bool)
  }));
  let C28;
  main$.main = function main$0() {
    binding.runApp(new main$.MyApp.new({$creationLocationd_0dea112b090073317d4: C28 || CT.C28}));
  };
  dart.trackLibraries("packages/flutter_course/main", {
    "package:flutter_course/main.dart": main$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAuBI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAO+B;AACpB;AACP;AACY,wBAAS,MAAM,AAAiB,8CAAa;AACX,UAA5C,eAAe,AAA6B,+BAAV,MAAM;;cACjC;AACK,UAAZ,WAAM,KAAK;AACiC,UAA5C,eAAe;;AAEE,QAAnB,WAAM,YAAY;MACpB;;UAG0B;AACG,MAA3B,WAAM;AACN,YAAO,4CACE,qBACA,gCACE,mBACA,uCACQ,iBAAM,yBACI,mCACT,iBAAM,0BACP,iBAAM,0BACN,iBAAM,uBAGb,uDACN,KAAK,QAAc,WACf,WAAC,0BAAmB,+EAAa,8BAAa,uGAClD,UAAU,QAAc,WACpB,WAAC,0BAAmB,+EAAa,yCAAkB,kHAExC,QAAe;AACX,+BAAe,AAAS,AAAK,QAAN,cAAY;AACtD,gBAAI,AAAY,YAAA,QAAC,OAAM;AACrB,oBAAO;;AAET,gBAAI,AAAY,AAAI,YAAJ,QAAC,OAAM;AACR,8BAAY,AAAY,YAAA,QAAC;AACxB,4BAAU,AAAO,AAC1B,sCAAW,QAAS,WAAY,AAAQ,AAAG,OAAJ,OAAO,SAAS;AAC5D,oBAAO,yCACI,QAAc,WACnB,WAAC,0BAAmB,+EAAa,6BAAY,OAAO;;AAG5D,kBAAO;kEAEO,QAAe,YACtB,yCACI,QAAc,WACnB,WAAC,0BAAmB,iFAAa,8BAAa;IAK5D;;;IA7DM,yBAAmB,uCAAc;IACvB,eAAS;IACpB,yBAAmB;;;EA4D1B;;;;;;;;;;;;;;;;AAzEiB,IAAf,eAAO;EACT","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main$
  };
});

//# sourceMappingURL=main.ddc.js.map
