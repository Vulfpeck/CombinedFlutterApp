define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const race = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const never = Object.create(dart.library);
  const defer = Object.create(dart.library);
  const timer = Object.create(dart.library);
  const repeat = Object.create(dart.library);
  const zip = Object.create(dart.library);
  const range = Object.create(dart.library);
  const amb = Object.create(dart.library);
  const concat_eager = Object.create(dart.library);
  const switch_latest = Object.create(dart.library);
  const concat = Object.create(dart.library);
  const merge = Object.create(dart.library);
  const retry = Object.create(dart.library);
  const retry_when = Object.create(dart.library);
  const combine_latest = Object.create(dart.library);
  const error = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $removeAt = dartx.removeAt;
  const $elementAt = dartx.elementAt;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $map = dartx.map;
  const $where = dartx.where;
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $every = dartx.every;
  const $isNotEmpty = dartx.isNotEmpty;
  const $fold = dartx.fold;
  const $_set = dartx._set;
  const $reduce = dartx.reduce;
  const $abs = dartx.abs;
  const $any = dartx.any;
  const $toList = dartx.toList;
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let JSArrayOfStream = () => (JSArrayOfStream = dart.constFn(_interceptors.JSArray$(async.Stream)))();
  let ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  let intTobool = () => (intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))();
  let boolAndboolTobool = () => (boolAndboolTobool = dart.constFn(dart.fnType(core.bool, [core.bool, core.bool])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let StreamSubscriptionTobool = () => (StreamSubscriptionTobool = dart.constFn(dart.fnType(core.bool, [async.StreamSubscription])))();
  let StreamSubscriptionTovoid = () => (StreamSubscriptionTovoid = dart.constFn(dart.fnType(dart.void, [async.StreamSubscription])))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let StreamOfint = () => (StreamOfint = dart.constFn(async.Stream$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let ListOfCompleter = () => (ListOfCompleter = dart.constFn(core.List$(async.Completer)))();
  let FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let JSArrayOfErrorAndStacktrace = () => (JSArrayOfErrorAndStacktrace = dart.constFn(_interceptors.JSArray$(utils.ErrorAndStacktrace)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  const CT = Object.create(null);
  const _is_RaceStream_default = Symbol('_is_RaceStream_default');
  const RaceStream_controller = dart.privateName(race, "RaceStream.controller");
  race.RaceStream$ = dart.generic(T => {
    class RaceStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("provide at least 1 stream"));
        }
        let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([]);
        let isDisambiguated = false;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            function doUpdate(i, value) {
              try {
                if (!isDisambiguated) for (let k = dart.notNull(subscriptions[$length]) - 1; k >= 0; k = k - 1) {
                  if (k !== i) {
                    subscriptions[$_get](k).cancel();
                    subscriptions[$removeAt](k);
                  }
                }
                isDisambiguated = true;
                controller.add(value);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }
            dart.fn(doUpdate, dart.fnType(dart.void, [core.int, T]));
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i = i + 1) {
              let stream = streams[$elementAt](i);
              subscriptions[$add](stream.listen(dart.fn(value => doUpdate(i, value), dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture())}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => {
            if (subscription != null) return subscription.cancel();
            return async.Future.value();
          }, dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (RaceStream.new = function(streams) {
      this[controller] = race.RaceStream._buildController(T, streams);
      RaceStream.__proto__.new.call(this);
      ;
    }).prototype = RaceStream.prototype;
    dart.addTypeTests(RaceStream);
    RaceStream.prototype[_is_RaceStream_default] = true;
    const controller = RaceStream_controller;
    dart.setMethodSignature(RaceStream, () => ({
      __proto__: dart.getMethods(RaceStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(RaceStream, "package:rxdart/src/streams/race.dart");
    dart.setFieldSignature(RaceStream, () => ({
      __proto__: dart.getFields(RaceStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return RaceStream;
  });
  race.RaceStream = race.RaceStream$();
  dart.addTypeTests(race.RaceStream, _is_RaceStream_default);
  const RetryError_message = dart.privateName(utils, "RetryError.message");
  const RetryError_errors = dart.privateName(utils, "RetryError.errors");
  utils.RetryError = class RetryError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      super.errors = value;
    }
    toString() {
      return this.message;
    }
  };
  (utils.RetryError.new = function(message, errors) {
    this[message$] = message;
    this[errors$] = errors;
    utils.RetryError.__proto__.new.call(this);
    ;
  }).prototype = utils.RetryError.prototype;
  dart.addTypeTests(utils.RetryError);
  const message$ = RetryError_message;
  const errors$ = RetryError_errors;
  dart.setLibraryUri(utils.RetryError, "package:rxdart/src/streams/utils.dart");
  dart.setFieldSignature(utils.RetryError, () => ({
    __proto__: dart.getFields(utils.RetryError.__proto__),
    message: dart.finalFieldType(core.String),
    errors: dart.finalFieldType(core.List$(utils.ErrorAndStacktrace))
  }));
  dart.defineExtensionMethods(utils.RetryError, ['toString']);
  const ErrorAndStacktrace_error = dart.privateName(utils, "ErrorAndStacktrace.error");
  const ErrorAndStacktrace_stacktrace = dart.privateName(utils, "ErrorAndStacktrace.stacktrace");
  utils.ErrorAndStacktrace = class ErrorAndStacktrace extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stacktrace() {
      return this[stacktrace$];
    }
    set stacktrace(value) {
      super.stacktrace = value;
    }
    toString() {
      return "ErrorAndStacktrace{error: " + dart.str(this.error) + ", stacktrace: " + dart.str(this.stacktrace) + "}";
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || utils.ErrorAndStacktrace.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.error, other.error) && dart.equals(this.stacktrace, other.stacktrace);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stacktrace))) >>> 0;
    }
  };
  (utils.ErrorAndStacktrace.new = function(error, stacktrace) {
    this[error$] = error;
    this[stacktrace$] = stacktrace;
    ;
  }).prototype = utils.ErrorAndStacktrace.prototype;
  dart.addTypeTests(utils.ErrorAndStacktrace);
  const error$ = ErrorAndStacktrace_error;
  const stacktrace$ = ErrorAndStacktrace_stacktrace;
  dart.setMethodSignature(utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getMethods(utils.ErrorAndStacktrace.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(utils.ErrorAndStacktrace, "package:rxdart/src/streams/utils.dart");
  dart.setFieldSignature(utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getFields(utils.ErrorAndStacktrace.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stacktrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(utils.ErrorAndStacktrace, ['toString', '_equals']);
  dart.defineExtensionAccessors(utils.ErrorAndStacktrace, ['hashCode']);
  const _is_NeverStream_default = Symbol('_is_NeverStream_default');
  const NeverStream_controller = dart.privateName(never, "NeverStream.controller");
  never.NeverStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class NeverStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (NeverStream.new = function() {
      this[controller] = StreamControllerOfT().new();
      NeverStream.__proto__.new.call(this);
      ;
    }).prototype = NeverStream.prototype;
    dart.addTypeTests(NeverStream);
    NeverStream.prototype[_is_NeverStream_default] = true;
    const controller = NeverStream_controller;
    dart.setMethodSignature(NeverStream, () => ({
      __proto__: dart.getMethods(NeverStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(NeverStream, "package:rxdart/src/streams/never.dart");
    dart.setFieldSignature(NeverStream, () => ({
      __proto__: dart.getFields(NeverStream.__proto__),
      controller: dart.fieldType(async.StreamController$(T))
    }));
    return NeverStream;
  });
  never.NeverStream = never.NeverStream$();
  dart.addTypeTests(never.NeverStream, _is_NeverStream_default);
  const _isUsed = dart.privateName(defer, "_isUsed");
  const _streamFactory$ = dart.privateName(defer, "_streamFactory");
  const _isReusable = dart.privateName(defer, "_isReusable");
  const _is_DeferStream_default = Symbol('_is_DeferStream_default');
  defer.DeferStream$ = dart.generic(T => {
    class DeferStream extends async.Stream$(T) {
      get isBroadcast() {
        return this[_isReusable];
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_isUsed]) && !dart.test(this[_isReusable])) dart.throw(new core.StateError.new("Stream has already been listened to."));
        this[_isUsed] = true;
        return this[_streamFactory$]().listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (DeferStream.new = function(_streamFactory, opts) {
      let reusable = opts && 'reusable' in opts ? opts.reusable : false;
      this[_isUsed] = false;
      this[_streamFactory$] = _streamFactory;
      this[_isReusable] = reusable;
      DeferStream.__proto__.new.call(this);
      ;
    }).prototype = DeferStream.prototype;
    dart.addTypeTests(DeferStream);
    DeferStream.prototype[_is_DeferStream_default] = true;
    dart.setMethodSignature(DeferStream, () => ({
      __proto__: dart.getMethods(DeferStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(DeferStream, "package:rxdart/src/streams/defer.dart");
    dart.setFieldSignature(DeferStream, () => ({
      __proto__: dart.getFields(DeferStream.__proto__),
      [_streamFactory$]: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      [_isReusable]: dart.finalFieldType(core.bool),
      [_isUsed]: dart.fieldType(core.bool)
    }));
    return DeferStream;
  });
  defer.DeferStream = defer.DeferStream$();
  dart.addTypeTests(defer.DeferStream, _is_DeferStream_default);
  const _is_TimerStream_default = Symbol('_is_TimerStream_default');
  const TimerStream_value = dart.privateName(timer, "TimerStream.value");
  const TimerStream_duration = dart.privateName(timer, "TimerStream.duration");
  const TimerStream_controller = dart.privateName(timer, "TimerStream.controller");
  timer.TimerStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class TimerStream extends async.Stream$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get duration() {
        return this[duration$];
      }
      set duration(value) {
        super.duration = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        let subscription = this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
        async.Timer.new(this.duration, dart.fn(() => {
          this.controller.add(this.value);
          this.controller.close();
        }, VoidToNull()));
        return subscription;
      }
    }
    (TimerStream.new = function(value, duration) {
      this[controller] = StreamControllerOfT().new();
      this[value$] = value;
      this[duration$] = duration;
      TimerStream.__proto__.new.call(this);
      ;
    }).prototype = TimerStream.prototype;
    dart.addTypeTests(TimerStream);
    TimerStream.prototype[_is_TimerStream_default] = true;
    const value$ = TimerStream_value;
    const duration$ = TimerStream_duration;
    const controller = TimerStream_controller;
    dart.setMethodSignature(TimerStream, () => ({
      __proto__: dart.getMethods(TimerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(TimerStream, "package:rxdart/src/streams/timer.dart");
    dart.setFieldSignature(TimerStream, () => ({
      __proto__: dart.getFields(TimerStream.__proto__),
      value: dart.finalFieldType(T),
      duration: dart.finalFieldType(core.Duration),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return TimerStream;
  });
  timer.TimerStream = timer.TimerStream$();
  dart.addTypeTests(timer.TimerStream, _is_TimerStream_default);
  const _isUsed$ = dart.privateName(repeat, "_isUsed");
  const _is_RepeatStream_default = Symbol('_is_RepeatStream_default');
  const RepeatStream_streamFactory = dart.privateName(repeat, "RepeatStream.streamFactory");
  const RepeatStream_count = dart.privateName(repeat, "RepeatStream.count");
  const RepeatStream_repeatStep = dart.privateName(repeat, "RepeatStream.repeatStep");
  const RepeatStream_controller = dart.privateName(repeat, "RepeatStream.controller");
  const RepeatStream_subscription = dart.privateName(repeat, "RepeatStream.subscription");
  repeat.RepeatStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class RepeatStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$];
      }
      set count(value) {
        super.count = value;
      }
      get repeatStep() {
        return this[repeatStep];
      }
      set repeatStep(value) {
        this[repeatStep] = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_isUsed$])) dart.throw(new core.StateError.new("Stream has already been listened to."));
        this[_isUsed$] = true;
        this.controller = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, 'maybeRepeatNext'), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
            let t1;
            t1 = this.subscription;
            return t1 == null ? null : t1.cancel();
          }, VoidToFuture())});
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      repeatNext() {
        let t1;
        const onDone = () => {
          let t1;
          t1 = this.subscription;
          t1 == null ? null : t1.cancel();
          this.maybeRepeatNext();
        };
        dart.fn(onDone, VoidTovoid());
        try {
          this.subscription = this.streamFactory((t1 = this.repeatStep, this.repeatStep = dart.notNull(t1) + 1, t1)).listen(dart.bind(this.controller, 'add'), {onError: dart.bind(this.controller, 'addError'), onDone: onDone, cancelOnError: false});
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          this.controller.addError(e, s);
        }
      }
      maybeRepeatNext() {
        if (this.repeatStep == this.count) {
          this.controller.close();
        } else {
          this.repeatNext();
        }
      }
    }
    (RepeatStream.new = function(streamFactory, count) {
      if (count === void 0) count = null;
      this[repeatStep] = 0;
      this[controller] = null;
      this[subscription] = null;
      this[_isUsed$] = false;
      this[streamFactory$] = streamFactory;
      this[count$] = count;
      RepeatStream.__proto__.new.call(this);
      ;
    }).prototype = RepeatStream.prototype;
    dart.addTypeTests(RepeatStream);
    RepeatStream.prototype[_is_RepeatStream_default] = true;
    const streamFactory$ = RepeatStream_streamFactory;
    const count$ = RepeatStream_count;
    const repeatStep = RepeatStream_repeatStep;
    const controller = RepeatStream_controller;
    const subscription = RepeatStream_subscription;
    dart.setMethodSignature(RepeatStream, () => ({
      __proto__: dart.getMethods(RepeatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
      repeatNext: dart.fnType(dart.void, []),
      maybeRepeatNext: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RepeatStream, "package:rxdart/src/streams/repeat.dart");
    dart.setFieldSignature(RepeatStream, () => ({
      __proto__: dart.getFields(RepeatStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [core.int])),
      count: dart.finalFieldType(core.int),
      repeatStep: dart.fieldType(core.int),
      controller: dart.fieldType(async.StreamController$(T)),
      subscription: dart.fieldType(async.StreamSubscription$(T)),
      [_isUsed$]: dart.fieldType(core.bool)
    }));
    return RepeatStream;
  });
  repeat.RepeatStream = repeat.RepeatStream$();
  dart.addTypeTests(repeat.RepeatStream, _is_RepeatStream_default);
  const _is_ZipStream_default = Symbol('_is_ZipStream_default');
  zip.ZipStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class ZipStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (zip.ZipStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static zip2(A, B, R, streamOne, streamTwo, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static zip3(A, B, C, R, streamA, streamB, streamC, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static zip4(A, B, C, D, R, streamA, streamB, streamC, streamD, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static zip5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static zip6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static zip7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static zip8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static zip9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, zipper) {
        {
          let controller = null;
          let subscriptions = core.List$(async.StreamSubscription$(T)).new(streams[$length]);
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              try {
                let values = core.List$(core.List$(T)).generate(streams[$length], dart.fn(_ => _interceptors.JSArray$(T).of([]), dart.fnType(core.List$(T), [core.int])));
                let completedStatus = ListOfbool().generate(streams[$length], dart.fn(_ => false, intTobool()));
                function doUpdate(index, value) {
                  values[$_get](index)[$add](value);
                  if (dart.test(values[$every](dart.fn(v => v[$isNotEmpty], dart.fnType(core.bool, [core.List$(T)]))))) {
                    try {
                      controller.add(zipper(values[$fold](core.List$(T), _interceptors.JSArray$(T).of([]), dart.fn((prev, vals) => {
                        let t2;
                        t2 = prev;
                        t2[$add](vals[$_get](0));
                        return t2;
                      }, dart.fnType(core.List$(T), [core.List$(T), core.List$(T)])))));
                    } catch (e$) {
                      let e = dart.getThrown(e$);
                      let s = dart.stackTrace(e$);
                      controller.addError(e, s);
                    }
                    values[$forEach](dart.fn(v => {
                      let t3;
                      t3 = v;
                      t3[$removeAt](0);
                      return t3;
                    }, dart.fnType(core.List$(T), [core.List$(T)])));
                  }
                }
                dart.fn(doUpdate, dart.fnType(dart.void, [core.int, T]));
                function markDone(i) {
                  completedStatus[$_set](i, true);
                  if (dart.test(completedStatus[$reduce](dart.fn((a, b) => dart.test(a) && dart.test(b), boolAndboolTobool())))) controller.close();
                }
                dart.fn(markDone, intTovoid());
                for (let i = 0, len = streams[$length]; i < dart.notNull(len); i = i + 1) {
                  let stream = streams[$elementAt](i);
                  subscriptions[$_set](i, stream.listen(dart.fn(value => doUpdate(i, value), dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => markDone(i), VoidTovoid())}));
                }
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscriptions[$where](dart.fn(subscription => subscription != null, StreamSubscriptionTobool()))[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), StreamSubscriptionTovoid()));
            }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$where](dart.fn(subscription => subscription != null, StreamSubscriptionTobool()))[$forEach](dart.fn(subscription => subscription.resume(), StreamSubscriptionTovoid())), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
          return controller;
        }
      }
    }
    (ZipStream.new = function(streams, zipper) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 29, 16, "streams != null && streams.every((s) => s != null)");
      if (!(dart.notNull(streams[$length]) > 1)) dart.assertFailed("provide at least 2 streams", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 31, 16, "streams.length > 1");
      if (!(zipper != null)) dart.assertFailed("must provide a zipper function", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 32, 16, "zipper != null");
      ZipStream.__proto__.new.call(this, zip.ZipStream._buildController(T, R, streams, zipper).stream);
      ;
    }).prototype = ZipStream.prototype;
    dart.addTypeTests(ZipStream);
    ZipStream.prototype[_is_ZipStream_default] = true;
    dart.setLibraryUri(ZipStream, "package:rxdart/src/streams/zip.dart");
    return ZipStream;
  });
  zip.ZipStream = zip.ZipStream$();
  dart.addTypeTests(zip.ZipStream, _is_ZipStream_default);
  const RangeStream_stream = dart.privateName(range, "RangeStream.stream");
  range.RangeStream = class RangeStream extends async.Stream$(core.int) {
    get stream() {
      return this[stream];
    }
    set stream(value) {
      super.stream = value;
    }
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    static buildStream(startInclusive, endInclusive) {
      let length = (dart.notNull(endInclusive) - dart.notNull(startInclusive))[$abs]() + 1;
      return StreamOfint().fromIterable(ListOfint().generate(length, dart.fn(i => dart.notNull(startInclusive) > dart.notNull(endInclusive) ? dart.notNull(startInclusive) - dart.notNull(i) : dart.notNull(startInclusive) + dart.notNull(i), intToint())));
    }
  };
  (range.RangeStream.new = function(startInclusive, endInclusive) {
    this[stream] = range.RangeStream.buildStream(startInclusive, endInclusive);
    range.RangeStream.__proto__.new.call(this);
    ;
  }).prototype = range.RangeStream.prototype;
  dart.addTypeTests(range.RangeStream);
  const stream = RangeStream_stream;
  dart.setMethodSignature(range.RangeStream, () => ({
    __proto__: dart.getMethods(range.RangeStream.__proto__),
    listen: dart.fnType(async.StreamSubscription$(core.int), [dart.fnType(dart.void, [core.int])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
  }));
  dart.setLibraryUri(range.RangeStream, "package:rxdart/src/streams/range.dart");
  dart.setFieldSignature(range.RangeStream, () => ({
    __proto__: dart.getFields(range.RangeStream.__proto__),
    stream: dart.finalFieldType(async.Stream$(core.int))
  }));
  const _is_AmbStream_default = Symbol('_is_AmbStream_default');
  const AmbStream_controller = dart.privateName(amb, "AmbStream.controller");
  amb.AmbStream$ = dart.generic(T => {
    class AmbStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("provide at least 1 stream"));
        }
        let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([]);
        let isDisambiguated = false;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            function doUpdate(i, value) {
              try {
                if (!isDisambiguated) for (let k = dart.notNull(subscriptions[$length]) - 1; k >= 0; k = k - 1) {
                  if (k !== i) {
                    subscriptions[$_get](k).cancel();
                    subscriptions[$removeAt](k);
                  }
                }
                isDisambiguated = true;
                controller.add(value);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }
            dart.fn(doUpdate, dart.fnType(dart.void, [core.int, T]));
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i = i + 1) {
              let stream = streams[$elementAt](i);
              subscriptions[$add](stream.listen(dart.fn(value => doUpdate(i, value), dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture())}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => {
            if (subscription != null) return subscription.cancel();
            return async.Future.value();
          }, dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (AmbStream.new = function(streams) {
      this[controller] = amb.AmbStream._buildController(T, streams);
      AmbStream.__proto__.new.call(this);
      ;
    }).prototype = AmbStream.prototype;
    dart.addTypeTests(AmbStream);
    AmbStream.prototype[_is_AmbStream_default] = true;
    const controller = AmbStream_controller;
    dart.setMethodSignature(AmbStream, () => ({
      __proto__: dart.getMethods(AmbStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(AmbStream, "package:rxdart/src/streams/amb.dart");
    dart.setFieldSignature(AmbStream, () => ({
      __proto__: dart.getFields(AmbStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return AmbStream;
  });
  amb.AmbStream = amb.AmbStream$();
  dart.addTypeTests(amb.AmbStream, _is_AmbStream_default);
  const _is_ConcatEagerStream_default = Symbol('_is_ConcatEagerStream_default');
  const ConcatEagerStream_controller = dart.privateName(concat_eager, "ConcatEagerStream.controller");
  concat_eager.ConcatEagerStream$ = dart.generic(T => {
    class ConcatEagerStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let subscriptions = core.List$(async.StreamSubscription$(T)).new(streams[$length]);
        let completeEvents = streams != null ? ListOfCompleter().new(streams[$length]) : null;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i = i + 1) {
              completeEvents[$_set](i, async.Completer.new());
              subscriptions[$_set](i, streams[$elementAt](i).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  completeEvents[$_get](i).complete();
                  if (i === dart.notNull(len) - 1) controller.close();
                }, VoidToNull())}));
              if (i > 0) subscriptions[$_get](i).pause(completeEvents[$_get](i - 1).future);
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (ConcatEagerStream.new = function(streams) {
      this[controller] = concat_eager.ConcatEagerStream._buildController(T, streams);
      ConcatEagerStream.__proto__.new.call(this);
      ;
    }).prototype = ConcatEagerStream.prototype;
    dart.addTypeTests(ConcatEagerStream);
    ConcatEagerStream.prototype[_is_ConcatEagerStream_default] = true;
    const controller = ConcatEagerStream_controller;
    dart.setMethodSignature(ConcatEagerStream, () => ({
      __proto__: dart.getMethods(ConcatEagerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(ConcatEagerStream, "package:rxdart/src/streams/concat_eager.dart");
    dart.setFieldSignature(ConcatEagerStream, () => ({
      __proto__: dart.getFields(ConcatEagerStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return ConcatEagerStream;
  });
  concat_eager.ConcatEagerStream = concat_eager.ConcatEagerStream$();
  dart.addTypeTests(concat_eager.ConcatEagerStream, _is_ConcatEagerStream_default);
  const _controller = dart.privateName(switch_latest, "_controller");
  const _is_SwitchLatestStream_default = Symbol('_is_SwitchLatestStream_default');
  const SwitchLatestStream_streams = dart.privateName(switch_latest, "SwitchLatestStream.streams");
  switch_latest.SwitchLatestStream$ = dart.generic(T => {
    class SwitchLatestStream extends async.Stream$(T) {
      get streams() {
        return this[streams$];
      }
      set streams(value) {
        super.streams = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (this[_controller] == null) {
          this[_controller] = switch_latest.SwitchLatestStream._buildController(T, this.streams, cancelOnError);
        }
        return this[_controller].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams, cancelOnError) {
        let controller = null;
        let subscription = null;
        let otherSubscription = null;
        let leftClosed = false;
        let rightClosed = false;
        let hasMainEvent = false;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            subscription = streams.listen(dart.fn(value => {
              let t5;
              try {
                t5 = otherSubscription;
                t5 == null ? null : t5.cancel();
                hasMainEvent = true;
                otherSubscription = value.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                    rightClosed = true;
                    if (leftClosed) controller.close();
                  }, VoidToNull())});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, dart.fnType(core.Null, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                leftClosed = true;
                if (rightClosed || !hasMainEvent) {
                  controller.close();
                }
              }, VoidToNull()), cancelOnError: cancelOnError});
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            let t6;
            if (resumeSignal === void 0) resumeSignal = null;
            subscription.pause(resumeSignal);
            t6 = otherSubscription;
            t6 == null ? null : t6.pause(resumeSignal);
          }, FutureToNull()), onResume: dart.fn(() => {
            let t6;
            subscription.resume();
            t6 = otherSubscription;
            t6 == null ? null : t6.resume();
          }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
            yield subscription.cancel();
            if (hasMainEvent) yield otherSubscription.cancel();
          }), VoidToFutureOfNull())});
        return controller;
      }
    }
    (SwitchLatestStream.new = function(streams) {
      this[_controller] = null;
      this[streams$] = streams;
      SwitchLatestStream.__proto__.new.call(this);
      ;
    }).prototype = SwitchLatestStream.prototype;
    dart.addTypeTests(SwitchLatestStream);
    SwitchLatestStream.prototype[_is_SwitchLatestStream_default] = true;
    const streams$ = SwitchLatestStream_streams;
    dart.setMethodSignature(SwitchLatestStream, () => ({
      __proto__: dart.getMethods(SwitchLatestStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(SwitchLatestStream, "package:rxdart/src/streams/switch_latest.dart");
    dart.setFieldSignature(SwitchLatestStream, () => ({
      __proto__: dart.getFields(SwitchLatestStream.__proto__),
      streams: dart.finalFieldType(async.Stream$(async.Stream$(T))),
      [_controller]: dart.fieldType(async.StreamController$(T))
    }));
    return SwitchLatestStream;
  });
  switch_latest.SwitchLatestStream = switch_latest.SwitchLatestStream$();
  dart.addTypeTests(switch_latest.SwitchLatestStream, _is_SwitchLatestStream_default);
  const _is_ConcatStream_default = Symbol('_is_ConcatStream_default');
  const ConcatStream_controller = dart.privateName(concat, "ConcatStream.controller");
  concat.ConcatStream$ = dart.generic(T => {
    class ConcatStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("Streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("At least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let controller = null;
        let subscription = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let len = streams[$length];
            let index = 0;
            function moveNext() {
              let t6;
              let stream = streams[$elementAt](index);
              t6 = subscription;
              t6 == null ? null : t6.cancel();
              subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  index = index + 1;
                  if (index === len)
                    controller.close();
                  else
                    moveNext();
                }, VoidToNull())});
            }
            dart.fn(moveNext, VoidTovoid());
            moveNext();
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            let t6;
            if (resumeSignal === void 0) resumeSignal = null;
            t6 = subscription;
            return t6 == null ? null : t6.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => {
            let t6;
            t6 = subscription;
            return t6 == null ? null : t6.resume();
          }, VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (ConcatStream.new = function(streams) {
      this[controller] = concat.ConcatStream._buildController(T, streams);
      ConcatStream.__proto__.new.call(this);
      ;
    }).prototype = ConcatStream.prototype;
    dart.addTypeTests(ConcatStream);
    ConcatStream.prototype[_is_ConcatStream_default] = true;
    const controller = ConcatStream_controller;
    dart.setMethodSignature(ConcatStream, () => ({
      __proto__: dart.getMethods(ConcatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(ConcatStream, "package:rxdart/src/streams/concat.dart");
    dart.setFieldSignature(ConcatStream, () => ({
      __proto__: dart.getFields(ConcatStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return ConcatStream;
  });
  concat.ConcatStream = concat.ConcatStream$();
  dart.addTypeTests(concat.ConcatStream, _is_ConcatStream_default);
  const _is_MergeStream_default = Symbol('_is_MergeStream_default');
  const MergeStream_controller = dart.privateName(merge, "MergeStream.controller");
  merge.MergeStream$ = dart.generic(T => {
    class MergeStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let subscriptions = core.List$(async.StreamSubscription$(T)).new(streams[$length]);
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let completedStatus = ListOfbool().generate(streams[$length], dart.fn(_ => false, intTobool()));
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i = i + 1) {
              let stream = streams[$elementAt](i);
              subscriptions[$_set](i, stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  completedStatus[$_set](i, true);
                  if (dart.test(completedStatus[$reduce](dart.fn((a, b) => dart.test(a) && dart.test(b), boolAndboolTobool())))) controller.close();
                }, VoidToNull())}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (MergeStream.new = function(streams) {
      this[controller] = merge.MergeStream._buildController(T, streams);
      MergeStream.__proto__.new.call(this);
      ;
    }).prototype = MergeStream.prototype;
    dart.addTypeTests(MergeStream);
    MergeStream.prototype[_is_MergeStream_default] = true;
    const controller = MergeStream_controller;
    dart.setMethodSignature(MergeStream, () => ({
      __proto__: dart.getMethods(MergeStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(MergeStream, "package:rxdart/src/streams/merge.dart");
    dart.setFieldSignature(MergeStream, () => ({
      __proto__: dart.getFields(MergeStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return MergeStream;
  });
  merge.MergeStream = merge.MergeStream$();
  dart.addTypeTests(merge.MergeStream, _is_MergeStream_default);
  const _isUsed$0 = dart.privateName(retry, "_isUsed");
  const _errors = dart.privateName(retry, "_errors");
  const _is_RetryStream_default = Symbol('_is_RetryStream_default');
  const RetryStream_streamFactory = dart.privateName(retry, "RetryStream.streamFactory");
  const RetryStream_count = dart.privateName(retry, "RetryStream.count");
  const RetryStream_retryStep = dart.privateName(retry, "RetryStream.retryStep");
  const RetryStream_controller = dart.privateName(retry, "RetryStream.controller");
  const RetryStream_subscription = dart.privateName(retry, "RetryStream.subscription");
  retry.RetryStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class RetryStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$];
      }
      set count(value) {
        this[count$] = value;
      }
      get retryStep() {
        return this[retryStep];
      }
      set retryStep(value) {
        this[retryStep] = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_isUsed$0])) dart.throw(new core.StateError.new("Stream has already been listened to."));
        this[_isUsed$0] = true;
        this.controller = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, 'retry'), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => this.subscription.cancel(), VoidToFuture())});
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      retry() {
        this.subscription = this.streamFactory().listen(dart.bind(this.controller, 'add'), {onError: dart.fn((e, s) => {
            let t6;
            this.subscription.cancel();
            if (this.count == this.retryStep) {
              this.controller.addError(new utils.RetryError.new("Received an error after attempting " + dart.str(this.count) + " retries", (t6 = this[_errors], t6[$add](new utils.ErrorAndStacktrace.new(e, s)), t6)));
              this.controller.close();
            } else {
              this.retryStep = dart.notNull(this.retryStep) + 1;
              this[_errors][$add](new utils.ErrorAndStacktrace.new(e, s));
              this.retry();
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.bind(this.controller, 'close'), cancelOnError: false});
      }
    }
    (RetryStream.new = function(streamFactory, count) {
      if (count === void 0) count = null;
      this[retryStep] = 0;
      this[controller] = null;
      this[subscription] = null;
      this[_isUsed$0] = false;
      this[_errors] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$] = streamFactory;
      this[count$] = count;
      RetryStream.__proto__.new.call(this);
      ;
    }).prototype = RetryStream.prototype;
    dart.addTypeTests(RetryStream);
    RetryStream.prototype[_is_RetryStream_default] = true;
    const streamFactory$ = RetryStream_streamFactory;
    const count$ = RetryStream_count;
    const retryStep = RetryStream_retryStep;
    const controller = RetryStream_controller;
    const subscription = RetryStream_subscription;
    dart.setMethodSignature(RetryStream, () => ({
      __proto__: dart.getMethods(RetryStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
      retry: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RetryStream, "package:rxdart/src/streams/retry.dart");
    dart.setFieldSignature(RetryStream, () => ({
      __proto__: dart.getFields(RetryStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      count: dart.fieldType(core.int),
      retryStep: dart.fieldType(core.int),
      controller: dart.fieldType(async.StreamController$(T)),
      subscription: dart.fieldType(async.StreamSubscription$(T)),
      [_isUsed$0]: dart.fieldType(core.bool),
      [_errors]: dart.fieldType(core.List$(utils.ErrorAndStacktrace))
    }));
    return RetryStream;
  });
  retry.RetryStream = retry.RetryStream$();
  dart.addTypeTests(retry.RetryStream, _is_RetryStream_default);
  const _isUsed$1 = dart.privateName(retry_when, "_isUsed");
  const _errors$ = dart.privateName(retry_when, "_errors");
  const _is_RetryWhenStream_default = Symbol('_is_RetryWhenStream_default');
  const RetryWhenStream_streamFactory = dart.privateName(retry_when, "RetryWhenStream.streamFactory");
  const RetryWhenStream_retryWhenFactory = dart.privateName(retry_when, "RetryWhenStream.retryWhenFactory");
  const RetryWhenStream_controller = dart.privateName(retry_when, "RetryWhenStream.controller");
  const RetryWhenStream_subscription = dart.privateName(retry_when, "RetryWhenStream.subscription");
  retry_when.RetryWhenStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class RetryWhenStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get retryWhenFactory() {
        return this[retryWhenFactory$];
      }
      set retryWhenFactory(value) {
        super.retryWhenFactory = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        if (dart.test(this[_isUsed$1])) dart.throw(new core.StateError.new("Stream has already been listened to."));
        this[_isUsed$1] = true;
        this.controller = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, 'retry'), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => this.subscription.cancel(), VoidToFuture())});
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      retry() {
        this.subscription = this.streamFactory().listen(dart.bind(this.controller, 'add'), {onError: dart.fn((e, s) => {
            this.subscription.cancel();
            let sub = null;
            sub = this.retryWhenFactory(e, s).listen(dart.fn(event => {
              sub.cancel();
              this[_errors$][$add](new utils.ErrorAndStacktrace.new(e, s));
              this.retry();
            }, dynamicToNull()), {onError: dart.fn((e, s) => {
                let t6;
                sub.cancel();
                this.controller.addError(new utils.RetryError.new("Received an error after attempting to retry.", (t6 = this[_errors$], t6[$add](new utils.ErrorAndStacktrace.new(e, s)), t6)));
                this.controller.close();
              }, dynamicAndStackTraceToNull())});
          }, dynamicAndStackTraceToNull()), onDone: dart.bind(this.controller, 'close'), cancelOnError: false});
      }
    }
    (RetryWhenStream.new = function(streamFactory, retryWhenFactory) {
      this[controller] = null;
      this[subscription] = null;
      this[_isUsed$1] = false;
      this[_errors$] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$] = streamFactory;
      this[retryWhenFactory$] = retryWhenFactory;
      RetryWhenStream.__proto__.new.call(this);
      ;
    }).prototype = RetryWhenStream.prototype;
    dart.addTypeTests(RetryWhenStream);
    RetryWhenStream.prototype[_is_RetryWhenStream_default] = true;
    const streamFactory$ = RetryWhenStream_streamFactory;
    const retryWhenFactory$ = RetryWhenStream_retryWhenFactory;
    const controller = RetryWhenStream_controller;
    const subscription = RetryWhenStream_subscription;
    dart.setMethodSignature(RetryWhenStream, () => ({
      __proto__: dart.getMethods(RetryWhenStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
      retry: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RetryWhenStream, "package:rxdart/src/streams/retry_when.dart");
    dart.setFieldSignature(RetryWhenStream, () => ({
      __proto__: dart.getFields(RetryWhenStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      retryWhenFactory: dart.finalFieldType(dart.fnType(async.Stream$(dart.void), [dart.dynamic, core.StackTrace])),
      controller: dart.fieldType(async.StreamController$(T)),
      subscription: dart.fieldType(async.StreamSubscription$(T)),
      [_isUsed$1]: dart.fieldType(core.bool),
      [_errors$]: dart.fieldType(core.List$(utils.ErrorAndStacktrace))
    }));
    return RetryWhenStream;
  });
  retry_when.RetryWhenStream = retry_when.RetryWhenStream$();
  dart.addTypeTests(retry_when.RetryWhenStream, _is_RetryWhenStream_default);
  const _is_CombineLatestStream_default = Symbol('_is_CombineLatestStream_default');
  combine_latest.CombineLatestStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class CombineLatestStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (combine_latest.CombineLatestStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static combine2(A, B, R, streamOne, streamTwo, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static combine3(A, B, C, R, streamA, streamB, streamC, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static combine4(A, B, C, D, R, streamA, streamB, streamC, streamD, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static combine5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static combine6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static combine7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static combine8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static combine9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, combiner) {
        let subscriptions = ListOfStreamSubscription().new(streams[$length]);
        let controller = null;
        controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
            let values = core.List$(T).new(streams[$length]);
            let triggered = ListOfbool().generate(streams[$length], dart.fn(_ => false, intTobool()));
            let completedStatus = ListOfbool().generate(streams[$length], dart.fn(_ => false, intTobool()));
            let allStreamsHaveEvents = false;
            for (let i = 0, len = streams[$length]; i < dart.notNull(len); i = i + 1) {
              let stream = streams[$elementAt](i);
              subscriptions[$_set](i, stream.listen(dart.fn(value => {
                values[$_set](i, value);
                triggered[$_set](i, true);
                if (!dart.test(allStreamsHaveEvents)) allStreamsHaveEvents = triggered[$every](dart.fn(t => t, boolTobool()));
                if (dart.test(allStreamsHaveEvents)) {
                  try {
                    controller.add(combiner(values[$toList]()));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  completedStatus[$_set](i, true);
                  if (dart.test(completedStatus[$every](dart.fn(c => c, boolTobool())))) controller.close();
                }, VoidToNull())}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), StreamSubscriptionTovoid()));
          }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), StreamSubscriptionTovoid())), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (CombineLatestStream.new = function(streams, combiner) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 54, 16, "streams != null && streams.every((s) => s != null)");
      if (!(dart.notNull(streams[$length]) > 1)) dart.assertFailed("provide at least 2 streams", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 56, 16, "streams.length > 1");
      if (!(combiner != null)) dart.assertFailed("must provide a combiner function", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 57, 16, "combiner != null");
      CombineLatestStream.__proto__.new.call(this, combine_latest.CombineLatestStream._buildController(T, R, streams, combiner).stream);
      ;
    }).prototype = CombineLatestStream.prototype;
    dart.addTypeTests(CombineLatestStream);
    CombineLatestStream.prototype[_is_CombineLatestStream_default] = true;
    dart.setLibraryUri(CombineLatestStream, "package:rxdart/src/streams/combine_latest.dart");
    return CombineLatestStream;
  });
  combine_latest.CombineLatestStream = combine_latest.CombineLatestStream$();
  dart.addTypeTests(combine_latest.CombineLatestStream, _is_CombineLatestStream_default);
  const _is_ErrorStream_default = Symbol('_is_ErrorStream_default');
  const ErrorStream_error = dart.privateName(error, "ErrorStream.error");
  const ErrorStream_controller = dart.privateName(error, "ErrorStream.controller");
  error.ErrorStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class ErrorStream extends async.Stream$(T) {
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this.controller.addError(this.error);
        this.controller.close();
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (ErrorStream.new = function(error) {
      this[controller] = StreamControllerOfT().new();
      this[error$] = error;
      ErrorStream.__proto__.new.call(this);
      ;
    }).prototype = ErrorStream.prototype;
    dart.addTypeTests(ErrorStream);
    ErrorStream.prototype[_is_ErrorStream_default] = true;
    const error$ = ErrorStream_error;
    const controller = ErrorStream_controller;
    dart.setMethodSignature(ErrorStream, () => ({
      __proto__: dart.getMethods(ErrorStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(ErrorStream, "package:rxdart/src/streams/error.dart");
    dart.setFieldSignature(ErrorStream, () => ({
      __proto__: dart.getFields(ErrorStream.__proto__),
      error: dart.finalFieldType(core.Object),
      controller: dart.fieldType(async.StreamController$(T))
    }));
    return ErrorStream;
  });
  error.ErrorStream = error.ErrorStream$();
  dart.addTypeTests(error.ErrorStream, _is_ErrorStream_default);
  dart.trackLibraries("packages/rxdart/src/streams/amb", {
    "package:rxdart/src/streams/race.dart": race,
    "package:rxdart/src/streams/utils.dart": utils,
    "package:rxdart/src/streams/never.dart": never,
    "package:rxdart/src/streams/defer.dart": defer,
    "package:rxdart/src/streams/timer.dart": timer,
    "package:rxdart/src/streams/repeat.dart": repeat,
    "package:rxdart/src/streams/zip.dart": zip,
    "package:rxdart/src/streams/range.dart": range,
    "package:rxdart/src/streams/amb.dart": amb,
    "package:rxdart/src/streams/concat_eager.dart": concat_eager,
    "package:rxdart/src/streams/switch_latest.dart": switch_latest,
    "package:rxdart/src/streams/concat.dart": concat,
    "package:rxdart/src/streams/merge.dart": merge,
    "package:rxdart/src/streams/retry.dart": retry,
    "package:rxdart/src/streams/retry_when.dart": retry_when,
    "package:rxdart/src/streams/combine_latest.dart": combine_latest,
    "package:rxdart/src/streams/error.dart": error
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["race.dart","utils.dart","never.dart","defer.dart","timer.dart","repeat.dart","zip.dart","range.dart","amb.dart","concat_eager.dart","switch_latest.dart","concat.dart","merge.dart","retry.dart","retry_when.dart","combine_latest.dart","error.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAe4B;;;;;;aAMQ;YACpB;YAAc;YAAe;AACzC,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;iCAEmE;AACjE,YAAI,AAAQ,OAAD,IAAI;AACgC,UAA7C,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;AACgC,UAAhD,WAAM,2BAAc;;AAGhB,4BAAuC;AACzC,8BAAkB;AAEF;AAyCsD,QAvC1E,aAAa,sCACH,gBACI;AACR,qBAAK,SAAa,GAAK;AACrB;AACE,qBAAK,eAAe,EAClB,SAAS,IAAyB,aAArB,AAAc,aAAD,aAAU,GAAG,AAAE,CAAD,IAAI,GAAG,IAAA,AAAC,CAAA;AAC9C,sBAAI,CAAC,KAAI,CAAC;AACiB,oBAAzB,AAAa,AAAI,aAAJ,QAAC,CAAC;AACU,oBAAzB,AAAc,aAAD,YAAU,CAAC;;;AAIR,gBAAtB,kBAAkB;AAEG,gBAArB,AAAW,UAAD,KAAK,KAAK;;oBACb;oBAAG;AACe,gBAAzB,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;;;AAI5B,qBAAS,IAAI,GAAG,MAAM,AAAQ,OAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AAC1C,2BAAS,AAAQ,OAAD,aAAW,CAAC;AAIM,cAFtC,AAAc,aAAD,OAAK,AAAO,MAAD,QAAQ,QAAG,SAAU,AAAQ,QAAA,CAAC,CAAC,EAAE,KAAK,2CACtC,UAAX,UAAU,uBACX,cAAM,AAAW,UAAD;;qCAGvB,QAAkB;;AAAkB,kBAAA,AAAc,cAAD,WACtD,QAAuB,gBACnB,AAAa,YAAD,OAAO,YAAY;wCAC7B,cAAM,AAAc,aAAD,WACzB,QAAuB,gBAAiB,AAAa,YAAD,8FAC9C,cAAa,gCACf,AAAc,AAIf,aAJc,qBAAK,QAAuB;AAC3C,gBAAI,YAAY,IAAI,MAAM,MAAO,AAAa,aAAD;AAE7C;iFACO,QAAiB,gBAAiB,AAAa,YAAD,IAAI;AAEnE,cAAO,WAAU;MACnB;;+BAhE+B;MACd,mBAAE,oCAAiB,OAAO;AAD3C;;IAC4C;;;;;;;;;;;;;;;;;;;;ICZ/B;;;;;;IACkB;;;;;;;AAKV;IAAO;;mCAHZ,SAAc;IAAd;IAAc;AAA9B;;EAAqC;;;;;;;;;;;;;;IAOvB;;;;;;IACG;;;;;;;AAMf,YAAO,AAA4D,yCAAhC,cAAK,4BAAe,mBAAU;IACnE;;UAGwB;AACpB,YAAA,AAAU,AAAa,UAAP,KAAK,IACf,4BAAN,KAAK,KACW,YAAZ,oBAAqB,iBAAN,KAAK,MACd,YAAN,YAAS,AAAM,KAAD,WACH,YAAX,iBAAc,AAAM,KAAD;IAAW;;AAGlB,YAAe,eAAT,cAAN,4BAA4B,cAAX;IAAmB;;2CAhBhC,OAAY;IAAZ;IAAY;;EAAW;;;;;;;;;;;;;;;;;;;;;;MCJ3B;;;;;;aAKc;YACpB;YAAc;YAAe;AACzC,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;;;MAToB,mBAAa;AAEjC;;IAAa;;;;;;;;;;;;;;;;;;;;;;;;ACMW;MAAW;aAMD;YACpB;YAAc;YAAe;AACzC,sBAAI,6BAAY,oBACd,AAAwD,WAAlD,wBAAW;AACL,QAAd,gBAAU;AAEV,cAAO,AAAiB,gCAAO,MAAM,YACxB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;;gCAZiB;UAAsB;MALlC,gBAAU;MAKE;MACC,oBAAE,QAAQ;AAD5B;;IAC4B;;;;;;;;;;;;;;;;;;;;;;;;;MCjBpB;;;;;;MACO;;;;;;MACW;;;;;;aAKQ;YACpB;YAAc;YAAe;AACnC,2BAAe,AAAW,AAAO,8BAAO,MAAM,YACvC,OAAO,UAAU,MAAM,iBAAiB,aAAa;AAKhE,QAHF,gBAAM,eAAU;AACO,UAArB,AAAW,oBAAI;AACG,UAAlB,AAAW;;AAGb,cAAO,aAAY;MACrB;;gCAdiB,OAAY;MAFH,mBAAa;MAEtB;MAAY;AAA7B;;IAAsC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCCR;;;;;;MACpB;;;;;;MACN;;;;;;MACgB;;;;;;MACE;;;;;;aAOf;YACI;YACJ;YACA;AAEL,sBAAI,iBAAS,AAAwD,WAAlD,wBAAW;AAChB,QAAd,iBAAU;AAQiC,QAN3C,kBAAa,iCACH,0BACI,mCACD,QAAkB;;AACvB,kBAAA,AAAa,yBAAM,YAAY;wCACzB,cAAM,AAAa,qDACnB;;AAAM;uCAAc;;AAElC,cAAO,AAAW,AAAO,+BACvB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;;;AAGE,cAAK;;AACmB,eAAtB;8BAAc;AAEG,UAAjB;;;AAGF;AAEyE,UADvE,oBAAe,AAA4B,oBAAJ,sBAAV,qCAAU,eAAsB,UAAX,mCAC1B,UAAX,sCAA6B,MAAM,iBAAiB;;cAC1D;cAAG;AACe,UAAzB,AAAW,yBAAS,CAAC,EAAE,CAAC;;MAE5B;;AAGE,YAAI,AAAW,mBAAG;AACE,UAAlB,AAAW;;AAEC,UAAZ;;MAEJ;;iCAjDkB,eAAqB;;MALnC,mBAAa;MACG;MACE;MACjB,iBAAU;MAEG;MAAqB;AAAvC;;IAA8C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBCaW;AACvD,cAAO,4CACL,OAAO,EACP,QAAS,UAAW,MAAM;MAE9B;2BAGY,WACA,WACR;AAEF,cAAO,2CACL,sBAAC,SAAS,EAAE,SAAS,IACrB,QAAe,UAAW,AAAM,MAAA,CAAW,KAAV,AAAM,MAAA,QAAC,KAAmB,KAAV,AAAM,MAAA,QAAC;MAE5D;8BAGY,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,IAC1B,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;iCAGY,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACnC,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;oCAGY,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC5C,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;uCAGY,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACrD,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;0CAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC9D,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;6CAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACvE,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;gDAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBACE,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,IAET,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;oCAGsB,SAClB;;AAGoB;AACd,8BAAgB,6CAA4B,AAAQ,OAAD;AAsDe,UApDxE,aAAa,sCACH,gBACI;AACR;AACQ,6BAAO,mCAAyB,AAAQ,OAAD,WAAS,QAAC,KAAM;AACvD,sCACG,sBAAS,AAAQ,OAAD,WAAS,QAAC,KAAM;AAEzC,yBAAK,SAAa,OAAS;AACD,kBAAxB,AAAM,AAAQ,MAAR,QAAC,KAAK,QAAM,KAAK;AAEvB,gCAAI,AAAO,MAAD,SAAO,QAAC,KAAM,AAAE,CAAD;AACvB;AAE2D,sBADzD,AAAW,UAAD,KAAK,AAAM,MAAA,CACjB,AAAO,MAAD,uBAAM,kCAAI,SAAC,MAAM;;AAAS,iCAAI;wBAAE,SAAI,AAAI,IAAA,QAAC;;;;0BAC5C;0BAAG;AACe,sBAAzB,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;AAGW,oBAArC,AAAO,MAAD,WAAS,QAAC;;AAAM,4BAAC;sBAAE,cAAS;;;;;;AAItC,yBAAK,SAAa;AACS,kBAAzB,AAAe,eAAA,QAAC,CAAC,EAAI;AAErB,gCAAI,AAAgB,eAAD,UAAQ,SAAM,GAAQ,MAAQ,UAAF,CAAC,eAAI,CAAC,2BACnD,AAAW,AAAO,UAAR;;;AAGd,yBAAS,IAAI,GAAG,MAAM,AAAQ,OAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AAC1C,+BAAS,AAAQ,OAAD,aAAW,CAAC;AAKF,kBAH9B,AAAa,aAAA,QAAC,CAAC,EAAI,AAAO,MAAD,QACrB,QAAG,SAAU,AAAQ,QAAA,CAAC,CAAC,EAAE,KAAK,2CACV,UAAX,UAAU,uBACX,cAAM,AAAQ,QAAA,CAAC,CAAC;;;oBAEvB;oBAAG;AACe,gBAAzB,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;uCAGnB,QAAkB;;AACvB,oBAAA,AAAc,AAA0E,cAA3E,SAAO,QAA6B,gBAAiB,AAAa,YAAD,IAAI,6CAC9E,QAA6B,gBACzB,AAAa,YAAD,OAAO,YAAY;0CACjC,cACN,AAAc,AAA0E,aAA3E,SAAO,QAA6B,gBAAiB,AAAa,YAAD,IAAI,6CAC9E,QAA6B,gBACzB,AAAa,YAAD,kEACd,cAAa,gCAAc,AAChC,AACA,aAF6C,qBACzC,QAA6B,gBAAiB,AAAa,YAAD,kDACxD,QAAiB,gBAAiB,AAAa,YAAD,IAAI;AAEjE,gBAAO,WAAU;;MAErB;;8BA5QsB,SAClB;YACS,AAAgB,OAAT,IAAI,kBAAQ,AAAQ,OAAD,SAAO,QAAC,KAAM,AAAE,CAAD,IAAI,+CAChD;YACkB,aAAf,AAAQ,OAAD,aAAU,sBAAG;YACpB,AAAO,MAAD,IAAI,yBAAM;AACvB,yCAAM,AAAkC,qCAAjB,OAAO,EAAE,MAAM;;IAAS;;;;;;;;;;ICrBnC;;;;;;WAMkB;UACtB;UAAc;UAAe;AACzC,YAAO,AAAO,oBAAO,MAAM,YACd,OAAO,UAAU,MAAM,iBAAiB,aAAa;IACpE;uBAEmC,gBAAoB;AAC/C,mBAAyC,AAAM,CAAxB,aAAb,YAAY,iBAAG,cAAc,aAAU;AAEvD,YAAc,4BAAkB,qBAC5B,MAAM,EACN,QAAK,KAAqB,aAAf,cAAc,iBAAG,YAAY,IACnB,aAAf,cAAc,iBAAG,CAAC,IACH,aAAf,cAAc,iBAAG,CAAC;IAC9B;;oCAlBgB,gBAAoB;IACvB,eAAE,8BAAY,cAAc,EAAE,YAAY;AADvD;;EACwD;;;;;;;;;;;;;;;;MCI9B;;;;;;aAMQ;YACpB;YAAc;YAAe;AACzC,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;iCAEmE;AACjE,YAAI,AAAQ,OAAD,IAAI;AACgC,UAA7C,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;AACgC,UAAhD,WAAM,2BAAc;;AAGhB,4BAAuC;AACzC,8BAAkB;AAEF;AAyCsD,QAvC1E,aAAa,sCACH,gBACI;AACR,qBAAK,SAAa,GAAK;AACrB;AACE,qBAAK,eAAe,EAClB,SAAS,IAAyB,aAArB,AAAc,aAAD,aAAU,GAAG,AAAE,CAAD,IAAI,GAAG,IAAA,AAAC,CAAA;AAC9C,sBAAI,CAAC,KAAI,CAAC;AACiB,oBAAzB,AAAa,AAAI,aAAJ,QAAC,CAAC;AACU,oBAAzB,AAAc,aAAD,YAAU,CAAC;;;AAIR,gBAAtB,kBAAkB;AAEG,gBAArB,AAAW,UAAD,KAAK,KAAK;;oBACb;oBAAG;AACe,gBAAzB,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;;;AAI5B,qBAAS,IAAI,GAAG,MAAM,AAAQ,OAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AAC1C,2BAAS,AAAQ,OAAD,aAAW,CAAC;AAIM,cAFtC,AAAc,aAAD,OAAK,AAAO,MAAD,QAAQ,QAAC,SAAU,AAAQ,QAAA,CAAC,CAAC,EAAE,KAAK,2CACpC,UAAX,UAAU,uBACX,cAAM,AAAW,UAAD;;qCAGvB,QAAkB;;AAAkB,kBAAA,AAAc,cAAD,WACtD,QAAuB,gBACnB,AAAa,YAAD,OAAO,YAAY;wCAC7B,cAAM,AAAc,aAAD,WACzB,QAAuB,gBAAiB,AAAa,YAAD,8FAC9C,cAAa,gCACf,AAAc,AAIf,aAJc,qBAAK,QAAuB;AAC3C,gBAAI,YAAY,IAAI,MAAM,MAAO,AAAa,aAAD;AAE7C;iFACO,QAAiB,gBAAiB,AAAa,YAAD,IAAI;AAEnE,cAAO,WAAU;MACnB;;8BAhE8B;MACb,mBAAE,kCAAiB,OAAO;AAD3C;;IAC4C;;;;;;;;;;;;;;;;;;;;;MCAlB;;;;;;aAMQ;YACpB;YAAc;YAAe;AACzC,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;iCAEmE;AACjE,YAAI,AAAQ,OAAD,IAAI;AACgC,UAA7C,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;AAC6C,UAA7D,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD,OAAK,QAAW,UAAW,AAAO,MAAD,IAAI;AACK,UAA1D,WAAM,2BAAc;;AAGhB,4BAAgB,6CAA4B,AAAQ,OAAD;AACnD,6BACF,AAAQ,OAAD,IAAI,OAAO,sBAAyB,AAAQ,OAAD,aAAW;AAC7C;AAyBoD,QAvBxE,aAAa,sCACH,gBACI;AACR,qBAAS,IAAI,GAAG,MAAM,AAAQ,OAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACN,cAAxC,AAAc,cAAA,QAAC,CAAC,EAAI;AAOlB,cALF,AAAa,aAAA,QAAC,CAAC,EAAI,AAAQ,AAAa,OAAd,aAAW,CAAC,SAAoB,UAAX,UAAU,oBACjC,UAAX,UAAU,uBAAmB;AACZ,kBAA5B,AAAc,AAAI,cAAJ,QAAC,CAAC;AAEhB,sBAAI,AAAE,CAAD,KAAQ,aAAJ,GAAG,IAAG,GAAG,AAAW,AAAO,UAAR;;AAG9B,kBAAI,AAAE,CAAD,GAAG,GAAG,AAAa,AAAI,AAAmC,aAAvC,QAAC,CAAC,QAAQ,AAAc,AAAQ,cAAR,QAAC,AAAE,CAAD,GAAG;;qCAGhD,QAAkB;;AAAkB,kBAAA,AAAc,cAAD,WACtD,QAAuB,gBACnB,AAAa,YAAD,OAAO,YAAY;wCAC7B,cAAM,AAAc,aAAD,WACzB,QAAuB,gBAAiB,AAAa,YAAD,8FAC9C,cAAa,gCAAc,AAChC,AACA,aAF6C,qBACzC,QAAuB,gBAAiB,AAAa,YAAD,+EAClD,QAAiB,gBAAiB,AAAa,YAAD,IAAI;AAEjE,cAAO,WAAU;MACnB;;sCAlDsC;MACrB,mBAAE,mDAAiB,OAAO;AAD3C;;IAC4C;;;;;;;;;;;;;;;;;;;;;;MCEpB;;;;;;aASjB;YACI;YACJ;YACA;AAEL,YAAI,AAAY,qBAAG;AACqC,UAAtD,oBAAc,qDAAiB,cAAS,aAAa;;AAGvD,cAAO,AAAY,AAAO,iCACxB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;iCAGoB,SACb;AAEe;AACU;AACR;AAClB,yBAAa;AAAO,0BAAc;AAAO,2BAAe;AAgDtD,QA9CN,aAAa,sCACH,gBACI;AA8BP,YA7BD,eAAe,AAAQ,OAAD,QACpB,QAAW;;AACT;AAC6B,qBAA3B,iBAAiB;6BAAjB,OAAmB;AAEA,gBAAnB,eAAe;AAUd,gBARD,oBAAoB,AAAM,KAAD,QACZ,UAAX,UAAU,oBACU,UAAX,UAAU,uBACX;AACY,oBAAlB,cAAc;AAEd,wBAAI,UAAU,EAAE,AAAW,AAAO,UAAR;;;oBAGvB;oBAAG;AACe,gBAAzB,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;sEAGR,UAAX,UAAU,uBACX;AACW,gBAAjB,aAAa;AAEb,oBAAI,WAAW,KAAK,YAAY;AACZ,kBAAlB,AAAW,UAAD;;+CAGC,aAAa;qCAGvB,QAAkB;;;AACO,YAAhC,AAAa,YAAD,OAAO,YAAY;AACO,iBAAtC,iBAAiB;yBAAjB,OAAmB,SAAM,YAAY;wCAE7B;;AACa,YAArB,AAAa,YAAD;AACe,iBAA3B,iBAAiB;yBAAjB,OAAmB;sCAEX;AACmB,YAA3B,MAAM,AAAa,YAAD;AAElB,gBAAI,YAAY,EAAE,AAAgC,MAA1B,AAAkB,iBAAD;UAC1C;AAEL,cAAO,WAAU;MACnB;;uCA/EwB;MAFJ;MAEI;AAAxB;;IAAgC;;;;;;;;;;;;;;;;;;;;;;MCZN;;;;;;aAMQ;YACpB;YAAc;YAAe;AACzC,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;iCAEmE;AACjE,YAAI,AAAQ,OAAD,IAAI;AACgC,UAA7C,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;AAC6C,UAA7D,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD,OAAK,QAAW,UAAW,AAAO,MAAD,IAAI;AACK,UAA1D,WAAM,2BAAc;;AAGF;AACE;AA4BoB,QA1B1C,aAAa,sCACH,gBACI;AACF,sBAAM,AAAQ,OAAD;AACf,wBAAQ;AAEZ,qBAAK;;AACC,2BAAS,AAAQ,OAAD,aAAW,KAAK;AACd,mBAAtB,YAAY;2BAAZ,OAAc;AAUZ,cARF,eAAe,AAAO,MAAD,QAAmB,UAAX,UAAU,oBACf,UAAX,UAAU,uBAAmB;AACjC,kBAAP,QAAA,AAAK,KAAA;AAEL,sBAAI,AAAM,KAAD,KAAI,GAAG;AACI,oBAAlB,AAAW,UAAD;;AAEA,oBAAV,AAAQ,QAAA;;;;AAIJ,YAAV,AAAQ,QAAA;qCAED,QAAkB;;;AACvB,6BAAY;gCAAZ,OAAc,SAAM,YAAY;wCAC1B;;AAAM,6BAAY;gCAAZ,OAAc;sCACpB,cAAM,AAAa,YAAD;AAEhC,cAAO,WAAU;MACnB;;iCAnDiC;MAChB,mBAAE,wCAAiB,OAAO;AAD3C;;IAC4C;;;;;;;;;;;;;;;;;;;;;MCPlB;;;;;;aAMQ;YACpB;YAAc;YAAe;AACzC,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;iCAEmE;AACjE,YAAI,AAAQ,OAAD,IAAI;AACgC,UAA7C,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;AAC6C,UAA7D,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD,OAAK,QAAW,UAAW,AAAO,MAAD,IAAI;AACK,UAA1D,WAAM,2BAAc;;AAGhB,4BAAgB,6CAA4B,AAAQ,OAAD;AACrC;AAyBoD,QAvBxE,aAAa,sCACH,gBACI;AACF,kCAAuB,sBAAS,AAAQ,OAAD,WAAS,QAAC,KAAM;AAE7D,qBAAS,IAAI,GAAG,MAAM,AAAQ,OAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AAC1C,2BAAS,AAAQ,OAAD,aAAW,CAAC;AAO9B,cALF,AAAa,aAAA,QAAC,CAAC,EAAI,AAAO,MAAD,QAAmB,UAAX,UAAU,oBACnB,UAAX,UAAU,uBAAmB;AACf,kBAAzB,AAAe,eAAA,QAAC,CAAC,EAAI;AAErB,gCAAI,AAAgB,eAAD,UAAQ,SAAC,GAAG,MAAQ,UAAF,CAAC,eAAI,CAAC,2BAAG,AAAW,AAAO,UAAR;;;qCAIrD,QAAkB;;AAAkB,kBAAA,AAAc,cAAD,WACtD,QAAuB,gBACnB,AAAa,YAAD,OAAO,YAAY;wCAC7B,cAAM,AAAc,aAAD,WACzB,QAAuB,gBAAiB,AAAa,YAAD,8FAC9C,cAAa,gCAAc,AAChC,AACA,aAF6C,qBACzC,QAAuB,gBAAiB,AAAa,YAAD,+EAClD,QAAiB,gBAAiB,AAAa,YAAD,IAAI;AAEjE,cAAO,WAAU;MACnB;;gCAhDgC;MACf,mBAAE,sCAAiB,OAAO;AAD3C;;IAC4C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCMrB;;;;;;MACnB;;;;;;MACA;;;;;;MACgB;;;;;;MACE;;;;;;aAQf;YACI;YACJ;YACA;AAEL,sBAAI,kBAAS,AAAwD,WAAlD,wBAAW;AAChB,QAAd,kBAAU;AAQgC,QAN1C,kBAAa,iCACH,0BACI,yBACD,QAAkB;;AACvB,kBAAA,AAAa,yBAAM,YAAY;wCACzB,cAAM,AAAa,qDACnB,cAAM,AAAa;AAEjC,cAAO,AAAW,AAAO,+BACvB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;;AAkBoD,QAflD,oBAAe,AAAgB,4BAAkB,UAAX,mCACzB,SAAS,GAAc;;AACb,YAArB,AAAa;AAEb,gBAAI,AAAM,cAAG;AAIT,cAHF,AAAW,yBAAS,yBAClB,AAAmD,iDAAd,cAAK,kBAC1C,eAAS,SAAI,iCAAmB,CAAC,EAAE,CAAC;AAEpB,cAAlB,AAAW;;AAEA,cAAX,iBAAS,aAAT,kBAAS;AAC4B,cAArC,AAAQ,oBAAI,iCAAmB,CAAC,EAAE,CAAC;AAC5B,cAAP;;oDAEkB,UAAX,0CAAiC;MAC9C;;gCA7CiB,eAAqB;;MANlC,kBAAY;MACI;MACE;MACjB,kBAAU;MACU,gBAA8B;MAEtC;MAAqB;AAAtC;;IAA6C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MC8BtB;;;;;;MACM;;;;;;MACT;;;;;;MACE;;;;;;aAQf;YACI;YACJ;YACA;AAEL,sBAAI,kBAAS,AAAwD,WAAlD,wBAAW;AAChB,QAAd,kBAAU;AAST,QAPD,kBAAa,iCACL,0BACI,yBACD,QAAkB;;AACvB,kBAAA,AAAa,yBAAM,YAAY;wCACzB,cAAM,AAAa,qDACnB,cAAM,AAAa;AAG/B,cAAO,AAAW,AAAO,+BACvB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;;AA2BG,QAxBD,oBAAe,AAAgB,4BAClB,UAAX,mCACS,SAAS,GAAc;AACT,YAArB,AAAa;AAEY;AAexB,YAdD,MAAM,AAAuB,sBAAN,CAAC,EAAE,CAAC,SACzB,QAAS;AACK,cAAZ,AAAI,GAAD;AACkC,cAArC,AAAQ,qBAAI,iCAAmB,CAAC,EAAE,CAAC;AAC5B,cAAP;2CAEO,SAAS,GAAc;;AAClB,gBAAZ,AAAI,GAAD;AAID,gBAHF,AAAW,yBAAS,yBAClB,sDACA,gBAAS,SAAI,iCAAmB,CAAC,EAAE,CAAC;AAEpB,gBAAlB,AAAW;;oDAIE,UAAX,0CACO;MAEnB;;oCAvDqB,eAAoB;MALrB;MACE;MACjB,kBAAU;MACU,iBAA8B;MAElC;MAAoB;AAAzC;;IAA0D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBCTpC;AAEpB,cAAO,iEACL,OAAO,EACP,QAAS,UAAW,MAAM;MAE9B;+BAGY,WACA,WACR;AAEF,cAAO,gEACL,sBAAC,SAAS,EAAE,SAAS,IACrB,QAAe,UAAW,AAAQ,QAAA,CAAW,KAAV,AAAM,MAAA,QAAC,KAAmB,KAAV,AAAM,MAAA,QAAC;MAE9D;kCAGY,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,IAC1B,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;qCAGY,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACnC,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;wCAGY,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC5C,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;2CAGY,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACrD,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;8CAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC9D,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;iDAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACvE,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;oDAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBACE,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,IAET,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;oCAGsB,SAClB;AAEI,4BAAgB,+BAAkC,AAAQ,OAAD;AAC3C;AA+CnB,QA7CD,aAAa,sCACL,gBACI;AACF,yBAAS,kBAAQ,AAAQ,OAAD;AACxB,4BAAiB,sBAAS,AAAQ,OAAD,WAAS,QAAC,KAAM;AACjD,kCAAuB,sBAAS,AAAQ,OAAD,WAAS,QAAC,KAAM;AACzD,uCAAuB;AAE3B,qBAAS,IAAI,GAAG,MAAM,AAAQ,OAAD,WAAS,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACxC,2BAAS,AAAQ,OAAD,aAAW,CAAC;AAwBjC,cAtBD,AAAa,aAAA,QAAC,CAAC,EAAI,AAAO,MAAD,QACvB,QAAG;AACgB,gBAAjB,AAAM,MAAA,QAAC,CAAC,EAAI,KAAK;AACE,gBAAnB,AAAS,SAAA,QAAC,CAAC,EAAI;AAEf,+BAAK,oBAAoB,GACvB,AAAgD,uBAAzB,AAAU,SAAD,SAAO,QAAC,KAAM,CAAC;AAEjD,8BAAI,oBAAoB;AACtB;AAC2C,oBAAzC,AAAW,UAAD,KAAK,AAAQ,QAAA,CAAC,AAAO,MAAD;;wBACvB;wBAAG;AACe,oBAAzB,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;;yDAIV,UAAX,UAAU,uBACX;AACmB,kBAAzB,AAAe,eAAA,QAAC,CAAC,EAAI;AAErB,gCAAI,AAAgB,eAAD,SAAO,QAAC,KAAM,CAAC,mBAAG,AAAW,AAAO,UAAR;;;qCAK9C,QAAkB;;AAAkB,kBAAA,AAAc,cAAD,WACtD,QAA6B,gBACzB,AAAa,YAAD,OAAO,YAAY;wCAC7B,cAAM,AAAc,aAAD,WACzB,QAA6B,gBAAiB,AAAa,YAAD,kEACpD,cAAa,gCAAc,AAChC,AAEA,aAH6C,qBACzC,QAA6B,gBAC9B,AAAa,YAAD,kDACT,QAAiB,gBAAiB,AAAa,YAAD,IAAI;AAG/D,cAAO,WAAU;MACnB;;wCArQsB,SAClB;YACS,AAAgB,OAAT,IAAI,kBAAQ,AAAQ,OAAD,SAAO,QAAC,KAAM,AAAE,CAAD,IAAI,+CAChD;YACkB,aAAf,AAAQ,OAAD,aAAU,sBAAG;YACpB,AAAS,QAAD,IAAI,yBAAM;AACzB,mDAAM,AAAoC,0DAAnB,OAAO,EAAE,QAAQ;;IAAS;;;;;;;;;;;;;;MC7C1C;;;;;;MACO;;;;;;aAKc;YACpB;YAAc;YAAe;AACf,QAA1B,AAAW,yBAAS;AAEF,QAAlB,AAAW;AAEX,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;;gCAXiB;MAFG,mBAAa;MAEhB;AAAjB;;IAAuB","file":"amb.ddc.js"}');
  // Exports:
  return {
    src__streams__race: race,
    src__streams__utils: utils,
    src__streams__never: never,
    src__streams__defer: defer,
    src__streams__timer: timer,
    src__streams__repeat: repeat,
    src__streams__zip: zip,
    src__streams__range: range,
    src__streams__amb: amb,
    src__streams__concat_eager: concat_eager,
    src__streams__switch_latest: switch_latest,
    src__streams__concat: concat,
    src__streams__merge: merge,
    src__streams__retry: retry,
    src__streams__retry_when: retry_when,
    src__streams__combine_latest: combine_latest,
    src__streams__error: error
  };
});

//# sourceMappingURL=amb.ddc.js.map
