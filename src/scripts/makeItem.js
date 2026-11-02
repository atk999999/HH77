// Decrypted 1:1 module `makeItem` from assets/main/index.231ca.js
makeItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "4663bbbh5NKOYsIEI5gu2CV", "makeItem");
cc.Class({
extends: cc.Component,
properties: {
icon: cc.Node,
title: cc.Label,
rar: cc.Label,
desc: cc.Label,
resBox: cc.Node,
bup: cc.Node,
bar: cc.Node,
per: cc.Label,
type: {
default: 0,
visible: !1
},
id: {
default: null,
visible: !1
},
index: {
default: null,
visible: !1
},
cost: {
default: null,
visible: !1
},
costFlag: {
default: !0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
t.makeObj();
});
},
showInfo: function(t, e) {
var i = 0 == t ? G.ldConf[e] : G.lqConf[e], n = 0 == t ? i.pdc : i.trump;
this.type = t;
this.id = n;
this.index = e;
var a = G.getConf(G.objConf, n), o = "";
if (0 == t) {
o = null == G.temp.danIcon["_" + n] ? G._.random(0, 9) : G.temp.danIcon["_" + n];
G.temp.danIcon["_" + n] = o;
o = "dan_" + o;
} else o = "obj_" + a.sub_type + "_" + a.qua;
G.setLogo(this.icon, "obj/", "obj", o, !0, 55);
this.title.string = "【" + a.name + "】";
this.rar.string = G.VAL.RAR[a.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[a.qua]);
this.desc.string = a.des;
this.cost = 0 == t ? [ [ i.raw1, i.num1 ], [ i.raw2, i.num2 ], [ i.raw3, i.num3 ] ] : [ [ i.ore1, i.num1 ], [ i.ore2, i.num2 ], [ i.ore3, i.num3 ] ];
var m = this.resBox.children;
this.costFlag = !0;
for (var r in this.cost) if ("" != this.cost[r][0]) {
m[r].active = !0;
var s = G.getConf(G.objConf, this.cost[r][0]), l = m[r].getChildByName("title").getComponent(cc.Label), p = m[r].getChildByName("has").getComponent(cc.Label), d = m[r].getChildByName("need").getComponent(cc.Label);
l.string = s.name;
var c = G.user.obj["_" + this.cost[r][0]];
p.string = c || 0;
d.string = "/" + this.cost[r][1];
(!c || c < this.cost[r][1]) && (this.costFlag = !1);
p.node.color = Number(p.string) >= this.cost[r][1] ? cc.color("#22960E") : cc.color("#E13D3D");
}
this.updateBar();
},
makeObj: function() {
if (this.costFlag) {
for (var t in this.cost) "" != this.cost[t][0] && G.delObj(this.cost[t][0], this.cost[t][1]);
var e = G.getConf(G.ldConf, this.id, "pdc");
e || (e = G.getConf(G.lqConf, this.id, "trump"));
G.user.obj["_" + this.id] ? G.user.obj["_" + this.id] += e.num0 : G.user.obj["_" + this.id] = e.num0;
G.showTips("炼制成功");
G.save();
G.getNode("Canvas/makeBox", "makeBox").js.updateInfo(this.type);
} else G.showTips("材料不足，请前往材料【副本】或【坊市】获取。");
},
updateInfo: function() {
this.showInfo(this.type, this.index);
},
updateBar: function() {
var t = G.user.lian[this.type]["_" + this.id];
if (t) {
this.bar.parent.active = !0;
this.bup.active = !1;
var e = G.getNowSec() - t;
if (e >= G.VAL.LIAN_TIME) {
delete G.user.lian[this.type]["_" + this.id];
var i = G.getConf(G.ldConf, this.id, "pdc");
i || (i = G.getConf(G.lqConf, this.id, "trump"));
G.user.obj["_" + this.id] ? G.user.obj["_" + this.id] += i.num0 : G.user.obj["_" + this.id] = i.num0;
G.save();
this.bar.parent.active = !1;
this.bup.active = !0;
G.showTips("炼制成功");
} else {
this.per.string = Math.floor(e / G.VAL.LIAN_TIME * 100) + "%";
this.bar.scaleX = Math.min(1, e / G.VAL.LIAN_TIME);
}
}
}
});
cc._RF.pop();
}, {} ]
