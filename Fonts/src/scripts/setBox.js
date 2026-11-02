// Decrypted 1:1 module `setBox` from assets/main/index.231ca.js
setBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "ad600eDzEFA1ahCVal6Nn5K", "setBox");
cc.Class({
extends: cc.Component,
properties: {
bup0: cc.Node,
bup1: cc.Node,
sel0: cc.Node,
sel1: cc.Node,
codeInput: cc.EditBox,
codeBup: cc.Node,
adSkip: cc.Label,
userBup0: cc.Node,
userBup1: cc.Node,
userAgree: cc.Node,
userBox0: cc.Node,
userBox1: cc.Node
},
onLoad: function() {
var t = this;
this.sel0.active = G.user.audio[0];
this.sel1.active = G.user.audio[1];
this.bup0.getComponent("bup").setCb(function() {
G.user.audio[0] = !G.user.audio[0];
t.sel0.active = G.user.audio[0];
if (G.user.audio[0]) G.playAudio("bg"); else {
G.temp.audio = null;
cc.audioEngine.stopMusic();
}
G.save();
});
this.bup1.getComponent("bup").setCb(function() {
G.user.audio[1] = !G.user.audio[1];
t.sel1.active = G.user.audio[1];
G.save();
});
G.setBup(this.codeBup, function() {
t.checkCode();
});
G.setBup(this.userBup0, function() {
t.userAgree.active = !0;
t.userBox0.active = !0;
t.userBox1.active = !1;
});
G.setBup(this.userBup1, function() {
t.userAgree.active = !0;
t.userBox0.active = !1;
t.userBox1.active = !0;
});
this.userBup0.active = "vivo" == G.from;
this.userBup1.active = "vivo" == G.from;
},
onEnable: function() {
this.adSkip.string = "免广告次数：" + G.user.adSkip;
},
checkCode: function() {
if ("" != this.codeInput.string) {
var t = G.getItem("xx_code");
if (t) G.showTips("兑换次数已用完"); else {
t = Number(this.codeInput.string);
if (-1 != G.VAL.CODE_LIST.indexOf(t)) {
G.user.adSkip = 3;
G.setItem("xx_code", t);
this.codeInput.string = "";
this.adSkip.string = "免广告次数：" + G.user.adSkip;
G.showTips("免广告次数 +3");
G.save(!0);
} else G.showTips("兑换码错误");
}
} else G.showTips("请输入兑换码");
},
checkCode1: function() {
if ("" != this.codeInput.string) {
var t = Number(this.codeInput.string), e = 0, i = 0;
if (t == G.VAL.CODE[0]) e = G.VAL.CODE[1]; else if (-1 != G.VAL.CODE_LIST.indexOf(t)) e = G.VAL.CODE[2]; else if (t == G.VAL.GIFT_0[0]) i = 1; else if (t == G.VAL.GIFT_1[0]) i = 2; else if (t == G.VAL.GIFT_2[0]) i = 3; else if (t == G.VAL.GIFT_3[0]) i = 4; else if (t == G.VAL.GIFT_4[0]) i = 5; else if (t == G.VAL.GIFT_5[0]) i = 6; else {
if (t != G.VAL.GIFT_6[0]) {
G.showTips("兑换码错误");
return;
}
i = 7;
}
if (0 == i) if (-1 == G.user.code.indexOf(t)) {
G.user.code.push(t);
G.user.adSkip += e;
G.save();
G.showTips("兑换成功");
} else G.showTips("兑换次数已用完"); else if (1 == i) if (-1 == G.user.code.indexOf(t)) {
G.user.code.push(t);
G.user.coin += G.VAL.GIFT_0[1];
G.r_item(G.VAL.GIFT_0[2] + "|1");
G.r_item(G.VAL.GIFT_0[3] + "|1");
G.save();
G.showTips("兑换成功");
} else G.showTips("兑换次数已用完"); else if (2 == i || 3 == i || 4 == i || 5 == i) if (-1 == G.user.code.indexOf(t)) {
G.user.code.push(t);
var n = [];
2 == i ? n = G.VAL.GIFT_1 : 3 == i ? n = G.VAL.GIFT_2 : 4 == i ? n = G.VAL.GIFT_3 : 5 == i && (n = G.VAL.GIFT_4);
for (var a = 1; a < n.length; a++) G.r_item(n[a] + "|1");
G.save();
G.showTips("兑换成功");
} else G.showTips("兑换次数已用完"); else if (6 == i || 7 == i) if (-1 == G.user.code.indexOf(t)) {
G.user.code.push(t);
6 == i ? G.user.coin += G.VAL.GIFT_5[1] : 7 == i && (G.user.coin += G.VAL.GIFT_6[1]);
G.save();
G.showTips("兑换成功");
} else G.showTips("兑换次数已用完");
this.codeInput.string = "";
this.adSkip.string = "免广告次数：" + G.user.adSkip;
} else G.showTips("请输入兑换码");
}
});
cc._RF.pop();
}, {} ]
