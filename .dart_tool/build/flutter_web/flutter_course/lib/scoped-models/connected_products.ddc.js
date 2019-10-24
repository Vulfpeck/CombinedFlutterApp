define(['dart_sdk', 'packages/flutter_course/models/product', 'packages/scoped_model/scoped_model', 'packages/flutter_course/models/user', 'packages/mime/mime', 'packages/http/http', 'packages/http_parser/http_parser', 'packages/http/src/base_client', 'packages/flutter_course/models/location_data', 'packages/rxdart/futures', 'packages/flutter_course/models/auth', 'packages/flutter_course/shared/global_config', 'packages/shared_preferences/shared_preferences'], function(dart_sdk, packages__flutter_course__models__product, packages__scoped_model__scoped_model, packages__flutter_course__models__user, packages__mime__mime, packages__http__http, packages__http_parser__http_parser, packages__http__src__base_client, packages__flutter_course__models__location_data, packages__rxdart__futures, packages__flutter_course__models__auth, packages__flutter_course__shared__global_config, packages__shared_preferences__shared_preferences) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const io = dart_sdk.io;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const product$ = packages__flutter_course__models__product.models__product;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const user = packages__flutter_course__models__user.models__user;
  const mime_type = packages__mime__mime.src__mime_type;
  const multipart_request = packages__http__http.src__multipart_request;
  const multipart_file = packages__http__http.src__multipart_file;
  const http = packages__http__http.http;
  const media_type = packages__http_parser__http_parser.src__media_type;
  const response$ = packages__http__src__base_client.src__response;
  const location_data = packages__flutter_course__models__location_data.models__location_data;
  const publish_subject = packages__rxdart__futures.src__subjects__publish_subject;
  const auth = packages__flutter_course__models__auth.models__auth;
  const global_config = packages__flutter_course__shared__global_config.shared__global_config;
  const shared_preferences = packages__shared_preferences__shared_preferences.shared_preferences;
  const connected_products = Object.create(dart.library);
  const $where = dartx.where;
  const $toList = dartx.toList;
  const $indexWhere = dartx.indexWhere;
  const $firstWhere = dartx.firstWhere;
  const $split = dartx.split;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $_set = dartx._set;
  const $removeAt = dartx.removeAt;
  const $containsKey = dartx.containsKey;
  const $forEach = dartx.forEach;
  let JSArrayOfProduct = () => (JSArrayOfProduct = dart.constFn(_interceptors.JSArray$(product$.Product)))();
  let ListOfProduct = () => (ListOfProduct = dart.constFn(core.List$(product$.Product)))();
  let ProductTobool = () => (ProductTobool = dart.constFn(dart.fnType(core.bool, [product$.Product])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOrOfMapOfString$dynamic = () => (FutureOrOfMapOfString$dynamic = dart.constFn(async.FutureOr$(MapOfString$dynamic())))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ResponseTobool = () => (ResponseTobool = dart.constFn(dart.fnType(core.bool, [response$.Response])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let StringAnddynamicToNull = () => (StringAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [core.String, dart.dynamic])))();
  let ResponseToNull = () => (ResponseToNull = dart.constFn(dart.fnType(core.Null, [response$.Response])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let PublishSubjectOfbool = () => (PublishSubjectOfbool = dart.constFn(publish_subject.PublishSubject$(core.bool)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: auth.AuthMode.prototype,
        [_name]: "AuthMode.Login",
        index: 1
      });
    }
  });
  const _products = dart.privateName(connected_products, "_products");
  const _selProductId = dart.privateName(connected_products, "_selProductId");
  const _authenticatedUser = dart.privateName(connected_products, "_authenticatedUser");
  const _isLoading = dart.privateName(connected_products, "_isLoading");
  connected_products.ConnectedProductsModel = class ConnectedProductsModel extends scoped_model.Model {};
  connected_products.ConnectedProductsModel[dart.mixinOn] = Model => class ConnectedProductsModel extends Model {};
  (connected_products.ConnectedProductsModel[dart.mixinNew] = function() {
    this[_products] = JSArrayOfProduct().of([]);
    this[_selProductId] = null;
    this[_authenticatedUser] = null;
    this[_isLoading] = false;
  }).prototype = connected_products.ConnectedProductsModel.prototype;
  dart.addTypeTests(connected_products.ConnectedProductsModel);
  connected_products.ConnectedProductsModel[dart.implements] = () => [scoped_model.Model];
  dart.setLibraryUri(connected_products.ConnectedProductsModel, "package:flutter_course/scoped-models/connected_products.dart");
  dart.setFieldSignature(connected_products.ConnectedProductsModel, () => ({
    __proto__: dart.getFields(connected_products.ConnectedProductsModel.__proto__),
    [_products]: dart.fieldType(core.List$(product$.Product)),
    [_selProductId]: dart.fieldType(core.String),
    [_authenticatedUser]: dart.fieldType(user.User),
    [_isLoading]: dart.fieldType(core.bool)
  }));
  const _showFavorites = dart.privateName(connected_products, "_showFavorites");
  connected_products.ProductsModel = class ProductsModel extends connected_products.ConnectedProductsModel {};
  connected_products.ProductsModel[dart.mixinOn] = ConnectedProductsModel => class ProductsModel extends ConnectedProductsModel {
    get allProducts() {
      return ListOfProduct().from(this[_products]);
    }
    get displayedProducts() {
      if (dart.test(this[_showFavorites])) {
        return this[_products][$where](dart.fn(product => product.isFavorite, ProductTobool()))[$toList]();
      }
      return ListOfProduct().from(this[_products]);
    }
    get selectedProductIndex() {
      return this[_products][$indexWhere](dart.fn(product => product.id == this[_selProductId], ProductTobool()));
    }
    get selectedProductId() {
      return this[_selProductId];
    }
    get selectedProduct() {
      if (this.selectedProductId == null) {
        return null;
      }
      return this[_products][$firstWhere](dart.fn(product => product.id == this[_selProductId], ProductTobool()));
    }
    get displayFavoritesOnly() {
      return this[_showFavorites];
    }
    uploadImage(image, opts) {
      let imagePath = opts && 'imagePath' in opts ? opts.imagePath : null;
      return async.async(MapOfString$dynamic(), (function* uploadImage() {
        let mimeTypeData = mime_type.lookupMimeType(image.path)[$split]("/");
        let imageUploadRequest = new multipart_request.MultipartRequest.new("POST", core.Uri.parse("https://us-central1-flutter-products-7d450.cloudfunctions.net/storeImage/"));
        let file = (yield multipart_file.MultipartFile.fromPath("image", image.path, {contentType: new media_type.MediaType.new(mimeTypeData[$_get](0), mimeTypeData[$_get](1))}));
        imageUploadRequest.files[$add](file);
        if (imagePath != null) {
          imageUploadRequest.fields[$_set]("imagePath", core.Uri.encodeComponent(imagePath));
        }
        imageUploadRequest.headers[$_set]("Authorization", "Bearer " + dart.str(this[_authenticatedUser].token));
        try {
          let streamedResponse = (yield imageUploadRequest.send());
          let response = (yield response$.Response.fromStream(streamedResponse));
          if (response.statusCode !== 200 && response.statusCode !== 201) {
            core.print("Something went wrong");
            core.print(convert.json.decode(response.body));
            return null;
          }
          let responseData = convert.json.decode(response.body);
          return FutureOrOfMapOfString$dynamic()._check(responseData);
        } catch (e) {
          let error = dart.getThrown(e);
          core.print(error);
          return null;
        }
      }).bind(this));
    }
    addProduct(title, description, image, price, locData) {
      return async.async(core.bool, (function* addProduct() {
        this[_isLoading] = true;
        this.notifyListeners();
        let uploadData = (yield this.uploadImage(image));
        if (uploadData == null) {
          core.print("upload failed");
          return false;
        }
        let productData = new (IdentityMapOfString$dynamic()).from(["title", title, "description", description, "price", price, "loc_lat", locData.latitude, "loc_lng", locData.longitude, "loc_address", locData.address, "imagePath", uploadData[$_get]("imagePath"), "imageUrl", uploadData[$_get]("imageUrl"), "userEmail", this[_authenticatedUser].email, "userId", this[_authenticatedUser].id]);
        return http.post("https://flutter-products-7d450.firebaseio.com/products.json?auth=" + dart.str(this[_authenticatedUser].token), {body: convert.json.encode(productData)}).then(core.bool, dart.fn(response => {
          core.print(convert.json.decode(response.body));
          if (response.statusCode !== 200 && response.statusCode !== 201) {
            this[_isLoading] = false;
            this.notifyListeners();
            return false;
          }
          let responseData = MapOfString$dynamic()._check(convert.json.decode(response.body));
          let newProduct = new product$.Product.new({id: core.String._check(responseData[$_get]("name")), title: title, description: description, image: core.String._check(uploadData[$_get]("imageUrl")), imagePath: core.String._check(uploadData[$_get]("imagePath")), price: price, location: locData, userEmail: this[_authenticatedUser].email, userId: this[_authenticatedUser].id});
          this[_products][$add](newProduct);
          this[_isLoading] = false;
          this.notifyListeners();
          return true;
        }, ResponseTobool())).catchError(dart.fn(error => {
          this[_isLoading] = false;
          this.notifyListeners();
          return false;
        }, dynamicTobool()));
      }).bind(this));
    }
    updateProduct(title, description, image, price, locData) {
      return async.async(core.bool, (function* updateProduct() {
        this[_isLoading] = true;
        this.notifyListeners();
        let imageUrl = this.selectedProduct.image;
        let imagePath = this.selectedProduct.imagePath;
        if (image != null) {
          let uploadData = (yield this.uploadImage(image));
          if (uploadData == null) {
            core.print("upload failed");
            return false;
          }
          imageUrl = core.String._check(uploadData[$_get]("imageUrl"));
          imagePath = core.String._check(uploadData[$_get]("imagePath"));
        }
        let updateData = new (IdentityMapOfString$dynamic()).from(["title", title, "description", description, "imageUrl", imageUrl, "imagePath", imagePath, "price", price, "loc_address", locData.address, "loc_lat", locData.latitude, "loc_lng", locData.longitude, "userEmail", this.selectedProduct.userEmail, "userId", this.selectedProduct.userId]);
        try {
          yield http.put("https://flutter-products-7d450.firebaseio.com/products/" + dart.str(this.selectedProduct.id) + ".json?auth=" + dart.str(this[_authenticatedUser].token), {body: convert.json.encode(updateData)});
          this[_isLoading] = false;
          let updatedProduct = new product$.Product.new({id: this.selectedProduct.id, title: title, description: description, image: imageUrl, imagePath: imagePath, price: price, location: locData, userEmail: this.selectedProduct.userEmail, userId: this.selectedProduct.userId});
          this[_products][$_set](this.selectedProductIndex, updatedProduct);
          this.notifyListeners();
          return true;
        } catch (e) {
          let error = dart.getThrown(e);
          this[_isLoading] = false;
          this.notifyListeners();
          return false;
        }
      }).bind(this));
    }
    deleteProduct() {
      this[_isLoading] = true;
      let deletedProductId = this.selectedProduct.id;
      this[_products][$removeAt](this.selectedProductIndex);
      this[_selProductId] = null;
      this.notifyListeners();
      return http.delete("https://flutter-products-7d450.firebaseio.com/products/" + dart.str(deletedProductId) + ".json?auth=" + dart.str(this[_authenticatedUser].token)).then(core.bool, dart.fn(response => {
        this[_isLoading] = false;
        this.notifyListeners();
        return true;
      }, ResponseTobool())).catchError(dart.fn(error => {
        this[_isLoading] = false;
        this.notifyListeners();
        return false;
      }, dynamicTobool()));
    }
    fetchProducts(opts) {
      let onlyForUser = opts && 'onlyForUser' in opts ? opts.onlyForUser : false;
      let clearExisting = opts && 'clearExisting' in opts ? opts.clearExisting : false;
      this[_isLoading] = true;
      if (dart.dtest(clearExisting)) this[_products] = JSArrayOfProduct().of([]);
      this.notifyListeners();
      return http.get("https://flutter-products-7d450.firebaseio.com/products.json?auth=" + dart.str(this[_authenticatedUser].token)).then(core.Null, dart.fn(response => {
        let fetchedProductList = JSArrayOfProduct().of([]);
        let productListData = MapOfString$dynamic()._check(convert.json.decode(response.body));
        if (productListData == null) {
          this[_isLoading] = false;
          this.notifyListeners();
          return;
        }
        productListData[$forEach](dart.fn((productId, productData) => {
          let product = new product$.Product.new({id: productId, title: core.String._check(dart.dsend(productData, '_get', ["title"])), description: core.String._check(dart.dsend(productData, '_get', ["description"])), image: core.String._check(dart.dsend(productData, '_get', ["imageUrl"])), imagePath: core.String._check(dart.dsend(productData, '_get', ["imagePath"])), price: core.double._check(dart.dsend(productData, '_get', ["price"])), location: new location_data.LocationStorageData.new({address: core.String._check(dart.dsend(productData, '_get', ["loc_address"])), latitude: core.double._check(dart.dsend(productData, '_get', ["loc_lat"])), longitude: core.double._check(dart.dsend(productData, '_get', ["loc_lng"]))}), userEmail: core.String._check(dart.dsend(productData, '_get', ["userEmail"])), userId: core.String._check(dart.dsend(productData, '_get', ["userId"])), isFavorite: dart.dsend(productData, '_get', ["wishlistUsers"]) == null ? false : MapOfString$dynamic().as(dart.dsend(productData, '_get', ["wishlistUsers"]))[$containsKey](this[_authenticatedUser].id)});
          fetchedProductList[$add](product);
        }, StringAnddynamicToNull()));
        this[_products] = dart.test(onlyForUser) ? fetchedProductList[$where](dart.fn(product => product.userId == this[_authenticatedUser].id, ProductTobool()))[$toList]() : fetchedProductList;
        this[_isLoading] = false;
        this.notifyListeners();
      }, ResponseToNull())).catchError(dart.fn(error => {
        this[_isLoading] = false;
        this.notifyListeners();
        return;
      }, dynamicToNull()));
    }
    toggleProductFavoriteStatus() {
      return async.async(dart.void, (function* toggleProductFavoriteStatus() {
        let isCurrentlyFavorite = this.selectedProduct.isFavorite;
        let newFavoriteStatus = !dart.test(isCurrentlyFavorite);
        let updatedProduct = new product$.Product.new({id: this.selectedProduct.id, title: this.selectedProduct.title, description: this.selectedProduct.description, price: this.selectedProduct.price, image: this.selectedProduct.image, imagePath: this.selectedProduct.imagePath, location: this.selectedProduct.location, userEmail: this.selectedProduct.userEmail, userId: this.selectedProduct.userId, isFavorite: newFavoriteStatus});
        this[_products][$_set](this.selectedProductIndex, updatedProduct);
        let response = null;
        this.notifyListeners();
        this[_products][$_set](this.selectedProductIndex, updatedProduct);
        if (newFavoriteStatus) {
          response = (yield http.put("https://flutter-products-7d450.firebaseio.com/products/" + dart.str(this.selectedProduct.id) + "/wishlistUsers/" + dart.str(this[_authenticatedUser].id) + ".json?auth=" + dart.str(this[_authenticatedUser].token), {body: convert.json.encode(true)}));
        } else {
          response = (yield http.delete("https://flutter-products-7d450.firebaseio.com/products/" + dart.str(this.selectedProduct.id) + "/wishlistUsers/" + dart.str(this[_authenticatedUser].id) + ".json?auth=" + dart.str(this[_authenticatedUser].token)));
        }
        if (response.statusCode !== 200 && response.statusCode !== 201) {
          updatedProduct = new product$.Product.new({id: this.selectedProduct.id, title: this.selectedProduct.title, description: this.selectedProduct.description, price: this.selectedProduct.price, image: this.selectedProduct.image, imagePath: this.selectedProduct.imagePath, location: this.selectedProduct.location, userEmail: this.selectedProduct.userEmail, userId: this.selectedProduct.userId, isFavorite: !newFavoriteStatus});
          this[_products][$_set](this.selectedProductIndex, updatedProduct);
          this.selectProduct(null);
          this.notifyListeners();
        }
        this.selectProduct(null);
      }).bind(this));
    }
    selectProduct(productId) {
      this[_selProductId] = productId;
      if (productId != null) {
        this.notifyListeners();
      }
    }
    toggleDisplayMode() {
      this[_showFavorites] = !dart.test(this[_showFavorites]);
      this.notifyListeners();
    }
  };
  (connected_products.ProductsModel[dart.mixinNew] = function() {
    this[_showFavorites] = false;
  }).prototype = connected_products.ProductsModel.prototype;
  dart.addTypeTests(connected_products.ProductsModel);
  connected_products.ProductsModel[dart.implements] = () => [connected_products.ConnectedProductsModel];
  dart.setMethodSignature(connected_products.ProductsModel, () => ({
    __proto__: dart.getMethods(connected_products.ProductsModel.__proto__),
    uploadImage: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [io.File], {imagePath: core.String}),
    addProduct: dart.fnType(async.Future$(core.bool), [core.String, core.String, io.File, core.double, location_data.LocationStorageData]),
    updateProduct: dart.fnType(async.Future$(core.bool), [core.String, core.String, io.File, core.double, location_data.LocationStorageData]),
    deleteProduct: dart.fnType(async.Future$(core.bool), []),
    fetchProducts: dart.fnType(async.Future$(core.Null), [], {clearExisting: dart.dynamic, onlyForUser: core.bool}),
    toggleProductFavoriteStatus: dart.fnType(dart.void, []),
    selectProduct: dart.fnType(dart.void, [core.String]),
    toggleDisplayMode: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(connected_products.ProductsModel, () => ({
    __proto__: dart.getGetters(connected_products.ProductsModel.__proto__),
    allProducts: core.List$(product$.Product),
    displayedProducts: core.List$(product$.Product),
    selectedProductIndex: core.int,
    selectedProductId: core.String,
    selectedProduct: product$.Product,
    displayFavoritesOnly: core.bool
  }));
  dart.setLibraryUri(connected_products.ProductsModel, "package:flutter_course/scoped-models/connected_products.dart");
  dart.setFieldSignature(connected_products.ProductsModel, () => ({
    __proto__: dart.getFields(connected_products.ProductsModel.__proto__),
    [_showFavorites]: dart.fieldType(core.bool)
  }));
  const _authTimer = dart.privateName(connected_products, "_authTimer");
  const _userSubject = dart.privateName(connected_products, "_userSubject");
  const _name = dart.privateName(auth, "_name");
  let C0;
  connected_products.UserModel = class UserModel extends connected_products.ConnectedProductsModel {};
  connected_products.UserModel[dart.mixinOn] = ConnectedProductsModel => class UserModel extends ConnectedProductsModel {
    get user() {
      return this[_authenticatedUser];
    }
    get userSubject() {
      return this[_userSubject];
    }
    authenticate(email, password, mode) {
      if (mode === void 0) mode = C0 || CT.C0;
      return async.async(MapOfString$dynamic(), (function* authenticate() {
        this[_isLoading] = true;
        this.notifyListeners();
        let authData = new (IdentityMapOfString$dynamic()).from(["email", email, "password", password, "returnSecureToken", true]);
        let response = null;
        if (dart.equals(mode, auth.AuthMode.Login)) {
          response = (yield http.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + dart.str(global_config.firebaseKey), {body: convert.json.encode(authData), headers: new (IdentityMapOfString$String()).from(["Content-Type", "application/json"])}));
        } else {
          response = (yield http.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" + dart.str(global_config.firebaseKey), {body: convert.json.encode(authData), headers: new (IdentityMapOfString$String()).from(["Content-Type", "application/json"])}));
        }
        let responseData = MapOfString$dynamic()._check(convert.json.decode(response.body));
        let hasError = true;
        let message = null;
        if (dart.test(responseData[$containsKey]("idToken"))) {
          core.print("here");
          hasError = false;
          message = "Authentication Succeeded";
          this[_authenticatedUser] = new user.User.new({id: core.String._check(responseData[$_get]("localId")), email: email, token: core.String._check(responseData[$_get]("idToken"))});
          core.print("here again");
          try {
            this.setAuthTimeout(core.int.parse(core.String._check(responseData[$_get]("expiresIn"))));
            this[_userSubject].add(true);
            let prefs = (yield shared_preferences.SharedPreferences.getInstance());
            let now = new core.DateTime.now();
            let expiryTime = now.add(new core.Duration.new({seconds: core.int.parse(core.String._check(responseData[$_get]("expiresIn")))}));
            prefs.setString("token", core.String._check(responseData[$_get]("idToken")));
            prefs.setString("userEmail", email);
            prefs.setString("userId", core.String._check(responseData[$_get]("localId")));
            prefs.setString("expiryTime", expiryTime.toIso8601String());
            prefs.get("userEmail");
          } catch (e$) {
            let e = dart.getThrown(e$);
            core.print(e);
            this[_isLoading] = false;
            this.notifyListeners();
            return new (IdentityMapOfString$dynamic()).from(["success", false]);
          }
        } else if (dart.equals(dart.dsend(responseData[$_get]("error"), '_get', ["message"]), "EMAIL_EXISTS")) {
          message = "This email not found";
        } else if (dart.equals(dart.dsend(responseData[$_get]("error"), '_get', ["message"]), "INVALID_PASSWORD")) {
          message = "Incorrect password";
        } else if (dart.equals(dart.dsend(responseData[$_get]("error"), '_get', ["message"]), "EMAIL_EXISTS")) {
          message = "This email already exists";
        } else {
          message = "Error occured";
        }
        let result = new (IdentityMapOfString$dynamic()).from(["success", !hasError, "message", message]);
        core.print("**** returning to funciton");
        this[_isLoading] = false;
        this.notifyListeners();
        return result;
      }).bind(this));
    }
    autoAuthenticate() {
      return async.async(dart.void, (function* autoAuthenticate() {
        this.notifyListeners();
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        let token = prefs.getString("token");
        let expiryTimeString = prefs.getString("expiryTime");
        if (token != null) {
          let now = new core.DateTime.now();
          let parsedExpiryTime = core.DateTime.parse(expiryTimeString);
          if (dart.test(parsedExpiryTime.isBefore(now))) {
            this[_authenticatedUser] = null;
            this.notifyListeners();
            return;
          }
          let userEmail = prefs.getString("userEmail");
          let userId = prefs.getString("userId");
          let tokenLifeSpan = parsedExpiryTime.difference(now).inSeconds;
          this[_authenticatedUser] = new user.User.new({id: userId, email: userEmail, token: token});
          this[_userSubject].add(true);
          this.setAuthTimeout(tokenLifeSpan);
          this.notifyListeners();
        }
      }).bind(this));
    }
    logout() {
      return async.async(dart.void, (function* logout() {
        core.print("logout");
        this[_authenticatedUser] = null;
        this[_authTimer].cancel();
        let prefs = (yield shared_preferences.SharedPreferences.getInstance());
        prefs.remove("token");
        prefs.remove("userEmail");
        this[_selProductId] = null;
        prefs.remove("userId");
        this[_userSubject].add(false);
      }).bind(this));
    }
    setAuthTimeout(time) {
      this[_authTimer] = async.Timer.new(new core.Duration.new({minutes: time}), dart.fn(() => {
        this.logout();
        this[_userSubject].add(false);
      }, VoidToNull()));
    }
  };
  (connected_products.UserModel[dart.mixinNew] = function() {
    this[_authTimer] = null;
    this[_userSubject] = PublishSubjectOfbool().new();
  }).prototype = connected_products.UserModel.prototype;
  dart.addTypeTests(connected_products.UserModel);
  connected_products.UserModel[dart.implements] = () => [connected_products.ConnectedProductsModel];
  dart.setMethodSignature(connected_products.UserModel, () => ({
    __proto__: dart.getMethods(connected_products.UserModel.__proto__),
    authenticate: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.String, core.String], [auth.AuthMode]),
    autoAuthenticate: dart.fnType(dart.void, []),
    logout: dart.fnType(dart.void, []),
    setAuthTimeout: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(connected_products.UserModel, () => ({
    __proto__: dart.getGetters(connected_products.UserModel.__proto__),
    user: user.User,
    userSubject: publish_subject.PublishSubject$(core.bool)
  }));
  dart.setLibraryUri(connected_products.UserModel, "package:flutter_course/scoped-models/connected_products.dart");
  dart.setFieldSignature(connected_products.UserModel, () => ({
    __proto__: dart.getFields(connected_products.UserModel.__proto__),
    [_authTimer]: dart.fieldType(async.Timer),
    [_userSubject]: dart.fieldType(publish_subject.PublishSubject$(core.bool))
  }));
  connected_products.UtilityModel = class UtilityModel extends connected_products.ConnectedProductsModel {};
  connected_products.UtilityModel[dart.mixinOn] = ConnectedProductsModel => class UtilityModel extends ConnectedProductsModel {
    get isLoading() {
      return this[_isLoading];
    }
  };
  dart.addTypeTests(connected_products.UtilityModel);
  connected_products.UtilityModel[dart.implements] = () => [connected_products.ConnectedProductsModel];
  dart.setGetterSignature(connected_products.UtilityModel, () => ({
    __proto__: dart.getGetters(connected_products.UtilityModel.__proto__),
    isLoading: core.bool
  }));
  dart.setLibraryUri(connected_products.UtilityModel, "package:flutter_course/scoped-models/connected_products.dart");
  dart.trackLibraries("packages/flutter_course/scoped-models/connected_products", {
    "package:flutter_course/scoped-models/connected_products.dart": connected_products
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["connected_products.dart"],"names":[],"mappings":"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","file":"connected_products.ddc.js"}');
  // Exports:
  return {
    scoped_models__connected_products: connected_products
  };
});

//# sourceMappingURL=connected_products.ddc.js.map
