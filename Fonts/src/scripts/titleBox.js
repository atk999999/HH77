// Decrypted 1:1 module `titleBox` from assets/main/index.231ca.js
titleBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "c4b283eZLZKTJVWLLPPN7Oz", "titleBox");
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
tips: cc.Node,
type: 0
},
onLoad: function() {
G.temp.tList = [];
},
onEnable: function() {
1 == this.type && G.showBanner();
this.showList();
},
onDisable: function() {
G.closeBanner();
},
showList: function() {
this.list.removeAllChildren();
var t = 0 == this.type ? G.userTitle() : G.user.title;
0 == this.type ? G.temp.tList = t : G.temp.tList = [];
for (var e, n = i(t); !(e = n()).done; ) {
var a = e.value, o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("titleItem").showInfo(a, this.type > 0);
}
this.count && (this.count.string = "数量：" + G.user.title.length + "/" + G.titleConf.length);
if (0 == this.type) {
this.tips && (this.tips.active = t.length < 1);
G.user.title = [];
}
}
});
cc._RF.pop();
}, {} ]
