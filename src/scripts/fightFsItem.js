// Decrypted 1:1 module `fightFsItem` from assets/main/index.231ca.js
fightFsItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "a7f835MpzpCk4wrDZT+Fyza", "fightFsItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
img: cc.Node,
cdBar: cc.Node,
id: {
default: 0,
visible: !1
},
cd: {
default: 0,
visible: !1
},
conf: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this, e = G.getNode("Canvas/fightBox", "fightBox");
G.setBup(this.node, function() {
if (t.cd == t.conf.CD) {
if (e.js.fsEff(!0, t.id)) {
t.cd = 0;
t.cdBar.scaleX = 0;
G.playAudio("fs", 1);
}
} else G.showTips("冷却中...");
});
},
showInfo: function(t) {
this.id = t;
var e = G.user.setObj["_" + t];
this.conf = G.getConf(G._15Conf, e.fsId);
this.title.string = this.conf.name;
var i = null == G.temp.fsIcon["_" + t] ? G._.random(0, 4) : G.temp.fsIcon["_" + t];
G.temp.fsIcon["_" + t] = i;
G.setLogo(this.img, "obj/", "obj", "fs_" + i + "_" + this.conf.qua, !0, 90);
this.cd = 0;
this.updateBar();
},
updateBar: function() {
this.cdBar.parent.active = "" != this.conf.CD;
if ("" != this.conf.CD) {
this.cd = Math.min(this.conf.CD, this.cd + 1);
this.cdBar.scaleX = this.cd / this.conf.CD;
}
}
});
cc._RF.pop();
}, {} ]
