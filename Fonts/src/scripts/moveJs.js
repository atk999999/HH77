// Decrypted 1:1 module `moveJs` from assets/main/index.231ca.js
moveJs: [ function(t, e) {
"use strict";
cc._RF.push(e, "d3883sUcPlONI5+i3oofL8s", "moveJs");
cc.Class({
extends: cc.Component,
properties: {
t: 1,
dire: 0,
m0: 0,
m1: 0
},
onLoad: function() {
var t = 0 == this.dire ? cc.v2(this.node.x + this.m0, this.node.y) : cc.v2(this.node.x, this.node.y + this.m0), e = 0 == this.dire ? cc.v2(this.node.x + this.m1, this.node.y) : cc.v2(this.node.x, this.node.y + this.m1), i = cc.moveTo(this.t, t), n = cc.moveTo(this.t, e), a = cc.sequence(i, n).repeatForever();
this.node.runAction(a);
}
});
cc._RF.pop();
}, {} ]
