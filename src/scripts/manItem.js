// Decrypted 1:1 module `manItem` from assets/main/index.231ca.js
manItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "f299etXMn9K3rhegTk8JTm3", "manItem");
cc.Class({
extends: cc.Component,
properties: {
sel: cc.Node,
img: cc.Node,
title: cc.Label,
key: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.node, function() {
var e = G.getNode("Canvas/homeBox/box/view1", "homeView1");
e.js.showDesc(t.key);
e.js.updateLev();
});
},
showInfo: function(t) {
this.key = t;
var e = G.user.home.man[t];
this.title.string = e.name;
G.setLogo(this.img, "role/", "role", "image" + e.img);
},
showSel: function(t) {
this.sel.active = this.key == t;
}
});
cc._RF.pop();
}, {} ]
