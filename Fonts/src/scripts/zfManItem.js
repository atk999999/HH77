// Decrypted 1:1 module `zfManItem` from assets/main/index.231ca.js
zfManItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "b80a36OHWVK3Z2++ICH51eg", "zfManItem");
cc.Class({
extends: cc.Component,
properties: {
mask: cc.Node,
img: cc.Node,
del: cc.Node,
title: cc.Label,
lev: cc.Label,
key: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.mask, function() {
t.key ? t.del.active = !0 : t.setMan();
});
G.setBup(this.del, function() {
t.delMan();
});
},
reset: function() {
this.img.active = !1;
this.title.node.active = !1;
this.lev.node.active = !1;
this.del.active = !1;
this.key = null;
},
showInfo: function(t) {
if (t) {
this.key = t;
var e = G.user.home.man[t];
this.title.string = e.name;
this.title.node.active = !0;
G.setLogo(this.img, "role/", "role", "image" + e.img);
var i = G.levConf[e.lev - 1];
this.lev.string = i.stage_name + i.step_name;
this.lev.node.active = !0;
} else this.reset();
},
delMan: function() {
var t = G.user.home.zf.indexOf(this.key);
G.user.home.zf.splice(t, 1);
this.reset();
G.save();
var e = G.getNode("Canvas/homeBox/box/view3", "homeView3");
e.js.showMan();
e.js.showFight();
},
setMan: function() {
G.getNode("Canvas/homeBox/box/typeBox", "typeBox").js.showType(1);
G.getNode("Canvas/homeBox/box/view1", "homeView1").js.showViewType(2);
}
});
cc._RF.pop();
}, {} ]
