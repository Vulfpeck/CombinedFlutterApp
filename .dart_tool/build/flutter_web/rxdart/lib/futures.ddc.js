define(['dart_sdk', 'packages/rxdart/src/streams/amb', 'packages/rxdart/src/samplers/buffer_strategy'], function(dart_sdk, packages__rxdart__src__streams__amb, packages__rxdart__src__samplers__buffer_strategy) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection$ = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const combine_latest = packages__rxdart__src__streams__amb.src__streams__combine_latest;
  const concat = packages__rxdart__src__streams__amb.src__streams__concat;
  const concat_eager = packages__rxdart__src__streams__amb.src__streams__concat_eager;
  const defer = packages__rxdart__src__streams__amb.src__streams__defer;
  const error$ = packages__rxdart__src__streams__amb.src__streams__error;
  const merge = packages__rxdart__src__streams__amb.src__streams__merge;
  const never = packages__rxdart__src__streams__amb.src__streams__never;
  const race = packages__rxdart__src__streams__amb.src__streams__race;
  const range = packages__rxdart__src__streams__amb.src__streams__range;
  const repeat = packages__rxdart__src__streams__amb.src__streams__repeat;
  const retry = packages__rxdart__src__streams__amb.src__streams__retry;
  const retry_when = packages__rxdart__src__streams__amb.src__streams__retry_when;
  const switch_latest = packages__rxdart__src__streams__amb.src__streams__switch_latest;
  const timer = packages__rxdart__src__streams__amb.src__streams__timer;
  const zip = packages__rxdart__src__streams__amb.src__streams__zip;
  const buffer_strategy = packages__rxdart__src__samplers__buffer_strategy.src__samplers__buffer_strategy;
  const notification = packages__rxdart__src__samplers__buffer_strategy.src__utils__notification;
  const $do = packages__rxdart__src__samplers__buffer_strategy.src__transformers__do;
  const sample = packages__rxdart__src__samplers__buffer_strategy.src__transformers__sample;
  const take_until = packages__rxdart__src__samplers__buffer_strategy.src__transformers__take_until;
  const on_error_resume_next = Object.create(dart.library);
  const observable = Object.create(dart.library);
  const transformers = Object.create(dart.library);
  const type_token = Object.create(dart.library);
  const with_latest_from = Object.create(dart.library);
  const window = Object.create(dart.library);
  const timestamp = Object.create(dart.library);
  const time_interval = Object.create(dart.library);
  const throttle = Object.create(dart.library);
  const switch_map = Object.create(dart.library);
  const switch_if_empty = Object.create(dart.library);
  const start_with_many = Object.create(dart.library);
  const start_with = Object.create(dart.library);
  const skip_until = Object.create(dart.library);
  const scan = Object.create(dart.library);
  const on_error_resume = Object.create(dart.library);
  const of_type = Object.create(dart.library);
  const materialize = Object.create(dart.library);
  const map_to = Object.create(dart.library);
  const interval = Object.create(dart.library);
  const ignore_elements = Object.create(dart.library);
  const group_by = Object.create(dart.library);
  const flat_map_latest = Object.create(dart.library);
  const flat_map = Object.create(dart.library);
  const exhaust_map = Object.create(dart.library);
  const distinct_unique = Object.create(dart.library);
  const dematerialize = Object.create(dart.library);
  const delay = Object.create(dart.library);
  const default_if_empty = Object.create(dart.library);
  const debounce = Object.create(dart.library);
  const buffer = Object.create(dart.library);
  const value_observable = Object.create(dart.library);
  const replay_observable = Object.create(dart.library);
  const connectable_observable = Object.create(dart.library);
  const rxdart = Object.create(dart.library);
  const composite_subscription = Object.create(dart.library);
  const subjects = Object.create(dart.library);
  const replay_subject = Object.create(dart.library);
  const subject = Object.create(dart.library);
  const publish_subject = Object.create(dart.library);
  const behavior_subject = Object.create(dart.library);
  const futures = Object.create(dart.library);
  const wrapped_future = Object.create(dart.library);
  const stream_min_future = Object.create(dart.library);
  const stream_max_future = Object.create(dart.library);
  const as_observable_future = Object.create(dart.library);
  const $where = dartx.where;
  const $addAll = dartx.addAll;
  const $isNotEmpty = dartx.isNotEmpty;
  const $add = dartx.add;
  const $length = dartx.length;
  const $sublist = dartx.sublist;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $forEach = dartx.forEach;
  const $putIfAbsent = dartx.putIfAbsent;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $map = dartx.map;
  const $isEmpty = dartx.isEmpty;
  const $toList = dartx.toList;
  const $first = dartx.first;
  const $sort = dartx.sort;
  const $last = dartx.last;
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let AsObservableFutureOfbool = () => (AsObservableFutureOfbool = dart.constFn(as_observable_future.AsObservableFuture$(core.bool)))();
  let ObservableOfint = () => (ObservableOfint = dart.constFn(observable.Observable$(core.int)))();
  let AsObservableFutureOfString = () => (AsObservableFutureOfString = dart.constFn(as_observable_future.AsObservableFuture$(core.String)))();
  let AsObservableFutureOfint = () => (AsObservableFutureOfint = dart.constFn(as_observable_future.AsObservableFuture$(core.int)))();
  let TypeTokenOfbool = () => (TypeTokenOfbool = dart.constFn(type_token.TypeToken$(core.bool)))();
  let TypeTokenOfdouble = () => (TypeTokenOfdouble = dart.constFn(type_token.TypeToken$(core.double)))();
  let TypeTokenOfint = () => (TypeTokenOfint = dart.constFn(type_token.TypeToken$(core.int)))();
  let TypeTokenOfnum = () => (TypeTokenOfnum = dart.constFn(type_token.TypeToken$(core.num)))();
  let TypeTokenOfString = () => (TypeTokenOfString = dart.constFn(type_token.TypeToken$(core.String)))();
  let TypeTokenOfSymbol = () => (TypeTokenOfSymbol = dart.constFn(type_token.TypeToken$(core.Symbol)))();
  let FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let JSArrayOfTimer = () => (JSArrayOfTimer = dart.constFn(_interceptors.JSArray$(async.Timer)))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: TypeTokenOfbool().prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: TypeTokenOfdouble().prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: TypeTokenOfint().prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: TypeTokenOfnum().prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: TypeTokenOfString().prototype
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: TypeTokenOfSymbol().prototype
      });
    },
    get C6() {
      return C6 = dart.fn(delay.DelayStreamTransformer._cancelTimerIfActive, TimerTovoid());
    }
  });
  const _is_OnErrorResumeNextStreamTransformer_default = Symbol('_is_OnErrorResumeNextStreamTransformer_default');
  const OnErrorResumeNextStreamTransformer_transformer = dart.privateName(on_error_resume_next, "OnErrorResumeNextStreamTransformer.transformer");
  on_error_resume_next.OnErrorResumeNextStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class OnErrorResumeNextStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, recoveryStream) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t0, t0$;
              if (resumeSignal === void 0) resumeSignal = null;
              t0 = inputSubscription;
              t0 == null ? null : t0.pause(resumeSignal);
              t0$ = recoverySubscription;
              t0$ == null ? null : t0$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t0, t0$;
              t0 = inputSubscription;
              t0 == null ? null : t0.resume();
              t0$ = recoverySubscription;
              t0$ == null ? null : t0$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t0, t0$;
              return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(t0 = inputSubscription, t0 == null ? null : t0.cancel()), (t0$ = recoverySubscription, t0$ == null ? null : t0$.cancel())])[$where](dart.fn(future => future != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeNextStreamTransformer.new = function(recoveryStream) {
      this[transformer] = on_error_resume_next.OnErrorResumeNextStreamTransformer._buildTransformer(T, recoveryStream);
      OnErrorResumeNextStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = OnErrorResumeNextStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeNextStreamTransformer);
    OnErrorResumeNextStreamTransformer.prototype[_is_OnErrorResumeNextStreamTransformer_default] = true;
    const transformer = OnErrorResumeNextStreamTransformer_transformer;
    dart.setMethodSignature(OnErrorResumeNextStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeNextStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(OnErrorResumeNextStreamTransformer, "package:rxdart/src/transformers/on_error_resume_next.dart");
    dart.setFieldSignature(OnErrorResumeNextStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeNextStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return OnErrorResumeNextStreamTransformer;
  });
  on_error_resume_next.OnErrorResumeNextStreamTransformer = on_error_resume_next.OnErrorResumeNextStreamTransformer$();
  dart.addTypeTests(on_error_resume_next.OnErrorResumeNextStreamTransformer, _is_OnErrorResumeNextStreamTransformer_default);
  const _stream = dart.privateName(observable, "_stream");
  const _is_Observable_default = Symbol('_is_Observable_default');
  observable.Observable$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(observable.Observable$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let StreamOfListOfT = () => (StreamOfListOfT = dart.constFn(async.Stream$(ListOfT())))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let EventSinkOfListOfT = () => (EventSinkOfListOfT = dart.constFn(async.EventSink$(ListOfT())))();
    let TAndEventSinkOfListOfTAndintTovoid = () => (TAndEventSinkOfListOfTAndintTovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfListOfT()], [core.int])))();
    let ListOfTAndEventSinkOfListOfTAndintTovoid = () => (ListOfTAndEventSinkOfListOfTAndintTovoid = dart.constFn(dart.fnType(dart.void, [ListOfT(), EventSinkOfListOfT()], [core.int])))();
    let StreamOfTAndFnAndFnToStreamOfListOfT = () => (StreamOfTAndFnAndFnToStreamOfListOfT = dart.constFn(dart.fnType(StreamOfListOfT(), [StreamOfT(), TAndEventSinkOfListOfTAndintTovoid(), ListOfTAndEventSinkOfListOfTAndintTovoid()])))();
    let BufferStreamTransformerOfT = () => (BufferStreamTransformerOfT = dart.constFn(buffer.BufferStreamTransformer$(T)))();
    let IterableOfStreamOfT = () => (IterableOfStreamOfT = dart.constFn(core.Iterable$(StreamOfT())))();
    let ConcatStreamOfT = () => (ConcatStreamOfT = dart.constFn(concat.ConcatStream$(T)))();
    let JSArrayOfStreamOfT = () => (JSArrayOfStreamOfT = dart.constFn(_interceptors.JSArray$(StreamOfT())))();
    let DebounceStreamTransformerOfT = () => (DebounceStreamTransformerOfT = dart.constFn(debounce.DebounceStreamTransformer$(T)))();
    let DefaultIfEmptyStreamTransformerOfT = () => (DefaultIfEmptyStreamTransformerOfT = dart.constFn(default_if_empty.DefaultIfEmptyStreamTransformer$(T)))();
    let DelayStreamTransformerOfT = () => (DelayStreamTransformerOfT = dart.constFn(delay.DelayStreamTransformer$(T)))();
    let DistinctUniqueStreamTransformerOfT = () => (DistinctUniqueStreamTransformerOfT = dart.constFn(distinct_unique.DistinctUniqueStreamTransformer$(T)))();
    let DoStreamTransformerOfT = () => (DoStreamTransformerOfT = dart.constFn($do.DoStreamTransformer$(T)))();
    let AsObservableFutureOfT = () => (AsObservableFutureOfT = dart.constFn(as_observable_future.AsObservableFuture$(T)))();
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let IgnoreElementsStreamTransformerOfT = () => (IgnoreElementsStreamTransformerOfT = dart.constFn(ignore_elements.IgnoreElementsStreamTransformer$(T)))();
    let IntervalStreamTransformerOfT = () => (IntervalStreamTransformerOfT = dart.constFn(interval.IntervalStreamTransformer$(T)))();
    let NotificationOfT = () => (NotificationOfT = dart.constFn(notification.Notification$(T)))();
    let MaterializeStreamTransformerOfT = () => (MaterializeStreamTransformerOfT = dart.constFn(materialize.MaterializeStreamTransformer$(T)))();
    let StreamMaxFutureOfT = () => (StreamMaxFutureOfT = dart.constFn(stream_max_future.StreamMaxFuture$(T)))();
    let MergeStreamOfT = () => (MergeStreamOfT = dart.constFn(merge.MergeStream$(T)))();
    let StreamMinFutureOfT = () => (StreamMinFutureOfT = dart.constFn(stream_min_future.StreamMinFuture$(T)))();
    let OnErrorResumeStreamTransformerOfT = () => (OnErrorResumeStreamTransformerOfT = dart.constFn(on_error_resume.OnErrorResumeStreamTransformer$(T)))();
    let dynamicToStreamOfT = () => (dynamicToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [dart.dynamic])))();
    let dynamicToObservableOfT = () => (dynamicToObservableOfT = dart.constFn(dart.fnType(ObservableOfT(), [dart.dynamic])))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    let StreamConsumerOfT = () => (StreamConsumerOfT = dart.constFn(async.StreamConsumer$(T)))();
    let TAndTToT = () => (TAndTToT = dart.constFn(dart.fnType(T, [T, T])))();
    let SampleStreamTransformerOfT = () => (SampleStreamTransformerOfT = dart.constFn(sample.SampleStreamTransformer$(T)))();
    let StartWithStreamTransformerOfT = () => (StartWithStreamTransformerOfT = dart.constFn(start_with.StartWithStreamTransformer$(T)))();
    let StartWithManyStreamTransformerOfT = () => (StartWithManyStreamTransformerOfT = dart.constFn(start_with_many.StartWithManyStreamTransformer$(T)))();
    let SwitchIfEmptyStreamTransformerOfT = () => (SwitchIfEmptyStreamTransformerOfT = dart.constFn(switch_if_empty.SwitchIfEmptyStreamTransformer$(T)))();
    let ThrottleStreamTransformerOfT = () => (ThrottleStreamTransformerOfT = dart.constFn(throttle.ThrottleStreamTransformer$(T)))();
    let TimeIntervalOfT = () => (TimeIntervalOfT = dart.constFn(time_interval.TimeInterval$(T)))();
    let TimeIntervalStreamTransformerOfT = () => (TimeIntervalStreamTransformerOfT = dart.constFn(time_interval.TimeIntervalStreamTransformer$(T)))();
    let TimestampedOfT = () => (TimestampedOfT = dart.constFn(timestamp.Timestamped$(T)))();
    let TimestampStreamTransformerOfT = () => (TimestampStreamTransformerOfT = dart.constFn(timestamp.TimestampStreamTransformer$(T)))();
    let AsObservableFutureOfListOfT = () => (AsObservableFutureOfListOfT = dart.constFn(as_observable_future.AsObservableFuture$(ListOfT())))();
    let SetOfT = () => (SetOfT = dart.constFn(core.Set$(T)))();
    let AsObservableFutureOfSetOfT = () => (AsObservableFutureOfSetOfT = dart.constFn(as_observable_future.AsObservableFuture$(SetOfT())))();
    let StreamOfStreamOfT = () => (StreamOfStreamOfT = dart.constFn(async.Stream$(StreamOfT())))();
    let EventSinkOfStreamOfT = () => (EventSinkOfStreamOfT = dart.constFn(async.EventSink$(StreamOfT())))();
    let TAndEventSinkOfStreamOfTAndintTovoid = () => (TAndEventSinkOfStreamOfTAndintTovoid = dart.constFn(dart.fnType(dart.void, [T, EventSinkOfStreamOfT()], [core.int])))();
    let StreamOfTAndEventSinkOfStreamOfTAndintTovoid = () => (StreamOfTAndEventSinkOfStreamOfTAndintTovoid = dart.constFn(dart.fnType(dart.void, [StreamOfT(), EventSinkOfStreamOfT()], [core.int])))();
    let StreamOfTAndFnAndFnToStreamOfStreamOfT = () => (StreamOfTAndFnAndFnToStreamOfStreamOfT = dart.constFn(dart.fnType(StreamOfStreamOfT(), [StreamOfT(), TAndEventSinkOfStreamOfTAndintTovoid(), StreamOfTAndEventSinkOfStreamOfTAndintTovoid()])))();
    let WindowStreamTransformerOfT = () => (WindowStreamTransformerOfT = dart.constFn(window.WindowStreamTransformer$(T)))();
    let PublishConnectableObservableOfT = () => (PublishConnectableObservableOfT = dart.constFn(connectable_observable.PublishConnectableObservable$(T)))();
    let ValueConnectableObservableOfT = () => (ValueConnectableObservableOfT = dart.constFn(connectable_observable.ValueConnectableObservable$(T)))();
    let ReplayConnectableObservableOfT = () => (ReplayConnectableObservableOfT = dart.constFn(connectable_observable.ReplayConnectableObservable$(T)))();
    class Observable extends async.Stream$(T) {
      any(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].any(test));
      }
      static combineLatest(T, R, streams, combiner) {
        return new (observable.Observable$(R)).new(new (combine_latest.CombineLatestStream$(T, R)).new(streams, combiner));
      }
      static combineLatestList(T, streams) {
        return new (observable.Observable$(core.List$(T))).new(combine_latest.CombineLatestStream.list(T, streams));
      }
      static combineLatest2(A, B, T, streamA, streamB, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine2(A, B, T, streamA, streamB, combiner));
      }
      static combineLatest3(A, B, C, T, streamA, streamB, streamC, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner));
      }
      static combineLatest4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner));
      }
      static combineLatest5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner));
      }
      static combineLatest6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner));
      }
      static combineLatest7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner));
      }
      static combineLatest8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner));
      }
      static combineLatest9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner));
      }
      static concat(streams) {
        return new (observable.Observable$(T)).new(new (concat.ConcatStream$(T)).new(streams));
      }
      static concatEager(streams) {
        return new (observable.Observable$(T)).new(new (concat_eager.ConcatEagerStream$(T)).new(streams));
      }
      static defer(streamFactory, opts) {
        let reusable = opts && 'reusable' in opts ? opts.reusable : false;
        return new (observable.Observable$(T)).new(new (defer.DeferStream$(T)).new(streamFactory, {reusable: reusable}));
      }
      static error(error) {
        return new (observable.Observable$(T)).new(new (error$.ErrorStream$(T)).new(error));
      }
      static eventTransformed(source, mapSink) {
        return new (observable.Observable$(T)).new(async.Stream$(T).eventTransformed(source, mapSink));
      }
      static fromFuture(future) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromFuture(future));
      }
      static fromIterable(data) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromIterable(data));
      }
      static just(data) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromIterable(_interceptors.JSArray$(T).of([data])));
      }
      static empty() {
        return new (observable.Observable$(T)).new(new (async._EmptyStream$(T)).new());
      }
      static merge(streams) {
        return new (observable.Observable$(T)).new(new (merge.MergeStream$(T)).new(streams));
      }
      static never() {
        return new (observable.Observable$(T)).new(new (never.NeverStream$(T)).new());
      }
      static periodic(period, computation) {
        if (computation === void 0) computation = null;
        return new (observable.Observable$(T)).new(async.Stream$(T).periodic(period, computation));
      }
      static race(streams) {
        return new (observable.Observable$(T)).new(new (race.RaceStream$(T)).new(streams));
      }
      static range(startInclusive, endInclusive) {
        return new (ObservableOfint()).new(new range.RangeStream.new(startInclusive, endInclusive));
      }
      static repeat(streamFactory, count) {
        if (count === void 0) count = null;
        return new (observable.Observable$(T)).new(new (repeat.RepeatStream$(T)).new(streamFactory, count));
      }
      static retry(streamFactory, count) {
        if (count === void 0) count = null;
        return new (observable.Observable$(T)).new(new (retry.RetryStream$(T)).new(streamFactory, count));
      }
      static retryWhen(streamFactory, retryWhenFactory) {
        return new (observable.Observable$(T)).new(new (retry_when.RetryWhenStream$(T)).new(streamFactory, retryWhenFactory));
      }
      static switchLatest(streams) {
        return new (observable.Observable$(T)).new(new (switch_latest.SwitchLatestStream$(T)).new(streams));
      }
      static timer(value, duration) {
        return new (observable.Observable$(T)).new(new (timer.TimerStream$(T)).new(value, duration));
      }
      static zip2(A, B, T, streamA, streamB, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip2(A, B, T, streamA, streamB, zipper));
      }
      static zip(T, R, streams, zipper) {
        return new (observable.Observable$(R)).new(new (zip.ZipStream$(T, R)).new(streams, zipper));
      }
      static zipList(T, streams) {
        return new (observable.Observable$(core.List$(T))).new(zip.ZipStream.list(T, streams));
      }
      static zip3(A, B, C, T, streamA, streamB, streamC, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip3(A, B, C, T, streamA, streamB, streamC, zipper));
      }
      static zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper));
      }
      static zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper));
      }
      static zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper));
      }
      static zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper));
      }
      static zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper));
      }
      static zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper));
      }
      asBroadcastStream(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        return new (ObservableOfT()).new(this[_stream].asBroadcastStream({onListen: onListen, onCancel: onCancel}));
      }
      asyncExpand(S, mapper) {
        return new (observable.Observable$(S)).new(this[_stream].asyncExpand(S, mapper));
      }
      asyncMap(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].asyncMap(S, convert));
      }
      buffer(sampler) {
        StreamOfTAndFnAndFnToStreamOfListOfT()._check(sampler);
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(dart.fn((stream, bufferHandler, scheduleHandler) => sampler(stream, bufferHandler, scheduleHandler), StreamOfTAndFnAndFnToStreamOfListOfT())));
      }
      bufferCount(count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(buffer_strategy.onCount(T, ListOfT(), count, startBufferEvery)));
      }
      bufferFuture(O, onFutureHandler) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(buffer_strategy.onFuture(T, ListOfT(), O, onFutureHandler)));
      }
      bufferTest(onTestHandler) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(buffer_strategy.onTest(T, ListOfT(), onTestHandler)));
      }
      bufferTime(duration) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(buffer_strategy.onTime(T, ListOfT(), duration)));
      }
      bufferWhen(O, other) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(buffer_strategy.onStream(T, ListOfT(), O, other)));
      }
      cast(R) {
        return new (observable.Observable$(R)).new(this[_stream].cast(R));
      }
      concatMap(S, mapper) {
        return new (observable.Observable$(S)).new(this[_stream].asyncExpand(S, mapper));
      }
      concatWith(other) {
        let t0;
        IterableOfStreamOfT()._check(other);
        return new (ObservableOfT()).new(new (ConcatStreamOfT()).new((t0 = JSArrayOfStreamOfT().of([this[_stream]]), t0[$addAll](other), t0)));
      }
      contains(needle) {
        return new (AsObservableFutureOfbool()).new(this[_stream].contains(needle));
      }
      debounce(duration) {
        return this.transform(T, new (DebounceStreamTransformerOfT()).new(duration));
      }
      defaultIfEmpty(defaultValue) {
        T._check(defaultValue);
        return this.transform(T, new (DefaultIfEmptyStreamTransformerOfT()).new(defaultValue));
      }
      delay(duration) {
        return this.transform(T, new (DelayStreamTransformerOfT()).new(duration));
      }
      dematerialize(S) {
        return this.cast(notification.Notification$(S)).transform(S, new (dematerialize.DematerializeStreamTransformer$(S)).new());
      }
      distinct(equals) {
        if (equals === void 0) equals = null;
        return new (ObservableOfT()).new(this[_stream].distinct(equals));
      }
      distinctUnique(opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
        return this.transform(T, new (DistinctUniqueStreamTransformerOfT()).new({equals: equals, hashCode: hashCode}));
      }
      doOnCancel(onCancel) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onCancel: onCancel}));
      }
      doOnData(onData) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onData: onData}));
      }
      doOnDone(onDone) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onDone: onDone}));
      }
      doOnEach(onEach) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onEach: onEach}));
      }
      doOnError(onError) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onError: onError}));
      }
      doOnListen(onListen) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onListen: onListen}));
      }
      doOnPause(onPause) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onPause: onPause}));
      }
      doOnResume(onResume) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onResume: onResume}));
      }
      drain(S, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return new (as_observable_future.AsObservableFuture$(S)).new(this[_stream].drain(S, futureValue));
      }
      elementAt(index) {
        return new (AsObservableFutureOfT()).new(this[_stream].elementAt(index));
      }
      every(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].every(test));
      }
      exhaustMap(S, mapper) {
        return this.transform(S, new (exhaust_map.ExhaustMapStreamTransformer$(T, S)).new(mapper));
      }
      expand(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].expand(S, convert));
      }
      get first() {
        return new (AsObservableFutureOfT()).new(this[_stream].first);
      }
      firstWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].firstWhere(test, {orElse: orElse}));
      }
      flatMap(S, mapper) {
        return this.transform(S, new (flat_map.FlatMapStreamTransformer$(T, S)).new(mapper));
      }
      flatMapIterable(S, mapper) {
        return this.transform(core.Iterable$(S), new (flat_map.FlatMapStreamTransformer$(T, core.Iterable$(S))).new(mapper)).expand(S, dart.fn(iterable => iterable, dart.fnType(core.Iterable$(S), [core.Iterable$(S)])));
      }
      fold(S, initialValue, combine) {
        return new (as_observable_future.AsObservableFuture$(S)).new(this[_stream].fold(S, initialValue, combine));
      }
      forEach(action) {
        return new as_observable_future.AsObservableFuture.new(this[_stream].forEach(action));
      }
      groupBy(S, grouper) {
        return this.transform(group_by.GroupByObservable$(T, S), new (group_by.GroupByStreamTransformer$(T, S)).new(grouper));
      }
      handleError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return new (ObservableOfT()).new(this[_stream].handleError(onError, {test: test}));
      }
      ignoreElements() {
        return this.transform(T, new (IgnoreElementsStreamTransformerOfT()).new());
      }
      interval(duration) {
        return this.transform(T, new (IntervalStreamTransformerOfT()).new(duration));
      }
      get isBroadcast() {
        return this[_stream] != null ? this[_stream].isBroadcast : false;
      }
      get isEmpty() {
        return new (AsObservableFutureOfbool()).new(this[_stream].isEmpty);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return new (AsObservableFutureOfString()).new(this[_stream].join(separator));
      }
      get last() {
        return new (AsObservableFutureOfT()).new(this[_stream].last);
      }
      lastWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].lastWhere(test, {orElse: orElse}));
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_stream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get length() {
        return new (AsObservableFutureOfint()).new(this[_stream].length);
      }
      map(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].map(S, convert));
      }
      mapTo(S, value) {
        return this.transform(S, new (map_to.MapToStreamTransformer$(T, S)).new(value));
      }
      materialize() {
        return this.transform(NotificationOfT(), new (MaterializeStreamTransformerOfT()).new());
      }
      max(comparator) {
        if (comparator === void 0) comparator = null;
        return new (AsObservableFutureOfT()).new(new (StreamMaxFutureOfT()).new(this[_stream], comparator));
      }
      mergeWith(streams) {
        let t0;
        IterableOfStreamOfT()._check(streams);
        return new (ObservableOfT()).new(new (MergeStreamOfT()).new((t0 = JSArrayOfStreamOfT().of([this[_stream]]), t0[$addAll](streams), t0)));
      }
      min(comparator) {
        if (comparator === void 0) comparator = null;
        return new (AsObservableFutureOfT()).new(new (StreamMinFutureOfT()).new(this[_stream], comparator));
      }
      ofType(S, typeToken) {
        return this.transform(S, new (of_type.OfTypeStreamTransformer$(T, S)).new(typeToken));
      }
      onErrorResumeNext(recoveryStream) {
        StreamOfT()._check(recoveryStream);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => recoveryStream, dynamicToStreamOfT())));
      }
      onErrorResume(recoveryFn) {
        dynamicToStreamOfT()._check(recoveryFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(recoveryFn));
      }
      onErrorReturn(returnValue) {
        T._check(returnValue);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnValue), dynamicToObservableOfT())));
      }
      onErrorReturnWith(returnFn) {
        dynamicToT()._check(returnFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnFn(e)), dynamicToObservableOfT())));
      }
      pairwise() {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(buffer_strategy.onCount(T, ListOfT(), 2, 1), {exhaustBufferOnDone: false}));
      }
      pipe(streamConsumer) {
        StreamConsumerOfT()._check(streamConsumer);
        return new as_observable_future.AsObservableFuture.new(this[_stream].pipe(streamConsumer));
      }
      reduce(combine) {
        TAndTToT()._check(combine);
        return new (AsObservableFutureOfT()).new(this[_stream].reduce(combine));
      }
      sample(sampleStream) {
        return this.transform(T, new (SampleStreamTransformerOfT()).new(sampleStream));
      }
      scan(S, accumulator, seed) {
        if (seed === void 0) seed = null;
        return this.transform(S, new (scan.ScanStreamTransformer$(T, S)).new(accumulator, seed));
      }
      get single() {
        return new (AsObservableFutureOfT()).new(this[_stream].single);
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].singleWhere(test, {orElse: orElse}));
      }
      skip(count) {
        return new (ObservableOfT()).new(this[_stream].skip(count));
      }
      skipUntil(S, otherStream) {
        return this.transform(T, new (skip_until.SkipUntilStreamTransformer$(T, S)).new(otherStream));
      }
      skipWhile(test) {
        return new (ObservableOfT()).new(this[_stream].skipWhile(test));
      }
      startWith(startValue) {
        T._check(startValue);
        return this.transform(T, new (StartWithStreamTransformerOfT()).new(startValue));
      }
      startWithMany(startValues) {
        ListOfT()._check(startValues);
        return this.transform(T, new (StartWithManyStreamTransformerOfT()).new(startValues));
      }
      switchIfEmpty(fallbackStream) {
        StreamOfT()._check(fallbackStream);
        return this.transform(T, new (SwitchIfEmptyStreamTransformerOfT()).new(fallbackStream));
      }
      switchMap(S, mapper) {
        return this.transform(S, new (switch_map.SwitchMapStreamTransformer$(T, S)).new(mapper));
      }
      take(count) {
        return new (ObservableOfT()).new(this[_stream].take(count));
      }
      takeUntil(S, otherStream) {
        return this.transform(T, new (take_until.TakeUntilStreamTransformer$(T, S)).new(otherStream));
      }
      takeWhile(test) {
        return new (ObservableOfT()).new(this[_stream].takeWhile(test));
      }
      throttle(duration) {
        return this.transform(T, new (ThrottleStreamTransformerOfT()).new(duration));
      }
      timeInterval() {
        return this.transform(TimeIntervalOfT(), new (TimeIntervalStreamTransformerOfT()).new());
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return new (ObservableOfT()).new(this[_stream].timeout(timeLimit, {onTimeout: onTimeout}));
      }
      timestamp() {
        return this.transform(TimestampedOfT(), new (TimestampStreamTransformerOfT()).new());
      }
      transform(S, streamTransformer) {
        async.StreamTransformer$(T, S)._check(streamTransformer);
        return new (observable.Observable$(S)).new(super.transform(S, streamTransformer));
      }
      toList() {
        return new (AsObservableFutureOfListOfT()).new(this[_stream].toList());
      }
      toSet() {
        return new (AsObservableFutureOfSetOfT()).new(this[_stream].toSet());
      }
      where(test) {
        return new (ObservableOfT()).new(this[_stream].where(test));
      }
      window(sampler) {
        StreamOfTAndFnAndFnToStreamOfStreamOfT()._check(sampler);
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(dart.fn((stream, bufferHandler, scheduleHandler) => sampler(stream, bufferHandler, scheduleHandler), StreamOfTAndFnAndFnToStreamOfStreamOfT())));
      }
      windowCount(count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(buffer_strategy.onCount(T, StreamOfT(), count, startBufferEvery)));
      }
      windowFuture(O, onFutureHandler) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(buffer_strategy.onFuture(T, StreamOfT(), O, onFutureHandler)));
      }
      windowTest(onTestHandler) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(buffer_strategy.onTest(T, StreamOfT(), onTestHandler)));
      }
      windowTime(duration) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(buffer_strategy.onTime(T, StreamOfT(), duration)));
      }
      windowWhen(O, other) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(buffer_strategy.onStream(T, StreamOfT(), O, other)));
      }
      withLatestFrom(S, R, latestFromStream, fn) {
        return this.transform(R, new (with_latest_from.WithLatestFromStreamTransformer$(T, S, R)).new(latestFromStream, fn));
      }
      zipWith(S, R, other, zipper) {
        return new (observable.Observable$(R)).new(zip.ZipStream.zip2(T, S, R, this[_stream], other, zipper));
      }
      publish() {
        return PublishConnectableObservableOfT().new(this);
      }
      publishValue() {
        return ValueConnectableObservableOfT().new(this);
      }
      publishValueSeeded(seedValue) {
        T._check(seedValue);
        return ValueConnectableObservableOfT().seeded(this, seedValue);
      }
      publishReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return ReplayConnectableObservableOfT().new(this, {maxSize: maxSize});
      }
      share() {
        return this.publish().refCount();
      }
      shareValue() {
        return this.publishValue().refCount();
      }
      shareValueSeeded(seedValue) {
        T._check(seedValue);
        return this.publishValueSeeded(seedValue).refCount();
      }
      shareReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return this.publishReplay({maxSize: maxSize}).refCount();
      }
    }
    (Observable.new = function(stream) {
      this[_stream] = stream;
      Observable.__proto__.new.call(this);
      ;
    }).prototype = Observable.prototype;
    dart.addTypeTests(Observable);
    Observable.prototype[_is_Observable_default] = true;
    dart.setMethodSignature(Observable, () => ({
      __proto__: dart.getMethods(Observable.__proto__),
      any: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      asBroadcastStream: dart.fnType(observable.Observable$(T), [], {onCancel: dart.fnType(dart.void, [async.StreamSubscription$(T)]), onListen: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      asyncExpand: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      asyncMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.FutureOr$(S), [T])]]),
      buffer: dart.fnType(observable.Observable$(core.List$(T)), [core.Object]),
      bufferCount: dart.fnType(observable.Observable$(core.List$(T)), [core.int], [core.int]),
      bufferFuture: dart.gFnType(O => [observable.Observable$(core.List$(T)), [dart.fnType(async.Future$(O), [])]]),
      bufferTest: dart.fnType(observable.Observable$(core.List$(T)), [dart.fnType(core.bool, [T])]),
      bufferTime: dart.fnType(observable.Observable$(core.List$(T)), [core.Duration]),
      bufferWhen: dart.gFnType(O => [observable.Observable$(core.List$(T)), [async.Stream$(O)]]),
      cast: dart.gFnType(R => [observable.Observable$(R), []]),
      concatMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      concatWith: dart.fnType(observable.Observable$(T), [core.Object]),
      contains: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [core.Object]),
      debounce: dart.fnType(observable.Observable$(T), [core.Duration]),
      defaultIfEmpty: dart.fnType(observable.Observable$(T), [core.Object]),
      delay: dart.fnType(observable.Observable$(T), [core.Duration]),
      dematerialize: dart.gFnType(S => [observable.Observable$(S), []]),
      distinct: dart.fnType(observable.Observable$(T), [], [dart.fnType(core.bool, [T, T])]),
      distinctUnique: dart.fnType(observable.Observable$(T), [], {equals: dart.fnType(core.bool, [T, T]), hashCode: dart.fnType(core.int, [T])}),
      doOnCancel: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnData: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [T])]),
      doOnDone: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnEach: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [notification.Notification$(T)])]),
      doOnError: dart.fnType(observable.Observable$(T), [core.Function]),
      doOnListen: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnPause: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [async.Future])]),
      doOnResume: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      drain: dart.gFnType(S => [as_observable_future.AsObservableFuture$(S), [], [S]]),
      elementAt: dart.fnType(as_observable_future.AsObservableFuture$(T), [core.int]),
      every: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      exhaustMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      expand: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(core.Iterable$(S), [T])]]),
      firstWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(dart.dynamic, []), orElse: core.Object}),
      flatMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      flatMapIterable: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(core.Iterable$(S)), [T])]]),
      fold: dart.gFnType(S => [as_observable_future.AsObservableFuture$(S), [S, dart.fnType(S, [S, T])]]),
      forEach: dart.fnType(as_observable_future.AsObservableFuture, [dart.fnType(dart.void, [T])]),
      groupBy: dart.gFnType(S => [observable.Observable$(group_by.GroupByObservable$(T, S)), [dart.fnType(S, [T])]]),
      handleError: dart.fnType(observable.Observable$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
      ignoreElements: dart.fnType(observable.Observable$(T), []),
      interval: dart.fnType(observable.Observable$(T), [core.Duration]),
      join: dart.fnType(as_observable_future.AsObservableFuture$(core.String), [], [core.String]),
      lastWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(core.Object, []), orElse: core.Object}),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
      map: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(S, [T])]]),
      mapTo: dart.gFnType(S => [observable.Observable$(S), [S]]),
      materialize: dart.fnType(observable.Observable$(notification.Notification$(T)), []),
      max: dart.fnType(as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      mergeWith: dart.fnType(observable.Observable$(T), [core.Object]),
      min: dart.fnType(as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      ofType: dart.gFnType(S => [observable.Observable$(S), [type_token.TypeToken$(S)]]),
      onErrorResumeNext: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorResume: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorReturn: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorReturnWith: dart.fnType(observable.Observable$(T), [core.Object]),
      pairwise: dart.fnType(observable.Observable$(core.List$(T)), []),
      pipe: dart.fnType(as_observable_future.AsObservableFuture, [core.Object]),
      reduce: dart.fnType(as_observable_future.AsObservableFuture$(T), [core.Object]),
      sample: dart.fnType(observable.Observable$(T), [async.Stream]),
      scan: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(S, [S, T, core.int])], [S]]),
      singleWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {orElse: core.Object}),
      skip: dart.fnType(observable.Observable$(T), [core.int]),
      skipUntil: dart.gFnType(S => [observable.Observable$(T), [async.Stream$(S)]]),
      skipWhile: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      startWith: dart.fnType(observable.Observable$(T), [core.Object]),
      startWithMany: dart.fnType(observable.Observable$(T), [core.Object]),
      switchIfEmpty: dart.fnType(observable.Observable$(T), [core.Object]),
      switchMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      take: dart.fnType(observable.Observable$(T), [core.int]),
      takeUntil: dart.gFnType(S => [observable.Observable$(T), [async.Stream$(S)]]),
      takeWhile: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      throttle: dart.fnType(observable.Observable$(T), [core.Duration]),
      timeInterval: dart.fnType(observable.Observable$(time_interval.TimeInterval$(T)), []),
      timeout: dart.fnType(observable.Observable$(T), [core.Duration], {onTimeout: dart.fnType(dart.void, [async.EventSink$(T)])}),
      timestamp: dart.fnType(observable.Observable$(timestamp.Timestamped$(T)), []),
      transform: dart.gFnType(S => [observable.Observable$(S), [core.Object]]),
      toList: dart.fnType(as_observable_future.AsObservableFuture$(core.List$(T)), []),
      toSet: dart.fnType(as_observable_future.AsObservableFuture$(core.Set$(T)), []),
      where: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      window: dart.fnType(observable.Observable$(async.Stream$(T)), [core.Object]),
      windowCount: dart.fnType(observable.Observable$(async.Stream$(T)), [core.int], [core.int]),
      windowFuture: dart.gFnType(O => [observable.Observable$(async.Stream$(T)), [dart.fnType(async.Future$(O), [])]]),
      windowTest: dart.fnType(observable.Observable$(async.Stream$(T)), [dart.fnType(core.bool, [T])]),
      windowTime: dart.fnType(observable.Observable$(async.Stream$(T)), [core.Duration]),
      windowWhen: dart.gFnType(O => [observable.Observable$(async.Stream$(T)), [async.Stream$(O)]]),
      withLatestFrom: dart.gFnType((S, R) => [observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      zipWith: dart.gFnType((S, R) => [observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      publish: dart.fnType(connectable_observable.ConnectableObservable$(T), []),
      publishValue: dart.fnType(connectable_observable.ValueConnectableObservable$(T), []),
      publishValueSeeded: dart.fnType(connectable_observable.ValueConnectableObservable$(T), [core.Object]),
      publishReplay: dart.fnType(connectable_observable.ReplayConnectableObservable$(T), [], {maxSize: core.int}),
      share: dart.fnType(observable.Observable$(T), []),
      shareValue: dart.fnType(value_observable.ValueObservable$(T), []),
      shareValueSeeded: dart.fnType(value_observable.ValueObservable$(T), [core.Object]),
      shareReplay: dart.fnType(replay_observable.ReplayObservable$(T), [], {maxSize: core.int})
    }));
    dart.setGetterSignature(Observable, () => ({
      __proto__: dart.getGetters(Observable.__proto__),
      first: as_observable_future.AsObservableFuture$(T),
      isEmpty: as_observable_future.AsObservableFuture$(core.bool),
      last: as_observable_future.AsObservableFuture$(T),
      length: as_observable_future.AsObservableFuture$(core.int),
      single: as_observable_future.AsObservableFuture$(T)
    }));
    dart.setLibraryUri(Observable, "package:rxdart/src/observables/observable.dart");
    dart.setFieldSignature(Observable, () => ({
      __proto__: dart.getFields(Observable.__proto__),
      [_stream]: dart.finalFieldType(async.Stream$(T))
    }));
    return Observable;
  });
  observable.Observable = observable.Observable$();
  dart.addTypeTests(observable.Observable, _is_Observable_default);
  const _is_TypeToken_default = Symbol('_is_TypeToken_default');
  type_token.TypeToken$ = dart.generic(S => {
    class TypeToken extends core.Object {
      isType(other) {
        return S.is(other);
      }
      toType(other) {
        return S.as(other);
      }
    }
    (TypeToken.new = function() {
      ;
    }).prototype = TypeToken.prototype;
    dart.addTypeTests(TypeToken);
    TypeToken.prototype[_is_TypeToken_default] = true;
    dart.setMethodSignature(TypeToken, () => ({
      __proto__: dart.getMethods(TypeToken.__proto__),
      isType: dart.fnType(core.bool, [dart.dynamic]),
      toType: dart.fnType(S, [dart.dynamic])
    }));
    dart.setLibraryUri(TypeToken, "package:rxdart/src/utils/type_token.dart");
    return TypeToken;
  });
  type_token.TypeToken = type_token.TypeToken$();
  dart.addTypeTests(type_token.TypeToken, _is_TypeToken_default);
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  dart.defineLazy(type_token, {
    /*type_token.kBool*/get kBool() {
      return C0 || CT.C0;
    },
    /*type_token.kDouble*/get kDouble() {
      return C1 || CT.C1;
    },
    /*type_token.kInt*/get kInt() {
      return C2 || CT.C2;
    },
    /*type_token.kNum*/get kNum() {
      return C3 || CT.C3;
    },
    /*type_token.kString*/get kString() {
      return C4 || CT.C4;
    },
    /*type_token.kSymbol*/get kSymbol() {
      return C5 || CT.C5;
    }
  });
  const _is_WithLatestFromStreamTransformer_default = Symbol('_is_WithLatestFromStreamTransformer_default');
  const WithLatestFromStreamTransformer_transformer = dart.privateName(with_latest_from, "WithLatestFromStreamTransformer.transformer");
  with_latest_from.WithLatestFromStreamTransformer$ = dart.generic((T, S, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class WithLatestFromStreamTransformer extends async.StreamTransformerBase$(T, R) {
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
      static _buildTransformer(T, S, R, latestFromStream, fn) {
        if (latestFromStream == null) {
          dart.throw(new core.ArgumentError.new("latestFromStream cannot be null"));
        } else if (fn == null) {
          dart.throw(new core.ArgumentError.new("combiner cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, R)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let latestFromSubscription = null;
          let latestValue = null;
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                if (latestValue != null) {
                  try {
                    controller.add(fn(value, latestValue));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError')});
              latestFromSubscription = latestFromStream.listen(dart.fn(latest => {
                latestValue = latest;
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, JSArrayOfFuture().of([subscription.cancel(), latestFromSubscription.cancel()])[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(R), [async.Stream$(T), core.bool])));
      }
    }
    (WithLatestFromStreamTransformer.new = function(latestFromStream, fn) {
      this[transformer] = with_latest_from.WithLatestFromStreamTransformer._buildTransformer(T, S, R, latestFromStream, fn);
      WithLatestFromStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = WithLatestFromStreamTransformer.prototype;
    dart.addTypeTests(WithLatestFromStreamTransformer);
    WithLatestFromStreamTransformer.prototype[_is_WithLatestFromStreamTransformer_default] = true;
    const transformer = WithLatestFromStreamTransformer_transformer;
    dart.setMethodSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getMethods(WithLatestFromStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(R), [core.Object])
    }));
    dart.setLibraryUri(WithLatestFromStreamTransformer, "package:rxdart/src/transformers/with_latest_from.dart");
    dart.setFieldSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getFields(WithLatestFromStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, R))
    }));
    return WithLatestFromStreamTransformer;
  });
  with_latest_from.WithLatestFromStreamTransformer = with_latest_from.WithLatestFromStreamTransformer$();
  dart.addTypeTests(with_latest_from.WithLatestFromStreamTransformer, _is_WithLatestFromStreamTransformer_default);
  const _is_WindowStreamTransformer_default = Symbol('_is_WindowStreamTransformer_default');
  const WindowStreamTransformer_sampler = dart.privateName(window, "WindowStreamTransformer.sampler");
  const WindowStreamTransformer_exhaustBufferOnDone = dart.privateName(window, "WindowStreamTransformer.exhaustBufferOnDone");
  window.WindowStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class WindowStreamTransformer extends async.StreamTransformerBase$(T, async.Stream$(T)) {
      get sampler() {
        return this[sampler$];
      }
      set sampler(value) {
        super.sampler = value;
      }
      get exhaustBufferOnDone() {
        return this[exhaustBufferOnDone$];
      }
      set exhaustBufferOnDone(value) {
        super.exhaustBufferOnDone = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return window.WindowStreamTransformer._buildTransformer(T, this.sampler, this.exhaustBufferOnDone).bind(stream);
      }
      static _buildTransformer(T, scheduler, exhaustBufferOnDone) {
        window.WindowStreamTransformer.assertSampler(T, scheduler);
        return new (async._StreamSubscriptionTransformer$(T, async.Stream$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let buffer = _interceptors.JSArray$(T).of([]);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            if (dart.test(exhaustBufferOnDone) && dart.test(buffer[$isNotEmpty])) controller.add(async.Stream$(T).fromIterable(buffer));
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(async.Stream$(T)).new({sync: true, onListen: dart.fn(() => {
              try {
                subscription = scheduler(input, dart.fn((data, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  buffer[$add](data);
                  sink.add(async.Stream$(T).fromIterable(buffer));
                }, dart.fnType(core.Null, [T, async.EventSink$(async.Stream$(T))], [core.int])), dart.fn((_, sink, startBufferEvery) => {
                  let t1;
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  t1 = startBufferEvery;
                  t1 == null ? 0 : t1;
                  sink.add(async.Stream$(T).fromIterable(buffer));
                  buffer = dart.notNull(startBufferEvery) > 0 && dart.notNull(startBufferEvery) < dart.notNull(buffer[$length]) ? buffer[$sublist](startBufferEvery) : _interceptors.JSArray$(T).of([]);
                }, dart.fnType(core.Null, [async.Stream$(T), async.EventSink$(async.Stream$(T))], [core.int]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(async.Stream$(T)), [async.Stream$(T), core.bool])));
      }
      static assertSampler(T, scheduler) {
        if (scheduler == null) {
          dart.throw(new core.ArgumentError.new("scheduler cannot be null"));
        }
      }
    }
    (WindowStreamTransformer.new = function(sampler, opts) {
      let exhaustBufferOnDone = opts && 'exhaustBufferOnDone' in opts ? opts.exhaustBufferOnDone : true;
      this[sampler$] = sampler;
      this[exhaustBufferOnDone$] = exhaustBufferOnDone;
      WindowStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = WindowStreamTransformer.prototype;
    dart.addTypeTests(WindowStreamTransformer);
    WindowStreamTransformer.prototype[_is_WindowStreamTransformer_default] = true;
    const sampler$ = WindowStreamTransformer_sampler;
    const exhaustBufferOnDone$ = WindowStreamTransformer_exhaustBufferOnDone;
    dart.setMethodSignature(WindowStreamTransformer, () => ({
      __proto__: dart.getMethods(WindowStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(async.Stream$(T)), [core.Object])
    }));
    dart.setLibraryUri(WindowStreamTransformer, "package:rxdart/src/transformers/window.dart");
    dart.setFieldSignature(WindowStreamTransformer, () => ({
      __proto__: dart.getFields(WindowStreamTransformer.__proto__),
      sampler: dart.finalFieldType(dart.fnType(async.Stream$(async.Stream$(T)), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(async.Stream$(T))], [core.int]), dart.fnType(dart.void, [async.Stream$(T), async.EventSink$(async.Stream$(T))], [core.int])])),
      exhaustBufferOnDone: dart.finalFieldType(core.bool)
    }));
    return WindowStreamTransformer;
  });
  window.WindowStreamTransformer = window.WindowStreamTransformer$();
  dart.addTypeTests(window.WindowStreamTransformer, _is_WindowStreamTransformer_default);
  const _is_Timestamped_default = Symbol('_is_Timestamped_default');
  const Timestamped_value = dart.privateName(timestamp, "Timestamped.value");
  const Timestamped_timestamp = dart.privateName(timestamp, "Timestamped.timestamp");
  timestamp.Timestamped$ = dart.generic(T => {
    class Timestamped extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get timestamp() {
        return this[timestamp$];
      }
      set timestamp(value) {
        super.timestamp = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return timestamp.Timestamped.is(other) && dart.equals(this.timestamp, other.timestamp) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.timestamp)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeStamp{timestamp: " + dart.str(this.timestamp) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (Timestamped.new = function(timestamp, value) {
      this[timestamp$] = timestamp;
      this[value$] = value;
      ;
    }).prototype = Timestamped.prototype;
    dart.addTypeTests(Timestamped);
    Timestamped.prototype[_is_Timestamped_default] = true;
    const value$ = Timestamped_value;
    const timestamp$ = Timestamped_timestamp;
    dart.setMethodSignature(Timestamped, () => ({
      __proto__: dart.getMethods(Timestamped.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(Timestamped, "package:rxdart/src/transformers/timestamp.dart");
    dart.setFieldSignature(Timestamped, () => ({
      __proto__: dart.getFields(Timestamped.__proto__),
      value: dart.finalFieldType(T),
      timestamp: dart.finalFieldType(core.DateTime)
    }));
    dart.defineExtensionMethods(Timestamped, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Timestamped, ['hashCode']);
    return Timestamped;
  });
  timestamp.Timestamped = timestamp.Timestamped$();
  dart.addTypeTests(timestamp.Timestamped, _is_Timestamped_default);
  const _is_TimestampStreamTransformer_default = Symbol('_is_TimestampStreamTransformer_default');
  const TimestampStreamTransformer_transformer = dart.privateName(timestamp, "TimestampStreamTransformer.transformer");
  timestamp.TimestampStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TimestampStreamTransformer extends async.StreamTransformerBase$(T, timestamp.Timestamped$(T)) {
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
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, timestamp.Timestamped$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(timestamp.Timestamped$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.map(timestamp.Timestamped$(T), dart.fn(value => new (timestamp.Timestamped$(T)).new(new core.DateTime.now(), value), dart.fnType(timestamp.Timestamped$(T), [T]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(timestamp.Timestamped$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimestampStreamTransformer.new = function() {
      this[transformer] = timestamp.TimestampStreamTransformer._buildTransformer(T);
      TimestampStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TimestampStreamTransformer.prototype;
    dart.addTypeTests(TimestampStreamTransformer);
    TimestampStreamTransformer.prototype[_is_TimestampStreamTransformer_default] = true;
    const transformer = TimestampStreamTransformer_transformer;
    dart.setMethodSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getMethods(TimestampStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(timestamp.Timestamped$(T)), [core.Object])
    }));
    dart.setLibraryUri(TimestampStreamTransformer, "package:rxdart/src/transformers/timestamp.dart");
    dart.setFieldSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getFields(TimestampStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, timestamp.Timestamped$(T)))
    }));
    return TimestampStreamTransformer;
  });
  timestamp.TimestampStreamTransformer = timestamp.TimestampStreamTransformer$();
  dart.addTypeTests(timestamp.TimestampStreamTransformer, _is_TimestampStreamTransformer_default);
  const _is_TimeInterval_default = Symbol('_is_TimeInterval_default');
  const TimeInterval_interval = dart.privateName(time_interval, "TimeInterval.interval");
  const TimeInterval_value = dart.privateName(time_interval, "TimeInterval.value");
  time_interval.TimeInterval$ = dart.generic(T => {
    class TimeInterval extends core.Object {
      get interval() {
        return this[interval$];
      }
      set interval(value) {
        super.interval = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return time_interval.TimeInterval.is(other) && dart.equals(this.interval, other.interval) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.interval)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeInterval{interval: " + dart.str(this.interval) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (TimeInterval.new = function(value, interval) {
      this[value$] = value;
      this[interval$] = interval;
      ;
    }).prototype = TimeInterval.prototype;
    dart.addTypeTests(TimeInterval);
    TimeInterval.prototype[_is_TimeInterval_default] = true;
    const interval$ = TimeInterval_interval;
    const value$ = TimeInterval_value;
    dart.setMethodSignature(TimeInterval, () => ({
      __proto__: dart.getMethods(TimeInterval.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(TimeInterval, "package:rxdart/src/transformers/time_interval.dart");
    dart.setFieldSignature(TimeInterval, () => ({
      __proto__: dart.getFields(TimeInterval.__proto__),
      interval: dart.finalFieldType(core.Duration),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(TimeInterval, ['_equals', 'toString']);
    dart.defineExtensionAccessors(TimeInterval, ['hashCode']);
    return TimeInterval;
  });
  time_interval.TimeInterval = time_interval.TimeInterval$();
  dart.addTypeTests(time_interval.TimeInterval, _is_TimeInterval_default);
  const _is_TimeIntervalStreamTransformer_default = Symbol('_is_TimeIntervalStreamTransformer_default');
  const TimeIntervalStreamTransformer_transformer = dart.privateName(time_interval, "TimeIntervalStreamTransformer.transformer");
  time_interval.TimeIntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TimeIntervalStreamTransformer extends async.StreamTransformerBase$(T, time_interval.TimeInterval$(T)) {
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
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, time_interval.TimeInterval$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(time_interval.TimeInterval$(T)).new({sync: true, onListen: dart.fn(() => {
              let t2;
              let stopwatch = (t2 = new core.Stopwatch.new(), t2.start(), t2);
              let ems = null;
              subscription = input.listen(dart.fn(value => {
                let t3;
                ems = stopwatch.elapsedMicroseconds;
                stopwatch.stop();
                try {
                  controller.add(new (time_interval.TimeInterval$(T)).new(value, new core.Duration.new({microseconds: ems})));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
                stopwatch = (t3 = new core.Stopwatch.new(), t3.start(), t3);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  stopwatch.stop();
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(time_interval.TimeInterval$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimeIntervalStreamTransformer.new = function() {
      this[transformer] = time_interval.TimeIntervalStreamTransformer._buildTransformer(T);
      TimeIntervalStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TimeIntervalStreamTransformer.prototype;
    dart.addTypeTests(TimeIntervalStreamTransformer);
    TimeIntervalStreamTransformer.prototype[_is_TimeIntervalStreamTransformer_default] = true;
    const transformer = TimeIntervalStreamTransformer_transformer;
    dart.setMethodSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(TimeIntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(time_interval.TimeInterval$(T)), [core.Object])
    }));
    dart.setLibraryUri(TimeIntervalStreamTransformer, "package:rxdart/src/transformers/time_interval.dart");
    dart.setFieldSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getFields(TimeIntervalStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, time_interval.TimeInterval$(T)))
    }));
    return TimeIntervalStreamTransformer;
  });
  time_interval.TimeIntervalStreamTransformer = time_interval.TimeIntervalStreamTransformer$();
  dart.addTypeTests(time_interval.TimeIntervalStreamTransformer, _is_TimeIntervalStreamTransformer_default);
  const _is_ThrottleStreamTransformer_default = Symbol('_is_ThrottleStreamTransformer_default');
  const ThrottleStreamTransformer_transformer = dart.privateName(throttle, "ThrottleStreamTransformer.transformer");
  throttle.ThrottleStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ThrottleStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        if (duration == null) {
          dart.throw(new core.ArgumentError.new("duration cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let _timer = null;
          let _closeAfterNextEvent = false;
          function _resetTimer() {
            if (_timer != null && dart.test(_timer.isActive)) return false;
            try {
              _timer = async.Timer.new(duration, dart.fn(() => {
                if (_closeAfterNextEvent && !dart.test(controller.isClosed)) controller.close();
              }, VoidToNull()));
            } catch (e$) {
              let e = dart.getThrown(e$);
              let s = dart.stackTrace(e$);
              controller.addError(e, s);
            }
            return true;
          }
          dart.fn(_resetTimer, VoidTobool());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.where(dart.fn(_ => _resetTimer(), dart.fnType(core.bool, [T]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  _closeAfterNextEvent = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (ThrottleStreamTransformer.new = function(duration) {
      this[transformer] = throttle.ThrottleStreamTransformer._buildTransformer(T, duration);
      ThrottleStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ThrottleStreamTransformer.prototype;
    dart.addTypeTests(ThrottleStreamTransformer);
    ThrottleStreamTransformer.prototype[_is_ThrottleStreamTransformer_default] = true;
    const transformer = ThrottleStreamTransformer_transformer;
    dart.setMethodSignature(ThrottleStreamTransformer, () => ({
      __proto__: dart.getMethods(ThrottleStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(ThrottleStreamTransformer, "package:rxdart/src/transformers/throttle.dart");
    dart.setFieldSignature(ThrottleStreamTransformer, () => ({
      __proto__: dart.getFields(ThrottleStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return ThrottleStreamTransformer;
  });
  throttle.ThrottleStreamTransformer = throttle.ThrottleStreamTransformer$();
  dart.addTypeTests(throttle.ThrottleStreamTransformer, _is_ThrottleStreamTransformer_default);
  const _is_SwitchMapStreamTransformer_default = Symbol('_is_SwitchMapStreamTransformer_default');
  const SwitchMapStreamTransformer_transformer = dart.privateName(switch_map, "SwitchMapStreamTransformer.transformer");
  switch_map.SwitchMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SwitchMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false;
          let rightClosed = false;
          let hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                let t4;
                try {
                  t4 = otherSubscription;
                  t4 == null ? null : t4.cancel();
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t5;
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              t5 = otherSubscription;
              t5 == null ? null : t5.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t5;
              subscription.resume();
              t5 = otherSubscription;
              t5 == null ? null : t5.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield subscription.cancel();
              if (hasMainEvent) yield otherSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchMapStreamTransformer.new = function(mapper) {
      this[transformer] = switch_map.SwitchMapStreamTransformer._buildTransformer(T, S, mapper);
      SwitchMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SwitchMapStreamTransformer.prototype;
    dart.addTypeTests(SwitchMapStreamTransformer);
    SwitchMapStreamTransformer.prototype[_is_SwitchMapStreamTransformer_default] = true;
    const transformer = SwitchMapStreamTransformer_transformer;
    dart.setMethodSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(SwitchMapStreamTransformer, "package:rxdart/src/transformers/switch_map.dart");
    dart.setFieldSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return SwitchMapStreamTransformer;
  });
  switch_map.SwitchMapStreamTransformer = switch_map.SwitchMapStreamTransformer$();
  dart.addTypeTests(switch_map.SwitchMapStreamTransformer, _is_SwitchMapStreamTransformer_default);
  const _is_SwitchIfEmptyStreamTransformer_default = Symbol('_is_SwitchIfEmptyStreamTransformer_default');
  const SwitchIfEmptyStreamTransformer_transformer = dart.privateName(switch_if_empty, "SwitchIfEmptyStreamTransformer.transformer");
  switch_if_empty.SwitchIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SwitchIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, fallbackStream) {
        if (fallbackStream == null) {
          dart.throw(new core.ArgumentError.new("fallbackStream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let defaultSubscription = null;
          let switchSubscription = null;
          let hasEvent = false;
          function onDone() {
            let t5;
            if (dart.test(controller.isClosed)) return;
            controller.close();
            t5 = switchSubscription;
            t5 == null ? null : t5.cancel();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              defaultSubscription = input.listen(dart.fn(value => {
                hasEvent = true;
                controller.add(value);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasEvent) {
                    controller.close();
                  } else {
                    switchSubscription = fallbackStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t5, t5$;
              if (resumeSignal === void 0) resumeSignal = null;
              t5 = defaultSubscription;
              t5 == null ? null : t5.pause(resumeSignal);
              t5$ = switchSubscription;
              t5$ == null ? null : t5$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t5, t5$;
              t5 = defaultSubscription;
              t5 == null ? null : t5.resume();
              t5$ = switchSubscription;
              t5$ == null ? null : t5$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t5;
              t5 = defaultSubscription;
              return t5 == null ? null : t5.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchIfEmptyStreamTransformer.new = function(fallbackStream) {
      this[transformer] = switch_if_empty.SwitchIfEmptyStreamTransformer._buildTransformer(T, fallbackStream);
      SwitchIfEmptyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SwitchIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(SwitchIfEmptyStreamTransformer);
    SwitchIfEmptyStreamTransformer.prototype[_is_SwitchIfEmptyStreamTransformer_default] = true;
    const transformer = SwitchIfEmptyStreamTransformer_transformer;
    dart.setMethodSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SwitchIfEmptyStreamTransformer, "package:rxdart/src/transformers/switch_if_empty.dart");
    dart.setFieldSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchIfEmptyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SwitchIfEmptyStreamTransformer;
  });
  switch_if_empty.SwitchIfEmptyStreamTransformer = switch_if_empty.SwitchIfEmptyStreamTransformer$();
  dart.addTypeTests(switch_if_empty.SwitchIfEmptyStreamTransformer, _is_SwitchIfEmptyStreamTransformer_default);
  const _is_StartWithManyStreamTransformer_default = Symbol('_is_StartWithManyStreamTransformer_default');
  const StartWithManyStreamTransformer_transformer = dart.privateName(start_with_many, "StartWithManyStreamTransformer.transformer");
  start_with_many.StartWithManyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithManyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, startValues) {
        if (startValues == null) {
          dart.throw(new core.ArgumentError.new("startValues cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              startValues[$forEach](dart.bind(controller, 'add'));
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithManyStreamTransformer.new = function(startValues) {
      this[transformer] = start_with_many.StartWithManyStreamTransformer._buildTransformer(T, startValues);
      StartWithManyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithManyStreamTransformer.prototype;
    dart.addTypeTests(StartWithManyStreamTransformer);
    StartWithManyStreamTransformer.prototype[_is_StartWithManyStreamTransformer_default] = true;
    const transformer = StartWithManyStreamTransformer_transformer;
    dart.setMethodSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithManyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithManyStreamTransformer, "package:rxdart/src/transformers/start_with_many.dart");
    dart.setFieldSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithManyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithManyStreamTransformer;
  });
  start_with_many.StartWithManyStreamTransformer = start_with_many.StartWithManyStreamTransformer$();
  dart.addTypeTests(start_with_many.StartWithManyStreamTransformer, _is_StartWithManyStreamTransformer_default);
  const _is_StartWithStreamTransformer_default = Symbol('_is_StartWithStreamTransformer_default');
  const StartWithStreamTransformer_transformer = dart.privateName(start_with, "StartWithStreamTransformer.transformer");
  start_with.StartWithStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, startValue) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                controller.add(startValue);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithStreamTransformer.new = function(startValue) {
      this[transformer] = start_with.StartWithStreamTransformer._buildTransformer(T, startValue);
      StartWithStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithStreamTransformer.prototype;
    dart.addTypeTests(StartWithStreamTransformer);
    StartWithStreamTransformer.prototype[_is_StartWithStreamTransformer_default] = true;
    const transformer = StartWithStreamTransformer_transformer;
    dart.setMethodSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithStreamTransformer, "package:rxdart/src/transformers/start_with.dart");
    dart.setFieldSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithStreamTransformer;
  });
  start_with.StartWithStreamTransformer = start_with.StartWithStreamTransformer$();
  dart.addTypeTests(start_with.StartWithStreamTransformer, _is_StartWithStreamTransformer_default);
  const _is_SkipUntilStreamTransformer_default = Symbol('_is_SkipUntilStreamTransformer_default');
  const SkipUntilStreamTransformer_transformer = dart.privateName(skip_until, "SkipUntilStreamTransformer.transformer");
  skip_until.SkipUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SkipUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
          dart.throw(new core.ArgumentError.new("otherStream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let goTime = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(data => {
                if (goTime) {
                  controller.add(data);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => {
                goTime = true;
                otherSubscription.cancel();
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t6, t6$;
              yield (t6 = otherSubscription, t6 == null ? null : t6.cancel());
              yield (t6$ = subscription, t6$ == null ? null : t6$.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SkipUntilStreamTransformer.new = function(otherStream) {
      this[transformer] = skip_until.SkipUntilStreamTransformer._buildTransformer(T, S, otherStream);
      SkipUntilStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SkipUntilStreamTransformer.prototype;
    dart.addTypeTests(SkipUntilStreamTransformer);
    SkipUntilStreamTransformer.prototype[_is_SkipUntilStreamTransformer_default] = true;
    const transformer = SkipUntilStreamTransformer_transformer;
    dart.setMethodSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(SkipUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SkipUntilStreamTransformer, "package:rxdart/src/transformers/skip_until.dart");
    dart.setFieldSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getFields(SkipUntilStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SkipUntilStreamTransformer;
  });
  skip_until.SkipUntilStreamTransformer = skip_until.SkipUntilStreamTransformer$();
  dart.addTypeTests(skip_until.SkipUntilStreamTransformer, _is_SkipUntilStreamTransformer_default);
  const _is_ScanStreamTransformer_default = Symbol('_is_ScanStreamTransformer_default');
  const ScanStreamTransformer_accumulator = dart.privateName(scan, "ScanStreamTransformer.accumulator");
  const ScanStreamTransformer_seed = dart.privateName(scan, "ScanStreamTransformer.seed");
  scan.ScanStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ScanStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get accumulator() {
        return this[accumulator$];
      }
      set accumulator(value) {
        super.accumulator = value;
      }
      get seed() {
        return this[seed$];
      }
      set seed(value) {
        super.seed = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return scan.ScanStreamTransformer._buildTransformer(T, S, this.accumulator, this.seed).bind(stream);
      }
      static _buildTransformer(T, S, accumulator, seed) {
        if (seed === void 0) seed = null;
        let index = 0;
        let acc = seed;
        return new (async._StreamHandlerTransformer$(T, S)).new({handleData: dart.fn((data, sink) => {
            let t6;
            acc = accumulator(acc, data, (t6 = index, index = t6 + 1, t6));
            sink.add(acc);
          }, dart.fnType(core.Null, [T, async.EventSink$(S)])), handleError: dart.fn((error, s, sink) => sink.addError(error), dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(S)]))});
      }
    }
    (ScanStreamTransformer.new = function(accumulator, seed) {
      if (seed === void 0) seed = null;
      this[accumulator$] = accumulator;
      this[seed$] = seed;
      ScanStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ScanStreamTransformer.prototype;
    dart.addTypeTests(ScanStreamTransformer);
    ScanStreamTransformer.prototype[_is_ScanStreamTransformer_default] = true;
    const accumulator$ = ScanStreamTransformer_accumulator;
    const seed$ = ScanStreamTransformer_seed;
    dart.setMethodSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getMethods(ScanStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(ScanStreamTransformer, "package:rxdart/src/transformers/scan.dart");
    dart.setFieldSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getFields(ScanStreamTransformer.__proto__),
      accumulator: dart.finalFieldType(dart.fnType(S, [S, T, core.int])),
      seed: dart.finalFieldType(S)
    }));
    return ScanStreamTransformer;
  });
  scan.ScanStreamTransformer = scan.ScanStreamTransformer$();
  dart.addTypeTests(scan.ScanStreamTransformer, _is_ScanStreamTransformer_default);
  const _is_OnErrorResumeStreamTransformer_default = Symbol('_is_OnErrorResumeStreamTransformer_default');
  const OnErrorResumeStreamTransformer_transformer = dart.privateName(on_error_resume, "OnErrorResumeStreamTransformer.transformer");
  on_error_resume.OnErrorResumeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class OnErrorResumeStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, recoveryFn) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryFn(e).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t6, t6$;
              if (resumeSignal === void 0) resumeSignal = null;
              t6 = inputSubscription;
              t6 == null ? null : t6.pause(resumeSignal);
              t6$ = recoverySubscription;
              t6$ == null ? null : t6$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t6, t6$;
              t6 = inputSubscription;
              t6 == null ? null : t6.resume();
              t6$ = recoverySubscription;
              t6$ == null ? null : t6$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t6, t6$;
              return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(t6 = inputSubscription, t6 == null ? null : t6.cancel()), (t6$ = recoverySubscription, t6$ == null ? null : t6$.cancel())])[$where](dart.fn(future => future != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeStreamTransformer.new = function(recoveryFn) {
      this[transformer] = on_error_resume.OnErrorResumeStreamTransformer._buildTransformer(T, recoveryFn);
      OnErrorResumeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = OnErrorResumeStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeStreamTransformer);
    OnErrorResumeStreamTransformer.prototype[_is_OnErrorResumeStreamTransformer_default] = true;
    const transformer = OnErrorResumeStreamTransformer_transformer;
    dart.setMethodSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(OnErrorResumeStreamTransformer, "package:rxdart/src/transformers/on_error_resume.dart");
    dart.setFieldSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return OnErrorResumeStreamTransformer;
  });
  on_error_resume.OnErrorResumeStreamTransformer = on_error_resume.OnErrorResumeStreamTransformer$();
  dart.addTypeTests(on_error_resume.OnErrorResumeStreamTransformer, _is_OnErrorResumeStreamTransformer_default);
  const _is_OfTypeStreamTransformer_default = Symbol('_is_OfTypeStreamTransformer_default');
  const OfTypeStreamTransformer_transformer = dart.privateName(of_type, "OfTypeStreamTransformer.transformer");
  of_type.OfTypeStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class OfTypeStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, typeToken) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(typeToken.isType(value))) {
                    controller.add(typeToken.toType(value));
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (OfTypeStreamTransformer.new = function(typeToken) {
      this[transformer] = of_type.OfTypeStreamTransformer._buildTransformer(T, S, typeToken);
      OfTypeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = OfTypeStreamTransformer.prototype;
    dart.addTypeTests(OfTypeStreamTransformer);
    OfTypeStreamTransformer.prototype[_is_OfTypeStreamTransformer_default] = true;
    const transformer = OfTypeStreamTransformer_transformer;
    dart.setMethodSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getMethods(OfTypeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(OfTypeStreamTransformer, "package:rxdart/src/transformers/of_type.dart");
    dart.setFieldSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getFields(OfTypeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return OfTypeStreamTransformer;
  });
  of_type.OfTypeStreamTransformer = of_type.OfTypeStreamTransformer$();
  dart.addTypeTests(of_type.OfTypeStreamTransformer, _is_OfTypeStreamTransformer_default);
  const _is_MaterializeStreamTransformer_default = Symbol('_is_MaterializeStreamTransformer_default');
  const MaterializeStreamTransformer_transformer = dart.privateName(materialize, "MaterializeStreamTransformer.transformer");
  materialize.MaterializeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class MaterializeStreamTransformer extends async.StreamTransformerBase$(T, notification.Notification$(T)) {
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
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, notification.Notification$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(notification.Notification$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  controller.add(notification.Notification$(T).onData(value));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                  controller.add(notification.Notification$(T).onError(e, s));
                }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                  controller.add(notification.Notification$(T).onDone());
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(notification.Notification$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (MaterializeStreamTransformer.new = function() {
      this[transformer] = materialize.MaterializeStreamTransformer._buildTransformer(T);
      MaterializeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = MaterializeStreamTransformer.prototype;
    dart.addTypeTests(MaterializeStreamTransformer);
    MaterializeStreamTransformer.prototype[_is_MaterializeStreamTransformer_default] = true;
    const transformer = MaterializeStreamTransformer_transformer;
    dart.setMethodSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getMethods(MaterializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(notification.Notification$(T)), [core.Object])
    }));
    dart.setLibraryUri(MaterializeStreamTransformer, "package:rxdart/src/transformers/materialize.dart");
    dart.setFieldSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getFields(MaterializeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, notification.Notification$(T)))
    }));
    return MaterializeStreamTransformer;
  });
  materialize.MaterializeStreamTransformer = materialize.MaterializeStreamTransformer$();
  dart.addTypeTests(materialize.MaterializeStreamTransformer, _is_MaterializeStreamTransformer_default);
  const _is_MapToStreamTransformer_default = Symbol('_is_MapToStreamTransformer_default');
  const MapToStreamTransformer_transformer = dart.privateName(map_to, "MapToStreamTransformer.transformer");
  map_to.MapToStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class MapToStreamTransformer extends async.StreamTransformerBase$(S, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfS()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(S, T, value) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(_ => controller.add(value), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (MapToStreamTransformer.new = function(value) {
      this[transformer] = map_to.MapToStreamTransformer._buildTransformer(S, T, value);
      MapToStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = MapToStreamTransformer.prototype;
    dart.addTypeTests(MapToStreamTransformer);
    MapToStreamTransformer.prototype[_is_MapToStreamTransformer_default] = true;
    const transformer = MapToStreamTransformer_transformer;
    dart.setMethodSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getMethods(MapToStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(MapToStreamTransformer, "package:rxdart/src/transformers/map_to.dart");
    dart.setFieldSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getFields(MapToStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return MapToStreamTransformer;
  });
  map_to.MapToStreamTransformer = map_to.MapToStreamTransformer$();
  dart.addTypeTests(map_to.MapToStreamTransformer, _is_MapToStreamTransformer_default);
  const _is_IntervalStreamTransformer_default = Symbol('_is_IntervalStreamTransformer_default');
  const IntervalStreamTransformer_transformer = dart.privateName(interval, "IntervalStreamTransformer.transformer");
  interval.IntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class IntervalStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let completer = async.Completer$(T).new();
                  async.Timer.new(duration, dart.fn(() => completer.complete(value), VoidTovoid()));
                  subscription.pause(completer.future.then(T, dart.fn(event => {
                    controller.add(event);
                    return event;
                  }, dart.fnType(T, [T]))));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(() => subscription.pause(), VoidTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IntervalStreamTransformer.new = function(duration) {
      this[transformer] = interval.IntervalStreamTransformer._buildTransformer(T, duration);
      IntervalStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = IntervalStreamTransformer.prototype;
    dart.addTypeTests(IntervalStreamTransformer);
    IntervalStreamTransformer.prototype[_is_IntervalStreamTransformer_default] = true;
    const transformer = IntervalStreamTransformer_transformer;
    dart.setMethodSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(IntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(IntervalStreamTransformer, "package:rxdart/src/transformers/interval.dart");
    dart.setFieldSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getFields(IntervalStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return IntervalStreamTransformer;
  });
  interval.IntervalStreamTransformer = interval.IntervalStreamTransformer$();
  dart.addTypeTests(interval.IntervalStreamTransformer, _is_IntervalStreamTransformer_default);
  const _is_IgnoreElementsStreamTransformer_default = Symbol('_is_IgnoreElementsStreamTransformer_default');
  const IgnoreElementsStreamTransformer_transformer = dart.privateName(ignore_elements, "IgnoreElementsStreamTransformer.transformer");
  ignore_elements.IgnoreElementsStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class IgnoreElementsStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(null, {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IgnoreElementsStreamTransformer.new = function() {
      this[transformer] = ignore_elements.IgnoreElementsStreamTransformer._buildTransformer(T);
      IgnoreElementsStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = IgnoreElementsStreamTransformer.prototype;
    dart.addTypeTests(IgnoreElementsStreamTransformer);
    IgnoreElementsStreamTransformer.prototype[_is_IgnoreElementsStreamTransformer_default] = true;
    const transformer = IgnoreElementsStreamTransformer_transformer;
    dart.setMethodSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getMethods(IgnoreElementsStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(IgnoreElementsStreamTransformer, "package:rxdart/src/transformers/ignore_elements.dart");
    dart.setFieldSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getFields(IgnoreElementsStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return IgnoreElementsStreamTransformer;
  });
  ignore_elements.IgnoreElementsStreamTransformer = ignore_elements.IgnoreElementsStreamTransformer$();
  dart.addTypeTests(ignore_elements.IgnoreElementsStreamTransformer, _is_IgnoreElementsStreamTransformer_default);
  const _is_GroupByObservable_default = Symbol('_is_GroupByObservable_default');
  const GroupByObservable_key = dart.privateName(group_by, "GroupByObservable.key");
  group_by.GroupByObservable$ = dart.generic((T, S) => {
    class GroupByObservable extends observable.Observable$(T) {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
    }
    (GroupByObservable.new = function(key, stream) {
      this[key$] = key;
      GroupByObservable.__proto__.new.call(this, stream);
      ;
    }).prototype = GroupByObservable.prototype;
    dart.addTypeTests(GroupByObservable);
    GroupByObservable.prototype[_is_GroupByObservable_default] = true;
    const key$ = GroupByObservable_key;
    dart.setLibraryUri(GroupByObservable, "package:rxdart/src/transformers/group_by.dart");
    dart.setFieldSignature(GroupByObservable, () => ({
      __proto__: dart.getFields(GroupByObservable.__proto__),
      key: dart.finalFieldType(S)
    }));
    return GroupByObservable;
  });
  group_by.GroupByObservable = group_by.GroupByObservable$();
  dart.addTypeTests(group_by.GroupByObservable, _is_GroupByObservable_default);
  const _is_GroupByStreamTransformer_default = Symbol('_is_GroupByStreamTransformer_default');
  const GroupByStreamTransformer_grouper = dart.privateName(group_by, "GroupByStreamTransformer.grouper");
  group_by.GroupByStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class GroupByStreamTransformer extends async.StreamTransformerBase$(T, group_by.GroupByObservable$(T, S)) {
      get grouper() {
        return this[grouper$];
      }
      set grouper(value) {
        super.grouper = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return group_by.GroupByStreamTransformer._buildTransformer(T, S, this.grouper).bind(stream);
      }
      static _buildTransformer(T, S, grouper) {
        return new (async._StreamSubscriptionTransformer$(T, group_by.GroupByObservable$(T, S))).new(dart.fn((input, cancelOnError) => {
          let mapper = new (_js_helper.LinkedMap$(S, async.StreamController$(T))).new();
          let controller = null;
          let subscription = null;
          let controllerBuilder = dart.fn(forKey => dart.fn(() => {
            let groupedController = async.StreamController$(T).new();
            controller.add(new (group_by.GroupByObservable$(T, S)).new(forKey, groupedController.stream));
            return groupedController;
          }, dart.fnType(async.StreamController$(T), [])), dart.fnType(dart.fnType(async.StreamController$(T), []), [S]));
          controller = async.StreamController$(group_by.GroupByObservable$(T, S)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let key = grouper(value);
                  let groupedController = mapper[$putIfAbsent](key, controllerBuilder(key));
                  groupedController.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  mapper[$values][$forEach](dart.fn(controller => controller.close(), dart.fnType(async.Future, [async.StreamController$(T)])));
                  mapper[$clear]();
                  controller.close();
                }, VoidToNull())});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(group_by.GroupByObservable$(T, S)), [async.Stream$(T), core.bool])));
      }
    }
    (GroupByStreamTransformer.new = function(grouper) {
      this[grouper$] = grouper;
      GroupByStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = GroupByStreamTransformer.prototype;
    dart.addTypeTests(GroupByStreamTransformer);
    GroupByStreamTransformer.prototype[_is_GroupByStreamTransformer_default] = true;
    const grouper$ = GroupByStreamTransformer_grouper;
    dart.setMethodSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getMethods(GroupByStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(group_by.GroupByObservable$(T, S)), [core.Object])
    }));
    dart.setLibraryUri(GroupByStreamTransformer, "package:rxdart/src/transformers/group_by.dart");
    dart.setFieldSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getFields(GroupByStreamTransformer.__proto__),
      grouper: dart.finalFieldType(dart.fnType(S, [T]))
    }));
    return GroupByStreamTransformer;
  });
  group_by.GroupByStreamTransformer = group_by.GroupByStreamTransformer$();
  dart.addTypeTests(group_by.GroupByStreamTransformer, _is_GroupByStreamTransformer_default);
  const _is_FlatMapLatestStreamTransformer_default = Symbol('_is_FlatMapLatestStreamTransformer_default');
  const FlatMapLatestStreamTransformer_transformer = dart.privateName(flat_map_latest, "FlatMapLatestStreamTransformer.transformer");
  flat_map_latest.FlatMapLatestStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class FlatMapLatestStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false;
          let rightClosed = false;
          let hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                let t10;
                try {
                  t10 = otherSubscription;
                  t10 == null ? null : t10.cancel();
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t11;
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              t11 = otherSubscription;
              t11 == null ? null : t11.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t11;
              subscription.resume();
              t11 = otherSubscription;
              t11 == null ? null : t11.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield subscription.cancel();
              if (hasMainEvent) yield otherSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapLatestStreamTransformer.new = function(mapper) {
      this[transformer] = flat_map_latest.FlatMapLatestStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapLatestStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = FlatMapLatestStreamTransformer.prototype;
    dart.addTypeTests(FlatMapLatestStreamTransformer);
    FlatMapLatestStreamTransformer.prototype[_is_FlatMapLatestStreamTransformer_default] = true;
    const transformer = FlatMapLatestStreamTransformer_transformer;
    dart.setMethodSignature(FlatMapLatestStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapLatestStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(FlatMapLatestStreamTransformer, "package:rxdart/src/transformers/flat_map_latest.dart");
    dart.setFieldSignature(FlatMapLatestStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapLatestStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return FlatMapLatestStreamTransformer;
  });
  flat_map_latest.FlatMapLatestStreamTransformer = flat_map_latest.FlatMapLatestStreamTransformer$();
  dart.addTypeTests(flat_map_latest.FlatMapLatestStreamTransformer, _is_FlatMapLatestStreamTransformer_default);
  const _is_FlatMapStreamTransformer_default = Symbol('_is_FlatMapStreamTransformer_default');
  const FlatMapStreamTransformer_transformer = dart.privateName(flat_map, "FlatMapStreamTransformer.transformer");
  flat_map.FlatMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class FlatMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(S)).of([]);
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let closeAfterNextEvent = false;
          let hasMainEvent = false;
          let openStreams = 0;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let otherStream = mapper(value);
                  hasMainEvent = true;
                  openStreams = openStreams + 1;
                  otherSubscription = otherStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      openStreams = openStreams - 1;
                      subscriptions[$remove](otherSubscription);
                      if (closeAfterNextEvent && openStreams === 0) controller.close();
                    }, VoidToNull())});
                  subscriptions[$add](otherSubscription);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasMainEvent || openStreams === 0)
                    controller.close();
                  else
                    closeAfterNextEvent = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t12;
              let list = (t12 = ListOfStreamSubscription().from(subscriptions), t12[$add](subscription), t12);
              return async.Future.wait(dart.dynamic, list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapStreamTransformer.new = function(mapper) {
      this[transformer] = flat_map.FlatMapStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = FlatMapStreamTransformer.prototype;
    dart.addTypeTests(FlatMapStreamTransformer);
    FlatMapStreamTransformer.prototype[_is_FlatMapStreamTransformer_default] = true;
    const transformer = FlatMapStreamTransformer_transformer;
    dart.setMethodSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(FlatMapStreamTransformer, "package:rxdart/src/transformers/flat_map.dart");
    dart.setFieldSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return FlatMapStreamTransformer;
  });
  flat_map.FlatMapStreamTransformer = flat_map.FlatMapStreamTransformer$();
  dart.addTypeTests(flat_map.FlatMapStreamTransformer, _is_FlatMapStreamTransformer_default);
  const _is_ExhaustMapStreamTransformer_default = Symbol('_is_ExhaustMapStreamTransformer_default');
  const ExhaustMapStreamTransformer_transformer = dart.privateName(exhaust_map, "ExhaustMapStreamTransformer.transformer");
  exhaust_map.ExhaustMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ExhaustMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let inputSubscription = null;
          let outputSubscription = null;
          let inputClosed = false;
          let outputIsEmitting = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.fn(value => {
                try {
                  if (!outputIsEmitting) {
                    outputIsEmitting = true;
                    outputSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                        outputIsEmitting = false;
                        if (inputClosed) controller.close();
                      }, VoidToNull())});
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  inputClosed = true;
                  if (!outputIsEmitting) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t13;
              if (resumeSignal === void 0) resumeSignal = null;
              inputSubscription.pause(resumeSignal);
              t13 = outputSubscription;
              t13 == null ? null : t13.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t13;
              inputSubscription.resume();
              t13 = outputSubscription;
              t13 == null ? null : t13.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield inputSubscription.cancel();
              if (outputIsEmitting) yield outputSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ExhaustMapStreamTransformer.new = function(mapper) {
      this[transformer] = exhaust_map.ExhaustMapStreamTransformer._buildTransformer(T, S, mapper);
      ExhaustMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ExhaustMapStreamTransformer.prototype;
    dart.addTypeTests(ExhaustMapStreamTransformer);
    ExhaustMapStreamTransformer.prototype[_is_ExhaustMapStreamTransformer_default] = true;
    const transformer = ExhaustMapStreamTransformer_transformer;
    dart.setMethodSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getMethods(ExhaustMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(ExhaustMapStreamTransformer, "package:rxdart/src/transformers/exhaust_map.dart");
    dart.setFieldSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getFields(ExhaustMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return ExhaustMapStreamTransformer;
  });
  exhaust_map.ExhaustMapStreamTransformer = exhaust_map.ExhaustMapStreamTransformer$();
  dart.addTypeTests(exhaust_map.ExhaustMapStreamTransformer, _is_ExhaustMapStreamTransformer_default);
  const _is_DistinctUniqueStreamTransformer_default = Symbol('_is_DistinctUniqueStreamTransformer_default');
  const DistinctUniqueStreamTransformer_transformer = dart.privateName(distinct_unique, "DistinctUniqueStreamTransformer.transformer");
  distinct_unique.DistinctUniqueStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DistinctUniqueStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, equals, hashCode) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let collection = collection$.HashSet$(T).new({equals: equals, hashCode: hashCode});
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(collection.add(value))) controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              collection.clear();
              collection = null;
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DistinctUniqueStreamTransformer.new = function(opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
      this[transformer] = distinct_unique.DistinctUniqueStreamTransformer._buildTransformer(T, equals, hashCode);
      DistinctUniqueStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DistinctUniqueStreamTransformer.prototype;
    dart.addTypeTests(DistinctUniqueStreamTransformer);
    DistinctUniqueStreamTransformer.prototype[_is_DistinctUniqueStreamTransformer_default] = true;
    const transformer = DistinctUniqueStreamTransformer_transformer;
    dart.setMethodSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getMethods(DistinctUniqueStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DistinctUniqueStreamTransformer, "package:rxdart/src/transformers/distinct_unique.dart");
    dart.setFieldSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getFields(DistinctUniqueStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DistinctUniqueStreamTransformer;
  });
  distinct_unique.DistinctUniqueStreamTransformer = distinct_unique.DistinctUniqueStreamTransformer$();
  dart.addTypeTests(distinct_unique.DistinctUniqueStreamTransformer, _is_DistinctUniqueStreamTransformer_default);
  const _is_DematerializeStreamTransformer_default = Symbol('_is_DematerializeStreamTransformer_default');
  const DematerializeStreamTransformer_transformer = dart.privateName(dematerialize, "DematerializeStreamTransformer.transformer");
  dematerialize.DematerializeStreamTransformer$ = dart.generic(T => {
    let NotificationOfT = () => (NotificationOfT = dart.constFn(notification.Notification$(T)))();
    let StreamOfNotificationOfT = () => (StreamOfNotificationOfT = dart.constFn(async.Stream$(NotificationOfT())))();
    class DematerializeStreamTransformer extends async.StreamTransformerBase$(notification.Notification$(T), T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfNotificationOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(notification.Notification$(T), T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(notification => {
                try {
                  if (dart.test(notification.isOnData)) {
                    controller.add(notification.value);
                  } else if (dart.test(notification.isOnDone)) {
                    controller.close();
                  } else if (dart.test(notification.isOnError)) {
                    controller.addError(notification.error, notification.stackTrace);
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [notification.Notification$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(notification.Notification$(T)), core.bool])));
      }
    }
    (DematerializeStreamTransformer.new = function() {
      this[transformer] = dematerialize.DematerializeStreamTransformer._buildTransformer(T);
      DematerializeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DematerializeStreamTransformer.prototype;
    dart.addTypeTests(DematerializeStreamTransformer);
    DematerializeStreamTransformer.prototype[_is_DematerializeStreamTransformer_default] = true;
    const transformer = DematerializeStreamTransformer_transformer;
    dart.setMethodSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getMethods(DematerializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DematerializeStreamTransformer, "package:rxdart/src/transformers/dematerialize.dart");
    dart.setFieldSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getFields(DematerializeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(notification.Notification$(T), T))
    }));
    return DematerializeStreamTransformer;
  });
  dematerialize.DematerializeStreamTransformer = dematerialize.DematerializeStreamTransformer$();
  dart.addTypeTests(dematerialize.DematerializeStreamTransformer, _is_DematerializeStreamTransformer_default);
  let C6;
  const _is_DelayStreamTransformer_default = Symbol('_is_DelayStreamTransformer_default');
  const DelayStreamTransformer_transformer = dart.privateName(delay, "DelayStreamTransformer.transformer");
  delay.DelayStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelayStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let onDoneCalled = false;
          let hasNoEvents = true;
          let timers = JSArrayOfTimer().of([]);
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasNoEvents = false;
                try {
                  let timer = null;
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(value);
                    timers[$remove](timer);
                    if (onDoneCalled && dart.test(timers[$isEmpty])) {
                      controller.close();
                    }
                  }, VoidToNull()));
                  timers[$add](timer);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasNoEvents) controller.close();
                  onDoneCalled = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              timers[$forEach](C6 || CT.C6);
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DelayStreamTransformer.new = function(duration) {
      this[transformer] = delay.DelayStreamTransformer._buildTransformer(T, duration);
      DelayStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DelayStreamTransformer.prototype;
    dart.addTypeTests(DelayStreamTransformer);
    DelayStreamTransformer.prototype[_is_DelayStreamTransformer_default] = true;
    const transformer = DelayStreamTransformer_transformer;
    dart.setMethodSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getMethods(DelayStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DelayStreamTransformer, "package:rxdart/src/transformers/delay.dart");
    dart.setFieldSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getFields(DelayStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DelayStreamTransformer;
  });
  delay.DelayStreamTransformer = delay.DelayStreamTransformer$();
  dart.addTypeTests(delay.DelayStreamTransformer, _is_DelayStreamTransformer_default);
  const _is_DefaultIfEmptyStreamTransformer_default = Symbol('_is_DefaultIfEmptyStreamTransformer_default');
  const DefaultIfEmptyStreamTransformer_transformer = dart.privateName(default_if_empty, "DefaultIfEmptyStreamTransformer.transformer");
  default_if_empty.DefaultIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DefaultIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, defaultValue) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let hasEvent = false;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasEvent = true;
                try {
                  controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasEvent) controller.add(defaultValue);
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DefaultIfEmptyStreamTransformer.new = function(defaultValue) {
      this[transformer] = default_if_empty.DefaultIfEmptyStreamTransformer._buildTransformer(T, defaultValue);
      DefaultIfEmptyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DefaultIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(DefaultIfEmptyStreamTransformer);
    DefaultIfEmptyStreamTransformer.prototype[_is_DefaultIfEmptyStreamTransformer_default] = true;
    const transformer = DefaultIfEmptyStreamTransformer_transformer;
    dart.setMethodSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(DefaultIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DefaultIfEmptyStreamTransformer, "package:rxdart/src/transformers/default_if_empty.dart");
    dart.setFieldSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(DefaultIfEmptyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DefaultIfEmptyStreamTransformer;
  });
  default_if_empty.DefaultIfEmptyStreamTransformer = default_if_empty.DefaultIfEmptyStreamTransformer$();
  dart.addTypeTests(default_if_empty.DefaultIfEmptyStreamTransformer, _is_DefaultIfEmptyStreamTransformer_default);
  const _is_DebounceStreamTransformer_default = Symbol('_is_DebounceStreamTransformer_default');
  const DebounceStreamTransformer_transformer = dart.privateName(debounce, "DebounceStreamTransformer.transformer");
  debounce.DebounceStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DebounceStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let lastEvent = null;
          let controller = null;
          let subscription = null;
          let timer = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                lastEvent = value;
                try {
                  debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(lastEvent);
                    lastEvent = null;
                  }, VoidToNull()));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
                  if (lastEvent != null) {
                    async.scheduleMicrotask(dart.fn(() => {
                      controller.add(lastEvent);
                      controller.close();
                    }, VoidToNull()));
                  } else {
                    controller.close();
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              debounce.DebounceStreamTransformer._cancelTimerIfActive(timer);
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DebounceStreamTransformer.new = function(duration) {
      this[transformer] = debounce.DebounceStreamTransformer._buildTransformer(T, duration);
      DebounceStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DebounceStreamTransformer.prototype;
    dart.addTypeTests(DebounceStreamTransformer);
    DebounceStreamTransformer.prototype[_is_DebounceStreamTransformer_default] = true;
    const transformer = DebounceStreamTransformer_transformer;
    dart.setMethodSignature(DebounceStreamTransformer, () => ({
      __proto__: dart.getMethods(DebounceStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DebounceStreamTransformer, "package:rxdart/src/transformers/debounce.dart");
    dart.setFieldSignature(DebounceStreamTransformer, () => ({
      __proto__: dart.getFields(DebounceStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DebounceStreamTransformer;
  });
  debounce.DebounceStreamTransformer = debounce.DebounceStreamTransformer$();
  dart.addTypeTests(debounce.DebounceStreamTransformer, _is_DebounceStreamTransformer_default);
  const _is_BufferStreamTransformer_default = Symbol('_is_BufferStreamTransformer_default');
  const BufferStreamTransformer_sampler = dart.privateName(buffer, "BufferStreamTransformer.sampler");
  const BufferStreamTransformer_exhaustBufferOnDone = dart.privateName(buffer, "BufferStreamTransformer.exhaustBufferOnDone");
  buffer.BufferStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class BufferStreamTransformer extends async.StreamTransformerBase$(T, core.List$(T)) {
      get sampler() {
        return this[sampler$];
      }
      set sampler(value) {
        super.sampler = value;
      }
      get exhaustBufferOnDone() {
        return this[exhaustBufferOnDone$];
      }
      set exhaustBufferOnDone(value) {
        super.exhaustBufferOnDone = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return buffer.BufferStreamTransformer._buildTransformer(T, this.sampler, this.exhaustBufferOnDone).bind(stream);
      }
      static _buildTransformer(T, scheduler, exhaustBufferOnDone) {
        buffer.BufferStreamTransformer.assertSampler(T, scheduler);
        return new (async._StreamSubscriptionTransformer$(T, core.List$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let buffer = _interceptors.JSArray$(T).of([]);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            if (dart.test(exhaustBufferOnDone) && dart.test(buffer[$isNotEmpty])) controller.add(core.List$(T).from(buffer));
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(core.List$(T)).new({sync: true, onListen: dart.fn(() => {
              try {
                subscription = scheduler(input, dart.fn((data, sink, startBufferEvery) => {
                  if (startBufferEvery === void 0) startBufferEvery = null;
                  buffer[$add](data);
                  sink.add(buffer);
                }, dart.fnType(core.Null, [T, async.EventSink$(core.List$(T))], [core.int])), dart.fn((_, sink, startBufferEvery) => {
                  let t18;
                  if (startBufferEvery === void 0) startBufferEvery = 0;
                  t18 = startBufferEvery;
                  t18 == null ? 0 : t18;
                  sink.add(core.List$(T).unmodifiable(buffer));
                  buffer = dart.notNull(startBufferEvery) > 0 && dart.notNull(startBufferEvery) < dart.notNull(buffer[$length]) ? buffer[$sublist](startBufferEvery) : _interceptors.JSArray$(T).of([]);
                }, dart.fnType(core.Null, [core.List$(T), async.EventSink$(core.List$(T))], [core.int]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(core.List$(T)), [async.Stream$(T), core.bool])));
      }
      static assertSampler(T, scheduler) {
        if (scheduler == null) {
          dart.throw(new core.ArgumentError.new("scheduler cannot be null"));
        }
      }
    }
    (BufferStreamTransformer.new = function(sampler, opts) {
      let exhaustBufferOnDone = opts && 'exhaustBufferOnDone' in opts ? opts.exhaustBufferOnDone : true;
      this[sampler$] = sampler;
      this[exhaustBufferOnDone$] = exhaustBufferOnDone;
      BufferStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = BufferStreamTransformer.prototype;
    dart.addTypeTests(BufferStreamTransformer);
    BufferStreamTransformer.prototype[_is_BufferStreamTransformer_default] = true;
    const sampler$ = BufferStreamTransformer_sampler;
    const exhaustBufferOnDone$ = BufferStreamTransformer_exhaustBufferOnDone;
    dart.setMethodSignature(BufferStreamTransformer, () => ({
      __proto__: dart.getMethods(BufferStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(core.List$(T)), [core.Object])
    }));
    dart.setLibraryUri(BufferStreamTransformer, "package:rxdart/src/transformers/buffer.dart");
    dart.setFieldSignature(BufferStreamTransformer, () => ({
      __proto__: dart.getFields(BufferStreamTransformer.__proto__),
      sampler: dart.finalFieldType(dart.fnType(async.Stream$(core.List$(T)), [async.Stream$(T), dart.fnType(dart.void, [T, async.EventSink$(core.List$(T))], [core.int]), dart.fnType(dart.void, [core.List$(T), async.EventSink$(core.List$(T))], [core.int])])),
      exhaustBufferOnDone: dart.finalFieldType(core.bool)
    }));
    return BufferStreamTransformer;
  });
  buffer.BufferStreamTransformer = buffer.BufferStreamTransformer$();
  dart.addTypeTests(buffer.BufferStreamTransformer, _is_BufferStreamTransformer_default);
  const _is_ValueObservable_default = Symbol('_is_ValueObservable_default');
  value_observable.ValueObservable$ = dart.generic(T => {
    class ValueObservable extends core.Object {}
    (ValueObservable.new = function() {
      ;
    }).prototype = ValueObservable.prototype;
    dart.addTypeTests(ValueObservable);
    ValueObservable.prototype[_is_ValueObservable_default] = true;
    ValueObservable[dart.implements] = () => [observable.Observable$(T)];
    dart.setLibraryUri(ValueObservable, "package:rxdart/src/observables/value_observable.dart");
    return ValueObservable;
  });
  value_observable.ValueObservable = value_observable.ValueObservable$();
  dart.addTypeTests(value_observable.ValueObservable, _is_ValueObservable_default);
  const _is_ReplayObservable_default = Symbol('_is_ReplayObservable_default');
  replay_observable.ReplayObservable$ = dart.generic(T => {
    class ReplayObservable extends core.Object {}
    (ReplayObservable.new = function() {
      ;
    }).prototype = ReplayObservable.prototype;
    dart.addTypeTests(ReplayObservable);
    ReplayObservable.prototype[_is_ReplayObservable_default] = true;
    ReplayObservable[dart.implements] = () => [observable.Observable$(T)];
    dart.setLibraryUri(ReplayObservable, "package:rxdart/src/observables/replay_observable.dart");
    return ReplayObservable;
  });
  replay_observable.ReplayObservable = replay_observable.ReplayObservable$();
  dart.addTypeTests(replay_observable.ReplayObservable, _is_ReplayObservable_default);
  const _is_ConnectableObservable_default = Symbol('_is_ConnectableObservable_default');
  connectable_observable.ConnectableObservable$ = dart.generic(T => {
    class ConnectableObservable extends observable.Observable$(T) {}
    (ConnectableObservable.new = function(stream) {
      ConnectableObservable.__proto__.new.call(this, stream);
      ;
    }).prototype = ConnectableObservable.prototype;
    dart.addTypeTests(ConnectableObservable);
    ConnectableObservable.prototype[_is_ConnectableObservable_default] = true;
    dart.setLibraryUri(ConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    return ConnectableObservable;
  });
  connectable_observable.ConnectableObservable = connectable_observable.ConnectableObservable$();
  dart.addTypeTests(connectable_observable.ConnectableObservable, _is_ConnectableObservable_default);
  const _source$ = dart.privateName(connectable_observable, "_source");
  const _subject$ = dart.privateName(connectable_observable, "_subject");
  const _is_PublishConnectableObservable_default = Symbol('_is_PublishConnectableObservable_default');
  connectable_observable.PublishConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class PublishConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (connectable_observable.PublishConnectableObservable$(T)).__(source, publish_subject.PublishSubject$(T).new());
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
    }
    (PublishConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      PublishConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = PublishConnectableObservable.prototype;
    dart.addTypeTests(PublishConnectableObservable);
    PublishConnectableObservable.prototype[_is_PublishConnectableObservable_default] = true;
    dart.setMethodSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getMethods(PublishConnectableObservable.__proto__),
      autoConnect: dart.fnType(observable.Observable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(observable.Observable$(T), [])
    }));
    dart.setLibraryUri(PublishConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getFields(PublishConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(publish_subject.PublishSubject$(T))
    }));
    return PublishConnectableObservable;
  });
  connectable_observable.PublishConnectableObservable = connectable_observable.PublishConnectableObservable$();
  dart.addTypeTests(connectable_observable.PublishConnectableObservable, _is_PublishConnectableObservable_default);
  const _is_ValueConnectableObservable_default = Symbol('_is_ValueConnectableObservable_default');
  connectable_observable.ValueConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class ValueConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (connectable_observable.ValueConnectableObservable$(T)).__(source, behavior_subject.BehaviorSubject$(T).new());
      }
      static seeded(source, seedValue) {
        return new (connectable_observable.ValueConnectableObservable$(T)).__(source, behavior_subject.BehaviorSubject$(T).seeded(seedValue));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
      get value() {
        return this[_subject$].value;
      }
      get hasValue() {
        return this[_subject$].hasValue;
      }
    }
    (ValueConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ValueConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = ValueConnectableObservable.prototype;
    dart.addTypeTests(ValueConnectableObservable);
    ValueConnectableObservable.prototype[_is_ValueConnectableObservable_default] = true;
    ValueConnectableObservable[dart.implements] = () => [value_observable.ValueObservable$(T)];
    dart.setMethodSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getMethods(ValueConnectableObservable.__proto__),
      autoConnect: dart.fnType(value_observable.ValueObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(value_observable.ValueObservable$(T), [])
    }));
    dart.setGetterSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getGetters(ValueConnectableObservable.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(ValueConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getFields(ValueConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(behavior_subject.BehaviorSubject$(T))
    }));
    return ValueConnectableObservable;
  });
  connectable_observable.ValueConnectableObservable = connectable_observable.ValueConnectableObservable$();
  dart.addTypeTests(connectable_observable.ValueConnectableObservable, _is_ValueConnectableObservable_default);
  const _is_ReplayConnectableObservable_default = Symbol('_is_ReplayConnectableObservable_default');
  connectable_observable.ReplayConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class ReplayConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(stream, opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return new (connectable_observable.ReplayConnectableObservable$(T)).__(stream, replay_subject.ReplaySubject$(T).new({maxSize: maxSize}));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
      get values() {
        return this[_subject$].values;
      }
    }
    (ReplayConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ReplayConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = ReplayConnectableObservable.prototype;
    dart.addTypeTests(ReplayConnectableObservable);
    ReplayConnectableObservable.prototype[_is_ReplayConnectableObservable_default] = true;
    ReplayConnectableObservable[dart.implements] = () => [replay_observable.ReplayObservable$(T)];
    dart.setMethodSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getMethods(ReplayConnectableObservable.__proto__),
      autoConnect: dart.fnType(replay_observable.ReplayObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(replay_observable.ReplayObservable$(T), [])
    }));
    dart.setGetterSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getGetters(ReplayConnectableObservable.__proto__),
      values: core.List$(T)
    }));
    dart.setLibraryUri(ReplayConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getFields(ReplayConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(replay_subject.ReplaySubject$(T))
    }));
    return ReplayConnectableObservable;
  });
  connectable_observable.ReplayConnectableObservable = connectable_observable.ReplayConnectableObservable$();
  dart.addTypeTests(connectable_observable.ReplayConnectableObservable, _is_ReplayConnectableObservable_default);
  const _is_ConnectableObservableStreamSubscription_default = Symbol('_is_ConnectableObservableStreamSubscription_default');
  connectable_observable.ConnectableObservableStreamSubscription$ = dart.generic(T => {
    class ConnectableObservableStreamSubscription extends async.StreamSubscription$(T) {
      cancel() {
        this[_subject$].close();
        return this[_source$].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_source$].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source$].isPaused;
      }
      onData(handleData) {
        return this[_source$].onData(handleData);
      }
      onDone(handleDone) {
        return this[_source$].onDone(handleDone);
      }
      onError(handleError) {
        return this[_source$].onError(handleError);
      }
      pause(resumeSignal) {
        if (resumeSignal === void 0) resumeSignal = null;
        return this[_source$].pause(resumeSignal);
      }
      resume() {
        return this[_source$].resume();
      }
    }
    (ConnectableObservableStreamSubscription.new = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ;
    }).prototype = ConnectableObservableStreamSubscription.prototype;
    dart.addTypeTests(ConnectableObservableStreamSubscription);
    ConnectableObservableStreamSubscription.prototype[_is_ConnectableObservableStreamSubscription_default] = true;
    dart.setMethodSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getMethods(ConnectableObservableStreamSubscription.__proto__),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]]),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onError: dart.fnType(dart.void, [core.Function]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getGetters(ConnectableObservableStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(ConnectableObservableStreamSubscription, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getFields(ConnectableObservableStreamSubscription.__proto__),
      [_source$]: dart.finalFieldType(async.StreamSubscription$(T)),
      [_subject$]: dart.finalFieldType(subject.Subject$(T))
    }));
    return ConnectableObservableStreamSubscription;
  });
  connectable_observable.ConnectableObservableStreamSubscription = connectable_observable.ConnectableObservableStreamSubscription$();
  dart.addTypeTests(connectable_observable.ConnectableObservableStreamSubscription, _is_ConnectableObservableStreamSubscription_default);
  const _isDisposed = dart.privateName(composite_subscription, "_isDisposed");
  const _subscriptionsList = dart.privateName(composite_subscription, "_subscriptionsList");
  composite_subscription.CompositeSubscription = class CompositeSubscription extends core.Object {
    get isDisposed() {
      return this[_isDisposed];
    }
    add(T, subscription) {
      if (dart.test(this.isDisposed)) dart.throw("This composite was disposed, try to use new instance instead");
      this[_subscriptionsList][$add](subscription);
      return subscription;
    }
    remove(subscription) {
      subscription.cancel();
      this[_subscriptionsList][$remove](subscription);
    }
    clear() {
      this[_subscriptionsList][$forEach](dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()));
      this[_subscriptionsList][$clear]();
    }
    dispose() {
      this.clear();
      this[_isDisposed] = true;
    }
  };
  (composite_subscription.CompositeSubscription.new = function() {
    this[_isDisposed] = false;
    this[_subscriptionsList] = JSArrayOfStreamSubscription().of([]);
    ;
  }).prototype = composite_subscription.CompositeSubscription.prototype;
  dart.addTypeTests(composite_subscription.CompositeSubscription);
  dart.setMethodSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getMethods(composite_subscription.CompositeSubscription.__proto__),
    add: dart.gFnType(T => [async.StreamSubscription$(T), [async.StreamSubscription$(T)]]),
    remove: dart.fnType(dart.void, [async.StreamSubscription]),
    clear: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getGetters(composite_subscription.CompositeSubscription.__proto__),
    isDisposed: core.bool
  }));
  dart.setLibraryUri(composite_subscription.CompositeSubscription, "package:rxdart/src/utils/composite_subscription.dart");
  dart.setFieldSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getFields(composite_subscription.CompositeSubscription.__proto__),
    [_isDisposed]: dart.fieldType(core.bool),
    [_subscriptionsList]: dart.finalFieldType(core.List$(async.StreamSubscription))
  }));
  const _queue$ = dart.privateName(replay_subject, "_queue");
  const _maxSize$ = dart.privateName(replay_subject, "_maxSize");
  const _isAddingStreamItems = dart.privateName(subject, "_isAddingStreamItems");
  const _addError = dart.privateName(subject, "_addError");
  const _add = dart.privateName(subject, "_add");
  const _is_Subject_default = Symbol('_is_Subject_default');
  const Subject_controller = dart.privateName(subject, "Subject.controller");
  subject.Subject$ = dart.generic(T => {
    let _StreamSinkWrapperOfT = () => (_StreamSinkWrapperOfT = dart.constFn(subject._StreamSinkWrapper$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class Subject extends observable.Observable$(T) {
      get controller() {
        return this[controller$];
      }
      set controller(value) {
        super.controller = value;
      }
      get sink() {
        return new (_StreamSinkWrapperOfT()).new(this);
      }
      get onListen() {
        return this.controller.onListen;
      }
      set onListen(onListenHandler) {
        this.controller.onListen = onListenHandler;
      }
      get stream() {
        return this;
      }
      get onPause() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      set onPause(onPauseHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      get onResume() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      set onResume(onResumeHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      get onCancel() {
        return this.controller.onCancel;
      }
      set onCancel(onCancelHandler) {
        this.controller.onCancel = onCancelHandler;
      }
      get isClosed() {
        return this.controller.isClosed;
      }
      get isPaused() {
        return this.controller.isPaused;
      }
      get hasListener() {
        return this.controller.hasListener;
      }
      get done() {
        return this.controller.done;
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add an error while items are being added from addStream"));
        }
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.onAddError(error, stackTrace);
        this.controller.addError(error, stackTrace);
      }
      onAddError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
      }
      addStream(source, opts) {
        StreamOfT()._check(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        let completer = CompleterOfT().new();
        this[_isAddingStreamItems] = true;
        source.listen(dart.fn(event => {
          this[_add](event);
        }, TToNull()), {onError: dart.fn((e, s) => {
            this.controller.addError(e, s);
            if (dart.test(cancelOnError)) {
              this[_isAddingStreamItems] = false;
              completer.completeError(e);
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
            this[_isAddingStreamItems] = false;
            completer.complete();
          }, VoidToNull()), cancelOnError: cancelOnError});
        return completer.future;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        this[_add](event);
      }
      [_add](event) {
        this.onAdd(event);
        this.controller.add(event);
      }
      onAdd(event) {
        T._check(event);
      }
      close() {
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot close the subject while items are being added from addStream"));
        }
        return this.controller.close();
      }
    }
    (Subject.new = function(controller, observable) {
      this[_isAddingStreamItems] = false;
      this[controller$] = controller;
      Subject.__proto__.new.call(this, observable);
      ;
    }).prototype = Subject.prototype;
    dart.addTypeTests(Subject);
    Subject.prototype[_is_Subject_default] = true;
    const controller$ = Subject_controller;
    Subject[dart.implements] = () => [async.StreamController$(T)];
    dart.setMethodSignature(Subject, () => ({
      __proto__: dart.getMethods(Subject.__proto__),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      onAddError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object], {cancelOnError: core.bool}),
      add: dart.fnType(dart.void, [core.Object]),
      [_add]: dart.fnType(dart.void, [T]),
      onAdd: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(Subject, () => ({
      __proto__: dart.getGetters(Subject.__proto__),
      sink: async.StreamSink$(T),
      onListen: dart.fnType(dart.void, []),
      stream: observable.Observable$(T),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.dynamic, []),
      isClosed: core.bool,
      isPaused: core.bool,
      hasListener: core.bool,
      done: async.Future
    }));
    dart.setSetterSignature(Subject, () => ({
      __proto__: dart.getSetters(Subject.__proto__),
      onListen: dart.fnType(dart.void, []),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(Subject, "package:rxdart/src/subjects/subject.dart");
    dart.setFieldSignature(Subject, () => ({
      __proto__: dart.getFields(Subject.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T)),
      [_isAddingStreamItems]: dart.fieldType(core.bool)
    }));
    return Subject;
  });
  subject.Subject = subject.Subject$();
  dart.addTypeTests(subject.Subject, _is_Subject_default);
  const _is_ReplaySubject_default = Symbol('_is_ReplaySubject_default');
  replay_subject.ReplaySubject$ = dart.generic(T => {
    class ReplaySubject extends subject.Subject$(T) {
      static new(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let queue = new (collection$.ListQueue$(T)).new();
        return new (replay_subject.ReplaySubject$(T)).__(controller, observable.Observable$(T).defer(dart.fn(() => new (observable.Observable$(T)).new(controller.stream).startWithMany(queue[$toList]({growable: false})), dart.fnType(observable.Observable$(T), [])), {reusable: true}), queue, maxSize);
      }
      onAdd(event) {
        T._check(event);
        if (this[_queue$][$length] == this[_maxSize$]) {
          this[_queue$].removeFirst();
        }
        this[_queue$].add(event);
      }
      get values() {
        return this[_queue$][$toList]({growable: false});
      }
    }
    (ReplaySubject.__ = function(controller, observable, _queue, _maxSize) {
      this[_queue$] = _queue;
      this[_maxSize$] = _maxSize;
      ReplaySubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = ReplaySubject.prototype;
    dart.addTypeTests(ReplaySubject);
    ReplaySubject.prototype[_is_ReplaySubject_default] = true;
    ReplaySubject[dart.implements] = () => [replay_observable.ReplayObservable$(T)];
    dart.setGetterSignature(ReplaySubject, () => ({
      __proto__: dart.getGetters(ReplaySubject.__proto__),
      values: core.List$(T)
    }));
    dart.setLibraryUri(ReplaySubject, "package:rxdart/src/subjects/replay_subject.dart");
    dart.setFieldSignature(ReplaySubject, () => ({
      __proto__: dart.getFields(ReplaySubject.__proto__),
      [_queue$]: dart.finalFieldType(collection$.Queue$(T)),
      [_maxSize$]: dart.finalFieldType(core.int)
    }));
    return ReplaySubject;
  });
  replay_subject.ReplaySubject = replay_subject.ReplaySubject$();
  dart.addTypeTests(replay_subject.ReplaySubject, _is_ReplaySubject_default);
  const _target$ = dart.privateName(subject, "_target");
  const _is__StreamSinkWrapper_default = Symbol('_is__StreamSinkWrapper_default');
  subject._StreamSinkWrapper$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class _StreamSinkWrapper extends core.Object {
      add(data) {
        T._check(data);
        this[_target$].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_target$].addError(error, stackTrace);
      }
      close() {
        return this[_target$].close();
      }
      addStream(source) {
        StreamOfT()._check(source);
        return this[_target$].addStream(source);
      }
      get done() {
        return this[_target$].done;
      }
    }
    (_StreamSinkWrapper.new = function(_target) {
      this[_target$] = _target;
      ;
    }).prototype = _StreamSinkWrapper.prototype;
    dart.addTypeTests(_StreamSinkWrapper);
    _StreamSinkWrapper.prototype[_is__StreamSinkWrapper_default] = true;
    _StreamSinkWrapper[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getMethods(_StreamSinkWrapper.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(async.Future, []),
      addStream: dart.fnType(async.Future, [core.Object])
    }));
    dart.setGetterSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getGetters(_StreamSinkWrapper.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(_StreamSinkWrapper, "package:rxdart/src/subjects/subject.dart");
    dart.setFieldSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getFields(_StreamSinkWrapper.__proto__),
      [_target$]: dart.finalFieldType(async.StreamController$(T))
    }));
    return _StreamSinkWrapper;
  });
  subject._StreamSinkWrapper = subject._StreamSinkWrapper$();
  dart.addTypeTests(subject._StreamSinkWrapper, _is__StreamSinkWrapper_default);
  const _is_PublishSubject_default = Symbol('_is_PublishSubject_default');
  publish_subject.PublishSubject$ = dart.generic(T => {
    class PublishSubject extends subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        return new (publish_subject.PublishSubject$(T)).__(controller, new (observable.Observable$(T)).new(controller.stream));
      }
    }
    (PublishSubject.__ = function(controller, observable) {
      PublishSubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = PublishSubject.prototype;
    dart.addTypeTests(PublishSubject);
    PublishSubject.prototype[_is_PublishSubject_default] = true;
    dart.setLibraryUri(PublishSubject, "package:rxdart/src/subjects/publish_subject.dart");
    return PublishSubject;
  });
  publish_subject.PublishSubject = publish_subject.PublishSubject$();
  dart.addTypeTests(publish_subject.PublishSubject, _is_PublishSubject_default);
  const _wrapper$ = dart.privateName(behavior_subject, "_wrapper");
  const _is_BehaviorSubject_default = Symbol('_is_BehaviorSubject_default');
  behavior_subject.BehaviorSubject$ = dart.generic(T => {
    class BehaviorSubject extends subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (behavior_subject._Wrapper$(T)).new();
        return new (behavior_subject.BehaviorSubject$(T)).__(controller, observable.Observable$(T).defer(dart.fn(() => {
          if (dart.test(wrapper.latestIsError)) {
            async.scheduleMicrotask(dart.fn(() => controller.addError(wrapper.latestError, wrapper.latestStackTrace), VoidTovoid()));
          } else if (dart.test(wrapper.latestIsValue)) {
            return new (observable.Observable$(T)).new(controller.stream).startWith(wrapper.latestValue);
          }
          return controller.stream;
        }, dart.fnType(async.Stream$(T), [])), {reusable: true}), wrapper);
      }
      static seeded(seedValue, opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (behavior_subject._Wrapper$(T)).seeded(seedValue);
        return new (behavior_subject.BehaviorSubject$(T)).__(controller, observable.Observable$(T).defer(dart.fn(() => {
          if (dart.test(wrapper.latestIsError)) {
            async.scheduleMicrotask(dart.fn(() => controller.addError(wrapper.latestError, wrapper.latestStackTrace), VoidTovoid()));
          }
          return new (observable.Observable$(T)).new(controller.stream).startWith(wrapper.latestValue);
        }, dart.fnType(observable.Observable$(T), [])), {reusable: true}), wrapper);
      }
      onAdd(event) {
        T._check(event);
        return this[_wrapper$].setValue(event);
      }
      onAddError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        return this[_wrapper$].setError(error, stackTrace);
      }
      get stream() {
        return this;
      }
      get hasValue() {
        return this[_wrapper$].latestIsValue;
      }
      get value() {
        return this[_wrapper$].latestValue;
      }
      set value(newValue) {
        T._check(newValue);
        return this.add(newValue);
      }
    }
    (BehaviorSubject.__ = function(controller, observable, _wrapper) {
      this[_wrapper$] = _wrapper;
      BehaviorSubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = BehaviorSubject.prototype;
    dart.addTypeTests(BehaviorSubject);
    BehaviorSubject.prototype[_is_BehaviorSubject_default] = true;
    BehaviorSubject[dart.implements] = () => [value_observable.ValueObservable$(T)];
    dart.setGetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getGetters(BehaviorSubject.__proto__),
      stream: value_observable.ValueObservable$(T),
      hasValue: core.bool,
      value: T
    }));
    dart.setSetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getSetters(BehaviorSubject.__proto__),
      value: core.Object
    }));
    dart.setLibraryUri(BehaviorSubject, "package:rxdart/src/subjects/behavior_subject.dart");
    dart.setFieldSignature(BehaviorSubject, () => ({
      __proto__: dart.getFields(BehaviorSubject.__proto__),
      [_wrapper$]: dart.fieldType(behavior_subject._Wrapper$(T))
    }));
    return BehaviorSubject;
  });
  behavior_subject.BehaviorSubject = behavior_subject.BehaviorSubject$();
  dart.addTypeTests(behavior_subject.BehaviorSubject, _is_BehaviorSubject_default);
  const _is__Wrapper_default = Symbol('_is__Wrapper_default');
  const _Wrapper_latestValue = dart.privateName(behavior_subject, "_Wrapper.latestValue");
  behavior_subject._Wrapper$ = dart.generic(T => {
    class _Wrapper extends core.Object {
      get latestValue() {
        return this[latestValue$];
      }
      set latestValue(value) {
        this[latestValue$] = T._check(value);
      }
      setValue(event) {
        T._check(event);
        this.latestIsValue = true;
        this.latestIsError = false;
        this.latestValue = event;
        this.latestError = null;
        this.latestStackTrace = null;
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.latestIsValue = false;
        this.latestIsError = true;
        this.latestValue = null;
        this.latestError = error;
        this.latestStackTrace = stackTrace;
      }
    }
    (_Wrapper.new = function() {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
      this[latestValue$] = null;
      ;
    }).prototype = _Wrapper.prototype;
    (_Wrapper.seeded = function(latestValue) {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
      this[latestValue$] = latestValue;
      this.latestIsValue = true;
      ;
    }).prototype = _Wrapper.prototype;
    dart.addTypeTests(_Wrapper);
    _Wrapper.prototype[_is__Wrapper_default] = true;
    const latestValue$ = _Wrapper_latestValue;
    dart.setMethodSignature(_Wrapper, () => ({
      __proto__: dart.getMethods(_Wrapper.__proto__),
      setValue: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [core.Object], [core.StackTrace])
    }));
    dart.setLibraryUri(_Wrapper, "package:rxdart/src/subjects/behavior_subject.dart");
    dart.setFieldSignature(_Wrapper, () => ({
      __proto__: dart.getFields(_Wrapper.__proto__),
      latestValue: dart.fieldType(T),
      latestError: dart.fieldType(core.Object),
      latestStackTrace: dart.fieldType(core.StackTrace),
      latestIsValue: dart.fieldType(core.bool),
      latestIsError: dart.fieldType(core.bool)
    }));
    return _Wrapper;
  });
  behavior_subject._Wrapper = behavior_subject._Wrapper$();
  dart.addTypeTests(behavior_subject._Wrapper, _is__Wrapper_default);
  const _is_WrappedFuture_default = Symbol('_is_WrappedFuture_default');
  const WrappedFuture_wrapped = dart.privateName(wrapped_future, "WrappedFuture.wrapped");
  wrapped_future.WrappedFuture$ = dart.generic(T => {
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    class WrappedFuture extends core.Object {
      get wrapped() {
        return this[wrapped$];
      }
      set wrapped(value) {
        super.wrapped = value;
      }
      asStream() {
        return this.wrapped.asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this.wrapped.catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this.wrapped.then(S, onValue, {onError: onError});
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToFutureOrOfT()._check(onTimeout);
        return this.wrapped.timeout(timeLimit, {onTimeout: onTimeout});
      }
      whenComplete(action) {
        return this.wrapped.whenComplete(action);
      }
    }
    (WrappedFuture.new = function(wrapped) {
      this[wrapped$] = wrapped;
      ;
    }).prototype = WrappedFuture.prototype;
    WrappedFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(WrappedFuture);
    WrappedFuture.prototype[_is_WrappedFuture_default] = true;
    const wrapped$ = WrappedFuture_wrapped;
    WrappedFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(WrappedFuture, () => ({
      __proto__: dart.getMethods(WrappedFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.void, [])])
    }));
    dart.setLibraryUri(WrappedFuture, "package:rxdart/src/futures/wrapped_future.dart");
    dart.setFieldSignature(WrappedFuture, () => ({
      __proto__: dart.getFields(WrappedFuture.__proto__),
      wrapped: dart.finalFieldType(async.Future$(T))
    }));
    return WrappedFuture;
  });
  wrapped_future.WrappedFuture = wrapped_future.WrappedFuture$();
  dart.addTypeTests(wrapped_future.WrappedFuture, _is_WrappedFuture_default);
  const _is_StreamMinFuture_default = Symbol('_is_StreamMinFuture_default');
  stream_min_future.StreamMinFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    class StreamMinFuture extends wrapped_future.WrappedFuture$(T) {}
    (StreamMinFuture.new = function(stream, comparator) {
      if (comparator === void 0) comparator = null;
      StreamMinFuture.__proto__.new.call(this, stream.toList().then(T, dart.fn(values => {
        let t19;
        return (t19 = values, t19[$sort](comparator), t19)[$first];
      }, ListOfTToT())));
      ;
    }).prototype = StreamMinFuture.prototype;
    dart.addTypeTests(StreamMinFuture);
    StreamMinFuture.prototype[_is_StreamMinFuture_default] = true;
    dart.setLibraryUri(StreamMinFuture, "package:rxdart/src/futures/stream_min_future.dart");
    return StreamMinFuture;
  });
  stream_min_future.StreamMinFuture = stream_min_future.StreamMinFuture$();
  dart.addTypeTests(stream_min_future.StreamMinFuture, _is_StreamMinFuture_default);
  const _is_StreamMaxFuture_default = Symbol('_is_StreamMaxFuture_default');
  stream_max_future.StreamMaxFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    class StreamMaxFuture extends wrapped_future.WrappedFuture$(T) {}
    (StreamMaxFuture.new = function(stream, comparator) {
      if (comparator === void 0) comparator = null;
      StreamMaxFuture.__proto__.new.call(this, stream.toList().then(T, dart.fn(values => {
        let t19;
        return (t19 = values, t19[$sort](comparator), t19)[$last];
      }, ListOfTToT())));
      ;
    }).prototype = StreamMaxFuture.prototype;
    dart.addTypeTests(StreamMaxFuture);
    StreamMaxFuture.prototype[_is_StreamMaxFuture_default] = true;
    dart.setLibraryUri(StreamMaxFuture, "package:rxdart/src/futures/stream_max_future.dart");
    return StreamMaxFuture;
  });
  stream_max_future.StreamMaxFuture = stream_max_future.StreamMaxFuture$();
  dart.addTypeTests(stream_max_future.StreamMaxFuture, _is_StreamMaxFuture_default);
  const _is_AsObservableFuture_default = Symbol('_is_AsObservableFuture_default');
  as_observable_future.AsObservableFuture$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(observable.Observable$(T)))();
    class AsObservableFuture extends wrapped_future.WrappedFuture$(T) {
      asObservable() {
        return ObservableOfT().fromFuture(this.wrapped);
      }
    }
    (AsObservableFuture.new = function(wrapped) {
      AsObservableFuture.__proto__.new.call(this, wrapped);
      ;
    }).prototype = AsObservableFuture.prototype;
    dart.addTypeTests(AsObservableFuture);
    AsObservableFuture.prototype[_is_AsObservableFuture_default] = true;
    dart.setMethodSignature(AsObservableFuture, () => ({
      __proto__: dart.getMethods(AsObservableFuture.__proto__),
      asObservable: dart.fnType(observable.Observable$(T), [])
    }));
    dart.setLibraryUri(AsObservableFuture, "package:rxdart/src/futures/as_observable_future.dart");
    return AsObservableFuture;
  });
  as_observable_future.AsObservableFuture = as_observable_future.AsObservableFuture$();
  dart.addTypeTests(as_observable_future.AsObservableFuture, _is_AsObservableFuture_default);
  dart.trackLibraries("packages/rxdart/futures", {
    "package:rxdart/src/transformers/on_error_resume_next.dart": on_error_resume_next,
    "package:rxdart/src/observables/observable.dart": observable,
    "package:rxdart/transformers.dart": transformers,
    "package:rxdart/src/utils/type_token.dart": type_token,
    "package:rxdart/src/transformers/with_latest_from.dart": with_latest_from,
    "package:rxdart/src/transformers/window.dart": window,
    "package:rxdart/src/transformers/timestamp.dart": timestamp,
    "package:rxdart/src/transformers/time_interval.dart": time_interval,
    "package:rxdart/src/transformers/throttle.dart": throttle,
    "package:rxdart/src/transformers/switch_map.dart": switch_map,
    "package:rxdart/src/transformers/switch_if_empty.dart": switch_if_empty,
    "package:rxdart/src/transformers/start_with_many.dart": start_with_many,
    "package:rxdart/src/transformers/start_with.dart": start_with,
    "package:rxdart/src/transformers/skip_until.dart": skip_until,
    "package:rxdart/src/transformers/scan.dart": scan,
    "package:rxdart/src/transformers/on_error_resume.dart": on_error_resume,
    "package:rxdart/src/transformers/of_type.dart": of_type,
    "package:rxdart/src/transformers/materialize.dart": materialize,
    "package:rxdart/src/transformers/map_to.dart": map_to,
    "package:rxdart/src/transformers/interval.dart": interval,
    "package:rxdart/src/transformers/ignore_elements.dart": ignore_elements,
    "package:rxdart/src/transformers/group_by.dart": group_by,
    "package:rxdart/src/transformers/flat_map_latest.dart": flat_map_latest,
    "package:rxdart/src/transformers/flat_map.dart": flat_map,
    "package:rxdart/src/transformers/exhaust_map.dart": exhaust_map,
    "package:rxdart/src/transformers/distinct_unique.dart": distinct_unique,
    "package:rxdart/src/transformers/dematerialize.dart": dematerialize,
    "package:rxdart/src/transformers/delay.dart": delay,
    "package:rxdart/src/transformers/default_if_empty.dart": default_if_empty,
    "package:rxdart/src/transformers/debounce.dart": debounce,
    "package:rxdart/src/transformers/buffer.dart": buffer,
    "package:rxdart/src/observables/value_observable.dart": value_observable,
    "package:rxdart/src/observables/replay_observable.dart": replay_observable,
    "package:rxdart/src/observables/connectable_observable.dart": connectable_observable,
    "package:rxdart/rxdart.dart": rxdart,
    "package:rxdart/src/utils/composite_subscription.dart": composite_subscription,
    "package:rxdart/subjects.dart": subjects,
    "package:rxdart/src/subjects/replay_subject.dart": replay_subject,
    "package:rxdart/src/subjects/subject.dart": subject,
    "package:rxdart/src/subjects/publish_subject.dart": publish_subject,
    "package:rxdart/src/subjects/behavior_subject.dart": behavior_subject,
    "package:rxdart/futures.dart": futures,
    "package:rxdart/src/futures/wrapped_future.dart": wrapped_future,
    "package:rxdart/src/futures/stream_min_future.dart": stream_min_future,
    "package:rxdart/src/futures/stream_max_future.dart": stream_max_future,
    "package:rxdart/src/futures/as_observable_future.dart": as_observable_future
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/transformers/on_error_resume_next.dart","src/observables/observable.dart","src/utils/type_token.dart","src/transformers/with_latest_from.dart","src/transformers/window.dart","src/transformers/timestamp.dart","src/transformers/time_interval.dart","src/transformers/throttle.dart","src/transformers/switch_map.dart","src/transformers/switch_if_empty.dart","src/transformers/start_with_many.dart","src/transformers/start_with.dart","src/transformers/skip_until.dart","src/transformers/scan.dart","src/transformers/on_error_resume.dart","src/transformers/of_type.dart","src/transformers/materialize.dart","src/transformers/map_to.dart","src/transformers/interval.dart","src/transformers/ignore_elements.dart","src/transformers/group_by.dart","src/transformers/flat_map_latest.dart","src/transformers/flat_map.dart","src/transformers/exhaust_map.dart","src/transformers/distinct_unique.dart","src/transformers/dematerialize.dart","src/transformers/delay.dart","src/transformers/default_if_empty.dart","src/transformers/debounce.dart","src/transformers/buffer.dart","src/observables/value_observable.dart","src/observables/replay_observable.dart","src/observables/connectable_observable.dart","src/utils/composite_subscription.dart","src/subjects/subject.dart","src/subjects/replay_subject.dart","src/subjects/publish_subject.dart","src/subjects/behavior_subject.dart","src/futures/wrapped_future.dart","src/futures/stream_min_future.dart","src/futures/stream_max_future.dart","src/futures/as_observable_future.dart"],"names":[],"mappings":"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","file":"futures.ddc.js"}');
  // Exports:
  return {
    src__transformers__on_error_resume_next: on_error_resume_next,
    src__observables__observable: observable,
    transformers: transformers,
    src__utils__type_token: type_token,
    src__transformers__with_latest_from: with_latest_from,
    src__transformers__window: window,
    src__transformers__timestamp: timestamp,
    src__transformers__time_interval: time_interval,
    src__transformers__throttle: throttle,
    src__transformers__switch_map: switch_map,
    src__transformers__switch_if_empty: switch_if_empty,
    src__transformers__start_with_many: start_with_many,
    src__transformers__start_with: start_with,
    src__transformers__skip_until: skip_until,
    src__transformers__scan: scan,
    src__transformers__on_error_resume: on_error_resume,
    src__transformers__of_type: of_type,
    src__transformers__materialize: materialize,
    src__transformers__map_to: map_to,
    src__transformers__interval: interval,
    src__transformers__ignore_elements: ignore_elements,
    src__transformers__group_by: group_by,
    src__transformers__flat_map_latest: flat_map_latest,
    src__transformers__flat_map: flat_map,
    src__transformers__exhaust_map: exhaust_map,
    src__transformers__distinct_unique: distinct_unique,
    src__transformers__dematerialize: dematerialize,
    src__transformers__delay: delay,
    src__transformers__default_if_empty: default_if_empty,
    src__transformers__debounce: debounce,
    src__transformers__buffer: buffer,
    src__observables__value_observable: value_observable,
    src__observables__replay_observable: replay_observable,
    src__observables__connectable_observable: connectable_observable,
    rxdart: rxdart,
    src__utils__composite_subscription: composite_subscription,
    subjects: subjects,
    src__subjects__replay_subject: replay_subject,
    src__subjects__subject: subject,
    src__subjects__publish_subject: publish_subject,
    src__subjects__behavior_subject: behavior_subject,
    futures: futures,
    src__futures__wrapped_future: wrapped_future,
    src__futures__stream_min_future: stream_min_future,
    src__futures__stream_max_future: stream_max_future,
    src__futures__as_observable_future: as_observable_future
  };
});

//# sourceMappingURL=futures.ddc.js.map
