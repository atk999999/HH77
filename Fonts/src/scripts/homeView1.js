// Decrypted 1:1 module `homeView1` from assets/main/index.231ca.js
homeView1: [ function(t, e) {
"use strict";
cc._RF.push(e, "691548m7vVD1pg1fGgvHdMN", "homeView1");
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
count: cc.Label,
addMan: cc.Node,
dImg: cc.Node,
dTitle: cc.Label,
dLev: cc.Label,
dData0: cc.Label,
dData1: cc.Label,
dData2: cc.Label,
exp: cc.Node,
expCost: cc.Node,
exp10Cost: cc.Node,
expBup: cc.Node,
exp10Bup: cc.Node,
danBup: cc.Node,
taskBup: cc.Node,
zfBup: cc.Node,
state: cc.Label,
expBar: cc.Node,
dVal: [ cc.Label ],
manKey: {
default: null,
visible: !1
},
viewType: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.addMan, function() {
t.addMaxMan();
});
G.setBup(this.danBup, function() {
t.eatDan();
});
G.setBup(this.expBup, function() {
t.addExp();
});
G.setBup(this.exp10Bup, function() {
t.addExp(10);
});
G.setBup(this.taskBup, function() {
t.setTask();
});
G.setBup(this.zfBup, function() {
t.setZf();
});
},
onEnable: function() {
this.manKey = null;
this.updateCount();
this.showList();
},
addMaxMan: function() {
var t = this, e = G.getConf(G._17Conf, G.user.home.lev, "lvc");
G.user.home.maxMan < e.num_p ? G.showVedio(function() {
G.user.home.maxMan++;
t.updateCount();
G.showTips("扩招成功");
}) : G.showTips("已达上限，请提升宗门等级");
},
updateCount: function() {
var t = G.getConf(G._17Conf, G.user.home.lev, "lvc"), e = G._.size(G.user.home.man);
G.user.home.maxMan = Math.min(t.num_p, G.user.home.maxMan);
this.count.string = "弟子数量：" + e + "/" + t.num_p;
},
showList: function() {
this.list.removeAllChildren();
for (var t in G.user.home.man) {
var e = cc.instantiate(this.item);
e.parent = this.list;
e.getComponent("manItem").showInfo(t);
if (!this.manKey) {
this.showDesc(t);
this.updateLev();
}
}
},
showDesc: function(t) {
this.manKey = t;
for (var e, n = i(this.list.children); !(e = n()).done; ) e.value.getComponent("manItem").showSel(t);
var a = G.user.home.man[t];
this.dTitle.string = a.name;
G.setLogo(this.dImg, "role/", "role", "image" + a.img);
var o = G.levConf[a.lev - 1];
this.dLev.string = o.stage_name + o.step_name;
var m = G.getManData(t);
for (var r in this.dVal) this.dVal[r].string = G.getNum(m[r]);
this.dData0.string = "根骨：" + a.data0;
this.dData1.string = "悟性：" + a.data1;
this.dData2.string = "战力：" + m[4];
G.showCost(this.exp, a.exp, o.exp);
G.showCost(this.expCost, G.user.coin, G.VAL.MAN_EXP_COST[0], "灵石 ");
G.showCost(this.exp10Cost, G.user.coin, 10 * G.VAL.MAN_EXP_COST[0], "灵石 ");
this.expBar.scaleX = Math.min(1, a.exp / o.exp);
this.showViewType(this.viewType);
},
addExp: function(t) {
var e = this;
void 0 === t && (t = 1);
if (G.user.coin >= G.VAL.MAN_EXP_COST[0] * t) {
G.user.coin -= G.VAL.MAN_EXP_COST[0] * t;
G.user.home.man[this.manKey].exp += G.VAL.MAN_EXP_COST[1] * t;
this.showDesc(this.manKey);
G.showTips("灌注成功", function() {
e.updateLev(!0);
});
} else G.noCoinTips(function() {
G.showCost(e.expCost, G.user.coin, G.VAL.MAN_EXP_COST[0], "灵石 ");
G.showCost(e.exp10Cost, G.user.coin, G.VAL.MAN_EXP_COST[0] * t, "灵石 ");
});
},
updateLev: function(t) {
void 0 === t && (t = !1);
for (var e = !1; ;) {
var i = G.user.home.man[this.manKey], n = G.levConf[i.lev - 1];
if (!(i.exp >= n.exp)) break;
i.lev = Math.min(63, i.lev + 1);
i.exp -= n.exp;
e = !0;
}
if (e) {
this.showDesc(this.manKey);
t && G.showTips("修为提升");
G.save();
}
},
checkState: function() {
var t = "";
for (var e in G.user.home.task) if (G.user.home.task[e].manId == this.manKey) {
t = "任务中";
break;
}
-1 != G.user.home.zf.indexOf(this.manKey) && (t = "上阵中");
this.state.node.active = "" != t;
this.state.string = t;
},
showViewType: function(t) {
this.viewType = t;
this.expBup.active = 0 == t;
this.exp10Bup.active = 0 == t;
this.danBup.active = 0 == t;
this.taskBup.active = !1;
this.zfBup.active = !1;
this.checkState();
if (t > 0 && !this.state.node.active) {
this.taskBup.active = 1 == t;
this.zfBup.active = 2 == t;
}
},
setTask: function() {
var t = G.user.home.task["_" + G.temp.taskId], e = G.getConf(G._18Conf, G.temp.taskId);
if (G.user.home.man[this.manKey].lev < e.lvp) G.showTips("弟子等级不足"); else {
if (t) {
t.manId = this.manKey;
t.start = G.getNowSec();
G.save();
}
this.showViewType(0);
G.getNode("Canvas/homeBox/box/typeBox", "typeBox").js.showType(2);
}
},
setZf: function() {
if (-1 == G.user.home.zf.indexOf(this.manKey)) {
G.user.home.zf.push(this.manKey);
G.save();
}
this.showViewType(0);
G.getNode("Canvas/homeBox/box/typeBox", "typeBox").js.showType(3);
},
eatDan: function() {
G.temp.danMan = this.manKey;
G.temp.bagType = 2;
G.getNode("Canvas/bupBox", "bupBox").js.jumpTo(1);
cc.find("Canvas/homeBox").active = !1;
}
});
cc._RF.pop();
}, {} ]
