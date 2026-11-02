// Decrypted 1:1 module `gfBox` from assets/main/index.231ca.js
gfBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "cecb8gRmAdCQpWR7k9ZTLCR", "gfBox");
cc.Class({
extends: cc.Component,
properties: {
changeBup: cc.Node,
mergeBup: cc.Node,
selBup: cc.Node,
danBup: cc.Node,
bupBox: cc.Node,
infoBox: cc.Node,
gjBup: cc.Node,
expBar: cc.Node,
expTime: cc.Label,
adBup: cc.Node,
adFont: cc.Label,
cost: cc.Node,
book: [ cc.Node ],
title: [ cc.Label ],
rar: [ cc.Label ],
lev: [ cc.Label ],
exp: [ cc.Label ],
desc0: [ cc.Label ],
desc1: [ cc.Label ],
hp: [ cc.Label ],
df: [ cc.Label ],
mp: [ cc.Label ],
newId: {
default: -1,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.changeBup, function() {
G.setBook(0, t.newId);
t.showInfo(-1);
});
G.setBup(this.mergeBup, function() {
t.mergeBook();
});
G.setBup(this.selBup, function() {
G.temp.bagType = 0;
t.bupBox.getComponent("bupBox").jumpTo(1);
t.node.active = !1;
});
G.setBup(this.danBup, function() {
G.temp.danGfId = G.bookId();
if (-1 != G.temp.danGfId) {
G.temp.danFsId = -1;
if (G.getTypeObj(16).length > 0) {
G.temp.bagType = 2;
t.bupBox.getComponent("bupBox").jumpTo(1);
} else {
G.temp.bagType = -1;
t.bupBox.getComponent("bupBox").jumpTo(3);
var e = G.getNode("Canvas/shopBox", "shopBox");
e.js && e.js.updateList(2);
}
t.node.active = !1;
} else G.showTips("未装备功法");
});
G.setBup(this.gjBup, function() {
G.showInter();
t.gjBup.active = !1;
t.adBup.parent.active = !0;
G.user.gfTime = G.getNowSec();
});
G.setBup(this.adBup, function() {
var e = G.getAdConf();
if (G.user.coin >= e.money) {
G.user.coin -= e.money;
G.user.gfPei++;
G.user.gfPei > 1 && (t.adBup.active = !1);
G.save();
} else G.noCoinTips(function() {
var e = G.getAdConf();
G.showCost(t.cost, G.user.coin, e.money, "灵石 ");
});
});
G.setTimeCb({
path: "Canvas/gfBox",
js: "gfBox",
cb: "updateBar",
time: [ 0, 1 ]
});
},
showInfo: function(t) {
void 0 === t && (t = -1);
this.newId = t;
var e = G.bookId(), i = G.getConf(G.objConf, e);
this.book[0].active = -1 != e;
this.gjBup.active = -1 != e;
var n = null;
if (-1 != e) {
n = G.user.setObj["_" + e];
var a = i.qua - 1;
G.setLogo(this.book[0], "obj/", "obj", "book_" + a);
}
this.title[0].string = -1 == e ? "未选择" : i.name;
this.rar[0].string = "品质：" + (-1 == e ? "未知" : G.VAL.RAR[i.qua]);
this.rar[0].node.color = -1 == e ? cc.color("#000000") : cc.color(G.VAL.R_COLOR[i.qua]);
this.lev[0].string = -1 == e ? "等级：0" : "等级：" + n.lev;
var o = -1 == e ? 0 : 100 * i.qua * Math.pow(G.user.setObj["_" + e].lev, 2);
this.exp[0].string = -1 == e ? "经验：0" : "经验：" + n.exp + "/" + o;
this.desc0[0].string = -1 == e ? "修练效率：0" : "修练效率：+" + n.buff.toFixed(2) + "%";
this.desc1[0].string = -1 == e ? "暂无" : i.des;
var m = G.bookBuff(e);
this.hp[0].string = -1 == e ? "气血：0" : "气血：+" + m[0];
this.df[0].string = -1 == e ? "防御：0" : "防御：+" + m[2];
this.mp[0].string = -1 == e ? "法力：0" : "法力：+" + m[3];
var r = G.getConf(G.objConf, t);
this.book[1].active = -1 != t;
if (-1 != t) {
var s = r.qua - 1;
G.setLogo(this.book[1], "obj/", "obj", "book_" + s);
}
this.title[1].string = -1 == t ? "未选择" : r.name;
this.rar[1].string = "品质：" + (-1 == t ? "未知" : G.VAL.RAR[r.qua]);
this.rar[1].node.color = -1 == t ? cc.color("#000000") : cc.color(G.VAL.R_COLOR[r.qua]);
this.lev[1].node.parent.active = -1 != t;
this.exp[1].node.parent.active = -1 != t;
this.hp[1].node.parent.active = -1 != t;
var l = -1 == t ? 0 : r.eff, p = 1, d = 0;
if (-1 != t && G.user.setObj["_" + t]) {
l = G.user.setObj["_" + t].buff;
p = G.user.setObj["_" + t].lev;
d = G.user.setObj["_" + t].exp;
}
this.lev[1].string = "等级：" + p;
var c = -1 == t ? 0 : 100 * r.qua * Math.pow(p, 2);
this.exp[1].string = -1 == t ? "经验：0" : "经验：" + d + "/" + c;
this.desc0[1].string = -1 == t ? "修练效率：0" : "修练效率：+" + l.toFixed(2) + "%";
this.desc1[1].string = -1 == t ? "暂无" : r.des;
var u = G.bookBuff(t);
this.hp[1].string = -1 == t ? "气血：0" : "气血：+" + u[0];
this.df[1].string = -1 == t ? "防御：0" : "防御：+" + u[2];
this.mp[1].string = -1 == t ? "法力：0" : "法力：+" + u[3];
this.showGjInfo();
this.node.active = !0;
this.infoBox.getComponent("infoBox").updateInfo();
},
showGjInfo: function() {
var t = G.getAdConf();
G.showCost(this.cost, G.user.coin, t.money, "灵石 ");
var e = G.bookId();
this.adBup.parent.active = -1 != G.user.gfTime;
this.gjBup.active = -1 != e && -1 == G.user.gfTime;
this.adFont.string = G.user.gfPei + 1 + "倍经验";
this.adBup.active = G.user.gfPei < 2;
},
mergeBook: function() {
var t = this, e = G.bookId();
if (-1 != e && -1 != this.newId) {
var i = G.getConf(G.objConf, e);
if (G.getConf(G.objConf, this.newId).qua > i.qua) G.showTips("低阶功法无法融合高阶功法"); else {
G.showInter();
var n = G.getMsgBox();
n.showMsg("是否确定融合功法？", function() {
G.setBook(1, t.newId);
t.showInfo(-1);
G.playAudio("clr", 1);
G.showTips("融合成功");
});
n.showCancel(!0);
}
} else G.showTips("未选择融合功法");
},
updateBar: function() {
if (-1 != G.user.gfTime) {
var t = Math.min(G.VAL.GF_GJ_TIME, G.getNowSec() - G.user.gfTime);
this.expTime.string = "挂机倒计时 " + G.getTime(G.VAL.GF_GJ_TIME - t).hms;
this.expBar.scaleX = t / G.VAL.GF_GJ_TIME;
G.addBookExp(3, G.VAL.GF_GJ_EXP * G.user.gfPei);
if (t == G.VAL.GF_GJ_TIME) {
G.user.gfTime = -1;
G.user.gfPei = 1;
this.showGjInfo();
}
this.node.active && this.showInfo(this.newId);
} else this.showGjInfo();
}
});
cc._RF.pop();
}, {} ]
