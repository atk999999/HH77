// Decrypted 1:1 module `msgBox` from assets/main/index.231ca.js
msgBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "07cb4QxAKFCF6l8hkaCIpJz", "msgBox");
t("lodash").findLastKey;
cc.Class({
extends: cc.Component,
properties: {
msg: cc.Label,
subMsg: cc.Label,
okBup: cc.Node,
otherBup: cc.Node,
cancelBup: cc.Node,
cancelTips: cc.Node,
cancelFlag: {
default: !1,
visible: !1
},
cb0: null,
cb1: null,
cb2: null
},
onLoad: function() {
var t = this;
this.okBup.getComponent("bup").setCb(function() {
null != t.cb0 && t.cb0();
t.resetBox(!1);
});
this.cancelBup.getComponent("bup").setCb(function() {
null != t.cb1 && t.cb1();
t.resetBox(!1);
});
this.otherBup.getComponent("bup").setCb(function() {
null != t.cb2 && t.cb2();
t.resetBox(!1);
});
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
if (t.cancelFlag) {
null != t.cb1 && t.cb1();
t.resetBox(!1);
}
e.stopPropagation();
});
},
setBupTxt: function(t, e) {
null != t && (this.okBup.getChildByName("box").getChildByName("font").getComponent(cc.Label).string = t);
null != e && (this.otherBup.getChildByName("font").getComponent(cc.Label).string = e);
},
showVedio: function() {
this.okBup.getChildByName("box").getChildByName("vedio").active = !0;
},
showMsg: function(t, e, i) {
this.resetBox(!1);
this.node.stopAllActions();
var n = cc.moveTo(.05, 20, this.node.y), a = cc.moveTo(.05, -10, this.node.y), o = cc.moveTo(.05, 0, this.node.y), m = cc.sequence(n, a, o);
this.msg.string = t;
null != e && (this.cb0 = e);
null != i && (this.cb1 = i);
this.node.active = !0;
this.node.runAction(m);
},
showSubMsg: function(t) {
this.subMsg.string = t;
this.subMsg.node.active = !0;
},
setHCenter: function() {
this.msg.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
this.subMsg.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
},
resetBox: function(t) {
this.cb0 = null;
this.cb1 = null;
this.msg.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
this.subMsg.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
this.subMsg.node.active = !1;
this.cancelBup.active = !1;
this.cancelFlag = !1;
this.cancelTips.active = !1;
this.otherBup.active = !1;
this.okBup.x = 0;
this.okBup.getChildByName("box").getChildByName("vedio").active = !1;
this.okBup.getChildByName("box").getChildByName("font").getComponent(cc.Label).string = "确定";
this.node.active = t;
},
showCancel: function(t) {
void 0 === t && (t = !1);
this.cancelFlag = !t;
this.cancelTips.active = !t;
this.cancelBup.active = t;
this.otherBup.active = !1;
},
showOtherBup: function(t, e) {
this.otherBup.getChildByName("font").getComponent(cc.Label).string = t;
this.cb2 = e;
this.cancelTips.active = !1;
this.otherBup.active = !0;
this.cancelBup.active = !1;
}
});
cc._RF.pop();
}, {
lodash: "lodash"
} ]
