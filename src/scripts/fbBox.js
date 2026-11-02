// Decrypted 1:1 module `fbBox` from assets/main/index.231ca.js
fbBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "bbd896qbfdAzKNiaQ4eSZbQ", "fbBox");
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
buff: cc.Label,
bupBox: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.addBup, function() {
G.temp.bagType = 3;
t.bupBox.getComponent("bupBox").jumpTo(1);
t.node.active = !1;
});
},
onEnable: function() {
this.showList();
this.showBuff();
},
showList: function() {
this.list.removeAllChildren();
for (var t, e = G.fbList(), n = i(e); !(t = n()).done; ) {
var a = t.value, o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("fbItem").showInfo(a);
}
this.addBup.active = e.length < 5;
},
showBuff: function() {
G.fbBuff();
var t = "气血+" + G.user.fbSkill[0] + "、攻击+" + G.user.fbSkill[1] + "、防御+" + G.user.fbSkill[2];
this.buff.string = t;
}
});
cc._RF.pop();
}, {} ]
