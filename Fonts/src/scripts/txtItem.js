// Decrypted 1:1 module `txtItem` from assets/main/index.231ca.js
txtItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "efe95oDWvROp5Zb5+rlrljH", "txtItem");
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
font: cc.RichText,
res: cc.Label,
action: {
default: "",
visible: !1
}
},
onLoad: function() {
this.font.maxWidth = 640 * G.VAL.SCALE;
this.res.node.width = 640 * G.VAL.SCALE;
},
showTxt: function(t, e) {
void 0 === e && (e = "end");
this.action = e;
t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(new RegExp("RED", "g"), "color=" + G.VAL.T_COLOR.RED)).replace(new RegExp("YEL", "g"), "color=" + G.VAL.T_COLOR.YEL)).replace(new RegExp("PNK", "g"), "color=" + G.VAL.T_COLOR.PNK)).replace(new RegExp("BLU", "g"), "color=" + G.VAL.T_COLOR.BLU)).replace(new RegExp("CYN", "g"), "color=" + G.VAL.T_COLOR.CYN)).replace(new RegExp("GRN", "g"), "color=" + G.VAL.T_COLOR.GRN)).replace(new RegExp("GRY", "g"), "color=" + G.VAL.T_COLOR.GRY)).replace(new RegExp("BLK", "g"), "color=" + G.VAL.T_COLOR.BLK)).replace(new RegExp("EGG", "g"), "color=" + G.VAL.T_COLOR.EGG);
var n = new RegExp("<[0-9]>|<[1-9][0-9]>|<[1-9][0-9][0-9]>|<[1-9][0-9][0-9][0-9]>|<[1-9][0-9][0-9][0-9][0-9]>|<[1-9][0-9][0-9][0-9][0-9][0-9]>", "g"), a = t.match(n);
if (a && a.length > 0) for (var o, m = i(a); !(o = m()).done; ) {
var r = o.value, s = r.replace("<", "").replace(">", "");
t = t.replace(r, "<on click='click' param='" + s + "'>");
}
t = (t = (t = t.replace(/\$S/g, G.user.name_s)).replace(/\$N/g, G.user.name_n)).replace(/\$C/g, G.user.home.name);
if ("" == G.temp.manName[0] || "" == G.temp.manName[1]) {
var l = G.getRandMan(2);
if (l.length > 1) {
G.temp.manName[0] = l[0].name;
G.temp.manName[1] = l[1].name;
}
}
t = (t = t.replace(/\$P1/g, G.temp.manName[0])).replace(/\$P2/g, G.temp.manName[1]);
var p = G.preAddMan();
if (-1 != (t = t.replace(/#pupil#/g, p.name)).indexOf("$")) {
var d = t.split("$");
for (var c in d) if (!isNaN(Number(d[c]))) {
var u = G.getTaskItem(Number(d[c]));
if (u) {
if (1 == u.type) d[c] = u.txt; else if (2 == u.type) {
var y = G.getConf(G.objConf, u.item);
d[c] = y.name;
} else if (3 == u.type) {
var f = G.getConf(G.guaiConf, u.monster);
d[c] = f.name;
}
} else d[c] = "未知";
}
t = d.join("");
}
if (-1 == G.temp.fbId) {
var x = 0 != G.temp.fight[0] ? G.temp.fight[1] : G.user.step;
if ("" != t) {
var h = G.temp.ageFlag ? "【" + G.user.year + "岁】" : "";
G.temp.ageFlag = !1;
0 == x && (G.temp.txtId = 1);
var g = [ "end", "dead", "finish" ].indexOf(e);
if ("home" == e) G.temp.txtId = 1; else if ("vedioEnd" == e) {
G.temp.txtId = 2;
G.setLogo(this.node, "img/", "img", "img_51");
} else if (-1 != [ "vedio", "dan", "tp" ].indexOf(e)) {
G.temp.txtId = 1;
G.setLogo(this.node, "img/", "img", "img_53");
} else if (0 == x && -1 != g) G.temp.txtId = 1; else if (0 == x && 0 != G.temp.fight[0]) G.setLogo(this.node, "img/", "img", "img_53"); else if ("" != h && -1 != g) G.temp.txtId = 1; else if ("" != h && -1 == g) {
G.temp.txtId = 1;
G.setLogo(this.node, "img/", "img", "img_53");
} else if (0 != x && "" == h && -1 == g) {
G.temp.txtId++;
G.setLogo(this.node, "img/", "img", "img_52");
} else if (0 != x && "" == h && -1 != g) {
G.temp.txtId++;
G.setLogo(this.node, "img/", "img", "img_51");
}
this.font.string = h + t;
this.font.node.active = !0;
}
} else if ("" != t) {
this.font.string = t;
this.font.node.active = !0;
}
G.temp.res = G.temp.res.concat(G.temp.drop);
if (G.temp.res.length > 0) {
this.res.node.active = !0;
this.res.string = G.temp.res.join("  ");
G.temp.res = [];
G.temp.drop = [];
}
var v = cc.fadeIn(.8);
this.node.runAction(v);
},
setSide: function() {
G.temp.txtId <= 1 || "home" == this.action ? G.setLogo(this.node, "img/", "img", "img_25") : G.setLogo(this.node, "img/", "img", "img_51");
},
endClick: function() {
this.font.node.getComponent("fontClick").endClick();
}
});
cc._RF.pop();
}, {} ]
