// Decrypted 1:1 module `fsItem` from assets/main/index.231ca.js
fsItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "0d9b95z9uVN1LdRtqLnlFn+", "fsItem");
cc.Class({
extends: cc.Component,
properties: {
img: cc.Node,
title: cc.Label,
lev: cc.Label,
exp: cc.Label,
rar: cc.Label,
type: cc.Label,
mp: cc.Label,
cd: cc.Label,
bup: cc.Node,
danBup: cc.Node,
id: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this, e = G.getNode("Canvas/fsBox", "fsBox"), i = G.getNode("Canvas/bupBox", "bupBox");
G.setBup(this.danBup, function() {
G.temp.danFsId = t.id;
G.temp.danGfId = -1;
if (G.getTypeObj(17).length > 0) {
G.temp.bagType = 2;
i.js.jumpTo(1);
} else {
G.temp.bagType = -1;
i.js.jumpTo(3);
var n = G.getNode("Canvas/shopBox", "shopBox");
n.js && n.js.updateList(2);
}
e.node.active = !1;
});
G.setBup(this.bup, function() {
G.setObj(t.id, !1);
e.js.showList();
});
this.node.on(cc.Node.EventType.TOUCH_END, function(i) {
e.js.showBuff(t.id);
i.stopPropagation();
});
},
showInfo: function(t) {
this.id = t;
var e = G.getConf(G.objConf, t);
this.title.string = e.name;
this.rar.string = G.VAL.RAR[e.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[e.qua]);
var i = G.user.setObj["_" + t];
this.lev.string = "等级：" + i.lev;
var n = G.getConf(G._15Conf, i.fsId), a = n.eff1.split("|");
this.type.string = "类型：" + G.VAL.FS_TYPE[a[0]];
if ("" != n.eff2) {
var o = n.eff2.split("|");
this.type.string += "、" + G.VAL.FS_TYPE[o[0]];
}
var m = 100 * e.qua * Math.pow(i.lev, 2);
this.exp.string = "经验：" + i.exp + "/" + m;
this.mp.string = "法耗：" + ("" == n.mp ? "--" : n.mp);
this.cd.string = "冷却：" + ("" == n.CD ? "--" : n.CD);
var r = null == G.temp.fsIcon["_" + t] ? G._.random(0, 4) : G.temp.fsIcon["_" + t];
G.temp.fsIcon["_" + t] = r;
G.setLogo(this.img, "obj/", "obj", "fs_" + r + "_" + e.qua, !0, 60);
}
});
cc._RF.pop();
}, {} ]
