define(['dart_sdk', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const io = dart_sdk.io;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const image_picker = Object.create(dart.library);
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: image_picker.ImageSource.prototype,
        [_name$]: "ImageSource.camera",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: image_picker.ImageSource.prototype,
        [_name$]: "ImageSource.gallery",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], image_picker.ImageSource);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C5 || CT.C5
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C4 || CT.C4,
        [MethodChannel_name]: "plugins.flutter.io/image_picker"
      });
    }
  });
  const _name$ = dart.privateName(image_picker, "_name");
  let C0;
  let C1;
  let C2;
  image_picker.ImageSource = class ImageSource extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (image_picker.ImageSource.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = image_picker.ImageSource.prototype;
  dart.addTypeTests(image_picker.ImageSource);
  dart.setLibraryUri(image_picker.ImageSource, "package:image_picker/image_picker.dart");
  dart.setFieldSignature(image_picker.ImageSource, () => ({
    __proto__: dart.getFields(image_picker.ImageSource.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(image_picker.ImageSource, ['toString']);
  image_picker.ImageSource.camera = C0 || CT.C0;
  image_picker.ImageSource.gallery = C1 || CT.C1;
  image_picker.ImageSource.values = C2 || CT.C2;
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C5;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C4;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C3;
  image_picker.ImagePicker = class ImagePicker extends core.Object {
    static pickImage(opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : null;
      let maxHeight = opts && 'maxHeight' in opts ? opts.maxHeight : null;
      return async.async(io.File, function* pickImage() {
        if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/image_picker/image_picker.dart", 37, 12, "source != null");
        if (maxWidth != null && dart.notNull(maxWidth) < 0) {
          dart.throw(new core.ArgumentError.value(maxWidth, "maxWidth cannot be negative"));
        }
        if (maxHeight != null && dart.notNull(maxHeight) < 0) {
          dart.throw(new core.ArgumentError.value(maxHeight, "maxHeight cannot be negative"));
        }
        let path = (yield image_picker.ImagePicker._channel.invokeMethod(core.String, "pickImage", new (IdentityMapOfString$dynamic()).from(["source", source.index, "maxWidth", maxWidth, "maxHeight", maxHeight])));
        return path == null ? null : io.File.new(path);
      });
    }
    static pickVideo(opts) {
      let source = opts && 'source' in opts ? opts.source : null;
      return async.async(io.File, function* pickVideo() {
        if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/image_picker/image_picker.dart", 65, 12, "source != null");
        let path = (yield image_picker.ImagePicker._channel.invokeMethod(core.String, "pickVideo", new (IdentityMapOfString$dynamic()).from(["source", source.index])));
        return path == null ? null : io.File.new(path);
      });
    }
  };
  (image_picker.ImagePicker.new = function() {
    ;
  }).prototype = image_picker.ImagePicker.prototype;
  dart.addTypeTests(image_picker.ImagePicker);
  dart.setLibraryUri(image_picker.ImagePicker, "package:image_picker/image_picker.dart");
  dart.defineLazy(image_picker.ImagePicker, {
    /*image_picker.ImagePicker._channel*/get _channel() {
      return C3 || CT.C3;
    }
  });
  dart.trackLibraries("packages/image_picker/image_picker", {
    "package:image_picker/image_picker.dart": image_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_picker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiBA;;kDANK;;;;EAML;;;;;;;;;;;;;;;;;;;;;UAe0B;UACf;UACA;AAHoB;AAK3B,cAAO,AAAO,MAAD,IAAI;AAEjB,YAAI,QAAQ,IAAI,QAAiB,aAAT,QAAQ,IAAG;AACiC,UAAlE,WAAoB,6BAAM,QAAQ,EAAE;;AAGtC,YAAI,SAAS,IAAI,QAAkB,aAAV,SAAS,IAAG;AACiC,UAApE,WAAoB,6BAAM,SAAS,EAAE;;AAM1B,oBAAO,MAAM,AAAS,4DACjC,aACiB,0CACf,UAAU,AAAO,MAAD,QAChB,YAAY,QAAQ,EACpB,aAAa,SAAS;AAI1B,cAAO,AAAK,KAAD,IAAI,OAAO,OAAO,YAAK,IAAI;MACxC;;;UAGwB;AADK;AAG3B,cAAO,AAAO,MAAD,IAAI;AAKJ,oBAAO,MAAM,AAAS,4DACjC,aACiB,0CACf,UAAU,AAAO,MAAD;AAGpB,cAAO,AAAK,KAAD,IAAI,OAAO,OAAO,YAAK,IAAI;MACxC;;;;;EACF;;;;MAzD6B,iCAAQ","file":"image_picker.ddc.js"}');
  // Exports:
  return {
    image_picker: image_picker
  };
});

//# sourceMappingURL=image_picker.ddc.js.map
