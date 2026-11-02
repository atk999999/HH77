// Decrypted 1:1 module `zfbAd` from assets/main/index.231ca.js
zfbAd: [ function(t, e) {
"use strict";
cc._RF.push(e, "1d7d6/EABVKPYm5dRoMvOe2", "zfbAd");
var i = null, n = null, a = null, o = null, m = null, r = [ "ad_tiny_2021004138614350_202403252200086797" ], s = [ "ad_tiny_2021004138614350_202403252200086834" ], l = [ "6IvBPdRwQOa37AiuqlyKjTYujn19rq0M" ], p = {};
function d() {
if ("zfb" == G.from) {
var t = {
accessToken: l[G.fromVer],
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
function c() {
"zfb" == G.from && my.gameBiz && my.gameBiz.reportAuthorized && my.gameBiz.reportAuthorized();
}
e.exports = {
createBanner: function() {
if ("zfb" == G.from) {
p = my.getSystemInfoSync();
console.log(p);
var t = p.windowWidth / 1500 * 360;
(i = my.createBannerAd({
adUnitId: s[G.fromVer],
style: {
left: 0,
top: p.windowHeight - t,
width: p.windowWidth
}
})).onError(function(t) {
console.log("banner err:", t);
});
}
},
showBanner: function() {
if ("zfb" == G.from && i) {
console.log("show banner");
i.show().catch(function(t) {
return console.log(t);
});
}
},
closeBanner: function() {
if ("zfb" == G.from && i) {
console.log("hide banner");
i.hide();
}
},
createVedio: function() {
if ("zfb" == G.from) {
(n = my.createRewardedAd({
adUnitId: r[G.fromVer]
})).onLoad(function() {
console.log("激励广告加载成功");
});
n.onError(function(t) {
console.log(t);
});
n.onClose(function(t) {
if (t && t.isEnded) {
if (null != o && null != o) {
my.dot.payFilter(0, "vedio", 1);
G.freeAd();
o();
}
} else null != m && null != m && m();
G.replayAudio();
});
}
},
showVedio: function(t, e) {
if ("h5" != G.form) {
if ("zfb" == G.from) if (null != n) {
o = t;
m = e;
my.dot.payFilter(0, "vedio", 0);
n.show().catch(function() {
n.load().then(function() {
return n.show();
});
});
} else {
i = "广告加载失败", null != (a = cc.find("Canvas/msgBox")) && a.getComponent("msgBox").showMsg(i);
null != e && e();
}
} else t();
var i, a;
},
createInter: function() {
if ("zfb" == G.from) {
var t = p.windowWidth / 1242 * 670;
(a = my.createBannerAd({
adUnitId: "ad_tiny_2021004138614350_202403252200086800",
style: {
left: 0,
top: (p.windowHeight - t) / 2,
width: p.windowWidth
}
})).onError(function(t) {
console.log("inter err:", t);
});
}
},
showInter: function() {
if ("zfb" == G.from && null != a) {
console.log("show inter");
a.show().catch(function(t) {
return console.log(t);
});
}
},
hideInter: function() {
if ("zfb" == G.from && a) {
console.log("hide inter");
a.hide();
}
},
login: function() {
"zfb" == G.from && my.xgSdkInit(function(t) {
console.log(t);
G.userId = t;
d();
c();
my.dot.auth();
});
},
deep: function() {
"zfb" == G.from && my.dot.deepAuth();
},
gameLoad: function() {
"zfb" == G.from && my.gameBiz && my.gameBiz.reportLoadingCompleted && my.gameBiz.reportLoadingCompleted();
},
gameAgree: c,
gameLogin: function() {
"zfb" == G.from && my.gameBiz && my.gameBiz.reportGamePlay && my.gameBiz.reportGamePlay();
},
ylEvent: function() {
if ("zfb" == G.from) {
console.log("引力上传修为事件");
var t = {
access_token: "6IvBPdRwQOa37AiuqlyKjTYujn19rq0M",
body: {
client_id: G.userId,
event_list: [ {
type: "profile",
event: "lev",
time: new Date().getTime(),
properties: {
$lev: G.user.lev
}
} ]
}
};
G.http("https://backend.gravity-engine.com/event_center/api/v1/event/collect", JSON.stringify(t), function(t) {
console.log("引力 res:", t);
});
}
}
};
cc._RF.pop();
}, {} ]
}, {}, [ "login", "userTips", "moveJs", "msgBox", "rotationJs", "scaleJs", "setBox", "tipsBox", "typeBox", "userAgreeBox", "acBox", "bagBox", "bupBox", "coinBox", "copyBox", "dataBox", "dataSkillBox", "debugBox", "expGj", "fbBox", "fightBox", "fightTxtBox", "firstGifeBox", "fsBox", "fsListBox", "gameBox", "gfBox", "homeBox", "homeView0", "homeView1", "homeView2", "homeView3", "infoBox", "infoSkillBox", "makeBox", "menu", "nameBox", "opBox", "bagItem", "coinBuff", "copyItem", "copyUgcItem", "dataItem", "fbItem", "fightFsItem", "fightTxtItem", "fontClick", "fsItem", "imgAction", "makeItem", "manItem", "rankItem", "skillItem", "taskItem", "titleItem", "txtItem", "zfManItem", "rankBox", "relifeFbBox", "relifeTipsBox", "retBox", "shopBox", "stateBox", "titleBox", "tpBox", "txtBox", "vedioSkillBox", "winBox", "editItem0", "editItem1", "editItem2", "ugcBox", "ugcItem", "apk_233", "apk_mi", "apk_tap", "apk_vivo", "gravityengine.mg.cocoscreator.min", "hwAd", "ksAd", "index", "ttAd", "ttGiftBox", "ttJs", "vivoAd", "wxAd", "ylEvent", "zfbAd", "audioBox", "baseBox", "boxAction", "bup", "scaleFit", "homeNameConf", "nameConf", "valConf", "aStar", "checkStep", "crypto-js", "global", "lodash", "moment", "promise" ]);
