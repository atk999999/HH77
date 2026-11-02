// Decrypted 1:1 module `homeView0` from assets/main/index.231ca.js
homeView0: [ function(t, e) {
"use strict";
cc._RF.push(e, "9d25ecxsi1FQb8F/FwX4Cb4", "homeView0");
cc.Class({
extends: cc.Component,
properties: {
homeName: cc.Label,
homeBup: cc.Node,
vedioBup: cc.Node,
bupFont: cc.Label,
lev: cc.Label,
levBup: cc.Node,
upCost: cc.Node,
levTitle0: cc.Label,
levTitle1: cc.Label,
descBox0: cc.Node,
descBox1: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.homeBup, function() {
t.vedioBup.active ? G.showVedio(function() {
t.updateName();
}) : t.updateName();
});
G.setBup(this.levBup, function() {
t.upLev();
});
},
onEnable: function() {
this.showInfo();
},
showInfo: function() {
this.homeName.string = G.user.home.name;
this.lev.string = "等级：" + G.user.home.lev;
this.levTitle0.string = G.user.home.lev + "级宗门";
var t = Math.min(9, G.user.home.lev + 1);
this.levTitle1.string = t + "级宗门";
this.descBox1.parent.active = G.user.home.lev < 9;
this.levBup.active = G.user.home.lev < 9;
var e = G.getConf(G._17Conf, G.user.home.lev, "lvc");
e && "" != e.cost ? G.showCost(this.upCost, G.user.coin, e.cost, "灵石 ") : this.levBup.active = !1;
this.vedioBup.active = G.user.home.nameTimes < 1;
this.showDesc(0, G.user.home.lev);
this.showDesc(1, t);
this.bupFont.string = G.user.home.nameTimes < 1 ? "更 换" : "更 换(" + G.user.home.nameTimes + ")";
},
updateName: function() {
G.user.home.nameTimes--;
G.user.home.name = G.getHomeName();
this.homeName.string = G.user.home.name;
this.vedioBup.active = G.user.home.nameTimes < 1;
this.bupFont.string = G.user.home.nameTimes < 1 ? "更 换" : "更 换(" + G.user.home.nameTimes + ")";
G.save();
},
upLev: function() {
var t = this, e = G.levConf[G.user.lev - 1];
if (G.user.home.lev >= {
_1: 3,
_2: 3,
_3: 3,
_4: 3,
_5: 6,
_6: 9,
_7: 9,
_8: 9,
_9: 9
}["_" + e.stage]) G.showTips("请提升师尊境界"); else {
var i = G.getConf(G._17Conf, G.user.home.lev, "lvc");
if (G.user.coin >= i.cost) {
G.user.coin -= i.cost;
G.user.home.lev = Math.min(9, G.user.home.lev + 1);
G.save();
this.showInfo();
G.showTips("升级成功");
} else G.noCoinTips(function() {
var e = G.getConf(G._17Conf, G.user.home.lev, "lvc");
G.showCost(t.upCost, G.user.coin, e.cost, "灵石 ");
});
}
},
showDesc: function(t, e) {
var i = G.getConf(G._17Conf, e, "lvc"), n = [];
n[0] = "要求门主为<color=#4169E1>" + G.VAL.LEV[i.stage - 1] + "</>或以上修士。";
n[1] = "可接纳最多<color=#4169E1>" + i.num_p + "</>名弟子。";
n[2] = "阵法限定为【<color=#4169E1>" + i.ar_name + "</>】。";
n[3] = "弟子任务上限为<color=#4169E1>" + i.num_t + "</>个。";
var a = (0 == t ? this.descBox0 : this.descBox1).children;
a[2].active = "" != i.ar_name;
for (var o in a) a[o].getComponent(cc.RichText).string = n[o];
}
});
cc._RF.pop();
}, {} ]
