// Decrypted 1:1 module `copyUgcItem` from assets/main/index.231ca.js
copyUgcItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "42f83z1+w1G4q/DcbU4luEV", "copyUgcItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
desc: cc.Label,
bup: cc.Node,
vedio: cc.Node,
info: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
t.toEdit();
});
},
showInfo: function(t) {
this.info = t;
this.title.string = t.title;
this.desc.string = t.desc;
this.showVedio();
},
showVedio: function() {
var t = G.getItem("xx_ugc");
this.vedio.active = t < 1;
},
toEdit: function() {
var t = this, e = G.getItem("xx_ugc");
if (e && e > 0) {
e = Number(e) - 1;
this.vedio.active = e < 1;
G.setItem("xx_ugc", e);
G.temp.editInfo = this.info;
G.getNode("Canvas/copyBox", "copyBox").js.showCount();
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.showUgc();
} else G.showVedio(function() {
G.setItem("xx_ugc", G.VAL.UGC);
G.getNode("Canvas/copyBox", "copyBox").js.showCount();
t.vedio.active = !1;
});
}
});
cc._RF.pop();
}, {} ]
