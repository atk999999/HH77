// Decrypted 1:1 module `shopBox` from assets/main/index.231ca.js
shopBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "1976cnZ+IlCmI+CQlKC6SaF", "shopBox");
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
title: cc.Label,
type: cc.Label,
rar: cc.Label,
desc: cc.Label,
typeBox: cc.Node,
updateBup: cc.Node,
updateFont: cc.Label,
buyBup: cc.Node,
coin: cc.Node,
time: cc.Label,
adBup: cc.Node,
buyBup1: cc.Node,
adCountBox: cc.Node,
adCount: cc.RichText,
adSkip: cc.RichText,
adTips: cc.Label,
objList: {
default: null,
visible: !1
},
typeIndex: {
default: null,
visible: !1
},
selId: {
default: null,
visible: !1
},
timeOut: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.showList(e);
});
G.setBup(this.updateBup, function() {
if (G.user.shopFree > 0) {
G.user.shopFree--;
G.user.shopTime = 0;
t.setList();
t.updateList(t.typeIndex);
G.user.shopTime = G.getNowSec();
} else {
var e = G.getAdConf(), i = Math.ceil(e.money / 2);
if (G.user.coin >= i) {
G.user.coin -= i;
G.user.shopFree = 1;
} else G.noCoinTips();
}
t.updateFree();
G.save();
});
G.setBup(this.buyBup, function() {
t.buyObj();
});
G.setBup(this.buyBup1, function() {
G.ylAdEvent("坊市获取特殊物品");
G.showVedio(function() {
t.adBuyObj();
});
});
G.setBup(this.adBup, function() {
G.ylAdEvent("坊市获取灵石");
G.showVedio(function() {
t.getCoin();
});
});
this.adTips.string = "备注：每次轮回，观看" + G.VAL.MAX_AD[0] + "次广告可获得免广告卷" + G.VAL.MAX_AD[1] + "张，免广告卷使用完后，观看" + G.VAL.MAX_AD[0] + "次可再获得" + G.VAL.MAX_AD[1] + "张，本轮重生后所有数据清零。";
this.objList = [];
},
onEnable: function() {
this.time.node.active = G.user.shopFree < 1;
this.objList.length < 1 && this.setList();
this.updateList(0);
this.updateTime();
this.updateFree();
if (G.user.adTimes < G.VAL.MAX_AD[0]) {
var t = G.VAL.MAX_AD[0] - G.user.adTimes;
t < 3 && G.showTips("还差" + t + "次视频，可解锁【免广】福利~");
}
},
setList: function() {
for (var t, e = [ [], [], [], [], [], [] ], n = G.levConf[G.user.lev - 1].stage, a = i(G.objConf); !(t = a()).done; ) {
var o = t.value, m = "_" + o.id;
if ("" != o.ad) 162001 != o.id && e[5].push(m); else if ("" != o.pri) if (7 == o.type) e[4].push(m); else if (o.qua < 4) if (1 == o.type) e[0].push(m); else if (11 == o.type) e[1].push(m); else if (5 == o.type) e[3].push(m); else {
if (6 == o.type) continue;
if (8 == o.type) continue;
var r = -1 == o.attr.indexOf("lf"), s = -1 == o.attr.indexOf("cn"), l = -1 == o.attr.indexOf("in");
r && s && l && e[2].push(m);
}
}
this.objList = [];
this.objList[0] = G.randomArray(e[0], 5);
this.objList[1] = G.randomArray(e[1], 5);
this.objList[2] = [ "_" + [ 143001, 143001, 143002, 143003, 144001, 144002, 144003, 144003 ][n], "_261000", "_271000" ].concat(G.randomArray(e[2], 11));
this.objList[3] = G.randomArray(e[3], 5);
this.objList[4] = G.randomArray(e[4], 10);
this.objList[5] = e[5];
},
updateList: function(t) {
this.typeIndex = t;
this.updateFree();
this.typeBox.getComponent("typeBox").showType(t);
},
updateFree: function() {
var t = G.getAdConf(), e = Math.ceil(t.money / 2);
this.updateFont.string = G.user.shopFree < 1 ? "灵石加速 " + G.getNum(e) : "刷 新(" + G.user.shopFree + ")";
this.time.node.active = G.user.shopFree < 1;
},
showList: function(t) {
this.buyBup.active = 5 != t;
this.buyBup1.active = 5 == t;
this.updateBup.active = 5 != t;
this.typeIndex = t;
this.list.removeAllChildren();
for (var e, n = i(this.objList[t]); !(e = n()).done; ) {
var a = e.value, o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("bagItem").showInfo(a, 1);
}
if (this.objList[t].length > 0) this.showDesc(this.objList[t][0]); else {
this.title.string = "未选择";
this.type.string = "未知";
this.rar.string = "未知";
this.desc.string = "暂无详情...";
this.rar.node.color = cc.color("#000000");
}
},
showDesc: function(t) {
var e = Number(t.split("_")[1]);
this.selId = e;
var n = G.getConf(G.objConf, e);
this.title.string = n.name;
this.type.string = G.VAL.OBJ["_" + n.type];
this.rar.string = G.VAL.RAR[n.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[n.qua]);
this.desc.string = n.des;
if (1 == n.type) this.desc.string += "修练效率提升：" + n.eff + "%"; else if (11 == n.type) {
var a = G.getConf(G._15Conf, n.magic), o = G.fsDesc(n.id), m = a.des.replace("eff1", o.eff1);
m = (m = m.replace("eff2", o.eff2)).replace("rate", a.rate + "%");
this.desc.string += m;
}
"" != n.stage && (this.desc.string += "【" + G.VAL.LEV[n.stage - 1] + "】可使用。");
G.showCost(this.coin, G.user.coin, n.pri);
for (var r, s = i(this.list.children); !(r = s()).done; ) r.value.getComponent("bagItem").showSel(t);
},
buyObj: function() {
var t = this, e = G.getConf(G.objConf, this.selId);
if (G.user.coin >= e.pri) if (G.r_item(this.selId + "|1")) {
G.user.coin -= e.pri;
G.showCost(this.coin, G.user.coin, e.pri);
G.save();
G.showTips("购买成功");
} else {
var i = "" == e.unique ? 1 : e.unique;
G.showTips("该物品最多持有" + i + "件");
} else G.noCoinTips(function() {
var e = G.getConf(G.objConf, t.selId);
G.showCost(t.coin, G.user.coin, e.pri);
});
},
adBuyObj: function() {
G.r_item(this.selId + "|1");
G.save();
G.showTips("获取成功");
},
updateTime: function() {
this.adCount.string = "本轮已观看广告次数：<color=#3971FF>" + G.user.adTimes + "/" + G.VAL.MAX_AD[0] + "</c>";
this.adSkip.string = "本轮免广告卷数量：<color=#16B334>" + G.user.adSkip + "</c>";
if (G.user.shopFree < 1) {
var t = G.VAL.SHOP_TIME - (G.getNowSec() - G.user.shopTime);
if (t > 0) this.time.string = "刷新冷却 " + G.getTime(t).ms; else {
G.user.shopTime = G.getNowSec();
G.user.shopFree = 1;
G.save();
this.updateFree();
}
}
},
getCoin: function() {
var t = G.getAdConf();
G.user.coin += t.money;
G.showTips("获得" + t.money + "灵石");
var e = G.getConf(G.objConf, this.selId);
G.showCost(this.coin, G.user.coin, e.pri);
G.save();
},
update: function(t) {
if (G.temp.gameStart) {
this.timeOut += t;
if (this.timeOut >= 1) {
this.timeOut = 0;
this.updateTime();
}
}
}
});
cc._RF.pop();
}, {} ]
