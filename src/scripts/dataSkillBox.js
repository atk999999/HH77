// Decrypted 1:1 module `dataSkillBox` from assets/main/index.231ca.js
dataSkillBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "fe537byP7FDZJMp5gpSML6r", "dataSkillBox");
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
rList: {
default: null,
visible: !1
},
sList: {
default: null,
visible: !1
}
},
onLoad: function() {
this.rList = [ [], [], [] ];
for (var t, e = i(G.skillConf); !(t = e()).done; ) {
var n = t.value;
this.rList[n.rar].push(n.id);
}
},
onEnable: function() {
this.showList();
},
showList: function() {
for (var t = [], e = 0; e < 3; e++) t[e] = G.randomArray(this.rList[e], 5);
this.sList = [];
for (var n = !1, a = 0; a < 5; a++) {
var o = G._.random(1, 100);
if (o <= 60 || n) this.sList.push(t[0].pop()); else if (o > 60 && o <= 90) this.sList.push(t[1].pop()); else if (o > 90) if (t[2].length > 0) {
n = !0;
this.sList.push(t[2].pop());
} else this.sList.push(t[1].pop());
}
this.list.removeAllChildren();
for (var m, r = i(this.sList); !(m = r()).done; ) {
var s = m.value, l = cc.instantiate(this.item);
l.parent = this.list;
l.getComponent("skillItem").setSkill(s);
}
},
addVedioSkill: function() {
for (var t, e = [], n = i(this.rList[2]); !(t = n()).done; ) {
var a = t.value;
-1 == this.sList.indexOf(a) && e.push(a);
}
var o = G.randomArray(e, 1)[0], m = cc.instantiate(this.item);
m.parent = this.list;
G.user.skill.push(o);
var r = m.getComponent("skillItem");
r.setSkill(o);
r.sel.active = !0;
return o;
}
});
cc._RF.pop();
}, {} ]
