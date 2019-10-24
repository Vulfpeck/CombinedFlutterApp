define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const char_code = Object.create(dart.library);
  const bound_multipart_stream = Object.create(dart.library);
  const mime_shared = Object.create(dart.library);
  const mime = Object.create(dart.library);
  const mime_type = Object.create(dart.library);
  const magic_number = Object.create(dart.library);
  const default_extension_map = Object.create(dart.library);
  const mime_multipart_transformer = Object.create(dart.library);
  const $sublist = dartx.sublist;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $toLowerCase = dartx.toLowerCase;
  const $_set = dartx._set;
  const $clear = dartx.clear;
  const $indexOf = dartx.indexOf;
  const $lastIndexOf = dartx.lastIndexOf;
  const $substring = dartx.substring;
  const $codeUnits = dartx.codeUnits;
  const $setRange = dartx.setRange;
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let StreamControllerOfMimeMultipart = () => (StreamControllerOfMimeMultipart = dart.constFn(async.StreamController$(mime_shared.MimeMultipart)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let ListOfintToNull = () => (ListOfintToNull = dart.constFn(dart.fnType(core.Null, [ListOfint()])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let LinkedMapOfString$String = () => (LinkedMapOfString$String = dart.constFn(_js_helper.LinkedMap$(core.String, core.String)))();
  let StreamControllerOfListOfint = () => (StreamControllerOfListOfint = dart.constFn(async.StreamController$(ListOfint())))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let JSArrayOfMagicNumber = () => (JSArrayOfMagicNumber = dart.constFn(_interceptors.JSArray$(magic_number.MagicNumber)))();
  let StreamOfListOfint = () => (StreamOfListOfint = dart.constFn(async.Stream$(ListOfint())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([40, 41, 60, 62, 64, 44, 59, 58, 92, 34, 47, 91, 93, 63, 61, 123, 125, 32, 9], core.int);
    },
    get C3() {
      return C3 = dart.constList([37, 80, 68, 70], core.int);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C3 || CT.C3,
        [MagicNumber_mimeType]: "application/pdf"
      });
    },
    get C5() {
      return C5 = dart.constList([37, 81], core.int);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C5 || CT.C5,
        [MagicNumber_mimeType]: "application/postscript"
      });
    },
    get C7() {
      return C7 = dart.constList([71, 73, 70, 56, 55, 97], core.int);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C7 || CT.C7,
        [MagicNumber_mimeType]: "image/gif"
      });
    },
    get C9() {
      return C9 = dart.constList([71, 73, 70, 56, 57, 97], core.int);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C9 || CT.C9,
        [MagicNumber_mimeType]: "image/gif"
      });
    },
    get C11() {
      return C11 = dart.constList([255, 216], core.int);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C11 || CT.C11,
        [MagicNumber_mimeType]: "image/jpeg"
      });
    },
    get C13() {
      return C13 = dart.constList([137, 80, 78, 71, 13, 10, 26, 10], core.int);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C13 || CT.C13,
        [MagicNumber_mimeType]: "image/png"
      });
    },
    get C15() {
      return C15 = dart.constList([73, 73, 42, 0], core.int);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C15 || CT.C15,
        [MagicNumber_mimeType]: "image/tiff"
      });
    },
    get C17() {
      return C17 = dart.constList([77, 77, 0, 42], core.int);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C17 || CT.C17,
        [MagicNumber_mimeType]: "image/tiff"
      });
    },
    get C19() {
      return C19 = dart.constList([255, 255, 255, 0, 255, 255, 255, 255, 255, 255, 255, 255], core.int);
    },
    get C20() {
      return C20 = dart.constList([0, 0, 0, 0, 102, 116, 121, 112, 51, 103, 112, 53], core.int);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: C19 || CT.C19,
        [MagicNumber_numbers]: C20 || CT.C20,
        [MagicNumber_mimeType]: "video/mp4"
      });
    },
    get C22() {
      return C22 = dart.constList([70, 84, 108, 103], core.int);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: magic_number.MagicNumber.prototype,
        [MagicNumber_mask]: null,
        [MagicNumber_numbers]: C22 || CT.C22,
        [MagicNumber_mimeType]: "model/gltf-binary"
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C4 || CT.C4, C6 || CT.C6, C8 || CT.C8, C10 || CT.C10, C12 || CT.C12, C14 || CT.C14, C16 || CT.C16, C18 || CT.C18, C21 || CT.C21], magic_number.MagicNumber);
    }
  });
  char_code.CharCode = class CharCode extends core.Object {};
  (char_code.CharCode.new = function() {
    ;
  }).prototype = char_code.CharCode.prototype;
  dart.addTypeTests(char_code.CharCode);
  dart.setLibraryUri(char_code.CharCode, "package:mime/src/char_code.dart");
  dart.defineLazy(char_code.CharCode, {
    /*char_code.CharCode.HT*/get HT() {
      return 9;
    },
    /*char_code.CharCode.LF*/get LF() {
      return 10;
    },
    /*char_code.CharCode.CR*/get CR() {
      return 13;
    },
    /*char_code.CharCode.SP*/get SP() {
      return 32;
    },
    /*char_code.CharCode.DASH*/get DASH() {
      return 45;
    },
    /*char_code.CharCode.COLON*/get COLON() {
      return 58;
    },
    /*char_code.CharCode.UPPER_A*/get UPPER_A() {
      return 65;
    },
    /*char_code.CharCode.UPPER_Z*/get UPPER_Z() {
      return 90;
    },
    /*char_code.CharCode.LOWER_A*/get LOWER_A() {
      return 97;
    }
  });
  const _stream$ = dart.privateName(bound_multipart_stream, "_stream");
  mime_shared.MimeMultipart = class MimeMultipart extends async.Stream$(core.List$(core.int)) {};
  (mime_shared.MimeMultipart.new = function() {
    mime_shared.MimeMultipart.__proto__.new.call(this);
    ;
  }).prototype = mime_shared.MimeMultipart.prototype;
  dart.addTypeTests(mime_shared.MimeMultipart);
  dart.setLibraryUri(mime_shared.MimeMultipart, "package:mime/src/mime_shared.dart");
  const _MimeMultipart_headers = dart.privateName(bound_multipart_stream, "_MimeMultipart.headers");
  bound_multipart_stream._MimeMultipart = class _MimeMultipart extends mime_shared.MimeMultipart {
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    listen(onData, opts) {
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this[_stream$].listen(onData, {onDone: onDone, onError: onError, cancelOnError: cancelOnError});
    }
  };
  (bound_multipart_stream._MimeMultipart.new = function(headers, _stream) {
    this[headers$] = headers;
    this[_stream$] = _stream;
    bound_multipart_stream._MimeMultipart.__proto__.new.call(this);
    ;
  }).prototype = bound_multipart_stream._MimeMultipart.prototype;
  dart.addTypeTests(bound_multipart_stream._MimeMultipart);
  const headers$ = _MimeMultipart_headers;
  dart.setMethodSignature(bound_multipart_stream._MimeMultipart, () => ({
    __proto__: dart.getMethods(bound_multipart_stream._MimeMultipart.__proto__),
    listen: dart.fnType(async.StreamSubscription$(core.List$(core.int)), [dart.fnType(dart.void, [core.List$(core.int)])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
  }));
  dart.setLibraryUri(bound_multipart_stream._MimeMultipart, "package:mime/src/bound_multipart_stream.dart");
  dart.setFieldSignature(bound_multipart_stream._MimeMultipart, () => ({
    __proto__: dart.getFields(bound_multipart_stream._MimeMultipart.__proto__),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_stream$]: dart.finalFieldType(async.Stream$(core.List$(core.int)))
  }));
  const _headerField = dart.privateName(bound_multipart_stream, "_headerField");
  const _headerValue = dart.privateName(bound_multipart_stream, "_headerValue");
  const _controllerState = dart.privateName(bound_multipart_stream, "_controllerState");
  const _controller = dart.privateName(bound_multipart_stream, "_controller");
  const _subscription = dart.privateName(bound_multipart_stream, "_subscription");
  const _multipartController = dart.privateName(bound_multipart_stream, "_multipartController");
  const _headers = dart.privateName(bound_multipart_stream, "_headers");
  const _state = dart.privateName(bound_multipart_stream, "_state");
  const _boundaryIndex = dart.privateName(bound_multipart_stream, "_boundaryIndex");
  const _index = dart.privateName(bound_multipart_stream, "_index");
  const _buffer = dart.privateName(bound_multipart_stream, "_buffer");
  const _boundary$ = dart.privateName(bound_multipart_stream, "_boundary");
  const _pauseStream = dart.privateName(bound_multipart_stream, "_pauseStream");
  const _resumeStream = dart.privateName(bound_multipart_stream, "_resumeStream");
  const _tryPropagateControllerState = dart.privateName(bound_multipart_stream, "_tryPropagateControllerState");
  const _parse = dart.privateName(bound_multipart_stream, "_parse");
  bound_multipart_stream.BoundMultipartStream = class BoundMultipartStream extends core.Object {
    get stream() {
      return this[_controller].stream;
    }
    [_resumeStream]() {
      if (!(this[_controllerState] === 2)) dart.assertFailed(null, "org-dartlang-app:///packages/mime/src/bound_multipart_stream.dart", 148, 12, "_controllerState == _CONTROLLER_STATE_PAUSED");
      this[_controllerState] = 1;
      this[_tryPropagateControllerState]();
    }
    [_pauseStream]() {
      this[_controllerState] = 2;
      this[_tryPropagateControllerState]();
    }
    [_tryPropagateControllerState]() {
      if (this[_multipartController] == null) {
        switch (this[_controllerState]) {
          case 1:
          {
            if (dart.test(this[_subscription].isPaused)) this[_subscription].resume();
            break;
          }
          case 2:
          {
            if (!dart.test(this[_subscription].isPaused)) this[_subscription].pause();
            break;
          }
          case 3:
          {
            this[_subscription].cancel();
            break;
          }
          default:
          {
            dart.throw(new core.StateError.new("This code should never be reached."));
          }
        }
      }
    }
    [_parse]() {
      let boundaryPrefix = 0;
      let contentStartIndex = null;
      const reportData = () => {
        if (dart.notNull(contentStartIndex) < 0) {
          let contentLength = dart.notNull(boundaryPrefix) + dart.notNull(this[_index]) - dart.notNull(this[_boundaryIndex]);
          if (contentLength <= dart.notNull(boundaryPrefix)) {
            this[_multipartController].add(this[_boundary$][$sublist](0, contentLength));
          } else {
            this[_multipartController].add(this[_boundary$][$sublist](0, boundaryPrefix));
            this[_multipartController].add(this[_buffer][$sublist](0, contentLength - dart.notNull(boundaryPrefix)));
          }
        } else {
          let contentEndIndex = dart.notNull(this[_index]) - dart.notNull(this[_boundaryIndex]);
          this[_multipartController].add(this[_buffer][$sublist](contentStartIndex, contentEndIndex));
        }
      };
      dart.fn(reportData, VoidTovoid());
      if (this[_state] === 10 && this[_boundaryIndex] === 0) {
        contentStartIndex = 0;
      } else {
        contentStartIndex = null;
      }
      boundaryPrefix = this[_boundaryIndex];
      while (dart.notNull(this[_index]) < dart.notNull(this[_buffer][$length]) && this[_state] !== 15 && this[_state] !== 14) {
        let byte = null;
        if (dart.notNull(this[_index]) < 0) {
          byte = this[_boundary$][$_get](dart.notNull(boundaryPrefix) + dart.notNull(this[_index]));
        } else {
          byte = this[_buffer][$_get](this[_index]);
        }
        switch (this[_state]) {
          case 0:
          {
            if (byte == this[_boundary$][$_get](this[_boundaryIndex])) {
              this[_boundaryIndex] = dart.notNull(this[_boundaryIndex]) + 1;
              if (this[_boundaryIndex] == this[_boundary$][$length]) {
                this[_state] = 1;
                this[_boundaryIndex] = 0;
              }
            } else {
              this[_index] = dart.notNull(this[_index]) - dart.notNull(this[_boundaryIndex]);
              this[_boundaryIndex] = 0;
            }
            break;
          }
          case 1:
          {
            if (byte === 13) {
              this[_state] = 2;
            } else if (byte === 45) {
              this[_state] = 11;
            } else {
              bound_multipart_stream._expectWhitespace(byte);
            }
            break;
          }
          case 2:
          {
            bound_multipart_stream._expectByteValue(byte, 10);
            if (this[_multipartController] != null) {
              this[_multipartController].close();
              this[_multipartController] = null;
              this[_tryPropagateControllerState]();
            }
            this[_state] = 3;
            break;
          }
          case 3:
          {
            this[_headers] = new (LinkedMapOfString$String()).new();
            if (byte === 13) {
              this[_state] = 9;
            } else {
              this[_headerField][$add](bound_multipart_stream._toLowerCase(byte));
              this[_state] = 4;
            }
            break;
          }
          case 4:
          {
            if (byte === 58) {
              this[_state] = 5;
            } else {
              if (!dart.test(bound_multipart_stream._isTokenChar(byte))) {
                dart.throw(new mime_shared.MimeMultipartException.new("Invalid header field name"));
              }
              this[_headerField][$add](bound_multipart_stream._toLowerCase(byte));
            }
            break;
          }
          case 5:
          {
            if (byte === 13) {
              this[_state] = 7;
            } else if (byte !== 32 && byte !== 9) {
              this[_headerValue][$add](byte);
              this[_state] = 6;
            }
            break;
          }
          case 6:
          {
            if (byte === 13) {
              this[_state] = 7;
            } else {
              this[_headerValue][$add](byte);
            }
            break;
          }
          case 7:
          {
            bound_multipart_stream._expectByteValue(byte, 10);
            this[_state] = 8;
            break;
          }
          case 8:
          {
            if (byte === 32 || byte === 9) {
              this[_state] = 5;
            } else {
              let headerField = convert.utf8.decode(this[_headerField]);
              let headerValue = convert.utf8.decode(this[_headerValue]);
              this[_headers][$_set](headerField[$toLowerCase](), headerValue);
              this[_headerField][$clear]();
              this[_headerValue][$clear]();
              if (byte === 13) {
                this[_state] = 9;
              } else {
                this[_headerField][$add](bound_multipart_stream._toLowerCase(byte));
                this[_state] = 4;
              }
            }
            break;
          }
          case 9:
          {
            bound_multipart_stream._expectByteValue(byte, 10);
            this[_multipartController] = StreamControllerOfListOfint().new({sync: true, onListen: dart.fn(() => {
                if (dart.test(this[_subscription].isPaused)) this[_subscription].resume();
              }, VoidToNull()), onPause: dart.bind(this[_subscription], 'pause'), onResume: dart.bind(this[_subscription], 'resume')});
            this[_controller].add(new bound_multipart_stream._MimeMultipart.new(this[_headers], this[_multipartController].stream));
            this[_headers] = null;
            this[_state] = 10;
            contentStartIndex = dart.notNull(this[_index]) + 1;
            break;
          }
          case 10:
          {
            if (byte == this[_boundary$][$_get](this[_boundaryIndex])) {
              this[_boundaryIndex] = dart.notNull(this[_boundaryIndex]) + 1;
              if (this[_boundaryIndex] == this[_boundary$][$length]) {
                if (contentStartIndex != null) {
                  this[_index] = dart.notNull(this[_index]) + 1;
                  reportData();
                  this[_index] = dart.notNull(this[_index]) - 1;
                }
                this[_multipartController].close();
                this[_multipartController] = null;
                this[_tryPropagateControllerState]();
                this[_boundaryIndex] = 0;
                this[_state] = 1;
              }
            } else {
              this[_index] = dart.notNull(this[_index]) - dart.notNull(this[_boundaryIndex]);
              if (contentStartIndex == null) contentStartIndex = this[_index];
              this[_boundaryIndex] = 0;
            }
            break;
          }
          case 11:
          {
            bound_multipart_stream._expectByteValue(byte, 45);
            this[_state] = 12;
            break;
          }
          case 12:
          {
            if (byte === 13) {
              this[_state] = 13;
            } else {
              bound_multipart_stream._expectWhitespace(byte);
            }
            break;
          }
          case 13:
          {
            bound_multipart_stream._expectByteValue(byte, 10);
            if (this[_multipartController] != null) {
              this[_multipartController].close();
              this[_multipartController] = null;
              this[_tryPropagateControllerState]();
            }
            this[_state] = 14;
            break;
          }
          default:
          {
            if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/mime/src/bound_multipart_stream.dart", 386, 18, "false");
            break;
          }
        }
        this[_index] = dart.notNull(this[_index]) + 1;
      }
      if (this[_state] === 10 && contentStartIndex != null) {
        reportData();
      }
      if (this[_index] == this[_buffer][$length]) {
        this[_buffer] = null;
        this[_index] = null;
        this[_subscription].resume();
      }
    }
  };
  (bound_multipart_stream.BoundMultipartStream.new = function(_boundary, stream) {
    this[_headerField] = JSArrayOfint().of([]);
    this[_headerValue] = JSArrayOfint().of([]);
    this[_controllerState] = 0;
    this[_controller] = null;
    this[_subscription] = null;
    this[_multipartController] = null;
    this[_headers] = null;
    this[_state] = 0;
    this[_boundaryIndex] = 2;
    this[_index] = null;
    this[_buffer] = null;
    this[_boundary$] = _boundary;
    this[_controller] = StreamControllerOfMimeMultipart().new({sync: true, onPause: dart.bind(this, _pauseStream), onResume: dart.bind(this, _resumeStream), onCancel: dart.fn(() => {
        this[_controllerState] = 3;
        this[_tryPropagateControllerState]();
      }, VoidToNull()), onListen: dart.fn(() => {
        this[_controllerState] = 1;
        this[_subscription] = stream.listen(dart.fn(data => {
          if (!(this[_buffer] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/mime/src/bound_multipart_stream.dart", 132, 20, "_buffer == null");
          this[_subscription].pause();
          this[_buffer] = data;
          this[_index] = 0;
          this[_parse]();
        }, ListOfintToNull()), {onDone: dart.fn(() => {
            if (this[_state] !== 14) {
              this[_controller].addError(new mime_shared.MimeMultipartException.new("Bad multipart ending"));
            }
            this[_controller].close();
          }, VoidToNull()), onError: dart.bind(this[_controller], 'addError')});
      }, VoidToNull())});
  }).prototype = bound_multipart_stream.BoundMultipartStream.prototype;
  dart.addTypeTests(bound_multipart_stream.BoundMultipartStream);
  dart.setMethodSignature(bound_multipart_stream.BoundMultipartStream, () => ({
    __proto__: dart.getMethods(bound_multipart_stream.BoundMultipartStream.__proto__),
    [_resumeStream]: dart.fnType(dart.void, []),
    [_pauseStream]: dart.fnType(dart.void, []),
    [_tryPropagateControllerState]: dart.fnType(dart.void, []),
    [_parse]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(bound_multipart_stream.BoundMultipartStream, () => ({
    __proto__: dart.getGetters(bound_multipart_stream.BoundMultipartStream.__proto__),
    stream: async.Stream$(mime_shared.MimeMultipart)
  }));
  dart.setLibraryUri(bound_multipart_stream.BoundMultipartStream, "package:mime/src/bound_multipart_stream.dart");
  dart.setFieldSignature(bound_multipart_stream.BoundMultipartStream, () => ({
    __proto__: dart.getFields(bound_multipart_stream.BoundMultipartStream.__proto__),
    [_boundary$]: dart.finalFieldType(core.List$(core.int)),
    [_headerField]: dart.finalFieldType(core.List$(core.int)),
    [_headerValue]: dart.finalFieldType(core.List$(core.int)),
    [_controllerState]: dart.fieldType(core.int),
    [_controller]: dart.fieldType(async.StreamController$(mime_shared.MimeMultipart)),
    [_subscription]: dart.fieldType(async.StreamSubscription),
    [_multipartController]: dart.fieldType(async.StreamController$(core.List$(core.int))),
    [_headers]: dart.fieldType(core.Map$(core.String, core.String)),
    [_state]: dart.fieldType(core.int),
    [_boundaryIndex]: dart.fieldType(core.int),
    [_index]: dart.fieldType(core.int),
    [_buffer]: dart.fieldType(core.List$(core.int))
  }));
  dart.defineLazy(bound_multipart_stream.BoundMultipartStream, {
    /*bound_multipart_stream.BoundMultipartStream._START*/get _START() {
      return 0;
    },
    /*bound_multipart_stream.BoundMultipartStream._BOUNDARY_ENDING*/get _BOUNDARY_ENDING() {
      return 1;
    },
    /*bound_multipart_stream.BoundMultipartStream._BOUNDARY_END*/get _BOUNDARY_END() {
      return 2;
    },
    /*bound_multipart_stream.BoundMultipartStream._HEADER_START*/get _HEADER_START() {
      return 3;
    },
    /*bound_multipart_stream.BoundMultipartStream._HEADER_FIELD*/get _HEADER_FIELD() {
      return 4;
    },
    /*bound_multipart_stream.BoundMultipartStream._HEADER_VALUE_START*/get _HEADER_VALUE_START() {
      return 5;
    },
    /*bound_multipart_stream.BoundMultipartStream._HEADER_VALUE*/get _HEADER_VALUE() {
      return 6;
    },
    /*bound_multipart_stream.BoundMultipartStream._HEADER_VALUE_FOLDING_OR_ENDING*/get _HEADER_VALUE_FOLDING_OR_ENDING() {
      return 7;
    },
    /*bound_multipart_stream.BoundMultipartStream._HEADER_VALUE_FOLD_OR_END*/get _HEADER_VALUE_FOLD_OR_END() {
      return 8;
    },
    /*bound_multipart_stream.BoundMultipartStream._HEADER_ENDING*/get _HEADER_ENDING() {
      return 9;
    },
    /*bound_multipart_stream.BoundMultipartStream._CONTENT*/get _CONTENT() {
      return 10;
    },
    /*bound_multipart_stream.BoundMultipartStream._LAST_BOUNDARY_DASH2*/get _LAST_BOUNDARY_DASH2() {
      return 11;
    },
    /*bound_multipart_stream.BoundMultipartStream._LAST_BOUNDARY_ENDING*/get _LAST_BOUNDARY_ENDING() {
      return 12;
    },
    /*bound_multipart_stream.BoundMultipartStream._LAST_BOUNDARY_END*/get _LAST_BOUNDARY_END() {
      return 13;
    },
    /*bound_multipart_stream.BoundMultipartStream._DONE*/get _DONE() {
      return 14;
    },
    /*bound_multipart_stream.BoundMultipartStream._FAIL*/get _FAIL() {
      return 15;
    },
    /*bound_multipart_stream.BoundMultipartStream._CONTROLLER_STATE_IDLE*/get _CONTROLLER_STATE_IDLE() {
      return 0;
    },
    /*bound_multipart_stream.BoundMultipartStream._CONTROLLER_STATE_ACTIVE*/get _CONTROLLER_STATE_ACTIVE() {
      return 1;
    },
    /*bound_multipart_stream.BoundMultipartStream._CONTROLLER_STATE_PAUSED*/get _CONTROLLER_STATE_PAUSED() {
      return 2;
    },
    /*bound_multipart_stream.BoundMultipartStream._CONTROLLER_STATE_CANCELED*/get _CONTROLLER_STATE_CANCELED() {
      return 3;
    }
  });
  bound_multipart_stream._isTokenChar = function _isTokenChar(byte) {
    return dart.notNull(byte) > 31 && dart.notNull(byte) < 128 && bound_multipart_stream._SEPARATORS[$indexOf](byte) === -1;
  };
  bound_multipart_stream._toLowerCase = function _toLowerCase(byte) {
    return 65 <= dart.notNull(byte) && dart.notNull(byte) <= 90 ? dart.notNull(byte) + 32 : byte;
  };
  bound_multipart_stream._expectByteValue = function _expectByteValue(val1, val2) {
    if (val1 != val2) {
      dart.throw(new mime_shared.MimeMultipartException.new("Failed to parse multipart mime 1"));
    }
  };
  bound_multipart_stream._expectWhitespace = function _expectWhitespace(byte) {
    if (byte !== 32 && byte !== 9) {
      dart.throw(new mime_shared.MimeMultipartException.new("Failed to parse multipart mime 2"));
    }
  };
  let C0;
  dart.defineLazy(bound_multipart_stream, {
    /*bound_multipart_stream._SEPARATORS*/get _SEPARATORS() {
      return C0 || CT.C0;
    }
  });
  const MimeMultipartException_message = dart.privateName(mime_shared, "MimeMultipartException.message");
  mime_shared.MimeMultipartException = class MimeMultipartException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "MimeMultipartException: " + dart.str(this.message);
    }
  };
  (mime_shared.MimeMultipartException.new = function(message) {
    if (message === void 0) message = "";
    this[message$] = message;
    ;
  }).prototype = mime_shared.MimeMultipartException.prototype;
  dart.addTypeTests(mime_shared.MimeMultipartException);
  const message$ = MimeMultipartException_message;
  mime_shared.MimeMultipartException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(mime_shared.MimeMultipartException, "package:mime/src/mime_shared.dart");
  dart.setFieldSignature(mime_shared.MimeMultipartException, () => ({
    __proto__: dart.getFields(mime_shared.MimeMultipartException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(mime_shared.MimeMultipartException, ['toString']);
  const _extensionMap = dart.privateName(mime_type, "_extensionMap");
  const _magicNumbers = dart.privateName(mime_type, "_magicNumbers");
  const _useDefault = dart.privateName(mime_type, "_useDefault");
  const _magicNumbersMaxLength = dart.privateName(mime_type, "_magicNumbersMaxLength");
  mime_type.MimeTypeResolver = class MimeTypeResolver extends core.Object {
    get magicNumbersMaxLength() {
      return this[_magicNumbersMaxLength];
    }
    lookup(path, opts) {
      let headerBytes = opts && 'headerBytes' in opts ? opts.headerBytes : null;
      let result = null;
      if (headerBytes != null) {
        result = mime_type.MimeTypeResolver._matchMagic(headerBytes, this[_magicNumbers]);
        if (result != null) return result;
        if (dart.test(this[_useDefault])) {
          result = mime_type.MimeTypeResolver._matchMagic(headerBytes, magic_number.DEFAULT_MAGIC_NUMBERS);
          if (result != null) return result;
        }
      }
      let ext = mime_type.MimeTypeResolver._ext(path);
      result = this[_extensionMap][$_get](ext);
      if (result != null) return result;
      if (dart.test(this[_useDefault])) {
        result = default_extension_map.defaultExtensionMap[$_get](ext);
        if (result != null) return result;
      }
      return null;
    }
    addExtension(extension, mimeType) {
      this[_extensionMap][$_set](extension, mimeType);
    }
    addMagicNumber(bytes, mimeType, opts) {
      let mask = opts && 'mask' in opts ? opts.mask : null;
      if (mask != null && bytes[$length] != mask[$length]) {
        dart.throw(new core.ArgumentError.new("Bytes and mask are of different lengths"));
      }
      if (dart.notNull(bytes[$length]) > dart.notNull(this[_magicNumbersMaxLength])) {
        this[_magicNumbersMaxLength] = bytes[$length];
      }
      this[_magicNumbers][$add](new magic_number.MagicNumber.new(mimeType, bytes, {mask: mask}));
    }
    static _matchMagic(headerBytes, magicNumbers) {
      for (let mn of magicNumbers) {
        if (dart.test(mn.matches(headerBytes))) return mn.mimeType;
      }
      return null;
    }
    static _ext(path) {
      let index = path[$lastIndexOf](".");
      if (index < 0 || index + 1 >= path.length) return path;
      return path[$substring](index + 1)[$toLowerCase]();
    }
  };
  (mime_type.MimeTypeResolver.empty = function() {
    this[_extensionMap] = new (IdentityMapOfString$String()).new();
    this[_magicNumbers] = JSArrayOfMagicNumber().of([]);
    this[_useDefault] = false;
    this[_magicNumbersMaxLength] = 0;
    ;
  }).prototype = mime_type.MimeTypeResolver.prototype;
  (mime_type.MimeTypeResolver.new = function() {
    this[_extensionMap] = new (IdentityMapOfString$String()).new();
    this[_magicNumbers] = JSArrayOfMagicNumber().of([]);
    this[_useDefault] = true;
    this[_magicNumbersMaxLength] = 12;
    ;
  }).prototype = mime_type.MimeTypeResolver.prototype;
  dart.addTypeTests(mime_type.MimeTypeResolver);
  dart.setMethodSignature(mime_type.MimeTypeResolver, () => ({
    __proto__: dart.getMethods(mime_type.MimeTypeResolver.__proto__),
    lookup: dart.fnType(core.String, [core.String], {headerBytes: core.List$(core.int)}),
    addExtension: dart.fnType(dart.void, [core.String, core.String]),
    addMagicNumber: dart.fnType(dart.void, [core.List$(core.int), core.String], {mask: core.List$(core.int)})
  }));
  dart.setGetterSignature(mime_type.MimeTypeResolver, () => ({
    __proto__: dart.getGetters(mime_type.MimeTypeResolver.__proto__),
    magicNumbersMaxLength: core.int
  }));
  dart.setLibraryUri(mime_type.MimeTypeResolver, "package:mime/src/mime_type.dart");
  dart.setFieldSignature(mime_type.MimeTypeResolver, () => ({
    __proto__: dart.getFields(mime_type.MimeTypeResolver.__proto__),
    [_extensionMap]: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_magicNumbers]: dart.finalFieldType(core.List$(magic_number.MagicNumber)),
    [_useDefault]: dart.finalFieldType(core.bool),
    [_magicNumbersMaxLength]: dart.fieldType(core.int)
  }));
  mime_type.lookupMimeType = function lookupMimeType(path, opts) {
    let headerBytes = opts && 'headerBytes' in opts ? opts.headerBytes : null;
    return mime_type._globalResolver.lookup(path, {headerBytes: headerBytes});
  };
  dart.copyProperties(mime_type, {
    get defaultMagicNumbersMaxLength() {
      return mime_type._globalResolver.magicNumbersMaxLength;
    }
  });
  dart.defineLazy(mime_type, {
    /*mime_type._globalResolver*/get _globalResolver() {
      return new mime_type.MimeTypeResolver.new();
    }
  });
  const MagicNumber_mimeType = dart.privateName(magic_number, "MagicNumber.mimeType");
  const MagicNumber_numbers = dart.privateName(magic_number, "MagicNumber.numbers");
  const MagicNumber_mask = dart.privateName(magic_number, "MagicNumber.mask");
  magic_number.MagicNumber = class MagicNumber extends core.Object {
    get mimeType() {
      return this[mimeType$];
    }
    set mimeType(value) {
      super.mimeType = value;
    }
    get numbers() {
      return this[numbers$];
    }
    set numbers(value) {
      super.numbers = value;
    }
    get mask() {
      return this[mask$];
    }
    set mask(value) {
      super.mask = value;
    }
    matches(header) {
      if (dart.notNull(header[$length]) < dart.notNull(this.numbers[$length])) return false;
      for (let i = 0; i < dart.notNull(this.numbers[$length]); i = i + 1) {
        if (this.mask != null) {
          if ((dart.notNull(this.mask[$_get](i)) & dart.notNull(this.numbers[$_get](i))) >>> 0 !== (dart.notNull(this.mask[$_get](i)) & dart.notNull(header[$_get](i))) >>> 0) return false;
        } else {
          if (this.numbers[$_get](i) != header[$_get](i)) return false;
        }
      }
      return true;
    }
  };
  (magic_number.MagicNumber.new = function(mimeType, numbers, opts) {
    let mask = opts && 'mask' in opts ? opts.mask : null;
    this[mimeType$] = mimeType;
    this[numbers$] = numbers;
    this[mask$] = mask;
    ;
  }).prototype = magic_number.MagicNumber.prototype;
  dart.addTypeTests(magic_number.MagicNumber);
  const mimeType$ = MagicNumber_mimeType;
  const numbers$ = MagicNumber_numbers;
  const mask$ = MagicNumber_mask;
  dart.setMethodSignature(magic_number.MagicNumber, () => ({
    __proto__: dart.getMethods(magic_number.MagicNumber.__proto__),
    matches: dart.fnType(core.bool, [core.List$(core.int)])
  }));
  dart.setLibraryUri(magic_number.MagicNumber, "package:mime/src/magic_number.dart");
  dart.setFieldSignature(magic_number.MagicNumber, () => ({
    __proto__: dart.getFields(magic_number.MagicNumber.__proto__),
    mimeType: dart.finalFieldType(core.String),
    numbers: dart.finalFieldType(core.List$(core.int)),
    mask: dart.finalFieldType(core.List$(core.int))
  }));
  let C3;
  let C2;
  let C5;
  let C4;
  let C7;
  let C6;
  let C9;
  let C8;
  let C11;
  let C10;
  let C13;
  let C12;
  let C15;
  let C14;
  let C17;
  let C16;
  let C19;
  let C20;
  let C18;
  let C22;
  let C21;
  let C1;
  dart.defineLazy(magic_number, {
    /*magic_number.DEFAULT_MAGIC_NUMBERS_MAX_LENGTH*/get DEFAULT_MAGIC_NUMBERS_MAX_LENGTH() {
      return 12;
    },
    /*magic_number.DEFAULT_MAGIC_NUMBERS*/get DEFAULT_MAGIC_NUMBERS() {
      return C1 || CT.C1;
    }
  });
  dart.defineLazy(default_extension_map, {
    /*default_extension_map.defaultExtensionMap*/get defaultExtensionMap() {
      return new (IdentityMapOfString$String()).from(["123", "application/vnd.lotus-1-2-3", "3dml", "text/vnd.in3d.3dml", "3ds", "image/x-3ds", "3g2", "video/3gpp2", "3gp", "video/3gpp", "7z", "application/x-7z-compressed", "aab", "application/x-authorware-bin", "aac", "audio/x-aac", "aam", "application/x-authorware-map", "aas", "application/x-authorware-seg", "abw", "application/x-abiword", "ac", "application/pkix-attr-cert", "acc", "application/vnd.americandynamics.acc", "ace", "application/x-ace-compressed", "acu", "application/vnd.acucobol", "acutc", "application/vnd.acucorp", "adp", "audio/adpcm", "aep", "application/vnd.audiograph", "afm", "application/x-font-type1", "afp", "application/vnd.ibm.modcap", "ahead", "application/vnd.ahead.space", "ai", "application/postscript", "aif", "audio/x-aiff", "aifc", "audio/x-aiff", "aiff", "audio/x-aiff", "air", "application/vnd.adobe.air-application-installer-package+zip", "ait", "application/vnd.dvb.ait", "ami", "application/vnd.amiga.ami", "apk", "application/vnd.android.package-archive", "appcache", "text/cache-manifest", "application", "application/x-ms-application", "apr", "application/vnd.lotus-approach", "arc", "application/x-freearc", "asc", "application/pgp-signature", "asf", "video/x-ms-asf", "asm", "text/x-asm", "aso", "application/vnd.accpac.simply.aso", "asx", "video/x-ms-asf", "atc", "application/vnd.acucorp", "atom", "application/atom+xml", "atomcat", "application/atomcat+xml", "atomsvc", "application/atomsvc+xml", "atx", "application/vnd.antix.game-component", "au", "audio/basic", "avi", "video/x-msvideo", "aw", "application/applixware", "azf", "application/vnd.airzip.filesecure.azf", "azs", "application/vnd.airzip.filesecure.azs", "azw", "application/vnd.amazon.ebook", "bat", "application/x-msdownload", "bcpio", "application/x-bcpio", "bdf", "application/x-font-bdf", "bdm", "application/vnd.syncml.dm+wbxml", "bed", "application/vnd.realvnc.bed", "bh2", "application/vnd.fujitsu.oasysprs", "bin", "application/octet-stream", "blb", "application/x-blorb", "blorb", "application/x-blorb", "bmi", "application/vnd.bmi", "bmp", "image/bmp", "book", "application/vnd.framemaker", "box", "application/vnd.previewsystems.box", "boz", "application/x-bzip2", "bpk", "application/octet-stream", "btif", "image/prs.btif", "bz", "application/x-bzip", "bz2", "application/x-bzip2", "c", "text/x-c", "c11amc", "application/vnd.cluetrust.cartomobile-config", "c11amz", "application/vnd.cluetrust.cartomobile-config-pkg", "c4d", "application/vnd.clonk.c4group", "c4f", "application/vnd.clonk.c4group", "c4g", "application/vnd.clonk.c4group", "c4p", "application/vnd.clonk.c4group", "c4u", "application/vnd.clonk.c4group", "cab", "application/vnd.ms-cab-compressed", "caf", "audio/x-caf", "cap", "application/vnd.tcpdump.pcap", "car", "application/vnd.curl.car", "cat", "application/vnd.ms-pki.seccat", "cb7", "application/x-cbr", "cba", "application/x-cbr", "cbr", "application/x-cbr", "cbt", "application/x-cbr", "cbz", "application/x-cbr", "cc", "text/x-c", "cct", "application/x-director", "ccxml", "application/ccxml+xml", "cdbcmsg", "application/vnd.contact.cmsg", "cdf", "application/x-netcdf", "cdkey", "application/vnd.mediastation.cdkey", "cdmia", "application/cdmi-capability", "cdmic", "application/cdmi-container", "cdmid", "application/cdmi-domain", "cdmio", "application/cdmi-object", "cdmiq", "application/cdmi-queue", "cdx", "chemical/x-cdx", "cdxml", "application/vnd.chemdraw+xml", "cdy", "application/vnd.cinderella", "cer", "application/pkix-cert", "cfs", "application/x-cfs-compressed", "cgm", "image/cgm", "chat", "application/x-chat", "chm", "application/vnd.ms-htmlhelp", "chrt", "application/vnd.kde.kchart", "cif", "chemical/x-cif", "cii", "application/vnd.anser-web-certificate-issue-initiation", "cil", "application/vnd.ms-artgalry", "cla", "application/vnd.claymore", "class", "application/java-vm", "clkk", "application/vnd.crick.clicker.keyboard", "clkp", "application/vnd.crick.clicker.palette", "clkt", "application/vnd.crick.clicker.template", "clkw", "application/vnd.crick.clicker.wordbank", "clkx", "application/vnd.crick.clicker", "clp", "application/x-msclip", "cmc", "application/vnd.cosmocaller", "cmdf", "chemical/x-cmdf", "cml", "chemical/x-cml", "cmp", "application/vnd.yellowriver-custom-menu", "cmx", "image/x-cmx", "cod", "application/vnd.rim.cod", "com", "application/x-msdownload", "conf", "text/plain", "cpio", "application/x-cpio", "cpp", "text/x-c", "cpt", "application/mac-compactpro", "crd", "application/x-mscardfile", "crl", "application/pkix-crl", "crt", "application/x-x509-ca-cert", "cryptonote", "application/vnd.rig.cryptonote", "csh", "application/x-csh", "csml", "chemical/x-csml", "csp", "application/vnd.commonspace", "css", "text/css", "cst", "application/x-director", "csv", "text/csv", "cu", "application/cu-seeme", "curl", "text/vnd.curl", "cww", "application/prs.cww", "cxt", "application/x-director", "cxx", "text/x-c", "dae", "model/vnd.collada+xml", "daf", "application/vnd.mobius.daf", "dart", "application/dart", "dataless", "application/vnd.fdsn.seed", "davmount", "application/davmount+xml", "dbk", "application/docbook+xml", "dcr", "application/x-director", "dcurl", "text/vnd.curl.dcurl", "dd2", "application/vnd.oma.dd2+xml", "ddd", "application/vnd.fujixerox.ddd", "deb", "application/x-debian-package", "def", "text/plain", "deploy", "application/octet-stream", "der", "application/x-x509-ca-cert", "dfac", "application/vnd.dreamfactory", "dgc", "application/x-dgc-compressed", "dic", "text/x-c", "dir", "application/x-director", "dis", "application/vnd.mobius.dis", "dist", "application/octet-stream", "distz", "application/octet-stream", "djv", "image/vnd.djvu", "djvu", "image/vnd.djvu", "dll", "application/x-msdownload", "dmg", "application/x-apple-diskimage", "dmp", "application/vnd.tcpdump.pcap", "dms", "application/octet-stream", "dna", "application/vnd.dna", "doc", "application/msword", "docm", "application/vnd.ms-word.document.macroenabled.12", "docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "dot", "application/msword", "dotm", "application/vnd.ms-word.template.macroenabled.12", "dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "dp", "application/vnd.osgi.dp", "dpg", "application/vnd.dpgraph", "dra", "audio/vnd.dra", "dsc", "text/prs.lines.tag", "dssc", "application/dssc+der", "dtb", "application/x-dtbook+xml", "dtd", "application/xml-dtd", "dts", "audio/vnd.dts", "dtshd", "audio/vnd.dts.hd", "dump", "application/octet-stream", "dvb", "video/vnd.dvb.file", "dvi", "application/x-dvi", "dwf", "model/vnd.dwf", "dwg", "image/vnd.dwg", "dxf", "image/vnd.dxf", "dxp", "application/vnd.spotfire.dxp", "dxr", "application/x-director", "ecelp4800", "audio/vnd.nuera.ecelp4800", "ecelp7470", "audio/vnd.nuera.ecelp7470", "ecelp9600", "audio/vnd.nuera.ecelp9600", "ecma", "application/ecmascript", "edm", "application/vnd.novadigm.edm", "edx", "application/vnd.novadigm.edx", "efif", "application/vnd.picsel", "ei6", "application/vnd.pg.osasli", "elc", "application/octet-stream", "emf", "application/x-msmetafile", "eml", "message/rfc822", "emma", "application/emma+xml", "emz", "application/x-msmetafile", "eol", "audio/vnd.digital-winds", "eot", "application/vnd.ms-fontobject", "eps", "application/postscript", "epub", "application/epub+zip", "es3", "application/vnd.eszigno3+xml", "esa", "application/vnd.osgi.subsystem", "esf", "application/vnd.epson.esf", "et3", "application/vnd.eszigno3+xml", "etx", "text/x-setext", "eva", "application/x-eva", "evy", "application/x-envoy", "exe", "application/x-msdownload", "exi", "application/exi", "ext", "application/vnd.novadigm.ext", "ez", "application/andrew-inset", "ez2", "application/vnd.ezpix-album", "ez3", "application/vnd.ezpix-package", "f", "text/x-fortran", "f4v", "video/x-f4v", "f77", "text/x-fortran", "f90", "text/x-fortran", "fbs", "image/vnd.fastbidsheet", "fcdt", "application/vnd.adobe.formscentral.fcdt", "fcs", "application/vnd.isac.fcs", "fdf", "application/vnd.fdf", "fe_launch", "application/vnd.denovo.fcselayout-link", "fg5", "application/vnd.fujitsu.oasysgp", "fgd", "application/x-director", "fh", "image/x-freehand", "fh4", "image/x-freehand", "fh5", "image/x-freehand", "fh7", "image/x-freehand", "fhc", "image/x-freehand", "fig", "application/x-xfig", "flac", "audio/x-flac", "fli", "video/x-fli", "flo", "application/vnd.micrografx.flo", "flv", "video/x-flv", "flw", "application/vnd.kde.kivio", "flx", "text/vnd.fmi.flexstor", "fly", "text/vnd.fly", "fm", "application/vnd.framemaker", "fnc", "application/vnd.frogans.fnc", "for", "text/x-fortran", "fpx", "image/vnd.fpx", "frame", "application/vnd.framemaker", "fsc", "application/vnd.fsc.weblaunch", "fst", "image/vnd.fst", "ftc", "application/vnd.fluxtime.clip", "fti", "application/vnd.anser-web-funds-transfer-initiation", "fvt", "video/vnd.fvt", "fxp", "application/vnd.adobe.fxp", "fxpl", "application/vnd.adobe.fxp", "fzs", "application/vnd.fuzzysheet", "g2w", "application/vnd.geoplan", "g3", "image/g3fax", "g3w", "application/vnd.geospace", "gac", "application/vnd.groove-account", "gam", "application/x-tads", "gbr", "application/rpki-ghostbusters", "gca", "application/x-gca-compressed", "gdl", "model/vnd.gdl", "geo", "application/vnd.dynageo", "gex", "application/vnd.geometry-explorer", "ggb", "application/vnd.geogebra.file", "ggt", "application/vnd.geogebra.tool", "ghf", "application/vnd.groove-help", "gif", "image/gif", "gim", "application/vnd.groove-identity-message", "glb", "model/gltf-binary", "gltf", "model/gltf+json", "gml", "application/gml+xml", "gmx", "application/vnd.gmx", "gnumeric", "application/x-gnumeric", "gph", "application/vnd.flographit", "gpx", "application/gpx+xml", "gqf", "application/vnd.grafeq", "gqs", "application/vnd.grafeq", "gram", "application/srgs", "gramps", "application/x-gramps-xml", "gre", "application/vnd.geometry-explorer", "grv", "application/vnd.groove-injector", "grxml", "application/srgs+xml", "gsf", "application/x-font-ghostscript", "gtar", "application/x-gtar", "gtm", "application/vnd.groove-tool-message", "gtw", "model/vnd.gtw", "gv", "text/vnd.graphviz", "gxf", "application/gxf", "gxt", "application/vnd.geonext", "h", "text/x-c", "h261", "video/h261", "h263", "video/h263", "h264", "video/h264", "hal", "application/vnd.hal+xml", "hbci", "application/vnd.hbci", "hdf", "application/x-hdf", "hh", "text/x-c", "hlp", "application/winhlp", "hpgl", "application/vnd.hp-hpgl", "hpid", "application/vnd.hp-hpid", "hps", "application/vnd.hp-hps", "hqx", "application/mac-binhex40", "htke", "application/vnd.kenameaapp", "htm", "text/html", "html", "text/html", "hvd", "application/vnd.yamaha.hv-dic", "hvp", "application/vnd.yamaha.hv-voice", "hvs", "application/vnd.yamaha.hv-script", "i2g", "application/vnd.intergeo", "icc", "application/vnd.iccprofile", "ice", "x-conference/x-cooltalk", "icm", "application/vnd.iccprofile", "ico", "image/x-icon", "ics", "text/calendar", "ief", "image/ief", "ifb", "text/calendar", "ifm", "application/vnd.shana.informed.formdata", "iges", "model/iges", "igl", "application/vnd.igloader", "igm", "application/vnd.insors.igm", "igs", "model/iges", "igx", "application/vnd.micrografx.igx", "iif", "application/vnd.shana.informed.interchange", "imp", "application/vnd.accpac.simply.imp", "ims", "application/vnd.ms-ims", "in", "text/plain", "ink", "application/inkml+xml", "inkml", "application/inkml+xml", "install", "application/x-install-instructions", "iota", "application/vnd.astraea-software.iota", "ipfix", "application/ipfix", "ipk", "application/vnd.shana.informed.package", "irm", "application/vnd.ibm.rights-management", "irp", "application/vnd.irepository.package+xml", "iso", "application/x-iso9660-image", "itp", "application/vnd.shana.informed.formtemplate", "ivp", "application/vnd.immervision-ivp", "ivu", "application/vnd.immervision-ivu", "jad", "text/vnd.sun.j2me.app-descriptor", "jam", "application/vnd.jam", "jar", "application/java-archive", "java", "text/x-java-source", "jisp", "application/vnd.jisp", "jlt", "application/vnd.hp-jlyt", "jnlp", "application/x-java-jnlp-file", "joda", "application/vnd.joost.joda-archive", "jpe", "image/jpeg", "jpeg", "image/jpeg", "jpg", "image/jpeg", "jpgm", "video/jpm", "jpgv", "video/jpeg", "jpm", "video/jpm", "js", "application/javascript", "json", "application/json", "jsonml", "application/jsonml+json", "kar", "audio/midi", "karbon", "application/vnd.kde.karbon", "kfo", "application/vnd.kde.kformula", "kia", "application/vnd.kidspiration", "kml", "application/vnd.google-earth.kml+xml", "kmz", "application/vnd.google-earth.kmz", "kne", "application/vnd.kinar", "knp", "application/vnd.kinar", "kon", "application/vnd.kde.kontour", "kpr", "application/vnd.kde.kpresenter", "kpt", "application/vnd.kde.kpresenter", "kpxx", "application/vnd.ds-keypoint", "ksp", "application/vnd.kde.kspread", "ktr", "application/vnd.kahootz", "ktx", "image/ktx", "ktz", "application/vnd.kahootz", "kwd", "application/vnd.kde.kword", "kwt", "application/vnd.kde.kword", "lasxml", "application/vnd.las.las+xml", "latex", "application/x-latex", "lbd", "application/vnd.llamagraphics.life-balance.desktop", "lbe", "application/vnd.llamagraphics.life-balance.exchange+xml", "les", "application/vnd.hhe.lesson-player", "lha", "application/x-lzh-compressed", "link66", "application/vnd.route66.link66+xml", "list", "text/plain", "list3820", "application/vnd.ibm.modcap", "listafp", "application/vnd.ibm.modcap", "lnk", "application/x-ms-shortcut", "log", "text/plain", "lostxml", "application/lost+xml", "lrf", "application/octet-stream", "lrm", "application/vnd.ms-lrm", "ltf", "application/vnd.frogans.ltf", "lvp", "audio/vnd.lucent.voice", "lwp", "application/vnd.lotus-wordpro", "lzh", "application/x-lzh-compressed", "m13", "application/x-msmediaview", "m14", "application/x-msmediaview", "m1v", "video/mpeg", "m21", "application/mp21", "m2a", "audio/mpeg", "m2v", "video/mpeg", "m3a", "audio/mpeg", "m3u", "audio/x-mpegurl", "m3u8", "application/vnd.apple.mpegurl", "m4u", "video/vnd.mpegurl", "m4v", "video/x-m4v", "ma", "application/mathematica", "mads", "application/mads+xml", "mag", "application/vnd.ecowin.chart", "maker", "application/vnd.framemaker", "man", "text/troff", "mar", "application/octet-stream", "mathml", "application/mathml+xml", "mb", "application/mathematica", "mbk", "application/vnd.mobius.mbk", "mbox", "application/mbox", "mc1", "application/vnd.medcalcdata", "mcd", "application/vnd.mcd", "mcurl", "text/vnd.curl.mcurl", "mdb", "application/x-msaccess", "mdi", "image/vnd.ms-modi", "me", "text/troff", "mesh", "model/mesh", "meta4", "application/metalink4+xml", "metalink", "application/metalink+xml", "mets", "application/mets+xml", "mfm", "application/vnd.mfmp", "mft", "application/rpki-manifest", "mgp", "application/vnd.osgeo.mapguide.package", "mgz", "application/vnd.proteus.magazine", "mid", "audio/midi", "midi", "audio/midi", "mie", "application/x-mie", "mif", "application/vnd.mif", "mime", "message/rfc822", "mj2", "video/mj2", "mjp2", "video/mj2", "mk3d", "video/x-matroska", "mka", "audio/x-matroska", "mks", "video/x-matroska", "mkv", "video/x-matroska", "mlp", "application/vnd.dolby.mlp", "mmd", "application/vnd.chipnuts.karaoke-mmd", "mmf", "application/vnd.smaf", "mmr", "image/vnd.fujixerox.edmics-mmr", "mng", "video/x-mng", "mny", "application/x-msmoney", "mobi", "application/x-mobipocket-ebook", "mods", "application/mods+xml", "mov", "video/quicktime", "movie", "video/x-sgi-movie", "mp2", "audio/mpeg", "mp21", "application/mp21", "mp2a", "audio/mpeg", "mp3", "audio/mpeg", "mp4", "video/mp4", "mp4a", "audio/mp4", "mp4s", "application/mp4", "mp4v", "video/mp4", "mpc", "application/vnd.mophun.certificate", "mpe", "video/mpeg", "mpeg", "video/mpeg", "mpg", "video/mpeg", "mpg4", "video/mp4", "mpga", "audio/mpeg", "mpkg", "application/vnd.apple.installer+xml", "mpm", "application/vnd.blueice.multipass", "mpn", "application/vnd.mophun.application", "mpp", "application/vnd.ms-project", "mpt", "application/vnd.ms-project", "mpy", "application/vnd.ibm.minipay", "mqy", "application/vnd.mobius.mqy", "mrc", "application/marc", "mrcx", "application/marcxml+xml", "ms", "text/troff", "mscml", "application/mediaservercontrol+xml", "mseed", "application/vnd.fdsn.mseed", "mseq", "application/vnd.mseq", "msf", "application/vnd.epson.msf", "msh", "model/mesh", "msi", "application/x-msdownload", "msl", "application/vnd.mobius.msl", "msty", "application/vnd.muvee.style", "mts", "model/vnd.mts", "mus", "application/vnd.musician", "musicxml", "application/vnd.recordare.musicxml+xml", "mvb", "application/x-msmediaview", "mwf", "application/vnd.mfer", "mxf", "application/mxf", "mxl", "application/vnd.recordare.musicxml", "mxml", "application/xv+xml", "mxs", "application/vnd.triscape.mxs", "mxu", "video/vnd.mpegurl", "n-gage", "application/vnd.nokia.n-gage.symbian.install", "n3", "text/n3", "nb", "application/mathematica", "nbp", "application/vnd.wolfram.player", "nc", "application/x-netcdf", "ncx", "application/x-dtbncx+xml", "nfo", "text/x-nfo", "ngdat", "application/vnd.nokia.n-gage.data", "nitf", "application/vnd.nitf", "nlu", "application/vnd.neurolanguage.nlu", "nml", "application/vnd.enliven", "nnd", "application/vnd.noblenet-directory", "nns", "application/vnd.noblenet-sealer", "nnw", "application/vnd.noblenet-web", "npx", "image/vnd.net-fpx", "nsc", "application/x-conference", "nsf", "application/vnd.lotus-notes", "ntf", "application/vnd.nitf", "nzb", "application/x-nzb", "oa2", "application/vnd.fujitsu.oasys2", "oa3", "application/vnd.fujitsu.oasys3", "oas", "application/vnd.fujitsu.oasys", "obd", "application/x-msbinder", "obj", "application/x-tgif", "oda", "application/oda", "odb", "application/vnd.oasis.opendocument.database", "odc", "application/vnd.oasis.opendocument.chart", "odf", "application/vnd.oasis.opendocument.formula", "odft", "application/vnd.oasis.opendocument.formula-template", "odg", "application/vnd.oasis.opendocument.graphics", "odi", "application/vnd.oasis.opendocument.image", "odm", "application/vnd.oasis.opendocument.text-master", "odp", "application/vnd.oasis.opendocument.presentation", "ods", "application/vnd.oasis.opendocument.spreadsheet", "odt", "application/vnd.oasis.opendocument.text", "oga", "audio/ogg", "ogg", "audio/ogg", "ogv", "video/ogg", "ogx", "application/ogg", "omdoc", "application/omdoc+xml", "onepkg", "application/onenote", "onetmp", "application/onenote", "onetoc", "application/onenote", "onetoc2", "application/onenote", "opf", "application/oebps-package+xml", "opml", "text/x-opml", "oprc", "application/vnd.palm", "org", "application/vnd.lotus-organizer", "osf", "application/vnd.yamaha.openscoreformat", "osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml", "otc", "application/vnd.oasis.opendocument.chart-template", "otf", "application/x-font-otf", "otg", "application/vnd.oasis.opendocument.graphics-template", "oth", "application/vnd.oasis.opendocument.text-web", "oti", "application/vnd.oasis.opendocument.image-template", "otp", "application/vnd.oasis.opendocument.presentation-template", "ots", "application/vnd.oasis.opendocument.spreadsheet-template", "ott", "application/vnd.oasis.opendocument.text-template", "oxps", "application/oxps", "oxt", "application/vnd.openofficeorg.extension", "p", "text/x-pascal", "p10", "application/pkcs10", "p12", "application/x-pkcs12", "p7b", "application/x-pkcs7-certificates", "p7c", "application/pkcs7-mime", "p7m", "application/pkcs7-mime", "p7r", "application/x-pkcs7-certreqresp", "p7s", "application/pkcs7-signature", "p8", "application/pkcs8", "pas", "text/x-pascal", "paw", "application/vnd.pawaafile", "pbd", "application/vnd.powerbuilder6", "pbm", "image/x-portable-bitmap", "pcap", "application/vnd.tcpdump.pcap", "pcf", "application/x-font-pcf", "pcl", "application/vnd.hp-pcl", "pclxl", "application/vnd.hp-pclxl", "pct", "image/x-pict", "pcurl", "application/vnd.curl.pcurl", "pcx", "image/x-pcx", "pdb", "application/vnd.palm", "pdf", "application/pdf", "pfa", "application/x-font-type1", "pfb", "application/x-font-type1", "pfm", "application/x-font-type1", "pfr", "application/font-tdpfr", "pfx", "application/x-pkcs12", "pgm", "image/x-portable-graymap", "pgn", "application/x-chess-pgn", "pgp", "application/pgp-encrypted", "pic", "image/x-pict", "pkg", "application/octet-stream", "pki", "application/pkixcmp", "pkipath", "application/pkix-pkipath", "plb", "application/vnd.3gpp.pic-bw-large", "plc", "application/vnd.mobius.plc", "plf", "application/vnd.pocketlearn", "pls", "application/pls+xml", "pml", "application/vnd.ctc-posml", "png", "image/png", "pnm", "image/x-portable-anymap", "portpkg", "application/vnd.macports.portpkg", "pot", "application/vnd.ms-powerpoint", "potm", "application/vnd.ms-powerpoint.template.macroenabled.12", "potx", "application/vnd.openxmlformats-officedocument.presentationml.template", "ppam", "application/vnd.ms-powerpoint.addin.macroenabled.12", "ppd", "application/vnd.cups-ppd", "ppm", "image/x-portable-pixmap", "pps", "application/vnd.ms-powerpoint", "ppsm", "application/vnd.ms-powerpoint.slideshow.macroenabled.12", "ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow", "ppt", "application/vnd.ms-powerpoint", "pptm", "application/vnd.ms-powerpoint.presentation.macroenabled.12", "pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "pqa", "application/vnd.palm", "prc", "application/x-mobipocket-ebook", "pre", "application/vnd.lotus-freelance", "prf", "application/pics-rules", "ps", "application/postscript", "psb", "application/vnd.3gpp.pic-bw-small", "psd", "image/vnd.adobe.photoshop", "psf", "application/x-font-linux-psf", "pskcxml", "application/pskc+xml", "ptid", "application/vnd.pvi.ptid1", "pub", "application/x-mspublisher", "pvb", "application/vnd.3gpp.pic-bw-var", "pwn", "application/vnd.3m.post-it-notes", "pya", "audio/vnd.ms-playready.media.pya", "pyv", "video/vnd.ms-playready.media.pyv", "qam", "application/vnd.epson.quickanime", "qbo", "application/vnd.intu.qbo", "qfx", "application/vnd.intu.qfx", "qps", "application/vnd.publishare-delta-tree", "qt", "video/quicktime", "qwd", "application/vnd.quark.quarkxpress", "qwt", "application/vnd.quark.quarkxpress", "qxb", "application/vnd.quark.quarkxpress", "qxd", "application/vnd.quark.quarkxpress", "qxl", "application/vnd.quark.quarkxpress", "qxt", "application/vnd.quark.quarkxpress", "ra", "audio/x-pn-realaudio", "ram", "audio/x-pn-realaudio", "rar", "application/x-rar-compressed", "ras", "image/x-cmu-raster", "rcprofile", "application/vnd.ipunplugged.rcprofile", "rdf", "application/rdf+xml", "rdz", "application/vnd.data-vision.rdz", "rep", "application/vnd.businessobjects", "res", "application/x-dtbresource+xml", "rgb", "image/x-rgb", "rif", "application/reginfo+xml", "rip", "audio/vnd.rip", "ris", "application/x-research-info-systems", "rl", "application/resource-lists+xml", "rlc", "image/vnd.fujixerox.edmics-rlc", "rld", "application/resource-lists-diff+xml", "rm", "application/vnd.rn-realmedia", "rmi", "audio/midi", "rmp", "audio/x-pn-realaudio-plugin", "rms", "application/vnd.jcp.javame.midlet-rms", "rmvb", "application/vnd.rn-realmedia-vbr", "rnc", "application/relax-ng-compact-syntax", "roa", "application/rpki-roa", "roff", "text/troff", "rp9", "application/vnd.cloanto.rp9", "rpss", "application/vnd.nokia.radio-presets", "rpst", "application/vnd.nokia.radio-preset", "rq", "application/sparql-query", "rs", "application/rls-services+xml", "rsd", "application/rsd+xml", "rss", "application/rss+xml", "rtf", "application/rtf", "rtx", "text/richtext", "s", "text/x-asm", "s3m", "audio/s3m", "saf", "application/vnd.yamaha.smaf-audio", "sbml", "application/sbml+xml", "sc", "application/vnd.ibm.secure-container", "scd", "application/x-msschedule", "scm", "application/vnd.lotus-screencam", "scq", "application/scvp-cv-request", "scs", "application/scvp-cv-response", "scurl", "text/vnd.curl.scurl", "sda", "application/vnd.stardivision.draw", "sdc", "application/vnd.stardivision.calc", "sdd", "application/vnd.stardivision.impress", "sdkd", "application/vnd.solent.sdkm+xml", "sdkm", "application/vnd.solent.sdkm+xml", "sdp", "application/sdp", "sdw", "application/vnd.stardivision.writer", "see", "application/vnd.seemail", "seed", "application/vnd.fdsn.seed", "sema", "application/vnd.sema", "semd", "application/vnd.semd", "semf", "application/vnd.semf", "ser", "application/java-serialized-object", "setpay", "application/set-payment-initiation", "setreg", "application/set-registration-initiation", "sfd-hdstx", "application/vnd.hydrostatix.sof-data", "sfs", "application/vnd.spotfire.sfs", "sfv", "text/x-sfv", "sgi", "image/sgi", "sgl", "application/vnd.stardivision.writer-global", "sgm", "text/sgml", "sgml", "text/sgml", "sh", "application/x-sh", "shar", "application/x-shar", "shf", "application/shf+xml", "sid", "image/x-mrsid-image", "sig", "application/pgp-signature", "sil", "audio/silk", "silo", "model/mesh", "sis", "application/vnd.symbian.install", "sisx", "application/vnd.symbian.install", "sit", "application/x-stuffit", "sitx", "application/x-stuffitx", "skd", "application/vnd.koan", "skm", "application/vnd.koan", "skp", "application/vnd.koan", "skt", "application/vnd.koan", "sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12", "sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide", "slt", "application/vnd.epson.salt", "sm", "application/vnd.stepmania.stepchart", "smf", "application/vnd.stardivision.math", "smi", "application/smil+xml", "smil", "application/smil+xml", "smv", "video/x-smv", "smzip", "application/vnd.stepmania.package", "snd", "audio/basic", "snf", "application/x-font-snf", "so", "application/octet-stream", "spc", "application/x-pkcs7-certificates", "spf", "application/vnd.yamaha.smaf-phrase", "spl", "application/x-futuresplash", "spot", "text/vnd.in3d.spot", "spp", "application/scvp-vp-response", "spq", "application/scvp-vp-request", "spx", "audio/ogg", "sql", "application/x-sql", "src", "application/x-wais-source", "srt", "application/x-subrip", "sru", "application/sru+xml", "srx", "application/sparql-results+xml", "ssdl", "application/ssdl+xml", "sse", "application/vnd.kodak-descriptor", "ssf", "application/vnd.epson.ssf", "ssml", "application/ssml+xml", "st", "application/vnd.sailingtracker.track", "stc", "application/vnd.sun.xml.calc.template", "std", "application/vnd.sun.xml.draw.template", "stf", "application/vnd.wt.stf", "sti", "application/vnd.sun.xml.impress.template", "stk", "application/hyperstudio", "stl", "application/vnd.ms-pki.stl", "str", "application/vnd.pg.format", "stw", "application/vnd.sun.xml.writer.template", "sub", "text/vnd.dvb.subtitle", "sus", "application/vnd.sus-calendar", "susp", "application/vnd.sus-calendar", "sv4cpio", "application/x-sv4cpio", "sv4crc", "application/x-sv4crc", "svc", "application/vnd.dvb.service", "svd", "application/vnd.svd", "svg", "image/svg+xml", "svgz", "image/svg+xml", "swa", "application/x-director", "swf", "application/x-shockwave-flash", "swi", "application/vnd.aristanetworks.swi", "sxc", "application/vnd.sun.xml.calc", "sxd", "application/vnd.sun.xml.draw", "sxg", "application/vnd.sun.xml.writer.global", "sxi", "application/vnd.sun.xml.impress", "sxm", "application/vnd.sun.xml.math", "sxw", "application/vnd.sun.xml.writer", "t", "text/troff", "t3", "application/x-t3vm-image", "taglet", "application/vnd.mynfc", "tao", "application/vnd.tao.intent-module-archive", "tar", "application/x-tar", "tcap", "application/vnd.3gpp2.tcap", "tcl", "application/x-tcl", "teacher", "application/vnd.smart.teacher", "tei", "application/tei+xml", "teicorpus", "application/tei+xml", "tex", "application/x-tex", "texi", "application/x-texinfo", "texinfo", "application/x-texinfo", "text", "text/plain", "tfi", "application/thraud+xml", "tfm", "application/x-tex-tfm", "tga", "image/x-tga", "thmx", "application/vnd.ms-officetheme", "tif", "image/tiff", "tiff", "image/tiff", "tmo", "application/vnd.tmobile-livetv", "torrent", "application/x-bittorrent", "tpl", "application/vnd.groove-tool-template", "tpt", "application/vnd.trid.tpt", "tr", "text/troff", "tra", "application/vnd.trueapp", "trm", "application/x-msterminal", "tsd", "application/timestamped-data", "tsv", "text/tab-separated-values", "ttc", "application/x-font-ttf", "ttf", "application/x-font-ttf", "ttl", "text/turtle", "twd", "application/vnd.simtech-mindmapper", "twds", "application/vnd.simtech-mindmapper", "txd", "application/vnd.genomatix.tuxedo", "txf", "application/vnd.mobius.txf", "txt", "text/plain", "u32", "application/x-authorware-bin", "udeb", "application/x-debian-package", "ufd", "application/vnd.ufdl", "ufdl", "application/vnd.ufdl", "ulx", "application/x-glulx", "umj", "application/vnd.umajin", "unityweb", "application/vnd.unity", "uoml", "application/vnd.uoml+xml", "uri", "text/uri-list", "uris", "text/uri-list", "urls", "text/uri-list", "ustar", "application/x-ustar", "utz", "application/vnd.uiq.theme", "uu", "text/x-uuencode", "uva", "audio/vnd.dece.audio", "uvd", "application/vnd.dece.data", "uvf", "application/vnd.dece.data", "uvg", "image/vnd.dece.graphic", "uvh", "video/vnd.dece.hd", "uvi", "image/vnd.dece.graphic", "uvm", "video/vnd.dece.mobile", "uvp", "video/vnd.dece.pd", "uvs", "video/vnd.dece.sd", "uvt", "application/vnd.dece.ttml+xml", "uvu", "video/vnd.uvvu.mp4", "uvv", "video/vnd.dece.video", "uvva", "audio/vnd.dece.audio", "uvvd", "application/vnd.dece.data", "uvvf", "application/vnd.dece.data", "uvvg", "image/vnd.dece.graphic", "uvvh", "video/vnd.dece.hd", "uvvi", "image/vnd.dece.graphic", "uvvm", "video/vnd.dece.mobile", "uvvp", "video/vnd.dece.pd", "uvvs", "video/vnd.dece.sd", "uvvt", "application/vnd.dece.ttml+xml", "uvvu", "video/vnd.uvvu.mp4", "uvvv", "video/vnd.dece.video", "uvvx", "application/vnd.dece.unspecified", "uvvz", "application/vnd.dece.zip", "uvx", "application/vnd.dece.unspecified", "uvz", "application/vnd.dece.zip", "vcard", "text/vcard", "vcd", "application/x-cdlink", "vcf", "text/x-vcard", "vcg", "application/vnd.groove-vcard", "vcs", "text/x-vcalendar", "vcx", "application/vnd.vcx", "vis", "application/vnd.visionary", "viv", "video/vnd.vivo", "vob", "video/x-ms-vob", "vor", "application/vnd.stardivision.writer", "vox", "application/x-authorware-bin", "vrml", "model/vrml", "vsd", "application/vnd.visio", "vsf", "application/vnd.vsf", "vss", "application/vnd.visio", "vst", "application/vnd.visio", "vsw", "application/vnd.visio", "vtu", "model/vnd.vtu", "vxml", "application/voicexml+xml", "w3d", "application/x-director", "wad", "application/x-doom", "wasm", "application/wasm", "wav", "audio/x-wav", "wax", "audio/x-ms-wax", "wbmp", "image/vnd.wap.wbmp", "wbs", "application/vnd.criticaltools.wbs+xml", "wbxml", "application/vnd.wap.wbxml", "wcm", "application/vnd.ms-works", "wdb", "application/vnd.ms-works", "wdp", "image/vnd.ms-photo", "weba", "audio/webm", "webm", "video/webm", "webp", "image/webp", "wg", "application/vnd.pmi.widget", "wgt", "application/widget", "wks", "application/vnd.ms-works", "wm", "video/x-ms-wm", "wma", "audio/x-ms-wma", "wmd", "application/x-ms-wmd", "wmf", "application/x-msmetafile", "wml", "text/vnd.wap.wml", "wmlc", "application/vnd.wap.wmlc", "wmls", "text/vnd.wap.wmlscript", "wmlsc", "application/vnd.wap.wmlscriptc", "wmv", "video/x-ms-wmv", "wmx", "video/x-ms-wmx", "wmz", "application/x-ms-wmz", "woff", "application/x-font-woff", "wpd", "application/vnd.wordperfect", "wpl", "application/vnd.ms-wpl", "wps", "application/vnd.ms-works", "wqd", "application/vnd.wqd", "wri", "application/x-mswrite", "wrl", "model/vrml", "wsdl", "application/wsdl+xml", "wspolicy", "application/wspolicy+xml", "wtb", "application/vnd.webturbo", "wvx", "video/x-ms-wvx", "x32", "application/x-authorware-bin", "x3d", "model/x3d+xml", "x3db", "model/x3d+binary", "x3dbz", "model/x3d+binary", "x3dv", "model/x3d+vrml", "x3dvz", "model/x3d+vrml", "x3dz", "model/x3d+xml", "xaml", "application/xaml+xml", "xap", "application/x-silverlight-app", "xar", "application/vnd.xara", "xbap", "application/x-ms-xbap", "xbd", "application/vnd.fujixerox.docuworks.binder", "xbm", "image/x-xbitmap", "xdf", "application/xcap-diff+xml", "xdm", "application/vnd.syncml.dm+xml", "xdp", "application/vnd.adobe.xdp+xml", "xdssc", "application/dssc+xml", "xdw", "application/vnd.fujixerox.docuworks", "xenc", "application/xenc+xml", "xer", "application/patch-ops-error+xml", "xfdf", "application/vnd.adobe.xfdf", "xfdl", "application/vnd.xfdl", "xht", "application/xhtml+xml", "xhtml", "application/xhtml+xml", "xhvml", "application/xv+xml", "xif", "image/vnd.xiff", "xla", "application/vnd.ms-excel", "xlam", "application/vnd.ms-excel.addin.macroenabled.12", "xlc", "application/vnd.ms-excel", "xlf", "application/x-xliff+xml", "xlm", "application/vnd.ms-excel", "xls", "application/vnd.ms-excel", "xlsb", "application/vnd.ms-excel.sheet.binary.macroenabled.12", "xlsm", "application/vnd.ms-excel.sheet.macroenabled.12", "xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlt", "application/vnd.ms-excel", "xltm", "application/vnd.ms-excel.template.macroenabled.12", "xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template", "xlw", "application/vnd.ms-excel", "xm", "audio/xm", "xml", "application/xml", "xo", "application/vnd.olpc-sugar", "xop", "application/xop+xml", "xpi", "application/x-xpinstall", "xpl", "application/xproc+xml", "xpm", "image/x-xpixmap", "xpr", "application/vnd.is-xpr", "xps", "application/vnd.ms-xpsdocument", "xpw", "application/vnd.intercon.formnet", "xpx", "application/vnd.intercon.formnet", "xsl", "application/xml", "xslt", "application/xslt+xml", "xsm", "application/vnd.syncml+xml", "xspf", "application/xspf+xml", "xul", "application/vnd.mozilla.xul+xml", "xvm", "application/xv+xml", "xvml", "application/xv+xml", "xwd", "image/x-xwindowdump", "xyz", "chemical/x-xyz", "xz", "application/x-xz", "yang", "application/yang", "yin", "application/yin+xml", "z1", "application/x-zmachine", "z2", "application/x-zmachine", "z3", "application/x-zmachine", "z4", "application/x-zmachine", "z5", "application/x-zmachine", "z6", "application/x-zmachine", "z7", "application/x-zmachine", "z8", "application/x-zmachine", "zaz", "application/vnd.zzazz.deck+xml", "zip", "application/zip", "zir", "application/vnd.zul", "zirz", "application/vnd.zul", "zmm", "application/vnd.handheld-entertainment+xml"]);
    }
  });
  const _boundary = dart.privateName(mime_multipart_transformer, "_boundary");
  mime_multipart_transformer.MimeMultipartTransformer = class MimeMultipartTransformer extends async.StreamTransformerBase$(core.List$(core.int), mime_shared.MimeMultipart) {
    bind(stream) {
      StreamOfListOfint()._check(stream);
      return new bound_multipart_stream.BoundMultipartStream.new(this[_boundary], stream).stream;
    }
  };
  (mime_multipart_transformer.MimeMultipartTransformer.new = function(boundary) {
    this[_boundary] = mime_multipart_transformer._getBoundary(boundary);
    mime_multipart_transformer.MimeMultipartTransformer.__proto__.new.call(this);
    ;
  }).prototype = mime_multipart_transformer.MimeMultipartTransformer.prototype;
  dart.addTypeTests(mime_multipart_transformer.MimeMultipartTransformer);
  dart.setMethodSignature(mime_multipart_transformer.MimeMultipartTransformer, () => ({
    __proto__: dart.getMethods(mime_multipart_transformer.MimeMultipartTransformer.__proto__),
    bind: dart.fnType(async.Stream$(mime_shared.MimeMultipart), [core.Object])
  }));
  dart.setLibraryUri(mime_multipart_transformer.MimeMultipartTransformer, "package:mime/src/mime_multipart_transformer.dart");
  dart.setFieldSignature(mime_multipart_transformer.MimeMultipartTransformer, () => ({
    __proto__: dart.getFields(mime_multipart_transformer.MimeMultipartTransformer.__proto__),
    [_boundary]: dart.finalFieldType(core.List$(core.int))
  }));
  mime_multipart_transformer._getBoundary = function _getBoundary(boundary) {
    let charCodes = boundary[$codeUnits];
    let boundaryList = _native_typed_data.NativeUint8List.new(4 + dart.notNull(charCodes[$length]));
    boundaryList[$_set](0, 13);
    boundaryList[$_set](1, 10);
    boundaryList[$_set](2, 45);
    boundaryList[$_set](3, 45);
    boundaryList[$setRange](4, 4 + dart.notNull(charCodes[$length]), charCodes);
    return boundaryList;
  };
  dart.trackLibraries("packages/mime/mime", {
    "package:mime/src/char_code.dart": char_code,
    "package:mime/src/bound_multipart_stream.dart": bound_multipart_stream,
    "package:mime/src/mime_shared.dart": mime_shared,
    "package:mime/mime.dart": mime,
    "package:mime/src/mime_type.dart": mime_type,
    "package:mime/src/magic_number.dart": magic_number,
    "package:mime/src/default_extension_map.dart": default_extension_map,
    "package:mime/src/mime_multipart_transformer.dart": mime_multipart_transformer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/char_code.dart","src/mime_shared.dart","src/bound_multipart_stream.dart","src/mime_type.dart","src/magic_number.dart","src/default_extension_map.dart","src/mime_multipart_transformer.dart"],"names":[],"mappings":"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","file":"mime.ddc.js"}');
  // Exports:
  return {
    src__char_code: char_code,
    src__bound_multipart_stream: bound_multipart_stream,
    src__mime_shared: mime_shared,
    mime: mime,
    src__mime_type: mime_type,
    src__magic_number: magic_number,
    src__default_extension_map: default_extension_map,
    src__mime_multipart_transformer: mime_multipart_transformer
  };
});

//# sourceMappingURL=mime.ddc.js.map
