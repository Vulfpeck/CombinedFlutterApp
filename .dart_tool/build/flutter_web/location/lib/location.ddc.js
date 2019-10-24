define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const location = Object.create(dart.library);
  const $_get = dartx._get;
  let MapOfString$double = () => (MapOfString$double = dart.constFn(core.Map$(core.String, core.double)))();
  let dynamicToLocationData = () => (dynamicToLocationData = dart.constFn(dart.fnType(location.LocationData, [dart.dynamic])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
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
        [MethodChannel_name]: "lyokone/location"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform_channel.EventChannel.prototype,
        [EventChannel__binaryMessenger]: null,
        [EventChannel_codec]: C1 || CT.C1,
        [EventChannel_name]: "lyokone/locationstream"
      });
    }
  });
  const LocationData_latitude = dart.privateName(location, "LocationData.latitude");
  const LocationData_longitude = dart.privateName(location, "LocationData.longitude");
  const LocationData_accuracy = dart.privateName(location, "LocationData.accuracy");
  const LocationData_altitude = dart.privateName(location, "LocationData.altitude");
  const LocationData_speed = dart.privateName(location, "LocationData.speed");
  const LocationData_speedAccuracy = dart.privateName(location, "LocationData.speedAccuracy");
  location.LocationData = class LocationData extends core.Object {
    get latitude() {
      return this[latitude$];
    }
    set latitude(value) {
      super.latitude = value;
    }
    get longitude() {
      return this[longitude$];
    }
    set longitude(value) {
      super.longitude = value;
    }
    get accuracy() {
      return this[accuracy$];
    }
    set accuracy(value) {
      super.accuracy = value;
    }
    get altitude() {
      return this[altitude$];
    }
    set altitude(value) {
      super.altitude = value;
    }
    get speed() {
      return this[speed$];
    }
    set speed(value) {
      super.speed = value;
    }
    get speedAccuracy() {
      return this[speedAccuracy$];
    }
    set speedAccuracy(value) {
      super.speedAccuracy = value;
    }
    static fromMap(dataMap) {
      return new location.LocationData.__(dataMap[$_get]("latitude"), dataMap[$_get]("longitude"), dataMap[$_get]("accuracy"), dataMap[$_get]("altitude"), dataMap[$_get]("speed"), dataMap[$_get]("speed_accuracy"));
    }
  };
  (location.LocationData.__ = function(latitude, longitude, accuracy, altitude, speed, speedAccuracy) {
    this[latitude$] = latitude;
    this[longitude$] = longitude;
    this[accuracy$] = accuracy;
    this[altitude$] = altitude;
    this[speed$] = speed;
    this[speedAccuracy$] = speedAccuracy;
    ;
  }).prototype = location.LocationData.prototype;
  dart.addTypeTests(location.LocationData);
  const latitude$ = LocationData_latitude;
  const longitude$ = LocationData_longitude;
  const accuracy$ = LocationData_accuracy;
  const altitude$ = LocationData_altitude;
  const speed$ = LocationData_speed;
  const speedAccuracy$ = LocationData_speedAccuracy;
  dart.setLibraryUri(location.LocationData, "package:location/location.dart");
  dart.setFieldSignature(location.LocationData, () => ({
    __proto__: dart.getFields(location.LocationData.__proto__),
    latitude: dart.finalFieldType(core.double),
    longitude: dart.finalFieldType(core.double),
    accuracy: dart.finalFieldType(core.double),
    altitude: dart.finalFieldType(core.double),
    speed: dart.finalFieldType(core.double),
    speedAccuracy: dart.finalFieldType(core.double)
  }));
  const _onLocationChanged = dart.privateName(location, "_onLocationChanged");
  location.Location = class Location extends core.Object {
    getLocation() {
      return location._channel.invokeMethod(dart.dynamic, "getLocation").then(location.LocationData, dart.fn(result => location.LocationData.fromMap(MapOfString$double()._check(dart.dgsend(result, [core.String, core.double], 'cast', []))), dynamicToLocationData()));
    }
    hasPermission() {
      return location._channel.invokeMethod(dart.dynamic, "hasPermission").then(core.bool, dart.fn(result => dart.equals(result, 1), dynamicTobool()));
    }
    onLocationChanged() {
      if (this[_onLocationChanged] == null) {
        this[_onLocationChanged] = location._stream.receiveBroadcastStream().map(location.LocationData, dart.fn(element => location.LocationData.fromMap(MapOfString$double()._check(dart.dgsend(element, [core.String, core.double], 'cast', []))), dynamicToLocationData()));
      }
      return this[_onLocationChanged];
    }
  };
  (location.Location.new = function() {
    this[_onLocationChanged] = null;
    ;
  }).prototype = location.Location.prototype;
  dart.addTypeTests(location.Location);
  dart.setMethodSignature(location.Location, () => ({
    __proto__: dart.getMethods(location.Location.__proto__),
    getLocation: dart.fnType(async.Future$(location.LocationData), []),
    hasPermission: dart.fnType(async.Future$(core.bool), []),
    onLocationChanged: dart.fnType(async.Stream$(location.LocationData), [])
  }));
  dart.setLibraryUri(location.Location, "package:location/location.dart");
  dart.setFieldSignature(location.Location, () => ({
    __proto__: dart.getFields(location.Location.__proto__),
    [_onLocationChanged]: dart.fieldType(async.Stream$(location.LocationData))
  }));
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  const EventChannel__binaryMessenger = dart.privateName(platform_channel, "EventChannel._binaryMessenger");
  const EventChannel_codec = dart.privateName(platform_channel, "EventChannel.codec");
  const EventChannel_name = dart.privateName(platform_channel, "EventChannel.name");
  let C3;
  dart.defineLazy(location, {
    /*location._channel*/get _channel() {
      return C0 || CT.C0;
    },
    /*location._stream*/get _stream() {
      return C3 || CT.C3;
    }
  });
  dart.trackLibraries("packages/location/location", {
    "package:location/location.dart": location
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["location.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;mBAWoC;AAC/C,YAAoB,8BAClB,AAAO,OAAA,QAAC,aACR,AAAO,OAAA,QAAC,cACR,AAAO,OAAA,QAAC,aACR,AAAO,OAAA,QAAC,aACR,AAAO,OAAA,QAAC,UACR,AAAO,OAAA,QAAC;IAEZ;;uCAjBO,UACA,WACA,UACA,UACA,OACA;IALA;IACA;IACA;IACA;IACA;IACA;;EACN;;;;;;;;;;;;;;;;;;;;;AAuBqC,YAAA,AACjC,AACA,8CADa,2CACR,QAAC,UAAwB,0DAAe,YAAP,MAAM;IAAyB;;AAItE,YAAA,AAAS,AAA8B,8CAAjB,iCAAsB,QAAC,UAAkB,YAAP,MAAM,EAAI;IAAE;;AAItE,UAAI,AAAmB,4BAAG;AAE8C,QADtE,2BAAqB,AAAQ,AAAyB,qEAClD,QAAC,WAAyB,0DAAgB,YAAR,OAAO;;AAE/C,YAAO;IACT;;;IApBqB;;EAqBvB;;;;;;;;;;;;;;;;;;;;;;;;;MAzBoB,iBAAQ;;;MACT,gBAAO","file":"location.ddc.js"}');
  // Exports:
  return {
    location: location
  };
});

//# sourceMappingURL=location.ddc.js.map
