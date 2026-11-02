// Decrypted 1:1 module `infoBox` from assets/main/index.231ca.js
infoBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "495beZvMgBJ4plOy2k57GOQ", "infoBox");
cc.Class({
extends: cc.Component,
properties: {
lev: cc.Label,
fight: cc.Label,
spExp: cc.Label,
needExp: cc.Node,
titleBup: cc.Node,
skillBup: cc.Node,
gfBup: cc.Node,
fbBup: cc.Node,
tpBup: cc.Node,
tpLock: cc.Node,
tpBox: cc.Node,
upBup: cc.Node,
setBup: cc.Node,
setBox: cc.Node,
makeBup: cc.Node,
fsBup: cc.Node,
fsBox: cc.Node,
expBup: cc.Node,
makeLock: cc.Node,
coinBup: cc.Node,
coinLock: cc.Node,
hp: cc.Label,
at: cc.Label,
df: cc.Label,
mp: cc.Label,
hpBar: cc.Node,
mpBar: cc.Node,
hpBup: cc.Node,
mpBup: cc.Node,
hpTips: cc.Node,
mpTips: cc.Node,
hpRed: cc.Node,
mpRed: cc.Node,
offVal: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.titleBup, function() {
G.getNode("Canvas/titleBox").node.active = !0;
});
G.setBup(this.makeBup, function() {
G.user.var.alch + G.user.var.cast > 0 ? G.getNode("Canvas/makeBox").node.active = !0 : G.showMsg("主线剧情通过【神农谷】可解锁炼丹、通过【天工堡】可解锁炼器。");
});
G.setBup(this.skillBup, function() {
G.getNode("Canvas/skillBox").node.active = !0;
});
G.setBup(this.gfBup, function() {
G.getNode("Canvas/gfBox", "gfBox").js.showInfo(-1);
});
G.setBup(this.fbBup, function() {
G.getNode("Canvas/fbBox", "fbBox").node.active = !0;
});
G.setBup(this.tpBup, function() {
t.checkTp();
});
G.setBup(this.upBup, function() {
G.upLev();
t.updateInfo();
});
G.setBup(this.setBup, function() {
t.setBox.active = !0;
});
G.setBup(this.fsBup, function() {
t.fsBox.active = !0;
});
G.setBup(this.coinBup, function() {
t.coinLock.active ? G.showMsg("主线剧情通过【矿物之争】可解锁灵石矿脉。") : G.getNode("Canvas/coinBox").node.active = !0;
});
G.setBup(this.hpBup, function() {
t.toBag();
});
G.setBup(this.mpBup, function() {
t.toBag();
});
G.setBup(this.hpTips, function() {
G.showTips("180秒自动恢复");
});
G.setBup(this.mpTips, function() {
G.showTips("180秒自动恢复");
});
this.offVal = [ 0, 0 ];
G.setTimeCb({
path: "Canvas/infoBox",
js: "infoBox",
cb: "autoVal",
time: [ 0, 1 ]
});
},
onEnable: function() {
this.expBup.getComponent("expGj").checkState();
this.makeLock.active = G.user.var.alch + G.user.var.cast < 1;
this.coinLock.active = G.user.var.often < 1;
var t = G.getFightData(!0, G.user.lev), e = Math.ceil((t[0] - G.user.hp) / 180), i = Math.ceil((t[3] - G.user.mp) / 180);
this.offVal = [ e, i ];
this.hpRed.active = t[0] - G.user.hp > 0;
this.mpRed.active = t[3] - G.user.mp > 0;
this.updateInfo();
},
updateInfo: function() {
var t = G.levConf[G.user.lev - 1];
this.lev.string = t.stage_name + t.step_name;
this.fight.string = G.getFight();
var e = G.bookId(), i = -1 != e ? G.user.setObj["_" + e].buff : 0, n = Math.ceil(t.exp_get * (1 + i / 100));
this.spExp.string = G.getNum(n) + " / 年";
G.user.exp = Math.ceil(G.user.exp);
G.showCost(this.needExp, G.user.exp, t.exp);
this.tpBup.active = t.stage < 7 && 9 == t.step;
this.tpLock.active = G.user.exp < t.exp;
this.upBup.active = 9 != t.step;
this.updateVal();
},
checkTp: function() {
this.tpLock.active ? G.showTips("灵气不足") : this.tpBox.active = !0;
},
updateVal: function() {
var t = G.getFightData(!0, G.user.lev);
G.user.hp = Math.min(G.user.hp, t[0]);
G.user.mp = Math.min(G.user.mp, t[3]);
this.hpBar.scaleX = G.user.hp / t[0];
this.mpBar.scaleX = G.user.mp / t[3];
this.hp.string = G.getNum(G.user.hp) + "/" + G.getNum(t[0]);
this.at.string = G.getNum(t[1]);
this.df.string = G.getNum(t[2]);
this.mp.string = G.getNum(G.user.mp) + "/" + G.getNum(t[3]);
this.hpRed.active = t[0] - G.user.hp > 0;
this.mpRed.active = t[3] - G.user.mp > 0;
},
autoVal: function() {
if (this.offVal[0] > 0 || this.offVal[1] > 0) {
G.user.hp += this.offVal[0];
G.user.mp += this.offVal[1];
}
this.updateVal();
},
toBag: function() {
G.temp.bagType = 2;
G.getNode("Canvas/bupBox", "bupBox").js.jumpTo(1);
}
});
cc._RF.pop();
}, {} ]
