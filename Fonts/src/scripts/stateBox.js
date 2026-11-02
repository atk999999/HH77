// Decrypted 1:1 module `stateBox` from assets/main/index.231ca.js
stateBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "dea5ch2aeFB9YAMMQZYG1xm", "stateBox");
cc.Class({
extends: cc.Component,
properties: {
own: cc.Label,
lev: cc.Label,
manImg: cc.Node,
girlImg: cc.Node,
roleName: cc.Label,
dataBox: cc.Node,
red0: cc.Node,
red1: cc.Node,
firstGiftBox: cc.Node,
homeLock: cc.Node,
rankLock: cc.Node,
timeOut: {
default: 0,
visible: !1
},
relife: {
default: !1,
visible: !1
}
},
onLoad: function() {
this.updateState();
},
showRole: function() {
this.manImg.active = 1 == G.user.sex;
this.girlImg.active = 0 == G.user.sex;
this.roleName.string = G.user.name;
},
updateState: function() {
if (!this.dataBox.active) {
if (this.own) if ("" != G.user.home.name) {
this.own.string = G.user.home.name;
this.own.node.color = cc.color("#FED056");
} else if (-1 != G.user.own) {
var t = G.getConf(G.ownConf, G.user.own);
this.own.string = t.name;
this.own.node.color = cc.color("#FED056");
} else {
this.own.string = "无宗门";
this.own.node.color = cc.color("#dddddd");
}
var e = G.levConf[G.user.lev - 1];
this.lev.string = e.stage_name + e.step_name;
var i = [ "寿元", "家世", "灵石", "根骨", "悟性", "运气" ], n = [ Math.max(0, G.user.age - G.user.year), G.user.data[3], G.getNum(G.user.coin), G.user.data[0], G.user.data[1], G.user.data[2] ], a = this.node.children;
for (var o in a) a[o].getChildByName("font").getComponent(cc.Label).string = i[o] + "：" + n[o];
a[0].getChildByName("font").color = n[0] < 10 ? cc.color("#ff0000") : cc.color("#000000");
this.red0.active = G.user.exp >= e.exp;
this.showRole();
var m = G.getItem("xx_first_auto");
17 != G.user.year || m || (this.firstGiftBox.active = !0);
this.rankLock.active = e.stage < 2;
this.homeLock.active = e.stage < 4;
}
},
updateBagRed: function() {},
update: function(t) {
if (G.temp.gameStart) {
this.timeOut += t;
if (this.timeOut >= .5) {
this.timeOut = 0;
this.updateState();
}
}
}
});
cc._RF.pop();
}, {} ]
