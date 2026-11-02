// Decrypted 1:1 module `tipsBox` from assets/main/index.231ca.js
tipsBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "b729dgYruxAhrVcNsz2/ilB", "tipsBox");
cc.Class({
extends: cc.Component,
properties: {
font: cc.Label
},
onLoad: function() {},
showTips: function(t, e) {
var i = this;
this.node.stopAllActions();
this.font.string = t;
var n = cc.moveTo(.6, cc.v2(0, 200)), a = cc.sequence(n, cc.delayTime(1), cc.callFunc(function() {
i.node.y = 0;
i.node.active = !1;
e && e();
}));
this.node.y = 0;
this.node.active = !0;
this.node.runAction(a);
}
});
cc._RF.pop();
}, {} ]
