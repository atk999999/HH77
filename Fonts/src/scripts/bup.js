// Decrypted 1:1 module `bup` from assets/main/index.231ca.js
bup: [ function(t, e) {
"use strict";
cc._RF.push(e, "398871dMe5Kn5v4n4Gwd+L1", "bup");
cc.Class({
extends: cc.Component,
properties: {
cb: null,
touchType: 0,
delay: {
default: .05,
visible: !1
}
},
onLoad: function() {
var t = this, e = this.node.scaleX, i = this.node.scaleY, n = 0 == this.touchType ? cc.Node.EventType.TOUCH_START : cc.Node.EventType.TOUCH_END;
this.node.on(n, function(n) {
if (!(t.node.getNumberOfRunningActions() > 0)) {
var a = cc.scaleTo(t.delay, .95 * e, .95 * i), o = cc.scaleTo(t.delay, e, i), m = cc.sequence(a, o, cc.callFunc(function() {
null != t.cb && t.cb();
}));
t.node.runAction(m);
G.playAudio("bup", 1);
n.stopPropagation();
}
});
this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
t.stopPropagation();
});
},
setCb: function(t, e) {
void 0 === e && (e = .05);
this.cb = t;
this.delay = e;
}
});
cc._RF.pop();
}, {} ]
