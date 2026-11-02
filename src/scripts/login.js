// Decrypted 1:1 module `login` from assets/main/index.231ca.js
login: [ function(t, e) {
"use strict";
cc._RF.push(e, "ae9e9QaTZFOIqxpDHUO9E7h", "login");
t("../src/unit/global").init();
cc.Class({
extends: cc.Component,
properties: {
ver: cc.Label,
userTips: cc.Node,
userAgree: cc.Node,
loading: cc.Label,
wxTitle: cc.Node,
ttTitle: cc.Node,
ksTitle: cc.Node,
ksOwn: cc.Node,
apkTitle: cc.Node,
zfbTitle0: cc.Node,
vivoTitle0: cc.Node,
vivoTitle1: cc.Node,
hwTitle0: cc.Node,
hwTitle1: cc.Node,
t233: cc.Node,
zfbOwn: cc.Node,
hwOwn0: cc.Node,
hwOwn1: cc.Node,
loadStep: {
default: -1,
visible: !1
}
},
onLoad: function() {
cc.debug.setDisplayStats(!1);
if ("h5" == G.from && cc.sys.isMobile) {
var t = this.node.getComponent(cc.Widget);
t.isAlignLeft = !0;
t.isAlignRight = !0;
}
G.initTemp();
G.temp.gameStart = !1;
this.ver.string = "v" + G.ver;
if ("h5" != G.from) {
this.apkTitle.active = "apk_tap" == G.from;
var e = this.wxTitle.children;
for (var i in e) "wx" == G.from && (e[i].active = i == G.fromVer);
var n = this.ttTitle.children;
for (var a in n) "tt" == G.from && (n[a].active = a == G.fromVer);
var o = this.ksTitle.children;
for (var m in o) "ks" == G.from && (o[m].active = m == G.fromVer);
var r = this.ksOwn.children;
for (var s in r) "ks" == G.from && (r[s].active = s == G.fromVer);
this.zfbTitle0.active = "zfb" == G.from && 0 == G.fromVer;
this.vivoTitle0.active = "apk_vivo" == G.from;
this.vivoTitle1.active = "vivo" == G.from;
this.t233.active = "apk_233" == G.from && 1 == G.fromVer;
this.hwTitle0.active = "apk_hw" == G.from && 0 == G.fromVer;
this.hwTitle1.active = "apk_hw" == G.from && 1 == G.fromVer;
this.zfbOwn.active = "zfb" == G.from;
this.hwOwn0.active = "apk_hw" == G.from && 0 == G.fromVer;
this.hwOwn1.active = "apk_hw" == G.from && 1 == G.fromVer;
}
G.msgToAndroid(G.gameName);
G.viewScale();
G.initUser();
G.getSave();
G.setUserId("xx_userId");
this.initAd();
if (-1 != G.from.indexOf("apk")) if (G.objConf) this.loadJson(); else {
G.initJsBridge();
this.schedule(this.checkBridge, .1);
} else {
if ("vivo" == G.from && "ok" != G.getItem("xx_tips")) {
this.userAgree.active = !0;
return;
}
this.loadJson();
}
},
initAd: function() {
if ("wx" == G.from) {
G.wxAd.appShare("沉浸式剧情，等你来修真！", "https://wap.51lingli.com/mud_xx/share.png");
G.wxAd.createVedio();
G.wxAd.createClubBup();
G.wxAd.login();
} else if ("tt" == G.from) {
G.ttAd.login();
G.ttAd.createVedio();
G.ttAd.recorderInit();
} else if ("vivo" == G.from) G.vivoAd0.init(); else if ("zfb" == G.from) {
G.zfbAd.login();
G.zfbAd.createVedio();
G.zfbAd.createBanner();
G.zfbAd.gameLoad();
} else if ("ks" == G.from) {
G.ksAd.login();
G.ksAd.init();
}
cc.game.on(cc.game.EVENT_SHOW, function() {
G.replayAudio();
});
},
loadOnline: function() {
console.log("load online");
G.initHomeName();
var t = [ "main", "step", "fbStep", "obj", "guai", "skill", "title", "lev", "home", "own", "copy", "ad", "fight", "fightStep", "fightTask", "lianDan", "lianQi", "_15", "_16", "_17", "_18", "_19" ], e = 0, i = t.length, n = this;
(function a(o) {
G.getJson("http://wap.chuxingames.com/json/game_1/" + o + ".txt", function(m) {
e++;
"main" == o ? G.temp.story = m : "step" == o ? G.temp.step = m : "fbStep" == o ? G.temp.fbStory = m : "obj" == o ? G.objConf = m : "guai" == o ? G.guaiConf = m : "skill" == o ? G.skillConf = m : "title" == o ? G.titleConf = m : "lev" == o ? G.levConf = m : "home" == o ? G.homeConf = m : "own" == o ? G.ownConf = m : "copy" == o ? G.copyConf = m : "ad" == o ? G.adConf = m : "fight" == o ? G.fightConf = m : "fightStep" == o ? G.fStepConf = m : "fightTask" == o ? G.fTaskConf = m : "lianDan" == o ? G.ldConf = m : "lianQi" == o ? G.lqConf = m : "_15" == o ? G._15Conf = m : "_16" == o ? G._16Conf = m : "_17" == o ? G._17Conf = m : "_18" == o ? G._18Conf = m : "_19" == o && (G._19Conf = m);
n.loading.string = "加载中...(" + e + "/" + i + ")";
if (t.length > 0) a(t.pop()); else {
G.initGame();
G.setStageObj();
n.startGame();
}
});
})(t.pop());
},
loadJson: function() {
var t = this;
console.log("load local");
G.initHomeName();
var e = [ "main", "step", "fbStep", "obj", "guai", "skill", "title", "lev", "home", "own", "copy", "ad", "fight", "fightStep", "fightTask", "lianDan", "lianQi", "_15", "_16", "_17", "_18", "_19" ], i = 0;
G.loadMoreJson("story", e, function(n, a) {
i++;
"main" == n ? G.temp.story = a : "step" == n ? G.temp.step = a : "fbStep" == n ? G.temp.fbStory = a : "obj" == n ? G.objConf = a : "guai" == n ? G.guaiConf = a : "skill" == n ? G.skillConf = a : "title" == n ? G.titleConf = a : "lev" == n ? G.levConf = a : "home" == n ? G.homeConf = a : "own" == n ? G.ownConf = a : "copy" == n ? G.copyConf = a : "ad" == n ? G.adConf = a : "fight" == n ? G.fightConf = a : "fightStep" == n ? G.fStepConf = a : "fightTask" == n ? G.fTaskConf = a : "lianDan" == n ? G.ldConf = a : "lianQi" == n ? G.lqConf = a : "_15" == n ? G._15Conf = a : "_16" == n ? G._16Conf = a : "_17" == n ? G._17Conf = a : "_18" == n ? G._18Conf = a : "_19" == n && (G._19Conf = a);
t.loading.string = "加载中...(" + i + "/" + e.length + ")";
if (i >= e.length) {
G.initGame();
G.setStageObj();
t.startGame();
}
});
},
startGame: function() {
G.temp.adStime = 0;
G.temp.adEtime = 0;
G.temp.errTimes = 2;
G.user.lev = Math.min(63, G.user.lev);
cc.director.loadScene("menu");
},
checkBridge: function() {
if (G.getBridgeState() && this.loadStep < 0) {
this.loadStep = 0;
this.unschedule(this.checkBridge);
"apk_233" == G.from ? G.askAppLogin() : "ok" == G.getItem("xx_tips") ? G.askAppLogin() : -1 != [ "apk_vivo", "apk_mi", "apk_hw" ].indexOf(G.from) ? this.userAgree.active = !0 : this.userTips.active = !0;
this.schedule(this.checkLogin, .1);
}
},
checkLogin: function() {
if (G.getLoginState() && this.loadStep < 1) {
this.loadStep = 1;
this.unschedule(this.checkLogin);
this.loadJson();
}
}
});
cc._RF.pop();
}, {
"../src/unit/global": "global"
} ]
