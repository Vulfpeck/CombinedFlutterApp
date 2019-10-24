define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sample = Object.create(dart.library);
  const notification = Object.create(dart.library);
  const buffer_strategy = Object.create(dart.library);
  const take_until = Object.create(dart.library);
  const $do = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $modulo = dartx['%'];
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let TakeUntilStreamTransformerOfNull$dynamic = () => (TakeUntilStreamTransformerOfNull$dynamic = dart.constFn(take_until.TakeUntilStreamTransformer$(core.Null, dart.dynamic)))();
  let StreamOfNull = () => (StreamOfNull = dart.constFn(async.Stream$(core.Null)))();
  let LinkedMapOfStream$StreamSubscription = () => (LinkedMapOfStream$StreamSubscription = dart.constFn(_js_helper.LinkedMap$(async.Stream, async.StreamSubscription)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let VoidToStreamSubscription = () => (VoidToStreamSubscription = dart.constFn(dart.fnType(async.StreamSubscription, [])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnData",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnDone",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnError",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], notification.Kind);
    }
  });
  const _is_SampleStreamTransformer_default = Symbol('_is_SampleStreamTransformer_default');
  const SampleStreamTransformer_transformer = dart.privateName(sample, "SampleStreamTransformer.transformer");
  sample.SampleStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SampleStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, sampleStream, opts) {
        let sampleOnValueOnly = opts && 'sampleOnValueOnly' in opts ? opts.sampleOnValueOnly : true;
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let sampleSubscription = null;
          let currentValue = null;
          let hasValue = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            if (hasValue) {
              hasValue = false;
              controller.add(currentValue);
            }
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          function onSample(_) {
            if (hasValue || !dart.test(sampleOnValueOnly)) {
              controller.add(currentValue);
              hasValue = false;
              currentValue = null;
            }
          }
          dart.fn(onSample, dynamicTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                subscription = input.listen(dart.fn(value => {
                  hasValue = true;
                  currentValue = value;
                }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
                sampleSubscription = sampleStream.listen(onSample, {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield sampleSubscription.cancel();
              yield subscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SampleStreamTransformer.new = function(sampleStream, opts) {
      let sampleOnValueOnly = opts && 'sampleOnValueOnly' in opts ? opts.sampleOnValueOnly : true;
      this[transformer] = sample.SampleStreamTransformer._buildTransformer(T, sampleStream, {sampleOnValueOnly: sampleOnValueOnly});
      SampleStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SampleStreamTransformer.prototype;
    dart.addTypeTests(SampleStreamTransformer);
    SampleStreamTransformer.prototype[_is_SampleStreamTransformer_default] = true;
    const transformer = SampleStreamTransformer_transformer;
    dart.setMethodSignature(SampleStreamTransformer, () => ({
      __proto__: dart.getMethods(SampleStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SampleStreamTransformer, "package:rxdart/src/transformers/sample.dart");
    dart.setFieldSignature(SampleStreamTransformer, () => ({
      __proto__: dart.getFields(SampleStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SampleStreamTransformer;
  });
  sample.SampleStreamTransformer = sample.SampleStreamTransformer$();
  dart.addTypeTests(sample.SampleStreamTransformer, _is_SampleStreamTransformer_default);
  const _name$ = dart.privateName(notification, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  notification.Kind = class Kind extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (notification.Kind.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = notification.Kind.prototype;
  dart.addTypeTests(notification.Kind);
  dart.setLibraryUri(notification.Kind, "package:rxdart/src/utils/notification.dart");
  dart.setFieldSignature(notification.Kind, () => ({
    __proto__: dart.getFields(notification.Kind.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(notification.Kind, ['toString']);
  notification.Kind.OnData = C0 || CT.C0;
  notification.Kind.OnDone = C1 || CT.C1;
  notification.Kind.OnError = C2 || CT.C2;
  notification.Kind.values = C3 || CT.C3;
  const _is_Notification_default = Symbol('_is_Notification_default');
  const Notification_kind = dart.privateName(notification, "Notification.kind");
  const Notification_value = dart.privateName(notification, "Notification.value");
  const Notification_error = dart.privateName(notification, "Notification.error");
  const Notification_stackTrace = dart.privateName(notification, "Notification.stackTrace");
  notification.Notification$ = dart.generic(T => {
    class Notification extends core.Object {
      get kind() {
        return this[kind$];
      }
      set kind(value) {
        super.kind = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static onData(value) {
        return new (notification.Notification$(T)).new(notification.Kind.OnData, value, null, null);
      }
      static onDone() {
        return new (notification.Notification$(T)).new(notification.Kind.OnDone, null, null, null);
      }
      static onError(e, s) {
        return new (notification.Notification$(T)).new(notification.Kind.OnError, null, e, s);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return notification.Notification.is(other) && dart.equals(this.kind, other.kind) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.kind)) ^ dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "Notification{kind: " + dart.str(this.kind) + ", value: " + dart.str(this.value) + ", error: " + dart.str(this.error) + ", stackTrace: " + dart.str(this.stackTrace) + "}";
      }
      get isOnData() {
        return dart.equals(this.kind, notification.Kind.OnData);
      }
      get isOnDone() {
        return dart.equals(this.kind, notification.Kind.OnDone);
      }
      get isOnError() {
        return dart.equals(this.kind, notification.Kind.OnError);
      }
    }
    (Notification.new = function(kind, value, error, stackTrace) {
      this[kind$] = kind;
      this[value$] = value;
      this[error$] = error;
      this[stackTrace$] = stackTrace;
      ;
    }).prototype = Notification.prototype;
    dart.addTypeTests(Notification);
    Notification.prototype[_is_Notification_default] = true;
    const kind$ = Notification_kind;
    const value$ = Notification_value;
    const error$ = Notification_error;
    const stackTrace$ = Notification_stackTrace;
    dart.setMethodSignature(Notification, () => ({
      __proto__: dart.getMethods(Notification.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(Notification, () => ({
      __proto__: dart.getGetters(Notification.__proto__),
      isOnData: core.bool,
      isOnDone: core.bool,
      isOnError: core.bool
    }));
    dart.setLibraryUri(Notification, "package:rxdart/src/utils/notification.dart");
    dart.setFieldSignature(Notification, () => ({
      __proto__: dart.getFields(Notification.__proto__),
      kind: dart.finalFieldType(notification.Kind),
      value: dart.finalFieldType(T),
      error: dart.finalFieldType(dart.dynamic),
      stackTrace: dart.finalFieldType(core.StackTrace)
    }));
    dart.defineExtensionMethods(Notification, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Notification, ['hashCode']);
    return Notification;
  });
  notification.Notification = notification.Notification$();
  dart.addTypeTests(notification.Notification, _is_Notification_default);
  const _is__OnStreamSampler_default = Symbol('_is__OnStreamSampler_default');
  buffer_strategy._OnStreamSampler$ = dart.generic((T, S, O) => {
    class _OnStreamSampler extends async.StreamView$(S) {
      static new(stream, bufferHandler, scheduleHandler, onStream) {
        let doneController = StreamControllerOfbool().new();
        if (onStream == null) {
          dart.throw(new core.ArgumentError.new("onStream cannot be null"));
        }
        let ticker = onStream.transform(dart.dynamic, new (TakeUntilStreamTransformerOfNull$dynamic()).new(doneController.stream));
        function onDone() {
          if (dart.test(doneController.isClosed)) return;
          doneController.add(true);
          doneController.close();
        }
        dart.fn(onDone, VoidTovoid());
        let scheduler = stream.transform(T, new ($do.DoStreamTransformer$(T)).new({onDone: onDone, onCancel: onDone})).transform(S, new (async._StreamHandlerTransformer$(T, S)).new({handleData: dart.fn((data, sink) => {
            bufferHandler(data, sink, 0);
          }, dart.fnType(core.Null, [T, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error, s), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))})).transform(S, new (sample.SampleStreamTransformer$(S)).new(ticker, {sampleOnValueOnly: false})).transform(S, new (async._StreamHandlerTransformer$(S, S)).new({handleData: dart.fn((data, sink) => {
            scheduleHandler(data, sink, 0);
          }, dart.fnType(core.Null, [S, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error, s), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))}));
        return new (buffer_strategy._OnStreamSampler$(T, S, O)).__(scheduler);
      }
    }
    (_OnStreamSampler.__ = function(state) {
      _OnStreamSampler.__proto__.new.call(this, state);
      ;
    }).prototype = _OnStreamSampler.prototype;
    dart.addTypeTests(_OnStreamSampler);
    _OnStreamSampler.prototype[_is__OnStreamSampler_default] = true;
    dart.setLibraryUri(_OnStreamSampler, "package:rxdart/src/samplers/buffer_strategy.dart");
    return _OnStreamSampler;
  });
  buffer_strategy._OnStreamSampler = buffer_strategy._OnStreamSampler$();
  dart.addTypeTests(buffer_strategy._OnStreamSampler, _is__OnStreamSampler_default);
  const _is__OnCountSampler_default = Symbol('_is__OnCountSampler_default');
  buffer_strategy._OnCountSampler$ = dart.generic((T, S) => {
    class _OnCountSampler extends async.StreamView$(S) {
      static new(stream, bufferHandler, scheduleHandler, count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        let eventIndex = 0;
        if (count == null) {
          dart.throw(new core.ArgumentError.new("count cannot be null"));
        } else if (dart.notNull(count) < 1) {
          dart.throw(new core.ArgumentError.new("count needs to be greater than 1, currently it is: " + dart.str(count)));
        }
        if (dart.notNull(startBufferEvery) < 0) {
          dart.throw(new core.ArgumentError.new("startBufferEvery needs to be greater than, or equal to 0, currently it is: " + dart.str(startBufferEvery)));
        }
        function maybeNewBuffer(_) {
          return eventIndex[$modulo](count) === 0;
        }
        dart.fn(maybeNewBuffer, dart.fnType(core.bool, [S]));
        let scheduler = stream.transform(S, new (async._StreamHandlerTransformer$(T, S)).new({handleData: dart.fn((data, sink) => {
            if ((eventIndex = eventIndex + 1) > 0) bufferHandler(data, sink, startBufferEvery);
          }, dart.fnType(core.Null, [T, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error, s), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))})).where(maybeNewBuffer).transform(S, new (async._StreamHandlerTransformer$(S, S)).new({handleData: dart.fn((data, sink) => {
            eventIndex = eventIndex - dart.notNull(startBufferEvery);
            scheduleHandler(data, sink, startBufferEvery);
          }, dart.fnType(core.Null, [S, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error, s), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))}));
        return new (buffer_strategy._OnCountSampler$(T, S)).__(scheduler);
      }
    }
    (_OnCountSampler.__ = function(state) {
      _OnCountSampler.__proto__.new.call(this, state);
      ;
    }).prototype = _OnCountSampler.prototype;
    dart.addTypeTests(_OnCountSampler);
    _OnCountSampler.prototype[_is__OnCountSampler_default] = true;
    dart.setLibraryUri(_OnCountSampler, "package:rxdart/src/samplers/buffer_strategy.dart");
    return _OnCountSampler;
  });
  buffer_strategy._OnCountSampler = buffer_strategy._OnCountSampler$();
  dart.addTypeTests(buffer_strategy._OnCountSampler, _is__OnCountSampler_default);
  const _is__OnTestSampler_default = Symbol('_is__OnTestSampler_default');
  buffer_strategy._OnTestSampler$ = dart.generic((T, S) => {
    class _OnTestSampler extends async.StreamView$(S) {
      static new(stream, bufferHandler, scheduleHandler, onTest) {
        let testResult = false;
        if (onTest == null) {
          dart.throw(new core.ArgumentError.new("onTest cannot be null"));
        }
        let scheduler = stream.transform(S, new (async._StreamHandlerTransformer$(T, S)).new({handleData: dart.fn((data, sink) => {
            testResult = onTest(data);
            bufferHandler(data, sink, 0);
          }, dart.fnType(core.Null, [T, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error, s), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))})).where(dart.fn(_ => testResult, dart.fnType(core.bool, [S]))).transform(S, new (async._StreamHandlerTransformer$(S, S)).new({handleData: dart.fn((data, sink) => {
            scheduleHandler(data, sink, 0);
          }, dart.fnType(core.Null, [S, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error, s), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))}));
        return new (buffer_strategy._OnTestSampler$(T, S)).__(scheduler);
      }
    }
    (_OnTestSampler.__ = function(state) {
      _OnTestSampler.__proto__.new.call(this, state);
      ;
    }).prototype = _OnTestSampler.prototype;
    dart.addTypeTests(_OnTestSampler);
    _OnTestSampler.prototype[_is__OnTestSampler_default] = true;
    dart.setLibraryUri(_OnTestSampler, "package:rxdart/src/samplers/buffer_strategy.dart");
    return _OnTestSampler;
  });
  buffer_strategy._OnTestSampler = buffer_strategy._OnTestSampler$();
  dart.addTypeTests(buffer_strategy._OnTestSampler, _is__OnTestSampler_default);
  buffer_strategy.onCount = function onCount(T, S, count, startBufferEvery) {
    if (startBufferEvery === void 0) startBufferEvery = 0;
    return dart.fn((stream, bufferHandler, scheduleHandler) => buffer_strategy._OnCountSampler$(T, S).new(stream, bufferHandler, scheduleHandler, count, startBufferEvery), dart.fnType(buffer_strategy._OnCountSampler$(T, S), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  buffer_strategy.onStream = function onStream(T, S, O, onStream) {
    return dart.fn((stream, bufferHandler, scheduleHandler) => buffer_strategy._OnStreamSampler$(T, S, O).new(stream, bufferHandler, scheduleHandler, onStream), dart.fnType(buffer_strategy._OnStreamSampler$(T, S, O), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  buffer_strategy.onTime = function onTime(T, S, duration) {
    return dart.fn((stream, bufferHandler, scheduleHandler) => {
      if (duration == null) {
        dart.throw(new core.ArgumentError.new("duration cannot be null"));
      }
      return buffer_strategy._OnStreamSampler$(T, S, core.Null).new(stream, bufferHandler, scheduleHandler, StreamOfNull().periodic(duration));
    }, dart.fnType(buffer_strategy._OnStreamSampler$(T, S, core.Null), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  buffer_strategy.onFuture = function onFuture(T, S, O, onFuture) {
    return dart.fn((stream, bufferHandler, scheduleHandler) => {
      if (onFuture == null) {
        dart.throw(new core.ArgumentError.new("onFuture cannot be null"));
      }
      return buffer_strategy._OnStreamSampler$(T, S, O).new(stream, bufferHandler, scheduleHandler, buffer_strategy._onFutureSampler(O, onFuture));
    }, dart.fnType(buffer_strategy._OnStreamSampler$(T, S, O), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  buffer_strategy._onFutureSampler = function _onFutureSampler(O, onFuture) {
    return new (async._AsyncStarImpl$(O)).new(function* _onFutureSampler(stream) {
      if (stream.add(yield onFuture())) return;
      yield;
      if (stream.addStream(buffer_strategy._onFutureSampler(O, onFuture))) return;
      yield;
    }).stream;
  };
  buffer_strategy.onTest = function onTest(T, S, onTest) {
    return dart.fn((stream, bufferHandler, scheduleHandler) => buffer_strategy._OnTestSampler$(T, S).new(stream, bufferHandler, scheduleHandler, onTest), dart.fnType(buffer_strategy._OnTestSampler$(T, S), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(S)], [core.int]), dart.fnType(dart.void, [S, async.EventSink$(S)], [core.int])]));
  };
  const _is_TakeUntilStreamTransformer_default = Symbol('_is_TakeUntilStreamTransformer_default');
  const TakeUntilStreamTransformer_transformer = dart.privateName(take_until, "TakeUntilStreamTransformer.transformer");
  take_until.TakeUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TakeUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("take until stream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => onDone(), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t1, t1$;
              yield (t1 = otherSubscription, t1 == null ? null : t1.cancel());
              yield (t1$ = subscription, t1$ == null ? null : t1$.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (TakeUntilStreamTransformer.new = function(otherStream) {
      this[transformer] = take_until.TakeUntilStreamTransformer._buildTransformer(T, S, otherStream);
      TakeUntilStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TakeUntilStreamTransformer.prototype;
    dart.addTypeTests(TakeUntilStreamTransformer);
    TakeUntilStreamTransformer.prototype[_is_TakeUntilStreamTransformer_default] = true;
    const transformer = TakeUntilStreamTransformer_transformer;
    dart.setMethodSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(TakeUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(TakeUntilStreamTransformer, "package:rxdart/src/transformers/take_until.dart");
    dart.setFieldSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getFields(TakeUntilStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return TakeUntilStreamTransformer;
  });
  take_until.TakeUntilStreamTransformer = take_until.TakeUntilStreamTransformer$();
  dart.addTypeTests(take_until.TakeUntilStreamTransformer, _is_TakeUntilStreamTransformer_default);
  const _is_DoStreamTransformer_default = Symbol('_is_DoStreamTransformer_default');
  const DoStreamTransformer_transformer = dart.privateName($do, "DoStreamTransformer.transformer");
  $do.DoStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DoStreamTransformer extends async.StreamTransformerBase$(T, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let onData = opts && 'onData' in opts ? opts.onData : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let onEach = opts && 'onEach' in opts ? opts.onEach : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onPause = opts && 'onPause' in opts ? opts.onPause : null;
        let onResume = opts && 'onResume' in opts ? opts.onResume : null;
        if (onCancel == null && onData == null && onDone == null && onEach == null && onError == null && onListen == null && onPause == null && onResume == null) {
          dart.throw(new core.ArgumentError.new("Must provide at least one handler"));
        }
        let subscriptions = new (LinkedMapOfStream$StreamSubscription()).new();
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let onListenLocal = dart.fn(() => {
            if (onListen != null) {
              try {
                onListen();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }
            subscriptions[$putIfAbsent](input, dart.fn(() => input.listen(dart.fn(value => {
              if (onData != null) {
                try {
                  onData(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }
              if (onEach != null) {
                try {
                  onEach(notification.Notification$(T).onData(value));
                } catch (e$0) {
                  let e = dart.getThrown(e$0);
                  let s = dart.stackTrace(e$0);
                  controller.addError(e, s);
                }
              }
              controller.add(value);
            }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                if (onError != null) {
                  try {
                    dart.dcall(onError, [e, s]);
                  } catch (e$) {
                    let e2 = dart.getThrown(e$);
                    let s2 = dart.stackTrace(e$);
                    controller.addError(e2, s2);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(notification.Notification$(T).onError(e, s));
                  } catch (e$0) {
                    let e = dart.getThrown(e$0);
                    let s = dart.stackTrace(e$0);
                    controller.addError(e, s);
                  }
                }
                controller.addError(e, s);
              }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                if (onDone != null) {
                  try {
                    onDone();
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(notification.Notification$(T).onDone());
                  } catch (e$0) {
                    let e = dart.getThrown(e$0);
                    let s = dart.stackTrace(e$0);
                    controller.addError(e, s);
                  }
                }
                controller.close();
              }, VoidToNull()), cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription$(T), [])));
          }, VoidToNull());
          let onCancelLocal = dart.fn(() => {
            let t9;
            let onCancelResult = null;
            if (onCancel != null) {
              try {
                onCancelResult = onCancel();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                if (!dart.test(controller.isClosed)) {
                  controller.addError(e, s);
                } else {
                  async.Zone.current.handleUncaughtError(e, s);
                }
              }
            }
            let cancelResultFuture = async.Future.is(onCancelResult) ? onCancelResult : async.Future.value(onCancelResult);
            let cancelFuture = (t9 = subscriptions[$_get](input).cancel(), t9 == null ? async.Future.value() : t9);
            return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([cancelFuture, cancelResultFuture])).whenComplete(dart.fn(() => subscriptions[$remove](input), VoidToStreamSubscription()));
          }, VoidToFutureOfList());
          if (dart.test(input.isBroadcast)) {
            controller = async.StreamController$(T).broadcast({sync: true, onListen: onListenLocal, onCancel: onCancelLocal});
          } else {
            controller = async.StreamController$(T).new({sync: true, onListen: onListenLocal, onCancel: onCancelLocal, onPause: dart.fn(resumeSignal => {
                if (resumeSignal === void 0) resumeSignal = null;
                if (onPause != null) {
                  try {
                    onPause(resumeSignal);
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).pause(resumeSignal);
              }, FutureToNull()), onResume: dart.fn(() => {
                if (onResume != null) {
                  try {
                    onResume();
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).resume();
              }, VoidToNull())});
          }
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DoStreamTransformer.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      let onData = opts && 'onData' in opts ? opts.onData : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let onEach = opts && 'onEach' in opts ? opts.onEach : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onPause = opts && 'onPause' in opts ? opts.onPause : null;
      let onResume = opts && 'onResume' in opts ? opts.onResume : null;
      this[transformer] = $do.DoStreamTransformer._buildTransformer(T, {onCancel: onCancel, onData: onData, onDone: onDone, onEach: onEach, onError: onError, onListen: onListen, onPause: onPause, onResume: onResume});
      DoStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DoStreamTransformer.prototype;
    dart.addTypeTests(DoStreamTransformer);
    DoStreamTransformer.prototype[_is_DoStreamTransformer_default] = true;
    const transformer = DoStreamTransformer_transformer;
    dart.setMethodSignature(DoStreamTransformer, () => ({
      __proto__: dart.getMethods(DoStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DoStreamTransformer, "package:rxdart/src/transformers/do.dart");
    dart.setFieldSignature(DoStreamTransformer, () => ({
      __proto__: dart.getFields(DoStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DoStreamTransformer;
  });
  $do.DoStreamTransformer = $do.DoStreamTransformer$();
  dart.addTypeTests($do.DoStreamTransformer, _is_DoStreamTransformer_default);
  dart.trackLibraries("packages/rxdart/src/samplers/buffer_strategy", {
    "package:rxdart/src/transformers/sample.dart": sample,
    "package:rxdart/src/utils/notification.dart": notification,
    "package:rxdart/src/samplers/buffer_strategy.dart": buffer_strategy,
    "package:rxdart/src/transformers/take_until.dart": take_until,
    "package:rxdart/src/transformers/do.dart": $do,
    "package:rxdart/src/samplers/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../transformers/sample.dart","../utils/notification.dart","buffer_strategy.dart","../transformers/take_until.dart","../transformers/do.dart"],"names":[],"mappings":"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","file":"buffer_strategy.ddc.js"}');
  // Exports:
  return {
    src__transformers__sample: sample,
    src__utils__notification: notification,
    src__samplers__buffer_strategy: buffer_strategy,
    src__transformers__take_until: take_until,
    src__transformers__do: $do,
    src__samplers__utils: utils
  };
});

//# sourceMappingURL=buffer_strategy.ddc.js.map
