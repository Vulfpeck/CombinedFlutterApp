define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const global_config = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(global_config, {
    /*global_config.firebaseKey*/get firebaseKey() {
      return "AIzaSyBpKHz9k2mGLsmW45p4b0k7HoAe9Rk3_eE";
    }
  });
  dart.trackLibraries("packages/flutter_course/shared/global_config", {
    "package:flutter_course/shared/global_config.dart": global_config
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["global_config.dart"],"names":[],"mappings":";;;;;;;;MAAa,yBAAW","file":"global_config.ddc.js"}');
  // Exports:
  return {
    shared__global_config: global_config
  };
});

//# sourceMappingURL=global_config.ddc.js.map
