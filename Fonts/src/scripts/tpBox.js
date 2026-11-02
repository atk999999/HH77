// Decrypted 1:1 module `tpBox` from assets/main/index.231ca.js
tpBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "23cfcHqf5VLg7LmiYdpTQr+", "tpBox");
cc.Class({
extends: cc.Component,
properties: {
rate: cc.Label,
objNum: cc.Label,
bup: cc.Node,
infoBox: cc.Node,
costBup: cc.Node,
selImg: cc.Node,
dan: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
t.doTp();
});
G.setBup(this.costBup, function() {
t.selDan();
});
},
onEnable: function() {
G.showInter();
G.showBanner();
this.dan = G.checkTpDan();
this.selImg.active = this.dan.num > 0;
this.showInfo();
},
onDisable: function() {
G.closeBanner();
},
selDan: function() {
if (this.dan.num > 0) {
this.selImg.active = !this.selImg.active;
this.showInfo();
} else {
this.selImg.active = !1;
G.showTips("丹药不足");
}
},
showInfo: function() {
var t, e = G.levConf[G.user.lev - 1];
t = -1 == G.user.title.indexOf(1008) ? this.dan.num > 0 && this.selImg.active ? e.pro1 : e.pro : this.dan.num > 0 && this.selImg.active ? e.chaos1 : e.chaos;
var i = G.levConf[G.user.lev - 1].stage, n = 9 * Math.pow(2, i - 1);
(n = (G.user.year - n) / n) > 1 && (n = 1);
n < 0 && (n = 0);
var a = Math.ceil(t * (1 + G.user.data[1] / 40) * n);
a += G.user.tpFail * G.VAL.TP_RATE;
this.rate.string = a + "%";
this.objNum.string = "【" + this.dan.title + "】" + this.dan.num + "/1";
},
doTp: function() {
if (G.user.year - G.user.tpYear < 2) G.showTips("两年后可再次突破"); else {
if (G.tp(this.selImg.active)) {
G.user.tpFail = 0;
G.showTips("突破成功");
G.playAudio("lev", 1);
var t = G.levConf[G.user.lev - 1].stage, e = [ "", "", "经过苦修，你终于突破进入了【筑基期】，算是真正的走入了长生之路的第一步，筑基期修士可以使用御气飞行，虽不能一日千里，但是也开始跟炼气期的凡人有了很大的区别，从此天下之大，也可以开始闯一闯了。", "金丹大道已成，在修仙界中也算略有小成，自古修道财侣法地不可或缺，道友需多得一些法宝丹药傍身才好。", "道生一、一生二、二生三、三生万物，元婴即是长生一途的一。到达此境界，修行者可借元婴将灵魂短暂离体，瞬息千里，驾驭天地之力，更能在肉身腐坏兵解之时携带本命法宝转世。", "修行者使用天地灵气将自身神魂锤炼，自此魂魄可不依托元婴短暂离体。更能在重生轮回之时，将慧根打入灵魂烙印，转世重修，可增加属性点。", "炼神返虚，是为炼虚，修行者到此地步，可称为一方巨擘。神魂可以离体与常人无异，更可开宗立派，成为一代宗师。", "修行到此，是为陆地半仙。虽肉体有寿元限制，但元婴与神魂凝练一体，即使没有肉体，也可以修成鬼仙，与天地同寿，可谓陆地神仙。但受制于肉体，无法接受仙气洗练肉骨凡胎，成就正统天仙之位。只是那成仙之路渺渺，世人哪知，一饮一啄，皆是定数。", "", "", "", "" ];
if ("" != e[t]) {
var i = G.getMsgBox();
i.showMsg(e[t]);
i.setHCenter();
}
G.zfbAd.deep();
} else {
G.user.tpFail++;
G.user.exp = Math.ceil(.95 * G.user.exp);
G.showMsg("突破失败，两年后可再次尝试，成功率将会有所提升。");
}
this.selImg.active && G.delObj(this.dan.id, 1);
this.infoBox.getComponent("infoBox").updateInfo();
this.node.active = !1;
}
}
});
cc._RF.pop();
}, {} ]
