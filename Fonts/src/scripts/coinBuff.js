// Decrypted 1:1 module `coinBuff` from assets/main/index.231ca.js
coinBuff: [ function(t, e) {
"use strict";
cc._RF.push(e, "83c21yDiV1NDJ7dx8kuqKmf", "coinBuff");
cc.Class({
extends: cc.Component,
properties: {
path: {
default: null,
visible: !1
}
},
onLoad: function() {
this.path = [];
for (var t = 1; t < 3; t++) this.path.push(cc.v2(G._.random(-300, 300), 530 - 300 * t));
this.path.push(cc.v2(G._.random(-200, 200), -420));
},
toBar: function(t) {
var e = this;
if (this.path.length < 1) {
cc.find("Canvas/levBox").getComponent("levBox").updateBar(t);
this.node.destroy();
} else {
var i = this.path.shift(), n = i.sub(this.node.position).mag() / 500, a = cc.moveTo(n, i), o = cc.sequence(a, cc.callFunc(function() {
e.toBar(t);
}));
this.node.runAction(o);
}
}
});
cc._RF.pop();
}, {} ]
