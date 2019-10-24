define(['dart_sdk', 'packages/flutter_course/models/location_data'], function(dart_sdk, packages__flutter_course__models__location_data) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const location_data = packages__flutter_course__models__location_data.models__location_data;
  const product = Object.create(dart.library);
  const CT = Object.create(null);
  const Product_id = dart.privateName(product, "Product.id");
  const Product_title = dart.privateName(product, "Product.title");
  const Product_description = dart.privateName(product, "Product.description");
  const Product_price = dart.privateName(product, "Product.price");
  const Product_image = dart.privateName(product, "Product.image");
  const Product_imagePath = dart.privateName(product, "Product.imagePath");
  const Product_isFavorite = dart.privateName(product, "Product.isFavorite");
  const Product_userEmail = dart.privateName(product, "Product.userEmail");
  const Product_userId = dart.privateName(product, "Product.userId");
  const Product_location = dart.privateName(product, "Product.location");
  product.Product = class Product extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get price() {
      return this[price$];
    }
    set price(value) {
      super.price = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get imagePath() {
      return this[imagePath$];
    }
    set imagePath(value) {
      super.imagePath = value;
    }
    get isFavorite() {
      return this[isFavorite$];
    }
    set isFavorite(value) {
      super.isFavorite = value;
    }
    get userEmail() {
      return this[userEmail$];
    }
    set userEmail(value) {
      super.userEmail = value;
    }
    get userId() {
      return this[userId$];
    }
    set userId(value) {
      super.userId = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
  };
  (product.Product.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let price = opts && 'price' in opts ? opts.price : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let imagePath = opts && 'imagePath' in opts ? opts.imagePath : null;
    let userEmail = opts && 'userEmail' in opts ? opts.userEmail : null;
    let userId = opts && 'userId' in opts ? opts.userId : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let isFavorite = opts && 'isFavorite' in opts ? opts.isFavorite : false;
    this[id$] = id;
    this[title$] = title;
    this[description$] = description;
    this[price$] = price;
    this[image$] = image;
    this[imagePath$] = imagePath;
    this[userEmail$] = userEmail;
    this[userId$] = userId;
    this[location$] = location;
    this[isFavorite$] = isFavorite;
    ;
  }).prototype = product.Product.prototype;
  dart.addTypeTests(product.Product);
  const id$ = Product_id;
  const title$ = Product_title;
  const description$ = Product_description;
  const price$ = Product_price;
  const image$ = Product_image;
  const imagePath$ = Product_imagePath;
  const isFavorite$ = Product_isFavorite;
  const userEmail$ = Product_userEmail;
  const userId$ = Product_userId;
  const location$ = Product_location;
  dart.setLibraryUri(product.Product, "package:flutter_course/models/product.dart");
  dart.setFieldSignature(product.Product, () => ({
    __proto__: dart.getFields(product.Product.__proto__),
    id: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    price: dart.finalFieldType(core.double),
    image: dart.finalFieldType(core.String),
    imagePath: dart.finalFieldType(core.String),
    isFavorite: dart.finalFieldType(core.bool),
    userEmail: dart.finalFieldType(core.String),
    userId: dart.finalFieldType(core.String),
    location: dart.finalFieldType(location_data.LocationStorageData)
  }));
  dart.trackLibraries("packages/flutter_course/models/product", {
    "package:flutter_course/models/product.dart": product
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;IAIe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACF;;;;;;IACE;;;;;;IACA;;;;;;IACa;;;;;;;;QAGN;QACD;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACV;IATW;IACD;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACV;;EAAoB","file":"product.ddc.js"}');
  // Exports:
  return {
    models__product: product
  };
});

//# sourceMappingURL=product.ddc.js.map
