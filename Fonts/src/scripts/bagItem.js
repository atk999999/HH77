// Decrypted 1:1 module `bagItem` from assets/main/index.231ca.js
bagItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "abf8a/ZMDNNkL2ZbmIjrakT", "bagItem");
cc.Class({
extends: cc.Component,
properties: {
img: cc.Node,
title: cc.Label,
num: cc.Label,
sel: cc.Node,
set: cc.Node,
key: {
default: 0,
visible: !1
},
type: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.node, function() {
t.showDesc();
});
},
showInfo: function(t, e) {
void 0 === e && (e = 0);
this.type = e;
this.key = t;
var i = t.split("_")[1], n = G.getConf(G.objConf, i);
this.title.string = n.name;
if (1 == n.type) {
var a = n.qua - 1;
G.setLogo(this.img, "obj/", "obj", "book_" + a, !0, 70);
} else if (11 == n.type) {
var o = null == G.temp.fsIcon["_" + i] ? G._.random(0, 4) : G.temp.fsIcon["_" + i];
G.temp.fsIcon["_" + i] = o;
G.setLogo(this.img, "obj/", "obj", "fs_" + o + "_" + n.qua, !0, 70);
} else if (5 == n.type || 7 == n.type) {
var m = "obj_" + n.sub_type + "_" + n.qua;
G.setLogo(this.img, "obj/", "obj", m, !0, 70);
} else if (6 == n.type || 8 == n.type) ; else {
var r = null == G.temp.danIcon["_" + i] ? G._.random(0, 9) : G.temp.danIcon["_" + i];
G.temp.danIcon["_" + i] = r;
G.setLogo(this.img, "obj/", "obj", "dan_" + r, !0, 70);
}
var s = 0 == e ? G.user.obj[t] : 1;
this.num.string = "x" + s;
this.set.active = 0 == e && G.user.setObj[t] && 1 == G.user.setObj[t].state;
},
showDesc: function() {
0 == this.type ? G.getNode("Canvas/bagBox", "bagBox").js.showDesc(this.key) : G.getNode("Canvas/shopBox", "shopBox").js.showDesc(this.key);
},
showSel: function(t) {
this.sel.active = t == this.key;
},
updateNum: function() {
this.num.string = "x" + G.user.obj[this.key];
}
});
cc._RF.pop();
}, {} ]
