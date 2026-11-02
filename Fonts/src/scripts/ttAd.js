// Decrypted 1:1 module `ttAd` from assets/main/index.231ca.js
ttAd: [ function(t, e) {
"use strict";
cc._RF.push(e, "45046k0spRFkq21ZGp2jBHs", "ttAd");
var i = null, n = !1, a = "", o = null, m = null, r = null, s = null, l = null, p = null, d = null, c = null, u = [ "文字修真传", "修仙转生日志", "文字修仙传", "全民大侠" ], y = [ "ttcd3cbb81520c8c0302", "ttd7bba106488a574c02", "tt209e5623bfafeb2302", "tt035675eb9c6a6da202" ], f = [ "9fp3fe2mkes54inn2v", "40n5ecgn71jchdjap2", "7jh0ifees5h5a1ll8e", "88fkm40da63g1e6bc4" ], x = [ "bbF7gCIw8naGMlw1QzukndfTApD5gyrV", "1Vqu9yRQnxuIE4eLabpNscmlU2vgqiw3", "ohsvEkVqUj2gpclZnzIMdvpoWnfsXbjm", "BTNbcPM4XjxAzepyispFsjzgkR2fu3Wv" ], h = 0;
function g() {
if ("tt" == G.from) {
null != o && o.destroy();
var t = tt.getSystemInfoSync(), e = t.windowWidth, i = t.windowHeight;
(o = tt.createBannerAd({
adUnitId: "25eo5no953g1bjjrqf",
style: {
width: 200
}
})).onError(function(t, e) {
console.log("tt banner0 err:", t, e);
o = null;
});
o.onLoad(function() {
console.log("tt banner onload ok");
o.hide();
});
o.onResize(function(t) {
console.log(t.width, t.height);
o.style.top = i - t.height;
o.style.left = (e - t.width) / 2;
});
}
}
function v(t, e, o) {
void 0 === o && (o = 300);
if ("tt" == G.from && null != i) {
n = !1;
a = "";
p = t;
c = e;
i.start({
duration: o
});
}
}
function _(t) {
if ("tt" == G.from && null != i && n) {
d = t;
i.stop();
}
}
function b() {
if ("tt" == G.from) {
var t = {
accessToken: x[G.fromVer],
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
G.yl.ge = e;
G.yl.event("login", {
loginTimesToday: 1
});
}
}
e.exports = {
login: function() {
"tt" == G.from && tt.login({
force: !1,
success: function(t) {
console.log(t);
console.log("login 调用成功" + t.code + " " + t.anonymousCode);
var e = "appId=" + y[G.fromVer] + "&code=" + t.code;
G.http("https://dyplatform.cygame666.cn/platform_go_bytedance/get/openId", e, function(t) {
console.log("openId:", t);
if ("" != t.Openid) {
G.userId = t.Openid;
b();
}
});
},
fail: function() {
console.log("login 调用失败");
}
});
},
onShow: function() {
if ("tt" == G.from) {
console.log("on show cb");
tt.onShow(function(t) {
console.log("启动参数：", t.query);
console.log("来源信息：", t.refererInfo);
console.log("场景值：", t.scene);
console.log("启动场景字段：", t.launch_from, ", ", t.location);
localStorage.setItem("tt_from", t.launch_from);
});
}
},
setAdPos: function() {},
createBanner: g,
onOffBanner: function(t) {
if ("tt" == G.from && null != o) if (t) o.show(); else if (G.temp.adTime > 30) {
G.temp.adTime = 0;
g();
} else o.hide();
},
createVedio: function() {
if ("tt" == G.from && null == m) {
console.log("vedio init");
(m = tt.createRewardedVideoAd({
adUnitId: f[G.fromVer]
})).onClose(function(t) {
if (t.isEnded) {
if (s) {
G.yl.event("adShowEnd", {
adPostion: G.yl.adPos,
noAdTicket: G.user.adSkip > 0
});
G.freeAd();
s();
}
} else l && l();
});
}
},
showVedio: function(t, e) {
console.log("show vedio 0");
if ("tt" == G.from) if (null != m) {
console.log("show vedio 1");
s = t;
l = e;
G.temp.ttTime = 0;
m.show().then(function() {
console.log("广告显示成功");
G.temp.ttTime = 0;
}).catch(function(t) {
console.log("广告组件出现问题", t);
m.load().then(function() {
console.log("手动加载成功");
G.temp.ttTime = 0;
return videoAd.show();
});
}).catch(function() {
G.showMsg("广告准备中，请稍后重试!");
});
} else {
G.showMsg("广告准备中，请稍后重试!");
null != e && e();
}
},
createInter: function() {
"tt" == G.from && null == r && "Toutiao" === tt.getSystemInfoSync().appName && (r = tt.createInterstitialAd({
adUnitId: "5eu01juk2sii3c675f"
}));
},
showInter: function() {
"tt" == G.from && null != r && G.temp.ttTime > 60 && r.load().then(function() {
G.temp.ttTime = 0;
r.show();
}).catch(function(t) {
console.log(t);
});
},
recorderInit: function() {
if ("tt" == G.from && null == i) {
console.log("recorder init");
a = "";
n = !1;
(i = tt.getGameRecorderManager()).onStart(function() {
console.log("录屏开始");
n = !0;
a = "";
h = new Date().getTime();
p && p();
});
i.onStop(function(t) {
console.log("录屏结束，视频路径： ", t.videoPath);
n = !1;
a = t.videoPath;
var e = new Date().getTime(), i = Math.floor((e - h) / 1e3);
if (0 == h || i < 3) {
a = "";
G.showTips("录屏失败：录屏时长低于 3 秒");
} else d && d();
h = 0;
});
i.onError(function(t) {
console.log("录屏错误:", t);
n = !1;
a = "";
G.showTips("录屏调起异常，请退出重试!");
c && c();
});
}
},
useRecorder: function(t, e) {
if (null != i) {
n ? _(e) : v(t);
return n;
}
G.showTips("录屏调起异常，请退出重试!");
},
startRecorder: v,
stopRecorder: _,
recordShare: function(t, e) {
if ("tt" == G.from) {
console.log("share vedio path:", a);
if ("" == a) {
G.showTips("需要录制不短于3秒的视频才能进行分享！");
return;
}
tt.shareAppMessage({
channel: "video",
title: u[G.fromVer],
desc: "沉浸式剧情，等你来修真！",
extra: {
videoPath: a,
videoTopics: [ "#抖音小游戏", "#修真", "#修仙", "#文字", "#模拟" ]
},
success: function() {
console.log("分享视频成功");
t && t();
},
fail: function(t) {
console.log("分享视频失败", t);
e && e();
}
});
}
},
setStopCb: function(t) {
d = t;
},
recorderIsOk: function() {
return null != i;
},
initYL: b
};
cc._RF.pop();
}, {} ]
