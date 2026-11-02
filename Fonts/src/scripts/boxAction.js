// Decrypted 1:1 module `boxAction` from assets/main/index.231ca.js
boxAction: [ function(t, e) {
"use strict";
cc._RF.push(e, "b2db8uLtnZO4JKk7U3R6iBO", "boxAction");
cc.Class({
extends: cc.Component,
properties: {
box: cc.Node,
typeId: 0,
sx: 0
},
onLoad: function() {
this.sx = 0 == this.sx ? .05 : this.sx;
},
onEnable: function() {
switch (this.typeId) {
case 0:
this.showAction0();
}
},
showAction0: function() {
if (this.box.getNumberOfRunningActions() < 1) {
var t = this.box.scaleX, e = this.sx > .05 ? .3 : .15, i = cc.scaleTo(e, t + this.sx, t + this.sx), n = cc.scaleTo(e, t, t), a = cc.sequence(i, n);
this.box.runAction(a);
}
}
});
cc._RF.pop();
}, {} ]
