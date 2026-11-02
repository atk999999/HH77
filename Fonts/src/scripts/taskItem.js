// Decrypted 1:1 module `taskItem` from assets/main/index.231ca.js
taskItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "42328WK6DRC5ImGElBDExiE", "taskItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
lev: cc.Label,
desc: cc.RichText,
gift: cc.Label,
rate: cc.Label,
time: cc.Label,
getBup: cc.Node,
manBup: cc.Node,
mImg: cc.Node,
mName: cc.Label,
mLev: cc.Label,
id: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.getBup, function() {
t.getGift();
});
G.setBup(this.manBup, function() {
t.setMan();
});
},
showInfo: function(t) {
this.id = t;
var e = G.user.home.task["_" + t], i = G.getConf(G._18Conf, t);
this.title.string = "【" + i.name + "】";
var n = G.levConf[i.lvp - 1];
this.lev.string = "弟子等级要求：" + n.stage_name + n.step_name;
var a = "$" + i.desc.split("$")[1] + "$", o = "<color=#4169E1>" + e.attr + "</>";
this.desc.string = i.desc.replace(a, o);
if (e.coin > 0) this.gift.string = "奖励：灵石 x" + e.coin; else {
var m = G.getConf(G.objConf, e.item[0]);
this.gift.string = "奖励：" + m.name + " x" + e.item[1];
}
if ("" != i.pupil) {
this.rate.string = "招新：" + i.pupil + "%";
this.rate.node.active = !0;
}
this.updateMan();
this.updateTime();
},
setMan: function() {
if (this.mImg.active) G.showTips("任务进行中"); else {
G.temp.taskId = this.id;
G.getNode("Canvas/homeBox/box/typeBox", "typeBox").js.showType(1);
G.getNode("Canvas/homeBox/box/view1", "homeView1").js.showViewType(1);
}
},
getGift: function() {
var t = G.user.home.task["_" + this.id];
t.coin > 0 ? G.user.coin += t.coin : G.r_item(t.item[0] + "|" + t.item[1]);
var e = G.getConf(G._18Conf, this.id), i = !1;
if ("" != e.pupil && G._.random(1, 100) <= e.pupil) {
var n = G.getConf(G._17Conf, G.user.home.lev, "lvc");
if (G._.size(G.user.home.man) < n.num_p) {
i = !0;
G.addMan();
}
}
var a = i ? "领取成功，新增1名弟子" : "领取成功";
G.showTips(a);
delete G.user.home.task["_" + this.id];
G.getNode("Canvas/homeBox/box/view2", "homeView2").js.updateCount();
G.save();
this.node.destroy();
},
updateMan: function() {
var t = G.user.home.task["_" + this.id];
if (-1 != t.manId) {
var e = G.user.home.man[t.manId];
G.setLogo(this.mImg, "role/", "role", "image" + e.img);
this.mName.string = e.name;
var i = G.levConf[e.lev - 1];
this.mLev.string = i.stage_name + i.step_name;
this.mLev.node.active = !0;
} else {
this.mImg.active = !1;
this.mName.string = "未指派";
this.mLev.node.active = !1;
}
},
updateTime: function() {
var t = G.user.home.task["_" + this.id], e = 0;
t.start > 0 && (e = t.time - (G.getNowSec() - t.start));
this.time.string = "时间：" + G.getTime(e).hms;
this.getBup.active = t.start > 0 && e < 1;
}
});
cc._RF.pop();
}, {} ]
