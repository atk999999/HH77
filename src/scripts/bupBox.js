// Decrypted 1:1 module `bupBox` from assets/main/index.231ca.js
bupBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "67cd9Uw2W1OP652UhH2hr96", "bupBox");
cc.Class({
extends: cc.Component,
properties: {
box: cc.Node,
infoBox: cc.Node,
bagBox: cc.Node,
shopBox: cc.Node,
copyBox: cc.Node,
selBox: cc.Node,
makeBox: cc.Node,
sel: cc.Node,
homeBup: cc.Node,
homeBox: cc.Node,
rankBup: cc.Node,
rankBox: cc.Node,
acBup: cc.Node,
acBox: cc.Node,
img: [ cc.Node ],
lock: [ cc.Node ],
timeOut: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this, e = this.box.children, i = function(i) {
G.setBup(e[i], function() {
if (G.user.age < 1) G.showMsg("寿元耗尽，请选择重生轮回~!"); else {
G.temp.bagType = -1;
t.jumpTo(Number(i));
}
});
};
for (var n in e) i(n);
G.setBup(this.rankBup, function() {
t.toRank();
});
G.setBup(this.homeBup, function() {
t.toHome();
});
G.setBup(this.acBup, function() {
t.acBox.active = !0;
});
this.jumpTo(2);
},
jumpTo: function(t) {
if (4 == t && this.selBox.active) G.showTips("请完成选项"); else {
var e = this.box.children;
for (var i in e) e[i].scale = i == t ? 1.05 : 1;
this.makeBox.active = !1;
2 == t && G.temp.danMan && this.homeBox.getComponent("homeBox").showBox(1);
this.infoBox.active = 0 == t;
this.bagBox.active = 1 == t;
this.shopBox.active = 3 == t;
this.copyBox.active = 4 == t;
this.sel.x = e[t].x;
2 == t ? G.wxAd.showClubBup(!0) : G.wxAd.showClubBup(!1);
}
},
updateLock: function() {
this.img[0].color = G.user.var.start < 1 ? cc.color("#666666") : cc.color("#ffffff");
this.img[1].color = G.user.var.mall < 1 ? cc.color("#666666") : cc.color("#ffffff");
this.lock[0].active = G.user.var.start < 1;
this.lock[1].active = G.user.var.mall < 1;
},
toRank: function() {
var t = G.levConf[G.user.lev - 1];
if (t && t.stage < 2) G.showTips("筑基期解锁天梯"); else {
this.jumpTo(2);
this.rankBox.getComponent("rankBox").showRank(0);
}
},
toHome: function() {
var t = G.levConf[G.user.lev - 1];
if (t && t.stage < 4) G.showTips("元婴期解锁宗门"); else {
this.jumpTo(2);
this.homeBox.getComponent("homeBox").showBox(0);
}
},
update: function() {}
});
cc._RF.pop();
}, {} ]
