define(['dart_sdk', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__gestures__arena, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const message_codec = packages__flutter__src__gestures__arena.src__services__message_codec;
  const system_chrome = packages__flutter__src__gestures__arena.src__services__system_chrome;
  const platform_channel = packages__flutter__src__gestures__arena.src__services__platform_channel;
  const message_codecs = packages__flutter__src__gestures__arena.src__services__message_codecs;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const url_launcher = Object.create(dart.library);
  const $trimLeft = dartx.trimLeft;
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        [StandardMethodCodec_messageCodec]: C2 || CT.C2
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        [MethodChannel__binaryMessenger]: null,
        [MethodChannel_codec]: C1 || CT.C1,
        [MethodChannel_name]: "plugins.flutter.io/url_launcher"
      });
    }
  });
  url_launcher.launch = function launch(urlString, opts) {
    let forceSafariVC = opts && 'forceSafariVC' in opts ? opts.forceSafariVC : null;
    let forceWebView = opts && 'forceWebView' in opts ? opts.forceWebView : null;
    let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : null;
    let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    return async.async(core.bool, function* launch() {
      let t0, t0$, t0$0, t0$1;
      if (!(urlString != null)) dart.assertFailed(null, "org-dartlang-app:///packages/url_launcher/url_launcher.dart", 63, 10, "urlString != null");
      let url = core.Uri.parse(urlString[$trimLeft]());
      let isWebURL = url.scheme === "http" || url.scheme === "https";
      if ((dart.equals(forceSafariVC, true) || dart.equals(forceWebView, true)) && !isWebURL) {
        dart.throw(new message_codec.PlatformException.new({code: "NOT_A_WEB_SCHEME", message: "To use webview or safariVC, you need to pass" + "in a web URL. This " + dart.str(urlString) + " is not a web URL."}));
      }
      let previousAutomaticSystemUiAdjustment = null;
      if (statusBarBrightness != null && dart.equals(platform.defaultTargetPlatform, platform.TargetPlatform.iOS)) {
        previousAutomaticSystemUiAdjustment = binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment;
        binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment = false;
        system_chrome.SystemChrome.setSystemUIOverlayStyle(dart.equals(statusBarBrightness, ui.Brightness.light) ? system_chrome.SystemUiOverlayStyle.dark : system_chrome.SystemUiOverlayStyle.light);
      }
      let result = (yield url_launcher._channel.invokeMethod(core.bool, "launch", new (IdentityMapOfString$Object()).from(["url", urlString, "useSafariVC", (t0 = forceSafariVC, t0 == null ? isWebURL : t0), "useWebView", (t0$ = forceWebView, t0$ == null ? false : t0$), "enableJavaScript", (t0$0 = enableJavaScript, t0$0 == null ? false : t0$0), "universalLinksOnly", (t0$1 = universalLinksOnly, t0$1 == null ? false : t0$1)])));
      if (statusBarBrightness != null) {
        binding.WidgetsBinding.instance.renderView.automaticSystemUiAdjustment = previousAutomaticSystemUiAdjustment;
      }
      return result;
    });
  };
  url_launcher.canLaunch = function canLaunch(urlString) {
    return async.async(core.bool, function* canLaunch() {
      if (urlString == null) {
        return false;
      }
      return yield url_launcher._channel.invokeMethod(core.bool, "canLaunch", new (IdentityMapOfString$Object()).from(["url", urlString]));
    });
  };
  url_launcher.closeWebView = function closeWebView() {
    return async.async(dart.void, function* closeWebView() {
      return yield url_launcher._channel.invokeMethod(dart.void, "closeWebView");
    });
  };
  const MethodChannel__binaryMessenger = dart.privateName(platform_channel, "MethodChannel._binaryMessenger");
  let C2;
  const StandardMethodCodec_messageCodec = dart.privateName(message_codecs, "StandardMethodCodec.messageCodec");
  let C1;
  const MethodChannel_codec = dart.privateName(platform_channel, "MethodChannel.codec");
  const MethodChannel_name = dart.privateName(platform_channel, "MethodChannel.name");
  let C0;
  dart.defineLazy(url_launcher, {
    /*url_launcher._channel*/get _channel() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/url_launcher/url_launcher", {
    "package:url_launcher/url_launcher.dart": url_launcher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["url_launcher.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wCAuDS;QACF;QACA;QACA;QACA;QACM;AANM;;AAQjB,YAAO,AAAU,SAAD,IAAI;AACV,gBAAU,eAAM,AAAU,SAAD;AACxB,qBAAW,AAAI,AAAO,AAAU,GAAlB,YAAW,UAAU,AAAI,AAAO,GAAR,YAAW;AAC5D,WAAmB,YAAd,aAAa,EAAI,SAAqB,YAAb,YAAY,EAAI,WAAU,QAAQ;AAIJ,QAH1D,WAAM,+CACI,6BACG,iDACL,iCAAqB,SAAS;;AAEnC;AACL,UAAI,mBAAmB,IAAI,QACD,YAAtB,gCAAwC;AAEwB,QADlE,sCACmB,AAAS,AAAW;AAC+B,QAAvD,AAAS,AAAW,yEAA8B;AAGhC,QAFpB,mDAA4C,YAApB,mBAAmB,EAAe,uBAC5C,0CACA;;AAKlB,oBAAS,MAAM,AAAS,8CACjC,UACgB,yCACd,OAAO,SAAS,EAChB,gBAA6B,KAAd,aAAa,QAAb,OAAiB,QAAQ,QACxC,eAA2B,MAAb,YAAY,SAAZ,OAAgB,cAC9B,qBAAqC,OAAjB,gBAAgB,UAAhB,OAAoB,eACxC,uBAAyC,OAAnB,kBAAkB,UAAlB,OAAsB;AAGhD,UAAI,mBAAmB,IAAI;AAEc,QADxB,AAAS,AAAW,yEAC/B,mCAAmC;;AAEzC,YAAO,OAAM;IACf;;8CAI8B;AAAR;AACpB,UAAI,AAAU,SAAD,IAAI;AACf,cAAO;;AAKT,YAAO,OAAM,AAAS,8CACpB,aACgB,yCAAC,OAAO,SAAS;IAErC;;;AAayB;AAIvB,YAAO,OAAM,AAAS,8CAAa;IACrC;;;;;;;;;;MA1HoB,qBAAQ","file":"url_launcher.ddc.js"}');
  // Exports:
  return {
    url_launcher: url_launcher
  };
});

//# sourceMappingURL=url_launcher.ddc.js.map
