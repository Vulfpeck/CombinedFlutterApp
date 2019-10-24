define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_course/widgets/products/product_card', 'packages/scoped_model/scoped_model', 'packages/flutter_course/scoped-models/main', 'packages/flutter_course/models/product'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_course__widgets__products__product_card, packages__scoped_model__scoped_model, packages__flutter_course__scoped_models__main, packages__flutter_course__models__product) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const product_card = packages__flutter_course__widgets__products__product_card.widgets__products__product_card;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const product = packages__flutter_course__models__product.models__product;
  const products = Object.create(dart.library);
  const $length = dartx.length;
  const $_get = dartx._get;
  let BuildContextAndintToProductCard = () => (BuildContextAndintToProductCard = dart.constFn(dart.fnType(product_card.ProductCard, [framework.BuildContext, core.int])))();
  let ScopedModelDescendantOfMainModel = () => (ScopedModelDescendantOfMainModel = dart.constFn(scoped_model.ScopedModelDescendant$(main.MainModel)))();
  let BuildContextAndWidgetAndMainModelToWidget = () => (BuildContextAndWidgetAndMainModelToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, main.MainModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "product",
        [_Location_column]: 33,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/products.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/products.dart"
      });
    },
    get C8() {
      return C8 = dart.constList([], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/products.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 45,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/widgets/products/products.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C8;
  let C7;
  const _buildProductList = dart.privateName(products, "_buildProductList");
  let C11;
  let C10;
  let C9;
  products.Products = class Products extends framework.StatelessWidget {
    [_buildProductList](products) {
      let productCards = null;
      if (dart.notNull(products[$length]) > 0) {
        productCards = new scroll_view.ListView.builder({itemBuilder: dart.fn((context, index) => new product_card.ProductCard.new(products[$_get](index), {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextAndintToProductCard()), itemCount: products[$length], $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
      } else {
        productCards = new container.Container.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7});
      }
      return productCards;
    }
    build(context) {
      core.print("[Products Widget] build()");
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => this[_buildProductList](model.displayedProducts), BuildContextAndWidgetAndMainModelToWidget()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
  };
  (products.Products.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    products.Products.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = products.Products.prototype;
  dart.addTypeTests(products.Products);
  dart.setMethodSignature(products.Products, () => ({
    __proto__: dart.getMethods(products.Products.__proto__),
    [_buildProductList]: dart.fnType(framework.Widget, [core.List$(product.Product)]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(products.Products, "package:flutter_course/widgets/products/products.dart");
  dart.trackLibraries("packages/flutter_course/widgets/products/products", {
    "package:flutter_course/widgets/products/products.dart": products
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["products.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wBASyC;AAC9B;AACP,UAAoB,aAAhB,AAAS,QAAD,aAAU;AAKnB,QAJD,eAAwB,+CACT,SAAc,SAAa,UACpC,iCAAY,AAAQ,QAAA,QAAC,KAAK,0GACnB,AAAS,QAAD;;AAGK,QAA1B,eAAe;;AAEjB,YAAO,aAAY;IACrB;UAG0B;AACU,MAAlC,WAAM;AACN,YAAO,wDAA0C,SAAc,SAAgB,OAAiB,UACtF,wBAAkB,AAAM,KAAD;IAEnC;;;;;;EACF","file":"products.ddc.js"}');
  // Exports:
  return {
    widgets__products__products: products
  };
});

//# sourceMappingURL=products.ddc.js.map
