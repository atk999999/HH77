// Decrypted 1:1 module `ttGiftBox` from assets/main/index.231ca.js
ttGiftBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "a632cSq9LlE3LU8m8LnNVzu", "ttGiftBox");
cc.Class({
extends: cc.Component,
properties: {
toBup: cc.Node,
getBup: cc.Node,
state: cc.Node,
tt0: cc.Node,
tt1: cc.Node,
tt2: cc.Node,
tt3: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.toBup, function() {
t.toSideBar();
});
G.setBup(this.getBup, function() {
t.getGift();
});
this.tt0.active = 0 == G.fromVer;
this.tt1.active = 1 == G.fromVer;
this.tt2.active = 2 == G.fromVer;
this.tt3.active = 3 == G.fromVer;
},
onEnable: function() {
var t = G.getItem("tt_from");
console.log("launch_from", t);
if ("homepage" == t) {
this.toBup.active = !1;
this.getBup.active = !0;
}
var e = G.getItem("xx_tt_gift");
this.state.active = e == G.getNow();
if (this.state.active) {
this.toBup.active = !1;
this.getBup.active = !1;
}
},
getGift: function() {
if (G.getItem("xx_tt_gift") != G.getNow()) {
G.user.adSkip++;
G.save();
G.setItem("xx_tt_gift", G.getNow());
G.showMsg("获得免广告券1张");
} else G.showTips("本日奖励已领取");
this.node.active = !1;
},
toSideBar: function() {
this.node.active = !1;
tt.navigateToScene({
scene: "sidebar",
success: function() {
console.log("navigate to scene success");
},
fail: function(t) {
console.log("navigate to scene fail: ", t);
}
});
}
});
cc._RF.pop();
}, {} ]
