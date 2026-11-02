// Decrypted 1:1 module `global` from assets/main/index.231ca.js
global: [ function(t, e) {
"use strict";
cc._RF.push(e, "330acaihpxMFZl1F+jexCQ3", "global");
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
e.exports = {
init: function() {
console.log("=============global init===============");
window.G = {
ver: 24082101,
gameId: 1,
gameName: "xxMud_3",
from: "apk_tap",
fromVer: 0,
sysMsg: [],
atlas: {},
user: null,
userId: "",
temp: {},
wxAd: t("../ad/wxAd"),
ttAd: t("../ad/ttAd"),
tapAd: t("../ad/apk_tap"),
_233Ad: t("../ad/apk_233"),
miAd: t("../ad/apk_mi"),
vivoAd: t("../ad/apk_vivo"),
vivoAd0: t("../ad/vivoAd"),
zfbAd: t("../ad/zfbAd"),
ksAd: t("../ad/ksAd"),
hwAd: t("../ad/hwAd"),
_: t("./lodash"),
moment: t("./moment"),
crypto: t("./crypto-js"),
nameConf: t("../conf/nameConf"),
homeNameConf: t("../conf/homeNameConf"),
yl: t("../ad/ylEvent")
};
G.VAL = t("../conf/valConf");
G.URL = {
HOST: "https://api.chuxingames.com/api/",
TEST: "tool/test",
TIME: "tool/sys_time",
VER: "conf/check_ver",
FB_LIST: "ugc/list",
FB_TXT: "ugc/txt",
FB_ADD: "ugc/add"
};
G.http = function(t, e, i) {
var n = e ? "POST" : "GET", a = new XMLHttpRequest();
a.open(n, t, !0);
a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
var o = 0;
a.onreadystatechange = function() {
console.log(o++, a);
if (4 == a.readyState && a.status >= 200 && a.status < 400) {
var t = a.responseText;
t = JSON.parse(t);
null != i && i(t);
}
};
a.send(e);
};
G.myHttp = function(t, e, i) {
e.gameId = G.gameId;
e.uid = G.userId;
var n = G.dataDecode(e);
t = G.URL.HOST + t;
var a = "info=" + n;
G.http(t, a, i);
};
G.getSerTime = function(t) {
var e = G.URL.HOST + G.URL.TIME, i = "gameId=" + G.gameId;
G.http(e, i, function(e) {
0 == e.errno && t && t(e);
});
};
G.checkVer = function(t) {
G.myHttp(G.URL.VER, {
gameId: G.gameId,
gameVer: G.user.ver
}, t);
};
G.onlineSave = function() {
var t = G.URL.SAVE, e = "saveType=1&uid=" + G.user.uid + "&gameId=" + G.gameId + "&info=" + JSON.stringify(G.user) + "&score=" + G.user.heart;
G.http(t, e, function(t) {
console.log("save ret:", t);
});
};
G.getRank = function(t) {
var e = G.URL.GET_RANK, i = "gameId=" + G.gameId;
G.http(e, i, function(e) {
if (0 == e.errno) {
G.rank = e.items;
t && t();
}
});
};
G.getJson = function(t, e) {
cc.assetManager.loadRemote(t, {
cacheEnabled: !0
}, function(t, i) {
if (t) cc.error(t); else {
var n = JSON.parse(i.text);
e && e(n);
}
});
};
G.loadJson = function(t, e, i) {
cc.assetManager.loadBundle(t, function(t, n) {
if (t) return console.error(t);
n.load(e, function(t, e) {
if (t) return console.error(t);
var n = JSON.parse(e);
i && i(n);
return n;
});
});
};
G.loadMoreJson = function(t, e, n) {
cc.assetManager.loadBundle(t, function(t, a) {
if (t) return console.error(t);
for (var o, m = function() {
var t = o.value;
a.load(t, function(e, i) {
if (e) return console.error(e);
var a = JSON.parse(i);
n && n(t, a);
});
}, r = i(e); !(o = r()).done; ) m();
});
};
G.viewScale = function(t) {
void 0 === t && (t = !0);
if (cc.sys.isMobile) {
G.VAL.SW = cc.winSize.width;
G.VAL.SH = cc.winSize.height;
G.VAL.SCALE = t ? G.VAL.SW / G.VAL.DW : G.VAL.SH / G.VAL.DH;
console.log(cc.winSize, G.VAL.SCALE);
} else console.log(11, cc.winSize, G.VAL.SCALE);
};
G.setItem = function(t, e) {
"object" == typeof e && (e = JSON.stringify(e));
cc.sys.localStorage.setItem(t, e);
};
G.getItem = function(t) {
var e = cc.sys.localStorage.getItem(t);
null != e && "" != e || (e = null);
return e;
};
G.getFloat = function(t, e) {
void 0 === e && (e = 2);
if (0 == t) return 0;
if (-1 == (t += "").indexOf(".")) return t;
var i = t.split(".")[0], n = t.split(".")[1];
return e > 0 ? i + "." + n.substr(0, e) : i;
};
G.getNum = function(t) {
var e = t < 1e3 ? t : Math.floor(t / 1e3) + "." + Math.floor(t % 1e3 / 100) + Math.floor(t % 100 / 10) + "千";
e = t < 1e4 ? e : Math.floor(t / 1e4) + "." + Math.floor(t % 1e4 / 1e3) + Math.floor(t % 1e3 / 100) + "万";
return t < 1e8 ? e : Math.floor(t / 1e8) + "." + Math.floor(t % 1e8 / 1e7) + Math.floor(t % 1e7 / 1e6) + "亿";
};
G.getNow = function() {
return G.moment().format("YYYY-MM-DD");
};
G.getNowSec = function() {
return Math.floor(new Date().getTime() / 1e3);
};
G.getTime = function(t) {
t < 0 && (t = 0);
var e = Math.floor(t / 3600);
e = e < 10 ? "0" + e : e;
var i = Math.floor(t % 3600 / 60), n = t % 60;
return {
h: e,
m: i = i < 10 ? "0" + i : i,
s: n = n < 10 ? "0" + n : n,
hms: e + ":" + i + ":" + n,
hm: e + ":" + i,
ms: i + ":" + n
};
};
G.randomArray = function(t, e) {
var i = G._.assign([], t);
e = Math.min(e, i.length);
for (var n = [], a = 0; a < e; a++) {
var o = G._.random(0, i.length - 1);
n.push(i[o]);
i.splice(o, 1);
}
return n;
};
G.getKeyIv = function(t) {
var e = t;
return e.substr(0, 3) + G.moment().date() + e[4] + e[3] + G.moment().date() + e[5] + e[6];
};
G.base64Encode = function(t) {
t = G.crypto.enc.Utf8.parse(t);
return G.crypto.enc.Base64.stringify(t);
};
G.base64Decode = function(t) {
return G.crypto.enc.Base64.parse(t).toString(G.crypto.enc.Utf8);
};
G.enGbkStr = function(t) {
return G.base64Encode(encodeURIComponent(t));
};
G.deGbkStr = function(t) {
return decodeURIComponent(G.base64Decode(t));
};
G.aesEncrypt = function(t, e) {
return G.crypto.AES.encrypt(JSON.stringify(t), e).toString();
};
G.aesDecrypt = function(t, e) {
var i = G.crypto.AES.decrypt(t, e);
return JSON.parse(i.toString(G.crypto.enc.Utf8));
};
G.Md5 = function(t) {
return G.crypto.MD5(t).toString();
};
G.dataDecode = function(t) {
var e = {
gameId: G.gameId,
info: t,
r: "CxGames",
s: "lbee" + G.moment().date()
}, i = G.Md5(JSON.stringify(e));
e.sign = i;
delete e.s;
var n = G.getKeyIv("CxGames");
return G.base64Encode(G.aesEncrypt(JSON.stringify(e), n));
};
G.log = function() {};
G.setUserId = function(t) {
var e = G.getItem(t);
if (null == e) {
var i = new Date().getTime() + "";
G.userId = G.randomArray("abcdefghijklmnopkrstuvwxyz1234567890", 4).join("") + i.substring(5, 13);
G.setItem(t, G.userId);
} else G.userId = e;
};
G.dis = function(t, e) {
return cc.isValid(t, !0) && cc.isValid(e, !0) ? t.position.sub(e.position).mag() : 0;
};
G.loadScene = function(t) {
var e = G.temp.load.indexOf(t);
if (-1 != e) {
G.temp.load.splice(e, 1);
cc.find("Canvas/loadBox").getComponent("loadBox").loadScene(t);
} else cc.director.loadScene(t);
};
G.showGift = function(t, e) {
var i = G["talkConf" + G.user.chapter + "_" + G.temp.story_id].bagObj[t];
G.setAld(i);
if (i.gift) {
cc.find("Canvas/giftBox").getComponent("giftBox").showGift(t, i.name + "，" + i.txt, e);
return !0;
}
e && e();
return !1;
};
G.showMsg = function(t, e) {
var i = cc.find("Canvas/msgBox");
null != i && i.getComponent("msgBox").showMsg(t, e);
};
G.getMsgBox = function() {
return cc.find("Canvas/msgBox").getComponent("msgBox");
};
G.showTips = function(t, e) {
var i = cc.find("Canvas/tipsBox");
null != i && i.getComponent("tipsBox").showTips(t, e);
};
G.showCost = function(t, e, i, n) {
void 0 === n && (n = "");
var a = t.getComponent(cc.RichText), o = G.getNum(e), m = G.getNum(i);
a.string = "<color=#000000>" + n + "</c>";
a.string += e < i ? "<outline color=black width=3><color=#cccccc>" + o + "</c>/" + m + "</outline>" : "<outline color=black width=3>" + o + "/" + m + "</outline>";
};
G.setLogo = function(t, e, i, n, a, o) {
void 0 === a && (a = !0);
if ("h5" != G.from) {
e += i;
cc.resources.load(e, cc.SpriteAtlas, function(e, i) {
if (e) return cc.error(e);
try {
var m = i.getSpriteFrame(n);
if (m && cc.isValid(t, !0)) {
t.getComponent(cc.Sprite).spriteFrame = m;
var r = m.getRect().width, s = m.getRect().height;
t.active = a;
if (null != o) if (r > o || s > o) {
var l = r > s ? o / r : o / s;
t.width = r * l;
t.height = s * l;
} else {
var p = o / t.width, d = o / t.height, c = p < d ? p : d;
t.width *= c;
t.height *= c;
}
}
} catch (t) {
return cc.error(t);
}
});
} else G.setImg(t, e + n, o, a);
};
G.setImg = function(t, e, i, n) {
void 0 === n && (n = !0);
cc.resources.load(e, cc.SpriteFrame, function(e, a) {
if (e) return cc.error(e);
if (a && cc.isValid(t, !0)) {
t.getComponent(cc.Sprite).spriteFrame = a;
var o = a.getRect().width, m = a.getRect().height;
t.active = n;
if (null != i) if (o > i || m > i) {
var r = o > m ? i / o : i / m;
t.width = o * r;
t.height = m * r;
} else {
var s = i / t.width, l = i / t.height, p = s < l ? s : l;
t.width *= p;
t.height *= p;
}
}
});
};
G.showLogo = function(t, e) {
var i = null;
"wx" == G.from ? i = wx.createImage() : (i = new Image()).crossOrigin = "anonymous";
i.onload = function() {
try {
var e = new cc.Texture2D();
e.initWithElement(i);
e.handleLoadedTexture();
var n = new cc.SpriteFrame(e);
cc.isValid(t, !0) && (t.getComponent(cc.Sprite).spriteFrame = n);
} catch (t) {
return cc.error(t);
}
};
i.src = e;
};
G.setGrey = function(t, e) {
var i;
i = e ? cc.Material.createWithBuiltin(cc.Material.BUILTIN_NAME.GRAY_SPRITE, 0) : cc.Material.createWithBuiltin(cc.Material.BUILTIN_NAME.SPRITE, 0);
var n = t.getComponentsInChildren(cc.Sprite);
for (var a in n) n[a].setMaterial(0, i);
};
G.loadPrefab = function(t, e) {
cc.resources.load(t, cc.Prefab, function(t, i) {
if (t) {
console.log("load prefab:", t);
return null;
}
e && e(i);
});
};
G.loadSpine = function(t, e, i) {
cc.resources.load(e, sp.SkeletonData, function(e, n) {
if (e) return cc.error(e);
try {
if (cc.isValid(t.node, !0)) {
t.skeletonData = n;
i && i();
}
} catch (t) {
return cc.error(t);
}
});
};
G.setBundleImg = function(t, e, i, n) {
i = i.split("_n")[0];
cc.assetManager.getBundle(e).load(i, cc.SpriteFrame, function(e, i) {
if (e) return console.error(e);
if (i && cc.isValid(t, !0)) {
t.getComponent(cc.Sprite).spriteFrame = i;
t.active = !0;
if (null != n) if (t.width * t.scaleX > n || t.height * t.scaleY > n) {
var a = n / t.width, o = n / t.height;
t.scale = t.width > t.height ? a : o;
} else {
var m = n / t.width, r = n / t.height;
t.scale = m < r ? m : r;
}
}
});
};
G.loadBundleSpine = function(t, e, i, n) {
var a = cc.assetManager.getBundle(e);
a ? a.load(i, sp.SkeletonData, function(e, i) {
if (e) return console.error(e);
if (null != t) try {
if (i && cc.isValid(t.node, !0)) {
t.skeletonData = i;
n && n();
}
} catch (t) {
return cc.error(t);
}
}) : console.error(e, "not found");
};
G.loadResBone = function(t, e, i, n) {
cc.resources.load(e + "/" + i + "_ske", dragonBones.DragonBonesAsset, function(a, o) {
if (a) return cc.error(a);
cc.resources.load(e + "/" + i + "_tex", dragonBones.DragonBonesAtlasAsset, function(e, i) {
if (e) return cc.error(e);
try {
if (o && i && cc.isValid(t.node, !0)) {
t.dragonBonesAtlasAsset = i;
t.dragonAsset = o;
n && n();
}
} catch (t) {
return cc.error(t);
}
});
});
};
G.loadBundle = function(t, e) {
cc.assetManager.loadBundle(t, function(i) {
if (i) return console.error(i);
console.log("load bundle ok:", t);
e && e();
});
};
G.getAngle = function(t, e) {
var i = t.x, n = t.y, a = e.x, o = e.y - n, m = a - i;
o = 0 == o ? 1 : o;
m = 0 == m ? 1 : m;
var r = Math.abs(o) / Math.abs(m), s = 0;
o > 0 && m < 0 ? s = 180 * Math.atan(r) / Math.PI - 90 : o > 0 && m > 0 ? s = 90 - 180 * Math.atan(r) / Math.PI : o < 0 && m < 0 ? s = 180 * -Math.atan(r) / Math.PI - 90 : o < 0 && m > 0 && (s = 180 * Math.atan(r) / Math.PI + 90);
return -s;
};
var e = 0;
G.save = function(t) {
void 0 === t && (t = !1);
var i = G.getNowSec() - e;
if (t || i > 1) {
G.log("========save========");
e = G.getNowSec();
G.setItem(G.gameName, JSON.stringify(G.user));
}
};
G.getSave = function() {
var t = G.getItem(G.gameName);
if (t) {
t = JSON.parse(t);
for (var e in t) G.user[e] = t[e];
}
};
G.activeTask = function(t, e) {
void 0 === e && (e = 1);
t = "_" + t;
var i = G.getNow(), n = G.user.task[t];
n.date = i;
n.times += e;
if (n.date == i && !n.isGet) {
var a = G.VAL.TASK[t];
n.times >= a.min && (G.temp.taskFlag = !0);
}
};
G.sortTask = function() {
var t = [], e = [], i = [];
G.getNow();
for (var n in G.user.task) {
var a = G.user.task[n], o = G.VAL.TASK[n];
null != o && (a.isGet ? i.push(n) : a.times >= o.min ? t.push(n) : e.push(n));
}
return t.concat(e).concat(i);
};
G.setBup = function(t, e) {
t.getComponent("bup").setCb(e);
};
G.getNode = function(t, e) {
var i = cc.find(t);
if (i && e) {
var n = i.getComponent(e);
return {
node: i,
js: n
};
}
return {
node: i,
js: null
};
};
G.getConf = function(t, e, n) {
void 0 === n && (n = "id");
for (var a, o = i(t); !(a = o()).done; ) {
var m = a.value;
if (m[n] == e) return m;
}
return null;
};
G.setTimeCb = function(t) {
for (var e in G.temp.timeCb) {
var i = G.temp.timeCb[e];
if (i.path == t.path && i.js == t.js && i.cb == t.cb) return;
}
var n = G.temp.cbId++;
G.temp.timeCb["_" + n] = t;
return "_" + n;
};
G.doTimeCb = function(t) {
if (G.temp.gameStart) for (var e in G.temp.timeCb) {
var i = G.temp.timeCb[e];
i.time[0] += t;
if (i.time[0] >= i.time[1]) {
i.time[0] = 0;
var n = G.getNode(i.path, i.js);
if (n.js) {
n.js[i.cb]();
if (null != i.times) {
i.times--;
i.times < 0 && delete G.temp.timeCb[e];
}
} else delete G.temp.timeCb[e];
}
}
};
G.clrTimeCb = function(t) {
delete G.temp.timeCb[t];
};
G.preloadAd = function() {
switch (G.from) {
case "apk_tap":
G.tapAd.preloadAd();
}
};
G.showVedio = function(t, e) {
if (G.user.adSkip > 0) {
G.user.adSkip--;
G.user.adSkip < 1 && (G.user.adTimes = 0);
G.save(!0);
t();
G.showTips("免广告激励生效，剩余" + G.user.adSkip + "次");
} else if ("h5" == G.from) {
if (null != t) {
G.freeAd();
t();
}
} else "wx" == G.from ? G.wxAd.showVedio(t, e) : "tt" == G.from ? G.ttAd.showVedio(t, e) : "vivo" == G.from ? G.vivoAd0.showVedio(t, e) : "zfb" == G.from ? G.zfbAd.showVedio(t, e) : "ks" == G.from ? G.ksAd.showVedio(t, e) : "apk_tap" == G.from ? G.tapAd.showVedio(t, e) : "apk_233" == G.from ? G._233Ad.showVedio(t, e) : "apk_vivo" == G.from ? G.vivoAd.showVedio(t, e) : "apk_mi" == G.from ? G.miAd.showVedio(t, e) : "apk_hw" == G.from && G.hwAd.showVedio(t, e);
};
G.ylAdEvent = function(t) {
if ("tt" == G.from) {
G.yl.adPos = t;
G.yl.event("adShow", {
adPostion: t,
noAdTicket: G.user.adSkip > 0
});
G.user.adSkip > 0 && G.yl.event("adShowEnd", {
adPostion: t,
noAdTicket: G.user.adSkip > 0
});
}
};
G.checkAdCheat = function() {
G.temp.adEtime = G.getNowSec();
var t = G.temp.adEtime - G.temp.adStime;
G.msgToAndroid("yong=> ad play time:" + t);
if (t < 5) {
G.temp.errTimes--;
if (G.temp.errTimes <= 0) {
G.setItem("xx_kill", 1);
G.showMsg("请支持正版游戏。", function() {
cc.game.end();
});
} else G.showTips("广告播放异常");
return !0;
}
return !1;
};
G.freeAd = function() {
G.user.adTimes = Math.min(G.VAL.MAX_AD[0], G.user.adTimes + 1);
G.user.adTimes >= G.VAL.MAX_AD[0] && (G.user.adSkip = G.VAL.MAX_AD[1]);
G.save(!0);
};
G.showBanner = function() {
"apk_vivo" == G.from ? G.vivoAd.showBanner() : "apk_mi" == G.from ? G.miAd.showBanner() : "zfb" == G.from && G.zfbAd.showBanner();
};
G.closeBanner = function() {
"apk_vivo" == G.from ? G.vivoAd.closeBanner() : "apk_mi" == G.from ? G.miAd.closeBanner() : "zfb" == G.from && G.zfbAd.closeBanner();
};
G.showInter = function() {
if (G.temp.interCd > 0) {
G.msgToAndroid("inter cd time:" + G.temp.interCd);
console.log("inter cd time:" + G.temp.interCd);
} else {
G.temp.interCd = 60;
"apk_233" == G.from ? G._233Ad.showInter() : "apk_vivo" == G.from ? G.vivoAd.showInter() : "apk_mi" == G.from ? G.miAd.showInter() : "vivo" == G.from ? G.vivoAd0.showInter() : "zfb" == G.from || "apk_hw" == G.from && G.hwAd.showInter();
}
};
G.createNativeNode = function(t) {
void 0 === t && (t = !1);
};
G.replayAudio = function() {
if (G.user.audio && G.user.audio[0]) {
if (null != G.temp.audioId) {
cc.audioEngine.setVolume(G.temp.audioId, 1);
cc.audioEngine.resume(G.temp.audioId);
}
} else cc.audioEngine.stopAll();
};
G.playAudio = function(t, e) {
void 0 === e && (e = 0);
var i = cc.find("Canvas").getComponent("audioBox");
i && (0 == e ? i.playMp3(t) : i.playEffect(t));
};
G.initJsBridge = function() {
switch (G.from) {
case "apk_tap":
G.tapAd.initJsBridge();
break;

case "apk_233":
G._233Ad.initJsBridge();
break;

case "apk_vivo":
G.vivoAd.initJsBridge();
break;

case "apk_mi":
G.miAd.initJsBridge();
break;

case "apk_hw":
G.hwAd.initJsBridge();
}
};
G.getBridgeState = function() {
switch (G.from) {
case "apk_tap":
return G.tapAd.getBridgeState();

case "apk_233":
return G._233Ad.getBridgeState();

case "apk_vivo":
return G.vivoAd.getBridgeState();

case "apk_mi":
return G.miAd.getBridgeState();

case "apk_hw":
return G.hwAd.getBridgeState();
}
};
G.getLoginState = function() {
switch (G.from) {
case "apk_tap":
return G.tapAd.getLoginState();

case "apk_233":
return G._233Ad.getLoginState();

case "apk_vivo":
return G.vivoAd.getLoginState();

case "apk_mi":
return G.miAd.getLoginState();

case "apk_hw":
return G.hwAd.getLoginState();
}
};
G.askAppLogin = function() {
switch (G.from) {
case "apk_tap":
G.tapAd.askTapLogin();
break;

case "apk_233":
G._233Ad.askTapLogin();
break;

case "apk_vivo":
G.vivoAd.askTapLogin();
break;

case "apk_mi":
G.miAd.askTapLogin();
break;

case "apk_hw":
G.hwAd.askTapLogin();
}
};
G.msgToAndroid = function(t) {
-1 != G.from.indexOf("apk") && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsToAndroid", "(Ljava/lang/String;)V", t);
};
G.initTemp = function() {
G.temp && clearInterval(G.temp.timeId);
G.temp = {
ki: "kBsHeEp",
debug: !1,
gameOver: !1,
gameStart: !1,
timeId: -1,
audioId: 0,
dataPot: 0,
story: null,
step: null,
opType: [ 0, 0 ],
txtYear: -1,
txtId: 0,
gjExp: 0,
res: [],
drop: [],
fbId: -1,
fbStep: 0,
fbType: 0,
adTime: 0,
newSid: -1,
stageObj: {},
danIcon: {},
fsIcon: {},
fight: [ 0, 0, 0 ],
fightCd: 0,
task: {},
ageFlag: !0,
cbId: 0,
timeCb: {},
bagType: -1,
danGfId: -1,
danFsId: -1,
maxSkill: 3,
guaiFs0: [ [], [], [], [] ],
guaiFs1: [ [], [], [], [] ],
isRelife: !1,
freeRefresh: 0,
checkAge: !0,
tpTipsCd: 0,
interCd: 0,
home: {
_1: [],
_2: [],
_3: [],
_4: []
},
taskId: -1,
manName: [ "", "" ],
preMan: null,
danMan: null,
hpTips: !1,
rankTime: 0,
rankFight: null,
tList: [],
editList: [],
editFb: null,
ugcList: []
};
};
G.initUser = function() {
G.user = {
ver: 100001,
uid: "",
ssid: "",
name: "",
name_s: "",
name_n: "",
sex: 1,
audio: [ !0, !0 ],
online: G.getNowSec(),
help: !1,
dataPot: G.VAL.DATA_POT[0],
age: 1,
year: 0,
coin: 0,
lev: 1,
exp: 0,
own: -1,
resetTimes: 1,
day: 0,
signDate: "",
data: [ 0, 0, 0, 0 ],
bakData: [ 0, 0, 0, 0 ],
title: [],
skill: [],
obj: {},
setObj: {},
hp: 0,
mp: 0,
fightSkill: [ 0, 0, 0, 0, 0, 0, 0 ],
fightVal: [ 0, 0, 0, 0 ],
fbSkill: [ 0, 0, 0, 0 ],
time: 0,
shopTime: 0,
shopList: [],
shopFree: 0,
makeTime: 0,
makeList: [ [], [] ],
makeFree: 0,
sid: 0,
step: 0,
sList: [],
tpYear: 0,
copy: [],
danOff: [ 0, 0 ],
lianDanLev: 0,
code: [],
var: {
start: 1,
mall: 1,
alch: 0,
cast: 0,
walkin: 0,
ghost: 0,
often: 0,
class: 0
},
skillAd: !1,
lian: [ {}, {} ],
danCount: {},
gfTime: -1,
gfPei: 1,
fsTime: -1,
fsPei: 1,
fs: {},
gfMp: [],
ghost: !1,
relifeFb: [],
expGjTime: -1,
coinTime: -1,
isWin: !1,
tpFail: 0,
adTimes: 0,
adSkip: 0,
home: {
name: "",
lev: 1,
nameTimes: 3,
maxMan: 5,
manId: 0,
man: {},
task: {},
zf: [],
img: []
},
rank: [],
homeRank: [],
relifeRank: [],
point: 0,
win: [ 0, 0 ],
homeWin: [ 0, 0 ],
freeShare: {
date: "",
count: 0
}
};
G.user.shopFree = G.VAL.SHOP_FREE;
G.user.makeFree = G.VAL.MAKE_FREE;
};
G.initGame = function() {
for (var t in G.user.obj) {
var e = Number(t.split("_")[1]);
if (!G.getConf(G.objConf, e)) {
console.log("no no no....");
G.initTemp();
G.initUser();
G.save();
}
}
if (-1 != G.user.gfTime) {
var i = Math.abs(G.getNowSec() - G.user.online), n = Math.abs(G.user.online - G.user.gfTime), a = Math.min(Math.abs(G.VAL.GF_GJ_TIME - n), i) * G.VAL.GF_GJ_EXP * G.user.gfPei;
G.addBookExp(3, a);
}
if (-1 != G.user.fsTime) {
var o = Math.abs(G.getNowSec() - G.user.online), m = Math.abs(G.user.online - G.user.fsTime), r = Math.min(Math.abs(G.VAL.GF_GJ_TIME - m), o) * G.VAL.GF_GJ_EXP * G.user.fsPei;
G.addFsExp(3, r);
}
G.user.online = G.getNowSec();
var s = G.getFightData(!0, G.user.lev);
G.user.hp = s[0];
G.user.mp = s[3];
G.guaiFs();
var l = 0;
clearInterval(G.temp.timeId);
G.temp.timeId = setInterval(function() {
if (G.temp.gameStart) {
if ((l += 100) >= 1e3) {
l = 0;
G.user.online = G.getNowSec();
G.temp.adTime++;
G.temp.interCd--;
G.temp.rankTime--;
if (G.temp.rankTime < 1) {
G.updateRank();
G.updateHomeRank();
G.updateRelifeRank();
}
G.updateDanOff();
G.gj();
}
G.doTimeCb(.1);
}
}, 100);
null == G.getItem("xx_ugc") && G.setItem("xx_ugc", G.VAL.UGC);
};
G.gj = function(t) {
void 0 === t && (t = !0);
if (-1 == G.temp.fbId) {
t && 1 == G.temp.opType[0] ? G.user.time++ : G.user.time = 0;
if (G.user.time >= G.VAL.YEAR_SEC) {
G.user.time = 0;
var e = Math.min(7, Math.floor(G.user.lev / 10)), i = G.VAL.YEAR_UNIT[e];
G.user.year += i;
G.addExp(i);
if (-1 == G.temp.fbId && 0 == G.temp.fight[0]) {
G.temp.ageFlag = !0;
G.temp.res = [ "【灵气】+" + G.temp.gjExp ];
var n = G.temp.step["9999999_0"].txt;
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt(n);
}
}
}
};
G.getAge = function() {
return 70 + G._.random(0, 2 * G.user.data[2]);
};
G.getFight = function(t, e) {
void 0 === t && (t = !0);
void 0 === e && (e = 1);
t && (e = G.user.lev);
var i = G.getFightData(t, e);
return i[0] + 10 * i[1] + 30 * i[2];
};
G.setObj = function(t, e) {
var i = G.getConf(G.objConf, t);
if (i) {
e ? G.user.setObj["_" + t] ? G.user.setObj["_" + t].state = 1 : 1 == i.type ? G.user.setObj["_" + t] = {
lev: 1,
exp: 0,
buff: i.eff,
state: 1
} : 11 == i.type ? G.user.setObj["_" + t] = {
lev: 1,
exp: 0,
index: 0,
fsId: i.magic,
state: 1
} : G.user.setObj["_" + t] = {
state: 1
} : G.user.setObj["_" + t] && (1 == i.type || 11 == i.type ? G.user.setObj["_" + t].state = 0 : delete G.user.setObj["_" + t]);
G.save();
}
};
G.addBookExp = function(t, e) {
var i = G.bookId();
if (-1 == i) {
1 == t && G.showTips("未装备功法书");
return !1;
}
if (G.user.setObj["_" + i].lev > 49) {
1 == t && G.showTips("当前功法已满级");
return !1;
}
G.user.setObj["_" + i].exp += e;
for (var n = G.getConf(G.objConf, i); ;) {
var a = 100 * n.qua * Math.pow(G.user.setObj["_" + i].lev, 2);
if (!(G.user.setObj["_" + i].exp >= a)) break;
G.user.setObj["_" + i].lev = Math.min(50, G.user.setObj["_" + i].lev + 1);
G.user.setObj["_" + i].exp -= a;
}
return !0;
};
G.eatObj = function(t, e) {
void 0 === e && (e = 1);
var i = G.getConf(G.objConf, t), n = G.levConf[G.user.lev - 1].stage;
if (-1 != [ 2, 3, 12, 13, 14, 15, 16, 17 ].indexOf(i.type)) {
if ("" != i.stage && i.stage > n) {
G.showTips("【" + G.VAL.LEV[i.stage - 1] + "】可使用");
return;
}
G.user.danCount["_" + t] || (G.user.danCount["_" + t] = 1);
var a = 1, o = G.user.danCount["_" + t];
2 == i.type ? a = 1.05 / Math.pow(1.05, o) : 3 == i.type && (a = 1.17 / Math.pow(1.17, o));
16 == i.type && (a = 1.05 / Math.pow(1.05, o));
17 == i.type && (a = 1.17 / Math.pow(1.17, o));
if (i.exp > 0) {
var m = Math.ceil(i.exp * a);
G.addExp(m, 1);
}
if ("" != i.attr) {
G.temp.danMan && (a = 1);
var r = i.attr.split("|"), s = Math.ceil(Number(r[1]) * a);
G.setData(r[0], s);
}
if (12 == i.type) {
var l = G.getFightData(!0, G.user.lev);
G.user.hp = Math.min(l[0], G.user.hp + i.value);
}
if (13 == i.type) {
var p = G.getFightData(!0, G.user.lev);
G.user.mp = Math.min(p[3], G.user.mp + i.value);
}
if (16 == i.type && !G.addBookExp(1, Math.ceil(i.value * a))) return;
if (17 == i.type) {
if (-1 == G.temp.danFsId) {
G.showTips("未装备法术书");
return;
}
G.addFsExp(2, Math.ceil(i.value * a), "_" + G.temp.danFsId);
}
G.user.danOff[0]++;
G.user.danOff[0] >= G.VAL.DAN_OFF[0] && 0 == G.user.danOff[1] && (G.user.danOff[1] = G.VAL.DAN_OFF[1]);
G.user.danCount["_" + t] && !G.temp.danMan && G.user.danCount["_" + t]++;
G.delObj(t, e);
}
};
G.setData = function(t, e) {
if (G.temp.danMan) {
var i = G.user.home.man[G.temp.danMan];
"cn" == t ? i.data0 += e : "in" == t ? i.data1 += e : "hp" == t ? i.dan[0] += e : "at" == t ? i.dan[1] += e : "df" == t ? i.dan[2] += e : "mp" == t && (i.dan[3] += e);
} else "lf" == t ? G.user.age += e : "cn" == t ? G.user.data[0] += e : "in" == t ? G.user.data[1] += e : "lk" == t ? G.user.data[2] += e : "hp" == t ? G.user.fightVal[0] += e : "at" == t ? G.user.fightVal[1] += e : "df" == t ? G.user.fightVal[2] += e : "mp" == t && (G.user.fightVal[3] += e);
};
G.sellObj = function(t, e) {
void 0 === e && (e = 1);
var i = G.getConf(G.objConf, t);
if (G.user.setObj["_" + t] && 1 == G.user.setObj["_" + t].state) G.showTips("装备中，无法出售"); else if ("" != i.pri) {
var n = Math.ceil(i.pri * G.VAL.SELL_PER);
G.user.coin += n * e;
G.delObj(t, e);
}
};
G.delObj = function(t, e) {
if (G.user.obj["_" + t]) {
G.user.obj["_" + t] -= e;
G.user.obj["_" + t] < 1 && delete G.user.obj["_" + t];
G.save();
}
};
G.addExp = function(t, e) {
void 0 === t && (t = 1);
void 0 === e && (e = 0);
var i = G.levConf[G.user.lev - 1];
G.temp.gjExp = 0;
if (e < 1) {
var n = G.bookId(), a = -1 != n ? G.user.setObj["_" + n].buff : 0, o = Math.ceil(i.exp_get * (1 + .05 * G.user.data[0] + a / 100));
G.temp.gjExp = o * t;
G.user.exp += o * t;
G.addBookExp(0, G._.random(100, 150));
G.addFsExp(0);
G.addManExp(G.temp.gjExp);
} else G.user.exp = Math.max(0, G.user.exp + t);
G.save();
};
G.upLev = function() {
var t = G.levConf[G.user.lev - 1];
if (t) if (G.user.exp < t.exp) G.showTips("灵气不足"); else if (9 != t.step) {
G.yl.event("repair", {
repairCount: 1
});
G.user.lev = Math.min(63, G.user.lev + 1);
"zfb" == G.from && G.zfbAd.ylEvent();
"" != t.lf_ad && (G.user.age += Number(t.lf_ad));
G.user.exp -= t.exp;
G.resetRole();
G.save();
G.showTips("修为提升");
G.playAudio("lev", 1);
} else G.showTips("已达境界九层，可尝试突破"); else G.showTips("修为已满");
};
G.checkTpDan = function() {
for (var t, e = G.levConf[G.user.lev - 1], n = {
id: "",
title: "",
num: 0
}, a = i(G.objConf); !(t = a()).done; ) {
var o = t.value;
if (4 == o.type && o.stage == e.stage) {
n = {
id: o.id,
title: o.name,
num: 0
};
break;
}
}
for (var m in G.user.obj) if (Number(m.split("_")[1]) == n.id) {
n.num = G.user.obj[m];
return n;
}
return n;
};
G.tp = function(t) {
G.user.tpYear = G.user.year;
var e, i = G.levConf[G.user.lev - 1];
e = -1 == G.user.title.indexOf(1008) ? t ? i.pro1 : i.pro : t ? i.chaos1 : i.chaos;
var n = G.levConf[G.user.lev - 1].stage, a = 9 * Math.pow(2, n - 1);
(a = (G.user.year - a) / a) > 1 && (a = 1);
a < 0 && (a = 0);
var o = Math.floor(e * (1 + G.user.data[1] / 40) * a);
o += G.user.tpFail * G.VAL.TP_RATE;
if (G._.random(1, 100) <= o) {
G.user.lev = Math.min(63, G.user.lev + 1);
"" != i.lf_ad && (G.user.age += Number(i.lf_ad));
G.user.exp -= i.exp;
G.save();
return !0;
}
return !1;
};
G.getFightData = function(t, e) {
var i = G.levConf[e - 1], n = [ 0, 0, 0, 0 ];
if (!t) return [ i.hp_m, i.at_m, i.df_m, i.mp_m, i.pow_m ];
var a = t ? G.user.data : [ 0, 0, 0, 0 ], o = t ? G.user.fightSkill : [ 0, 0, 0, 0, 0, 0, 0 ], m = t ? G.bookBuff() : [ 0, 0, 0, 0 ];
G.fbBuff();
var r = G.getManBuff(), s = [ 0, 0, 0, 0 ];
s[0] = G.user.fightVal[0] + G.user.fbSkill[0] + m[0] + r[0];
s[1] = G.user.fightVal[1] + G.user.fbSkill[1] + m[1] + r[1];
s[2] = G.user.fightVal[2] + G.user.fbSkill[2] + m[2] + r[2];
s[3] = G.user.fightVal[3] + G.user.fbSkill[3] + m[3] + r[3];
n[0] = Math.ceil(i.hp * (1 + a[0] / 10) * (1 + o[0] / 100) + s[0]);
n[1] = Math.ceil(i.at * (1 + a[1] / 5) * (1 + o[1] / 100) + s[1]);
n[2] = Math.ceil(i.df * (1 + a[0] / 10) * (1 + o[2] / 100) + s[2]);
n[3] = Math.ceil((i.mp + s[3]) * (1 + o[2] / 100));
return n;
};
G.getStoryId = function(t) {
t = Math.floor(Number(t) / 1e3);
G.temp.newSid == t && (t += 1);
var e = G.levConf[G.user.lev - 1].stage, i = [ 11e3, 12e3, 13e3, 14e3, 15e3, 16e3, 17e3, 18e3 ];
t >= i[e] && (t = i[e - 1]);
var n = i[e - 1] + 999;
G.log("max sid:", n, t);
for (var a = 0; a < 999; a++) {
var o = Math.min(n, t + a);
o += "000";
if (G.temp.story["_" + o]) {
G.temp.newSid = t;
return o;
}
}
G.temp.newSid = i[e - 1];
return i[e - 1] + "000";
};
G.getStory = function(t, e) {
void 0 === e && (e = !0);
if (null == G.temp.story["_" + t]) {
G.log("no sid", t);
t = G.getStoryId(t);
G.user.step = 0;
G.log("get sid:", t);
}
if (!e || G.checkStory(t)) {
G.user.sid = Number(t);
var i = G.temp.story["_" + t].only_id;
"" != i && -1 == G.user.sList.indexOf(i) && G.user.sList.push(i);
var n = G.temp.step[G.user.sid + "_" + G.user.step];
if (null == n) {
G.showMsg("欲知后事如何，请听下回分解~（code:" + G.user.sid + "_" + G.user.step + "）", function() {
G.relife();
cc.director.loadScene("login");
});
return;
}
G.getRes(n);
var a = G.getNode("Canvas/gameBox/txtBox", "txtBox");
"" != n.txt ? a.js.addTxt(n.txt, n.action) : G.temp.res.length > 0 && a.js.addTxt("你收获了：", n.action);
G.doAction(n);
} else {
var o = Math.min(7, G.levConf[G.user.lev - 1].stage);
t = Math.min([ 11e6, 12e6, 13e6, 14e6, 15e6, 16e6, 17e6, 18e6 ][o] - 1, Number(t) + 1);
G.user.step = 0;
G.log("剧情加1查找:", t);
G.getStory(t);
}
G.save();
};
G.checkStory = function(t) {
var e = G.temp.story["_" + t];
G.log("check sid", t, e);
if (!e) return !1;
var i = G._rate(e.rate, e.gb), n = G._story0(e.story), a = G._skill(e.skill), o = G._fb(e.fb), m = G._title(e.title), r = G._item(e.item), s = G._luck(e.ly), l = G._story1(e.only_id), p = G._own(e.sect), d = G._var(e.var);
return !!(i && n && a && o && m && r && s && l && p && d);
};
G._rate = function(t, e) {
return "" == t || -1 == t || G._.random(1, 100) <= t + (e < 2 ? 2 : -2) * G.user.data[2];
};
G._story0 = function(t) {
return "" == t || -1 != G.user.sList.indexOf(t);
};
G._story1 = function(t) {
return "" == t || -1 == G.user.sList.indexOf(t);
};
G._skill = function(t) {
return "" == t || -1 != G.user.skill.indexOf(t);
};
G._fb = function(t) {
if ("" == t) return !0;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]);
return i == n && i == G.user.data[3] || G.user.data[3] >= i && G.user.data[3] <= n;
};
G._title = function(t) {
if ("" == t) return !0;
if (-1 != t.indexOf("|")) {
for (var e, n = i(t.split(",")); !(e = n()).done; ) {
var a = e.value, o = (a = a.split("|")[0]).split("_")[1];
if (-1 != G.user.title.indexOf(o)) return !1;
}
return !0;
}
var m = t.split("_")[1];
return -1 != G.user.title.indexOf(m);
};
G._own = function(t) {
if ("" == t) return !0;
var e = t.split("|"), i = Number(e[0]), n = e[1];
return "any" == n || "none" == n && -1 == G.user.own || (n = Number(n)) > 0 && G.user.own == i || n < 0 && G.user.own != i;
};
G._item = function(t) {
if ("" == t) return !0;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]);
return G.user.obj["_" + i] >= n;
};
G._luck = function(t) {
if ("" == t) return !0;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]);
return -1 == i || -1 == n || G.user.data[2] >= i && G.user.data[2] <= n;
};
G._var = function(t) {
if ("" == t) return !0;
var e = t.split("|");
null == G.user.var[e[0]] && (G.user.var[e[0]] = 0);
var i = G.user.var[e[0]], n = Number(e[2]);
return "lt" == e[1] && i < n || "eq" == e[1] && i == n || "gt" == e[1] && i > n;
};
G.getFbStory = function() {
if (1 != G.temp.opType[1]) {
var t = G.temp.fbStory[G.temp.fbId + "_" + G.temp.fbStep], e = G.getNode("Canvas/gameBox/txtBox", "txtBox");
if (t) {
G.getRes(t);
"" != t.txt ? e.js.addTxt(t.txt) : G.temp.res.length > 0 && e.js.addTxt("你收获了：", t.action);
G.doAction(t);
} else G.getNode("Canvas/gameBox/opBox", "opBox").js.quitFb();
} else {
G.getNode("Canvas/gameBox/opBox", "opBox").js.quitFb();
G.showTips("副本结束");
}
};
G.setStep = function(t) {
G.log("set step", t);
-1 == G.temp.fbId ? 0 != G.temp.fight[0] ? G.temp.fight[1] = t : G.user.step = t : G.temp.fbStep = t;
t < 0 && G.setOpType(1);
};
G.getRes = function(t) {
G.temp.res = [];
G.r_title(t.title);
G.r_own(t.sect);
G.r_item(t.item, !0);
G.r_group(t.group);
G.r_luck(t.ly);
G.r_exp(t.exp);
G.r_age(t.lf);
G.r_cn(t.cn);
G.r_in(t.in);
G.r_coin(t.money);
G.r_copy(t.copy);
G.r_data("hp", t.hp);
G.r_data("at", t.at);
G.r_data("df", t.df);
};
G.r_data = function(t, e) {
if ("" == e) return !1;
var i = e.split("|"), n = Number(i[0]), a = Number(i[1]), o = G._.random(n, a);
if (0 != o) {
G.setData(t, o);
var m = o > 0 ? "+" : "", r = "【" + G.VAL.KEY_TITLE[t] + "】" + m + o;
G.temp.res.push(r);
}
};
G.r_title = function(t) {
if ("" == t) return !1;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]), a = G.user.title.indexOf(i), o = G.getConf(G.titleConf, i);
if (n > 0) {
if (-1 == a) {
G.user.title.push(i);
o && G.temp.res.push("获得传承【" + o.title + "】");
}
} else if (-1 != a) {
G.user.title.splice(a, 1);
o && G.temp.res.push("失去传承【" + o.title + "】");
}
G.userTitle(G.user.title);
return !0;
};
G.r_own = function(t) {
if ("" == t) return !1;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]), a = G.getConf(G.ownConf, i);
if (n > 0) {
G.user.own = i;
a && G.temp.res.push("加入【" + a.name + "】");
} else {
G.user.own = -1;
a && G.temp.res.push("离开【" + a.name + "】");
}
return !0;
};
G.r_item = function(t, e) {
void 0 === e && (e = !1);
if ("" == t) return !1;
if ("poor" == t) {
G.user.obj = {};
G.temp.res.push("失去所有物品");
} else for (var n, a = i(t.split(",")); !(n = a()).done; ) {
var o = n.value;
o = o.split("|");
var m = Number(o[0]), r = Number(o[1]), s = G.getConf(G.objConf, m), l = "" == s.unique ? 1e4 : s.unique;
G.user.obj._164002 && (2 == s.type || 3 == s.type) && r > 0 && (r *= 2);
if (G.user.obj["_" + m]) {
var p = Math.min(7, G.levConf[G.user.lev - 1].stage), d = G.adConf[p - 1].money, c = "" == s.pri ? d : s.pri;
c = Math.ceil(c * G.VAL.SELL_PER);
if ((1 == s.type || 11 == s.type) && r > 0) {
if (e) {
G.user.coin += c;
G.temp.res.push("【灵石】+" + c);
}
return !1;
}
if (G.user.obj["_" + m] >= l && r > 0) {
if (e) {
G.user.coin += c;
G.temp.res.push("【灵石】+" + c);
}
return !1;
}
G.user.obj["_" + m] += r;
G.user.obj["_" + m] < 1 && delete G.user.obj["_" + m];
r > 0 ? G.temp.res.push("【" + s.name + "】+" + r) : G.temp.res.push("【" + s.name + "】" + r);
} else if (r > 0) {
1 != s.type && 11 != s.type || (r = 1);
G.user.obj["_" + m] = r;
G.temp.res.push("【" + s.name + "】+" + r);
}
}
return !0;
};
G.r_group = function(t) {
if ("" == t) return !1;
if ("poor" == t) {
G.user.obj = {};
G.temp.res.push("失去所有物品");
} else {
for (var e = t.split("|"), i = Number(e[0]), n = Number(e[1]), a = {}, o = 0; o < n; o++) {
var m = G.getTaskItem(i);
m && 2 == m.type && (a["_" + m.item] ? a["_" + m.item]++ : a["_" + m.item] = 1);
}
for (var r in a) {
var s = r.split("_")[1];
G.r_item(s + "|" + a[r], !0);
}
}
return !0;
};
G.r_luck = function(t) {
if ("" == t) return !1;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]), a = G._.random(i, n);
if (0 != a) {
G.user.data[2] = Math.max(0, G.user.data[2] + a);
var o = a > 0 ? "+" : "";
G.temp.res.push("【运气】" + o + a);
}
return !0;
};
G.r_exp = function(t) {
if ("" == t) return !1;
var e = t.split("|"), i = Math.ceil(Number(e[0])), n = Math.ceil(Number(e[1])), a = G._.random(i, n);
if (0 != a) {
G.user.obj._164003 && a > 0 && (a *= 2);
G.addExp(a, 1);
var o = a > 0 ? "+" : "";
G.temp.res.push("【灵气】" + o + a);
}
return !0;
};
G.r_age = function(t) {
if ("" == t) return !1;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]), a = G._.random(i, n);
if (0 != a) {
G.user.age = Math.max(0, G.user.age + Number(a));
var o = a > 0 ? "+" : "";
G.temp.res.push("【寿元】" + o + a);
}
return !0;
};
G.r_cn = function(t) {
if ("" == t) return !1;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]), a = G._.random(i, n);
if (0 != a) {
G.user.data[0] = Math.max(0, G.user.data[0] + a);
var o = a > 0 ? "+" : "";
G.temp.res.push("【根骨】" + o + a);
}
return !0;
};
G.r_in = function(t) {
if ("" == t) return !1;
var e = t.split("|"), i = Number(e[0]), n = Number(e[1]), a = G._.random(i, n);
if (0 != a) {
G.user.data[1] = Math.max(0, G.user.data[1] + a);
var o = a > 0 ? "+" : "";
G.temp.res.push("【悟性】" + o + a);
}
return !0;
};
G.r_coin = function(t) {
if ("" == t) return !1;
if ("poor" == t) {
G.temp.res.push("【灵石】-" + G.user.coin);
G.user.coin = 0;
} else {
var e = t.split("|"), i = Math.ceil(Number(e[0])), n = Math.ceil(Number(e[1])), a = G._.random(i, n);
if (0 != a) {
a > 0 && (a = G.r_pei_coin(a));
G.user.coin = Math.max(0, G.user.coin + a);
var o = a > 0 ? "+" : "";
G.temp.res.push("【灵石】" + o + a);
}
}
return !0;
};
G.r_pei_coin = function(t) {
var e = [];
G.user.obj._163001 && e.push(1.5);
G.user.obj._164001 && e.push(2);
return e.length < 1 ? t : Math.ceil(t * G.randomArray(e, 1)[0]);
};
G.r_copy = function(t) {
if ("" == t) return !1;
var e = Number(t), i = G.getConf(G.copyConf, e);
if ("" == i.lock && -1 == G.user.copy.indexOf(e)) {
G.user.copy.push(e);
var n = G.getMsgBox();
n.showMsg("系统解锁副本【" + i.copy + "】，是否前往？", function() {
G.getNode("Canvas/copyBox", "copyBox").js.toCopy(e);
});
n.showOtherBup("放弃");
}
return !0;
};
G.doAction = function(t) {
switch (t.type) {
case "msg":
G.toMsg(t.action, t.plot, t.pupil);
break;

case "sel":
G.toSel(t.action);
break;

case "roll":
G.toRoll(t.action);
"" == t.txt && G.nextStory();
break;

case "fight":
G.toFight(t.action);
break;

case "chg":
G.setVar(t.action);
break;

case "jdg":
G.checkVar(t.action);
break;

case "pay":
G.toPay(t.action);
}
};
G.relife = function() {
G.temp.isRelife = !0;
G.temp.gameStart = !1;
G.setOpType(0);
var t = G.levConf[G.user.lev - 1].stage, e = G.getTypeObj();
G.user.relifeFb = G._.assign([], e);
var i = G._.assign({}, G.user);
G.initTemp();
G.initUser();
G.user.audio = i.audio;
G.user.skillAd = i.skillAd;
G.user.code = i.code;
G.user.signDate = i.signDate;
G.user.point = i.point + G.VAL.RELIFT_POINT[t - 1];
G.user.rank = i.rank;
G.user.homeRank = i.homeRank;
G.user.relifeRank = i.relifeRank;
G.user.win = i.win;
G.user.homeWin = i.homeWin;
if (t >= 4) {
G.user.relifeFb = i.relifeFb;
G.user.isWin = i.isWin;
t >= 5 && (G.user.isWin ? G.user.dataPot = Math.min(G.VAL.DATA_POT[1], i.dataPot + 3) : G.user.dataPot = Math.min(G.VAL.DATA_POT[1], i.dataPot + 1));
} else G.user.dataPot = i.dataPot;
G.user.shopFree = G.VAL.SHOP_FREE;
G.user.makeFree = G.VAL.MAKE_FREE;
G.user.help = !0;
G.temp.freeRefresh = G.VAL.FREE_REFRESH[0];
G.save(!0);
};
G.toMsg = function(t, e, i) {
var n = G.getNode("Canvas/gameBox/opBox", "opBox");
if ("dead" == t) if ("" != e && 1 === e) {
var a = G.getMsgBox();
a.showMsg("修仙世界强者为尊，危机四伏，但系统觉得你是命定的主角，只需要帮系统点一下广告完成任务，就可以满血复活一次。", function() {
G.ylAdEvent("死亡复活");
G.showVedio(function() {
G.temp.ageFlag = !1;
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt("<PNK>就在生死交替之际，系统将你送了出去。</>", "home", !0);
G.temp.ageFlag = !0;
G.setOpType(1);
-1 != G.temp.fbId && n.js.quitFb();
});
});
a.setHCenter();
a.showVedio();
a.setBupTxt("视频复活");
a.showOtherBup("重生轮回", function() {
G.setOpType(2);
G.showTips("修练失败");
n.js.relife();
});
} else {
G.setOpType(2);
G.showTips("修练失败");
n.js.relife();
} else if ("finish" == t) {
G.setOpType(3);
G.user.isWin = !0;
G.relife();
G.getNode("Canvas/winBox").node.active = !0;
} else if ("to" == t.split("|")[0]) {
G.setOpType(0);
var o = Number(t.split("|")[1]);
G.setStep(o);
} else if ("end" == t) {
G.temp.manName = [ "", "" ];
G.resetRole();
G.setOpType(1);
if (-1 == G.temp.fbId) {
"" != i && 1 === i && G.addMan();
G.temp.ageFlag = !0;
G.log("end", G.user.sid + "_" + G.user.step);
"" == G.temp.step[G.user.sid + "_" + G.user.step].txt && G.nextStory();
} else n.js.quitFb();
}
};
G.toSel = function(t) {
G.getNode("Canvas/gameBox/opBox", "opBox").js.showSel(!0, t);
};
G.toRoll = function(t) {
for (var e, n = t.split(","), a = G._.random(1, 100), o = i(n); !(e = o()).done; ) {
var m = e.value, r = Number(m.split("|")[0]), s = Number(m.split("|")[1]);
if ((a -= r) <= 0) {
G.log("roll step:", s);
G.setStep(s);
return;
}
}
var l = Number(n[0].split("|")[1]);
G.setStep(l);
G.log("no roll ret");
};
G.toFight = function(t) {
G.getNode("Canvas/fightBox", "fightBox").js.initFight(t);
};
G.setVar = function(t) {
if ("" != t) {
var e = t.split("|");
null == G.user.var[e[0]] && (G.user.var[e[0]] = 0);
"set" == e[1] ? G.user.var[e[0]] = Number(e[2]) : "add" == e[1] ? G.user.var[e[0]] += Number(e[2]) : "dec" == e[1] ? G.user.var[e[0]] -= Number(e[2]) : "del" == e[1] && delete G.user.var[e[0]];
"walkin" == e[0] && G.user.var[e[0]] > 1 && G.backTo18();
var i = G.getMsgBox(), n = "";
"alch" == e[0] ? n = "炼丹开启，可前往试炼。" : "cast" == e[0] && (n = "炼器开启，可前往试炼。");
if ("" != n) {
i.showMsg(n, function() {
G.getNode("Canvas/bupBox", "bupBox").js.jumpTo(0);
});
i.showCancel();
}
G.setStep(Number(e[3]));
G.setOpType(0);
G.nextStory();
}
};
G.backTo18 = function() {
G.user.age = G.getAge();
G.user.year = 18;
G.user.tpYear = 18;
G.user.lev = 9;
G.user.exp = 0;
G.user.own = -1;
for (var t in G.user.setObj) {
var e = Number(t.split("_")[1]), i = G.getConf(G.objConf, e);
if (i && (1 == i.type || 11 == i.type)) {
var n = G.user.setObj[t];
n.lev = 1;
n.exp = 0;
}
}
for (var a in G.fightVal) G.fightVal[a] = 0;
G.user.data = G._.assign([], G.user.bakData);
G.save();
console.log("夺舍~");
};
G.checkVar = function(t) {
if ("" != t) {
var e = t.split("|");
null == G.user.var[e[0]] && (G.user.var[e[0]] = 0);
var i = G.user.var[e[0]], n = Number(e[1]);
i < n ? G.setStep(Number(e[2])) : i == n ? G.setStep(Number(e[3])) : i > n && G.setStep(Number(e[4]));
G.setOpType(0);
G.nextStory();
}
};
G.toPay = function(t) {
if ("" != t) {
var e = t.split("|");
if (G.user.coin >= Number(e[0])) {
G.user.coin -= Number(e[0]);
G.setStep(Number(e[1]));
} else G.setStep(Number(e[2]));
G.setOpType(0);
G.nextStory();
}
};
G.nextStory = function() {
if (-1 == G.temp.fbId) {
if (G.fightEvent()) return;
if (G.adEvent()) return;
if (G.danEvent()) return;
if (G.tpEvent()) return;
if (0 == G.temp.opType[0]) G.getStory(G.user.sid, !1); else if (1 == G.temp.opType[0]) {
G.setOpType(0);
var t = G.levConf[G.user.lev - 1].stage, e = G.VAL.YEAR_UNIT[t - 1];
G.user.year += e;
G.temp.ageFlag = !0;
G.homeEvent();
G.addExp(e);
var i = Math.floor(Number(G.user.sid) / 1e3) + 1, n = [ 11e3, 12e3, 13e3, 14e3, 15e3, 16e3, 17e3, 18e3 ];
i >= n[t] && (i = n[t - 1]);
i += "000";
G.user.step = 0;
G.log("end sid:", G.user.sid);
G.getStory(i);
}
} else G.getFbStory();
};
G.bookId = function() {
for (var t in G.user.setObj) {
var e = Number(t.split("_")[1]), i = G.getConf(G.objConf, e);
if (i && 1 == i.type && 1 == G.user.setObj[t].state) return e;
}
return -1;
};
G.setBook = function(t, e) {
if (-1 != e) {
for (var i in G.user.setObj) {
var n = Number(i.split("_")[1]);
1 == G.getConf(G.objConf, n).type && 0 == t && (G.user.setObj[i].state = 0);
}
if (0 == t) {
G.setObj(e, !0);
if (-1 == G.user.gfMp.indexOf(e)) {
G.user.gfMp.push(e);
G.resetRole();
}
} else {
var a = G.bookId();
if (G.user.setObj["_" + a]) {
G.user.setObj["_" + a].buff *= 1.1;
G.user.setObj["_" + a].buff > 100 && (G.user.setObj["_" + a].buff = 100);
}
delete G.user.setObj["_" + e];
delete G.user.obj["_" + e];
}
G.save();
} else G.showTips("未选择变更功法");
};
G.fbList = function() {
var t = [];
for (var e in G.user.setObj) {
var i = Number(e.split("_")[1]);
5 == G.getConf(G.objConf, i).type && 1 == G.user.setObj[e].state && t.push(i);
}
return t;
};
G.fbBuff = function() {
G.user.fbSkill = [ 0, 0, 0, 0 ];
for (var t, e = i(G.fbList()); !(t = e()).done; ) {
var n = t.value, a = G.getConf(G.objConf, n);
"" != a.hp && (G.user.fbSkill[0] += a.hp);
"" != a.at && (G.user.fbSkill[1] += a.at);
"" != a.df && (G.user.fbSkill[2] += a.df);
"" != a.mp && (G.user.fbSkill[3] += a.mp);
}
};
G.setStageObj = function() {
G.temp.stageObj = {
_1: [],
_2: [],
_3: [],
_4: [],
_5: [],
_6: [],
_7: [],
_8: []
};
for (var t, e = i(G.objConf); !(t = e()).done; ) {
var n = t.value;
if ("" != n.rate && "" != n.refer) {
var a = n.refer + "";
if (-1 != a.indexOf("|")) for (var o = Number(a.split("|")[0]), m = Number(a.split("|")[1]), r = o; r < m; r++) G.temp.stageObj["_" + r].push(n.id); else G.temp.stageObj["_" + a].push(n.id);
}
}
};
G.updateShop = function() {
G.user.shopTime = G.getNowSec();
var t = G.levConf[G.user.lev - 1].stage;
G.user.shopList = [ [ 143001, 143001, 143002, 143003, 144001, 144002, 144003, 144003 ][t] ];
for (var e = [ 60, 12, 10, 4, 4, 10 ], n = [ t, t + 1, t - 1, t + 2, t - 2, 0 ], a = t, o = 15 - G.user.shopList.length, m = 0; m < o; m++) {
for (var r = G._.random(1, 100), s = 0; s < 6; s++) if ((r -= e[s]) < 0) {
a = Math.min(7, n[s]);
a = Math.max(0, a);
break;
}
0 == a && (a = G._.random(1, 7));
for (var l, p = G.temp.stageObj["_" + a], d = [], c = i(p); !(l = c()).done; ) {
var u = l.value, y = G.getConf(G.objConf, u);
G._.random(1, 100) <= y.rate && d.push(u);
}
if (d.length > 0) {
var f = p[G._.random(0, d.length - 1)];
-1 == G.user.shopList.indexOf(f) && G.user.shopList.push(f);
}
}
G.save();
var x = G.getNode("Canvas/shopBox", "shopBox");
x.node.active && x.js && x.js.updateList(0);
};
G.updateMake = function() {
var t = G.levConf[G.user.lev - 1].stage;
G.user.makeTime = G.getNowSec();
var e = [], i = [];
for (var n in G.ldConf) {
var a = G.ldConf[n].pdc, o = G.getConf(G.objConf, a), m = Number(o.pdc.split("|")[0]), r = Number(o.pdc.split("|")[1]);
t >= m && t <= r && e.push(Number(n));
}
for (var s in G.lqConf) {
var l = G.lqConf[s].trump, p = G.getConf(G.objConf, l), d = Number(p.pdc.split("|")[0]), c = Number(p.pdc.split("|")[1]);
t >= d && t <= c && i.push(Number(s));
}
G.user.makeList[0] = G.randomArray(e, 5);
G.user.makeList[1] = G.randomArray(i, 5);
G.save();
var u = G.getNode("Canvas/makeBox", "makeBox");
if (u.js) {
u.js.showList(0);
u.js.showList(1);
}
};
G.homeEvent = function() {
if (!(G.user.data[3] < 1 || G.temp.fight[0] > 0 || 0 == G.user.year || G.user.year % 5 != 0)) {
var t = Math.ceil(G.user.year / 5), e = G.getConf(G.homeConf, t, "time");
if (e) {
var n = e.rate * G.user.data[3] / 10;
if (G._.random(1, 80) <= n) {
G.user.homeCount++;
var a = Math.floor(e.qua + .2 * G.user.data[2] + .1 * G.user.data[3]);
a > 20 && (a = 20);
for (var o = [], m = null != G.user.obj._163002, r = 0; r < 5; r++) {
var s = m && a > 3 ? 4 : Math.min(4, G._.random(1, a));
if (s > 0) {
o.push(s);
a -= s;
}
if (a < 1) break;
}
if (o.length < 1) return;
for (var l, p = [ [], [], [], [], [] ], d = i(G.objConf); !(l = d()).done; ) {
var c = l.value;
p[c.qua - 1].push(c.id);
}
var u = [ 2, 2, 3, 3, 4, 4, 4 ], y = Math.min(6, G.levConf[G.user.lev - 1].stage - 1), f = [];
G.temp.res = [];
for (var x = 0, h = o; x < h.length; x++) {
var g = h[x];
g = Math.min(u[y], g);
var v = G.randomArray(p[g - 1], 1)[0];
f.push(v);
v && G.r_item(v + "|1");
}
G.temp.ageFlag = !1;
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt("<PNK>家族看你潜力无限，又给你送来了修炼资源，你将获得以下物品：</>", "home", !0);
G.temp.ageFlag = !0;
m && G.showMsg("在你获得家传物品时，怀中的『扶桑木鸢』突然发出了鸣叫，使你得到的东西莫名其妙发生了变化。");
}
}
}
};
G.adEvent = function() {
if (0 == G.temp.fight[0] && 1 == G.temp.opType[0] && G.temp.adTime >= G.VAL.AD_EVENT_TIME) {
G.temp.res = [];
G.temp.adTime = 0;
G.temp.ageFlag = !1;
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt("<PNK>这是一个广告，你遇到一位修仙的商人，说让你看一段玉简中的内容就可以得到一份不菲的礼物。你选择：</>", "vedio", !0);
G.toSel("观看|vedio,不看|end");
G.temp.ageFlag = !0;
return !0;
}
return !1;
};
G.updateDanOff = function() {
if (G.user.danOff[0] >= G.VAL.DAN_OFF[0]) {
if (G.user.danOff[1] > 0) {
G.user.danOff[1]--;
if (G.user.danOff[1] < 1) {
G.user.danOff[0] = 0;
G.user.danOff[1] = 0;
G.save();
}
}
} else G.user.danOff[1] = 0;
};
G.danEvent = function() {
var t = G.levConf[G.user.lev - 1], e = t.stage - 1, i = [ 143001, 143002, 143003, 144001, 144002, 144003 ];
if (0 == G.temp.fight[0] && G.user.lianDanLev != G.user.lev && 1 == G.temp.opType[0] && e < 6 && (8 == t.step || 9 == t.step)) {
G.user.lianDanLev = G.user.lev;
if (G.user.obj["_" + i[e]]) return !1;
G.temp.res = [];
var n = G.getNode("Canvas/gameBox/txtBox", "txtBox"), a = G.VAL.LEV[e], o = G.getConf(G.objConf, i[e]);
G.temp.ageFlag = !1;
n.js.addTxt("<PNK>经过多年修炼，你已经【" + a + "】后期了，为提高破境成功率，你打算炼制破境丹药【" + o.name + "】，炼制此丹药需要" + o.year + "年。</> ", "dan", !0);
G.toSel("去坊市购买|shop,自行修练(寿元-" + o.year + ")|age_" + o.year);
return !0;
}
return !1;
};
G.tpEvent = function() {
if (!(G.user.year - G.user.tpYear < 2)) {
G.temp.tpTipsCd--;
var t = G.levConf[G.user.lev - 1], e = G._.random(1, 100), i = G.user.age - G.user.year, n = Math.ceil(i / G.user.age);
if (G.temp.tpTipsCd < 0 && 0 == G.temp.fight[0] && 1 == G.temp.opType[0] && 9 == t.step && n <= 5 && e < 20) {
G.temp.tpTipsCd = 5;
G.temp.res = [];
G.temp.ageFlag = !1;
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt("<PNK>岁月悠悠，你已卡在当前境界多年，长生之路漫漫，如果不实现突破，便不能增加寿元，即使你是修道之人，也会寿元耗尽，你一边努力修炼，一遍寻求解决办法，面对当前局面，你选择：</>", "tp", !0);
G.toSel("继续游历|end,尝试突破|tp");
return !0;
}
return !1;
}
};
G.fightEvent = function() {
if (G.temp.fight[0] > 0) {
if (G.fightStory()) return !0;
G.temp.fight = [ 0, 0, 0 ];
return !1;
}
G.temp.fightCd--;
var t = G._.random(1, 100), e = G.levConf[G.user.lev - 1];
if (G.temp.fightCd < 1 && G.user.year > 17 && 1 == G.temp.opType[0] && t < 20) {
G.temp.fightCd = G.VAL.FIGHT_CD;
for (var n, a = [], o = i(G.fightConf); !(n = o()).done; ) {
var m = n.value;
m.stage == e.stage && a.push(m);
}
var r = G.randomArray(a, 1)[0];
G.temp.fight[0] = r.id;
G.temp.fight[1] = 0;
G.temp.task = {};
G.fightStory();
return !0;
}
G.temp.fight = [ 0, 0, 0 ];
return !1;
};
G.getFightRes = function(t) {
G.temp.res = [];
G.r_group(t.item);
G.r_coin(t.money);
};
G.fightStory = function() {
var t = G.temp.fight[0] + "_" + G.temp.fight[1], e = G.fStepConf[t], i = !1;
if (e) {
var n = G.getConf(G.fightConf, G.temp.fight[0]), a = 0 == G.temp.fight[1] ? "<GRN>【" + n.name + "】</>" : "";
G.getFightRes(e);
G.temp.ageFlag = !1;
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.addTxt(a + e.txt, e.action, "" != a);
switch (e.type) {
case "msg":
i = G.fightMsg(e.action);
break;

case "sel":
G.toSel(e.action);
i = !0;
break;

case "combat":
G.doFight(e.action);
i = !0;
}
return i;
}
return i;
};
G.fightMsg = function(t) {
var e = G.getNode("Canvas/gameBox/opBox", "opBox");
if ("to" == t.split("|")[0]) {
G.temp.fight[1] = Number(t.split("|")[1]);
return !0;
}
if ("end" == t) {
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
G.temp.fight = [ 0, 0, 0 ];
return !0;
}
if ("hurt" == t) {
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
return !1;
}
if ("dead" == t) {
-1 == G.temp.fbId && (G.temp.ageFlag = !0);
G.setOpType(2);
G.showTips("修练失败");
e.js.relife();
G.temp.fight = [ 0, 0, 0 ];
return !0;
}
};
G.getTaskItem = function(t) {
if (G.temp.task["_" + t]) return G.temp.task["_" + t];
for (var e, n = [], a = [], o = 0, m = i(G.fTaskConf); !(e = m()).done; ) {
var r = e.value;
if (r.id == t) {
n.push(r);
var s = [ 0, 10, r.wgt1, r.wgt2 ];
a.push(s[r.type]);
o += s[r.type];
}
}
for (var l = G._.random(1, o), p = null, d = 0; d < a.length; d++) if ((l -= a[d]) <= 0) {
p = n[d];
G.temp.task["_" + t] = p;
break;
}
return p;
};
G.doFight = function(t) {
t = t.split("|");
var e = G.getTaskItem(Number(t[0]));
if (e) {
G.temp.fight[2] = e.exp;
t = e.monster + "|" + t[1] + "|" + t[3] + "|" + t[2];
G.toFight(t);
}
};
G.overAge = function() {
G.temp.res = [];
var t = G.getNode("Canvas/gameBox/txtBox", "txtBox");
G.temp.ageFlag = !1;
t.js.addTxt("<PNK>你的寿元已尽。</>", "home");
if (-1 == G.temp.fbId) {
var e = G.getMsgBox();
if (G.user.ghost) n(); else {
var i = G.checkGhost();
if (null != i) {
G.temp.fight = [ 0, 0, 0 ];
e.showMsg("你的寿元已尽，系统觉得你是命定的主角，所以给你选择『成为鬼仙』的机会。", function() {
G.setOpType(1);
G.setGhost(i);
G.temp.ageFlag = !1;
t.js.addTxt("<PNK>你寻觅一处洞府开始查看自己的情况，此刻你肉体崩溃，元婴和神魂也跟着开始撕裂。你知道再不做决策就晚了。虽然转为鬼仙后，没有机会升入仙界了，但是修炼之道不能停在此处，于是你元婴离体，开始将精力灌注到元婴中，等到元婴凝练到接近成为实体，你才将神魂转到元婴上。</>", "msg");
t.js.addTxt("<PNK>当你的神魂转到元婴之上，你感觉到灵力似乎发生了变化。白色的灵力当中有了一丝金色的，你试着调用了一下发现，这一丝金色的灵力的威力，竟然足以移山填海。你知道这是比灵力更高的仙力，只有当全身灵力转为仙力，才能真正升入仙界。只可惜，你已经无法踏足那一境界。</>", "msg");
t.js.addTxt("<PNK>鬼仙也是仙。你打算接下来游历人间，尽情享受这个世界。</>", "msg");
G.temp.ageFlag = !0;
}, function() {
n();
});
e.showCancel(!0);
e.setHCenter();
} else n();
}
} else n();
function n() {
G.setOpType(2);
G.getNode("Canvas/gameBox/opBox", "opBox").js.relife();
G.temp.checkAge = !1;
}
};
G.getTypeObj = function(t) {
if (null != t) {
var e = [];
for (var i in G.user.obj) {
var n = Number(i.split("_")[1]), a = G.getConf(G.objConf, n);
a && a.type == t && e.push(i);
}
return e;
}
var o = [ [], [], [], [], [], [] ];
for (var m in G.user.obj) {
var r = Number(m.split("_")[1]), s = G.getConf(G.objConf, r);
if (s) if (1 == s.type) o[0].push(m); else if (11 == s.type) o[1].push(m); else if (5 == s.type) o[3].push(m); else if (6 == s.type) o[4].push(m); else if (7 == s.type) o[5].push(m); else {
if (8 == s.type) continue;
o[2].push(m);
}
}
return o;
};
G.setOpType = function(t) {
if (-1 == G.temp.fbId) {
G.user.step < 0 && (t = 1);
G.temp.opType[0] = t;
} else {
G.temp.fbStep < 0 && (t = 1);
G.temp.opType[1] = t;
}
};
G.getQuaObj = function(t) {
for (var e, n = [ [], [], [], [], [] ], a = i(G.objConf); !(e = a()).done; ) {
var o = e.value;
(null == t || null != t && o.type == t) && n[o.qua - 1].push(o.id);
}
return n;
};
G.dropObj = function(t) {
G.temp.drop = [];
var e = G.getConf(G.guaiConf, t);
if (1 === e.reward) {
var i = G.getQuaObj(7), n = G._.random(1, 100);
if (n > 49) return;
var a;
a = n <= 28 ? 1 : n > 28 && n <= 42 ? 2 : 3;
for (var o = 0; o < a; o++) {
var m = Math.floor(1 + e.lv / 20), r = Math.floor(1 + e.lv / 14), s = G._.random(m, r), l = i[(s = Math.min(5, G._.random(1, s))) - 1];
if (l.length > 0) {
var p = l[G._.random(0, l.length - 1)];
G.r_item(p + "|1");
var d = G.getConf(G.objConf, p);
G.temp.drop.push("【" + d.name + "】+1");
}
}
}
};
G.bookBuff = function(t) {
var e = [ 0, 0, 0, 0 ];
if (-1 == (t = null == t ? G.bookId() : t)) return e;
var i = G.user.setObj["_" + t], n = i ? i.lev : 1, a = G.getConf(G.objConf, t);
e[0] = a.hp_b + n * a.hp_up;
e[2] = a.df_b + n * a.df_up;
e[3] = a.mp_b + n * a.mp_up;
return e;
};
G.runFsList = function() {
var t = [];
for (var e in G.user.setObj) {
var i = G.user.setObj[e];
if (!i.fsId) {
var n = G.getConf(G._15Conf, i.fsId);
n && -1 != n.eff1.indexOf("flee") && i.state > 0 && t.push(e);
}
}
return t;
};
G.addFsExp = function(t, e, n) {
if (0 == t) for (var a in G.user.obj) {
var o = Number(a.split("_")[1]), m = G.getConf(G.objConf, o);
m && 11 == m.type && (G.user.setObj[a] ? G.user.setObj[a].state > 0 ? G.user.setObj[a].exp += G._.random(100, 150) : G.user.setObj[a].exp += G._.random(25, 50) : G.user.setObj[a] = {
lev: 1,
exp: G._.random(25, 50),
fsId: m.magic,
state: 0
});
} else if (1 == t) for (var r in G.user.setObj) {
var s = G.user.setObj[r];
s.fsId || (s.exp += e);
} else if (2 == t) {
var l = G.user.setObj[n];
l && (l.exp += e);
} else if (3 == t) for (var p, d = i(G.fsList()); !(p = d()).done; ) {
var c = p.value, u = G.user.setObj["_" + c];
u && (u.exp += e);
}
for (var y in G.user.setObj) {
var f = G.user.setObj[y], x = Number(y.split("_")[1]), h = G.getConf(G.objConf, x);
if (h && 11 == h.type) for (;;) {
var g = 100 * h.qua * Math.pow(f.lev, 2);
if (!(f.exp >= g)) break;
f.exp -= g;
f.lev = Math.min(50, f.lev + 1);
}
}
};
G.fsList = function() {
var t = [], e = 0;
for (var i in G.user.setObj) {
var n = Number(i.split("_")[1]);
if (11 == G.getConf(G.objConf, n).type && 1 == G.user.setObj[i].state) {
G.user.setObj[i].index = e;
e++;
t.push(n);
}
}
return t;
};
G.fsDesc = function(t) {
var e = G.user.setObj["_" + t];
if (!e) {
var i = G.getConf(G.objConf, t);
e = {
lev: 1,
fsId: i.magic
};
}
var n = G.getConf(G._15Conf, e.fsId);
return {
eff1: a(n.eff1),
eff2: a(n.eff2)
};
function a(t) {
var i = t.split("|")[0], n = Number(t.split("|")[1]) / 100;
switch (i) {
case "dmg":
case "heal":
return Math.ceil(n * (1 + e.lev / 50) * 100);

case "at":
var a = n * (1 + e.lev / 50);
return Math.ceil(Math.abs(100 * a)) + "%";

case "df":
var o = n * (1 + e.lev / 50);
return Math.ceil(Math.abs(100 * o)) + "%";

case "miss":
var m = n * (1 + e.lev / 50);
return Math.ceil(Math.abs(100 * m)) + "%";

case "crit":
var r = n * (1 + e.lev / 50);
return Math.ceil(Math.abs(100 * r)) + "%";

case "crit_hit":
var s = n * (1 + e.lev / 50);
return Math.ceil(Math.abs(100 * s)) + "%";

case "flee":
var l = n * (1 + e.lev / 50);
return Math.ceil(Math.abs(100 * l)) + "%";
}
}
};
G.resetRole = function() {
var t = G.getFightData(!0, G.user.lev);
G.user.hp = t[0];
G.user.mp = t[3];
};
G.guaiFs = function() {
G.temp.guaiFs0 = [ [], [], [], [] ];
G.temp.guaiFs1 = [ [], [], [], [] ];
for (var t, e = i(G._16Conf); !(t = e()).done; ) {
var n = t.value;
1 == n.type ? G.temp.guaiFs0[n.qua - 1].push(n.id) : 2 == n.type && G.temp.guaiFs1[n.qua - 1].push(n.id);
}
};
G.checkGhost = function() {
if (G.levConf[G.user.lev - 1].stage < 7) return null;
for (var t in G.user.setObj) {
var e = G.user.setObj[t];
if (null != e.fsId && e.state > 0 && e.lev > 9) {
var i = G.getConf(G._15Conf, e.fsId);
if (i && -1 != i.eff1.indexOf("ghost")) return {
id: Number(i.eff1.split("|")[1]),
lev: e.lev
};
}
}
return null;
};
G.setGhost = function(t) {
G.user.ghost = !0;
G.user.own = -1;
var e = 0;
for (var i in G.user.obj) {
var n = Number(i.split("_")[1]), a = G.getConf(G.objConf, n);
if (!a || 1 != a.type && 11 != a.type) e++; else {
delete G.user.obj[i];
G.user.setObj[i] && delete G.user.setObj[i];
}
}
G.user.data = G._.assign([], G.user.bakData);
G.user.obj["_" + t.id] = 1;
var o = G.getConf(G.objConf, t.id);
G.user.setObj["_" + t.id] = {
lev: t.lev,
exp: 0,
buff: o.eff,
state: 1
};
var m = Math.floor(e * t.lev / 100);
if (m > 0) {
var r = [];
for (var s in G.user.obj) r.push(s);
r = G.randomArray(r, m);
for (var l in r) {
delete G.user.obj[l];
G.user.setObj[l] && delete G.user.setObj[l];
}
}
G.r_own("4900|1");
var p = {
start: 1,
mall: 1,
alch: 0,
cast: 0,
walkin: 0,
ghost: 0,
often: 0
};
for (var d in p) p[d] = G.user.var[d];
G.user.var = p;
G.user.age = 9999 + G.user.year;
G.save();
console.log("鬼修~");
};
G.getAdConf = function() {
var t = Math.min(G.adConf.length - 1, G.user.lev - 1);
return G.adConf[t];
};
G.userTitle = function(t) {
if (!t) {
var e = G.getItem("xx_title");
return e ? JSON.parse(e) : [];
}
G.setItem("xx_title", t);
};
G.noCoinTips = function(t) {
var e = G.getAdConf(), i = G.getMsgBox();
i.showMsg("灵石不足，是否观看视频免费获取 " + e.money + " 灵石？", function() {
G.showVedio(function() {
G.user.coin += e.money;
G.showTips("获得" + e.money + "灵石");
G.save();
t && t();
});
});
i.showCancel(!0);
i.showVedio();
};
G.initHomeName = function() {
G.temp.home = {
_1: [],
_2: [],
_3: [],
_4: []
};
for (var t, e = i(G.homeNameConf); !(t = e()).done; ) {
var n = t.value;
1 == n.type ? G.temp.home._1.push(n.word) : 2 == n.type ? G.temp.home._2.push(n.word) : 3 == n.type ? G.temp.home._3.push(n.word) : 4 == n.type && G.temp.home._4.push(n.word);
}
G._.size(G.user.home.man) < 1 && (G.user.home.img = G.randomArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ], 15));
};
G.getHomeName = function() {
if (0 == G._.random(0, 1)) {
var t = G.randomArray(G.temp.home._1, 1), e = G.randomArray(G.temp.home._2, 1), i = G.randomArray(G.temp.home._4, 1);
return t.join("") + e.join("") + i.join("");
}
var n = G.randomArray(G.temp.home._3, 1), a = G.randomArray(G.temp.home._4, 1);
return n.join("") + a.join("");
};
G.getRoleName = function(t, e) {
void 0 === e && (e = !1);
if (!G.temp.nameList) {
G.temp.nameList = [ [], [], [], [], [], [], [] ];
for (var n, a = i(G.nameConf); !(n = a()).done; ) {
var o = n.value;
G.temp.nameList[o.type - 1].push(o);
}
}
for (var m, r = "", s = G._.random(0, 1), l = G._.random(1, 1059439), p = i(G.temp.nameList[0]); !(m = p()).done; ) {
var d = m.value;
if (l >= d.min && l <= d.max) {
r = d.title;
break;
}
}
e && (G.user.name_s = r);
var c, u = 0 == t ? 3 : 0;
c = 0 == s ? G.randomArray(G.temp.nameList[1 + u], 1)[0].title + G.randomArray(G.temp.nameList[2 + u], 1)[0].title : G.randomArray(G.temp.nameList[3 + u], 1)[0].title;
e && (G.user.name_n = c);
return r + c;
};
G.preAddMan = function() {
if (G.temp.preMan) return G.temp.preMan;
var t, e = G.user.home.manId++, i = G.randomArray(G.user.home.img, 1), n = i.length > 0 ? i[0] : 1;
t = -1 != G.VAL.ROLE_IMG[0].indexOf(n) ? 0 : 1;
G.temp.preMan = {
id: e,
img: n || 1,
name: G.getRoleName(t),
sex: t,
lev: 1,
exp: 0,
per: G._.random(80, 120),
data0: G._.random(5, 10),
data1: G._.random(5, 10),
dan: [ 0, 0, 0, 0 ]
};
return G.temp.preMan;
};
G.addMan = function() {
var t = G.getConf(G._17Conf, G.user.home.lev, "lvc");
if (!(G._.size(G.user.home.man) >= t.num_p || G.user.home.img.length < 1)) {
var e = G.preAddMan(), i = G.user.home.img.indexOf(e.img);
-1 != i && G.user.home.img.splice(i, 1);
G.user.home.man["_" + e.id] = G._.assign({}, e);
G.temp.preMan = null;
G.save();
}
};
G.addManExp = function(t) {
for (var e in G.user.home.man) G.user.home.man[e].exp += t;
G.save();
};
G.getManData = function(t) {
var e = G.user.home.man[t];
e.dan || (e.dan = [ 0, 0, 0, 0 ]);
var i = G.levConf[e.lev - 1], n = [ 0, 0, 0, 0, 0 ];
n[0] = Math.ceil(i.hp * (1 + e.data0 / 10) * e.per / 100) + e.dan[0];
n[1] = Math.ceil(i.at * (1 + e.data1 / 5) * e.per / 100) + e.dan[1];
n[2] = Math.ceil(i.df * (1 + e.data0 / 10) * e.per / 100) + e.dan[2];
n[3] = Math.ceil(i.mp * e.per / 100) + e.dan[3];
n[4] = n[0] + 10 * n[1] + 30 * n[2];
return n;
};
G.getManBuff = function() {
for (var t, e = [ 0, 0, 0, 0 ], n = [ 0, 0, 0, 0 ], a = i(G.user.home.zf); !(t = a()).done; ) {
var o = t.value, m = G.getManData(o);
e[0] += m[0];
e[1] += m[1];
e[2] += m[2];
e[3] += m[3];
}
if (22000002 != G.temp.fbId) for (var r in e) n[r] = Math.ceil(e[r] / 10);
return n;
};
G.addHomeTask = function() {
for (var t, e = [], n = G.user.home.lev, a = G.user.home.task, o = i(G._18Conf); !(t = o()).done; ) {
var m = t.value, r = m.lvs.split("|");
!a["_" + m.id] && n >= Number(r[0]) && n <= Number(r[1]) && e.push(m);
}
if (e.length < 1) return null;
var s = G.randomArray(e, 1)[0], l = s.desc.split("$")[1], p = G.getTaskItem(l), d = s.time.split("|");
a["_" + s.id] = {
manId: -1,
time: G._.random(Number(d[0]), Number(d[1])),
attr: p ? p.txt : "",
coin: 0,
item: null,
start: 0
};
if ("money" == s.type) {
var c = s.value.split("|");
a["_" + s.id].coin = G._.random(Number(c[0]), Number(c[1]));
} else if ("item" == s.type) {
var u = G.getTaskItem(s.item), y = s.value.split("|");
a["_" + s.id].item = [ u.item, G._.random(Number(y[0]), Number(y[1])) ];
}
G.save();
return s.id;
};
G.getRandMan = function(t) {
void 0 === t && (t = 2);
var e = [];
for (var i in G.user.home.man) e.push(G.user.home.man[i]);
return G.randomArray(e, t);
};
G.checkHp = function(t) {
void 0 === t && (t = !0);
if (!G.temp.hpTips || !t) {
var e = G.getFightData(!0, G.user.lev);
G.user.hp = Math.min(G.user.hp, e[0]);
if (G.user.hp < .3 * e[0]) {
G.temp.hpTips = t;
var i = G.getMsgBox();
i.showMsg("经过连番战斗，你已经灵力耗尽，气血不足，为了接下来更好的应对挑战，建议你回复后再继续历练。", function() {
G.getNode("Canvas/bupBox", "bupBox").js.jumpTo(0);
});
i.setBupTxt("修练恢复");
i.showOtherBup("继续历练");
return !0;
}
return !1;
}
};
G.addEgg = function(t) {
G.temp.res = [];
var e = (G.user.sex < 1 ? G.VAL.EGG.GIRL : G.VAL.EGG.MAN)[t];
if (e) {
if (e.gift) for (var n, a = i(e.gift); !(n = a()).done; ) {
var o = n.value;
G.r_item(o);
}
if (e.coin) {
G.user.coin += e.coin;
G.temp.res.push("【灵石】+" + e.coin);
}
G.temp.ageFlag = !1;
var m = G.getNode("Canvas/gameBox/txtBox", "txtBox"), r = e.txt.split("，"), s = "【神秘转世-" + r[0] + "】";
r.shift();
m.js.addTxt("<EGG>" + s + "<br/> " + r + " </>", "home", !0);
G.temp.ageFlag = !0;
}
};
}
};
cc._RF.pop();
}, {
"../ad/apk_233": "apk_233",
"../ad/apk_mi": "apk_mi",
"../ad/apk_tap": "apk_tap",
"../ad/apk_vivo": "apk_vivo",
"../ad/hwAd": "hwAd",
"../ad/ksAd": "ksAd",
"../ad/ttAd": "ttAd",
"../ad/vivoAd": "vivoAd",
"../ad/wxAd": "wxAd",
"../ad/ylEvent": "ylEvent",
"../ad/zfbAd": "zfbAd",
"../conf/homeNameConf": "homeNameConf",
"../conf/nameConf": "nameConf",
"../conf/valConf": "valConf",
"./crypto-js": "crypto-js",
"./lodash": "lodash",
"./moment": "moment"
} ]
