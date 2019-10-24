define(['dart_sdk', 'packages/scoped_model/scoped_model', 'packages/flutter_course/scoped-models/connected_products'], function(dart_sdk, packages__scoped_model__scoped_model, packages__flutter_course__scoped_models__connected_products) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const connected_products = packages__flutter_course__scoped_models__connected_products.scoped_models__connected_products;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  const Model_ConnectedProductsModel$36 = class Model_ConnectedProductsModel extends scoped_model.Model {};
  (Model_ConnectedProductsModel$36.new = function() {
    connected_products.ConnectedProductsModel[dart.mixinNew].call(this);
    Model_ConnectedProductsModel$36.__proto__.new.call(this);
  }).prototype = Model_ConnectedProductsModel$36.prototype;
  dart.applyMixin(Model_ConnectedProductsModel$36, connected_products.ConnectedProductsModel);
  const Model_UserModel$36 = class Model_UserModel extends Model_ConnectedProductsModel$36 {};
  (Model_UserModel$36.new = function() {
    connected_products.UserModel[dart.mixinNew].call(this);
    Model_UserModel$36.__proto__.new.call(this);
  }).prototype = Model_UserModel$36.prototype;
  dart.applyMixin(Model_UserModel$36, connected_products.UserModel);
  const Model_ProductsModel$36 = class Model_ProductsModel extends Model_UserModel$36 {};
  (Model_ProductsModel$36.new = function() {
    connected_products.ProductsModel[dart.mixinNew].call(this);
    Model_ProductsModel$36.__proto__.new.call(this);
  }).prototype = Model_ProductsModel$36.prototype;
  dart.applyMixin(Model_ProductsModel$36, connected_products.ProductsModel);
  const Model_UtilityModel$36 = class Model_UtilityModel extends Model_ProductsModel$36 {};
  (Model_UtilityModel$36.new = function() {
    Model_UtilityModel$36.__proto__.new.call(this);
  }).prototype = Model_UtilityModel$36.prototype;
  dart.applyMixin(Model_UtilityModel$36, connected_products.UtilityModel);
  main.MainModel = class MainModel extends Model_UtilityModel$36 {};
  (main.MainModel.new = function() {
    main.MainModel.__proto__.new.call(this);
    ;
  }).prototype = main.MainModel.prototype;
  dart.addTypeTests(main.MainModel);
  dart.setLibraryUri(main.MainModel, "package:flutter_course/scoped-models/main.dart");
  dart.trackLibraries("packages/flutter_course/scoped-models/main", {
    "package:flutter_course/scoped-models/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAKA","file":"main.ddc.js"}');
  // Exports:
  return {
    scoped_models__main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
