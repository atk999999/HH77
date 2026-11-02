// Decrypted 1:1 module `menu` from assets/main/index.231ca.js
menu: [ function(t, e) {
"use strict";
cc._RF.push(e, "1e0333eIQ5Lj7lAdR+sKEnT", "menu");
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
dataBox: cc.Node,
txtBox: cc.Node,
relifeBup: cc.Node,
helpBup: cc.Node,
helpTipsBox: cc.Node,
firstBup: cc.Node,
firstBox: cc.Node,
overBox: cc.Node,
shareBup: cc.Node,
userBup: cc.Node,
userBox: cc.Node
},
onLoad: function() {
var t = this;
if ("h5" == G.from && cc.sys.isMobile) {
var e = this.node.getComponent(cc.Widget);
e.isAlignLeft = !0;
e.isAlignRight = !0;
}
G.setBup(this.relifeBup, function() {
var e = G.getMsgBox();
e.showMsg("是否确定清除毕生修为，进入重生轮回？", function() {
G.yl.event("resume", {
resumeCount: 1
});
t.overBox.active = !0;
clearInterval(G.temp.timeId);
G.temp.gameStart = !1;
cc.sys.localStorage.removeItem(G.gameName);
G.msgToAndroid("relife 0");
setTimeout(function() {
G.msgToAndroid("relife 1");
cc.director.loadScene("login");
}, 2e3);
});
e.showCancel(!0);
});
G.setBup(this.helpBup, function() {
t.helpTipsBox.active = !0;
G.user.help = !0;
});
var i = G.getItem("xx_first");
this.firstBup.active = !i;
G.setBup(this.firstBup, function() {
t.firstBox.active = !0;
});
if (0 == G.user.sid) this.dataBox.active = !0; else {
this.txtBox.getComponent("txtBox").initStory();
G.temp.gameStart = !0;
}
G.temp.txtYear = -1;
G.wxAd.showClubBup(!0);
G.preloadAd();
this.initRank();
G.setBup(this.shareBup, function() {
var t = G.getMsgBox();
t.showMsg("分享成功后，获得1张免广告券，每天限3张。", function() {
G.wxA.setShareData(1, "share");
G.wxAd.toSub({
openId: G.userId,
share: 1
});
});
t.showCancel(!0);
});
this.userBup.active = "apk_hw" == G.from && 1 == G.fromVer;
G.setBup(this.userBup, function() {
t.userBox.active = !0;
});
G.zfbAd.gameLogin();
},
start: function() {
G.user.help = !0;
G.playAudio("bg");
},
initRank: function() {
G.updateRank = function() {
G.temp.rankTime = G.VAL.RANK_TIME;
G.user.rank = [];
for (var t = [], e = [ [ 18, 27 ], [ 28, 45 ], [ 46, 63 ] ], n = 0; n < 60; n++) {
var a = Math.floor(n / 20), o = G._.random(e[a][0], e[a][1]), m = [ 0, 0, 0, 0, 0, o, G.getRoleName(G._.random(0, 1)), 0, 0 ], r = G.getFightData(!1, m[5]), s = 1 + G._.random(-30, 150) / 50;
m[5] > 55 && (s = 1 + G._.random(100, 250) / 50);
m[0] = Math.ceil(s * r[0]);
m[1] = Math.ceil(s * r[1]);
m[2] = Math.ceil(s * r[2]);
m[3] = Math.ceil(s * r[3]);
m[4] = Math.ceil(s * r[4]);
m[7] = G._.random(2 * o, 5 * o);
m[8] = G._.random(o, 3 * o);
t.push({
lev: m[5],
fight: m[4],
point: 2 * m[7] + m[8],
user: m
});
}
for (var l, p = i(G._.sortBy(t, [ "point", "fight", "lev" ])); !(l = p()).done; ) {
var d = l.value;
G.user.rank.push(d.user);
}
G.save();
};
G.updateHomeRank = function() {
var t = [ [ 10, 27 ], [ 28, 45 ], [ 46, 63 ] ];
G.user.homeRank = [];
for (var e = [], n = 0; n < 60; n++) {
var a = Math.floor(n / 30) + 1, o = G._.random(t[a][0], t[a][1]), m = [ 0, 0, 0, 0, 0, 0, G._.random(1, 9), G.getHomeName(), o, G.getRoleName(G._.random(0, 1)), 0, 0 ];
m[5] = Math.min(15, 2 + m[8] / 5);
var r = G.getFightData(!1, m[8]), s = 1 + G._.random(-30, 150) / 50;
m[8] > 55 && (s = 1 + G._.random(100, 250) / 50);
s *= 1 + .1 * m[5];
m[0] = Math.ceil(s * r[0]);
m[1] = Math.ceil(s * r[1]);
m[2] = Math.ceil(s * r[2]);
m[3] = Math.ceil(s * r[3]);
m[4] = Math.ceil(s * r[4]);
m[10] = G._.random(o, 2 * o);
m[11] = G._.random(o, 2 * o);
e.push({
lev: m[8],
fight: m[4],
point: 2 * m[10] + m[11],
user: m
});
}
for (var l, p = i(G._.sortBy(e, [ "point", "fight", "lev" ])); !(l = p()).done; ) {
var d = l.value;
G.user.homeRank.push(d.user);
}
G.save();
};
G.updateRelifeRank = function() {
var t = G._.random(10, 20), e = [];
if (G.user.relifeRank.length > 1) for (var n = G.user.relifeRank.length, a = 0; a < n; a++) {
var o = G._.random(1, 100);
if (a < t) {
if (o < 20) {
G.user.relifeRank[a][0] += G._.random(0, 2);
G.user.relifeRank[a][1] += G._.random(0, 1);
G.user.relifeRank[a][1] = Math.min(63, G.user.relifeRank[a][1]);
G.user.relifeRank[a][2] = G.getRoleName(G._.random(0, 1));
}
} else if (o < 10) {
G.user.relifeRank[a][0] += G._.random(0, 2);
G.user.relifeRank[a][1] += G._.random(0, 1);
G.user.relifeRank[a][1] = Math.min(63, G.user.relifeRank[a][1]);
}
e.push({
point: G.user.relifeRank[a][0],
user: G.user.relifeRank[a]
});
} else for (var m = 0; m < 50; m++) {
var r = [ G._.random(1, 3) + 2 * G._.random(1, 3) + 3 * G._.random(1, 3) + 4 * G._.random(1, 2) + 5 * G._.random(0, 2) + 6 * G._.random(0, 2) + 7 * G._.random(0, 1) + 20 * G._.random(0, 1), G._.random(45, 63), G.getRoleName(G._.random(0, 1)) ];
e.push({
lev: r[1],
point: r[0],
user: r
});
}
for (var s, l = [], p = i(G._.sortBy(e, [ "point", "lev" ])); !(s = p()).done; ) {
var d = s.value;
l.push(d.user);
}
G.user.relifeRank = l;
G.save();
};
}
});
cc._RF.pop();
}, {} ]
