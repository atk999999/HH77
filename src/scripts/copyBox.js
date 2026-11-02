// Decrypted 1:1 module `copyBox` from assets/main/index.231ca.js
copyBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "55e9aRvpXhJuo7GjyeyZjt/", "copyBox");
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
uItem: cc.Prefab,
cuItem: cc.Prefab,
list: cc.Node,
bupBox: cc.Node,
typeBox: cc.Node,
ugc: cc.Label
},
onLoad: function() {
var t = this;
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.showList(e);
}, [ 0 ]);
G.temp.editList = [];
},
onDisable: function() {
this.bupBox.getComponent("bupBox").jumpTo(2);
"zfb" == G.from && G.zfbAd.hideInter();
},
onEnable: function() {
G.showInter();
this.typeBox.getComponent("typeBox").showType(0);
-1 == G.from.indexOf("apk") && G.temp.editList.length < 1 && G.myHttp(G.URL.FB_LIST, {}, function(t) {
if (0 == t.errno) {
G.temp.editList = t.list;
G.temp.ugcList = t.record;
}
});
this.showCount();
},
showCount: function() {
var t = G.getItem("xx_ugc");
null == t && (t = 0);
this.ugc.string = "投稿权益：" + t + "/" + G.VAL.UGC;
if (this.ugc.node.active) for (var e, n = i(this.list.children); !(e = n()).done; ) e.value.getComponent("copyUgcItem").showVedio();
},
showList: function(t) {
void 0 === t && (t = 0);
this.ugc.node.active = 2 == t;
this.list.removeAllChildren();
if (0 == t) for (var e, n = i(G.copyConf); !(e = n()).done; ) {
var a = e.value;
if ("" == a.type) {
var o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("copyItem").showInfo(Number(a.id));
}
} else if (1 == t) for (var m, r = i(G.temp.editList); !(m = r()).done; ) {
var s = m.value, l = cc.instantiate(this.item);
l.parent = this.list;
l.getComponent("copyItem").showEdit(s);
} else if (2 == t) for (var p, d = i(G.temp.editList); !(p = d()).done; ) {
var c = p.value, u = cc.instantiate(this.cuItem);
u.parent = this.list;
u.getComponent("copyUgcItem").showInfo(c);
} else if (3 == t) for (var y, f = i(G.temp.ugcList); !(y = f()).done; ) {
var x = y.value, h = cc.instantiate(this.uItem);
h.parent = this.list;
h.getComponent("ugcItem").showInfo(x);
}
},
toCopy: function(t) {
G.save();
G.temp.fbId = t;
G.temp.fbStep = 0;
G.setOpType(0);
G.temp.fight = [ 0, 0, 0 ];
G.getNode("Canvas/gameBox/opBox", "opBox").js.resetState();
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.toFb();
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ]
