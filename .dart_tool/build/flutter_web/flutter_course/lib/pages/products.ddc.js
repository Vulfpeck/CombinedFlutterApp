define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter_course/scoped-models/main', 'packages/flutter/material', 'packages/flutter_course/widgets/ui_elements/logout_list_tile', 'packages/scoped_model/scoped_model', 'packages/flutter_course/widgets/products/products'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter_course__scoped_models__main, packages__flutter__material, packages__flutter_course__widgets__ui_elements__logout_list_tile, packages__scoped_model__scoped_model, packages__flutter_course__widgets__products__products) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const main = packages__flutter_course__scoped_models__main.scoped_models__main;
  const drawer = packages__flutter__material.src__material__drawer;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const icons = packages__flutter__material.src__material__icons;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const refresh_indicator = packages__flutter__material.src__material__refresh_indicator;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const logout_list_tile = packages__flutter_course__widgets__ui_elements__logout_list_tile.widgets__ui_elements__logout_list_tile;
  const scoped_model = packages__scoped_model__scoped_model.scoped_model;
  const products = packages__flutter_course__widgets__products__products.widgets__products__products;
  const products$ = Object.create(dart.library);
  const $length = dartx.length;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let ScopedModelDescendantOfMainModel = () => (ScopedModelDescendantOfMainModel = dart.constFn(scoped_model.ScopedModelDescendant$(main.MainModel)))();
  let BuildContextAndWidgetAndMainModelToRefreshIndicator = () => (BuildContextAndWidgetAndMainModelToRefreshIndicator = dart.constFn(dart.fnType(refresh_indicator.RefreshIndicator, [framework.BuildContext, framework.Widget, main.MainModel])))();
  let BuildContextAndWidgetAndMainModelToIconButton = () => (BuildContextAndWidgetAndMainModelToIconButton = dart.constFn(dart.fnType(icon_button.IconButton, [framework.BuildContext, framework.Widget, main.MainModel])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 32,
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
        [_Location_column]: 20,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "automaticallyImplyLeading",
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 32,
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
        [_Location_column]: 11,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 33,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C19() {
      return C19 = dart.constList([], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 28,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onRefresh",
        [_Location_column]: 33,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 65,
        [_Location_line]: 56,
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
        [_Location_column]: 16,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 49,
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
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 13,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_course/pages/products.dart"
      });
    }
  });
  const ProductsPage_model = dart.privateName(products$, "ProductsPage.model");
  products$.ProductsPage = class ProductsPage extends framework.StatefulWidget {
    get model() {
      return this[model$];
    }
    set model(value) {
      super.model = value;
    }
    createState() {
      return new products$._ProductsPageState.new();
    }
  };
  (products$.ProductsPage.new = function(model, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[model$] = model;
    products$.ProductsPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = products$.ProductsPage.prototype;
  dart.addTypeTests(products$.ProductsPage);
  const model$ = ProductsPage_model;
  dart.setMethodSignature(products$.ProductsPage, () => ({
    __proto__: dart.getMethods(products$.ProductsPage.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(products$.ProductsPage, "package:flutter_course/pages/products.dart");
  dart.setFieldSignature(products$.ProductsPage, () => ({
    __proto__: dart.getFields(products$.ProductsPage.__proto__),
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
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  let C12;
  let C11;
  let C10;
  let C15;
  let C16;
  let C17;
  let C14;
  let C13;
  let C19;
  let C18;
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  const _buildSideDrawer = dart.privateName(products$, "_buildSideDrawer");
  let C28;
  let C27;
  let C26;
  let C31;
  let C30;
  let C29;
  let C32;
  let C33;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C42;
  let C41;
  const _buildProductsList = dart.privateName(products$, "_buildProductsList");
  let C46;
  let C45;
  let C44;
  let C49;
  let C48;
  let C47;
  let C52;
  let C53;
  let C51;
  let C50;
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C65;
  let C62;
  let C61;
  products$._ProductsPageState = class _ProductsPageState extends framework.State$(products$.ProductsPage) {
    initState() {
      this.widget.model.fetchProducts();
      super.initState();
    }
    [_buildSideDrawer](context) {
      return new drawer.Drawer.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new app_bar.AppBar.new({automaticallyImplyLeading: false, title: new text.Text.new("Choose", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.edit, {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), title: new text.Text.new("Manage Products", {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), onTap: dart.fn(() => {
                navigator.Navigator.pushReplacementNamed(core.Object, core.Object, context, "/admin");
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new logout_list_tile.LogoutListTile.new({$creationLocationd_0dea112b090073317d4: C18 || CT.C18})]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
    [_buildProductsList]() {
      return new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => {
          let content = new basic.Center.new({child: new text.Text.new("No Products Found!", {$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
          if (dart.notNull(model.displayedProducts[$length]) > 0 && !dart.test(model.isLoading)) {
            content = new products.Products.new({$creationLocationd_0dea112b090073317d4: C32 || CT.C32});
          } else if (dart.test(model.isLoading)) {
            content = new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34});
          }
          return new refresh_indicator.RefreshIndicator.new({onRefresh: dart.bind(model, 'fetchProducts'), child: content, $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
        }, BuildContextAndWidgetAndMainModelToRefreshIndicator()), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
    build(context) {
      return new scaffold.Scaffold.new({drawer: this[_buildSideDrawer](context), appBar: new app_bar.AppBar.new({title: new text.Text.new("EasyList", {$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), actions: JSArrayOfWidget().of([new (ScopedModelDescendantOfMainModel()).new({builder: dart.fn((context, child, model) => new icon_button.IconButton.new({icon: new icon.Icon.new(dart.test(model.displayFavoritesOnly) ? icons.Icons.favorite : icons.Icons.favorite_border, {$creationLocationd_0dea112b090073317d4: C47 || CT.C47}), onPressed: dart.fn(() => {
                  model.toggleDisplayMode();
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), BuildContextAndWidgetAndMainModelToIconButton()), $creationLocationd_0dea112b090073317d4: C54 || CT.C54})]), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), body: this[_buildProductsList](), $creationLocationd_0dea112b090073317d4: C61 || CT.C61});
    }
  };
  (products$._ProductsPageState.new = function() {
    products$._ProductsPageState.__proto__.new.call(this);
    ;
  }).prototype = products$._ProductsPageState.prototype;
  dart.addTypeTests(products$._ProductsPageState);
  dart.setMethodSignature(products$._ProductsPageState, () => ({
    __proto__: dart.getMethods(products$._ProductsPageState.__proto__),
    [_buildSideDrawer]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildProductsList]: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(products$._ProductsPageState, "package:flutter_course/pages/products.dart");
  dart.trackLibraries("packages/flutter_course/pages/products", {
    "package:flutter_course/pages/products.dart": products$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["products.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQkB;;;;;;;AAMd,YAAO;IACT;;yCALkB;;;AAAlB;;EAAwB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWM,MAA5B,AAAO,AAAM;AACI,MAAX;IACR;uBAEqC;AACnC,YAAO,+BACE,gCACa,sBAChB,mDAC6B,cACpB,kBAAK,yHAEd,qCACW,kBAAW,iFACb,kBAAK,oFACL;AAC4C,gBAAvC,mEAAqB,OAAO,EAAE;yFAG5C;IAIR;;AAGE,YAAO,wDACI,SAAc,SAAgB,OAAiB;AAC/C,wBAAU,6BAAc,kBAAK;AACpC,cAAmC,aAA/B,AAAM,AAAkB,KAAnB,+BAA4B,gBAAM,AAAM,KAAD;AAC1B,YAApB,UAAU;gBACL,eAAI,AAAM,KAAD;AACsC,YAApD,UAAU,6BAAc;;AAE1B,gBAAO,wDAAkC,UAAN,KAAK,2BAAuB,OAAO;;IAG5E;UAG0B;AACxB,YAAO,oCACG,uBAAiB,OAAO,WACxB,+BACC,kBAAK,+EACK,sBACf,uDACW,SAAc,SAAgB,OAAiB,UAC/C,sCACC,4BAAK,AAAM,KAAD,yBACJ,uBACA,kGACD;AACgB,kBAAzB,AAAM,KAAD;uQAOX;IAEV;;;;;EACF","file":"products.ddc.js"}');
  // Exports:
  return {
    pages__products: products$
  };
});

//# sourceMappingURL=products.ddc.js.map
