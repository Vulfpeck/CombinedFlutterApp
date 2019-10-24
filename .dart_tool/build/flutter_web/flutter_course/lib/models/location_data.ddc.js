define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const location_data = Object.create(dart.library);
  const CT = Object.create(null);
  const LocationStorageData_latitude = dart.privateName(location_data, "LocationStorageData.latitude");
  const LocationStorageData_longitude = dart.privateName(location_data, "LocationStorageData.longitude");
  const LocationStorageData_address = dart.privateName(location_data, "LocationStorageData.address");
  location_data.LocationStorageData = class LocationStorageData extends core.Object {
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
    get address() {
      return this[address$];
    }
    set address(value) {
      super.address = value;
    }
  };
  (location_data.LocationStorageData.new = function(opts) {
    let latitude = opts && 'latitude' in opts ? opts.latitude : null;
    let longitude = opts && 'longitude' in opts ? opts.longitude : null;
    let address = opts && 'address' in opts ? opts.address : null;
    this[latitude$] = latitude;
    this[longitude$] = longitude;
    this[address$] = address;
    ;
  }).prototype = location_data.LocationStorageData.prototype;
  dart.addTypeTests(location_data.LocationStorageData);
  const latitude$ = LocationStorageData_latitude;
  const longitude$ = LocationStorageData_longitude;
  const address$ = LocationStorageData_address;
  dart.setLibraryUri(location_data.LocationStorageData, "package:flutter_course/models/location_data.dart");
  dart.setFieldSignature(location_data.LocationStorageData, () => ({
    __proto__: dart.getFields(location_data.LocationStorageData.__proto__),
    latitude: dart.finalFieldType(core.double),
    longitude: dart.finalFieldType(core.double),
    address: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/flutter_course/models/location_data", {
    "package:flutter_course/models/location_data.dart": location_data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["location_data.dart"],"names":[],"mappings":";;;;;;;;;;;IACe;;;;;;IACA;;;;;;IACA;;;;;;;;QAEa;QAAe;QAAgB;IAA/B;IAAe;IAAgB;;EAAS","file":"location_data.ddc.js"}');
  // Exports:
  return {
    models__location_data: location_data
  };
});

//# sourceMappingURL=location_data.ddc.js.map
