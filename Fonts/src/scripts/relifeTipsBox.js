// Decrypted 1:1 module `relifeTipsBox` from assets/main/index.231ca.js
relifeTipsBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "ba5d0xXj/tEiK29U57wzxz4", "relifeTipsBox");
cc.Class({
extends: cc.Component,
properties: {
bup: cc.Node,
relifeFbBox: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
var e = !1;
G.user.relifeFb.length > 0 && (e = G.user.relifeFb[3].length > 0);
if (e) {
t.relifeFbBox.active = !0;
t.node.active = !1;
} else cc.director.loadScene("login");
});
},
onEnable: function() {
G.showInter();
}
});
cc._RF.pop();
}, {} ]
