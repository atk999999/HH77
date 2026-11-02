// Decrypted 1:1 module `fsBox` from assets/main/index.231ca.js
fsBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "34d729XyjtHRb8fzs0y5blb", "fsBox");
function i(t, e) {
var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (i) return (i = i.call(t)).next.bind(i);
if (Array.isArray(t) || (i = n(t)) || e && t && "number" == typeof t.length) {
i && (t = i);
var a = 0;
return function() {
return a >= t.length ? {
done: !0
} : {
done: !1,
value: t[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(t, e) {
if (t) {
if ("string" == typeof t) return a(t, e);
var i = Object.prototype.toString.call(t).slice(8, -1);
"Object" === i && t.constructor && (i = t.constructor.name);
return "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(t, e) : void 0;
}
}
function a(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
return n;
}
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list: cc.Node,
addBup: cc.Node,
gjBup: cc.Node,
title: cc.Label,
buff: cc.Label,
bupBox: cc.Node,
gjBox: cc.Node,
expBar: cc.Node,
expTime: cc.Label,
adBup: cc.Node,
adFont: cc.Label,
cost: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.addBup, function() {
if (t.list.children.length > 4) G.showTips("已达上限"); else {
G.temp.bagType = 1;
t.bupBox.getComponent("bupBox").jumpTo(1);
t.node.active = !1;
}
});
G.setBup(this.gjBup, function() {
if (G.fsList().length < 1) G.showTips("未装备法术"); else {
G.showInter();
t.gjBox.active = !0;
t.gjBup.parent.active = !1;
G.user.fsTime = G.getNowSec();
G.save();
}
});
G.setBup(this.adBup, function() {
var e = G.getAdConf();
if (G.user.coin >= e.money) {
G.user.coin -= e.money;
G.user.fsPei++;
G.user.fsPei > 1 && (t.adBup.active = !1);
G.save();
} else G.noCoinTips(function() {
var e = G.getAdConf();
G.showCost(t.cost, G.user.coin, e.money, "灵石 ");
});
});
G.setTimeCb({
path: "Canvas/fsBox",
js: "fsBox",
cb: "updateBar",
time: [ 0, 1 ]
});
},
onEnable: function() {
var t = G.getAdConf();
G.showCost(this.cost, G.user.coin, t.money, "灵石 ");
this.adBup.active = G.user.fsPei < 2;
this.showList();
},
showList: function() {
this.list.removeAllChildren();
for (var t, e = G.fsList(), n = i(e); !(t = n()).done; ) {
var a = t.value, o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("fsItem").showInfo(a);
}
this.showGjInfo();
e.length > 0 && this.showBuff(e[0]);
},
showBuff: function(t) {
var e = G.user.setObj["_" + t], i = G.getConf(G._15Conf, e.fsId);
this.title.string = "【" + i.name + "】";
var n = G.fsDesc(t), a = i.des.replace("eff1", n.eff1);
a = (a = a.replace("eff2", n.eff2)).replace("rate", i.rate + "%");
this.buff.string = a;
},
showGjInfo: function() {
this.gjBox.active = -1 != G.user.fsTime;
this.gjBup.parent.active = -1 == G.user.fsTime;
this.adFont.string = G.user.fsPei + 1 + "倍经验";
},
updateBar: function() {
if (-1 != G.user.fsTime) {
var t = Math.min(G.VAL.GF_GJ_TIME, G.getNowSec() - G.user.fsTime);
this.expTime.string = "挂机倒计时 " + G.getTime(G.VAL.GF_GJ_TIME - t).hms;
this.expBar.scaleX = t / G.VAL.GF_GJ_TIME;
G.addFsExp(3, G.VAL.GF_GJ_EXP * G.user.fsPei);
if (t == G.VAL.GF_GJ_TIME) {
G.user.fsTime = -1;
G.user.fsPei = 1;
this.showGjInfo();
}
var e = G.fsList(), i = this.list.children;
for (var n in i) e[n] && i[n].getComponent("fsItem").showInfo(e[n]);
} else this.showGjInfo();
}
});
cc._RF.pop();
}, {} ]
