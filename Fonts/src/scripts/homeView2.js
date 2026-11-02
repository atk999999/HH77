// Decrypted 1:1 module `homeView2` from assets/main/index.231ca.js
homeView2: [ function(t, e) {
"use strict";
cc._RF.push(e, "0a8f7xu+TBLeI45ip0lKozI", "homeView2");
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
addBup: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.addBup, function() {
t.addTask();
});
G.setTimeCb({
path: "Canvas/homeBox/box/view2",
js: "homeView2",
cb: "updateTime",
time: [ 0, 1 ]
});
},
onEnable: function() {
this.showList();
},
showList: function() {
var t = G.user.home.task;
this.list.removeAllChildren();
for (var e in t) {
var i = cc.instantiate(this.item);
i.parent = this.list;
i.getComponent("taskItem").showInfo(e.replace("_", ""));
}
this.updateCount();
},
addTask: function() {
var t = this, e = this.list.children, i = G.getConf(G._17Conf, G.user.home.lev, "lvc");
e.length < i.num_t ? G.showVedio(function() {
for (var n = i.num_t - e.length, a = 0; a < n; a++) {
var o = G.addHomeTask();
if (o) {
var m = cc.instantiate(t.item);
m.parent = t.list;
m.getComponent("taskItem").showInfo(o);
t.updateCount();
}
}
}) : G.showTips("已达宗门任务上限");
},
updateCount: function() {
var t = 0, e = 0;
for (var i in G.user.home.task) {
t++;
-1 != G.user.home.task[i].manId && e++;
}
this.count.string = "任务数量：" + e + "/" + t;
},
updateTime: function() {
for (var t, e = i(this.list.children); !(t = e()).done; ) t.value.getComponent("taskItem").updateTime();
}
});
cc._RF.pop();
}, {} ]
