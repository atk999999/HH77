// Decrypted 1:1 module `homeBox` from assets/main/index.231ca.js
homeBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "4775eIDEdJNjZWwaTFLTjJY", "homeBox");
cc.Class({
extends: cc.Component,
properties: {
typeBox: cc.Node,
view: [ cc.Node ]
},
onLoad: function() {
var t = this;
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.showList(e);
});
},
onEnable: function() {
G.wxAd.showClubBup(!1);
G.user.home.name && "" != G.user.home.name || (G.user.home.name = G.getHomeName());
if (G._.size(G.user.home.man) < 1) {
for (var t = 0; t < 2; t++) G.addMan();
G.addHomeTask();
}
console.log(G.user.home);
G.user.var.class = 1;
G.save();
},
onDisable: function() {
G.wxAd.showClubBup(!0);
},
showBox: function(t) {
this.node.active = !0;
this.typeBox.getComponent("typeBox").showType(t);
},
showList: function(t) {
if (1 == t) this.view[1].getComponent("homeView1").showViewType(0); else if (3 == t && G.user.home.lev < 4) {
G.showTips("宗门4级解锁");
this.typeBox.getComponent("typeBox").showType(0);
return;
}
for (var e = 0; e < 4; e++) this.view[e].active = e == t;
}
});
cc._RF.pop();
}, {} ]
