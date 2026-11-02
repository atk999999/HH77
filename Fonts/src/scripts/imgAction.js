// Decrypted 1:1 module `imgAction` from assets/main/index.231ca.js
imgAction: [ function(t, e) {
"use strict";
cc._RF.push(e, "73d34YrhI1MKrk2j+gH1d9t", "imgAction");
cc.Class({
extends: cc.Component,
properties: {
actionType: 0,
actionTime: .3
},
onLoad: function() {
this.showAction();
},
showAction: function() {
var t = this.node.scale, e = this.node.y, i = null;
switch (this.actionType) {
case 0:
var n = cc.scaleTo(this.actionTime, .95 * t, .95 * t), a = cc.scaleTo(this.actionTime, t, t);
i = cc.sequence(n, a).repeatForever();
break;

case 1:
var o = cc.moveTo(this.actionTime, cc.v2(this.node.x, e + 10)), m = cc.moveTo(this.actionTime, cc.v2(this.node.x, e - 10));
i = cc.sequence(o, m).repeatForever();
break;

case 2:
i = cc.rotateBy(this.actionTime, 10).repeatForever();
}
this.node.runAction(i);
}
});
cc._RF.pop();
}, {} ]
