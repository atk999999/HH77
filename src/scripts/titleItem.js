// Decrypted 1:1 module `titleItem` from assets/main/index.231ca.js
titleItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "e4bdeN6KaFDVJRVPq+atH4s", "titleItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
rar: cc.Label,
desc: cc.Label,
buff: cc.Label,
sel: cc.Node,
skillId: {
default: 0,
visible: !1
}
},
onLoad: function() {},
showInfo: function(t, e) {
var i = this;
void 0 === e && (e = !1);
this.skillId = t;
var n = G.getConf(G.titleConf, t);
this.title.string = n.title;
this.desc.string = n.desc;
this.title.string = n.title;
this.rar.string = [ "玄级", "地级", "天级" ][n.rar];
this.rar.node.color = cc.color([ "#4169E1", "#6A5ACD", "#FF4500" ][n.rar]);
this.sel.active = e;
e || G.setBup(this.node, function() {
i.setSel(i.skillId);
});
var a = [];
for (var o in G.VAL.KEY_TITLE) if (n[o] && "" != n[o]) {
var m = Number(n[o]), r = m > 0 ? "+" : "", s = "";
"hp" != o && "at" != o && "df" != o && "mp" != o || (s = "%");
a.push(G.VAL.KEY_TITLE[o] + r + m + s);
}
this.buff.node.active = a.length > 0;
this.buff.string = a.join("  ");
},
setSel: function(t) {
if (t == this.skillId) {
if (this.sel.active) {
var e = G.user.title.indexOf(this.skillId);
G.user.title.splice(e, 1);
this.sel.active = !1;
} else if (G.user.title.length < 2) {
if (-1 == G.user.title.indexOf(this.skillId)) {
G.user.title.push(this.skillId);
this.sel.active = !0;
}
} else G.showTips("最多选择2个");
G.getNode("Canvas/dataBox", "dataBox").js.updateCount();
}
}
});
cc._RF.pop();
}, {} ]
