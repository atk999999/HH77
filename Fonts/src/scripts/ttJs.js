// Decrypted 1:1 module `ttJs` from assets/main/index.231ca.js
ttJs: [ function(t, e) {
"use strict";
cc._RF.push(e, "46016K8TyxNWIV1KABhZ8Ba", "ttJs");
cc.Class({
extends: cc.Component,
properties: {
giftBup: cc.Node,
recorderBup: cc.Node,
recorderFont: cc.Label,
recorder0: cc.Node,
recorder1: cc.Node,
ttGiftBox: cc.Node,
timeOut: {
default: 0,
visible: !1
},
checkTime: {
default: 0,
visible: !1
},
checkTime1: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.giftBup, function() {
t.ttGiftBox.active = !0;
});
G.setBup(this.recorderBup, function() {
if (t.recorder0.active) {
t.timeOut = 0;
t.startRecorder();
} else t.stopRecorder();
});
this.ttInit();
},
onDestroy: function() {
G.ttAd.stopRecorder();
},
ttInit: function() {
this.giftBup.active = !1;
this.recorderBup.active = "tt" == G.from && "Android" == cc.sys.os && G.ttAd.recorderIsOk();
this.checkScene();
},
checkScene: function() {
var t = this;
"tt" == G.from && tt.checkScene({
scene: "sidebar",
success: function(e) {
console.log("check scene success: ", e);
t.giftBup.active = !0;
},
fail: function(t) {
console.log("check scene fail:", t);
}
});
},
checkSideBack: function() {
if (!G.temp.ttSideBack) if ("homepage" == G.getItem("tt_from")) {
G.temp.ttSideBack = !0;
this.ttGiftBox.active = !0;
} else G.getItem("xx_tt_gift") == G.getNow() && (G.temp.ttSideBack = !0);
},
startRecorder: function(t) {
var e = this;
void 0 === t && (t = 300);
this.recorder0.active = !1;
this.recorder1.active = !0;
G.ttAd.startRecorder(function() {
e.timeCount = t;
e.recorderFont.string = "录屏中";
G.showTips("录屏开始!");
}, function() {
e.timeCount = 0;
e.recorder0.active = !0;
e.recorder1.active = !1;
e.recorderFont.string = "录屏";
G.showTips("录屏异常，请稍后再试!");
}, t);
},
stopRecorder: function() {
this.timeCount = 0;
this.recorderFont.string = "录屏";
this.recorder0.active = !0;
this.recorder1.active = !1;
G.ttAd.stopRecorder(function() {
var t = G.getMsgBox();
t.showMsg("录屏结束，是否分享精彩视频？", function() {
setTimeout(function() {
G.ttAd.recordShare(function() {
G.showTips("分享成功");
}, function() {
G.showTips("分享失败");
});
}, .5);
});
t.showCancel(!0);
});
},
update: function(t) {
if ("tt" == G.from && this.timeCount > 0) {
this.timeCount -= t;
this.timeCount <= 0 && this.stopRecorder();
}
if ("tt" == G.from && !this.recorderBup.active) {
this.checkTime += t;
if (this.checkTime > 1) {
this.checkTime = 0;
this.recorderBup.active = "Android" == cc.sys.os && G.ttAd.recorderIsOk();
}
}
if ("tt" == G.from) {
this.checkTime1 += t;
if (this.checkTime1 > 1) {
this.checkTime1 = 0;
this.checkSideBack();
}
}
}
});
cc._RF.pop();
}, {} ]
