// Decrypted 1:1 module `bagBox` from assets/main/index.231ca.js
bagBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "ac36dtuSN5F97AlnwCHPCS6", "bagBox");
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
delBup: cc.Node,
setBup: cc.Node,
useBup: cc.Node,
sellBup: cc.Node,
objState: cc.Node,
coin: cc.Label,
gfBox: cc.Node,
fbBox: cc.Node,
fsBox: cc.Node,
bupBox: cc.Node,
danCd: cc.Label,
cdCost: cc.Label,
danCdBup: cc.Node,
useFont: cc.Label,
allSellBup: cc.Node,
allSellCoin: cc.Label,
manItem: cc.Node,
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
G.setBup(this.delBup, function() {
G.setObj(t.selId, !1);
t.updateList(t.typeIndex);
});
G.setBup(this.setBup, function() {
t.toSet();
});
G.setBup(this.useBup, function() {
t.eatObj();
});
G.setBup(this.sellBup, function() {
G.playAudio("clr", 1);
G.sellObj(t.selId, 1);
if (G.user.obj["_" + t.selId]) {
var e = t.list.getChildByName("_" + t.selId);
e && e.getComponent("bagItem").updateNum();
t.showDesc("_" + t.selId);
} else t.updateList(t.typeIndex);
});
G.setBup(this.allSellBup, function() {
var e = G.getMsgBox();
e.showMsg("是否确定全部出售该材料？", function() {
t.sellAllObj();
});
e.showCancel(!0);
});
},
onEnable: function() {
this.manItem.active = G.temp.danMan;
G.temp.danMan && this.manItem.getComponent("manItem").showInfo(G.temp.danMan);
this.updateList(0);
},
onDisable: function() {
G.temp.danMan = null;
G.temp.danGfId = -1;
G.temp.danFsId = -1;
},
updateList: function(t) {
var e = this;
this.objList = G.getTypeObj();
var i = this.typeBox.getComponent("typeBox");
if (-1 == G.temp.bagType) {
G.temp.danGfId = -1;
G.temp.danFsId = -1;
i.setCb(function(t) {
e.showList(t);
});
i.showType(t);
} else {
i.setCb(function(t) {
e.showList(t);
}, [ G.temp.bagType ]);
i.showType(G.temp.bagType);
}
},
showList: function(t) {
this.typeIndex = t;
this.list.removeAllChildren();
var e = this.objList[t], n = -1;
2 == G.temp.bagType && (-1 != G.temp.danGfId ? n = 16 : -1 != G.temp.danFsId ? n = 17 : null != G.temp.danMan && (n = 3));
for (var a, o = "", m = i(e); !(a = m()).done; ) {
var r = a.value;
if (-1 != n) {
var s = Number(r.split("_")[1]), l = G.getConf(G.objConf, s);
if (l && l.type != n) continue;
if (l && "lf" == l.attr.split("|")[0] && 3 == n) continue;
}
"" == o && (o = r);
var p = cc.instantiate(this.item);
p.name = r;
p.parent = this.list;
p.getComponent("bagItem").showInfo(r);
}
if ("" != o) this.showDesc(o); else {
this.title.string = "未选择";
this.type.string = "未知";
this.rar.string = "未知";
this.desc.string = "暂无详情...";
this.rar.node.color = cc.color("#000000");
this.delBup.active = !1;
this.setBup.active = !1;
this.useBup.active = !1;
this.sellBup.active = !1;
this.allSellBup.active = !1;
}
},
showDesc: function(t) {
var e = Number(t.split("_")[1]);
this.selId = e;
var n = G.getConf(G.objConf, e);
this.objState.active = G.user.setObj[t] && G.user.setObj[t].state > 0;
this.title.string = n.name;
this.type.string = G.VAL.OBJ["_" + n.type];
this.rar.string = G.VAL.RAR[n.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[n.qua]);
this.desc.string = n.des;
if (11 == n.type) {
var a = G.getConf(G._15Conf, n.magic), o = G.fsDesc(e), m = a.des.replace("eff1", o.eff1);
m = (m = m.replace("eff2", o.eff2)).replace("rate", a.rate + "%");
this.desc.string += "施法时，" + m;
}
"" != n.stage && (this.desc.string += "【" + G.VAL.LEV[n.stage - 1] + "】可使用。");
if (1 == n.type) {
var r = G.user.setObj[t] ? G.user.setObj[t].buff : n.eff;
this.desc.string += "修练效率提升：" + r.toFixed(2) + "%";
}
this.coin.string = G.getNum(Math.ceil(n.pri * G.VAL.SELL_PER));
this.delBup.active = G.user.setObj[t] && 1 == G.user.setObj[t].state;
this.setBup.active = !(1 != n.type && 5 != n.type && 11 != n.type || G.user.setObj[t] && 0 != G.user.setObj[t].state);
this.useBup.active = -1 != [ 2, 3, 12, 13, 14, 15, 16, 17 ].indexOf(n.type);
if (this.useBup.active) {
var s = G.getAdConf(), l = Math.ceil(s.money / 3);
this.danCdBup.active = G.user.danOff[0] >= G.VAL.DAN_OFF[0];
this.cdCost.string = "灵石加速 " + G.getNum(l);
this.useFont.string = "使 用(" + G.user.danOff[0] + "/" + G.VAL.DAN_OFF[0] + ")";
}
this.sellBup.active = "" != n.pri && Number(n.pri) > 0;
for (var p, d = i(this.list.children); !(p = d()).done; ) p.value.getComponent("bagItem").showSel(t);
this.showAllCoin(this.typeIndex);
},
showAllCoin: function(t) {
this.allSellBup.active = 5 == t;
if (5 == t) {
var e = 0, i = G.getConf(G.objConf, this.selId);
"" != i.pri && (e = i.pri * G.user.obj["_" + this.selId]);
this.allSellCoin.string = G.getNum(Math.ceil(e * G.VAL.SELL_PER));
}
},
sellAllObj: function() {
G.sellObj(this.selId, G.user.obj["_" + this.selId]);
this.updateList(this.typeIndex);
G.playAudio("clr", 1);
},
toSet: function() {
var t = this, e = G.getConf(G.objConf, this.selId);
if (e) if (1 == e.type) if (-1 != G.bookId()) {
this.gfBox.getComponent("gfBox").showInfo(this.selId);
this.bupBox.getComponent("bupBox").jumpTo(0);
} else {
G.setObj(this.selId, !0);
this.updateList(this.typeIndex);
} else {
var i = G.user.setObj["_" + this.selId];
if (!i || 0 == i.state) if ((5 == e.type ? G.fbList() : G.fsList()).length < 5) {
G.setObj(this.selId, !0);
this.updateList(this.typeIndex);
} else {
var n = 5 == e.type ? "最多装备5件法宝" : "最多装备5本法术书";
G.showTips(n, function() {
5 == e.type ? t.fbBox.active = !0 : 11 == e.type && (t.fsBox.active = !0);
t.bupBox.getComponent("bupBox").jumpTo(0);
});
}
}
},
updateDanCd: function() {
this.danCd.string = "冷却 " + G.getTime(G.user.danOff[1]).ms;
if (G.user.danOff[1] < 1) {
G.user.danOff = [ 0, -1 ];
this.useFont.string = "使 用(" + G.user.danOff[0] + "/" + G.VAL.DAN_OFF[0] + ")";
this.danCdBup.active = !1;
}
},
eatObj: function() {
if (this.danCdBup.active) {
var t = G.getAdConf(), e = Math.ceil(t.money / 3);
if (G.user.coin >= e) {
G.user.coin -= e;
G.user.danOff = [ 0, -1 ];
this.useFont.string = "使 用(" + G.user.danOff[0] + "/" + G.VAL.DAN_OFF[0] + ")";
this.danCdBup.active = !1;
G.save();
} else G.noCoinTips();
} else {
G.eatObj(this.selId, 1);
if (G.user.obj["_" + this.selId]) {
var i = this.list.getChildByName("_" + this.selId);
i && i.getComponent("bagItem").updateNum();
this.showDesc("_" + this.selId);
} else this.updateList(this.typeIndex);
}
},
update: function(t) {
if (G.temp.gameStart && this.danCdBup.active) {
this.timeOut += t;
if (this.timeOut >= 1) {
this.timeOut = 0;
this.updateDanCd();
}
}
}
});
cc._RF.pop();
}, {} ]
