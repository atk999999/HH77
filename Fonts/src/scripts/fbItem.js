// Decrypted 1:1 module `fbItem` from assets/main/index.231ca.js
fbItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "ca2adMDbdFGdbe9BwmdoDcz", "fbItem");
cc.Class({
extends: cc.Component,
properties: {
img: cc.Node,
title: cc.Label,
rar: cc.Label,
buff: cc.Label,
bup: cc.Node,
id: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
G.setObj(t.id, !1);
G.getNode("Canvas/fbBox", "fbBox").js.showList();
});
},
showInfo: function(t) {
this.id = t;
var e = G.getConf(G.objConf, t);
this.title.string = e.name;
this.rar.string = G.VAL.RAR[e.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[e.qua]);
var i = "" != e.hp ? "气血+" + e.hp + " " : "", n = "" != e.at ? "攻击+" + e.at + " " : "", a = "" != e.df ? "防御+" + e.df + " " : "", o = "" != e.mp ? "法力+" + e.mp : "";
this.buff.string = i + n + a + o;
var m = "obj_" + e.sub_type + "_" + e.qua;
G.setLogo(this.img, "obj/", "obj", m, !0, 120);
}
});
cc._RF.pop();
}, {} ]
