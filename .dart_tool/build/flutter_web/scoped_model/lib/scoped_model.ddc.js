define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const scoped_model = Object.create(dart.library);
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $forEach = dartx.forEach;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let _HashSetOfVoidTovoid = () => (_HashSetOfVoidTovoid = dart.constFn(collection._HashSet$(VoidTovoid())))();
  let FnTovoid = () => (FnTovoid = dart.constFn(dart.fnType(dart.void, [VoidTovoid()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "model",
        [_Location_column]: 51,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 65,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/scoped_model/scoped_model.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 7,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/scoped_model/scoped_model.dart"
      });
    }
  });
  const _listeners = dart.privateName(scoped_model, "_listeners");
  const _version = dart.privateName(scoped_model, "_version");
  const _microtaskVersion = dart.privateName(scoped_model, "_microtaskVersion");
  scoped_model.Model = class Model extends change_notifier.Listenable {
    addListener(listener) {
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      this[_listeners].remove(listener);
    }
    get listenerCount() {
      return this[_listeners][$length];
    }
    notifyListeners() {
      if (this[_microtaskVersion] == this[_version]) {
        this[_microtaskVersion] = dart.notNull(this[_microtaskVersion]) + 1;
        async.scheduleMicrotask(dart.fn(() => {
          this[_version] = dart.notNull(this[_version]) + 1;
          this[_microtaskVersion] = this[_version];
          this[_listeners][$toList]()[$forEach](dart.fn(listener => listener(), FnTovoid()));
        }, VoidToNull()));
      }
    }
  };
  (scoped_model.Model.new = function() {
    this[_listeners] = new (_HashSetOfVoidTovoid()).new();
    this[_version] = 0;
    this[_microtaskVersion] = 0;
    scoped_model.Model.__proto__.new.call(this);
    ;
  }).prototype = scoped_model.Model.prototype;
  dart.addTypeTests(scoped_model.Model);
  dart.setMethodSignature(scoped_model.Model, () => ({
    __proto__: dart.getMethods(scoped_model.Model.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(scoped_model.Model, () => ({
    __proto__: dart.getGetters(scoped_model.Model.__proto__),
    listenerCount: core.int
  }));
  dart.setLibraryUri(scoped_model.Model, "package:scoped_model/scoped_model.dart");
  dart.setFieldSignature(scoped_model.Model, () => ({
    __proto__: dart.getFields(scoped_model.Model.__proto__),
    [_listeners]: dart.finalFieldType(core.Set$(dart.fnType(dart.void, []))),
    [_version]: dart.fieldType(core.int),
    [_microtaskVersion]: dart.fieldType(core.int)
  }));
  const _is_ModelFinder_default = Symbol('_is_ModelFinder_default');
  scoped_model.ModelFinder$ = dart.generic(T => {
    class ModelFinder extends core.Object {
      of(context, opts) {
        let rebuildOnChange = opts && 'rebuildOnChange' in opts ? opts.rebuildOnChange : false;
        return scoped_model.ScopedModel.of(T, context, {rebuildOnChange: rebuildOnChange});
      }
    }
    (ModelFinder.new = function() {
      ;
    }).prototype = ModelFinder.prototype;
    dart.addTypeTests(ModelFinder);
    ModelFinder.prototype[_is_ModelFinder_default] = true;
    dart.setMethodSignature(ModelFinder, () => ({
      __proto__: dart.getMethods(ModelFinder.__proto__),
      of: dart.fnType(T, [framework.BuildContext], {rebuildOnChange: core.bool})
    }));
    dart.setLibraryUri(ModelFinder, "package:scoped_model/scoped_model.dart");
    return ModelFinder;
  });
  scoped_model.ModelFinder = scoped_model.ModelFinder$();
  dart.addTypeTests(scoped_model.ModelFinder, _is_ModelFinder_default);
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  const _is_ScopedModel_default = Symbol('_is_ScopedModel_default');
  const ScopedModel_model = dart.privateName(scoped_model, "ScopedModel.model");
  const ScopedModel_child = dart.privateName(scoped_model, "ScopedModel.child");
  scoped_model.ScopedModel$ = dart.generic(T => {
    let _InheritedModelOfT = () => (_InheritedModelOfT = dart.constFn(scoped_model._InheritedModel$(T)))();
    let BuildContextAndWidgetTo_InheritedModelOfT = () => (BuildContextAndWidgetTo_InheritedModelOfT = dart.constFn(dart.fnType(_InheritedModelOfT(), [framework.BuildContext, framework.Widget])))();
    class ScopedModel extends framework.StatelessWidget {
      get model() {
        return this[model$];
      }
      set model(value) {
        super.model = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      build(context) {
        return new transitions.AnimatedBuilder.new({animation: this.model, builder: dart.fn((context, _) => new (_InheritedModelOfT()).new({model: this.model, child: this.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextAndWidgetTo_InheritedModelOfT()), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
      }
      static of(T, context, opts) {
        let rebuildOnChange = opts && 'rebuildOnChange' in opts ? opts.rebuildOnChange : false;
        let type = scoped_model.ScopedModel._type(scoped_model._InheritedModel$(T));
        let widget = dart.test(rebuildOnChange) ? context.inheritFromWidgetOfExactType(type) : context.ancestorWidgetOfExactType(type);
        if (widget == null) {
          dart.throw(new scoped_model.ScopedModelError.new());
        } else {
          return scoped_model._InheritedModel$(T).as(widget).model;
        }
      }
      static _type(T) {
        return dart.wrapType(T);
      }
    }
    (ScopedModel.new = function(opts) {
      let model = opts && 'model' in opts ? opts.model : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[model$] = model;
      this[child$] = child;
      if (!(model != null)) dart.assertFailed(null, "org-dartlang-app:///packages/scoped_model/scoped_model.dart", 113, 16, "model != null");
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/scoped_model/scoped_model.dart", 114, 16, "child != null");
      ScopedModel.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ScopedModel.prototype;
    dart.addTypeTests(ScopedModel);
    ScopedModel.prototype[_is_ScopedModel_default] = true;
    const model$ = ScopedModel_model;
    const child$ = ScopedModel_child;
    dart.setMethodSignature(ScopedModel, () => ({
      __proto__: dart.getMethods(ScopedModel.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(ScopedModel, "package:scoped_model/scoped_model.dart");
    dart.setFieldSignature(ScopedModel, () => ({
      __proto__: dart.getFields(ScopedModel.__proto__),
      model: dart.finalFieldType(T),
      child: dart.finalFieldType(framework.Widget)
    }));
    return ScopedModel;
  });
  scoped_model.ScopedModel = scoped_model.ScopedModel$();
  dart.addTypeTests(scoped_model.ScopedModel, _is_ScopedModel_default);
  const _is__InheritedModel_default = Symbol('_is__InheritedModel_default');
  scoped_model._InheritedModel$ = dart.generic(T => {
    let _InheritedModelOfT = () => (_InheritedModelOfT = dart.constFn(scoped_model._InheritedModel$(T)))();
    class _InheritedModel extends framework.InheritedWidget {
      updateShouldNotify(oldWidget) {
        _InheritedModelOfT()._check(oldWidget);
        return oldWidget.version != this.version;
      }
    }
    (_InheritedModel.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let model = opts && 'model' in opts ? opts.model : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this.model = model;
      this.version = model[_version];
      _InheritedModel.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _InheritedModel.prototype;
    dart.addTypeTests(_InheritedModel);
    _InheritedModel.prototype[_is__InheritedModel_default] = true;
    dart.setMethodSignature(_InheritedModel, () => ({
      __proto__: dart.getMethods(_InheritedModel.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(_InheritedModel, "package:scoped_model/scoped_model.dart");
    dart.setFieldSignature(_InheritedModel, () => ({
      __proto__: dart.getFields(_InheritedModel.__proto__),
      model: dart.finalFieldType(T),
      version: dart.finalFieldType(core.int)
    }));
    return _InheritedModel;
  });
  scoped_model._InheritedModel = scoped_model._InheritedModel$();
  dart.addTypeTests(scoped_model._InheritedModel, _is__InheritedModel_default);
  const _is_ScopedModelDescendant_default = Symbol('_is_ScopedModelDescendant_default');
  const ScopedModelDescendant_builder = dart.privateName(scoped_model, "ScopedModelDescendant.builder");
  const ScopedModelDescendant_child = dart.privateName(scoped_model, "ScopedModelDescendant.child");
  const ScopedModelDescendant_rebuildOnChange = dart.privateName(scoped_model, "ScopedModelDescendant.rebuildOnChange");
  scoped_model.ScopedModelDescendant$ = dart.generic(T => {
    class ScopedModelDescendant extends framework.StatelessWidget {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get rebuildOnChange() {
        return this[rebuildOnChange$];
      }
      set rebuildOnChange(value) {
        super.rebuildOnChange = value;
      }
      build(context) {
        return this.builder(context, this.child, scoped_model.ScopedModel.of(T, context, {rebuildOnChange: this.rebuildOnChange}));
      }
    }
    (ScopedModelDescendant.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let rebuildOnChange = opts && 'rebuildOnChange' in opts ? opts.rebuildOnChange : true;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      this[rebuildOnChange$] = rebuildOnChange;
      ScopedModelDescendant.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ScopedModelDescendant.prototype;
    dart.addTypeTests(ScopedModelDescendant);
    ScopedModelDescendant.prototype[_is_ScopedModelDescendant_default] = true;
    const builder$ = ScopedModelDescendant_builder;
    const child$ = ScopedModelDescendant_child;
    const rebuildOnChange$ = ScopedModelDescendant_rebuildOnChange;
    dart.setMethodSignature(ScopedModelDescendant, () => ({
      __proto__: dart.getMethods(ScopedModelDescendant.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(ScopedModelDescendant, "package:scoped_model/scoped_model.dart");
    dart.setFieldSignature(ScopedModelDescendant, () => ({
      __proto__: dart.getFields(ScopedModelDescendant.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, T])),
      child: dart.finalFieldType(framework.Widget),
      rebuildOnChange: dart.finalFieldType(core.bool)
    }));
    return ScopedModelDescendant;
  });
  scoped_model.ScopedModelDescendant = scoped_model.ScopedModelDescendant$();
  dart.addTypeTests(scoped_model.ScopedModelDescendant, _is_ScopedModelDescendant_default);
  scoped_model.ScopedModelError = class ScopedModelError extends core.Error {
    toString() {
      return "Error: Could not find the correct ScopedModel.\n    \nTo fix, please:\n          \n  * Provide types to ScopedModel<MyModel>\n  * Provide types to ScopedModelDescendant<MyModel> \n  * Provide types to ScopedModel.of<MyModel>() \n  * Always use package imports. Ex: `import 'package:my_app/my_model.dart';\n  \nIf none of these solutions work, please file a bug at:\nhttps://github.com/brianegan/scoped_model/issues/new\n      ";
    }
  };
  (scoped_model.ScopedModelError.new = function() {
    scoped_model.ScopedModelError.__proto__.new.call(this);
    ;
  }).prototype = scoped_model.ScopedModelError.prototype;
  dart.addTypeTests(scoped_model.ScopedModelError);
  dart.setLibraryUri(scoped_model.ScopedModelError, "package:scoped_model/scoped_model.dart");
  dart.defineExtensionMethods(scoped_model.ScopedModelError, ['toString']);
  dart.trackLibraries("packages/scoped_model/scoped_model", {
    "package:scoped_model/scoped_model.dart": scoped_model
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scoped_model.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gBAwCgC;AACJ,MAAxB,AAAW,qBAAI,QAAQ;IACzB;mBAIiC;AACJ,MAA3B,AAAW,wBAAO,QAAQ;IAC5B;;AAGyB,YAAA,AAAW;IAAM;;AAOxC,UAAI,AAAkB,2BAAG;AACJ,QAAnB,0BAAiB,aAAjB,2BAAiB;AASf,QARF,wBAAkB;AACN,UAAV,iBAAQ,aAAR,kBAAQ;AACoB,UAA5B,0BAAoB;AAK8C,UAAlE,AAAW,AAAS,sCAAQ,QAAc,YAAa,AAAQ,QAAA;;;IAGrE;;;IApCwB,mBAAa;IACjC,iBAAW;IACX,0BAAoB;;;EAmC1B;;;;;;;;;;;;;;;;;;;;;;SASoB;YAAe;AAC/B,cAAmB,gCAAM,OAAO,oBAAmB,eAAe;MACpE;;;;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAuBU;;;;;;MAGK;;;;;;YAOa;AACxB,cAAO,iDACM,qBACF,SAAC,SAAS,MAAM,uCAA0B,mBAAc;MAErE;mBAiDe;YACR;AAEM,mBAAO;AAEX,+BAAS,eAAe,IACzB,AAAQ,OAAD,8BAA8B,IAAI,IACzC,AAAQ,OAAD,2BAA2B,IAAI;AAE5C,YAAI,AAAO,MAAD,IAAI;AACgB,UAA5B,WAAU;;AAEV,gBAAe,AAAuB,qCAA9B,MAAM;;MAElB;;AAE0B;MAAC;;;UA3EC;UAAsB;;MAAtB;MAAsB;YACrC,AAAM,KAAD,IAAI;YACT,AAAM,KAAD,IAAI;AAFtB;;IAE2B;;;;;;;;;;;;;;;;;;;;;;;yBA0FgB;;AACvC,cAAC,AAAU,AAAQ,UAAT,YAAY;MAAQ;;;UAPb;UAAY;UAAS;;MACzB,aAAE,KAAK;MACL,eAAE,AAAM,KAAD;AACpB,qDAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;MA0CG;;;;;;MAIzB;;;;;;MAGF;;;;;;YAUe;AACxB,cAAO,cACL,OAAO,EACP,YACY,+BAAM,OAAO,oBAAmB;MAEhD;;;UAZiB;UACV;UACA;;MAFU;MACV;MACA;AAHP;;IAIE;;;;;;;;;;;;;;;;;;;;;;;AAgBA,YAAO;IAYT;;;AAfA;;EAAkB","file":"scoped_model.ddc.js"}');
  // Exports:
  return {
    scoped_model: scoped_model
  };
});

//# sourceMappingURL=scoped_model.ddc.js.map
