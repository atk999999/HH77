// Decrypted 1:1 module `relifeFbBox` from assets/main/index.231ca.js
relifeFbBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "684deTcJmtDFppHscRXQWLD", "relifeFbBox");
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
font0: cc.Node,
font1: cc.Node,
objBox: cc.Node,
bup0: cc.Node,
bup1: cc.Node,
fbList: {
default: null,
visible: !1
},
selNum: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup0, function() {
t.getFb(!1);
});
G.setBup(this.bup1, function() {
G.showVedio(function() {
t.getFb(!0);
});
});
var e = this.objBox.children, i = function(i) {
G.setBup(e[i], function() {
t.objSel(i);
});
};
for (var n in e) i(n);
},
onEnable: function() {
this.selNum = G.user.isWin ? [ 5, 3 ] : [ 3, 1 ];
this.font0.active = !G.user.isWin;
this.font1.active = G.user.isWin;
this.showInfo();
},
showInfo: function() {
if (G.user.isWin) {
this.fbList = [];
for (var t, e = [ [], [], [], [] ], n = i(G.user.relifeFb[0]); !(t = n()).done; ) {
var a = t.value, o = Number(a.split("_")[1]), m = G.getConf(G.objConf, o);
e[0].push({
id: o,
name: m.name,
sub_type: m.sub_type,
qua: m.qua,
sel: !1
});
}
for (var r, s = G._.reverse(G._.sortBy(e[0], [ "qua" ])), l = i(G.user.relifeFb[1]); !(r = l()).done; ) {
var p = r.value, d = Number(p.split("_")[1]), c = G.getConf(G.objConf, d);
e[1].push({
id: d,
name: c.name,
sub_type: c.sub_type,
qua: c.qua,
sel: !1
});
}
for (var u, y = G._.reverse(G._.sortBy(e[1], [ "qua" ])), f = i(G.user.relifeFb[3]); !(u = f()).done; ) {
var x = u.value, h = Number(x.split("_")[1]), g = G.getConf(G.objConf, h);
e[2].push({
id: h,
name: g.name,
sub_type: g.sub_type,
qua: g.qua,
sel: !1
});
}
for (var v, _ = G._.reverse(G._.sortBy(e[2], [ "qua" ])), b = i(G.user.relifeFb[4]); !(v = b()).done; ) {
var w = v.value, k = Number(w.split("_")[1]), C = G.getConf(G.objConf, k);
e[3].push({
id: k,
name: C.name,
sub_type: C.sub_type,
qua: C.qua,
sel: !1
});
}
for (var A = G._.reverse(G._.sortBy(e[3], [ "qua" ])), S = 0; S < 1; S++) s[S] && this.fbList.push(s[S]);
for (var B = 0; B < 1; B++) y[B] && this.fbList.push(y[B]);
for (var I = 0; I < 2; I++) _[I] && this.fbList.push(_[I]);
for (var N = 0; N < 1; N++) A[N] && this.fbList.push(A[N]);
} else {
for (var T, j = [], L = i(G.user.relifeFb[3]); !(T = L()).done; ) {
var M = T.value, O = Number(M.split("_")[1]), F = G.getConf(G.objConf, O);
j.push({
id: O,
name: F.name,
sub_type: F.sub_type,
qua: F.qua,
sel: !1
});
}
var E = G._.reverse(G._.sortBy(j, [ "qua" ]));
this.fbList = E;
}
for (var D = Math.min(this.fbList.length, this.selNum[0]), R = this.objBox.children, P = 0; P < D; P++) {
R[P].active = !0;
var V = R[P].getChildByName("img");
this.getImg(this.fbList[P].id, V);
R[P].getChildByName("title").getComponent(cc.Label).string = this.fbList[P].name;
R[P].getChildByName("yes").active = P < this.selNum[1];
this.fbList[P].sel = P < this.selNum[1];
}
G.user.relifeFb = [];
G.user.isWin = !1;
G.save(!0);
},
getImg: function(t, e) {
var i = G.getConf(G.objConf, t);
if (1 == i.type) {
var n = i.qua - 1;
G.setLogo(e, "obj/", "obj", "book_" + n, !0, 90);
} else if (11 == i.type) {
var a = null == G.temp.fsIcon["_" + t] ? G._.random(0, 4) : G.temp.fsIcon["_" + t];
G.temp.fsIcon["_" + t] = a;
G.setLogo(e, "obj/", "obj", "fs_" + a + "_" + i.qua, !0, 90);
} else if (5 == i.type || 7 == i.type) {
var o = "obj_" + i.sub_type + "_" + i.qua;
G.setLogo(e, "obj/", "obj", o, !0, 90);
} else if (6 == i.type || 8 == i.type) G.setLogo(e, "img/", "img", "img_38", !0, 90); else {
var m = null == G.temp.danIcon["_" + t] ? G._.random(0, 9) : G.temp.danIcon["_" + t];
G.temp.danIcon["_" + t] = m;
G.setLogo(e, "obj/", "obj", "dan_" + m, !0, 90);
}
},
objSel: function(t) {
var e = this.objBox.children;
if (1 == this.selNum[1]) {
for (var i in e) if (e[i].active) {
e[i].getChildByName("yes").active = i == t;
this.fbList[i].sel = i == t;
}
} else {
var n = 0;
for (var a in e) e[a].active && e[a].getChildByName("yes").active && n++;
if (n >= this.selNum[1] && !this.fbList[t].sel) G.showTips("最多选" + this.selNum[1] + "件"); else if (e[t].active) {
var o = e[t].getChildByName("yes");
o.active = !o.active;
this.fbList[t].sel = o.active;
}
}
},
getFb: function(t) {
for (var e = Math.min(this.fbList.length, this.selNum[0]), i = 0; i < e; i++) {
var n = this.fbList[i];
(t || n.sel) && (G.user.obj["_" + n.id] = 1);
}
G.save(!0);
this.node.active = !1;
t ? this.scheduleOnce(function() {
cc.director.loadScene("login");
}, 1) : cc.director.loadScene("login");
}
});
cc._RF.pop();
}, {} ]
