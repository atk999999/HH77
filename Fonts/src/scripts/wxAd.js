// Decrypted 1:1 module `wxAd` from assets/main/index.231ca.js
wxAd: [ function(t, e) {
"use strict";
cc._RF.push(e, "f9b2elO6UVLzbDXNX5aMjBM", "wxAd");
var i = null, n = null, a = null, o = null, m = null, r = null, s = null, l = [ 1, 2, 3 ], p = 0, d = null, c = [ "wx707483f0ea57ce64", "wx845b46b043a8805d", "wx6ff31c670f897b1f", "wx280b9b8efa94af18" ], u = [ "adunit-55f2cbea7c656317", "adunit-ed8d0a60f005e8a7", "adunit-de35988bd3aa0302", "adunit-5c59b18a2e852b46" ], y = [ "BqpEzYGTlQxmbKatcyfC7e2dovkZyO3f", "tIvOyW2oPuVzua1KCGkTtLrcX5xByUjs", "z8llZAeNBYg4duUQbiqKrjyDhf7sto10", "CtybcPXUDtegNZf2F5Svwjs3vRaJcmhd" ];
function f(t, e) {
void 0 === e && (e = !1);
if ("wx" == G.from && -1 != l.indexOf(t)) {
var n = wx.getSystemInfoSync(), a = n.screenWidth, o = n.screenHeight;
if (null != i) {
i.destroy();
i = null;
}
(i = wx.createBannerAd({
adUnitId: "adunit-d9111d5127e6b0b8",
style: {
left: 0,
top: o - 105 * a / 300,
width: a
}
})).onError(function(t, e) {
console.log("wx banner0 err:", t, e);
i = null;
});
i.onLoad(function() {
console.log("wx banner onload ok");
if (e) {
p++;
i.show();
} else i.hide();
});
}
}
function x(t) {
var e = cc.find("Canvas/msgBox");
null != e && e.getComponent("msgBox").showMsg(t);
}
function h() {
if ("wx" == G.from) {
var t = {
accessToken: y[G.fromVer],
clientId: G.userId,
autoTrack: {
appLaunch: !0,
appShow: !0,
appHide: !0
},
name: "ge",
debugMode: "none"
}, e = new GravityAnalyticsAPI(t);
e.setupAndStart();
e.initialize({
name: G.userId,
version: 1,
openid: G.userId,
enable_sync_attribution: !1
}).then(function(t) {
console.log("initialize success " + t);
}).catch(function(t) {
console.log("initialize failed, error is " + t);
});
}
}
function g() {
if ("wx" == G.from) {
console.log("yl ad event");
ge.adShowEvent("reward", u[G.fromVer], {
custom_param: "cx"
});
}
}
e.exports = {
setAdPos: function(t) {
l = t;
},
appShare: function(t, e) {
if ("wx" == G.from) {
wx.showShareMenu();
wx.onShareAppMessage(function() {
return {
title: t,
imageUrl: e
};
});
}
},
bupShare: function(t, e, i, n) {
void 0 === i && (i = null);
if ("wx" == G.from) {
G.temp.jumpToOther = 1;
wx.updateShareMenu({
withShareTicket: !0,
success: function() {
wx.shareAppMessage({
title: t,
imageUrl: e,
query: i
});
}
});
} else n && n();
},
createBanner: f,
onOffBanner: function(t, e) {
void 0 === e && (e = 0);
if ("wx" == G.from) if (t) if (i) {
p++;
i.show();
} else {
p = 0;
f(1, !0);
} else {
i && i.hide();
if (p > 2) {
p = 0;
f(1);
}
}
},
resetBanner: function(t) {
if ("wx" == G.from && -1 != l.indexOf(t)) {
var e = wx.getSystemInfoSync(), n = e.screenWidth, a = e.screenHeight;
null != i && i.destroy();
(i = wx.createBannerAd({
adUnitId: "adunit-d9111d5127e6b0b8",
style: {
left: 0,
top: a - 105 * n / 300,
width: n
}
})).onError(function(t, e) {
console.log("wx banner0 err:", t, e);
i = null;
});
i.onLoad(function() {
i.show();
});
}
},
createVedio: function(t) {
void 0 === t && (t = 1);
if ("wx" == G.from && null == n && -1 != l.indexOf(t)) {
(n = wx.createRewardedVideoAd({
adUnitId: u[G.fromVer]
})).onClose(function(t) {
if (t && t.isEnded || void 0 === t) {
if (null != r && null != r) {
G.freeAd();
r();
}
} else null != s && null != s && s();
G.replayAudio();
});
n.onError(function(t) {
console.log("广告加载错误：", t);
x("广告加载失败0");
});
}
},
showVedio: function(t, e) {
if ("h5" != G.form) {
if ("wx" == G.from) if (null != n) {
r = t;
s = e;
g();
n.show().catch(function() {
n.load().then(function() {
g();
n.show();
}).catch(function() {
x("广告加载失败2");
null != e && e();
});
});
} else {
x("广告加载失败3");
null != e && e();
}
} else t();
},
createInter: function(t) {
"wx" == G.from && null == a && -1 != l.indexOf(t) && (a = wx.createInterstitialAd({
adUnitId: "adunit-7776a78c4507bdb3"
}));
},
showInter: function() {
"wx" == G.from && null != a && a.show().catch(function(t) {
console.error(t);
});
},
onShowHide: function() {
cc.game.on(cc.game.EVENT_HIDE, function() {
new Date().getTime();
});
cc.game.on(cc.game.EVENT_SHOW, function() {
G.replayAudio();
});
},
createGrid: function() {
if ("wx" == G.from && null == o) {
console.log("create grid0");
(o = wx.createCustomAd({
adUnitId: "adunit-5a38d14b158869ac",
adIntervals: 40,
style: {
left: 20,
top: 180,
fixed: !0
}
})).onLoad(function() {
console.log("grid0 load ok");
});
o.onError(function(t) {
console.log("grid0 err,", t.errCode);
});
}
if ("wx" == G.from && null == m) {
console.log("create grid1");
var t = wx.getSystemInfoSync().screenWidth - 80;
(m = wx.createCustomAd({
adUnitId: "adunit-48020e5e5d3b657c",
adIntervals: 40,
style: {
left: t,
top: 180,
fixed: !0
}
})).onLoad(function() {
console.log("grid1 load ok");
});
m.onError(function(t) {
console.log("grid1 err,", t.errCode);
});
}
},
showGrid: function(t) {
if ("wx" == G.from) {
if (null != o) if (t) {
console.log("wx grid0 show");
o.show();
} else {
console.log("wx grid0 hide");
o.hide();
}
if (null != m) if (t) {
console.log("wx grid1 show");
m.show();
} else {
console.log("wx grid1 hide");
m.hide();
}
}
},
createClubBup: function() {
if ("wx" == G.from && null == d) {
var t = wx.getSystemInfoSync().screenHeight / G.VAL.DH * 200;
(d = wx.createGameClubButton({
type: "image",
icon: "green",
style: {
left: 10,
top: t,
width: 40,
height: 40
}
})).hide();
}
},
showClubBup: function(t) {
"wx" == G.from && d && (t ? d.show() : d.hide());
},
initYL: h,
login: function() {
if ("wx" == G.from) {
wx.login({
success: function(t) {
if (t.code) {
console.log(t);
var e = "appId=" + c[G.fromVer] + "&code=" + t.code;
G.http("https://wxplatform.cygame666.cn/platform-go/get/openId", e, function(t) {
console.log(t);
G.userId = t.Openid;
h();
});
} else console.log("登录失败！" + t.errMsg);
}
});
wx.onShareMessageToFriend(function(t) {
console.log("share callbace", t);
});
}
},
setShareData: function(t, e) {
"wx" == G.from && wx.setMessageToFriendQuery({
shareMessageToFriendScene: t,
query: e
});
},
toSub: function(t) {
if ("wx" == G.from) {
var e = wx.getOpenDataContext();
console.log("open data context:", e);
e.postMessage(t);
}
},
setShareCb: function(t) {
wx.onShareMessageToFriend(function(e) {
console.log("share callbace", e);
e.success && t && t();
});
}
};
cc._RF.pop();
}, {} ]
