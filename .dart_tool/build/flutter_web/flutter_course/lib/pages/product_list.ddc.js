define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_course/scoped-models/main', 'packages/flutter/material', 'packages/flutter_course/pages/product_edit', 'packages/scoped_model/scoped_model', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_course__scoped_models__main, packages__flutter__material, packages__flutter_course__pages__product_edit, packages__scoped_model__scoped_model, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const dismissible = packages__flutter__src__widgets__actions.src__widgets__dismissible;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const page = packages__flutter__material.src__material__page;
  const colors = packages__flutter__material.src__material__colors;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const divider = packages__flutter__material.src__material__divider;
  const product_edit = packages__flutter_course__pages__product_edit.pages__product_edit;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const product_list = Object.create(dart.library);
  const $_get = dartx._get;
  const $toString = dartx.toString;
  const $length = dartx.length;
  let BuildContextToProductEditPage = () => (BuildContextToProductEditPage = dart.constFn(dart.fnType(product_edit.ProductEditPage, [framework.BuildContext])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ScopedModelDescendantOfMainModel = () => (ScopedModelDescendantOfMainModel = dart.constFn(scoped_model.ScopedModelDescendant$(main.MainModel)))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))();
  let DismissDirectionToNull = () => (DismissDirectionToNull = dart.constFn(dart.fnType(core.Null, [dismissible.DismissDirection])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndintToDismissible = () => (BuildContextAndintToDismissible = dart.constFn(dart.fnType(dismissible.Dismissible, [framework.BuildContext, core.int])))();
  let BuildContextAndWidgetAndMainModelToListView = () => (BuildContextAndWidgetAndMainModelToListView = dart.constFn(dart.fnType(scroll_view.ListView, [framework.BuildContext, framework.Widget, main.MainModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 24,
        [_Location_line]: 27,
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
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C4() {
      return C4 = dart.constList([], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 7,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 37,
        [_Location_line]: 55,
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
        [_Location_column]: 27,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundImage",
        [_Location_column]: 23,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 58,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 78,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 21,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 21,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 21,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onDismissed",
        [_Location_column]: 15,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 15,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/product_list.dart"
      });
    }
  });
  const ProductListPage_model = dart.privateName(product_list, "ProductListPage.model");
  product_list.ProductListPage = class ProductListPage extends framework.StatefulWidget {
    get model() {
      return this[model$];
    }
    set model(value) {
      super.model = value;
    }
    createState() {
      return new product_list._ProductListPageState.new();
    }
  };
  (product_list.ProductListPage.new = function(model, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model$] = model;
    product_list.ProductListPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = product_list.ProductListPage.prototype;
  dart.addTypeTests(product_list.ProductListPage);
  const model$ = ProductListPage_model;
  dart.setMethodSignature(product_list.ProductListPage, () => ({
    __proto__: dart.getMethods(product_list.ProductListPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(product_list.ProductListPage, "package:flutter_course/pages/product_list.dart");
  dart.setFieldSignature(product_list.ProductListPage, () => ({
    __proto__: dart.getFields(product_list.ProductListPage.__proto__),
    model: dart.finalFieldType(main.MainModel)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C4;
  let C3;
  let C7;
  let C8;
  let C6;
  let C5;
  const _buildEditButton = dart.privateName(product_list, "_buildEditButton");
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C16;
  let C15;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C25;
  let C26;
  let C22;
  let C21;
  let C27;
  let C30;
  let C29;
  let C28;
  let C33;
  let C34;
  let C35;
  let C36;
  let C32;
  let C31;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C42;
  let C41;
  product_list._ProductListPageState = class _ProductListPageState extends framework.State$(product_list.ProductListPage) {
    initState() {
      this.widget.model.fetchProducts({onlyForUser: true, clearExisting: true});
      super.initState();
    }
    [_buildEditButton](context, index, model) {
      return new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.edit, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: dart.fn(() => {
          model.selectProduct(model.allProducts[$_get](index).id);
          navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new product_edit.ProductEditPage.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), BuildContextToProductEditPage())})).then(dart.void, dart.fn(_ => model.selectProduct(null), dynamicTovoid()));
        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
    build(context) {
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => new scroll_view.ListView.builder({itemBuilder: dart.fn((context, index) => new dismissible.Dismissible.new({key: new (ValueKeyOfString()).new(model.allProducts[$_get](index).title), onDismissed: dart.fn(direction => {
              if (dart.equals(direction, dismissible.DismissDirection.endToStart) || dart.equals(direction, dismissible.DismissDirection.startToEnd)) {
                model.selectProduct(model.allProducts[$_get](index).id);
                model.deleteProduct();
              }
            }, DismissDirectionToNull()), background: new container.Container.new({color: colors.Colors.red, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), child: new basic.Column.new({children: JSArrayOfWidget().of([new list_tile.ListTile.new({leading: new circle_avatar.CircleAvatar.new({backgroundImage: new _network_image_web.NetworkImage.new(model.allProducts[$_get](index).image), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), title: new text.Text.new(model.allProducts[$_get](index).title, {$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), subtitle: new text.Text.new("$" + dart.toString(model.allProducts[$_get](index).price), {$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), trailing: this[_buildEditButton](context, index, model), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), BuildContextAndintToDismissible()), itemCount: model.allProducts[$length], $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), BuildContextAndWidgetAndMainModelToListView()), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
  };
  (product_list._ProductListPageState.new = function() {
    product_list._ProductListPageState.__proto__.new.call(this);
    ;
  }).prototype = product_list._ProductListPageState.prototype;
  dart.addTypeTests(product_list._ProductListPageState);
  dart.setMethodSignature(product_list._ProductListPageState, () => ({
    __proto__: dart.getMethods(product_list._ProductListPageState.__proto__),
    [_buildEditButton]: dart.fnType(framework.Widget, [framework.BuildContext, core.int, main.MainModel]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(product_list._ProductListPageState, "package:flutter_course/pages/product_list.dart");
  dart.trackLibraries("packages/flutter_course/pages/product_list", {
    "package:flutter_course/pages/product_list.dart": product_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["product_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOkB;;;;;;;AAMd,YAAO;IACT;;+CALqB;;;AAArB;;EAA2B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWyC,MAAlE,AAAO,AAAM,8CAA2B,qBAAqB;AAC5C,MAAX;IACR;uBAEqC,SAAa,OAAiB;AACjE,YAAO,uCACC,kBAAW,qFACN;AACuC,UAAhD,AAAM,KAAD,eAAe,AAAM,AAAW,AAAQ,KAApB,oBAAa,KAAK;AAOH,UAN9B,AAAY,AAMpB,uBANW,OAAO,qBAClB,yCACW,QAAc,WACd,iJAGN,QAAC,KAAM,AAAM,KAAD,eAAe;;IAGxC;UAG0B;AACxB,YAAO,wDACI,SAAc,SAAgB,OAAiB,UACtC,+CACD,SAAc,SAAa,UAC/B,sCACA,6BAAI,AAAM,AAAW,AAAQ,KAApB,oBAAa,KAAK,uBACnB,QAAkB;AAC7B,kBAAc,YAAV,SAAS,EAAqB,4CAAwB,YAAV,SAAS,EAAqB;AAC5B,gBAAhD,AAAM,KAAD,eAAe,AAAM,AAAW,AAAQ,KAApB,oBAAa,KAAK;AACtB,gBAArB,AAAM,KAAD;;sDAGG,oCAAwB,iFAC7B,gCACa,sBAChB,qCACW,qDAEH,wCAAa,AAAM,AAAW,AAAQ,KAApB,oBAAa,KAAK,0EAEnC,kBAAK,AAAM,AAAW,AAAQ,KAApB,oBAAa,KAAK,6EAE/B,kBAAK,AAAgD,MAAZ,cAA/B,AAAM,AAAW,AAAQ,KAApB,oBAAa,KAAK,8EAC3B,uBAAiB,OAAO,EAAE,KAAK,EAAE,KAAK,4DAElD,qPAKG,AAAM,AAAY,KAAb;IAIxB;;;;;EACF","file":"product_list.ddc.js"}');
  // Exports:
  return {
    pages__product_list: product_list
  };
});

//# sourceMappingURL=product_list.ddc.js.map
