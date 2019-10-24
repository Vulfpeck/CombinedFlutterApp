define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const samplers = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/rxdart/samplers", {
    "package:rxdart/samplers.dart": samplers
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"samplers.ddc.js"}');
  // Exports:
  return {
    samplers: samplers
  };
});

//# sourceMappingURL=samplers.ddc.js.map
