// Decrypted 1:1 module `fsListBox` from assets/main/index.231ca.js
fsListBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "135f5xS1FhFVoX2D1WbLVEK", "fsListBox");
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
item: cc.Prefab
},
onLoad: function() {
G.setTimeCb({
path: "Canvas/fightBox/bg/fsListBox",
js: "fsListBox",
cb: "updateCd",
time: [ 0, 1 ]
});
},
onEnable: function() {
this.showList();
},
showList: function() {
this.node.removeAllChildren();
for (var t, e = i(G.fsList()); !(t = e()).done; ) {
var n = t.value, a = G.user.setObj["_" + n];
if ("" != G.getConf(G._15Conf, a.fsId).CD) {
var o = cc.instantiate(this.item);
o.parent = this.node;
o.getComponent("fightFsItem").showInfo(n);
}
}
},
updateCd: function() {
for (var t, e = i(this.node.children); !(t = e()).done; ) t.value.getComponent("fightFsItem").updateBar();
}
});
cc._RF.pop();
}, {} ]
