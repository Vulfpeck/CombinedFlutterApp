define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: auth.AuthMode.prototype,
        [_name$]: "AuthMode.Signup",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: auth.AuthMode.prototype,
        [_name$]: "AuthMode.Login",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], auth.AuthMode);
    }
  });
  const _name$ = dart.privateName(auth, "_name");
  let C0;
  let C1;
  let C2;
  auth.AuthMode = class AuthMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (auth.AuthMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = auth.AuthMode.prototype;
  dart.addTypeTests(auth.AuthMode);
  dart.setLibraryUri(auth.AuthMode, "package:flutter_course/models/auth.dart");
  dart.setFieldSignature(auth.AuthMode, () => ({
    __proto__: dart.getFields(auth.AuthMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(auth.AuthMode, ['toString']);
  auth.AuthMode.Signup = C0 || CT.C0;
  auth.AuthMode.Login = C1 || CT.C1;
  auth.AuthMode.values = C2 || CT.C2;
  dart.trackLibraries("packages/flutter_course/models/auth", {
    "package:flutter_course/models/auth.dart": auth
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGA;;uCAHK;;;;EAGL","file":"auth.ddc.js"}');
  // Exports:
  return {
    models__auth: auth
  };
});

//# sourceMappingURL=auth.ddc.js.map
