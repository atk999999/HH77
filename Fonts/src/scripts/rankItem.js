// Decrypted 1:1 module `rankItem` from assets/main/index.231ca.js
rankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "fbf3544P6dOILkScwcaRxjH", "rankItem");
function i(t, e) {
var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (i) return (i = i.call(t)).next.bind(i);
if (Array.isArray(t) || (i = n(t)) || e && t && "number" == typeof t.length) {
i && (t = i);
var a = 0;
return function() {
return a >= t.length ? {
done: !0
} : {
done: !1,
value: t[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(t, e) {
if (t) {
if ("string" == typeof t) return a(t, e);
var i = Object.prototype.toString.call(t).slice(8, -1);
"Object" === i && t.constructor && (i = t.constructor.name);
return "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(t, e) : void 0;
}
}
function a(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
return n;
}
cc.Class({
extends: cc.Component,
properties: {
rImg: cc.Node,
rFont: cc.Label,
font0: cc.Label,
font1_0: cc.Label,
font1_1: cc.Label,
font2: cc.Label,
fightBup: cc.Node,
giftBup: cc.Node,
cost: cc.Label,
gift: cc.Label,
info: cc.Label,
type: {
default: 0,
visible: !1
},
lev: {
default: 0,
visible: !1
},
data: {
default: null,
visible: !1
},
rank: {
default: -1,
visible: !1
},
fCost: {
default: 0,
visible: !1
},
fCoin: {
default: 0,
visible: !1
},
gCoin: {
default: 0,
visible: !1
},
userName: {
default: "",
visible: !1
},
isMy: !1
},
onLoad: function() {
var t = this;
G.setBup(this.fightBup, function() {
t.toFight();
});
G.setBup(this.giftBup, function() {
t.getGift();
});
},
showInfo: function(t, e, i) {
this.type = e;
this.data = i;
this.fightBup.active = 2 != e;
this.info.node.active = 2 != e;
this.updataRank(t);
this.font1_1.node.active = 1 == e;
if (0 == e) {
var n = G.levConf[i[5] - 1];
this.font0.string = i[6];
this.font1_0.string = n.stage_name + n.step_name;
this.font2.string = 2 * i[7] + i[8];
this.userName = i[6];
this.info.string = "胜" + i[7] + "  负" + i[8] + "  战力" + G.getNum(i[4]);
} else if (1 == e) {
var a = G.levConf[i[8] - 1];
this.font0.string = "" == i[7] ? "无宗门" : i[7];
this.font1_0.string = i[9];
this.font1_1.string = a.stage_name + a.step_name;
this.font2.string = 2 * i[10] + i[11];
this.userName = i[9];
this.info.string = "胜" + i[10] + "  负" + i[11] + "  战力" + G.getNum(i[4]);
} else if (2 == e) {
var o = G.levConf[i[1] - 1];
this.font0.string = i[2];
this.font1_0.string = o.stage_name + o.step_name;
this.font2.string = i[0];
this.userName = i[2];
}
},
updateCost: function(t) {
this.lev = Number(t) + 1;
var e = 0;
this.fCoin = 0;
if (this.rank <= 30) for (var n, a = i(G._19Conf); !(n = a()).done; ) {
var o = n.value;
if (o.type == this.type + 1 && o.list == this.lev) {
var m = (o.ranking + "").split("|");
if (1 == m.length && this.rank == m[0]) {
e = o.entry;
this.fCoin = o.bonus;
} else if (m.length > 1 && this.rank >= m[0] && this.rank <= m[1]) {
e = o.entry;
this.fCoin = o.bonus;
}
}
}
if (this.isMy) {
e = 800;
this.fCoin = 2 * e;
} else {
G.temp.myRank > 0 && G.temp.myRank <= this.rank && (e = 0);
this.fightBup.active = e > 0 && this.userName != G.user.name;
}
this.cost.node.active = e > 0;
this.cost.string = "费用 " + e;
this.fCost = e;
},
updataRank: function(t) {
this.rank = t;
this.rImg.active = t < 4 && t >= 0;
this.rImg.active && (this.rImg.children[t - 1].active = !0);
this.rFont.node.active = t > 3 || t < 0;
this.rFont.string = t > 0 ? t : "未上榜";
this.giftBup.active = this.isMy && 2 == this.type && -1 != t;
this.gCoin = G.getNum(G.VAL.POINT_COIN * G.user.point);
this.gift.string = "灵石 x" + this.gCoin;
},
toFight: function() {
if (!this.isMy && G.temp.myRank < 0) G.showTips("未上榜，无法挑战！"); else if (1 != this.type || "" != G.user.home.name) {
var t = G.getFightData(!0, G.user.lev);
if (G.user.hp < t[0] / 10) {
var e = G.getMsgBox();
e.showMsg("经过连番战斗，你已经灵力耗尽，气血不足，为了接下来更好的应对挑战，建议你恢复后再继续历练。", function() {
G.getNode("Canvas/rankBox", "rankBox").node.active = !1;
G.getNode("Canvas/bupBox", "bupBox").js.jumpTo(0);
});
e.setBupTxt("修练恢复");
e.showOtherBup("放弃挑战");
} else if (G.user.coin >= this.fCost) {
G.user.coin -= this.fCost;
if (this.isMy) {
var i = 1 + G._.random(-20, 30) / 100;
G.temp.rankFight = [ Math.ceil(i * this.data[0]), Math.ceil(i * this.data[1]), Math.ceil(i * this.data[2]), Math.ceil(i * this.data[3]), Math.ceil(i * this.data[4]), G.getRoleName(G._.random(0, 1)), this.fCoin, this.type ];
} else G.temp.rankFight = [ this.data[0], this.data[1], this.data[2], this.data[3], this.data[4], this.userName, this.fCoin, this.type ];
G.save();
G.getNode("Canvas/rankBox", "rankBox").js.showCoin();
G.getNode("Canvas/fightBox", "fightBox").js.initFight("3001");
} else G.noCoinTips(function() {
G.getNode("Canvas/rankBox", "rankBox").js.showCoin();
});
} else G.showTips("未建立宗门");
},
getGift: function() {
if (G.getItem("xx_relife_gife") != G.getNow()) {
G.user.coin += G.VAL.POINT_COIN * G.user.point;
G.save();
G.setItem("xx_relife_gife", G.getNow());
G.getNode("Canvas/rankBox", "rankBox").js.showCoin();
G.showTips("领取成功");
} else G.showTips("本日已领取");
}
});
cc._RF.pop();
}, {} ]
