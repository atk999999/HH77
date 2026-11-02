// Decrypted 1:1 module `winBox` from assets/main/index.231ca.js
winBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "ea1d0bU0atPva9NdOzLAm2e", "winBox");
cc.Class({
extends: cc.Component,
properties: {
bup: cc.Node,
box: cc.Node,
relifeFbBox: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
var e = !1;
if (G.user.isWin) for (var i in G.user.relifeFb) if (2 != (i = Number(i)) && 5 != i && G.user.relifeFb[i].length > 0) {
e = !0;
break;
}
if (e) {
t.relifeFbBox.active = !0;
t.node.active = !1;
} else cc.director.loadScene("login");
});
},
onEnable: function() {
G.playAudio("lev", 1);
G.user.point += G.VAL.WIN_POINT;
G.save();
var t = this.box.children;
for (var e in t) {
var i = cc.fadeIn(2), n = cc.sequence(cc.delayTime(1.2 * e), i);
t[e].runAction(n);
}
}
});
cc._RF.pop();
}, {} ]
