// Decrypted 1:1 module `fightBox` from assets/main/index.231ca.js
fightBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "dc1047oGrFIq7oesmI/jjZg", "fightBox");
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
role0: cc.Node,
role1: cc.Node,
roleName0: cc.Label,
roleName1: cc.Label,
hpBar0: cc.Node,
hpBar1: cc.Node,
fight0: cc.Label,
fight1: cc.Label,
hit0: sp.Skeleton,
hit1: sp.Skeleton,
hitFont0: cc.Label,
hitFont1: cc.Label,
spBup: cc.Node,
skipBup: cc.Node,
runBup: cc.Node,
debugBup: cc.Node,
debugBox: cc.Node,
myDebug: cc.Label,
vsDebug: cc.Label,
fightTxtBox: cc.Node,
hp0: cc.Label,
mp0: cc.Label,
hp1: cc.Label,
mp1: cc.Label,
fbBuff: cc.Label,
retBox: cc.Node,
data: {
default: null,
visible: !1
},
turn: {
default: !0,
visible: !1
},
info0: {
default: null,
visible: !1
},
info1: {
default: null,
visible: !1
},
buff1: {
default: null,
visible: !1
},
timeOut: {
default: -1,
visible: !1
},
spFlag: {
default: !1,
visible: !1
},
ghost: {
default: !1,
visible: !1
},
debugClick: {
default: 0,
visible: !1
},
cd: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
this.debugBup.on(cc.Node.EventType.TOUCH_END, function(e) {
t.debugClick++;
t.debugClick > 2 && (t.debugBox.active = !0);
e.stopPropagation();
});
G.setBup(this.spBup, function() {
t.spFlag && G.showTips("已加速");
t.spFlag = !0;
});
G.setBup(this.skipBup, function() {
t.timeOut = -1;
t.skipFight();
t.node.active = !1;
});
G.setBup(this.runBup, function() {
t.timeOut = -1;
t.run();
t.node.active = !1;
});
this.hit0.setCompleteListener(function() {
t.hit0.node.active = !1;
});
this.hit1.setCompleteListener(function() {
t.hit1.node.active = !1;
});
G.setTimeCb({
path: "Canvas/fightBox",
js: "fightBox",
cb: "updateGuaiCd",
time: [ 0, 1 ]
});
},
onEnable: function() {
G.wxAd.showClubBup(!1);
},
onDisable: function() {
G.temp.rankFight || G.wxAd.showClubBup(!0);
G.temp.rankFight = null;
G.user.hp = Math.max(0, this.info0.hp);
G.user.mp = Math.max(0, this.info0.mp);
G.playAudio("bg");
},
initFight: function(t) {
this.timeOut = -1;
this.cd = 0;
this.spFlag = !1;
this.ghost = !1;
this.data = t.split("|");
var e = G.getConf(G.guaiConf, this.data[0]), i = G.getFightData(!0, G.user.lev), n = G.getFightData(!1, e.lv), a = G.getFight(), o = G.getFight(!1, e.lv);
this.fight0.string = "战力：" + a;
this.fight1.string = "战力：" + G.levConf[e.lv - 1].pow_m;
if (G.temp.rankFight) {
n = G.temp.rankFight;
o = G.temp.rankFight[4];
this.fight1.string = "战力：" + o;
}
G.user.hp > i[0] && (G.user.hp = i[0]);
G.user.mp > i[3] && (G.user.mp = i[3]);
this.info0 = {
hp: G.user.hp,
maxHp: i[0],
ap: i[1],
dp: i[2],
mp: G.user.mp,
maxMp: i[3],
miss: 5 + G.user.fightSkill[4],
crit: 5 + G.user.fightSkill[5],
crit_hit: 20 + G.user.fightSkill[6],
fight: a
};
this.info1 = {
lev: e.lv,
hp: n[0],
maxHp: n[0],
ap: n[1],
dp: n[2],
mp: n[3],
maxMp: n[3],
miss: 5,
crit: 5,
crit_hit: 20,
fight: o,
fs: []
};
this.hp0.string = G.getNum(G.user.hp) + "/" + G.getNum(i[0]);
G.user.hp > i[0] / 2 ? this.hp0.node.color = cc.color("#78EA8E") : G.user.hp < i[0] / 4 ? this.hp0.node.color = cc.color("#E33715") : this.hp0.node.color = cc.color("#FED056");
this.mp0.string = G.getNum(G.user.mp) + "/" + G.getNum(i[3]);
this.hp1.string = G.getNum(n[0]) + "/" + G.getNum(n[0]);
this.mp1.string = G.getNum(n[3]) + "/" + G.getNum(n[3]);
this.setGuaiFs();
this.roleName0.string = G.user.name;
this.roleName1.string = e.name;
G.temp.rankFight && (this.roleName1.string = G.temp.rankFight[5]);
this.hpBar0.scaleX = Math.max(0, this.info0.hp / this.info0.maxHp);
this.hpBar1.scaleX = 1;
this.hit0.node.active = !1;
this.hit1.node.active = !1;
this.hitFont0.node.active = !1;
this.hitFont1.node.active = !1;
this.runBup.active = G.temp.fight[0] < 1 && this.data.length >= 3;
this.role0.stopAllActions();
this.role1.stopAllActions();
this.role0.position = cc.v2(-250, 200);
this.role1.position = cc.v2(250, 200);
this.role0.active = !0;
this.role1.active = !0;
this.randomMove(this.role0);
this.randomMove(this.role1);
this.buff1 = [ "amulet2", "bianZi", "superFire", "moZhua", "longJuanFeng", "tianLei" ][G._.random(0, 5)];
this.timeOut = 0;
G.fbBuff();
var m = "法宝：气血+" + G.user.fbSkill[0] + "、攻击+" + G.user.fbSkill[1] + "、防御+" + G.user.fbSkill[2];
this.fbBuff.string = m;
this.skipBup.active = !G.temp.rankFight;
this.runBup.active = !G.temp.rankFight;
this.node.active = !0;
G.playAudio("fight");
},
randomMove: function(t) {
var e = this, i = [ -250, 250 ], n = [ 150, 350 ], a = cc.v2(G._.random(i[0], i[1]), G._.random(n[0], n[1])), o = t.position.sub(a).mag() / G._.random(100, 200), m = cc.moveTo(o, a), r = cc.sequence(m, cc.callFunc(function() {
e.randomMove(t);
}));
t.stopAllActions();
t.runAction(r);
},
updateHp: function(t, e) {
var i = t ? this.info0 : this.info1;
i.hp = e > 0 ? Math.min(i.maxHp, i.hp + e) : Math.max(0, i.hp + e);
},
updateFight: function() {
var t = this;
if (!(this.timeOut < 0)) {
var e = G.levConf[G.user.lev - 1].stage, i = this.spFlag ? .1 : .3, n = [ "boss1_skill1", "ccc", "dangerWindToNear", "darkMask", "ddd", "doomsdayStorm", "fingerLikeWind", "fireBloom", "hellFire", "jneng", "landFire", "light", "longJuanFeng", "samadhiTrueFire", "sunHeart", "thunder", "thunderFissionBead", "thunderRunning", "thundercloud" ];
e < 7 && (n = G.randomArray(n, e));
if (this.turn) {
var a = cc.jumpTo(i, this.role1.position, 50, 1), o = cc.sequence(a, cc.callFunc(function() {
t.timeOut = 0;
t.role0.x = -80;
if (e > 1 && !t.hit1.node.active) {
t.hit1.node.active = !0;
t.hit1.setAnimation(0, n[G._.random(0, n.length - 1)], !1);
}
t.updateBar();
t.randomMove(t.role0);
}));
this.role0.stopAllActions();
this.role0.runAction(o);
} else {
var m = cc.jumpTo(i, this.role0.position, 50, 1), r = cc.sequence(m, cc.callFunc(function() {
t.timeOut = 0;
t.role1.x = 80;
if (e > 1 && !t.hit0.node.active) {
t.hit0.node.active = !0;
t.hit0.setAnimation(0, t.buff1, !1);
}
t.updateBar();
t.randomMove(t.role1);
}));
this.role1.stopAllActions();
this.role1.runAction(r);
}
G.playAudio("hit", 1);
}
},
updateBar: function() {
var t = "", e = G._.random(1, 100);
if (this.turn) if (e <= this.info1.miss) t = "<color=" + G.VAL.COLOR._0 + ">" + G.user.name + "</c>发动攻击，<color=" + G.VAL.COLOR._1 + ">" + this.roleName1.string + "</c>使用身法躲开了。"; else {
var i = 1;
e <= this.info0.crit && (i = 1 + this.info0.crit_hit / 100);
var n = Math.ceil(i * this.info0.ap * this.info0.ap / (this.info0.ap + this.info1.dp));
this.info1.hp -= n;
var a = i > 1 ? "<color=" + G.VAL.COLOR._3 + ">暴击</c>" : "攻击";
t = "<color=" + G.VAL.COLOR._0 + ">" + G.user.name + "</c>发动" + a + "，造成对方<color=" + G.VAL.COLOR._2 + ">" + n + "</c>点伤害。";
this.showHit(!1, n);
} else if (e <= this.info1.miss) t = "<color=" + G.VAL.COLOR._1 + ">" + this.roleName1.string + "</c>发动攻击，<color=" + G.VAL.COLOR._0 + ">" + G.user.name + "</c>使用身法躲开了。"; else {
var o = 1;
e <= this.info1.crit && (o = 1 + this.info1.crit_hit / 100);
var m = Math.ceil(o * this.info1.ap * this.info1.ap / (this.info1.ap + this.info0.dp));
this.info0.hp -= m;
var r = o > 1 ? "<color=" + G.VAL.COLOR._3 + ">暴击</c>" : "攻击";
t = "<color=" + G.VAL.COLOR._1 + ">" + this.roleName1.string + "</c>发动" + r + "，造成对方<color=" + G.VAL.COLOR._2 + ">" + m + "</c>点伤害。";
this.showHit(!0, m);
}
this.hp0.string = G.getNum(this.info0.hp) + "/" + G.getNum(this.info0.maxHp);
this.info0.hp > this.info0.maxHp / 2 ? this.hp0.node.color = cc.color("#78EA8E") : this.info0.hp < this.info0.maxHp / 4 ? this.hp0.node.color = cc.color("#E33715") : this.hp0.node.color = cc.color("#FED056");
this.mp0.string = G.getNum(this.info0.mp) + "/" + G.getNum(this.info0.maxMp);
this.hp1.string = G.getNum(this.info1.hp) + "/" + G.getNum(this.info1.maxHp);
this.mp1.string = G.getNum(this.info1.mp) + "/" + G.getNum(this.info1.maxMp);
this.fightTxtBox.getComponent("fightTxtBox").addTxt(t);
this.checkRet();
},
checkRet: function() {
var t = this;
if (this.info1.hp < 1) {
this.role0.stopAllActions();
this.role1.stopAllActions();
this.role1.active = !1;
this.timeOut = -1;
if (G.temp.rankFight) {
G.user.coin += G.temp.rankFight[6];
G.temp.rankFight[7] < 1 ? G.user.win[0]++ : G.user.homeWin[0]++;
G.showTips("挑战成功，灵石 +" + G.temp.rankFight[6]);
G.getNode("Canvas/rankBox", "rankBox").js.updateInfo();
this.node.active = !1;
return;
}
0 != G.temp.fight[0] && G.r_exp(G.temp.fight[2]);
G.dropObj(this.data[0]);
G.addBookExp(2, 5 * this.info1.lev);
G.setStep(this.data[1]);
this.retBox.getComponent("retBox").showRet(0);
this.endFight();
} else if (this.info0.hp < 1) {
var e = G.getNode("Canvas/gameBox/txtBox", "txtBox");
this.role0.stopAllActions();
this.role1.stopAllActions();
this.role0.active = !1;
this.timeOut = -1;
if (G.temp.rankFight) {
G.temp.rankFight[7] < 1 ? G.user.win[1]++ : G.user.homeWin[1]++;
G.showTips("挑战失败");
G.getNode("Canvas/rankBox", "rankBox").js.updateInfo();
this.node.active = !1;
return;
}
var i = !1;
if (0 != G.temp.fight[0]) {
var n = this.info0.fight / (1.5 * this.info1.fight) * 100, a = G._.random(1, 100);
if (null != this.data[3] && a < n) {
if (G.user.obj._162002) {
e.js.addTxt("你受伤逃走，使用了一个【千年玉髓】才得以恢复。", "msg");
G.r_item("162002|-1");
G.setStep(this.data[3]);
this.retBox.getComponent("retBox").showRet(1);
this.endFight();
} else {
var o = G._.random(5, 10);
e.js.addTxt("你受伤逃走，花了很久才调理回来，但却损失了" + o + "岁寿元。", "msg");
G.user.age = Math.max(0, G.user.age - o);
G.setStep(this.data[3]);
this.retBox.getComponent("retBox").showRet(1);
this.endFight();
}
return;
}
i = !0;
} else i = !0;
if (i) {
var m = null;
if (0 != G.temp.fight[0]) {
var r = G.temp.fight[0] + "_" + this.data[2];
m = G.fStepConf[r];
} else if (-1 == G.temp.fbId) {
var s = G.user.sid + "_" + this.data[2];
m = G.temp.step[s];
} else {
var l = G.temp.fbId + "_" + this.data[2];
m = G.temp.fbStory[l];
}
if (m && "dead" == m.action && null != this.data[3]) {
this.retBox.getComponent("retBox").showRet(2);
var p = G.getMsgBox();
if (!G.user.ghost) {
var d = G.checkGhost();
if (null != d) {
G.temp.fight = [ 0, 0, 0 ];
p.showMsg("修仙世界强者为尊，危机四伏，你不敌对手，被打至重伤濒死，系统觉得你是命定的主角，所以给你选择『成为鬼仙』的机会。", function() {
t.ghost = !0;
G.setGhost(d);
G.setStep(t.data[3]);
t.endFight();
G.temp.ageFlag = !1;
e.js.addTxt("<PNK>你寻觅一处洞府开始查看自己的情况，此刻你肉体崩溃，元婴和神魂也跟着开始撕裂。你知道再不做决策就晚了。虽然转为鬼仙后，没有机会升入仙界了，但是修炼之道不能停在此处，于是你元婴离体，开始将精力灌注到元婴中，等到元婴凝练到接近成为实体，你才将神魂转到元婴上。</>", "msg");
e.js.addTxt("<PNK>当你的神魂转到元婴之上，你感觉到灵力似乎发生了变化。白色的灵力当中有了一丝金色的，你试着调用了一下发现，这一丝金色的灵力的威力，竟然足以移山填海。你知道这是比灵力更高的仙力，只有当全身灵力转为仙力，才能真正升入仙界。只可惜，你已经无法踏足那一境界。</>", "msg");
e.js.addTxt("<PNK>鬼仙也是仙。你打算接下来游历人间，尽情享受这个世界。</>", "msg");
G.temp.ageFlag = !0;
}, function() {
G.setStep(t.data[2]);
t.endFight();
});
p.showCancel(!0);
return;
}
}
p.showMsg("修仙世界强者为尊，危机四伏，你不敌对手，被打至重伤濒死，系统觉得你是命定的主角，只需要帮系统点一下广告完成任务，就可以满血复活一次。", function() {
G.ylAdEvent("死亡复活");
G.showVedio(function() {
G.user.hp = t.info0.maxHp;
G.user.mp = t.info0.maxMp;
if (0 == G.temp.fight[0]) G.setStep(t.data[3]); else {
e.js.addTxt("<PNK>系统惊讶于你的修仙之心竟然如此坚定，决定再给你一次机会，让你满血复活了。</>", "msg");
G.temp.fight = [ 0, 0, 0 ];
}
t.endFight();
});
});
p.showSubMsg("【友情提醒】你需要不断突破境界，或者获得丹药和法宝提升战斗力，才能应对这种危机。");
p.setHCenter();
p.showVedio();
p.setBupTxt("视频复活");
p.showOtherBup("重生轮回", function() {
G.setStep(t.data[2]);
t.endFight();
});
} else {
G.setStep(this.data[2]);
this.retBox.getComponent("retBox").showRet(1);
this.endFight();
}
}
this.node.active = !1;
} else {
this.hpBar0.scaleX = Math.max(0, this.info0.hp / this.info0.maxHp);
this.hpBar1.scaleX = Math.max(0, this.info1.hp / this.info1.maxHp);
this.turn = !this.turn;
}
},
showHit: function(t, e) {
var i = t ? this.hitFont0 : this.hitFont1;
i.string = -e;
var n = this.spFlag ? .1 : .3, a = cc.moveBy(n, cc.v2(0, 50)), o = cc.sequence(a, cc.callFunc(function() {
i.node.active = !1;
}));
i.node.y = 70;
i.node.active = !0;
i.node.stopAllActions();
i.node.runAction(o);
},
endFight: function() {
this.timeOut = -1;
if (0 != G.temp.fight[0]) G.fightEvent(); else {
G.setOpType(0);
G.nextStory();
}
this.node.active = !1;
},
skipFight: function() {
this.timeOut = -1;
this.role0.stopAllActions();
this.role1.stopAllActions();
var t = G.getFightData(!0, G.user.lev), e = G.getConf(G.guaiConf, this.data[0]);
if (e) {
for (var i = G.getFightData(!1, e.lv), n = !0, a = 0; ;) {
if (++a > 50) {
this.info1.hp = 0;
break;
}
if (n) {
var o = Math.ceil(t[1] * t[1] / (t[1] + i[2]));
i[0] -= o;
} else {
var m = Math.ceil(i[1] * i[1] / (i[1] + t[2]));
t[0] -= m;
}
if (i[0] < 1) {
this.info1.hp = 0;
break;
}
if (t[0] < 1) {
this.info0.hp = 0;
break;
}
n = !n;
}
this.checkRet();
} else {
this.info1.hp = 0;
this.checkRet();
}
},
run: function() {
var t = this.data.length - 1;
if (5 == t) {
var e = G.getConf(G.guaiConf, this.data[0]), n = G.getFight(), a = G.getFight(!1, e.lv), o = G._.random(1, 100), m = Math.floor(n / a * 100), r = G.runFsList(), s = !1;
if (r.length > 0) {
for (var l, p = 0, d = 0, c = i(r); !(l = c()).done; ) {
var u = l.value, y = G.getConf(G._15Conf, G.user.setObj[u].fsId);
if (y) {
var f = y.eff1.split("|"), x = 1 + Number(f[1]) / 100 * (1 + G.user.setObj[u].lev / 50), h = Math.floor(x * n / a);
if (h > d) {
d = h;
p = y.mp;
}
}
}
if (this.info0.mp >= p) {
s = !0;
m = d;
this.info0.mp -= p;
}
}
if (!s && G.user.obj._162003) {
m = Math.floor(2 * n / a * 100);
G.delObj(162003, 1);
}
o <= m ? G.setStep(this.data[4]) : G.setStep(this.data[5]);
} else 3 == t && G.setStep(this.data[3]);
this.retBox.getComponent("retBox").showRet(1);
this.endFight();
},
setGuaiFs: function() {
if (!(G.levConf[G.user.lev - 1].stage < 2)) {
var t = G.getConf(G.guaiConf, this.data[0]), e = Math.round(1.5 + t.lv / 20), i = Math.round(2 + t.lv / 25), n = Math.min(4, G._.random(e, i)), a = Math.round(1 + t.lv / 18), o = Math.round(1 + t.lv / 14), m = Math.min(4, G._.random(a, o)), r = [], s = G.randomArray(G.temp.guaiFs0[m - 1], 4);
r.push(s[3]);
if (--n > 0 && G._.random(1, 100) < 50) {
n--;
m = Math.min(4, G._.random(a, o));
var l = G.randomArray(G.temp.guaiFs1[m - 1], 1);
r.push(l[0]);
}
for (var p = 0; p < n; p++) r.push(s[p]);
for (var d = 0, c = r; d < c.length; d++) {
var u = c[d], y = G.getConf(G._15Conf, u), f = G.getConf(G._16Conf, u);
this.info1.fs.push({
id: u,
name: f["name" + t.race],
mp: y.mp,
cd: 0,
maxCd: y.CD
});
}
}
},
updateGuaiCd: function() {
if (this.node.active && this.info1) {
for (var t, e = !1, n = i(this.info1.fs); !(t = n()).done; ) {
var a = t.value;
a.cd++;
if (!e && a.cd >= a.maxCd && this.info1.mp >= a.mp && this.cd >= G.VAL.FS_CD) {
e = !0;
this.cd = 0;
this.info1.mp -= a.mp;
a.cd = 0;
this.fsEff(!1, a.id);
}
e && (a.cd = Math.ceil(a.cd / 2));
}
this.mp1.string = G.getNum(this.info1.mp) + "/" + G.getNum(this.info1.maxMp);
}
},
fsEff: function(t, e) {
var i = this, n = t ? G.user.setObj["_" + e] : {
fsId: e,
lev: this.info1.lev
}, a = t ? this.info0 : this.info1, o = t ? this.info1 : this.info0, m = G.getConf(G._15Conf, n.fsId);
if (t) {
if (a.mp < m.mp) {
G.showTips("法力不足");
return !1;
}
a.mp -= m.mp;
this.mp0.string = G.getNum(a.mp) + "/" + G.getNum(a.maxMp);
}
var r = m.eff1.split("|"), s = "<color=" + (t ? G.VAL.COLOR._0 : G.VAL.COLOR._1) + ">" + (t ? G.user.name : i.roleName1.string) + "</c>发动<color=" + G.VAL.R_COLOR[m.qua] + ">" + m.name + "</c>";
p(r[0], Number(r[1]));
if ("" != m.rate && G._.random(1, 100) <= m.rate) {
var l = m.eff2.split("|");
p(l[0], Number(l[1]));
}
this.fightTxtBox.getComponent("fightTxtBox").addTxt(s);
return !0;
function p(e, m) {
var r = m / 100;
switch (e) {
case "dmg":
var l = Math.ceil(r * a.ap * (1 + n.lev / 50));
isNaN(l) && console.log("hit error:", e, m);
o.hp -= isNaN(l) ? 0 : l;
i.showHit(!t, l);
i.checkRet();
s += "造成对方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(l) + "</c>点伤害。";
break;

case "heal":
var p = Math.ceil(r * a.ap * (1 + n.lev / 50));
a.hp = Math.min(a.maxHp, a.hp + p);
s += "恢复<color=" + G.VAL.COLOR._2 + ">" + Math.abs(p) + "</c>点生命。";
break;

case "at":
var d = Math.ceil(r * (1 + n.lev / 50) * 100);
if (m > 0) {
a.ap = Math.ceil(a.ap * (1 + r * (1 + n.lev / 50)));
s += "提升本方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(d) + "%</c>攻击。";
} else {
o.ap = Math.max(0, Math.ceil(o.ap * (1 + r * (1 + n.lev / 50))));
s += "降低对方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(d) + "%</c>攻击。";
}
break;

case "df":
var c = Math.ceil(r * (1 + n.lev / 50) * 100);
if (m > 0) {
a.dp = Math.ceil(a.dp * (1 + r * (1 + n.lev / 50)));
s += "提升本方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(c) + "%</c>防御。";
} else {
o.dp = Math.max(0, Math.ceil(o.dp * (1 + r * (1 + n.lev / 50))));
s += "降低对方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(c) + "%</c>防御。";
}
break;

case "miss":
var u = Math.ceil(r * (1 + n.lev / 50) * 100);
if (m > 0) {
a.miss = Math.ceil(a.miss * (1 + r * (1 + n.lev / 50)));
s += "提升本方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(u) + "%</c>闪避率。";
} else {
o.miss = Math.max(0, Math.ceil(o.miss * (1 + r * (1 + n.lev / 50))));
s += "降低对方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(u) + "%</c>闪避率。";
}
break;

case "crit":
var y = Math.ceil(r * (1 + n.lev / 50) * 100);
if (m > 0) {
a.crit = Math.ceil(a.crit * (1 + r * (1 + n.lev / 50)));
s += "提升本方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(y) + "%</c>暴击率。";
} else {
o.crit = Math.max(0, Math.ceil(o.crit * (1 + r * (1 + n.lev / 50))));
s += "降低对方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(y) + "%</c>暴击率。";
}
break;

case "crit_hit":
var f = Math.ceil(r * (1 + n.lev / 50) * 100);
if (m > 0) {
a.crit_hit = Math.ceil(a.crit_hit * (1 + r * (1 + n.lev / 50)));
s += "提升本方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(f) + "%</c>暴击伤害。";
} else {
o.crit_hit = Math.max(0, Math.ceil(o.crit_hit * (1 + r * (1 + n.lev / 50))));
s += "降低对方<color=" + G.VAL.COLOR._2 + ">" + Math.abs(f) + "%</c>暴击伤害。";
}
}
}
},
update: function(t) {
if (G.temp.gameStart && this.timeOut >= 0) {
this.timeOut += t;
this.cd += t;
var e = this.spFlag ? .9 : 1.8;
if (this.timeOut >= e) {
this.timeOut = 0;
this.updateFight();
}
}
}
});
cc._RF.pop();
}, {} ]
