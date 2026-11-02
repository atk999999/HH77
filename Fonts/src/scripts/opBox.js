// Decrypted 1:1 module `opBox` from assets/main/index.231ca.js
opBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "36b929YEG9Czq6MFL8HVCi9", "opBox");
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
nextBup: cc.Node,
selBox: cc.Node,
txtBox: cc.Node,
nextFont: cc.Label,
relifeBup: cc.Node,
relifeBox: cc.Node,
fbBup: cc.Node,
bupBox: cc.Node,
bupVedio: cc.Node,
selFont: {
default: null,
visible: !1
},
selData: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.nextBup, function() {
G.yl.event("plot", {
plotCount: 1
});
if (t.fbBup.active) {
t.txtBox.getComponent("txtBox").quitFb();
t.fbBup.active = !1;
} else {
if (G.temp.checkAge && G.user.age - G.user.year < 1) {
G.overAge();
return;
}
if (t.relifeBup.active) t.relifeBox.active = !0; else {
G.checkHp();
t.toNext();
}
}
});
var e = this.selBox.children, i = function(i) {
G.setBup(e[i], function() {
t.toSel(Number(i));
});
};
for (var n in e) i(n);
},
showSel: function(t, e) {
this.nextBup.active = !t;
this.selBox.active = t;
t && this.setSel(e);
},
setSel: function(t) {
this.selFont = [];
this.selData = [];
this.bupVedio.active = !1;
for (var e, n = this.selBox.children, a = i(n); !(e = a()).done; ) e.value.active = !1;
var o = t.split(",");
for (var m in o) {
n[m].active = !0;
var r = o[m].split("|");
n[m].getChildByName("font").getComponent(cc.Label).string = r[0];
this.bupVedio.active || "vedio" != r[1] || (this.bupVedio.active = !0);
this.selFont.push(r[0]);
this.selData.push(r[1]);
}
},
toNext: function() {
this.showSel(!1);
G.gj(!1);
G.nextStory();
},
toSel: function(t) {
var e = this;
this.showSel(!1);
G.gj(!1);
if (0 == G.temp.fight[0]) {
if (-1 != [ "继续游历", "尝试突破" ].indexOf(this.selFont[t])) {
G.temp.ageFlag = !1;
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt(this.selFont[t], "home", !0);
G.temp.ageFlag = !0;
}
if ("end" != this.selData[t]) if ("vedio" != this.selData[t]) if ("shop" != this.selData[t]) if (-1 == this.selData[t].indexOf("age")) if ("tp" != this.selData[t]) {
G.setOpType(0);
G.setStep(this.selData[t]);
G.nextStory();
} else {
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
this.bupBox.getComponent("bupBox").jumpTo(0);
} else {
var i = this.selData[t].split("_")[1];
this.getDan(Number(i));
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
} else {
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
this.bupBox.getComponent("bupBox").jumpTo(3);
} else {
G.ylAdEvent("剧情弹出灵石广告");
G.showVedio(function() {
e.adGift();
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
G.nextStory();
}, function() {
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
G.nextStory();
});
} else {
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
G.nextStory();
}
} else {
G.temp.fight[1] = this.selData[t];
G.fightStory();
}
},
relife: function() {
G.relife();
this.relifeBup.active = !0;
this.showSel(!1);
},
resetState: function() {
this.fbBup.active = !1;
this.relifeBup.active = !1;
this.showSel(!1);
},
quitFb: function() {
this.fbBup.active = !0;
},
adGift: function() {
var t = G._.random(1, 100), e = G.getAdConf();
if (t < 30) {
G.addExp(e.exp, 1);
G.temp.res = [ "【灵气】+" + e.exp ];
} else {
G.user.coin += e.money;
G.temp.res = [ "【灵石】+" + e.money ];
G.save();
}
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt("【修仙商人】的礼物，你获得了：", "vedioEnd");
},
getDan: function(t) {
var e = G.levConf[G.user.lev - 1], i = [ 143001, 143002, 143003, 144001, 144002, 144003 ];
if (i[e.stage - 1]) {
G.user.age -= t;
G.r_item(i[e.stage - 1] + "|1");
G.save();
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt("炼丹成功。", "end");
}
}
});
cc._RF.pop();
}, {} ]
