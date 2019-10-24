define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const page = packages__flutter__material.src__material__page;
  const custom_route = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 16,
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
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/helpers/custom_route.dart"
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
  let C1;
  let C0;
  const _is_CustomRoute_default = Symbol('_is_CustomRoute_default');
  custom_route.CustomRoute$ = dart.generic(T => {
    class CustomRoute extends page.MaterialPageRoute$(T) {
      buildTransitions(context, animation, secondaryAnimation, child) {
        if (dart.test(this.settings.isInitialRoute)) {
          return child;
        }
        return new transitions.FadeTransition.new({opacity: animation, child: child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
      }
    }
    (CustomRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      CustomRoute.__proto__.new.call(this, {builder: builder, settings: settings});
      ;
    }).prototype = CustomRoute.prototype;
    dart.addTypeTests(CustomRoute);
    CustomRoute.prototype[_is_CustomRoute_default] = true;
    dart.setLibraryUri(CustomRoute, "package:flutter_course/widgets/helpers/custom_route.dart");
    return CustomRoute;
  });
  custom_route.CustomRoute = custom_route.CustomRoute$();
  dart.addTypeTests(custom_route.CustomRoute, _is_CustomRoute_default);
  dart.trackLibraries("packages/flutter_course/widgets/helpers/custom_route", {
    "package:flutter_course/widgets/helpers/custom_route.dart": custom_route
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["custom_route.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uBAOuC,SAA2B,WAC1C,oBAA2B;AAE/C,sBAAI,AAAS;AACX,gBAAO,MAAK;;AAEd,cAAO,8CACI,SAAS,SACX,KAAK;MAEhB;;;UAd2B;UAAuB;AAC5C,qDAAe,OAAO,YAAY,QAAQ;;IAAC","file":"custom_route.ddc.js"}');
  // Exports:
  return {
    widgets__helpers__custom_route: custom_route
  };
});

//# sourceMappingURL=custom_route.ddc.js.map
