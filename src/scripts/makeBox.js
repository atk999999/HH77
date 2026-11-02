// Decrypted 1:1 module `makeBox` from assets/main/index.231ca.js
makeBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "06078H5xgRFHqqGDbkyUT3V", "makeBox");
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
list0: cc.Node,
list1: cc.Node,
typeBox: cc.Node,
reBup: cc.Node,
time: cc.Label,
updateFont: cc.Label
},
onLoad: function() {
var t = this;
G.setTimeCb({
path: "Canvas/makeBox",
js: "makeBox",
cb: "updateTime",
time: [ 0, 1 ]
});
G.setBup(this.reBup, function() {
if (G.user.makeFree > 0) {
G.user.makeFree--;
G.user.makeTime = 0;
G.updateMake();
} else {
var e = G.getAdConf(), i = Math.ceil(e.money / 2);
if (G.user.coin >= i) {
G.user.coin -= i;
G.user.makeFree = 1;
} else G.noCoinTips();
}
t.updateFree();
G.save();
});
this.showList(0);
this.showList(1);
},
start: function() {},
onEnable: function() {
var t = this, e = [];
G.user.var.alch > 0 && e.push(0);
G.user.var.cast > 0 && e.push(1);
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.updateInfo(e);
}, e);
this.typeBox.getComponent("typeBox").showType(e[0]);
this.time.node.active = G.user.makeFree < 1;
G.user.makeList[0].length < 1 && G.user.makeList[1].length < 1 && G.updateMake();
this.updateTime();
this.updateFree();
},
showList: function(t) {
0 == t ? this.list0.removeAllChildren() : this.list1.removeAllChildren();
var e = G.user.makeList[t];
for (var i in e) {
var n = cc.instantiate(this.item);
n.parent = 0 == t ? this.list0 : this.list1;
n.getComponent("makeItem").showInfo(t, e[i]);
}
},
checkCost: function(t, e) {
var i = 0 == t ? G.ldConf[e] : G.lqConf[e], n = 0 == t ? [ [ i.raw1, i.num1 ], [ i.raw2, i.num2 ], [ i.raw3, i.num3 ] ] : [ [ i.ore1, i.num1 ], [ i.ore2, i.num2 ], [ i.ore3, i.num3 ] ];
for (var a in n) if ("" != n[a][0]) {
var o = G.user.obj["_" + n[a][0]];
if (!o || o < n[a][1]) return !1;
}
return !0;
},
updateBar: function() {
for (var t, e = i(this.list0.children); !(t = e()).done; ) t.value.getComponent("makeItem").updateBar();
for (var n, a = i(this.list1.children); !(n = a()).done; ) n.value.getComponent("makeItem").updateBar();
this.updateTime();
},
updateInfo: function(t) {
this.list0.parent.active = 0 == t;
this.list1.parent.active = 1 == t;
for (var e, n = i(this.list0.children); !(e = n()).done; ) e.value.getComponent("makeItem").updateInfo();
for (var a, o = i(this.list1.children); !(a = o()).done; ) a.value.getComponent("makeItem").updateInfo();
},
updateFree: function() {
var t = G.getAdConf(), e = Math.ceil(t.money / 2);
this.updateFont.string = G.user.makeFree < 1 ? "灵石加速 " + G.getNum(e) : "刷 新(" + G.user.makeFree + ")";
this.time.node.active = G.user.makeFree < 1;
},
updateTime: function() {
if (G.user.makeFree < 1) {
var t = G.VAL.MAKE_TIME - (G.getNowSec() - G.user.makeTime);
if (t > 0) this.time.string = "刷新冷却 " + G.getTime(t).ms; else {
G.user.makeTime = G.getNowSec();
G.user.makeFree = 1;
G.save();
this.updateFree();
}
}
}
});
cc._RF.pop();
}, {} ]
