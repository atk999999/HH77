// Decrypted 1:1 module `scaleJs` from assets/main/index.231ca.js
scaleJs: [ function(t, e) {
"use strict";
cc._RF.push(e, "f132fa/N9NN2pt8M2yE8Nwr", "scaleJs");
cc.Class({
extends: cc.Component,
properties: {
t: .3,
s0: .9,
s1: 1
},
onLoad: function() {
var t = this.node.scaleX * this.s0, e = this.node.scaleY * this.s0, i = this.node.scaleX * this.s1, n = this.node.scaleY * this.s1, a = cc.scaleTo(this.t, t, e), o = cc.scaleTo(this.t, i, n), m = cc.sequence(a, o).repeatForever();
this.node.runAction(m);
}
});
cc._RF.pop();
}, {} ]
