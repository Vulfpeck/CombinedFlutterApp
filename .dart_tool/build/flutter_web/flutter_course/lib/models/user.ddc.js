define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const user = Object.create(dart.library);
  const CT = Object.create(null);
  const User_id = dart.privateName(user, "User.id");
  const User_email = dart.privateName(user, "User.email");
  const User_token = dart.privateName(user, "User.token");
  user.User = class User extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get token() {
      return this[token$];
    }
    set token(value) {
      super.token = value;
    }
  };
  (user.User.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let token = opts && 'token' in opts ? opts.token : null;
    this[id$] = id;
    this[email$] = email;
    this[token$] = token;
    ;
  }).prototype = user.User.prototype;
  dart.addTypeTests(user.User);
  const id$ = User_id;
  const email$ = User_email;
  const token$ = User_token;
  dart.setLibraryUri(user.User, "package:flutter_course/models/user.dart");
  dart.setFieldSignature(user.User, () => ({
    __proto__: dart.getFields(user.User.__proto__),
    id: dart.finalFieldType(core.String),
    email: dart.finalFieldType(core.String),
    token: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_course/models/user", {
    "package:flutter_course/models/user.dart": user
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["user.dart"],"names":[],"mappings":";;;;;;;;;;;IAGe;;;;;;IACA;;;;;;IACA;;;;;;;;QAEQ;QAAmB;QAAsB;IAAzC;IAAmB;IAAsB;;EAAQ","file":"user.ddc.js"}');
  // Exports:
  return {
    models__user: user
  };
});

//# sourceMappingURL=user.ddc.js.map
