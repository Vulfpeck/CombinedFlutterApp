define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const shared_preferences = Object.create(dart.library);
  const $keys = dartx.keys;
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $cast = dartx.cast;
  const $toList = dartx.toList;
  const $remove = dartx.remove;
  const $clear = dartx.clear;
  let MapOfObject$Object = () => (MapOfObject$Object = dart.constFn(core.Map$(core.Object, core.Object)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let FutureOrOfbool = () => (FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))();
  let dynamicToFutureOrOfbool = () => (dynamicToFutureOrOfbool = dart.constFn(dart.fnType(FutureOrOfbool(), [dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  let MethodCallToFutureOfMapOfString$dynamic = () => (MethodCallToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOfMapOfString$dynamic(), [message_codec.MethodCall])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/shared_preferences"
      });
    }
  });
  const _preferenceCache$ = dart.privateName(shared_preferences, "_preferenceCache");
  const _setValue = dart.privateName(shared_preferences, "_setValue");
  shared_preferences.SharedPreferences = class SharedPreferences extends core.Object {
    static getInstance() {
      return async.async(shared_preferences.SharedPreferences, function* getInstance() {
        if (shared_preferences.SharedPreferences._instance == null) {
          let fromSystem = (yield shared_preferences._kChannel.invokeMethod(MapOfObject$Object(), "getAll"));
          if (!(fromSystem != null)) dart.assertFailed(null, "org-dartlang-app:///packages/shared_preferences/shared_preferences.dart", 29, 14, "fromSystem != null");
          let preferencesMap = new (IdentityMapOfString$Object()).new();
          for (let t0 of fromSystem[$keys]) {
            let key = core.String._check(t0);
            if (!key[$startsWith]("flutter.")) dart.assertFailed(null, "org-dartlang-app:///packages/shared_preferences/shared_preferences.dart", 33, 16, "key.startsWith(_prefix)");
            preferencesMap[$_set](key[$substring]("flutter.".length), fromSystem[$_get](key));
          }
          shared_preferences.SharedPreferences._instance = new shared_preferences.SharedPreferences.__(preferencesMap);
        }
        return shared_preferences.SharedPreferences._instance;
      });
    }
    getKeys() {
      return LinkedHashSetOfString().from(this[_preferenceCache$][$keys]);
    }
    get(key) {
      return this[_preferenceCache$][$_get](key);
    }
    getBool(key) {
      return core.bool._check(this[_preferenceCache$][$_get](key));
    }
    getInt(key) {
      return core.int._check(this[_preferenceCache$][$_get](key));
    }
    getDouble(key) {
      return core.double._check(this[_preferenceCache$][$_get](key));
    }
    getString(key) {
      return core.String._check(this[_preferenceCache$][$_get](key));
    }
    getStringList(key) {
      let list = ListOfObject()._check(this[_preferenceCache$][$_get](key));
      if (list != null && !ListOfString().is(list)) {
        list = list[$cast](core.String)[$toList]();
        this[_preferenceCache$][$_set](key, list);
      }
      return ListOfString()._check(list);
    }
    setBool(key, value) {
      return this[_setValue]("Bool", key, value);
    }
    setInt(key, value) {
      return this[_setValue]("Int", key, value);
    }
    setDouble(key, value) {
      return this[_setValue]("Double", key, value);
    }
    setString(key, value) {
      return this[_setValue]("String", key, value);
    }
    setStringList(key, value) {
      return this[_setValue]("StringList", key, value);
    }
    remove(key) {
      return this[_setValue](null, key, null);
    }
    [_setValue](valueType, key, value) {
      let params = new (IdentityMapOfString$dynamic()).from(["key", "flutter." + dart.str(key)]);
      if (value == null) {
        this[_preferenceCache$][$remove](key);
        return shared_preferences._kChannel.invokeMethod(dart.dynamic, "remove", params).then(core.bool, dart.fn(result => FutureOrOfbool()._check(result), dynamicToFutureOrOfbool()));
      } else {
        this[_preferenceCache$][$_set](key, value);
        params[$_set]("value", value);
        return shared_preferences._kChannel.invokeMethod(dart.dynamic, "set" + dart.str(valueType), params).then(core.bool, dart.fn(result => FutureOrOfbool()._check(result), dynamicToFutureOrOfbool()));
      }
    }
    commit() {
      return async.async(core.bool, function* commit() {
        return yield shared_preferences._kChannel.invokeMethod(core.bool, "commit");
      });
    }
    clear() {
      return async.async(core.bool, (function* clear() {
        this[_preferenceCache$][$clear]();
        return yield shared_preferences._kChannel.invokeMethod(core.bool, "clear");
      }).bind(this));
    }
    static setMockInitialValues(values) {
      shared_preferences._kChannel.setMockMethodCallHandler(dart.fn(methodCall => async.async(MapOfString$dynamic(), function*() {
        if (methodCall.method === "getAll") {
          return values;
        }
        return null;
      }), MethodCallToFutureOfMapOfString$dynamic()));
    }
  };
  (shared_preferences.SharedPreferences.__ = function(_preferenceCache) {
    this[_preferenceCache$] = _preferenceCache;
    ;
  }).prototype = shared_preferences.SharedPreferences.prototype;
  dart.addTypeTests(shared_preferences.SharedPreferences);
  dart.setMethodSignature(shared_preferences.SharedPreferences, () => ({
    __proto__: dart.getMethods(shared_preferences.SharedPreferences.__proto__),
    getKeys: dart.fnType(core.Set$(core.String), []),
    get: dart.fnType(dart.dynamic, [core.String]),
    getBool: dart.fnType(core.bool, [core.String]),
    getInt: dart.fnType(core.int, [core.String]),
    getDouble: dart.fnType(core.double, [core.String]),
    getString: dart.fnType(core.String, [core.String]),
    getStringList: dart.fnType(core.List$(core.String), [core.String]),
    setBool: dart.fnType(async.Future$(core.bool), [core.String, core.bool]),
    setInt: dart.fnType(async.Future$(core.bool), [core.String, core.int]),
    setDouble: dart.fnType(async.Future$(core.bool), [core.String, core.double]),
    setString: dart.fnType(async.Future$(core.bool), [core.String, core.String]),
    setStringList: dart.fnType(async.Future$(core.bool), [core.String, core.List$(core.String)]),
    remove: dart.fnType(async.Future$(core.bool), [core.String]),
    [_setValue]: dart.fnType(async.Future$(core.bool), [core.String, core.String, core.Object]),
    commit: dart.fnType(async.Future$(core.bool), []),
    clear: dart.fnType(async.Future$(core.bool), [])
  }));
  dart.setLibraryUri(shared_preferences.SharedPreferences, "package:shared_preferences/shared_preferences.dart");
  dart.setFieldSignature(shared_preferences.SharedPreferences, () => ({
    __proto__: dart.getFields(shared_preferences.SharedPreferences.__proto__),
    [_preferenceCache$]: dart.finalFieldType(core.Map$(core.String, core.Object))
  }));
  dart.defineLazy(shared_preferences.SharedPreferences, {
    /*shared_preferences.SharedPreferences._prefix*/get _prefix() {
      return "flutter.";
    },
    /*shared_preferences.SharedPreferences._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  dart.defineLazy(shared_preferences, {
    /*shared_preferences._kChannel*/get _kChannel() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/shared_preferences/shared_preferences", {
    "package:shared_preferences/shared_preferences.dart": shared_preferences
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["shared_preferences.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqB8C;AAC1C,YAAI,AAAU,kDAAG;AACW,4BAItB,MAAM,AAAU,gEAAa;AACjC,gBAAO,AAAW,UAAD,IAAI;AAEK,+BAAiC;AAC3D,wBAAmB,AAAW,WAAD;AAAjB,sBAAZ;AACE,iBAAO,AAAI,GAAD;AACqD,YAA/D,AAAc,cAAA,QAAC,AAAI,GAAD,aAAmB,oBAAW,AAAU,UAAA,QAAC,GAAG;;AAEjB,UAA/C,iDAA8B,4CAAE,cAAc;;AAEhD,cAAO;MACT;;;AAayB,YAAH,8BAAoB,AAAiB;IAAK;QAG7C;AAAQ,YAAA,AAAgB,gCAAC,GAAG;IAAC;YAI5B;AAAQ,8BAAA,AAAgB,+BAAC,GAAG;IAAC;WAI/B;AAAQ,6BAAA,AAAgB,+BAAC,GAAG;IAAC;cAIvB;AAAQ,gCAAA,AAAgB,+BAAC,GAAG;IAAC;cAI7B;AAAQ,gCAAA,AAAgB,+BAAC,GAAG;IAAC;kBAInB;AACnB,uCAAO,AAAgB,+BAAC,GAAG;AACxC,UAAI,IAAI,IAAI,SAAa,kBAAL,IAAI;AACa,QAAnC,OAAO,AAAK,AAAe,IAAhB;AACiB,QAA5B,AAAgB,+BAAC,GAAG,EAAI,IAAI;;AAE9B,mCAAO,IAAI;IACb;YAK4B,KAAU;AAAU,6BAAU,QAAQ,GAAG,EAAE,KAAK;IAAC;WAKlD,KAAS;AAAU,6BAAU,OAAO,GAAG,EAAE,KAAK;IAAC;cAO5C,KAAY;AACtC,6BAAU,UAAU,GAAG,EAAE,KAAK;IAAC;cAKL,KAAY;AACtC,6BAAU,UAAU,GAAG,EAAE,KAAK;IAAC;kBAKD,KAAkB;AAChD,6BAAU,cAAc,GAAG,EAAE,KAAK;IAAC;WAGZ;AAAQ,6BAAU,MAAM,GAAG,EAAE;IAAK;gBAE/B,WAAkB,KAAY;AAC/B,mBAA0B,0CACnD,OAAqB,sBAAJ,GAAG;AAEtB,UAAI,AAAM,KAAD,IAAI;AACiB,QAA5B,AAAiB,iCAAO,GAAG;AAC3B,cAAO,AAIF,AACA,yDADa,UAAU,MAAM,kBAClB,QAAS,kCAAW,MAAM;;AAEb,QAA7B,AAAgB,+BAAC,GAAG,EAAI,KAAK;AACN,QAAvB,AAAM,MAAA,QAAC,SAAW,KAAK;AACvB,cAAO,AAIF,AACA,yDADa,AAAe,iBAAV,SAAS,GAAG,MAAM,kBACzB,QAAS,kCAAW,MAAM;;IAE9C;;AAQmB;AAAY,qBAAM,AAAU,qDAAa;MAAS;;;AAGnD;AACQ,QAAxB,AAAiB;AAIjB,cAAO,OAAM,AAAU,qDAAa;MACtC;;gCAIsD;AAMlD,MALF,AAAU,sDAAyB,QAAY;AAC7C,YAAI,AAAW,AAAO,UAAR,YAAW;AACvB,gBAAO,OAAM;;AAEf,cAAO;MACR;IACH;;;IArJyB;;EAAiB;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEtB,4CAAO;;;MACF,8CAAS;;;;;;;;;;;;;MAXhB,4BAAS","file":"shared_preferences.ddc.js"}');
  // Exports:
  return {
    shared_preferences: shared_preferences
  };
});

//# sourceMappingURL=shared_preferences.ddc.js.map
