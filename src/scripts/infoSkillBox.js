// Decrypted 1:1 module `infoSkillBox` from assets/main/index.231ca.js
infoSkillBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "cd1b0N8LdxHLYSLU1kUfu+Z", "infoSkillBox");
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
list: cc.Node
},
onLoad: function() {
this.showList();
},
onEnable: function() {
G.showBanner();
},
onDisable: function() {
G.closeBanner();
},
showList: function() {
for (var t, e = i(G.user.skill); !(t = e()).done; ) {
var n = t.value, a = cc.instantiate(this.item);
a.parent = this.list;
a.getComponent("skillItem").setSkill(n, !0);
}
}
});
cc._RF.pop();
}, {} ]
