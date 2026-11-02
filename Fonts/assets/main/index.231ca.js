window.__require = function t(e, i, n) {
function a(m, r) {
if (!i[m]) {
if (!e[m]) {
var s = m.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(s, !0);
if (o) return o(s, !0);
throw new Error("Cannot find module '" + m + "'");
}
m = s;
}
var p = i[m] = {
exports: {}
};
e[m][0].call(p.exports, function(t) {
return a(e[m][1][t] || t);
}, p, p.exports, t, e, i, n);
}
return i[m].exports;
}
for (var o = "function" == typeof __require && __require, m = 0; m < n.length; m++) a(n[m]);
return a;
}({
aStar: [ function(t, e) {
"use strict";
cc._RF.push(e, "4ff1cfz4LVE4Z5YtBG0NqEQ", "aStar");
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
function o(t, e) {
return {
x: t,
y: e,
eq: function(t) {
return this.x === t.x && this.y === t.y;
}
};
}
e.exports = {
Array2D: function(t, e, i) {
for (var n = [], a = i || 0, o = 0; o < t; o++) {
for (var m = [], r = 0; r < e; r++) m.push(a);
n.push(m);
}
return {
w: t,
h: e,
data: n,
showArray2D: function() {
for (var t = "", e = 0; e < this.h; e++) {
for (var i = 0; i < this.w; i++) t += this.data[i][e] + " ";
t += "\n";
}
console.log(t);
}
};
},
Point: o,
AStar: function(t, e, n, a) {
var m = function(t, e, i) {
return {
point: t,
father: null,
g: i || 0,
h: 10 * (Math.abs(e.x - t.x) + Math.abs(e.y - t.y))
};
};
return {
map2d: t,
startPoint: e,
endPoint: n,
passTag: a || 1,
openList: [],
closeList: [],
getMinNode: function() {
for (var t, e = this.openList[0], n = i(this.openList); !(t = n()).done; ) {
var a = t.value;
a.g + a.h < e.g + e.h && (e = a);
}
return e;
},
pointInCloseList: function(t) {
for (var e, n = i(this.closeList); !(e = n()).done; ) if (e.value.point.eq(t)) return !0;
return !1;
},
pointInOpenList: function(t) {
for (var e, n = i(this.openList); !(e = n()).done; ) {
var a = e.value;
if (a.point.eq(t)) return a;
}
return null;
},
endPointInCloseList: function() {
for (var t, e = i(this.closeList); !(t = e()).done; ) {
var n = t.value;
if (n.point.eq(this.endPoint)) return n;
}
return null;
},
searchNear: function(t, e, i) {
if (t.point.x + e < 0 || t.point.x + e > this.map2d.w - 1 || t.point.y + i < 0 || t.point.y + i > this.map2d.h - 1) return null;
if (this.map2d.data[t.point.x + e][t.point.y + i] !== this.passTag) return null;
var n = o(t.point.x + e, t.point.y + i);
if (this.pointInCloseList(n)) return null;
var a;
a = 0 === e || 0 === i ? 10 : 14;
var r = this.pointInOpenList(n);
if (null == r) {
(r = m(n, this.endPoint, t.g + a)).father = t;
this.openList.push(r);
return null;
}
if (t.g + a < r.g) {
r.g = t + a;
r.father = t;
}
},
start: function() {
var t = m(this.startPoint, this.endPoint);
this.openList.push(t);
for (;;) {
var e = this.getMinNode();
this.closeList.push(e);
var i = this.openList.indexOf(e);
this.openList.splice(i, 1);
this.searchNear(e, 0, -1);
this.searchNear(e, 0, 1);
this.searchNear(e, -1, 0);
this.searchNear(e, 1, 0);
this.searchNear(e, 1, 1);
this.searchNear(e, -1, -1);
this.searchNear(e, 1, -1);
this.searchNear(e, -1, 1);
var n = this.endPointInCloseList();
if (n) for (var a = n, o = []; ;) {
if (!a.father) return o.reverse();
o.push(a.point);
a = a.father;
}
if (0 === this.openList.length) return null;
}
}
};
}
};
cc._RF.pop();
}, {} ],
acBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "dbf860Jc+hPEqMQ4kK9Jgyo", "acBox");
cc.Class({
extends: cc.Component,
properties: {
adCount: cc.RichText,
adSkip: cc.RichText,
adTips: cc.Label
},
onEnable: function() {
this.adCount.string = "本轮已观看广告次数：<color=#3971FF>" + G.user.adTimes + "/" + G.VAL.MAX_AD[0] + "</c>";
this.adSkip.string = "本轮免广告卷数量：<color=#16B334>" + G.user.adSkip + "</c>";
this.adTips.string = "备注：每次轮回，观看" + G.VAL.MAX_AD[0] + "次广告可获得免广告卷" + G.VAL.MAX_AD[1] + "张，免广告卷使用完后，观看" + G.VAL.MAX_AD[0] + "次可再获得" + G.VAL.MAX_AD[1] + "张，本轮重生后所有数据清零。";
if (G.user.adTimes < G.VAL.MAX_AD[0]) {
var t = G.VAL.MAX_AD[0] - G.user.adTimes;
t < 3 && G.showTips("还差" + t + "次视频，可解锁【免广】福利~");
}
},
start: function() {}
});
cc._RF.pop();
}, {} ],
apk_233: [ function(t, e) {
"use strict";
cc._RF.push(e, "ce185C01INGkabooIVc6slk", "apk_233");
var i = !1, n = !1, a = !1, o = !1, m = -1, r = 0;
function s(t) {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsToAndroid", "(Ljava/lang/String;)V", t);
}
e.exports = {
showBanner: function() {
console.log("打开banner");
if (n) {
console.log("call native openBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
}
},
closeBanner: function() {
console.log("关闭Banner广告");
if (n) {
console.log("call native closeBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "closeBanner", "()V");
}
},
showInter: function() {
console.log("打开插屏");
n && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInter", "()V");
},
showVedio: function(t, e) {
if (r > 0) G.showTips("视频冷却中，请稍后再试..." + r + "s"); else if (n) {
t = t;
e = e;
o = !1;
G.temp.vedioCb = t;
r = 10;
m = setInterval(function() {
if (--r < 1) {
clearInterval(m);
m = -1;
}
}, 1e3);
G.getNowSec();
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showVedio", "()V");
} else G.showTips("视频加载失败，请退出重启游戏！");
},
initJsBridge: function() {
-1 != G.from.indexOf("apk") && (window.NativeAdCallback = function(t) {
if (!i) {
i = !0;
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsBridgeOk", "(Ljava/lang/String;)V", G.userId);
}
n = !0;
var e = t.split("_")[0];
s("yong=>" + t);
if ("initOk" == e) {
var m = t.replace("initOk_", "");
s("yong=>" + m);
G.gameData = JSON.parse(m);
} else if ("vedioDone" == e) o = !0; else if ("vedioClose" == e) {
o && G.temp.vedioCb && setTimeout(function() {
G.temp.vedioCb();
G.freeAd();
}, 500);
o = !1;
} else if ("startGame" == e) a = !0; else if ("vedioErr" == e) {
var r = t.split("_")[1];
G.showMsg("广告加载异常，请稍后再试..." + r);
}
});
},
getBridgeState: function() {
return n;
},
getLoginState: function() {
return a;
},
askTapLogin: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "tapLogin", "(Ljava/lang/String;)V", G.userId);
},
pay: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "pay", "(Ljava/lang/String;)V", 30);
},
saveGameData: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "saveGameData", "(Ljava/lang/String;)V", JSON.stringify(G.user));
},
toAndroid: s,
preloadAd: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preloadAd", "()V");
}
};
cc._RF.pop();
}, {} ],
apk_mi: [ function(t, e) {
"use strict";
cc._RF.push(e, "e8c63eookNKIIVSd0Na7g7F", "apk_mi");
var i = !1, n = !1, a = !1, o = !1, m = -1, r = 0;
function s(t) {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsToAndroid", "(Ljava/lang/String;)V", t);
}
e.exports = {
showBanner: function() {
console.log("打开banner");
if (n) {
console.log("call native openBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
}
},
closeBanner: function() {
console.log("关闭Banner广告");
if (n) {
console.log("call native closeBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "closeBanner", "()V");
}
},
showInter: function() {
console.log("打开插屏");
n && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInter", "()V");
},
showVedio: function(t, e) {
if (r > 0) G.showTips("视频冷却中，请稍后再试..." + r + "s"); else if (n) {
t = t;
e = e;
o = !1;
G.temp.vedioCb = t;
r = 10;
m = setInterval(function() {
if (--r < 1) {
clearInterval(m);
m = -1;
}
}, 1e3);
G.getNowSec();
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showVedio", "()V");
} else G.showTips("视频加载失败，请退出重启游戏！");
},
initJsBridge: function() {
-1 != G.from.indexOf("apk") && (window.NativeAdCallback = function(t) {
if (!i) {
i = !0;
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsBridgeOk", "(Ljava/lang/String;)V", G.userId);
}
n = !0;
var e = t.split("_")[0];
s("yong=>" + t);
if ("initOk" == e) {
var m = t.replace("initOk_", "");
s("yong=>" + m);
G.gameData = JSON.parse(m);
} else if ("vedioDone" == e) o = !0; else if ("vedioClose" == e) {
o && G.temp.vedioCb && setTimeout(function() {
G.temp.vedioCb();
G.freeAd();
}, 500);
o = !1;
} else if ("startGame" == e) a = !0; else if ("vedioErr" == e) {
var r = t.split("_")[1];
G.showMsg("广告加载异常，请稍后再试..." + r);
}
});
},
getBridgeState: function() {
return n;
},
getLoginState: function() {
return a;
},
askTapLogin: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "tapLogin", "(Ljava/lang/String;)V", G.userId);
},
pay: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "pay", "(Ljava/lang/String;)V", 30);
},
saveGameData: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "saveGameData", "(Ljava/lang/String;)V", JSON.stringify(G.user));
},
toAndroid: s,
preloadAd: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preloadAd", "()V");
}
};
cc._RF.pop();
}, {} ],
apk_tap: [ function(t, e) {
"use strict";
cc._RF.push(e, "27870qdQJdLO5toTGrJR+50", "apk_tap");
var i = !1, n = !1, a = !1, o = !1, m = -1, r = 0;
function s(t) {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsToAndroid", "(Ljava/lang/String;)V", t);
}
e.exports = {
showBanner: function() {
console.log("打开banner");
if (n) {
console.log("call native openBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
}
},
closeBanner: function() {
console.log("关闭Banner广告");
if (n) {
console.log("call native closeBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "closeBanner", "()V");
}
},
showInter: function() {
console.log("打开插屏");
n && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInter", "()V");
},
showVedio: function(t, e) {
if (r > 0) G.showTips("视频冷却中，请稍后再试..." + r + "s"); else if (n) {
t = t;
e = e;
o = !1;
G.temp.vedioCb = t;
r = 10;
m = setInterval(function() {
if (--r < 1) {
clearInterval(m);
m = -1;
}
}, 1e3);
G.temp.adStime = G.getNowSec();
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showVedio", "()V");
} else G.showTips("视频加载失败，请退出重启游戏！");
},
initJsBridge: function() {
-1 != G.from.indexOf("apk") && (window.NativeAdCallback = function(t) {
if (!i) {
i = !0;
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsBridgeOk", "(Ljava/lang/String;)V", G.userId);
}
n = !0;
var e = t.split("_")[0];
s("yong=>" + t);
if ("initOk" == e) {
var m = t.replace("initOk_", "");
s("yong=>" + m);
G.gameData = JSON.parse(m);
} else if ("vedioDone" == e) o = !0; else if ("vedioClose" == e) {
if (o && G.temp.vedioCb) {
if (G.checkAdCheat()) return;
setTimeout(function() {
G.temp.vedioCb();
G.freeAd();
}, 500);
}
o = !1;
} else if ("startGame" == e) a = !0; else if ("vedioErr" == e) {
var r = t.split("_")[1];
G.showMsg("广告加载异常，请稍后再试..." + r);
}
});
},
getBridgeState: function() {
return n;
},
getLoginState: function() {
return a;
},
askTapLogin: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "tapLogin", "(Ljava/lang/String;)V", G.userId);
},
pay: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "pay", "(Ljava/lang/String;)V", 30);
},
saveGameData: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "saveGameData", "(Ljava/lang/String;)V", JSON.stringify(G.user));
},
toAndroid: s,
preloadAd: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preloadAd", "()V");
}
};
cc._RF.pop();
}, {} ],
apk_vivo: [ function(t, e) {
"use strict";
cc._RF.push(e, "d4aeeHMvbNLeaKwiiZy1fQz", "apk_vivo");
var i = !1, n = !1, a = !1, o = !1, m = -1, r = 0;
function s(t) {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsToAndroid", "(Ljava/lang/String;)V", t);
}
e.exports = {
showBanner: function() {
console.log("打开banner");
if (n) {
console.log("call native openBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
}
},
closeBanner: function() {
console.log("关闭Banner广告");
if (n) {
console.log("call native closeBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "closeBanner", "()V");
}
},
showInter: function() {
console.log("打开插屏");
n && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInter", "()V");
},
showVedio: function(t, e) {
if (r > 0) G.showTips("视频冷却中，请稍后再试..." + r + "s"); else if (n) {
t = t;
e = e;
o = !1;
G.temp.vedioCb = t;
r = 10;
m = setInterval(function() {
if (--r < 1) {
clearInterval(m);
m = -1;
}
}, 1e3);
G.getNowSec();
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showVedio", "()V");
} else G.showTips("视频加载失败，请退出重启游戏！");
},
initJsBridge: function() {
-1 != G.from.indexOf("apk") && (window.NativeAdCallback = function(t) {
if (!i) {
i = !0;
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsBridgeOk", "(Ljava/lang/String;)V", G.userId);
}
n = !0;
var e = t.split("_")[0];
s("yong=>" + t);
if ("initOk" == e) {
var m = t.replace("initOk_", "");
s("yong=>" + m);
G.gameData = JSON.parse(m);
} else if ("vedioDone" == e) o = !0; else if ("vedioClose" == e) {
o && G.temp.vedioCb && setTimeout(function() {
G.temp.vedioCb();
G.freeAd();
}, 500);
o = !1;
} else if ("startGame" == e) a = !0; else if ("vedioErr" == e) {
var r = t.split("_")[1];
G.showMsg("广告加载异常，请稍后再试..." + r);
}
});
},
getBridgeState: function() {
return n;
},
getLoginState: function() {
return a;
},
askTapLogin: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "tapLogin", "(Ljava/lang/String;)V", G.userId);
},
pay: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "pay", "(Ljava/lang/String;)V", 30);
},
saveGameData: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "saveGameData", "(Ljava/lang/String;)V", JSON.stringify(G.user));
},
toAndroid: s,
preloadAd: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preloadAd", "()V");
}
};
cc._RF.pop();
}, {} ],
audioBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "42675RCsulB6Y/aLNlQ5b/w", "audioBox");
cc.Class({
extends: cc.Component,
properties: {
bgMp3: {
type: cc.AudioClip,
default: null
},
fightMp3: {
type: cc.AudioClip,
default: null
},
bupMp3: {
type: cc.AudioClip,
default: null
},
clrMp3: {
type: cc.AudioClip,
default: null
},
hitMp3: {
type: cc.AudioClip,
default: null
},
levMp3: {
type: cc.AudioClip,
default: null
},
fsMp3: {
type: cc.AudioClip,
default: null
}
},
onDestroy: function() {},
playMp3: function(t) {
if (G.user.audio[0] && G.temp.audio != t) {
cc.audioEngine.setMusicVolume(1);
G.temp.audio = t;
switch (t) {
case "bg":
cc.audioEngine.stopMusic();
G.temp.audioId = cc.audioEngine.playMusic(this.bgMp3, !0);
break;

case "fight":
cc.audioEngine.stopMusic();
G.temp.audioId = cc.audioEngine.playMusic(this.fightMp3, !0);
}
}
},
playEffect: function(t) {
if (G.user.audio[1]) {
cc.audioEngine.setEffectsVolume(1);
switch (t) {
case "bup":
cc.audioEngine.playEffect(this.bupMp3, !1);
break;

case "clr":
cc.audioEngine.playEffect(this.clrMp3, !1);
break;

case "hit":
cc.audioEngine.playEffect(this.hitMp3, !1);
break;

case "lev":
cc.audioEngine.playEffect(this.levMp3, !1);
break;

case "fs":
cc.audioEngine.playEffect(this.fsMp3, !1);
}
}
}
});
cc._RF.pop();
}, {} ],
bagBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "ac36dtuSN5F97AlnwCHPCS6", "bagBox");
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
item: cc.Prefab,
list: cc.Node,
title: cc.Label,
type: cc.Label,
rar: cc.Label,
desc: cc.Label,
typeBox: cc.Node,
delBup: cc.Node,
setBup: cc.Node,
useBup: cc.Node,
sellBup: cc.Node,
objState: cc.Node,
coin: cc.Label,
gfBox: cc.Node,
fbBox: cc.Node,
fsBox: cc.Node,
bupBox: cc.Node,
danCd: cc.Label,
cdCost: cc.Label,
danCdBup: cc.Node,
useFont: cc.Label,
allSellBup: cc.Node,
allSellCoin: cc.Label,
manItem: cc.Node,
objList: {
default: null,
visible: !1
},
typeIndex: {
default: null,
visible: !1
},
selId: {
default: null,
visible: !1
},
timeOut: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.delBup, function() {
G.setObj(t.selId, !1);
t.updateList(t.typeIndex);
});
G.setBup(this.setBup, function() {
t.toSet();
});
G.setBup(this.useBup, function() {
t.eatObj();
});
G.setBup(this.sellBup, function() {
G.playAudio("clr", 1);
G.sellObj(t.selId, 1);
if (G.user.obj["_" + t.selId]) {
var e = t.list.getChildByName("_" + t.selId);
e && e.getComponent("bagItem").updateNum();
t.showDesc("_" + t.selId);
} else t.updateList(t.typeIndex);
});
G.setBup(this.allSellBup, function() {
var e = G.getMsgBox();
e.showMsg("是否确定全部出售该材料？", function() {
t.sellAllObj();
});
e.showCancel(!0);
});
},
onEnable: function() {
this.manItem.active = G.temp.danMan;
G.temp.danMan && this.manItem.getComponent("manItem").showInfo(G.temp.danMan);
this.updateList(0);
},
onDisable: function() {
G.temp.danMan = null;
G.temp.danGfId = -1;
G.temp.danFsId = -1;
},
updateList: function(t) {
var e = this;
this.objList = G.getTypeObj();
var i = this.typeBox.getComponent("typeBox");
if (-1 == G.temp.bagType) {
G.temp.danGfId = -1;
G.temp.danFsId = -1;
i.setCb(function(t) {
e.showList(t);
});
i.showType(t);
} else {
i.setCb(function(t) {
e.showList(t);
}, [ G.temp.bagType ]);
i.showType(G.temp.bagType);
}
},
showList: function(t) {
this.typeIndex = t;
this.list.removeAllChildren();
var e = this.objList[t], n = -1;
2 == G.temp.bagType && (-1 != G.temp.danGfId ? n = 16 : -1 != G.temp.danFsId ? n = 17 : null != G.temp.danMan && (n = 3));
for (var a, o = "", m = i(e); !(a = m()).done; ) {
var r = a.value;
if (-1 != n) {
var s = Number(r.split("_")[1]), l = G.getConf(G.objConf, s);
if (l && l.type != n) continue;
if (l && "lf" == l.attr.split("|")[0] && 3 == n) continue;
}
"" == o && (o = r);
var p = cc.instantiate(this.item);
p.name = r;
p.parent = this.list;
p.getComponent("bagItem").showInfo(r);
}
if ("" != o) this.showDesc(o); else {
this.title.string = "未选择";
this.type.string = "未知";
this.rar.string = "未知";
this.desc.string = "暂无详情...";
this.rar.node.color = cc.color("#000000");
this.delBup.active = !1;
this.setBup.active = !1;
this.useBup.active = !1;
this.sellBup.active = !1;
this.allSellBup.active = !1;
}
},
showDesc: function(t) {
var e = Number(t.split("_")[1]);
this.selId = e;
var n = G.getConf(G.objConf, e);
this.objState.active = G.user.setObj[t] && G.user.setObj[t].state > 0;
this.title.string = n.name;
this.type.string = G.VAL.OBJ["_" + n.type];
this.rar.string = G.VAL.RAR[n.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[n.qua]);
this.desc.string = n.des;
if (11 == n.type) {
var a = G.getConf(G._15Conf, n.magic), o = G.fsDesc(e), m = a.des.replace("eff1", o.eff1);
m = (m = m.replace("eff2", o.eff2)).replace("rate", a.rate + "%");
this.desc.string += "施法时，" + m;
}
"" != n.stage && (this.desc.string += "【" + G.VAL.LEV[n.stage - 1] + "】可使用。");
if (1 == n.type) {
var r = G.user.setObj[t] ? G.user.setObj[t].buff : n.eff;
this.desc.string += "修练效率提升：" + r.toFixed(2) + "%";
}
this.coin.string = G.getNum(Math.ceil(n.pri * G.VAL.SELL_PER));
this.delBup.active = G.user.setObj[t] && 1 == G.user.setObj[t].state;
this.setBup.active = !(1 != n.type && 5 != n.type && 11 != n.type || G.user.setObj[t] && 0 != G.user.setObj[t].state);
this.useBup.active = -1 != [ 2, 3, 12, 13, 14, 15, 16, 17 ].indexOf(n.type);
if (this.useBup.active) {
var s = G.getAdConf(), l = Math.ceil(s.money / 3);
this.danCdBup.active = G.user.danOff[0] >= G.VAL.DAN_OFF[0];
this.cdCost.string = "灵石加速 " + G.getNum(l);
this.useFont.string = "使 用(" + G.user.danOff[0] + "/" + G.VAL.DAN_OFF[0] + ")";
}
this.sellBup.active = "" != n.pri && Number(n.pri) > 0;
for (var p, d = i(this.list.children); !(p = d()).done; ) p.value.getComponent("bagItem").showSel(t);
this.showAllCoin(this.typeIndex);
},
showAllCoin: function(t) {
this.allSellBup.active = 5 == t;
if (5 == t) {
var e = 0, i = G.getConf(G.objConf, this.selId);
"" != i.pri && (e = i.pri * G.user.obj["_" + this.selId]);
this.allSellCoin.string = G.getNum(Math.ceil(e * G.VAL.SELL_PER));
}
},
sellAllObj: function() {
G.sellObj(this.selId, G.user.obj["_" + this.selId]);
this.updateList(this.typeIndex);
G.playAudio("clr", 1);
},
toSet: function() {
var t = this, e = G.getConf(G.objConf, this.selId);
if (e) if (1 == e.type) if (-1 != G.bookId()) {
this.gfBox.getComponent("gfBox").showInfo(this.selId);
this.bupBox.getComponent("bupBox").jumpTo(0);
} else {
G.setObj(this.selId, !0);
this.updateList(this.typeIndex);
} else {
var i = G.user.setObj["_" + this.selId];
if (!i || 0 == i.state) if ((5 == e.type ? G.fbList() : G.fsList()).length < 5) {
G.setObj(this.selId, !0);
this.updateList(this.typeIndex);
} else {
var n = 5 == e.type ? "最多装备5件法宝" : "最多装备5本法术书";
G.showTips(n, function() {
5 == e.type ? t.fbBox.active = !0 : 11 == e.type && (t.fsBox.active = !0);
t.bupBox.getComponent("bupBox").jumpTo(0);
});
}
}
},
updateDanCd: function() {
this.danCd.string = "冷却 " + G.getTime(G.user.danOff[1]).ms;
if (G.user.danOff[1] < 1) {
G.user.danOff = [ 0, -1 ];
this.useFont.string = "使 用(" + G.user.danOff[0] + "/" + G.VAL.DAN_OFF[0] + ")";
this.danCdBup.active = !1;
}
},
eatObj: function() {
if (this.danCdBup.active) {
var t = G.getAdConf(), e = Math.ceil(t.money / 3);
if (G.user.coin >= e) {
G.user.coin -= e;
G.user.danOff = [ 0, -1 ];
this.useFont.string = "使 用(" + G.user.danOff[0] + "/" + G.VAL.DAN_OFF[0] + ")";
this.danCdBup.active = !1;
G.save();
} else G.noCoinTips();
} else {
G.eatObj(this.selId, 1);
if (G.user.obj["_" + this.selId]) {
var i = this.list.getChildByName("_" + this.selId);
i && i.getComponent("bagItem").updateNum();
this.showDesc("_" + this.selId);
} else this.updateList(this.typeIndex);
}
},
update: function(t) {
if (G.temp.gameStart && this.danCdBup.active) {
this.timeOut += t;
if (this.timeOut >= 1) {
this.timeOut = 0;
this.updateDanCd();
}
}
}
});
cc._RF.pop();
}, {} ],
bagItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "abf8a/ZMDNNkL2ZbmIjrakT", "bagItem");
cc.Class({
extends: cc.Component,
properties: {
img: cc.Node,
title: cc.Label,
num: cc.Label,
sel: cc.Node,
set: cc.Node,
key: {
default: 0,
visible: !1
},
type: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.node, function() {
t.showDesc();
});
},
showInfo: function(t, e) {
void 0 === e && (e = 0);
this.type = e;
this.key = t;
var i = t.split("_")[1], n = G.getConf(G.objConf, i);
this.title.string = n.name;
if (1 == n.type) {
var a = n.qua - 1;
G.setLogo(this.img, "obj/", "obj", "book_" + a, !0, 70);
} else if (11 == n.type) {
var o = null == G.temp.fsIcon["_" + i] ? G._.random(0, 4) : G.temp.fsIcon["_" + i];
G.temp.fsIcon["_" + i] = o;
G.setLogo(this.img, "obj/", "obj", "fs_" + o + "_" + n.qua, !0, 70);
} else if (5 == n.type || 7 == n.type) {
var m = "obj_" + n.sub_type + "_" + n.qua;
G.setLogo(this.img, "obj/", "obj", m, !0, 70);
} else if (6 == n.type || 8 == n.type) ; else {
var r = null == G.temp.danIcon["_" + i] ? G._.random(0, 9) : G.temp.danIcon["_" + i];
G.temp.danIcon["_" + i] = r;
G.setLogo(this.img, "obj/", "obj", "dan_" + r, !0, 70);
}
var s = 0 == e ? G.user.obj[t] : 1;
this.num.string = "x" + s;
this.set.active = 0 == e && G.user.setObj[t] && 1 == G.user.setObj[t].state;
},
showDesc: function() {
0 == this.type ? G.getNode("Canvas/bagBox", "bagBox").js.showDesc(this.key) : G.getNode("Canvas/shopBox", "shopBox").js.showDesc(this.key);
},
showSel: function(t) {
this.sel.active = t == this.key;
},
updateNum: function() {
this.num.string = "x" + G.user.obj[this.key];
}
});
cc._RF.pop();
}, {} ],
baseBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "327f9lXcyJG0aOy+zxOPVNM", "baseBox");
cc.Class({
extends: cc.Component,
properties: {
close: cc.Node,
closeFlag: !1,
bannerFlag: !0,
interFlag: !0
},
onLoad: function() {
var t = this;
if (this.close) {
this.close.active = this.closeFlag;
this.closeFlag && this.close.getComponent("bup").setCb(function() {
t.node.active = !1;
});
}
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
t.closeFlag || (t.node.active = !1);
e.stopPropagation();
});
},
onEnable: function() {
this.bannerFlag && G.showBanner(!0);
},
onDisable: function() {
this.bannerFlag && G.showBanner(!1);
}
});
cc._RF.pop();
}, {} ],
boxAction: [ function(t, e) {
"use strict";
cc._RF.push(e, "b2db8uLtnZO4JKk7U3R6iBO", "boxAction");
cc.Class({
extends: cc.Component,
properties: {
box: cc.Node,
typeId: 0,
sx: 0
},
onLoad: function() {
this.sx = 0 == this.sx ? .05 : this.sx;
},
onEnable: function() {
switch (this.typeId) {
case 0:
this.showAction0();
}
},
showAction0: function() {
if (this.box.getNumberOfRunningActions() < 1) {
var t = this.box.scaleX, e = this.sx > .05 ? .3 : .15, i = cc.scaleTo(e, t + this.sx, t + this.sx), n = cc.scaleTo(e, t, t), a = cc.sequence(i, n);
this.box.runAction(a);
}
}
});
cc._RF.pop();
}, {} ],
bupBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "67cd9Uw2W1OP652UhH2hr96", "bupBox");
cc.Class({
extends: cc.Component,
properties: {
box: cc.Node,
infoBox: cc.Node,
bagBox: cc.Node,
shopBox: cc.Node,
copyBox: cc.Node,
selBox: cc.Node,
makeBox: cc.Node,
sel: cc.Node,
homeBup: cc.Node,
homeBox: cc.Node,
rankBup: cc.Node,
rankBox: cc.Node,
acBup: cc.Node,
acBox: cc.Node,
img: [ cc.Node ],
lock: [ cc.Node ],
timeOut: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this, e = this.box.children, i = function(i) {
G.setBup(e[i], function() {
if (G.user.age < 1) G.showMsg("寿元耗尽，请选择重生轮回~!"); else {
G.temp.bagType = -1;
t.jumpTo(Number(i));
}
});
};
for (var n in e) i(n);
G.setBup(this.rankBup, function() {
t.toRank();
});
G.setBup(this.homeBup, function() {
t.toHome();
});
G.setBup(this.acBup, function() {
t.acBox.active = !0;
});
this.jumpTo(2);
},
jumpTo: function(t) {
if (4 == t && this.selBox.active) G.showTips("请完成选项"); else {
var e = this.box.children;
for (var i in e) e[i].scale = i == t ? 1.05 : 1;
this.makeBox.active = !1;
2 == t && G.temp.danMan && this.homeBox.getComponent("homeBox").showBox(1);
this.infoBox.active = 0 == t;
this.bagBox.active = 1 == t;
this.shopBox.active = 3 == t;
this.copyBox.active = 4 == t;
this.sel.x = e[t].x;
2 == t ? G.wxAd.showClubBup(!0) : G.wxAd.showClubBup(!1);
}
},
updateLock: function() {
this.img[0].color = G.user.var.start < 1 ? cc.color("#666666") : cc.color("#ffffff");
this.img[1].color = G.user.var.mall < 1 ? cc.color("#666666") : cc.color("#ffffff");
this.lock[0].active = G.user.var.start < 1;
this.lock[1].active = G.user.var.mall < 1;
},
toRank: function() {
var t = G.levConf[G.user.lev - 1];
if (t && t.stage < 2) G.showTips("筑基期解锁天梯"); else {
this.jumpTo(2);
this.rankBox.getComponent("rankBox").showRank(0);
}
},
toHome: function() {
var t = G.levConf[G.user.lev - 1];
if (t && t.stage < 4) G.showTips("元婴期解锁宗门"); else {
this.jumpTo(2);
this.homeBox.getComponent("homeBox").showBox(0);
}
},
update: function() {}
});
cc._RF.pop();
}, {} ],
bup: [ function(t, e) {
"use strict";
cc._RF.push(e, "398871dMe5Kn5v4n4Gwd+L1", "bup");
cc.Class({
extends: cc.Component,
properties: {
cb: null,
touchType: 0,
delay: {
default: .05,
visible: !1
}
},
onLoad: function() {
var t = this, e = this.node.scaleX, i = this.node.scaleY, n = 0 == this.touchType ? cc.Node.EventType.TOUCH_START : cc.Node.EventType.TOUCH_END;
this.node.on(n, function(n) {
if (!(t.node.getNumberOfRunningActions() > 0)) {
var a = cc.scaleTo(t.delay, .95 * e, .95 * i), o = cc.scaleTo(t.delay, e, i), m = cc.sequence(a, o, cc.callFunc(function() {
null != t.cb && t.cb();
}));
t.node.runAction(m);
G.playAudio("bup", 1);
n.stopPropagation();
}
});
this.node.on(cc.Node.EventType.TOUCH_END, function(t) {
t.stopPropagation();
});
},
setCb: function(t, e) {
void 0 === e && (e = .05);
this.cb = t;
this.delay = e;
}
});
cc._RF.pop();
}, {} ],
checkStep: [ function(t, e) {
"use strict";
cc._RF.push(e, "657c9KxtQ5OzoUM+kPXLS8V", "checkStep");
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
conf: {
default: null,
visible: !1
}
},
onLoad: function() {
"h5" == G.from && this.checkStep();
},
checkStep: function() {
console.log("check step....");
var t = [ G.temp.step, G.temp.fbStory, G.fStepConf ];
for (var e in t) {
console.log("check step conf", e);
this.conf = t[e];
var i = [ null, null, 0, 0, 0, 0, 0, 0, 0 ];
for (var n in this.conf) {
var a = this.conf[n];
if (-1 != a.action.indexOf("|")) switch (a.type) {
case "sel":
this._sel(a);
break;

case "roll":
this._roll(a);
break;

case "fight":
case "combat":
i[a.action.split("|").length - 1]++;
this._fight(a);
break;

case "msg":
this._msg(a);
break;

case "chg":
this._chg(a);
break;

case "jdg":
this._jdg(a);
break;

case "pay":
this._pay(a);
}
}
console.log(i);
}
},
_sel: function(t) {
for (var e, n = i(t.action.split(",")); !(e = n()).done; ) {
var a = e.value;
a = a.split("|");
var o = t.id + "_" + a[1];
this.conf[o] || console.log("sel err:", t.id + "_" + t.step, a[1]);
}
},
_roll: function(t) {
for (var e, n = i(t.action.split(",")); !(e = n()).done; ) {
var a = e.value;
a = a.split("|");
var o = t.id + "_" + a[1];
this.conf[o] || console.log("roll err:", t.id + "_" + t.step, a[1]);
}
},
_fight: function(t) {
var e = t.action.split("|");
for (var i in e) if (i > 0) {
var n = t.id + "_" + e[i];
this.conf[n] || console.log("fight err:", t.id + "_" + t.step, e[i]);
}
},
_msg: function(t) {
var e = t.action.split("|"), i = t.id + "_" + e[1];
this.conf[i] || console.log("msg err:", t.id + "_" + t.step, e[1]);
},
_chg: function(t) {
var e = t.action.split("|"), i = t.id + "_" + e[3];
-1 == e[3] || this.conf[i] || console.log("chg err:", t.id + "_" + t.step, e[3]);
},
_jdg: function(t) {
var e = t.action.split("|");
for (var i in e) if (i > 1 && -1 != e[i]) {
var n = t.id + "_" + e[i];
this.conf[n] || console.log("jdg err:", t.id + "_" + t.step, e[i]);
}
},
_pay: function(t) {
var e = t.action.split("|");
for (var i in e) if (i > 0) {
var n = t.id + "_" + e[i];
this.conf[n] || console.log("pay err:", t.id + "_" + t.step, e[i]);
}
}
});
cc._RF.pop();
}, {} ],
coinBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "bf96aXWflBMVJ/+vzuAdQUV", "coinBox");
cc.Class({
extends: cc.Component,
properties: {
time: cc.Label,
bar: cc.Node,
coin: cc.Label,
bup: cc.Node,
bupImg: cc.Node,
bupFont: cc.Label,
coinCount: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
if (t.bupImg.active) {
G.user.coinTime = G.getNowSec();
G.save();
t.updateTime();
} else "收取灵石" == t.bupFont.string ? t.getCoin() : G.showTips("采集中...");
});
G.setTimeCb({
path: "Canvas/coinBox",
js: "coinBox",
cb: "updateTime",
time: [ 0, 1 ]
});
},
onEnable: function() {
this.updateTime();
},
updateTime: function() {
var t = Math.min(G.VAL.COIN_TIME, G.getNowSec() - G.user.coinTime);
if (t < 0 || -1 == G.user.coinTime) {
t = 0;
G.user.coinTime;
}
this.coinCount = 0;
this.bupImg.active = -1 == G.user.coinTime;
this.bar.scaleX = 0;
if (-1 == G.user.coinTime) this.bupFont.string = "开始采矿"; else {
var e = Math.min(7, G.levConf[G.user.lev - 1].stage), i = Math.ceil(G.adConf[e - 1].money / 5);
G.VAL.COIN_TIME;
this.coinCount = Math.ceil(i / G.VAL.COIN_TIME * t);
this.bar.scaleX = t / G.VAL.COIN_TIME;
this.bupFont.string = this.coinCount >= i ? "收取灵石" : "采矿中...";
}
this.coin.string = "x" + this.coinCount;
this.time.node.active = -1 != G.user.coinTime;
var n = Math.max(0, G.VAL.COIN_TIME - t);
this.time.string = n > 0 ? "采矿中..." + G.getTime(n).hms : "采集完成";
},
getCoin: function() {
G.user.coin += this.coinCount;
G.showTips("获得【灵石】x" + this.coinCount);
this.coinCount = 0;
G.user.coinTime = -1;
G.save();
this.updateTime();
}
});
cc._RF.pop();
}, {} ],
coinBuff: [ function(t, e) {
"use strict";
cc._RF.push(e, "83c21yDiV1NDJ7dx8kuqKmf", "coinBuff");
cc.Class({
extends: cc.Component,
properties: {
path: {
default: null,
visible: !1
}
},
onLoad: function() {
this.path = [];
for (var t = 1; t < 3; t++) this.path.push(cc.v2(G._.random(-300, 300), 530 - 300 * t));
this.path.push(cc.v2(G._.random(-200, 200), -420));
},
toBar: function(t) {
var e = this;
if (this.path.length < 1) {
cc.find("Canvas/levBox").getComponent("levBox").updateBar(t);
this.node.destroy();
} else {
var i = this.path.shift(), n = i.sub(this.node.position).mag() / 500, a = cc.moveTo(n, i), o = cc.sequence(a, cc.callFunc(function() {
e.toBar(t);
}));
this.node.runAction(o);
}
}
});
cc._RF.pop();
}, {} ],
copyBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "55e9aRvpXhJuo7GjyeyZjt/", "copyBox");
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
item: cc.Prefab,
uItem: cc.Prefab,
cuItem: cc.Prefab,
list: cc.Node,
bupBox: cc.Node,
typeBox: cc.Node,
ugc: cc.Label
},
onLoad: function() {
var t = this;
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.showList(e);
}, [ 0 ]);
G.temp.editList = [];
},
onDisable: function() {
this.bupBox.getComponent("bupBox").jumpTo(2);
"zfb" == G.from && G.zfbAd.hideInter();
},
onEnable: function() {
G.showInter();
this.typeBox.getComponent("typeBox").showType(0);
-1 == G.from.indexOf("apk") && G.temp.editList.length < 1 && G.myHttp(G.URL.FB_LIST, {}, function(t) {
if (0 == t.errno) {
G.temp.editList = t.list;
G.temp.ugcList = t.record;
}
});
this.showCount();
},
showCount: function() {
var t = G.getItem("xx_ugc");
null == t && (t = 0);
this.ugc.string = "投稿权益：" + t + "/" + G.VAL.UGC;
if (this.ugc.node.active) for (var e, n = i(this.list.children); !(e = n()).done; ) e.value.getComponent("copyUgcItem").showVedio();
},
showList: function(t) {
void 0 === t && (t = 0);
this.ugc.node.active = 2 == t;
this.list.removeAllChildren();
if (0 == t) for (var e, n = i(G.copyConf); !(e = n()).done; ) {
var a = e.value;
if ("" == a.type) {
var o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("copyItem").showInfo(Number(a.id));
}
} else if (1 == t) for (var m, r = i(G.temp.editList); !(m = r()).done; ) {
var s = m.value, l = cc.instantiate(this.item);
l.parent = this.list;
l.getComponent("copyItem").showEdit(s);
} else if (2 == t) for (var p, d = i(G.temp.editList); !(p = d()).done; ) {
var c = p.value, u = cc.instantiate(this.cuItem);
u.parent = this.list;
u.getComponent("copyUgcItem").showInfo(c);
} else if (3 == t) for (var y, f = i(G.temp.ugcList); !(y = f()).done; ) {
var x = y.value, h = cc.instantiate(this.uItem);
h.parent = this.list;
h.getComponent("ugcItem").showInfo(x);
}
},
toCopy: function(t) {
G.save();
G.temp.fbId = t;
G.temp.fbStep = 0;
G.setOpType(0);
G.temp.fight = [ 0, 0, 0 ];
G.getNode("Canvas/gameBox/opBox", "opBox").js.resetState();
G.getNode("Canvas/gameBox/txtBox", "txtBox").js.toFb();
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ],
copyItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "674c9EkOENJVI2sg9Q38a9z", "copyItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
stage: cc.Label,
bup: cc.Node,
lock: cc.Node,
type: {
default: 0,
visible: !1
},
id: {
default: 0,
visible: !1
},
info: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
0 == t.type ? t.toMainCopy() : 1 == t.type && t.toSubCopy();
});
G.setBup(this.lock, function() {
0 == t.type ? G.showTips("主线剧情可解锁副本") : 1 == t.type && G.showTips(t.stage.string);
});
},
showInfo: function(t) {
this.type = 0;
this.id = t;
var e = G.getConf(G.copyConf, t);
this.title.string = e.copy;
this.lock.active = -1 == G.user.copy.indexOf(t) || "" != e.lock;
this.bup.active = !this.lock.active;
},
showEdit: function(t) {
this.type = 1;
this.id = t.id;
this.info = t;
this.title.string = t.title;
this.stage.string = "【" + G.VAL.LEV[t.stage - 1] + "】解锁";
var e = G.levConf[G.user.lev - 1].stage;
this.lock.active = e < t.stage;
this.stage.node.active = this.lock.active;
this.bup.active = !this.lock.active;
},
toMainCopy: function() {
G.temp.fbType = 0;
G.getNode("Canvas/copyBox", "copyBox").js.toCopy(this.id);
},
toSubCopy: function() {
G.temp.fbType = 1;
G.getNode("Canvas/copyBox", "copyBox").js.toCopy(this.id);
}
});
cc._RF.pop();
}, {} ],
copyUgcItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "42f83z1+w1G4q/DcbU4luEV", "copyUgcItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
desc: cc.Label,
bup: cc.Node,
vedio: cc.Node,
info: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
t.toEdit();
});
},
showInfo: function(t) {
this.info = t;
this.title.string = t.title;
this.desc.string = t.desc;
this.showVedio();
},
showVedio: function() {
var t = G.getItem("xx_ugc");
this.vedio.active = t < 1;
},
toEdit: function() {
var t = this, e = G.getItem("xx_ugc");
if (e && e > 0) {
e = Number(e) - 1;
this.vedio.active = e < 1;
G.setItem("xx_ugc", e);
G.temp.editInfo = this.info;
G.getNode("Canvas/copyBox", "copyBox").js.showCount();
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.showUgc();
} else G.showVedio(function() {
G.setItem("xx_ugc", G.VAL.UGC);
G.getNode("Canvas/copyBox", "copyBox").js.showCount();
t.vedio.active = !1;
});
}
});
cc._RF.pop();
}, {} ],
"crypto-js": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5c610EcrLxGpYSvIuTcl/6Q", "crypto-js");
n = function() {
var t, e, i = i || function(t) {
var e = {}, i = e.lib = {}, n = i.Base = function() {
function t() {}
return {
extend: function(e) {
t.prototype = this;
var i = new t();
e && i.mixIn(e);
i.hasOwnProperty("init") || (i.init = function() {
i.$super.init.apply(this, arguments);
});
i.init.prototype = i;
i.$super = this;
return i;
},
create: function() {
var t = this.extend();
t.init.apply(t, arguments);
return t;
},
init: function() {},
mixIn: function(t) {
for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
t.hasOwnProperty("toString") && (this.toString = t.toString);
},
clone: function() {
return this.init.prototype.extend(this);
}
};
}(), a = i.WordArray = n.extend({
init: function(t, e) {
t = this.words = t || [];
this.sigBytes = null != e ? e : 4 * t.length;
},
toString: function(t) {
return (t || m).stringify(this);
},
concat: function(t) {
var e = this.words, i = t.words, n = this.sigBytes, a = t.sigBytes;
this.clamp();
if (n % 4) for (var o = 0; o < a; o++) {
var m = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
e[n + o >>> 2] |= m << 24 - (n + o) % 4 * 8;
} else for (o = 0; o < a; o += 4) e[n + o >>> 2] = i[o >>> 2];
this.sigBytes += a;
return this;
},
clamp: function() {
var e = this.words, i = this.sigBytes;
e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8;
e.length = t.ceil(i / 4);
},
clone: function() {
var t = n.clone.call(this);
t.words = this.words.slice(0);
return t;
},
random: function(e) {
for (var i, n = [], o = function(e) {
e = e;
var i = 987654321, n = 4294967295;
return function() {
var a = ((i = 36969 * (65535 & i) + (i >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n;
a /= 4294967296;
return (a += .5) * (t.random() > .5 ? 1 : -1);
};
}, m = 0; m < e; m += 4) {
var r = o(4294967296 * (i || t.random()));
i = 987654071 * r();
n.push(4294967296 * r() | 0);
}
return new a.init(n, e);
}
}), o = e.enc = {}, m = o.Hex = {
stringify: function(t) {
for (var e = t.words, i = t.sigBytes, n = [], a = 0; a < i; a++) {
var o = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;
n.push((o >>> 4).toString(16));
n.push((15 & o).toString(16));
}
return n.join("");
},
parse: function(t) {
for (var e = t.length, i = [], n = 0; n < e; n += 2) i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
return new a.init(i, e / 2);
}
}, r = o.Latin1 = {
stringify: function(t) {
for (var e = t.words, i = t.sigBytes, n = [], a = 0; a < i; a++) {
var o = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;
n.push(String.fromCharCode(o));
}
return n.join("");
},
parse: function(t) {
for (var e = t.length, i = [], n = 0; n < e; n++) i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
return new a.init(i, e);
}
}, s = o.Utf8 = {
stringify: function(t) {
try {
return decodeURIComponent(escape(r.stringify(t)));
} catch (t) {
throw new Error("Malformed UTF-8 data");
}
},
parse: function(t) {
return r.parse(unescape(encodeURIComponent(t)));
}
}, l = i.BufferedBlockAlgorithm = n.extend({
reset: function() {
this._data = new a.init();
this._nDataBytes = 0;
},
_append: function(t) {
"string" == typeof t && (t = s.parse(t));
this._data.concat(t);
this._nDataBytes += t.sigBytes;
},
_process: function(e) {
var i = this._data, n = i.words, o = i.sigBytes, m = this.blockSize, r = o / (4 * m), s = (r = e ? t.ceil(r) : t.max((0 | r) - this._minBufferSize, 0)) * m, l = t.min(4 * s, o);
if (s) {
for (var p = 0; p < s; p += m) this._doProcessBlock(n, p);
var d = n.splice(0, s);
i.sigBytes -= l;
}
return new a.init(d, l);
},
clone: function() {
var t = n.clone.call(this);
t._data = this._data.clone();
return t;
},
_minBufferSize: 0
}), p = (i.Hasher = l.extend({
cfg: n.extend(),
init: function(t) {
this.cfg = this.cfg.extend(t);
this.reset();
},
reset: function() {
l.reset.call(this);
this._doReset();
},
update: function(t) {
this._append(t);
this._process();
return this;
},
finalize: function(t) {
t && this._append(t);
return this._doFinalize();
},
blockSize: 16,
_createHelper: function(t) {
return function(e, i) {
return new t.init(i).finalize(e);
};
},
_createHmacHelper: function(t) {
return function(e, i) {
return new p.HMAC.init(t, i).finalize(e);
};
}
}), e.algo = {});
return e;
}(Math);
e = (t = i).lib.WordArray, t.enc.Base64 = {
stringify: function(t) {
var e = t.words, i = t.sigBytes, n = this._map;
t.clamp();
for (var a = [], o = 0; o < i; o += 3) for (var m = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, r = 0; r < 4 && o + .75 * r < i; r++) a.push(n.charAt(m >>> 6 * (3 - r) & 63));
var s = n.charAt(64);
if (s) for (;a.length % 4; ) a.push(s);
return a.join("");
},
parse: function(t) {
var i = t.length, n = this._map, a = n.charAt(64);
if (a) {
var o = t.indexOf(a);
-1 != o && (i = o);
}
for (var m = [], r = 0, s = 0; s < i; s++) if (s % 4) {
var l = n.indexOf(t.charAt(s - 1)) << s % 4 * 2 | n.indexOf(t.charAt(s)) >>> 6 - s % 4 * 2;
m[r >>> 2] |= l << 24 - r % 4 * 8;
r++;
}
return e.create(m, r);
},
_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};
(function(t) {
var e = i, n = e.lib, a = n.WordArray, o = n.Hasher, m = e.algo, r = [];
(function() {
for (var e = 0; e < 64; e++) r[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
})();
var s = m.MD5 = o.extend({
_doReset: function() {
this._hash = new a.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
},
_doProcessBlock: function(t, e) {
for (var i = 0; i < 16; i++) {
var n = e + i, a = t[n];
t[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
}
var o = this._hash.words, m = t[e + 0], s = t[e + 1], u = t[e + 2], y = t[e + 3], f = t[e + 4], x = t[e + 5], h = t[e + 6], g = t[e + 7], v = t[e + 8], G = t[e + 9], _ = t[e + 10], b = t[e + 11], w = t[e + 12], k = t[e + 13], C = t[e + 14], A = t[e + 15], S = o[0], B = o[1], I = o[2], N = o[3];
S = l(S, B, I, N, m, 7, r[0]);
N = l(N, S, B, I, s, 12, r[1]);
I = l(I, N, S, B, u, 17, r[2]);
B = l(B, I, N, S, y, 22, r[3]);
S = l(S, B, I, N, f, 7, r[4]);
N = l(N, S, B, I, x, 12, r[5]);
I = l(I, N, S, B, h, 17, r[6]);
B = l(B, I, N, S, g, 22, r[7]);
S = l(S, B, I, N, v, 7, r[8]);
N = l(N, S, B, I, G, 12, r[9]);
I = l(I, N, S, B, _, 17, r[10]);
B = l(B, I, N, S, b, 22, r[11]);
S = l(S, B, I, N, w, 7, r[12]);
N = l(N, S, B, I, k, 12, r[13]);
I = l(I, N, S, B, C, 17, r[14]);
S = p(S, B = l(B, I, N, S, A, 22, r[15]), I, N, s, 5, r[16]);
N = p(N, S, B, I, h, 9, r[17]);
I = p(I, N, S, B, b, 14, r[18]);
B = p(B, I, N, S, m, 20, r[19]);
S = p(S, B, I, N, x, 5, r[20]);
N = p(N, S, B, I, _, 9, r[21]);
I = p(I, N, S, B, A, 14, r[22]);
B = p(B, I, N, S, f, 20, r[23]);
S = p(S, B, I, N, G, 5, r[24]);
N = p(N, S, B, I, C, 9, r[25]);
I = p(I, N, S, B, y, 14, r[26]);
B = p(B, I, N, S, v, 20, r[27]);
S = p(S, B, I, N, k, 5, r[28]);
N = p(N, S, B, I, u, 9, r[29]);
I = p(I, N, S, B, g, 14, r[30]);
S = d(S, B = p(B, I, N, S, w, 20, r[31]), I, N, x, 4, r[32]);
N = d(N, S, B, I, v, 11, r[33]);
I = d(I, N, S, B, b, 16, r[34]);
B = d(B, I, N, S, C, 23, r[35]);
S = d(S, B, I, N, s, 4, r[36]);
N = d(N, S, B, I, f, 11, r[37]);
I = d(I, N, S, B, g, 16, r[38]);
B = d(B, I, N, S, _, 23, r[39]);
S = d(S, B, I, N, k, 4, r[40]);
N = d(N, S, B, I, m, 11, r[41]);
I = d(I, N, S, B, y, 16, r[42]);
B = d(B, I, N, S, h, 23, r[43]);
S = d(S, B, I, N, G, 4, r[44]);
N = d(N, S, B, I, w, 11, r[45]);
I = d(I, N, S, B, A, 16, r[46]);
S = c(S, B = d(B, I, N, S, u, 23, r[47]), I, N, m, 6, r[48]);
N = c(N, S, B, I, g, 10, r[49]);
I = c(I, N, S, B, C, 15, r[50]);
B = c(B, I, N, S, x, 21, r[51]);
S = c(S, B, I, N, w, 6, r[52]);
N = c(N, S, B, I, y, 10, r[53]);
I = c(I, N, S, B, _, 15, r[54]);
B = c(B, I, N, S, s, 21, r[55]);
S = c(S, B, I, N, v, 6, r[56]);
N = c(N, S, B, I, A, 10, r[57]);
I = c(I, N, S, B, h, 15, r[58]);
B = c(B, I, N, S, k, 21, r[59]);
S = c(S, B, I, N, f, 6, r[60]);
N = c(N, S, B, I, b, 10, r[61]);
I = c(I, N, S, B, u, 15, r[62]);
B = c(B, I, N, S, G, 21, r[63]);
o[0] = o[0] + S | 0;
o[1] = o[1] + B | 0;
o[2] = o[2] + I | 0;
o[3] = o[3] + N | 0;
},
_doFinalize: function() {
var e = this._data, i = e.words, n = 8 * this._nDataBytes, a = 8 * e.sigBytes;
i[a >>> 5] |= 128 << 24 - a % 32;
var o = t.floor(n / 4294967296), m = n;
i[15 + (a + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
i[14 + (a + 64 >>> 9 << 4)] = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8);
e.sigBytes = 4 * (i.length + 1);
this._process();
for (var r = this._hash, s = r.words, l = 0; l < 4; l++) {
var p = s[l];
s[l] = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8);
}
return r;
},
clone: function() {
var t = o.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
function l(t, e, i, n, a, o, m) {
var r = t + (e & i | ~e & n) + a + m;
return (r << o | r >>> 32 - o) + e;
}
function p(t, e, i, n, a, o, m) {
var r = t + (e & n | i & ~n) + a + m;
return (r << o | r >>> 32 - o) + e;
}
function d(t, e, i, n, a, o, m) {
var r = t + (e ^ i ^ n) + a + m;
return (r << o | r >>> 32 - o) + e;
}
function c(t, e, i, n, a, o, m) {
var r = t + (i ^ (e | ~n)) + a + m;
return (r << o | r >>> 32 - o) + e;
}
e.MD5 = o._createHelper(s);
e.HmacMD5 = o._createHmacHelper(s);
})(Math);
(function() {
var t = i, e = t.lib, n = e.WordArray, a = e.Hasher, o = t.algo, m = [], r = o.SHA1 = a.extend({
_doReset: function() {
this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(t, e) {
for (var i = this._hash.words, n = i[0], a = i[1], o = i[2], r = i[3], s = i[4], l = 0; l < 80; l++) {
if (l < 16) m[l] = 0 | t[e + l]; else {
var p = m[l - 3] ^ m[l - 8] ^ m[l - 14] ^ m[l - 16];
m[l] = p << 1 | p >>> 31;
}
var d = (n << 5 | n >>> 27) + s + m[l];
d += l < 20 ? 1518500249 + (a & o | ~a & r) : l < 40 ? 1859775393 + (a ^ o ^ r) : l < 60 ? (a & o | a & r | o & r) - 1894007588 : (a ^ o ^ r) - 899497514;
s = r;
r = o;
o = a << 30 | a >>> 2;
a = n;
n = d;
}
i[0] = i[0] + n | 0;
i[1] = i[1] + a | 0;
i[2] = i[2] + o | 0;
i[3] = i[3] + r | 0;
i[4] = i[4] + s | 0;
},
_doFinalize: function() {
var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[14 + (n + 64 >>> 9 << 4)] = Math.floor(i / 4294967296);
e[15 + (n + 64 >>> 9 << 4)] = i;
t.sigBytes = 4 * e.length;
this._process();
return this._hash;
},
clone: function() {
var t = a.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
t.SHA1 = a._createHelper(r);
t.HmacSHA1 = a._createHmacHelper(r);
})();
(function(t) {
var e = i, n = e.lib, a = n.WordArray, o = n.Hasher, m = e.algo, r = [], s = [];
(function() {
function e(e) {
for (var i = t.sqrt(e), n = 2; n <= i; n++) if (!(e % n)) return !1;
return !0;
}
function i(t) {
return 4294967296 * (t - (0 | t)) | 0;
}
for (var n = 2, a = 0; a < 64; ) {
if (e(n)) {
a < 8 && (r[a] = i(t.pow(n, .5)));
s[a] = i(t.pow(n, 1 / 3));
a++;
}
n++;
}
})();
var l = [], p = m.SHA256 = o.extend({
_doReset: function() {
this._hash = new a.init(r.slice(0));
},
_doProcessBlock: function(t, e) {
for (var i = this._hash.words, n = i[0], a = i[1], o = i[2], m = i[3], r = i[4], p = i[5], d = i[6], c = i[7], u = 0; u < 64; u++) {
if (u < 16) l[u] = 0 | t[e + u]; else {
var y = l[u - 15], f = (y << 25 | y >>> 7) ^ (y << 14 | y >>> 18) ^ y >>> 3, x = l[u - 2], h = (x << 15 | x >>> 17) ^ (x << 13 | x >>> 19) ^ x >>> 10;
l[u] = f + l[u - 7] + h + l[u - 16];
}
var g = n & a ^ n & o ^ a & o, v = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22), G = c + ((r << 26 | r >>> 6) ^ (r << 21 | r >>> 11) ^ (r << 7 | r >>> 25)) + (r & p ^ ~r & d) + s[u] + l[u];
c = d;
d = p;
p = r;
r = m + G | 0;
m = o;
o = a;
a = n;
n = G + (v + g) | 0;
}
i[0] = i[0] + n | 0;
i[1] = i[1] + a | 0;
i[2] = i[2] + o | 0;
i[3] = i[3] + m | 0;
i[4] = i[4] + r | 0;
i[5] = i[5] + p | 0;
i[6] = i[6] + d | 0;
i[7] = i[7] + c | 0;
},
_doFinalize: function() {
var e = this._data, i = e.words, n = 8 * this._nDataBytes, a = 8 * e.sigBytes;
i[a >>> 5] |= 128 << 24 - a % 32;
i[14 + (a + 64 >>> 9 << 4)] = t.floor(n / 4294967296);
i[15 + (a + 64 >>> 9 << 4)] = n;
e.sigBytes = 4 * i.length;
this._process();
return this._hash;
},
clone: function() {
var t = o.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
e.SHA256 = o._createHelper(p);
e.HmacSHA256 = o._createHmacHelper(p);
})(Math);
(function() {
var t = i, e = t.lib.WordArray, n = t.enc;
n.Utf16 = n.Utf16BE = {
stringify: function(t) {
for (var e = t.words, i = t.sigBytes, n = [], a = 0; a < i; a += 2) {
var o = e[a >>> 2] >>> 16 - a % 4 * 8 & 65535;
n.push(String.fromCharCode(o));
}
return n.join("");
},
parse: function(t) {
for (var i = t.length, n = [], a = 0; a < i; a++) n[a >>> 1] |= t.charCodeAt(a) << 16 - a % 2 * 16;
return e.create(n, 2 * i);
}
};
n.Utf16LE = {
stringify: function(t) {
for (var e = t.words, i = t.sigBytes, n = [], o = 0; o < i; o += 2) {
var m = a(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
n.push(String.fromCharCode(m));
}
return n.join("");
},
parse: function(t) {
for (var i = t.length, n = [], o = 0; o < i; o++) n[o >>> 1] |= a(t.charCodeAt(o) << 16 - o % 2 * 16);
return e.create(n, 2 * i);
}
};
function a(t) {
return t << 8 & 4278255360 | t >>> 8 & 16711935;
}
})();
(function() {
if ("function" == typeof ArrayBuffer) {
var t = i.lib.WordArray, e = t.init;
(t.init = function(t) {
t instanceof ArrayBuffer && (t = new Uint8Array(t));
(t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
if (t instanceof Uint8Array) {
for (var i = t.byteLength, n = [], a = 0; a < i; a++) n[a >>> 2] |= t[a] << 24 - a % 4 * 8;
e.call(this, n, i);
} else e.apply(this, arguments);
}).prototype = t;
}
})();
(function() {
var t = i, e = t.lib, n = e.WordArray, a = e.Hasher, o = t.algo, m = n.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]), r = n.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]), s = n.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]), l = n.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]), p = n.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]), d = n.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]), c = o.RIPEMD160 = a.extend({
_doReset: function() {
this._hash = n.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(t, e) {
for (var i = 0; i < 16; i++) {
var n = e + i, a = t[n];
t[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
}
var o, c, v, G, _, b, w, k, C, A, S, B = this._hash.words, I = p.words, N = d.words, T = m.words, j = r.words, L = s.words, M = l.words;
b = o = B[0];
w = c = B[1];
k = v = B[2];
C = G = B[3];
A = _ = B[4];
for (i = 0; i < 80; i += 1) {
S = o + t[e + T[i]] | 0;
S += i < 16 ? u(c, v, G) + I[0] : i < 32 ? y(c, v, G) + I[1] : i < 48 ? f(c, v, G) + I[2] : i < 64 ? x(c, v, G) + I[3] : h(c, v, G) + I[4];
S = (S = g(S |= 0, L[i])) + _ | 0;
o = _;
_ = G;
G = g(v, 10);
v = c;
c = S;
S = b + t[e + j[i]] | 0;
S += i < 16 ? h(w, k, C) + N[0] : i < 32 ? x(w, k, C) + N[1] : i < 48 ? f(w, k, C) + N[2] : i < 64 ? y(w, k, C) + N[3] : u(w, k, C) + N[4];
S = (S = g(S |= 0, M[i])) + A | 0;
b = A;
A = C;
C = g(k, 10);
k = w;
w = S;
}
S = B[1] + v + C | 0;
B[1] = B[2] + G + A | 0;
B[2] = B[3] + _ + b | 0;
B[3] = B[4] + o + w | 0;
B[4] = B[0] + c + k | 0;
B[0] = S;
},
_doFinalize: function() {
var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
t.sigBytes = 4 * (e.length + 1);
this._process();
for (var a = this._hash, o = a.words, m = 0; m < 5; m++) {
var r = o[m];
o[m] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
}
return a;
},
clone: function() {
var t = a.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
function u(t, e, i) {
return t ^ e ^ i;
}
function y(t, e, i) {
return t & e | ~t & i;
}
function f(t, e, i) {
return (t | ~e) ^ i;
}
function x(t, e, i) {
return t & i | e & ~i;
}
function h(t, e, i) {
return t ^ (e | ~i);
}
function g(t, e) {
return t << e | t >>> 32 - e;
}
t.RIPEMD160 = a._createHelper(c);
t.HmacRIPEMD160 = a._createHmacHelper(c);
})(Math);
(function() {
var t = i, e = t.lib.Base, n = t.enc.Utf8;
t.algo.HMAC = e.extend({
init: function(t, e) {
t = this._hasher = new t.init();
"string" == typeof e && (e = n.parse(e));
var i = t.blockSize, a = 4 * i;
e.sigBytes > a && (e = t.finalize(e));
e.clamp();
for (var o = this._oKey = e.clone(), m = this._iKey = e.clone(), r = o.words, s = m.words, l = 0; l < i; l++) {
r[l] ^= 1549556828;
s[l] ^= 909522486;
}
o.sigBytes = m.sigBytes = a;
this.reset();
},
reset: function() {
var t = this._hasher;
t.reset();
t.update(this._iKey);
},
update: function(t) {
this._hasher.update(t);
return this;
},
finalize: function(t) {
var e = this._hasher, i = e.finalize(t);
e.reset();
return e.finalize(this._oKey.clone().concat(i));
}
});
})();
(function() {
var t = i, e = t.lib, n = e.Base, a = e.WordArray, o = t.algo, m = o.SHA1, r = o.HMAC, s = o.PBKDF2 = n.extend({
cfg: n.extend({
keySize: 4,
hasher: m,
iterations: 1
}),
init: function(t) {
this.cfg = this.cfg.extend(t);
},
compute: function(t, e) {
for (var i = this.cfg, n = r.create(i.hasher, t), o = a.create(), m = a.create([ 1 ]), s = o.words, l = m.words, p = i.keySize, d = i.iterations; s.length < p; ) {
var c = n.update(e).finalize(m);
n.reset();
for (var u = c.words, y = u.length, f = c, x = 1; x < d; x++) {
f = n.finalize(f);
n.reset();
for (var h = f.words, g = 0; g < y; g++) u[g] ^= h[g];
}
o.concat(c);
l[0]++;
}
o.sigBytes = 4 * p;
return o;
}
});
t.PBKDF2 = function(t, e, i) {
return s.create(i).compute(t, e);
};
})();
(function() {
var t = i, e = t.lib, n = e.Base, a = e.WordArray, o = t.algo, m = o.MD5, r = o.EvpKDF = n.extend({
cfg: n.extend({
keySize: 4,
hasher: m,
iterations: 1
}),
init: function(t) {
this.cfg = this.cfg.extend(t);
},
compute: function(t, e) {
for (var i = this.cfg, n = i.hasher.create(), o = a.create(), m = o.words, r = i.keySize, s = i.iterations; m.length < r; ) {
l && n.update(l);
var l = n.update(t).finalize(e);
n.reset();
for (var p = 1; p < s; p++) {
l = n.finalize(l);
n.reset();
}
o.concat(l);
}
o.sigBytes = 4 * r;
return o;
}
});
t.EvpKDF = function(t, e, i) {
return r.create(i).compute(t, e);
};
})();
(function() {
var t = i, e = t.lib.WordArray, n = t.algo, a = n.SHA256, o = n.SHA224 = a.extend({
_doReset: function() {
this._hash = new e.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
},
_doFinalize: function() {
var t = a._doFinalize.call(this);
t.sigBytes -= 4;
return t;
}
});
t.SHA224 = a._createHelper(o);
t.HmacSHA224 = a._createHmacHelper(o);
})();
(function() {
var t = i, e = t.lib, n = e.Base, a = e.WordArray, o = t.x64 = {};
o.Word = n.extend({
init: function(t, e) {
this.high = t;
this.low = e;
}
}), o.WordArray = n.extend({
init: function(t, e) {
t = this.words = t || [];
this.sigBytes = null != e ? e : 8 * t.length;
},
toX32: function() {
for (var t = this.words, e = t.length, i = [], n = 0; n < e; n++) {
var o = t[n];
i.push(o.high);
i.push(o.low);
}
return a.create(i, this.sigBytes);
},
clone: function() {
for (var t = n.clone.call(this), e = t.words = this.words.slice(0), i = e.length, a = 0; a < i; a++) e[a] = e[a].clone();
return t;
}
});
})();
(function(t) {
var e = i, n = e.lib, a = n.WordArray, o = n.Hasher, m = e.x64.Word, r = e.algo, s = [], l = [], p = [];
(function() {
for (var t = 1, e = 0, i = 0; i < 24; i++) {
s[t + 5 * e] = (i + 1) * (i + 2) / 2 % 64;
var n = (2 * t + 3 * e) % 5;
t = e % 5;
e = n;
}
for (t = 0; t < 5; t++) for (e = 0; e < 5; e++) l[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
for (var a = 1, o = 0; o < 24; o++) {
for (var r = 0, d = 0, c = 0; c < 7; c++) {
if (1 & a) {
var u = (1 << c) - 1;
u < 32 ? d ^= 1 << u : r ^= 1 << u - 32;
}
128 & a ? a = a << 1 ^ 113 : a <<= 1;
}
p[o] = m.create(r, d);
}
})();
var d = [];
(function() {
for (var t = 0; t < 25; t++) d[t] = m.create();
})();
var c = r.SHA3 = o.extend({
cfg: o.cfg.extend({
outputLength: 512
}),
_doReset: function() {
for (var t = this._state = [], e = 0; e < 25; e++) t[e] = new m.init();
this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
},
_doProcessBlock: function(t, e) {
for (var i = this._state, n = this.blockSize / 2, a = 0; a < n; a++) {
var o = t[e + 2 * a], m = t[e + 2 * a + 1];
o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
m = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8);
(B = i[a]).high ^= m;
B.low ^= o;
}
for (var r = 0; r < 24; r++) {
for (var c = 0; c < 5; c++) {
for (var u = 0, y = 0, f = 0; f < 5; f++) {
u ^= (B = i[c + 5 * f]).high;
y ^= B.low;
}
var x = d[c];
x.high = u;
x.low = y;
}
for (c = 0; c < 5; c++) {
var h = d[(c + 4) % 5], g = d[(c + 1) % 5], v = g.high, G = g.low;
for (u = h.high ^ (v << 1 | G >>> 31), y = h.low ^ (G << 1 | v >>> 31), f = 0; f < 5; f++) {
(B = i[c + 5 * f]).high ^= u;
B.low ^= y;
}
}
for (var _ = 1; _ < 25; _++) {
var b = (B = i[_]).high, w = B.low, k = s[_];
k < 32 ? (u = b << k | w >>> 32 - k, y = w << k | b >>> 32 - k) : (u = w << k - 32 | b >>> 64 - k, 
y = b << k - 32 | w >>> 64 - k);
var C = d[l[_]];
C.high = u;
C.low = y;
}
var A = d[0], S = i[0];
A.high = S.high;
A.low = S.low;
for (c = 0; c < 5; c++) for (f = 0; f < 5; f++) {
var B = i[_ = c + 5 * f], I = d[_], N = d[(c + 1) % 5 + 5 * f], T = d[(c + 2) % 5 + 5 * f];
B.high = I.high ^ ~N.high & T.high;
B.low = I.low ^ ~N.low & T.low;
}
B = i[0];
var j = p[r];
B.high ^= j.high;
B.low ^= j.low;
}
},
_doFinalize: function() {
var e = this._data, i = e.words, n = (this._nDataBytes, 8 * e.sigBytes), o = 32 * this.blockSize;
i[n >>> 5] |= 1 << 24 - n % 32;
i[(t.ceil((n + 1) / o) * o >>> 5) - 1] |= 128;
e.sigBytes = 4 * i.length;
this._process();
for (var m = this._state, r = this.cfg.outputLength / 8, s = r / 8, l = [], p = 0; p < s; p++) {
var d = m[p], c = d.high, u = d.low;
c = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
l.push(u);
l.push(c);
}
return new a.init(l, r);
},
clone: function() {
for (var t = o.clone.call(this), e = t._state = this._state.slice(0), i = 0; i < 25; i++) e[i] = e[i].clone();
return t;
}
});
e.SHA3 = o._createHelper(c);
e.HmacSHA3 = o._createHmacHelper(c);
})(Math);
(function() {
var t = i, e = t.lib.Hasher, n = t.x64, a = n.Word, o = n.WordArray, m = t.algo;
function r() {
return a.create.apply(a, arguments);
}
var s = [ r(1116352408, 3609767458), r(1899447441, 602891725), r(3049323471, 3964484399), r(3921009573, 2173295548), r(961987163, 4081628472), r(1508970993, 3053834265), r(2453635748, 2937671579), r(2870763221, 3664609560), r(3624381080, 2734883394), r(310598401, 1164996542), r(607225278, 1323610764), r(1426881987, 3590304994), r(1925078388, 4068182383), r(2162078206, 991336113), r(2614888103, 633803317), r(3248222580, 3479774868), r(3835390401, 2666613458), r(4022224774, 944711139), r(264347078, 2341262773), r(604807628, 2007800933), r(770255983, 1495990901), r(1249150122, 1856431235), r(1555081692, 3175218132), r(1996064986, 2198950837), r(2554220882, 3999719339), r(2821834349, 766784016), r(2952996808, 2566594879), r(3210313671, 3203337956), r(3336571891, 1034457026), r(3584528711, 2466948901), r(113926993, 3758326383), r(338241895, 168717936), r(666307205, 1188179964), r(773529912, 1546045734), r(1294757372, 1522805485), r(1396182291, 2643833823), r(1695183700, 2343527390), r(1986661051, 1014477480), r(2177026350, 1206759142), r(2456956037, 344077627), r(2730485921, 1290863460), r(2820302411, 3158454273), r(3259730800, 3505952657), r(3345764771, 106217008), r(3516065817, 3606008344), r(3600352804, 1432725776), r(4094571909, 1467031594), r(275423344, 851169720), r(430227734, 3100823752), r(506948616, 1363258195), r(659060556, 3750685593), r(883997877, 3785050280), r(958139571, 3318307427), r(1322822218, 3812723403), r(1537002063, 2003034995), r(1747873779, 3602036899), r(1955562222, 1575990012), r(2024104815, 1125592928), r(2227730452, 2716904306), r(2361852424, 442776044), r(2428436474, 593698344), r(2756734187, 3733110249), r(3204031479, 2999351573), r(3329325298, 3815920427), r(3391569614, 3928383900), r(3515267271, 566280711), r(3940187606, 3454069534), r(4118630271, 4000239992), r(116418474, 1914138554), r(174292421, 2731055270), r(289380356, 3203993006), r(460393269, 320620315), r(685471733, 587496836), r(852142971, 1086792851), r(1017036298, 365543100), r(1126000580, 2618297676), r(1288033470, 3409855158), r(1501505948, 4234509866), r(1607167915, 987167468), r(1816402316, 1246189591) ], l = [];
(function() {
for (var t = 0; t < 80; t++) l[t] = r();
})();
var p = m.SHA512 = e.extend({
_doReset: function() {
this._hash = new o.init([ new a.init(1779033703, 4089235720), new a.init(3144134277, 2227873595), new a.init(1013904242, 4271175723), new a.init(2773480762, 1595750129), new a.init(1359893119, 2917565137), new a.init(2600822924, 725511199), new a.init(528734635, 4215389547), new a.init(1541459225, 327033209) ]);
},
_doProcessBlock: function(t, e) {
for (var i = this._hash.words, n = i[0], a = i[1], o = i[2], m = i[3], r = i[4], p = i[5], d = i[6], c = i[7], u = n.high, y = n.low, f = a.high, x = a.low, h = o.high, g = o.low, v = m.high, G = m.low, _ = r.high, b = r.low, w = p.high, k = p.low, C = d.high, A = d.low, S = c.high, B = c.low, I = u, N = y, T = f, j = x, L = h, M = g, O = v, F = G, E = _, D = b, R = w, P = k, V = C, U = A, q = S, z = B, H = 0; H < 80; H++) {
var Y = l[H];
if (H < 16) var J = Y.high = 0 | t[e + 2 * H], W = Y.low = 0 | t[e + 2 * H + 1]; else {
var $ = l[H - 15], K = $.high, X = $.low, Z = (K >>> 1 | X << 31) ^ (K >>> 8 | X << 24) ^ K >>> 7, Q = (X >>> 1 | K << 31) ^ (X >>> 8 | K << 24) ^ (X >>> 7 | K << 25), tt = l[H - 2], et = tt.high, it = tt.low, nt = (et >>> 19 | it << 13) ^ (et << 3 | it >>> 29) ^ et >>> 6, at = (it >>> 19 | et << 13) ^ (it << 3 | et >>> 29) ^ (it >>> 6 | et << 26), ot = l[H - 7], mt = ot.high, rt = ot.low, st = l[H - 16], lt = st.high, pt = st.low;
J = (J = (J = Z + mt + ((W = Q + rt) >>> 0 < Q >>> 0 ? 1 : 0)) + nt + ((W += at) >>> 0 < at >>> 0 ? 1 : 0)) + lt + ((W += pt) >>> 0 < pt >>> 0 ? 1 : 0);
Y.high = J;
Y.low = W;
}
var dt, ct = E & R ^ ~E & V, ut = D & P ^ ~D & U, yt = I & T ^ I & L ^ T & L, ft = N & j ^ N & M ^ j & M, xt = (I >>> 28 | N << 4) ^ (I << 30 | N >>> 2) ^ (I << 25 | N >>> 7), ht = (N >>> 28 | I << 4) ^ (N << 30 | I >>> 2) ^ (N << 25 | I >>> 7), gt = (E >>> 14 | D << 18) ^ (E >>> 18 | D << 14) ^ (E << 23 | D >>> 9), vt = (D >>> 14 | E << 18) ^ (D >>> 18 | E << 14) ^ (D << 23 | E >>> 9), Gt = s[H], _t = Gt.high, bt = Gt.low, wt = q + gt + ((dt = z + vt) >>> 0 < z >>> 0 ? 1 : 0), kt = ht + ft;
q = V;
z = U;
V = R;
U = P;
R = E;
P = D;
E = O + (wt = (wt = (wt = wt + ct + ((dt += ut) >>> 0 < ut >>> 0 ? 1 : 0)) + _t + ((dt += bt) >>> 0 < bt >>> 0 ? 1 : 0)) + J + ((dt += W) >>> 0 < W >>> 0 ? 1 : 0)) + ((D = F + dt | 0) >>> 0 < F >>> 0 ? 1 : 0) | 0;
O = L;
F = M;
L = T;
M = j;
T = I;
j = N;
I = wt + (xt + yt + (kt >>> 0 < ht >>> 0 ? 1 : 0)) + ((N = dt + kt | 0) >>> 0 < dt >>> 0 ? 1 : 0) | 0;
}
y = n.low = y + N;
n.high = u + I + (y >>> 0 < N >>> 0 ? 1 : 0);
x = a.low = x + j;
a.high = f + T + (x >>> 0 < j >>> 0 ? 1 : 0);
g = o.low = g + M;
o.high = h + L + (g >>> 0 < M >>> 0 ? 1 : 0);
G = m.low = G + F;
m.high = v + O + (G >>> 0 < F >>> 0 ? 1 : 0);
b = r.low = b + D;
r.high = _ + E + (b >>> 0 < D >>> 0 ? 1 : 0);
k = p.low = k + P;
p.high = w + R + (k >>> 0 < P >>> 0 ? 1 : 0);
A = d.low = A + U;
d.high = C + V + (A >>> 0 < U >>> 0 ? 1 : 0);
B = c.low = B + z;
c.high = S + q + (B >>> 0 < z >>> 0 ? 1 : 0);
},
_doFinalize: function() {
var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[30 + (n + 128 >>> 10 << 5)] = Math.floor(i / 4294967296);
e[31 + (n + 128 >>> 10 << 5)] = i;
t.sigBytes = 4 * e.length;
this._process();
return this._hash.toX32();
},
clone: function() {
var t = e.clone.call(this);
t._hash = this._hash.clone();
return t;
},
blockSize: 32
});
t.SHA512 = e._createHelper(p);
t.HmacSHA512 = e._createHmacHelper(p);
})();
(function() {
var t = i, e = t.x64, n = e.Word, a = e.WordArray, o = t.algo, m = o.SHA512, r = o.SHA384 = m.extend({
_doReset: function() {
this._hash = new a.init([ new n.init(3418070365, 3238371032), new n.init(1654270250, 914150663), new n.init(2438529370, 812702999), new n.init(355462360, 4144912697), new n.init(1731405415, 4290775857), new n.init(2394180231, 1750603025), new n.init(3675008525, 1694076839), new n.init(1203062813, 3204075428) ]);
},
_doFinalize: function() {
var t = m._doFinalize.call(this);
t.sigBytes -= 16;
return t;
}
});
t.SHA384 = m._createHelper(r);
t.HmacSHA384 = m._createHmacHelper(r);
})();
i.lib.Cipher || function(t) {
var e = i, n = e.lib, a = n.Base, o = n.WordArray, m = n.BufferedBlockAlgorithm, r = e.enc, s = (r.Utf8, 
r.Base64), l = e.algo.EvpKDF, p = n.Cipher = m.extend({
cfg: a.extend(),
createEncryptor: function(t, e) {
return this.create(this._ENC_XFORM_MODE, t, e);
},
createDecryptor: function(t, e) {
return this.create(this._DEC_XFORM_MODE, t, e);
},
init: function(t, e, i) {
this.cfg = this.cfg.extend(i);
this._xformMode = t;
this._key = e;
this.reset();
},
reset: function() {
m.reset.call(this);
this._doReset();
},
process: function(t) {
this._append(t);
return this._process();
},
finalize: function(t) {
t && this._append(t);
return this._doFinalize();
},
keySize: 4,
ivSize: 4,
_ENC_XFORM_MODE: 1,
_DEC_XFORM_MODE: 2,
_createHelper: function() {
function t(t) {
return "string" == typeof t ? v : h;
}
return function(e) {
return {
encrypt: function(i, n, a) {
return t(n).encrypt(e, i, n, a);
},
decrypt: function(i, n, a) {
return t(n).decrypt(e, i, n, a);
}
};
};
}()
}), d = (n.StreamCipher = p.extend({
_doFinalize: function() {
return this._process(!0);
},
blockSize: 1
}), e.mode = {}), c = n.BlockCipherMode = a.extend({
createEncryptor: function(t, e) {
return this.Encryptor.create(t, e);
},
createDecryptor: function(t, e) {
return this.Decryptor.create(t, e);
},
init: function(t, e) {
this._cipher = t;
this._iv = e;
}
}), u = d.CBC = function() {
var e = c.extend();
e.Encryptor = e.extend({
processBlock: function(t, e) {
var n = this._cipher, a = n.blockSize;
i.call(this, t, e, a);
n.encryptBlock(t, e);
this._prevBlock = t.slice(e, e + a);
}
});
e.Decryptor = e.extend({
processBlock: function(t, e) {
var n = this._cipher, a = n.blockSize, o = t.slice(e, e + a);
n.decryptBlock(t, e);
i.call(this, t, e, a);
this._prevBlock = o;
}
});
function i(e, i, n) {
var a = this._iv;
if (a) {
var o = a;
this._iv = t;
} else o = this._prevBlock;
for (var m = 0; m < n; m++) e[i + m] ^= o[m];
}
return e;
}(), y = (e.pad = {}).Pkcs7 = {
pad: function(t, e) {
for (var i = 4 * e, n = i - t.sigBytes % i, a = n << 24 | n << 16 | n << 8 | n, m = [], r = 0; r < n; r += 4) m.push(a);
var s = o.create(m, n);
t.concat(s);
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
}, f = (n.BlockCipher = p.extend({
cfg: p.cfg.extend({
mode: u,
padding: y
}),
reset: function() {
p.reset.call(this);
var t = this.cfg, e = t.iv, i = t.mode;
if (this._xformMode == this._ENC_XFORM_MODE) var n = i.createEncryptor; else {
n = i.createDecryptor;
this._minBufferSize = 1;
}
this._mode = n.call(i, this, e && e.words);
},
_doProcessBlock: function(t, e) {
this._mode.processBlock(t, e);
},
_doFinalize: function() {
var t = this.cfg.padding;
if (this._xformMode == this._ENC_XFORM_MODE) {
t.pad(this._data, this.blockSize);
var e = this._process(!0);
} else {
e = this._process(!0);
t.unpad(e);
}
return e;
},
blockSize: 4
}), n.CipherParams = a.extend({
init: function(t) {
this.mixIn(t);
},
toString: function(t) {
return (t || this.formatter).stringify(this);
}
})), x = (e.format = {}).OpenSSL = {
stringify: function(t) {
var e = t.ciphertext, i = t.salt;
if (i) var n = o.create([ 1398893684, 1701076831 ]).concat(i).concat(e); else n = e;
return n.toString(s);
},
parse: function(t) {
var e = s.parse(t), i = e.words;
if (1398893684 == i[0] && 1701076831 == i[1]) {
var n = o.create(i.slice(2, 4));
i.splice(0, 4);
e.sigBytes -= 16;
}
return f.create({
ciphertext: e,
salt: n
});
}
}, h = n.SerializableCipher = a.extend({
cfg: a.extend({
format: x
}),
encrypt: function(t, e, i, n) {
n = this.cfg.extend(n);
var a = t.createEncryptor(i, n), o = a.finalize(e), m = a.cfg;
return f.create({
ciphertext: o,
key: i,
iv: m.iv,
algorithm: t,
mode: m.mode,
padding: m.padding,
blockSize: t.blockSize,
formatter: n.format
});
},
decrypt: function(t, e, i, n) {
n = this.cfg.extend(n);
e = this._parse(e, n.format);
return t.createDecryptor(i, n).finalize(e.ciphertext);
},
_parse: function(t, e) {
return "string" == typeof t ? e.parse(t, this) : t;
}
}), g = (e.kdf = {}).OpenSSL = {
execute: function(t, e, i, n) {
n || (n = o.random(8));
var a = l.create({
keySize: e + i
}).compute(t, n), m = o.create(a.words.slice(e), 4 * i);
a.sigBytes = 4 * e;
return f.create({
key: a,
iv: m,
salt: n
});
}
}, v = n.PasswordBasedCipher = h.extend({
cfg: h.cfg.extend({
kdf: g
}),
encrypt: function(t, e, i, n) {
var a = (n = this.cfg.extend(n)).kdf.execute(i, t.keySize, t.ivSize);
n.iv = a.iv;
var o = h.encrypt.call(this, t, e, a.key, n);
o.mixIn(a);
return o;
},
decrypt: function(t, e, i, n) {
n = this.cfg.extend(n);
e = this._parse(e, n.format);
var a = n.kdf.execute(i, t.keySize, t.ivSize, e.salt);
n.iv = a.iv;
return h.decrypt.call(this, t, e, a.key, n);
}
});
}();
i.mode.CFB = function() {
var t = i.lib.BlockCipherMode.extend();
t.Encryptor = t.extend({
processBlock: function(t, i) {
var n = this._cipher, a = n.blockSize;
e.call(this, t, i, a, n);
this._prevBlock = t.slice(i, i + a);
}
});
t.Decryptor = t.extend({
processBlock: function(t, i) {
var n = this._cipher, a = n.blockSize, o = t.slice(i, i + a);
e.call(this, t, i, a, n);
this._prevBlock = o;
}
});
function e(t, e, i, n) {
var a = this._iv;
if (a) {
var o = a.slice(0);
this._iv = void 0;
} else o = this._prevBlock;
n.encryptBlock(o, 0);
for (var m = 0; m < i; m++) t[e + m] ^= o[m];
}
return t;
}();
i.mode.ECB = function() {
var t = i.lib.BlockCipherMode.extend();
t.Encryptor = t.extend({
processBlock: function(t, e) {
this._cipher.encryptBlock(t, e);
}
});
t.Decryptor = t.extend({
processBlock: function(t, e) {
this._cipher.decryptBlock(t, e);
}
});
return t;
}();
i.pad.AnsiX923 = {
pad: function(t, e) {
var i = t.sigBytes, n = 4 * e, a = n - i % n, o = i + a - 1;
t.clamp();
t.words[o >>> 2] |= a << 24 - o % 4 * 8;
t.sigBytes += a;
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
};
i.pad.Iso10126 = {
pad: function(t, e) {
var n = 4 * e, a = n - t.sigBytes % n;
t.concat(i.lib.WordArray.random(a - 1)).concat(i.lib.WordArray.create([ a << 24 ], 1));
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
};
i.pad.Iso97971 = {
pad: function(t, e) {
t.concat(i.lib.WordArray.create([ 2147483648 ], 1));
i.pad.ZeroPadding.pad(t, e);
},
unpad: function(t) {
i.pad.ZeroPadding.unpad(t);
t.sigBytes--;
}
};
i.mode.OFB = function() {
var t = i.lib.BlockCipherMode.extend(), e = t.Encryptor = t.extend({
processBlock: function(t, e) {
var i = this._cipher, n = i.blockSize, a = this._iv, o = this._keystream;
if (a) {
o = this._keystream = a.slice(0);
this._iv = void 0;
}
i.encryptBlock(o, 0);
for (var m = 0; m < n; m++) t[e + m] ^= o[m];
}
});
t.Decryptor = e;
return t;
}();
i.pad.NoPadding = {
pad: function() {},
unpad: function() {}
};
(function() {
var t = i, e = t.lib.CipherParams, n = t.enc.Hex;
t.format.Hex = {
stringify: function(t) {
return t.ciphertext.toString(n);
},
parse: function(t) {
var i = n.parse(t);
return e.create({
ciphertext: i
});
}
};
})();
(function() {
var t = i, e = t.lib.BlockCipher, n = t.algo, a = [], o = [], m = [], r = [], s = [], l = [], p = [], d = [], c = [], u = [];
(function() {
for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
var i = 0, n = 0;
for (e = 0; e < 256; e++) {
var y = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
y = y >>> 8 ^ 255 & y ^ 99;
a[i] = y;
o[y] = i;
var f = t[i], x = t[f], h = t[x], g = 257 * t[y] ^ 16843008 * y;
m[i] = g << 24 | g >>> 8;
r[i] = g << 16 | g >>> 16;
s[i] = g << 8 | g >>> 24;
l[i] = g;
g = 16843009 * h ^ 65537 * x ^ 257 * f ^ 16843008 * i;
p[y] = g << 24 | g >>> 8;
d[y] = g << 16 | g >>> 16;
c[y] = g << 8 | g >>> 24;
u[y] = g;
if (i) {
i = f ^ t[t[t[h ^ f]]];
n ^= t[t[n]];
} else i = n = 1;
}
})();
var y = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], f = n.AES = e.extend({
_doReset: function() {
for (var t = this._key, e = t.words, i = t.sigBytes / 4, n = 4 * ((this._nRounds = i + 6) + 1), o = this._keySchedule = [], m = 0; m < n; m++) if (m < i) o[m] = e[m]; else {
var r = o[m - 1];
if (m % i) i > 6 && m % i == 4 && (r = a[r >>> 24] << 24 | a[r >>> 16 & 255] << 16 | a[r >>> 8 & 255] << 8 | a[255 & r]); else {
r = a[(r = r << 8 | r >>> 24) >>> 24] << 24 | a[r >>> 16 & 255] << 16 | a[r >>> 8 & 255] << 8 | a[255 & r];
r ^= y[m / i | 0] << 24;
}
o[m] = o[m - i] ^ r;
}
for (var s = this._invKeySchedule = [], l = 0; l < n; l++) {
m = n - l;
r = l % 4 ? o[m] : o[m - 4];
s[l] = l < 4 || m <= 4 ? r : p[a[r >>> 24]] ^ d[a[r >>> 16 & 255]] ^ c[a[r >>> 8 & 255]] ^ u[a[255 & r]];
}
},
encryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._keySchedule, m, r, s, l, a);
},
decryptBlock: function(t, e) {
var i = t[e + 1];
t[e + 1] = t[e + 3];
t[e + 3] = i;
this._doCryptBlock(t, e, this._invKeySchedule, p, d, c, u, o);
i = t[e + 1];
t[e + 1] = t[e + 3];
t[e + 3] = i;
},
_doCryptBlock: function(t, e, i, n, a, o, m, r) {
for (var s = this._nRounds, l = t[e] ^ i[0], p = t[e + 1] ^ i[1], d = t[e + 2] ^ i[2], c = t[e + 3] ^ i[3], u = 4, y = 1; y < s; y++) {
var f = n[l >>> 24] ^ a[p >>> 16 & 255] ^ o[d >>> 8 & 255] ^ m[255 & c] ^ i[u++], x = n[p >>> 24] ^ a[d >>> 16 & 255] ^ o[c >>> 8 & 255] ^ m[255 & l] ^ i[u++], h = n[d >>> 24] ^ a[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ m[255 & p] ^ i[u++], g = n[c >>> 24] ^ a[l >>> 16 & 255] ^ o[p >>> 8 & 255] ^ m[255 & d] ^ i[u++];
l = f;
p = x;
d = h;
c = g;
}
f = (r[l >>> 24] << 24 | r[p >>> 16 & 255] << 16 | r[d >>> 8 & 255] << 8 | r[255 & c]) ^ i[u++], 
x = (r[p >>> 24] << 24 | r[d >>> 16 & 255] << 16 | r[c >>> 8 & 255] << 8 | r[255 & l]) ^ i[u++], 
h = (r[d >>> 24] << 24 | r[c >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & p]) ^ i[u++], 
g = (r[c >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[p >>> 8 & 255] << 8 | r[255 & d]) ^ i[u++];
t[e] = f;
t[e + 1] = x;
t[e + 2] = h;
t[e + 3] = g;
},
keySize: 8
});
t.AES = e._createHelper(f);
})();
(function() {
var t = i, e = t.lib, n = e.WordArray, a = e.BlockCipher, o = t.algo, m = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ], r = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ], s = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ], l = [ {
0: 8421888,
268435456: 32768,
536870912: 8421378,
805306368: 2,
1073741824: 512,
1342177280: 8421890,
1610612736: 8389122,
1879048192: 8388608,
2147483648: 514,
2415919104: 8389120,
2684354560: 33280,
2952790016: 8421376,
3221225472: 32770,
3489660928: 8388610,
3758096384: 0,
4026531840: 33282,
134217728: 0,
402653184: 8421890,
671088640: 33282,
939524096: 32768,
1207959552: 8421888,
1476395008: 512,
1744830464: 8421378,
2013265920: 2,
2281701376: 8389120,
2550136832: 33280,
2818572288: 8421376,
3087007744: 8389122,
3355443200: 8388610,
3623878656: 32770,
3892314112: 514,
4160749568: 8388608,
1: 32768,
268435457: 2,
536870913: 8421888,
805306369: 8388608,
1073741825: 8421378,
1342177281: 33280,
1610612737: 512,
1879048193: 8389122,
2147483649: 8421890,
2415919105: 8421376,
2684354561: 8388610,
2952790017: 33282,
3221225473: 514,
3489660929: 8389120,
3758096385: 32770,
4026531841: 0,
134217729: 8421890,
402653185: 8421376,
671088641: 8388608,
939524097: 512,
1207959553: 32768,
1476395009: 8388610,
1744830465: 2,
2013265921: 33282,
2281701377: 32770,
2550136833: 8389122,
2818572289: 514,
3087007745: 8421888,
3355443201: 8389120,
3623878657: 0,
3892314113: 33280,
4160749569: 8421378
}, {
0: 1074282512,
16777216: 16384,
33554432: 524288,
50331648: 1074266128,
67108864: 1073741840,
83886080: 1074282496,
100663296: 1073758208,
117440512: 16,
134217728: 540672,
150994944: 1073758224,
167772160: 1073741824,
184549376: 540688,
201326592: 524304,
218103808: 0,
234881024: 16400,
251658240: 1074266112,
8388608: 1073758208,
25165824: 540688,
41943040: 16,
58720256: 1073758224,
75497472: 1074282512,
92274688: 1073741824,
109051904: 524288,
125829120: 1074266128,
142606336: 524304,
159383552: 0,
176160768: 16384,
192937984: 1074266112,
209715200: 1073741840,
226492416: 540672,
243269632: 1074282496,
260046848: 16400,
268435456: 0,
285212672: 1074266128,
301989888: 1073758224,
318767104: 1074282496,
335544320: 1074266112,
352321536: 16,
369098752: 540688,
385875968: 16384,
402653184: 16400,
419430400: 524288,
436207616: 524304,
452984832: 1073741840,
469762048: 540672,
486539264: 1073758208,
503316480: 1073741824,
520093696: 1074282512,
276824064: 540688,
293601280: 524288,
310378496: 1074266112,
327155712: 16384,
343932928: 1073758208,
360710144: 1074282512,
377487360: 16,
394264576: 1073741824,
411041792: 1074282496,
427819008: 1073741840,
444596224: 1073758224,
461373440: 524304,
478150656: 0,
494927872: 16400,
511705088: 1074266128,
528482304: 540672
}, {
0: 260,
1048576: 0,
2097152: 67109120,
3145728: 65796,
4194304: 65540,
5242880: 67108868,
6291456: 67174660,
7340032: 67174400,
8388608: 67108864,
9437184: 67174656,
10485760: 65792,
11534336: 67174404,
12582912: 67109124,
13631488: 65536,
14680064: 4,
15728640: 256,
524288: 67174656,
1572864: 67174404,
2621440: 0,
3670016: 67109120,
4718592: 67108868,
5767168: 65536,
6815744: 65540,
7864320: 260,
8912896: 4,
9961472: 256,
11010048: 67174400,
12058624: 65796,
13107200: 65792,
14155776: 67109124,
15204352: 67174660,
16252928: 67108864,
16777216: 67174656,
17825792: 65540,
18874368: 65536,
19922944: 67109120,
20971520: 256,
22020096: 67174660,
23068672: 67108868,
24117248: 0,
25165824: 67109124,
26214400: 67108864,
27262976: 4,
28311552: 65792,
29360128: 67174400,
30408704: 260,
31457280: 65796,
32505856: 67174404,
17301504: 67108864,
18350080: 260,
19398656: 67174656,
20447232: 0,
21495808: 65540,
22544384: 67109120,
23592960: 256,
24641536: 67174404,
25690112: 65536,
26738688: 67174660,
27787264: 65796,
28835840: 67108868,
29884416: 67109124,
30932992: 67174400,
31981568: 4,
33030144: 65792
}, {
0: 2151682048,
65536: 2147487808,
131072: 4198464,
196608: 2151677952,
262144: 0,
327680: 4198400,
393216: 2147483712,
458752: 4194368,
524288: 2147483648,
589824: 4194304,
655360: 64,
720896: 2147487744,
786432: 2151678016,
851968: 4160,
917504: 4096,
983040: 2151682112,
32768: 2147487808,
98304: 64,
163840: 2151678016,
229376: 2147487744,
294912: 4198400,
360448: 2151682112,
425984: 0,
491520: 2151677952,
557056: 4096,
622592: 2151682048,
688128: 4194304,
753664: 4160,
819200: 2147483648,
884736: 4194368,
950272: 4198464,
1015808: 2147483712,
1048576: 4194368,
1114112: 4198400,
1179648: 2147483712,
1245184: 0,
1310720: 4160,
1376256: 2151678016,
1441792: 2151682048,
1507328: 2147487808,
1572864: 2151682112,
1638400: 2147483648,
1703936: 2151677952,
1769472: 4198464,
1835008: 2147487744,
1900544: 4194304,
1966080: 64,
2031616: 4096,
1081344: 2151677952,
1146880: 2151682112,
1212416: 0,
1277952: 4198400,
1343488: 4194368,
1409024: 2147483648,
1474560: 2147487808,
1540096: 64,
1605632: 2147483712,
1671168: 4096,
1736704: 2147487744,
1802240: 2151678016,
1867776: 4160,
1933312: 2151682048,
1998848: 4194304,
2064384: 4198464
}, {
0: 128,
4096: 17039360,
8192: 262144,
12288: 536870912,
16384: 537133184,
20480: 16777344,
24576: 553648256,
28672: 262272,
32768: 16777216,
36864: 537133056,
40960: 536871040,
45056: 553910400,
49152: 553910272,
53248: 0,
57344: 17039488,
61440: 553648128,
2048: 17039488,
6144: 553648256,
10240: 128,
14336: 17039360,
18432: 262144,
22528: 537133184,
26624: 553910272,
30720: 536870912,
34816: 537133056,
38912: 0,
43008: 553910400,
47104: 16777344,
51200: 536871040,
55296: 553648128,
59392: 16777216,
63488: 262272,
65536: 262144,
69632: 128,
73728: 536870912,
77824: 553648256,
81920: 16777344,
86016: 553910272,
90112: 537133184,
94208: 16777216,
98304: 553910400,
102400: 553648128,
106496: 17039360,
110592: 537133056,
114688: 262272,
118784: 536871040,
122880: 0,
126976: 17039488,
67584: 553648256,
71680: 16777216,
75776: 17039360,
79872: 537133184,
83968: 536870912,
88064: 17039488,
92160: 128,
96256: 553910272,
100352: 262272,
104448: 553910400,
108544: 0,
112640: 553648128,
116736: 16777344,
120832: 262144,
124928: 537133056,
129024: 536871040
}, {
0: 268435464,
256: 8192,
512: 270532608,
768: 270540808,
1024: 268443648,
1280: 2097152,
1536: 2097160,
1792: 268435456,
2048: 0,
2304: 268443656,
2560: 2105344,
2816: 8,
3072: 270532616,
3328: 2105352,
3584: 8200,
3840: 270540800,
128: 270532608,
384: 270540808,
640: 8,
896: 2097152,
1152: 2105352,
1408: 268435464,
1664: 268443648,
1920: 8200,
2176: 2097160,
2432: 8192,
2688: 268443656,
2944: 270532616,
3200: 0,
3456: 270540800,
3712: 2105344,
3968: 268435456,
4096: 268443648,
4352: 270532616,
4608: 270540808,
4864: 8200,
5120: 2097152,
5376: 268435456,
5632: 268435464,
5888: 2105344,
6144: 2105352,
6400: 0,
6656: 8,
6912: 270532608,
7168: 8192,
7424: 268443656,
7680: 270540800,
7936: 2097160,
4224: 8,
4480: 2105344,
4736: 2097152,
4992: 268435464,
5248: 268443648,
5504: 8200,
5760: 270540808,
6016: 270532608,
6272: 270540800,
6528: 270532616,
6784: 8192,
7040: 2105352,
7296: 2097160,
7552: 0,
7808: 268435456,
8064: 268443656
}, {
0: 1048576,
16: 33555457,
32: 1024,
48: 1049601,
64: 34604033,
80: 0,
96: 1,
112: 34603009,
128: 33555456,
144: 1048577,
160: 33554433,
176: 34604032,
192: 34603008,
208: 1025,
224: 1049600,
240: 33554432,
8: 34603009,
24: 0,
40: 33555457,
56: 34604032,
72: 1048576,
88: 33554433,
104: 33554432,
120: 1025,
136: 1049601,
152: 33555456,
168: 34603008,
184: 1048577,
200: 1024,
216: 34604033,
232: 1,
248: 1049600,
256: 33554432,
272: 1048576,
288: 33555457,
304: 34603009,
320: 1048577,
336: 33555456,
352: 34604032,
368: 1049601,
384: 1025,
400: 34604033,
416: 1049600,
432: 1,
448: 0,
464: 34603008,
480: 33554433,
496: 1024,
264: 1049600,
280: 33555457,
296: 34603009,
312: 1,
328: 33554432,
344: 1048576,
360: 1025,
376: 34604032,
392: 33554433,
408: 34603008,
424: 0,
440: 34604033,
456: 1049601,
472: 1024,
488: 33555456,
504: 1048577
}, {
0: 134219808,
1: 131072,
2: 134217728,
3: 32,
4: 131104,
5: 134350880,
6: 134350848,
7: 2048,
8: 134348800,
9: 134219776,
10: 133120,
11: 134348832,
12: 2080,
13: 0,
14: 134217760,
15: 133152,
2147483648: 2048,
2147483649: 134350880,
2147483650: 134219808,
2147483651: 134217728,
2147483652: 134348800,
2147483653: 133120,
2147483654: 133152,
2147483655: 32,
2147483656: 134217760,
2147483657: 2080,
2147483658: 131104,
2147483659: 134350848,
2147483660: 0,
2147483661: 134348832,
2147483662: 134219776,
2147483663: 131072,
16: 133152,
17: 134350848,
18: 32,
19: 2048,
20: 134219776,
21: 134217760,
22: 134348832,
23: 131072,
24: 0,
25: 131104,
26: 134348800,
27: 134219808,
28: 134350880,
29: 133120,
30: 2080,
31: 134217728,
2147483664: 131072,
2147483665: 2048,
2147483666: 134348832,
2147483667: 133152,
2147483668: 32,
2147483669: 134348800,
2147483670: 134217728,
2147483671: 134219808,
2147483672: 134350880,
2147483673: 134217760,
2147483674: 134219776,
2147483675: 0,
2147483676: 133120,
2147483677: 2080,
2147483678: 131104,
2147483679: 134350848
} ], p = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ], d = o.DES = a.extend({
_doReset: function() {
for (var t = this._key.words, e = [], i = 0; i < 56; i++) {
var n = m[i] - 1;
e[i] = t[n >>> 5] >>> 31 - n % 32 & 1;
}
for (var a = this._subKeys = [], o = 0; o < 16; o++) {
var l = a[o] = [], p = s[o];
for (i = 0; i < 24; i++) {
l[i / 6 | 0] |= e[(r[i] - 1 + p) % 28] << 31 - i % 6;
l[4 + (i / 6 | 0)] |= e[28 + (r[i + 24] - 1 + p) % 28] << 31 - i % 6;
}
l[0] = l[0] << 1 | l[0] >>> 31;
for (i = 1; i < 7; i++) l[i] = l[i] >>> 4 * (i - 1) + 3;
l[7] = l[7] << 5 | l[7] >>> 27;
}
var d = this._invSubKeys = [];
for (i = 0; i < 16; i++) d[i] = a[15 - i];
},
encryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._subKeys);
},
decryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._invSubKeys);
},
_doCryptBlock: function(t, e, i) {
this._lBlock = t[e];
this._rBlock = t[e + 1];
c.call(this, 4, 252645135);
c.call(this, 16, 65535);
u.call(this, 2, 858993459);
u.call(this, 8, 16711935);
c.call(this, 1, 1431655765);
for (var n = 0; n < 16; n++) {
for (var a = i[n], o = this._lBlock, m = this._rBlock, r = 0, s = 0; s < 8; s++) r |= l[s][((m ^ a[s]) & p[s]) >>> 0];
this._lBlock = m;
this._rBlock = o ^ r;
}
var d = this._lBlock;
this._lBlock = this._rBlock;
this._rBlock = d;
c.call(this, 1, 1431655765);
u.call(this, 8, 16711935);
u.call(this, 2, 858993459);
c.call(this, 16, 65535);
c.call(this, 4, 252645135);
t[e] = this._lBlock;
t[e + 1] = this._rBlock;
},
keySize: 2,
ivSize: 2,
blockSize: 2
});
function c(t, e) {
var i = (this._lBlock >>> t ^ this._rBlock) & e;
this._rBlock ^= i;
this._lBlock ^= i << t;
}
function u(t, e) {
var i = (this._rBlock >>> t ^ this._lBlock) & e;
this._lBlock ^= i;
this._rBlock ^= i << t;
}
t.DES = a._createHelper(d);
var y = o.TripleDES = a.extend({
_doReset: function() {
var t = this._key.words;
this._des1 = d.createEncryptor(n.create(t.slice(0, 2)));
this._des2 = d.createEncryptor(n.create(t.slice(2, 4)));
this._des3 = d.createEncryptor(n.create(t.slice(4, 6)));
},
encryptBlock: function(t, e) {
this._des1.encryptBlock(t, e);
this._des2.decryptBlock(t, e);
this._des3.encryptBlock(t, e);
},
decryptBlock: function(t, e) {
this._des3.decryptBlock(t, e);
this._des2.encryptBlock(t, e);
this._des1.decryptBlock(t, e);
},
keySize: 6,
ivSize: 2,
blockSize: 2
});
t.TripleDES = a._createHelper(y);
})();
(function() {
var t = i, e = t.lib.StreamCipher, n = t.algo, a = n.RC4 = e.extend({
_doReset: function() {
for (var t = this._key, e = t.words, i = t.sigBytes, n = this._S = [], a = 0; a < 256; a++) n[a] = a;
a = 0;
for (var o = 0; a < 256; a++) {
var m = a % i, r = e[m >>> 2] >>> 24 - m % 4 * 8 & 255;
o = (o + n[a] + r) % 256;
var s = n[a];
n[a] = n[o];
n[o] = s;
}
this._i = this._j = 0;
},
_doProcessBlock: function(t, e) {
t[e] ^= o.call(this);
},
keySize: 8,
ivSize: 0
});
function o() {
for (var t = this._S, e = this._i, i = this._j, n = 0, a = 0; a < 4; a++) {
i = (i + t[e = (e + 1) % 256]) % 256;
var o = t[e];
t[e] = t[i];
t[i] = o;
n |= t[(t[e] + t[i]) % 256] << 24 - 8 * a;
}
this._i = e;
this._j = i;
return n;
}
t.RC4 = e._createHelper(a);
var m = n.RC4Drop = a.extend({
cfg: a.cfg.extend({
drop: 192
}),
_doReset: function() {
a._doReset.call(this);
for (var t = this.cfg.drop; t > 0; t--) o.call(this);
}
});
t.RC4Drop = e._createHelper(m);
})();
i.mode.CTRGladman = function() {
var t = i.lib.BlockCipherMode.extend();
function e(t) {
if (255 == (t >> 24 & 255)) {
var e = t >> 16 & 255, i = t >> 8 & 255, n = 255 & t;
if (255 === e) {
e = 0;
if (255 === i) {
i = 0;
255 === n ? n = 0 : ++n;
} else ++i;
} else ++e;
t = 0;
t += e << 16;
t += i << 8;
t += n;
} else t += 1 << 24;
return t;
}
function n(t) {
0 === (t[0] = e(t[0])) && (t[1] = e(t[1]));
return t;
}
var a = t.Encryptor = t.extend({
processBlock: function(t, e) {
var i = this._cipher, a = i.blockSize, o = this._iv, m = this._counter;
if (o) {
m = this._counter = o.slice(0);
this._iv = void 0;
}
n(m);
var r = m.slice(0);
i.encryptBlock(r, 0);
for (var s = 0; s < a; s++) t[e + s] ^= r[s];
}
});
t.Decryptor = a;
return t;
}();
(function() {
var t = i, e = t.lib.StreamCipher, n = t.algo, a = [], o = [], m = [], r = n.Rabbit = e.extend({
_doReset: function() {
for (var t = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++) t[i] = 16711935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8);
var n = this._X = [ t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16 ], a = this._C = [ t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0] ];
this._b = 0;
for (i = 0; i < 4; i++) s.call(this);
for (i = 0; i < 8; i++) a[i] ^= n[i + 4 & 7];
if (e) {
var o = e.words, m = o[0], r = o[1], l = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8), p = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), d = l >>> 16 | 4294901760 & p, c = p << 16 | 65535 & l;
a[0] ^= l;
a[1] ^= d;
a[2] ^= p;
a[3] ^= c;
a[4] ^= l;
a[5] ^= d;
a[6] ^= p;
a[7] ^= c;
for (i = 0; i < 4; i++) s.call(this);
}
},
_doProcessBlock: function(t, e) {
var i = this._X;
s.call(this);
a[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16;
a[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16;
a[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16;
a[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
for (var n = 0; n < 4; n++) {
a[n] = 16711935 & (a[n] << 8 | a[n] >>> 24) | 4278255360 & (a[n] << 24 | a[n] >>> 8);
t[e + n] ^= a[n];
}
},
blockSize: 4,
ivSize: 2
});
function s() {
for (var t = this._X, e = this._C, i = 0; i < 8; i++) o[i] = e[i];
e[0] = e[0] + 1295307597 + this._b | 0;
e[1] = e[1] + 3545052371 + (e[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0;
e[2] = e[2] + 886263092 + (e[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0;
e[3] = e[3] + 1295307597 + (e[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0;
e[4] = e[4] + 3545052371 + (e[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0;
e[5] = e[5] + 886263092 + (e[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0;
e[6] = e[6] + 1295307597 + (e[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0;
e[7] = e[7] + 3545052371 + (e[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0;
this._b = e[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
for (i = 0; i < 8; i++) {
var n = t[i] + e[i], a = 65535 & n, r = n >>> 16, s = ((a * a >>> 17) + a * r >>> 15) + r * r, l = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
m[i] = s ^ l;
}
t[0] = m[0] + (m[7] << 16 | m[7] >>> 16) + (m[6] << 16 | m[6] >>> 16) | 0;
t[1] = m[1] + (m[0] << 8 | m[0] >>> 24) + m[7] | 0;
t[2] = m[2] + (m[1] << 16 | m[1] >>> 16) + (m[0] << 16 | m[0] >>> 16) | 0;
t[3] = m[3] + (m[2] << 8 | m[2] >>> 24) + m[1] | 0;
t[4] = m[4] + (m[3] << 16 | m[3] >>> 16) + (m[2] << 16 | m[2] >>> 16) | 0;
t[5] = m[5] + (m[4] << 8 | m[4] >>> 24) + m[3] | 0;
t[6] = m[6] + (m[5] << 16 | m[5] >>> 16) + (m[4] << 16 | m[4] >>> 16) | 0;
t[7] = m[7] + (m[6] << 8 | m[6] >>> 24) + m[5] | 0;
}
t.Rabbit = e._createHelper(r);
})();
i.mode.CTR = function() {
var t = i.lib.BlockCipherMode.extend(), e = t.Encryptor = t.extend({
processBlock: function(t, e) {
var i = this._cipher, n = i.blockSize, a = this._iv, o = this._counter;
if (a) {
o = this._counter = a.slice(0);
this._iv = void 0;
}
var m = o.slice(0);
i.encryptBlock(m, 0);
o[n - 1] = o[n - 1] + 1 | 0;
for (var r = 0; r < n; r++) t[e + r] ^= m[r];
}
});
t.Decryptor = e;
return t;
}();
(function() {
var t = i, e = t.lib.StreamCipher, n = t.algo, a = [], o = [], m = [], r = n.RabbitLegacy = e.extend({
_doReset: function() {
var t = this._key.words, e = this.cfg.iv, i = this._X = [ t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16 ], n = this._C = [ t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0] ];
this._b = 0;
for (var a = 0; a < 4; a++) s.call(this);
for (a = 0; a < 8; a++) n[a] ^= i[a + 4 & 7];
if (e) {
var o = e.words, m = o[0], r = o[1], l = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8), p = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), d = l >>> 16 | 4294901760 & p, c = p << 16 | 65535 & l;
n[0] ^= l;
n[1] ^= d;
n[2] ^= p;
n[3] ^= c;
n[4] ^= l;
n[5] ^= d;
n[6] ^= p;
n[7] ^= c;
for (a = 0; a < 4; a++) s.call(this);
}
},
_doProcessBlock: function(t, e) {
var i = this._X;
s.call(this);
a[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16;
a[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16;
a[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16;
a[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
for (var n = 0; n < 4; n++) {
a[n] = 16711935 & (a[n] << 8 | a[n] >>> 24) | 4278255360 & (a[n] << 24 | a[n] >>> 8);
t[e + n] ^= a[n];
}
},
blockSize: 4,
ivSize: 2
});
function s() {
for (var t = this._X, e = this._C, i = 0; i < 8; i++) o[i] = e[i];
e[0] = e[0] + 1295307597 + this._b | 0;
e[1] = e[1] + 3545052371 + (e[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0;
e[2] = e[2] + 886263092 + (e[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0;
e[3] = e[3] + 1295307597 + (e[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0;
e[4] = e[4] + 3545052371 + (e[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0;
e[5] = e[5] + 886263092 + (e[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0;
e[6] = e[6] + 1295307597 + (e[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0;
e[7] = e[7] + 3545052371 + (e[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0;
this._b = e[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
for (i = 0; i < 8; i++) {
var n = t[i] + e[i], a = 65535 & n, r = n >>> 16, s = ((a * a >>> 17) + a * r >>> 15) + r * r, l = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
m[i] = s ^ l;
}
t[0] = m[0] + (m[7] << 16 | m[7] >>> 16) + (m[6] << 16 | m[6] >>> 16) | 0;
t[1] = m[1] + (m[0] << 8 | m[0] >>> 24) + m[7] | 0;
t[2] = m[2] + (m[1] << 16 | m[1] >>> 16) + (m[0] << 16 | m[0] >>> 16) | 0;
t[3] = m[3] + (m[2] << 8 | m[2] >>> 24) + m[1] | 0;
t[4] = m[4] + (m[3] << 16 | m[3] >>> 16) + (m[2] << 16 | m[2] >>> 16) | 0;
t[5] = m[5] + (m[4] << 8 | m[4] >>> 24) + m[3] | 0;
t[6] = m[6] + (m[5] << 16 | m[5] >>> 16) + (m[4] << 16 | m[4] >>> 16) | 0;
t[7] = m[7] + (m[6] << 8 | m[6] >>> 24) + m[5] | 0;
}
t.RabbitLegacy = e._createHelper(r);
})();
i.pad.ZeroPadding = {
pad: function(t, e) {
var i = 4 * e;
t.clamp();
t.sigBytes += i - (t.sigBytes % i || i);
},
unpad: function(t) {
for (var e = t.words, i = t.sigBytes - 1; !(e[i >>> 2] >>> 24 - i % 4 * 8 & 255); ) i--;
t.sigBytes = i + 1;
}
};
return i;
}, "object" == typeof i ? e.exports = i = n() : "function" == typeof define && define.amd ? define([], n) : (void 0).CryptoJS = n();
var n;
cc._RF.pop();
}, {} ],
dataBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "d72c0jB6dVP1Ic6PbfPC4DX", "dataBox");
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
dataItem: cc.Prefab,
dataList: cc.Node,
dataPot: cc.Label,
randBup: cc.Node,
gameBup: cc.Node,
gameBox: cc.Node,
skillBup: cc.Node,
skillBox: cc.Node,
roleBup: cc.Node,
manImg: cc.Node,
girlImg: cc.Node,
roleName: cc.Label,
nameBox: cc.Node,
txtBox: cc.Node,
vedioSkillBox: cc.Node,
skillCount: cc.Label,
titleCount: cc.Label,
refreshBup: cc.Node,
refreshVedio: cc.Node,
refreshFont: cc.Label
},
onLoad: function() {
var t = this;
G.setBup(this.roleBup, function() {
t.nameBox.active = !0;
});
G.setBup(this.randBup, function() {
t.randNum();
});
G.setBup(this.gameBup, function() {
t.startGame();
});
G.setBup(this.skillBup, function() {
t.skillBup.active = !1;
G.showVedio(function() {
t.addTopSkill();
});
});
this.refreshVedio.active = G.temp.freeRefresh < 1;
this.refreshFont.string = G.temp.freeRefresh < 1 ? "刷 新" : "刷 新(" + G.temp.freeRefresh + ")";
G.setBup(this.refreshBup, function() {
if (G.temp.freeRefresh > 0) {
G.temp.freeRefresh--;
t.refreshVedio.active = G.temp.freeRefresh < 1;
t.refreshFont.string = G.temp.freeRefresh < 1 ? "刷 新" : "刷 新(" + G.temp.freeRefresh + ")";
t.resetSkill();
4 == G.temp.maxSkill && t.addTopSkill(!1);
} else G.showVedio(function() {
t.refreshVedio.active = !1;
G.temp.freeRefresh = G.VAL.FREE_REFRESH[1];
t.refreshFont.string = "刷 新(" + G.VAL.FREE_REFRESH[1] + ")";
});
});
},
onEnable: function() {
G.user.dataPot < G.VAL.DATA_POT[0] && (G.user.dataPot = G.VAL.DATA_POT[0]);
G.temp.adTime = 0;
G.temp.dataPot = G.user.dataPot;
G.user.data = [ 0, 0, 0, 0 ];
G.user.skill = [];
G.user.fightSkill = [ 0, 0, 0, 0, 0, 0, 0 ];
this.updatePot();
this.showData();
this.nameBox.active = !0;
this.skillBup.active = G.user.skillAd;
this.refreshBup.active = G.user.skillAd;
},
updatePot: function() {
this.dataPot.string = "可用属性：" + G.temp.dataPot;
},
showRole: function() {
this.manImg.active = 1 == G.user.sex;
this.girlImg.active = 0 == G.user.sex;
this.roleName.string = G.user.name;
},
showData: function() {
this.dataList.removeAllChildren();
for (var t = 0; t < 4; t++) {
var e = cc.instantiate(this.dataItem);
e.parent = this.dataList;
e.getComponent("dataItem").showData(Number(t));
}
},
randNum: function() {
var t = Math.floor(G.user.dataPot / 4);
G.temp.dataPot = G.user.dataPot - 4 * t;
G.user.data = [ t, t, t, t ];
for (var e = 0; e < 20 && G.temp.dataPot > 0; e++) {
G.user.data[e % 4]++;
G.temp.dataPot--;
}
var i = this.dataList.children;
for (var n in i) i[n].getComponent("dataItem").randNum();
this.updatePot();
},
startGame: function() {
if (G.temp.dataPot > 0) G.showTips("有属性点未分配"); else if (G.user.skill.length < 1) G.showTips("请选择至少1个天赋"); else if (G.temp.tList.length > 0 && G.user.title.length < 1) G.showTips("请选择传承"); else {
G.user.age = G.getAge();
G.user.skillAd = !0;
G.user.bakData = G._.assign([], G.user.data);
var t = G.user.data.join("_");
G.addEgg(t);
this.activeSkill();
this.titleSkill();
G.getFightData(!0, G.user.lev);
this.txtBox.getComponent("txtBox").initStory();
G.save();
this.gameBox.active = !0;
G.temp.gameStart = !0;
this.node.active = !1;
}
},
resetSkill: function() {
G.user.skill = [];
this.skillBox.getComponent("dataSkillBox").showList(!0);
},
addRanSkill: function() {
G.temp.maxSkill = 4;
for (var t, e = [], n = i(G.skillConf); !(t = n()).done; ) {
var a = t.value;
-1 == G.user.skill.indexOf(a.id) && e.push(a.id);
}
G.user.skill.push(G.randomArray(e, 1)[0]);
this.startGame();
},
addTopSkill: function(t) {
void 0 === t && (t = !0);
var e = this.skillBox.getComponent("dataSkillBox").addVedioSkill();
t && this.vedioSkillBox.getComponent("vedioSkillBox").showSkill(e);
},
activeSkill: function() {
for (var t, e = i(G.user.skill); !(t = e()).done; ) {
var n = t.value, a = G.getConf(G.skillConf, n);
if (a) for (var o in a) if ("" != a[o]) {
var m = Number(a[o]);
"cn" == o ? G.user.data[0] = Math.max(0, G.user.data[0] + m) : "in" == o ? G.user.data[1] = Math.max(0, G.user.data[1] + m) : "ly" == o ? G.user.data[2] = Math.max(0, G.user.data[2] + m) : "lf" == o ? G.user.age += m : "money" == o ? G.user.coin = Math.max(0, G.user.coin + m) : "hp" == o ? G.user.fightSkill[0] += m : "at" == o ? G.user.fightSkill[1] += m : "df" == o ? G.user.fightSkill[2] += m : "mp" == o ? G.user.fightSkill[3] += m : "miss" == o ? G.user.fightSkill[4] += m : "crit" == o ? G.user.fightSkill[5] += m : "crit_hit" == o && (G.user.fightSkill[6] += m);
}
}
},
titleSkill: function() {
for (var t, e = i(G.user.title); !(t = e()).done; ) {
var n = t.value, a = G.getConf(G.titleConf, n);
if (a) for (var o in a) if ("" != a[o]) {
var m = Number(a[o]);
"cn" == o ? G.user.data[0] = Math.max(0, G.user.data[0] + m) : "in" == o ? G.user.data[1] = Math.max(0, G.user.data[1] + m) : "ly" == o ? G.user.data[2] = Math.max(0, G.user.data[2] + m) : "lf" == o ? G.user.age += m : "money" == o ? G.user.coin = Math.max(0, G.user.coin + m) : "hp" == o ? G.user.fightSkill[0] += m : "at" == o ? G.user.fightSkill[1] += m : "df" == o ? G.user.fightSkill[2] += m : "miss" == o ? G.user.fightSkill[4] += m : "crit" == o ? G.user.fightSkill[5] += m : "crit_hit" == o && (G.user.fightSkill[6] += m);
}
}
},
updateCount: function() {
if (this.node.active) {
this.skillCount.string = "(" + G.user.skill.length + "/" + G.temp.maxSkill + ")";
this.titleCount.string = "(" + G.user.title.length + "/2)";
}
}
});
cc._RF.pop();
}, {} ],
dataItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "53931datNNCJJBW213Dok5u", "dataItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
num: cc.Label,
delBup: cc.Node,
addBup: cc.Node,
dataId: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
this.delBup.getComponent("bup").setCb(function() {
t.setData(-1);
});
this.addBup.getComponent("bup").setCb(function() {
t.setData(1);
});
},
showData: function(t) {
this.dataId = t;
var e = G.VAL.TITLE;
this.title.string = e[t];
this.num.string = G.user.data[this.dataId];
},
setData: function(t) {
if (t < 0) {
if (G.user.data[this.dataId] > 0) {
G.user.data[this.dataId]--;
G.temp.dataPot++;
}
} else {
if (G.user.data[this.dataId] >= 10) {
G.showTips("属性上限为10");
return;
}
if (G.temp.dataPot > 0) {
G.user.data[this.dataId]++;
G.temp.dataPot--;
}
}
this.num.string = G.user.data[this.dataId];
cc.find("Canvas/dataBox").getComponent("dataBox").updatePot();
},
randNum: function() {
this.num.string = G.user.data[this.dataId];
}
});
cc._RF.pop();
}, {} ],
dataSkillBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "fe537byP7FDZJMp5gpSML6r", "dataSkillBox");
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
item: cc.Prefab,
list: cc.Node,
rList: {
default: null,
visible: !1
},
sList: {
default: null,
visible: !1
}
},
onLoad: function() {
this.rList = [ [], [], [] ];
for (var t, e = i(G.skillConf); !(t = e()).done; ) {
var n = t.value;
this.rList[n.rar].push(n.id);
}
},
onEnable: function() {
this.showList();
},
showList: function() {
for (var t = [], e = 0; e < 3; e++) t[e] = G.randomArray(this.rList[e], 5);
this.sList = [];
for (var n = !1, a = 0; a < 5; a++) {
var o = G._.random(1, 100);
if (o <= 60 || n) this.sList.push(t[0].pop()); else if (o > 60 && o <= 90) this.sList.push(t[1].pop()); else if (o > 90) if (t[2].length > 0) {
n = !0;
this.sList.push(t[2].pop());
} else this.sList.push(t[1].pop());
}
this.list.removeAllChildren();
for (var m, r = i(this.sList); !(m = r()).done; ) {
var s = m.value, l = cc.instantiate(this.item);
l.parent = this.list;
l.getComponent("skillItem").setSkill(s);
}
},
addVedioSkill: function() {
for (var t, e = [], n = i(this.rList[2]); !(t = n()).done; ) {
var a = t.value;
-1 == this.sList.indexOf(a) && e.push(a);
}
var o = G.randomArray(e, 1)[0], m = cc.instantiate(this.item);
m.parent = this.list;
G.user.skill.push(o);
var r = m.getComponent("skillItem");
r.setSkill(o);
r.sel.active = !0;
return o;
}
});
cc._RF.pop();
}, {} ],
debugBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "0f358pPB8NL67Nt/UkL9vBD", "debugBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
debupBup: cc.Node,
view: cc.Node,
list: cc.Node,
num: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.debupBup, function() {
t.num++;
if (10 == t.num) t.showView(); else if (t.num > 11) {
t.num = 0;
t.view.active = !1;
}
});
},
showView: function() {
this.view.active = !0;
this.list.removeAllChildren();
for (var t in G.user.var) {
var e = cc.instantiate(this.item);
e.getComponent(cc.Label).string = t + ":" + G.user.var[t];
e.parent = this.list;
}
}
});
cc._RF.pop();
}, {} ],
editItem0: [ function(t, e) {
"use strict";
cc._RF.push(e, "47425ZB+Y5PbaDwYEZBeMyn", "editItem0");
cc.Class({
extends: cc.Component,
properties: {
del: cc.Node,
txt: cc.EditBox
},
onLoad: function() {
var t = this;
G.setBup(this.del, function() {
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.updateCount(0);
t.node.destroy();
});
},
showData: function(t) {
this.txt.string = G.deGbkStr(t.txt);
},
getData: function() {
return {
type: 0,
txt: G.enGbkStr(this.txt.string)
};
}
});
cc._RF.pop();
}, {} ],
editItem1: [ function(t, e) {
"use strict";
cc._RF.push(e, "4960aVZRDpHq7ayCd27ho4u", "editItem1");
cc.Class({
extends: cc.Component,
properties: {
del: cc.Node,
sel0: cc.EditBox,
desc0: cc.EditBox,
sel1: cc.EditBox,
desc1: cc.EditBox
},
onLoad: function() {
var t = this;
G.setBup(this.del, function() {
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.updateCount(1);
t.node.destroy();
});
},
showData: function(t) {
this.sel0.string = G.deGbkStr(t.sel0);
this.desc0.string = G.deGbkStr(t.desc0);
this.sel1.string = G.deGbkStr(t.sel1);
this.desc1.string = G.deGbkStr(t.desc1);
},
getData: function() {
return {
type: 1,
sel0: G.enGbkStr(this.sel0.string),
desc0: G.enGbkStr(this.desc0.string),
sel1: G.enGbkStr(this.sel1.string),
desc1: G.enGbkStr(this.desc1.string)
};
}
});
cc._RF.pop();
}, {} ],
editItem2: [ function(t, e) {
"use strict";
cc._RF.push(e, "acaf3KS6J9Pe5qWGC2DrEoL", "editItem2");
cc.Class({
extends: cc.Component,
properties: {
del: cc.Node,
guai: cc.EditBox,
win: cc.EditBox,
lose: cc.EditBox
},
onLoad: function() {
var t = this;
G.setBup(this.del, function() {
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.updateCount(2);
t.node.destroy();
});
},
showData: function(t) {
this.guai.string = G.deGbkStr(t.guai);
this.win.string = G.deGbkStr(t.win);
this.lose.string = G.deGbkStr(t.lose);
},
getData: function() {
return {
type: 2,
guai: G.enGbkStr(this.guai.string),
win: G.enGbkStr(this.win.string),
lose: G.enGbkStr(this.lose.string)
};
}
});
cc._RF.pop();
}, {} ],
expGj: [ function(t, e) {
"use strict";
cc._RF.push(e, "49dd0HTeK1Il4wumoC9/R2s", "expGj");
cc.Class({
extends: cc.Component,
properties: {
barBox: cc.Node,
bar: cc.Node,
time: cc.Label,
adBup: cc.Node,
infoBox: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.node, function() {
G.user.expGjTime = G.getNowSec();
t.bar.scaleX = 0;
t.updateBar();
G.save();
t.barBox.active = !0;
t.node.active = !1;
});
G.setBup(this.adBup, function() {
G.ylAdEvent("闭关加速");
G.showVedio(function() {
G.user.expGjTime = -1;
});
});
G.setTimeCb({
path: "Canvas/infoBox/roleBox/expBup",
js: "expGj",
cb: "updateBar",
time: [ 0, 1 ]
});
},
checkState: function() {
this.barBox.active = G.user.expGjTime > 0;
this.node.active = G.user.expGjTime < 0;
},
updateBar: function() {
if (this.barBox.active) {
var t = G.getNowSec() - G.user.expGjTime, e = Math.max(0, G.VAL.EXP_GJ_TIME - t);
this.time.string = "闭关倒计时 " + G.getTime(e).ms;
this.bar.scaleX = Math.min(1, t / G.VAL.EXP_GJ_TIME);
if (t >= G.VAL.EXP_GJ_TIME) {
G.user.expGjTime = -1;
var i = G.levConf[G.user.lev - 1], n = i.exp - G.user.exp;
n < 1 && (n = i.exp);
G.resetRole();
G.addExp(n, 1);
G.showTips("【灵气】+" + n);
this.node.active = !0;
this.barBox.active = !1;
this.infoBox.getComponent("infoBox").updateInfo();
}
}
}
});
cc._RF.pop();
}, {} ],
fbBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "bbd896qbfdAzKNiaQ4eSZbQ", "fbBox");
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
item: cc.Prefab,
list: cc.Node,
addBup: cc.Node,
buff: cc.Label,
bupBox: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.addBup, function() {
G.temp.bagType = 3;
t.bupBox.getComponent("bupBox").jumpTo(1);
t.node.active = !1;
});
},
onEnable: function() {
this.showList();
this.showBuff();
},
showList: function() {
this.list.removeAllChildren();
for (var t, e = G.fbList(), n = i(e); !(t = n()).done; ) {
var a = t.value, o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("fbItem").showInfo(a);
}
this.addBup.active = e.length < 5;
},
showBuff: function() {
G.fbBuff();
var t = "气血+" + G.user.fbSkill[0] + "、攻击+" + G.user.fbSkill[1] + "、防御+" + G.user.fbSkill[2];
this.buff.string = t;
}
});
cc._RF.pop();
}, {} ],
fbItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "ca2adMDbdFGdbe9BwmdoDcz", "fbItem");
cc.Class({
extends: cc.Component,
properties: {
img: cc.Node,
title: cc.Label,
rar: cc.Label,
buff: cc.Label,
bup: cc.Node,
id: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
G.setObj(t.id, !1);
G.getNode("Canvas/fbBox", "fbBox").js.showList();
});
},
showInfo: function(t) {
this.id = t;
var e = G.getConf(G.objConf, t);
this.title.string = e.name;
this.rar.string = G.VAL.RAR[e.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[e.qua]);
var i = "" != e.hp ? "气血+" + e.hp + " " : "", n = "" != e.at ? "攻击+" + e.at + " " : "", a = "" != e.df ? "防御+" + e.df + " " : "", o = "" != e.mp ? "法力+" + e.mp : "";
this.buff.string = i + n + a + o;
var m = "obj_" + e.sub_type + "_" + e.qua;
G.setLogo(this.img, "obj/", "obj", m, !0, 120);
}
});
cc._RF.pop();
}, {} ],
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
}, {} ],
fightFsItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "a7f835MpzpCk4wrDZT+Fyza", "fightFsItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
img: cc.Node,
cdBar: cc.Node,
id: {
default: 0,
visible: !1
},
cd: {
default: 0,
visible: !1
},
conf: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this, e = G.getNode("Canvas/fightBox", "fightBox");
G.setBup(this.node, function() {
if (t.cd == t.conf.CD) {
if (e.js.fsEff(!0, t.id)) {
t.cd = 0;
t.cdBar.scaleX = 0;
G.playAudio("fs", 1);
}
} else G.showTips("冷却中...");
});
},
showInfo: function(t) {
this.id = t;
var e = G.user.setObj["_" + t];
this.conf = G.getConf(G._15Conf, e.fsId);
this.title.string = this.conf.name;
var i = null == G.temp.fsIcon["_" + t] ? G._.random(0, 4) : G.temp.fsIcon["_" + t];
G.temp.fsIcon["_" + t] = i;
G.setLogo(this.img, "obj/", "obj", "fs_" + i + "_" + this.conf.qua, !0, 90);
this.cd = 0;
this.updateBar();
},
updateBar: function() {
this.cdBar.parent.active = "" != this.conf.CD;
if ("" != this.conf.CD) {
this.cd = Math.min(this.conf.CD, this.cd + 1);
this.cdBar.scaleX = this.cd / this.conf.CD;
}
}
});
cc._RF.pop();
}, {} ],
fightTxtBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "280b2Hu73RCdptgBq29869F", "fightTxtBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list: cc.Node,
scView: cc.ScrollView
},
onEnable: function() {
this.list.removeAllChildren();
},
addTxt: function(t) {
var e = cc.instantiate(this.item);
e.parent = this.list;
e.getComponent("fightTxtItem").showTxt(t);
this.scView.scrollToBottom(.5);
}
});
cc._RF.pop();
}, {} ],
fightTxtItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "08c548WjdRFDaXU2lqtVCjN", "fightTxtItem");
cc.Class({
extends: cc.Component,
properties: {
txt: cc.RichText
},
showTxt: function(t) {
this.txt.string = "<outline color=black width=2>" + t + "</outline>";
}
});
cc._RF.pop();
}, {} ],
firstGifeBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "f1583Bo2LdHGYeSkPQkxnOE", "firstGifeBox");
cc.Class({
extends: cc.Component,
properties: {
firstBup: cc.Node,
adBup: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.adBup, function() {
G.ylAdEvent("新手礼包");
G.showVedio(function() {
G.r_item("143001|1");
G.r_item("143003|1");
G.user.coin += 1e4;
G.save();
G.showTips("领取成功");
G.setItem("xx_first", 1);
t.firstBup.active = !1;
t.node.active = !1;
});
});
},
onEnable: function() {
G.setItem("xx_first_auto", 1);
}
});
cc._RF.pop();
}, {} ],
fontClick: [ function(t, e) {
"use strict";
cc._RF.push(e, "73b71z/1VBK7Zi/S1PXcmRM", "fontClick");
cc.Class({
extends: cc.Component,
properties: {
canClick: {
default: !0,
visible: !1
},
pList: {
default: null,
visible: !1
}
},
onLoad: function() {
this.pList = [];
},
endClick: function() {
this.canClick = !1;
},
click: function(t, e) {
if (this.canClick && -1 == this.pList.indexOf(e)) {
this.pList.push(e);
G.getNode("Canvas/gameBox/opBox", "opBox").js.showSel(!1);
G.gj(!1);
G.setOpType(0);
G.setStep(Number(e));
G.nextStory();
}
}
});
cc._RF.pop();
}, {} ],
fsBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "34d729XyjtHRb8fzs0y5blb", "fsBox");
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
item: cc.Prefab,
list: cc.Node,
addBup: cc.Node,
gjBup: cc.Node,
title: cc.Label,
buff: cc.Label,
bupBox: cc.Node,
gjBox: cc.Node,
expBar: cc.Node,
expTime: cc.Label,
adBup: cc.Node,
adFont: cc.Label,
cost: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.addBup, function() {
if (t.list.children.length > 4) G.showTips("已达上限"); else {
G.temp.bagType = 1;
t.bupBox.getComponent("bupBox").jumpTo(1);
t.node.active = !1;
}
});
G.setBup(this.gjBup, function() {
if (G.fsList().length < 1) G.showTips("未装备法术"); else {
G.showInter();
t.gjBox.active = !0;
t.gjBup.parent.active = !1;
G.user.fsTime = G.getNowSec();
G.save();
}
});
G.setBup(this.adBup, function() {
var e = G.getAdConf();
if (G.user.coin >= e.money) {
G.user.coin -= e.money;
G.user.fsPei++;
G.user.fsPei > 1 && (t.adBup.active = !1);
G.save();
} else G.noCoinTips(function() {
var e = G.getAdConf();
G.showCost(t.cost, G.user.coin, e.money, "灵石 ");
});
});
G.setTimeCb({
path: "Canvas/fsBox",
js: "fsBox",
cb: "updateBar",
time: [ 0, 1 ]
});
},
onEnable: function() {
var t = G.getAdConf();
G.showCost(this.cost, G.user.coin, t.money, "灵石 ");
this.adBup.active = G.user.fsPei < 2;
this.showList();
},
showList: function() {
this.list.removeAllChildren();
for (var t, e = G.fsList(), n = i(e); !(t = n()).done; ) {
var a = t.value, o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("fsItem").showInfo(a);
}
this.showGjInfo();
e.length > 0 && this.showBuff(e[0]);
},
showBuff: function(t) {
var e = G.user.setObj["_" + t], i = G.getConf(G._15Conf, e.fsId);
this.title.string = "【" + i.name + "】";
var n = G.fsDesc(t), a = i.des.replace("eff1", n.eff1);
a = (a = a.replace("eff2", n.eff2)).replace("rate", i.rate + "%");
this.buff.string = a;
},
showGjInfo: function() {
this.gjBox.active = -1 != G.user.fsTime;
this.gjBup.parent.active = -1 == G.user.fsTime;
this.adFont.string = G.user.fsPei + 1 + "倍经验";
},
updateBar: function() {
if (-1 != G.user.fsTime) {
var t = Math.min(G.VAL.GF_GJ_TIME, G.getNowSec() - G.user.fsTime);
this.expTime.string = "挂机倒计时 " + G.getTime(G.VAL.GF_GJ_TIME - t).hms;
this.expBar.scaleX = t / G.VAL.GF_GJ_TIME;
G.addFsExp(3, G.VAL.GF_GJ_EXP * G.user.fsPei);
if (t == G.VAL.GF_GJ_TIME) {
G.user.fsTime = -1;
G.user.fsPei = 1;
this.showGjInfo();
}
var e = G.fsList(), i = this.list.children;
for (var n in i) e[n] && i[n].getComponent("fsItem").showInfo(e[n]);
} else this.showGjInfo();
}
});
cc._RF.pop();
}, {} ],
fsItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "0d9b95z9uVN1LdRtqLnlFn+", "fsItem");
cc.Class({
extends: cc.Component,
properties: {
img: cc.Node,
title: cc.Label,
lev: cc.Label,
exp: cc.Label,
rar: cc.Label,
type: cc.Label,
mp: cc.Label,
cd: cc.Label,
bup: cc.Node,
danBup: cc.Node,
id: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this, e = G.getNode("Canvas/fsBox", "fsBox"), i = G.getNode("Canvas/bupBox", "bupBox");
G.setBup(this.danBup, function() {
G.temp.danFsId = t.id;
G.temp.danGfId = -1;
if (G.getTypeObj(17).length > 0) {
G.temp.bagType = 2;
i.js.jumpTo(1);
} else {
G.temp.bagType = -1;
i.js.jumpTo(3);
var n = G.getNode("Canvas/shopBox", "shopBox");
n.js && n.js.updateList(2);
}
e.node.active = !1;
});
G.setBup(this.bup, function() {
G.setObj(t.id, !1);
e.js.showList();
});
this.node.on(cc.Node.EventType.TOUCH_END, function(i) {
e.js.showBuff(t.id);
i.stopPropagation();
});
},
showInfo: function(t) {
this.id = t;
var e = G.getConf(G.objConf, t);
this.title.string = e.name;
this.rar.string = G.VAL.RAR[e.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[e.qua]);
var i = G.user.setObj["_" + t];
this.lev.string = "等级：" + i.lev;
var n = G.getConf(G._15Conf, i.fsId), a = n.eff1.split("|");
this.type.string = "类型：" + G.VAL.FS_TYPE[a[0]];
if ("" != n.eff2) {
var o = n.eff2.split("|");
this.type.string += "、" + G.VAL.FS_TYPE[o[0]];
}
var m = 100 * e.qua * Math.pow(i.lev, 2);
this.exp.string = "经验：" + i.exp + "/" + m;
this.mp.string = "法耗：" + ("" == n.mp ? "--" : n.mp);
this.cd.string = "冷却：" + ("" == n.CD ? "--" : n.CD);
var r = null == G.temp.fsIcon["_" + t] ? G._.random(0, 4) : G.temp.fsIcon["_" + t];
G.temp.fsIcon["_" + t] = r;
G.setLogo(this.img, "obj/", "obj", "fs_" + r + "_" + e.qua, !0, 60);
}
});
cc._RF.pop();
}, {} ],
fsListBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "135f5xS1FhFVoX2D1WbLVEK", "fsListBox");
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
item: cc.Prefab
},
onLoad: function() {
G.setTimeCb({
path: "Canvas/fightBox/bg/fsListBox",
js: "fsListBox",
cb: "updateCd",
time: [ 0, 1 ]
});
},
onEnable: function() {
this.showList();
},
showList: function() {
this.node.removeAllChildren();
for (var t, e = i(G.fsList()); !(t = e()).done; ) {
var n = t.value, a = G.user.setObj["_" + n];
if ("" != G.getConf(G._15Conf, a.fsId).CD) {
var o = cc.instantiate(this.item);
o.parent = this.node;
o.getComponent("fightFsItem").showInfo(n);
}
}
},
updateCd: function() {
for (var t, e = i(this.node.children); !(t = e()).done; ) t.value.getComponent("fightFsItem").updateBar();
}
});
cc._RF.pop();
}, {} ],
gameBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "13031g4zKVNrY4WoQyOxgDO", "gameBox");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
gfBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "cecb8gRmAdCQpWR7k9ZTLCR", "gfBox");
cc.Class({
extends: cc.Component,
properties: {
changeBup: cc.Node,
mergeBup: cc.Node,
selBup: cc.Node,
danBup: cc.Node,
bupBox: cc.Node,
infoBox: cc.Node,
gjBup: cc.Node,
expBar: cc.Node,
expTime: cc.Label,
adBup: cc.Node,
adFont: cc.Label,
cost: cc.Node,
book: [ cc.Node ],
title: [ cc.Label ],
rar: [ cc.Label ],
lev: [ cc.Label ],
exp: [ cc.Label ],
desc0: [ cc.Label ],
desc1: [ cc.Label ],
hp: [ cc.Label ],
df: [ cc.Label ],
mp: [ cc.Label ],
newId: {
default: -1,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.changeBup, function() {
G.setBook(0, t.newId);
t.showInfo(-1);
});
G.setBup(this.mergeBup, function() {
t.mergeBook();
});
G.setBup(this.selBup, function() {
G.temp.bagType = 0;
t.bupBox.getComponent("bupBox").jumpTo(1);
t.node.active = !1;
});
G.setBup(this.danBup, function() {
G.temp.danGfId = G.bookId();
if (-1 != G.temp.danGfId) {
G.temp.danFsId = -1;
if (G.getTypeObj(16).length > 0) {
G.temp.bagType = 2;
t.bupBox.getComponent("bupBox").jumpTo(1);
} else {
G.temp.bagType = -1;
t.bupBox.getComponent("bupBox").jumpTo(3);
var e = G.getNode("Canvas/shopBox", "shopBox");
e.js && e.js.updateList(2);
}
t.node.active = !1;
} else G.showTips("未装备功法");
});
G.setBup(this.gjBup, function() {
G.showInter();
t.gjBup.active = !1;
t.adBup.parent.active = !0;
G.user.gfTime = G.getNowSec();
});
G.setBup(this.adBup, function() {
var e = G.getAdConf();
if (G.user.coin >= e.money) {
G.user.coin -= e.money;
G.user.gfPei++;
G.user.gfPei > 1 && (t.adBup.active = !1);
G.save();
} else G.noCoinTips(function() {
var e = G.getAdConf();
G.showCost(t.cost, G.user.coin, e.money, "灵石 ");
});
});
G.setTimeCb({
path: "Canvas/gfBox",
js: "gfBox",
cb: "updateBar",
time: [ 0, 1 ]
});
},
showInfo: function(t) {
void 0 === t && (t = -1);
this.newId = t;
var e = G.bookId(), i = G.getConf(G.objConf, e);
this.book[0].active = -1 != e;
this.gjBup.active = -1 != e;
var n = null;
if (-1 != e) {
n = G.user.setObj["_" + e];
var a = i.qua - 1;
G.setLogo(this.book[0], "obj/", "obj", "book_" + a);
}
this.title[0].string = -1 == e ? "未选择" : i.name;
this.rar[0].string = "品质：" + (-1 == e ? "未知" : G.VAL.RAR[i.qua]);
this.rar[0].node.color = -1 == e ? cc.color("#000000") : cc.color(G.VAL.R_COLOR[i.qua]);
this.lev[0].string = -1 == e ? "等级：0" : "等级：" + n.lev;
var o = -1 == e ? 0 : 100 * i.qua * Math.pow(G.user.setObj["_" + e].lev, 2);
this.exp[0].string = -1 == e ? "经验：0" : "经验：" + n.exp + "/" + o;
this.desc0[0].string = -1 == e ? "修练效率：0" : "修练效率：+" + n.buff.toFixed(2) + "%";
this.desc1[0].string = -1 == e ? "暂无" : i.des;
var m = G.bookBuff(e);
this.hp[0].string = -1 == e ? "气血：0" : "气血：+" + m[0];
this.df[0].string = -1 == e ? "防御：0" : "防御：+" + m[2];
this.mp[0].string = -1 == e ? "法力：0" : "法力：+" + m[3];
var r = G.getConf(G.objConf, t);
this.book[1].active = -1 != t;
if (-1 != t) {
var s = r.qua - 1;
G.setLogo(this.book[1], "obj/", "obj", "book_" + s);
}
this.title[1].string = -1 == t ? "未选择" : r.name;
this.rar[1].string = "品质：" + (-1 == t ? "未知" : G.VAL.RAR[r.qua]);
this.rar[1].node.color = -1 == t ? cc.color("#000000") : cc.color(G.VAL.R_COLOR[r.qua]);
this.lev[1].node.parent.active = -1 != t;
this.exp[1].node.parent.active = -1 != t;
this.hp[1].node.parent.active = -1 != t;
var l = -1 == t ? 0 : r.eff, p = 1, d = 0;
if (-1 != t && G.user.setObj["_" + t]) {
l = G.user.setObj["_" + t].buff;
p = G.user.setObj["_" + t].lev;
d = G.user.setObj["_" + t].exp;
}
this.lev[1].string = "等级：" + p;
var c = -1 == t ? 0 : 100 * r.qua * Math.pow(p, 2);
this.exp[1].string = -1 == t ? "经验：0" : "经验：" + d + "/" + c;
this.desc0[1].string = -1 == t ? "修练效率：0" : "修练效率：+" + l.toFixed(2) + "%";
this.desc1[1].string = -1 == t ? "暂无" : r.des;
var u = G.bookBuff(t);
this.hp[1].string = -1 == t ? "气血：0" : "气血：+" + u[0];
this.df[1].string = -1 == t ? "防御：0" : "防御：+" + u[2];
this.mp[1].string = -1 == t ? "法力：0" : "法力：+" + u[3];
this.showGjInfo();
this.node.active = !0;
this.infoBox.getComponent("infoBox").updateInfo();
},
showGjInfo: function() {
var t = G.getAdConf();
G.showCost(this.cost, G.user.coin, t.money, "灵石 ");
var e = G.bookId();
this.adBup.parent.active = -1 != G.user.gfTime;
this.gjBup.active = -1 != e && -1 == G.user.gfTime;
this.adFont.string = G.user.gfPei + 1 + "倍经验";
this.adBup.active = G.user.gfPei < 2;
},
mergeBook: function() {
var t = this, e = G.bookId();
if (-1 != e && -1 != this.newId) {
var i = G.getConf(G.objConf, e);
if (G.getConf(G.objConf, this.newId).qua > i.qua) G.showTips("低阶功法无法融合高阶功法"); else {
G.showInter();
var n = G.getMsgBox();
n.showMsg("是否确定融合功法？", function() {
G.setBook(1, t.newId);
t.showInfo(-1);
G.playAudio("clr", 1);
G.showTips("融合成功");
});
n.showCancel(!0);
}
} else G.showTips("未选择融合功法");
},
updateBar: function() {
if (-1 != G.user.gfTime) {
var t = Math.min(G.VAL.GF_GJ_TIME, G.getNowSec() - G.user.gfTime);
this.expTime.string = "挂机倒计时 " + G.getTime(G.VAL.GF_GJ_TIME - t).hms;
this.expBar.scaleX = t / G.VAL.GF_GJ_TIME;
G.addBookExp(3, G.VAL.GF_GJ_EXP * G.user.gfPei);
if (t == G.VAL.GF_GJ_TIME) {
G.user.gfTime = -1;
G.user.gfPei = 1;
this.showGjInfo();
}
this.node.active && this.showInfo(this.newId);
} else this.showGjInfo();
}
});
cc._RF.pop();
}, {} ],
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
} ],
"gravityengine.mg.cocoscreator.min": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b27faJePi9DKZPR6lNjh0jn", "gravityengine.mg.cocoscreator.min");
!function(t, n) {
"object" == typeof i && "undefined" != typeof e ? e.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).gravityengine = n();
}(void 0, function() {
function t(t, e) {
var i, n = Object.keys(t);
return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(t), e && (i = i.filter(function(e) {
return Object.getOwnPropertyDescriptor(t, e).enumerable;
})), n.push.apply(n, i)), n;
}
function e(e) {
for (var i = 1; i < arguments.length; i++) {
var n = null != arguments[i] ? arguments[i] : {};
i % 2 ? t(Object(n), !0).forEach(function(t) {
l(e, t, n[t]);
}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(t) {
Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
});
}
return e;
}
function i() {
i = function() {
return t;
};
var t = {}, e = Object.prototype, n = e.hasOwnProperty, a = Object.defineProperty || function(t, e, i) {
t[e] = i.value;
}, o = (f = "function" == typeof Symbol ? Symbol : {}).iterator || "@@iterator", m = f.asyncIterator || "@@asyncIterator", r = f.toStringTag || "@@toStringTag";
function s(t, e, i) {
return Object.defineProperty(t, e, {
value: i,
enumerable: !0,
configurable: !0,
writable: !0
}), t[e];
}
try {
s({}, "");
} catch (e) {
s = function(t, e, i) {
return t[e] = i;
};
}
function l(t, e, i, n) {
var o, m, r, s;
e = e && e.prototype instanceof c ? e : c, e = Object.create(e.prototype), n = new b(n || []);
return a(e, "_invoke", {
value: (o = t, m = i, r = n, s = "suspendedStart", function(t, e) {
if ("executing" === s) throw new Error("Generator is already running");
if ("completed" === s) {
if ("throw" === t) throw e;
return {
value: void 0,
done: !0
};
}
for (r.method = t, r.arg = e; ;) {
var i = r.delegate;
if (i && (i = function t(e, i) {
var n = i.method, a = e.iterator[n];
return void 0 === a ? (i.delegate = null, "throw" === n && e.iterator.return && (i.method = "return", 
i.arg = void 0, t(e, i), "throw" === i.method) || "return" !== n && (i.method = "throw", 
i.arg = new TypeError("The iterator does not provide a '" + n + "' method")), d) : "throw" === (n = p(a, e.iterator, i.arg)).type ? (i.method = "throw", 
i.arg = n.arg, i.delegate = null, d) : (a = n.arg) ? a.done ? (i[e.resultName] = a.value, 
i.next = e.nextLoc, "return" !== i.method && (i.method = "next", i.arg = void 0), 
i.delegate = null, d) : a : (i.method = "throw", i.arg = new TypeError("iterator result is not an object"), 
i.delegate = null, d);
}(i, r))) {
if (i === d) continue;
return i;
}
if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
if ("suspendedStart" === s) throw s = "completed", r.arg;
r.dispatchException(r.arg);
} else "return" === r.method && r.abrupt("return", r.arg);
s = "executing";
if ("normal" === (i = p(o, m, r)).type) {
if (s = r.done ? "completed" : "suspendedYield", i.arg === d) continue;
return {
value: i.arg,
done: r.done
};
}
"throw" === i.type && (s = "completed", r.method = "throw", r.arg = i.arg);
}
})
}), e;
}
function p(t, e, i) {
try {
return {
type: "normal",
arg: t.call(e, i)
};
} catch (t) {
return {
type: "throw",
arg: t
};
}
}
t.wrap = l;
var d = {};
function c() {}
function u() {}
function y() {}
var f, x, h = ((x = (x = (s(f = {}, o, function() {
return this;
}), Object.getPrototypeOf)) && x(x(w([])))) && x !== e && n.call(x, o) && (f = x), 
y.prototype = c.prototype = Object.create(f));
function g(t) {
[ "next", "throw", "return" ].forEach(function(e) {
s(t, e, function(t) {
return this._invoke(e, t);
});
});
}
function v(t, e) {
var i;
a(this, "_invoke", {
value: function(a, o) {
function m() {
return new e(function(i, m) {
!function i(a, o, m, r) {
var s;
if ("throw" !== (a = p(t[a], t, o)).type) return (o = (s = a.arg).value) && "object" == typeof o && n.call(o, "__await") ? e.resolve(o.__await).then(function(t) {
i("next", t, m, r);
}, function(t) {
i("throw", t, m, r);
}) : e.resolve(o).then(function(t) {
s.value = t, m(s);
}, function(t) {
return i("throw", t, m, r);
});
r(a.arg);
}(a, o, i, m);
});
}
return i = i ? i.then(m, m) : m();
}
});
}
function G(t) {
var e = {
tryLoc: t[0]
};
1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), 
this.tryEntries.push(e);
}
function _(t) {
var e = t.completion || {};
e.type = "normal", delete e.arg, t.completion = e;
}
function b(t) {
this.tryEntries = [ {
tryLoc: "root"
} ], t.forEach(G, this), this.reset(!0);
}
function w(t) {
if (t || "" === t) {
var e, i = t[o];
if (i) return i.call(t);
if ("function" == typeof t.next) return t;
if (!isNaN(t.length)) return e = -1, (i = function i() {
for (;++e < t.length; ) if (n.call(t, e)) return i.value = t[e], i.done = !1, i;
return i.value = void 0, i.done = !0, i;
}).next = i;
}
throw new TypeError(typeof t + " is not iterable");
}
return a(h, "constructor", {
value: u.prototype = y,
configurable: !0
}), a(y, "constructor", {
value: u,
configurable: !0
}), u.displayName = s(y, r, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
return !!(t = "function" == typeof t && t.constructor) && (t === u || "GeneratorFunction" === (t.displayName || t.name));
}, t.mark = function(t) {
return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s(t, r, "GeneratorFunction")), 
t.prototype = Object.create(h), t;
}, t.awrap = function(t) {
return {
__await: t
};
}, g(v.prototype), s(v.prototype, m, function() {
return this;
}), t.AsyncIterator = v, t.async = function(e, i, n, a, o) {
void 0 === o && (o = Promise);
var m = new v(l(e, i, n, a), o);
return t.isGeneratorFunction(i) ? m : m.next().then(function(t) {
return t.done ? t.value : m.next();
});
}, g(h), s(h, r, "Generator"), s(h, o, function() {
return this;
}), s(h, "toString", function() {
return "[object Generator]";
}), t.keys = function(t) {
var e, i = Object(t), n = [];
for (e in i) n.push(e);
return n.reverse(), function t() {
for (;n.length; ) {
var e = n.pop();
if (e in i) return t.value = e, t.done = !1, t;
}
return t.done = !0, t;
};
}, t.values = w, b.prototype = {
constructor: b,
reset: function(t) {
if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, 
this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), 
!t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
},
stop: function() {
this.done = !0;
var t = this.tryEntries[0].completion;
if ("throw" === t.type) throw t.arg;
return this.rval;
},
dispatchException: function(t) {
if (this.done) throw t;
var e = this;
function i(i, n) {
return m.type = "throw", m.arg = t, e.next = i, n && (e.method = "next", e.arg = void 0), 
!!n;
}
for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
var o = this.tryEntries[a], m = o.completion;
if ("root" === o.tryLoc) return i("end");
if (o.tryLoc <= this.prev) {
var r = n.call(o, "catchLoc"), s = n.call(o, "finallyLoc");
if (r && s) {
if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
if (this.prev < o.finallyLoc) return i(o.finallyLoc);
} else if (r) {
if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
} else {
if (!s) throw new Error("try statement without catch or finally");
if (this.prev < o.finallyLoc) return i(o.finallyLoc);
}
}
}
},
abrupt: function(t, e) {
for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
var a = this.tryEntries[i];
if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
var o = a;
break;
}
}
var m = (o = o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc ? null : o) ? o.completion : {};
return m.type = t, m.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, 
d) : this.complete(m);
},
complete: function(t, e) {
if ("throw" === t.type) throw t.arg;
return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, 
this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), 
d;
},
finish: function(t) {
for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
var i = this.tryEntries[e];
if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), _(i), d;
}
},
catch: function(t) {
for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
var i, n, a = this.tryEntries[e];
if (a.tryLoc === t) return "throw" === (i = a.completion).type && (n = i.arg, _(a)), 
n;
}
throw new Error("illegal catch attempt");
},
delegateYield: function(t, e, i) {
return this.delegate = {
iterator: w(t),
resultName: e,
nextLoc: i
}, "next" === this.method && (this.arg = void 0), d;
}
}, t;
}
function n(t) {
return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
})(t);
}
function a(t, e, i, n, a, o, m) {
try {
var r = t[o](m), s = r.value;
} catch (t) {
return void i(t);
}
r.done ? e(s) : Promise.resolve(s).then(n, a);
}
function o(t) {
return function() {
var e = this, i = arguments;
return new Promise(function(n, o) {
var m = t.apply(e, i);
function r(t) {
a(m, n, o, r, s, "next", t);
}
function s(t) {
a(m, n, o, r, s, "throw", t);
}
r(void 0);
});
};
}
function m(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function r(t, e) {
for (var i = 0; i < e.length; i++) {
var n = e[i];
n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
Object.defineProperty(t, p(n.key), n);
}
}
function s(t, e, i) {
return e && r(t.prototype, e), i && r(t, i), Object.defineProperty(t, "prototype", {
writable: !1
}), t;
}
function l(t, e, i) {
return (e = p(e)) in t ? Object.defineProperty(t, e, {
value: i,
enumerable: !0,
configurable: !0,
writable: !0
}) : t[e] = i, t;
}
function p(t) {
return "symbol" == typeof (t = function(t) {
if ("object" != typeof t || null === t) return t;
var e = t[Symbol.toPrimitive];
if (void 0 === e) return String(t);
if ("object" != typeof (e = e.call(t, "string"))) return e;
throw new TypeError("@@toPrimitive must return a primitive value.");
}(t)) ? t : String(t);
}
var d = "4.8.11", c = "MG", u = "https://backend.gravity-engine.com/event_center/api/v1", y = function() {
function t() {
m(this, t), this.config = {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_mg"
};
}
return s(t, [ {
key: "getConfig",
value: function() {
return this.config;
}
}, {
key: "getStorage",
value: function(t, e, i) {
t = localStorage.getItem(t);
if (!e) return k.isJSONString(t) ? JSON.parse(t) : {};
k.isJSONString(t) ? i(JSON.parse(t)) : i({});
}
}, {
key: "setStorage",
value: function(t, e) {
localStorage.setItem(t, e);
}
}, {
key: "_setSystemProxy",
value: function(t) {
this._sysCallback = t;
}
}, {
key: "getSystemInfo",
value: function(t) {
var e = {
mp_platform: "web",
system: e = this._getOs(),
platform: e,
screenWidth: window.screen.width,
screenHeight: window.screen.height,
systemLanguage: navigator.language
};
this._sysCallback && (e = k.extend(e, this._sysCallback(t))), t.success(e), t.complete();
}
}, {
key: "_getOs",
value: function() {
var t = navigator.userAgent;
return /Windows/i.test(t) ? /Phone/.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Mac/i.test(t) ? "MacOS" : /Linux/.test(t) ? "Linux" : /CrOS/.test(t) ? "ChromeOS" : "";
}
}, {
key: "getNetworkType",
value: function(t) {
t.complete();
}
}, {
key: "onNetworkStatusChange",
value: function() {}
}, {
key: "request",
value: function(t) {
var e = {}, i = new XMLHttpRequest();
if (i.open(t.method, t.url), t.header) for (var n in t.header) i.setRequestHeader(n, t.header[n]);
return i.onreadystatechange = function() {
console.log("0 http res:", i.readyState, i.status);
4 === i.readyState && 200 === i.status ? (e.statusCode = 200, k.isJSONString(i.responseText) && (e.data = JSON.parse(i.responseText)), 
t.success(e)) : 200 !== i.status && (e.errMsg = "network error", t.fail(e));
}, i.ontimeout = function() {
e.errMsg = "timeout", t.fail(e);
}, i.send(t.data), i;
}
}, {
key: "initAutoTrackInstance",
value: function(t, e) {
this.instance = t, this.autoTrack = e.autoTrack;
var i = this;
"onpagehide" in window ? window.onpagehide = function() {
i.onPageHide(!0);
} : window.onbeforeunload = function() {
i.onPageHide(!0);
}, i.onPageShow(), i.autoTrack.appHide && i.instance.timeEvent("ta_page_hide"), 
"onvisibilitychange" in document && (document.onvisibilitychange = function() {
document.hidden ? i.onPageHide(!1) : (i.onPageShow(), i.autoTrack.appHide && i.instance.timeEvent("ta_page_hide"));
});
}
}, {
key: "setGlobal",
value: function(t, e) {
window[e] = t;
}
}, {
key: "getAppOptions",
value: function() {}
}, {
key: "showToast",
value: function() {}
}, {
key: "onPageShow",
value: function() {
var t;
this.autoTrack.appShow && (k.extend(t = {}, this.autoTrack.properties), k.isFunction(this.autoTrack.callback) && k.extend(t, this.autoTrack.callback("appShow")), 
this.instance._internalTrack("$WebPageView", t));
}
}, {
key: "onPageHide",
value: function(t) {
var e;
this.autoTrack.appHide && (k.extend(e = {}, this.autoTrack.properties), k.isFunction(this.autoTrack.callback) && k.extend(e, this.autoTrack.callback("appHide")), 
this.instance._internalTrack("$WebPageHide", e, new Date(), null, t));
}
} ], [ {
key: "createInstance",
value: function() {
return new t();
}
} ]), t;
}(), f = function() {
function t(e, i) {
m(this, t), this.taInstance = e, this.config = i || {}, this.referrer = "Directly open", 
this.config.isPlugin ? (e.App = function() {
App.apply(this, arguments);
}, inension(e.Page)) : (i = App, App = this._initAppExtention(i), e = Page, Page = this._initPageExtension(e));
}
return s(t, [ {
key: "_initPageExtension",
value: function(t) {
var e = this;
return function(i) {
var n = i.onLoad, a = i.onShow, o = i.onShareAppMessage, m = {};
return i.onLoad = function(t) {
m = t || {}, "function" == typeof n && n.call(this, t);
}, i.onShow = function(t) {
e.onPageShow(m), "function" == typeof a && a.call(this, t);
}, "function" == typeof o && (i.onShareAppMessage = function(t) {
t = o.call(this, t);
return e.onPageShare(t);
}), t(i);
};
}
}, {
key: "_initAppExtention",
value: function(t) {
var e = this;
return function(i) {
var n = i.onLaunch, a = i.onShow, o = i.onHide;
return i.onLaunch = function(t) {
e.onAppLaunch(t, this), "function" == typeof n && n.call(this, t);
}, i.onShow = function(t) {
e.onAppShow(t), "function" == typeof a && a.call(this, t);
}, i.onHide = function() {
e.onAppHide(), "function" == typeof o && o.call(this);
}, t(i);
};
}
}, {
key: "onAppLaunch",
value: function(t, e) {
this._setAutoTrackProperties(t), k.isUndefined(e) || (e[this.taInstance.name] = this.taInstance), 
this.config.appLaunch && (e = {}, t && t.path && (e.$url_query = k.setQuery(t.query), 
e.$scene = String(t.scene || t.from)), this.taInstance._internalTrack("$MPLaunch", e));
}
}, {
key: "onAppShow",
value: function(t) {
var e;
this.config.appHide && this.taInstance.timeEvent("$MPHide"), this._setAutoTrackProperties(t), 
this.config.appShow && (e = {}, t && t.path && (e.$url_path = this._getPath(t.path), 
e.$url_query = k.setQuery(t.query), e.$scene = String(t.scene || t.from)), k.extend(e, this.config.properties), 
k.isFunction(this.config.callback) && k.extend(e, this.config.callback("appShow")), 
this.taInstance._internalTrack("$MPShow", e));
}
}, {
key: "onAppHide",
value: function() {
var t;
this.config.appHide && (k.extend(t = {}, this.config.properties), k.isFunction(this.config.callback) && k.extend(t, this.config.callback("appHide")), 
this.taInstance._internalTrack("$MPHide", t));
}
}, {
key: "_getCurrentPath",
value: function() {
var t = "Not to get";
try {
var e = getCurrentPages();
t = e[e.length - 1].route;
} catch (t) {
O.info(t);
}
return t;
}
}, {
key: "_setAutoTrackProperties",
value: function() {
this.taInstance._setAutoTrackProperties({});
}
}, {
key: "_getPath",
value: function(t) {
return "string" == typeof t ? t.replace(/^\//, "") : "Abnormal values";
}
}, {
key: "onPageShare",
value: function(t) {
if (this.config.pageShare) {
var e = 1;
try {
e = getCurrentPages().length;
} catch (t) {
e = 1;
}
this.taInstance._internalTrack("$MPShare", {
$share_method: "转发消息卡片",
$share_depth: e,
$url_path: this._getCurrentPath()
});
}
return k.isObject(t) ? t : {};
}
}, {
key: "onPageShow",
value: function(t) {
var e;
this.config.pageShow && (e = this._getCurrentPath(), k.setQuery(t), this.referrer = e);
}
} ]), t;
}(), x = function() {
function t(e, i, n) {
var a = this;
e = (m(this, t), this.taInstance = e, this.config = i || {}, {});
try {
e = n.getLaunchOptionsSync();
} catch (i) {
console.log("Ge error:AutoTrackBridge getLaunchOptionsSync error:", i), e = {};
}
this._onShow(e), this.startTracked = !0, n.onShow(function(t) {
a._onShow(t);
}), n.onHide(function() {
var t;
a.startTracked = !1, a.config.appHide && (k.extend(t = {}, a.config.properties), 
k.isFunction(a.config.callback) && k.extend(t, a.config.callback("appHide")), a.taInstance._internalTrack("$MPHide", t));
});
}
return s(t, [ {
key: "_onShow",
value: function(t) {
var i;
k.isObject(t) || (t = {}), this.startTracked || (this.config.appHide && this.taInstance.timeEvent("$MPHide"), 
this.config.appShow && (k.extend(i = {}, this.config.properties), k.isFunction(this.config.callback) && k.extend(i, this.config.callback("appShow")), 
this.taInstance._internalTrack("$MPShow", e(e({}, i), {}, {
$scene: String((null == (i = t) ? void 0 : i.scene) || (null == (i = t) ? void 0 : i.from)),
$url_query: k.setQuery((null == (t = w.getAppOptions()) ? void 0 : t.query) || {})
}))));
}
} ]), t;
}(), h = function() {
function t(e, i, n) {
m(this, t), this.api = e, this.config = i, this._config = n;
}
return s(t, [ {
key: "getConfig",
value: function() {
return this.config;
}
}, {
key: "getStorage",
value: function(t, e, i) {
if (!e) return "dd_mp" === this._config.platform ? (e = this.api.getStorageSync({
key: t
}), k.isJSONString(e.data) ? JSON.parse(e.data) : {}) : (e = this.api.getStorageSync(t), 
k.isJSONString(e) ? JSON.parse(e) : {});
this.api.getStorage({
key: t,
success: function(t) {
t = k.isJSONString(t.data) ? JSON.parse(t.data) : {};
i(t);
},
fail: function() {
O.warn("getStorage faild"), i({});
}
});
}
}, {
key: "setStorage",
value: function(t, e) {
this.api.setStorage({
key: t,
data: e
});
}
}, {
key: "_getPlatform",
value: function() {
return "";
}
}, {
key: "getSystemInfo",
value: function(t) {
var e = this._config.mpPlatform;
this.api.getSystemInfo({
success: function(i) {
k.isFunction(e) ? i.mp_platform = e(i) : i.mp_platform = e, t.success(i), "wechat" === e && t.complete();
},
complete: function() {
t.complete();
}
});
}
}, {
key: "getNetworkType",
value: function(t) {
k.isFunction(this.api.getNetworkType) ? this.api.getNetworkType({
success: function(e) {
t.success(e);
},
complete: function() {
t.complete();
}
}) : (t.success({}), t.complete());
}
}, {
key: "onNetworkStatusChange",
value: function(t) {
k.isFunction(this.api.onNetworkStatusChange) ? this.api.onNetworkStatusChange(t) : t({});
}
}, {
key: "request",
value: function(t) {
var e;
return "ali_mp" === this._config.platform || "dd_mp" === this._config.platform ? ((e = k.extend({}, t)).headers = t.header, 
e.success = function(e) {
e.statusCode = e.status, t.success(e);
}, e.fail = function(e) {
e.errMsg = e.errorMessage, t.fail(e);
}, "dd_mp" === this._config.platform ? this.api.httpRequest(e) : this.api.request(e)) : this.api.request(t);
}
}, {
key: "initAutoTrackInstance",
value: function(t, e) {
return k.isObject(e.autoTrack) && (e.autoTrack.isPlugin = e.is_plugin), new (this._config.mp ? f : x)(t, e.autoTrack, this.api);
}
}, {
key: "setGlobal",
value: function(t, e) {
this._config.mp ? O.warn("GravityAnalytics: we do not set global name for GE instance when you do not enable auto track.") : "ali_mg" !== this._config.platform && (GameGlobal[e] = t);
}
}, {
key: "getAppOptions",
value: function(t) {
var e = {};
try {
e = this.api.getLaunchOptionsSync();
} catch (t) {
console.log("Ge error: Cannot get launch options.", t), e = {};
}
if (k.isFunction(t)) try {
this._config.mp ? this.api.onAppShow(t) : this.api.onShow(t);
} catch (t) {
O.warn("Cannot register onShow callback.");
}
return e;
}
}, {
key: "showToast",
value: function(t) {
var e;
k.isFunction(this.api.showToast) && (e = {
title: t
}, "dd_mp" !== this._config.platform && "ali_mp" !== this._config.platform || (e.content = t), 
this.api.showToast(e));
}
} ], [ {
key: "createInstance",
value: function() {
return this._createInstance("R_CURRENT_PLATFORM");
}
}, {
key: "_createInstance",
value: function(e) {
switch (e) {
case "wechat_mp":
return new t(wx, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_wechat"
}, {
mpPlatform: "wechat",
mp: !0,
platform: e
});

case "wechat_mg":
return new t(wx, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_wechat_game"
}, {
mpPlatform: "wechat",
platform: e
});

case "qq_mp":
return new t(qq, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_qq"
}, {
mpPlatform: "qq",
mp: !0,
platform: e
});

case "qq_mg":
return new t(qq, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_qq_game"
}, {
mpPlatform: "qq",
platform: e
});

case "baidu_mp":
return new t(swan, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_swan"
}, {
mpPlatform: function(t) {
return t.host;
},
mp: !0,
platform: e
});

case "baidu_mg":
return new t(swan, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_swan_game"
}, {
mpPlatform: function(t) {
return t.host;
},
platform: e
});

case "tt_mg":
return new t(tt, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_tt_game"
}, {
mpPlatform: function(t) {
return t.appName;
},
platform: e
});

case "tt_mp":
return new t(tt, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_tt"
}, {
mpPlatform: function(t) {
return t.appName;
},
mp: !0,
platform: e
});

case "ali_mp":
return new t(my, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_ali"
}, {
mpPlatform: function(t) {
return t.app;
},
mp: !0,
platform: e
});

case "ali_mg":
return new t(my, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_ali_game"
}, {
mpPlatform: function(t) {
return t.app;
},
platform: e
});

case "dd_mp":
return new t(dd, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_dd"
}, {
mpPlatform: "dingding",
mp: !0,
platform: e
});

case "bl_mg":
return new t(bl, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_mg"
}, {
mpPlatform: "bilibili",
platform: e
});

case "kuaishou_mp":
return new t(ks, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_kuaishou_program"
}, {
mpPlatform: "kuaishou",
mp: !0,
platform: e
});

case "kuaishou_mg":
return new t(ks, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_kuaishou_game"
}, {
mpPlatform: "kuaishou_game",
platform: e
});

case "qh360_mg":
return new t(qh, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_qh360"
}, {
mpPlatform: "qh360",
platform: e
});

case "tb_mp":
return new t(my, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_tb"
}, {
mpPlatform: "tb",
mp: !0,
platform: e
});

case "jd_mp":
return new t(jd, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_jd"
}, {
mpPlatform: "jd",
mp: !0,
platform: e
});

case "qh360_mp":
return new t(qh, {
persistenceName: "GravityEngine",
persistenceNameOld: "GravityEngine_qh360"
}, {
mpPlatform: "qh360",
mp: !0,
platform: e
});

case "WEB":
return new y.createInstance();
}
}
} ]), t;
}(), g = s(function t(e, i) {
var n = this;
m(this, t), this.taInstance = e, this.config = i || {}, this.config.appShow && this.taInstance._internalTrack("$MPShow"), 
this.config.appHide && this.taInstance.timeEvent("$MPHide"), qg.onShow(function() {
var t;
n.config.appHide && n.taInstance.timeEvent("$MPHide"), n.config.appShow && (k.extend(t = {}, n.config.properties), 
k.isFunction(n.config.callback) && k.extend(t, n.config.callback("appShow")), n.taInstance._internalTrack("$MPShow"));
}), qg.onHide(function() {
var t;
n.config.appHide && (k.extend(t = {}, n.config.properties), k.isFunction(n.config.callback) && k.extend(t, n.config.callback("appHide")), 
n.taInstance._internalTrack("$MPHide"));
});
}), v = function() {
function t() {
m(this, t), this.config = {
persistenceName: "gravityengine",
persistenceNameOld: "gravityengine_qg_vivo_game",
asyncPersistence: !0
};
}
return s(t, [ {
key: "getConfig",
value: function() {
return this.config || {};
}
}, {
key: "getStorage",
value: function(t, e, i) {
if (!e) return e = qg.getStorageSync({
key: t
}), k.isJSONString(e) ? JSON.parse(e) : {};
qg.getStorage({
key: t,
success: function(t) {
t = k.isJSONString(t) ? JSON.parse(t) : {};
i(t);
},
fail: function() {
i({});
}
});
}
}, {
key: "setStorage",
value: function(t, e) {
qg.setStorage({
key: t,
value: e
});
}
}, {
key: "getSystemInfo",
value: function(t) {
qg.getSystemInfo({
success: function(e) {
var i = e, n = [ e.osType, e.osVersionName ].join(" ");
i.brand = e.manufacturer, i.system = n, i.mp_platform = "vivo_qg", t.success(i);
},
complete: function() {
t.complete();
}
});
}
}, {
key: "getQuickDevice",
value: function(t) {
var e = {
os_name: "android",
android_id: "",
imei: "",
oaid: "",
mac: "",
android_version: "",
api_version: 0,
rom: {
gravityengine_qg_huawei_game: "EMUI",
gravityengine_qg: "MIUI",
gravityengine_qg_oppo_game: "ColorOS",
gravityengine_qg_vivo_game: "FuntouchOS",
gravityengine_qg_mz_game: "Flyme"
}[t.platform],
rom_version: "",
phone_brand: "",
phone_model: ""
};
qg.getSystemInfo({
success: function(i) {
var n;
e.android_version = i.system, e.api_version = i.platformVersionCode, e.rom_version = i.COREVersion, 
e.phone_brand = i.brand, e.phone_model = i.model, qg.getOAID && (i = null != (n = null == (n = (i = qg).getOAID) ? void 0 : n.call(i).oaid) ? n : "", 
e.android_id = i, e.imei = i, e.oaid = i), t.success(e);
}
});
}
}, {
key: "getNetworkType",
value: function(t) {
qg.getNetworkType({
success: function(e) {
var i = e;
i.networkType = e.type, t.success(i);
},
complete: function() {
t.complete();
}
});
}
}, {
key: "onNetworkStatusChange",
value: function(t) {
qg.subscribeNetworkStatus({
callback: function(e) {
var i = e;
i.networkType = e.type, t(i);
}
});
}
}, {
key: "request",
value: function(t) {
return qg.request({
url: t.url,
data: t.data,
method: t.method,
header: t.header,
success: function(e) {
t.success(e);
},
fail: function(e) {
t.fail(e);
}
});
}
}, {
key: "initAutoTrackInstance",
value: function(t, e) {
return new g(t, e.autoTrack);
}
}, {
key: "setGlobal",
value: function(t, e) {
globalThis[e] = t;
}
}, {
key: "getAppOptions",
value: function() {
return {};
}
}, {
key: "showToast",
value: function(t) {
qg.showToast({
message: t,
duration: 0
});
}
} ], [ {
key: "createInstance",
value: function() {
return new t();
}
} ]), t;
}(), G = s(function t(e, i, n) {
var a = this;
m(this, t), this.taInstance = e, this.config = i || {}, this.config.appShow && (k.extend(e = {}, this.config.properties), 
k.isFunction(this.config.callback) && k.extend(e, this.config.callback("appShow")), 
this.taInstance._internalTrack("$MPShow", e)), this.config.appHide && this.taInstance.timeEvent("$MPHide"), 
n.onShow(function() {
var t;
a.config.appHide && a.taInstance.timeEvent("$MPHide"), a.config.appShow && (k.extend(t = {}, a.config.properties), 
k.isFunction(a.config.callback) && k.extend(t, a.config.callback("appShow")), a.taInstance._internalTrack("$MPShow", t));
}), n.onHide(function() {
var t;
a.config.appHide && (k.extend(t = {}, a.config.properties), k.isFunction(a.config.callback) && k.extend(t, a.config.callback("appHide")), 
a.taInstance._internalTrack("$MPHide", t));
});
}), _ = function() {
function t(e, i, n) {
m(this, t), this.api = e, this.config = i, this._config = n;
}
return s(t, [ {
key: "getConfig",
value: function() {
return this.config || {};
}
}, {
key: "getStorage",
value: function(t, e, i) {
t = localStorage.getItem(t);
if (!e) return k.isJSONString(t) ? JSON.parse(t) : {};
k.isJSONString(t) ? i(JSON.parse(t)) : i({});
}
}, {
key: "setStorage",
value: function(t, e) {
localStorage.setItem(t, e);
}
}, {
key: "getSystemInfo",
value: function(t) {
var e = this._config.mpPlatform;
this.api.getSystemInfo({
success: function(i) {
i.mp_platform = e, t.success(i);
},
complete: function() {
t.complete();
}
});
}
}, {
key: "getQuickDevice",
value: function(t) {
var e = {
os_name: "android",
android_id: "",
imei: "",
oaid: "",
mac: "",
android_version: "",
api_version: 0,
rom: {
gravityengine_qg_huawei_game: "EMUI",
gravityengine_qg: "MIUI",
gravityengine_qg_oppo_game: "ColorOS",
gravityengine_qg_vivo_game: "FuntouchOS",
gravityengine_qg_mz_game: "Flyme"
}[t.platform],
rom_version: "",
phone_brand: "",
phone_model: ""
}, i = this;
this.api.getSystemInfo({
success: function(n) {
function a() {
t.success(e);
}
e.android_version = n.system, e.api_version = n.platformVersionCode, e.rom_version = n.COREVersion, 
e.phone_brand = n.brand, e.phone_model = n.model, i.api.getDeviceId ? i.api.getDeviceId({
success: function(t) {
e.android_id = t.deviceId, e.imei = t.deviceId, e.oaid = t.deviceId, a();
}
}) : i.api.getOAID ? i.api.getOAID({
success: function(t) {
e.android_id = t.oaid, e.imei = t.oaid, e.oaid = t.oaid, a();
}
}) : a();
}
});
}
}, {
key: "getNetworkType",
value: function(t) {
this.api.getNetworkType({
success: function(e) {
t.success(e);
},
complete: function() {
t.complete();
}
});
}
}, {
key: "onNetworkStatusChange",
value: function(t) {
this.api.onNetworkStatusChange({
callback: function(e) {
t(e);
}
});
}
}, {
key: "request",
value: function(t) {
var e = {}, i = new XMLHttpRequest();
if (i.open(t.method, t.url), t.header) for (var n in t.header) i.setRequestHeader(n, t.header[n]);
return i.onreadystatechange = function() {
console.log("1 http res:", i.readyState, i.status);
4 === i.readyState && 200 === i.status ? (e.statusCode = 200, k.isJSONString(i.responseText) && (e.data = JSON.parse(i.responseText)), 
t.success(e)) : 200 !== i.status && (e.errMsg = "network error", t.fail(e));
}, i.ontimeout = function() {
e.errMsg = "timeout", t.fail(e);
}, i.send(t.data), i;
}
}, {
key: "initAutoTrackInstance",
value: function(t, e) {
return new G(t, e.autoTrack, this.api);
}
}, {
key: "setGlobal",
value: function(t, e) {
globalThis[e] = t;
}
}, {
key: "getAppOptions",
value: function() {
return this.api.getLaunchOptionsSync();
}
}, {
key: "showToast",
value: function(t) {
this.api.showToast({
title: t,
icon: "none",
duration: 2e3
});
}
} ], [ {
key: "createInstance",
value: function() {
return this._createInstance("R_CURRENT_PLATFORM");
}
}, {
key: "_createInstance",
value: function(e) {
switch (e) {
case "oppo":
return new t(qg, {
persistenceName: "gravityengine",
persistenceNameOld: "gravityengine_qg_oppo_game"
}, {
mpPlatform: "oppo_qg"
});

case "huawei":
return new t(hbs, {
persistenceName: "gravityengine",
persistenceNameOld: "gravityengine_qg_huawei_game"
}, {
mpPlatform: "huawei_qg"
});

case "mz":
return new t(qg, {
persistenceName: "gravityengine",
persistenceNameOld: "gravityengine_qg_mz_game"
}, {
mpPlatform: "mz"
});

case "xiaomi":
return new t(qg, {
persistenceName: "gravityengine",
persistenceNameOld: "gravityengine_qg"
}, {
mpPlatform: "xiaomi"
});
}
}
} ]), t;
}(), b = function() {
function t() {
m(this, t);
}
return s(t, null, [ {
key: "createInstance",
value: function() {
var t, e = Object.freeze({
WECHAT_GAME: 104,
QQ_PLAY: 105,
BAIDU_GAME: 107,
VIVO_GAME: 108,
OPPO_GAME: 109,
HUAWEI_GAME: 110,
XIAOMI_GAME: 111,
BYTEDANCE_GAME: 117,
QTT_GAME: 116,
LINKSURE: 119,
ALIPAY_GAME: 113,
WECHAT_MINI_GAME: "WECHAT_GAME",
BAIDU_MINI_GAME: "BAIDU_MINI_GAME",
XIAOMI_QUICK_GAME: "XIAOMI_QUICK_GAME",
OPPO_MINI_GAME: "OPPO_MINI_GAME",
VIVO_MINI_GAME: "VIVO_MINI_GAME",
HUAWEI_QUICK_GAME: "HUAWEI_QUICK_GAME",
BYTEDANCE_MINI_GAME: "BYTEDANCE_MINI_GAME",
QTT_MINI_GAME: "QTT_MINI_GAME",
LINKSURE_MINI_GAME: "LINKSURE_MINI_GAME",
ALIPAY_MINI_GAME: "ALIPAY_MINI_GAME"
});
return cc.sys.platform === e.WECHAT_GAME || cc.sys.platform === e.WECHAT_MINI_GAME ? h._createInstance("wechat_mg") : cc.sys.platform === e.BAIDU_GAME || cc.sys.platform === e.BAIDU_MIN_GAME ? h._createInstance("baidu_mg") : cc.sys.platform === e.VIVO_GAME || cc.sys.platform === e.VIVO_MINI_GAME ? v.createInstance() : cc.sys.platform === e.QQ_PLAY ? h._createInstance("qq_mg") : cc.sys.platform === e.OPPO_GAME || cc.sys.platform === e.OPPO_MINI_GAME ? _._createInstance("oppo") : cc.sys.platform === e.HUAWEI_GAME || cc.sys.platform === e.HUAWEI_QUICK_GAME ? _._createInstance("huawei") : cc.sys.platform === e.XIAOMI_GAME || cc.sys.platform === e.XIAOMI_QUICK_GAME ? _._createInstance("xiaomi") : cc.sys.platform === e.ALIPAY_GAME || cc.sys.platform === e.ALIPAY_MINI_GAME ? h._createInstance("ali_mg") : cc.sys.platform === e.BYTEDANCE_GAME || cc.sys.platform === e.BYTEDANCE_MINI_GAME ? h._createInstance("tt_mg") : ((t = y.createInstance())._sysCallback = function() {
return {
system: cc.sys.os.replace(" ", "") + " " + cc.sys.osVersion
};
}, t.getNetworkType = function(t) {
var e = {};
switch (cc.sys.getNetworkType()) {
case cc.sys.NetworkType.LAN:
e.networkType = "WIFI";
break;

case cc.sys.NetworkType.WWAN:
e.networkType = "WWAN";
break;

default:
e.networkType = "NONE";
}
t.success(e), t.complete();
}, t.getSystemInfo = function(e) {
var i = {
mp_platform: cc.sys.platform.toString(),
system: t._getOs(),
screenWidth: window.screen.width,
screenHeight: window.screen.height
};
t._sysCallback && (i = k.extend(i, t._sysCallback(e))), e.success(i), e.complete();
}, t);
}
} ]), t;
}(), w = function() {
function t() {
m(this, t);
}
return s(t, null, [ {
key: "_getCurrentPlatform",
value: function() {
return this.currentPlatform || (this.currentPlatform = b.createInstance());
}
}, {
key: "getConfig",
value: function() {
return this._getCurrentPlatform().getConfig();
}
}, {
key: "getStorage",
value: function(t, e, i) {
return this._getCurrentPlatform().getStorage(t, e, i);
}
}, {
key: "setStorage",
value: function(t, e) {
return this._getCurrentPlatform().setStorage(t, e);
}
}, {
key: "getSystemInfo",
value: function(t) {
return this._getCurrentPlatform().getSystemInfo(t);
}
}, {
key: "getNetworkType",
value: function(t) {
return this._getCurrentPlatform().getNetworkType(t);
}
}, {
key: "getQuickDevice",
value: function(t) {
return this._getCurrentPlatform().getQuickDevice(t);
}
}, {
key: "onNetworkStatusChange",
value: function(t) {
this._getCurrentPlatform().onNetworkStatusChange(t);
}
}, {
key: "request",
value: function(t) {
return this._getCurrentPlatform().request(t);
}
}, {
key: "initAutoTrackInstance",
value: function(t, e) {
return this._getCurrentPlatform().initAutoTrackInstance(t, e);
}
}, {
key: "setGlobal",
value: function(t, e) {
t && e && this._getCurrentPlatform().setGlobal(t, e);
}
}, {
key: "getAppOptions",
value: function(t) {
return this._getCurrentPlatform().getAppOptions(t);
}
}, {
key: "showDebugToast",
value: function(t) {
this._getCurrentPlatform().showToast(t);
}
} ]), t;
}(), k = {}, C = Array.prototype, A = Object.prototype, S = C.slice, B = A.toString, I = Object.prototype.hasOwnProperty, N = C.forEach, T = (A = Array.isArray, 
{});
function j() {
return new RegExp(/(.*?)\.?([^.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
}
function L(t, e) {
var i = t.charAt(0);
e = e.split(i);
return i === t ? e : e[(t = parseInt(t.substring(1), 10)) < 0 ? e.length + t : t - 1];
}
function M(t, e) {
for (var i, n = t.charAt(0), a = e.split("&"), o = [], m = {}, r = t.substring(1), s = 0, l = a.length; s < l; s++) if ("" !== (o = (o = a[s].match(/(.*?)=(.*)/)) || [ a[s], a[s], "" ])[1].replace(/\s/g, "")) {
if (o[2] = (i = o[2] || "", k.decodeURIComponent(i.replace(/\+/g, " "))), r === o[1]) return o[2];
(i = o[1].match(/(.*)\[([0-9]+)\]/)) ? (m[i[1]] = m[i[1]] || [], m[i[1]][i[2]] = o[2]) : m[o[1]] = o[2];
}
return n === t ? m : m[r];
}
k.isNumber = function(t) {
return "number" == typeof t ? 0 == t - t : "string" == typeof t && "" !== t.trim() && (Number.isFinite ? Number.isFinite(+t) : isFinite(+t));
}, k.each = function(t, e, i) {
if (null == t) return !1;
if (N && t.forEach === N) t.forEach(e, i); else if (t.length === +t.length) {
for (var n = 0, a = t.length; n < a; n++) if (n in t && e.call(i, t[n], n, t) === T) return !1;
} else for (var o in t) if (I.call(t, o) && e.call(i, t[o], o, t) === T) return !1;
}, k.sleep = function(t) {
return new Promise(function(e) {
return setTimeout(e, t);
});
}, k.extend = function(t) {
return k.each(S.call(arguments, 1), function(e) {
for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
}), t;
}, k.extend2Layers = function(t) {
return k.each(S.call(arguments, 1), function(e) {
for (var i in e) void 0 !== e[i] && (k.isObject(e[i]) && k.isObject(t[i]) ? k.extend(t[i], e[i]) : t[i] = e[i]);
}), t;
}, k.isArray = A || function(t) {
return "[object Array]" === B.call(t);
}, k.isFunction = function(t) {
try {
return "function" == typeof t;
} catch (t) {
return !1;
}
}, k.isPromise = function(t) {
return "[object Promise]" === B.call(t) && null != t;
}, k.isObject = function(t) {
return "[object Object]" === B.call(t) && null != t;
}, k.isEmptyObject = function(t) {
if (k.isObject(t)) {
for (var e in t) if (I.call(t, e)) return !1;
return !0;
}
return !1;
}, k.isUndefined = function(t) {
return void 0 === t;
}, k.isString = function(t) {
return "[object String]" === B.call(t);
}, k.isDate = function(t) {
return "[object Date]" === B.call(t);
}, k.isBoolean = function(t) {
return "[object Boolean]" === B.call(t);
}, k.isNumber = function(t) {
return "[object Number]" === B.call(t) && /[\d\.]+/.test(String(t));
}, k.isJSONString = function(t) {
try {
JSON.parse(t);
} catch (t) {
return !1;
}
return !0;
}, k.decodeURIComponent = function(t) {
var e = "";
try {
e = decodeURIComponent(t);
} catch (i) {
e = t;
}
return e;
}, k.encodeURIComponent = function(t) {
var e = "";
try {
e = encodeURIComponent(t);
} catch (i) {
e = t;
}
return e;
}, k.utf8Encode = function(t) {
for (var e, i = "", n = e = 0, a = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, o = 0; o < a; o++) {
var m = t.charCodeAt(o), r = null;
m < 128 ? e++ : r = 127 < m && m < 2048 ? String.fromCharCode(m >> 6 | 192, 63 & m | 128) : String.fromCharCode(m >> 12 | 224, m >> 6 & 63 | 128, 63 & m | 128), 
null !== r && (n < e && (i += t.substring(n, e)), i += r, n = e = o + 1);
}
return n < e && (i += t.substring(n, t.length)), i;
}, k.base64Encode = function(t) {
var e, i, n, a, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", m = 0, r = 0, s = "", l = [];
if (!t) return t;
for (t = k.utf8Encode(t); e = (a = t.charCodeAt(m++) << 16 | t.charCodeAt(m++) << 8 | t.charCodeAt(m++)) >> 12 & 63, 
i = a >> 6 & 63, n = 63 & a, l[r++] = o.charAt(a >> 18 & 63) + o.charAt(e) + o.charAt(i) + o.charAt(n), 
m < t.length; ) ;
switch (s = l.join(""), t.length % 3) {
case 1:
s = s.slice(0, -2) + "==";
break;

case 2:
s = s.slice(0, -1) + "=";
}
return s;
}, k.encodeDates = function(t) {
return k.each(t, function(e, i) {
if (k.isDate(e)) t[i] = k.formatDate(e); else if (k.isObject(e)) t[i] = k.encodeDates(e); else if (k.isArray(e)) for (var n = 0; n < e.length; n++) k.isDate(e[n]) && (t[i][n] = k.formatDate(e[n]));
}), t;
}, k.formatDate = function(t) {
function e(t) {
return t < 10 ? "0" + t : t;
}
return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + "." + ((t = t.getMilliseconds()) < 100 && 9 < t ? "0" + t : t < 10 ? "00" + t : t);
}, k.searchObjDate = function(t) {
try {
(k.isObject(t) || k.isArray(t)) && k.each(t, function(e, i) {
k.isObject(e) || k.isArray(e) ? k.searchObjDate(t[i]) : k.isDate(e) && (t[i] = k.formatDate(e));
});
} catch (t) {
O.warn(t);
}
}, k.UUID = function() {
var t = new Date().getTime();
return String(Math.random()).replace(".", "").slice(1, 11) + "-" + t;
}, k.UUIDv4 = function() {
return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
var e = 16 * Math.random() | 0;
return ("x" === t ? e : 3 & e | 8).toString(16);
});
}, k.setMpPlatform = function(t) {
k.mpPlatform = t;
}, k.getMpPlatform = function() {
return k.mpPlatform;
}, k.createExtraHeaders = function() {
return {
"GE-Integration-Type": c,
"GE-Integration-Version": d,
"GE-Integration-Count": "1",
"GE-Integration-Extra": k.getMpPlatform()
};
}, k.checkAppId = function(t) {
if ("number" == typeof t) t = String(t); else if ("string" != typeof t) return "";
return t.replace(/\s*/g, "");
}, k.checkUrl = function(t) {
return t = t.replace(/\s*/g, ""), k.url("basic", t);
}, k.url = function(t, e) {
var i, n = {};
if ("tld?" === t) return j();
if (e = e || window.location.toString(), !t) return e;
if (t = t.toString(), e.match(/^mailto:([^/].+)/)) i = e.match(/^mailto:([^/].+)/), 
n.protocol = "mailto", n.email = i[1]; else {
if ((e = e.match(/(.*?)\/#!(.*)/) ? (i = e.match(/(.*?)\/#!(.*)/))[1] + i[2] : e).match(/(.*?)#(.*)/) && (i = e.match(/(.*?)#(.*)/), 
n.hash = i[2], e = i[1]), n.hash && t.match(/^#/)) return M(t, n.hash);
if (e.match(/(.*?)\?(.*)/) && (i = e.match(/(.*?)\?(.*)/), n.query = i[2], e = i[1]), 
n.query && t.match(/^\?/)) return M(t, n.query);
if (e.match(/(.*?):?\/\/(.*)/) && (i = e.match(/(.*?):?\/\/(.*)/), n.protocol = i[1].toLowerCase(), 
e = i[2]), e.match(/(.*?)(\/.*)/) && (i = e.match(/(.*?)(\/.*)/), n.path = i[2], 
e = i[1]), n.path = (n.path || "").replace(/^([^/])/, "/$1").replace(/\/$/, ""), 
(t = t.match(/^[-0-9]+$/) ? t.replace(/^([^/])/, "/$1") : t).match(/^\//)) return L(t, n.path.substring(1));
if ((i = (i = L("/-1", n.path.substring(1))) && i.match(/(.*?)\.(.*)/)) && (n.file = i[0], 
n.filename = i[1], n.fileext = i[2]), e.match(/(.*):([0-9]+)$/) && (i = e.match(/(.*):([0-9]+)$/), 
n.port = i[2], e = i[1]), e.match(/(.*?)@(.*)/) && (i = e.match(/(.*?)@(.*)/), n.auth = i[1], 
e = i[2]), n.auth && (i = n.auth.match(/(.*):(.*)/), n.user = i ? i[1] : n.auth, 
n.pass = i ? i[2] : void 0), n.hostname = e.toLowerCase(), "." === t.charAt(0)) return L(t, n.hostname);
j() && (i = n.hostname.match(j())) && (n.tld = i[3], n.domain = i[2] ? i[2] + "." + i[3] : void 0, 
n.sub = i[1] || void 0);
e = n.port ? ":" + n.port : "";
n.protocol = n.protocol || window.location.protocol.replace(":", ""), n.port = n.port || ("https" === n.protocol ? "443" : "80"), 
n.protocol = n.protocol || ("443" === n.port ? "https" : "http"), n.basic = n.protocol + "://" + n.hostname + e;
}
return t in n ? n[t] : "{}" === t ? n : "";
}, k.createString = function(t) {
for (var e = t, i = Math.random().toString(36).substr(2); i.length < e; ) i += Math.random().toString(36).substr(2);
return i.substr(0, t);
}, k.createAesKey = function() {
return k.createString(16);
}, k.setQuery = function(t) {
if (!k.isObject(t)) return "";
var e, i = w.getConfig().persistenceNameOld.includes("GravityEngine_ali"), n = [];
for (e in t) (i || t.hasOwnProperty(e)) && n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
return n.join("&");
}, k.generateEncryptyData = function(t, e) {
if (void 0 !== e) {
var i = e.publicKey;
e = e.version;
if (void 0 !== i && void 0 !== e && "undefined" != typeof CryptoJS && "undefined" != typeof JSEncrypt) {
var n = k.createAesKey();
try {
var a = CryptoJS.enc.Utf8.parse(n), o = CryptoJS.enc.Utf8.parse(JSON.stringify(t)), m = k.isUndefined(CryptoJS.pad.Pkcs7) ? CryptoJS.pad.PKCS7 : CryptoJS.pad.Pkcs7, r = CryptoJS.AES.encrypt(o, a, {
mode: CryptoJS.mode.ECB,
padding: m
}).toString(), s = new JSEncrypt(), l = (s.setPublicKey(i), s.encrypt(n));
return !1 === l ? (O.warn("私钥加密失败，返回原数据"), t) : {
pkv: e,
ekey: l,
payload: r
};
} catch (t) {
O.warn("数据加密失败，返回原数据: " + t);
}
}
}
return t;
};
var O = "object" === n(O) ? O : {}, F = (O.info = function() {
if ("object" === ("undefined" == typeof console ? "undefined" : n(console)) && console.log && O.enabled) try {
return console.log.apply(console, arguments);
} catch (t) {
console.log(arguments[0]);
}
}, O.warn = function() {
if ("object" === ("undefined" == typeof console ? "undefined" : n(console)) && console.log && O.enabled) try {
return console.warn.apply(console, arguments);
} catch (t) {
console.warn(arguments[0]);
}
}, /^\$?[a-zA-Z][a-zA-Z0-9_]{0,49}$/), E = function() {
function t() {
m(this, t);
}
return s(t, null, [ {
key: "stripProperties",
value: function(t) {
return k.isObject(t) && k.each(t, function(t, e) {
k.isString(t) || k.isNumber(t) || k.isDate(t) || k.isBoolean(t) || k.isArray(t) || k.isObject(t) || O.warn("Your data -", e, t, "- format does not meet requirements and may not be stored correctly. Attribute values only support String, Number, Date, Boolean, Array, Object");
}), t;
}
}, {
key: "_checkPropertiesKey",
value: function(t) {
var e = !0;
return k.each(t, function(t, i) {
F.test(i) || (O.warn("Invalid KEY: " + i), e = !1);
}), e;
}
}, {
key: "event",
value: function(t) {
return !(!k.isString(t) || !F.test(t)) || (O.warn("Check the parameter format. The eventName must start with an English letter and contain no more than 50 characters including letters, digits, and underscores: " + t), 
!1);
}
}, {
key: "propertyName",
value: function(t) {
return !(!k.isString(t) || !F.test(t)) || (O.warn("Check the parameter format. PropertyName must start with a letter and contain letters, digits, and underscores (_). The value is a string of no more than 50 characters: " + t), 
!1);
}
}, {
key: "properties",
value: function(t) {
return this.stripProperties(t), !(t && (k.isObject(t) ? !this._checkPropertiesKey(t) && (O.warn("Check the parameter format. The properties key must start with a letter, contain digits, letters, and underscores (_), and contain a maximum of 50 characters"), 
1) : (O.warn("properties can be none, but it must be an object"), 1)));
}
}, {
key: "propertiesMust",
value: function(t) {
return this.stripProperties(t), void 0 === t || !k.isObject(t) || k.isEmptyObject(t) ? (O.warn("properties must be an object with a value"), 
!1) : !!this._checkPropertiesKey(t) || (O.warn("Check the parameter format. The properties key must start with a letter, contain digits, letters, and underscores (_), and contain a maximum of 50 characters"), 
!1);
}
}, {
key: "userId",
value: function(t) {
return !(!k.isString(t) || !/^.{1,64}$/.test(t)) || (O.warn("The user ID must be a string of less than 64 characters and cannot be null"), 
!1);
}
}, {
key: "userAddProperties",
value: function(t) {
if (!this.propertiesMust(t)) return !1;
for (var e in t) if (!k.isNumber(t[e])) return O.warn("The attributes of userAdd need to be Number"), 
!1;
return !0;
}
}, {
key: "userAppendProperties",
value: function(t) {
if (!this.propertiesMust(t)) return !1;
for (var e in t) if (!k.isArray(t[e])) return O.warn("The attribute of userAppend must be Array"), 
!1;
return !0;
}
} ]), t;
}(), D = function() {
function t(e, i, n, a, o, r) {
m(this, t), this.data = e, this.serverUrl = i, this.callback = r, this.debugMode = o, 
this.tryCount = k.isNumber(n) ? n : 1, this.permissionTryCount = 6, this.timeout = k.isNumber(a) ? a : 3e3, 
this.taClassName = "HttpTask";
}
return s(t, [ {
key: "run",
value: function() {
var t = this, e = k.createExtraHeaders(), i = (e["content-type"] = "application/json", 
"debug" === this.debugMode && (e["Turbo-Debug-Mode"] = 1), w.request({
url: this.serverUrl,
method: "POST",
data: this.data,
header: e,
success: function(e) {
var i;
0 === (null == e || null == (i = e.data) ? void 0 : i.code) ? t.onSuccess(e) : t.onFailed(e);
},
fail: function(e) {
t.onFailed(e);
}
}));
setTimeout(function() {
(k.isObject(i) || k.isPromise(i)) && k.isFunction(i.abort) && i.abort();
}, this.timeout);
}
}, {
key: "onSuccess",
value: function(t) {
var e, i;
200 === t.statusCode ? (i = "Data Verified", null != t && null != (e = t.data) && null != (e = e.extra) && null != (e = e.errors) && e.length && (i = t.data.extra.errors), 
this.callback({
code: null == t || null == (e = t.data) ? void 0 : e.code,
msg: i
})) : this.callback({
code: (null == t ? void 0 : t.statusCode) || -3,
msg: t.statusCode
});
}
}, {
key: "onFailed",
value: function(t) {
var e, i = this;
0 < --this.tryCount ? setTimeout(function() {
i.run();
}, 1e3) : this.callback({
code: -3,
msg: "".concat(null == t || null == (e = t.data) ? void 0 : e.msg, "：").concat(null == t || null == (e = t.data) || null == (e = e.extra) ? void 0 : e.error)
});
}
} ]), t;
}(), R = new (function() {
function t() {
m(this, t), this.items = [], this.isRunning = !1, this.showDebug = !1;
}
return s(t, [ {
key: "enqueue",
value: function(t, e, i) {
var n = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3], a = "debug" === i.debugMode, o = this;
t = new D(JSON.stringify(t), e, i.maxRetries, i.sendTimeout, i.debugMode, function(t) {
o.isRunning = !1, k.isFunction(i.callback) && i.callback(t), o._runNext(a), a && O.info("code ".concat(t.code, " and msg is,"), t.msg);
});
!0 === n ? (this.items.push(t), this._runNext(a)) : t.run();
}
}, {
key: "_dequeue",
value: function() {
return this.items.shift();
}
}, {
key: "_runNext",
value: function(t) {
if (0 < this.items.length && !this.isRunning) if (this.isRunning = !0, t) this._dequeue().run(); else {
for (var e = this.items.splice(0, this.items.length), i = (t = e[0], JSON.parse(t.data)), n = 1; n < e.length; n++) {
var a = e[n];
a = JSON.parse(a.data);
i.event_list = i.event_list.concat(a.event_list);
}
var o = new Date().getTime();
i.$flush_time = o, new D(JSON.stringify(i), t.serverUrl, t.tryCount, t.timeout, null == t ? void 0 : t.debugMode, t.callback).run();
}
}
} ]), t;
}())(), P = {
name: "GravityEngine",
is_plugin: !1,
maxRetries: 3,
sendTimeout: 5e3,
enablePersistence: !0,
asyncPersistence: !1,
strict: !1,
debugMode: "none"
}, V = {
properties: {
$lib_version: d,
$lib: "cocoscreator",
$scene: "",
$today_first_scene: ""
},
getSystemInfo: function(t) {
var e = this;
w.onNetworkStatusChange(function(t) {
e.properties.$network_type = t.networkType;
}), w.getNetworkType({
success: function(t) {
e.properties.$network_type = t.networkType;
},
complete: function() {
w.getSystemInfo({
success: function(t) {
O.info(JSON.stringify(t, null, 4));
var i = {
$manufacturer: t.brand,
$brand: t.brand,
$model: t.model,
$screen_width: Number(t.screenWidth),
$screen_height: Number(t.screenHeight),
$system_language: t.language,
$os: t.platform,
$os_version: t.system
};
k.extend(e.properties, i), k.setMpPlatform(t.mp_platform);
},
complete: function() {
t();
}
});
}
});
}
}, U = function() {
function t(e, i) {
var n = this;
m(this, t), this.enabled = e.enablePersistence, this.enabled ? (e.isChildInstance ? (this.name = e.persistenceName + "_" + e.name, 
this.nameOld = e.persistenceNameOld + "_" + e.name) : (this.name = e.persistenceName, 
this.nameOld = e.persistenceNameOld), e.asyncPersistence ? (this._state = {}, w.getStorage(this.name, !0, function(t) {
k.isEmptyObject(t) ? w.getStorage(n.nameOld, !0, function(t) {
n._state = k.extend2Layers({}, t, n._state), n._init(e, i), n._save();
}) : (n._state = k.extend2Layers({}, t, n._state), n._init(e, i), n._save());
})) : (this._state = w.getStorage(this.name) || {}, k.isEmptyObject(this._state) && (this._state = w.getStorage(this.nameOld) || {}), 
this._init(e, i))) : (this._state = {}, this._init(e, i));
}
return s(t, [ {
key: "_init",
value: function(t, e) {
this.getDistinctId() || this.setDistinctId(k.UUID()), t.isChildInstance || this.getDeviceId() || this._setDeviceId(k.UUID()), 
this.initComplete = !0, "function" == typeof e && e();
e = null == (t = w.getStorage(this.name)) ? void 0 : t.current_first_scene_date;
var i = null == t ? void 0 : t.current_first_scene, n = new Date().toLocaleDateString();
i && e && e === n ? V.properties.$today_first_scene = String(null == t ? void 0 : t.current_first_scene) : (t = String((null == (i = w.getAppOptions()) ? void 0 : i.scene) || (null == (e = w.getAppOptions()) ? void 0 : e.from)), 
V.properties.$today_first_scene = t, this._state.current_first_scene = t, this._state.current_first_scene_date = n), 
this._save();
}
}, {
key: "_save",
value: function() {
this.enabled && this.initComplete && w.setStorage(this.name, JSON.stringify(this._state));
}
}, {
key: "_set",
value: function(t, e) {
var i, a = this;
"string" == typeof t ? (i = {})[t] = e : "object" === n(t) && (i = t), k.each(i, function(t, e) {
a._state[e] = t;
}), this._save();
}
}, {
key: "_get",
value: function(t) {
return this._state[t];
}
}, {
key: "setEventTimer",
value: function(t, e) {
var i = this._state.event_timers || {};
i[t] = e, this._set("event_timers", i);
}
}, {
key: "removeEventTimer",
value: function(t) {
var e = (this._state.event_timers || {})[t];
return k.isUndefined(e) || (delete this._state.event_timers[t], this._save()), e;
}
}, {
key: "getDeviceId",
value: function() {
return this._state.device_id;
}
}, {
key: "_setDeviceId",
value: function(t) {
this.getDeviceId() ? O.warn("cannot modify the device id.") : this._set("device_id", t);
}
}, {
key: "getDistinctId",
value: function() {
return this._state.distinct_id;
}
}, {
key: "setDistinctId",
value: function(t) {
this._set("distinct_id", t);
}
}, {
key: "getAccountId",
value: function() {
return this._state.account_id;
}
}, {
key: "setAccountId",
value: function(t) {
this._set("account_id", t);
}
}, {
key: "getSuperProperties",
value: function() {
return this._state.props || {};
}
}, {
key: "setSuperProperties",
value: function(t, e) {
e = e ? t : k.extend(this.getSuperProperties(), t);
this._set("props", e);
}
} ]), t;
}();
function q() {
return w.getConfig().persistenceNameOld;
}
C = function() {
function t(e) {
m(this, t), e.appId = k.checkAppId((null == e ? void 0 : e.clientId) || ""), e.accessToken = e.accessToken, 
e.accessToken || console.warn("GravityAnalytics: accessToken must be required"), 
e.serverUrl = "".concat(u, "/event/collect/?access_token=").concat(e.accessToken);
var i = k.extend({}, P, w.getConfig());
k.isObject(e) ? this.config = k.extend(i, e) : this.config = i, this._init(this.config);
}
var e, n, a;
return s(t, [ {
key: "_init",
value: function(t) {
var e = this, i = (this.name = t.name, this.appId = t.clientId, this.accessToken = t.accessToken, 
t.serverUrl || t.server_url);
("GravityEngine_wechat_game" === (i = (this.serverUrl = i, this.serverDebugUrl = i, 
this.configUrl = i + "/config", this.autoTrackProperties = {}, this._queue = [], 
this.config.syncBatchSize = 100, this.config.syncInterval = 60, t.isChildInstance ? this._state = {} : (O.enabled = "debug" === t.debugMode, 
this.instances = [], this._state = {
getSystemInfo: !1,
initComplete: !1
}, V.getSystemInfo(function() {
e._updateState({
getSystemInfo: !0
});
}), w.setGlobal(this, this.name)), V.properties.$scene = String((null == (i = w.getAppOptions()) ? void 0 : i.scene) || (null == (i = w.getAppOptions()) ? void 0 : i.from)), 
this.store = new U(t, function() {
e.config.asyncPersistence && k.isFunction(e.config.persistenceComplete) && e.config.persistenceComplete(e), 
e._updateState();
}), this.enabled = !k.isBoolean(this.store._get("ge_enabled")) || this.store._get("ge_enabled"), 
this.isOptOut = !!k.isBoolean(this.store._get("ge_isOptOut")) && this.store._get("ge_isOptOut"), 
q())) || "GravityEngine_tt_game" === i || "GravityEngine_ali_game" === i || i.includes("gravityengine_qg")) && t.autoTrack.appLaunch && this.track("$MPLaunch", {
$url_query: k.setQuery(this.getQuery())
}), !t.isChildInstance && t.autoTrack && (this.autoTrack = w.initAutoTrackInstance(this, t));
}
}, {
key: "updateConfig",
value: function() {}
}, {
key: "initInstance",
value: function(e, i) {
if (!this.config.isChildInstance) return k.isString(e) && e !== this.name && k.isUndefined(this[e]) ? (i = new t(k.extend({}, this.config, {
enablePersistence: !1,
isChildInstance: !0,
name: e
}, i)), this[e] = i, this.instances.push(e), this[e]._state = this._state, i) : void O.warn("initInstance() failed due to the name is invalid: " + e);
O.warn("initInstance() cannot be called on child instance");
}
}, {
key: "lightInstance",
value: function(t) {
return this[t];
}
}, {
key: "_setAutoTrackProperties",
value: function(t) {
k.extend(this.autoTrackProperties, t);
}
}, {
key: "setupAndStart",
value: function(t) {
if (null != t && t.clientId && (this.config.appId = t.clientId, this.appId = t.clientId), 
this._state.initComplete) return !1;
this._updateState({
initComplete: !0
});
}
}, {
key: "_isReady",
value: function() {
return this._state.getSystemInfo && this._state.initComplete && this.store.initComplete && this.config.appId && this.config.accessToken;
}
}, {
key: "_updateState",
value: function(t) {
var e = this;
k.isObject(t) && k.extend(this._state, t), this._onStateChange(), k.each(this.instances, function(t) {
e[t]._onStateChange();
});
}
}, {
key: "_onStateChange",
value: function() {
var t = this;
this._isReady() && this._queue && 0 < this._queue.length && (k.each(this._queue, function(e) {
t[e[0]].apply(t, S.call(e[1]));
}), this._queue = []);
}
}, {
key: "_hasDisabled",
value: function() {
var t = !this.enabled || this.isOptOut;
return t && O.info("GravityEngine is Pause or Stop!"), t;
}
}, {
key: "_sendRequest",
value: function(t, e, i) {
var n, a;
this._hasDisabled() || (!k.isUndefined(this.config.disableEventList) && this.config.disableEventList.includes(t.eventName) ? O.info("disabled Event : " + t.eventName) : (e = k.isDate(e) ? e : new Date(), 
(e = {
event_list: [ {
type: t.type,
time: new Date(e).getTime()
} ]
}).event_list[0].event = t.eventName, "track" === t.type ? (e.event_list[0].properties = this.getSendProperties(), 
n = this.store.removeEventTimer(t.eventName), k.isUndefined(n) || (n = new Date().getTime() - n, 
86400 < (n = parseFloat((n / 1e3).toFixed(3))) ? n = 86400 : n < 0 && (n = 0), e.event_list[0].properties.$event_duration = n)) : e.event_list[0].properties = {}, 
k.isObject(t.properties) && !k.isEmptyObject(t.properties) && k.extend(e.event_list[0].properties, t.properties), 
k.searchObjDate(e.event_list[0]), e.client_id = this.appId, O.info(JSON.stringify(e, null, 4)), 
n = this.serverUrl, k.isBoolean(this.config.enableEncrypt) && 1 == this.config.enableEncrypt && (e.event_list[0] = k.generateEncryptyData(e.event_list[0], void 0)), 
i ? (i = new FormData(), "debug" === this.config.debugMode ? (i.append("source", "client"), 
i.append("appid", this.appId), i.append("deviceId", this.getDeviceId()), i.append("data", JSON.stringify(e.event_list[0]))) : (a = k.base64Encode(JSON.stringify(e)), 
i.append("data", a)), navigator.sendBeacon(n, i), k.isFunction(t.onComplete) && t.onComplete({
statusCode: 200
})) : R.enqueue(e, n, {
maxRetries: this.config.maxRetries,
sendTimeout: this.config.sendTimeout,
callback: t.onComplete,
debugMode: this.config.debugMode
})));
}
}, {
key: "_isObjectParams",
value: function(t) {
return k.isObject(t) && k.isFunction(t.onComplete);
}
}, {
key: "track",
value: function(t, e, i, n) {
var a;
this._hasDisabled() || (this._isObjectParams(t) && (t = (a = t).eventName, e = a.properties, 
i = a.time, n = a.onComplete), E.event(t) && E.properties(e) || !this.config.strict ? this._internalTrack(t, e, i, n) : k.isFunction(n) && n({
code: -1,
msg: "invalid parameters"
}));
}
}, {
key: "_internalTrack",
value: function(t, e, i, n, a) {
this._hasDisabled() || (i = k.isDate(i) ? i : new Date(), this._isReady() ? this._sendRequest({
type: "track",
eventName: t,
properties: e,
onComplete: n
}, i, a) : this._queue.push([ "_internalTrack", [ t, e, i, n ] ]));
}
}, {
key: "userSet",
value: function(t, e, i) {
var n;
this._hasDisabled() || (this._isObjectParams(t) && (t = (n = t).properties, e = n.time, 
i = n.onComplete), E.propertiesMust(t) || !this.config.strict ? (e = k.isDate(e) ? e : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_set",
properties: t,
onComplete: i
}, e) : this._queue.push([ "userSet", [ t, e, i ] ])) : (O.warn("calling userSet failed due to invalid arguments"), 
k.isFunction(i) && i({
code: -1,
msg: "invalid parameters"
})));
}
}, {
key: "userSetOnce",
value: function(t, e, i) {
var n;
this._hasDisabled() || (this._isObjectParams(t) && (t = (n = t).properties, e = n.time, 
i = n.onComplete), E.propertiesMust(t) || !this.config.strict ? (e = k.isDate(e) ? e : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_set_once",
properties: t,
onComplete: i
}, e) : this._queue.push([ "userSetOnce", [ t, e, i ] ])) : (O.warn("calling userSetOnce failed due to invalid arguments"), 
k.isFunction(i) && i({
code: -1,
msg: "invalid parameters"
})));
}
}, {
key: "userAdd",
value: function(t, e, i) {
var n;
this._hasDisabled() || (this._isObjectParams(t) && (t = (n = t).properties, e = n.time, 
i = n.onComplete), E.propertiesMust(t) || !this.config.strict ? (e = k.isDate(e) ? e : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_increment",
properties: t,
onComplete: i
}, e) : this._queue.push([ "userAdd", [ t, e, i ] ])) : (O.warn("calling userAdd failed due to invalid arguments"), 
k.isFunction(i) && i({
code: -1,
msg: "invalid parameters"
})));
}
}, {
key: "userNumberMax",
value: function(t, e, i) {
if (!this._hasDisabled()) {
var n, a, o;
for (a in this._isObjectParams(t) && (t = (n = t).properties, e = n.time, i = n.onComplete), 
t) if ("number" != typeof t[a]) return o = "The key ".concat(a, " must be type of number"), 
console.warn(o), void (k.isFunction(i) && i({
code: -1,
msg: o
}));
E.propertiesMust(t) || !this.config.strict ? (e = k.isDate(e) ? e : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_number_max",
properties: t,
onComplete: i
}, e) : this._queue.push([ "userNumberMax", [ t, e, i ] ])) : (O.warn("calling userNumberMax failed due to invalid arguments"), 
k.isFunction(i) && i({
code: -1,
msg: "invalid parameters"
}));
}
}
}, {
key: "userNumberMin",
value: function(t, e, i) {
if (!this._hasDisabled()) {
var n, a, o;
for (a in this._isObjectParams(t) && (t = (n = t).properties, e = n.time, i = n.onComplete), 
t) if ("number" != typeof t[a]) return o = "The key ".concat(a, " must be type of number"), 
console.warn(o), void (k.isFunction(i) && i({
code: -1,
msg: o
}));
E.propertiesMust(t) || !this.config.strict ? (e = k.isDate(e) ? e : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_number_min",
properties: t,
onComplete: i
}, e) : this._queue.push([ "userNumberMin", [ t, e, i ] ])) : (O.warn("calling userNumberMin failed due to invalid arguments"), 
k.isFunction(i) && i({
code: -1,
msg: "invalid parameters"
}));
}
}
}, {
key: "userDel",
value: function(t, e) {
var i, n = {};
this._hasDisabled() || (this._isObjectParams(n) && (n = (i = n).properties, t = i.time, 
e = i.onComplete), E.propertiesMust(n) || !this.config.strict ? (t = k.isDate(t) ? t : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_delete",
properties: n,
onComplete: e
}, t) : this._queue.push([ "userDel", [ n, t, e ] ])) : (O.warn("calling userDel failed due to invalid arguments"), 
k.isFunction(e) && e({
code: -1,
msg: "invalid parameters"
})));
}
}, {
key: "userAppend",
value: function(t, e, i) {
var n;
this._hasDisabled() || (this._isObjectParams(t) && (t = (n = t).properties, e = n.time, 
i = n.onComplete), E.propertiesMust(t) || !this.config.strict ? (e = k.isDate(e) ? e : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_append",
properties: t,
onComplete: i
}, e) : this._queue.push([ "userAppend", [ t, e, i ] ])) : (O.warn("calling userAppend failed due to invalid arguments"), 
k.isFunction(i) && i({
code: -1,
msg: "invalid parameters"
})));
}
}, {
key: "userUniqAppend",
value: function(t, e, i) {
var n;
this._hasDisabled() || (this._isObjectParams(t) && (t = (n = t).properties, e = n.time, 
i = n.onComplete), E.userAppendProperties(t) || !this.config.strict ? (e = k.isDate(e) ? e : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_uniq_append",
properties: t,
onComplete: i
}, e) : this._queue.push([ "userUniqAppend", [ t, e, i ] ])) : (O.warn("calling userAppend failed due to invalid arguments"), 
k.isFunction(i) && i({
code: -1,
msg: "invalid parameters"
})));
}
}, {
key: "userUnset",
value: function(t, e, i) {
var n;
t = l({}, t, null);
this._hasDisabled() || (this._isObjectParams(t) && (t = (n = t).properties, e = n.time, 
i = n.onComplete), E.propertiesMust(t) || !this.config.strict ? (e = k.isDate(e) ? e : new Date(), 
this._isReady() ? this._sendRequest({
type: "profile",
eventName: "profile_unset",
properties: t,
onComplete: i
}, e) : this._queue.push([ "userUnset", [ t, e, i ] ])) : (O.warn("calling userUnset failed due to invalid arguments"), 
k.isFunction(i) && i({
code: -1,
msg: "invalid parameters"
})));
}
}, {
key: "uploadQuickAppDeviceInfo",
value: function() {
var t = this;
return new Promise(function(e, n) {
var a;
w.getQuickDevice({
success: (a = o(i().mark(function a(o) {
var m, r;
return i().wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
return m = {
os_name: "android",
android_id: o.user,
imei: o.device,
oaid: o.device,
mac: o.mac,
android_version: o.system,
api_version: o.osVersionCode,
rom: o.vendorOsName,
rom_version: o.vendorOsVersion,
phone_brand: o.manufacturer,
phone_model: o.model
}, r = "".concat(u, "/user/device_info/?access_token=").concat(t.accessToken, "&client_id=").concat(t.appId), 
i.next = 4, t.sendNetWork(r, {
data: m
});

case 4:
return r = i.sent, i.abrupt("return", (0 === r.code ? e : n)(r));

case 6:
case "end":
return i.stop();
}
}, a);
})), function(t) {
return a.apply(this, arguments);
})
});
});
}
}, {
key: "uploadQuickGameDeviceInfo",
value: function() {
var t = this;
return new Promise(function(e, n) {
var a, m = q();
w.getQuickDevice({
platform: m,
success: (a = o(i().mark(function a(o) {
var m, r;
return i().wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
return m = o, r = "".concat(u, "/user/device_info/?access_token=").concat(t.accessToken, "&client_id=").concat(t.appId), 
i.next = 4, t.sendNetWork(r, {
data: m
});

case 4:
return r = i.sent, i.abrupt("return", (0 === r.code ? e : n)(r));

case 6:
case "end":
return i.stop();
}
}, a);
})), function(t) {
return a.apply(this, arguments);
})
});
});
}
}, {
key: "logoutEvent",
value: function() {
this.track("$MPLogout", {});
}
}, {
key: "loginEvent",
value: function() {
this.track("$MPLogin", {});
}
}, {
key: "registerEvent",
value: function() {
"GravityEngine_quick_mp" === q() ? this.track("$AppRegister", {}) : this.track("$MPRegister", {});
}
}, {
key: "payEvent",
value: function(t, e, i, n, a) {
if ("number" != typeof t) throw new Error("pay_amount must be a number");
if ("string" != typeof e) throw new Error("pay_type must be a string");
if ("string" != typeof i) throw new Error("order_id must be a string");
if ("string" != typeof n) throw new Error("pay_reason must be a string");
if ("string" != typeof a) throw new Error("pay_method must be a string");
this.track("$PayEvent", {
$pay_amount: t,
$pay_type: e,
$order_id: i,
$pay_reason: n,
$pay_method: a
});
}
}, {
key: "bindTAThirdPlatform",
value: function(t, e) {
if (!t && !e) throw new Error("taAccountId or taDistinctId must be required");
if (t && "string" != typeof t) throw new Error("taAccountId must be a string");
if (e && "string" != typeof e) throw new Error("taDistinctId must be a string");
this.track("$BindThirdPlatform", {
$third_platform_type: "ta",
$ta_account_id: t,
$ta_distinct_id: e
});
}
}, {
key: "adShowEvent",
value: function(t, e, i) {
var n = q(), a = "GravityEngine_ali_game" === n ? "alipay" : "wechat";
if ("GravityEngine_wechat" === n || "GravityEngine_wechat_game" === n || "GravityEngine_ali_game" === n) {
if ("string" != typeof t) throw new Error("ad_type must be a string");
if ("string" != typeof e) throw new Error("ad_unit_id must be a string");
n = {
$ad_type: t,
$ad_unit_id: e,
$adn_type: a
};
"[object Object]" === Object.prototype.toString.call(i) && Object.assign(n, i), 
this.track("$AdShow", n);
}
}
}, {
key: "getQuery",
value: function() {
try {
var t;
return null != w && w.getAppOptions && null != (t = w.getAppOptions()) && t.query && w.getAppOptions().query || {};
} catch (t) {
return {};
}
}
}, {
key: "sendNetWork",
value: function(t, e) {
var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "POST";
return new Promise(function(n, a) {
w.request({
url: t,
method: i,
data: "string" == typeof e ? e : JSON.stringify(e),
header: {
"content-type": "application/json"
},
success: function(t) {
200 === t.statusCode || 200 === t.status ? n(t.data) : a(t);
},
fail: function(t) {
a(t);
}
});
});
}
}, {
key: "_errorPromise",
value: function(t) {
return Promise.reject(new Error(t));
}
}, {
key: "initializeWithHistoryUserInfo",
value: (a = o(i().mark(function t() {
var e, n, a = arguments;
return i().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return e = 0 < a.length && void 0 !== a[0] ? a[0] : {}, n = 1 < a.length ? a[1] : void 0, 
t.abrupt("return", this.initialize(e, n));

case 3:
case "end":
return t.stop();
}
}, t, this);
})), function() {
return a.apply(this, arguments);
})
}, {
key: "initialize",
value: (n = o(i().mark(function t() {
var e, n, a = this, m = arguments;
return i().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return e = 0 < m.length && void 0 !== m[0] ? m[0] : {}, n = 1 < m.length ? m[1] : void 0, 
t.abrupt("return", new Promise(function() {
var t = o(i().mark(function t(m, r) {
return i().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
try {
w.getStorage("is_ge_registered", !0, function() {
var t = o(i().mark(function t(o) {
var s, l, p, d, c, y, f, x, h, g, v, G;
return i().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (l = "", a._state.initComplete ? null != e && e.name ? null != e && e.version || 0 === (null == e ? void 0 : e.version) ? k.isNumber(null == e ? void 0 : e.version) && "number" == typeof (null == e ? void 0 : e.version) ? void 0 !== n && ("[object Object]" !== Object.prototype.toString.call(n) ? l = "history_info must be type: Object" : null != n && n.company ? "string" != typeof n.company ? l = "history_info.company must be type: String" : null != n && n.create_time || 0 === n.create_time ? k.isNumber(n.create_time) && "number" == typeof n.create_time || (l = "history_info.create_time must be type: Number") : l = "history_info.create_time must be required" : l = "history_info.company must be required") : l = "version must be type: Number" : l = "version must be required" : l = "name must be required" : l = "initialize must be called after setupAndStart", 
l) return t.abrupt("return", r(l));
t.next = 4;
break;

case 4:
return s = a.getQuery(), l = q(), y = l.includes("GravityEngine_ali"), p = (null == e ? void 0 : e.channel) || "base_channel", 
y = {
client_id: a.appId,
name: e.name,
channel: y && null != s && s.channel ? s.channel : p,
version: e.version,
wx_openid: (null == e ? void 0 : e.openid) || (null == e ? void 0 : e.wx_openid) || "",
wx_unionid: (null == e ? void 0 : e.wx_unionid) || "",
promoted_object_id: (null == e ? void 0 : e.promoted_object_id) || "",
need_return_attribution: (null == e ? void 0 : e.enable_sync_attribution) || !1,
ad_data: s
}, n && (y.history_info = n), c = "".concat(u, "/user/initialize/?access_token=").concat(a.accessToken), 
t.next = 13, a.sendNetWork(c, y);

case 13:
if (0 !== (d = t.sent).code) return t.abrupt("return", r(d));
t.next = 16;
break;

case 16:
return "GravityEngine_quick_mp" === (c = q()) ? a.uploadQuickAppDeviceInfo() : c.includes("gravityengine_qg") && a.uploadQuickGameDeviceInfo(), 
y = V.properties, h = new Date(), g = h.getFullYear(), v = ("0" + (h.getMonth() + 1)).slice(-2), 
G = ("0" + h.getDate()).slice(-2), f = ("0" + h.getHours()).slice(-2), x = ("0" + h.getMinutes()).slice(-2), 
h = ("0" + h.getSeconds()).slice(-2), g = "".concat(g, "-").concat(v, "-").concat(G, " ").concat(f, ":").concat(x, ":").concat(h), 
"Y" !== o && (a.userSetOnce({
$channel: p,
$manufacturer: y.$manufacturer,
$model: y.$model,
$brand: y.$brand,
$os: y.$os,
$first_visit_time: g,
$first_scene: String(null == (v = w.getAppOptions()) ? void 0 : v.scene),
$gravity_referee_openid: (null == s ? void 0 : s.gravity_referee_openid) || void 0
}), G = k.setQuery(a.getQuery()), a.track("$MPLaunch", {
$url_query: G
}), a.track("$MPShow", {
$url_query: G
})), w.setStorage("is_ge_registered", JSON.stringify("Y")), t.abrupt("return", m(d));

case 30:
case "end":
return t.stop();
}
}, t);
}));
return function(e) {
return t.apply(this, arguments);
};
}());
} catch (t) {
r(t);
}

case 1:
case "end":
return t.stop();
}
}, t);
}));
return function(e, i) {
return t.apply(this, arguments);
};
}()));

case 3:
case "end":
return t.stop();
}
}, t);
})), function() {
return n.apply(this, arguments);
})
}, {
key: "queryUserInfo",
value: (e = o(i().mark(function t() {
var e = this;
return i().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (this._state.initComplete) {
t.next = 2;
break;
}
return t.abrupt("return", this._errorPromise("queryUserInfo must be called after setupAndStart"));

case 2:
return t.abrupt("return", new Promise(function() {
var t = o(i().mark(function t(n, a) {
var o;
return i().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return o = "".concat(u, "/user/get/?access_token=").concat(e.accessToken, "&client_id=").concat(e.appId), 
t.next = 3, e.sendNetWork(o, {}, "GET");

case 3:
return o = t.sent, t.abrupt("return", (0 === o.code ? n : a)(o));

case 5:
case "end":
return t.stop();
}
}, t);
}));
return function(e, i) {
return t.apply(this, arguments);
};
}()));

case 3:
case "end":
return t.stop();
}
}, t, this);
})), function() {
return e.apply(this, arguments);
})
}, {
key: "authorizeOpenID",
value: function(t) {
this.identify(t);
}
}, {
key: "identify",
value: function(t) {
if (!this._hasDisabled()) {
if ("number" == typeof t) t = String(t); else if ("string" != typeof t) return !1;
this.store.setDistinctId(t);
}
}
}, {
key: "getDistinctId",
value: function() {
return this.store.getDistinctId();
}
}, {
key: "login",
value: function(t) {
if (!this._hasDisabled()) {
if ("number" == typeof t) t = String(t); else if ("string" != typeof t) return !1;
this.store.setAccountId(t);
}
}
}, {
key: "getAccountId",
value: function() {
return this.store.getAccountId();
}
}, {
key: "logout",
value: function() {
this._hasDisabled() || this.store.setAccountId(null);
}
}, {
key: "setSuperProperties",
value: function(t) {
this._hasDisabled() || (E.propertiesMust(t) || !this.config.strict ? this.store.setSuperProperties(t) : O.warn("setSuperProperties parameter must be a valid property value"));
}
}, {
key: "registerApp",
value: function(t) {
this.setSuperProperties(t);
}
}, {
key: "clearSuperProperties",
value: function() {
this._hasDisabled() || this.store.setSuperProperties({}, !0);
}
}, {
key: "unsetSuperProperty",
value: function(t) {
var e;
this._hasDisabled() || k.isString(t) && (delete (e = this.getSuperProperties())[t], 
this.store.setSuperProperties(e, !0));
}
}, {
key: "getSuperProperties",
value: function() {
return this.store.getSuperProperties();
}
}, {
key: "getSendProperties",
value: function() {
try {
var t, e = k.extend({}, V.properties, this.autoTrackProperties, this.store.getSuperProperties(), this.dynamicProperties ? this.dynamicProperties() : {});
for (t in e) "string" == typeof e[t] && (e[t] = e[t].substring(0, 8192));
return e;
} catch (t) {
return {};
}
}
}, {
key: "getPresetProperties",
value: function() {
var t = V.properties, e = {}, i = t.$system_language;
i = (e.system_language = k.isUndefined(i) ? "" : i, t.$os), i = (e.os = k.isUndefined(i) ? "" : i, 
t.$screen_width), i = (e.screenWidth = k.isUndefined(i) ? 0 : i, t.$screen_height), 
i = (e.screenHeight = k.isUndefined(i) ? 0 : i, t.$network_type), i = (e.networkType = k.isUndefined(i) ? "" : i, 
t.$model), i = (e.deviceModel = k.isUndefined(i) ? "" : i, t.$os_version), i = (e.osVersion = k.isUndefined(i) ? "" : i, 
e.deviceId = this.getDeviceId(), 0 - new Date().getTimezoneOffset() / 60), i = (e.zoneOffset = i, 
t.$manufacturer), i = (e.manufacturer = k.isUndefined(i) ? "" : i, t.$manufacturer);
return e.brand = k.isUndefined(i) ? "" : i, e.toEventPresetProperties = function() {
var t;
return {
$app_id: this.appId,
$model: e.deviceModel,
$screen_width: e.screenWidth,
$screen_height: e.screenHeight,
$system_language: e.system_language,
$os: e.os,
$os_version: e.osVersion,
$network_type: e.networkType,
$manufacturer: e.manufacturer,
$brand: e.manufacturer,
$scene: String((null == (t = w.getAppOptions()) ? void 0 : t.scene) || (null == (t = w.getAppOptions()) ? void 0 : t.from))
};
}, e;
}
}, {
key: "setDynamicSuperProperties",
value: function(t) {
this._hasDisabled() || ("function" == typeof t ? E.properties(t()) || !this.config.strict ? this.dynamicProperties = t : O.warn("A dynamic public property must return a valid property value") : O.warn("setDynamicSuperProperties parameter must be a function type"));
}
}, {
key: "timeEvent",
value: function(t, e) {
this._hasDisabled() || (e = k.isDate(e) ? e : new Date(), this._isReady() ? E.event(t) || !this.config.strict ? this.store.setEventTimer(t, e.getTime()) : O.warn("calling timeEvent failed due to invalid eventName: " + t) : this._queue.push([ "timeEvent", [ t, e ] ]));
}
}, {
key: "getDeviceId",
value: function() {
return V.properties.$device_id;
}
}, {
key: "enableTracking",
value: function(t) {
this.enabled = t, this.store._set("ta_enabled", t);
}
}, {
key: "optOutTracking",
value: function() {
this.store.setSuperProperties({}, !0), this.store.setDistinctId(k.UUID()), this.store.setAccountId(null), 
this._queue.splice(0, this._queue.length), this.isOptOut = !0, this.store._set("ge_isOptOut", !0);
}
}, {
key: "optOutTrackingAndDeleteUser",
value: function() {
var t = new Date();
this._sendRequest({
type: "user_del"
}, t), this.optOutTracking();
}
}, {
key: "optInTracking",
value: function() {
this.isOptOut = !1, this.store._set("ge_isOptOut", !1);
}
}, {
key: "setTrackStatus",
value: function(t) {
switch (t) {
case "PAUSE":
this.eventSaveOnly = !1, this.optInTracking(), this.enableTracking(!1);
break;

case "STOP":
this.eventSaveOnly = !1, this.optOutTracking(!0);
break;

default:
this.eventSaveOnly = !1, this.optInTracking(), this.enableTracking(!0);
}
}
} ]), t;
}();
var z = {
name: "GravityEngine",
enableLog: !0,
enableNative: !1
};
A = function() {
function t(e) {
m(this, t), e.appId = k.checkAppId(e.clientId), e.accessToken = e.accessToken, e.appId ? e.accessToken || console.warn("GravityAnalytics: accessToken must be required") : console.warn("GravityAnalytics: clientId must be required"), 
e.serverUrl = "".concat(u, "/event/collect/?access_token=").concat(e.accessToken);
var i = k.extend({}, z, w.getConfig());
k.isObject(e) ? this.config = k.extend(i, e) : this.config = i, this._init(this.config);
}
var e;
return s(t, [ {
key: "_isNativePlatform",
value: function() {
return !(!this._isIOS() && !this._isAndroid() || !this.config.enableNative);
}
}, {
key: "_isIOS",
value: function() {
return !(!cc.sys.isNative || "iOS" !== cc.sys.os);
}
}, {
key: "_isAndroid",
value: function() {
return !(!cc.sys.isNative || "Android" !== cc.sys.os);
}
}, {
key: "_init",
value: function(t) {
this.name = t.name, this.appId = t.clientId, this.accessToken = t.accessToken;
var e = t.serverUrl || t.server_url;
this.serverUrl = e, this.serverDebugUrl = e + "/data_debug", this.configUrl = e + "/config", 
this._isNativePlatform() ? (this.initInstanceForNative(this.name, t, this.appId), 
this._readStorage(t)) : this.geJs = new GravityAnalyticsAPIForJS(t);
}
}, {
key: "_readStorage",
value: function(t) {
var e = this, i = t.persistenceName, n = t.persistenceNameOld;
t.isChildInstance && (i = t.persistenceName + "_" + t.name, n = t.persistenceNameOld + "_" + t.name), 
this._state = w.getStorage(i) || {}, k.isEmptyObject(this._state) && (this._state = w.getStorage(n) || {}), 
k.isEmptyObject(this._state) ? w.getStorage(i, !0, function(t) {
k.isEmptyObject(t) ? w.getStorage(n, !0, function(t) {
e._state = k.extend2Layers({}, t, e._state);
}) : e._state = k.extend2Layers({}, t, e._state), e._state.distinct_id && e.identifyForNative(e._state.distinct_id), 
e._state.account_id && e.loginForNative(e._state.account_id);
}) : (this._state.distinct_id && this.identifyForNative(this._state.distinct_id), 
this._state.account_id && this.loginForNative(this._state.account_id));
}
}, {
key: "initInstance",
value: function(t, e) {
return this._isNativePlatform() ? k.isUndefined(e) ? this[t] = new GravityAnalyticsAPI(this.config) : this[t] = new GravityAnalyticsAPI(e) : this[t] = this.geJs.initInstance(t, e), 
this[t];
}
}, {
key: "lightInstance",
value: function(t) {
return this[t];
}
}, {
key: "setupAndStart",
value: function() {
var t, e;
this._isNativePlatform() ? (t = window, e = this, t.__autoTrackCallback = function(t) {
return k.isFunction(e.config.autoTrack.callback) ? (t = e.config.autoTrack.callback(t), 
JSON.stringify(t)) : "{}";
}, this.startGravityAnalyticsForNative()) : this.geJs.setupAndStart();
}
}, {
key: "track",
value: function(t, e, i, n) {
this._isNativePlatform() ? this.trackForNative(t, e, i, this.appId) : this.geJs.track(t, e, i, n);
}
}, {
key: "initializeWithHistoryUserInfo",
value: (e = o(i().mark(function t() {
var e, n, a = arguments;
return i().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return e = 0 < a.length && void 0 !== a[0] ? a[0] : {}, n = 1 < a.length ? a[1] : void 0, 
t.abrupt("return", this.geJs.initializeWithHistoryUserInfo(e, n));

case 3:
case "end":
return t.stop();
}
}, t, this);
})), function() {
return e.apply(this, arguments);
})
}, {
key: "initialize",
value: function() {
var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = 1 < arguments.length ? arguments[1] : void 0;
if (!this._isNativePlatform()) return this.geJs.initialize(t, e);
}
}, {
key: "queryUserInfo",
value: function() {
if (!this._isNativePlatform()) return this.geJs.queryUserInfo();
}
}, {
key: "registerApp",
value: function(t) {
if (!this._isNativePlatform()) return this.geJs.registerApp(t);
}
}, {
key: "registerEvent",
value: function() {
if (!this._isNativePlatform()) return this.geJs.registerEvent();
}
}, {
key: "loginEvent",
value: function() {
if (!this._isNativePlatform()) return this.geJs.loginEvent();
}
}, {
key: "logoutEvent",
value: function() {
if (!this._isNativePlatform()) return this.geJs.logoutEvent();
}
}, {
key: "payEvent",
value: function(t, e, i, n, a) {
if (!this._isNativePlatform()) return this.geJs.payEvent(t, e, i, n, a);
}
}, {
key: "bindTAThirdPlatform",
value: function(t, e) {
if (!this._isNativePlatform()) return this.geJs.bindTAThirdPlatform(t, e);
}
}, {
key: "adShowEvent",
value: function(t, e, i) {
if (!this._isNativePlatform()) return this.geJs.adShowEvent(t, e, i);
}
}, {
key: "userSet",
value: function(t, e, i) {
this._isNativePlatform() ? this.userSetForNative(t, this.appId) : this.geJs.userSet(t, e, i);
}
}, {
key: "userSetOnce",
value: function(t, e, i) {
this._isNativePlatform() ? this.userSetOnceForNative(t, this.appId) : this.geJs.userSetOnce(t, e, i);
}
}, {
key: "userUnset",
value: function(t, e, i) {
this._isNativePlatform() ? this.userUnsetForNative(t, this.appId) : this.geJs.userUnset(t, e, i);
}
}, {
key: "userDel",
value: function(t, e) {
this._isNativePlatform() ? this.userDelForNative(this.appId) : this.geJs.userDel(t, e);
}
}, {
key: "userAdd",
value: function(t, e, i) {
this._isNativePlatform() ? this.userAddForNative(t, this.appId) : this.geJs.userAdd(t, e, i);
}
}, {
key: "userNumberMax",
value: function(t, e, i) {
this._isNativePlatform() || this.geJs.userNumberMax(t, e, i);
}
}, {
key: "userNumberMin",
value: function(t, e, i) {
this._isNativePlatform() || this.geJs.userNumberMin(t, e, i);
}
}, {
key: "userAppend",
value: function(t, e, i) {
this._isNativePlatform() ? this.userAppendForNative(t, this.appId) : this.geJs.userAppend(t, e, i);
}
}, {
key: "userUniqAppend",
value: function(t, e, i) {
this._isNativePlatform() ? this.userUniqAppendForNative(t, this.appId) : this.geJs.userUniqAppend(t, e, i);
}
}, {
key: "authorizeOpenID",
value: function(t) {
this.identify(t);
}
}, {
key: "identify",
value: function(t) {
this._isNativePlatform() ? this.identifyForNative(t, this.appId) : this.geJs.identify(t);
}
}, {
key: "getDistinctId",
value: function() {
return this._isNativePlatform() ? this.getDistinctIdForNative(this.appId) : this.geJs.getDistinctId();
}
}, {
key: "login",
value: function(t) {
this._isNativePlatform() ? this.loginForNative(t, this.appId) : this.geJs.login(t);
}
}, {
key: "getAccountId",
value: function() {
return this._isNativePlatform() ? this.getAccountIdForNative(this.appId) : this.geJs.getAccountId();
}
}, {
key: "logout",
value: function() {
this._isNativePlatform() ? this.logoutForNative(this.appId) : this.geJs.logout();
}
}, {
key: "setSuperProperties",
value: function(t) {
this._isNativePlatform() ? this.setSuperPropertiesForNative(t, this.appId) : this.geJs.setSuperProperties(t);
}
}, {
key: "clearSuperProperties",
value: function() {
this._isNativePlatform() ? this.clearSuperPropertiesForNative(this.appId) : this.geJs.clearSuperProperties();
}
}, {
key: "unsetSuperProperty",
value: function(t) {
this._isNativePlatform() ? this.unsetSuperPropertyForNative(t, this.appId) : this.geJs.unsetSuperProperty(t);
}
}, {
key: "getSuperProperties",
value: function() {
return this._isNativePlatform() ? this.getSuperPropertiesForNative(this.appId) : this.geJs.getSuperProperties();
}
}, {
key: "getPresetProperties",
value: function() {
var t, e, i, n;
return this._isNativePlatform() ? (t = this.getPresetPropertiesForNative(this.appId), 
e = {}, n = t.$system_language, e.system_language = k.isUndefined(n) ? "" : n, n = t.$os, 
e.os = k.isUndefined(n) ? "" : n, n = t.$screen_width, e.screenWidth = k.isUndefined(n) ? 0 : n, 
n = t.$screen_height, e.screenHeight = k.isUndefined(n) ? 0 : n, n = t.$network_type, 
e.networkType = k.isUndefined(n) ? "" : n, n = t.$device_model, e.deviceModel = k.isUndefined(n) ? "" : n, 
n = t.$os_version, e.osVersion = k.isUndefined(n) ? "" : n, e.deviceId = this.getDeviceId(), 
i = 0 - new Date().getTimezoneOffset() / 60, e.zoneOffset = i, n = t.$manufacturer, 
e.manufacturer = k.isUndefined(n) ? "" : n, n = t.$manufacturer, e.brand = k.isUndefined(n) ? "" : n, 
e.toEventPresetProperties = function() {
return {
$device_model: e.deviceModel,
$device_id: e.deviceId,
$screen_width: e.screenWidth,
$screen_height: e.screenHeight,
$system_language: e.system_language,
$os: e.os,
$os_version: e.osVersion,
$network_type: e.networkType,
$zone_offset: i,
$manufacturer: e.manufacturer,
$brand: e.manufacturer
};
}, e) : this.geJs.getPresetProperties();
}
}, {
key: "setDynamicSuperProperties",
value: function(t) {
this._isNativePlatform() ? "function" == typeof t ? (this.dynamicProperties = t, 
window.__dynamicPropertiesForNative = function(e) {
console.log("__dynamicPropertiesForNative: native msg: ", e);
e = t(), e = k.encodeDates(e);
return JSON.stringify(e);
}, this.setDynamicSuperPropertiesForNative("__dynamicPropertiesForNative")) : logger.warn("setDynamicSuperProperties parameter must be a function type") : this.geJs.setDynamicSuperProperties(t);
}
}, {
key: "timeEvent",
value: function(t, e) {
return this._isNativePlatform() ? this.timeEventForNative(t, this.appId) : this.geJs.timeEvent(t, e);
}
}, {
key: "getDeviceId",
value: function() {
return this._isNativePlatform() ? this.getDeviceIdForNative(this.appId) : this.geJs.getDeviceId();
}
}, {
key: "enableTracking",
value: function(t) {
this._isNativePlatform() ? this.enableTrackingForNative(t, this.appId) : this.geJs.enableTracking(t);
}
}, {
key: "optOutTracking",
value: function() {
this._isNativePlatform() ? this.optOutTrackingForNative(this.appId) : this.geJs.optOutTracking();
}
}, {
key: "optOutTrackingAndDeleteUser",
value: function() {
this._isNativePlatform() ? this.optOutTrackingAndDeleteUserForNative(this.appId) : this.geJs.optOutTrackingAndDeleteUser();
}
}, {
key: "optInTracking",
value: function() {
this._isNativePlatform() ? this.optInTrackingForNative(this.appId) : this.geJs.optInTracking();
}
}, {
key: "setTrackStatus",
value: function(t) {
this._isNativePlatform() ? this.setTrackStatusForNative(t, this.appId) : this.geJs.setTrackStatus(t);
}
}, {
key: "trackForNative",
value: function(t, e, i, n) {
i = k.isDate(i) ? k.formatDate(i) : "";
k.isUndefined(e) && (e = {}), e = k.extend(e, this.dynamicProperties ? this.dynamicProperties() : {}), 
e = k.encodeDates(e), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "track", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", t, JSON.stringify(e), i, n) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "track:properties:time:appId:", t, JSON.stringify(e), i, n);
}
}, {
key: "timeEventForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "timeEvent", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "timeEvent:appId:", t, e);
}
}, {
key: "loginForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "login", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "login:appId:", t, e);
}
}, {
key: "logoutForNative",
value: function(t) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "logout", "(Ljava/lang/String;)V", t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "logout:", t);
}
}, {
key: "setSuperPropertiesForNative",
value: function(t, e) {
t = k.encodeDates(t), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "setSuperProperties", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t), e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "setSuperProperties:appId:", JSON.stringify(t), e);
}
}, {
key: "getSuperPropertiesForNative",
value: function(t) {
var e = "{}";
return this._isAndroid() ? e = jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getSuperProperties", "(Ljava/lang/String;)V", t) : this._isIOS() && (e = jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getSuperProperties:", t)), 
JSON.parse(e);
}
}, {
key: "unsetSuperPropertyForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "unsetSuperProperty", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "unsetSuperProperty:appId:", t, e);
}
}, {
key: "clearSuperPropertiesForNative",
value: function(t) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "clearSuperProperties", "(Ljava/lang/String;)V", t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "clearSuperProperties:", t);
}
}, {
key: "userSetForNative",
value: function(t, e) {
t = k.encodeDates(t), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userSet", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t), e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userSet:appId:", JSON.stringify(t), e);
}
}, {
key: "userSetOnceForNative",
value: function(t, e) {
t = k.encodeDates(t), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userSetOnce", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t), e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userSetOnce:appId:", JSON.stringify(t), e);
}
}, {
key: "userAppendForNative",
value: function(t, e) {
t = k.encodeDates(t), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userAppend", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t), e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userAppend:appId:", JSON.stringify(t), e);
}
}, {
key: "userUniqAppendForNative",
value: function(t, e) {
t = k.encodeDates(t), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userUniqAppend", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t), e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userUniqAppend:appId:", JSON.stringify(t), e);
}
}, {
key: "userAddForNative",
value: function(t, e) {
t = k.encodeDates(t), this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userAdd", "(Ljava/lang/String;Ljava/lang/String;)V", JSON.stringify(t), e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userAdd:appId:", JSON.stringify(t), e);
}
}, {
key: "userUnsetForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userUnset", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userUnset:appId:", t, e);
}
}, {
key: "userDelForNative",
value: function(t) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "userDel", "(Ljava/lang/String;)V", t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "userDel:", t);
}
}, {
key: "authorizeOpenIDForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "authorizeOpenID", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "authorizeOpenID:appId:", t, e);
}
}, {
key: "identifyForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "identify", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "identify:appId:", t, e);
}
}, {
key: "initInstanceForNative",
value: function(t, e, i) {
this._isAndroid() ? (jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "setCustomerLibInfo", "(Ljava/lang/String;Ljava/lang/String;)V", c, d), 
k.isUndefined(e) ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "initInstanceAppId", "(Ljava/lang/String;Ljava/lang/String;)V", t, i) : jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "initInstanceConfig", "(Ljava/lang/String;Ljava/lang/String;)V", t, JSON.stringify(e))) : this._isIOS() && (jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "setCustomerLibInfoWithLibName:libVersion:", c, d), 
k.isUndefined(e) ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "initInstance:appId:", t, i) : jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "initInstance:config:", t, JSON.stringify(e)));
}
}, {
key: "lightInstanceForNative",
value: function(t, e) {
return this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "lightInstance", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "lightInstance:appId:", t, e) : void 0;
}
}, {
key: "startGravityAnalyticsForNative",
value: function(t) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "startGravityAnalytics", "(Ljava/lang/String;)V", t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "startGravityAnalytics:", t);
}
}, {
key: "setDynamicSuperPropertiesForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "setDynamicSuperProperties", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "setDynamicSuperProperties:appId:", t, e);
}
}, {
key: "getDeviceIdForNative",
value: function(t) {
return this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getDeviceId", "(Ljava/lang/String;)Ljava/lang/String;", t) : this._isIOS() ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getDeviceId:", t) : void 0;
}
}, {
key: "getDistinctIdForNative",
value: function(t) {
return this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getDistinctId", "(Ljava/lang/String;)Ljava/lang/String;", t) : this._isIOS() ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getDistinctId:", t) : void 0;
}
}, {
key: "getAccountIdForNative",
value: function(t) {
return this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getAccountId", "(Ljava/lang/String;)Ljava/lang/String;", t) : this._isIOS() ? jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getAccountId:", t) : void 0;
}
}, {
key: "getPresetPropertiesForNative",
value: function(t) {
var e = "{}";
return this._isAndroid() ? e = jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "getPresetProperties", "(Ljava/lang/String;)Ljava/lang/String;", t) : this._isIOS() && (e = jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "getPresetProperties:", t)), 
JSON.parse(e);
}
}, {
key: "enableTrackingForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "enableTracking", "(Ljava/lang/String;Ljava/lang/String;)V", t.toString(), e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "enableTracking:appId:", t.toString(), e);
}
}, {
key: "optOutTrackingForNative",
value: function(t) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "optOutTracking", "(Ljava/lang/String;)V", t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "optOutTracking:", t);
}
}, {
key: "optOutTrackingAndDeleteUserForNative",
value: function(t) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "optOutTrackingAndDeleteUser", "(Ljava/lang/String;)V", t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "optOutTrackingAndDeleteUser:", t);
}
}, {
key: "optInTrackingForNative",
value: function(t) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "optInTracking", "(Ljava/lang/String;)V", t) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "optInTracking:", t);
}
}, {
key: "setTrackStatusForNative",
value: function(t, e) {
this._isAndroid() ? jsb.reflection.callStaticMethod("com/cocos/game/CocosCreatorProxyApi", "setTrackStatus", "(Ljava/lang/String;Ljava/lang/String;)V", t, e) : this._isIOS() && jsb.reflection.callStaticMethod("CocosCreatorProxyApi", "setTrackStatus:appId:", t, e);
}
} ]), t;
}();
return window.GravityAnalyticsAPI = A, window.GravityAnalyticsAPIForJS = C, A;
});
cc._RF.pop();
}, {} ],
homeBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "4775eIDEdJNjZWwaTFLTjJY", "homeBox");
cc.Class({
extends: cc.Component,
properties: {
typeBox: cc.Node,
view: [ cc.Node ]
},
onLoad: function() {
var t = this;
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.showList(e);
});
},
onEnable: function() {
G.wxAd.showClubBup(!1);
G.user.home.name && "" != G.user.home.name || (G.user.home.name = G.getHomeName());
if (G._.size(G.user.home.man) < 1) {
for (var t = 0; t < 2; t++) G.addMan();
G.addHomeTask();
}
console.log(G.user.home);
G.user.var.class = 1;
G.save();
},
onDisable: function() {
G.wxAd.showClubBup(!0);
},
showBox: function(t) {
this.node.active = !0;
this.typeBox.getComponent("typeBox").showType(t);
},
showList: function(t) {
if (1 == t) this.view[1].getComponent("homeView1").showViewType(0); else if (3 == t && G.user.home.lev < 4) {
G.showTips("宗门4级解锁");
this.typeBox.getComponent("typeBox").showType(0);
return;
}
for (var e = 0; e < 4; e++) this.view[e].active = e == t;
}
});
cc._RF.pop();
}, {} ],
homeNameConf: [ function(t, e) {
"use strict";
cc._RF.push(e, "3ce4faEuXRBZ78n2YPi2cn0", "homeNameConf");
e.exports = [ {
id: 1,
type: 1,
word: "玄"
}, {
id: 2,
type: 1,
word: "太"
}, {
id: 3,
type: 1,
word: "幻"
}, {
id: 4,
type: 1,
word: "飘"
}, {
id: 5,
type: 1,
word: "长"
}, {
id: 6,
type: 1,
word: "炎"
}, {
id: 7,
type: 1,
word: "幽"
}, {
id: 8,
type: 1,
word: "无"
}, {
id: 9,
type: 1,
word: "天"
}, {
id: 10,
type: 1,
word: "地"
}, {
id: 11,
type: 1,
word: "玉"
}, {
id: 12,
type: 1,
word: "飞"
}, {
id: 13,
type: 1,
word: "大"
}, {
id: 14,
type: 1,
word: "千"
}, {
id: 15,
type: 1,
word: "万"
}, {
id: 16,
type: 1,
word: "巨"
}, {
id: 17,
type: 1,
word: "灵"
}, {
id: 18,
type: 1,
word: "红"
}, {
id: 19,
type: 1,
word: "赤"
}, {
id: 20,
type: 1,
word: "黄"
}, {
id: 21,
type: 1,
word: "金"
}, {
id: 22,
type: 1,
word: "碧"
}, {
id: 23,
type: 1,
word: "青"
}, {
id: 24,
type: 1,
word: "紫"
}, {
id: 25,
type: 1,
word: "苍"
}, {
id: 26,
type: 1,
word: "白"
}, {
id: 27,
type: 1,
word: "黑"
}, {
id: 28,
type: 1,
word: "四"
}, {
id: 29,
type: 1,
word: "五"
}, {
id: 30,
type: 1,
word: "六"
}, {
id: 31,
type: 1,
word: "七"
}, {
id: 32,
type: 1,
word: "八"
}, {
id: 33,
type: 1,
word: "九"
}, {
id: 34,
type: 1,
word: "神"
}, {
id: 35,
type: 1,
word: "仙"
}, {
id: 36,
type: 1,
word: "星"
}, {
id: 37,
type: 1,
word: "百"
}, {
id: 38,
type: 1,
word: "寒"
}, {
id: 39,
type: 1,
word: "东"
}, {
id: 40,
type: 1,
word: "南"
}, {
id: 41,
type: 1,
word: "西"
}, {
id: 42,
type: 1,
word: "北"
}, {
id: 43,
type: 1,
word: "中"
}, {
id: 44,
type: 1,
word: "血"
}, {
id: 45,
type: 1,
word: "秘"
}, {
id: 46,
type: 1,
word: "惊"
}, {
id: 47,
type: 1,
word: "昊"
}, {
id: 48,
type: 1,
word: "御"
}, {
id: 49,
type: 1,
word: "炼"
}, {
id: 50,
type: 2,
word: "云"
}, {
id: 51,
type: 2,
word: "波"
}, {
id: 52,
type: 2,
word: "影"
}, {
id: 53,
type: 2,
word: "阴"
}, {
id: 54,
type: 2,
word: "阳"
}, {
id: 55,
type: 2,
word: "音"
}, {
id: 56,
type: 2,
word: "冥"
}, {
id: 57,
type: 2,
word: "日"
}, {
id: 58,
type: 2,
word: "月"
}, {
id: 59,
type: 2,
word: "光"
}, {
id: 60,
type: 2,
word: "辰"
}, {
id: 61,
type: 2,
word: "雾"
}, {
id: 62,
type: 2,
word: "霞"
}, {
id: 63,
type: 2,
word: "春"
}, {
id: 64,
type: 2,
word: "夏"
}, {
id: 65,
type: 2,
word: "秋"
}, {
id: 66,
type: 2,
word: "冬"
}, {
id: 67,
type: 2,
word: "龙"
}, {
id: 68,
type: 2,
word: "凤"
}, {
id: 69,
type: 2,
word: "麟"
}, {
id: 70,
type: 2,
word: "虎"
}, {
id: 71,
type: 2,
word: "蛟"
}, {
id: 72,
type: 2,
word: "马"
}, {
id: 73,
type: 2,
word: "牛"
}, {
id: 74,
type: 2,
word: "鹤"
}, {
id: 75,
type: 2,
word: "鹰"
}, {
id: 76,
type: 2,
word: "鹏"
}, {
id: 77,
type: 2,
word: "鲲"
}, {
id: 78,
type: 2,
word: "兽"
}, {
id: 79,
type: 2,
word: "法"
}, {
id: 80,
type: 2,
word: "虚"
}, {
id: 81,
type: 2,
word: "霜"
}, {
id: 82,
type: 2,
word: "雷"
}, {
id: 83,
type: 2,
word: "电"
}, {
id: 84,
type: 2,
word: "丹"
}, {
id: 85,
type: 2,
word: "羽"
}, {
id: 86,
type: 2,
word: "机"
}, {
id: 87,
type: 2,
word: "妙"
}, {
id: 88,
type: 2,
word: "华"
}, {
id: 89,
type: 2,
word: "元"
}, {
id: 90,
type: 2,
word: "花"
}, {
id: 91,
type: 2,
word: "霄"
}, {
id: 92,
type: 2,
word: "文"
}, {
id: 93,
type: 2,
word: "武"
}, {
id: 94,
type: 2,
word: "焰"
}, {
id: 95,
type: 2,
word: "冰"
}, {
id: 96,
type: 2,
word: "魂"
}, {
id: 97,
type: 2,
word: "魄"
}, {
id: 98,
type: 2,
word: "煞"
}, {
id: 99,
type: 2,
word: "剑"
}, {
id: 100,
type: 2,
word: "离火"
}, {
id: 101,
type: 2,
word: "坎水"
}, {
id: 102,
type: 2,
word: "震木"
}, {
id: 103,
type: 2,
word: "乾坤"
}, {
id: 104,
type: 2,
word: "混沌"
}, {
id: 105,
type: 2,
word: "自在"
}, {
id: 106,
type: 3,
word: "乾坤"
}, {
id: 107,
type: 3,
word: "混沌"
}, {
id: 108,
type: 3,
word: "飘渺"
}, {
id: 109,
type: 3,
word: "琅琊"
}, {
id: 110,
type: 3,
word: "雷霆"
}, {
id: 111,
type: 3,
word: "无量"
}, {
id: 112,
type: 3,
word: "青龙"
}, {
id: 113,
type: 3,
word: "白虎"
}, {
id: 114,
type: 3,
word: "朱雀"
}, {
id: 115,
type: 3,
word: "玄武"
}, {
id: 116,
type: 3,
word: "天涯"
}, {
id: 117,
type: 3,
word: "太白"
}, {
id: 118,
type: 3,
word: "万寿"
}, {
id: 119,
type: 3,
word: "龙吟"
}, {
id: 120,
type: 3,
word: "凤鸣"
}, {
id: 121,
type: 3,
word: "虎啸"
}, {
id: 122,
type: 3,
word: "明王"
}, {
id: 123,
type: 3,
word: "太乙"
}, {
id: 124,
type: 3,
word: "万法"
}, {
id: 125,
type: 3,
word: "金顶"
}, {
id: 126,
type: 3,
word: "幽冥"
}, {
id: 127,
type: 3,
word: "碧波"
}, {
id: 128,
type: 3,
word: "灵狐"
}, {
id: 129,
type: 3,
word: "天元"
}, {
id: 130,
type: 3,
word: "天机"
}, {
id: 131,
type: 3,
word: "贪狼"
}, {
id: 132,
type: 3,
word: "破军"
}, {
id: 133,
type: 3,
word: "清风"
}, {
id: 134,
type: 3,
word: "大衍"
}, {
id: 135,
type: 4,
word: "宗"
}, {
id: 136,
type: 4,
word: "门"
}, {
id: 137,
type: 4,
word: "山"
}, {
id: 138,
type: 4,
word: "谷"
}, {
id: 139,
type: 4,
word: "岛"
}, {
id: 140,
type: 4,
word: "观"
}, {
id: 141,
type: 4,
word: "阁"
}, {
id: 142,
type: 4,
word: "楼"
}, {
id: 143,
type: 4,
word: "派"
}, {
id: 144,
type: 4,
word: "教"
}, {
id: 145,
type: 4,
word: "府"
}, {
id: 146,
type: 4,
word: "堡"
}, {
id: 147,
type: 4,
word: "洞"
}, {
id: 148,
type: 4,
word: "宫"
}, {
id: 149,
type: 4,
word: "殿"
}, {
id: 150,
type: 4,
word: "福地"
}, {
id: 151,
type: 4,
word: "洞天"
}, {
id: 152,
type: 5,
word: "青云宗"
}, {
id: 153,
type: 5,
word: "欢喜宗"
}, {
id: 154,
type: 5,
word: "华严宗"
}, {
id: 155,
type: 5,
word: "万兽山"
}, {
id: 156,
type: 5,
word: "天鹰堡"
}, {
id: 157,
type: 5,
word: "御剑宗"
}, {
id: 158,
type: 5,
word: "炼魂宗"
}, {
id: 159,
type: 5,
word: "秘剑宗"
}, {
id: 160,
type: 5,
word: "血魂门"
}, {
id: 161,
type: 5,
word: "惊岚宗"
}, {
id: 162,
type: 5,
word: "昊天宗"
}, {
id: 163,
type: 5,
word: "百花门"
}, {
id: 164,
type: 5,
word: "玄冥教"
} ];
cc._RF.pop();
}, {} ],
homeView0: [ function(t, e) {
"use strict";
cc._RF.push(e, "9d25ecxsi1FQb8F/FwX4Cb4", "homeView0");
cc.Class({
extends: cc.Component,
properties: {
homeName: cc.Label,
homeBup: cc.Node,
vedioBup: cc.Node,
bupFont: cc.Label,
lev: cc.Label,
levBup: cc.Node,
upCost: cc.Node,
levTitle0: cc.Label,
levTitle1: cc.Label,
descBox0: cc.Node,
descBox1: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.homeBup, function() {
t.vedioBup.active ? G.showVedio(function() {
t.updateName();
}) : t.updateName();
});
G.setBup(this.levBup, function() {
t.upLev();
});
},
onEnable: function() {
this.showInfo();
},
showInfo: function() {
this.homeName.string = G.user.home.name;
this.lev.string = "等级：" + G.user.home.lev;
this.levTitle0.string = G.user.home.lev + "级宗门";
var t = Math.min(9, G.user.home.lev + 1);
this.levTitle1.string = t + "级宗门";
this.descBox1.parent.active = G.user.home.lev < 9;
this.levBup.active = G.user.home.lev < 9;
var e = G.getConf(G._17Conf, G.user.home.lev, "lvc");
e && "" != e.cost ? G.showCost(this.upCost, G.user.coin, e.cost, "灵石 ") : this.levBup.active = !1;
this.vedioBup.active = G.user.home.nameTimes < 1;
this.showDesc(0, G.user.home.lev);
this.showDesc(1, t);
this.bupFont.string = G.user.home.nameTimes < 1 ? "更 换" : "更 换(" + G.user.home.nameTimes + ")";
},
updateName: function() {
G.user.home.nameTimes--;
G.user.home.name = G.getHomeName();
this.homeName.string = G.user.home.name;
this.vedioBup.active = G.user.home.nameTimes < 1;
this.bupFont.string = G.user.home.nameTimes < 1 ? "更 换" : "更 换(" + G.user.home.nameTimes + ")";
G.save();
},
upLev: function() {
var t = this, e = G.levConf[G.user.lev - 1];
if (G.user.home.lev >= {
_1: 3,
_2: 3,
_3: 3,
_4: 3,
_5: 6,
_6: 9,
_7: 9,
_8: 9,
_9: 9
}["_" + e.stage]) G.showTips("请提升师尊境界"); else {
var i = G.getConf(G._17Conf, G.user.home.lev, "lvc");
if (G.user.coin >= i.cost) {
G.user.coin -= i.cost;
G.user.home.lev = Math.min(9, G.user.home.lev + 1);
G.save();
this.showInfo();
G.showTips("升级成功");
} else G.noCoinTips(function() {
var e = G.getConf(G._17Conf, G.user.home.lev, "lvc");
G.showCost(t.upCost, G.user.coin, e.cost, "灵石 ");
});
}
},
showDesc: function(t, e) {
var i = G.getConf(G._17Conf, e, "lvc"), n = [];
n[0] = "要求门主为<color=#4169E1>" + G.VAL.LEV[i.stage - 1] + "</>或以上修士。";
n[1] = "可接纳最多<color=#4169E1>" + i.num_p + "</>名弟子。";
n[2] = "阵法限定为【<color=#4169E1>" + i.ar_name + "</>】。";
n[3] = "弟子任务上限为<color=#4169E1>" + i.num_t + "</>个。";
var a = (0 == t ? this.descBox0 : this.descBox1).children;
a[2].active = "" != i.ar_name;
for (var o in a) a[o].getComponent(cc.RichText).string = n[o];
}
});
cc._RF.pop();
}, {} ],
homeView1: [ function(t, e) {
"use strict";
cc._RF.push(e, "691548m7vVD1pg1fGgvHdMN", "homeView1");
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
item: cc.Prefab,
list: cc.Node,
count: cc.Label,
addMan: cc.Node,
dImg: cc.Node,
dTitle: cc.Label,
dLev: cc.Label,
dData0: cc.Label,
dData1: cc.Label,
dData2: cc.Label,
exp: cc.Node,
expCost: cc.Node,
exp10Cost: cc.Node,
expBup: cc.Node,
exp10Bup: cc.Node,
danBup: cc.Node,
taskBup: cc.Node,
zfBup: cc.Node,
state: cc.Label,
expBar: cc.Node,
dVal: [ cc.Label ],
manKey: {
default: null,
visible: !1
},
viewType: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.addMan, function() {
t.addMaxMan();
});
G.setBup(this.danBup, function() {
t.eatDan();
});
G.setBup(this.expBup, function() {
t.addExp();
});
G.setBup(this.exp10Bup, function() {
t.addExp(10);
});
G.setBup(this.taskBup, function() {
t.setTask();
});
G.setBup(this.zfBup, function() {
t.setZf();
});
},
onEnable: function() {
this.manKey = null;
this.updateCount();
this.showList();
},
addMaxMan: function() {
var t = this, e = G.getConf(G._17Conf, G.user.home.lev, "lvc");
G.user.home.maxMan < e.num_p ? G.showVedio(function() {
G.user.home.maxMan++;
t.updateCount();
G.showTips("扩招成功");
}) : G.showTips("已达上限，请提升宗门等级");
},
updateCount: function() {
var t = G.getConf(G._17Conf, G.user.home.lev, "lvc"), e = G._.size(G.user.home.man);
G.user.home.maxMan = Math.min(t.num_p, G.user.home.maxMan);
this.count.string = "弟子数量：" + e + "/" + t.num_p;
},
showList: function() {
this.list.removeAllChildren();
for (var t in G.user.home.man) {
var e = cc.instantiate(this.item);
e.parent = this.list;
e.getComponent("manItem").showInfo(t);
if (!this.manKey) {
this.showDesc(t);
this.updateLev();
}
}
},
showDesc: function(t) {
this.manKey = t;
for (var e, n = i(this.list.children); !(e = n()).done; ) e.value.getComponent("manItem").showSel(t);
var a = G.user.home.man[t];
this.dTitle.string = a.name;
G.setLogo(this.dImg, "role/", "role", "image" + a.img);
var o = G.levConf[a.lev - 1];
this.dLev.string = o.stage_name + o.step_name;
var m = G.getManData(t);
for (var r in this.dVal) this.dVal[r].string = G.getNum(m[r]);
this.dData0.string = "根骨：" + a.data0;
this.dData1.string = "悟性：" + a.data1;
this.dData2.string = "战力：" + m[4];
G.showCost(this.exp, a.exp, o.exp);
G.showCost(this.expCost, G.user.coin, G.VAL.MAN_EXP_COST[0], "灵石 ");
G.showCost(this.exp10Cost, G.user.coin, 10 * G.VAL.MAN_EXP_COST[0], "灵石 ");
this.expBar.scaleX = Math.min(1, a.exp / o.exp);
this.showViewType(this.viewType);
},
addExp: function(t) {
var e = this;
void 0 === t && (t = 1);
if (G.user.coin >= G.VAL.MAN_EXP_COST[0] * t) {
G.user.coin -= G.VAL.MAN_EXP_COST[0] * t;
G.user.home.man[this.manKey].exp += G.VAL.MAN_EXP_COST[1] * t;
this.showDesc(this.manKey);
G.showTips("灌注成功", function() {
e.updateLev(!0);
});
} else G.noCoinTips(function() {
G.showCost(e.expCost, G.user.coin, G.VAL.MAN_EXP_COST[0], "灵石 ");
G.showCost(e.exp10Cost, G.user.coin, G.VAL.MAN_EXP_COST[0] * t, "灵石 ");
});
},
updateLev: function(t) {
void 0 === t && (t = !1);
for (var e = !1; ;) {
var i = G.user.home.man[this.manKey], n = G.levConf[i.lev - 1];
if (!(i.exp >= n.exp)) break;
i.lev = Math.min(63, i.lev + 1);
i.exp -= n.exp;
e = !0;
}
if (e) {
this.showDesc(this.manKey);
t && G.showTips("修为提升");
G.save();
}
},
checkState: function() {
var t = "";
for (var e in G.user.home.task) if (G.user.home.task[e].manId == this.manKey) {
t = "任务中";
break;
}
-1 != G.user.home.zf.indexOf(this.manKey) && (t = "上阵中");
this.state.node.active = "" != t;
this.state.string = t;
},
showViewType: function(t) {
this.viewType = t;
this.expBup.active = 0 == t;
this.exp10Bup.active = 0 == t;
this.danBup.active = 0 == t;
this.taskBup.active = !1;
this.zfBup.active = !1;
this.checkState();
if (t > 0 && !this.state.node.active) {
this.taskBup.active = 1 == t;
this.zfBup.active = 2 == t;
}
},
setTask: function() {
var t = G.user.home.task["_" + G.temp.taskId], e = G.getConf(G._18Conf, G.temp.taskId);
if (G.user.home.man[this.manKey].lev < e.lvp) G.showTips("弟子等级不足"); else {
if (t) {
t.manId = this.manKey;
t.start = G.getNowSec();
G.save();
}
this.showViewType(0);
G.getNode("Canvas/homeBox/box/typeBox", "typeBox").js.showType(2);
}
},
setZf: function() {
if (-1 == G.user.home.zf.indexOf(this.manKey)) {
G.user.home.zf.push(this.manKey);
G.save();
}
this.showViewType(0);
G.getNode("Canvas/homeBox/box/typeBox", "typeBox").js.showType(3);
},
eatDan: function() {
G.temp.danMan = this.manKey;
G.temp.bagType = 2;
G.getNode("Canvas/bupBox", "bupBox").js.jumpTo(1);
cc.find("Canvas/homeBox").active = !1;
}
});
cc._RF.pop();
}, {} ],
homeView2: [ function(t, e) {
"use strict";
cc._RF.push(e, "0a8f7xu+TBLeI45ip0lKozI", "homeView2");
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
item: cc.Prefab,
list: cc.Node,
count: cc.Label,
addBup: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.addBup, function() {
t.addTask();
});
G.setTimeCb({
path: "Canvas/homeBox/box/view2",
js: "homeView2",
cb: "updateTime",
time: [ 0, 1 ]
});
},
onEnable: function() {
this.showList();
},
showList: function() {
var t = G.user.home.task;
this.list.removeAllChildren();
for (var e in t) {
var i = cc.instantiate(this.item);
i.parent = this.list;
i.getComponent("taskItem").showInfo(e.replace("_", ""));
}
this.updateCount();
},
addTask: function() {
var t = this, e = this.list.children, i = G.getConf(G._17Conf, G.user.home.lev, "lvc");
e.length < i.num_t ? G.showVedio(function() {
for (var n = i.num_t - e.length, a = 0; a < n; a++) {
var o = G.addHomeTask();
if (o) {
var m = cc.instantiate(t.item);
m.parent = t.list;
m.getComponent("taskItem").showInfo(o);
t.updateCount();
}
}
}) : G.showTips("已达宗门任务上限");
},
updateCount: function() {
var t = 0, e = 0;
for (var i in G.user.home.task) {
t++;
-1 != G.user.home.task[i].manId && e++;
}
this.count.string = "任务数量：" + e + "/" + t;
},
updateTime: function() {
for (var t, e = i(this.list.children); !(t = e()).done; ) t.value.getComponent("taskItem").updateTime();
}
});
cc._RF.pop();
}, {} ],
homeView3: [ function(t, e) {
"use strict";
cc._RF.push(e, "eb1f84Ss6NCPqRjI7zULL61", "homeView3");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list: cc.Node,
zfImg: cc.Node,
zfTitle: cc.Label,
fight: cc.Label,
descBox: cc.Node
},
onLoad: function() {
for (var t = 0; t < 8; t++) cc.instantiate(this.item).parent = this.list;
},
onEnable: function() {
this.showInfo();
},
showInfo: function() {
var t = G.getConf(G._17Conf, G.user.home.lev, "lvc");
G.setLogo(this.zfImg, "zf/", "zf", "zf" + G.user.home.lev);
this.zfTitle.string = t.ar_name;
this.showMan();
this.showFight();
this.showDesc();
},
showMan: function() {
var t = G.getConf(G._17Conf, G.user.home.lev, "lvc"), e = this.list.children;
for (var i in e) {
e[i].active = i < t.array;
if (i < t.array) {
var n = G.user.home.zf[i];
e[i].getComponent("zfManItem").showInfo(n);
}
}
},
showFight: function() {
var t = G.getManBuff(), e = [ "血气+" + G.getNum(t[0]), "攻击+" + G.getNum(t[1]), "防御+" + G.getNum(t[2]), "法力+" + G.getNum(t[3]) ];
this.fight.string = e.join("  ");
},
showDesc: function() {
var t = this.descBox.children, e = G.user.home.lev, i = Math.min(9, e + 1), n = G.getConf(G._17Conf, e, "lvc"), a = G.getConf(G._17Conf, i, "lvc"), o = [ "当前：【" + n.ar_name + "】", "最多可上阵" + n.array + "名弟子", "下一级：【" + a.ar_name + "】", "最多可上阵" + a.array + "名弟子" ];
for (var m in t) 4 != m && (t[m].getComponent(cc.Label).string = o[m]);
}
});
cc._RF.pop();
}, {} ],
hwAd: [ function(t, e) {
"use strict";
cc._RF.push(e, "5817a1M/xdO2KsihulEwkdt", "hwAd");
var i = !1, n = !1, a = !1, o = !1, m = -1, r = 0;
function s(t) {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsToAndroid", "(Ljava/lang/String;)V", t);
}
e.exports = {
showBanner: function() {
console.log("打开banner");
if (n) {
console.log("call native openBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
}
},
closeBanner: function() {
console.log("关闭Banner广告");
if (n) {
console.log("call native closeBanner", cc.sys.os);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "closeBanner", "()V");
}
},
showInter: function() {
console.log("打开插屏");
n && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInter", "()V");
},
showVedio: function(t, e) {
if (r > 0) G.showTips("视频冷却中，请稍后再试..." + r + "s"); else if (n) {
t = t;
e = e;
o = !1;
G.temp.vedioCb = t;
r = 10;
m = setInterval(function() {
if (--r < 1) {
clearInterval(m);
m = -1;
}
}, 1e3);
G.getNowSec();
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showVedio", "()V");
} else G.showTips("视频加载失败，请退出重启游戏！");
},
initJsBridge: function() {
-1 != G.from.indexOf("apk") && (window.NativeAdCallback = function(t) {
if (!i) {
i = !0;
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "jsBridgeOk", "(Ljava/lang/String;)V", G.userId);
}
n = !0;
var e = t.split("_")[0];
s("yong=>" + t);
if ("initOk" == e) s("yong=>" + t.replace("initOk_", "")); else if ("openId" == e) G.userId = t.split("_")[1]; else if ("vedioDone" == e) o = !0; else if ("vedioClose" == e) {
o && G.temp.vedioCb && setTimeout(function() {
G.temp.vedioCb();
G.freeAd();
}, 500);
o = !1;
} else if ("startGame" == e) a = !0; else if ("vedioErr" == e) {
var m = t.split("_")[1];
G.showMsg("广告加载异常，请稍后再试..." + m);
}
});
},
getBridgeState: function() {
return n;
},
getLoginState: function() {
return a;
},
askTapLogin: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "tapLogin", "(Ljava/lang/String;)V", G.userId);
},
pay: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "pay", "(Ljava/lang/String;)V", 30);
},
saveGameData: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "saveGameData", "(Ljava/lang/String;)V", JSON.stringify(G.user));
},
toAndroid: s,
preloadAd: function() {
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preloadAd", "()V");
}
};
cc._RF.pop();
}, {} ],
imgAction: [ function(t, e) {
"use strict";
cc._RF.push(e, "73d34YrhI1MKrk2j+gH1d9t", "imgAction");
cc.Class({
extends: cc.Component,
properties: {
actionType: 0,
actionTime: .3
},
onLoad: function() {
this.showAction();
},
showAction: function() {
var t = this.node.scale, e = this.node.y, i = null;
switch (this.actionType) {
case 0:
var n = cc.scaleTo(this.actionTime, .95 * t, .95 * t), a = cc.scaleTo(this.actionTime, t, t);
i = cc.sequence(n, a).repeatForever();
break;

case 1:
var o = cc.moveTo(this.actionTime, cc.v2(this.node.x, e + 10)), m = cc.moveTo(this.actionTime, cc.v2(this.node.x, e - 10));
i = cc.sequence(o, m).repeatForever();
break;

case 2:
i = cc.rotateBy(this.actionTime, 10).repeatForever();
}
this.node.runAction(i);
}
});
cc._RF.pop();
}, {} ],
index: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a4416HceSRM8Y6FOYWoDmu2", "index");
i.__esModule = !0;
i.default = void 0;
var n, a, o, m = function() {
return (m = Object.assign || function(t) {
for (var e, i = 1, n = arguments.length; i < n; i++) for (var a in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
return t;
}).apply(this, arguments);
};
"function" == typeof SuppressedError && SuppressedError, function(t) {
t.DOUYIN = "douyin", t.KUAISHOU = "ks";
}(a || (a = {})), function(t) {
t.ACTIVE = "active", t.AD = "ad";
}(o || (o = {}));
var r, s, l = ((n = {})[a.DOUYIN] = "byte/dance", n[a.KUAISHOU] = "ks", n), p = "undefined" != typeof KSGameGlobal, d = p ? a.KUAISHOU : a.DOUYIN, c = p ? "undefined" != typeof ks && ks : "undefined" != typeof tt && tt;
function u(t, e) {
console.error("[WFTSDK ".concat(d, "]:").concat(t), e);
}
function y(t, e) {
console.log("[WFTSDK ".concat(d, " debug]:").concat(t), e);
}
!function(t) {
t.GET = "GET", t.POST = "POST";
}(s || (s = {}));
var f = ((r = {})[o.ACTIVE] = "/".concat(l[d], "/open/api/active"), r[o.AD] = "/".concat(l[d], "/open/api/read/ads"), 
r), x = new (function() {
function t() {
this.debug = !1;
}
return t.prototype.fetch = function(t) {
var e = this;
return new Promise(function(i, n) {
t.header = m(m({}, t.header), {
"app-key": t.data.appKey,
"app-id": t.data.appId
}), c && c.request(m(m({}, t), {
success: function(n) {
var a = n.data;
try {
a = a && JSON.parse(a);
} catch (t) {}
e.debug && y(t.url, a), i(a);
},
fail: function(i) {
e.debug && y(t.url, i), n(i.errMsg);
},
complate: function() {
e.debug && y("complate");
}
}));
});
}, t.prototype.setDebug = function(t) {
this.debug = t;
}, t.prototype.post = function(t, e) {
return this.fetch({
url: "https://copyapi.data.tryine.com" + t,
method: s.POST,
data: e
});
}, t.prototype.report = function(t) {
return this.post(f[t.eventType], t.data);
}, t;
}())(), h = function() {
function t(t) {
var e, i;
if (this.config = {
appKey: "",
appId: "",
openId: "",
anonymousOpenId: "",
debug: !1
}, this.options = {
clickId: null,
promotionId: null,
projectId: null,
requestId: null,
advertiserId: null,
groupId: null,
adId: null,
creativeId: null,
scene: null,
extra: null,
unitId: null,
accountId: null,
campaignId: null,
query: null
}, t.debug && console.log("[WFTSDK version]: ".concat("0.2.2-1")), this.config.appKey = t.appKey, 
this.config.debug = !!t.debug, x.setDebug(!!t.debug), c) {
var n = c.getLaunchOptionsSync(), o = n.query, r = o.clickid, s = o.projectid, l = o.promotionid, p = o.requestid, u = o.click_id, y = o.request_id, f = o.creative_id, h = o.ad_id, g = o.group_id, v = o.advertiser_id, G = n.query, _ = G.callback, b = G.account_id, w = G.campaign_id, k = G.unit_id;
if (d === a.DOUYIN) this.config.appId = null === (e = n.extra) || void 0 === e ? void 0 : e.appId, 
this.options = {
clickId: r || u,
promotionId: l,
projectId: s,
requestId: p || y,
advertiserId: v,
groupId: g,
adId: h,
creativeId: f,
scene: n.scene,
query: n.query,
extra: JSON.stringify(n.extra)
}; else if (d === a.KUAISHOU) {
var C = c.getSystemInfoSync();
this.config.appId = null === (i = C.host) || void 0 === i ? void 0 : i.appId, this.options = {
clickId: _,
creativeId: f,
unitId: k,
accountId: b,
campaignId: w,
scene: n.from,
query: n.query,
extra: JSON.stringify(m(m({}, C.host), {
brand: C.brand,
model: C.model
}))
};
}
} else t.debug && console.warn("[WFTSDK环境异常，非官方平台或小游戏开发工具环境内将无法正常执行上报]");
}
return t.prototype.trackEvent = function(t) {
c && (t.data = m(m(m({}, t.data), this.config), this.options), this.config.appId || u(t.eventType + " appId 不能为空"), 
this.config.appKey || u(t.eventType + " appKey 不能为空"), d === a.DOUYIN ? this.config.openId || this.config.anonymousOpenId || u(t.eventType + " openId 或 anonymousOpenId 不能为空") : this.config.openId || u(t.eventType + " openId 不能为空"), 
this.config.debug && y(t.eventType, t), x.report(t));
}, t.prototype.reportActive = function(t) {
c && (this.config.openId = t.openId, this.config.anonymousOpenId = t.anonymousOpenId, 
this.trackEvent({
eventType: o.ACTIVE
}));
}, t.prototype.reportAd = function(t) {
c && (t.adUnitId || u(o.AD + " adUnitId 不能为空"), !1 !== t.isEnded && !0 !== t.isEnded && u(o.AD + " isEnded 不能为空或类型错误"), 
d === a.DOUYIN && isNaN(t.count) && u(o.AD + " count 不能为空或类型错误"), this.trackEvent({
eventType: o.AD,
data: t
}));
}, t;
}();
i.default = h;
"undefined" != typeof GameGlobal && (GameGlobal.WftSdk = h);
e.exports = i.default;
cc._RF.pop();
}, {} ],
infoBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "495beZvMgBJ4plOy2k57GOQ", "infoBox");
cc.Class({
extends: cc.Component,
properties: {
lev: cc.Label,
fight: cc.Label,
spExp: cc.Label,
needExp: cc.Node,
titleBup: cc.Node,
skillBup: cc.Node,
gfBup: cc.Node,
fbBup: cc.Node,
tpBup: cc.Node,
tpLock: cc.Node,
tpBox: cc.Node,
upBup: cc.Node,
setBup: cc.Node,
setBox: cc.Node,
makeBup: cc.Node,
fsBup: cc.Node,
fsBox: cc.Node,
expBup: cc.Node,
makeLock: cc.Node,
coinBup: cc.Node,
coinLock: cc.Node,
hp: cc.Label,
at: cc.Label,
df: cc.Label,
mp: cc.Label,
hpBar: cc.Node,
mpBar: cc.Node,
hpBup: cc.Node,
mpBup: cc.Node,
hpTips: cc.Node,
mpTips: cc.Node,
hpRed: cc.Node,
mpRed: cc.Node,
offVal: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.titleBup, function() {
G.getNode("Canvas/titleBox").node.active = !0;
});
G.setBup(this.makeBup, function() {
G.user.var.alch + G.user.var.cast > 0 ? G.getNode("Canvas/makeBox").node.active = !0 : G.showMsg("主线剧情通过【神农谷】可解锁炼丹、通过【天工堡】可解锁炼器。");
});
G.setBup(this.skillBup, function() {
G.getNode("Canvas/skillBox").node.active = !0;
});
G.setBup(this.gfBup, function() {
G.getNode("Canvas/gfBox", "gfBox").js.showInfo(-1);
});
G.setBup(this.fbBup, function() {
G.getNode("Canvas/fbBox", "fbBox").node.active = !0;
});
G.setBup(this.tpBup, function() {
t.checkTp();
});
G.setBup(this.upBup, function() {
G.upLev();
t.updateInfo();
});
G.setBup(this.setBup, function() {
t.setBox.active = !0;
});
G.setBup(this.fsBup, function() {
t.fsBox.active = !0;
});
G.setBup(this.coinBup, function() {
t.coinLock.active ? G.showMsg("主线剧情通过【矿物之争】可解锁灵石矿脉。") : G.getNode("Canvas/coinBox").node.active = !0;
});
G.setBup(this.hpBup, function() {
t.toBag();
});
G.setBup(this.mpBup, function() {
t.toBag();
});
G.setBup(this.hpTips, function() {
G.showTips("180秒自动恢复");
});
G.setBup(this.mpTips, function() {
G.showTips("180秒自动恢复");
});
this.offVal = [ 0, 0 ];
G.setTimeCb({
path: "Canvas/infoBox",
js: "infoBox",
cb: "autoVal",
time: [ 0, 1 ]
});
},
onEnable: function() {
this.expBup.getComponent("expGj").checkState();
this.makeLock.active = G.user.var.alch + G.user.var.cast < 1;
this.coinLock.active = G.user.var.often < 1;
var t = G.getFightData(!0, G.user.lev), e = Math.ceil((t[0] - G.user.hp) / 180), i = Math.ceil((t[3] - G.user.mp) / 180);
this.offVal = [ e, i ];
this.hpRed.active = t[0] - G.user.hp > 0;
this.mpRed.active = t[3] - G.user.mp > 0;
this.updateInfo();
},
updateInfo: function() {
var t = G.levConf[G.user.lev - 1];
this.lev.string = t.stage_name + t.step_name;
this.fight.string = G.getFight();
var e = G.bookId(), i = -1 != e ? G.user.setObj["_" + e].buff : 0, n = Math.ceil(t.exp_get * (1 + i / 100));
this.spExp.string = G.getNum(n) + " / 年";
G.user.exp = Math.ceil(G.user.exp);
G.showCost(this.needExp, G.user.exp, t.exp);
this.tpBup.active = t.stage < 7 && 9 == t.step;
this.tpLock.active = G.user.exp < t.exp;
this.upBup.active = 9 != t.step;
this.updateVal();
},
checkTp: function() {
this.tpLock.active ? G.showTips("灵气不足") : this.tpBox.active = !0;
},
updateVal: function() {
var t = G.getFightData(!0, G.user.lev);
G.user.hp = Math.min(G.user.hp, t[0]);
G.user.mp = Math.min(G.user.mp, t[3]);
this.hpBar.scaleX = G.user.hp / t[0];
this.mpBar.scaleX = G.user.mp / t[3];
this.hp.string = G.getNum(G.user.hp) + "/" + G.getNum(t[0]);
this.at.string = G.getNum(t[1]);
this.df.string = G.getNum(t[2]);
this.mp.string = G.getNum(G.user.mp) + "/" + G.getNum(t[3]);
this.hpRed.active = t[0] - G.user.hp > 0;
this.mpRed.active = t[3] - G.user.mp > 0;
},
autoVal: function() {
if (this.offVal[0] > 0 || this.offVal[1] > 0) {
G.user.hp += this.offVal[0];
G.user.mp += this.offVal[1];
}
this.updateVal();
},
toBag: function() {
G.temp.bagType = 2;
G.getNode("Canvas/bupBox", "bupBox").js.jumpTo(1);
}
});
cc._RF.pop();
}, {} ],
infoSkillBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "cd1b0N8LdxHLYSLU1kUfu+Z", "infoSkillBox");
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
item: cc.Prefab,
list: cc.Node
},
onLoad: function() {
this.showList();
},
onEnable: function() {
G.showBanner();
},
onDisable: function() {
G.closeBanner();
},
showList: function() {
for (var t, e = i(G.user.skill); !(t = e()).done; ) {
var n = t.value, a = cc.instantiate(this.item);
a.parent = this.list;
a.getComponent("skillItem").setSkill(n, !0);
}
}
});
cc._RF.pop();
}, {} ],
ksAd: [ function(t, e) {
"use strict";
cc._RF.push(e, "10e4eTcf9JF2ofv8R9/kWKL", "ksAd");
var i = null, n = null, a = null, o = null, m = null, r = [ "ks700309744352304535", "ks711005793487254785", "ks672725198456167126", "ks671880770459071601", "ks709316945456993096", "ks674414045487641164", "ks677791745363650536", "ks714664968554220899", "ks685391568337732624", "ks683139771060476226", "ks684828620725836262", "ks708191044911457051", "ks661747673614775813", "ks704813343980171539" ], s = [ "2300006182_01", "2300006181_01", "2300006876_01", "2300006875_01", "2300007128_01", "2300007127_01", "2300007126_01", "2300007124_01", "2300007125_01", "", "", "", "", "" ], l = [ "dbb3c7c1e5c54596b83045a5c306fa8e", "9c74d4ab732343f2a2e2d8db6879d0c6", "", "", "", "", "", "1d5618f4e47d40f68c241e9ba1f4c8a7", "a346540529034fa7896cd84763932a22", "", "", "", "", "" ], p = [ "xLSoiBcZoksrDPq6OgpvyymUwxvQeukj", "hkSpwwozndygklpzoxVFJxA4bOtU2qYu", "pK5iuwbEmtsoqRnfYu02k4jVrevhxddc", "b4fkswNFn9xojyHKiJdfAehyhbq2eR0l", "rnvzBPFiAk0KeXCecmczNIMfhogy6xEd", "4oxtlirwAGipkeP2Q7bqnkjmWubLsCzp", "yO4AQppavraswcHMNd9k8eR3uxfDgSVz", "Xzd9BvsjcAIRr43Qjutnmo1LbNkZdOlv", "hkd9vfdL1TsDaeIxwXZcqRuU4paBCQPK", "Cj1erIwaSsLOlmxDNQ2VbgfGMvKAFatk", "pRcWroyt9dJ3EupfMyHnfI8QzNXFlGx1", "fat62uqQiyd1k0sVyObbumoG9CpkHojw", "MxfsYhj7u5aLqw6bdzOsb4d3zwXJPtKD", "9tV4hExN1wOkIS7XbGfmsKsFUCLdg2ly" ];
function d() {
if ("ks" == G.from && "" != l[G.fromVer]) {
i = t("./ks/index.js");
n = new i({
appKey: l[G.fromVer],
debug: !1
});
console.log("kssdk:", n);
console.log("kssdk openId:", G.userId);
n.reportActive({
openId: G.userId
});
}
}
function c() {
if ("ks" == G.from && "" != p[G.fromVer]) {
var t = {
accessToken: p[G.fromVer],
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
console.log("yl init success " + JSON.stringify(t));
}).catch(function(t) {
console.log("yl init failed, error is " + t);
});
}
}
e.exports = {
init: function() {
if ("ks" == G.from) {
if ("" == s[G.fromVer]) return;
(a = ks.createRewardedVideoAd({
adUnitId: s[G.fromVer]
})).onError(function(t) {
console.log(t);
m && m();
});
a.onClose(function(t) {
if ("" != l[G.fromVer]) {
console.log("创研关闭广告就调用一次=>>>", t);
n.reportAd({
adUnitId: s[G.fromVer],
isEnded: t.isEnded
});
}
if (t && t.isEnded || void 0 === t) {
G.freeAd();
o && o();
}
});
}
},
showVedio: function(t, e) {
if ("ks" == G.from && a) {
o = t;
m = e;
a.show().catch(function(t) {
return console.log(t);
});
}
},
showInter: function() {
null.show().then(function() {
return console.log("插屏 广告显示");
});
},
login: function() {
"ks" == G.from && ks.login({
success: function(t) {
console.log("login code:", t.code);
var e = {
appId: r[G.fromVer],
code: t.code
};
G.http("https://cygame-server.cygame666.cn/ks/openid/get", JSON.stringify(e), function(t) {
console.log("login ret:", t);
if (0 == t.code) {
G.userId = t.res.open_id;
d();
c();
}
});
},
fail: function(t) {
console.error("login err:", t);
},
complete: function() {
console.log("login complete");
}
});
}
};
cc._RF.pop();
}, {
"./ks/index.js": "index"
} ],
lodash: [ function(t, e, i) {
(function(t) {
"use strict";
cc._RF.push(e, "29e95GV2AJDyJaSmknkSaIR", "lodash");
(function() {
function n(t, e, i) {
switch (i.length) {
case 0:
return t.call(e);

case 1:
return t.call(e, i[0]);

case 2:
return t.call(e, i[0], i[1]);

case 3:
return t.call(e, i[0], i[1], i[2]);
}
return t.apply(e, i);
}
function a(t, e, i, n) {
for (var a = -1, o = null == t ? 0 : t.length; ++a < o; ) {
var m = t[a];
e(n, m, i(m), t);
}
return n;
}
function o(t, e) {
for (var i = -1, n = null == t ? 0 : t.length; ++i < n && !1 !== e(t[i], i, t); ) ;
return t;
}
function m(t, e) {
for (var i = null == t ? 0 : t.length; i-- && !1 !== e(t[i], i, t); ) ;
return t;
}
function r(t, e) {
for (var i = -1, n = null == t ? 0 : t.length; ++i < n; ) if (!e(t[i], i, t)) return !1;
return !0;
}
function s(t, e) {
for (var i = -1, n = null == t ? 0 : t.length, a = 0, o = []; ++i < n; ) {
var m = t[i];
e(m, i, t) && (o[a++] = m);
}
return o;
}
function l(t, e) {
return !(null == t || !t.length) && -1 < g(t, e, 0);
}
function p(t, e, i) {
for (var n = -1, a = null == t ? 0 : t.length; ++n < a; ) if (i(e, t[n])) return !0;
return !1;
}
function d(t, e) {
for (var i = -1, n = null == t ? 0 : t.length, a = Array(n); ++i < n; ) a[i] = e(t[i], i, t);
return a;
}
function c(t, e) {
for (var i = -1, n = e.length, a = t.length; ++i < n; ) t[a + i] = e[i];
return t;
}
function u(t, e, i, n) {
var a = -1, o = null == t ? 0 : t.length;
for (n && o && (i = t[++a]); ++a < o; ) i = e(i, t[a], a, t);
return i;
}
function y(t, e, i, n) {
var a = null == t ? 0 : t.length;
for (n && a && (i = t[--a]); a--; ) i = e(i, t[a], a, t);
return i;
}
function f(t, e) {
for (var i = -1, n = null == t ? 0 : t.length; ++i < n; ) if (e(t[i], i, t)) return !0;
return !1;
}
function x(t, e, i) {
var n;
return i(t, function(t, i, a) {
if (e(t, i, a)) return n = i, !1;
}), n;
}
function h(t, e, i, n) {
var a = t.length;
for (i += n ? 1 : -1; n ? i-- : ++i < a; ) if (e(t[i], i, t)) return i;
return -1;
}
function g(t, e, i) {
if (e == e) t: {
--i;
for (var n = t.length; ++i < n; ) if (t[i] === e) {
t = i;
break t;
}
t = -1;
} else t = h(t, G, i);
return t;
}
function v(t, e, i, n) {
--i;
for (var a = t.length; ++i < a; ) if (n(t[i], e)) return i;
return -1;
}
function G(t) {
return t != t;
}
function _(t, e) {
var i = null == t ? 0 : t.length;
return i ? A(t, e) / i : z;
}
function b(t) {
return function(e) {
return null == e ? U : e[t];
};
}
function w(t) {
return function(e) {
return null == t ? U : t[e];
};
}
function k(t, e, i, n, a) {
return a(t, function(t, a, o) {
i = n ? (n = !1, t) : e(i, t, a, o);
}), i;
}
function C(t, e) {
var i = t.length;
for (t.sort(e); i--; ) t[i] = t[i].c;
return t;
}
function A(t, e) {
for (var i, n = -1, a = t.length; ++n < a; ) {
var o = e(t[n]);
o !== U && (i = i === U ? o : i + o);
}
return i;
}
function S(t, e) {
for (var i = -1, n = Array(t); ++i < t; ) n[i] = e(i);
return n;
}
function B(t, e) {
return d(e, function(e) {
return [ e, t[e] ];
});
}
function I(t) {
return function(e) {
return t(e);
};
}
function N(t, e) {
return d(e, function(e) {
return t[e];
});
}
function T(t, e) {
return t.has(e);
}
function j(t, e) {
for (var i = -1, n = t.length; ++i < n && -1 < g(e, t[i], 0); ) ;
return i;
}
function L(t, e) {
for (var i = t.length; i-- && -1 < g(e, t[i], 0); ) ;
return i;
}
function M(t) {
return "\\" + Et[t];
}
function O(t) {
var e = -1, i = Array(t.size);
return t.forEach(function(t, n) {
i[++e] = [ n, t ];
}), i;
}
function F(t, e) {
return function(i) {
return t(e(i));
};
}
function E(t, e) {
for (var i = -1, n = t.length, a = 0, o = []; ++i < n; ) {
var m = t[i];
m !== e && "__lodash_placeholder__" !== m || (t[i] = "__lodash_placeholder__", o[a++] = i);
}
return o;
}
function D(t) {
var e = -1, i = Array(t.size);
return t.forEach(function(t) {
i[++e] = t;
}), i;
}
function R(t) {
var e = -1, i = Array(t.size);
return t.forEach(function(t) {
i[++e] = [ t, t ];
}), i;
}
function P(t) {
if (Tt.test(t)) {
for (var e = It.lastIndex = 0; It.test(t); ) ++e;
t = e;
} else t = Qt(t);
return t;
}
function V(t) {
return Tt.test(t) ? t.match(It) || [] : t.split("");
}
var U, q = 1 / 0, z = NaN, H = [ [ "ary", 128 ], [ "bind", 1 ], [ "bindKey", 2 ], [ "curry", 8 ], [ "curryRight", 16 ], [ "flip", 512 ], [ "partial", 32 ], [ "partialRight", 64 ], [ "rearg", 256 ] ], Y = /\b__p\+='';/g, J = /\b(__p\+=)''\+/g, W = /(__e\(.*?\)|\b__t\))\+'';/g, $ = /&(?:amp|lt|gt|quot|#39);/g, K = /[&<>"']/g, X = RegExp($.source), Z = RegExp(K.source), Q = /<%-([\s\S]+?)%>/g, tt = /<%([\s\S]+?)%>/g, et = /<%=([\s\S]+?)%>/g, it = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nt = /^\w*$/, at = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ot = /[\\^$.*+?()[\]{}|]/g, mt = RegExp(ot.source), rt = /^\s+|\s+$/g, st = /^\s+/, lt = /\s+$/, pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, dt = /\{\n\/\* \[wrapped with (.+)\] \*/, ct = /,? & /, ut = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, yt = /\\(\\)?/g, ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, xt = /\w*$/, ht = /^[-+]0x[0-9a-f]+$/i, gt = /^0b[01]+$/i, vt = /^\[object .+?Constructor\]$/, Gt = /^0o[0-7]+$/i, _t = /^(?:0|[1-9]\d*)$/, bt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, wt = /($^)/, kt = /['\n\r\u2028\u2029\\]/g, Ct = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*", At = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + Ct, St = RegExp("['’]", "g"), Bt = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"), It = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])" + Ct, "g"), Nt = RegExp([ "[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", At ].join("|"), "g"), Tt = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"), jt = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Lt = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "), Mt = {};
Mt["[object Float32Array]"] = Mt["[object Float64Array]"] = Mt["[object Int8Array]"] = Mt["[object Int16Array]"] = Mt["[object Int32Array]"] = Mt["[object Uint8Array]"] = Mt["[object Uint8ClampedArray]"] = Mt["[object Uint16Array]"] = Mt["[object Uint32Array]"] = !0, 
Mt["[object Arguments]"] = Mt["[object Array]"] = Mt["[object ArrayBuffer]"] = Mt["[object Boolean]"] = Mt["[object DataView]"] = Mt["[object Date]"] = Mt["[object Error]"] = Mt["[object Function]"] = Mt["[object Map]"] = Mt["[object Number]"] = Mt["[object Object]"] = Mt["[object RegExp]"] = Mt["[object Set]"] = Mt["[object String]"] = Mt["[object WeakMap]"] = !1;
var Ot = {};
Ot["[object Arguments]"] = Ot["[object Array]"] = Ot["[object ArrayBuffer]"] = Ot["[object DataView]"] = Ot["[object Boolean]"] = Ot["[object Date]"] = Ot["[object Float32Array]"] = Ot["[object Float64Array]"] = Ot["[object Int8Array]"] = Ot["[object Int16Array]"] = Ot["[object Int32Array]"] = Ot["[object Map]"] = Ot["[object Number]"] = Ot["[object Object]"] = Ot["[object RegExp]"] = Ot["[object Set]"] = Ot["[object String]"] = Ot["[object Symbol]"] = Ot["[object Uint8Array]"] = Ot["[object Uint8ClampedArray]"] = Ot["[object Uint16Array]"] = Ot["[object Uint32Array]"] = !0, 
Ot["[object Error]"] = Ot["[object Function]"] = Ot["[object WeakMap]"] = !1;
var Ft, Et = {
"\\": "\\",
"'": "'",
"\n": "n",
"\r": "r",
"\u2028": "u2028",
"\u2029": "u2029"
}, Dt = parseFloat, Rt = parseInt, Pt = "object" == typeof t && t && t.Object === Object && t, Vt = "object" == typeof self && self && self.Object === Object && self, Ut = Pt || Vt || Function("", "return this")(), qt = "object" == typeof i && i && !i.nodeType && i, zt = qt && "object" == typeof e && e && !e.nodeType && e, Ht = zt && zt.exports === qt, Yt = Ht && Pt.process;
t: {
try {
Ft = Yt && Yt.binding && Yt.binding("util");
break t;
} catch (n) {}
Ft = void 0;
}
var Jt = Ft && Ft.isArrayBuffer, Wt = Ft && Ft.isDate, $t = Ft && Ft.isMap, Kt = Ft && Ft.isRegExp, Xt = Ft && Ft.isSet, Zt = Ft && Ft.isTypedArray, Qt = b("length"), te = w({
"À": "A",
"Á": "A",
"Â": "A",
"Ã": "A",
"Ä": "A",
"Å": "A",
"à": "a",
"á": "a",
"â": "a",
"ã": "a",
"ä": "a",
"å": "a",
"Ç": "C",
"ç": "c",
"Ð": "D",
"ð": "d",
"È": "E",
"É": "E",
"Ê": "E",
"Ë": "E",
"è": "e",
"é": "e",
"ê": "e",
"ë": "e",
"Ì": "I",
"Í": "I",
"Î": "I",
"Ï": "I",
"ì": "i",
"í": "i",
"î": "i",
"ï": "i",
"Ñ": "N",
"ñ": "n",
"Ò": "O",
"Ó": "O",
"Ô": "O",
"Õ": "O",
"Ö": "O",
"Ø": "O",
"ò": "o",
"ó": "o",
"ô": "o",
"õ": "o",
"ö": "o",
"ø": "o",
"Ù": "U",
"Ú": "U",
"Û": "U",
"Ü": "U",
"ù": "u",
"ú": "u",
"û": "u",
"ü": "u",
"Ý": "Y",
"ý": "y",
"ÿ": "y",
"Æ": "Ae",
"æ": "ae",
"Þ": "Th",
"þ": "th",
"ß": "ss",
"Ā": "A",
"Ă": "A",
"Ą": "A",
"ā": "a",
"ă": "a",
"ą": "a",
"Ć": "C",
"Ĉ": "C",
"Ċ": "C",
"Č": "C",
"ć": "c",
"ĉ": "c",
"ċ": "c",
"č": "c",
"Ď": "D",
"Đ": "D",
"ď": "d",
"đ": "d",
"Ē": "E",
"Ĕ": "E",
"Ė": "E",
"Ę": "E",
"Ě": "E",
"ē": "e",
"ĕ": "e",
"ė": "e",
"ę": "e",
"ě": "e",
"Ĝ": "G",
"Ğ": "G",
"Ġ": "G",
"Ģ": "G",
"ĝ": "g",
"ğ": "g",
"ġ": "g",
"ģ": "g",
"Ĥ": "H",
"Ħ": "H",
"ĥ": "h",
"ħ": "h",
"Ĩ": "I",
"Ī": "I",
"Ĭ": "I",
"Į": "I",
"İ": "I",
"ĩ": "i",
"ī": "i",
"ĭ": "i",
"į": "i",
"ı": "i",
"Ĵ": "J",
"ĵ": "j",
"Ķ": "K",
"ķ": "k",
"ĸ": "k",
"Ĺ": "L",
"Ļ": "L",
"Ľ": "L",
"Ŀ": "L",
"Ł": "L",
"ĺ": "l",
"ļ": "l",
"ľ": "l",
"ŀ": "l",
"ł": "l",
"Ń": "N",
"Ņ": "N",
"Ň": "N",
"Ŋ": "N",
"ń": "n",
"ņ": "n",
"ň": "n",
"ŋ": "n",
"Ō": "O",
"Ŏ": "O",
"Ő": "O",
"ō": "o",
"ŏ": "o",
"ő": "o",
"Ŕ": "R",
"Ŗ": "R",
"Ř": "R",
"ŕ": "r",
"ŗ": "r",
"ř": "r",
"Ś": "S",
"Ŝ": "S",
"Ş": "S",
"Š": "S",
"ś": "s",
"ŝ": "s",
"ş": "s",
"š": "s",
"Ţ": "T",
"Ť": "T",
"Ŧ": "T",
"ţ": "t",
"ť": "t",
"ŧ": "t",
"Ũ": "U",
"Ū": "U",
"Ŭ": "U",
"Ů": "U",
"Ű": "U",
"Ų": "U",
"ũ": "u",
"ū": "u",
"ŭ": "u",
"ů": "u",
"ű": "u",
"ų": "u",
"Ŵ": "W",
"ŵ": "w",
"Ŷ": "Y",
"ŷ": "y",
"Ÿ": "Y",
"Ź": "Z",
"Ż": "Z",
"Ž": "Z",
"ź": "z",
"ż": "z",
"ž": "z",
"Ĳ": "IJ",
"ĳ": "ij",
"Œ": "Oe",
"œ": "oe",
"ŉ": "'n",
"ſ": "s"
}), ee = w({
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#39;"
}), ie = w({
"&amp;": "&",
"&lt;": "<",
"&gt;": ">",
"&quot;": '"',
"&#39;": "'"
}), ne = function t(e) {
function i(t) {
if (sa(t) && !Km(t) && !(t instanceof At)) {
if (t instanceof Ct) return t;
if (Ka.call(t, "__wrapped__")) return Mn(t);
}
return new Ct(t);
}
function w() {}
function Ct(t, e) {
this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, 
this.__values__ = U;
}
function At(t) {
this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, 
this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
}
function It(t) {
var e = -1, i = null == t ? 0 : t.length;
for (this.clear(); ++e < i; ) {
var n = t[e];
this.set(n[0], n[1]);
}
}
function Ft(t) {
var e = -1, i = null == t ? 0 : t.length;
for (this.clear(); ++e < i; ) {
var n = t[e];
this.set(n[0], n[1]);
}
}
function Et(t) {
var e = -1, i = null == t ? 0 : t.length;
for (this.clear(); ++e < i; ) {
var n = t[e];
this.set(n[0], n[1]);
}
}
function Pt(t) {
var e = -1, i = null == t ? 0 : t.length;
for (this.__data__ = new Et(); ++e < i; ) this.add(t[e]);
}
function Vt(t) {
this.size = (this.__data__ = new Ft(t)).size;
}
function qt(t, e) {
var i, n = Km(t), a = !n && $m(t), o = !n && !a && Zm(t), m = !n && !a && !o && nr(t), r = (a = (n = n || a || o || m) ? S(t.length, za) : []).length;
for (i in t) !e && !Ka.call(t, i) || n && ("length" == i || o && ("offset" == i || "parent" == i) || m && ("buffer" == i || "byteLength" == i || "byteOffset" == i) || _n(i, r)) || a.push(i);
return a;
}
function zt(t) {
var e = t.length;
return e ? t[Ze(0, e - 1)] : U;
}
function Yt(t, e) {
return Nn(Bi(t), ce(e, 0, t.length));
}
function Qt(t) {
return Nn(Bi(t));
}
function ae(t, e, i) {
(i === U || ta(t[e], i)) && (i !== U || e in t) || pe(t, e, i);
}
function oe(t, e, i) {
var n = t[e];
Ka.call(t, e) && ta(n, i) && (i !== U || e in t) || pe(t, e, i);
}
function me(t, e) {
for (var i = t.length; i--; ) if (ta(t[i][0], e)) return i;
return -1;
}
function re(t, e, i, n) {
return $o(t, function(t, a, o) {
e(n, t, i(t), o);
}), n;
}
function se(t, e) {
return t && Ii(e, ba(e), t);
}
function le(t, e) {
return t && Ii(e, wa(e), t);
}
function pe(t, e, i) {
"__proto__" == e && fo ? fo(t, e, {
configurable: !0,
enumerable: !0,
value: i,
writable: !0
}) : t[e] = i;
}
function de(t, e) {
for (var i = -1, n = e.length, a = Ea(n), o = null == t; ++i < n; ) a[i] = o ? U : Ga(t, e[i]);
return a;
}
function ce(t, e, i) {
return t == t && (i !== U && (t = t <= i ? t : i), e !== U && (t = t >= e ? t : e)), 
t;
}
function ue(t, e, i, n, a, m) {
var r, s = 1 & e, l = 2 & e, p = 4 & e;
if (i && (r = a ? i(t, n, a, m) : i(t)), r !== U) return r;
if (!ra(t)) return t;
if (n = Km(t)) {
if (r = hn(t), !s) return Bi(t, r);
} else {
var d = mm(t), c = "[object Function]" == d || "[object GeneratorFunction]" == d;
if (Zm(t)) return bi(t, s);
if ("[object Object]" == d || "[object Arguments]" == d || c && !a) {
if (r = l || c ? {} : gn(t), !s) return l ? Ti(t, le(r, t)) : Ni(t, se(r, t));
} else {
if (!Ot[d]) return a ? t : {};
r = vn(t, d, s);
}
}
if (m || (m = new Vt()), a = m.get(t)) return a;
if (m.set(t, r), ir(t)) return t.forEach(function(n) {
r.add(ue(n, e, i, n, t, m));
}), r;
if (tr(t)) return t.forEach(function(n, a) {
r.set(a, ue(n, e, i, a, t, m));
}), r;
l = p ? l ? ln : sn : l ? wa : ba;
var u = n ? U : l(t);
return o(u || t, function(n, a) {
u && (n = t[a = n]), oe(r, a, ue(n, e, i, a, t, m));
}), r;
}
function ye(t) {
var e = ba(t);
return function(i) {
return fe(i, t, e);
};
}
function fe(t, e, i) {
var n = i.length;
if (null == t) return !n;
for (t = Ua(t); n--; ) {
var a = i[n], o = e[a], m = t[a];
if (m === U && !(a in t) || !o(m)) return !1;
}
return !0;
}
function xe(t, e, i) {
if ("function" != typeof t) throw new Ha("Expected a function");
return lm(function() {
t.apply(U, i);
}, e);
}
function he(t, e, i, n) {
var a = -1, o = l, m = !0, r = t.length, s = [], c = e.length;
if (!r) return s;
i && (e = d(e, I(i))), n ? (o = p, m = !1) : 200 <= e.length && (o = T, m = !1, 
e = new Pt(e));
t: for (;++a < r; ) {
var u = t[a], y = null == i ? u : i(u);
u = n || 0 !== u ? u : 0;
if (m && y == y) {
for (var f = c; f--; ) if (e[f] === y) continue t;
s.push(u);
} else o(e, y, n) || s.push(u);
}
return s;
}
function ge(t, e) {
var i = !0;
return $o(t, function(t, n, a) {
return i = !!e(t, n, a);
}), i;
}
function ve(t, e, i) {
for (var n = -1, a = t.length; ++n < a; ) {
var o = t[n], m = e(o);
if (null != m && (r === U ? m == m && !ca(m) : i(m, r))) var r = m, s = o;
}
return s;
}
function Ge(t, e) {
var i = [];
return $o(t, function(t, n, a) {
e(t, n, a) && i.push(t);
}), i;
}
function _e(t, e, i, n, a) {
var o = -1, m = t.length;
for (i || (i = Gn), a || (a = []); ++o < m; ) {
var r = t[o];
0 < e && i(r) ? 1 < e ? _e(r, e - 1, i, n, a) : c(a, r) : n || (a[a.length] = r);
}
return a;
}
function be(t, e) {
return t && Xo(t, e, ba);
}
function we(t, e) {
return t && Zo(t, e, ba);
}
function ke(t, e) {
return s(e, function(e) {
return aa(t[e]);
});
}
function Ce(t, e) {
for (var i = 0, n = (e = Gi(e, t)).length; null != t && i < n; ) t = t[Tn(e[i++])];
return i && i == n ? t : U;
}
function Ae(t, e, i) {
return e = e(t), Km(t) ? e : c(e, i(t));
}
function Se(t) {
if (null == t) t = t === U ? "[object Undefined]" : "[object Null]"; else if (yo && yo in Ua(t)) {
var e = Ka.call(t, yo), i = t[yo];
try {
t[yo] = U;
var n = !0;
} catch (t) {}
var a = Qa.call(t);
n && (e ? t[yo] = i : delete t[yo]), t = a;
} else t = Qa.call(t);
return t;
}
function Be(t, e) {
return t > e;
}
function Ie(t, e) {
return null != t && Ka.call(t, e);
}
function Ne(t, e) {
return null != t && e in Ua(t);
}
function Te(t, e, i) {
for (var n = i ? p : l, a = t[0].length, o = t.length, m = o, r = Ea(o), s = 1 / 0, c = []; m--; ) {
var u = t[m];
m && e && (u = d(u, I(e))), s = So(u.length, s), r[m] = !i && (e || 120 <= a && 120 <= u.length) ? new Pt(m && u) : U;
}
u = t[0];
var y = -1, f = r[0];
t: for (;++y < a && c.length < s; ) {
var x = u[y], h = e ? e(x) : x;
x = i || 0 !== x ? x : 0;
if (f ? !T(f, h) : !n(c, h, i)) {
for (m = o; --m; ) {
var g = r[m];
if (g ? !T(g, h) : !n(t[m], h, i)) continue t;
}
f && f.push(h), c.push(x);
}
}
return c;
}
function je(t, e, i) {
var n = {};
return be(t, function(t, a, o) {
e(n, i(t), a, o);
}), n;
}
function Le(t, e, i) {
return null == (e = null == (t = 2 > (e = Gi(e, t)).length ? t : Ce(t, oi(e, 0, -1))) ? t : t[Tn(Rn(e))]) ? U : n(e, t, i);
}
function Me(t) {
return sa(t) && "[object Arguments]" == Se(t);
}
function Oe(t, e, i, n, a) {
if (t === e) e = !0; else if (null == t || null == e || !sa(t) && !sa(e)) e = t != t && e != e; else t: {
var o, m, r = Km(t), s = Km(e), l = "[object Object]" == (o = "[object Arguments]" == (o = r ? "[object Array]" : mm(t)) ? "[object Object]" : o);
s = "[object Object]" == (m = "[object Arguments]" == (m = s ? "[object Array]" : mm(e)) ? "[object Object]" : m);
if ((m = o == m) && Zm(t)) {
if (!Zm(e)) {
e = !1;
break t;
}
r = !0, l = !1;
}
if (m && !l) a || (a = new Vt()), e = r || nr(t) ? on(t, e, i, n, Oe, a) : mn(t, e, o, i, n, Oe, a); else {
if (!(1 & i) && (r = l && Ka.call(t, "__wrapped__"), o = s && Ka.call(e, "__wrapped__"), 
r || o)) {
t = r ? t.value() : t, e = o ? e.value() : e, a || (a = new Vt()), e = Oe(t, e, i, n, a);
break t;
}
if (m) e: if (a || (a = new Vt()), r = 1 & i, o = sn(t), s = o.length, m = sn(e).length, 
s == m || r) {
for (l = s; l--; ) {
var p = o[l];
if (!(r ? p in e : Ka.call(e, p))) {
e = !1;
break e;
}
}
if ((m = a.get(t)) && a.get(e)) e = m == e; else {
m = !0, a.set(t, e), a.set(e, t);
for (var d = r; ++l < s; ) {
var c = t[p = o[l]], u = e[p];
if (n) var y = r ? n(u, c, p, e, t, a) : n(c, u, p, t, e, a);
if (y === U ? c !== u && !Oe(c, u, i, n, a) : !y) {
m = !1;
break;
}
d || (d = "constructor" == p);
}
m && !d && (i = t.constructor) != (n = e.constructor) && "constructor" in t && "constructor" in e && !("function" == typeof i && i instanceof i && "function" == typeof n && n instanceof n) && (m = !1), 
a.delete(t), a.delete(e), e = m;
}
} else e = !1; else e = !1;
}
}
return e;
}
function Fe(t, e, i, n) {
var a = i.length, o = a, m = !n;
if (null == t) return !o;
for (t = Ua(t); a--; ) {
var r = i[a];
if (m && r[2] ? r[1] !== t[r[0]] : !(r[0] in t)) return !1;
}
for (;++a < o; ) {
var s = (r = i[a])[0], l = t[s], p = r[1];
if (m && r[2]) {
if (l === U && !(s in t)) return !1;
} else {
if (r = new Vt(), n) var d = n(l, p, s, t, e, r);
if (d === U ? !Oe(p, l, 3, n, r) : !d) return !1;
}
}
return !0;
}
function Ee(t) {
return !(!ra(t) || Za && Za in t) && (aa(t) ? io : vt).test(jn(t));
}
function De(t) {
return "function" == typeof t ? t : null == t ? Na : "object" == typeof t ? Km(t) ? qe(t[0], t[1]) : Ue(t) : Ma(t);
}
function Re(t) {
if (!Cn(t)) return Co(t);
var e, i = [];
for (e in Ua(t)) Ka.call(t, e) && "constructor" != e && i.push(e);
return i;
}
function Pe(t, e) {
return t < e;
}
function Ve(t, e) {
var i = -1, n = ea(t) ? Ea(t.length) : [];
return $o(t, function(t, a, o) {
n[++i] = e(t, a, o);
}), n;
}
function Ue(t) {
var e = yn(t);
return 1 == e.length && e[0][2] ? An(e[0][0], e[0][1]) : function(i) {
return i === t || Fe(i, t, e);
};
}
function qe(t, e) {
return wn(t) && e == e && !ra(e) ? An(Tn(t), e) : function(i) {
var n = Ga(i, t);
return n === U && n === e ? _a(i, t) : Oe(e, n, 3);
};
}
function ze(t, e, i, n, a) {
t !== e && Xo(e, function(o, m) {
if (ra(o)) {
a || (a = new Vt());
var r = a, s = "__proto__" == m ? U : t[m], l = "__proto__" == m ? U : e[m];
if (y = r.get(l)) ae(t, m, y); else {
var p = (y = n ? n(s, l, m + "", t, e, r) : U) === U;
if (p) {
var d = Km(l), c = !d && Zm(l), u = !d && !c && nr(l), y = l;
d || c || u ? Km(s) ? y = s : ia(s) ? y = Bi(s) : c ? (p = !1, y = bi(l, !0)) : u ? (p = !1, 
y = ki(l, !0)) : y = [] : pa(l) || $m(l) ? (y = s, $m(s) ? y = ga(s) : (!ra(s) || i && aa(s)) && (y = gn(l))) : p = !1;
}
p && (r.set(l, y), ze(y, l, i, n, r), r.delete(l)), ae(t, m, y);
}
} else (r = n ? n("__proto__" == m ? U : t[m], o, m + "", t, e, a) : U) === U && (r = o), 
ae(t, m, r);
}, wa);
}
function He(t, e) {
var i = t.length;
if (i) return _n(e += 0 > e ? i : 0, i) ? t[e] : U;
}
function Ye(t, e, i) {
var n = -1;
return e = d(e.length ? e : [ Na ], I(cn())), C(t = Ve(t, function(t) {
return {
a: d(e, function(e) {
return e(t);
}),
b: ++n,
c: t
};
}), function(t, e) {
var n;
t: {
n = -1;
for (var a = t.a, o = e.a, m = a.length, r = i.length; ++n < m; ) {
var s = Ci(a[n], o[n]);
if (s) {
n = n >= r ? s : s * ("desc" == i[n] ? -1 : 1);
break t;
}
}
n = t.b - e.b;
}
return n;
});
}
function Je(t, e) {
return We(t, e, function(e, i) {
return _a(t, i);
});
}
function We(t, e, i) {
for (var n = -1, a = e.length, o = {}; ++n < a; ) {
var m = e[n], r = Ce(t, m);
i(r, m) && ni(o, Gi(m, t), r);
}
return o;
}
function $e(t) {
return function(e) {
return Ce(e, t);
};
}
function Ke(t, e, i, n) {
var a = n ? v : g, o = -1, m = e.length, r = t;
for (t === e && (e = Bi(e)), i && (r = d(t, I(i))); ++o < m; ) {
var s = 0, l = e[o];
for (l = i ? i(l) : l; -1 < (s = a(r, l, s, n)); ) r !== t && po.call(r, s, 1), 
po.call(t, s, 1);
}
return t;
}
function Xe(t, e) {
for (var i = t ? e.length : 0, n = i - 1; i--; ) {
var a = e[i];
if (i == n || a !== o) {
var o = a;
_n(a) ? po.call(t, a, 1) : ui(t, a);
}
}
}
function Ze(t, e) {
return t + Go(No() * (e - t + 1));
}
function Qe(t, e) {
var i = "";
if (!t || 1 > e || 9007199254740991 < e) return i;
do {
e % 2 && (i += t), (e = Go(e / 2)) && (t += t);
} while (e);
return i;
}
function ti(t, e) {
return pm(Sn(t, e, Na), t + "");
}
function ei(t) {
return zt(Ca(t));
}
function ii(t, e) {
var i = Ca(t);
return Nn(i, ce(e, 0, i.length));
}
function ni(t, e, i, n) {
if (!ra(t)) return t;
for (var a = -1, o = (e = Gi(e, t)).length, m = o - 1, r = t; null != r && ++a < o; ) {
var s = Tn(e[a]), l = i;
if (a != m) {
var p = r[s];
(l = n ? n(p, s, r) : U) === U && (l = ra(p) ? p : _n(e[a + 1]) ? [] : {});
}
oe(r, s, l), r = r[s];
}
return t;
}
function ai(t) {
return Nn(Ca(t));
}
function oi(t, e, i) {
var n = -1, a = t.length;
for (0 > e && (e = -e > a ? 0 : a + e), 0 > (i = i > a ? a : i) && (i += a), a = e > i ? 0 : i - e >>> 0, 
e >>>= 0, i = Ea(a); ++n < a; ) i[n] = t[n + e];
return i;
}
function mi(t, e) {
var i;
return $o(t, function(t, n, a) {
return !(i = e(t, n, a));
}), !!i;
}
function ri(t, e, i) {
var n = 0, a = null == t ? n : t.length;
if ("number" == typeof e && e == e && 2147483647 >= a) {
for (;n < a; ) {
var o = n + a >>> 1, m = t[o];
null !== m && !ca(m) && (i ? m <= e : m < e) ? n = o + 1 : a = o;
}
return a;
}
return si(t, e, Na, i);
}
function si(t, e, i, n) {
e = i(e);
for (var a = 0, o = null == t ? 0 : t.length, m = e != e, r = null === e, s = ca(e), l = e === U; a < o; ) {
var p = Go((a + o) / 2), d = i(t[p]), c = d !== U, u = null === d, y = d == d, f = ca(d);
(m ? n || y : l ? y && (n || c) : r ? y && c && (n || !u) : s ? y && c && !u && (n || !f) : !u && !f && (n ? d <= e : d < e)) ? a = p + 1 : o = p;
}
return So(o, 4294967294);
}
function li(t, e) {
for (var i = -1, n = t.length, a = 0, o = []; ++i < n; ) {
var m = t[i], r = e ? e(m) : m;
if (!i || !ta(r, s)) {
var s = r;
o[a++] = 0 === m ? 0 : m;
}
}
return o;
}
function pi(t) {
return "number" == typeof t ? t : ca(t) ? z : +t;
}
function di(t) {
if ("string" == typeof t) return t;
if (Km(t)) return d(t, di) + "";
if (ca(t)) return Jo ? Jo.call(t) : "";
var e = t + "";
return "0" == e && 1 / t == -q ? "-0" : e;
}
function ci(t, e, i) {
var n = -1, a = l, o = t.length, m = !0, r = [], s = r;
if (i) m = !1, a = p; else if (200 <= o) {
if (a = e ? null : im(t)) return D(a);
m = !1, a = T, s = new Pt();
} else s = e ? [] : r;
t: for (;++n < o; ) {
var d = t[n], c = e ? e(d) : d;
d = i || 0 !== d ? d : 0;
if (m && c == c) {
for (var u = s.length; u--; ) if (s[u] === c) continue t;
e && s.push(c), r.push(d);
} else a(s, c, i) || (s !== r && s.push(c), r.push(d));
}
return r;
}
function ui(t, e) {
return null == (t = 2 > (e = Gi(e, t)).length ? t : Ce(t, oi(e, 0, -1))) || delete t[Tn(Rn(e))];
}
function yi(t, e, i, n) {
for (var a = t.length, o = n ? a : -1; (n ? o-- : ++o < a) && e(t[o], o, t); ) ;
return i ? oi(t, n ? 0 : o, n ? o + 1 : a) : oi(t, n ? o + 1 : 0, n ? a : o);
}
function fi(t, e) {
var i = t;
return i instanceof At && (i = i.value()), u(e, function(t, e) {
return e.func.apply(e.thisArg, c([ t ], e.args));
}, i);
}
function xi(t, e, i) {
var n = t.length;
if (2 > n) return n ? ci(t[0]) : [];
for (var a = -1, o = Ea(n); ++a < n; ) for (var m = t[a], r = -1; ++r < n; ) r != a && (o[a] = he(o[a] || m, t[r], e, i));
return ci(_e(o, 1), e, i);
}
function hi(t, e, i) {
for (var n = -1, a = t.length, o = e.length, m = {}; ++n < a; ) i(m, t[n], n < o ? e[n] : U);
return m;
}
function gi(t) {
return ia(t) ? t : [];
}
function vi(t) {
return "function" == typeof t ? t : Na;
}
function Gi(t, e) {
return Km(t) ? t : wn(t, e) ? [ t ] : dm(va(t));
}
function _i(t, e, i) {
var n = t.length;
return i = i === U ? n : i, !e && i >= n ? t : oi(t, e, i);
}
function bi(t, e) {
if (e) return t.slice();
var i = t.length;
i = mo ? mo(i) : new t.constructor(i);
return t.copy(i), i;
}
function wi(t) {
var e = new t.constructor(t.byteLength);
return new oo(e).set(new oo(t)), e;
}
function ki(t, e) {
return new t.constructor(e ? wi(t.buffer) : t.buffer, t.byteOffset, t.length);
}
function Ci(t, e) {
if (t !== e) {
var i = t !== U, n = null === t, a = t == t, o = ca(t), m = e !== U, r = null === e, s = e == e, l = ca(e);
if (!r && !l && !o && t > e || o && m && s && !r && !l || n && m && s || !i && s || !a) return 1;
if (!n && !o && !l && t < e || l && i && a && !n && !o || r && i && a || !m && a || !s) return -1;
}
return 0;
}
function Ai(t, e, i, n) {
var a = -1, o = t.length, m = i.length, r = -1, s = e.length, l = Ao(o - m, 0), p = Ea(s + l);
for (n = !n; ++r < s; ) p[r] = e[r];
for (;++a < m; ) (n || a < o) && (p[i[a]] = t[a]);
for (;l--; ) p[r++] = t[a++];
return p;
}
function Si(t, e, i, n) {
var a = -1, o = t.length, m = -1, r = i.length, s = -1, l = e.length, p = Ao(o - r, 0), d = Ea(p + l);
for (n = !n; ++a < p; ) d[a] = t[a];
for (p = a; ++s < l; ) d[p + s] = e[s];
for (;++m < r; ) (n || a < o) && (d[p + i[m]] = t[a++]);
return d;
}
function Bi(t, e) {
var i = -1, n = t.length;
for (e || (e = Ea(n)); ++i < n; ) e[i] = t[i];
return e;
}
function Ii(t, e, i, n) {
var a = !i;
i || (i = {});
for (var o = -1, m = e.length; ++o < m; ) {
var r = e[o], s = n ? n(i[r], t[r], r, i, t) : U;
s === U && (s = t[r]), a ? pe(i, r, s) : oe(i, r, s);
}
return i;
}
function Ni(t, e) {
return Ii(t, am(t), e);
}
function Ti(t, e) {
return Ii(t, om(t), e);
}
function ji(t, e) {
return function(i, n) {
var o = Km(i) ? a : re, m = e ? e() : {};
return o(i, t, cn(n, 2), m);
};
}
function Li(t) {
return ti(function(e, i) {
var n = -1, a = i.length, o = 1 < a ? i[a - 1] : U, m = 2 < a ? i[2] : U;
o = 3 < t.length && "function" == typeof o ? (a--, o) : U;
for (m && bn(i[0], i[1], m) && (o = 3 > a ? U : o, a = 1), e = Ua(e); ++n < a; ) (m = i[n]) && t(e, m, n, o);
return e;
});
}
function Mi(t, e) {
return function(i, n) {
if (null == i) return i;
if (!ea(i)) return t(i, n);
for (var a = i.length, o = e ? a : -1, m = Ua(i); (e ? o-- : ++o < a) && !1 !== n(m[o], o, m); ) ;
return i;
};
}
function Oi(t) {
return function(e, i, n) {
for (var a = -1, o = Ua(e), m = (n = n(e)).length; m--; ) {
var r = n[t ? m : ++a];
if (!1 === i(o[r], r, o)) break;
}
return e;
};
}
function Fi(t, e, i) {
var n = 1 & e, a = Ri(t);
return function e() {
return (this && this !== Ut && this instanceof e ? a : t).apply(n ? i : this, arguments);
};
}
function Ei(t) {
return function(e) {
e = va(e);
var i = Tt.test(e) ? V(e) : U, n = i ? i[0] : e.charAt(0);
return e = i ? _i(i, 1).join("") : e.slice(1), n[t]() + e;
};
}
function Di(t) {
return function(e) {
return u(Ba(Sa(e).replace(St, "")), t, "");
};
}
function Ri(t) {
return function() {
switch ((e = arguments).length) {
case 0:
return new t();

case 1:
return new t(e[0]);

case 2:
return new t(e[0], e[1]);

case 3:
return new t(e[0], e[1], e[2]);

case 4:
return new t(e[0], e[1], e[2], e[3]);

case 5:
return new t(e[0], e[1], e[2], e[3], e[4]);

case 6:
return new t(e[0], e[1], e[2], e[3], e[4], e[5]);

case 7:
return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
}
var e, i = Wo(t.prototype);
return ra(e = t.apply(i, e)) ? e : i;
};
}
function Pi(t, e, i) {
var a = Ri(t);
return function o() {
for (var m = arguments.length, r = Ea(m), s = m, l = dn(o); s--; ) r[s] = arguments[s];
return (m -= (s = 3 > m && r[0] !== l && r[m - 1] !== l ? [] : E(r, l)).length) < i ? Xi(t, e, qi, o.placeholder, U, r, s, U, U, i - m) : n(this && this !== Ut && this instanceof o ? a : t, this, r);
};
}
function Vi(t) {
return function(e, i, n) {
var a = Ua(e);
if (!ea(e)) {
var o = cn(i, 3);
e = ba(e), i = function(t) {
return o(a[t], t, a);
};
}
return -1 < (i = t(e, i, n)) ? a[o ? e[i] : i] : U;
};
}
function Ui(t) {
return rn(function(e) {
var i = e.length, n = i, a = Ct.prototype.thru;
for (t && e.reverse(); n--; ) {
if ("function" != typeof (m = e[n])) throw new Ha("Expected a function");
if (a && !o && "wrapper" == pn(m)) var o = new Ct([], !0);
}
for (n = o ? n : i; ++n < i; ) {
var m, r = "wrapper" == (a = pn(m = e[n])) ? nm(m) : U;
o = r && kn(r[0]) && 424 == r[1] && !r[4].length && 1 == r[9] ? o[pn(r[0])].apply(o, r[3]) : 1 == m.length && kn(m) ? o[a]() : o.thru(m);
}
return function() {
var t = (a = arguments)[0];
if (o && 1 == a.length && Km(t)) return o.plant(t).value();
for (var n = 0, a = i ? e[n].apply(this, a) : t; ++n < i; ) a = e[n].call(this, a);
return a;
};
});
}
function qi(t, e, i, n, a, o, m, r, s, l) {
var p = 128 & e, d = 1 & e, c = 2 & e, u = 24 & e, y = 512 & e, f = c ? U : Ri(t);
return function x() {
for (var h = arguments.length, g = Ea(h), v = h; v--; ) g[v] = arguments[v];
if (u) {
var G, _ = dn(x);
v = g.length;
for (G = 0; v--; ) g[v] === _ && ++G;
}
if (n && (g = Ai(g, n, a, u)), o && (g = Si(g, o, m, u)), h -= G, u && h < l) return _ = E(g, _), 
Xi(t, e, qi, x.placeholder, i, g, _, r, s, l - h);
if (_ = d ? i : this, v = c ? _[t] : t, h = g.length, r) {
G = g.length;
for (var b = So(r.length, G), w = Bi(g); b--; ) {
var k = r[b];
g[b] = _n(k, G) ? w[k] : U;
}
} else y && 1 < h && g.reverse();
return p && s < h && (g.length = s), this && this !== Ut && this instanceof x && (v = f || Ri(v)), 
v.apply(_, g);
};
}
function zi(t, e) {
return function(i, n) {
return je(i, t, e(n));
};
}
function Hi(t, e) {
return function(i, n) {
var a;
if (i === U && n === U) return e;
if (i !== U && (a = i), n !== U) {
if (a === U) return n;
"string" == typeof i || "string" == typeof n ? (i = di(i), n = di(n)) : (i = pi(i), 
n = pi(n)), a = t(i, n);
}
return a;
};
}
function Yi(t) {
return rn(function(e) {
return e = d(e, I(cn())), ti(function(i) {
var a = this;
return t(e, function(t) {
return n(t, a, i);
});
});
});
}
function Ji(t, e) {
var i = (e = e === U ? " " : di(e)).length;
return 2 > i ? i ? Qe(e, t) : e : (i = Qe(e, vo(t / P(e))), Tt.test(e) ? _i(V(i), 0, t).join("") : i.slice(0, t));
}
function Wi(t, e, i, a) {
var o = 1 & e, m = Ri(t);
return function e() {
for (var r = -1, s = arguments.length, l = -1, p = a.length, d = Ea(p + s), c = this && this !== Ut && this instanceof e ? m : t; ++l < p; ) d[l] = a[l];
for (;s--; ) d[l++] = arguments[++r];
return n(c, o ? i : this, d);
};
}
function $i(t) {
return function(e, i, n) {
n && "number" != typeof n && bn(e, i, n) && (i = n = U), e = ya(e), i === U ? (i = e, 
e = 0) : i = ya(i), n = n === U ? e < i ? 1 : -1 : ya(n);
var a = -1;
i = Ao(vo((i - e) / (n || 1)), 0);
for (var o = Ea(i); i--; ) o[t ? i : ++a] = e, e += n;
return o;
};
}
function Ki(t) {
return function(e, i) {
return "string" == typeof e && "string" == typeof i || (e = ha(e), i = ha(i)), t(e, i);
};
}
function Xi(t, e, i, n, a, o, m, r, s, l) {
var p = 8 & e;
return 4 & (e = (e | (p ? 32 : 64)) & ~(p ? 64 : 32)) || (e &= -4), a = [ t, e, a, p ? o : U, p ? m : U, o = p ? U : o, m = p ? U : m, r, s, l ], 
i = i.apply(U, a), kn(t) && sm(i, a), i.placeholder = n, Bn(i, t, e);
}
function Zi(t) {
var e = Va[t];
return function(t, i) {
if (t = ha(t), i = null == i ? 0 : So(fa(i), 292)) {
var n = (va(t) + "e").split("e");
return +((n = (va(n = e(n[0] + "e" + (+n[1] + i))) + "e").split("e"))[0] + "e" + (+n[1] - i));
}
return e(t);
};
}
function Qi(t) {
return function(e) {
var i = mm(e);
return "[object Map]" == i ? O(e) : "[object Set]" == i ? R(e) : B(e, t(e));
};
}
function tn(t, e, i, n, a, o, m, r) {
var s = 2 & e;
if (!s && "function" != typeof t) throw new Ha("Expected a function");
var l = n ? n.length : 0;
if (l || (e &= -97, n = a = U), m = m === U ? m : Ao(fa(m), 0), r = r === U ? r : fa(r), 
l -= a ? a.length : 0, 64 & e) {
var p = n, d = a;
n = a = U;
}
var c = s ? U : nm(t);
return o = [ t, e, i, n, a, p, d, o, m, r ], c && (e = (i = o[1]) | (t = c[1]), 
n = 128 == t && 8 == i || 128 == t && 256 == i && o[7].length <= c[8] || 384 == t && c[7].length <= c[8] && 8 == i, 
131 > e || n) && (1 & t && (o[2] = c[2], e |= 1 & i ? 0 : 4), (i = c[3]) && (n = o[3], 
o[3] = n ? Ai(n, i, c[4]) : i, o[4] = n ? E(o[3], "__lodash_placeholder__") : c[4]), 
(i = c[5]) && (n = o[5], o[5] = n ? Si(n, i, c[6]) : i, o[6] = n ? E(o[5], "__lodash_placeholder__") : c[6]), 
(i = c[7]) && (o[7] = i), 128 & t && (o[8] = null == o[8] ? c[8] : So(o[8], c[8])), 
null == o[9] && (o[9] = c[9]), o[0] = c[0], o[1] = e), t = o[0], e = o[1], i = o[2], 
n = o[3], a = o[4], !(r = o[9] = o[9] === U ? s ? 0 : t.length : Ao(o[9] - l, 0)) && 24 & e && (e &= -25), 
Bn((c ? Qo : sm)(e && 1 != e ? 8 == e || 16 == e ? Pi(t, e, r) : 32 != e && 33 != e || a.length ? qi.apply(U, o) : Wi(t, e, i, n) : Fi(t, e, i), o), t, e);
}
function en(t, e, i, n) {
return t === U || ta(t, Ja[i]) && !Ka.call(n, i) ? e : t;
}
function nn(t, e, i, n, a, o) {
return ra(t) && ra(e) && (o.set(e, t), ze(t, e, U, nn, o), o.delete(e)), t;
}
function an(t) {
return pa(t) ? U : t;
}
function on(t, e, i, n, a, o) {
var m = 1 & i, r = t.length;
if (r != (s = e.length) && !(m && s > r)) return !1;
if ((s = o.get(t)) && o.get(e)) return s == e;
var s = -1, l = !0, p = 2 & i ? new Pt() : U;
for (o.set(t, e), o.set(e, t); ++s < r; ) {
var d = t[s], c = e[s];
if (n) var u = m ? n(c, d, s, e, t, o) : n(d, c, s, t, e, o);
if (u !== U) {
if (u) continue;
l = !1;
break;
}
if (p) {
if (!f(e, function(t, e) {
if (!T(p, e) && (d === t || a(d, t, i, n, o))) return p.push(e);
})) {
l = !1;
break;
}
} else if (d !== c && !a(d, c, i, n, o)) {
l = !1;
break;
}
}
return o.delete(t), o.delete(e), l;
}
function mn(t, e, i, n, a, o, m) {
switch (i) {
case "[object DataView]":
if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
t = t.buffer, e = e.buffer;

case "[object ArrayBuffer]":
if (t.byteLength != e.byteLength || !o(new oo(t), new oo(e))) break;
return !0;

case "[object Boolean]":
case "[object Date]":
case "[object Number]":
return ta(+t, +e);

case "[object Error]":
return t.name == e.name && t.message == e.message;

case "[object RegExp]":
case "[object String]":
return t == e + "";

case "[object Map]":
var r = O;

case "[object Set]":
if (r || (r = D), t.size != e.size && !(1 & n)) break;
return (i = m.get(t)) ? i == e : (n |= 2, m.set(t, e), e = on(r(t), r(e), n, a, o, m), 
m.delete(t), e);

case "[object Symbol]":
if (Yo) return Yo.call(t) == Yo.call(e);
}
return !1;
}
function rn(t) {
return pm(Sn(t, U, En), t + "");
}
function sn(t) {
return Ae(t, ba, am);
}
function ln(t) {
return Ae(t, wa, om);
}
function pn(t) {
for (var e = t.name + "", i = Ro[e], n = Ka.call(Ro, e) ? i.length : 0; n--; ) {
var a = i[n], o = a.func;
if (null == o || o == t) return a.name;
}
return e;
}
function dn(t) {
return (Ka.call(i, "placeholder") ? i : t).placeholder;
}
function cn() {
var t = (t = i.iteratee || Ta) === Ta ? De : t;
return arguments.length ? t(arguments[0], arguments[1]) : t;
}
function un(t, e) {
var i = t.__data__, n = typeof e;
return ("string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
}
function yn(t) {
for (var e = ba(t), i = e.length; i--; ) {
var n = e[i], a = t[n];
e[i] = [ n, a, a == a && !ra(a) ];
}
return e;
}
function fn(t, e) {
var i = null == t ? U : t[e];
return Ee(i) ? i : U;
}
function xn(t, e, i) {
for (var n = -1, a = (e = Gi(e, t)).length, o = !1; ++n < a; ) {
var m = Tn(e[n]);
if (!(o = null != t && i(t, m))) break;
t = t[m];
}
return o || ++n != a ? o : !!(a = null == t ? 0 : t.length) && ma(a) && _n(m, a) && (Km(t) || $m(t));
}
function hn(t) {
var e = t.length, i = new t.constructor(e);
return e && "string" == typeof t[0] && Ka.call(t, "index") && (i.index = t.index, 
i.input = t.input), i;
}
function gn(t) {
return "function" != typeof t.constructor || Cn(t) ? {} : Wo(ro(t));
}
function vn(t, e, i) {
var n = t.constructor;
switch (e) {
case "[object ArrayBuffer]":
return wi(t);

case "[object Boolean]":
case "[object Date]":
return new n(+t);

case "[object DataView]":
return e = i ? wi(t.buffer) : t.buffer, new t.constructor(e, t.byteOffset, t.byteLength);

case "[object Float32Array]":
case "[object Float64Array]":
case "[object Int8Array]":
case "[object Int16Array]":
case "[object Int32Array]":
case "[object Uint8Array]":
case "[object Uint8ClampedArray]":
case "[object Uint16Array]":
case "[object Uint32Array]":
return ki(t, i);

case "[object Map]":
return new n();

case "[object Number]":
case "[object String]":
return new n(t);

case "[object RegExp]":
return (e = new t.constructor(t.source, xt.exec(t))).lastIndex = t.lastIndex, e;

case "[object Set]":
return new n();

case "[object Symbol]":
return Yo ? Ua(Yo.call(t)) : {};
}
}
function Gn(t) {
return Km(t) || $m(t) || !!(co && t && t[co]);
}
function _n(t, e) {
var i = typeof t;
return !!(e = null == e ? 9007199254740991 : e) && ("number" == i || "symbol" != i && _t.test(t)) && -1 < t && 0 == t % 1 && t < e;
}
function bn(t, e, i) {
if (!ra(i)) return !1;
var n = typeof e;
return !!("number" == n ? ea(i) && _n(e, i.length) : "string" == n && e in i) && ta(i[e], t);
}
function wn(t, e) {
if (Km(t)) return !1;
var i = typeof t;
return !("number" != i && "symbol" != i && "boolean" != i && null != t && !ca(t)) || nt.test(t) || !it.test(t) || null != e && t in Ua(e);
}
function kn(t) {
var e = pn(t), n = i[e];
return "function" == typeof n && e in At.prototype && (t === n || !!(e = nm(n)) && t === e[0]);
}
function Cn(t) {
var e = t && t.constructor;
return t === ("function" == typeof e && e.prototype || Ja);
}
function An(t, e) {
return function(i) {
return null != i && i[t] === e && (e !== U || t in Ua(i));
};
}
function Sn(t, e, i) {
return e = Ao(e === U ? t.length - 1 : e, 0), function() {
for (var a = arguments, o = -1, m = Ao(a.length - e, 0), r = Ea(m); ++o < m; ) r[o] = a[e + o];
for (o = -1, m = Ea(e + 1); ++o < e; ) m[o] = a[o];
return m[e] = i(r), n(t, this, m);
};
}
function Bn(t, e, i) {
var n = e + "";
e = pm;
var a, o = Ln;
return i = o(a = (a = n.match(dt)) ? a[1].split(ct) : [], i), (o = i.length) && (i[a = o - 1] = (1 < o ? "& " : "") + i[a], 
i = i.join(2 < o ? ", " : " "), n = n.replace(pt, "{\n/* [wrapped with " + i + "] */\n")), 
e(t, n);
}
function In(t) {
var e = 0, i = 0;
return function() {
var n = Bo(), a = 16 - (n - i);
if (i = n, 0 < a) {
if (800 <= ++e) return arguments[0];
} else e = 0;
return t.apply(U, arguments);
};
}
function Nn(t, e) {
var i = -1, n = (a = t.length) - 1;
for (e = e === U ? a : e; ++i < e; ) {
var a, o = t[a = Ze(i, n)];
t[a] = t[i], t[i] = o;
}
return t.length = e, t;
}
function Tn(t) {
if ("string" == typeof t || ca(t)) return t;
var e = t + "";
return "0" == e && 1 / t == -q ? "-0" : e;
}
function jn(t) {
if (null != t) {
try {
return $a.call(t);
} catch (t) {}
return t + "";
}
return "";
}
function Ln(t, e) {
return o(H, function(i) {
var n = "_." + i[0];
e & i[1] && !l(t, n) && t.push(n);
}), t.sort();
}
function Mn(t) {
if (t instanceof At) return t.clone();
var e = new Ct(t.__wrapped__, t.__chain__);
return e.__actions__ = Bi(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, 
e;
}
function On(t, e, i) {
var n = null == t ? 0 : t.length;
return n ? (0 > (i = null == i ? 0 : fa(i)) && (i = Ao(n + i, 0)), h(t, cn(e, 3), i)) : -1;
}
function Fn(t, e, i) {
var n = null == t ? 0 : t.length;
if (!n) return -1;
var a = n - 1;
return i !== U && (a = fa(i), a = 0 > i ? Ao(n + a, 0) : So(a, n - 1)), h(t, cn(e, 3), a, !0);
}
function En(t) {
return null != t && t.length ? _e(t, 1) : [];
}
function Dn(t) {
return t && t.length ? t[0] : U;
}
function Rn(t) {
var e = null == t ? 0 : t.length;
return e ? t[e - 1] : U;
}
function Pn(t, e) {
return t && t.length && e && e.length ? Ke(t, e) : t;
}
function Vn(t) {
return null == t ? t : To.call(t);
}
function Un(t) {
if (!t || !t.length) return [];
var e = 0;
return t = s(t, function(t) {
if (ia(t)) return e = Ao(t.length, e), !0;
}), S(e, function(e) {
return d(t, b(e));
});
}
function qn(t, e) {
if (!t || !t.length) return [];
var i = Un(t);
return null == e ? i : d(i, function(t) {
return n(e, U, t);
});
}
function zn(t) {
return (t = i(t)).__chain__ = !0, t;
}
function Hn(t, e) {
return e(t);
}
function Yn(t, e) {
return (Km(t) ? o : $o)(t, cn(e, 3));
}
function Jn(t, e) {
return (Km(t) ? m : Ko)(t, cn(e, 3));
}
function Wn(t, e) {
return (Km(t) ? d : Ve)(t, cn(e, 3));
}
function $n(t, e, i) {
return e = i ? U : e, e = t && null == e ? t.length : e, tn(t, 128, U, U, U, U, e);
}
function Kn(t, e) {
var i;
if ("function" != typeof e) throw new Ha("Expected a function");
return t = fa(t), function() {
return 0 < --t && (i = e.apply(this, arguments)), 1 >= t && (e = U), i;
};
}
function Xn(t, e, i) {
function n(e) {
var i = s, n = l;
return s = l = U, y = e, d = t.apply(n, i);
}
function a(t) {
var i = t - u;
return t -= y, u === U || i >= e || 0 > i || x && t >= p;
}
function o() {
var t = Dm();
if (a(t)) return m(t);
var i, n = lm;
i = t - y, t = e - (t - u), i = x ? So(t, p - i) : t, c = n(o, i);
}
function m(t) {
return c = U, h && s ? n(t) : (s = l = U, d);
}
function r() {
var t = Dm(), i = a(t);
if (s = arguments, l = this, u = t, i) {
if (c === U) return y = t = u, c = lm(o, e), f ? n(t) : d;
if (x) return c = lm(o, e), n(u);
}
return c === U && (c = lm(o, e)), d;
}
var s, l, p, d, c, u, y = 0, f = !1, x = !1, h = !0;
if ("function" != typeof t) throw new Ha("Expected a function");
return e = ha(e) || 0, ra(i) && (f = !!i.leading, p = (x = "maxWait" in i) ? Ao(ha(i.maxWait) || 0, e) : p, 
h = "trailing" in i ? !!i.trailing : h), r.cancel = function() {
c !== U && em(c), y = 0, s = u = l = c = U;
}, r.flush = function() {
return c === U ? d : m(Dm());
}, r;
}
function Zn(t, e) {
function i() {
var n = arguments, a = e ? e.apply(this, n) : n[0], o = i.cache;
return o.has(a) ? o.get(a) : (n = t.apply(this, n), i.cache = o.set(a, n) || o, 
n);
}
if ("function" != typeof t || null != e && "function" != typeof e) throw new Ha("Expected a function");
return i.cache = new (Zn.Cache || Et)(), i;
}
function Qn(t) {
if ("function" != typeof t) throw new Ha("Expected a function");
return function() {
var e = arguments;
switch (e.length) {
case 0:
return !t.call(this);

case 1:
return !t.call(this, e[0]);

case 2:
return !t.call(this, e[0], e[1]);

case 3:
return !t.call(this, e[0], e[1], e[2]);
}
return !t.apply(this, e);
};
}
function ta(t, e) {
return t === e || t != t && e != e;
}
function ea(t) {
return null != t && ma(t.length) && !aa(t);
}
function ia(t) {
return sa(t) && ea(t);
}
function na(t) {
if (!sa(t)) return !1;
var e = Se(t);
return "[object Error]" == e || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !pa(t);
}
function aa(t) {
return !!ra(t) && ("[object Function]" == (t = Se(t)) || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t);
}
function oa(t) {
return "number" == typeof t && t == fa(t);
}
function ma(t) {
return "number" == typeof t && -1 < t && 0 == t % 1 && 9007199254740991 >= t;
}
function ra(t) {
var e = typeof t;
return null != t && ("object" == e || "function" == e);
}
function sa(t) {
return null != t && "object" == typeof t;
}
function la(t) {
return "number" == typeof t || sa(t) && "[object Number]" == Se(t);
}
function pa(t) {
return !(!sa(t) || "[object Object]" != Se(t)) && (null === (t = ro(t)) || "function" == typeof (t = Ka.call(t, "constructor") && t.constructor) && t instanceof t && $a.call(t) == to);
}
function da(t) {
return "string" == typeof t || !Km(t) && sa(t) && "[object String]" == Se(t);
}
function ca(t) {
return "symbol" == typeof t || sa(t) && "[object Symbol]" == Se(t);
}
function ua(t) {
if (!t) return [];
if (ea(t)) return da(t) ? V(t) : Bi(t);
if (uo && t[uo]) {
t = t[uo]();
for (var e, i = []; !(e = t.next()).done; ) i.push(e.value);
return i;
}
return ("[object Map]" == (e = mm(t)) ? O : "[object Set]" == e ? D : Ca)(t);
}
function ya(t) {
return t ? (t = ha(t)) === q || t === -q ? 17976931348623157e292 * (0 > t ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0;
}
function fa(t) {
var e = (t = ya(t)) % 1;
return t == t ? e ? t - e : t : 0;
}
function xa(t) {
return t ? ce(fa(t), 0, 4294967295) : 0;
}
function ha(t) {
if ("number" == typeof t) return t;
if (ca(t)) return z;
if (ra(t) && (t = ra(t = "function" == typeof t.valueOf ? t.valueOf() : t) ? t + "" : t), 
"string" != typeof t) return 0 === t ? t : +t;
t = t.replace(rt, "");
var e = gt.test(t);
return e || Gt.test(t) ? Rt(t.slice(2), e ? 2 : 8) : ht.test(t) ? z : +t;
}
function ga(t) {
return Ii(t, wa(t));
}
function va(t) {
return null == t ? "" : di(t);
}
function Ga(t, e, i) {
return (t = null == t ? U : Ce(t, e)) === U ? i : t;
}
function _a(t, e) {
return null != t && xn(t, e, Ne);
}
function ba(t) {
return ea(t) ? qt(t) : Re(t);
}
function wa(t) {
if (ea(t)) t = qt(t, !0); else if (ra(t)) {
var e, i = Cn(t), n = [];
for (e in t) ("constructor" != e || !i && Ka.call(t, e)) && n.push(e);
t = n;
} else {
if (e = [], null != t) for (i in Ua(t)) e.push(i);
t = e;
}
return t;
}
function ka(t, e) {
if (null == t) return {};
var i = d(ln(t), function(t) {
return [ t ];
});
return e = cn(e), We(t, i, function(t, i) {
return e(t, i[0]);
});
}
function Ca(t) {
return null == t ? [] : N(t, ba(t));
}
function Aa(t) {
return Ir(va(t).toLowerCase());
}
function Sa(t) {
return (t = va(t)) && t.replace(bt, te).replace(Bt, "");
}
function Ba(t, e, i) {
return t = va(t), (e = i ? U : e) === U ? jt.test(t) ? t.match(Nt) || [] : t.match(ut) || [] : t.match(e) || [];
}
function Ia(t) {
return function() {
return t;
};
}
function Na(t) {
return t;
}
function Ta(t) {
return De("function" == typeof t ? t : ue(t, 1));
}
function ja(t, e, i) {
var n = ba(e), a = ke(e, n);
null != i || ra(e) && (a.length || !n.length) || (i = e, e = t, t = this, a = ke(e, ba(e)));
var m = !(ra(i) && "chain" in i && !i.chain), r = aa(t);
return o(a, function(i) {
var n = e[i];
t[i] = n, r && (t.prototype[i] = function() {
var e = this.__chain__;
if (m || e) {
var i = t(this.__wrapped__);
return (i.__actions__ = Bi(this.__actions__)).push({
func: n,
args: arguments,
thisArg: t
}), i.__chain__ = e, i;
}
return n.apply(t, c([ this.value() ], arguments));
});
}), t;
}
function La() {}
function Ma(t) {
return wn(t) ? b(Tn(t)) : $e(t);
}
function Oa() {
return [];
}
function Fa() {
return !1;
}
var Ea = (e = null == e ? Ut : ne.defaults(Ut.Object(), e, ne.pick(Ut, Lt))).Array, Da = e.Date, Ra = e.Error, Pa = e.Function, Va = e.Math, Ua = e.Object, qa = e.RegExp, za = e.String, Ha = e.TypeError, Ya = Ea.prototype, Ja = Ua.prototype, Wa = e["__core-js_shared__"], $a = Pa.prototype.toString, Ka = Ja.hasOwnProperty, Xa = 0, Za = function() {
var t = /[^.]+$/.exec(Wa && Wa.keys && Wa.keys.IE_PROTO || "");
return t ? "Symbol(src)_1." + t : "";
}(), Qa = Ja.toString, to = $a.call(Ua), eo = Ut._, io = qa("^" + $a.call(Ka).replace(ot, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), no = Ht ? e.Buffer : U, ao = e.Symbol, oo = e.Uint8Array, mo = no ? no.f : U, ro = F(Ua.getPrototypeOf, Ua), so = Ua.create, lo = Ja.propertyIsEnumerable, po = Ya.splice, co = ao ? ao.isConcatSpreadable : U, uo = ao ? ao.iterator : U, yo = ao ? ao.toStringTag : U, fo = function() {
try {
var t = fn(Ua, "defineProperty");
return t({}, "", {}), t;
} catch (t) {}
}(), xo = e.clearTimeout !== Ut.clearTimeout && e.clearTimeout, ho = Da && Da.now !== Ut.Date.now && Da.now, go = e.setTimeout !== Ut.setTimeout && e.setTimeout, vo = Va.ceil, Go = Va.floor, _o = Ua.getOwnPropertySymbols, bo = no ? no.isBuffer : U, wo = e.isFinite, ko = Ya.join, Co = F(Ua.keys, Ua), Ao = Va.max, So = Va.min, Bo = Da.now, Io = e.parseInt, No = Va.random, To = Ya.reverse, jo = fn(e, "DataView"), Lo = fn(e, "Map"), Mo = fn(e, "Promise"), Oo = fn(e, "Set"), Fo = fn(e, "WeakMap"), Eo = fn(Ua, "create"), Do = Fo && new Fo(), Ro = {}, Po = jn(jo), Vo = jn(Lo), Uo = jn(Mo), qo = jn(Oo), zo = jn(Fo), Ho = ao ? ao.prototype : U, Yo = Ho ? Ho.valueOf : U, Jo = Ho ? Ho.toString : U, Wo = function() {
function t() {}
return function(e) {
return ra(e) ? so ? so(e) : (t.prototype = e, e = new t(), t.prototype = U, e) : {};
};
}();
i.templateSettings = {
escape: Q,
evaluate: tt,
interpolate: et,
variable: "",
imports: {
_: i
}
}, i.prototype = w.prototype, i.prototype.constructor = i, Ct.prototype = Wo(w.prototype), 
Ct.prototype.constructor = Ct, At.prototype = Wo(w.prototype), At.prototype.constructor = At, 
It.prototype.clear = function() {
this.__data__ = Eo ? Eo(null) : {}, this.size = 0;
}, It.prototype.delete = function(t) {
return t = this.has(t) && delete this.__data__[t], this.size -= t ? 1 : 0, t;
}, It.prototype.get = function(t) {
var e = this.__data__;
return Eo ? "__lodash_hash_undefined__" === (t = e[t]) ? U : t : Ka.call(e, t) ? e[t] : U;
}, It.prototype.has = function(t) {
var e = this.__data__;
return Eo ? e[t] !== U : Ka.call(e, t);
}, It.prototype.set = function(t, e) {
var i = this.__data__;
return this.size += this.has(t) ? 0 : 1, i[t] = Eo && e === U ? "__lodash_hash_undefined__" : e, 
this;
}, Ft.prototype.clear = function() {
this.__data__ = [], this.size = 0;
}, Ft.prototype.delete = function(t) {
var e = this.__data__;
return !(0 > (t = me(e, t)) || (t == e.length - 1 ? e.pop() : po.call(e, t, 1), 
--this.size, 0));
}, Ft.prototype.get = function(t) {
var e = this.__data__;
return 0 > (t = me(e, t)) ? U : e[t][1];
}, Ft.prototype.has = function(t) {
return -1 < me(this.__data__, t);
}, Ft.prototype.set = function(t, e) {
var i = this.__data__, n = me(i, t);
return 0 > n ? (++this.size, i.push([ t, e ])) : i[n][1] = e, this;
}, Et.prototype.clear = function() {
this.size = 0, this.__data__ = {
hash: new It(),
map: new (Lo || Ft)(),
string: new It()
};
}, Et.prototype.delete = function(t) {
return t = un(this, t).delete(t), this.size -= t ? 1 : 0, t;
}, Et.prototype.get = function(t) {
return un(this, t).get(t);
}, Et.prototype.has = function(t) {
return un(this, t).has(t);
}, Et.prototype.set = function(t, e) {
var i = un(this, t), n = i.size;
return i.set(t, e), this.size += i.size == n ? 0 : 1, this;
}, Pt.prototype.add = Pt.prototype.push = function(t) {
return this.__data__.set(t, "__lodash_hash_undefined__"), this;
}, Pt.prototype.has = function(t) {
return this.__data__.has(t);
}, Vt.prototype.clear = function() {
this.__data__ = new Ft(), this.size = 0;
}, Vt.prototype.delete = function(t) {
var e = this.__data__;
return t = e.delete(t), this.size = e.size, t;
}, Vt.prototype.get = function(t) {
return this.__data__.get(t);
}, Vt.prototype.has = function(t) {
return this.__data__.has(t);
}, Vt.prototype.set = function(t, e) {
var i = this.__data__;
if (i instanceof Ft) {
var n = i.__data__;
if (!Lo || 199 > n.length) return n.push([ t, e ]), this.size = ++i.size, this;
i = this.__data__ = new Et(n);
}
return i.set(t, e), this.size = i.size, this;
};
var $o = Mi(be), Ko = Mi(we, !0), Xo = Oi(), Zo = Oi(!0), Qo = Do ? function(t, e) {
return Do.set(t, e), t;
} : Na, tm = fo ? function(t, e) {
return fo(t, "toString", {
configurable: !0,
enumerable: !1,
value: Ia(e),
writable: !0
});
} : Na, em = xo || function(t) {
return Ut.clearTimeout(t);
}, im = Oo && 1 / D(new Oo([ , -0 ]))[1] == q ? function(t) {
return new Oo(t);
} : La, nm = Do ? function(t) {
return Do.get(t);
} : La, am = _o ? function(t) {
return null == t ? [] : (t = Ua(t), s(_o(t), function(e) {
return lo.call(t, e);
}));
} : Oa, om = _o ? function(t) {
for (var e = []; t; ) c(e, am(t)), t = ro(t);
return e;
} : Oa, mm = Se;
(jo && "[object DataView]" != mm(new jo(new ArrayBuffer(1))) || Lo && "[object Map]" != mm(new Lo()) || Mo && "[object Promise]" != mm(Mo.resolve()) || Oo && "[object Set]" != mm(new Oo()) || Fo && "[object WeakMap]" != mm(new Fo())) && (mm = function(t) {
var e = Se(t);
if (t = (t = "[object Object]" == e ? t.constructor : U) ? jn(t) : "") switch (t) {
case Po:
return "[object DataView]";

case Vo:
return "[object Map]";

case Uo:
return "[object Promise]";

case qo:
return "[object Set]";

case zo:
return "[object WeakMap]";
}
return e;
});
var rm = Wa ? aa : Fa, sm = In(Qo), lm = go || function(t, e) {
return Ut.setTimeout(t, e);
}, pm = In(tm), dm = function(t) {
var e = (t = Zn(t, function(t) {
return 500 === e.size && e.clear(), t;
})).cache;
return t;
}(function(t) {
var e = [];
return 46 === t.charCodeAt(0) && e.push(""), t.replace(at, function(t, i, n, a) {
e.push(n ? a.replace(yt, "$1") : i || t);
}), e;
}), cm = ti(function(t, e) {
return ia(t) ? he(t, _e(e, 1, ia, !0)) : [];
}), um = ti(function(t, e) {
var i = Rn(e);
return ia(i) && (i = U), ia(t) ? he(t, _e(e, 1, ia, !0), cn(i, 2)) : [];
}), ym = ti(function(t, e) {
var i = Rn(e);
return ia(i) && (i = U), ia(t) ? he(t, _e(e, 1, ia, !0), U, i) : [];
}), fm = ti(function(t) {
var e = d(t, gi);
return e.length && e[0] === t[0] ? Te(e) : [];
}), xm = ti(function(t) {
var e = Rn(t), i = d(t, gi);
return e === Rn(i) ? e = U : i.pop(), i.length && i[0] === t[0] ? Te(i, cn(e, 2)) : [];
}), hm = ti(function(t) {
var e = Rn(t), i = d(t, gi);
return (e = "function" == typeof e ? e : U) && i.pop(), i.length && i[0] === t[0] ? Te(i, U, e) : [];
}), gm = ti(Pn), vm = rn(function(t, e) {
var i = null == t ? 0 : t.length, n = de(t, e);
return Xe(t, d(e, function(t) {
return _n(t, i) ? +t : t;
}).sort(Ci)), n;
}), Gm = ti(function(t) {
return ci(_e(t, 1, ia, !0));
}), _m = ti(function(t) {
var e = Rn(t);
return ia(e) && (e = U), ci(_e(t, 1, ia, !0), cn(e, 2));
}), bm = ti(function(t) {
var e = "function" == typeof (e = Rn(t)) ? e : U;
return ci(_e(t, 1, ia, !0), U, e);
}), wm = ti(function(t, e) {
return ia(t) ? he(t, e) : [];
}), km = ti(function(t) {
return xi(s(t, ia));
}), Cm = ti(function(t) {
var e = Rn(t);
return ia(e) && (e = U), xi(s(t, ia), cn(e, 2));
}), Am = ti(function(t) {
var e = "function" == typeof (e = Rn(t)) ? e : U;
return xi(s(t, ia), U, e);
}), Sm = ti(Un), Bm = ti(function(t) {
var e = "function" == typeof (e = 1 < (e = t.length) ? t[e - 1] : U) ? (t.pop(), 
e) : U;
return qn(t, e);
}), Im = rn(function(t) {
function e(e) {
return de(e, t);
}
var i = t.length, n = i ? t[0] : 0, a = this.__wrapped__;
return !(1 < i || this.__actions__.length) && a instanceof At && _n(n) ? ((a = a.slice(n, +n + (i ? 1 : 0))).__actions__.push({
func: Hn,
args: [ e ],
thisArg: U
}), new Ct(a, this.__chain__).thru(function(t) {
return i && !t.length && t.push(U), t;
})) : this.thru(e);
}), Nm = ji(function(t, e, i) {
Ka.call(t, i) ? ++t[i] : pe(t, i, 1);
}), Tm = Vi(On), jm = Vi(Fn), Lm = ji(function(t, e, i) {
Ka.call(t, i) ? t[i].push(e) : pe(t, i, [ e ]);
}), Mm = ti(function(t, e, i) {
var a = -1, o = "function" == typeof e, m = ea(t) ? Ea(t.length) : [];
return $o(t, function(t) {
m[++a] = o ? n(e, t, i) : Le(t, e, i);
}), m;
}), Om = ji(function(t, e, i) {
pe(t, i, e);
}), Fm = ji(function(t, e, i) {
t[i ? 0 : 1].push(e);
}, function() {
return [ [], [] ];
}), Em = ti(function(t, e) {
if (null == t) return [];
var i = e.length;
return 1 < i && bn(t, e[0], e[1]) ? e = [] : 2 < i && bn(e[0], e[1], e[2]) && (e = [ e[0] ]), 
Ye(t, _e(e, 1), []);
}), Dm = ho || function() {
return Ut.Date.now();
}, Rm = ti(function(t, e, i) {
var n = 1;
if (i.length) {
var a = E(i, dn(Rm));
n |= 32;
}
return tn(t, n, e, i, a);
}), Pm = ti(function(t, e, i) {
var n = 3;
if (i.length) {
var a = E(i, dn(Pm));
n |= 32;
}
return tn(e, n, t, i, a);
}), Vm = ti(function(t, e) {
return xe(t, 1, e);
}), Um = ti(function(t, e, i) {
return xe(t, ha(e) || 0, i);
});
Zn.Cache = Et;
var qm = ti(function(t, e) {
var i = (e = 1 == e.length && Km(e[0]) ? d(e[0], I(cn())) : d(_e(e, 1), I(cn()))).length;
return ti(function(a) {
for (var o = -1, m = So(a.length, i); ++o < m; ) a[o] = e[o].call(this, a[o]);
return n(t, this, a);
});
}), zm = ti(function(t, e) {
return tn(t, 32, U, e, E(e, dn(zm)));
}), Hm = ti(function(t, e) {
return tn(t, 64, U, e, E(e, dn(Hm)));
}), Ym = rn(function(t, e) {
return tn(t, 256, U, U, U, e);
}), Jm = Ki(Be), Wm = Ki(function(t, e) {
return t >= e;
}), $m = Me(function() {
return arguments;
}()) ? Me : function(t) {
return sa(t) && Ka.call(t, "callee") && !lo.call(t, "callee");
}, Km = Ea.isArray, Xm = Jt ? I(Jt) : function(t) {
return sa(t) && "[object ArrayBuffer]" == Se(t);
}, Zm = bo || Fa, Qm = Wt ? I(Wt) : function(t) {
return sa(t) && "[object Date]" == Se(t);
}, tr = $t ? I($t) : function(t) {
return sa(t) && "[object Map]" == mm(t);
}, er = Kt ? I(Kt) : function(t) {
return sa(t) && "[object RegExp]" == Se(t);
}, ir = Xt ? I(Xt) : function(t) {
return sa(t) && "[object Set]" == mm(t);
}, nr = Zt ? I(Zt) : function(t) {
return sa(t) && ma(t.length) && !!Mt[Se(t)];
}, ar = Ki(Pe), or = Ki(function(t, e) {
return t <= e;
}), mr = Li(function(t, e) {
if (Cn(e) || ea(e)) Ii(e, ba(e), t); else for (var i in e) Ka.call(e, i) && oe(t, i, e[i]);
}), rr = Li(function(t, e) {
Ii(e, wa(e), t);
}), sr = Li(function(t, e, i, n) {
Ii(e, wa(e), t, n);
}), lr = Li(function(t, e, i, n) {
Ii(e, ba(e), t, n);
}), pr = rn(de), dr = ti(function(t, e) {
t = Ua(t);
var i = -1, n = e.length;
for ((a = 2 < n ? e[2] : U) && bn(e[0], e[1], a) && (n = 1); ++i < n; ) for (var a, o = wa(a = e[i]), m = -1, r = o.length; ++m < r; ) {
var s = o[m], l = t[s];
(l === U || ta(l, Ja[s]) && !Ka.call(t, s)) && (t[s] = a[s]);
}
return t;
}), cr = ti(function(t) {
return t.push(U, nn), n(hr, U, t);
}), ur = zi(function(t, e, i) {
null != e && "function" != typeof e.toString && (e = Qa.call(e)), t[e] = i;
}, Ia(Na)), yr = zi(function(t, e, i) {
null != e && "function" != typeof e.toString && (e = Qa.call(e)), Ka.call(t, e) ? t[e].push(i) : t[e] = [ i ];
}, cn), fr = ti(Le), xr = Li(function(t, e, i) {
ze(t, e, i);
}), hr = Li(function(t, e, i, n) {
ze(t, e, i, n);
}), gr = rn(function(t, e) {
var i = {};
if (null == t) return i;
var n = !1;
e = d(e, function(e) {
return e = Gi(e, t), n || (n = 1 < e.length), e;
}), Ii(t, ln(t), i), n && (i = ue(i, 7, an));
for (var a = e.length; a--; ) ui(i, e[a]);
return i;
}), vr = rn(function(t, e) {
return null == t ? {} : Je(t, e);
}), Gr = Qi(ba), _r = Qi(wa), br = Di(function(t, e, i) {
return e = e.toLowerCase(), t + (i ? Aa(e) : e);
}), wr = Di(function(t, e, i) {
return t + (i ? "-" : "") + e.toLowerCase();
}), kr = Di(function(t, e, i) {
return t + (i ? " " : "") + e.toLowerCase();
}), Cr = Ei("toLowerCase"), Ar = Di(function(t, e, i) {
return t + (i ? "_" : "") + e.toLowerCase();
}), Sr = Di(function(t, e, i) {
return t + (i ? " " : "") + Ir(e);
}), Br = Di(function(t, e, i) {
return t + (i ? " " : "") + e.toUpperCase();
}), Ir = Ei("toUpperCase"), Nr = ti(function(t, e) {
try {
return n(t, U, e);
} catch (t) {
return na(t) ? t : new Ra(t);
}
}), Tr = rn(function(t, e) {
return o(e, function(e) {
e = Tn(e), pe(t, e, Rm(t[e], t));
}), t;
}), jr = Ui(), Lr = Ui(!0), Mr = ti(function(t, e) {
return function(i) {
return Le(i, t, e);
};
}), Or = ti(function(t, e) {
return function(i) {
return Le(t, i, e);
};
}), Fr = Yi(d), Er = Yi(r), Dr = Yi(f), Rr = $i(), Pr = $i(!0), Vr = Hi(function(t, e) {
return t + e;
}, 0), Ur = Zi("ceil"), qr = Hi(function(t, e) {
return t / e;
}, 1), zr = Zi("floor"), Hr = Hi(function(t, e) {
return t * e;
}, 1), Yr = Zi("round"), Jr = Hi(function(t, e) {
return t - e;
}, 0);
return i.after = function(t, e) {
if ("function" != typeof e) throw new Ha("Expected a function");
return t = fa(t), function() {
if (1 > --t) return e.apply(this, arguments);
};
}, i.ary = $n, i.assign = mr, i.assignIn = rr, i.assignInWith = sr, i.assignWith = lr, 
i.at = pr, i.before = Kn, i.bind = Rm, i.bindAll = Tr, i.bindKey = Pm, i.castArray = function() {
if (!arguments.length) return [];
var t = arguments[0];
return Km(t) ? t : [ t ];
}, i.chain = zn, i.chunk = function(t, e, i) {
if (e = (i ? bn(t, e, i) : e === U) ? 1 : Ao(fa(e), 0), !(i = null == t ? 0 : t.length) || 1 > e) return [];
for (var n = 0, a = 0, o = Ea(vo(i / e)); n < i; ) o[a++] = oi(t, n, n += e);
return o;
}, i.compact = function(t) {
for (var e = -1, i = null == t ? 0 : t.length, n = 0, a = []; ++e < i; ) {
var o = t[e];
o && (a[n++] = o);
}
return a;
}, i.concat = function() {
var t = arguments.length;
if (!t) return [];
for (var e = Ea(t - 1), i = arguments[0]; t--; ) e[t - 1] = arguments[t];
return c(Km(i) ? Bi(i) : [ i ], _e(e, 1));
}, i.cond = function(t) {
var e = null == t ? 0 : t.length, i = cn();
return t = e ? d(t, function(t) {
if ("function" != typeof t[1]) throw new Ha("Expected a function");
return [ i(t[0]), t[1] ];
}) : [], ti(function(i) {
for (var a = -1; ++a < e; ) {
var o = t[a];
if (n(o[0], this, i)) return n(o[1], this, i);
}
});
}, i.conforms = function(t) {
return ye(ue(t, 1));
}, i.constant = Ia, i.countBy = Nm, i.create = function(t, e) {
var i = Wo(t);
return null == e ? i : se(i, e);
}, i.curry = function t(e, i, n) {
return (e = tn(e, 8, U, U, U, U, U, i = n ? U : i)).placeholder = t.placeholder, 
e;
}, i.curryRight = function t(e, i, n) {
return (e = tn(e, 16, U, U, U, U, U, i = n ? U : i)).placeholder = t.placeholder, 
e;
}, i.debounce = Xn, i.defaults = dr, i.defaultsDeep = cr, i.defer = Vm, i.delay = Um, 
i.difference = cm, i.differenceBy = um, i.differenceWith = ym, i.drop = function(t, e, i) {
var n = null == t ? 0 : t.length;
return n ? oi(t, 0 > (e = i || e === U ? 1 : fa(e)) ? 0 : e, n) : [];
}, i.dropRight = function(t, e, i) {
var n = null == t ? 0 : t.length;
return n ? oi(t, 0, 0 > (e = n - (e = i || e === U ? 1 : fa(e))) ? 0 : e) : [];
}, i.dropRightWhile = function(t, e) {
return t && t.length ? yi(t, cn(e, 3), !0, !0) : [];
}, i.dropWhile = function(t, e) {
return t && t.length ? yi(t, cn(e, 3), !0) : [];
}, i.fill = function(t, e, i, n) {
var a = null == t ? 0 : t.length;
if (!a) return [];
for (i && "number" != typeof i && bn(t, e, i) && (i = 0, n = a), a = t.length, 0 > (i = fa(i)) && (i = -i > a ? 0 : a + i), 
0 > (n = n === U || n > a ? a : fa(n)) && (n += a), n = i > n ? 0 : xa(n); i < n; ) t[i++] = e;
return t;
}, i.filter = function(t, e) {
return (Km(t) ? s : Ge)(t, cn(e, 3));
}, i.flatMap = function(t, e) {
return _e(Wn(t, e), 1);
}, i.flatMapDeep = function(t, e) {
return _e(Wn(t, e), q);
}, i.flatMapDepth = function(t, e, i) {
return i = i === U ? 1 : fa(i), _e(Wn(t, e), i);
}, i.flatten = En, i.flattenDeep = function(t) {
return null != t && t.length ? _e(t, q) : [];
}, i.flattenDepth = function(t, e) {
return null != t && t.length ? _e(t, e = e === U ? 1 : fa(e)) : [];
}, i.flip = function(t) {
return tn(t, 512);
}, i.flow = jr, i.flowRight = Lr, i.fromPairs = function(t) {
for (var e = -1, i = null == t ? 0 : t.length, n = {}; ++e < i; ) {
var a = t[e];
n[a[0]] = a[1];
}
return n;
}, i.functions = function(t) {
return null == t ? [] : ke(t, ba(t));
}, i.functionsIn = function(t) {
return null == t ? [] : ke(t, wa(t));
}, i.groupBy = Lm, i.initial = function(t) {
return null != t && t.length ? oi(t, 0, -1) : [];
}, i.intersection = fm, i.intersectionBy = xm, i.intersectionWith = hm, i.invert = ur, 
i.invertBy = yr, i.invokeMap = Mm, i.iteratee = Ta, i.keyBy = Om, i.keys = ba, i.keysIn = wa, 
i.map = Wn, i.mapKeys = function(t, e) {
var i = {};
return e = cn(e, 3), be(t, function(t, n, a) {
pe(i, e(t, n, a), t);
}), i;
}, i.mapValues = function(t, e) {
var i = {};
return e = cn(e, 3), be(t, function(t, n, a) {
pe(i, n, e(t, n, a));
}), i;
}, i.matches = function(t) {
return Ue(ue(t, 1));
}, i.matchesProperty = function(t, e) {
return qe(t, ue(e, 1));
}, i.memoize = Zn, i.merge = xr, i.mergeWith = hr, i.method = Mr, i.methodOf = Or, 
i.mixin = ja, i.negate = Qn, i.nthArg = function(t) {
return t = fa(t), ti(function(e) {
return He(e, t);
});
}, i.omit = gr, i.omitBy = function(t, e) {
return ka(t, Qn(cn(e)));
}, i.once = function(t) {
return Kn(2, t);
}, i.orderBy = function(t, e, i, n) {
return null == t ? [] : (Km(e) || (e = null == e ? [] : [ e ]), Km(i = n ? U : i) || (i = null == i ? [] : [ i ]), 
Ye(t, e, i));
}, i.over = Fr, i.overArgs = qm, i.overEvery = Er, i.overSome = Dr, i.partial = zm, 
i.partialRight = Hm, i.partition = Fm, i.pick = vr, i.pickBy = ka, i.property = Ma, 
i.propertyOf = function(t) {
return function(e) {
return null == t ? U : Ce(t, e);
};
}, i.pull = gm, i.pullAll = Pn, i.pullAllBy = function(t, e, i) {
return t && t.length && e && e.length ? Ke(t, e, cn(i, 2)) : t;
}, i.pullAllWith = function(t, e, i) {
return t && t.length && e && e.length ? Ke(t, e, U, i) : t;
}, i.pullAt = vm, i.range = Rr, i.rangeRight = Pr, i.rearg = Ym, i.reject = function(t, e) {
return (Km(t) ? s : Ge)(t, Qn(cn(e, 3)));
}, i.remove = function(t, e) {
var i = [];
if (!t || !t.length) return i;
var n = -1, a = [], o = t.length;
for (e = cn(e, 3); ++n < o; ) {
var m = t[n];
e(m, n, t) && (i.push(m), a.push(n));
}
return Xe(t, a), i;
}, i.rest = function(t, e) {
if ("function" != typeof t) throw new Ha("Expected a function");
return ti(t, e = e === U ? e : fa(e));
}, i.reverse = Vn, i.sampleSize = function(t, e, i) {
return e = (i ? bn(t, e, i) : e === U) ? 1 : fa(e), (Km(t) ? Yt : ii)(t, e);
}, i.set = function(t, e, i) {
return null == t ? t : ni(t, e, i);
}, i.setWith = function(t, e, i, n) {
return n = "function" == typeof n ? n : U, null == t ? t : ni(t, e, i, n);
}, i.shuffle = function(t) {
return (Km(t) ? Qt : ai)(t);
}, i.slice = function(t, e, i) {
var n = null == t ? 0 : t.length;
return n ? (i && "number" != typeof i && bn(t, e, i) ? (e = 0, i = n) : (e = null == e ? 0 : fa(e), 
i = i === U ? n : fa(i)), oi(t, e, i)) : [];
}, i.sortBy = Em, i.sortedUniq = function(t) {
return t && t.length ? li(t) : [];
}, i.sortedUniqBy = function(t, e) {
return t && t.length ? li(t, cn(e, 2)) : [];
}, i.split = function(t, e, i) {
return i && "number" != typeof i && bn(t, e, i) && (e = i = U), (i = i === U ? 4294967295 : i >>> 0) ? (t = va(t)) && ("string" == typeof e || null != e && !er(e)) && !(e = di(e)) && Tt.test(t) ? _i(V(t), 0, i) : t.split(e, i) : [];
}, i.spread = function(t, e) {
if ("function" != typeof t) throw new Ha("Expected a function");
return e = null == e ? 0 : Ao(fa(e), 0), ti(function(i) {
var a = i[e];
return i = _i(i, 0, e), a && c(i, a), n(t, this, i);
});
}, i.tail = function(t) {
var e = null == t ? 0 : t.length;
return e ? oi(t, 1, e) : [];
}, i.take = function(t, e, i) {
return t && t.length ? oi(t, 0, 0 > (e = i || e === U ? 1 : fa(e)) ? 0 : e) : [];
}, i.takeRight = function(t, e, i) {
var n = null == t ? 0 : t.length;
return n ? oi(t, 0 > (e = n - (e = i || e === U ? 1 : fa(e))) ? 0 : e, n) : [];
}, i.takeRightWhile = function(t, e) {
return t && t.length ? yi(t, cn(e, 3), !1, !0) : [];
}, i.takeWhile = function(t, e) {
return t && t.length ? yi(t, cn(e, 3)) : [];
}, i.tap = function(t, e) {
return e(t), t;
}, i.throttle = function(t, e, i) {
var n = !0, a = !0;
if ("function" != typeof t) throw new Ha("Expected a function");
return ra(i) && (n = "leading" in i ? !!i.leading : n, a = "trailing" in i ? !!i.trailing : a), 
Xn(t, e, {
leading: n,
maxWait: e,
trailing: a
});
}, i.thru = Hn, i.toArray = ua, i.toPairs = Gr, i.toPairsIn = _r, i.toPath = function(t) {
return Km(t) ? d(t, Tn) : ca(t) ? [ t ] : Bi(dm(va(t)));
}, i.toPlainObject = ga, i.transform = function(t, e, i) {
var n = Km(t), a = n || Zm(t) || nr(t);
if (e = cn(e, 4), null == i) {
var m = t && t.constructor;
i = a ? n ? new m() : [] : ra(t) && aa(m) ? Wo(ro(t)) : {};
}
return (a ? o : be)(t, function(t, n, a) {
return e(i, t, n, a);
}), i;
}, i.unary = function(t) {
return $n(t, 1);
}, i.union = Gm, i.unionBy = _m, i.unionWith = bm, i.uniq = function(t) {
return t && t.length ? ci(t) : [];
}, i.uniqBy = function(t, e) {
return t && t.length ? ci(t, cn(e, 2)) : [];
}, i.uniqWith = function(t, e) {
return e = "function" == typeof e ? e : U, t && t.length ? ci(t, U, e) : [];
}, i.unset = function(t, e) {
return null == t || ui(t, e);
}, i.unzip = Un, i.unzipWith = qn, i.update = function(t, e, i) {
return null == t ? t : ni(t, e, vi(i)(Ce(t, e)), void 0);
}, i.updateWith = function(t, e, i, n) {
return n = "function" == typeof n ? n : U, null != t && (t = ni(t, e, vi(i)(Ce(t, e)), n)), 
t;
}, i.values = Ca, i.valuesIn = function(t) {
return null == t ? [] : N(t, wa(t));
}, i.without = wm, i.words = Ba, i.wrap = function(t, e) {
return zm(vi(e), t);
}, i.xor = km, i.xorBy = Cm, i.xorWith = Am, i.zip = Sm, i.zipObject = function(t, e) {
return hi(t || [], e || [], oe);
}, i.zipObjectDeep = function(t, e) {
return hi(t || [], e || [], ni);
}, i.zipWith = Bm, i.entries = Gr, i.entriesIn = _r, i.extend = rr, i.extendWith = sr, 
ja(i, i), i.add = Vr, i.attempt = Nr, i.camelCase = br, i.capitalize = Aa, i.ceil = Ur, 
i.clamp = function(t, e, i) {
return i === U && (i = e, e = U), i !== U && (i = (i = ha(i)) == i ? i : 0), e !== U && (e = (e = ha(e)) == e ? e : 0), 
ce(ha(t), e, i);
}, i.clone = function(t) {
return ue(t, 4);
}, i.cloneDeep = function(t) {
return ue(t, 5);
}, i.cloneDeepWith = function(t, e) {
return ue(t, 5, e = "function" == typeof e ? e : U);
}, i.cloneWith = function(t, e) {
return ue(t, 4, e = "function" == typeof e ? e : U);
}, i.conformsTo = function(t, e) {
return null == e || fe(t, e, ba(e));
}, i.deburr = Sa, i.defaultTo = function(t, e) {
return null == t || t != t ? e : t;
}, i.divide = qr, i.endsWith = function(t, e, i) {
t = va(t), e = di(e);
var n = t.length;
n = i = i === U ? n : ce(fa(i), 0, n);
return 0 <= (i -= e.length) && t.slice(i, n) == e;
}, i.eq = ta, i.escape = function(t) {
return (t = va(t)) && Z.test(t) ? t.replace(K, ee) : t;
}, i.escapeRegExp = function(t) {
return (t = va(t)) && mt.test(t) ? t.replace(ot, "\\$&") : t;
}, i.every = function(t, e, i) {
var n = Km(t) ? r : ge;
return i && bn(t, e, i) && (e = U), n(t, cn(e, 3));
}, i.find = Tm, i.findIndex = On, i.findKey = function(t, e) {
return x(t, cn(e, 3), be);
}, i.findLast = jm, i.findLastIndex = Fn, i.findLastKey = function(t, e) {
return x(t, cn(e, 3), we);
}, i.floor = zr, i.forEach = Yn, i.forEachRight = Jn, i.forIn = function(t, e) {
return null == t ? t : Xo(t, cn(e, 3), wa);
}, i.forInRight = function(t, e) {
return null == t ? t : Zo(t, cn(e, 3), wa);
}, i.forOwn = function(t, e) {
return t && be(t, cn(e, 3));
}, i.forOwnRight = function(t, e) {
return t && we(t, cn(e, 3));
}, i.get = Ga, i.gt = Jm, i.gte = Wm, i.has = function(t, e) {
return null != t && xn(t, e, Ie);
}, i.hasIn = _a, i.head = Dn, i.identity = Na, i.includes = function(t, e, i, n) {
return t = ea(t) ? t : Ca(t), i = i && !n ? fa(i) : 0, n = t.length, 0 > i && (i = Ao(n + i, 0)), 
da(t) ? i <= n && -1 < t.indexOf(e, i) : !!n && -1 < g(t, e, i);
}, i.indexOf = function(t, e, i) {
var n = null == t ? 0 : t.length;
return n ? (0 > (i = null == i ? 0 : fa(i)) && (i = Ao(n + i, 0)), g(t, e, i)) : -1;
}, i.inRange = function(t, e, i) {
return e = ya(e), i === U ? (i = e, e = 0) : i = ya(i), (t = ha(t)) >= So(e, i) && t < Ao(e, i);
}, i.invoke = fr, i.isArguments = $m, i.isArray = Km, i.isArrayBuffer = Xm, i.isArrayLike = ea, 
i.isArrayLikeObject = ia, i.isBoolean = function(t) {
return !0 === t || !1 === t || sa(t) && "[object Boolean]" == Se(t);
}, i.isBuffer = Zm, i.isDate = Qm, i.isElement = function(t) {
return sa(t) && 1 === t.nodeType && !pa(t);
}, i.isEmpty = function(t) {
if (null == t) return !0;
if (ea(t) && (Km(t) || "string" == typeof t || "function" == typeof t.splice || Zm(t) || nr(t) || $m(t))) return !t.length;
var e = mm(t);
if ("[object Map]" == e || "[object Set]" == e) return !t.size;
if (Cn(t)) return !Re(t).length;
for (var i in t) if (Ka.call(t, i)) return !1;
return !0;
}, i.isEqual = function(t, e) {
return Oe(t, e);
}, i.isEqualWith = function(t, e, i) {
var n = (i = "function" == typeof i ? i : U) ? i(t, e) : U;
return n === U ? Oe(t, e, U, i) : !!n;
}, i.isError = na, i.isFinite = function(t) {
return "number" == typeof t && wo(t);
}, i.isFunction = aa, i.isInteger = oa, i.isLength = ma, i.isMap = tr, i.isMatch = function(t, e) {
return t === e || Fe(t, e, yn(e));
}, i.isMatchWith = function(t, e, i) {
return i = "function" == typeof i ? i : U, Fe(t, e, yn(e), i);
}, i.isNaN = function(t) {
return la(t) && t != +t;
}, i.isNative = function(t) {
if (rm(t)) throw new Ra("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
return Ee(t);
}, i.isNil = function(t) {
return null == t;
}, i.isNull = function(t) {
return null === t;
}, i.isNumber = la, i.isObject = ra, i.isObjectLike = sa, i.isPlainObject = pa, 
i.isRegExp = er, i.isSafeInteger = function(t) {
return oa(t) && -9007199254740991 <= t && 9007199254740991 >= t;
}, i.isSet = ir, i.isString = da, i.isSymbol = ca, i.isTypedArray = nr, i.isUndefined = function(t) {
return t === U;
}, i.isWeakMap = function(t) {
return sa(t) && "[object WeakMap]" == mm(t);
}, i.isWeakSet = function(t) {
return sa(t) && "[object WeakSet]" == Se(t);
}, i.join = function(t, e) {
return null == t ? "" : ko.call(t, e);
}, i.kebabCase = wr, i.last = Rn, i.lastIndexOf = function(t, e, i) {
var n = null == t ? 0 : t.length;
if (!n) return -1;
var a = n;
if (i !== U && (a = 0 > (a = fa(i)) ? Ao(n + a, 0) : So(a, n - 1)), e == e) {
for (i = a + 1; i-- && t[i] !== e; ) ;
t = i;
} else t = h(t, G, a, !0);
return t;
}, i.lowerCase = kr, i.lowerFirst = Cr, i.lt = ar, i.lte = or, i.max = function(t) {
return t && t.length ? ve(t, Na, Be) : U;
}, i.maxBy = function(t, e) {
return t && t.length ? ve(t, cn(e, 2), Be) : U;
}, i.mean = function(t) {
return _(t, Na);
}, i.meanBy = function(t, e) {
return _(t, cn(e, 2));
}, i.min = function(t) {
return t && t.length ? ve(t, Na, Pe) : U;
}, i.minBy = function(t, e) {
return t && t.length ? ve(t, cn(e, 2), Pe) : U;
}, i.stubArray = Oa, i.stubFalse = Fa, i.stubObject = function() {
return {};
}, i.stubString = function() {
return "";
}, i.stubTrue = function() {
return !0;
}, i.multiply = Hr, i.nth = function(t, e) {
return t && t.length ? He(t, fa(e)) : U;
}, i.noConflict = function() {
return Ut._ === this && (Ut._ = eo), this;
}, i.noop = La, i.now = Dm, i.pad = function(t, e, i) {
t = va(t);
var n = (e = fa(e)) ? P(t) : 0;
return !e || n >= e ? t : Ji(Go(e = (e - n) / 2), i) + t + Ji(vo(e), i);
}, i.padEnd = function(t, e, i) {
t = va(t);
var n = (e = fa(e)) ? P(t) : 0;
return e && n < e ? t + Ji(e - n, i) : t;
}, i.padStart = function(t, e, i) {
t = va(t);
var n = (e = fa(e)) ? P(t) : 0;
return e && n < e ? Ji(e - n, i) + t : t;
}, i.parseInt = function(t, e, i) {
return i || null == e ? e = 0 : e && (e = +e), Io(va(t).replace(st, ""), e || 0);
}, i.random = function(t, e, i) {
if (i && "boolean" != typeof i && bn(t, e, i) && (e = i = U), i === U && ("boolean" == typeof e ? (i = e, 
e = U) : "boolean" == typeof t && (i = t, t = U)), t === U && e === U ? (t = 0, 
e = 1) : (t = ya(t), e === U ? (e = t, t = 0) : e = ya(e)), t > e) {
var n = t;
t = e, e = n;
}
return i || t % 1 || e % 1 ? (i = No(), So(t + i * (e - t + Dt("1e-" + ((i + "").length - 1))), e)) : Ze(t, e);
}, i.reduce = function(t, e, i) {
var n = Km(t) ? u : k, a = 3 > arguments.length;
return n(t, cn(e, 4), i, a, $o);
}, i.reduceRight = function(t, e, i) {
var n = Km(t) ? y : k, a = 3 > arguments.length;
return n(t, cn(e, 4), i, a, Ko);
}, i.repeat = function(t, e, i) {
return e = (i ? bn(t, e, i) : e === U) ? 1 : fa(e), Qe(va(t), e);
}, i.replace = function() {
var t = arguments, e = va(t[0]);
return 3 > t.length ? e : e.replace(t[1], t[2]);
}, i.result = function(t, e, i) {
var n = -1, a = (e = Gi(e, t)).length;
for (a || (a = 1, t = U); ++n < a; ) {
var o = null == t ? U : t[Tn(e[n])];
o === U && (n = a, o = i), t = aa(o) ? o.call(t) : o;
}
return t;
}, i.round = Yr, i.runInContext = t, i.sample = function(t) {
return (Km(t) ? zt : ei)(t);
}, i.size = function(t) {
if (null == t) return 0;
if (ea(t)) return da(t) ? P(t) : t.length;
var e = mm(t);
return "[object Map]" == e || "[object Set]" == e ? t.size : Re(t).length;
}, i.snakeCase = Ar, i.some = function(t, e, i) {
var n = Km(t) ? f : mi;
return i && bn(t, e, i) && (e = U), n(t, cn(e, 3));
}, i.sortedIndex = function(t, e) {
return ri(t, e);
}, i.sortedIndexBy = function(t, e, i) {
return si(t, e, cn(i, 2));
}, i.sortedIndexOf = function(t, e) {
var i = null == t ? 0 : t.length;
if (i) {
var n = ri(t, e);
if (n < i && ta(t[n], e)) return n;
}
return -1;
}, i.sortedLastIndex = function(t, e) {
return ri(t, e, !0);
}, i.sortedLastIndexBy = function(t, e, i) {
return si(t, e, cn(i, 2), !0);
}, i.sortedLastIndexOf = function(t, e) {
if (null != t && t.length) {
var i = ri(t, e, !0) - 1;
if (ta(t[i], e)) return i;
}
return -1;
}, i.startCase = Sr, i.startsWith = function(t, e, i) {
return t = va(t), i = null == i ? 0 : ce(fa(i), 0, t.length), e = di(e), t.slice(i, i + e.length) == e;
}, i.subtract = Jr, i.sum = function(t) {
return t && t.length ? A(t, Na) : 0;
}, i.sumBy = function(t, e) {
return t && t.length ? A(t, cn(e, 2)) : 0;
}, i.template = function(t, e, n) {
var a = i.templateSettings;
n && bn(t, e, n) && (e = U), t = va(t), e = sr({}, e, a, en);
var o, m, r = ba(n = sr({}, e.imports, a.imports, en)), s = N(n, r), l = 0;
n = e.interpolate || wt;
var p = "__p+='";
n = qa((e.escape || wt).source + "|" + n.source + "|" + (n === et ? ft : wt).source + "|" + (e.evaluate || wt).source + "|$", "g");
var d = "sourceURL" in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
if (t.replace(n, function(e, i, n, a, r, s) {
return n || (n = a), p += t.slice(l, s).replace(kt, M), i && (o = !0, p += "'+__e(" + i + ")+'"), 
r && (m = !0, p += "';" + r + ";\n__p+='"), n && (p += "'+((__t=(" + n + "))==null?'':__t)+'"), 
l = s + e.length, e;
}), p += "';", (e = e.variable) || (p = "with(obj){" + p + "}"), p = (m ? p.replace(Y, "") : p).replace(J, "$1").replace(W, "$1;"), 
p = "function(" + (e || "obj") + "){" + (e ? "" : "obj||(obj={});") + "var __t,__p=''" + (o ? ",__e=_.escape" : "") + (m ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + p + "return __p}", 
(e = Nr(function() {
return Pa(r, d + "return " + p).apply(U, s);
})).source = p, na(e)) throw e;
return e;
}, i.times = function(t, e) {
if (1 > (t = fa(t)) || 9007199254740991 < t) return [];
var i = 4294967295, n = So(t, 4294967295);
for (t -= 4294967295, n = S(n, e = cn(e)); ++i < t; ) e(i);
return n;
}, i.toFinite = ya, i.toInteger = fa, i.toLength = xa, i.toLower = function(t) {
return va(t).toLowerCase();
}, i.toNumber = ha, i.toSafeInteger = function(t) {
return t ? ce(fa(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0;
}, i.toString = va, i.toUpper = function(t) {
return va(t).toUpperCase();
}, i.trim = function(t, e, i) {
return (t = va(t)) && (i || e === U) ? t.replace(rt, "") : t && (e = di(e)) ? _i(t = V(t), e = j(t, i = V(e)), i = L(t, i) + 1).join("") : t;
}, i.trimEnd = function(t, e, i) {
return (t = va(t)) && (i || e === U) ? t.replace(lt, "") : t && (e = di(e)) ? _i(t = V(t), 0, e = L(t, V(e)) + 1).join("") : t;
}, i.trimStart = function(t, e, i) {
return (t = va(t)) && (i || e === U) ? t.replace(st, "") : t && (e = di(e)) ? _i(t = V(t), e = j(t, V(e))).join("") : t;
}, i.truncate = function(t, e) {
var i = 30, n = "...";
if (ra(e)) {
var a = "separator" in e ? e.separator : a;
i = "length" in e ? fa(e.length) : i, n = "omission" in e ? di(e.omission) : n;
}
var o = (t = va(t)).length;
if (Tt.test(t)) {
var m = V(t);
o = m.length;
}
if (i >= o) return t;
if (1 > (o = i - P(n))) return n;
if (i = m ? _i(m, 0, o).join("") : t.slice(0, o), a === U) return i + n;
if (m && (o += i.length - o), er(a)) {
if (t.slice(o).search(a)) {
var r = i;
for (a.global || (a = qa(a.source, va(xt.exec(a)) + "g")), a.lastIndex = 0; m = a.exec(r); ) var s = m.index;
i = i.slice(0, s === U ? o : s);
}
} else t.indexOf(di(a), o) != o && -1 < (a = i.lastIndexOf(a)) && (i = i.slice(0, a));
return i + n;
}, i.unescape = function(t) {
return (t = va(t)) && X.test(t) ? t.replace($, ie) : t;
}, i.uniqueId = function(t) {
var e = ++Xa;
return va(t) + e;
}, i.upperCase = Br, i.upperFirst = Ir, i.each = Yn, i.eachRight = Jn, i.first = Dn, 
ja(i, function() {
var t = {};
return be(i, function(e, n) {
Ka.call(i.prototype, n) || (t[n] = e);
}), t;
}(), {
chain: !1
}), i.VERSION = "4.17.5", o("bind bindKey curry curryRight partial partialRight".split(" "), function(t) {
i[t].placeholder = i;
}), o([ "drop", "take" ], function(t, e) {
At.prototype[t] = function(i) {
i = i === U ? 1 : Ao(fa(i), 0);
var n = this.__filtered__ && !e ? new At(this) : this.clone();
return n.__filtered__ ? n.__takeCount__ = So(i, n.__takeCount__) : n.__views__.push({
size: So(i, 4294967295),
type: t + (0 > n.__dir__ ? "Right" : "")
}), n;
}, At.prototype[t + "Right"] = function(e) {
return this.reverse()[t](e).reverse();
};
}), o([ "filter", "map", "takeWhile" ], function(t, e) {
var i = e + 1, n = 1 == i || 3 == i;
At.prototype[t] = function(t) {
var e = this.clone();
return e.__iteratees__.push({
iteratee: cn(t, 3),
type: i
}), e.__filtered__ = e.__filtered__ || n, e;
};
}), o([ "head", "last" ], function(t, e) {
var i = "take" + (e ? "Right" : "");
At.prototype[t] = function() {
return this[i](1).value()[0];
};
}), o([ "initial", "tail" ], function(t, e) {
var i = "drop" + (e ? "" : "Right");
At.prototype[t] = function() {
return this.__filtered__ ? new At(this) : this[i](1);
};
}), At.prototype.compact = function() {
return this.filter(Na);
}, At.prototype.find = function(t) {
return this.filter(t).head();
}, At.prototype.findLast = function(t) {
return this.reverse().find(t);
}, At.prototype.invokeMap = ti(function(t, e) {
return "function" == typeof t ? new At(this) : this.map(function(i) {
return Le(i, t, e);
});
}), At.prototype.reject = function(t) {
return this.filter(Qn(cn(t)));
}, At.prototype.slice = function(t, e) {
t = fa(t);
var i = this;
return i.__filtered__ && (0 < t || 0 > e) ? new At(i) : (0 > t ? i = i.takeRight(-t) : t && (i = i.drop(t)), 
e !== U && (i = 0 > (e = fa(e)) ? i.dropRight(-e) : i.take(e - t)), i);
}, At.prototype.takeRightWhile = function(t) {
return this.reverse().takeWhile(t).reverse();
}, At.prototype.toArray = function() {
return this.take(4294967295);
}, be(At.prototype, function(t, e) {
var n = /^(?:filter|find|map|reject)|While$/.test(e), a = /^(?:head|last)$/.test(e), o = i[a ? "take" + ("last" == e ? "Right" : "") : e], m = a || /^find/.test(e);
o && (i.prototype[e] = function() {
function e(t) {
return t = o.apply(i, c([ t ], s)), a && u ? t[0] : t;
}
var r = this.__wrapped__, s = a ? [ 1 ] : arguments, l = r instanceof At, p = s[0], d = l || Km(r);
d && n && "function" == typeof p && 1 != p.length && (l = d = !1);
var u = this.__chain__, y = !!this.__actions__.length;
p = m && !u, l = l && !y;
return !m && d ? (r = l ? r : new At(this), (r = t.apply(r, s)).__actions__.push({
func: Hn,
args: [ e ],
thisArg: U
}), new Ct(r, u)) : p && l ? t.apply(this, s) : (r = this.thru(e), p ? a ? r.value()[0] : r.value() : r);
});
}), o("pop push shift sort splice unshift".split(" "), function(t) {
var e = Ya[t], n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(t);
i.prototype[t] = function() {
var t = arguments;
if (a && !this.__chain__) {
var i = this.value();
return e.apply(Km(i) ? i : [], t);
}
return this[n](function(i) {
return e.apply(Km(i) ? i : [], t);
});
};
}), be(At.prototype, function(t, e) {
var n = i[e];
if (n) {
var a = n.name + "";
(Ro[a] || (Ro[a] = [])).push({
name: e,
func: n
});
}
}), Ro[qi(U, 2).name] = [ {
name: "wrapper",
func: U
} ], At.prototype.clone = function() {
var t = new At(this.__wrapped__);
return t.__actions__ = Bi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, 
t.__iteratees__ = Bi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, 
t.__views__ = Bi(this.__views__), t;
}, At.prototype.reverse = function() {
if (this.__filtered__) {
var t = new At(this);
t.__dir__ = -1, t.__filtered__ = !0;
} else (t = this.clone()).__dir__ *= -1;
return t;
}, At.prototype.value = function() {
var t, e = this.__wrapped__.value(), i = this.__dir__, n = Km(e), a = 0 > i, o = n ? e.length : 0;
t = o;
for (var m = this.__views__, r = 0, s = -1, l = m.length; ++s < l; ) {
var p = m[s], d = p.size;
switch (p.type) {
case "drop":
r += d;
break;

case "dropRight":
t -= d;
break;

case "take":
t = So(t, r + d);
break;

case "takeRight":
r = Ao(r, t - d);
}
}
if (m = (t = {
start: r,
end: t
}).start, t = (r = t.end) - m, m = a ? r : m - 1, s = (r = this.__iteratees__).length, 
l = 0, p = So(t, this.__takeCount__), !n || !a && o == t && p == t) return fi(e, this.__actions__);
n = [];
t: for (;t-- && l < p; ) {
for (a = -1, o = e[m += i]; ++a < s; ) {
d = (c = r[a]).type;
var c = (0, c.iteratee)(o);
if (2 == d) o = c; else if (!c) {
if (1 == d) continue t;
break t;
}
}
n[l++] = o;
}
return n;
}, i.prototype.at = Im, i.prototype.chain = function() {
return zn(this);
}, i.prototype.commit = function() {
return new Ct(this.value(), this.__chain__);
}, i.prototype.next = function() {
this.__values__ === U && (this.__values__ = ua(this.value()));
var t = this.__index__ >= this.__values__.length;
return {
done: t,
value: t ? U : this.__values__[this.__index__++]
};
}, i.prototype.plant = function(t) {
for (var e, i = this; i instanceof w; ) {
var n = Mn(i);
n.__index__ = 0, n.__values__ = U, e ? a.__wrapped__ = n : e = n;
var a = n;
i = i.__wrapped__;
}
return a.__wrapped__ = t, e;
}, i.prototype.reverse = function() {
var t = this.__wrapped__;
return t instanceof At ? (this.__actions__.length && (t = new At(this)), (t = t.reverse()).__actions__.push({
func: Hn,
args: [ Vn ],
thisArg: U
}), new Ct(t, this.__chain__)) : this.thru(Vn);
}, i.prototype.toJSON = i.prototype.valueOf = i.prototype.value = function() {
return fi(this.__wrapped__, this.__actions__);
}, i.prototype.first = i.prototype.head, uo && (i.prototype[uo] = function() {
return this;
}), i;
}();
"function" == typeof define && "object" == typeof define.amd && define.amd ? (Ut._ = ne, 
define(function() {
return ne;
})) : zt ? ((zt.exports = ne)._ = ne, qt._ = ne) : Ut._ = ne;
}).call(void 0);
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ],
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
} ],
makeBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "06078H5xgRFHqqGDbkyUT3V", "makeBox");
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
item: cc.Prefab,
list0: cc.Node,
list1: cc.Node,
typeBox: cc.Node,
reBup: cc.Node,
time: cc.Label,
updateFont: cc.Label
},
onLoad: function() {
var t = this;
G.setTimeCb({
path: "Canvas/makeBox",
js: "makeBox",
cb: "updateTime",
time: [ 0, 1 ]
});
G.setBup(this.reBup, function() {
if (G.user.makeFree > 0) {
G.user.makeFree--;
G.user.makeTime = 0;
G.updateMake();
} else {
var e = G.getAdConf(), i = Math.ceil(e.money / 2);
if (G.user.coin >= i) {
G.user.coin -= i;
G.user.makeFree = 1;
} else G.noCoinTips();
}
t.updateFree();
G.save();
});
this.showList(0);
this.showList(1);
},
start: function() {},
onEnable: function() {
var t = this, e = [];
G.user.var.alch > 0 && e.push(0);
G.user.var.cast > 0 && e.push(1);
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.updateInfo(e);
}, e);
this.typeBox.getComponent("typeBox").showType(e[0]);
this.time.node.active = G.user.makeFree < 1;
G.user.makeList[0].length < 1 && G.user.makeList[1].length < 1 && G.updateMake();
this.updateTime();
this.updateFree();
},
showList: function(t) {
0 == t ? this.list0.removeAllChildren() : this.list1.removeAllChildren();
var e = G.user.makeList[t];
for (var i in e) {
var n = cc.instantiate(this.item);
n.parent = 0 == t ? this.list0 : this.list1;
n.getComponent("makeItem").showInfo(t, e[i]);
}
},
checkCost: function(t, e) {
var i = 0 == t ? G.ldConf[e] : G.lqConf[e], n = 0 == t ? [ [ i.raw1, i.num1 ], [ i.raw2, i.num2 ], [ i.raw3, i.num3 ] ] : [ [ i.ore1, i.num1 ], [ i.ore2, i.num2 ], [ i.ore3, i.num3 ] ];
for (var a in n) if ("" != n[a][0]) {
var o = G.user.obj["_" + n[a][0]];
if (!o || o < n[a][1]) return !1;
}
return !0;
},
updateBar: function() {
for (var t, e = i(this.list0.children); !(t = e()).done; ) t.value.getComponent("makeItem").updateBar();
for (var n, a = i(this.list1.children); !(n = a()).done; ) n.value.getComponent("makeItem").updateBar();
this.updateTime();
},
updateInfo: function(t) {
this.list0.parent.active = 0 == t;
this.list1.parent.active = 1 == t;
for (var e, n = i(this.list0.children); !(e = n()).done; ) e.value.getComponent("makeItem").updateInfo();
for (var a, o = i(this.list1.children); !(a = o()).done; ) a.value.getComponent("makeItem").updateInfo();
},
updateFree: function() {
var t = G.getAdConf(), e = Math.ceil(t.money / 2);
this.updateFont.string = G.user.makeFree < 1 ? "灵石加速 " + G.getNum(e) : "刷 新(" + G.user.makeFree + ")";
this.time.node.active = G.user.makeFree < 1;
},
updateTime: function() {
if (G.user.makeFree < 1) {
var t = G.VAL.MAKE_TIME - (G.getNowSec() - G.user.makeTime);
if (t > 0) this.time.string = "刷新冷却 " + G.getTime(t).ms; else {
G.user.makeTime = G.getNowSec();
G.user.makeFree = 1;
G.save();
this.updateFree();
}
}
}
});
cc._RF.pop();
}, {} ],
makeItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "4663bbbh5NKOYsIEI5gu2CV", "makeItem");
cc.Class({
extends: cc.Component,
properties: {
icon: cc.Node,
title: cc.Label,
rar: cc.Label,
desc: cc.Label,
resBox: cc.Node,
bup: cc.Node,
bar: cc.Node,
per: cc.Label,
type: {
default: 0,
visible: !1
},
id: {
default: null,
visible: !1
},
index: {
default: null,
visible: !1
},
cost: {
default: null,
visible: !1
},
costFlag: {
default: !0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
t.makeObj();
});
},
showInfo: function(t, e) {
var i = 0 == t ? G.ldConf[e] : G.lqConf[e], n = 0 == t ? i.pdc : i.trump;
this.type = t;
this.id = n;
this.index = e;
var a = G.getConf(G.objConf, n), o = "";
if (0 == t) {
o = null == G.temp.danIcon["_" + n] ? G._.random(0, 9) : G.temp.danIcon["_" + n];
G.temp.danIcon["_" + n] = o;
o = "dan_" + o;
} else o = "obj_" + a.sub_type + "_" + a.qua;
G.setLogo(this.icon, "obj/", "obj", o, !0, 55);
this.title.string = "【" + a.name + "】";
this.rar.string = G.VAL.RAR[a.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[a.qua]);
this.desc.string = a.des;
this.cost = 0 == t ? [ [ i.raw1, i.num1 ], [ i.raw2, i.num2 ], [ i.raw3, i.num3 ] ] : [ [ i.ore1, i.num1 ], [ i.ore2, i.num2 ], [ i.ore3, i.num3 ] ];
var m = this.resBox.children;
this.costFlag = !0;
for (var r in this.cost) if ("" != this.cost[r][0]) {
m[r].active = !0;
var s = G.getConf(G.objConf, this.cost[r][0]), l = m[r].getChildByName("title").getComponent(cc.Label), p = m[r].getChildByName("has").getComponent(cc.Label), d = m[r].getChildByName("need").getComponent(cc.Label);
l.string = s.name;
var c = G.user.obj["_" + this.cost[r][0]];
p.string = c || 0;
d.string = "/" + this.cost[r][1];
(!c || c < this.cost[r][1]) && (this.costFlag = !1);
p.node.color = Number(p.string) >= this.cost[r][1] ? cc.color("#22960E") : cc.color("#E13D3D");
}
this.updateBar();
},
makeObj: function() {
if (this.costFlag) {
for (var t in this.cost) "" != this.cost[t][0] && G.delObj(this.cost[t][0], this.cost[t][1]);
var e = G.getConf(G.ldConf, this.id, "pdc");
e || (e = G.getConf(G.lqConf, this.id, "trump"));
G.user.obj["_" + this.id] ? G.user.obj["_" + this.id] += e.num0 : G.user.obj["_" + this.id] = e.num0;
G.showTips("炼制成功");
G.save();
G.getNode("Canvas/makeBox", "makeBox").js.updateInfo(this.type);
} else G.showTips("材料不足，请前往材料【副本】或【坊市】获取。");
},
updateInfo: function() {
this.showInfo(this.type, this.index);
},
updateBar: function() {
var t = G.user.lian[this.type]["_" + this.id];
if (t) {
this.bar.parent.active = !0;
this.bup.active = !1;
var e = G.getNowSec() - t;
if (e >= G.VAL.LIAN_TIME) {
delete G.user.lian[this.type]["_" + this.id];
var i = G.getConf(G.ldConf, this.id, "pdc");
i || (i = G.getConf(G.lqConf, this.id, "trump"));
G.user.obj["_" + this.id] ? G.user.obj["_" + this.id] += i.num0 : G.user.obj["_" + this.id] = i.num0;
G.save();
this.bar.parent.active = !1;
this.bup.active = !0;
G.showTips("炼制成功");
} else {
this.per.string = Math.floor(e / G.VAL.LIAN_TIME * 100) + "%";
this.bar.scaleX = Math.min(1, e / G.VAL.LIAN_TIME);
}
}
}
});
cc._RF.pop();
}, {} ],
manItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "f299etXMn9K3rhegTk8JTm3", "manItem");
cc.Class({
extends: cc.Component,
properties: {
sel: cc.Node,
img: cc.Node,
title: cc.Label,
key: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.node, function() {
var e = G.getNode("Canvas/homeBox/box/view1", "homeView1");
e.js.showDesc(t.key);
e.js.updateLev();
});
},
showInfo: function(t) {
this.key = t;
var e = G.user.home.man[t];
this.title.string = e.name;
G.setLogo(this.img, "role/", "role", "image" + e.img);
},
showSel: function(t) {
this.sel.active = this.key == t;
}
});
cc._RF.pop();
}, {} ],
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
}, {} ],
moment: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "57664eMvfdAD5jE3SvLrsD6", "moment");
n = function() {
function i() {
return ee.apply(null, arguments);
}
function n(t) {
return "[object Array]" === Object.prototype.toString.call(t);
}
function a(t) {
return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t);
}
function o(t, e) {
var i, n = [];
for (i = 0; i < t.length; ++i) n.push(e(t[i], i));
return n;
}
function m(t, e) {
return Object.prototype.hasOwnProperty.call(t, e);
}
function r(t, e) {
for (var i in e) m(e, i) && (t[i] = e[i]);
return m(e, "toString") && (t.toString = e.toString), m(e, "valueOf") && (t.valueOf = e.valueOf), 
t;
}
function s(t, e, i, n) {
return ht(t, e, i, n, !0).utc();
}
function l(t) {
return null == t._pf && (t._pf = {
empty: !1,
unusedTokens: [],
unusedInput: [],
overflow: -2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1
}), t._pf;
}
function p(t) {
if (null == t._isValid) {
var e = l(t);
t._isValid = !(isNaN(t._d.getTime()) || !(e.overflow < 0) || e.empty || e.invalidMonth || e.invalidWeekday || e.nullInput || e.invalidFormat || e.userInvalidated), 
t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour);
}
return t._isValid;
}
function d(t) {
var e = s(NaN);
return null != t ? r(l(e), t) : l(e).userInvalidated = !0, e;
}
function c(t, e) {
var i, n, a;
if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), 
"undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), 
"undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), 
"undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), 
"undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = l(e)), 
"undefined" != typeof e._locale && (t._locale = e._locale), ne.length > 0) for (i in ne) "undefined" != typeof (a = e[n = ne[i]]) && (t[n] = a);
return t;
}
function u(t) {
c(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), !1 === ae && (ae = !0, 
i.updateOffset(this), ae = !1);
}
function y(t) {
return t instanceof u || null != t && null != t._isAMomentObject;
}
function f(t) {
return 0 > t ? Math.ceil(t) : Math.floor(t);
}
function x(t) {
var e = +t, i = 0;
return 0 !== e && isFinite(e) && (i = f(e)), i;
}
function h(t, e, i) {
var n, a = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), m = 0;
for (n = 0; a > n; n++) (i && t[n] !== e[n] || !i && x(t[n]) !== x(e[n])) && m++;
return m + o;
}
function g() {}
function v(t) {
return t ? t.toLowerCase().replace("_", "-") : t;
}
function G(t) {
for (var e, i, n, a, o = 0; o < t.length; ) {
for (e = (a = v(t[o]).split("-")).length, i = (i = v(t[o + 1])) ? i.split("-") : null; e > 0; ) {
if (n = _(a.slice(0, e).join("-"))) return n;
if (i && i.length >= e && h(a, i, !0) >= e - 1) break;
e--;
}
o++;
}
return null;
}
function _(i) {
var n = null;
if (!oe[i] && "undefined" != typeof e && e && e.exports) try {
n = ie._abbr, t("./locale/" + i), b(n);
} catch (t) {}
return oe[i];
}
function b(t, e) {
var i;
return t && (i = "undefined" == typeof e ? k(t) : w(t, e)) && (ie = i), ie._abbr;
}
function w(t, e) {
return null !== e ? (e.abbr = t, oe[t] = oe[t] || new g(), oe[t].set(e), b(t), oe[t]) : (delete oe[t], 
null);
}
function k(t) {
var e;
if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ie;
if (!n(t)) {
if (e = _(t)) return e;
t = [ t ];
}
return G(t);
}
function C(t, e) {
var i = t.toLowerCase();
me[i] = me[i + "s"] = me[e] = t;
}
function A(t) {
return "string" == typeof t ? me[t] || me[t.toLowerCase()] : void 0;
}
function S(t) {
var e, i, n = {};
for (i in t) m(t, i) && (e = A(i)) && (n[e] = t[i]);
return n;
}
function B(t, e) {
return function(n) {
return null != n ? (N(this, t, n), i.updateOffset(this, e), this) : I(this, t);
};
}
function I(t, e) {
return t._d["get" + (t._isUTC ? "UTC" : "") + e]();
}
function N(t, e, i) {
return t._d["set" + (t._isUTC ? "UTC" : "") + e](i);
}
function T(t, e) {
var i;
if ("object" == typeof t) for (i in t) this.set(i, t[i]); else if ("function" == typeof this[t = A(t)]) return this[t](e);
return this;
}
function j(t, e, i) {
var n = "" + Math.abs(t), a = e - n.length;
return (t >= 0 ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + n;
}
function L(t, e, i, n) {
var a = n;
"string" == typeof n && (a = function() {
return this[n]();
}), t && (pe[t] = a), e && (pe[e[0]] = function() {
return j(a.apply(this, arguments), e[1], e[2]);
}), i && (pe[i] = function() {
return this.localeData().ordinal(a.apply(this, arguments), t);
});
}
function M(t) {
return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
}
function O(t) {
var e, i, n = t.match(re);
for (e = 0, i = n.length; i > e; e++) pe[n[e]] ? n[e] = pe[n[e]] : n[e] = M(n[e]);
return function(a) {
var o = "";
for (e = 0; i > e; e++) o += n[e] instanceof Function ? n[e].call(a, t) : n[e];
return o;
};
}
function F(t, e) {
return t.isValid() ? (e = E(e, t.localeData()), le[e] = le[e] || O(e), le[e](t)) : t.localeData().invalidDate();
}
function E(t, e) {
function i(t) {
return e.longDateFormat(t) || t;
}
var n = 5;
for (se.lastIndex = 0; n >= 0 && se.test(t); ) t = t.replace(se, i), se.lastIndex = 0, 
n -= 1;
return t;
}
function D(t) {
return "function" == typeof t && "[object Function]" === Object.prototype.toString.call(t);
}
function R(t, e, i) {
ke[t] = D(e) ? e : function(t) {
return t && i ? i : e;
};
}
function P(t, e) {
return m(ke, t) ? ke[t](e._strict, e._locale) : new RegExp(V(t));
}
function V(t) {
return t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, i, n, a) {
return e || i || n || a;
}).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function U(t, e) {
var i, n = e;
for ("string" == typeof t && (t = [ t ]), "number" == typeof e && (n = function(t, i) {
i[e] = x(t);
}), i = 0; i < t.length; i++) Ce[t[i]] = n;
}
function q(t, e) {
U(t, function(t, i, n, a) {
n._w = n._w || {}, e(t, n._w, n, a);
});
}
function z(t, e, i) {
null != e && m(Ce, t) && Ce[t](e, i._a, i, t);
}
function H(t, e) {
return new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
}
function Y(t, e) {
var i;
return "string" == typeof e && "number" != typeof (e = t.localeData().monthsParse(e)) ? t : (i = Math.min(t.date(), H(t.year(), e)), 
t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t);
}
function J(t) {
return null != t ? (Y(this, t), i.updateOffset(this, !0), this) : I(this, "Month");
}
function W(t) {
var e, i = t._a;
return i && -2 === l(t).overflow && (e = i[Se] < 0 || i[Se] > 11 ? Se : i[Be] < 1 || i[Be] > H(i[Ae], i[Se]) ? Be : i[Ie] < 0 || i[Ie] > 24 || 24 === i[Ie] && (0 !== i[Ne] || 0 !== i[Te] || 0 !== i[je]) ? Ie : i[Ne] < 0 || i[Ne] > 59 ? Ne : i[Te] < 0 || i[Te] > 59 ? Te : i[je] < 0 || i[je] > 999 ? je : -1, 
l(t)._overflowDayOfYear && (Ae > e || e > Be) && (e = Be), l(t).overflow = e), t;
}
function $(t) {
!1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t);
}
function K(t, e) {
var i = !0;
return r(function() {
return i && ($(t + "\n" + new Error().stack), i = !1), e.apply(this, arguments);
}, e);
}
function X(t, e) {
Oe[t] || ($(e), Oe[t] = !0);
}
function Z(t) {
var e, i, n = t._i, a = Fe.exec(n);
if (a) {
for (l(t).iso = !0, e = 0, i = Ee.length; i > e; e++) if (Ee[e][1].exec(n)) {
t._f = Ee[e][0];
break;
}
for (e = 0, i = De.length; i > e; e++) if (De[e][1].exec(n)) {
t._f += (a[6] || " ") + De[e][0];
break;
}
n.match(be) && (t._f += "Z"), pt(t);
} else t._isValid = !1;
}
function Q(t) {
var e = Re.exec(t._i);
return null !== e ? void (t._d = new Date(+e[1])) : (Z(t), void (!1 === t._isValid && (delete t._isValid, 
i.createFromInputFallback(t))));
}
function tt(t, e, i, n, a, o, m) {
var r = new Date(t, e, i, n, a, o, m);
return 1970 > t && r.setFullYear(t), r;
}
function et(t) {
var e = new Date(Date.UTC.apply(null, arguments));
return 1970 > t && e.setUTCFullYear(t), e;
}
function it(t) {
return nt(t) ? 366 : 365;
}
function nt(t) {
return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
}
function at(t, e, i) {
var n, a = i - e, o = i - t.day();
return o > a && (o -= 7), a - 7 > o && (o += 7), n = gt(t).add(o, "d"), {
week: Math.ceil(n.dayOfYear() / 7),
year: n.year()
};
}
function ot(t, e, i, n, a) {
var o, m = 6 + a - n, r = et(t, 0, 1 + m).getUTCDay();
return a > r && (r += 7), {
year: (o = 1 + m + 7 * (e - 1) - r + (i = null != i ? 1 * i : a)) > 0 ? t : t - 1,
dayOfYear: o > 0 ? o : it(t - 1) + o
};
}
function mt(t, e, i) {
return null != t ? t : null != e ? e : i;
}
function rt(t) {
var e = new Date();
return t._useUTC ? [ e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() ] : [ e.getFullYear(), e.getMonth(), e.getDate() ];
}
function st(t) {
var e, i, n, a, o = [];
if (!t._d) {
for (n = rt(t), t._w && null == t._a[Be] && null == t._a[Se] && lt(t), t._dayOfYear && (a = mt(t._a[Ae], n[Ae]), 
t._dayOfYear > it(a) && (l(t)._overflowDayOfYear = !0), i = et(a, 0, t._dayOfYear), 
t._a[Se] = i.getUTCMonth(), t._a[Be] = i.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = o[e] = n[e];
for (;7 > e; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
24 === t._a[Ie] && 0 === t._a[Ne] && 0 === t._a[Te] && 0 === t._a[je] && (t._nextDay = !0, 
t._a[Ie] = 0), t._d = (t._useUTC ? et : tt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), 
t._nextDay && (t._a[Ie] = 24);
}
}
function lt(t) {
var e, i, n, a, o, m, r;
null != (e = t._w).GG || null != e.W || null != e.E ? (o = 1, m = 4, i = mt(e.GG, t._a[Ae], at(gt(), 1, 4).year), 
n = mt(e.W, 1), a = mt(e.E, 1)) : (o = t._locale._week.dow, m = t._locale._week.doy, 
i = mt(e.gg, t._a[Ae], at(gt(), o, m).year), n = mt(e.w, 1), null != e.d ? o > (a = e.d) && ++n : a = null != e.e ? e.e + o : o), 
r = ot(i, n, a, m, o), t._a[Ae] = r.year, t._dayOfYear = r.dayOfYear;
}
function pt(t) {
if (t._f !== i.ISO_8601) {
t._a = [], l(t).empty = !0;
var e, n, a, o, m, r = "" + t._i, s = r.length, p = 0;
for (a = E(t._f, t._locale).match(re) || [], e = 0; e < a.length; e++) o = a[e], 
(n = (r.match(P(o, t)) || [])[0]) && ((m = r.substr(0, r.indexOf(n))).length > 0 && l(t).unusedInput.push(m), 
r = r.slice(r.indexOf(n) + n.length), p += n.length), pe[o] ? (n ? l(t).empty = !1 : l(t).unusedTokens.push(o), 
z(o, n, t)) : t._strict && !n && l(t).unusedTokens.push(o);
l(t).charsLeftOver = s - p, r.length > 0 && l(t).unusedInput.push(r), !0 === l(t).bigHour && t._a[Ie] <= 12 && t._a[Ie] > 0 && (l(t).bigHour = void 0), 
t._a[Ie] = dt(t._locale, t._a[Ie], t._meridiem), st(t), W(t);
} else Z(t);
}
function dt(t, e, i) {
var n;
return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? ((n = t.isPM(i)) && 12 > e && (e += 12), 
n || 12 !== e || (e = 0), e) : e;
}
function ct(t) {
var e, i, n, a, o;
if (0 === t._f.length) return l(t).invalidFormat = !0, void (t._d = new Date(NaN));
for (a = 0; a < t._f.length; a++) o = 0, e = c({}, t), null != t._useUTC && (e._useUTC = t._useUTC), 
e._f = t._f[a], pt(e), p(e) && (o += l(e).charsLeftOver, o += 10 * l(e).unusedTokens.length, 
l(e).score = o, (null == n || n > o) && (n = o, i = e));
r(t, i || e);
}
function ut(t) {
if (!t._d) {
var e = S(t._i);
t._a = [ e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond ], 
st(t);
}
}
function yt(t) {
var e = new u(W(ft(t)));
return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e;
}
function ft(t) {
var e = t._i, i = t._f;
return t._locale = t._locale || k(t._l), null === e || void 0 === i && "" === e ? d({
nullInput: !0
}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new u(W(e)) : (n(i) ? ct(t) : i ? pt(t) : a(e) ? t._d = e : xt(t), 
t));
}
function xt(t) {
var e = t._i;
void 0 === e ? t._d = new Date() : a(e) ? t._d = new Date(+e) : "string" == typeof e ? Q(t) : n(e) ? (t._a = o(e.slice(0), function(t) {
return parseInt(t, 10);
}), st(t)) : "object" == typeof e ? ut(t) : "number" == typeof e ? t._d = new Date(e) : i.createFromInputFallback(t);
}
function ht(t, e, i, n, a) {
var o = {};
return "boolean" == typeof i && (n = i, i = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, 
o._l = i, o._i = t, o._f = e, o._strict = n, yt(o);
}
function gt(t, e, i, n) {
return ht(t, e, i, n, !1);
}
function vt(t, e) {
var i, a;
if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return gt();
for (i = e[0], a = 1; a < e.length; ++a) (!e[a].isValid() || e[a][t](i)) && (i = e[a]);
return i;
}
function Gt(t) {
var e = S(t), i = e.year || 0, n = e.quarter || 0, a = e.month || 0, o = e.week || 0, m = e.day || 0, r = e.hour || 0, s = e.minute || 0, l = e.second || 0, p = e.millisecond || 0;
this._milliseconds = +p + 1e3 * l + 6e4 * s + 36e5 * r, this._days = +m + 7 * o, 
this._months = +a + 3 * n + 12 * i, this._data = {}, this._locale = k(), this._bubble();
}
function _t(t) {
return t instanceof Gt;
}
function bt(t, e) {
L(t, 0, 0, function() {
var t = this.utcOffset(), i = "+";
return 0 > t && (t = -t, i = "-"), i + j(~~(t / 60), 2) + e + j(~~t % 60, 2);
});
}
function wt(t) {
var e = (t || "").match(be) || [], i = ((e[e.length - 1] || []) + "").match(qe) || [ "-", 0, 0 ], n = 60 * i[1] + x(i[2]);
return "+" === i[0] ? n : -n;
}
function kt(t, e) {
var n, o;
return e._isUTC ? (n = e.clone(), o = (y(t) || a(t) ? +t : +gt(t)) - +n, n._d.setTime(+n._d + o), 
i.updateOffset(n, !1), n) : gt(t).local();
}
function Ct(t) {
return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
}
function At() {
return this._isUTC && 0 === this._offset;
}
function St(t, e) {
var i, n, a, o = t, r = null;
return _t(t) ? o = {
ms: t._milliseconds,
d: t._days,
M: t._months
} : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (r = ze.exec(t)) ? (i = "-" === r[1] ? -1 : 1, 
o = {
y: 0,
d: x(r[Be]) * i,
h: x(r[Ie]) * i,
m: x(r[Ne]) * i,
s: x(r[Te]) * i,
ms: x(r[je]) * i
}) : (r = He.exec(t)) ? (i = "-" === r[1] ? -1 : 1, o = {
y: Bt(r[2], i),
M: Bt(r[3], i),
d: Bt(r[4], i),
h: Bt(r[5], i),
m: Bt(r[6], i),
s: Bt(r[7], i),
w: Bt(r[8], i)
}) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (a = Nt(gt(o.from), gt(o.to)), 
(o = {}).ms = a.milliseconds, o.M = a.months), n = new Gt(o), _t(t) && m(t, "_locale") && (n._locale = t._locale), 
n;
}
function Bt(t, e) {
var i = t && parseFloat(t.replace(",", "."));
return (isNaN(i) ? 0 : i) * e;
}
function It(t, e) {
var i = {
milliseconds: 0,
months: 0
};
return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, 
i.milliseconds = +e - +t.clone().add(i.months, "M"), i;
}
function Nt(t, e) {
var i;
return e = kt(e, t), t.isBefore(e) ? i = It(t, e) : ((i = It(e, t)).milliseconds = -i.milliseconds, 
i.months = -i.months), i;
}
function Tt(t, e) {
return function(i, n) {
var a;
return null === n || isNaN(+n) || (X(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), 
a = i, i = n, n = a), jt(this, St(i = "string" == typeof i ? +i : i, n), t), this;
};
}
function jt(t, e, n, a) {
var o = e._milliseconds, m = e._days, r = e._months;
a = null == a || a, o && t._d.setTime(+t._d + o * n), m && N(t, "Date", I(t, "Date") + m * n), 
r && Y(t, I(t, "Month") + r * n), a && i.updateOffset(t, m || r);
}
function Lt(t, e) {
var i = 12 * (e.year() - t.year()) + (e.month() - t.month()), n = t.clone().add(i, "months");
return -(i + (0 > e - n ? (e - n) / (n - t.clone().add(i - 1, "months")) : (e - n) / (t.clone().add(i + 1, "months") - n)));
}
function Mt() {
var t = this.clone().utc();
return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : F(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : F(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
}
function Ot(t) {
var e;
return void 0 === t ? this._locale._abbr : (null != (e = k(t)) && (this._locale = e), 
this);
}
function Ft() {
return this._locale;
}
function Et(t, e) {
L(0, [ t, t.length ], 0, e);
}
function Dt(t, e, i) {
return at(gt([ t, 11, 31 + e - i ]), e, i).week;
}
function Rt(t, e) {
return "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = e.weekdaysParse(t)) ? t : null : parseInt(t, 10);
}
function Pt(t, e) {
L(t, 0, 0, function() {
return this.localeData().meridiem(this.hours(), this.minutes(), e);
});
}
function Vt(t, e) {
return e._meridiemParse;
}
function Ut(t, e) {
e[je] = x(1e3 * ("0." + t));
}
function qt(t) {
return t;
}
function zt(t, e, i, n) {
var a = k(), o = s().set(n, e);
return a[i](o, t);
}
function Ht(t, e, i, n, a) {
if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return zt(t, e, i, a);
var o, m = [];
for (o = 0; n > o; o++) m[o] = zt(t, o, i, a);
return m;
}
function Yt(t, e, i, n) {
var a = St(e, i);
return t._milliseconds += n * a._milliseconds, t._days += n * a._days, t._months += n * a._months, 
t._bubble();
}
function Jt(t) {
return 0 > t ? Math.floor(t) : Math.ceil(t);
}
function Wt(t) {
return 4800 * t / 146097;
}
function $t(t) {
return 146097 * t / 4800;
}
function Kt(t) {
return function() {
return this.as(t);
};
}
function Xt(t) {
return function() {
return this._data[t];
};
}
function Zt(t, e, i, n, a) {
return a.relativeTime(e || 1, !!i, t, n);
}
function Qt(t, e, i) {
var n = St(t).abs(), a = wi(n.as("s")), o = wi(n.as("m")), m = wi(n.as("h")), r = wi(n.as("d")), s = wi(n.as("M")), l = wi(n.as("y")), p = a < ki.s && [ "s", a ] || 1 === o && [ "m" ] || o < ki.m && [ "mm", o ] || 1 === m && [ "h" ] || m < ki.h && [ "hh", m ] || 1 === r && [ "d" ] || r < ki.d && [ "dd", r ] || 1 === s && [ "M" ] || s < ki.M && [ "MM", s ] || 1 === l && [ "y" ] || [ "yy", l ];
return p[2] = e, p[3] = +t > 0, p[4] = i, Zt.apply(null, p);
}
function te() {
var t, e, i = Ci(this._milliseconds) / 1e3, n = Ci(this._days), a = Ci(this._months);
t = f(i / 60), e = f(t / 60), i %= 60, t %= 60;
var o = f(a / 12), m = a %= 12, r = n, s = e, l = t, p = i, d = this.asSeconds();
return d ? (0 > d ? "-" : "") + "P" + (o ? o + "Y" : "") + (m ? m + "M" : "") + (r ? r + "D" : "") + (s || l || p ? "T" : "") + (s ? s + "H" : "") + (l ? l + "M" : "") + (p ? p + "S" : "") : "P0D";
}
var ee, ie, ne = i.momentProperties = [], ae = !1, oe = {}, me = {}, re = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, se = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, le = {}, pe = {}, de = /\d/, ce = /\d\d/, ue = /\d{3}/, ye = /\d{4}/, fe = /[+-]?\d{6}/, xe = /\d\d?/, he = /\d{1,3}/, ge = /\d{1,4}/, ve = /[+-]?\d{1,6}/, Ge = /\d+/, _e = /[+-]?\d+/, be = /Z|[+-]\d\d:?\d\d/gi, we = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ke = {}, Ce = {}, Ae = 0, Se = 1, Be = 2, Ie = 3, Ne = 4, Te = 5, je = 6;
L("M", [ "MM", 2 ], "Mo", function() {
return this.month() + 1;
}), L("MMM", 0, 0, function(t) {
return this.localeData().monthsShort(this, t);
}), L("MMMM", 0, 0, function(t) {
return this.localeData().months(this, t);
}), C("month", "M"), R("M", xe), R("MM", xe, ce), R("MMM", we), R("MMMM", we), U([ "M", "MM" ], function(t, e) {
e[Se] = x(t) - 1;
}), U([ "MMM", "MMMM" ], function(t, e, i, n) {
var a = i._locale.monthsParse(t, n, i._strict);
null != a ? e[Se] = a : l(i).invalidMonth = t;
});
var Le = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Me = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Oe = {};
i.suppressDeprecationWarnings = !1;
var Fe = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ee = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/ ], [ "YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d{2}/ ], [ "YYYY-DDD", /\d{4}-\d{3}/ ] ], De = [ [ "HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss", /(T| )\d\d:\d\d:\d\d/ ], [ "HH:mm", /(T| )\d\d:\d\d/ ], [ "HH", /(T| )\d\d/ ] ], Re = /^\/?Date\((\-?\d+)/i;
i.createFromInputFallback = K("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
}), L(0, [ "YY", 2 ], 0, function() {
return this.year() % 100;
}), L(0, [ "YYYY", 4 ], 0, "year"), L(0, [ "YYYYY", 5 ], 0, "year"), L(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
C("year", "y"), R("Y", _e), R("YY", xe, ce), R("YYYY", ge, ye), R("YYYYY", ve, fe), 
R("YYYYYY", ve, fe), U([ "YYYYY", "YYYYYY" ], Ae), U("YYYY", function(t, e) {
e[Ae] = 2 === t.length ? i.parseTwoDigitYear(t) : x(t);
}), U("YY", function(t, e) {
e[Ae] = i.parseTwoDigitYear(t);
}), i.parseTwoDigitYear = function(t) {
return x(t) + (x(t) > 68 ? 1900 : 2e3);
};
var Pe = B("FullYear", !1);
L("w", [ "ww", 2 ], "wo", "week"), L("W", [ "WW", 2 ], "Wo", "isoWeek"), C("week", "w"), 
C("isoWeek", "W"), R("w", xe), R("ww", xe, ce), R("W", xe), R("WW", xe, ce), q([ "w", "ww", "W", "WW" ], function(t, e, i, n) {
e[n.substr(0, 1)] = x(t);
});
L("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), R("DDD", he), 
R("DDDD", ue), U([ "DDD", "DDDD" ], function(t, e, i) {
i._dayOfYear = x(t);
}), i.ISO_8601 = function() {};
var Ve = K("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
var t = gt.apply(null, arguments);
return this > t ? this : t;
}), Ue = K("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
var t = gt.apply(null, arguments);
return t > this ? this : t;
});
bt("Z", ":"), bt("ZZ", ""), R("Z", be), R("ZZ", be), U([ "Z", "ZZ" ], function(t, e, i) {
i._useUTC = !0, i._tzm = wt(t);
});
var qe = /([\+\-]|\d\d)/gi;
i.updateOffset = function() {};
var ze = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, He = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
St.fn = Gt.prototype;
var Ye = Tt(1, "add"), Je = Tt(-1, "subtract");
i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
var We = K("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
return void 0 === t ? this.localeData() : this.locale(t);
});
L(0, [ "gg", 2 ], 0, function() {
return this.weekYear() % 100;
}), L(0, [ "GG", 2 ], 0, function() {
return this.isoWeekYear() % 100;
}), Et("gggg", "weekYear"), Et("ggggg", "weekYear"), Et("GGGG", "isoWeekYear"), 
Et("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), R("G", _e), 
R("g", _e), R("GG", xe, ce), R("gg", xe, ce), R("GGGG", ge, ye), R("gggg", ge, ye), 
R("GGGGG", ve, fe), R("ggggg", ve, fe), q([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(t, e, i, n) {
e[n.substr(0, 2)] = x(t);
}), q([ "gg", "GG" ], function(t, e, n, a) {
e[a] = i.parseTwoDigitYear(t);
}), L("Q", 0, 0, "quarter"), C("quarter", "Q"), R("Q", de), U("Q", function(t, e) {
e[Se] = 3 * (x(t) - 1);
}), L("D", [ "DD", 2 ], "Do", "date"), C("date", "D"), R("D", xe), R("DD", xe, ce), 
R("Do", function(t, e) {
return t ? e._ordinalParse : e._ordinalParseLenient;
}), U([ "D", "DD" ], Be), U("Do", function(t, e) {
e[Be] = x(t.match(xe)[0]);
});
var $e = B("Date", !0);
L("d", 0, "do", "day"), L("dd", 0, 0, function(t) {
return this.localeData().weekdaysMin(this, t);
}), L("ddd", 0, 0, function(t) {
return this.localeData().weekdaysShort(this, t);
}), L("dddd", 0, 0, function(t) {
return this.localeData().weekdays(this, t);
}), L("e", 0, 0, "weekday"), L("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), 
C("isoWeekday", "E"), R("d", xe), R("e", xe), R("E", xe), R("dd", we), R("ddd", we), 
R("dddd", we), q([ "dd", "ddd", "dddd" ], function(t, e, i) {
var n = i._locale.weekdaysParse(t);
null != n ? e.d = n : l(i).invalidWeekday = t;
}), q([ "d", "e", "E" ], function(t, e, i, n) {
e[n] = x(t);
});
var Ke = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Xe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
L("H", [ "HH", 2 ], 0, "hour"), L("h", [ "hh", 2 ], 0, function() {
return this.hours() % 12 || 12;
}), Pt("a", !0), Pt("A", !1), C("hour", "h"), R("a", Vt), R("A", Vt), R("H", xe), 
R("h", xe), R("HH", xe, ce), R("hh", xe, ce), U([ "H", "HH" ], Ie), U([ "a", "A" ], function(t, e, i) {
i._isPm = i._locale.isPM(t), i._meridiem = t;
}), U([ "h", "hh" ], function(t, e, i) {
e[Ie] = x(t), l(i).bigHour = !0;
});
var Qe = B("Hours", !0);
L("m", [ "mm", 2 ], 0, "minute"), C("minute", "m"), R("m", xe), R("mm", xe, ce), 
U([ "m", "mm" ], Ne);
var ti = B("Minutes", !1);
L("s", [ "ss", 2 ], 0, "second"), C("second", "s"), R("s", xe), R("ss", xe, ce), 
U([ "s", "ss" ], Te);
var ei, ii = B("Seconds", !1);
L("S", 0, 0, function() {
return ~~(this.millisecond() / 100);
}), L(0, [ "SS", 2 ], 0, function() {
return ~~(this.millisecond() / 10);
}), L(0, [ "SSS", 3 ], 0, "millisecond"), L(0, [ "SSSS", 4 ], 0, function() {
return 10 * this.millisecond();
}), L(0, [ "SSSSS", 5 ], 0, function() {
return 100 * this.millisecond();
}), L(0, [ "SSSSSS", 6 ], 0, function() {
return 1e3 * this.millisecond();
}), L(0, [ "SSSSSSS", 7 ], 0, function() {
return 1e4 * this.millisecond();
}), L(0, [ "SSSSSSSS", 8 ], 0, function() {
return 1e5 * this.millisecond();
}), L(0, [ "SSSSSSSSS", 9 ], 0, function() {
return 1e6 * this.millisecond();
}), C("millisecond", "ms"), R("S", he, de), R("SS", he, ce), R("SSS", he, ue);
for (ei = "SSSS"; ei.length <= 9; ei += "S") R(ei, Ge);
for (ei = "S"; ei.length <= 9; ei += "S") U(ei, Ut);
var ni = B("Milliseconds", !1);
L("z", 0, 0, "zoneAbbr"), L("zz", 0, 0, "zoneName");
var ai = u.prototype;
ai.add = Ye, ai.calendar = function(t, e) {
var i = t || gt(), n = kt(i, this).startOf("day"), a = this.diff(n, "days", !0), o = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse";
return this.format(e && e[o] || this.localeData().calendar(o, this, gt(i)));
}, ai.clone = function() {
return new u(this);
}, ai.diff = function(t, e, i) {
var n, a, o = kt(t, this), m = 6e4 * (o.utcOffset() - this.utcOffset());
return "year" === (e = A(e)) || "month" === e || "quarter" === e ? (a = Lt(this, o), 
"quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (n = this - o, a = "second" === e ? n / 1e3 : "minute" === e ? n / 6e4 : "hour" === e ? n / 36e5 : "day" === e ? (n - m) / 864e5 : "week" === e ? (n - m) / 6048e5 : n), 
i ? a : f(a);
}, ai.endOf = function(t) {
return void 0 === (t = A(t)) || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms");
}, ai.format = function(t) {
var e = F(this, t || i.defaultFormat);
return this.localeData().postformat(e);
}, ai.from = function(t, e) {
return this.isValid() ? St({
to: this,
from: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, ai.fromNow = function(t) {
return this.from(gt(), t);
}, ai.to = function(t, e) {
return this.isValid() ? St({
from: this,
to: t
}).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
}, ai.toNow = function(t) {
return this.to(gt(), t);
}, ai.get = T, ai.invalidAt = function() {
return l(this).overflow;
}, ai.isAfter = function(t, e) {
return "millisecond" === (e = A("undefined" != typeof e ? e : "millisecond")) ? +this > +(t = y(t) ? t : gt(t)) : (y(t) ? +t : +gt(t)) < +this.clone().startOf(e);
}, ai.isBefore = function(t, e) {
var i;
return "millisecond" === (e = A("undefined" != typeof e ? e : "millisecond")) ? +(t = y(t) ? t : gt(t)) > +this : (i = y(t) ? +t : +gt(t), 
+this.clone().endOf(e) < i);
}, ai.isBetween = function(t, e, i) {
return this.isAfter(t, i) && this.isBefore(e, i);
}, ai.isSame = function(t, e) {
var i;
return "millisecond" === (e = A(e || "millisecond")) ? +this == +(t = y(t) ? t : gt(t)) : (i = +gt(t), 
+this.clone().startOf(e) <= i && i <= +this.clone().endOf(e));
}, ai.isValid = function() {
return p(this);
}, ai.lang = We, ai.locale = Ot, ai.localeData = Ft, ai.max = Ue, ai.min = Ve, ai.parsingFlags = function() {
return r({}, l(this));
}, ai.set = T, ai.startOf = function(t) {
switch (t = A(t)) {
case "year":
this.month(0);

case "quarter":
case "month":
this.date(1);

case "week":
case "isoWeek":
case "day":
this.hours(0);

case "hour":
this.minutes(0);

case "minute":
this.seconds(0);

case "second":
this.milliseconds(0);
}
return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), 
this;
}, ai.subtract = Je, ai.toArray = function() {
var t = this;
return [ t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond() ];
}, ai.toObject = function() {
var t = this;
return {
years: t.year(),
months: t.month(),
date: t.date(),
hours: t.hours(),
minutes: t.minutes(),
seconds: t.seconds(),
milliseconds: t.milliseconds()
};
}, ai.toDate = function() {
return this._offset ? new Date(+this) : this._d;
}, ai.toISOString = Mt, ai.toJSON = Mt, ai.toString = function() {
return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}, ai.unix = function() {
return Math.floor(+this / 1e3);
}, ai.valueOf = function() {
return +this._d - 6e4 * (this._offset || 0);
}, ai.year = Pe, ai.isLeapYear = function() {
return nt(this.year());
}, ai.weekYear = function(t) {
var e = at(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
return null == t ? e : this.add(t - e, "y");
}, ai.isoWeekYear = function(t) {
var e = at(this, 1, 4).year;
return null == t ? e : this.add(t - e, "y");
}, ai.quarter = ai.quarters = function(t) {
return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3);
}, ai.month = J, ai.daysInMonth = function() {
return H(this.year(), this.month());
}, ai.week = ai.weeks = function(t) {
var e = this.localeData().week(this);
return null == t ? e : this.add(7 * (t - e), "d");
}, ai.isoWeek = ai.isoWeeks = function(t) {
var e = at(this, 1, 4).week;
return null == t ? e : this.add(7 * (t - e), "d");
}, ai.weeksInYear = function() {
var t = this.localeData()._week;
return Dt(this.year(), t.dow, t.doy);
}, ai.isoWeeksInYear = function() {
return Dt(this.year(), 1, 4);
}, ai.date = $e, ai.day = ai.days = function(t) {
var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
return null != t ? (t = Rt(t, this.localeData()), this.add(t - e, "d")) : e;
}, ai.weekday = function(t) {
var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == t ? e : this.add(t - e, "d");
}, ai.isoWeekday = function(t) {
return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7);
}, ai.dayOfYear = function(t) {
var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
return null == t ? e : this.add(t - e, "d");
}, ai.hour = ai.hours = Qe, ai.minute = ai.minutes = ti, ai.second = ai.seconds = ii, 
ai.millisecond = ai.milliseconds = ni, ai.utcOffset = function(t, e) {
var n, a = this._offset || 0;
return null != t ? ("string" == typeof t && (t = wt(t)), Math.abs(t) < 16 && (t *= 60), 
!this._isUTC && e && (n = Ct(this)), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), 
a !== t && (!e || this._changeInProgress ? jt(this, St(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
i.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? a : Ct(this);
}, ai.utc = function(t) {
return this.utcOffset(0, t);
}, ai.local = function(t) {
return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ct(this), "m")), 
this;
}, ai.parseZone = function() {
return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(wt(this._i)), 
this;
}, ai.hasAlignedHourOffset = function(t) {
return t = t ? gt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0;
}, ai.isDST = function() {
return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}, ai.isDSTShifted = function() {
if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
var t = {};
if (c(t, this), (t = ft(t))._a) {
var e = t._isUTC ? s(t._a) : gt(t._a);
this._isDSTShifted = this.isValid() && h(t._a, e.toArray()) > 0;
} else this._isDSTShifted = !1;
return this._isDSTShifted;
}, ai.isLocal = function() {
return !this._isUTC;
}, ai.isUtcOffset = function() {
return this._isUTC;
}, ai.isUtc = At, ai.isUTC = At, ai.zoneAbbr = function() {
return this._isUTC ? "UTC" : "";
}, ai.zoneName = function() {
return this._isUTC ? "Coordinated Universal Time" : "";
}, ai.dates = K("dates accessor is deprecated. Use date instead.", $e), ai.months = K("months accessor is deprecated. Use month instead", J), 
ai.years = K("years accessor is deprecated. Use year instead", Pe), ai.zone = K("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(t, e) {
return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
});
var oi = ai, mi = g.prototype;
mi._calendar = {
sameDay: "[Today at] LT",
nextDay: "[Tomorrow at] LT",
nextWeek: "dddd [at] LT",
lastDay: "[Yesterday at] LT",
lastWeek: "[Last] dddd [at] LT",
sameElse: "L"
}, mi.calendar = function(t, e, i) {
var n = this._calendar[t];
return "function" == typeof n ? n.call(e, i) : n;
}, mi._longDateFormat = {
LTS: "h:mm:ss A",
LT: "h:mm A",
L: "MM/DD/YYYY",
LL: "MMMM D, YYYY",
LLL: "MMMM D, YYYY h:mm A",
LLLL: "dddd, MMMM D, YYYY h:mm A"
}, mi.longDateFormat = function(t) {
var e = this._longDateFormat[t], i = this._longDateFormat[t.toUpperCase()];
return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function(t) {
return t.slice(1);
}), this._longDateFormat[t]);
}, mi._invalidDate = "Invalid date", mi.invalidDate = function() {
return this._invalidDate;
}, mi._ordinal = "%d", mi.ordinal = function(t) {
return this._ordinal.replace("%d", t);
}, mi._ordinalParse = /\d{1,2}/, mi.preparse = qt, mi.postformat = qt, mi._relativeTime = {
future: "in %s",
past: "%s ago",
s: "a few seconds",
m: "a minute",
mm: "%d minutes",
h: "an hour",
hh: "%d hours",
d: "a day",
dd: "%d days",
M: "a month",
MM: "%d months",
y: "a year",
yy: "%d years"
}, mi.relativeTime = function(t, e, i, n) {
var a = this._relativeTime[i];
return "function" == typeof a ? a(t, e, i, n) : a.replace(/%d/i, t);
}, mi.pastFuture = function(t, e) {
var i = this._relativeTime[t > 0 ? "future" : "past"];
return "function" == typeof i ? i(e) : i.replace(/%s/i, e);
}, mi.set = function(t) {
var e, i;
for (i in t) "function" == typeof (e = t[i]) ? this[i] = e : this["_" + i] = e;
this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
}, mi.months = function(t) {
return this._months[t.month()];
}, mi._months = Le, mi.monthsShort = function(t) {
return this._monthsShort[t.month()];
}, mi._monthsShort = Me, mi.monthsParse = function(t, e, i) {
var n, a, o;
for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
n = 0; 12 > n; n++) {
if (a = s([ 2e3, n ]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), 
this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), 
i || this._monthsParse[n] || (o = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), 
this._monthsParse[n] = new RegExp(o.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[n].test(t)) return n;
if (i && "MMM" === e && this._shortMonthsParse[n].test(t)) return n;
if (!i && this._monthsParse[n].test(t)) return n;
}
}, mi.week = function(t) {
return at(t, this._week.dow, this._week.doy).week;
}, mi._week = {
dow: 0,
doy: 6
}, mi.firstDayOfYear = function() {
return this._week.doy;
}, mi.firstDayOfWeek = function() {
return this._week.dow;
}, mi.weekdays = function(t) {
return this._weekdays[t.day()];
}, mi._weekdays = Ke, mi.weekdaysMin = function(t) {
return this._weekdaysMin[t.day()];
}, mi._weekdaysMin = Ze, mi.weekdaysShort = function(t) {
return this._weekdaysShort[t.day()];
}, mi._weekdaysShort = Xe, mi.weekdaysParse = function(t) {
var e, i, n;
for (this._weekdaysParse = this._weekdaysParse || [], e = 0; 7 > e; e++) if (this._weekdaysParse[e] || (i = gt([ 2e3, 1 ]).day(e), 
n = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), 
this._weekdaysParse[e] = new RegExp(n.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e;
}, mi.isPM = function(t) {
return "p" === (t + "").toLowerCase().charAt(0);
}, mi._meridiemParse = /[ap]\.?m?\.?/i, mi.meridiem = function(t, e, i) {
return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM";
}, b("en", {
ordinalParse: /\d{1,2}(th|st|nd|rd)/,
ordinal: function(t) {
var e = t % 10;
return t + (1 === x(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th");
}
}), i.lang = K("moment.lang is deprecated. Use moment.locale instead.", b), i.langData = K("moment.langData is deprecated. Use moment.localeData instead.", k);
var ri = Math.abs, si = Kt("ms"), li = Kt("s"), pi = Kt("m"), di = Kt("h"), ci = Kt("d"), ui = Kt("w"), yi = Kt("M"), fi = Kt("y"), xi = Xt("milliseconds"), hi = Xt("seconds"), gi = Xt("minutes"), vi = Xt("hours"), Gi = Xt("days"), _i = Xt("months"), bi = Xt("years"), wi = Math.round, ki = {
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
}, Ci = Math.abs, Ai = Gt.prototype;
Ai.abs = function() {
var t = this._data;
return this._milliseconds = ri(this._milliseconds), this._days = ri(this._days), 
this._months = ri(this._months), t.milliseconds = ri(t.milliseconds), t.seconds = ri(t.seconds), 
t.minutes = ri(t.minutes), t.hours = ri(t.hours), t.months = ri(t.months), t.years = ri(t.years), 
this;
}, Ai.add = function(t, e) {
return Yt(this, t, e, 1);
}, Ai.subtract = function(t, e) {
return Yt(this, t, e, -1);
}, Ai.as = function(t) {
var e, i, n = this._milliseconds;
if ("month" === (t = A(t)) || "year" === t) return e = this._days + n / 864e5, i = this._months + Wt(e), 
"month" === t ? i : i / 12;
switch (e = this._days + Math.round($t(this._months)), t) {
case "week":
return e / 7 + n / 6048e5;

case "day":
return e + n / 864e5;

case "hour":
return 24 * e + n / 36e5;

case "minute":
return 1440 * e + n / 6e4;

case "second":
return 86400 * e + n / 1e3;

case "millisecond":
return Math.floor(864e5 * e) + n;

default:
throw new Error("Unknown unit " + t);
}
}, Ai.asMilliseconds = si, Ai.asSeconds = li, Ai.asMinutes = pi, Ai.asHours = di, 
Ai.asDays = ci, Ai.asWeeks = ui, Ai.asMonths = yi, Ai.asYears = fi, Ai.valueOf = function() {
return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * x(this._months / 12);
}, Ai._bubble = function() {
var t, e, i, n, a, o = this._milliseconds, m = this._days, r = this._months, s = this._data;
return o >= 0 && m >= 0 && r >= 0 || 0 >= o && 0 >= m && 0 >= r || (o += 864e5 * Jt($t(r) + m), 
m = 0, r = 0), s.milliseconds = o % 1e3, t = f(o / 1e3), s.seconds = t % 60, e = f(t / 60), 
s.minutes = e % 60, i = f(e / 60), s.hours = i % 24, m += f(i / 24), r += a = f(Wt(m)), 
m -= Jt($t(a)), n = f(r / 12), r %= 12, s.days = m, s.months = r, s.years = n, this;
}, Ai.get = function(t) {
return this[(t = A(t)) + "s"]();
}, Ai.milliseconds = xi, Ai.seconds = hi, Ai.minutes = gi, Ai.hours = vi, Ai.days = Gi, 
Ai.weeks = function() {
return f(this.days() / 7);
}, Ai.months = _i, Ai.years = bi, Ai.humanize = function(t) {
var e = this.localeData(), i = Qt(this, !t, e);
return t && (i = e.pastFuture(+this, i)), e.postformat(i);
}, Ai.toISOString = te, Ai.toString = te, Ai.toJSON = te, Ai.locale = Ot, Ai.localeData = Ft, 
Ai.toIsoString = K("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", te), 
Ai.lang = We, L("X", 0, 0, "unix"), L("x", 0, 0, "valueOf"), R("x", _e), R("X", /[+-]?\d+(\.\d{1,3})?/), 
U("X", function(t, e, i) {
i._d = new Date(1e3 * parseFloat(t, 10));
}), U("x", function(t, e, i) {
i._d = new Date(x(t));
}), i.version = "2.10.6", ee = gt, i.fn = oi, i.min = function() {
return vt("isBefore", [].slice.call(arguments, 0));
}, i.max = function() {
return vt("isAfter", [].slice.call(arguments, 0));
}, i.utc = s, i.unix = function(t) {
return gt(1e3 * t);
}, i.months = function(t, e) {
return Ht(t, e, "months", 12, "month");
}, i.isDate = a, i.locale = b, i.invalid = d, i.duration = St, i.isMoment = y, i.weekdays = function(t, e) {
return Ht(t, e, "weekdays", 7, "day");
}, i.parseZone = function() {
return gt.apply(null, arguments).parseZone();
}, i.localeData = k, i.isDuration = _t, i.monthsShort = function(t, e) {
return Ht(t, e, "monthsShort", 12, "month");
}, i.weekdaysMin = function(t, e) {
return Ht(t, e, "weekdaysMin", 7, "day");
}, i.defineLocale = w, i.weekdaysShort = function(t, e) {
return Ht(t, e, "weekdaysShort", 7, "day");
}, i.normalizeUnits = A, i.relativeTimeThreshold = function(t, e) {
return void 0 !== ki[t] && (void 0 === e ? ki[t] : (ki[t] = e, !0));
};
return i;
}, "object" == typeof i && "undefined" != typeof e ? e.exports = n() : "function" == typeof define && define.amd ? define(n) : (void 0).moment = n();
var n;
cc._RF.pop();
}, {} ],
moveJs: [ function(t, e) {
"use strict";
cc._RF.push(e, "d3883sUcPlONI5+i3oofL8s", "moveJs");
cc.Class({
extends: cc.Component,
properties: {
t: 1,
dire: 0,
m0: 0,
m1: 0
},
onLoad: function() {
var t = 0 == this.dire ? cc.v2(this.node.x + this.m0, this.node.y) : cc.v2(this.node.x, this.node.y + this.m0), e = 0 == this.dire ? cc.v2(this.node.x + this.m1, this.node.y) : cc.v2(this.node.x, this.node.y + this.m1), i = cc.moveTo(this.t, t), n = cc.moveTo(this.t, e), a = cc.sequence(i, n).repeatForever();
this.node.runAction(a);
}
});
cc._RF.pop();
}, {} ],
msgBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "07cb4QxAKFCF6l8hkaCIpJz", "msgBox");
t("lodash").findLastKey;
cc.Class({
extends: cc.Component,
properties: {
msg: cc.Label,
subMsg: cc.Label,
okBup: cc.Node,
otherBup: cc.Node,
cancelBup: cc.Node,
cancelTips: cc.Node,
cancelFlag: {
default: !1,
visible: !1
},
cb0: null,
cb1: null,
cb2: null
},
onLoad: function() {
var t = this;
this.okBup.getComponent("bup").setCb(function() {
null != t.cb0 && t.cb0();
t.resetBox(!1);
});
this.cancelBup.getComponent("bup").setCb(function() {
null != t.cb1 && t.cb1();
t.resetBox(!1);
});
this.otherBup.getComponent("bup").setCb(function() {
null != t.cb2 && t.cb2();
t.resetBox(!1);
});
this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
if (t.cancelFlag) {
null != t.cb1 && t.cb1();
t.resetBox(!1);
}
e.stopPropagation();
});
},
setBupTxt: function(t, e) {
null != t && (this.okBup.getChildByName("box").getChildByName("font").getComponent(cc.Label).string = t);
null != e && (this.otherBup.getChildByName("font").getComponent(cc.Label).string = e);
},
showVedio: function() {
this.okBup.getChildByName("box").getChildByName("vedio").active = !0;
},
showMsg: function(t, e, i) {
this.resetBox(!1);
this.node.stopAllActions();
var n = cc.moveTo(.05, 20, this.node.y), a = cc.moveTo(.05, -10, this.node.y), o = cc.moveTo(.05, 0, this.node.y), m = cc.sequence(n, a, o);
this.msg.string = t;
null != e && (this.cb0 = e);
null != i && (this.cb1 = i);
this.node.active = !0;
this.node.runAction(m);
},
showSubMsg: function(t) {
this.subMsg.string = t;
this.subMsg.node.active = !0;
},
setHCenter: function() {
this.msg.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
this.subMsg.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
},
resetBox: function(t) {
this.cb0 = null;
this.cb1 = null;
this.msg.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
this.subMsg.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
this.subMsg.node.active = !1;
this.cancelBup.active = !1;
this.cancelFlag = !1;
this.cancelTips.active = !1;
this.otherBup.active = !1;
this.okBup.x = 0;
this.okBup.getChildByName("box").getChildByName("vedio").active = !1;
this.okBup.getChildByName("box").getChildByName("font").getComponent(cc.Label).string = "确定";
this.node.active = t;
},
showCancel: function(t) {
void 0 === t && (t = !1);
this.cancelFlag = !t;
this.cancelTips.active = !t;
this.cancelBup.active = t;
this.otherBup.active = !1;
},
showOtherBup: function(t, e) {
this.otherBup.getChildByName("font").getComponent(cc.Label).string = t;
this.cb2 = e;
this.cancelTips.active = !1;
this.otherBup.active = !0;
this.cancelBup.active = !1;
}
});
cc._RF.pop();
}, {
lodash: "lodash"
} ],
nameBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "d034cQTxxVJaYpvu46yZE4L", "nameBox");
cc.Class({
extends: cc.Component,
properties: {
man: cc.Node,
girl: cc.Node,
nameFont: cc.Label,
nameBup: cc.Node,
dataBox: cc.Node,
sel: [ cc.Node ]
},
onLoad: function() {
var t = this;
G.setBup(this.man, function() {
t.setSex(1);
});
G.setBup(this.girl, function() {
t.setSex(0);
});
G.setBup(this.nameBup, function() {
t.randomName();
});
this.randomName();
},
onDisable: function() {
G.save();
this.dataBox.getComponent("dataBox").showRole();
},
setSex: function(t) {
G.user.sex = t;
this.sel[0].active = 1 == t;
this.sel[1].active = 0 == t;
this.randomName();
},
randomName: function() {
G.user.name = G.getRoleName(G.user.sex, !0);
this.nameFont.string = G.user.name;
}
});
cc._RF.pop();
}, {} ],
nameConf: [ function(t, e) {
"use strict";
cc._RF.push(e, "0f8f8iS0WtMWZKpQ7MrGPPh", "nameConf");
e.exports = [ {
id: 1,
title: "哀骀",
type: 1,
min: 1,
max: 1
}, {
id: 2,
title: "艾岁",
type: 1,
min: 2,
max: 2
}, {
id: 3,
title: "暧",
type: 1,
min: 3,
max: 3
}, {
id: 4,
title: "安都",
type: 1,
min: 4,
max: 4
}, {
id: 5,
title: "安国",
type: 1,
min: 5,
max: 5
}, {
id: 6,
title: "安金",
type: 1,
min: 6,
max: 6
}, {
id: 7,
title: "安陵",
type: 1,
min: 7,
max: 7
}, {
id: 8,
title: "安平",
type: 1,
min: 8,
max: 8
}, {
id: 9,
title: "安丘",
type: 1,
min: 9,
max: 9
}, {
id: 10,
title: "安是",
type: 1,
min: 10,
max: 10
}, {
id: 11,
title: "安阳",
type: 1,
min: 11,
max: 11
}, {
id: 12,
title: "昂",
type: 1,
min: 12,
max: 12
}, {
id: 13,
title: "巴公",
type: 1,
min: 13,
max: 13
}, {
id: 14,
title: "罢敌",
type: 1,
min: 14,
max: 14
}, {
id: 15,
title: "白公",
type: 1,
min: 15,
max: 15
}, {
id: 16,
title: "白侯",
type: 1,
min: 16,
max: 16
}, {
id: 17,
title: "白鹿",
type: 1,
min: 17,
max: 17
}, {
id: 18,
title: "白鸾",
type: 1,
min: 18,
max: 18
}, {
id: 19,
title: "白马",
type: 1,
min: 19,
max: 19
}, {
id: 20,
title: "白冥",
type: 1,
min: 20,
max: 20
}, {
id: 21,
title: "白男",
type: 1,
min: 21,
max: 21
}, {
id: 22,
title: "白象",
type: 1,
min: 22,
max: 22
}, {
id: 23,
title: "白亚",
type: 1,
min: 23,
max: 23
}, {
id: 24,
title: "白乙",
type: 1,
min: 24,
max: 24
}, {
id: 25,
title: "柏常",
type: 1,
min: 25,
max: 25
}, {
id: 26,
title: "柏高",
type: 1,
min: 26,
max: 26
}, {
id: 27,
title: "柏侯",
type: 1,
min: 27,
max: 27
}, {
id: 28,
title: "班丘",
type: 1,
min: 28,
max: 28
}, {
id: 29,
title: "阪泉",
type: 1,
min: 29,
max: 29
}, {
id: 30,
title: "阪上",
type: 1,
min: 30,
max: 30
}, {
id: 31,
title: "苞丘",
type: 1,
min: 31,
max: 31
}, {
id: 32,
title: "鲍丘",
type: 1,
min: 32,
max: 32
}, {
id: 33,
title: "卑徐",
type: 1,
min: 33,
max: 33
}, {
id: 34,
title: "北旄",
type: 1,
min: 34,
max: 34
}, {
id: 35,
title: "北唐",
type: 1,
min: 35,
max: 35
}, {
id: 36,
title: "北殷",
type: 1,
min: 36,
max: 36
}, {
id: 37,
title: "偪阳",
type: 1,
min: 37,
max: 37
}, {
id: 38,
title: "比丘",
type: 1,
min: 38,
max: 38
}, {
id: 39,
title: "比人",
type: 1,
min: 39,
max: 39
}, {
id: 40,
title: "并官",
type: 1,
min: 40,
max: 40
}, {
id: 41,
title: "伯比",
type: 1,
min: 41,
max: 41
}, {
id: 42,
title: "伯常",
type: 1,
min: 42,
max: 42
}, {
id: 43,
title: "伯成",
type: 1,
min: 43,
max: 43
}, {
id: 44,
title: "伯德",
type: 1,
min: 44,
max: 44
}, {
id: 45,
title: "伯封",
type: 1,
min: 45,
max: 45
}, {
id: 46,
title: "伯丰",
type: 1,
min: 46,
max: 46
}, {
id: 47,
title: "伯高",
type: 1,
min: 47,
max: 47
}, {
id: 48,
title: "伯昏",
type: 1,
min: 48,
max: 48
}, {
id: 49,
title: "伯夏",
type: 1,
min: 49,
max: 49
}, {
id: 50,
title: "伯有",
type: 1,
min: 50,
max: 50
}, {
id: 51,
title: "伯州",
type: 1,
min: 51,
max: 51
}, {
id: 52,
title: "伯宗",
type: 1,
min: 52,
max: 52
}, {
id: 53,
title: "驳马",
type: 1,
min: 53,
max: 53
}, {
id: 54,
title: "薄姑",
type: 1,
min: 54,
max: 54
}, {
id: 55,
title: "卜成",
type: 1,
min: 55,
max: 55
}, {
id: 56,
title: "卜梁",
type: 1,
min: 56,
max: 56
}, {
id: 57,
title: "卜马",
type: 1,
min: 57,
max: 57
}, {
id: 58,
title: "步叔",
type: 1,
min: 58,
max: 58
}, {
id: 59,
title: "步扬",
type: 1,
min: 59,
max: 59
}, {
id: 60,
title: "步温",
type: 1,
min: 60,
max: 60
}, {
id: 61,
title: "蔡仲",
type: 1,
min: 61,
max: 61
}, {
id: 62,
title: "仓颉",
type: 1,
min: 62,
max: 62
}, {
id: 63,
title: "苍林",
type: 1,
min: 63,
max: 63
}, {
id: 64,
title: "苍舒",
type: 1,
min: 64,
max: 64
}, {
id: 65,
title: "苍吾",
type: 1,
min: 65,
max: 65
}, {
id: 66,
title: "曹丘",
type: 1,
min: 66,
max: 66
}, {
id: 67,
title: "曹牟",
type: 1,
min: 67,
max: 67
}, {
id: 68,
title: "长狄",
type: 1,
min: 68,
max: 68
}, {
id: 69,
title: "长柳",
type: 1,
min: 69,
max: 69
}, {
id: 70,
title: "长庐",
type: 1,
min: 70,
max: 70
}, {
id: 71,
title: "长桑",
type: 1,
min: 71,
max: 71
}, {
id: 72,
title: "长沙",
type: 1,
min: 72,
max: 72
}, {
id: 73,
title: "长勺",
type: 1,
min: 73,
max: 73
}, {
id: 74,
title: "长悟",
type: 1,
min: 74,
max: 74
}, {
id: 75,
title: "长鱼",
type: 1,
min: 75,
max: 75
}, {
id: 76,
title: "长兴",
type: 1,
min: 76,
max: 76
}, {
id: 77,
title: "苌伯",
type: 1,
min: 77,
max: 77
}, {
id: 78,
title: "常丘",
type: 1,
min: 78,
max: 78
}, {
id: 79,
title: "常寿",
type: 1,
min: 79,
max: 79
}, {
id: 80,
title: "常仪",
type: 1,
min: 80,
max: 80
}, {
id: 81,
title: "常庄",
type: 1,
min: 81,
max: 81
}, {
id: 82,
title: "车成",
type: 1,
min: 82,
max: 82
}, {
id: 83,
title: "车非",
type: 1,
min: 83,
max: 83
}, {
id: 84,
title: "车遽",
type: 1,
min: 84,
max: 84
}, {
id: 85,
title: "车昆",
type: 1,
min: 85,
max: 85
}, {
id: 86,
title: "车门",
type: 1,
min: 86,
max: 86
}, {
id: 87,
title: "硩",
type: 1,
min: 87,
max: 87
}, {
id: 88,
title: "陈方",
type: 1,
min: 88,
max: 88
}, {
id: 89,
title: "陈丰",
type: 1,
min: 89,
max: 89
}, {
id: 90,
title: "陈留",
type: 1,
min: 90,
max: 90
}, {
id: 91,
title: "辰放",
type: 1,
min: 91,
max: 91
}, {
id: 92,
title: "成功",
type: 1,
min: 92,
max: 92
}, {
id: 93,
title: "成纪",
type: 1,
min: 93,
max: 93
}, {
id: 94,
title: "成王",
type: 1,
min: 94,
max: 94
}, {
id: 95,
title: "成阳",
type: 1,
min: 95,
max: 95
}, {
id: 96,
title: "乘马",
type: 1,
min: 96,
max: 96
}, {
id: 97,
title: "承桑",
type: 1,
min: 97,
max: 97
}, {
id: 98,
title: "城阳",
type: 1,
min: 98,
max: 98
}, {
id: 99,
title: "裎",
type: 1,
min: 99,
max: 99
}, {
id: 100,
title: "鸱夷",
type: 1,
min: 100,
max: 100
}, {
id: 101,
title: "赤将",
type: 1,
min: 101,
max: 101
}, {
id: 102,
title: "赤松",
type: 1,
min: 102,
max: 102
}, {
id: 103,
title: "赤乌",
type: 1,
min: 103,
max: 103
}, {
id: 104,
title: "赤张",
type: 1,
min: 104,
max: 104
}, {
id: 105,
title: "赤章",
type: 1,
min: 105,
max: 105
}, {
id: 106,
title: "稠",
type: 1,
min: 106,
max: 106
}, {
id: 107,
title: "雠子",
type: 1,
min: 107,
max: 107
}, {
id: 108,
title: "樗里",
type: 1,
min: 108,
max: 108
}, {
id: 109,
title: "鉏从",
type: 1,
min: 109,
max: 109
}, {
id: 110,
title: "鉏丘",
type: 1,
min: 110,
max: 110
}, {
id: 111,
title: "厨人",
type: 1,
min: 111,
max: 111
}, {
id: 112,
title: "楚季",
type: 1,
min: 112,
max: 112
}, {
id: 113,
title: "楚且",
type: 1,
min: 113,
max: 113
}, {
id: 114,
title: "楚丘",
type: 1,
min: 114,
max: 114
}, {
id: 115,
title: "楚宗",
type: 1,
min: 115,
max: 115
}, {
id: 116,
title: "禇师",
type: 1,
min: 116,
max: 116
}, {
id: 117,
title: "处师",
type: 1,
min: 117,
max: 117
}, {
id: 118,
title: "歜",
type: 1,
min: 118,
max: 118
}, {
id: 119,
title: "穿封",
type: 1,
min: 119,
max: 119
}, {
id: 120,
title: "茨芘",
type: 1,
min: 120,
max: 120
}, {
id: 121,
title: "慈毋",
type: 1,
min: 121,
max: 121
}, {
id: 122,
title: "傶",
type: 1,
min: 122,
max: 122
}, {
id: 123,
title: "毳",
type: 1,
min: 123,
max: 123
}, {
id: 124,
title: "忖",
type: 1,
min: 124,
max: 124
}, {
id: 125,
title: "蹉",
type: 1,
min: 125,
max: 125
}, {
id: 126,
title: "答禄",
type: 1,
min: 126,
max: 126
}, {
id: 127,
title: "妲",
type: 1,
min: 127,
max: 127
}, {
id: 128,
title: "大成",
type: 1,
min: 128,
max: 128
}, {
id: 129,
title: "大法",
type: 1,
min: 129,
max: 129
}, {
id: 130,
title: "大夫",
type: 1,
min: 130,
max: 130
}, {
id: 131,
title: "大狐",
type: 1,
min: 131,
max: 131
}, {
id: 132,
title: "大季",
type: 1,
min: 132,
max: 132
}, {
id: 133,
title: "大隗",
type: 1,
min: 133,
max: 133
}, {
id: 134,
title: "大临",
type: 1,
min: 134,
max: 134
}, {
id: 135,
title: "大陆",
type: 1,
min: 135,
max: 135
}, {
id: 136,
title: "大罗",
type: 1,
min: 136,
max: 136
}, {
id: 137,
title: "大彭",
type: 1,
min: 137,
max: 137
}, {
id: 138,
title: "大士",
type: 1,
min: 138,
max: 138
}, {
id: 139,
title: "大孙",
type: 1,
min: 139,
max: 139
}, {
id: 140,
title: "大庭",
type: 1,
min: 140,
max: 140
}, {
id: 141,
title: "大戊",
type: 1,
min: 141,
max: 141
}, {
id: 142,
title: "大心",
type: 1,
min: 142,
max: 142
}, {
id: 143,
title: "大野",
type: 1,
min: 143,
max: 143
}, {
id: 144,
title: "大赘",
type: 1,
min: 144,
max: 144
}, {
id: 145,
title: "瓽",
type: 1,
min: 145,
max: 145
}, {
id: 146,
title: "登北",
type: 1,
min: 146,
max: 146
}, {
id: 147,
title: "登侯",
type: 1,
min: 147,
max: 147
}, {
id: 148,
title: "邓候",
type: 1,
min: 148,
max: 148
}, {
id: 149,
title: "邓陵",
type: 1,
min: 149,
max: 149
}, {
id: 150,
title: "鞮娄",
type: 1,
min: 150,
max: 150
}, {
id: 151,
title: "籴",
type: 1,
min: 151,
max: 151
}, {
id: 152,
title: "第六",
type: 1,
min: 152,
max: 152
}, {
id: 153,
title: "第七",
type: 1,
min: 153,
max: 153
}, {
id: 154,
title: "第三",
type: 1,
min: 154,
max: 154
}, {
id: 155,
title: "第四",
type: 1,
min: 155,
max: 155
}, {
id: 156,
title: "第一",
type: 1,
min: 156,
max: 156
}, {
id: 157,
title: "訋",
type: 1,
min: 157,
max: 157
}, {
id: 158,
title: "牒云",
type: 1,
min: 158,
max: 158
}, {
id: 159,
title: "丁若",
type: 1,
min: 159,
max: 159
}, {
id: 160,
title: "东皋",
type: 1,
min: 160,
max: 160
}, {
id: 161,
title: "东关",
type: 1,
min: 161,
max: 161
}, {
id: 162,
title: "东灌",
type: 1,
min: 162,
max: 162
}, {
id: 163,
title: "东莱",
type: 1,
min: 163,
max: 163
}, {
id: 164,
title: "东里",
type: 1,
min: 164,
max: 164
}, {
id: 165,
title: "东陵",
type: 1,
min: 165,
max: 165
}, {
id: 166,
title: "东楼",
type: 1,
min: 166,
max: 166
}, {
id: 167,
title: "东卢",
type: 1,
min: 167,
max: 167
}, {
id: 168,
title: "东闾",
type: 1,
min: 168,
max: 168
}, {
id: 169,
title: "东蒙",
type: 1,
min: 169,
max: 169
}, {
id: 170,
title: "东丘",
type: 1,
min: 170,
max: 170
}, {
id: 171,
title: "冬日",
type: 1,
min: 171,
max: 171
}, {
id: 172,
title: "倲",
type: 1,
min: 172,
max: 172
}, {
id: 173,
title: "董閼",
type: 1,
min: 173,
max: 173
}, {
id: 174,
title: "洞沐",
type: 1,
min: 174,
max: 174
}, {
id: 175,
title: "鬥班",
type: 1,
min: 175,
max: 175
}, {
id: 176,
title: "鬥比",
type: 1,
min: 176,
max: 176
}, {
id: 177,
title: "鬥榖",
type: 1,
min: 177,
max: 177
}, {
id: 178,
title: "鬥门",
type: 1,
min: 178,
max: 178
}, {
id: 179,
title: "鬥耆",
type: 1,
min: 179,
max: 179
}, {
id: 180,
title: "鬥强",
type: 1,
min: 180,
max: 180
}, {
id: 181,
title: "鬥文",
type: 1,
min: 181,
max: 181
}, {
id: 182,
title: "窦公",
type: 1,
min: 182,
max: 182
}, {
id: 183,
title: "都尉",
type: 1,
min: 183,
max: 183
}, {
id: 184,
title: "堵敖",
type: 1,
min: 184,
max: 184
}, {
id: 185,
title: "堵师",
type: 1,
min: 185,
max: 185
}, {
id: 186,
title: "覩斯",
type: 1,
min: 186,
max: 186
}, {
id: 187,
title: "覩新",
type: 1,
min: 187,
max: 187
}, {
id: 188,
title: "蠹",
type: 1,
min: 188,
max: 188
}, {
id: 189,
title: "敦洽",
type: 1,
min: 189,
max: 189
}, {
id: 190,
title: "敓",
type: 1,
min: 190,
max: 190
}, {
id: 191,
title: "娥陵",
type: 1,
min: 191,
max: 191
}, {
id: 192,
title: "鹅",
type: 1,
min: 192,
max: 192
}, {
id: 193,
title: "耏门",
type: 1,
min: 193,
max: 193
}, {
id: 194,
title: "番五",
type: 1,
min: 194,
max: 194
}, {
id: 195,
title: "凡闾",
type: 1,
min: 195,
max: 195
}, {
id: 196,
title: "樊仲",
type: 1,
min: 196,
max: 196
}, {
id: 197,
title: "方雷",
type: 1,
min: 197,
max: 197
}, {
id: 198,
title: "方叔",
type: 1,
min: 198,
max: 198
}, {
id: 199,
title: "方相",
type: 1,
min: 199,
max: 199
}, {
id: 200,
title: "防风",
type: 1,
min: 200,
max: 200
}, {
id: 201,
title: "飞廉",
type: 1,
min: 201,
max: 201
}, {
id: 202,
title: "飞龙",
type: 1,
min: 202,
max: 202
}, {
id: 203,
title: "费连",
type: 1,
min: 203,
max: 203
}, {
id: 204,
title: "芬冒",
type: 1,
min: 204,
max: 204
}, {
id: 205,
title: "棼冒",
type: 1,
min: 205,
max: 205
}, {
id: 206,
title: "封父",
type: 1,
min: 206,
max: 206
}, {
id: 207,
title: "封具",
type: 1,
min: 207,
max: 207
}, {
id: 208,
title: "封人",
type: 1,
min: 208,
max: 208
}, {
id: 209,
title: "风胡",
type: 1,
min: 209,
max: 209
}, {
id: 210,
title: "丰将",
type: 1,
min: 210,
max: 210
}, {
id: 211,
title: "蜂",
type: 1,
min: 211,
max: 211
}, {
id: 212,
title: "逢公",
type: 1,
min: 212,
max: 212
}, {
id: 213,
title: "逢侯",
type: 1,
min: 213,
max: 213
}, {
id: 214,
title: "逢孙",
type: 1,
min: 214,
max: 214
}, {
id: 215,
title: "弗忌",
type: 1,
min: 215,
max: 215
}, {
id: 216,
title: "佛图",
type: 1,
min: 216,
max: 216
}, {
id: 217,
title: "不第",
type: 1,
min: 217,
max: 217
}, {
id: 218,
title: "伏罗",
type: 1,
min: 218,
max: 218
}, {
id: 219,
title: "伏侯",
type: 1,
min: 219,
max: 219
}, {
id: 220,
title: "扶登",
type: 1,
min: 220,
max: 220
}, {
id: 221,
title: "凫臾",
type: 1,
min: 221,
max: 221
}, {
id: 222,
title: "浮莱",
type: 1,
min: 222,
max: 222
}, {
id: 223,
title: "浮丘",
type: 1,
min: 223,
max: 223
}, {
id: 224,
title: "浮屠",
type: 1,
min: 224,
max: 224
}, {
id: 225,
title: "甫爽",
type: 1,
min: 225,
max: 225
}, {
id: 226,
title: "付里",
type: 1,
min: 226,
max: 226
}, {
id: 227,
title: "附庸",
type: 1,
min: 227,
max: 227
}, {
id: 228,
title: "驸马",
type: 1,
min: 228,
max: 228
}, {
id: 229,
title: "复陆",
type: 1,
min: 229,
max: 229
}, {
id: 230,
title: "富父",
type: 1,
min: 230,
max: 230
}, {
id: 231,
title: "富宜",
type: 1,
min: 231,
max: 231
}, {
id: 232,
title: "副吕",
type: 1,
min: 232,
max: 232
}, {
id: 233,
title: "傅其",
type: 1,
min: 233,
max: 233
}, {
id: 234,
title: "傅余",
type: 1,
min: 234,
max: 234
}, {
id: 235,
title: "盖楼",
type: 1,
min: 235,
max: 235
}, {
id: 236,
title: "干己",
type: 1,
min: 236,
max: 236
}, {
id: 237,
title: "干将",
type: 1,
min: 237,
max: 237
}, {
id: 238,
title: "干类",
type: 1,
min: 238,
max: 238
}, {
id: 239,
title: "甘公",
type: 1,
min: 239,
max: 239
}, {
id: 240,
title: "甘士",
type: 1,
min: 240,
max: 240
}, {
id: 241,
title: "甘先",
type: 1,
min: 241,
max: 241
}, {
id: 242,
title: "甘庄",
type: 1,
min: 242,
max: 242
}, {
id: 243,
title: "幹献",
type: 1,
min: 243,
max: 243
}, {
id: 244,
title: "赣娄",
type: 1,
min: 244,
max: 244
}, {
id: 245,
title: "高车",
type: 1,
min: 245,
max: 245
}, {
id: 246,
title: "高粱",
type: 1,
min: 246,
max: 246
}, {
id: 247,
title: "高陵",
type: 1,
min: 247,
max: 247
}, {
id: 248,
title: "高丘",
type: 1,
min: 248,
max: 248
}, {
id: 249,
title: "高式",
type: 1,
min: 249,
max: 249
}, {
id: 250,
title: "高唐",
type: 1,
min: 250,
max: 250
}, {
id: 251,
title: "高辛",
type: 1,
min: 251,
max: 251
}, {
id: 252,
title: "高阳",
type: 1,
min: 252,
max: 252
}, {
id: 253,
title: "皋落",
type: 1,
min: 253,
max: 253
}, {
id: 254,
title: "閤",
type: 1,
min: 254,
max: 254
}, {
id: 255,
title: "葛伯",
type: 1,
min: 255,
max: 255
}, {
id: 256,
title: "根牟",
type: 1,
min: 256,
max: 256
}, {
id: 257,
title: "根水",
type: 1,
min: 257,
max: 257
}, {
id: 258,
title: "庚季",
type: 1,
min: 258,
max: 258
}, {
id: 259,
title: "庚桑",
type: 1,
min: 259,
max: 259
}, {
id: 260,
title: "庚市",
type: 1,
min: 260,
max: 260
}, {
id: 261,
title: "梗阳",
type: 1,
min: 261,
max: 261
}, {
id: 262,
title: "工娄",
type: 1,
min: 262,
max: 262
}, {
id: 263,
title: "工师",
type: 1,
min: 263,
max: 263
}, {
id: 264,
title: "工尹",
type: 1,
min: 264,
max: 264
}, {
id: 265,
title: "弓里",
type: 1,
min: 265,
max: 265
}, {
id: 266,
title: "弓如",
type: 1,
min: 266,
max: 266
}, {
id: 267,
title: "公哀",
type: 1,
min: 267,
max: 267
}, {
id: 268,
title: "公宾",
type: 1,
min: 268,
max: 268
}, {
id: 269,
title: "公车",
type: 1,
min: 269,
max: 269
}, {
id: 270,
title: "公成",
type: 1,
min: 270,
max: 270
}, {
id: 271,
title: "公仇",
type: 1,
min: 271,
max: 271
}, {
id: 272,
title: "公畴",
type: 1,
min: 272,
max: 272
}, {
id: 273,
title: "公鉏",
type: 1,
min: 273,
max: 273
}, {
id: 274,
title: "公德",
type: 1,
min: 274,
max: 274
}, {
id: 275,
title: "公都",
type: 1,
min: 275,
max: 275
}, {
id: 276,
title: "公堵",
type: 1,
min: 276,
max: 276
}, {
id: 277,
title: "公房",
type: 1,
min: 277,
max: 277
}, {
id: 278,
title: "公甫",
type: 1,
min: 278,
max: 278
}, {
id: 279,
title: "公父",
type: 1,
min: 279,
max: 279
}, {
id: 280,
title: "公幹",
type: 1,
min: 280,
max: 280
}, {
id: 281,
title: "公翰",
type: 1,
min: 281,
max: 281
}, {
id: 282,
title: "公何",
type: 1,
min: 282,
max: 282
}, {
id: 283,
title: "公户",
type: 1,
min: 283,
max: 283
}, {
id: 284,
title: "公扈",
type: 1,
min: 284,
max: 284
}, {
id: 285,
title: "公华",
type: 1,
min: 285,
max: 285
}, {
id: 286,
title: "公季",
type: 1,
min: 286,
max: 286
}, {
id: 287,
title: "公甲",
type: 1,
min: 287,
max: 287
}, {
id: 288,
title: "公肩",
type: 1,
min: 288,
max: 288
}, {
id: 289,
title: "公坚",
type: 1,
min: 289,
max: 289
}, {
id: 290,
title: "公建",
type: 1,
min: 290,
max: 290
}, {
id: 291,
title: "公金",
type: 1,
min: 291,
max: 291
}, {
id: 292,
title: "公荆",
type: 1,
min: 292,
max: 292
}, {
id: 293,
title: "公敛",
type: 1,
min: 293,
max: 293
}, {
id: 294,
title: "公林",
type: 1,
min: 294,
max: 294
}, {
id: 295,
title: "公刘",
type: 1,
min: 295,
max: 295
}, {
id: 296,
title: "公留",
type: 1,
min: 296,
max: 296
}, {
id: 297,
title: "公旅",
type: 1,
min: 297,
max: 297
}, {
id: 298,
title: "公明",
type: 1,
min: 298,
max: 298
}, {
id: 299,
title: "公南",
type: 1,
min: 299,
max: 299
}, {
id: 300,
title: "公牛",
type: 1,
min: 300,
max: 300
}, {
id: 301,
title: "公期",
type: 1,
min: 301,
max: 301
}, {
id: 302,
title: "公旗",
type: 1,
min: 302,
max: 302
}, {
id: 303,
title: "公綦",
type: 1,
min: 303,
max: 303
}, {
id: 304,
title: "公牵",
type: 1,
min: 304,
max: 304
}, {
id: 305,
title: "公强",
type: 1,
min: 305,
max: 305
}, {
id: 306,
title: "公丘",
type: 1,
min: 306,
max: 306
}, {
id: 307,
title: "公群",
type: 1,
min: 307,
max: 307
}, {
id: 308,
title: "公冉",
type: 1,
min: 308,
max: 308
}, {
id: 309,
title: "公若",
type: 1,
min: 309,
max: 309
}, {
id: 310,
title: "公山",
type: 1,
min: 310,
max: 310
}, {
id: 311,
title: "公申",
type: 1,
min: 311,
max: 311
}, {
id: 312,
title: "公慎",
type: 1,
min: 312,
max: 312
}, {
id: 313,
title: "公胜",
type: 1,
min: 313,
max: 313
}, {
id: 314,
title: "公施",
type: 1,
min: 314,
max: 314
}, {
id: 315,
title: "公石",
type: 1,
min: 315,
max: 315
}, {
id: 316,
title: "公士",
type: 1,
min: 316,
max: 316
}, {
id: 317,
title: "公帅",
type: 1,
min: 317,
max: 317
}, {
id: 318,
title: "公思",
type: 1,
min: 318,
max: 318
}, {
id: 319,
title: "公索",
type: 1,
min: 319,
max: 319
}, {
id: 320,
title: "公佗",
type: 1,
min: 320,
max: 320
}, {
id: 321,
title: "公罔",
type: 1,
min: 321,
max: 321
}, {
id: 322,
title: "公为",
type: 1,
min: 322,
max: 322
}, {
id: 323,
title: "公文",
type: 1,
min: 323,
max: 323
}, {
id: 324,
title: "公巫",
type: 1,
min: 324,
max: 324
}, {
id: 325,
title: "公务",
type: 1,
min: 325,
max: 325
}, {
id: 326,
title: "公皙",
type: 1,
min: 326,
max: 326
}, {
id: 327,
title: "公息",
type: 1,
min: 327,
max: 327
}, {
id: 328,
title: "公析",
type: 1,
min: 328,
max: 328
}, {
id: 329,
title: "公献",
type: 1,
min: 329,
max: 329
}, {
id: 330,
title: "公襄",
type: 1,
min: 330,
max: 330
}, {
id: 331,
title: "公行",
type: 1,
min: 331,
max: 331
}, {
id: 332,
title: "公休",
type: 1,
min: 332,
max: 332
}, {
id: 333,
title: "公宣",
type: 1,
min: 333,
max: 333
}, {
id: 334,
title: "公言",
type: 1,
min: 334,
max: 334
}, {
id: 335,
title: "公仪",
type: 1,
min: 335,
max: 335
}, {
id: 336,
title: "公右",
type: 1,
min: 336,
max: 336
}, {
id: 337,
title: "公阅",
type: 1,
min: 337,
max: 337
}, {
id: 338,
title: "公正",
type: 1,
min: 338,
max: 338
}, {
id: 339,
title: "公之",
type: 1,
min: 339,
max: 339
}, {
id: 340,
title: "公朱",
type: 1,
min: 340,
max: 340
}, {
id: 341,
title: "公子",
type: 1,
min: 341,
max: 341
}, {
id: 342,
title: "公左",
type: 1,
min: 342,
max: 342
}, {
id: 343,
title: "宫孙",
type: 1,
min: 343,
max: 343
}, {
id: 344,
title: "恭叔",
type: 1,
min: 344,
max: 344
}, {
id: 345,
title: "巩伯",
type: 1,
min: 345,
max: 345
}, {
id: 346,
title: "共叔",
type: 1,
min: 346,
max: 346
}, {
id: 347,
title: "贡娄",
type: 1,
min: 347,
max: 347
}, {
id: 348,
title: "钩弋",
type: 1,
min: 348,
max: 348
}, {
id: 349,
title: "诟",
type: 1,
min: 349,
max: 349
}, {
id: 350,
title: "姑布",
type: 1,
min: 350,
max: 350
}, {
id: 351,
title: "孤竹",
type: 1,
min: 351,
max: 351
}, {
id: 352,
title: "古成",
type: 1,
min: 352,
max: 352
}, {
id: 353,
title: "古孙",
type: 1,
min: 353,
max: 353
}, {
id: 354,
title: "古冶",
type: 1,
min: 354,
max: 354
}, {
id: 355,
title: "古野",
type: 1,
min: 355,
max: 355
}, {
id: 356,
title: "谷蠡",
type: 1,
min: 356,
max: 356
}, {
id: 357,
title: "榖阳",
type: 1,
min: 357,
max: 357
}, {
id: 358,
title: "骨饼",
type: 1,
min: 358,
max: 358
}, {
id: 359,
title: "股",
type: 1,
min: 359,
max: 359
}, {
id: 360,
title: "鹄",
type: 1,
min: 360,
max: 360
}, {
id: 361,
title: "騧",
type: 1,
min: 361,
max: 361
}, {
id: 362,
title: "刮",
type: 1,
min: 362,
max: 362
}, {
id: 363,
title: "关龙",
type: 1,
min: 363,
max: 363
}, {
id: 364,
title: "关其",
type: 1,
min: 364,
max: 364
}, {
id: 365,
title: "官师",
type: 1,
min: 365,
max: 365
}, {
id: 366,
title: "冠军",
type: 1,
min: 366,
max: 366
}, {
id: 367,
title: "毌丘",
type: 1,
min: 367,
max: 367
}, {
id: 368,
title: "灌东",
type: 1,
min: 368,
max: 368
}, {
id: 369,
title: "灌檀",
type: 1,
min: 369,
max: 369
}, {
id: 370,
title: "广成",
type: 1,
min: 370,
max: 370
}, {
id: 371,
title: "广武",
type: 1,
min: 371,
max: 371
}, {
id: 372,
title: "归生",
type: 1,
min: 372,
max: 372
}, {
id: 373,
title: "洼",
type: 1,
min: 373,
max: 373
}, {
id: 374,
title: "傀",
type: 1,
min: 374,
max: 374
}, {
id: 375,
title: "鬼方",
type: 1,
min: 375,
max: 375
}, {
id: 376,
title: "鬼嵬",
type: 1,
min: 376,
max: 376
}, {
id: 377,
title: "癸比",
type: 1,
min: 377,
max: 377
}, {
id: 378,
title: "诡",
type: 1,
min: 378,
max: 378
}, {
id: 379,
title: "虢射",
type: 1,
min: 379,
max: 379
}, {
id: 380,
title: "咍",
type: 1,
min: 380,
max: 380
}, {
id: 381,
title: "函井",
type: 1,
min: 381,
max: 381
}, {
id: 382,
title: "函冶",
type: 1,
min: 382,
max: 382
}, {
id: 383,
title: "函舆",
type: 1,
min: 383,
max: 383
}, {
id: 384,
title: "馯臂",
type: 1,
min: 384,
max: 384
}, {
id: 385,
title: "韩褐",
type: 1,
min: 385,
max: 385
}, {
id: 386,
title: "韩侯",
type: 1,
min: 386,
max: 386
}, {
id: 387,
title: "韩籍",
type: 1,
min: 387,
max: 387
}, {
id: 388,
title: "韩厥",
type: 1,
min: 388,
max: 388
}, {
id: 389,
title: "韩信",
type: 1,
min: 389,
max: 389
}, {
id: 390,
title: "韩言",
type: 1,
min: 390,
max: 390
}, {
id: 391,
title: "韩馀",
type: 1,
min: 391,
max: 391
}, {
id: 392,
title: "韩婴",
type: 1,
min: 392,
max: 392
}, {
id: 393,
title: "郝骨",
type: 1,
min: 393,
max: 393
}, {
id: 394,
title: "浩羊",
type: 1,
min: 394,
max: 394
}, {
id: 395,
title: "皓星",
type: 1,
min: 395,
max: 395
}, {
id: 396,
title: "皞",
type: 1,
min: 396,
max: 396
}, {
id: 397,
title: "镐",
type: 1,
min: 397,
max: 397
}, {
id: 398,
title: "河宗",
type: 1,
min: 398,
max: 398
}, {
id: 399,
title: "荷丘",
type: 1,
min: 399,
max: 399
}, {
id: 400,
title: "荷訾",
type: 1,
min: 400,
max: 400
}, {
id: 401,
title: "鹖冠",
type: 1,
min: 401,
max: 401
}, {
id: 402,
title: "贺敦",
type: 1,
min: 402,
max: 402
}, {
id: 403,
title: "贺谷",
type: 1,
min: 403,
max: 403
}, {
id: 404,
title: "佫",
type: 1,
min: 404,
max: 404
}, {
id: 405,
title: "赫胥",
type: 1,
min: 405,
max: 405
}, {
id: 406,
title: "褐",
type: 1,
min: 406,
max: 406
}, {
id: 407,
title: "褐馀",
type: 1,
min: 407,
max: 407
}, {
id: 408,
title: "隺",
type: 1,
min: 408,
max: 408
}, {
id: 409,
title: "黑肱",
type: 1,
min: 409,
max: 409
}, {
id: 410,
title: "黑肩",
type: 1,
min: 410,
max: 410
}, {
id: 411,
title: "黑匿",
type: 1,
min: 411,
max: 411
}, {
id: 412,
title: "黑夷",
type: 1,
min: 412,
max: 412
}, {
id: 413,
title: "衡伯",
type: 1,
min: 413,
max: 413
}, {
id: 414,
title: "红阳",
type: 1,
min: 414,
max: 414
}, {
id: 415,
title: "鸿蒙",
type: 1,
min: 415,
max: 415
}, {
id: 416,
title: "鸿夷",
type: 1,
min: 416,
max: 416
}, {
id: 417,
title: "侯冈",
type: 1,
min: 417,
max: 417
}, {
id: 418,
title: "侯丽",
type: 1,
min: 418,
max: 418
}, {
id: 419,
title: "侯史",
type: 1,
min: 419,
max: 419
}, {
id: 420,
title: "鍭",
type: 1,
min: 420,
max: 420
}, {
id: 421,
title: "厚丘",
type: 1,
min: 421,
max: 421
}, {
id: 422,
title: "湖付",
type: 1,
min: 422,
max: 422
}, {
id: 423,
title: "狐丘",
type: 1,
min: 423,
max: 423
}, {
id: 424,
title: "胡非",
type: 1,
min: 424,
max: 424
}, {
id: 425,
title: "胡丘",
type: 1,
min: 425,
max: 425
}, {
id: 426,
title: "瑚",
type: 1,
min: 426,
max: 426
}, {
id: 427,
title: "虎夷",
type: 1,
min: 427,
max: 427
}, {
id: 428,
title: "护都",
type: 1,
min: 428,
max: 428
}, {
id: 429,
title: "瓠",
type: 1,
min: 429,
max: 429
}, {
id: 430,
title: "花伯",
type: 1,
min: 430,
max: 430
}, {
id: 431,
title: "华胥",
type: 1,
min: 431,
max: 431
}, {
id: 432,
title: "华阳",
type: 1,
min: 432,
max: 432
}, {
id: 433,
title: "淮夷",
type: 1,
min: 433,
max: 433
}, {
id: 434,
title: "驩",
type: 1,
min: 434,
max: 434
}, {
id: 435,
title: "嚾",
type: 1,
min: 435,
max: 435
}, {
id: 436,
title: "桓侯",
type: 1,
min: 436,
max: 436
}, {
id: 437,
title: "患",
type: 1,
min: 437,
max: 437
}, {
id: 438,
title: "皇子",
type: 1,
min: 438,
max: 438
}, {
id: 439,
title: "黄公",
type: 1,
min: 439,
max: 439
}, {
id: 440,
title: "黄周",
type: 1,
min: 440,
max: 440
}, {
id: 441,
title: "湟李",
type: 1,
min: 441,
max: 441
}, {
id: 442,
title: "虺",
type: 1,
min: 442,
max: 442
}, {
id: 443,
title: "会庌",
type: 1,
min: 443,
max: 443
}, {
id: 444,
title: "绘",
type: 1,
min: 444,
max: 444
}, {
id: 445,
title: "惠市",
type: 1,
min: 445,
max: 445
}, {
id: 446,
title: "阍",
type: 1,
min: 446,
max: 446
}, {
id: 447,
title: "浑沌",
type: 1,
min: 447,
max: 447
}, {
id: 448,
title: "混沌",
type: 1,
min: 448,
max: 448
}, {
id: 449,
title: "或柯",
type: 1,
min: 449,
max: 449
}, {
id: 450,
title: "霍里",
type: 1,
min: 450,
max: 450
}, {
id: 451,
title: "丌",
type: 1,
min: 451,
max: 451
}, {
id: 452,
title: "剞闾",
type: 1,
min: 452,
max: 452
}, {
id: 453,
title: "吉白",
type: 1,
min: 453,
max: 453
}, {
id: 454,
title: "吉夷",
type: 1,
min: 454,
max: 454
}, {
id: 455,
title: "及木",
type: 1,
min: 455,
max: 455
}, {
id: 456,
title: "即利",
type: 1,
min: 456,
max: 456
}, {
id: 457,
title: "籍丘",
type: 1,
min: 457,
max: 457
}, {
id: 458,
title: "己氏",
type: 1,
min: 458,
max: 458
}, {
id: 459,
title: "忌",
type: 1,
min: 459,
max: 459
}, {
id: 460,
title: "季瓜",
type: 1,
min: 460,
max: 460
}, {
id: 461,
title: "季騧",
type: 1,
min: 461,
max: 461
}, {
id: 462,
title: "季连",
type: 1,
min: 462,
max: 462
}, {
id: 463,
title: "季老",
type: 1,
min: 463,
max: 463
}, {
id: 464,
title: "季融",
type: 1,
min: 464,
max: 464
}, {
id: 465,
title: "季似",
type: 1,
min: 465,
max: 465
}, {
id: 466,
title: "季夙",
type: 1,
min: 466,
max: 466
}, {
id: 467,
title: "季随",
type: 1,
min: 467,
max: 467
}, {
id: 468,
title: "季孙",
type: 1,
min: 468,
max: 468
}, {
id: 469,
title: "季寤",
type: 1,
min: 469,
max: 469
}, {
id: 470,
title: "季尹",
type: 1,
min: 470,
max: 470
}, {
id: 471,
title: "季婴",
type: 1,
min: 471,
max: 471
}, {
id: 472,
title: "稷丘",
type: 1,
min: 472,
max: 472
}, {
id: 473,
title: "家卜",
type: 1,
min: 473,
max: 473
}, {
id: 474,
title: "茄众",
type: 1,
min: 474,
max: 474
}, {
id: 475,
title: "郏敖",
type: 1,
min: 475,
max: 475
}, {
id: 476,
title: "甲父",
type: 1,
min: 476,
max: 476
}, {
id: 477,
title: "贾孙",
type: 1,
min: 477,
max: 477
}, {
id: 478,
title: "坚昆",
type: 1,
min: 478,
max: 478
}, {
id: 479,
title: "肩吾",
type: 1,
min: 479,
max: 479
}, {
id: 480,
title: "坚尹",
type: 1,
min: 480,
max: 480
}, {
id: 481,
title: "将匠",
type: 1,
min: 481,
max: 481
}, {
id: 482,
title: "将具",
type: 1,
min: 482,
max: 482
}, {
id: 483,
title: "将军",
type: 1,
min: 483,
max: 483
}, {
id: 484,
title: "将梁",
type: 1,
min: 484,
max: 484
}, {
id: 485,
title: "将闾",
type: 1,
min: 485,
max: 485
}, {
id: 486,
title: "蒋匠",
type: 1,
min: 486,
max: 486
}, {
id: 487,
title: "蒋闾",
type: 1,
min: 487,
max: 487
}, {
id: 488,
title: "匠丽",
type: 1,
min: 488,
max: 488
}, {
id: 489,
title: "椒丘",
type: 1,
min: 489,
max: 489
}, {
id: 490,
title: "接耶",
type: 1,
min: 490,
max: 490
}, {
id: 491,
title: "接舆",
type: 1,
min: 491,
max: 491
}, {
id: 492,
title: "接阳",
type: 1,
min: 492,
max: 492
}, {
id: 493,
title: "竭水",
type: 1,
min: 493,
max: 493
}, {
id: 494,
title: "介登",
type: 1,
min: 494,
max: 494
}, {
id: 495,
title: "介山",
type: 1,
min: 495,
max: 495
}, {
id: 496,
title: "介斟",
type: 1,
min: 496,
max: 496
}, {
id: 497,
title: "金吾",
type: 1,
min: 497,
max: 497
}, {
id: 498,
title: "尽",
type: 1,
min: 498,
max: 498
}, {
id: 499,
title: "缙",
type: 1,
min: 499,
max: 499
}, {
id: 500,
title: "缙云",
type: 1,
min: 500,
max: 500
}, {
id: 501,
title: "京城",
type: 1,
min: 501,
max: 501
}, {
id: 502,
title: "京相",
type: 1,
min: 502,
max: 502
}, {
id: 503,
title: "京兆",
type: 1,
min: 503,
max: 503
}, {
id: 504,
title: "泾阳",
type: 1,
min: 504,
max: 504
}, {
id: 505,
title: "经孙",
type: 1,
min: 505,
max: 505
}, {
id: 506,
title: "精纵",
type: 1,
min: 506,
max: 506
}, {
id: 507,
title: "景丑",
type: 1,
min: 507,
max: 507
}, {
id: 508,
title: "鸠夷",
type: 1,
min: 508,
max: 508
}, {
id: 509,
title: "九百",
type: 1,
min: 509,
max: 509
}, {
id: 510,
title: "久且",
type: 1,
min: 510,
max: 510
}, {
id: 511,
title: "灸",
type: 1,
min: 511,
max: 511
}, {
id: 512,
title: "臼季",
type: 1,
min: 512,
max: 512
}, {
id: 513,
title: "厩尹",
type: 1,
min: 513,
max: 513
}, {
id: 514,
title: "苴人",
type: 1,
min: 514,
max: 514
}, {
id: 515,
title: "娵訾",
type: 1,
min: 515,
max: 515
}, {
id: 516,
title: "鞫",
type: 1,
min: 516,
max: 516
}, {
id: 517,
title: "郹",
type: 1,
min: 517,
max: 517
}, {
id: 518,
title: "莒子",
type: 1,
min: 518,
max: 518
}, {
id: 519,
title: "萭",
type: 1,
min: 519,
max: 519
}, {
id: 520,
title: "楀",
type: 1,
min: 520,
max: 520
}, {
id: 521,
title: "巨毋",
type: 1,
min: 521,
max: 521
}, {
id: 522,
title: "蹶",
type: 1,
min: 522,
max: 522
}, {
id: 523,
title: "衎",
type: 1,
min: 523,
max: 523
}, {
id: 524,
title: "亢仓",
type: 1,
min: 524,
max: 524
}, {
id: 525,
title: "亢桑",
type: 1,
min: 525,
max: 525
}, {
id: 526,
title: "考成",
type: 1,
min: 526,
max: 526
}, {
id: 527,
title: "窠",
type: 1,
min: 527,
max: 527
}, {
id: 528,
title: "空桑",
type: 1,
min: 528,
max: 528
}, {
id: 529,
title: "空同",
type: 1,
min: 529,
max: 529
}, {
id: 530,
title: "空相",
type: 1,
min: 530,
max: 530
}, {
id: 531,
title: "孔父",
type: 1,
min: 531,
max: 531
}, {
id: 532,
title: "彄",
type: 1,
min: 532,
max: 532
}, {
id: 533,
title: "口引",
type: 1,
min: 533,
max: 533
}, {
id: 534,
title: "苦成",
type: 1,
min: 534,
max: 534
}, {
id: 535,
title: "夸娥",
type: 1,
min: 535,
max: 535
}, {
id: 536,
title: "姱",
type: 1,
min: 536,
max: 536
}, {
id: 537,
title: "匮",
type: 1,
min: 537,
max: 537
}, {
id: 538,
title: "会稽",
type: 1,
min: 538,
max: 538
}, {
id: 539,
title: "哙",
type: 1,
min: 539,
max: 539
}, {
id: 540,
title: "鮭鱼",
type: 1,
min: 540,
max: 540
}, {
id: 541,
title: "葵丘",
type: 1,
min: 541,
max: 541
}, {
id: 542,
title: "魁傀",
type: 1,
min: 542,
max: 542
}, {
id: 543,
title: "昆连",
type: 1,
min: 543,
max: 543
}, {
id: 544,
title: "剌门",
type: 1,
min: 544,
max: 544
}, {
id: 545,
title: "蓝尹",
type: 1,
min: 545,
max: 545
}, {
id: 546,
title: "琅琊",
type: 1,
min: 546,
max: 546
}, {
id: 547,
title: "老莱",
type: 1,
min: 547,
max: 547
}, {
id: 548,
title: "老龙",
type: 1,
min: 548,
max: 548
}, {
id: 549,
title: "老男",
type: 1,
min: 549,
max: 549
}, {
id: 550,
title: "老商",
type: 1,
min: 550,
max: 550
}, {
id: 551,
title: "老阳",
type: 1,
min: 551,
max: 551
}, {
id: 552,
title: "离娄",
type: 1,
min: 552,
max: 552
}, {
id: 553,
title: "犁比",
type: 1,
min: 553,
max: 553
}, {
id: 554,
title: "犁娄",
type: 1,
min: 554,
max: 554
}, {
id: 555,
title: "黎比",
type: 1,
min: 555,
max: 555
}, {
id: 556,
title: "黎伯",
type: 1,
min: 556,
max: 556
}, {
id: 557,
title: "黎丘",
type: 1,
min: 557,
max: 557
}, {
id: 558,
title: "骊",
type: 1,
min: 558,
max: 558
}, {
id: 559,
title: "立如",
type: 1,
min: 559,
max: 559
}, {
id: 560,
title: "利孙",
type: 1,
min: 560,
max: 560
}, {
id: 561,
title: "朸",
type: 1,
min: 561,
max: 561
}, {
id: 562,
title: "丽山",
type: 1,
min: 562,
max: 562
}, {
id: 563,
title: "隶",
type: 1,
min: 563,
max: 563
}, {
id: 564,
title: "鬲",
type: 1,
min: 564,
max: 564
}, {
id: 565,
title: "连尹",
type: 1,
min: 565,
max: 565
}, {
id: 566,
title: "良臣",
type: 1,
min: 566,
max: 566
}, {
id: 567,
title: "梁其",
type: 1,
min: 567,
max: 567
}, {
id: 568,
title: "梁武",
type: 1,
min: 568,
max: 568
}, {
id: 569,
title: "梁由",
type: 1,
min: 569,
max: 569
}, {
id: 570,
title: "梁馀",
type: 1,
min: 570,
max: 570
}, {
id: 571,
title: "梁垣",
type: 1,
min: 571,
max: 571
}, {
id: 572,
title: "寥叔",
type: 1,
min: 572,
max: 572
}, {
id: 573,
title: "列精",
type: 1,
min: 573,
max: 573
}, {
id: 574,
title: "列山",
type: 1,
min: 574,
max: 574
}, {
id: 575,
title: "列御",
type: 1,
min: 575,
max: 575
}, {
id: 576,
title: "列宗",
type: 1,
min: 576,
max: 576
}, {
id: 577,
title: "烈山",
type: 1,
min: 577,
max: 577
}, {
id: 578,
title: "林闾",
type: 1,
min: 578,
max: 578
}, {
id: 579,
title: "林丘",
type: 1,
min: 579,
max: 579
}, {
id: 580,
title: "遴",
type: 1,
min: 580,
max: 580
}, {
id: 581,
title: "稟丘",
type: 1,
min: 581,
max: 581
}, {
id: 582,
title: "伶舟",
type: 1,
min: 582,
max: 582
}, {
id: 583,
title: "泠州",
type: 1,
min: 583,
max: 583
}, {
id: 584,
title: "陵娥",
type: 1,
min: 584,
max: 584
}, {
id: 585,
title: "陵阳",
type: 1,
min: 585,
max: 585
}, {
id: 586,
title: "陵尹",
type: 1,
min: 586,
max: 586
}, {
id: 587,
title: "陵终",
type: 1,
min: 587,
max: 587
}, {
id: 588,
title: "令其",
type: 1,
min: 588,
max: 588
}, {
id: 589,
title: "留昆",
type: 1,
min: 589,
max: 589
}, {
id: 590,
title: "疁",
type: 1,
min: 590,
max: 590
}, {
id: 591,
title: "飂",
type: 1,
min: 591,
max: 591
}, {
id: 592,
title: "飂叔",
type: 1,
min: 592,
max: 592
}, {
id: 593,
title: "飀",
type: 1,
min: 593,
max: 593
}, {
id: 594,
title: "柳下",
type: 1,
min: 594,
max: 594
}, {
id: 595,
title: "龙丘",
type: 1,
min: 595,
max: 595
}, {
id: 596,
title: "楼季",
type: 1,
min: 596,
max: 596
}, {
id: 597,
title: "卢门",
type: 1,
min: 597,
max: 597
}, {
id: 598,
title: "卢奴",
type: 1,
min: 598,
max: 598
}, {
id: 599,
title: "卢浦",
type: 1,
min: 599,
max: 599
}, {
id: 600,
title: "鲁阳",
type: 1,
min: 600,
max: 600
}, {
id: 601,
title: "陆终",
type: 1,
min: 601,
max: 601
}, {
id: 602,
title: "坴",
type: 1,
min: 602,
max: 602
}, {
id: 603,
title: "甪",
type: 1,
min: 603,
max: 603
}, {
id: 604,
title: "甪里",
type: 1,
min: 604,
max: 604
}, {
id: 605,
title: "鹿门",
type: 1,
min: 605,
max: 605
}, {
id: 606,
title: "路俗",
type: 1,
min: 606,
max: 606
}, {
id: 607,
title: "路中",
type: 1,
min: 607,
max: 607
}, {
id: 608,
title: "闾公",
type: 1,
min: 608,
max: 608
}, {
id: 609,
title: "闾葵",
type: 1,
min: 609,
max: 609
}, {
id: 610,
title: "吕管",
type: 1,
min: 610,
max: 610
}, {
id: 611,
title: "吕相",
type: 1,
min: 611,
max: 611
}, {
id: 612,
title: "偻",
type: 1,
min: 612,
max: 612
}, {
id: 613,
title: "鑢",
type: 1,
min: 613,
max: 613
}, {
id: 614,
title: "栾书",
type: 1,
min: 614,
max: 614
}, {
id: 615,
title: "略阳",
type: 1,
min: 615,
max: 615
}, {
id: 616,
title: "罗侯",
type: 1,
min: 616,
max: 616
}, {
id: 617,
title: "落姑",
type: 1,
min: 617,
max: 617
}, {
id: 618,
title: "马矢",
type: 1,
min: 618,
max: 618
}, {
id: 619,
title: "马适",
type: 1,
min: 619,
max: 619
}, {
id: 620,
title: "麦丘",
type: 1,
min: 620,
max: 620
}, {
id: 621,
title: "曼多",
type: 1,
min: 621,
max: 621
}, {
id: 622,
title: "曼丘",
type: 1,
min: 622,
max: 622
}, {
id: 623,
title: "毛伯",
type: 1,
min: 623,
max: 623
}, {
id: 624,
title: "茅成",
type: 1,
min: 624,
max: 624
}, {
id: 625,
title: "茅地",
type: 1,
min: 625,
max: 625
}, {
id: 626,
title: "茅夷",
type: 1,
min: 626,
max: 626
}, {
id: 627,
title: "贸",
type: 1,
min: 627,
max: 627
}, {
id: 628,
title: "梅伯",
type: 1,
min: 628,
max: 628
}, {
id: 629,
title: "门尹",
type: 1,
min: 629,
max: 629
}, {
id: 630,
title: "黾",
type: 1,
min: 630,
max: 630
}, {
id: 631,
title: "弥牟",
type: 1,
min: 631,
max: 631
}, {
id: 632,
title: "芈尹",
type: 1,
min: 632,
max: 632
}, {
id: 633,
title: "靡父",
type: 1,
min: 633,
max: 633
}, {
id: 634,
title: "密革",
type: 1,
min: 634,
max: 634
}, {
id: 635,
title: "密茅",
type: 1,
min: 635,
max: 635
}, {
id: 636,
title: "密如",
type: 1,
min: 636,
max: 636
}, {
id: 637,
title: "密须",
type: 1,
min: 637,
max: 637
}, {
id: 638,
title: "莫耶",
type: 1,
min: 638,
max: 638
}, {
id: 639,
title: "秣",
type: 1,
min: 639,
max: 639
}, {
id: 640,
title: "默容",
type: 1,
min: 640,
max: 640
}, {
id: 641,
title: "墨台",
type: 1,
min: 641,
max: 641
}, {
id: 642,
title: "默夷",
type: 1,
min: 642,
max: 642
}, {
id: 643,
title: "牡丘",
type: 1,
min: 643,
max: 643
}, {
id: 644,
title: "木门",
type: 1,
min: 644,
max: 644
}, {
id: 645,
title: "目夷",
type: 1,
min: 645,
max: 645
}, {
id: 646,
title: "沐兰",
type: 1,
min: 646,
max: 646
}, {
id: 647,
title: "牧犊",
type: 1,
min: 647,
max: 647
}, {
id: 648,
title: "难",
type: 1,
min: 648,
max: 648
}, {
id: 649,
title: "南伯",
type: 1,
min: 649,
max: 649
}, {
id: 650,
title: "南公",
type: 1,
min: 650,
max: 650
}, {
id: 651,
title: "南郭",
type: 1,
min: 651,
max: 651
}, {
id: 652,
title: "南史",
type: 1,
min: 652,
max: 652
}, {
id: 653,
title: "南乡",
type: 1,
min: 653,
max: 653
}, {
id: 654,
title: "南荣",
type: 1,
min: 654,
max: 654
}, {
id: 655,
title: "南野",
type: 1,
min: 655,
max: 655
}, {
id: 656,
title: "内史",
type: 1,
min: 656,
max: 656
}, {
id: 657,
title: "郳",
type: 1,
min: 657,
max: 657
}, {
id: 658,
title: "泥丘",
type: 1,
min: 658,
max: 658
}, {
id: 659,
title: "鸟俗",
type: 1,
min: 659,
max: 659
}, {
id: 660,
title: "涅",
type: 1,
min: 660,
max: 660
}, {
id: 661,
title: "孽",
type: 1,
min: 661,
max: 661
}, {
id: 662,
title: "蘖",
type: 1,
min: 662,
max: 662
}, {
id: 663,
title: "啮",
type: 1,
min: 663,
max: 663
}, {
id: 664,
title: "獳羊",
type: 1,
min: 664,
max: 664
}, {
id: 665,
title: "欧侯",
type: 1,
min: 665,
max: 665
}, {
id: 666,
title: "欧羊",
type: 1,
min: 666,
max: 666
}, {
id: 667,
title: "盘古",
type: 1,
min: 667,
max: 667
}, {
id: 668,
title: "逄门",
type: 1,
min: 668,
max: 668
}, {
id: 669,
title: "逄孙",
type: 1,
min: 669,
max: 669
}, {
id: 670,
title: "厖",
type: 1,
min: 670,
max: 670
}, {
id: 671,
title: "俳",
type: 1,
min: 671,
max: 671
}, {
id: 672,
title: "裴满",
type: 1,
min: 672,
max: 672
}, {
id: 673,
title: "盆成",
type: 1,
min: 673,
max: 673
}, {
id: 674,
title: "彭戏",
type: 1,
min: 674,
max: 674
}, {
id: 675,
title: "彭祖",
type: 1,
min: 675,
max: 675
}, {
id: 676,
title: "辟闾",
type: 1,
min: 676,
max: 676
}, {
id: 677,
title: "平林",
type: 1,
min: 677,
max: 677
}, {
id: 678,
title: "平陵",
type: 1,
min: 678,
max: 678
}, {
id: 679,
title: "平宁",
type: 1,
min: 679,
max: 679
}, {
id: 680,
title: "平州",
type: 1,
min: 680,
max: 680
}, {
id: 681,
title: "掊",
type: 1,
min: 681,
max: 681
}, {
id: 682,
title: "蒲成",
type: 1,
min: 682,
max: 682
}, {
id: 683,
title: "蒲城",
type: 1,
min: 683,
max: 683
}, {
id: 684,
title: "蒲姑",
type: 1,
min: 684,
max: 684
}, {
id: 685,
title: "蒲侯",
type: 1,
min: 685,
max: 685
}, {
id: 686,
title: "蒲卢",
type: 1,
min: 686,
max: 686
}, {
id: 687,
title: "蒲圃",
type: 1,
min: 687,
max: 687
}, {
id: 688,
title: "蒲且",
type: 1,
min: 688,
max: 688
}, {
id: 689,
title: "蒲如",
type: 1,
min: 689,
max: 689
}, {
id: 690,
title: "傶",
type: 1,
min: 690,
max: 690
}, {
id: 691,
title: "栖疏",
type: 1,
min: 691,
max: 691
}, {
id: 692,
title: "期思",
type: 1,
min: 692,
max: 692
}, {
id: 693,
title: "齐季",
type: 1,
min: 693,
max: 693
}, {
id: 694,
title: "齐貌",
type: 1,
min: 694,
max: 694
}, {
id: 695,
title: "示",
type: 1,
min: 695,
max: 695
}, {
id: 696,
title: "祁成",
type: 1,
min: 696,
max: 696
}, {
id: 697,
title: "祈夜",
type: 1,
min: 697,
max: 697
}, {
id: 698,
title: "淇",
type: 1,
min: 698,
max: 698
}, {
id: 699,
title: "骐",
type: 1,
min: 699,
max: 699
}, {
id: 700,
title: "崎丘",
type: 1,
min: 700,
max: 700
}, {
id: 701,
title: "錡",
type: 1,
min: 701,
max: 701
}, {
id: 702,
title: "耆门",
type: 1,
min: 702,
max: 702
}, {
id: 703,
title: "洼",
type: 1,
min: 703,
max: 703
}, {
id: 704,
title: "綦连",
type: 1,
min: 704,
max: 704
}, {
id: 705,
title: "綦毋",
type: 1,
min: 705,
max: 705
}, {
id: 706,
title: "绮里",
type: 1,
min: 706,
max: 706
}, {
id: 707,
title: "弃疾",
type: 1,
min: 707,
max: 707
}, {
id: 708,
title: "契",
type: 1,
min: 708,
max: 708
}, {
id: 709,
title: "佮",
type: 1,
min: 709,
max: 709
}, {
id: 710,
title: "千乘",
type: 1,
min: 710,
max: 710
}, {
id: 711,
title: "芊",
type: 1,
min: 711,
max: 711
}, {
id: 712,
title: "幵",
type: 1,
min: 712,
max: 712
}, {
id: 713,
title: "幵官",
type: 1,
min: 713,
max: 713
}, {
id: 714,
title: "铅陵",
type: 1,
min: 714,
max: 714
}, {
id: 715,
title: "搴",
type: 1,
min: 715,
max: 715
}, {
id: 716,
title: "钳耳",
type: 1,
min: 716,
max: 716
}, {
id: 717,
title: "虔仁",
type: 1,
min: 717,
max: 717
}, {
id: 718,
title: "黔娄",
type: 1,
min: 718,
max: 718
}, {
id: 719,
title: "潜龙",
type: 1,
min: 719,
max: 719
}, {
id: 720,
title: "谴",
type: 1,
min: 720,
max: 720
}, {
id: 721,
title: "羌丘",
type: 1,
min: 721,
max: 721
}, {
id: 722,
title: "羌戎",
type: 1,
min: 722,
max: 722
}, {
id: 723,
title: "羌师",
type: 1,
min: 723,
max: 723
}, {
id: 724,
title: "羌宪",
type: 1,
min: 724,
max: 724
}, {
id: 725,
title: "强梁",
type: 1,
min: 725,
max: 725
}, {
id: 726,
title: "蔷",
type: 1,
min: 726,
max: 726
}, {
id: 727,
title: "勤宿",
type: 1,
min: 727,
max: 727
}, {
id: 728,
title: "懃",
type: 1,
min: 728,
max: 728
}, {
id: 729,
title: "青牛",
type: 1,
min: 729,
max: 729
}, {
id: 730,
title: "青萍",
type: 1,
min: 730,
max: 730
}, {
id: 731,
title: "青史",
type: 1,
min: 731,
max: 731
}, {
id: 732,
title: "青乌",
type: 1,
min: 732,
max: 732
}, {
id: 733,
title: "青阳",
type: 1,
min: 733,
max: 733
}, {
id: 734,
title: "清尹",
type: 1,
min: 734,
max: 734
}, {
id: 735,
title: "庆父",
type: 1,
min: 735,
max: 735
}, {
id: 736,
title: "庆忌",
type: 1,
min: 736,
max: 736
}, {
id: 737,
title: "庆师",
type: 1,
min: 737,
max: 737
}, {
id: 738,
title: "邛叔",
type: 1,
min: 738,
max: 738
}, {
id: 739,
title: "穷桑",
type: 1,
min: 739,
max: 739
}, {
id: 740,
title: "丘吾",
type: 1,
min: 740,
max: 740
}, {
id: 741,
title: "秋伯",
type: 1,
min: 741,
max: 741
}, {
id: 742,
title: "仇吾",
type: 1,
min: 742,
max: 742
}, {
id: 743,
title: "仇由",
type: 1,
min: 743,
max: 743
}, {
id: 744,
title: "盚",
type: 1,
min: 744,
max: 744
}, {
id: 745,
title: "佉",
type: 1,
min: 745,
max: 745
}, {
id: 746,
title: "曲阜",
type: 1,
min: 746,
max: 746
}, {
id: 747,
title: "曲沃",
type: 1,
min: 747,
max: 747
}, {
id: 748,
title: "屈侯",
type: 1,
min: 748,
max: 748
}, {
id: 749,
title: "屈门",
type: 1,
min: 749,
max: 749
}, {
id: 750,
title: "屈南",
type: 1,
min: 750,
max: 750
}, {
id: 751,
title: "屈同",
type: 1,
min: 751,
max: 751
}, {
id: 752,
title: "屈引",
type: 1,
min: 752,
max: 752
}, {
id: 753,
title: "麯",
type: 1,
min: 753,
max: 753
}, {
id: 754,
title: "朐",
type: 1,
min: 754,
max: 754
}, {
id: 755,
title: "瞿鹊",
type: 1,
min: 755,
max: 755
}, {
id: 756,
title: "衢",
type: 1,
min: 756,
max: 756
}, {
id: 757,
title: "取虑",
type: 1,
min: 757,
max: 757
}, {
id: 758,
title: "媰",
type: 1,
min: 758,
max: 758
}, {
id: 759,
title: "去疾",
type: 1,
min: 759,
max: 759
}, {
id: 760,
title: "趣马",
type: 1,
min: 760,
max: 760
}, {
id: 761,
title: "权尹",
type: 1,
min: 761,
max: 761
}, {
id: 762,
title: "卷子",
type: 1,
min: 762,
max: 762
}, {
id: 763,
title: "阙门",
type: 1,
min: 763,
max: 763
}, {
id: 764,
title: "冉相",
type: 1,
min: 764,
max: 764
}, {
id: 765,
title: "染女",
type: 1,
min: 765,
max: 765
}, {
id: 766,
title: "攘",
type: 1,
min: 766,
max: 766
}, {
id: 767,
title: "扔",
type: 1,
min: 767,
max: 767
}, {
id: 768,
title: "日中",
type: 1,
min: 768,
max: 768
}, {
id: 769,
title: "戎胥",
type: 1,
min: 769,
max: 769
}, {
id: 770,
title: "戎州",
type: 1,
min: 770,
max: 770
}, {
id: 771,
title: "戎子",
type: 1,
min: 771,
max: 771
}, {
id: 772,
title: "肜",
type: 1,
min: 772,
max: 772
}, {
id: 773,
title: "荣伯",
type: 1,
min: 773,
max: 773
}, {
id: 774,
title: "荣锜",
type: 1,
min: 774,
max: 774
}, {
id: 775,
title: "荣叔",
type: 1,
min: 775,
max: 775
}, {
id: 776,
title: "茸",
type: 1,
min: 776,
max: 776
}, {
id: 777,
title: "容成",
type: 1,
min: 777,
max: 777
}, {
id: 778,
title: "融夷",
type: 1,
min: 778,
max: 778
}, {
id: 779,
title: "如罗",
type: 1,
min: 779,
max: 779
}, {
id: 780,
title: "濡",
type: 1,
min: 780,
max: 780
}, {
id: 781,
title: "女叔",
type: 1,
min: 781,
max: 781
}, {
id: 782,
title: "芮伯",
type: 1,
min: 782,
max: 782
}, {
id: 783,
title: "若敖",
type: 1,
min: 783,
max: 783
}, {
id: 784,
title: "偌",
type: 1,
min: 784,
max: 784
}, {
id: 785,
title: "婼",
type: 1,
min: 785,
max: 785
}, {
id: 786,
title: "三饭",
type: 1,
min: 786,
max: 786
}, {
id: 787,
title: "三川",
type: 1,
min: 787,
max: 787
}, {
id: 788,
title: "三亢",
type: 1,
min: 788,
max: 788
}, {
id: 789,
title: "三闾",
type: 1,
min: 789,
max: 789
}, {
id: 790,
title: "三苗",
type: 1,
min: 790,
max: 790
}, {
id: 791,
title: "三乌",
type: 1,
min: 791,
max: 791
}, {
id: 792,
title: "三饶",
type: 1,
min: 792,
max: 792
}, {
id: 793,
title: "三州",
type: 1,
min: 793,
max: 793
}, {
id: 794,
title: "三宜",
type: 1,
min: 794,
max: 794
}, {
id: 795,
title: "桑扈",
type: 1,
min: 795,
max: 795
}, {
id: 796,
title: "桑丘",
type: 1,
min: 796,
max: 796
}, {
id: 797,
title: "桑邱",
type: 1,
min: 797,
max: 797
}, {
id: 798,
title: "桑水",
type: 1,
min: 798,
max: 798
}, {
id: 799,
title: "蔷",
type: 1,
min: 799,
max: 799
}, {
id: 800,
title: "钐",
type: 1,
min: 800,
max: 800
}, {
id: 801,
title: "单父",
type: 1,
min: 801,
max: 801
}, {
id: 802,
title: "商陵",
type: 1,
min: 802,
max: 802
}, {
id: 803,
title: "商密",
type: 1,
min: 803,
max: 803
}, {
id: 804,
title: "商瞿",
type: 1,
min: 804,
max: 804
}, {
id: 805,
title: "上成",
type: 1,
min: 805,
max: 805
}, {
id: 806,
title: "上郡",
type: 1,
min: 806,
max: 806
}, {
id: 807,
title: "上阳",
type: 1,
min: 807,
max: 807
}, {
id: 808,
title: "上衡",
type: 1,
min: 808,
max: 808
}, {
id: 809,
title: "尚方",
type: 1,
min: 809,
max: 809
}, {
id: 810,
title: "少典",
type: 1,
min: 810,
max: 810
}, {
id: 811,
title: "少师",
type: 1,
min: 811,
max: 811
}, {
id: 812,
title: "少施",
type: 1,
min: 812,
max: 812
}, {
id: 813,
title: "少室",
type: 1,
min: 813,
max: 813
}, {
id: 814,
title: "少西",
type: 1,
min: 814,
max: 814
}, {
id: 815,
title: "少正",
type: 1,
min: 815,
max: 815
}, {
id: 816,
title: "召伯",
type: 1,
min: 816,
max: 816
}, {
id: 817,
title: "邵皓",
type: 1,
min: 817,
max: 817
}, {
id: 818,
title: "佘丘",
type: 1,
min: 818,
max: 818
}, {
id: 819,
title: "蛇丘",
type: 1,
min: 819,
max: 819
}, {
id: 820,
title: "捨",
type: 1,
min: 820,
max: 820
}, {
id: 821,
title: "社北",
type: 1,
min: 821,
max: 821
}, {
id: 822,
title: "社南",
type: 1,
min: 822,
max: 822
}, {
id: 823,
title: "射姑",
type: 1,
min: 823,
max: 823
}, {
id: 824,
title: "涉其",
type: 1,
min: 824,
max: 824
}, {
id: 825,
title: "申都",
type: 1,
min: 825,
max: 825
}, {
id: 826,
title: "申公",
type: 1,
min: 826,
max: 826
}, {
id: 827,
title: "申叔",
type: 1,
min: 827,
max: 827
}, {
id: 828,
title: "申徒",
type: 1,
min: 828,
max: 828
}, {
id: 829,
title: "申章",
type: 1,
min: 829,
max: 829
}, {
id: 830,
title: "沈纤",
type: 1,
min: 830,
max: 830
}, {
id: 831,
title: "沈尹",
type: 1,
min: 831,
max: 831
}, {
id: 832,
title: "沈犹",
type: 1,
min: 832,
max: 832
}, {
id: 833,
title: "昚",
type: 1,
min: 833,
max: 833
}, {
id: 834,
title: "慎溃",
type: 1,
min: 834,
max: 834
}, {
id: 835,
title: "昇",
type: 1,
min: 835,
max: 835
}, {
id: 836,
title: "渻",
type: 1,
min: 836,
max: 836
}, {
id: 837,
title: "胜奔",
type: 1,
min: 837,
max: 837
}, {
id: 838,
title: "胜屠",
type: 1,
min: 838,
max: 838
}, {
id: 839,
title: "师祁",
type: 1,
min: 839,
max: 839
}, {
id: 840,
title: "师延",
type: 1,
min: 840,
max: 840
}, {
id: 841,
title: "师宜",
type: 1,
min: 841,
max: 841
}, {
id: 842,
title: "师尹",
type: 1,
min: 842,
max: 842
}, {
id: 843,
title: "施玉",
type: 1,
min: 843,
max: 843
}, {
id: 844,
title: "石伯",
type: 1,
min: 844,
max: 844
}, {
id: 845,
title: "石骀",
type: 1,
min: 845,
max: 845
}, {
id: 846,
title: "石弟",
type: 1,
min: 846,
max: 846
}, {
id: 847,
title: "石户",
type: 1,
min: 847,
max: 847
}, {
id: 848,
title: "石牛",
type: 1,
min: 848,
max: 848
}, {
id: 849,
title: "石治",
type: 1,
min: 849,
max: 849
}, {
id: 850,
title: "石作",
type: 1,
min: 850,
max: 850
}, {
id: 851,
title: "史朝",
type: 1,
min: 851,
max: 851
}, {
id: 852,
title: "史龟",
type: 1,
min: 852,
max: 852
}, {
id: 853,
title: "史华",
type: 1,
min: 853,
max: 853
}, {
id: 854,
title: "豕韦",
type: 1,
min: 854,
max: 854
}, {
id: 855,
title: "士成",
type: 1,
min: 855,
max: 855
}, {
id: 856,
title: "士丐",
type: 1,
min: 856,
max: 856
}, {
id: 857,
title: "士吉",
type: 1,
min: 857,
max: 857
}, {
id: 858,
title: "士季",
type: 1,
min: 858,
max: 858
}, {
id: 859,
title: "士强",
type: 1,
min: 859,
max: 859
}, {
id: 860,
title: "士弱",
type: 1,
min: 860,
max: 860
}, {
id: 861,
title: "士孙",
type: 1,
min: 861,
max: 861
}, {
id: 862,
title: "士蒍",
type: 1,
min: 862,
max: 862
}, {
id: 863,
title: "士尹",
type: 1,
min: 863,
max: 863
}, {
id: 864,
title: "士贞",
type: 1,
min: 864,
max: 864
}, {
id: 865,
title: "世叔",
type: 1,
min: 865,
max: 865
}, {
id: 866,
title: "氏叔",
type: 1,
min: 866,
max: 866
}, {
id: 867,
title: "市南",
type: 1,
min: 867,
max: 867
}, {
id: 868,
title: "是贲",
type: 1,
min: 868,
max: 868
}, {
id: 869,
title: "事父",
type: 1,
min: 869,
max: 869
}, {
id: 870,
title: "室孙",
type: 1,
min: 870,
max: 870
}, {
id: 871,
title: "室中",
type: 1,
min: 871,
max: 871
}, {
id: 872,
title: "寿西",
type: 1,
min: 872,
max: 872
}, {
id: 873,
title: "叔敖",
type: 1,
min: 873,
max: 873
}, {
id: 874,
title: "叔达",
type: 1,
min: 874,
max: 874
}, {
id: 875,
title: "叔代",
type: 1,
min: 875,
max: 875
}, {
id: 876,
title: "叔服",
type: 1,
min: 876,
max: 876
}, {
id: 877,
title: "叔梁",
type: 1,
min: 877,
max: 877
}, {
id: 878,
title: "叔山",
type: 1,
min: 878,
max: 878
}, {
id: 879,
title: "叔夙",
type: 1,
min: 879,
max: 879
}, {
id: 880,
title: "叔孙",
type: 1,
min: 880,
max: 880
}, {
id: 881,
title: "叔夜",
type: 1,
min: 881,
max: 881
}, {
id: 882,
title: "叔先",
type: 1,
min: 882,
max: 882
}, {
id: 883,
title: "叔向",
type: 1,
min: 883,
max: 883
}, {
id: 884,
title: "叔鱼",
type: 1,
min: 884,
max: 884
}, {
id: 885,
title: "叔仲",
type: 1,
min: 885,
max: 885
}, {
id: 886,
title: "舒鲍",
type: 1,
min: 886,
max: 886
}, {
id: 887,
title: "舒坚",
type: 1,
min: 887,
max: 887
}, {
id: 888,
title: "舒鸠",
type: 1,
min: 888,
max: 888
}, {
id: 889,
title: "舒蓼",
type: 1,
min: 889,
max: 889
}, {
id: 890,
title: "舒子",
type: 1,
min: 890,
max: 890
}, {
id: 891,
title: "输",
type: 1,
min: 891,
max: 891
}, {
id: 892,
title: "赎",
type: 1,
min: 892,
max: 892
}, {
id: 893,
title: "蜀山",
type: 1,
min: 893,
max: 893
}, {
id: 894,
title: "尌",
type: 1,
min: 894,
max: 894
}, {
id: 895,
title: "庶长",
type: 1,
min: 895,
max: 895
}, {
id: 896,
title: "庶其",
type: 1,
min: 896,
max: 896
}, {
id: 897,
title: "水丘",
type: 1,
min: 897,
max: 897
}, {
id: 898,
title: "司城",
type: 1,
min: 898,
max: 898
}, {
id: 899,
title: "司铎",
type: 1,
min: 899,
max: 899
}, {
id: 900,
title: "司工",
type: 1,
min: 900,
max: 900
}, {
id: 901,
title: "司功",
type: 1,
min: 901,
max: 901
}, {
id: 902,
title: "司国",
type: 1,
min: 902,
max: 902
}, {
id: 903,
title: "司褐",
type: 1,
min: 903,
max: 903
}, {
id: 904,
title: "司鸿",
type: 1,
min: 904,
max: 904
}, {
id: 905,
title: "司士",
type: 1,
min: 905,
max: 905
}, {
id: 906,
title: "四饭",
type: 1,
min: 906,
max: 906
}, {
id: 907,
title: "四娄",
type: 1,
min: 907,
max: 907
}, {
id: 908,
title: "寺人",
type: 1,
min: 908,
max: 908
}, {
id: 909,
title: "食我",
type: 1,
min: 909,
max: 909
}, {
id: 910,
title: "娀",
type: 1,
min: 910,
max: 910
}, {
id: 911,
title: "娀陵",
type: 1,
min: 911,
max: 911
}, {
id: 912,
title: "夙沙",
type: 1,
min: 912,
max: 912
}, {
id: 913,
title: "素和",
type: 1,
min: 913,
max: 913
}, {
id: 914,
title: "宿沙",
type: 1,
min: 914,
max: 914
}, {
id: 915,
title: "潚",
type: 1,
min: 915,
max: 915
}, {
id: 916,
title: "随巢",
type: 1,
min: 916,
max: 916
}, {
id: 917,
title: "邃",
type: 1,
min: 917,
max: 917
}, {
id: 918,
title: "孙伯",
type: 1,
min: 918,
max: 918
}, {
id: 919,
title: "孙叔",
type: 1,
min: 919,
max: 919
}, {
id: 920,
title: "孙阳",
type: 1,
min: 920,
max: 920
}, {
id: 921,
title: "索阳",
type: 1,
min: 921,
max: 921
}, {
id: 922,
title: "太伯",
type: 1,
min: 922,
max: 922
}, {
id: 923,
title: "太傅",
type: 1,
min: 923,
max: 923
}, {
id: 924,
title: "太公",
type: 1,
min: 924,
max: 924
}, {
id: 925,
title: "太山",
type: 1,
min: 925,
max: 925
}, {
id: 926,
title: "太师",
type: 1,
min: 926,
max: 926
}, {
id: 927,
title: "太史",
type: 1,
min: 927,
max: 927
}, {
id: 928,
title: "太室",
type: 1,
min: 928,
max: 928
}, {
id: 929,
title: "太宰",
type: 1,
min: 929,
max: 929
}, {
id: 930,
title: "太征",
type: 1,
min: 930,
max: 930
}, {
id: 931,
title: "太祝",
type: 1,
min: 931,
max: 931
}, {
id: 932,
title: "泰伯",
type: 1,
min: 932,
max: 932
}, {
id: 933,
title: "泰豆",
type: 1,
min: 933,
max: 933
}, {
id: 934,
title: "炭",
type: 1,
min: 934,
max: 934
}, {
id: 935,
title: "堂阳",
type: 1,
min: 935,
max: 935
}, {
id: 936,
title: "堂邑",
type: 1,
min: 936,
max: 936
}, {
id: 937,
title: "唐杜",
type: 1,
min: 937,
max: 937
}, {
id: 938,
title: "唐括",
type: 1,
min: 938,
max: 938
}, {
id: 939,
title: "唐山",
type: 1,
min: 939,
max: 939
}, {
id: 940,
title: "唐孙",
type: 1,
min: 940,
max: 940
}, {
id: 941,
title: "饕餮",
type: 1,
min: 941,
max: 941
}, {
id: 942,
title: "陶丘",
type: 1,
min: 942,
max: 942
}, {
id: 943,
title: "陶叔",
type: 1,
min: 943,
max: 943
}, {
id: 944,
title: "滕濆",
type: 1,
min: 944,
max: 944
}, {
id: 945,
title: "滕叔",
type: 1,
min: 945,
max: 945
}, {
id: 946,
title: "縢",
type: 1,
min: 946,
max: 946
}, {
id: 947,
title: "提弥",
type: 1,
min: 947,
max: 947
}, {
id: 948,
title: "鞮",
type: 1,
min: 948,
max: 948
}, {
id: 949,
title: "田俅",
type: 1,
min: 949,
max: 949
}, {
id: 950,
title: "田章",
type: 1,
min: 950,
max: 950
}, {
id: 951,
title: "粜",
type: 1,
min: 951,
max: 951
}, {
id: 952,
title: "同官",
type: 1,
min: 952,
max: 952
}, {
id: 953,
title: "彤城",
type: 1,
min: 953,
max: 953
}, {
id: 954,
title: "彤鱼",
type: 1,
min: 954,
max: 954
}, {
id: 955,
title: "桐门",
type: 1,
min: 955,
max: 955
}, {
id: 956,
title: "铜鞮",
type: 1,
min: 956,
max: 956
}, {
id: 957,
title: "投壶",
type: 1,
min: 957,
max: 957
}, {
id: 958,
title: "徒父",
type: 1,
min: 958,
max: 958
}, {
id: 959,
title: "徒河",
type: 1,
min: 959,
max: 959
}, {
id: 960,
title: "徒人",
type: 1,
min: 960,
max: 960
}, {
id: 961,
title: "荼",
type: 1,
min: 961,
max: 961
}, {
id: 962,
title: "屠三",
type: 1,
min: 962,
max: 962
}, {
id: 963,
title: "屠羊",
type: 1,
min: 963,
max: 963
}, {
id: 964,
title: "涂山",
type: 1,
min: 964,
max: 964
}, {
id: 965,
title: "菟和",
type: 1,
min: 965,
max: 965
}, {
id: 966,
title: "菟裘",
type: 1,
min: 966,
max: 966
}, {
id: 967,
title: "隤",
type: 1,
min: 967,
max: 967
}, {
id: 968,
title: "娲",
type: 1,
min: 968,
max: 968
}, {
id: 969,
title: "汪罔",
type: 1,
min: 969,
max: 969
}, {
id: 970,
title: "王父",
type: 1,
min: 970,
max: 970
}, {
id: 971,
title: "王官",
type: 1,
min: 971,
max: 971
}, {
id: 972,
title: "王人",
type: 1,
min: 972,
max: 972
}, {
id: 973,
title: "王史",
type: 1,
min: 973,
max: 973
}, {
id: 974,
title: "王叔",
type: 1,
min: 974,
max: 974
}, {
id: 975,
title: "王孙",
type: 1,
min: 975,
max: 975
}, {
id: 976,
title: "威王",
type: 1,
min: 976,
max: 976
}, {
id: 977,
title: "围龟",
type: 1,
min: 977,
max: 977
}, {
id: 978,
title: "寪",
type: 1,
min: 978,
max: 978
}, {
id: 979,
title: "尾勺",
type: 1,
min: 979,
max: 979
}, {
id: 980,
title: "尾生",
type: 1,
min: 980,
max: 980
}, {
id: 981,
title: "骫",
type: 1,
min: 981,
max: 981
}, {
id: 982,
title: "尉缭",
type: 1,
min: 982,
max: 982
}, {
id: 983,
title: "崴疆",
type: 1,
min: 983,
max: 983
}, {
id: 984,
title: "温伯",
type: 1,
min: 984,
max: 984
}, {
id: 985,
title: "问弓",
type: 1,
min: 985,
max: 985
}, {
id: 986,
title: "问薪",
type: 1,
min: 986,
max: 986
}, {
id: 987,
title: "巫臣",
type: 1,
min: 987,
max: 987
}, {
id: 988,
title: "巫咸",
type: 1,
min: 988,
max: 988
}, {
id: 989,
title: "屋庐",
type: 1,
min: 989,
max: 989
}, {
id: 990,
title: "无钩",
type: 1,
min: 990,
max: 990
}, {
id: 991,
title: "无忌",
type: 1,
min: 991,
max: 991
}, {
id: 992,
title: "无娄",
type: 1,
min: 992,
max: 992
}, {
id: 993,
title: "无嚣",
type: 1,
min: 993,
max: 993
}, {
id: 994,
title: "无戈",
type: 1,
min: 994,
max: 994
}, {
id: 995,
title: "无盐",
type: 1,
min: 995,
max: 995
}, {
id: 996,
title: "无庸",
type: 1,
min: 996,
max: 996
}, {
id: 997,
title: "无宇",
type: 1,
min: 997,
max: 997
}, {
id: 998,
title: "无圉",
type: 1,
min: 998,
max: 998
}, {
id: 999,
title: "无知",
type: 1,
min: 999,
max: 999
}, {
id: 1e3,
title: "无终",
type: 1,
min: 1e3,
max: 1e3
}, {
id: 1001,
title: "毋车",
type: 1,
min: 1001,
max: 1001
}, {
id: 1002,
title: "毋将",
type: 1,
min: 1002,
max: 1002
}, {
id: 1003,
title: "毋盐",
type: 1,
min: 1003,
max: 1003
}, {
id: 1004,
title: "吴丘",
type: 1,
min: 1004,
max: 1004
}, {
id: 1005,
title: "梧下",
type: 1,
min: 1005,
max: 1005
}, {
id: 1006,
title: "五鸠",
type: 1,
min: 1006,
max: 1006
}, {
id: 1007,
title: "五鹿",
type: 1,
min: 1007,
max: 1007
}, {
id: 1008,
title: "五王",
type: 1,
min: 1008,
max: 1008
}, {
id: 1009,
title: "五相",
type: 1,
min: 1009,
max: 1009
}, {
id: 1010,
title: "迕",
type: 1,
min: 1010,
max: 1010
}, {
id: 1011,
title: "伍参",
type: 1,
min: 1011,
max: 1011
}, {
id: 1012,
title: "武安",
type: 1,
min: 1012,
max: 1012
}, {
id: 1013,
title: "武城",
type: 1,
min: 1013,
max: 1013
}, {
id: 1014,
title: "武陵",
type: 1,
min: 1014,
max: 1014
}, {
id: 1015,
title: "武罗",
type: 1,
min: 1015,
max: 1015
}, {
id: 1016,
title: "武强",
type: 1,
min: 1016,
max: 1016
}, {
id: 1017,
title: "武信",
type: 1,
min: 1017,
max: 1017
}, {
id: 1018,
title: "武仲",
type: 1,
min: 1018,
max: 1018
}, {
id: 1019,
title: "舞嚣",
type: 1,
min: 1019,
max: 1019
}, {
id: 1020,
title: "务成",
type: 1,
min: 1020,
max: 1020
}, {
id: 1021,
title: "务娄",
type: 1,
min: 1021,
max: 1021
}, {
id: 1022,
title: "夕姑",
type: 1,
min: 1022,
max: 1022
}, {
id: 1023,
title: "西鉏",
type: 1,
min: 1023,
max: 1023
}, {
id: 1024,
title: "西都",
type: 1,
min: 1024,
max: 1024
}, {
id: 1025,
title: "西宫",
type: 1,
min: 1025,
max: 1025
}, {
id: 1026,
title: "西郭",
type: 1,
min: 1026,
max: 1026
}, {
id: 1027,
title: "西河",
type: 1,
min: 1027,
max: 1027
}, {
id: 1028,
title: "西陵",
type: 1,
min: 1028,
max: 1028
}, {
id: 1029,
title: "西楼",
type: 1,
min: 1029,
max: 1029
}, {
id: 1030,
title: "西闾",
type: 1,
min: 1030,
max: 1030
}, {
id: 1031,
title: "西乞",
type: 1,
min: 1031,
max: 1031
}, {
id: 1032,
title: "西申",
type: 1,
min: 1032,
max: 1032
}, {
id: 1033,
title: "西王",
type: 1,
min: 1033,
max: 1033
}, {
id: 1034,
title: "西夏",
type: 1,
min: 1034,
max: 1034
}, {
id: 1035,
title: "西乡",
type: 1,
min: 1035,
max: 1035
}, {
id: 1036,
title: "西野",
type: 1,
min: 1036,
max: 1036
}, {
id: 1037,
title: "西周",
type: 1,
min: 1037,
max: 1037
}, {
id: 1038,
title: "析成",
type: 1,
min: 1038,
max: 1038
}, {
id: 1039,
title: "龟",
type: 1,
min: 1039,
max: 1039
}, {
id: 1040,
title: "息夫",
type: 1,
min: 1040,
max: 1040
}, {
id: 1041,
title: "奚容",
type: 1,
min: 1041,
max: 1041
}, {
id: 1042,
title: "傒",
type: 1,
min: 1042,
max: 1042
}, {
id: 1043,
title: "皙",
type: 1,
min: 1043,
max: 1043
}, {
id: 1044,
title: "锡畴",
type: 1,
min: 1044,
max: 1044
}, {
id: 1045,
title: "锡我",
type: 1,
min: 1045,
max: 1045
}, {
id: 1046,
title: "釐子",
type: 1,
min: 1046,
max: 1046
}, {
id: 1047,
title: "巂",
type: 1,
min: 1047,
max: 1047
}, {
id: 1048,
title: "郤周",
type: 1,
min: 1048,
max: 1048
}, {
id: 1049,
title: "瑕吕",
type: 1,
min: 1049,
max: 1049
}, {
id: 1050,
title: "霞露",
type: 1,
min: 1050,
max: 1050
}, {
id: 1051,
title: "下军",
type: 1,
min: 1051,
max: 1051
}, {
id: 1052,
title: "下阳",
type: 1,
min: 1052,
max: 1052
}, {
id: 1053,
title: "夏丁",
type: 1,
min: 1053,
max: 1053
}, {
id: 1054,
title: "夏后",
type: 1,
min: 1054,
max: 1054
}, {
id: 1055,
title: "夏戊",
type: 1,
min: 1055,
max: 1055
}, {
id: 1056,
title: "先縠",
type: 1,
min: 1056,
max: 1056
}, {
id: 1057,
title: "纤",
type: 1,
min: 1057,
max: 1057
}, {
id: 1058,
title: "鲜阳",
type: 1,
min: 1058,
max: 1058
}, {
id: 1059,
title: "銛",
type: 1,
min: 1059,
max: 1059
}, {
id: 1060,
title: "咸丘",
type: 1,
min: 1060,
max: 1060
}, {
id: 1061,
title: "瞯",
type: 1,
min: 1061,
max: 1061
}, {
id: 1062,
title: "县孙",
type: 1,
min: 1062,
max: 1062
}, {
id: 1063,
title: "苋",
type: 1,
min: 1063,
max: 1063
}, {
id: 1064,
title: "宪丘",
type: 1,
min: 1064,
max: 1064
}, {
id: 1065,
title: "献丘",
type: 1,
min: 1065,
max: 1065
}, {
id: 1066,
title: "羡门",
type: 1,
min: 1066,
max: 1066
}, {
id: 1067,
title: "相夫",
type: 1,
min: 1067,
max: 1067
}, {
id: 1068,
title: "襄老",
type: 1,
min: 1068,
max: 1068
}, {
id: 1069,
title: "嚣尹",
type: 1,
min: 1069,
max: 1069
}, {
id: 1070,
title: "小王",
type: 1,
min: 1070,
max: 1070
}, {
id: 1071,
title: "校师",
type: 1,
min: 1071,
max: 1071
}, {
id: 1072,
title: "酅",
type: 1,
min: 1072,
max: 1072
}, {
id: 1073,
title: "携",
type: 1,
min: 1073,
max: 1073
}, {
id: 1074,
title: "缬那",
type: 1,
min: 1074,
max: 1074
}, {
id: 1075,
title: "偰伯",
type: 1,
min: 1075,
max: 1075
}, {
id: 1076,
title: "谢丘",
type: 1,
min: 1076,
max: 1076
}, {
id: 1077,
title: "辛垣",
type: 1,
min: 1077,
max: 1077
}, {
id: 1078,
title: "新和",
type: 1,
min: 1078,
max: 1078
}, {
id: 1079,
title: "新孙",
type: 1,
min: 1079,
max: 1079
}, {
id: 1080,
title: "新稚",
type: 1,
min: 1080,
max: 1080
}, {
id: 1081,
title: "覃",
type: 1,
min: 1081,
max: 1081
}, {
id: 1082,
title: "信成",
type: 1,
min: 1082,
max: 1082
}, {
id: 1083,
title: "信平",
type: 1,
min: 1083,
max: 1083
}, {
id: 1084,
title: "衅",
type: 1,
min: 1084,
max: 1084
}, {
id: 1085,
title: "刑史",
type: 1,
min: 1085,
max: 1085
}, {
id: 1086,
title: "陉",
type: 1,
min: 1086,
max: 1086
}, {
id: 1087,
title: "涬",
type: 1,
min: 1087,
max: 1087
}, {
id: 1088,
title: "熊率",
type: 1,
min: 1088,
max: 1088
}, {
id: 1089,
title: "熊相",
type: 1,
min: 1089,
max: 1089
}, {
id: 1090,
title: "修鱼",
type: 1,
min: 1090,
max: 1090
}, {
id: 1091,
title: "须句",
type: 1,
min: 1091,
max: 1091
}, {
id: 1092,
title: "须遂",
type: 1,
min: 1092,
max: 1092
}, {
id: 1093,
title: "胥门",
type: 1,
min: 1093,
max: 1093
}, {
id: 1094,
title: "胥馀",
type: 1,
min: 1094,
max: 1094
}, {
id: 1095,
title: "需",
type: 1,
min: 1095,
max: 1095
}, {
id: 1096,
title: "繻",
type: 1,
min: 1096,
max: 1096
}, {
id: 1097,
title: "徐吾",
type: 1,
min: 1097,
max: 1097
}, {
id: 1098,
title: "姁",
type: 1,
min: 1098,
max: 1098
}, {
id: 1099,
title: "傊",
type: 1,
min: 1099,
max: 1099
}, {
id: 1100,
title: "杼",
type: 1,
min: 1100,
max: 1100
}, {
id: 1101,
title: "续祁",
type: 1,
min: 1101,
max: 1101
}, {
id: 1102,
title: "藇",
type: 1,
min: 1102,
max: 1102
}, {
id: 1103,
title: "亘",
type: 1,
min: 1103,
max: 1103
}, {
id: 1104,
title: "轩邱",
type: 1,
min: 1104,
max: 1104
}, {
id: 1105,
title: "儇",
type: 1,
min: 1105,
max: 1105
}, {
id: 1106,
title: "玄氐",
type: 1,
min: 1106,
max: 1106
}, {
id: 1107,
title: "玄都",
type: 1,
min: 1107,
max: 1107
}, {
id: 1108,
title: "烜",
type: 1,
min: 1108,
max: 1108
}, {
id: 1109,
title: "郇瑕",
type: 1,
min: 1109,
max: 1109
}, {
id: 1110,
title: "栒",
type: 1,
min: 1110,
max: 1110
}, {
id: 1111,
title: "栒栎",
type: 1,
min: 1111,
max: 1111
}, {
id: 1112,
title: "亚饭",
type: 1,
min: 1112,
max: 1112
}, {
id: 1113,
title: "延丘",
type: 1,
min: 1113,
max: 1113
}, {
id: 1114,
title: "延州",
type: 1,
min: 1114,
max: 1114
}, {
id: 1115,
title: "颜成",
type: 1,
min: 1115,
max: 1115
}, {
id: 1116,
title: "奄里",
type: 1,
min: 1116,
max: 1116
}, {
id: 1117,
title: "偃师",
type: 1,
min: 1117,
max: 1117
}, {
id: 1118,
title: "偃州",
type: 1,
min: 1118,
max: 1118
}, {
id: 1119,
title: "戭",
type: 1,
min: 1119,
max: 1119
}, {
id: 1120,
title: "扬于",
type: 1,
min: 1120,
max: 1120
}, {
id: 1121,
title: "扬食",
type: 1,
min: 1121,
max: 1121
}, {
id: 1122,
title: "杨孙",
type: 1,
min: 1122,
max: 1122
}, {
id: 1123,
title: "阳成",
type: 1,
min: 1123,
max: 1123
}, {
id: 1124,
title: "阳城",
type: 1,
min: 1124,
max: 1124
}, {
id: 1125,
title: "阳樊",
type: 1,
min: 1125,
max: 1125
}, {
id: 1126,
title: "阳门",
type: 1,
min: 1126,
max: 1126
}, {
id: 1127,
title: "阳丘",
type: 1,
min: 1127,
max: 1127
}, {
id: 1128,
title: "阳翁",
type: 1,
min: 1128,
max: 1128
}, {
id: 1129,
title: "养由",
type: 1,
min: 1129,
max: 1129
}, {
id: 1130,
title: "姚李",
type: 1,
min: 1130,
max: 1130
}, {
id: 1131,
title: "傜",
type: 1,
min: 1131,
max: 1131
}, {
id: 1132,
title: "舀",
type: 1,
min: 1132,
max: 1132
}, {
id: 1133,
title: "噎",
type: 1,
min: 1133,
max: 1133
}, {
id: 1134,
title: "叶阳",
type: 1,
min: 1134,
max: 1134
}, {
id: 1135,
title: "伊耆",
type: 1,
min: 1135,
max: 1135
}, {
id: 1136,
title: "伊秩",
type: 1,
min: 1136,
max: 1136
}, {
id: 1137,
title: "沂相",
type: 1,
min: 1137,
max: 1137
}, {
id: 1138,
title: "夷鼓",
type: 1,
min: 1138,
max: 1138
}, {
id: 1139,
title: "夷门",
type: 1,
min: 1139,
max: 1139
}, {
id: 1140,
title: "夷维",
type: 1,
min: 1140,
max: 1140
}, {
id: 1141,
title: "夷吾",
type: 1,
min: 1141,
max: 1141
}, {
id: 1142,
title: "夷羊",
type: 1,
min: 1142,
max: 1142
}, {
id: 1143,
title: "宜春",
type: 1,
min: 1143,
max: 1143
}, {
id: 1144,
title: "移门",
type: 1,
min: 1144,
max: 1144
}, {
id: 1145,
title: "倚相",
type: 1,
min: 1145,
max: 1145
}, {
id: 1146,
title: "齮",
type: 1,
min: 1146,
max: 1146
}, {
id: 1147,
title: "弋门",
type: 1,
min: 1147,
max: 1147
}, {
id: 1148,
title: "邑又",
type: 1,
min: 1148,
max: 1148
}, {
id: 1149,
title: "意如",
type: 1,
min: 1149,
max: 1149
}, {
id: 1150,
title: "益寿",
type: 1,
min: 1150,
max: 1150
}, {
id: 1151,
title: "尹公",
type: 1,
min: 1151,
max: 1151
}, {
id: 1152,
title: "尹文",
type: 1,
min: 1152,
max: 1152
}, {
id: 1153,
title: "尹午",
type: 1,
min: 1153,
max: 1153
}, {
id: 1154,
title: "戭",
type: 1,
min: 1154,
max: 1154
}, {
id: 1155,
title: "英贤",
type: 1,
min: 1155,
max: 1155
}, {
id: 1156,
title: "婴齐",
type: 1,
min: 1156,
max: 1156
}, {
id: 1157,
title: "罂",
type: 1,
min: 1157,
max: 1157
}, {
id: 1158,
title: "雍门",
type: 1,
min: 1158,
max: 1158
}, {
id: 1159,
title: "雍丘",
type: 1,
min: 1159,
max: 1159
}, {
id: 1160,
title: "雍人",
type: 1,
min: 1160,
max: 1160
}, {
id: 1161,
title: "由余",
type: 1,
min: 1161,
max: 1161
}, {
id: 1162,
title: "由章",
type: 1,
min: 1162,
max: 1162
}, {
id: 1163,
title: "游水",
type: 1,
min: 1163,
max: 1163
}, {
id: 1164,
title: "有巢",
type: 1,
min: 1164,
max: 1164
}, {
id: 1165,
title: "有鬲",
type: 1,
min: 1165,
max: 1165
}, {
id: 1166,
title: "有扈",
type: 1,
min: 1166,
max: 1166
}, {
id: 1167,
title: "有黄",
type: 1,
min: 1167,
max: 1167
}, {
id: 1168,
title: "有蟜",
type: 1,
min: 1168,
max: 1168
}, {
id: 1169,
title: "有缗",
type: 1,
min: 1169,
max: 1169
}, {
id: 1170,
title: "有男",
type: 1,
min: 1170,
max: 1170
}, {
id: 1171,
title: "有穷",
type: 1,
min: 1171,
max: 1171
}, {
id: 1172,
title: "有仍",
type: 1,
min: 1172,
max: 1172
}, {
id: 1173,
title: "有山",
type: 1,
min: 1173,
max: 1173
}, {
id: 1174,
title: "有施",
type: 1,
min: 1174,
max: 1174
}, {
id: 1175,
title: "有莘",
type: 1,
min: 1175,
max: 1175
}, {
id: 1176,
title: "有偃",
type: 1,
min: 1176,
max: 1176
}, {
id: 1177,
title: "莠尹",
type: 1,
min: 1177,
max: 1177
}, {
id: 1178,
title: "右归",
type: 1,
min: 1178,
max: 1178
}, {
id: 1179,
title: "右公",
type: 1,
min: 1179,
max: 1179
}, {
id: 1180,
title: "右史",
type: 1,
min: 1180,
max: 1180
}, {
id: 1181,
title: "右行",
type: 1,
min: 1181,
max: 1181
}, {
id: 1182,
title: "右尹",
type: 1,
min: 1182,
max: 1182
}, {
id: 1183,
title: "右宰",
type: 1,
min: 1183,
max: 1183
}, {
id: 1184,
title: "鼬",
type: 1,
min: 1184,
max: 1184
}, {
id: 1185,
title: "纡",
type: 1,
min: 1185,
max: 1185
}, {
id: 1186,
title: "于类",
type: 1,
min: 1186,
max: 1186
}, {
id: 1187,
title: "余丘",
type: 1,
min: 1187,
max: 1187
}, {
id: 1188,
title: "臾",
type: 1,
min: 1188,
max: 1188
}, {
id: 1189,
title: "盱",
type: 1,
min: 1189,
max: 1189
}, {
id: 1190,
title: "馀推",
type: 1,
min: 1190,
max: 1190
}, {
id: 1191,
title: "鱼孙",
type: 1,
min: 1191,
max: 1191
}, {
id: 1192,
title: "虞丘",
type: 1,
min: 1192,
max: 1192
}, {
id: 1193,
title: "鄅",
type: 1,
min: 1193,
max: 1193
}, {
id: 1194,
title: "庾公",
type: 1,
min: 1194,
max: 1194
}, {
id: 1195,
title: "楀",
type: 1,
min: 1195,
max: 1195
}, {
id: 1196,
title: "郁釐",
type: 1,
min: 1196,
max: 1196
}, {
id: 1197,
title: "郁闾",
type: 1,
min: 1197,
max: 1197
}, {
id: 1198,
title: "御龙",
type: 1,
min: 1198,
max: 1198
}, {
id: 1199,
title: "御鱼",
type: 1,
min: 1199,
max: 1199
}, {
id: 1200,
title: "愈豆",
type: 1,
min: 1200,
max: 1200
}, {
id: 1201,
title: "遹",
type: 1,
min: 1201,
max: 1201
}, {
id: 1202,
title: "隩",
type: 1,
min: 1202,
max: 1202
}, {
id: 1203,
title: "冤",
type: 1,
min: 1203,
max: 1203
}, {
id: 1204,
title: "元咺",
type: 1,
min: 1204,
max: 1204
}, {
id: 1205,
title: "原伯",
type: 1,
min: 1205,
max: 1205
}, {
id: 1206,
title: "原仲",
type: 1,
min: 1206,
max: 1206
}, {
id: 1207,
title: "苑庚",
type: 1,
min: 1207,
max: 1207
}, {
id: 1208,
title: "苑羊",
type: 1,
min: 1208,
max: 1208
}, {
id: 1209,
title: "掾",
type: 1,
min: 1209,
max: 1209
}, {
id: 1210,
title: "乐利",
type: 1,
min: 1210,
max: 1210
}, {
id: 1211,
title: "乐王",
type: 1,
min: 1211,
max: 1211
}, {
id: 1212,
title: "乐羊",
type: 1,
min: 1212,
max: 1212
}, {
id: 1213,
title: "乐尹",
type: 1,
min: 1213,
max: 1213
}, {
id: 1214,
title: "刖",
type: 1,
min: 1214,
max: 1214
}, {
id: 1215,
title: "栎",
type: 1,
min: 1215,
max: 1215
}, {
id: 1216,
title: "栎阳",
type: 1,
min: 1216,
max: 1216
}, {
id: 1217,
title: "越椒",
type: 1,
min: 1217,
max: 1217
}, {
id: 1218,
title: "嶽",
type: 1,
min: 1218,
max: 1218
}, {
id: 1219,
title: "雲阳",
type: 1,
min: 1219,
max: 1219
}, {
id: 1220,
title: "运期",
type: 1,
min: 1220,
max: 1220
}, {
id: 1221,
title: "运奄",
type: 1,
min: 1221,
max: 1221
}, {
id: 1222,
title: "攒",
type: 1,
min: 1222,
max: 1222
}, {
id: 1223,
title: "鄼",
type: 1,
min: 1223,
max: 1223
}, {
id: 1224,
title: "瓒",
type: 1,
min: 1224,
max: 1224
}, {
id: 1225,
title: "臧会",
type: 1,
min: 1225,
max: 1225
}, {
id: 1226,
title: "臧马",
type: 1,
min: 1226,
max: 1226
}, {
id: 1227,
title: "臧孙",
type: 1,
min: 1227,
max: 1227
}, {
id: 1228,
title: "臧文",
type: 1,
min: 1228,
max: 1228
}, {
id: 1229,
title: "鄫",
type: 1,
min: 1229,
max: 1229
}, {
id: 1230,
title: "增",
type: 1,
min: 1230,
max: 1230
}, {
id: 1231,
title: "缯",
type: 1,
min: 1231,
max: 1231
}, {
id: 1232,
title: "祭公",
type: 1,
min: 1232,
max: 1232
}, {
id: 1233,
title: "占尹",
type: 1,
min: 1233,
max: 1233
}, {
id: 1234,
title: "詹伯",
type: 1,
min: 1234,
max: 1234
}, {
id: 1235,
title: "詹葛",
type: 1,
min: 1235,
max: 1235
}, {
id: 1236,
title: "瞻葛",
type: 1,
min: 1236,
max: 1236
}, {
id: 1237,
title: "展兴",
type: 1,
min: 1237,
max: 1237
}, {
id: 1238,
title: "湛卢",
type: 1,
min: 1238,
max: 1238
}, {
id: 1239,
title: "章仇",
type: 1,
min: 1239,
max: 1239
}, {
id: 1240,
title: "章商",
type: 1,
min: 1240,
max: 1240
}, {
id: 1241,
title: "长儿",
type: 1,
min: 1241,
max: 1241
}, {
id: 1242,
title: "仉督",
type: 1,
min: 1242,
max: 1242
}, {
id: 1243,
title: "昭明",
type: 1,
min: 1243,
max: 1243
}, {
id: 1244,
title: "昭涉",
type: 1,
min: 1244,
max: 1244
}, {
id: 1245,
title: "赵阳",
type: 1,
min: 1245,
max: 1245
}, {
id: 1246,
title: "召伯",
type: 1,
min: 1246,
max: 1246
}, {
id: 1247,
title: "辄",
type: 1,
min: 1247,
max: 1247
}, {
id: 1248,
title: "真郭",
type: 1,
min: 1248,
max: 1248
}, {
id: 1249,
title: "斟戈",
type: 1,
min: 1249,
max: 1249
}, {
id: 1250,
title: "斟灌",
type: 1,
min: 1250,
max: 1250
}, {
id: 1251,
title: "斟寻",
type: 1,
min: 1251,
max: 1251
}, {
id: 1252,
title: "鍼巫",
type: 1,
min: 1252,
max: 1252
}, {
id: 1253,
title: "斟尹",
type: 1,
min: 1253,
max: 1253
}, {
id: 1254,
title: "箴",
type: 1,
min: 1254,
max: 1254
}, {
id: 1255,
title: "箴尹",
type: 1,
min: 1255,
max: 1255
}, {
id: 1256,
title: "整",
type: 1,
min: 1256,
max: 1256
}, {
id: 1257,
title: "正令",
type: 1,
min: 1257,
max: 1257
}, {
id: 1258,
title: "正舆",
type: 1,
min: 1258,
max: 1258
}, {
id: 1259,
title: "郑丘",
type: 1,
min: 1259,
max: 1259
}, {
id: 1260,
title: "支离",
type: 1,
min: 1260,
max: 1260
}, {
id: 1261,
title: "职方",
type: 1,
min: 1261,
max: 1261
}, {
id: 1262,
title: "挚畴",
type: 1,
min: 1262,
max: 1262
}, {
id: 1263,
title: "蛭",
type: 1,
min: 1263,
max: 1263
}, {
id: 1264,
title: "中行",
type: 1,
min: 1264,
max: 1264
}, {
id: 1265,
title: "中黄",
type: 1,
min: 1265,
max: 1265
}, {
id: 1266,
title: "中垒",
type: 1,
min: 1266,
max: 1266
}, {
id: 1267,
title: "中里",
type: 1,
min: 1267,
max: 1267
}, {
id: 1268,
title: "中梁",
type: 1,
min: 1268,
max: 1268
}, {
id: 1269,
title: "中容",
type: 1,
min: 1269,
max: 1269
}, {
id: 1270,
title: "中山",
type: 1,
min: 1270,
max: 1270
}, {
id: 1271,
title: "中叔",
type: 1,
min: 1271,
max: 1271
}, {
id: 1272,
title: "中野",
type: 1,
min: 1272,
max: 1272
}, {
id: 1273,
title: "钟期",
type: 1,
min: 1273,
max: 1273
}, {
id: 1274,
title: "钟丘",
type: 1,
min: 1274,
max: 1274
}, {
id: 1275,
title: "钟巫",
type: 1,
min: 1275,
max: 1275
}, {
id: 1276,
title: "钟吾",
type: 1,
min: 1276,
max: 1276
}, {
id: 1277,
title: "终古",
type: 1,
min: 1277,
max: 1277
}, {
id: 1278,
title: "终葵",
type: 1,
min: 1278,
max: 1278
}, {
id: 1279,
title: "终黎",
type: 1,
min: 1279,
max: 1279
}, {
id: 1280,
title: "终利",
type: 1,
min: 1280,
max: 1280
}, {
id: 1281,
title: "仲行",
type: 1,
min: 1281,
max: 1281
}, {
id: 1282,
title: "仲雄",
type: 1,
min: 1282,
max: 1282
}, {
id: 1283,
title: "仲熊",
type: 1,
min: 1283,
max: 1283
}, {
id: 1284,
title: "仲颜",
type: 1,
min: 1284,
max: 1284
}, {
id: 1285,
title: "重丘",
type: 1,
min: 1285,
max: 1285
}, {
id: 1286,
title: "州来",
type: 1,
min: 1286,
max: 1286
}, {
id: 1287,
title: "舟人",
type: 1,
min: 1287,
max: 1287
}, {
id: 1288,
title: "周生",
type: 1,
min: 1288,
max: 1288
}, {
id: 1289,
title: "周史",
type: 1,
min: 1289,
max: 1289
}, {
id: 1290,
title: "周阳",
type: 1,
min: 1290,
max: 1290
}, {
id: 1291,
title: "郮",
type: 1,
min: 1291,
max: 1291
}, {
id: 1292,
title: "朱萍",
type: 1,
min: 1292,
max: 1292
}, {
id: 1293,
title: "朱襄",
type: 1,
min: 1293,
max: 1293
}, {
id: 1294,
title: "邾",
type: 1,
min: 1294,
max: 1294
}, {
id: 1295,
title: "邾娄",
type: 1,
min: 1295,
max: 1295
}, {
id: 1296,
title: "诸儿",
type: 1,
min: 1296,
max: 1296
}, {
id: 1297,
title: "诸稽",
type: 1,
min: 1297,
max: 1297
}, {
id: 1298,
title: "诸将",
type: 1,
min: 1298,
max: 1298
}, {
id: 1299,
title: "诸梁",
type: 1,
min: 1299,
max: 1299
}, {
id: 1300,
title: "铢",
type: 1,
min: 1300,
max: 1300
}, {
id: 1301,
title: "烛庸",
type: 1,
min: 1301,
max: 1301
}, {
id: 1302,
title: "祝和 ",
type: 1,
min: 1302,
max: 1302
}, {
id: 1303,
title: "祝其",
type: 1,
min: 1303,
max: 1303
}, {
id: 1304,
title: "祝史",
type: 1,
min: 1304,
max: 1304
}, {
id: 1305,
title: "祝圉",
type: 1,
min: 1305,
max: 1305
}, {
id: 1306,
title: "颛顼",
type: 1,
min: 1306,
max: 1306
}, {
id: 1307,
title: "颛臾",
type: 1,
min: 1307,
max: 1307
}, {
id: 1308,
title: "颛玉",
type: 1,
min: 1308,
max: 1308
}, {
id: 1309,
title: "庄丘",
type: 1,
min: 1309,
max: 1309
}, {
id: 1310,
title: "浊繇",
type: 1,
min: 1310,
max: 1310
}, {
id: 1311,
title: "濯",
type: 1,
min: 1311,
max: 1311
}, {
id: 1312,
title: "兹毋",
type: 1,
min: 1312,
max: 1312
}, {
id: 1313,
title: "淄",
type: 1,
min: 1313,
max: 1313
}, {
id: 1314,
title: "淄丘",
type: 1,
min: 1314,
max: 1314
}, {
id: 1315,
title: "葘",
type: 1,
min: 1315,
max: 1315
}, {
id: 1316,
title: "葘丘",
type: 1,
min: 1316,
max: 1316
}, {
id: 1317,
title: "訾辱",
type: 1,
min: 1317,
max: 1317
}, {
id: 1318,
title: "訾陬",
type: 1,
min: 1318,
max: 1318
}, {
id: 1319,
title: "子扁",
type: 1,
min: 1319,
max: 1319
}, {
id: 1320,
title: "子伯",
type: 1,
min: 1320,
max: 1320
}, {
id: 1321,
title: "子成",
type: 1,
min: 1321,
max: 1321
}, {
id: 1322,
title: "子乘",
type: 1,
min: 1322,
max: 1322
}, {
id: 1323,
title: "子鉏",
type: 1,
min: 1323,
max: 1323
}, {
id: 1324,
title: "子荡",
type: 1,
min: 1324,
max: 1324
}, {
id: 1325,
title: "子枋",
type: 1,
min: 1325,
max: 1325
}, {
id: 1326,
title: "子丰",
type: 1,
min: 1326,
max: 1326
}, {
id: 1327,
title: "子干",
type: 1,
min: 1327,
max: 1327
}, {
id: 1328,
title: "子高",
type: 1,
min: 1328,
max: 1328
}, {
id: 1329,
title: "子革",
type: 1,
min: 1329,
max: 1329
}, {
id: 1330,
title: "子庚",
type: 1,
min: 1330,
max: 1330
}, {
id: 1331,
title: "子公",
type: 1,
min: 1331,
max: 1331
}, {
id: 1332,
title: "子弓",
type: 1,
min: 1332,
max: 1332
}, {
id: 1333,
title: "子国",
type: 1,
min: 1333,
max: 1333
}, {
id: 1334,
title: "子韩",
type: 1,
min: 1334,
max: 1334
}, {
id: 1335,
title: "子罕",
type: 1,
min: 1335,
max: 1335
}, {
id: 1336,
title: "子华",
type: 1,
min: 1336,
max: 1336
}, {
id: 1337,
title: "子翚",
type: 1,
min: 1337,
max: 1337
}, {
id: 1338,
title: "子季",
type: 1,
min: 1338,
max: 1338
}, {
id: 1339,
title: "子建",
type: 1,
min: 1339,
max: 1339
}, {
id: 1340,
title: "子驹",
type: 1,
min: 1340,
max: 1340
}, {
id: 1341,
title: "子沮",
type: 1,
min: 1341,
max: 1341
}, {
id: 1342,
title: "子孔",
type: 1,
min: 1342,
max: 1342
}, {
id: 1343,
title: "子宽",
type: 1,
min: 1343,
max: 1343
}, {
id: 1344,
title: "子履",
type: 1,
min: 1344,
max: 1344
}, {
id: 1345,
title: "子旅",
type: 1,
min: 1345,
max: 1345
}, {
id: 1346,
title: "子芒",
type: 1,
min: 1346,
max: 1346
}, {
id: 1347,
title: "子孟",
type: 1,
min: 1347,
max: 1347
}, {
id: 1348,
title: "子木",
type: 1,
min: 1348,
max: 1348
}, {
id: 1349,
title: "子穆",
type: 1,
min: 1349,
max: 1349
}, {
id: 1350,
title: "子南",
type: 1,
min: 1350,
max: 1350
}, {
id: 1351,
title: "子囊",
type: 1,
min: 1351,
max: 1351
}, {
id: 1352,
title: "子期",
type: 1,
min: 1352,
max: 1352
}, {
id: 1353,
title: "子齐",
type: 1,
min: 1353,
max: 1353
}, {
id: 1354,
title: "子旗",
type: 1,
min: 1354,
max: 1354
}, {
id: 1355,
title: "子牵",
type: 1,
min: 1355,
max: 1355
}, {
id: 1356,
title: "子强",
type: 1,
min: 1356,
max: 1356
}, {
id: 1357,
title: "子泉",
type: 1,
min: 1357,
max: 1357
}, {
id: 1358,
title: "子然",
type: 1,
min: 1358,
max: 1358
}, {
id: 1359,
title: "子人",
type: 1,
min: 1359,
max: 1359
}, {
id: 1360,
title: "子尚",
type: 1,
min: 1360,
max: 1360
}, {
id: 1361,
title: "子奢",
type: 1,
min: 1361,
max: 1361
}, {
id: 1362,
title: "子师",
type: 1,
min: 1362,
max: 1362
}, {
id: 1363,
title: "子石",
type: 1,
min: 1363,
max: 1363
}, {
id: 1364,
title: "子士",
type: 1,
min: 1364,
max: 1364
}, {
id: 1365,
title: "子叔",
type: 1,
min: 1365,
max: 1365
}, {
id: 1366,
title: "子驷",
type: 1,
min: 1366,
max: 1366
}, {
id: 1367,
title: "子宋",
type: 1,
min: 1367,
max: 1367
}, {
id: 1368,
title: "子庭",
type: 1,
min: 1368,
max: 1368
}, {
id: 1369,
title: "子文",
type: 1,
min: 1369,
max: 1369
}, {
id: 1370,
title: "子尾",
type: 1,
min: 1370,
max: 1370
}, {
id: 1371,
title: "子午",
type: 1,
min: 1371,
max: 1371
}, {
id: 1372,
title: "子寤",
type: 1,
min: 1372,
max: 1372
}, {
id: 1373,
title: "子西",
type: 1,
min: 1373,
max: 1373
}, {
id: 1374,
title: "子皙",
type: 1,
min: 1374,
max: 1374
}, {
id: 1375,
title: "子夏",
type: 1,
min: 1375,
max: 1375
}, {
id: 1376,
title: "子献",
type: 1,
min: 1376,
max: 1376
}, {
id: 1377,
title: "子囊",
type: 1,
min: 1377,
max: 1377
}, {
id: 1378,
title: "子行",
type: 1,
min: 1378,
max: 1378
}, {
id: 1379,
title: "子轩",
type: 1,
min: 1379,
max: 1379
}, {
id: 1380,
title: "子雅",
type: 1,
min: 1380,
max: 1380
}, {
id: 1381,
title: "子言",
type: 1,
min: 1381,
max: 1381
}, {
id: 1382,
title: "子剡",
type: 1,
min: 1382,
max: 1382
}, {
id: 1383,
title: "子鞅",
type: 1,
min: 1383,
max: 1383
}, {
id: 1384,
title: "子阳",
type: 1,
min: 1384,
max: 1384
}, {
id: 1385,
title: "子杨",
type: 1,
min: 1385,
max: 1385
}, {
id: 1386,
title: "子仪",
type: 1,
min: 1386,
max: 1386
}, {
id: 1387,
title: "子郢",
type: 1,
min: 1387,
max: 1387
}, {
id: 1388,
title: "子游",
type: 1,
min: 1388,
max: 1388
}, {
id: 1389,
title: "子有",
type: 1,
min: 1389,
max: 1389
}, {
id: 1390,
title: "子舆",
type: 1,
min: 1390,
max: 1390
}, {
id: 1391,
title: "子羽",
type: 1,
min: 1391,
max: 1391
}, {
id: 1392,
title: "子玉",
type: 1,
min: 1392,
max: 1392
}, {
id: 1393,
title: "子渊",
type: 1,
min: 1393,
max: 1393
}, {
id: 1394,
title: "子占",
type: 1,
min: 1394,
max: 1394
}, {
id: 1395,
title: "子之",
type: 1,
min: 1395,
max: 1395
}, {
id: 1396,
title: "子仲",
type: 1,
min: 1396,
max: 1396
}, {
id: 1397,
title: "子重",
type: 1,
min: 1397,
max: 1397
}, {
id: 1398,
title: "子州",
type: 1,
min: 1398,
max: 1398
}, {
id: 1399,
title: "宗伯",
type: 1,
min: 1399,
max: 1399
}, {
id: 1400,
title: "夷",
type: 1,
min: 1400,
max: 1400
}, {
id: 1401,
title: "邹屠",
type: 1,
min: 1401,
max: 1401
}, {
id: 1402,
title: "驺马",
type: 1,
min: 1402,
max: 1402
}, {
id: 1403,
title: "镞",
type: 1,
min: 1403,
max: 1403
}, {
id: 1404,
title: "祖龙",
type: 1,
min: 1404,
max: 1404
}, {
id: 1405,
title: "尊卢",
type: 1,
min: 1405,
max: 1405
}, {
id: 1406,
title: "鐏",
type: 1,
min: 1406,
max: 1406
}, {
id: 1407,
title: "左伯",
type: 1,
min: 1407,
max: 1407
}, {
id: 1408,
title: "左公",
type: 1,
min: 1408,
max: 1408
}, {
id: 1409,
title: "左人",
type: 1,
min: 1409,
max: 1409
}, {
id: 1410,
title: "左史",
type: 1,
min: 1410,
max: 1410
}, {
id: 1411,
title: "左毋",
type: 1,
min: 1411,
max: 1411
}, {
id: 1412,
title: "左行",
type: 1,
min: 1412,
max: 1412
}, {
id: 1413,
title: "左尹",
type: 1,
min: 1413,
max: 1413
}, {
id: 1414,
title: "仈",
type: 1,
min: 1414,
max: 1415
}, {
id: 1415,
title: "百",
type: 1,
min: 1416,
max: 1417
}, {
id: 1416,
title: "抱",
type: 1,
min: 1418,
max: 1419
}, {
id: 1417,
title: "瀑",
type: 1,
min: 1420,
max: 1421
}, {
id: 1418,
title: "卑梁",
type: 1,
min: 1422,
max: 1423
}, {
id: 1419,
title: "鼻",
type: 1,
min: 1424,
max: 1425
}, {
id: 1420,
title: "庇",
type: 1,
min: 1426,
max: 1427
}, {
id: 1421,
title: "辟",
type: 1,
min: 1428,
max: 1429
}, {
id: 1422,
title: "辟闾",
type: 1,
min: 1430,
max: 1431
}, {
id: 1423,
title: "壁",
type: 1,
min: 1432,
max: 1433
}, {
id: 1424,
title: "璧",
type: 1,
min: 1434,
max: 1435
}, {
id: 1425,
title: "碧",
type: 1,
min: 1436,
max: 1437
}, {
id: 1426,
title: "馥邗",
type: 1,
min: 1438,
max: 1439
}, {
id: 1427,
title: "鴘",
type: 1,
min: 1440,
max: 1441
}, {
id: 1428,
title: "麃",
type: 1,
min: 1442,
max: 1443
}, {
id: 1429,
title: "鳖",
type: 1,
min: 1444,
max: 1445
}, {
id: 1430,
title: "僰",
type: 1,
min: 1446,
max: 1447
}, {
id: 1431,
title: "捕",
type: 1,
min: 1448,
max: 1449
}, {
id: 1432,
title: "材",
type: 1,
min: 1450,
max: 1451
}, {
id: 1433,
title: "蔡丘",
type: 1,
min: 1452,
max: 1453
}, {
id: 1434,
title: "鄵",
type: 1,
min: 1454,
max: 1455
}, {
id: 1435,
title: "侧",
type: 1,
min: 1456,
max: 1457
}, {
id: 1436,
title: "差",
type: 1,
min: 1458,
max: 1459
}, {
id: 1437,
title: "茬",
type: 1,
min: 1460,
max: 1461
}, {
id: 1438,
title: "刹",
type: 1,
min: 1462,
max: 1463
}, {
id: 1439,
title: "察",
type: 1,
min: 1464,
max: 1465
}, {
id: 1440,
title: "缠",
type: 1,
min: 1466,
max: 1467
}, {
id: 1441,
title: "镡",
type: 1,
min: 1468,
max: 1469
}, {
id: 1442,
title: "尝",
type: 1,
min: 1470,
max: 1471
}, {
id: 1443,
title: "昶",
type: 1,
min: 1472,
max: 1473
}, {
id: 1444,
title: "唱",
type: 1,
min: 1474,
max: 1475
}, {
id: 1445,
title: "超",
type: 1,
min: 1476,
max: 1477
}, {
id: 1446,
title: "鼂",
type: 1,
min: 1478,
max: 1479
}, {
id: 1447,
title: "枨",
type: 1,
min: 1480,
max: 1481
}, {
id: 1448,
title: "匙",
type: 1,
min: 1482,
max: 1483
}, {
id: 1449,
title: "裭",
type: 1,
min: 1484,
max: 1485
}, {
id: 1450,
title: "赤人",
type: 1,
min: 1486,
max: 1487
}, {
id: 1451,
title: "赤诵",
type: 1,
min: 1488,
max: 1489
}, {
id: 1452,
title: "臭",
type: 1,
min: 1490,
max: 1491
}, {
id: 1453,
title: "婤",
type: 1,
min: 1492,
max: 1493
}, {
id: 1454,
title: "畴",
type: 1,
min: 1494,
max: 1495
}, {
id: 1455,
title: "雠",
type: 1,
min: 1496,
max: 1497
}, {
id: 1456,
title: "厨",
type: 1,
min: 1498,
max: 1499
}, {
id: 1457,
title: "楮",
type: 1,
min: 1500,
max: 1501
}, {
id: 1458,
title: "儋",
type: 1,
min: 1502,
max: 1503
}, {
id: 1459,
title: "澹",
type: 1,
min: 1504,
max: 1505
}, {
id: 1460,
title: "盪",
type: 1,
min: 1506,
max: 1507
}, {
id: 1461,
title: "岛",
type: 1,
min: 1508,
max: 1509
}, {
id: 1462,
title: "鞮",
type: 1,
min: 1510,
max: 1511
}, {
id: 1463,
title: "磾",
type: 1,
min: 1512,
max: 1513
}, {
id: 1464,
title: "砥",
type: 1,
min: 1514,
max: 1515
}, {
id: 1465,
title: "第八",
type: 1,
min: 1516,
max: 1517
}, {
id: 1466,
title: "第二",
type: 1,
min: 1518,
max: 1519
}, {
id: 1467,
title: "动",
type: 1,
min: 1520,
max: 1521
}, {
id: 1468,
title: "枓",
type: 1,
min: 1522,
max: 1523
}, {
id: 1469,
title: "逗",
type: 1,
min: 1524,
max: 1525
}, {
id: 1470,
title: "毒",
type: 1,
min: 1526,
max: 1527
}, {
id: 1471,
title: "覩",
type: 1,
min: 1528,
max: 1529
}, {
id: 1472,
title: "敦",
type: 1,
min: 1530,
max: 1531
}, {
id: 1473,
title: "趸",
type: 1,
min: 1532,
max: 1533
}, {
id: 1474,
title: "多余",
type: 1,
min: 1534,
max: 1535
}, {
id: 1475,
title: "啊",
type: 1,
min: 1536,
max: 1537
}, {
id: 1476,
title: "遏",
type: 1,
min: 1538,
max: 1539
}, {
id: 1477,
title: "翻",
type: 1,
min: 1540,
max: 1541
}, {
id: 1478,
title: "范师",
type: 1,
min: 1542,
max: 1543
}, {
id: 1479,
title: "坊",
type: 1,
min: 1544,
max: 1545
}, {
id: 1480,
title: "妃",
type: 1,
min: 1546,
max: 1547
}, {
id: 1481,
title: "淝",
type: 1,
min: 1548,
max: 1549
}, {
id: 1482,
title: "斐",
type: 1,
min: 1550,
max: 1551
}, {
id: 1483,
title: "棐",
type: 1,
min: 1552,
max: 1553
}, {
id: 1484,
title: "芾",
type: 1,
min: 1554,
max: 1555
}, {
id: 1485,
title: "夆",
type: 1,
min: 1556,
max: 1557
}, {
id: 1486,
title: "罘",
type: 1,
min: 1558,
max: 1559
}, {
id: 1487,
title: "幅",
type: 1,
min: 1560,
max: 1561
}, {
id: 1488,
title: "蝮",
type: 1,
min: 1562,
max: 1563
}, {
id: 1489,
title: "睾",
type: 1,
min: 1564,
max: 1565
}, {
id: 1490,
title: "给",
type: 1,
min: 1566,
max: 1567
}, {
id: 1491,
title: "公乘",
type: 1,
min: 1568,
max: 1569
}, {
id: 1492,
title: "句章",
type: 1,
min: 1570,
max: 1571
}, {
id: 1493,
title: "钩",
type: 1,
min: 1572,
max: 1573
}, {
id: 1494,
title: "耈",
type: 1,
min: 1574,
max: 1575
}, {
id: 1495,
title: "笱",
type: 1,
min: 1576,
max: 1577
}, {
id: 1496,
title: "媾",
type: 1,
min: 1578,
max: 1579
}, {
id: 1497,
title: "姑",
type: 1,
min: 1580,
max: 1581
}, {
id: 1498,
title: "轱",
type: 1,
min: 1582,
max: 1583
}, {
id: 1499,
title: "琯",
type: 1,
min: 1584,
max: 1585
}, {
id: 1500,
title: "规",
type: 1,
min: 1586,
max: 1587
}, {
id: 1501,
title: "轨",
type: 1,
min: 1588,
max: 1589
}, {
id: 1502,
title: "昋",
type: 1,
min: 1590,
max: 1591
}, {
id: 1503,
title: "涡",
type: 1,
min: 1592,
max: 1593
}, {
id: 1504,
title: "帼",
type: 1,
min: 1594,
max: 1595
}, {
id: 1505,
title: "骇",
type: 1,
min: 1596,
max: 1597
}, {
id: 1506,
title: "馯",
type: 1,
min: 1598,
max: 1599
}, {
id: 1507,
title: "閈",
type: 1,
min: 1600,
max: 1601
}, {
id: 1508,
title: "貉",
type: 1,
min: 1602,
max: 1603
}, {
id: 1509,
title: "鄗",
type: 1,
min: 1604,
max: 1605
}, {
id: 1510,
title: "何丘",
type: 1,
min: 1606,
max: 1607
}, {
id: 1511,
title: "垕",
type: 1,
min: 1608,
max: 1609
}, {
id: 1512,
title: "滹",
type: 1,
min: 1610,
max: 1611
}, {
id: 1513,
title: "弧",
type: 1,
min: 1612,
max: 1613
}, {
id: 1514,
title: "槲",
type: 1,
min: 1614,
max: 1615
}, {
id: 1515,
title: "琥",
type: 1,
min: 1616,
max: 1617
}, {
id: 1516,
title: "芐",
type: 1,
min: 1618,
max: 1619
}, {
id: 1517,
title: "寰",
type: 1,
min: 1620,
max: 1621
}, {
id: 1518,
title: "澴",
type: 1,
min: 1622,
max: 1623
}, {
id: 1519,
title: "豢",
type: 1,
min: 1624,
max: 1625
}, {
id: 1520,
title: "辉",
type: 1,
min: 1626,
max: 1627
}, {
id: 1521,
title: "袆",
type: 1,
min: 1628,
max: 1629
}, {
id: 1522,
title: "豗",
type: 1,
min: 1630,
max: 1631
}, {
id: 1523,
title: "蕙",
type: 1,
min: 1632,
max: 1633
}, {
id: 1524,
title: "伙",
type: 1,
min: 1634,
max: 1635
}, {
id: 1525,
title: "饥",
type: 1,
min: 1636,
max: 1637
}, {
id: 1526,
title: "剞",
type: 1,
min: 1638,
max: 1639
}, {
id: 1527,
title: "畸",
type: 1,
min: 1640,
max: 1641
}, {
id: 1528,
title: "瘠",
type: 1,
min: 1642,
max: 1643
}, {
id: 1529,
title: "茧",
type: 1,
min: 1644,
max: 1645
}, {
id: 1530,
title: "践",
type: 1,
min: 1646,
max: 1647
}, {
id: 1531,
title: "姣",
type: 1,
min: 1648,
max: 1649
}, {
id: 1532,
title: "椒",
type: 1,
min: 1650,
max: 1651
}, {
id: 1533,
title: "湫",
type: 1,
min: 1652,
max: 1653
}, {
id: 1534,
title: "蟜",
type: 1,
min: 1654,
max: 1655
}, {
id: 1535,
title: "徼",
type: 1,
min: 1656,
max: 1657
}, {
id: 1536,
title: "皆",
type: 1,
min: 1658,
max: 1659
}, {
id: 1537,
title: "孑",
type: 1,
min: 1660,
max: 1661
}, {
id: 1538,
title: "就",
type: 1,
min: 1662,
max: 1663
}, {
id: 1539,
title: "救",
type: 1,
min: 1664,
max: 1665
}, {
id: 1540,
title: "僦",
type: 1,
min: 1666,
max: 1667
}, {
id: 1541,
title: "厩",
type: 1,
min: 1668,
max: 1669
}, {
id: 1542,
title: "筥",
type: 1,
min: 1670,
max: 1671
}, {
id: 1543,
title: "巨菟",
type: 1,
min: 1672,
max: 1673
}, {
id: 1544,
title: "遽",
type: 1,
min: 1674,
max: 1675
}, {
id: 1545,
title: "麇",
type: 1,
min: 1676,
max: 1677
}, {
id: 1546,
title: "喀",
type: 1,
min: 1678,
max: 1679
}, {
id: 1547,
title: "臽",
type: 1,
min: 1680,
max: 1681
}, {
id: 1548,
title: "铿",
type: 1,
min: 1682,
max: 1683
}, {
id: 1549,
title: "款",
type: 1,
min: 1684,
max: 1685
}, {
id: 1550,
title: "窥",
type: 1,
min: 1686,
max: 1687
}, {
id: 1551,
title: "餽",
type: 1,
min: 1688,
max: 1689
}, {
id: 1552,
title: "媿",
type: 1,
min: 1690,
max: 1691
}, {
id: 1553,
title: "髡",
type: 1,
min: 1692,
max: 1693
}, {
id: 1554,
title: "来纤",
type: 1,
min: 1694,
max: 1695
}, {
id: 1555,
title: "仂",
type: 1,
min: 1696,
max: 1697
}, {
id: 1556,
title: "励",
type: 1,
min: 1698,
max: 1699
}, {
id: 1557,
title: "戾",
type: 1,
min: 1700,
max: 1701
}, {
id: 1558,
title: "俪",
type: 1,
min: 1702,
max: 1703
}, {
id: 1559,
title: "例",
type: 1,
min: 1704,
max: 1705
}, {
id: 1560,
title: "蠡",
type: 1,
min: 1706,
max: 1707
}, {
id: 1561,
title: "濂",
type: 1,
min: 1708,
max: 1709
}, {
id: 1562,
title: "寮",
type: 1,
min: 1710,
max: 1711
}, {
id: 1563,
title: "猎",
type: 1,
min: 1712,
max: 1713
}, {
id: 1564,
title: "裂",
type: 1,
min: 1714,
max: 1715
}, {
id: 1565,
title: "鳞",
type: 1,
min: 1716,
max: 1717
}, {
id: 1566,
title: "琳",
type: 1,
min: 1718,
max: 1719
}, {
id: 1567,
title: "潾",
type: 1,
min: 1720,
max: 1721
}, {
id: 1568,
title: "稟",
type: 1,
min: 1722,
max: 1723
}, {
id: 1569,
title: "酃",
type: 1,
min: 1724,
max: 1725
}, {
id: 1570,
title: "蒥",
type: 1,
min: 1726,
max: 1727
}, {
id: 1571,
title: "旒",
type: 1,
min: 1728,
max: 1729
}, {
id: 1572,
title: "弄",
type: 1,
min: 1730,
max: 1731
}, {
id: 1573,
title: "偻",
type: 1,
min: 1732,
max: 1733
}, {
id: 1574,
title: "渌",
type: 1,
min: 1734,
max: 1735
}, {
id: 1575,
title: "鹿",
type: 1,
min: 1736,
max: 1737
}, {
id: 1576,
title: "鸾",
type: 1,
min: 1738,
max: 1739
}, {
id: 1577,
title: "掠",
type: 1,
min: 1740,
max: 1741
}, {
id: 1578,
title: "虏",
type: 1,
min: 1742,
max: 1743
}, {
id: 1579,
title: "荦",
type: 1,
min: 1744,
max: 1745
}, {
id: 1580,
title: "泺",
type: 1,
min: 1746,
max: 1747
}, {
id: 1581,
title: "蔴",
type: 1,
min: 1748,
max: 1749
}, {
id: 1582,
title: "鄤",
type: 1,
min: 1750,
max: 1751
}, {
id: 1583,
title: "蟒",
type: 1,
min: 1752,
max: 1753
}, {
id: 1584,
title: "鄮",
type: 1,
min: 1754,
max: 1755
}, {
id: 1585,
title: "貌",
type: 1,
min: 1756,
max: 1757
}, {
id: 1586,
title: "禖",
type: 1,
min: 1758,
max: 1759
}, {
id: 1587,
title: "渼",
type: 1,
min: 1760,
max: 1761
}, {
id: 1588,
title: "门",
type: 1,
min: 1762,
max: 1763
}, {
id: 1589,
title: "祢",
type: 1,
min: 1764,
max: 1765
}, {
id: 1590,
title: "眠",
type: 1,
min: 1766,
max: 1767
}, {
id: 1591,
title: "免",
type: 1,
min: 1768,
max: 1769
}, {
id: 1592,
title: "瞑",
type: 1,
min: 1770,
max: 1771
}, {
id: 1593,
title: "茗",
type: 1,
min: 1772,
max: 1773
}, {
id: 1594,
title: "鄚",
type: 1,
min: 1774,
max: 1775
}, {
id: 1595,
title: "姥",
type: 1,
min: 1776,
max: 1777
}, {
id: 1596,
title: "暮",
type: 1,
min: 1778,
max: 1779
}, {
id: 1597,
title: "挐",
type: 1,
min: 1780,
max: 1781
}, {
id: 1598,
title: "囊",
type: 1,
min: 1782,
max: 1783
}, {
id: 1599,
title: "恼",
type: 1,
min: 1784,
max: 1785
}, {
id: 1600,
title: "霓",
type: 1,
min: 1786,
max: 1787
}, {
id: 1601,
title: "溺",
type: 1,
min: 1788,
max: 1789
}, {
id: 1602,
title: "捏",
type: 1,
min: 1790,
max: 1791
}, {
id: 1603,
title: "獳",
type: 1,
min: 1792,
max: 1793
}, {
id: 1604,
title: "耨",
type: 1,
min: 1794,
max: 1795
}, {
id: 1605,
title: "庖",
type: 1,
min: 1796,
max: 1797
}, {
id: 1606,
title: "袍",
type: 1,
min: 1798,
max: 1799
}, {
id: 1607,
title: "泙",
type: 1,
min: 1800,
max: 1801
}, {
id: 1608,
title: "伓",
type: 1,
min: 1802,
max: 1803
}, {
id: 1609,
title: "毗",
type: 1,
min: 1804,
max: 1805
}, {
id: 1610,
title: "洴",
type: 1,
min: 1806,
max: 1807
}, {
id: 1611,
title: "婆",
type: 1,
min: 1808,
max: 1809
}, {
id: 1612,
title: "剖",
type: 1,
min: 1810,
max: 1811
}, {
id: 1613,
title: "仆",
type: 1,
min: 1812,
max: 1813
}, {
id: 1614,
title: "槭",
type: 1,
min: 1814,
max: 1815
}, {
id: 1615,
title: "期思",
type: 1,
min: 1816,
max: 1817
}, {
id: 1616,
title: "耆",
type: 1,
min: 1818,
max: 1819
}, {
id: 1617,
title: "畦",
type: 1,
min: 1820,
max: 1821
}, {
id: 1618,
title: "佥",
type: 1,
min: 1822,
max: 1823
}, {
id: 1619,
title: "铅",
type: 1,
min: 1824,
max: 1825
}, {
id: 1620,
title: "浅",
type: 1,
min: 1826,
max: 1827
}, {
id: 1621,
title: "硚",
type: 1,
min: 1828,
max: 1829
}, {
id: 1622,
title: "挈",
type: 1,
min: 1830,
max: 1831
}, {
id: 1623,
title: "溱",
type: 1,
min: 1832,
max: 1833
}, {
id: 1624,
title: "寝",
type: 1,
min: 1834,
max: 1835
}, {
id: 1625,
title: "倾",
type: 1,
min: 1836,
max: 1837
}, {
id: 1626,
title: "蛩",
type: 1,
min: 1838,
max: 1839
}, {
id: 1627,
title: "虬",
type: 1,
min: 1840,
max: 1841
}, {
id: 1628,
title: "遒",
type: 1,
min: 1842,
max: 1843
}, {
id: 1629,
title: "璆",
type: 1,
min: 1844,
max: 1845
}, {
id: 1630,
title: "燃",
type: 1,
min: 1846,
max: 1847
}, {
id: 1631,
title: "扰",
type: 1,
min: 1848,
max: 1849
}, {
id: 1632,
title: "侁",
type: 1,
min: 1850,
max: 1851
}, {
id: 1633,
title: "蒒",
type: 1,
min: 1852,
max: 1853
}, {
id: 1634,
title: "枢",
type: 1,
min: 1854,
max: 1855
}, {
id: 1635,
title: "菽",
type: 1,
min: 1856,
max: 1857
}, {
id: 1636,
title: "鄃",
type: 1,
min: 1858,
max: 1859
}, {
id: 1637,
title: "儵",
type: 1,
min: 1860,
max: 1861
}, {
id: 1638,
title: "衰",
type: 1,
min: 1862,
max: 1863
}, {
id: 1639,
title: "娷",
type: 1,
min: 1864,
max: 1865
}, {
id: 1640,
title: "俟",
type: 1,
min: 1866,
max: 1867
}, {
id: 1641,
title: "璛",
type: 1,
min: 1868,
max: 1869
}, {
id: 1642,
title: "梼",
type: 1,
min: 1870,
max: 1871
}, {
id: 1643,
title: "蹄",
type: 1,
min: 1872,
max: 1873
}, {
id: 1644,
title: "垌",
type: 1,
min: 1874,
max: 1875
}, {
id: 1645,
title: "鍮",
type: 1,
min: 1876,
max: 1877
}, {
id: 1646,
title: "菟",
type: 1,
min: 1878,
max: 1879
}, {
id: 1647,
title: "豚",
type: 1,
min: 1880,
max: 1881
}, {
id: 1648,
title: "外",
type: 1,
min: 1882,
max: 1883
}, {
id: 1649,
title: "罔",
type: 1,
min: 1884,
max: 1885
}, {
id: 1650,
title: "隗",
type: 1,
min: 1886,
max: 1887
}, {
id: 1651,
title: "我",
type: 1,
min: 1888,
max: 1889
}, {
id: 1652,
title: "郚",
type: 1,
min: 1890,
max: 1891
}, {
id: 1653,
title: "杌",
type: 1,
min: 1892,
max: 1893
}, {
id: 1654,
title: "物",
type: 1,
min: 1894,
max: 1895
}, {
id: 1655,
title: "悉",
type: 1,
min: 1896,
max: 1897
}, {
id: 1656,
title: "犀",
type: 1,
min: 1898,
max: 1899
}, {
id: 1657,
title: "酅",
type: 1,
min: 1900,
max: 1901
}, {
id: 1658,
title: "玹",
type: 1,
min: 1902,
max: 1903
}, {
id: 1659,
title: "韰",
type: 1,
min: 1904,
max: 1905
}, {
id: 1660,
title: "荇",
type: 1,
min: 1906,
max: 1907
}, {
id: 1661,
title: "栩",
type: 1,
min: 1908,
max: 1909
}, {
id: 1662,
title: "恤",
type: 1,
min: 1910,
max: 1911
}, {
id: 1663,
title: "畜",
type: 1,
min: 1912,
max: 1913
}, {
id: 1664,
title: "泫",
type: 1,
min: 1914,
max: 1915
}, {
id: 1665,
title: "镡",
type: 1,
min: 1916,
max: 1917
}, {
id: 1666,
title: "淹",
type: 1,
min: 1918,
max: 1919
}, {
id: 1667,
title: "奄",
type: 1,
min: 1920,
max: 1921
}, {
id: 1668,
title: "兖",
type: 1,
min: 1922,
max: 1923
}, {
id: 1669,
title: "匽",
type: 1,
min: 1924,
max: 1925
}, {
id: 1670,
title: "偃",
type: 1,
min: 1926,
max: 1927
}, {
id: 1671,
title: "徭",
type: 1,
min: 1928,
max: 1929
}, {
id: 1672,
title: "繇",
type: 1,
min: 1930,
max: 1931
}, {
id: 1673,
title: "猗",
type: 1,
min: 1932,
max: 1933
}, {
id: 1674,
title: "蛾",
type: 1,
min: 1934,
max: 1935
}, {
id: 1675,
title: "佚",
type: 1,
min: 1936,
max: 1937
}, {
id: 1676,
title: "绎",
type: 1,
min: 1938,
max: 1939
}, {
id: 1677,
title: "翳",
type: 1,
min: 1940,
max: 1941
}, {
id: 1678,
title: "婴",
type: 1,
min: 1942,
max: 1943
}, {
id: 1679,
title: "邕",
type: 1,
min: 1944,
max: 1945
}, {
id: 1680,
title: "甬",
type: 1,
min: 1946,
max: 1947
}, {
id: 1681,
title: "鄾",
type: 1,
min: 1948,
max: 1949
}, {
id: 1682,
title: "羑",
type: 1,
min: 1950,
max: 1951
}, {
id: 1683,
title: "牖",
type: 1,
min: 1952,
max: 1953
}, {
id: 1684,
title: "右主",
type: 1,
min: 1954,
max: 1955
}, {
id: 1685,
title: "邘",
type: 1,
min: 1956,
max: 1957
}, {
id: 1686,
title: "舆",
type: 1,
min: 1958,
max: 1959
}, {
id: 1687,
title: "圉",
type: 1,
min: 1960,
max: 1961
}, {
id: 1688,
title: "浴",
type: 1,
min: 1962,
max: 1963
}, {
id: 1689,
title: "欲",
type: 1,
min: 1964,
max: 1965
}, {
id: 1690,
title: "御",
type: 1,
min: 1966,
max: 1967
}, {
id: 1691,
title: "谕",
type: 1,
min: 1968,
max: 1969
}, {
id: 1692,
title: "鬻",
type: 1,
min: 1970,
max: 1971
}, {
id: 1693,
title: "鬱",
type: 1,
min: 1972,
max: 1973
}, {
id: 1694,
title: "蜎",
type: 1,
min: 1974,
max: 1975
}, {
id: 1695,
title: "邧",
type: 1,
min: 1976,
max: 1977
}, {
id: 1696,
title: "说",
type: 1,
min: 1978,
max: 1979
}, {
id: 1697,
title: "妘",
type: 1,
min: 1980,
max: 1981
}, {
id: 1698,
title: "郧",
type: 1,
min: 1982,
max: 1983
}, {
id: 1699,
title: "斟",
type: 1,
min: 1984,
max: 1985
}, {
id: 1700,
title: "轸",
type: 1,
min: 1986,
max: 1987
}, {
id: 1701,
title: "争",
type: 1,
min: 1988,
max: 1989
}, {
id: 1702,
title: "征",
type: 1,
min: 1990,
max: 1991
}, {
id: 1703,
title: "脂",
type: 1,
min: 1992,
max: 1993
}, {
id: 1704,
title: "指",
type: 1,
min: 1994,
max: 1995
}, {
id: 1705,
title: "秩",
type: 1,
min: 1996,
max: 1997
}, {
id: 1706,
title: "雉",
type: 1,
min: 1998,
max: 1999
}, {
id: 1707,
title: "彘",
type: 1,
min: 2e3,
max: 2001
}, {
id: 1708,
title: "仲良",
type: 1,
min: 2002,
max: 2003
}, {
id: 1709,
title: "婤",
type: 1,
min: 2004,
max: 2005
}, {
id: 1710,
title: "烛",
type: 1,
min: 2006,
max: 2007
}, {
id: 1711,
title: "铸",
type: 1,
min: 2008,
max: 2009
}, {
id: 1712,
title: "筑",
type: 1,
min: 2010,
max: 2011
}, {
id: 1713,
title: "鄟",
type: 1,
min: 2012,
max: 2013
}, {
id: 1714,
title: "骓",
type: 1,
min: 2014,
max: 2015
}, {
id: 1715,
title: "浊",
type: 1,
min: 2016,
max: 2017
}, {
id: 1716,
title: "棸",
type: 1,
min: 2018,
max: 2019
}, {
id: 1717,
title: "鄹",
type: 1,
min: 2020,
max: 2021
}, {
id: 1718,
title: "鲰",
type: 1,
min: 2022,
max: 2023
}, {
id: 1719,
title: "奏",
type: 1,
min: 2024,
max: 2025
}, {
id: 1720,
title: "胙",
type: 1,
min: 2026,
max: 2027
}, {
id: 1721,
title: "撤",
type: 1,
min: 2028,
max: 2030
}, {
id: 1722,
title: "尘",
type: 1,
min: 2031,
max: 2033
}, {
id: 1723,
title: "亘",
type: 1,
min: 2034,
max: 2036
}, {
id: 1724,
title: "幻",
type: 1,
min: 2037,
max: 2039
}, {
id: 1725,
title: "挥",
type: 1,
min: 2040,
max: 2042
}, {
id: 1726,
title: "精娄",
type: 1,
min: 2043,
max: 2045
}, {
id: 1727,
title: "了",
type: 1,
min: 2046,
max: 2048
}, {
id: 1728,
title: "募",
type: 1,
min: 2049,
max: 2051
}, {
id: 1729,
title: "女徐",
type: 1,
min: 2052,
max: 2054
}, {
id: 1730,
title: "肜城",
type: 1,
min: 2055,
max: 2057
}, {
id: 1731,
title: "肜鱼",
type: 1,
min: 2058,
max: 2060
}, {
id: 1732,
title: "茙眷",
type: 1,
min: 2061,
max: 2063
}, {
id: 1733,
title: "颂",
type: 1,
min: 2064,
max: 2066
}, {
id: 1734,
title: "諶",
type: 1,
min: 2067,
max: 2069
}, {
id: 1735,
title: "史桑",
type: 1,
min: 2070,
max: 2072
}, {
id: 1736,
title: "疎",
type: 1,
min: 2073,
max: 2075
}, {
id: 1737,
title: "螘",
type: 1,
min: 2076,
max: 2078
}, {
id: 1738,
title: "羽父",
type: 1,
min: 2079,
max: 2081
}, {
id: 1739,
title: "彧",
type: 1,
min: 2082,
max: 2084
}, {
id: 1740,
title: "炤",
type: 1,
min: 2085,
max: 2087
}, {
id: 1741,
title: "祯",
type: 1,
min: 2088,
max: 2090
}, {
id: 1742,
title: "ㄓ",
type: 1,
min: 2091,
max: 2093
}, {
id: 1743,
title: "誌",
type: 1,
min: 2094,
max: 2096
}, {
id: 1744,
title: "仲衍",
type: 1,
min: 2097,
max: 2099
}, {
id: 1745,
title: "种",
type: 1,
min: 2100,
max: 2102
}, {
id: 1746,
title: "朱阳",
type: 1,
min: 2103,
max: 2105
}, {
id: 1747,
title: "洙",
type: 1,
min: 2106,
max: 2108
}, {
id: 1748,
title: "註",
type: 1,
min: 2109,
max: 2111
}, {
id: 1749,
title: "著丘",
type: 1,
min: 2112,
max: 2114
}, {
id: 1750,
title: "甾",
type: 1,
min: 2115,
max: 2117
}, {
id: 1751,
title: "子工",
type: 1,
min: 2118,
max: 2120
}, {
id: 1752,
title: "子功",
type: 1,
min: 2121,
max: 2123
}, {
id: 1753,
title: "宗荣",
type: 1,
min: 2124,
max: 2126
}, {
id: 1754,
title: "钻",
type: 1,
min: 2127,
max: 2129
}, {
id: 1755,
title: "左师",
type: 1,
min: 2130,
max: 2132
}, {
id: 1756,
title: "蔼",
type: 1,
min: 2133,
max: 2136
}, {
id: 1757,
title: "靄",
type: 1,
min: 2137,
max: 2140
}, {
id: 1758,
title: "安期",
type: 1,
min: 2141,
max: 2144
}, {
id: 1759,
title: "俺",
type: 1,
min: 2145,
max: 2148
}, {
id: 1760,
title: "犴",
type: 1,
min: 2149,
max: 2152
}, {
id: 1761,
title: "岸",
type: 1,
min: 2153,
max: 2156
}, {
id: 1762,
title: "按",
type: 1,
min: 2157,
max: 2160
}, {
id: 1763,
title: "卬",
type: 1,
min: 2161,
max: 2164
}, {
id: 1764,
title: "熬",
type: 1,
min: 2165,
max: 2168
}, {
id: 1765,
title: "奥",
type: 1,
min: 2169,
max: 2172
}, {
id: 1766,
title: "傲",
type: 1,
min: 2173,
max: 2176
}, {
id: 1767,
title: "八",
type: 1,
min: 2177,
max: 2180
}, {
id: 1768,
title: "芭",
type: 1,
min: 2181,
max: 2184
}, {
id: 1769,
title: "跋",
type: 1,
min: 2185,
max: 2188
}, {
id: 1770,
title: "拔",
type: 1,
min: 2189,
max: 2192
}, {
id: 1771,
title: "把",
type: 1,
min: 2193,
max: 2196
}, {
id: 1772,
title: "杷",
type: 1,
min: 2197,
max: 2200
}, {
id: 1773,
title: "霸",
type: 1,
min: 2201,
max: 2204
}, {
id: 1774,
title: "百里",
type: 1,
min: 2205,
max: 2208
}, {
id: 1775,
title: "摆",
type: 1,
min: 2209,
max: 2212
}, {
id: 1776,
title: "拜",
type: 1,
min: 2213,
max: 2216
}, {
id: 1777,
title: "般",
type: 1,
min: 2217,
max: 2220
}, {
id: 1778,
title: "闆",
type: 1,
min: 2221,
max: 2224
}, {
id: 1779,
title: "邦",
type: 1,
min: 2225,
max: 2228
}, {
id: 1780,
title: "棒",
type: 1,
min: 2229,
max: 2232
}, {
id: 1781,
title: "苞",
type: 1,
min: 2233,
max: 2236
}, {
id: 1782,
title: "褒",
type: 1,
min: 2237,
max: 2240
}, {
id: 1783,
title: "葆",
type: 1,
min: 2241,
max: 2244
}, {
id: 1784,
title: "饱",
type: 1,
min: 2245,
max: 2248
}, {
id: 1785,
title: "豹",
type: 1,
min: 2249,
max: 2252
}, {
id: 1786,
title: "杯",
type: 1,
min: 2253,
max: 2256
}, {
id: 1787,
title: "卑",
type: 1,
min: 2257,
max: 2260
}, {
id: 1788,
title: "悲",
type: 1,
min: 2261,
max: 2264
}, {
id: 1789,
title: "北",
type: 1,
min: 2265,
max: 2268
}, {
id: 1790,
title: "北宫",
type: 1,
min: 2269,
max: 2272
}, {
id: 1791,
title: "北郭",
type: 1,
min: 2273,
max: 2276
}, {
id: 1792,
title: "北海",
type: 1,
min: 2277,
max: 2280
}, {
id: 1793,
title: "北门",
type: 1,
min: 2281,
max: 2284
}, {
id: 1794,
title: "北丘",
type: 1,
min: 2285,
max: 2288
}, {
id: 1795,
title: "北人",
type: 1,
min: 2289,
max: 2292
}, {
id: 1796,
title: "北乡",
type: 1,
min: 2293,
max: 2296
}, {
id: 1797,
title: "北野",
type: 1,
min: 2297,
max: 2300
}, {
id: 1798,
title: "倍",
type: 1,
min: 2301,
max: 2304
}, {
id: 1799,
title: "邶",
type: 1,
min: 2305,
max: 2308
}, {
id: 1800,
title: "背",
type: 1,
min: 2309,
max: 2312
}, {
id: 1801,
title: "被",
type: 1,
min: 2313,
max: 2316
}, {
id: 1802,
title: "备",
type: 1,
min: 2317,
max: 2320
}, {
id: 1803,
title: "奔",
type: 1,
min: 2321,
max: 2324
}, {
id: 1804,
title: "本",
type: 1,
min: 2325,
max: 2328
}, {
id: 1805,
title: "崩",
type: 1,
min: 2329,
max: 2332
}, {
id: 1806,
title: "伻",
type: 1,
min: 2333,
max: 2336
}, {
id: 1807,
title: "逼",
type: 1,
min: 2337,
max: 2340
}, {
id: 1808,
title: "比",
type: 1,
min: 2341,
max: 2344
}, {
id: 1809,
title: "笔",
type: 1,
min: 2345,
max: 2348
}, {
id: 1810,
title: "鄙",
type: 1,
min: 2349,
max: 2352
}, {
id: 1811,
title: "必",
type: 1,
min: 2353,
max: 2356
}, {
id: 1812,
title: "邲",
type: 1,
min: 2357,
max: 2360
}, {
id: 1813,
title: "苾",
type: 1,
min: 2361,
max: 2364
}, {
id: 1814,
title: "敝",
type: 1,
min: 2365,
max: 2368
}, {
id: 1815,
title: "薜",
type: 1,
min: 2369,
max: 2372
}, {
id: 1816,
title: "编",
type: 1,
min: 2373,
max: 2376
}, {
id: 1817,
title: "扁",
type: 1,
min: 2377,
max: 2380
}, {
id: 1818,
title: "弁",
type: 1,
min: 2381,
max: 2384
}, {
id: 1819,
title: "汴",
type: 1,
min: 2385,
max: 2388
}, {
id: 1820,
title: "辨",
type: 1,
min: 2389,
max: 2392
}, {
id: 1821,
title: "辩",
type: 1,
min: 2393,
max: 2396
}, {
id: 1822,
title: "标",
type: 1,
min: 2397,
max: 2400
}, {
id: 1823,
title: "彪",
type: 1,
min: 2401,
max: 2404
}, {
id: 1824,
title: "表",
type: 1,
min: 2405,
max: 2408
}, {
id: 1825,
title: "别",
type: 1,
min: 2409,
max: 2412
}, {
id: 1826,
title: "宾",
type: 1,
min: 2413,
max: 2416
}, {
id: 1827,
title: "宾牟",
type: 1,
min: 2417,
max: 2420
}, {
id: 1828,
title: "彬",
type: 1,
min: 2421,
max: 2424
}, {
id: 1829,
title: "邠",
type: 1,
min: 2425,
max: 2428
}, {
id: 1830,
title: "冰",
type: 1,
min: 2429,
max: 2432
}, {
id: 1831,
title: "兵",
type: 1,
min: 2433,
max: 2436
}, {
id: 1832,
title: "丙",
type: 1,
min: 2437,
max: 2440
}, {
id: 1833,
title: "邴",
type: 1,
min: 2441,
max: 2444
}, {
id: 1834,
title: "炳",
type: 1,
min: 2445,
max: 2448
}, {
id: 1835,
title: "秉",
type: 1,
min: 2449,
max: 2452
}, {
id: 1836,
title: "并",
type: 1,
min: 2453,
max: 2456
}, {
id: 1837,
title: "波",
type: 1,
min: 2457,
max: 2460
}, {
id: 1838,
title: "剥",
type: 1,
min: 2461,
max: 2464
}, {
id: 1839,
title: "泊",
type: 1,
min: 2465,
max: 2468
}, {
id: 1840,
title: "帛",
type: 1,
min: 2469,
max: 2472
}, {
id: 1841,
title: "亳",
type: 1,
min: 2473,
max: 2476
}, {
id: 1842,
title: "博",
type: 1,
min: 2477,
max: 2480
}, {
id: 1843,
title: "勃",
type: 1,
min: 2481,
max: 2484
}, {
id: 1844,
title: "补",
type: 1,
min: 2485,
max: 2488
}, {
id: 1845,
title: "布",
type: 1,
min: 2489,
max: 2492
}, {
id: 1846,
title: "才",
type: 1,
min: 2493,
max: 2496
}, {
id: 1847,
title: "财",
type: 1,
min: 2497,
max: 2500
}, {
id: 1848,
title: "采",
type: 1,
min: 2501,
max: 2504
}, {
id: 1849,
title: "菜",
type: 1,
min: 2505,
max: 2508
}, {
id: 1850,
title: "参",
type: 1,
min: 2509,
max: 2512
}, {
id: 1851,
title: "蚕",
type: 1,
min: 2513,
max: 2516
}, {
id: 1852,
title: "惭",
type: 1,
min: 2517,
max: 2520
}, {
id: 1853,
title: "粲",
type: 1,
min: 2521,
max: 2524
}, {
id: 1854,
title: "苍",
type: 1,
min: 2525,
max: 2528
}, {
id: 1855,
title: "藏",
type: 1,
min: 2529,
max: 2532
}, {
id: 1856,
title: "操",
type: 1,
min: 2533,
max: 2536
}, {
id: 1857,
title: "漕",
type: 1,
min: 2537,
max: 2540
}, {
id: 1858,
title: "草",
type: 1,
min: 2541,
max: 2544
}, {
id: 1859,
title: "册",
type: 1,
min: 2545,
max: 2548
}, {
id: 1860,
title: "策",
type: 1,
min: 2549,
max: 2552
}, {
id: 1861,
title: "层",
type: 1,
min: 2553,
max: 2556
}, {
id: 1862,
title: "鄫",
type: 1,
min: 2557,
max: 2560
}, {
id: 1863,
title: "缯",
type: 1,
min: 2561,
max: 2564
}, {
id: 1864,
title: "茶",
type: 1,
min: 2565,
max: 2568
}, {
id: 1865,
title: "婵",
type: 1,
min: 2569,
max: 2572
}, {
id: 1866,
title: "蝉",
type: 1,
min: 2573,
max: 2576
}, {
id: 1867,
title: "酁",
type: 1,
min: 2577,
max: 2580
}, {
id: 1868,
title: "产",
type: 1,
min: 2581,
max: 2584
}, {
id: 1869,
title: "菖",
type: 1,
min: 2585,
max: 2588
}, {
id: 1870,
title: "长",
type: 1,
min: 2589,
max: 2592
}, {
id: 1871,
title: "苌",
type: 1,
min: 2593,
max: 2596
}, {
id: 1872,
title: "抄",
type: 1,
min: 2597,
max: 2600
}, {
id: 1873,
title: "朝",
type: 1,
min: 2601,
max: 2604
}, {
id: 1874,
title: "潮",
type: 1,
min: 2605,
max: 2608
}, {
id: 1875,
title: "彻",
type: 1,
min: 2609,
max: 2612
}, {
id: 1876,
title: "郴",
type: 1,
min: 2613,
max: 2616
}, {
id: 1877,
title: "臣",
type: 1,
min: 2617,
max: 2620
}, {
id: 1878,
title: "辰",
type: 1,
min: 2621,
max: 2624
}, {
id: 1879,
title: "称",
type: 1,
min: 2625,
max: 2628
}, {
id: 1880,
title: "成公",
type: 1,
min: 2629,
max: 2632
}, {
id: 1881,
title: "呈",
type: 1,
min: 2633,
max: 2636
}, {
id: 1882,
title: "城",
type: 1,
min: 2637,
max: 2640
}, {
id: 1883,
title: "澄",
type: 1,
min: 2641,
max: 2644
}, {
id: 1884,
title: "蚩",
type: 1,
min: 2645,
max: 2648
}, {
id: 1885,
title: "茌",
type: 1,
min: 2649,
max: 2652
}, {
id: 1886,
title: "弛",
type: 1,
min: 2653,
max: 2656
}, {
id: 1887,
title: "蚳",
type: 1,
min: 2657,
max: 2660
}, {
id: 1888,
title: "耻",
type: 1,
min: 2661,
max: 2664
}, {
id: 1889,
title: "叱",
type: 1,
min: 2665,
max: 2668
}, {
id: 1890,
title: "赤",
type: 1,
min: 2669,
max: 2672
}, {
id: 1891,
title: "醜",
type: 1,
min: 2673,
max: 2676
}, {
id: 1892,
title: "初",
type: 1,
min: 2677,
max: 2680
}, {
id: 1893,
title: "筹",
type: 1,
min: 2681,
max: 2684
}, {
id: 1894,
title: "丑",
type: 1,
min: 2685,
max: 2688
}, {
id: 1895,
title: "侴",
type: 1,
min: 2689,
max: 2692
}, {
id: 1896,
title: "出",
type: 1,
min: 2693,
max: 2696
}, {
id: 1897,
title: "樗",
type: 1,
min: 2697,
max: 2700
}, {
id: 1898,
title: "刍",
type: 1,
min: 2701,
max: 2704
}, {
id: 1899,
title: "除",
type: 1,
min: 2705,
max: 2708
}, {
id: 1900,
title: "处",
type: 1,
min: 2709,
max: 2712
}, {
id: 1901,
title: "畜",
type: 1,
min: 2713,
max: 2716
}, {
id: 1902,
title: "鄐",
type: 1,
min: 2717,
max: 2720
}, {
id: 1903,
title: "触",
type: 1,
min: 2721,
max: 2724
}, {
id: 1904,
title: "揣",
type: 1,
min: 2725,
max: 2728
}, {
id: 1905,
title: "啜",
type: 1,
min: 2729,
max: 2732
}, {
id: 1906,
title: "川",
type: 1,
min: 2733,
max: 2736
}, {
id: 1907,
title: "穿",
type: 1,
min: 2737,
max: 2740
}, {
id: 1908,
title: "传",
type: 1,
min: 2741,
max: 2744
}, {
id: 1909,
title: "船",
type: 1,
min: 2745,
max: 2748
}, {
id: 1910,
title: "歂",
type: 1,
min: 2749,
max: 2752
}, {
id: 1911,
title: "喘",
type: 1,
min: 2753,
max: 2756
}, {
id: 1912,
title: "钏",
type: 1,
min: 2757,
max: 2760
}, {
id: 1913,
title: "闯",
type: 1,
min: 2761,
max: 2764
}, {
id: 1914,
title: "创",
type: 1,
min: 2765,
max: 2768
}, {
id: 1915,
title: "椿",
type: 1,
min: 2769,
max: 2772
}, {
id: 1916,
title: "纯",
type: 1,
min: 2773,
max: 2776
}, {
id: 1917,
title: "婼",
type: 1,
min: 2777,
max: 2780
}, {
id: 1918,
title: "茨",
type: 1,
min: 2781,
max: 2784
}, {
id: 1919,
title: "祠",
type: 1,
min: 2785,
max: 2788
}, {
id: 1920,
title: "辞",
type: 1,
min: 2789,
max: 2792
}, {
id: 1921,
title: "次",
type: 1,
min: 2793,
max: 2796
}, {
id: 1922,
title: "刺",
type: 1,
min: 2797,
max: 2800
}, {
id: 1923,
title: "赐",
type: 1,
min: 2801,
max: 2804
}, {
id: 1924,
title: "枞",
type: 1,
min: 2805,
max: 2808
}, {
id: 1925,
title: "琮",
type: 1,
min: 2809,
max: 2812
}, {
id: 1926,
title: "賨",
type: 1,
min: 2813,
max: 2816
}, {
id: 1927,
title: "粗",
type: 1,
min: 2817,
max: 2820
}, {
id: 1928,
title: "醋",
type: 1,
min: 2821,
max: 2824
}, {
id: 1929,
title: "爨",
type: 1,
min: 2825,
max: 2828
}, {
id: 1930,
title: "催",
type: 1,
min: 2829,
max: 2832
}, {
id: 1931,
title: "摧",
type: 1,
min: 2833,
max: 2836
}, {
id: 1932,
title: "翠",
type: 1,
min: 2837,
max: 2840
}, {
id: 1933,
title: "村",
type: 1,
min: 2841,
max: 2844
}, {
id: 1934,
title: "存",
type: 1,
min: 2845,
max: 2848
}, {
id: 1935,
title: "寸",
type: 1,
min: 2849,
max: 2852
}, {
id: 1936,
title: "厝",
type: 1,
min: 2853,
max: 2856
}, {
id: 1937,
title: "错",
type: 1,
min: 2857,
max: 2860
}, {
id: 1938,
title: "搭",
type: 1,
min: 2861,
max: 2864
}, {
id: 1939,
title: "答",
type: 1,
min: 2865,
max: 2868
}, {
id: 1940,
title: "打",
type: 1,
min: 2869,
max: 2872
}, {
id: 1941,
title: "大",
type: 1,
min: 2873,
max: 2876
}, {
id: 1942,
title: "歹",
type: 1,
min: 2877,
max: 2880
}, {
id: 1943,
title: "傣",
type: 1,
min: 2881,
max: 2884
}, {
id: 1944,
title: "逮",
type: 1,
min: 2885,
max: 2888
}, {
id: 1945,
title: "带",
type: 1,
min: 2889,
max: 2892
}, {
id: 1946,
title: "岱",
type: 1,
min: 2893,
max: 2896
}, {
id: 1947,
title: "待",
type: 1,
min: 2897,
max: 2900
}, {
id: 1948,
title: "耼",
type: 1,
min: 2901,
max: 2904
}, {
id: 1949,
title: "郸",
type: 1,
min: 2905,
max: 2908
}, {
id: 1950,
title: "聃",
type: 1,
min: 2909,
max: 2912
}, {
id: 1951,
title: "亶",
type: 1,
min: 2913,
max: 2916
}, {
id: 1952,
title: "胆",
type: 1,
min: 2917,
max: 2920
}, {
id: 1953,
title: "旦",
type: 1,
min: 2921,
max: 2924
}, {
id: 1954,
title: "但",
type: 1,
min: 2925,
max: 2928
}, {
id: 1955,
title: "惮",
type: 1,
min: 2929,
max: 2932
}, {
id: 1956,
title: "当",
type: 1,
min: 2933,
max: 2936
}, {
id: 1957,
title: "当涂",
type: 1,
min: 2937,
max: 2940
}, {
id: 1958,
title: "导",
type: 1,
min: 2941,
max: 2944
}, {
id: 1959,
title: "到",
type: 1,
min: 2945,
max: 2948
}, {
id: 1960,
title: "悼",
type: 1,
min: 2949,
max: 2952
}, {
id: 1961,
title: "稻",
type: 1,
min: 2953,
max: 2956
}, {
id: 1962,
title: "得",
type: 1,
min: 2957,
max: 2960
}, {
id: 1963,
title: "隥",
type: 1,
min: 2961,
max: 2964
}, {
id: 1964,
title: "氐",
type: 1,
min: 2965,
max: 2968
}, {
id: 1965,
title: "堤",
type: 1,
min: 2969,
max: 2972
}, {
id: 1966,
title: "隄",
type: 1,
min: 2973,
max: 2976
}, {
id: 1967,
title: "迪",
type: 1,
min: 2977,
max: 2980
}, {
id: 1968,
title: "荻",
type: 1,
min: 2981,
max: 2984
}, {
id: 1969,
title: "涤",
type: 1,
min: 2985,
max: 2988
}, {
id: 1970,
title: "地",
type: 1,
min: 2989,
max: 2992
}, {
id: 1971,
title: "弟",
type: 1,
min: 2993,
max: 2996
}, {
id: 1972,
title: "蒂",
type: 1,
min: 2997,
max: 3e3
}, {
id: 1973,
title: "棣",
type: 1,
min: 3001,
max: 3004
}, {
id: 1974,
title: "颠",
type: 1,
min: 3005,
max: 3008
}, {
id: 1975,
title: "滇",
type: 1,
min: 3009,
max: 3012
}, {
id: 1976,
title: "点",
type: 1,
min: 3013,
max: 3016
}, {
id: 1977,
title: "店",
type: 1,
min: 3017,
max: 3020
}, {
id: 1978,
title: "甸",
type: 1,
min: 3021,
max: 3024
}, {
id: 1979,
title: "佃",
type: 1,
min: 3025,
max: 3028
}, {
id: 1980,
title: "淀",
type: 1,
min: 3029,
max: 3032
}, {
id: 1981,
title: "貂",
type: 1,
min: 3033,
max: 3036
}, {
id: 1982,
title: "凋",
type: 1,
min: 3037,
max: 3040
}, {
id: 1983,
title: "钓",
type: 1,
min: 3041,
max: 3044
}, {
id: 1984,
title: "牒",
type: 1,
min: 3045,
max: 3048
}, {
id: 1985,
title: "东王",
type: 1,
min: 3049,
max: 3052
}, {
id: 1986,
title: "东乡",
type: 1,
min: 3053,
max: 3056
}, {
id: 1987,
title: "东阳",
type: 1,
min: 3057,
max: 3060
}, {
id: 1988,
title: "洞",
type: 1,
min: 3061,
max: 3064
}, {
id: 1989,
title: "冻",
type: 1,
min: 3065,
max: 3068
}, {
id: 1990,
title: "督",
type: 1,
min: 3069,
max: 3072
}, {
id: 1991,
title: "笃",
type: 1,
min: 3073,
max: 3076
}, {
id: 1992,
title: "渡",
type: 1,
min: 3077,
max: 3080
}, {
id: 1993,
title: "断",
type: 1,
min: 3081,
max: 3084
}, {
id: 1994,
title: "堆",
type: 1,
min: 3085,
max: 3088
}, {
id: 1995,
title: "兑",
type: 1,
min: 3089,
max: 3092
}, {
id: 1996,
title: "祋",
type: 1,
min: 3093,
max: 3096
}, {
id: 1997,
title: "墩",
type: 1,
min: 3097,
max: 3100
}, {
id: 1998,
title: "铎",
type: 1,
min: 3101,
max: 3104
}, {
id: 1999,
title: "铎遏",
type: 1,
min: 3105,
max: 3108
}, {
id: 2e3,
title: "夺",
type: 1,
min: 3109,
max: 3112
}, {
id: 2001,
title: "蛾",
type: 1,
min: 3113,
max: 3116
}, {
id: 2002,
title: "峨",
type: 1,
min: 3117,
max: 3120
}, {
id: 2003,
title: "谔",
type: 1,
min: 3121,
max: 3124
}, {
id: 2004,
title: "恩",
type: 1,
min: 3125,
max: 3128
}, {
id: 2005,
title: "耏",
type: 1,
min: 3129,
max: 3132
}, {
id: 2006,
title: "迩",
type: 1,
min: 3133,
max: 3136
}, {
id: 2007,
title: "贰",
type: 1,
min: 3137,
max: 3140
}, {
id: 2008,
title: "发",
type: 1,
min: 3141,
max: 3144
}, {
id: 2009,
title: "髪",
type: 1,
min: 3145,
max: 3148
}, {
id: 2010,
title: "反",
type: 1,
min: 3149,
max: 3152
}, {
id: 2011,
title: "汳",
type: 1,
min: 3153,
max: 3156
}, {
id: 2012,
title: "範",
type: 1,
min: 3157,
max: 3160
}, {
id: 2013,
title: "梵",
type: 1,
min: 3161,
max: 3164
}, {
id: 2014,
title: "防",
type: 1,
min: 3165,
max: 3168
}, {
id: 2015,
title: "鲂",
type: 1,
min: 3169,
max: 3172
}, {
id: 2016,
title: "放",
type: 1,
min: 3173,
max: 3176
}, {
id: 2017,
title: "飞",
type: 1,
min: 3177,
max: 3180
}, {
id: 2018,
title: "扉",
type: 1,
min: 3181,
max: 3184
}, {
id: 2019,
title: "肥",
type: 1,
min: 3185,
max: 3188
}, {
id: 2020,
title: "纷",
type: 1,
min: 3189,
max: 3192
}, {
id: 2021,
title: "棼",
type: 1,
min: 3193,
max: 3196
}, {
id: 2022,
title: "蚡",
type: 1,
min: 3197,
max: 3200
}, {
id: 2023,
title: "坟",
type: 1,
min: 3201,
max: 3204
}, {
id: 2024,
title: "峰",
type: 1,
min: 3205,
max: 3208
}, {
id: 2025,
title: "不",
type: 1,
min: 3209,
max: 3212
}, {
id: 2026,
title: "伕",
type: 1,
min: 3213,
max: 3216
}, {
id: 2027,
title: "敷",
type: 1,
min: 3217,
max: 3220
}, {
id: 2028,
title: "夫",
type: 1,
min: 3221,
max: 3224
}, {
id: 2029,
title: "宓",
type: 1,
min: 3225,
max: 3228
}, {
id: 2030,
title: "孚",
type: 1,
min: 3229,
max: 3232
}, {
id: 2031,
title: "凫",
type: 1,
min: 3233,
max: 3236
}, {
id: 2032,
title: "浮",
type: 1,
min: 3237,
max: 3240
}, {
id: 2033,
title: "涪",
type: 1,
min: 3241,
max: 3244
}, {
id: 2034,
title: "",
type: 1,
min: 3245,
max: 3248
}, {
id: 2035,
title: "拂",
type: 1,
min: 3249,
max: 3252
}, {
id: 2036,
title: "澓",
type: 1,
min: 3253,
max: 3256
}, {
id: 2037,
title: "父",
type: 1,
min: 3257,
max: 3260
}, {
id: 2038,
title: "负",
type: 1,
min: 3261,
max: 3264
}, {
id: 2039,
title: "阜",
type: 1,
min: 3265,
max: 3268
}, {
id: 2040,
title: "妇",
type: 1,
min: 3269,
max: 3272
}, {
id: 2041,
title: "附",
type: 1,
min: 3273,
max: 3276
}, {
id: 2042,
title: "赴",
type: 1,
min: 3277,
max: 3280
}, {
id: 2043,
title: "副",
type: 1,
min: 3281,
max: 3284
}, {
id: 2044,
title: "腹",
type: 1,
min: 3285,
max: 3288
}, {
id: 2045,
title: "旮",
type: 1,
min: 3289,
max: 3292
}, {
id: 2046,
title: "尕",
type: 1,
min: 3293,
max: 3296
}, {
id: 2047,
title: "丐",
type: 1,
min: 3297,
max: 3300
}, {
id: 2048,
title: "概",
type: 1,
min: 3301,
max: 3304
}, {
id: 2049,
title: "竿",
type: 1,
min: 3305,
max: 3308
}, {
id: 2050,
title: "乾",
type: 1,
min: 3309,
max: 3312
}, {
id: 2051,
title: "赶",
type: 1,
min: 3313,
max: 3316
}, {
id: 2052,
title: "澉",
type: 1,
min: 3317,
max: 3320
}, {
id: 2053,
title: "赣",
type: 1,
min: 3321,
max: 3324
}, {
id: 2054,
title: "羔",
type: 1,
min: 3325,
max: 3328
}, {
id: 2055,
title: "杲",
type: 1,
min: 3329,
max: 3332
}, {
id: 2056,
title: "告",
type: 1,
min: 3333,
max: 3336
}, {
id: 2057,
title: "哥",
type: 1,
min: 3337,
max: 3340
}, {
id: 2058,
title: "鬲",
type: 1,
min: 3341,
max: 3344
}, {
id: 2059,
title: "搁",
type: 1,
min: 3345,
max: 3348
}, {
id: 2060,
title: "割",
type: 1,
min: 3349,
max: 3352
}, {
id: 2061,
title: "革",
type: 1,
min: 3353,
max: 3356
}, {
id: 2062,
title: "佮",
type: 1,
min: 3357,
max: 3360
}, {
id: 2063,
title: "格",
type: 1,
min: 3361,
max: 3364
}, {
id: 2064,
title: "颌",
type: 1,
min: 3365,
max: 3368
}, {
id: 2065,
title: "鬲",
type: 1,
min: 3369,
max: 3372
}, {
id: 2066,
title: "箇",
type: 1,
min: 3373,
max: 3376
}, {
id: 2067,
title: "根",
type: 1,
min: 3377,
max: 3380
}, {
id: 2068,
title: "亘",
type: 1,
min: 3381,
max: 3384
}, {
id: 2069,
title: "艮",
type: 1,
min: 3385,
max: 3388
}, {
id: 2070,
title: "耕",
type: 1,
min: 3389,
max: 3392
}, {
id: 2071,
title: "郠",
type: 1,
min: 3393,
max: 3396
}, {
id: 2072,
title: "梗",
type: 1,
min: 3397,
max: 3400
}, {
id: 2073,
title: "工",
type: 1,
min: 3401,
max: 3404
}, {
id: 2074,
title: "公伯",
type: 1,
min: 3405,
max: 3408
}, {
id: 2075,
title: "公孟",
type: 1,
min: 3409,
max: 3412
}, {
id: 2076,
title: "公上",
type: 1,
min: 3413,
max: 3416
}, {
id: 2077,
title: "公师",
type: 1,
min: 3417,
max: 3420
}, {
id: 2078,
title: "公输",
type: 1,
min: 3421,
max: 3424
}, {
id: 2079,
title: "公梼",
type: 1,
min: 3425,
max: 3428
}, {
id: 2080,
title: "公绪",
type: 1,
min: 3429,
max: 3432
}, {
id: 2081,
title: "公玉",
type: 1,
min: 3433,
max: 3436
}, {
id: 2082,
title: "公族",
type: 1,
min: 3437,
max: 3440
}, {
id: 2083,
title: "公祖",
type: 1,
min: 3441,
max: 3444
}, {
id: 2084,
title: "躬",
type: 1,
min: 3445,
max: 3448
}, {
id: 2085,
title: "供",
type: 1,
min: 3449,
max: 3452
}, {
id: 2086,
title: "沟",
type: 1,
min: 3453,
max: 3456
}, {
id: 2087,
title: "垢",
type: 1,
min: 3457,
max: 3460
}, {
id: 2088,
title: "孤",
type: 1,
min: 3461,
max: 3464
}, {
id: 2089,
title: "辜",
type: 1,
min: 3465,
max: 3468
}, {
id: 2090,
title: "菇",
type: 1,
min: 3469,
max: 3472
}, {
id: 2091,
title: "觚",
type: 1,
min: 3473,
max: 3476
}, {
id: 2092,
title: "骨",
type: 1,
min: 3477,
max: 3480
}, {
id: 2093,
title: "蛊",
type: 1,
min: 3481,
max: 3484
}, {
id: 2094,
title: "故",
type: 1,
min: 3485,
max: 3488
}, {
id: 2095,
title: "雇",
type: 1,
min: 3489,
max: 3492
}, {
id: 2096,
title: "瓜",
type: 1,
min: 3493,
max: 3496
}, {
id: 2097,
title: "拐",
type: 1,
min: 3497,
max: 3500
}, {
id: 2098,
title: "怪",
type: 1,
min: 3501,
max: 3504
}, {
id: 2099,
title: "冠",
type: 1,
min: 3505,
max: 3508
}, {
id: 2100,
title: "筦",
type: 1,
min: 3509,
max: 3512
}, {
id: 2101,
title: "毌",
type: 1,
min: 3513,
max: 3516
}, {
id: 2102,
title: "灌",
type: 1,
min: 3517,
max: 3520
}, {
id: 2103,
title: "圭",
type: 1,
min: 3521,
max: 3524
}, {
id: 2104,
title: "妫",
type: 1,
min: 3525,
max: 3528
}, {
id: 2105,
title: "邽",
type: 1,
min: 3529,
max: 3532
}, {
id: 2106,
title: "鬼",
type: 1,
min: 3533,
max: 3536
}, {
id: 2107,
title: "癸",
type: 1,
min: 3537,
max: 3540
}, {
id: 2108,
title: "炅",
type: 1,
min: 3541,
max: 3544
}, {
id: 2109,
title: "炔",
type: 1,
min: 3545,
max: 3548
}, {
id: 2110,
title: "跪",
type: 1,
min: 3549,
max: 3552
}, {
id: 2111,
title: "衮",
type: 1,
min: 3553,
max: 3556
}, {
id: 2112,
title: "滚",
type: 1,
min: 3557,
max: 3560
}, {
id: 2113,
title: "亥",
type: 1,
min: 3561,
max: 3564
}, {
id: 2114,
title: "憨",
type: 1,
min: 3565,
max: 3568
}, {
id: 2115,
title: "邗",
type: 1,
min: 3569,
max: 3572
}, {
id: 2116,
title: "含",
type: 1,
min: 3573,
max: 3576
}, {
id: 2117,
title: "邯",
type: 1,
min: 3577,
max: 3580
}, {
id: 2118,
title: "邯郸",
type: 1,
min: 3581,
max: 3584
}, {
id: 2119,
title: "函",
type: 1,
min: 3585,
max: 3588
}, {
id: 2120,
title: "罕",
type: 1,
min: 3589,
max: 3592
}, {
id: 2121,
title: "罕父",
type: 1,
min: 3593,
max: 3596
}, {
id: 2122,
title: "喊",
type: 1,
min: 3597,
max: 3600
}, {
id: 2123,
title: "汗",
type: 1,
min: 3601,
max: 3604
}, {
id: 2124,
title: "駻",
type: 1,
min: 3605,
max: 3608
}, {
id: 2125,
title: "幹",
type: 1,
min: 3609,
max: 3612
}, {
id: 2126,
title: "旰",
type: 1,
min: 3613,
max: 3616
}, {
id: 2127,
title: "撖",
type: 1,
min: 3617,
max: 3620
}, {
id: 2128,
title: "翰",
type: 1,
min: 3621,
max: 3624
}, {
id: 2129,
title: "航",
type: 1,
min: 3625,
max: 3628
}, {
id: 2130,
title: "毫",
type: 1,
min: 3629,
max: 3632
}, {
id: 2131,
title: "豪",
type: 1,
min: 3633,
max: 3636
}, {
id: 2132,
title: "昊",
type: 1,
min: 3637,
max: 3640
}, {
id: 2133,
title: "浩生",
type: 1,
min: 3641,
max: 3644
}, {
id: 2134,
title: "浩星",
type: 1,
min: 3645,
max: 3648
}, {
id: 2135,
title: "耗",
type: 1,
min: 3649,
max: 3652
}, {
id: 2136,
title: "号",
type: 1,
min: 3653,
max: 3656
}, {
id: 2137,
title: "滈",
type: 1,
min: 3657,
max: 3660
}, {
id: 2138,
title: "皓",
type: 1,
min: 3661,
max: 3664
}, {
id: 2139,
title: "合博",
type: 1,
min: 3665,
max: 3668
}, {
id: 2140,
title: "盍",
type: 1,
min: 3669,
max: 3672
}, {
id: 2141,
title: "阖",
type: 1,
min: 3673,
max: 3676
}, {
id: 2142,
title: "荷",
type: 1,
min: 3677,
max: 3680
}, {
id: 2143,
title: "鹤",
type: 1,
min: 3681,
max: 3684
}, {
id: 2144,
title: "很",
type: 1,
min: 3685,
max: 3688
}, {
id: 2145,
title: "亨",
type: 1,
min: 3689,
max: 3692
}, {
id: 2146,
title: "訇",
type: 1,
min: 3693,
max: 3696
}, {
id: 2147,
title: "闳",
type: 1,
min: 3697,
max: 3700
}, {
id: 2148,
title: "郈",
type: 1,
min: 3701,
max: 3704
}, {
id: 2149,
title: "虖",
type: 1,
min: 3705,
max: 3708
}, {
id: 2150,
title: "轷",
type: 1,
min: 3709,
max: 3712
}, {
id: 2151,
title: "胡母",
type: 1,
min: 3713,
max: 3716
}, {
id: 2152,
title: "壶",
type: 1,
min: 3717,
max: 3720
}, {
id: 2153,
title: "鄠",
type: 1,
min: 3721,
max: 3724
}, {
id: 2154,
title: "祜",
type: 1,
min: 3725,
max: 3728
}, {
id: 2155,
title: "淮",
type: 1,
min: 3729,
max: 3732
}, {
id: 2156,
title: "欢",
type: 1,
min: 3733,
max: 3736
}, {
id: 2157,
title: "郇",
type: 1,
min: 3737,
max: 3740
}, {
id: 2158,
title: "儇",
type: 1,
min: 3741,
max: 3744
}, {
id: 2159,
title: "浣",
type: 1,
min: 3745,
max: 3748
}, {
id: 2160,
title: "奂",
type: 1,
min: 3749,
max: 3752
}, {
id: 2161,
title: "涣",
type: 1,
min: 3753,
max: 3756
}, {
id: 2162,
title: "豢龙",
type: 1,
min: 3757,
max: 3760
}, {
id: 2163,
title: "荒",
type: 1,
min: 3761,
max: 3764
}, {
id: 2164,
title: "湟",
type: 1,
min: 3765,
max: 3768
}, {
id: 2165,
title: "晃",
type: 1,
min: 3769,
max: 3772
}, {
id: 2166,
title: "讳",
type: 1,
min: 3773,
max: 3776
}, {
id: 2167,
title: "昏",
type: 1,
min: 3777,
max: 3780
}, {
id: 2168,
title: "混",
type: 1,
min: 3781,
max: 3784
}, {
id: 2169,
title: "获",
type: 1,
min: 3785,
max: 3788
}, {
id: 2170,
title: "货",
type: 1,
min: 3789,
max: 3792
}, {
id: 2171,
title: "几",
type: 1,
min: 3793,
max: 3796
}, {
id: 2172,
title: "鸡",
type: 1,
min: 3797,
max: 3800
}, {
id: 2173,
title: "箕",
type: 1,
min: 3801,
max: 3804
}, {
id: 2174,
title: "畿",
type: 1,
min: 3805,
max: 3808
}, {
id: 2175,
title: "羁",
type: 1,
min: 3809,
max: 3812
}, {
id: 2176,
title: "激",
type: 1,
min: 3813,
max: 3816
}, {
id: 2177,
title: "伋",
type: 1,
min: 3817,
max: 3820
}, {
id: 2178,
title: "极",
type: 1,
min: 3821,
max: 3824
}, {
id: 2179,
title: "疾",
type: 1,
min: 3825,
max: 3828
}, {
id: 2180,
title: "即",
type: 1,
min: 3829,
max: 3832
}, {
id: 2181,
title: "棘",
type: 1,
min: 3833,
max: 3836
}, {
id: 2182,
title: "集",
type: 1,
min: 3837,
max: 3840
}, {
id: 2183,
title: "藉",
type: 1,
min: 3841,
max: 3844
}, {
id: 2184,
title: "级",
type: 1,
min: 3845,
max: 3848
}, {
id: 2185,
title: "剂",
type: 1,
min: 3849,
max: 3852
}, {
id: 2186,
title: "既",
type: 1,
min: 3853,
max: 3856
}, {
id: 2187,
title: "稷",
type: 1,
min: 3857,
max: 3860
}, {
id: 2188,
title: "葭",
type: 1,
min: 3861,
max: 3864
}, {
id: 2189,
title: "荚",
type: 1,
min: 3865,
max: 3868
}, {
id: 2190,
title: "驾",
type: 1,
min: 3869,
max: 3872
}, {
id: 2191,
title: "尖",
type: 1,
min: 3873,
max: 3876
}, {
id: 2192,
title: "蕑",
type: 1,
min: 3877,
max: 3880
}, {
id: 2193,
title: "兼",
type: 1,
min: 3881,
max: 3884
}, {
id: 2194,
title: "肩",
type: 1,
min: 3885,
max: 3888
}, {
id: 2195,
title: "篯",
type: 1,
min: 3889,
max: 3892
}, {
id: 2196,
title: "翦",
type: 1,
min: 3893,
max: 3896
}, {
id: 2197,
title: "剪",
type: 1,
min: 3897,
max: 3900
}, {
id: 2198,
title: "謇",
type: 1,
min: 3901,
max: 3904
}, {
id: 2199,
title: "寋",
type: 1,
min: 3905,
max: 3908
}, {
id: 2200,
title: "剑",
type: 1,
min: 3909,
max: 3912
}, {
id: 2201,
title: "箭",
type: 1,
min: 3913,
max: 3916
}, {
id: 2202,
title: "谏",
type: 1,
min: 3917,
max: 3920
}, {
id: 2203,
title: "健",
type: 1,
min: 3921,
max: 3924
}, {
id: 2204,
title: "瞷",
type: 1,
min: 3925,
max: 3928
}, {
id: 2205,
title: "讲",
type: 1,
min: 3929,
max: 3932
}, {
id: 2206,
title: "绛",
type: 1,
min: 3933,
max: 3936
}, {
id: 2207,
title: "郊",
type: 1,
min: 3937,
max: 3940
}, {
id: 2208,
title: "浇",
type: 1,
min: 3941,
max: 3944
}, {
id: 2209,
title: "娇",
type: 1,
min: 3945,
max: 3948
}, {
id: 2210,
title: "佼",
type: 1,
min: 3949,
max: 3952
}, {
id: 2211,
title: "绞",
type: 1,
min: 3953,
max: 3956
}, {
id: 2212,
title: "皎",
type: 1,
min: 3957,
max: 3960
}, {
id: 2213,
title: "敫",
type: 1,
min: 3961,
max: 3964
}, {
id: 2214,
title: "皦",
type: 1,
min: 3965,
max: 3968
}, {
id: 2215,
title: "节",
type: 1,
min: 3969,
max: 3972
}, {
id: 2216,
title: "洁",
type: 1,
min: 3973,
max: 3976
}, {
id: 2217,
title: "桀",
type: 1,
min: 3977,
max: 3980
}, {
id: 2218,
title: "结",
type: 1,
min: 3981,
max: 3984
}, {
id: 2219,
title: "秸",
type: 1,
min: 3985,
max: 3988
}, {
id: 2220,
title: "劫",
type: 1,
min: 3989,
max: 3992
}, {
id: 2221,
title: "捷",
type: 1,
min: 3993,
max: 3996
}, {
id: 2222,
title: "竭",
type: 1,
min: 3997,
max: 4e3
}, {
id: 2223,
title: "截",
type: 1,
min: 4001,
max: 4004
}, {
id: 2224,
title: "姐",
type: 1,
min: 4005,
max: 4008
}, {
id: 2225,
title: "介",
type: 1,
min: 4009,
max: 4012
}, {
id: 2226,
title: "戒",
type: 1,
min: 4013,
max: 4016
}, {
id: 2227,
title: "届",
type: 1,
min: 4017,
max: 4020
}, {
id: 2228,
title: "斤",
type: 1,
min: 4021,
max: 4024
}, {
id: 2229,
title: "今",
type: 1,
min: 4025,
max: 4028
}, {
id: 2230,
title: "津",
type: 1,
min: 4029,
max: 4032
}, {
id: 2231,
title: "谨",
type: 1,
min: 4033,
max: 4036
}, {
id: 2232,
title: "锦",
type: 1,
min: 4037,
max: 4040
}, {
id: 2233,
title: "近",
type: 1,
min: 4041,
max: 4044
}, {
id: 2234,
title: "禁",
type: 1,
min: 4045,
max: 4048
}, {
id: 2235,
title: "泾",
type: 1,
min: 4049,
max: 4052
}, {
id: 2236,
title: "陉",
type: 1,
min: 4053,
max: 4056
}, {
id: 2237,
title: "陉阳",
type: 1,
min: 4057,
max: 4060
}, {
id: 2238,
title: "精",
type: 1,
min: 4061,
max: 4064
}, {
id: 2239,
title: "晶",
type: 1,
min: 4065,
max: 4068
}, {
id: 2240,
title: "茎",
type: 1,
min: 4069,
max: 4072
}, {
id: 2241,
title: "竟",
type: 1,
min: 4073,
max: 4076
}, {
id: 2242,
title: "径",
type: 1,
min: 4077,
max: 4080
}, {
id: 2243,
title: "净",
type: 1,
min: 4081,
max: 4084
}, {
id: 2244,
title: "境",
type: 1,
min: 4085,
max: 4088
}, {
id: 2245,
title: "冏",
type: 1,
min: 4089,
max: 4092
}, {
id: 2246,
title: "迥",
type: 1,
min: 4093,
max: 4096
}, {
id: 2247,
title: "牞",
type: 1,
min: 4097,
max: 4100
}, {
id: 2248,
title: "纠",
type: 1,
min: 4101,
max: 4104
}, {
id: 2249,
title: "鸠",
type: 1,
min: 4105,
max: 4108
}, {
id: 2250,
title: "摎",
type: 1,
min: 4109,
max: 4112
}, {
id: 2251,
title: "樛",
type: 1,
min: 4113,
max: 4116
}, {
id: 2252,
title: "九",
type: 1,
min: 4117,
max: 4120
}, {
id: 2253,
title: "九方",
type: 1,
min: 4121,
max: 4124
}, {
id: 2254,
title: "韭",
type: 1,
min: 4125,
max: 4128
}, {
id: 2255,
title: "旧",
type: 1,
min: 4129,
max: 4132
}, {
id: 2256,
title: "咎",
type: 1,
min: 4133,
max: 4136
}, {
id: 2257,
title: "臼",
type: 1,
min: 4137,
max: 4140
}, {
id: 2258,
title: "苴",
type: 1,
min: 4141,
max: 4144
}, {
id: 2259,
title: "驹",
type: 1,
min: 4145,
max: 4148
}, {
id: 2260,
title: "雎",
type: 1,
min: 4149,
max: 4152
}, {
id: 2261,
title: "娵",
type: 1,
min: 4153,
max: 4156
}, {
id: 2262,
title: "掬",
type: 1,
min: 4157,
max: 4160
}, {
id: 2263,
title: "局",
type: 1,
min: 4161,
max: 4164
}, {
id: 2264,
title: "菊",
type: 1,
min: 4165,
max: 4168
}, {
id: 2265,
title: "橘",
type: 1,
min: 4169,
max: 4172
}, {
id: 2266,
title: "莒",
type: 1,
min: 4173,
max: 4176
}, {
id: 2267,
title: "沮",
type: 1,
min: 4177,
max: 4180
}, {
id: 2268,
title: "矩",
type: 1,
min: 4181,
max: 4184
}, {
id: 2269,
title: "钜",
type: 1,
min: 4185,
max: 4188
}, {
id: 2270,
title: "聚",
type: 1,
min: 4189,
max: 4192
}, {
id: 2271,
title: "涓",
type: 1,
min: 4193,
max: 4196
}, {
id: 2272,
title: "娟",
type: 1,
min: 4197,
max: 4200
}, {
id: 2273,
title: "圈",
type: 1,
min: 4201,
max: 4204
}, {
id: 2274,
title: "眷",
type: 1,
min: 4205,
max: 4208
}, {
id: 2275,
title: "鄄",
type: 1,
min: 4209,
max: 4212
}, {
id: 2276,
title: "觉",
type: 1,
min: 4213,
max: 4216
}, {
id: 2277,
title: "角里",
type: 1,
min: 4217,
max: 4220
}, {
id: 2278,
title: "厥",
type: 1,
min: 4221,
max: 4224
}, {
id: 2279,
title: "傕",
type: 1,
min: 4225,
max: 4228
}, {
id: 2280,
title: "矍",
type: 1,
min: 4229,
max: 4232
}, {
id: 2281,
title: "军",
type: 1,
min: 4233,
max: 4236
}, {
id: 2282,
title: "均",
type: 1,
min: 4237,
max: 4240
}, {
id: 2283,
title: "君",
type: 1,
min: 4241,
max: 4244
}, {
id: 2284,
title: "钧",
type: 1,
min: 4245,
max: 4248
}, {
id: 2285,
title: "郡",
type: 1,
min: 4249,
max: 4252
}, {
id: 2286,
title: "俊",
type: 1,
min: 4253,
max: 4256
}, {
id: 2287,
title: "陖",
type: 1,
min: 4257,
max: 4260
}, {
id: 2288,
title: "菌",
type: 1,
min: 4261,
max: 4264
}, {
id: 2289,
title: "浚",
type: 1,
min: 4265,
max: 4268
}, {
id: 2290,
title: "卡",
type: 1,
min: 4269,
max: 4272
}, {
id: 2291,
title: "开",
type: 1,
min: 4273,
max: 4276
}, {
id: 2292,
title: "凯",
type: 1,
min: 4277,
max: 4280
}, {
id: 2293,
title: "恺",
type: 1,
min: 4281,
max: 4284
}, {
id: 2294,
title: "勘",
type: 1,
min: 4285,
max: 4288
}, {
id: 2295,
title: "伉",
type: 1,
min: 4289,
max: 4292
}, {
id: 2296,
title: "苛",
type: 1,
min: 4293,
max: 4296
}, {
id: 2297,
title: "恪",
type: 1,
min: 4297,
max: 4300
}, {
id: 2298,
title: "肯",
type: 1,
min: 4301,
max: 4304
}, {
id: 2299,
title: "涳",
type: 1,
min: 4305,
max: 4308
}, {
id: 2300,
title: "口",
type: 1,
min: 4309,
max: 4312
}, {
id: 2301,
title: "扣",
type: 1,
min: 4313,
max: 4316
}, {
id: 2302,
title: "轱",
type: 1,
min: 4317,
max: 4320
}, {
id: 2303,
title: "夸",
type: 1,
min: 4321,
max: 4324
}, {
id: 2304,
title: "蒉",
type: 1,
min: 4325,
max: 4328
}, {
id: 2305,
title: "快",
type: 1,
min: 4329,
max: 4332
}, {
id: 2306,
title: "会",
type: 1,
min: 4333,
max: 4336
}, {
id: 2307,
title: "侩",
type: 1,
min: 4337,
max: 4340
}, {
id: 2308,
title: "郐",
type: 1,
min: 4341,
max: 4344
}, {
id: 2309,
title: "桧",
type: 1,
min: 4345,
max: 4348
}, {
id: 2310,
title: "宽",
type: 1,
min: 4349,
max: 4352
}, {
id: 2311,
title: "狂",
type: 1,
min: 4353,
max: 4356
}, {
id: 2312,
title: "贶",
type: 1,
min: 4357,
max: 4360
}, {
id: 2313,
title: "悝",
type: 1,
min: 4361,
max: 4364
}, {
id: 2314,
title: "鮭",
type: 1,
min: 4365,
max: 4368
}, {
id: 2315,
title: "奎",
type: 1,
min: 4369,
max: 4372
}, {
id: 2316,
title: "葵",
type: 1,
min: 4373,
max: 4376
}, {
id: 2317,
title: "睽",
type: 1,
min: 4377,
max: 4380
}, {
id: 2318,
title: "傀",
type: 1,
min: 4381,
max: 4384
}, {
id: 2319,
title: "匮",
type: 1,
min: 4385,
max: 4388
}, {
id: 2320,
title: "昆",
type: 1,
min: 4389,
max: 4392
}, {
id: 2321,
title: "阔",
type: 1,
min: 4393,
max: 4396
}, {
id: 2322,
title: "喇",
type: 1,
min: 4397,
max: 4400
}, {
id: 2323,
title: "蜡",
type: 1,
min: 4401,
max: 4404
}, {
id: 2324,
title: "郲",
type: 1,
min: 4405,
max: 4408
}, {
id: 2325,
title: "览",
type: 1,
min: 4409,
max: 4412
}, {
id: 2326,
title: "阆",
type: 1,
min: 4413,
max: 4416
}, {
id: 2327,
title: "嫪",
type: 1,
min: 4417,
max: 4420
}, {
id: 2328,
title: "累",
type: 1,
min: 4421,
max: 4424
}, {
id: 2329,
title: "嫘",
type: 1,
min: 4425,
max: 4428
}, {
id: 2330,
title: "纍",
type: 1,
min: 4429,
max: 4432
}, {
id: 2331,
title: "纍和",
type: 1,
min: 4433,
max: 4436
}, {
id: 2332,
title: "垒",
type: 1,
min: 4437,
max: 4440
}, {
id: 2333,
title: "楞",
type: 1,
min: 4441,
max: 4444
}, {
id: 2334,
title: "离",
type: 1,
min: 4445,
max: 4448
}, {
id: 2335,
title: "厘",
type: 1,
min: 4449,
max: 4452
}, {
id: 2336,
title: "狸",
type: 1,
min: 4453,
max: 4456
}, {
id: 2337,
title: "犁",
type: 1,
min: 4457,
max: 4460
}, {
id: 2338,
title: "孋",
type: 1,
min: 4461,
max: 4464
}, {
id: 2339,
title: "藜",
type: 1,
min: 4465,
max: 4468
}, {
id: 2340,
title: "礼",
type: 1,
min: 4469,
max: 4472
}, {
id: 2341,
title: "澧",
type: 1,
min: 4473,
max: 4476
}, {
id: 2342,
title: "荔",
type: 1,
min: 4477,
max: 4480
}, {
id: 2343,
title: "恋",
type: 1,
min: 4481,
max: 4484
}, {
id: 2344,
title: "凉",
type: 1,
min: 4485,
max: 4488
}, {
id: 2345,
title: "良",
type: 1,
min: 4489,
max: 4492
}, {
id: 2346,
title: "两",
type: 1,
min: 4493,
max: 4496
}, {
id: 2347,
title: "谅",
type: 1,
min: 4497,
max: 4500
}, {
id: 2348,
title: "亮",
type: 1,
min: 4501,
max: 4504
}, {
id: 2349,
title: "辽",
type: 1,
min: 4505,
max: 4508
}, {
id: 2350,
title: "僚",
type: 1,
min: 4509,
max: 4512
}, {
id: 2351,
title: "聊",
type: 1,
min: 4513,
max: 4516
}, {
id: 2352,
title: "寥",
type: 1,
min: 4517,
max: 4520
}, {
id: 2353,
title: "蓼",
type: 1,
min: 4521,
max: 4524
}, {
id: 2354,
title: "烈",
type: 1,
min: 4525,
max: 4528
}, {
id: 2355,
title: "劣",
type: 1,
min: 4529,
max: 4532
}, {
id: 2356,
title: "冽",
type: 1,
min: 4533,
max: 4536
}, {
id: 2357,
title: "临",
type: 1,
min: 4537,
max: 4540
}, {
id: 2358,
title: "麟",
type: 1,
min: 4541,
max: 4544
}, {
id: 2359,
title: "赁",
type: 1,
min: 4545,
max: 4548
}, {
id: 2360,
title: "伶",
type: 1,
min: 4549,
max: 4552
}, {
id: 2361,
title: "泠",
type: 1,
min: 4553,
max: 4556
}, {
id: 2362,
title: "灵姑",
type: 1,
min: 4557,
max: 4560
}, {
id: 2363,
title: "领",
type: 1,
min: 4561,
max: 4564
}, {
id: 2364,
title: "溜",
type: 1,
min: 4565,
max: 4568
}, {
id: 2365,
title: "流",
type: 1,
min: 4569,
max: 4572
}, {
id: 2366,
title: "摎",
type: 1,
min: 4573,
max: 4576
}, {
id: 2367,
title: "镏",
type: 1,
min: 4577,
max: 4580
}, {
id: 2368,
title: "栊",
type: 1,
min: 4581,
max: 4584
}, {
id: 2369,
title: "珑",
type: 1,
min: 4585,
max: 4588
}, {
id: 2370,
title: "陇",
type: 1,
min: 4589,
max: 4592
}, {
id: 2371,
title: "垄",
type: 1,
min: 4593,
max: 4596
}, {
id: 2372,
title: "漏",
type: 1,
min: 4597,
max: 4600
}, {
id: 2373,
title: "庐",
type: 1,
min: 4601,
max: 4604
}, {
id: 2374,
title: "炉",
type: 1,
min: 4605,
max: 4608
}, {
id: 2375,
title: "卤",
type: 1,
min: 4609,
max: 4612
}, {
id: 2376,
title: "录",
type: 1,
min: 4613,
max: 4616
}, {
id: 2377,
title: "潞",
type: 1,
min: 4617,
max: 4620
}, {
id: 2378,
title: "闾",
type: 1,
min: 4621,
max: 4624
}, {
id: 2379,
title: "驴",
type: 1,
min: 4625,
max: 4628
}, {
id: 2380,
title: "旅",
type: 1,
min: 4629,
max: 4632
}, {
id: 2381,
title: "屡",
type: 1,
min: 4633,
max: 4636
}, {
id: 2382,
title: "略",
type: 1,
min: 4637,
max: 4640
}, {
id: 2383,
title: "纶",
type: 1,
min: 4641,
max: 4644
}, {
id: 2384,
title: "轮",
type: 1,
min: 4645,
max: 4648
}, {
id: 2385,
title: "论",
type: 1,
min: 4649,
max: 4652
}, {
id: 2386,
title: "骡",
type: 1,
min: 4653,
max: 4656
}, {
id: 2387,
title: "落",
type: 1,
min: 4657,
max: 4660
}, {
id: 2388,
title: "马服",
type: 1,
min: 4661,
max: 4664
}, {
id: 2389,
title: "马师",
type: 1,
min: 4665,
max: 4668
}, {
id: 2390,
title: "马徐",
type: 1,
min: 4669,
max: 4672
}, {
id: 2391,
title: "傌",
type: 1,
min: 4673,
max: 4676
}, {
id: 2392,
title: "蛮",
type: 1,
min: 4677,
max: 4680
}, {
id: 2393,
title: "漫",
type: 1,
min: 4681,
max: 4684
}, {
id: 2394,
title: "蔓",
type: 1,
min: 4685,
max: 4688
}, {
id: 2395,
title: "芒",
type: 1,
min: 4689,
max: 4692
}, {
id: 2396,
title: "忙",
type: 1,
min: 4693,
max: 4696
}, {
id: 2397,
title: "邙",
type: 1,
min: 4697,
max: 4700
}, {
id: 2398,
title: "茫",
type: 1,
min: 4701,
max: 4704
}, {
id: 2399,
title: "猫",
type: 1,
min: 4705,
max: 4708
}, {
id: 2400,
title: "懋",
type: 1,
min: 4709,
max: 4712
}, {
id: 2401,
title: "枚",
type: 1,
min: 4713,
max: 4716
}, {
id: 2402,
title: "眉",
type: 1,
min: 4717,
max: 4720
}, {
id: 2403,
title: "没",
type: 1,
min: 4721,
max: 4724
}, {
id: 2404,
title: "每",
type: 1,
min: 4725,
max: 4728
}, {
id: 2405,
title: "弭",
type: 1,
min: 4729,
max: 4732
}, {
id: 2406,
title: "靡",
type: 1,
min: 4733,
max: 4736
}, {
id: 2407,
title: "勉",
type: 1,
min: 4737,
max: 4740
}, {
id: 2408,
title: "冕",
type: 1,
min: 4741,
max: 4744
}, {
id: 2409,
title: "面",
type: 1,
min: 4745,
max: 4748
}, {
id: 2410,
title: "蔑",
type: 1,
min: 4749,
max: 4752
}, {
id: 2411,
title: "民",
type: 1,
min: 4753,
max: 4756
}, {
id: 2412,
title: "旻",
type: 1,
min: 4757,
max: 4760
}, {
id: 2413,
title: "缗",
type: 1,
min: 4761,
max: 4764
}, {
id: 2414,
title: "湣",
type: 1,
min: 4765,
max: 4768
}, {
id: 2415,
title: "冥",
type: 1,
min: 4769,
max: 4772
}, {
id: 2416,
title: "铭",
type: 1,
min: 4773,
max: 4776
}, {
id: 2417,
title: "命",
type: 1,
min: 4777,
max: 4780
}, {
id: 2418,
title: "摸",
type: 1,
min: 4781,
max: 4784
}, {
id: 2419,
title: "么",
type: 1,
min: 4785,
max: 4788
}, {
id: 2420,
title: "末",
type: 1,
min: 4789,
max: 4792
}, {
id: 2421,
title: "陌",
type: 1,
min: 4793,
max: 4796
}, {
id: 2422,
title: "貊",
type: 1,
min: 4797,
max: 4800
}, {
id: 2423,
title: "谋",
type: 1,
min: 4801,
max: 4804
}, {
id: 2424,
title: "幕",
type: 1,
min: 4805,
max: 4808
}, {
id: 2425,
title: "拿",
type: 1,
min: 4809,
max: 4812
}, {
id: 2426,
title: "哪",
type: 1,
min: 4813,
max: 4816
}, {
id: 2427,
title: "纳",
type: 1,
min: 4817,
max: 4820
}, {
id: 2428,
title: "纳智",
type: 1,
min: 4821,
max: 4824
}, {
id: 2429,
title: "迺",
type: 1,
min: 4825,
max: 4828
}, {
id: 2430,
title: "男",
type: 1,
min: 4829,
max: 4832
}, {
id: 2431,
title: "曩",
type: 1,
min: 4833,
max: 4836
}, {
id: 2432,
title: "铙",
type: 1,
min: 4837,
max: 4840
}, {
id: 2433,
title: "峱",
type: 1,
min: 4841,
max: 4844
}, {
id: 2434,
title: "淖",
type: 1,
min: 4845,
max: 4848
}, {
id: 2435,
title: "内",
type: 1,
min: 4849,
max: 4852
}, {
id: 2436,
title: "辇",
type: 1,
min: 4853,
max: 4856
}, {
id: 2437,
title: "鸟",
type: 1,
min: 4857,
max: 4860
}, {
id: 2438,
title: "侬",
type: 1,
min: 4861,
max: 4864
}, {
id: 2439,
title: "浓",
type: 1,
min: 4865,
max: 4868
}, {
id: 2440,
title: "怒",
type: 1,
min: 4869,
max: 4872
}, {
id: 2441,
title: "讴",
type: 1,
min: 4873,
max: 4876
}, {
id: 2442,
title: "瓯",
type: 1,
min: 4877,
max: 4880
}, {
id: 2443,
title: "藕",
type: 1,
min: 4881,
max: 4884
}, {
id: 2444,
title: "沤",
type: 1,
min: 4885,
max: 4888
}, {
id: 2445,
title: "杷",
type: 1,
min: 4889,
max: 4892
}, {
id: 2446,
title: "爬",
type: 1,
min: 4893,
max: 4896
}, {
id: 2447,
title: "怕",
type: 1,
min: 4897,
max: 4900
}, {
id: 2448,
title: "排",
type: 1,
min: 4901,
max: 4904
}, {
id: 2449,
title: "盼",
type: 1,
min: 4905,
max: 4908
}, {
id: 2450,
title: "旁",
type: 1,
min: 4909,
max: 4912
}, {
id: 2451,
title: "匏",
type: 1,
min: 4913,
max: 4916
}, {
id: 2452,
title: "泡",
type: 1,
min: 4917,
max: 4920
}, {
id: 2453,
title: "鄁",
type: 1,
min: 4921,
max: 4924
}, {
id: 2454,
title: "盆",
type: 1,
min: 4925,
max: 4928
}, {
id: 2455,
title: "傰",
type: 1,
min: 4929,
max: 4932
}, {
id: 2456,
title: "丕",
type: 1,
min: 4933,
max: 4936
}, {
id: 2457,
title: "郫",
type: 1,
min: 4937,
max: 4940
}, {
id: 2458,
title: "裨",
type: 1,
min: 4941,
max: 4944
}, {
id: 2459,
title: "篇",
type: 1,
min: 4945,
max: 4948
}, {
id: 2460,
title: "便",
type: 1,
min: 4949,
max: 4952
}, {
id: 2461,
title: "飘",
type: 1,
min: 4953,
max: 4956
}, {
id: 2462,
title: "频",
type: 1,
min: 4957,
max: 4960
}, {
id: 2463,
title: "评",
type: 1,
min: 4961,
max: 4964
}, {
id: 2464,
title: "瓶",
type: 1,
min: 4965,
max: 4968
}, {
id: 2465,
title: "颇",
type: 1,
min: 4969,
max: 4972
}, {
id: 2466,
title: "繁",
type: 1,
min: 4973,
max: 4976
}, {
id: 2467,
title: "迫",
type: 1,
min: 4977,
max: 4980
}, {
id: 2468,
title: "棓",
type: 1,
min: 4981,
max: 4984
}, {
id: 2469,
title: "莆",
type: 1,
min: 4985,
max: 4988
}, {
id: 2470,
title: "璞",
type: 1,
min: 4989,
max: 4992
}, {
id: 2471,
title: "璞阳",
type: 1,
min: 4993,
max: 4996
}, {
id: 2472,
title: "圃",
type: 1,
min: 4997,
max: 5e3
}, {
id: 2473,
title: "栖",
type: 1,
min: 5001,
max: 5004
}, {
id: 2474,
title: "郪",
type: 1,
min: 5005,
max: 5008
}, {
id: 2475,
title: "期",
type: 1,
min: 5009,
max: 5012
}, {
id: 2476,
title: "歧",
type: 1,
min: 5013,
max: 5016
}, {
id: 2477,
title: "骑",
type: 1,
min: 5017,
max: 5020
}, {
id: 2478,
title: "蕲",
type: 1,
min: 5021,
max: 5024
}, {
id: 2479,
title: "企",
type: 1,
min: 5025,
max: 5028
}, {
id: 2480,
title: "绮",
type: 1,
min: 5029,
max: 5032
}, {
id: 2481,
title: "弃",
type: 1,
min: 5033,
max: 5036
}, {
id: 2482,
title: "器",
type: 1,
min: 5037,
max: 5040
}, {
id: 2483,
title: "卡",
type: 1,
min: 5041,
max: 5044
}, {
id: 2484,
title: "谦",
type: 1,
min: 5045,
max: 5048
}, {
id: 2485,
title: "钳",
type: 1,
min: 5049,
max: 5052
}, {
id: 2486,
title: "虔",
type: 1,
min: 5053,
max: 5056
}, {
id: 2487,
title: "黔",
type: 1,
min: 5057,
max: 5060
}, {
id: 2488,
title: "鍼",
type: 1,
min: 5061,
max: 5064
}, {
id: 2489,
title: "倩",
type: 1,
min: 5065,
max: 5068
}, {
id: 2490,
title: "茜",
type: 1,
min: 5069,
max: 5072
}, {
id: 2491,
title: "蒨",
type: 1,
min: 5073,
max: 5076
}, {
id: 2492,
title: "墙",
type: 1,
min: 5077,
max: 5080
}, {
id: 2493,
title: "硗",
type: 1,
min: 5081,
max: 5084
}, {
id: 2494,
title: "鄡",
type: 1,
min: 5085,
max: 5088
}, {
id: 2495,
title: "侨",
type: 1,
min: 5089,
max: 5092
}, {
id: 2496,
title: "癿",
type: 1,
min: 5093,
max: 5096
}, {
id: 2497,
title: "茄",
type: 1,
min: 5097,
max: 5100
}, {
id: 2498,
title: "郄",
type: 1,
min: 5101,
max: 5104
}, {
id: 2499,
title: "侵",
type: 1,
min: 5105,
max: 5108
}, {
id: 2500,
title: "禽",
type: 1,
min: 5109,
max: 5112
}, {
id: 2501,
title: "沁",
type: 1,
min: 5113,
max: 5116
}, {
id: 2502,
title: "邛",
type: 1,
min: 5117,
max: 5120
}, {
id: 2503,
title: "穷",
type: 1,
min: 5121,
max: 5124
}, {
id: 2504,
title: "糗",
type: 1,
min: 5125,
max: 5128
}, {
id: 2505,
title: "诎",
type: 1,
min: 5129,
max: 5132
}, {
id: 2506,
title: "絇",
type: 1,
min: 5133,
max: 5136
}, {
id: 2507,
title: "取",
type: 1,
min: 5137,
max: 5140
}, {
id: 2508,
title: "去",
type: 1,
min: 5141,
max: 5144
}, {
id: 2509,
title: "趣",
type: 1,
min: 5145,
max: 5148
}, {
id: 2510,
title: "卷",
type: 1,
min: 5149,
max: 5152
}, {
id: 2511,
title: "铨",
type: 1,
min: 5153,
max: 5156
}, {
id: 2512,
title: "拳",
type: 1,
min: 5157,
max: 5160
}, {
id: 2513,
title: "劝",
type: 1,
min: 5161,
max: 5164
}, {
id: 2514,
title: "然",
type: 1,
min: 5165,
max: 5168
}, {
id: 2515,
title: "穰",
type: 1,
min: 5169,
max: 5172
}, {
id: 2516,
title: "壤",
type: 1,
min: 5173,
max: 5176
}, {
id: 2517,
title: "扰龙",
type: 1,
min: 5177,
max: 5180
}, {
id: 2518,
title: "绕",
type: 1,
min: 5181,
max: 5184
}, {
id: 2519,
title: "惹",
type: 1,
min: 5185,
max: 5188
}, {
id: 2520,
title: "壬",
type: 1,
min: 5189,
max: 5192
}, {
id: 2521,
title: "纫",
type: 1,
min: 5193,
max: 5196
}, {
id: 2522,
title: "仍",
type: 1,
min: 5197,
max: 5200
}, {
id: 2523,
title: "荣公",
type: 1,
min: 5201,
max: 5204
}, {
id: 2524,
title: "容城",
type: 1,
min: 5205,
max: 5208
}, {
id: 2525,
title: "绒",
type: 1,
min: 5209,
max: 5212
}, {
id: 2526,
title: "柔",
type: 1,
min: 5213,
max: 5216
}, {
id: 2527,
title: "儒",
type: 1,
min: 5217,
max: 5220
}, {
id: 2528,
title: "孺",
type: 1,
min: 5221,
max: 5224
}, {
id: 2529,
title: "女",
type: 1,
min: 5225,
max: 5228
}, {
id: 2530,
title: "辱",
type: 1,
min: 5229,
max: 5232
}, {
id: 2531,
title: "鄏",
type: 1,
min: 5233,
max: 5236
}, {
id: 2532,
title: "蓐",
type: 1,
min: 5237,
max: 5240
}, {
id: 2533,
title: "褥",
type: 1,
min: 5241,
max: 5244
}, {
id: 2534,
title: "软",
type: 1,
min: 5245,
max: 5248
}, {
id: 2535,
title: "锐",
type: 1,
min: 5249,
max: 5252
}, {
id: 2536,
title: "闰",
type: 1,
min: 5253,
max: 5256
}, {
id: 2537,
title: "润",
type: 1,
min: 5257,
max: 5260
}, {
id: 2538,
title: "若",
type: 1,
min: 5261,
max: 5264
}, {
id: 2539,
title: "鄀",
type: 1,
min: 5265,
max: 5268
}, {
id: 2540,
title: "洒",
type: 1,
min: 5269,
max: 5272
}, {
id: 2541,
title: "塞",
type: 1,
min: 5273,
max: 5276
}, {
id: 2542,
title: "三",
type: 1,
min: 5277,
max: 5280
}, {
id: 2543,
title: "三邱",
type: 1,
min: 5281,
max: 5284
}, {
id: 2544,
title: "丧",
type: 1,
min: 5285,
max: 5288
}, {
id: 2545,
title: "扫",
type: 1,
min: 5289,
max: 5292
}, {
id: 2546,
title: "啬",
type: 1,
min: 5293,
max: 5296
}, {
id: 2547,
title: "刹",
type: 1,
min: 5297,
max: 5300
}, {
id: 2548,
title: "厦",
type: 1,
min: 5301,
max: 5304
}, {
id: 2549,
title: "邖",
type: 1,
min: 5305,
max: 5308
}, {
id: 2550,
title: "苫",
type: 1,
min: 5309,
max: 5312
}, {
id: 2551,
title: "删",
type: 1,
min: 5313,
max: 5316
}, {
id: 2552,
title: "膳",
type: 1,
min: 5317,
max: 5320
}, {
id: 2553,
title: "扇",
type: 1,
min: 5321,
max: 5324
}, {
id: 2554,
title: "伤",
type: 1,
min: 5325,
max: 5328
}, {
id: 2555,
title: "商丘",
type: 1,
min: 5329,
max: 5332
}, {
id: 2556,
title: "稍",
type: 1,
min: 5333,
max: 5336
}, {
id: 2557,
title: "勺",
type: 1,
min: 5337,
max: 5340
}, {
id: 2558,
title: "少叔",
type: 1,
min: 5341,
max: 5344
}, {
id: 2559,
title: "召",
type: 1,
min: 5345,
max: 5348
}, {
id: 2560,
title: "奢",
type: 1,
min: 5349,
max: 5352
}, {
id: 2561,
title: "舌",
type: 1,
min: 5353,
max: 5356
}, {
id: 2562,
title: "社",
type: 1,
min: 5357,
max: 5360
}, {
id: 2563,
title: "射",
type: 1,
min: 5361,
max: 5364
}, {
id: 2564,
title: "涉",
type: 1,
min: 5365,
max: 5368
}, {
id: 2565,
title: "赦",
type: 1,
min: 5369,
max: 5372
}, {
id: 2566,
title: "摄",
type: 1,
min: 5373,
max: 5376
}, {
id: 2567,
title: "甡",
type: 1,
min: 5377,
max: 5380
}, {
id: 2568,
title: "审",
type: 1,
min: 5381,
max: 5384
}, {
id: 2569,
title: "升",
type: 1,
min: 5385,
max: 5388
}, {
id: 2570,
title: "陞",
type: 1,
min: 5389,
max: 5392
}, {
id: 2571,
title: "笙",
type: 1,
min: 5393,
max: 5396
}, {
id: 2572,
title: "甥",
type: 1,
min: 5397,
max: 5400
}, {
id: 2573,
title: "渑",
type: 1,
min: 5401,
max: 5404
}, {
id: 2574,
title: "省",
type: 1,
min: 5405,
max: 5408
}, {
id: 2575,
title: "剩",
type: 1,
min: 5409,
max: 5412
}, {
id: 2576,
title: "尸",
type: 1,
min: 5413,
max: 5416
}, {
id: 2577,
title: "诗",
type: 1,
min: 5417,
max: 5420
}, {
id: 2578,
title: "邿",
type: 1,
min: 5421,
max: 5424
}, {
id: 2579,
title: "石真",
type: 1,
min: 5425,
max: 5428
}, {
id: 2580,
title: "实",
type: 1,
min: 5429,
max: 5432
}, {
id: 2581,
title: "拾",
type: 1,
min: 5433,
max: 5436
}, {
id: 2582,
title: "寔",
type: 1,
min: 5437,
max: 5440
}, {
id: 2583,
title: "史乐",
type: 1,
min: 5441,
max: 5444
}, {
id: 2584,
title: "矢",
type: 1,
min: 5445,
max: 5448
}, {
id: 2585,
title: "始",
type: 1,
min: 5449,
max: 5452
}, {
id: 2586,
title: "士敬",
type: 1,
min: 5453,
max: 5456
}, {
id: 2587,
title: "士恩",
type: 1,
min: 5457,
max: 5460
}, {
id: 2588,
title: "仕",
type: 1,
min: 5461,
max: 5464
}, {
id: 2589,
title: "示",
type: 1,
min: 5465,
max: 5468
}, {
id: 2590,
title: "市",
type: 1,
min: 5469,
max: 5472
}, {
id: 2591,
title: "侍",
type: 1,
min: 5473,
max: 5476
}, {
id: 2592,
title: "侍其",
type: 1,
min: 5477,
max: 5480
}, {
id: 2593,
title: "视",
type: 1,
min: 5481,
max: 5484
}, {
id: 2594,
title: "适",
type: 1,
min: 5485,
max: 5488
}, {
id: 2595,
title: "是",
type: 1,
min: 5489,
max: 5492
}, {
id: 2596,
title: "奭",
type: 1,
min: 5493,
max: 5496
}, {
id: 2597,
title: "势",
type: 1,
min: 5497,
max: 5500
}, {
id: 2598,
title: "收",
type: 1,
min: 5501,
max: 5504
}, {
id: 2599,
title: "首",
type: 1,
min: 5505,
max: 5508
}, {
id: 2600,
title: "授",
type: 1,
min: 5509,
max: 5512
}, {
id: 2601,
title: "寿丘",
type: 1,
min: 5513,
max: 5516
}, {
id: 2602,
title: "瘦",
type: 1,
min: 5517,
max: 5520
}, {
id: 2603,
title: "舒龚",
type: 1,
min: 5521,
max: 5524
}, {
id: 2604,
title: "舒庸",
type: 1,
min: 5525,
max: 5528
}, {
id: 2605,
title: "殊",
type: 1,
min: 5529,
max: 5532
}, {
id: 2606,
title: "淑",
type: 1,
min: 5533,
max: 5536
}, {
id: 2607,
title: "蜀",
type: 1,
min: 5537,
max: 5540
}, {
id: 2608,
title: "暑",
type: 1,
min: 5541,
max: 5544
}, {
id: 2609,
title: "鼠",
type: 1,
min: 5545,
max: 5548
}, {
id: 2610,
title: "述",
type: 1,
min: 5549,
max: 5552
}, {
id: 2611,
title: "戍",
type: 1,
min: 5553,
max: 5556
}, {
id: 2612,
title: "竖",
type: 1,
min: 5557,
max: 5560
}, {
id: 2613,
title: "庶",
type: 1,
min: 5561,
max: 5564
}, {
id: 2614,
title: "澍",
type: 1,
min: 5565,
max: 5568
}, {
id: 2615,
title: "爽",
type: 1,
min: 5569,
max: 5572
}, {
id: 2616,
title: "谁",
type: 1,
min: 5573,
max: 5576
}, {
id: 2617,
title: "舜",
type: 1,
min: 5577,
max: 5580
}, {
id: 2618,
title: "舜华",
type: 1,
min: 5581,
max: 5584
}, {
id: 2619,
title: "说",
type: 1,
min: 5585,
max: 5588
}, {
id: 2620,
title: "朔",
type: 1,
min: 5589,
max: 5592
}, {
id: 2621,
title: "妁",
type: 1,
min: 5593,
max: 5596
}, {
id: 2622,
title: "司星",
type: 1,
min: 5597,
max: 5600
}, {
id: 2623,
title: "司甄",
type: 1,
min: 5601,
max: 5604
}, {
id: 2624,
title: "私",
type: 1,
min: 5605,
max: 5608
}, {
id: 2625,
title: "巳",
type: 1,
min: 5609,
max: 5612
}, {
id: 2626,
title: "寺",
type: 1,
min: 5613,
max: 5616
}, {
id: 2627,
title: "佀",
type: 1,
min: 5617,
max: 5620
}, {
id: 2628,
title: "姒",
type: 1,
min: 5621,
max: 5624
}, {
id: 2629,
title: "驷",
type: 1,
min: 5625,
max: 5628
}, {
id: 2630,
title: "食",
type: 1,
min: 5629,
max: 5632
}, {
id: 2631,
title: "肆",
type: 1,
min: 5633,
max: 5636
}, {
id: 2632,
title: "嗣",
type: 1,
min: 5637,
max: 5640
}, {
id: 2633,
title: "颂",
type: 1,
min: 5641,
max: 5644
}, {
id: 2634,
title: "玊",
type: 1,
min: 5645,
max: 5648
}, {
id: 2635,
title: "夙",
type: 1,
min: 5649,
max: 5652
}, {
id: 2636,
title: "诉",
type: 1,
min: 5653,
max: 5656
}, {
id: 2637,
title: "肃",
type: 1,
min: 5657,
max: 5660
}, {
id: 2638,
title: "蔌",
type: 1,
min: 5661,
max: 5664
}, {
id: 2639,
title: "虽",
type: 1,
min: 5665,
max: 5668
}, {
id: 2640,
title: "绥",
type: 1,
min: 5669,
max: 5672
}, {
id: 2641,
title: "穗",
type: 1,
min: 5673,
max: 5676
}, {
id: 2642,
title: "笋",
type: 1,
min: 5677,
max: 5680
}, {
id: 2643,
title: "莎",
type: 1,
min: 5681,
max: 5684
}, {
id: 2644,
title: "缩",
type: 1,
min: 5685,
max: 5688
}, {
id: 2645,
title: "琐",
type: 1,
min: 5689,
max: 5692
}, {
id: 2646,
title: "它",
type: 1,
min: 5693,
max: 5696
}, {
id: 2647,
title: "禢",
type: 1,
min: 5697,
max: 5700
}, {
id: 2648,
title: "塔",
type: 1,
min: 5701,
max: 5704
}, {
id: 2649,
title: "骀",
type: 1,
min: 5705,
max: 5708
}, {
id: 2650,
title: "太士",
type: 1,
min: 5709,
max: 5712
}, {
id: 2651,
title: "太阳",
type: 1,
min: 5713,
max: 5716
}, {
id: 2652,
title: "郯",
type: 1,
min: 5717,
max: 5720
}, {
id: 2653,
title: "昙",
type: 1,
min: 5721,
max: 5724
}, {
id: 2654,
title: "覃",
type: 1,
min: 5725,
max: 5728
}, {
id: 2655,
title: "潭",
type: 1,
min: 5729,
max: 5732
}, {
id: 2656,
title: "镡",
type: 1,
min: 5733,
max: 5736
}, {
id: 2657,
title: "澹",
type: 1,
min: 5737,
max: 5740
}, {
id: 2658,
title: "坛",
type: 1,
min: 5741,
max: 5744
}, {
id: 2659,
title: "坦",
type: 1,
min: 5745,
max: 5748
}, {
id: 2660,
title: "叹",
type: 1,
min: 5749,
max: 5752
}, {
id: 2661,
title: "堂谿",
type: 1,
min: 5753,
max: 5756
}, {
id: 2662,
title: "棠",
type: 1,
min: 5757,
max: 5760
}, {
id: 2663,
title: "韬",
type: 1,
min: 5761,
max: 5764
}, {
id: 2664,
title: "桃叔",
type: 1,
min: 5765,
max: 5768
}, {
id: 2665,
title: "忒",
type: 1,
min: 5769,
max: 5772
}, {
id: 2666,
title: "藤",
type: 1,
min: 5773,
max: 5776
}, {
id: 2667,
title: "籐",
type: 1,
min: 5777,
max: 5780
}, {
id: 2668,
title: "梯",
type: 1,
min: 5781,
max: 5784
}, {
id: 2669,
title: "隄",
type: 1,
min: 5785,
max: 5788
}, {
id: 2670,
title: "替",
type: 1,
min: 5789,
max: 5792
}, {
id: 2671,
title: "惕",
type: 1,
min: 5793,
max: 5796
}, {
id: 2672,
title: "天",
type: 1,
min: 5797,
max: 5800
}, {
id: 2673,
title: "佻",
type: 1,
min: 5801,
max: 5804
}, {
id: 2674,
title: "条",
type: 1,
min: 5805,
max: 5808
}, {
id: 2675,
title: "苕",
type: 1,
min: 5809,
max: 5812
}, {
id: 2676,
title: "调",
type: 1,
min: 5813,
max: 5816
}, {
id: 2677,
title: "贴",
type: 1,
min: 5817,
max: 5820
}, {
id: 2678,
title: "厅",
type: 1,
min: 5821,
max: 5824
}, {
id: 2679,
title: "听",
type: 1,
min: 5825,
max: 5828
}, {
id: 2680,
title: "庭",
type: 1,
min: 5829,
max: 5832
}, {
id: 2681,
title: "亭",
type: 1,
min: 5833,
max: 5836
}, {
id: 2682,
title: "同归",
type: 1,
min: 5837,
max: 5840
}, {
id: 2683,
title: "彤",
type: 1,
min: 5841,
max: 5844
}, {
id: 2684,
title: "桐里",
type: 1,
min: 5845,
max: 5848
}, {
id: 2685,
title: "铜",
type: 1,
min: 5849,
max: 5852
}, {
id: 2686,
title: "僮",
type: 1,
min: 5853,
max: 5856
}, {
id: 2687,
title: "统",
type: 1,
min: 5857,
max: 5860
}, {
id: 2688,
title: "痛",
type: 1,
min: 5861,
max: 5864
}, {
id: 2689,
title: "投",
type: 1,
min: 5865,
max: 5868
}, {
id: 2690,
title: "投胶",
type: 1,
min: 5869,
max: 5872
}, {
id: 2691,
title: "头",
type: 1,
min: 5873,
max: 5876
}, {
id: 2692,
title: "钭",
type: 1,
min: 5877,
max: 5880
}, {
id: 2693,
title: "途",
type: 1,
min: 5881,
max: 5884
}, {
id: 2694,
title: "屠岸",
type: 1,
min: 5885,
max: 5888
}, {
id: 2695,
title: "疃",
type: 1,
min: 5889,
max: 5892
}, {
id: 2696,
title: "推",
type: 1,
min: 5893,
max: 5896
}, {
id: 2697,
title: "颓",
type: 1,
min: 5897,
max: 5900
}, {
id: 2698,
title: "退",
type: 1,
min: 5901,
max: 5904
}, {
id: 2699,
title: "吞",
type: 1,
min: 5905,
max: 5908
}, {
id: 2700,
title: "屯",
type: 1,
min: 5909,
max: 5912
}, {
id: 2701,
title: "拖",
type: 1,
min: 5913,
max: 5916
}, {
id: 2702,
title: "佗",
type: 1,
min: 5917,
max: 5920
}, {
id: 2703,
title: "坨",
type: 1,
min: 5921,
max: 5924
}, {
id: 2704,
title: "妥",
type: 1,
min: 5925,
max: 5928
}, {
id: 2705,
title: "哇",
type: 1,
min: 5929,
max: 5932
}, {
id: 2706,
title: "丸",
type: 1,
min: 5933,
max: 5936
}, {
id: 2707,
title: "顽",
type: 1,
min: 5937,
max: 5940
}, {
id: 2708,
title: "翫",
type: 1,
min: 5941,
max: 5944
}, {
id: 2709,
title: "晚",
type: 1,
min: 5945,
max: 5948
}, {
id: 2710,
title: "娩",
type: 1,
min: 5949,
max: 5952
}, {
id: 2711,
title: "皖",
type: 1,
min: 5953,
max: 5956
}, {
id: 2712,
title: "菀",
type: 1,
min: 5957,
max: 5960
}, {
id: 2713,
title: "尫",
type: 1,
min: 5961,
max: 5964
}, {
id: 2714,
title: "王狄",
type: 1,
min: 5965,
max: 5968
}, {
id: 2715,
title: "王周",
type: 1,
min: 5969,
max: 5972
}, {
id: 2716,
title: "王子",
type: 1,
min: 5973,
max: 5976
}, {
id: 2717,
title: "枉",
type: 1,
min: 5977,
max: 5980
}, {
id: 2718,
title: "枉",
type: 1,
min: 5981,
max: 5984
}, {
id: 2719,
title: "隈",
type: 1,
min: 5985,
max: 5988
}, {
id: 2720,
title: "微",
type: 1,
min: 5989,
max: 5992
}, {
id: 2721,
title: "微生",
type: 1,
min: 5993,
max: 5996
}, {
id: 2722,
title: "为",
type: 1,
min: 5997,
max: 6e3
}, {
id: 2723,
title: "鄬",
type: 1,
min: 6001,
max: 6004
}, {
id: 2724,
title: "围",
type: 1,
min: 6005,
max: 6008
}, {
id: 2725,
title: "惟",
type: 1,
min: 6009,
max: 6012
}, {
id: 2726,
title: "违",
type: 1,
min: 6013,
max: 6016
}, {
id: 2727,
title: "唯",
type: 1,
min: 6017,
max: 6020
}, {
id: 2728,
title: "嵬",
type: 1,
min: 6021,
max: 6024
}, {
id: 2729,
title: "纬",
type: 1,
min: 6025,
max: 6028
}, {
id: 2730,
title: "蒍",
type: 1,
min: 6029,
max: 6032
}, {
id: 2731,
title: "苇",
type: 1,
min: 6033,
max: 6036
}, {
id: 2732,
title: "尾",
type: 1,
min: 6037,
max: 6040
}, {
id: 2733,
title: "薳",
type: 1,
min: 6041,
max: 6044
}, {
id: 2734,
title: "味",
type: 1,
min: 6045,
max: 6048
}, {
id: 2735,
title: "渭",
type: 1,
min: 6049,
max: 6052
}, {
id: 2736,
title: "慰",
type: 1,
min: 6053,
max: 6056
}, {
id: 2737,
title: "文修",
type: 1,
min: 6057,
max: 6060
}, {
id: 2738,
title: "汶",
type: 1,
min: 6061,
max: 6064
}, {
id: 2739,
title: "涡",
type: 1,
min: 6065,
max: 6068
}, {
id: 2740,
title: "偓",
type: 1,
min: 6069,
max: 6072
}, {
id: 2741,
title: "握",
type: 1,
min: 6073,
max: 6076
}, {
id: 2742,
title: "斡",
type: 1,
min: 6077,
max: 6080
}, {
id: 2743,
title: "乌程",
type: 1,
min: 6081,
max: 6084
}, {
id: 2744,
title: "乌夫",
type: 1,
min: 6085,
max: 6088
}, {
id: 2745,
title: "乌陵",
type: 1,
min: 6089,
max: 6092
}, {
id: 2746,
title: "乌俗",
type: 1,
min: 6093,
max: 6096
}, {
id: 2747,
title: "乌万",
type: 1,
min: 6097,
max: 6100
}, {
id: 2748,
title: "乌余",
type: 1,
min: 6101,
max: 6104
}, {
id: 2749,
title: "乌朱",
type: 1,
min: 6105,
max: 6108
}, {
id: 2750,
title: "巫阳",
type: 1,
min: 6109,
max: 6112
}, {
id: 2751,
title: "无",
type: 1,
min: 6113,
max: 6116
}, {
id: 2752,
title: "吾",
type: 1,
min: 6117,
max: 6120
}, {
id: 2753,
title: "吾丘",
type: 1,
min: 6121,
max: 6124
}, {
id: 2754,
title: "浯",
type: 1,
min: 6125,
max: 6128
}, {
id: 2755,
title: "梧",
type: 1,
min: 6129,
max: 6132
}, {
id: 2756,
title: "芜",
type: 1,
min: 6133,
max: 6136
}, {
id: 2757,
title: "五父",
type: 1,
min: 6137,
max: 6140
}, {
id: 2758,
title: "舞",
type: 1,
min: 6141,
max: 6144
}, {
id: 2759,
title: "戊",
type: 1,
min: 6145,
max: 6148
}, {
id: 2760,
title: "务相",
type: 1,
min: 6149,
max: 6152
}, {
id: 2761,
title: "西巷",
type: 1,
min: 6153,
max: 6156
}, {
id: 2762,
title: "昔",
type: 1,
min: 6157,
max: 6160
}, {
id: 2763,
title: "吸",
type: 1,
min: 6161,
max: 6164
}, {
id: 2764,
title: "析",
type: 1,
min: 6165,
max: 6168
}, {
id: 2765,
title: "唏州",
type: 1,
min: 6169,
max: 6172
}, {
id: 2766,
title: "熙",
type: 1,
min: 6173,
max: 6176
}, {
id: 2767,
title: "溪",
type: 1,
min: 6177,
max: 6180
}, {
id: 2768,
title: "稀",
type: 1,
min: 6181,
max: 6184
}, {
id: 2769,
title: "羲",
type: 1,
min: 6185,
max: 6188
}, {
id: 2770,
title: "釐",
type: 1,
min: 6189,
max: 6192
}, {
id: 2771,
title: "隰",
type: 1,
min: 6193,
max: 6196
}, {
id: 2772,
title: "玺",
type: 1,
min: 6197,
max: 6200
}, {
id: 2773,
title: "葸",
type: 1,
min: 6201,
max: 6204
}, {
id: 2774,
title: "戏",
type: 1,
min: 6205,
max: 6208
}, {
id: 2775,
title: "戏阳",
type: 1,
min: 6209,
max: 6212
}, {
id: 2776,
title: "系",
type: 1,
min: 6213,
max: 6216
}, {
id: 2777,
title: "细",
type: 1,
min: 6217,
max: 6220
}, {
id: 2778,
title: "係",
type: 1,
min: 6221,
max: 6224
}, {
id: 2779,
title: "舃",
type: 1,
min: 6225,
max: 6228
}, {
id: 2780,
title: "侠",
type: 1,
min: 6229,
max: 6232
}, {
id: 2781,
title: "瑕",
type: 1,
min: 6233,
max: 6236
}, {
id: 2782,
title: "瑕公",
type: 1,
min: 6237,
max: 6240
}, {
id: 2783,
title: "瑕丘",
type: 1,
min: 6241,
max: 6244
}, {
id: 2784,
title: "辖",
type: 1,
min: 6245,
max: 6248
}, {
id: 2785,
title: "夏父",
type: 1,
min: 6249,
max: 6252
}, {
id: 2786,
title: "夏阳",
type: 1,
min: 6253,
max: 6256
}, {
id: 2787,
title: "闲",
type: 1,
min: 6257,
max: 6260
}, {
id: 2788,
title: "弦",
type: 1,
min: 6261,
max: 6264
}, {
id: 2789,
title: "鹹",
type: 1,
min: 6265,
max: 6268
}, {
id: 2790,
title: "险",
type: 1,
min: 6269,
max: 6272
}, {
id: 2791,
title: "现",
type: 1,
min: 6273,
max: 6276
}, {
id: 2792,
title: "县",
type: 1,
min: 6277,
max: 6280
}, {
id: 2793,
title: "乡",
type: 1,
min: 6281,
max: 6284
}, {
id: 2794,
title: "相里",
type: 1,
min: 6285,
max: 6288
}, {
id: 2795,
title: "翔",
type: 1,
min: 6289,
max: 6292
}, {
id: 2796,
title: "响",
type: 1,
min: 6293,
max: 6296
}, {
id: 2797,
title: "想",
type: 1,
min: 6297,
max: 6300
}, {
id: 2798,
title: "巷",
type: 1,
min: 6301,
max: 6304
}, {
id: 2799,
title: "巷伯",
type: 1,
min: 6305,
max: 6308
}, {
id: 2800,
title: "枭",
type: 1,
min: 6309,
max: 6312
}, {
id: 2801,
title: "宵",
type: 1,
min: 6313,
max: 6316
}, {
id: 2802,
title: "蛸",
type: 1,
min: 6317,
max: 6320
}, {
id: 2803,
title: "消",
type: 1,
min: 6321,
max: 6324
}, {
id: 2804,
title: "霄",
type: 1,
min: 6325,
max: 6328
}, {
id: 2805,
title: "箫",
type: 1,
min: 6329,
max: 6332
}, {
id: 2806,
title: "效",
type: 1,
min: 6333,
max: 6336
}, {
id: 2807,
title: "歇",
type: 1,
min: 6337,
max: 6340
}, {
id: 2808,
title: "挟",
type: 1,
min: 6341,
max: 6344
}, {
id: 2809,
title: "邪",
type: 1,
min: 6345,
max: 6348
}, {
id: 2810,
title: "泄",
type: 1,
min: 6349,
max: 6352
}, {
id: 2811,
title: "渫",
type: 1,
min: 6353,
max: 6356
}, {
id: 2812,
title: "绁",
type: 1,
min: 6357,
max: 6360
}, {
id: 2813,
title: "偰",
type: 1,
min: 6361,
max: 6364
}, {
id: 2814,
title: "契",
type: 1,
min: 6365,
max: 6368
}, {
id: 2815,
title: "卨",
type: 1,
min: 6369,
max: 6372
}, {
id: 2816,
title: "燮",
type: 1,
min: 6373,
max: 6376
}, {
id: 2817,
title: "訢",
type: 1,
min: 6377,
max: 6380
}, {
id: 2818,
title: "昕",
type: 1,
min: 6381,
max: 6384
}, {
id: 2819,
title: "锌",
type: 1,
min: 6385,
max: 6388
}, {
id: 2820,
title: "新垣",
type: 1,
min: 6389,
max: 6392
}, {
id: 2821,
title: "薪",
type: 1,
min: 6393,
max: 6396
}, {
id: 2822,
title: "信都",
type: 1,
min: 6397,
max: 6400
}, {
id: 2823,
title: "醒",
type: 1,
min: 6401,
max: 6404
}, {
id: 2824,
title: "姓",
type: 1,
min: 6405,
max: 6408
}, {
id: 2825,
title: "敻",
type: 1,
min: 6409,
max: 6412
}, {
id: 2826,
title: "脩",
type: 1,
min: 6413,
max: 6416
}, {
id: 2827,
title: "修羊",
type: 1,
min: 6417,
max: 6420
}, {
id: 2828,
title: "羞",
type: 1,
min: 6421,
max: 6424
}, {
id: 2829,
title: "绣",
type: 1,
min: 6425,
max: 6428
}, {
id: 2830,
title: "戌",
type: 1,
min: 6429,
max: 6432
}, {
id: 2831,
title: "盱",
type: 1,
min: 6433,
max: 6436
}, {
id: 2832,
title: "顼",
type: 1,
min: 6437,
max: 6440
}, {
id: 2833,
title: "胥弥",
type: 1,
min: 6441,
max: 6444
}, {
id: 2834,
title: "序",
type: 1,
min: 6445,
max: 6448
}, {
id: 2835,
title: "叙",
type: 1,
min: 6449,
max: 6452
}, {
id: 2836,
title: "绪",
type: 1,
min: 6453,
max: 6456
}, {
id: 2837,
title: "絮",
type: 1,
min: 6457,
max: 6460
}, {
id: 2838,
title: "蓄",
type: 1,
min: 6461,
max: 6464
}, {
id: 2839,
title: "佡",
type: 1,
min: 6465,
max: 6468
}, {
id: 2840,
title: "宣于",
type: 1,
min: 6469,
max: 6472
}, {
id: 2841,
title: "萱",
type: 1,
min: 6473,
max: 6476
}, {
id: 2842,
title: "禤",
type: 1,
min: 6477,
max: 6480
}, {
id: 2843,
title: "悬",
type: 1,
min: 6481,
max: 6484
}, {
id: 2844,
title: "悬潘",
type: 1,
min: 6485,
max: 6488
}, {
id: 2845,
title: "选",
type: 1,
min: 6489,
max: 6492
}, {
id: 2846,
title: "穴",
type: 1,
min: 6493,
max: 6496
}, {
id: 2847,
title: "血",
type: 1,
min: 6497,
max: 6500
}, {
id: 2848,
title: "埙",
type: 1,
min: 6501,
max: 6504
}, {
id: 2849,
title: "勋",
type: 1,
min: 6505,
max: 6508
}, {
id: 2850,
title: "薰",
type: 1,
min: 6509,
max: 6512
}, {
id: 2851,
title: "旬",
type: 1,
min: 6513,
max: 6516
}, {
id: 2852,
title: "郇",
type: 1,
min: 6517,
max: 6520
}, {
id: 2853,
title: "浔",
type: 1,
min: 6521,
max: 6524
}, {
id: 2854,
title: "循",
type: 1,
min: 6525,
max: 6528
}, {
id: 2855,
title: "驯",
type: 1,
min: 6529,
max: 6532
}, {
id: 2856,
title: "筍",
type: 1,
min: 6533,
max: 6536
}, {
id: 2857,
title: "逊",
type: 1,
min: 6537,
max: 6540
}, {
id: 2858,
title: "汛",
type: 1,
min: 6541,
max: 6544
}, {
id: 2859,
title: "巽",
type: 1,
min: 6545,
max: 6548
}, {
id: 2860,
title: "押",
type: 1,
min: 6549,
max: 6552
}, {
id: 2861,
title: "衙",
type: 1,
min: 6553,
max: 6556
}, {
id: 2862,
title: "轧",
type: 1,
min: 6557,
max: 6560
}, {
id: 2863,
title: "炎",
type: 1,
min: 6561,
max: 6564
}, {
id: 2864,
title: "研",
type: 1,
min: 6565,
max: 6568
}, {
id: 2865,
title: "盐",
type: 1,
min: 6569,
max: 6572
}, {
id: 2866,
title: "延陵",
type: 1,
min: 6573,
max: 6576
}, {
id: 2867,
title: "颜庚",
type: 1,
min: 6577,
max: 6580
}, {
id: 2868,
title: "衍",
type: 1,
min: 6581,
max: 6584
}, {
id: 2869,
title: "剡",
type: 1,
min: 6585,
max: 6588
}, {
id: 2870,
title: "演",
type: 1,
min: 6589,
max: 6592
}, {
id: 2871,
title: "眼",
type: 1,
min: 6593,
max: 6596
}, {
id: 2872,
title: "黡",
type: 1,
min: 6597,
max: 6600
}, {
id: 2873,
title: "甗",
type: 1,
min: 6601,
max: 6604
}, {
id: 2874,
title: "砚",
type: 1,
min: 6605,
max: 6608
}, {
id: 2875,
title: "雁",
type: 1,
min: 6609,
max: 6612
}, {
id: 2876,
title: "鞅",
type: 1,
min: 6613,
max: 6616
}, {
id: 2877,
title: "羊角",
type: 1,
min: 6617,
max: 6620
}, {
id: 2878,
title: "洋",
type: 1,
min: 6621,
max: 6624
}, {
id: 2879,
title: "恙",
type: 1,
min: 6625,
max: 6628
}, {
id: 2880,
title: "腰",
type: 1,
min: 6629,
max: 6632
}, {
id: 2881,
title: "铫",
type: 1,
min: 6633,
max: 6636
}, {
id: 2882,
title: "侥",
type: 1,
min: 6637,
max: 6640
}, {
id: 2883,
title: "谣",
type: 1,
min: 6641,
max: 6644
}, {
id: 2884,
title: "摇",
type: 1,
min: 6645,
max: 6648
}, {
id: 2885,
title: "瑶",
type: 1,
min: 6649,
max: 6652
}, {
id: 2886,
title: "杳",
type: 1,
min: 6653,
max: 6656
}, {
id: 2887,
title: "曜",
type: 1,
min: 6657,
max: 6660
}, {
id: 2888,
title: "耶",
type: 1,
min: 6661,
max: 6664
}, {
id: 2889,
title: "页",
type: 1,
min: 6665,
max: 6668
}, {
id: 2890,
title: "邺",
type: 1,
min: 6669,
max: 6672
}, {
id: 2891,
title: "医",
type: 1,
min: 6673,
max: 6676
}, {
id: 2892,
title: "揖",
type: 1,
min: 6677,
max: 6680
}, {
id: 2893,
title: "繄",
type: 1,
min: 6681,
max: 6684
}, {
id: 2894,
title: "沂",
type: 1,
min: 6685,
max: 6688
}, {
id: 2895,
title: "夷",
type: 1,
min: 6689,
max: 6692
}, {
id: 2896,
title: "夷丘",
type: 1,
min: 6693,
max: 6696
}, {
id: 2897,
title: "贻",
type: 1,
min: 6697,
max: 6700
}, {
id: 2898,
title: "乙于",
type: 1,
min: 6701,
max: 6704
}, {
id: 2899,
title: "苡",
type: 1,
min: 6705,
max: 6708
}, {
id: 2900,
title: "亿",
type: 1,
min: 6709,
max: 6712
}, {
id: 2901,
title: "刈",
type: 1,
min: 6713,
max: 6716
}, {
id: 2902,
title: "艺",
type: 1,
min: 6717,
max: 6720
}, {
id: 2903,
title: "驿",
type: 1,
min: 6721,
max: 6724
}, {
id: 2904,
title: "翊",
type: 1,
min: 6725,
max: 6728
}, {
id: 2905,
title: "逸",
type: 1,
min: 6729,
max: 6732
}, {
id: 2906,
title: "意",
type: 1,
min: 6733,
max: 6736
}, {
id: 2907,
title: "意而",
type: 1,
min: 6737,
max: 6740
}, {
id: 2908,
title: "廙",
type: 1,
min: 6741,
max: 6744
}, {
id: 2909,
title: "因",
type: 1,
min: 6745,
max: 6748
}, {
id: 2910,
title: "引",
type: 1,
min: 6749,
max: 6752
}, {
id: 2911,
title: "隐",
type: 1,
min: 6753,
max: 6756
}, {
id: 2912,
title: "胤",
type: 1,
min: 6757,
max: 6760
}, {
id: 2913,
title: "赢",
type: 1,
min: 6761,
max: 6764
}, {
id: 2914,
title: "瀛",
type: 1,
min: 6765,
max: 6768
}, {
id: 2915,
title: "郢",
type: 1,
min: 6769,
max: 6772
}, {
id: 2916,
title: "颍",
type: 1,
min: 6773,
max: 6776
}, {
id: 2917,
title: "颖",
type: 1,
min: 6777,
max: 6780
}, {
id: 2918,
title: "映",
type: 1,
min: 6781,
max: 6784
}, {
id: 2919,
title: "拥",
type: 1,
min: 6785,
max: 6788
}, {
id: 2920,
title: "庸",
type: 1,
min: 6789,
max: 6792
}, {
id: 2921,
title: "涌",
type: 1,
min: 6793,
max: 6796
}, {
id: 2922,
title: "湧",
type: 1,
min: 6797,
max: 6800
}, {
id: 2923,
title: "优",
type: 1,
min: 6801,
max: 6804
}, {
id: 2924,
title: "忧",
type: 1,
min: 6805,
max: 6808
}, {
id: 2925,
title: "幽",
type: 1,
min: 6809,
max: 6812
}, {
id: 2926,
title: "由吾",
type: 1,
min: 6813,
max: 6816
}, {
id: 2927,
title: "邮",
type: 1,
min: 6817,
max: 6820
}, {
id: 2928,
title: "猷",
type: 1,
min: 6821,
max: 6824
}, {
id: 2929,
title: "右师",
type: 1,
min: 6825,
max: 6828
}, {
id: 2930,
title: "又",
type: 1,
min: 6829,
max: 6832
}, {
id: 2931,
title: "幼",
type: 1,
min: 6833,
max: 6836
}, {
id: 2932,
title: "迂",
type: 1,
min: 6837,
max: 6840
}, {
id: 2933,
title: "於陵",
type: 1,
min: 6841,
max: 6844
}, {
id: 2934,
title: "於丘",
type: 1,
min: 6845,
max: 6848
}, {
id: 2935,
title: "盂",
type: 1,
min: 6849,
max: 6852
}, {
id: 2936,
title: "禺",
type: 1,
min: 6853,
max: 6856
}, {
id: 2937,
title: "俞豆",
type: 1,
min: 6857,
max: 6860
}, {
id: 2938,
title: "愉",
type: 1,
min: 6861,
max: 6864
}, {
id: 2939,
title: "渔",
type: 1,
min: 6865,
max: 6868
}, {
id: 2940,
title: "渝",
type: 1,
min: 6869,
max: 6872
}, {
id: 2941,
title: "渝汾",
type: 1,
min: 6873,
max: 6876
}, {
id: 2942,
title: "榆",
type: 1,
min: 6877,
max: 6880
}, {
id: 2943,
title: "愚",
type: 1,
min: 6881,
max: 6884
}, {
id: 2944,
title: "羽",
type: 1,
min: 6885,
max: 6888
}, {
id: 2945,
title: "语",
type: 1,
min: 6889,
max: 6892
}, {
id: 2946,
title: "萭",
type: 1,
min: 6893,
max: 6896
}, {
id: 2947,
title: "芋",
type: 1,
min: 6897,
max: 6900
}, {
id: 2948,
title: "芋尹",
type: 1,
min: 6901,
max: 6904
}, {
id: 2949,
title: "聿",
type: 1,
min: 6905,
max: 6908
}, {
id: 2950,
title: "毓",
type: 1,
min: 6909,
max: 6912
}, {
id: 2951,
title: "预",
type: 1,
min: 6913,
max: 6916
}, {
id: 2952,
title: "淯",
type: 1,
min: 6917,
max: 6920
}, {
id: 2953,
title: "域",
type: 1,
min: 6921,
max: 6924
}, {
id: 2954,
title: "誉",
type: 1,
min: 6925,
max: 6928
}, {
id: 2955,
title: "愈",
type: 1,
min: 6929,
max: 6932
}, {
id: 2956,
title: "遇春",
type: 1,
min: 6933,
max: 6936
}, {
id: 2957,
title: "鄃",
type: 1,
min: 6937,
max: 6940
}, {
id: 2958,
title: "豫",
type: 1,
min: 6941,
max: 6944
}, {
id: 2959,
title: "粥",
type: 1,
min: 6945,
max: 6948
}, {
id: 2960,
title: "渊",
type: 1,
min: 6949,
max: 6952
}, {
id: 2961,
title: "冤赖",
type: 1,
min: 6953,
max: 6956
}, {
id: 2962,
title: "园",
type: 1,
min: 6957,
max: 6960
}, {
id: 2963,
title: "垣",
type: 1,
min: 6961,
max: 6964
}, {
id: 2964,
title: "爰",
type: 1,
min: 6965,
max: 6968
}, {
id: 2965,
title: "援",
type: 1,
min: 6969,
max: 6972
}, {
id: 2966,
title: "辕",
type: 1,
min: 6973,
max: 6976
}, {
id: 2967,
title: "榬",
type: 1,
min: 6977,
max: 6980
}, {
id: 2968,
title: "愿",
type: 1,
min: 6981,
max: 6984
}, {
id: 2969,
title: "曰",
type: 1,
min: 6985,
max: 6988
}, {
id: 2970,
title: "约",
type: 1,
min: 6989,
max: 6992
}, {
id: 2971,
title: "乐师",
type: 1,
min: 6993,
max: 6996
}, {
id: 2972,
title: "跃",
type: 1,
min: 6997,
max: 7e3
}, {
id: 2973,
title: "阅",
type: 1,
min: 7001,
max: 7004
}, {
id: 2974,
title: "匀",
type: 1,
min: 7005,
max: 7008
}, {
id: 2975,
title: "陨",
type: 1,
min: 7009,
max: 7012
}, {
id: 2976,
title: "郓",
type: 1,
min: 7013,
max: 7016
}, {
id: 2977,
title: "栽",
type: 1,
min: 7017,
max: 7020
}, {
id: 2978,
title: "在",
type: 1,
min: 7021,
max: 7024
}, {
id: 2979,
title: "载",
type: 1,
min: 7025,
max: 7028
}, {
id: 2980,
title: "遭",
type: 1,
min: 7029,
max: 7032
}, {
id: 2981,
title: "糟",
type: 1,
min: 7033,
max: 7036
}, {
id: 2982,
title: "枣",
type: 1,
min: 7037,
max: 7040
}, {
id: 2983,
title: "藻",
type: 1,
min: 7041,
max: 7044
}, {
id: 2984,
title: "择",
type: 1,
min: 7045,
max: 7048
}, {
id: 2985,
title: "迮",
type: 1,
min: 7049,
max: 7052
}, {
id: 2986,
title: "笮",
type: 1,
min: 7053,
max: 7056
}, {
id: 2987,
title: "乍",
type: 1,
min: 7057,
max: 7060
}, {
id: 2988,
title: "宅",
type: 1,
min: 7061,
max: 7064
}, {
id: 2989,
title: "窄",
type: 1,
min: 7065,
max: 7068
}, {
id: 2990,
title: "债",
type: 1,
min: 7069,
max: 7072
}, {
id: 2991,
title: "砦",
type: 1,
min: 7073,
max: 7076
}, {
id: 2992,
title: "旃",
type: 1,
min: 7077,
max: 7080
}, {
id: 2993,
title: "毡",
type: 1,
min: 7081,
max: 7084
}, {
id: 2994,
title: "瞻",
type: 1,
min: 7085,
max: 7088
}, {
id: 2995,
title: "鱣",
type: 1,
min: 7089,
max: 7092
}, {
id: 2996,
title: "绽",
type: 1,
min: 7093,
max: 7096
}, {
id: 2997,
title: "傽",
type: 1,
min: 7097,
max: 7100
}, {
id: 2998,
title: "彰",
type: 1,
min: 7101,
max: 7104
}, {
id: 2999,
title: "黨",
type: 1,
min: 7105,
max: 7108
}, {
id: 3e3,
title: "钊",
type: 1,
min: 7109,
max: 7112
}, {
id: 3001,
title: "昭",
type: 1,
min: 7113,
max: 7116
}, {
id: 3002,
title: "找",
type: 1,
min: 7117,
max: 7120
}, {
id: 3003,
title: "照",
type: 1,
min: 7121,
max: 7124
}, {
id: 3004,
title: "哲",
type: 1,
min: 7125,
max: 7128
}, {
id: 3005,
title: "柘",
type: 1,
min: 7129,
max: 7132
}, {
id: 3006,
title: "贞",
type: 1,
min: 7133,
max: 7136
}, {
id: 3007,
title: "珍",
type: 1,
min: 7137,
max: 7140
}, {
id: 3008,
title: "针",
type: 1,
min: 7141,
max: 7144
}, {
id: 3009,
title: "溱",
type: 1,
min: 7145,
max: 7148
}, {
id: 3010,
title: "榛",
type: 1,
min: 7149,
max: 7152
}, {
id: 3011,
title: "枕",
type: 1,
min: 7153,
max: 7156
}, {
id: 3012,
title: "震",
type: 1,
min: 7157,
max: 7160
}, {
id: 3013,
title: "之",
type: 1,
min: 7161,
max: 7164
}, {
id: 3014,
title: "芝",
type: 1,
min: 7165,
max: 7168
}, {
id: 3015,
title: "知",
type: 1,
min: 7169,
max: 7172
}, {
id: 3016,
title: "枝",
type: 1,
min: 7173,
max: 7176
}, {
id: 3017,
title: "枝如",
type: 1,
min: 7177,
max: 7180
}, {
id: 3018,
title: "执",
type: 1,
min: 7181,
max: 7184
}, {
id: 3019,
title: "止",
type: 1,
min: 7185,
max: 7188
}, {
id: 3020,
title: "纸",
type: 1,
min: 7189,
max: 7192
}, {
id: 3021,
title: "志",
type: 1,
min: 7193,
max: 7196
}, {
id: 3022,
title: "质",
type: 1,
min: 7197,
max: 7200
}, {
id: 3023,
title: "制",
type: 1,
min: 7201,
max: 7204
}, {
id: 3024,
title: "致",
type: 1,
min: 7205,
max: 7208
}, {
id: 3025,
title: "稚",
type: 1,
min: 7209,
max: 7212
}, {
id: 3026,
title: "中央",
type: 1,
min: 7213,
max: 7216
}, {
id: 3027,
title: "中英",
type: 1,
min: 7217,
max: 7220
}, {
id: 3028,
title: "钟离",
type: 1,
min: 7221,
max: 7224
}, {
id: 3029,
title: "重",
type: 1,
min: 7225,
max: 7228
}, {
id: 3030,
title: "州",
type: 1,
min: 7229,
max: 7232
}, {
id: 3031,
title: "舟",
type: 1,
min: 7233,
max: 7236
}, {
id: 3032,
title: "宙",
type: 1,
min: 7237,
max: 7240
}, {
id: 3033,
title: "昼",
type: 1,
min: 7241,
max: 7244
}, {
id: 3034,
title: "侏",
type: 1,
min: 7245,
max: 7248
}, {
id: 3035,
title: "诸御",
type: 1,
min: 7249,
max: 7252
}, {
id: 3036,
title: "术",
type: 1,
min: 7253,
max: 7256
}, {
id: 3037,
title: "主父",
type: 1,
min: 7257,
max: 7260
}, {
id: 3038,
title: "住",
type: 1,
min: 7261,
max: 7264
}, {
id: 3039,
title: "注",
type: 1,
min: 7265,
max: 7268
}, {
id: 3040,
title: "柱",
type: 1,
min: 7269,
max: 7272
}, {
id: 3041,
title: "杼",
type: 1,
min: 7273,
max: 7276
}, {
id: 3042,
title: "颛",
type: 1,
min: 7277,
max: 7280
}, {
id: 3043,
title: "转",
type: 1,
min: 7281,
max: 7284
}, {
id: 3044,
title: "篆",
type: 1,
min: 7285,
max: 7288
}, {
id: 3045,
title: "追",
type: 1,
min: 7289,
max: 7292
}, {
id: 3046,
title: "坠",
type: 1,
min: 7293,
max: 7296
}, {
id: 3047,
title: "谆",
type: 1,
min: 7297,
max: 7300
}, {
id: 3048,
title: "浞",
type: 1,
min: 7301,
max: 7304
}, {
id: 3049,
title: "孜",
type: 1,
min: 7305,
max: 7308
}, {
id: 3050,
title: "兹",
type: 1,
min: 7309,
max: 7312
}, {
id: 3051,
title: "子",
type: 1,
min: 7313,
max: 7316
}, {
id: 3052,
title: "子服",
type: 1,
min: 7317,
max: 7320
}, {
id: 3053,
title: "子家",
type: 1,
min: 7321,
max: 7324
}, {
id: 3054,
title: "子桑",
type: 1,
min: 7325,
max: 7328
}, {
id: 3055,
title: "子我",
type: 1,
min: 7329,
max: 7332
}, {
id: 3056,
title: "梓",
type: 1,
min: 7333,
max: 7336
}, {
id: 3057,
title: "姊",
type: 1,
min: 7337,
max: 7340
}, {
id: 3058,
title: "总",
type: 1,
min: 7341,
max: 7344
}, {
id: 3059,
title: "驺",
type: 1,
min: 7345,
max: 7348
}, {
id: 3060,
title: "足",
type: 1,
min: 7349,
max: 7352
}, {
id: 3061,
title: "最",
type: 1,
min: 7353,
max: 7356
}, {
id: 3062,
title: "尊",
type: 1,
min: 7357,
max: 7360
}, {
id: 3063,
title: "遵",
type: 1,
min: 7361,
max: 7364
}, {
id: 3064,
title: "作",
type: 1,
min: 7365,
max: 7368
}, {
id: 3065,
title: "坐",
type: 1,
min: 7369,
max: 7372
}, {
id: 3066,
title: "柞",
type: 1,
min: 7373,
max: 7376
}, {
id: 3067,
title: "禅",
type: 1,
min: 7377,
max: 7381
}, {
id: 3068,
title: "蜍",
type: 1,
min: 7382,
max: 7386
}, {
id: 3069,
title: "或",
type: 1,
min: 7387,
max: 7391
}, {
id: 3070,
title: "濩",
type: 1,
min: 7392,
max: 7396
}, {
id: 3071,
title: "旌",
type: 1,
min: 7397,
max: 7401
}, {
id: 3072,
title: "蒲衣",
type: 1,
min: 7402,
max: 7406
}, {
id: 3073,
title: "枪",
type: 1,
min: 7407,
max: 7411
}, {
id: 3074,
title: "茙",
type: 1,
min: 7412,
max: 7416
}, {
id: 3075,
title: "使",
type: 1,
min: 7417,
max: 7421
}, {
id: 3076,
title: "世",
type: 1,
min: 7422,
max: 7426
}, {
id: 3077,
title: "涑",
type: 1,
min: 7427,
max: 7431
}, {
id: 3078,
title: "土",
type: 1,
min: 7432,
max: 7436
}, {
id: 3079,
title: "务",
type: 1,
min: 7437,
max: 7441
}, {
id: 3080,
title: "西方",
type: 1,
min: 7442,
max: 7446
}, {
id: 3081,
title: "鸭",
type: 1,
min: 7447,
max: 7451
}, {
id: 3082,
title: "与",
type: 1,
min: 7452,
max: 7456
}, {
id: 3083,
title: "祝产",
type: 1,
min: 7457,
max: 7461
}, {
id: 3084,
title: "敞",
type: 1,
min: 7462,
max: 7467
}, {
id: 3085,
title: "复生",
type: 1,
min: 7468,
max: 7473
}, {
id: 3086,
title: "徕",
type: 1,
min: 7474,
max: 7479
}, {
id: 3087,
title: "努",
type: 1,
min: 7480,
max: 7485
}, {
id: 3088,
title: "牵",
type: 1,
min: 7486,
max: 7491
}, {
id: 3089,
title: "彊",
type: 1,
min: 7492,
max: 7497
}, {
id: 3090,
title: "热",
type: 1,
min: 7498,
max: 7503
}, {
id: 3091,
title: "参",
type: 1,
min: 7504,
max: 7509
}, {
id: 3092,
title: "式",
type: 1,
min: 7510,
max: 7515
}, {
id: 3093,
title: "旰",
type: 1,
min: 7516,
max: 7522
}, {
id: 3094,
title: "縠",
type: 1,
min: 7523,
max: 7529
}, {
id: 3095,
title: "麋",
type: 1,
min: 7530,
max: 7536
}, {
id: 3096,
title: "粆",
type: 1,
min: 7537,
max: 7543
}, {
id: 3097,
title: "桐",
type: 1,
min: 7544,
max: 7550
}, {
id: 3098,
title: "拓",
type: 1,
min: 7551,
max: 7557
}, {
id: 3099,
title: "窒中",
type: 1,
min: 7558,
max: 7564
}, {
id: 3100,
title: "佐",
type: 1,
min: 7565,
max: 7571
}, {
id: 3101,
title: "不",
type: 1,
min: 7572,
max: 7579
}, {
id: 3102,
title: "郕",
type: 1,
min: 7580,
max: 7587
}, {
id: 3103,
title: "渴",
type: 1,
min: 7588,
max: 7595
}, {
id: 3104,
title: "赉",
type: 1,
min: 7596,
max: 7603
}, {
id: 3105,
title: "鄱",
type: 1,
min: 7604,
max: 7611
}, {
id: 3106,
title: "菼",
type: 1,
min: 7612,
max: 7619
}, {
id: 3107,
title: "姺",
type: 1,
min: 7620,
max: 7627
}, {
id: 3108,
title: "羿",
type: 1,
min: 7628,
max: 7635
}, {
id: 3109,
title: "纯狐",
type: 1,
min: 7636,
max: 7644
}, {
id: 3110,
title: "雕漆",
type: 1,
min: 7645,
max: 7653
}, {
id: 3111,
title: "娸",
type: 1,
min: 7654,
max: 7662
}, {
id: 3112,
title: "疏",
type: 1,
min: 7663,
max: 7671
}, {
id: 3113,
title: "闸",
type: 1,
min: 7672,
max: 7680
}, {
id: 3114,
title: "阿",
type: 1,
min: 7681,
max: 7690
}, {
id: 3115,
title: "哀",
type: 1,
min: 7691,
max: 7700
}, {
id: 3116,
title: "爱",
type: 1,
min: 7701,
max: 7710
}, {
id: 3117,
title: "乘",
type: 1,
min: 7711,
max: 7720
}, {
id: 3118,
title: "承",
type: 1,
min: 7721,
max: 7730
}, {
id: 3119,
title: "诚",
type: 1,
min: 7731,
max: 7740
}, {
id: 3120,
title: "逞",
type: 1,
min: 7741,
max: 7750
}, {
id: 3121,
title: "絺",
type: 1,
min: 7751,
max: 7760
}, {
id: 3122,
title: "春",
type: 1,
min: 7761,
max: 7770
}, {
id: 3123,
title: "淳",
type: 1,
min: 7771,
max: 7780
}, {
id: 3124,
title: "慈",
type: 1,
min: 7781,
max: 7790
}, {
id: 3125,
title: "淡",
type: 1,
min: 7791,
max: 7800
}, {
id: 3126,
title: "啖",
type: 1,
min: 7801,
max: 7810
}, {
id: 3127,
title: "宕",
type: 1,
min: 7811,
max: 7820
}, {
id: 3128,
title: "荡",
type: 1,
min: 7821,
max: 7830
}, {
id: 3129,
title: "道",
type: 1,
min: 7831,
max: 7840
}, {
id: 3130,
title: "德",
type: 1,
min: 7841,
max: 7850
}, {
id: 3131,
title: "登",
type: 1,
min: 7851,
max: 7860
}, {
id: 3132,
title: "底",
type: 1,
min: 7861,
max: 7870
}, {
id: 3133,
title: "第",
type: 1,
min: 7871,
max: 7880
}, {
id: 3134,
title: "殿",
type: 1,
min: 7881,
max: 7890
}, {
id: 3135,
title: "奠",
type: 1,
min: 7891,
max: 7900
}, {
id: 3136,
title: "迭",
type: 1,
min: 7901,
max: 7910
}, {
id: 3137,
title: "鼎",
type: 1,
min: 7911,
max: 7920
}, {
id: 3138,
title: "定",
type: 1,
min: 7921,
max: 7930
}, {
id: 3139,
title: "东宫",
type: 1,
min: 7931,
max: 7940
}, {
id: 3140,
title: "东野",
type: 1,
min: 7941,
max: 7950
}, {
id: 3141,
title: "冬",
type: 1,
min: 7951,
max: 7960
}, {
id: 3142,
title: "豆",
type: 1,
min: 7961,
max: 7970
}, {
id: 3143,
title: "鬥",
type: 1,
min: 7971,
max: 7980
}, {
id: 3144,
title: "独",
type: 1,
min: 7981,
max: 7990
}, {
id: 3145,
title: "渎",
type: 1,
min: 7991,
max: 8e3
}, {
id: 3146,
title: "度",
type: 1,
min: 8001,
max: 8010
}, {
id: 3147,
title: "端",
type: 1,
min: 8011,
max: 8020
}, {
id: 3148,
title: "囤",
type: 1,
min: 8021,
max: 8030
}, {
id: 3149,
title: "多",
type: 1,
min: 8031,
max: 8040
}, {
id: 3150,
title: "朵",
type: 1,
min: 8041,
max: 8050
}, {
id: 3151,
title: "阿",
type: 1,
min: 8051,
max: 8060
}, {
id: 3152,
title: "娥",
type: 1,
min: 8061,
max: 8070
}, {
id: 3153,
title: "而",
type: 1,
min: 8071,
max: 8080
}, {
id: 3154,
title: "耳",
type: 1,
min: 8081,
max: 8090
}, {
id: 3155,
title: "伐",
type: 1,
min: 8091,
max: 8100
}, {
id: 3156,
title: "番",
type: 1,
min: 8101,
max: 8110
}, {
id: 3157,
title: "藩",
type: 1,
min: 8111,
max: 8120
}, {
id: 3158,
title: "凡",
type: 1,
min: 8121,
max: 8130
}, {
id: 3159,
title: "氾",
type: 1,
min: 8131,
max: 8140
}, {
id: 3160,
title: "芳",
type: 1,
min: 8141,
max: 8150
}, {
id: 3161,
title: "访",
type: 1,
min: 8151,
max: 8160
}, {
id: 3162,
title: "非",
type: 1,
min: 8161,
max: 8170
}, {
id: 3163,
title: "奋",
type: 1,
min: 8171,
max: 8180
}, {
id: 3164,
title: "逢",
type: 1,
min: 8181,
max: 8190
}, {
id: 3165,
title: "逢门",
type: 1,
min: 8191,
max: 8200
}, {
id: 3166,
title: "奉",
type: 1,
min: 8201,
max: 8210
}, {
id: 3167,
title: "俸",
type: 1,
min: 8211,
max: 8220
}, {
id: 3168,
title: "弗",
type: 1,
min: 8221,
max: 8230
}, {
id: 3169,
title: "佛",
type: 1,
min: 8231,
max: 8240
}, {
id: 3170,
title: "鄜",
type: 1,
min: 8241,
max: 8250
}, {
id: 3171,
title: "苻",
type: 1,
min: 8251,
max: 8260
}, {
id: 3172,
title: "服",
type: 1,
min: 8261,
max: 8270
}, {
id: 3173,
title: "府",
type: 1,
min: 8271,
max: 8280
}, {
id: 3174,
title: "甫",
type: 1,
min: 8281,
max: 8290
}, {
id: 3175,
title: "辅",
type: 1,
min: 8291,
max: 8300
}, {
id: 3176,
title: "釜",
type: 1,
min: 8301,
max: 8310
}, {
id: 3177,
title: "付",
type: 1,
min: 8311,
max: 8320
}, {
id: 3178,
title: "复",
type: 1,
min: 8321,
max: 8330
}, {
id: 3179,
title: "该",
type: 1,
min: 8331,
max: 8340
}, {
id: 3180,
title: "改",
type: 1,
min: 8341,
max: 8350
}, {
id: 3181,
title: "敢",
type: 1,
min: 8351,
max: 8360
}, {
id: 3182,
title: "感",
type: 1,
min: 8361,
max: 8370
}, {
id: 3183,
title: "淦",
type: 1,
min: 8371,
max: 8380
}, {
id: 3184,
title: "冮",
type: 1,
min: 8381,
max: 8390
}, {
id: 3185,
title: "冈",
type: 1,
min: 8391,
max: 8400
}, {
id: 3186,
title: "刚",
type: 1,
min: 8401,
max: 8410
}, {
id: 3187,
title: "皋",
type: 1,
min: 8411,
max: 8420
}, {
id: 3188,
title: "阁",
type: 1,
min: 8421,
max: 8430
}, {
id: 3189,
title: "盖",
type: 1,
min: 8431,
max: 8440
}, {
id: 3190,
title: "更",
type: 1,
min: 8441,
max: 8450
}, {
id: 3191,
title: "公叔",
type: 1,
min: 8451,
max: 8460
}, {
id: 3192,
title: "公夏",
type: 1,
min: 8461,
max: 8470
}, {
id: 3193,
title: "公仲",
type: 1,
min: 8471,
max: 8480
}, {
id: 3194,
title: "功",
type: 1,
min: 8481,
max: 8490
}, {
id: 3195,
title: "攻",
type: 1,
min: 8491,
max: 8500
}, {
id: 3196,
title: "共",
type: 1,
min: 8501,
max: 8510
}, {
id: 3197,
title: "狗",
type: 1,
min: 8511,
max: 8520
}, {
id: 3198,
title: "鼓",
type: 1,
min: 8521,
max: 8530
}, {
id: 3199,
title: "固",
type: 1,
min: 8531,
max: 8540
}, {
id: 3200,
title: "瓜田",
type: 1,
min: 8541,
max: 8550
}, {
id: 3201,
title: "官",
type: 1,
min: 8551,
max: 8560
}, {
id: 3202,
title: "莞",
type: 1,
min: 8561,
max: 8570
}, {
id: 3203,
title: "观",
type: 1,
min: 8571,
max: 8580
}, {
id: 3204,
title: "贯",
type: 1,
min: 8581,
max: 8590
}, {
id: 3205,
title: "光",
type: 1,
min: 8591,
max: 8600
}, {
id: 3206,
title: "贵",
type: 1,
min: 8601,
max: 8610
}, {
id: 3207,
title: "呙",
type: 1,
min: 8611,
max: 8620
}, {
id: 3208,
title: "虢",
type: 1,
min: 8621,
max: 8630
}, {
id: 3209,
title: "汉",
type: 1,
min: 8631,
max: 8640
}, {
id: 3210,
title: "蒿",
type: 1,
min: 8641,
max: 8650
}, {
id: 3211,
title: "好",
type: 1,
min: 8651,
max: 8660
}, {
id: 3212,
title: "浩",
type: 1,
min: 8661,
max: 8670
}, {
id: 3213,
title: "禾",
type: 1,
min: 8671,
max: 8680
}, {
id: 3214,
title: "合",
type: 1,
min: 8681,
max: 8690
}, {
id: 3215,
title: "赫",
type: 1,
min: 8691,
max: 8700
}, {
id: 3216,
title: "黑",
type: 1,
min: 8701,
max: 8710
}, {
id: 3217,
title: "恒",
type: 1,
min: 8711,
max: 8720
}, {
id: 3218,
title: "横",
type: 1,
min: 8721,
max: 8730
}, {
id: 3219,
title: "宏",
type: 1,
min: 8731,
max: 8740
}, {
id: 3220,
title: "鸿",
type: 1,
min: 8741,
max: 8750
}, {
id: 3221,
title: "候",
type: 1,
min: 8751,
max: 8760
}, {
id: 3222,
title: "狐",
type: 1,
min: 8761,
max: 8770
}, {
id: 3223,
title: "虎",
type: 1,
min: 8771,
max: 8780
}, {
id: 3224,
title: "户",
type: 1,
min: 8781,
max: 8790
}, {
id: 3225,
title: "沪",
type: 1,
min: 8791,
max: 8800
}, {
id: 3226,
title: "化",
type: 1,
min: 8801,
max: 8810
}, {
id: 3227,
title: "槐",
type: 1,
min: 8811,
max: 8820
}, {
id: 3228,
title: "还",
type: 1,
min: 8821,
max: 8830
}, {
id: 3229,
title: "环",
type: 1,
min: 8831,
max: 8840
}, {
id: 3230,
title: "会",
type: 1,
min: 8841,
max: 8850
}, {
id: 3231,
title: "慧",
type: 1,
min: 8851,
max: 8860
}, {
id: 3232,
title: "浑",
type: 1,
min: 8861,
max: 8870
}, {
id: 3233,
title: "火",
type: 1,
min: 8871,
max: 8880
}, {
id: 3234,
title: "基",
type: 1,
min: 8881,
max: 8890
}, {
id: 3235,
title: "稽",
type: 1,
min: 8891,
max: 8900
}, {
id: 3236,
title: "及",
type: 1,
min: 8901,
max: 8910
}, {
id: 3237,
title: "己墨",
type: 1,
min: 8911,
max: 8920
}, {
id: 3238,
title: "戢",
type: 1,
min: 8921,
max: 8930
}, {
id: 3239,
title: "己",
type: 1,
min: 8931,
max: 8940
}, {
id: 3240,
title: "济",
type: 1,
min: 8941,
max: 8950
}, {
id: 3241,
title: "技",
type: 1,
min: 8951,
max: 8960
}, {
id: 3242,
title: "记",
type: 1,
min: 8961,
max: 8970
}, {
id: 3243,
title: "际",
type: 1,
min: 8971,
max: 8980
}, {
id: 3244,
title: "继",
type: 1,
min: 8981,
max: 8990
}, {
id: 3245,
title: "加",
type: 1,
min: 8991,
max: 9e3
}, {
id: 3246,
title: "佳",
type: 1,
min: 9001,
max: 9010
}, {
id: 3247,
title: "嘉",
type: 1,
min: 9011,
max: 9020
}, {
id: 3248,
title: "夹",
type: 1,
min: 9021,
max: 9030
}, {
id: 3249,
title: "甲",
type: 1,
min: 9031,
max: 9040
}, {
id: 3250,
title: "假",
type: 1,
min: 9041,
max: 9050
}, {
id: 3251,
title: "坚",
type: 1,
min: 9051,
max: 9060
}, {
id: 3252,
title: "间",
type: 1,
min: 9061,
max: 9070
}, {
id: 3253,
title: "菅",
type: 1,
min: 9071,
max: 9080
}, {
id: 3254,
title: "减",
type: 1,
min: 9081,
max: 9090
}, {
id: 3255,
title: "蹇",
type: 1,
min: 9091,
max: 9100
}, {
id: 3256,
title: "见",
type: 1,
min: 9101,
max: 9110
}, {
id: 3257,
title: "监",
type: 1,
min: 9111,
max: 9120
}, {
id: 3258,
title: "荐",
type: 1,
min: 9121,
max: 9130
}, {
id: 3259,
title: "贱",
type: 1,
min: 9131,
max: 9140
}, {
id: 3260,
title: "建",
type: 1,
min: 9141,
max: 9150
}, {
id: 3261,
title: "渐",
type: 1,
min: 9151,
max: 9160
}, {
id: 3262,
title: "鉴",
type: 1,
min: 9161,
max: 9170
}, {
id: 3263,
title: "将",
type: 1,
min: 9171,
max: 9180
}, {
id: 3264,
title: "薑",
type: 1,
min: 9181,
max: 9190
}, {
id: 3265,
title: "疆",
type: 1,
min: 9191,
max: 9200
}, {
id: 3266,
title: "匠",
type: 1,
min: 9201,
max: 9210
}, {
id: 3267,
title: "降",
type: 1,
min: 9211,
max: 9220
}, {
id: 3268,
title: "虹",
type: 1,
min: 9221,
max: 9230
}, {
id: 3269,
title: "交",
type: 1,
min: 9231,
max: 9240
}, {
id: 3270,
title: "胶",
type: 1,
min: 9241,
max: 9250
}, {
id: 3271,
title: "矫",
type: 1,
min: 9251,
max: 9260
}, {
id: 3272,
title: "缴",
type: 1,
min: 9261,
max: 9270
}, {
id: 3273,
title: "搅",
type: 1,
min: 9271,
max: 9280
}, {
id: 3274,
title: "较",
type: 1,
min: 9281,
max: 9290
}, {
id: 3275,
title: "教",
type: 1,
min: 9291,
max: 9300
}, {
id: 3276,
title: "接",
type: 1,
min: 9301,
max: 9310
}, {
id: 3277,
title: "杰",
type: 1,
min: 9311,
max: 9320
}, {
id: 3278,
title: "颉",
type: 1,
min: 9321,
max: 9330
}, {
id: 3279,
title: "进",
type: 1,
min: 9331,
max: 9340
}, {
id: 3280,
title: "京",
type: 1,
min: 9341,
max: 9350
}, {
id: 3281,
title: "敬",
type: 1,
min: 9351,
max: 9360
}, {
id: 3282,
title: "靖",
type: 1,
min: 9361,
max: 9370
}, {
id: 3283,
title: "静",
type: 1,
min: 9371,
max: 9380
}, {
id: 3284,
title: "镜",
type: 1,
min: 9381,
max: 9390
}, {
id: 3285,
title: "久",
type: 1,
min: 9391,
max: 9400
}, {
id: 3286,
title: "酒",
type: 1,
min: 9401,
max: 9410
}, {
id: 3287,
title: "舅",
type: 1,
min: 9411,
max: 9420
}, {
id: 3288,
title: "琚",
type: 1,
min: 9421,
max: 9430
}, {
id: 3289,
title: "俱",
type: 1,
min: 9431,
max: 9440
}, {
id: 3290,
title: "举",
type: 1,
min: 9441,
max: 9450
}, {
id: 3291,
title: "巨",
type: 1,
min: 9451,
max: 9460
}, {
id: 3292,
title: "巨无",
type: 1,
min: 9461,
max: 9470
}, {
id: 3293,
title: "据",
type: 1,
min: 9471,
max: 9480
}, {
id: 3294,
title: "具",
type: 1,
min: 9481,
max: 9490
}, {
id: 3295,
title: "拒",
type: 1,
min: 9491,
max: 9500
}, {
id: 3296,
title: "隽",
type: 1,
min: 9501,
max: 9510
}, {
id: 3297,
title: "角",
type: 1,
min: 9511,
max: 9520
}, {
id: 3298,
title: "爵",
type: 1,
min: 9521,
max: 9530
}, {
id: 3299,
title: "看",
type: 1,
min: 9531,
max: 9540
}, {
id: 3300,
title: "堪",
type: 1,
min: 9541,
max: 9550
}, {
id: 3301,
title: "坎",
type: 1,
min: 9551,
max: 9560
}, {
id: 3302,
title: "抗",
type: 1,
min: 9561,
max: 9570
}, {
id: 3303,
title: "考",
type: 1,
min: 9571,
max: 9580
}, {
id: 3304,
title: "靠",
type: 1,
min: 9581,
max: 9590
}, {
id: 3305,
title: "科",
type: 1,
min: 9591,
max: 9600
}, {
id: 3306,
title: "可",
type: 1,
min: 9601,
max: 9610
}, {
id: 3307,
title: "克",
type: 1,
min: 9611,
max: 9620
}, {
id: 3308,
title: "客",
type: 1,
min: 9621,
max: 9630
}, {
id: 3309,
title: "阬",
type: 1,
min: 9631,
max: 9640
}, {
id: 3310,
title: "坑",
type: 1,
min: 9641,
max: 9650
}, {
id: 3311,
title: "苦",
type: 1,
min: 9651,
max: 9660
}, {
id: 3312,
title: "库",
type: 1,
min: 9661,
max: 9670
}, {
id: 3313,
title: "旷",
type: 1,
min: 9671,
max: 9680
}, {
id: 3314,
title: "魁",
type: 1,
min: 9681,
max: 9690
}, {
id: 3315,
title: "坤",
type: 1,
min: 9691,
max: 9700
}, {
id: 3316,
title: "莱",
type: 1,
min: 9701,
max: 9710
}, {
id: 3317,
title: "阑",
type: 1,
min: 9711,
max: 9720
}, {
id: 3318,
title: "篮",
type: 1,
min: 9721,
max: 9730
}, {
id: 3319,
title: "琅",
type: 1,
min: 9731,
max: 9740
}, {
id: 3320,
title: "稂",
type: 1,
min: 9741,
max: 9750
}, {
id: 3321,
title: "浪",
type: 1,
min: 9751,
max: 9760
}, {
id: 3322,
title: "牢",
type: 1,
min: 9761,
max: 9770
}, {
id: 3323,
title: "老",
type: 1,
min: 9771,
max: 9780
}, {
id: 3324,
title: "老成",
type: 1,
min: 9781,
max: 9790
}, {
id: 3325,
title: "类",
type: 1,
min: 9791,
max: 9800
}, {
id: 3326,
title: "梨",
type: 1,
min: 9801,
max: 9810
}, {
id: 3327,
title: "里",
type: 1,
min: 9811,
max: 9820
}, {
id: 3328,
title: "理",
type: 1,
min: 9821,
max: 9830
}, {
id: 3329,
title: "力",
type: 1,
min: 9831,
max: 9840
}, {
id: 3330,
title: "立",
type: 1,
min: 9841,
max: 9850
}, {
id: 3331,
title: "吏",
type: 1,
min: 9851,
max: 9860
}, {
id: 3332,
title: "历",
type: 1,
min: 9861,
max: 9870
}, {
id: 3333,
title: "栎阳",
type: 1,
min: 9871,
max: 9880
}, {
id: 3334,
title: "丽",
type: 1,
min: 9881,
max: 9890
}, {
id: 3335,
title: "联",
type: 1,
min: 9891,
max: 9900
}, {
id: 3336,
title: "练",
type: 1,
min: 9901,
max: 9910
}, {
id: 3337,
title: "炼",
type: 1,
min: 9911,
max: 9920
}, {
id: 3338,
title: "尞",
type: 1,
min: 9921,
max: 9930
}, {
id: 3339,
title: "列",
type: 1,
min: 9931,
max: 9940
}, {
id: 3340,
title: "吝",
type: 1,
min: 9941,
max: 9950
}, {
id: 3341,
title: "灵",
type: 1,
min: 9951,
max: 9960
}, {
id: 3342,
title: "陵",
type: 1,
min: 9961,
max: 9970
}, {
id: 3343,
title: "零",
type: 1,
min: 9971,
max: 9980
}, {
id: 3344,
title: "令",
type: 1,
min: 9981,
max: 9990
}, {
id: 3345,
title: "留",
type: 1,
min: 9991,
max: 1e4
}, {
id: 3346,
title: "六",
type: 1,
min: 10001,
max: 10010
}, {
id: 3347,
title: "鸗",
type: 1,
min: 10011,
max: 10020
}, {
id: 3348,
title: "泷",
type: 1,
min: 10021,
max: 10030
}, {
id: 3349,
title: "陆费",
type: 1,
min: 10031,
max: 10040
}, {
id: 3350,
title: "露",
type: 1,
min: 10041,
max: 10050
}, {
id: 3351,
title: "侣",
type: 1,
min: 10051,
max: 10060
}, {
id: 3352,
title: "履",
type: 1,
min: 10061,
max: 10070
}, {
id: 3353,
title: "虑",
type: 1,
min: 10071,
max: 10080
}, {
id: 3354,
title: "律",
type: 1,
min: 10081,
max: 10090
}, {
id: 3355,
title: "绿",
type: 1,
min: 10091,
max: 10100
}, {
id: 3356,
title: "銮",
type: 1,
min: 10101,
max: 10110
}, {
id: 3357,
title: "仑",
type: 1,
min: 10111,
max: 10120
}, {
id: 3358,
title: "伦",
type: 1,
min: 10121,
max: 10130
}, {
id: 3359,
title: "洛",
type: 1,
min: 10131,
max: 10140
}, {
id: 3360,
title: "络",
type: 1,
min: 10141,
max: 10150
}, {
id: 3361,
title: "雒",
type: 1,
min: 10151,
max: 10160
}, {
id: 3362,
title: "马蒙",
type: 1,
min: 10161,
max: 10170
}, {
id: 3363,
title: "玛",
type: 1,
min: 10171,
max: 10180
}, {
id: 3364,
title: "祃",
type: 1,
min: 10181,
max: 10190
}, {
id: 3365,
title: "买",
type: 1,
min: 10191,
max: 10200
}, {
id: 3366,
title: "迈",
type: 1,
min: 10201,
max: 10210
}, {
id: 3367,
title: "卖",
type: 1,
min: 10211,
max: 10220
}, {
id: 3368,
title: "麦",
type: 1,
min: 10221,
max: 10230
}, {
id: 3369,
title: "曼",
type: 1,
min: 10231,
max: 10240
}, {
id: 3370,
title: "莽",
type: 1,
min: 10241,
max: 10250
}, {
id: 3371,
title: "茆",
type: 1,
min: 10251,
max: 10260
}, {
id: 3372,
title: "髦",
type: 1,
min: 10261,
max: 10270
}, {
id: 3373,
title: "卯",
type: 1,
min: 10271,
max: 10280
}, {
id: 3374,
title: "茂",
type: 1,
min: 10281,
max: 10290
}, {
id: 3375,
title: "冒",
type: 1,
min: 10291,
max: 10300
}, {
id: 3376,
title: "媒",
type: 1,
min: 10301,
max: 10310
}, {
id: 3377,
title: "美",
type: 1,
min: 10311,
max: 10320
}, {
id: 3378,
title: "樠",
type: 1,
min: 10321,
max: 10330
}, {
id: 3379,
title: "萌",
type: 1,
min: 10331,
max: 10340
}, {
id: 3380,
title: "縻",
type: 1,
min: 10341,
max: 10350
}, {
id: 3381,
title: "芈",
type: 1,
min: 10351,
max: 10360
}, {
id: 3382,
title: "密",
type: 1,
min: 10361,
max: 10370
}, {
id: 3383,
title: "蜜",
type: 1,
min: 10371,
max: 10380
}, {
id: 3384,
title: "绵",
type: 1,
min: 10381,
max: 10390
}, {
id: 3385,
title: "棉",
type: 1,
min: 10391,
max: 10400
}, {
id: 3386,
title: "娩",
type: 1,
min: 10401,
max: 10410
}, {
id: 3387,
title: "妙",
type: 1,
min: 10411,
max: 10420
}, {
id: 3388,
title: "庙",
type: 1,
min: 10421,
max: 10430
}, {
id: 3389,
title: "闽",
type: 1,
min: 10431,
max: 10440
}, {
id: 3390,
title: "敏",
type: 1,
min: 10441,
max: 10450
}, {
id: 3391,
title: "名",
type: 1,
min: 10451,
max: 10460
}, {
id: 3392,
title: "鄍",
type: 1,
min: 10461,
max: 10470
}, {
id: 3393,
title: "鸣",
type: 1,
min: 10471,
max: 10480
}, {
id: 3394,
title: "谬",
type: 1,
min: 10481,
max: 10490
}, {
id: 3395,
title: "谟",
type: 1,
min: 10491,
max: 10500
}, {
id: 3396,
title: "摩",
type: 1,
min: 10501,
max: 10510
}, {
id: 3397,
title: "磨",
type: 1,
min: 10511,
max: 10520
}, {
id: 3398,
title: "磨难",
type: 1,
min: 10521,
max: 10530
}, {
id: 3399,
title: "沫",
type: 1,
min: 10531,
max: 10540
}, {
id: 3400,
title: "默",
type: 1,
min: 10541,
max: 10550
}, {
id: 3401,
title: "侔",
type: 1,
min: 10551,
max: 10560
}, {
id: 3402,
title: "母",
type: 1,
min: 10561,
max: 10570
}, {
id: 3403,
title: "目",
type: 1,
min: 10571,
max: 10580
}, {
id: 3404,
title: "睦",
type: 1,
min: 10581,
max: 10590
}, {
id: 3405,
title: "乃",
type: 1,
min: 10591,
max: 10600
}, {
id: 3406,
title: "奈",
type: 1,
min: 10601,
max: 10610
}, {
id: 3407,
title: "赧",
type: 1,
min: 10611,
max: 10620
}, {
id: 3408,
title: "尼",
type: 1,
min: 10621,
max: 10630
}, {
id: 3409,
title: "兒",
type: 1,
min: 10631,
max: 10640
}, {
id: 3410,
title: "倪犁",
type: 1,
min: 10641,
max: 10650
}, {
id: 3411,
title: "泥",
type: 1,
min: 10651,
max: 10660
}, {
id: 3412,
title: "念",
type: 1,
min: 10661,
max: 10670
}, {
id: 3413,
title: "纽",
type: 1,
min: 10671,
max: 10680
}, {
id: 3414,
title: "奴",
type: 1,
min: 10681,
max: 10690
}, {
id: 3415,
title: "偶",
type: 1,
min: 10691,
max: 10700
}, {
id: 3416,
title: "耦",
type: 1,
min: 10701,
max: 10710
}, {
id: 3417,
title: "帕",
type: 1,
min: 10711,
max: 10720
}, {
id: 3418,
title: "牌",
type: 1,
min: 10721,
max: 10730
}, {
id: 3419,
title: "盘",
type: 1,
min: 10731,
max: 10740
}, {
id: 3420,
title: "泮",
type: 1,
min: 10741,
max: 10750
}, {
id: 3421,
title: "培",
type: 1,
min: 10751,
max: 10760
}, {
id: 3422,
title: "沛",
type: 1,
min: 10761,
max: 10770
}, {
id: 3423,
title: "朋",
type: 1,
min: 10771,
max: 10780
}, {
id: 3424,
title: "藩",
type: 1,
min: 10781,
max: 10790
}, {
id: 3425,
title: "偏",
type: 1,
min: 10791,
max: 10800
}, {
id: 3426,
title: "骈",
type: 1,
min: 10801,
max: 10810
}, {
id: 3427,
title: "朴",
type: 1,
min: 10811,
max: 10820
}, {
id: 3428,
title: "票",
type: 1,
min: 10821,
max: 10830
}, {
id: 3429,
title: "品",
type: 1,
min: 10831,
max: 10840
}, {
id: 3430,
title: "屏",
type: 1,
min: 10841,
max: 10850
}, {
id: 3431,
title: "凭",
type: 1,
min: 10851,
max: 10860
}, {
id: 3432,
title: "萍",
type: 1,
min: 10861,
max: 10870
}, {
id: 3433,
title: "坡",
type: 1,
min: 10871,
max: 10880
}, {
id: 3434,
title: "七",
type: 1,
min: 10881,
max: 10890
}, {
id: 3435,
title: "漆",
type: 1,
min: 10891,
max: 10900
}, {
id: 3436,
title: "亓官",
type: 1,
min: 10901,
max: 10910
}, {
id: 3437,
title: "其",
type: 1,
min: 10911,
max: 10920
}, {
id: 3438,
title: "旗",
type: 1,
min: 10921,
max: 10930
}, {
id: 3439,
title: "麒",
type: 1,
min: 10931,
max: 10940
}, {
id: 3440,
title: "启",
type: 1,
min: 10941,
max: 10950
}, {
id: 3441,
title: "杞",
type: 1,
min: 10951,
max: 10960
}, {
id: 3442,
title: "岂",
type: 1,
min: 10961,
max: 10970
}, {
id: 3443,
title: "千",
type: 1,
min: 10971,
max: 10980
}, {
id: 3444,
title: "骞",
type: 1,
min: 10981,
max: 10990
}, {
id: 3445,
title: "前",
type: 1,
min: 10991,
max: 11e3
}, {
id: 3446,
title: "潜",
type: 1,
min: 11001,
max: 11010
}, {
id: 3447,
title: "樵",
type: 1,
min: 11011,
max: 11020
}, {
id: 3448,
title: "巧",
type: 1,
min: 11021,
max: 11030
}, {
id: 3449,
title: "且",
type: 1,
min: 11031,
max: 11040
}, {
id: 3450,
title: "亲",
type: 1,
min: 11041,
max: 11050
}, {
id: 3451,
title: "庆",
type: 1,
min: 11051,
max: 11060
}, {
id: 3452,
title: "求",
type: 1,
min: 11061,
max: 11070
}, {
id: 3453,
title: "麴",
type: 1,
min: 11071,
max: 11080
}, {
id: 3454,
title: "渠丘",
type: 1,
min: 11081,
max: 11090
}, {
id: 3455,
title: "蘧",
type: 1,
min: 11091,
max: 11100
}, {
id: 3456,
title: "泉",
type: 1,
min: 11101,
max: 11110
}, {
id: 3457,
title: "雀",
type: 1,
min: 11111,
max: 11120
}, {
id: 3458,
title: "染",
type: 1,
min: 11121,
max: 11130
}, {
id: 3459,
title: "让",
type: 1,
min: 11131,
max: 11140
}, {
id: 3460,
title: "人",
type: 1,
min: 11141,
max: 11150
}, {
id: 3461,
title: "仁",
type: 1,
min: 11151,
max: 11160
}, {
id: 3462,
title: "日",
type: 1,
min: 11161,
max: 11170
}, {
id: 3463,
title: "如",
type: 1,
min: 11171,
max: 11180
}, {
id: 3464,
title: "瑞",
type: 1,
min: 11181,
max: 11190
}, {
id: 3465,
title: "萨",
type: 1,
min: 11191,
max: 11200
}, {
id: 3466,
title: "伞",
type: 1,
min: 11201,
max: 11210
}, {
id: 3467,
title: "散",
type: 1,
min: 11211,
max: 11220
}, {
id: 3468,
title: "森",
type: 1,
min: 11221,
max: 11230
}, {
id: 3469,
title: "陕",
type: 1,
min: 11231,
max: 11240
}, {
id: 3470,
title: "善",
type: 1,
min: 11241,
max: 11250
}, {
id: 3471,
title: "鄯",
type: 1,
min: 11251,
max: 11260
}, {
id: 3472,
title: "上",
type: 1,
min: 11261,
max: 11270
}, {
id: 3473,
title: "偿",
type: 1,
min: 11271,
max: 11280
}, {
id: 3474,
title: "绍",
type: 1,
min: 11281,
max: 11290
}, {
id: 3475,
title: "舍",
type: 1,
min: 11291,
max: 11300
}, {
id: 3476,
title: "莘",
type: 1,
min: 11301,
max: 11310
}, {
id: 3477,
title: "深",
type: 1,
min: 11311,
max: 11320
}, {
id: 3478,
title: "神",
type: 1,
min: 11321,
max: 11330
}, {
id: 3479,
title: "邥",
type: 1,
min: 11331,
max: 11340
}, {
id: 3480,
title: "生",
type: 1,
min: 11341,
max: 11350
}, {
id: 3481,
title: "绳",
type: 1,
min: 11351,
max: 11360
}, {
id: 3482,
title: "圣",
type: 1,
min: 11361,
max: 11370
}, {
id: 3483,
title: "胜",
type: 1,
min: 11371,
max: 11380
}, {
id: 3484,
title: "什",
type: 1,
min: 11381,
max: 11390
}, {
id: 3485,
title: "士",
type: 1,
min: 11391,
max: 11400
}, {
id: 3486,
title: "氏",
type: 1,
min: 11401,
max: 11410
}, {
id: 3487,
title: "试",
type: 1,
min: 11411,
max: 11420
}, {
id: 3488,
title: "守",
type: 1,
min: 11421,
max: 11430
}, {
id: 3489,
title: "术",
type: 1,
min: 11431,
max: 11440
}, {
id: 3490,
title: "栓",
type: 1,
min: 11441,
max: 11450
}, {
id: 3491,
title: "税",
type: 1,
min: 11451,
max: 11460
}, {
id: 3492,
title: "顺",
type: 1,
min: 11461,
max: 11470
}, {
id: 3493,
title: "硕",
type: 1,
min: 11471,
max: 11480
}, {
id: 3494,
title: "思",
type: 1,
min: 11481,
max: 11490
}, {
id: 3495,
title: "四",
type: 1,
min: 11491,
max: 11500
}, {
id: 3496,
title: "嵩",
type: 1,
min: 11501,
max: 11510
}, {
id: 3497,
title: "廋",
type: 1,
min: 11511,
max: 11520
}, {
id: 3498,
title: "速",
type: 1,
min: 11521,
max: 11530
}, {
id: 3499,
title: "素",
type: 1,
min: 11531,
max: 11540
}, {
id: 3500,
title: "粟",
type: 1,
min: 11541,
max: 11550
}, {
id: 3501,
title: "眭",
type: 1,
min: 11551,
max: 11560
}, {
id: 3502,
title: "睢",
type: 1,
min: 11561,
max: 11570
}, {
id: 3503,
title: "随",
type: 1,
min: 11571,
max: 11580
}, {
id: 3504,
title: "岁",
type: 1,
min: 11581,
max: 11590
}, {
id: 3505,
title: "遂",
type: 1,
min: 11591,
max: 11600
}, {
id: 3506,
title: "所",
type: 1,
min: 11601,
max: 11610
}, {
id: 3507,
title: "锁",
type: 1,
min: 11611,
max: 11620
}, {
id: 3508,
title: "榻",
type: 1,
min: 11621,
max: 11630
}, {
id: 3509,
title: "臺",
type: 1,
min: 11631,
max: 11640
}, {
id: 3510,
title: "泰",
type: 1,
min: 11641,
max: 11650
}, {
id: 3511,
title: "檀",
type: 1,
min: 11651,
max: 11660
}, {
id: 3512,
title: "堂",
type: 1,
min: 11661,
max: 11670
}, {
id: 3513,
title: "桃",
type: 1,
min: 11671,
max: 11680
}, {
id: 3514,
title: "特",
type: 1,
min: 11681,
max: 11690
}, {
id: 3515,
title: "遆",
type: 1,
min: 11691,
max: 11700
}, {
id: 3516,
title: "提",
type: 1,
min: 11701,
max: 11710
}, {
id: 3517,
title: "题",
type: 1,
min: 11711,
max: 11720
}, {
id: 3518,
title: "体",
type: 1,
min: 11721,
max: 11730
}, {
id: 3519,
title: "添",
type: 1,
min: 11731,
max: 11740
}, {
id: 3520,
title: "帖",
type: 1,
min: 11741,
max: 11750
}, {
id: 3521,
title: "庭",
type: 1,
min: 11751,
max: 11760
}, {
id: 3522,
title: "徒",
type: 1,
min: 11761,
max: 11770
}, {
id: 3523,
title: "吐",
type: 1,
min: 11771,
max: 11780
}, {
id: 3524,
title: "团",
type: 1,
min: 11781,
max: 11790
}, {
id: 3525,
title: "陀",
type: 1,
min: 11791,
max: 11800
}, {
id: 3526,
title: "驼",
type: 1,
min: 11801,
max: 11810
}, {
id: 3527,
title: "瓦",
type: 1,
min: 11811,
max: 11820
}, {
id: 3528,
title: "完",
type: 1,
min: 11821,
max: 11830
}, {
id: 3529,
title: "宛",
type: 1,
min: 11831,
max: 11840
}, {
id: 3530,
title: "望",
type: 1,
min: 11841,
max: 11850
}, {
id: 3531,
title: "威",
type: 1,
min: 11851,
max: 11860
}, {
id: 3532,
title: "维",
type: 1,
min: 11861,
max: 11870
}, {
id: 3533,
title: "未",
type: 1,
min: 11871,
max: 11880
}, {
id: 3534,
title: "问",
type: 1,
min: 11881,
max: 11890
}, {
id: 3535,
title: "瓮",
type: 1,
min: 11891,
max: 11900
}, {
id: 3536,
title: "屋",
type: 1,
min: 11901,
max: 11910
}, {
id: 3537,
title: "五",
type: 1,
min: 11911,
max: 11920
}, {
id: 3538,
title: "午",
type: 1,
min: 11921,
max: 11930
}, {
id: 3539,
title: "仵",
type: 1,
min: 11931,
max: 11940
}, {
id: 3540,
title: "希",
type: 1,
min: 11941,
max: 11950
}, {
id: 3541,
title: "息",
type: 1,
min: 11951,
max: 11960
}, {
id: 3542,
title: "谿",
type: 1,
min: 11961,
max: 11970
}, {
id: 3543,
title: "膝",
type: 1,
min: 11971,
max: 11980
}, {
id: 3544,
title: "僖",
type: 1,
min: 11981,
max: 11990
}, {
id: 3545,
title: "袭",
type: 1,
min: 11991,
max: 12e3
}, {
id: 3546,
title: "喜",
type: 1,
min: 12001,
max: 12010
}, {
id: 3547,
title: "郤",
type: 1,
min: 12011,
max: 12020
}, {
id: 3548,
title: "叚",
type: 1,
min: 12021,
max: 12030
}, {
id: 3549,
title: "霞",
type: 1,
min: 12031,
max: 12040
}, {
id: 3550,
title: "仙",
type: 1,
min: 12041,
max: 12050
}, {
id: 3551,
title: "先",
type: 1,
min: 12051,
max: 12060
}, {
id: 3552,
title: "贤",
type: 1,
min: 12061,
max: 12070
}, {
id: 3553,
title: "显",
type: 1,
min: 12071,
max: 12080
}, {
id: 3554,
title: "宪",
type: 1,
min: 12081,
max: 12090
}, {
id: 3555,
title: "献",
type: 1,
min: 12091,
max: 12100
}, {
id: 3556,
title: "羡",
type: 1,
min: 12101,
max: 12110
}, {
id: 3557,
title: "香",
type: 1,
min: 12111,
max: 12120
}, {
id: 3558,
title: "相令",
type: 1,
min: 12121,
max: 12130
}, {
id: 3559,
title: "襄",
type: 1,
min: 12131,
max: 12140
}, {
id: 3560,
title: "祥",
type: 1,
min: 12141,
max: 12150
}, {
id: 3561,
title: "象",
type: 1,
min: 12151,
max: 12160
}, {
id: 3562,
title: "销",
type: 1,
min: 12161,
max: 12170
}, {
id: 3563,
title: "嚣",
type: 1,
min: 12171,
max: 12180
}, {
id: 3564,
title: "晓",
type: 1,
min: 12181,
max: 12190
}, {
id: 3565,
title: "筱",
type: 1,
min: 12191,
max: 12200
}, {
id: 3566,
title: "孝",
type: 1,
min: 12201,
max: 12210
}, {
id: 3567,
title: "校",
type: 1,
min: 12211,
max: 12220
}, {
id: 3568,
title: "协",
type: 1,
min: 12221,
max: 12230
}, {
id: 3569,
title: "斜",
type: 1,
min: 12231,
max: 12240
}, {
id: 3570,
title: "颉",
type: 1,
min: 12241,
max: 12250
}, {
id: 3571,
title: "心",
type: 1,
min: 12251,
max: 12260
}, {
id: 3572,
title: "忻",
type: 1,
min: 12261,
max: 12270
}, {
id: 3573,
title: "欣",
type: 1,
min: 12271,
max: 12280
}, {
id: 3574,
title: "新",
type: 1,
min: 12281,
max: 12290
}, {
id: 3575,
title: "形",
type: 1,
min: 12291,
max: 12300
}, {
id: 3576,
title: "刑",
type: 1,
min: 12301,
max: 12310
}, {
id: 3577,
title: "荥",
type: 1,
min: 12311,
max: 12320
}, {
id: 3578,
title: "杏",
type: 1,
min: 12321,
max: 12330
}, {
id: 3579,
title: "雄",
type: 1,
min: 12331,
max: 12340
}, {
id: 3580,
title: "休",
type: 1,
min: 12341,
max: 12350
}, {
id: 3581,
title: "修",
type: 1,
min: 12351,
max: 12360
}, {
id: 3582,
title: "秀",
type: 1,
min: 12361,
max: 12370
}, {
id: 3583,
title: "旭",
type: 1,
min: 12371,
max: 12380
}, {
id: 3584,
title: "续",
type: 1,
min: 12381,
max: 12390
}, {
id: 3585,
title: "轩",
type: 1,
min: 12391,
max: 12400
}, {
id: 3586,
title: "轩辕",
type: 1,
min: 12401,
max: 12410
}, {
id: 3587,
title: "玄",
type: 1,
min: 12411,
max: 12420
}, {
id: 3588,
title: "旋",
type: 1,
min: 12421,
max: 12430
}, {
id: 3589,
title: "铉",
type: 1,
min: 12431,
max: 12440
}, {
id: 3590,
title: "学",
type: 1,
min: 12441,
max: 12450
}, {
id: 3591,
title: "雪",
type: 1,
min: 12451,
max: 12460
}, {
id: 3592,
title: "寻",
type: 1,
min: 12461,
max: 12470
}, {
id: 3593,
title: "鄩",
type: 1,
min: 12471,
max: 12480
}, {
id: 3594,
title: "训",
type: 1,
min: 12481,
max: 12490
}, {
id: 3595,
title: "浚",
type: 1,
min: 12491,
max: 12500
}, {
id: 3596,
title: "牙",
type: 1,
min: 12501,
max: 12510
}, {
id: 3597,
title: "雅",
type: 1,
min: 12511,
max: 12520
}, {
id: 3598,
title: "亚",
type: 1,
min: 12521,
max: 12530
}, {
id: 3599,
title: "烟",
type: 1,
min: 12531,
max: 12540
}, {
id: 3600,
title: "焉",
type: 1,
min: 12541,
max: 12550
}, {
id: 3601,
title: "岩",
type: 1,
min: 12551,
max: 12560
}, {
id: 3602,
title: "延",
type: 1,
min: 12561,
max: 12570
}, {
id: 3603,
title: "彦",
type: 1,
min: 12571,
max: 12580
}, {
id: 3604,
title: "焱",
type: 1,
min: 12581,
max: 12590
}, {
id: 3605,
title: "幺",
type: 1,
min: 12591,
max: 12600
}, {
id: 3606,
title: "要",
type: 1,
min: 12601,
max: 12610
}, {
id: 3607,
title: "尧",
type: 1,
min: 12611,
max: 12620
}, {
id: 3608,
title: "药",
type: 1,
min: 12621,
max: 12630
}, {
id: 3609,
title: "冶",
type: 1,
min: 12631,
max: 12640
}, {
id: 3610,
title: "野",
type: 1,
min: 12641,
max: 12650
}, {
id: 3611,
title: "业",
type: 1,
min: 12651,
max: 12660
}, {
id: 3612,
title: "壹",
type: 1,
min: 12661,
max: 12670
}, {
id: 3613,
title: "仪",
type: 1,
min: 12671,
max: 12680
}, {
id: 3614,
title: "宜",
type: 1,
min: 12681,
max: 12690
}, {
id: 3615,
title: "移",
type: 1,
min: 12691,
max: 12700
}, {
id: 3616,
title: "遗",
type: 1,
min: 12701,
max: 12710
}, {
id: 3617,
title: "颐",
type: 1,
min: 12711,
max: 12720
}, {
id: 3618,
title: "乙",
type: 1,
min: 12721,
max: 12730
}, {
id: 3619,
title: "蚁",
type: 1,
min: 12731,
max: 12740
}, {
id: 3620,
title: "矣",
type: 1,
min: 12741,
max: 12750
}, {
id: 3621,
title: "弋",
type: 1,
min: 12751,
max: 12760
}, {
id: 3622,
title: "义",
type: 1,
min: 12761,
max: 12770
}, {
id: 3623,
title: "亦",
type: 1,
min: 12771,
max: 12780
}, {
id: 3624,
title: "邑",
type: 1,
min: 12781,
max: 12790
}, {
id: 3625,
title: "译",
type: 1,
min: 12791,
max: 12800
}, {
id: 3626,
title: "奕",
type: 1,
min: 12801,
max: 12810
}, {
id: 3627,
title: "毅",
type: 1,
min: 12811,
max: 12820
}, {
id: 3628,
title: "裔",
type: 1,
min: 12821,
max: 12830
}, {
id: 3629,
title: "翼",
type: 1,
min: 12831,
max: 12840
}, {
id: 3630,
title: "寅",
type: 1,
min: 12841,
max: 12850
}, {
id: 3631,
title: "鄞",
type: 1,
min: 12851,
max: 12860
}, {
id: 3632,
title: "英",
type: 1,
min: 12861,
max: 12870
}, {
id: 3633,
title: "英成",
type: 1,
min: 12871,
max: 12880
}, {
id: 3634,
title: "盈",
type: 1,
min: 12881,
max: 12890
}, {
id: 3635,
title: "营",
type: 1,
min: 12891,
max: 12900
}, {
id: 3636,
title: "鄘",
type: 1,
min: 12901,
max: 12910
}, {
id: 3637,
title: "永",
type: 1,
min: 12911,
max: 12920
}, {
id: 3638,
title: "勇",
type: 1,
min: 12921,
max: 12930
}, {
id: 3639,
title: "用",
type: 1,
min: 12931,
max: 12940
}, {
id: 3640,
title: "攸",
type: 1,
min: 12941,
max: 12950
}, {
id: 3641,
title: "由",
type: 1,
min: 12951,
max: 12960
}, {
id: 3642,
title: "犹",
type: 1,
min: 12961,
max: 12970
}, {
id: 3643,
title: "油",
type: 1,
min: 12971,
max: 12980
}, {
id: 3644,
title: "友",
type: 1,
min: 12981,
max: 12990
}, {
id: 3645,
title: "酉",
type: 1,
min: 12991,
max: 13e3
}, {
id: 3646,
title: "右",
type: 1,
min: 13001,
max: 13010
}, {
id: 3647,
title: "佑",
type: 1,
min: 13011,
max: 13020
}, {
id: 3648,
title: "宥",
type: 1,
min: 13021,
max: 13030
}, {
id: 3649,
title: "予",
type: 1,
min: 13031,
max: 13040
}, {
id: 3650,
title: "馀",
type: 1,
min: 13041,
max: 13050
}, {
id: 3651,
title: "雨",
type: 1,
min: 13051,
max: 13060
}, {
id: 3652,
title: "玉",
type: 1,
min: 13061,
max: 13070
}, {
id: 3653,
title: "育",
type: 1,
min: 13071,
max: 13080
}, {
id: 3654,
title: "裕",
type: 1,
min: 13081,
max: 13090
}, {
id: 3655,
title: "遇",
type: 1,
min: 13091,
max: 13100
}, {
id: 3656,
title: "沅",
type: 1,
min: 13101,
max: 13110
}, {
id: 3657,
title: "圆",
type: 1,
min: 13111,
max: 13120
}, {
id: 3658,
title: "远",
type: 1,
min: 13121,
max: 13130
}, {
id: 3659,
title: "院",
type: 1,
min: 13131,
max: 13140
}, {
id: 3660,
title: "月",
type: 1,
min: 13141,
max: 13150
}, {
id: 3661,
title: "悦",
type: 1,
min: 13151,
max: 13160
}, {
id: 3662,
title: "芸",
type: 1,
min: 13161,
max: 13170
}, {
id: 3663,
title: "涢",
type: 1,
min: 13171,
max: 13180
}, {
id: 3664,
title: "允",
type: 1,
min: 13181,
max: 13190
}, {
id: 3665,
title: "运",
type: 1,
min: 13191,
max: 13200
}, {
id: 3666,
title: "恽",
type: 1,
min: 13201,
max: 13210
}, {
id: 3667,
title: "韵",
type: 1,
min: 13211,
max: 13220
}, {
id: 3668,
title: "再",
type: 1,
min: 13221,
max: 13230
}, {
id: 3669,
title: "赞",
type: 1,
min: 13231,
max: 13240
}, {
id: 3670,
title: "早",
type: 1,
min: 13241,
max: 13250
}, {
id: 3671,
title: "则",
type: 1,
min: 13251,
max: 13260
}, {
id: 3672,
title: "泽",
type: 1,
min: 13261,
max: 13270
}, {
id: 3673,
title: "扎",
type: 1,
min: 13271,
max: 13280
}, {
id: 3674,
title: "祭",
type: 1,
min: 13281,
max: 13290
}, {
id: 3675,
title: "占",
type: 1,
min: 13291,
max: 13300
}, {
id: 3676,
title: "斩",
type: 1,
min: 13301,
max: 13310
}, {
id: 3677,
title: "展",
type: 1,
min: 13311,
max: 13320
}, {
id: 3678,
title: "战",
type: 1,
min: 13321,
max: 13330
}, {
id: 3679,
title: "栈",
type: 1,
min: 13331,
max: 13340
}, {
id: 3680,
title: "掌",
type: 1,
min: 13341,
max: 13350
}, {
id: 3681,
title: "丈",
type: 1,
min: 13351,
max: 13360
}, {
id: 3682,
title: "招",
type: 1,
min: 13361,
max: 13370
}, {
id: 3683,
title: "兆",
type: 1,
min: 13371,
max: 13380
}, {
id: 3684,
title: "召",
type: 1,
min: 13381,
max: 13390
}, {
id: 3685,
title: "肇",
type: 1,
min: 13391,
max: 13400
}, {
id: 3686,
title: "真",
type: 1,
min: 13401,
max: 13410
}, {
id: 3687,
title: "振",
type: 1,
min: 13411,
max: 13420
}, {
id: 3688,
title: "镇",
type: 1,
min: 13421,
max: 13430
}, {
id: 3689,
title: "政",
type: 1,
min: 13431,
max: 13440
}, {
id: 3690,
title: "侄",
type: 1,
min: 13441,
max: 13450
}, {
id: 3691,
title: "直",
type: 1,
min: 13451,
max: 13460
}, {
id: 3692,
title: "职",
type: 1,
min: 13461,
max: 13470
}, {
id: 3693,
title: "殖",
type: 1,
min: 13471,
max: 13480
}, {
id: 3694,
title: "只",
type: 1,
min: 13481,
max: 13490
}, {
id: 3695,
title: "治",
type: 1,
min: 13491,
max: 13500
}, {
id: 3696,
title: "郅",
type: 1,
min: 13501,
max: 13510
}, {
id: 3697,
title: "帙",
type: 1,
min: 13511,
max: 13520
}, {
id: 3698,
title: "挚",
type: 1,
min: 13521,
max: 13530
}, {
id: 3699,
title: "忠",
type: 1,
min: 13531,
max: 13540
}, {
id: 3700,
title: "衷",
type: 1,
min: 13541,
max: 13550
}, {
id: 3701,
title: "仲长",
type: 1,
min: 13551,
max: 13560
}, {
id: 3702,
title: "仲孙",
type: 1,
min: 13561,
max: 13570
}, {
id: 3703,
title: "众",
type: 1,
min: 13571,
max: 13580
}, {
id: 3704,
title: "主",
type: 1,
min: 13581,
max: 13590
}, {
id: 3705,
title: "专",
type: 1,
min: 13591,
max: 13600
}, {
id: 3706,
title: "壮",
type: 1,
min: 13601,
max: 13610
}, {
id: 3707,
title: "准",
type: 1,
min: 13611,
max: 13620
}, {
id: 3708,
title: "禚",
type: 1,
min: 13621,
max: 13630
}, {
id: 3709,
title: "资",
type: 1,
min: 13631,
max: 13640
}, {
id: 3710,
title: "紫",
type: 1,
min: 13641,
max: 13650
}, {
id: 3711,
title: "字",
type: 1,
min: 13651,
max: 13660
}, {
id: 3712,
title: "自",
type: 1,
min: 13661,
max: 13670
}, {
id: 3713,
title: "枞",
type: 1,
min: 13671,
max: 13680
}, {
id: 3714,
title: "鬷",
type: 1,
min: 13681,
max: 13690
}, {
id: 3715,
title: "纵",
type: 1,
min: 13691,
max: 13700
}, {
id: 3716,
title: "诹",
type: 1,
min: 13701,
max: 13710
}, {
id: 3717,
title: "卒",
type: 1,
min: 13711,
max: 13720
}, {
id: 3718,
title: "族",
type: 1,
min: 13721,
max: 13730
}, {
id: 3719,
title: "俎",
type: 1,
min: 13731,
max: 13740
}, {
id: 3720,
title: "纂",
type: 1,
min: 13741,
max: 13750
}, {
id: 3721,
title: "逵",
type: 1,
min: 13751,
max: 13761
}, {
id: 3722,
title: "俄",
type: 1,
min: 13762,
max: 13773
}, {
id: 3723,
title: "璯",
type: 1,
min: 13774,
max: 13785
}, {
id: 3724,
title: "溃",
type: 1,
min: 13786,
max: 13797
}, {
id: 3725,
title: "娃",
type: 1,
min: 13798,
max: 13809
}, {
id: 3726,
title: "半",
type: 1,
min: 13810,
max: 13824
}, {
id: 3727,
title: "秘",
type: 1,
min: 13825,
max: 13839
}, {
id: 3728,
title: "成子",
type: 1,
min: 13840,
max: 13854
}, {
id: 3729,
title: "窜",
type: 1,
min: 13855,
max: 13869
}, {
id: 3730,
title: "錊",
type: 1,
min: 13870,
max: 13884
}, {
id: 3731,
title: "大张",
type: 1,
min: 13885,
max: 13899
}, {
id: 3732,
title: "呆",
type: 1,
min: 13900,
max: 13914
}, {
id: 3733,
title: "砀",
type: 1,
min: 13915,
max: 13929
}, {
id: 3734,
title: "兜",
type: 1,
min: 13930,
max: 13944
}, {
id: 3735,
title: "短",
type: 1,
min: 13945,
max: 13959
}, {
id: 3736,
title: "泛",
type: 1,
min: 13960,
max: 13974
}, {
id: 3737,
title: "方吾",
type: 1,
min: 13975,
max: 13989
}, {
id: 3738,
title: "昉",
type: 1,
min: 13990,
max: 14004
}, {
id: 3739,
title: "柎",
type: 1,
min: 14005,
max: 14019
}, {
id: 3740,
title: "黻",
type: 1,
min: 14020,
max: 14034
}, {
id: 3741,
title: "鲋",
type: 1,
min: 14035,
max: 14049
}, {
id: 3742,
title: "杆",
type: 1,
min: 14050,
max: 14064
}, {
id: 3743,
title: "骭",
type: 1,
min: 14065,
max: 14079
}, {
id: 3744,
title: "鸽",
type: 1,
min: 14080,
max: 14094
}, {
id: 3745,
title: "歌",
type: 1,
min: 14095,
max: 14109
}, {
id: 3746,
title: "盥",
type: 1,
min: 14110,
max: 14124
}, {
id: 3747,
title: "虹",
type: 1,
min: 14125,
max: 14139
}, {
id: 3748,
title: "焕",
type: 1,
min: 14140,
max: 14154
}, {
id: 3749,
title: "晖",
type: 1,
min: 14155,
max: 14169
}, {
id: 3750,
title: "机",
type: 1,
min: 14170,
max: 14184
}, {
id: 3751,
title: "辑",
type: 1,
min: 14185,
max: 14199
}, {
id: 3752,
title: "给",
type: 1,
min: 14200,
max: 14214
}, {
id: 3753,
title: "筋",
type: 1,
min: 14215,
max: 14229
}, {
id: 3754,
title: "楷",
type: 1,
min: 14230,
max: 14244
}, {
id: 3755,
title: "鄈",
type: 1,
min: 14245,
max: 14259
}, {
id: 3756,
title: "逻",
type: 1,
min: 14260,
max: 14274
}, {
id: 3757,
title: "缅",
type: 1,
min: 14275,
max: 14289
}, {
id: 3758,
title: "墓",
type: 1,
min: 14290,
max: 14304
}, {
id: 3759,
title: "郱",
type: 1,
min: 14305,
max: 14319
}, {
id: 3760,
title: "倛",
type: 1,
min: 14320,
max: 14334
}, {
id: 3761,
title: "傻",
type: 1,
min: 14335,
max: 14349
}, {
id: 3762,
title: "恬",
type: 1,
min: 14350,
max: 14364
}, {
id: 3763,
title: "徵",
type: 1,
min: 14365,
max: 14379
}, {
id: 3764,
title: "著",
type: 1,
min: 14380,
max: 14394
}, {
id: 3765,
title: "宝",
type: 1,
min: 14395,
max: 14414
}, {
id: 3766,
title: "仓",
type: 1,
min: 14415,
max: 14434
}, {
id: 3767,
title: "楂",
type: 1,
min: 14435,
max: 14454
}, {
id: 3768,
title: "叉",
type: 1,
min: 14455,
max: 14474
}, {
id: 3769,
title: "茝",
type: 1,
min: 14475,
max: 14494
}, {
id: 3770,
title: "齿",
type: 1,
min: 14495,
max: 14514
}, {
id: 3771,
title: "贷",
type: 1,
min: 14515,
max: 14534
}, {
id: 3772,
title: "读",
type: 1,
min: 14535,
max: 14554
}, {
id: 3773,
title: "段阳",
type: 1,
min: 14555,
max: 14574
}, {
id: 3774,
title: "鄂",
type: 1,
min: 14575,
max: 14594
}, {
id: 3775,
title: "枋",
type: 1,
min: 14595,
max: 14614
}, {
id: 3776,
title: "公良",
type: 1,
min: 14615,
max: 14634
}, {
id: 3777,
title: "构",
type: 1,
min: 14635,
max: 14654
}, {
id: 3778,
title: "够",
type: 1,
min: 14655,
max: 14674
}, {
id: 3779,
title: "榖",
type: 1,
min: 14675,
max: 14694
}, {
id: 3780,
title: "蕉",
type: 1,
min: 14695,
max: 14714
}, {
id: 3781,
title: "空",
type: 1,
min: 14715,
max: 14734
}, {
id: 3782,
title: "闾丘",
type: 1,
min: 14735,
max: 14754
}, {
id: 3783,
title: "沐",
type: 1,
min: 14755,
max: 14774
}, {
id: 3784,
title: "奇",
type: 1,
min: 14775,
max: 14794
}, {
id: 3785,
title: "祈",
type: 1,
min: 14795,
max: 14814
}, {
id: 3786,
title: "起",
type: 1,
min: 14815,
max: 14834
}, {
id: 3787,
title: "青",
type: 1,
min: 14835,
max: 14854
}, {
id: 3788,
title: "卿",
type: 1,
min: 14855,
max: 14874
}, {
id: 3789,
title: "却",
type: 1,
min: 14875,
max: 14894
}, {
id: 3790,
title: "申裴",
type: 1,
min: 14895,
max: 14914
}, {
id: 3791,
title: "申鲜",
type: 1,
min: 14915,
max: 14934
}, {
id: 3792,
title: "书",
type: 1,
min: 14935,
max: 14954
}, {
id: 3793,
title: "叔",
type: 1,
min: 14955,
max: 14974
}, {
id: 3794,
title: "率",
type: 1,
min: 14975,
max: 14994
}, {
id: 3795,
title: "图",
type: 1,
min: 14995,
max: 15014
}, {
id: 3796,
title: "伟",
type: 1,
min: 15015,
max: 15034
}, {
id: 3797,
title: "委",
type: 1,
min: 15035,
max: 15054
}, {
id: 3798,
title: "西",
type: 1,
min: 15055,
max: 15074
}, {
id: 3799,
title: "锡",
type: 1,
min: 15075,
max: 15094
}, {
id: 3800,
title: "下",
type: 1,
min: 15095,
max: 15114
}, {
id: 3801,
title: "小",
type: 1,
min: 15115,
max: 15134
}, {
id: 3802,
title: "羊舌",
type: 1,
min: 15135,
max: 15154
}, {
id: 3803,
title: "宰父",
type: 1,
min: 15155,
max: 15174
}, {
id: 3804,
title: "正",
type: 1,
min: 15175,
max: 15194
}, {
id: 3805,
title: "竹",
type: 1,
min: 15195,
max: 15214
}, {
id: 3806,
title: "茁",
type: 1,
min: 15215,
max: 15234
}, {
id: 3807,
title: "子车",
type: 1,
min: 15235,
max: 15254
}, {
id: 3808,
title: "额",
type: 1,
min: 15255,
max: 15279
}, {
id: 3809,
title: "第五",
type: 1,
min: 15280,
max: 15309
}, {
id: 3810,
title: "东门",
type: 1,
min: 15310,
max: 15339
}, {
id: 3811,
title: "高堂",
type: 1,
min: 15340,
max: 15369
}, {
id: 3812,
title: "赓",
type: 1,
min: 15370,
max: 15399
}, {
id: 3813,
title: "公西",
type: 1,
min: 15400,
max: 15429
}, {
id: 3814,
title: "公羊",
type: 1,
min: 15430,
max: 15459
}, {
id: 3815,
title: "榖梁",
type: 1,
min: 15460,
max: 15489
}, {
id: 3816,
title: "后",
type: 1,
min: 15490,
max: 15519
}, {
id: 3817,
title: "丌官",
type: 1,
min: 15520,
max: 15549
}, {
id: 3818,
title: "夹谷",
type: 1,
min: 15550,
max: 15579
}, {
id: 3819,
title: "駉",
type: 1,
min: 15580,
max: 15609
}, {
id: 3820,
title: "厉",
type: 1,
min: 15610,
max: 15639
}, {
id: 3821,
title: "梁丘",
type: 1,
min: 15640,
max: 15669
}, {
id: 3822,
title: "南门",
type: 1,
min: 15670,
max: 15699
}, {
id: 3823,
title: "群",
type: 1,
min: 15700,
max: 15729
}, {
id: 3824,
title: "厍",
type: 1,
min: 15730,
max: 15759
}, {
id: 3825,
title: "识",
type: 1,
min: 15760,
max: 15789
}, {
id: 3826,
title: "殳",
type: 1,
min: 15790,
max: 15819
}, {
id: 3827,
title: "太叔",
type: 1,
min: 15820,
max: 15849
}, {
id: 3828,
title: "澹台",
type: 1,
min: 15850,
max: 15879
}, {
id: 3829,
title: "闻人",
type: 1,
min: 15880,
max: 15909
}, {
id: 3830,
title: "巫马",
type: 1,
min: 15910,
max: 15939
}, {
id: 3831,
title: "毋",
type: 1,
min: 15940,
max: 15969
}, {
id: 3832,
title: "鲜于",
type: 1,
min: 15970,
max: 15999
}, {
id: 3833,
title: "印",
type: 1,
min: 16e3,
max: 16029
}, {
id: 3834,
title: "湛",
type: 1,
min: 16030,
max: 16059
}, {
id: 3835,
title: "智",
type: 1,
min: 16060,
max: 16089
}, {
id: 3836,
title: "颛孙",
type: 1,
min: 16090,
max: 16119
}, {
id: 3837,
title: "左丘",
type: 1,
min: 16120,
max: 16149
}, {
id: 3838,
title: "盎",
type: 1,
min: 16150,
max: 16189
}, {
id: 3839,
title: "罢",
type: 1,
min: 16190,
max: 16229
}, {
id: 3840,
title: "阪",
type: 1,
min: 16230,
max: 16269
}, {
id: 3841,
title: "办",
type: 1,
min: 16270,
max: 16309
}, {
id: 3842,
title: "榜",
type: 1,
min: 16310,
max: 16349
}, {
id: 3843,
title: "雹",
type: 1,
min: 16350,
max: 16389
}, {
id: 3844,
title: "堡",
type: 1,
min: 16390,
max: 16429
}, {
id: 3845,
title: "报",
type: 1,
min: 16430,
max: 16469
}, {
id: 3846,
title: "碑",
type: 1,
min: 16470,
max: 16509
}, {
id: 3847,
title: "甭",
type: 1,
min: 16510,
max: 16549
}, {
id: 3848,
title: "泵",
type: 1,
min: 16550,
max: 16589
}, {
id: 3849,
title: "彼",
type: 1,
min: 16590,
max: 16629
}, {
id: 3850,
title: "弼",
type: 1,
min: 16630,
max: 16669
}, {
id: 3851,
title: "变",
type: 1,
min: 16670,
max: 16709
}, {
id: 3852,
title: "滨",
type: 1,
min: 16710,
max: 16749
}, {
id: 3853,
title: "禀",
type: 1,
min: 16750,
max: 16789
}, {
id: 3854,
title: "钵",
type: 1,
min: 16790,
max: 16829
}, {
id: 3855,
title: "簿",
type: 1,
min: 16830,
max: 16869
}, {
id: 3856,
title: "猜",
type: 1,
min: 16870,
max: 16909
}, {
id: 3857,
title: "残",
type: 1,
min: 16910,
max: 16949
}, {
id: 3858,
title: "灿",
type: 1,
min: 16950,
max: 16989
}, {
id: 3859,
title: "璨",
type: 1,
min: 16990,
max: 17029
}, {
id: 3860,
title: "沧",
type: 1,
min: 17030,
max: 17069
}, {
id: 3861,
title: "槽",
type: 1,
min: 17070,
max: 17109
}, {
id: 3862,
title: "蟾",
type: 1,
min: 17110,
max: 17149
}, {
id: 3863,
title: "伥",
type: 1,
min: 17150,
max: 17189
}, {
id: 3864,
title: "偿",
type: 1,
min: 17190,
max: 17229
}, {
id: 3865,
title: "倡",
type: 1,
min: 17230,
max: 17269
}, {
id: 3866,
title: "澈",
type: 1,
min: 17270,
max: 17309
}, {
id: 3867,
title: "沉",
type: 1,
min: 17310,
max: 17349
}, {
id: 3868,
title: "忱",
type: 1,
min: 17350,
max: 17389
}, {
id: 3869,
title: "宸",
type: 1,
min: 17390,
max: 17429
}, {
id: 3870,
title: "晨",
type: 1,
min: 17430,
max: 17469
}, {
id: 3871,
title: "秤",
type: 1,
min: 17470,
max: 17509
}, {
id: 3872,
title: "郗",
type: 1,
min: 17510,
max: 17549
}, {
id: 3873,
title: "痴",
type: 1,
min: 17550,
max: 17589
}, {
id: 3874,
title: "尺",
type: 1,
min: 17590,
max: 17629
}, {
id: 3875,
title: "酬",
type: 1,
min: 17630,
max: 17669
}, {
id: 3876,
title: "雏",
type: 1,
min: 17670,
max: 17709
}, {
id: 3877,
title: "椽",
type: 1,
min: 17710,
max: 17749
}, {
id: 3878,
title: "串",
type: 1,
min: 17750,
max: 17789
}, {
id: 3879,
title: "窗",
type: 1,
min: 17790,
max: 17829
}, {
id: 3880,
title: "吹",
type: 1,
min: 17830,
max: 17869
}, {
id: 3881,
title: "炊",
type: 1,
min: 17870,
max: 17909
}, {
id: 3882,
title: "锤",
type: 1,
min: 17910,
max: 17949
}, {
id: 3883,
title: "绰",
type: 1,
min: 17950,
max: 17989
}, {
id: 3884,
title: "戳",
type: 1,
min: 17990,
max: 18029
}, {
id: 3885,
title: "磁",
type: 1,
min: 18030,
max: 18069
}, {
id: 3886,
title: "此",
type: 1,
min: 18070,
max: 18109
}, {
id: 3887,
title: "佽",
type: 1,
min: 18110,
max: 18149
}, {
id: 3888,
title: "匆",
type: 1,
min: 18150,
max: 18189
}, {
id: 3889,
title: "促",
type: 1,
min: 18190,
max: 18229
}, {
id: 3890,
title: "篡",
type: 1,
min: 18230,
max: 18269
}, {
id: 3891,
title: "萃",
type: 1,
min: 18270,
max: 18309
}, {
id: 3892,
title: "袋",
type: 1,
min: 18310,
max: 18349
}, {
id: 3893,
title: "黛",
type: 1,
min: 18350,
max: 18389
}, {
id: 3894,
title: "等",
type: 1,
min: 18390,
max: 18429
}, {
id: 3895,
title: "典",
type: 1,
min: 18430,
max: 18469
}, {
id: 3896,
title: "垫",
type: 1,
min: 18470,
max: 18509
}, {
id: 3897,
title: "絰",
type: 1,
min: 18510,
max: 18549
}, {
id: 3898,
title: "叠",
type: 1,
min: 18550,
max: 18589
}, {
id: 3899,
title: "东郭",
type: 1,
min: 18590,
max: 18629
}, {
id: 3900,
title: "懂",
type: 1,
min: 18630,
max: 18669
}, {
id: 3901,
title: "犊",
type: 1,
min: 18670,
max: 18709
}, {
id: 3902,
title: "对",
type: 1,
min: 18710,
max: 18749
}, {
id: 3903,
title: "碓",
type: 1,
min: 18750,
max: 18789
}, {
id: 3904,
title: "敦丘",
type: 1,
min: 18790,
max: 18829
}, {
id: 3905,
title: "吨",
type: 1,
min: 18830,
max: 18869
}, {
id: 3906,
title: "堕",
type: 1,
min: 18870,
max: 18909
}, {
id: 3907,
title: "二",
type: 1,
min: 18910,
max: 18949
}, {
id: 3908,
title: "罚",
type: 1,
min: 18950,
max: 18989
}, {
id: 3909,
title: "蕃",
type: 1,
min: 18990,
max: 19029
}, {
id: 3910,
title: "璠",
type: 1,
min: 19030,
max: 19069
}, {
id: 3911,
title: "饭",
type: 1,
min: 19070,
max: 19109
}, {
id: 3912,
title: "方累",
type: 1,
min: 19110,
max: 19149
}, {
id: 3913,
title: "焚",
type: 1,
min: 19150,
max: 19189
}, {
id: 3914,
title: "粉",
type: 1,
min: 19190,
max: 19229
}, {
id: 3915,
title: "愤",
type: 1,
min: 19230,
max: 19269
}, {
id: 3916,
title: "芾",
type: 1,
min: 19270,
max: 19309
}, {
id: 3917,
title: "绂",
type: 1,
min: 19310,
max: 19349
}, {
id: 3918,
title: "洑",
type: 1,
min: 19350,
max: 19389
}, {
id: 3919,
title: "嘎",
type: 1,
min: 19390,
max: 19429
}, {
id: 3920,
title: "噶",
type: 1,
min: 19430,
max: 19469
}, {
id: 3921,
title: "橄",
type: 1,
min: 19470,
max: 19509
}, {
id: 3922,
title: "稿",
type: 1,
min: 19510,
max: 19549
}, {
id: 3923,
title: "庚",
type: 1,
min: 19550,
max: 19589
}, {
id: 3924,
title: "公孙",
type: 1,
min: 19590,
max: 19629
}, {
id: 3925,
title: "公治",
type: 1,
min: 19630,
max: 19669
}, {
id: 3926,
title: "毌将",
type: 1,
min: 19670,
max: 19709
}, {
id: 3927,
title: "锅",
type: 1,
min: 19710,
max: 19749
}, {
id: 3928,
title: "涵",
type: 1,
min: 19750,
max: 19789
}, {
id: 3929,
title: "旱",
type: 1,
min: 19790,
max: 19829
}, {
id: 3930,
title: "喝",
type: 1,
min: 19830,
max: 19869
}, {
id: 3931,
title: "赫康",
type: 1,
min: 19870,
max: 19909
}, {
id: 3932,
title: "嚇",
type: 1,
min: 19910,
max: 19949
}, {
id: 3933,
title: "哄",
type: 1,
min: 19950,
max: 19989
}, {
id: 3934,
title: "吼",
type: 1,
min: 19990,
max: 20029
}, {
id: 3935,
title: "互",
type: 1,
min: 20030,
max: 20069
}, {
id: 3936,
title: "坏",
type: 1,
min: 20070,
max: 20109
}, {
id: 3937,
title: "换",
type: 1,
min: 20110,
max: 20149
}, {
id: 3938,
title: "煌",
type: 1,
min: 20150,
max: 20189
}, {
id: 3939,
title: "灰",
type: 1,
min: 20190,
max: 20229
}, {
id: 3940,
title: "悔",
type: 1,
min: 20230,
max: 20269
}, {
id: 3941,
title: "汇",
type: 1,
min: 20270,
max: 20309
}, {
id: 3942,
title: "活",
type: 1,
min: 20310,
max: 20349
}, {
id: 3943,
title: "豁",
type: 1,
min: 20350,
max: 20389
}, {
id: 3944,
title: "寂",
type: 1,
min: 20390,
max: 20429
}, {
id: 3945,
title: "荠",
type: 1,
min: 20430,
max: 20469
}, {
id: 3946,
title: "寄",
type: 1,
min: 20470,
max: 20509
}, {
id: 3947,
title: "价",
type: 1,
min: 20510,
max: 20549
}, {
id: 3948,
title: "嫁",
type: 1,
min: 20550,
max: 20589
}, {
id: 3949,
title: "笺",
type: 1,
min: 20590,
max: 20629
}, {
id: 3950,
title: "缄",
type: 1,
min: 20630,
max: 20669
}, {
id: 3951,
title: "俭",
type: 1,
min: 20670,
max: 20709
}, {
id: 3952,
title: "柬",
type: 1,
min: 20710,
max: 20749
}, {
id: 3953,
title: "检",
type: 1,
min: 20750,
max: 20789
}, {
id: 3954,
title: "礁",
type: 1,
min: 20790,
max: 20829
}, {
id: 3955,
title: "街",
type: 1,
min: 20830,
max: 20869
}, {
id: 3956,
title: "阶",
type: 1,
min: 20870,
max: 20909
}, {
id: 3957,
title: "芥",
type: 1,
min: 20910,
max: 20949
}, {
id: 3958,
title: "借",
type: 1,
min: 20950,
max: 20989
}, {
id: 3959,
title: "儆",
type: 1,
min: 20990,
max: 21029
}, {
id: 3960,
title: "炯",
type: 1,
min: 21030,
max: 21069
}, {
id: 3961,
title: "玖",
type: 1,
min: 21070,
max: 21109
}, {
id: 3962,
title: "苣",
type: 1,
min: 21110,
max: 21149
}, {
id: 3963,
title: "珏",
type: 1,
min: 21150,
max: 21189
}, {
id: 3964,
title: "倔",
type: 1,
min: 21190,
max: 21229
}, {
id: 3965,
title: "骏",
type: 1,
min: 21230,
max: 21269
}, {
id: 3966,
title: "岢",
type: 1,
min: 21270,
max: 21309
}, {
id: 3967,
title: "恐",
type: 1,
min: 21310,
max: 21349
}, {
id: 3968,
title: "叩",
type: 1,
min: 21350,
max: 21389
}, {
id: 3969,
title: "酷",
type: 1,
min: 21390,
max: 21429
}, {
id: 3970,
title: "框",
type: 1,
min: 21430,
max: 21469
}, {
id: 3971,
title: "矿",
type: 1,
min: 21470,
max: 21509
}, {
id: 3972,
title: "篑",
type: 1,
min: 21510,
max: 21549
}, {
id: 3973,
title: "廓",
type: 1,
min: 21550,
max: 21589
}, {
id: 3974,
title: "啦",
type: 1,
min: 21590,
max: 21629
}, {
id: 3975,
title: "旯",
type: 1,
min: 21630,
max: 21669
}, {
id: 3976,
title: "剌",
type: 1,
min: 21670,
max: 21709
}, {
id: 3977,
title: "辣",
type: 1,
min: 21710,
max: 21749
}, {
id: 3978,
title: "涞",
type: 1,
min: 21750,
max: 21789
}, {
id: 3979,
title: "岚",
type: 1,
min: 21790,
max: 21829
}, {
id: 3980,
title: "烂",
type: 1,
min: 21830,
max: 21869
}, {
id: 3981,
title: "姥",
type: 1,
min: 21870,
max: 21909
}, {
id: 3982,
title: "涝",
type: 1,
min: 21910,
max: 21949
}, {
id: 3983,
title: "烙",
type: 1,
min: 21950,
max: 21989
}, {
id: 3984,
title: "磊",
type: 1,
min: 21990,
max: 22029
}, {
id: 3985,
title: "理伯",
type: 1,
min: 22030,
max: 22069
}, {
id: 3986,
title: "苙",
type: 1,
min: 22070,
max: 22109
}, {
id: 3987,
title: "笠",
type: 1,
min: 22110,
max: 22149
}, {
id: 3988,
title: "栎",
type: 1,
min: 22150,
max: 22189
}, {
id: 3989,
title: "莉",
type: 1,
min: 22190,
max: 22229
}, {
id: 3990,
title: "帘",
type: 1,
min: 22230,
max: 22269
}, {
id: 3991,
title: "莲",
type: 1,
min: 22270,
max: 22309
}, {
id: 3992,
title: "琏",
type: 1,
min: 22310,
max: 22349
}, {
id: 3993,
title: "漻",
type: 1,
min: 22350,
max: 22389
}, {
id: 3994,
title: "蒌",
type: 1,
min: 22390,
max: 22429
}, {
id: 3995,
title: "滦",
type: 1,
min: 22430,
max: 22469
}, {
id: 3996,
title: "珞",
type: 1,
min: 22470,
max: 22509
}, {
id: 3997,
title: "骂",
type: 1,
min: 22510,
max: 22549
}, {
id: 3998,
title: "矛",
type: 1,
min: 22550,
max: 22589
}, {
id: 3999,
title: "闷",
type: 1,
min: 22590,
max: 22629
}, {
id: 4e3,
title: "洣",
type: 1,
min: 22630,
max: 22669
}, {
id: 4001,
title: "泌",
type: 1,
min: 22670,
max: 22709
}, {
id: 4002,
title: "描",
type: 1,
min: 22710,
max: 22749
}, {
id: 4003,
title: "秒",
type: 1,
min: 22750,
max: 22789
}, {
id: 4004,
title: "灭",
type: 1,
min: 22790,
max: 22829
}, {
id: 4005,
title: "模",
type: 1,
min: 22830,
max: 22869
}, {
id: 4006,
title: "牟孙",
type: 1,
min: 22870,
max: 22909
}, {
id: 4007,
title: "娜",
type: 1,
min: 22910,
max: 22949
}, {
id: 4008,
title: "耐",
type: 1,
min: 22950,
max: 22989
}, {
id: 4009,
title: "楠",
type: 1,
min: 22990,
max: 23029
}, {
id: 4010,
title: "孬",
type: 1,
min: 23030,
max: 23069
}, {
id: 4011,
title: "闹",
type: 1,
min: 23070,
max: 23109
}, {
id: 4012,
title: "讷",
type: 1,
min: 23110,
max: 23149
}, {
id: 4013,
title: "妮",
type: 1,
min: 23150,
max: 23189
}, {
id: 4014,
title: "呢",
type: 1,
min: 23190,
max: 23229
}, {
id: 4015,
title: "娘",
type: 1,
min: 23230,
max: 23269
}, {
id: 4016,
title: "臬",
type: 1,
min: 23270,
max: 23309
}, {
id: 4017,
title: "葩",
type: 1,
min: 23310,
max: 23349
}, {
id: 4018,
title: "派",
type: 1,
min: 23350,
max: 23389
}, {
id: 4019,
title: "盤",
type: 1,
min: 23390,
max: 23429
}, {
id: 4020,
title: "叛",
type: 1,
min: 23430,
max: 23469
}, {
id: 4021,
title: "畔",
type: 1,
min: 23470,
max: 23509
}, {
id: 4022,
title: "胚",
type: 1,
min: 23510,
max: 23549
}, {
id: 4023,
title: "喷",
type: 1,
min: 23550,
max: 23589
}, {
id: 4024,
title: "澎",
type: 1,
min: 23590,
max: 23629
}, {
id: 4025,
title: "捧",
type: 1,
min: 23630,
max: 23669
}, {
id: 4026,
title: "漂",
type: 1,
min: 23670,
max: 23709
}, {
id: 4027,
title: "贫",
type: 1,
min: 23710,
max: 23749
}, {
id: 4028,
title: "牝",
type: 1,
min: 23750,
max: 23789
}, {
id: 4029,
title: "聘",
type: 1,
min: 23790,
max: 23829
}, {
id: 4030,
title: "苹",
type: 1,
min: 23830,
max: 23869
}, {
id: 4031,
title: "泼",
type: 1,
min: 23870,
max: 23909
}, {
id: 4032,
title: "破",
type: 1,
min: 23910,
max: 23949
}, {
id: 4033,
title: "苻",
type: 1,
min: 23950,
max: 23989
}, {
id: 4034,
title: "菩",
type: 1,
min: 23990,
max: 24029
}, {
id: 4035,
title: "柒",
type: 1,
min: 24030,
max: 24069
}, {
id: 4036,
title: "欺",
type: 1,
min: 24070,
max: 24109
}, {
id: 4037,
title: "琦",
type: 1,
min: 24110,
max: 24149
}, {
id: 4038,
title: "气",
type: 1,
min: 24150,
max: 24189
}, {
id: 4039,
title: "洽",
type: 1,
min: 24190,
max: 24229
}, {
id: 4040,
title: "恰",
type: 1,
min: 24230,
max: 24269
}, {
id: 4041,
title: "仟",
type: 1,
min: 24270,
max: 24309
}, {
id: 4042,
title: "荞",
type: 1,
min: 24310,
max: 24349
}, {
id: 4043,
title: "瞧",
type: 1,
min: 24350,
max: 24389
}, {
id: 4044,
title: "切",
type: 1,
min: 24390,
max: 24429
}, {
id: 4045,
title: "伽",
type: 1,
min: 24430,
max: 24469
}, {
id: 4046,
title: "怯",
type: 1,
min: 24470,
max: 24509
}, {
id: 4047,
title: "妾",
type: 1,
min: 24510,
max: 24549
}, {
id: 4048,
title: "惬",
type: 1,
min: 24550,
max: 24589
}, {
id: 4049,
title: "芹",
type: 1,
min: 24590,
max: 24629
}, {
id: 4050,
title: "芩",
type: 1,
min: 24630,
max: 24669
}, {
id: 4051,
title: "情",
type: 1,
min: 24670,
max: 24709
}, {
id: 4052,
title: "黥",
type: 1,
min: 24710,
max: 24749
}, {
id: 4053,
title: "琼",
type: 1,
min: 24750,
max: 24789
}, {
id: 4054,
title: "劬",
type: 1,
min: 24790,
max: 24829
}, {
id: 4055,
title: "荃",
type: 1,
min: 24830,
max: 24869
}, {
id: 4056,
title: "缺",
type: 1,
min: 24870,
max: 24909
}, {
id: 4057,
title: "裙",
type: 1,
min: 24910,
max: 24949
}, {
id: 4058,
title: "韧",
type: 1,
min: 24950,
max: 24989
}, {
id: 4059,
title: "戎",
type: 1,
min: 24990,
max: 25029
}, {
id: 4060,
title: "肉",
type: 1,
min: 25030,
max: 25069
}, {
id: 4061,
title: "挐",
type: 1,
min: 25070,
max: 25109
}, {
id: 4062,
title: "弱",
type: 1,
min: 25110,
max: 25149
}, {
id: 4063,
title: "卅",
type: 1,
min: 25150,
max: 25189
}, {
id: 4064,
title: "纱",
type: 1,
min: 25190,
max: 25229
}, {
id: 4065,
title: "筛",
type: 1,
min: 25230,
max: 25269
}, {
id: 4066,
title: "晒",
type: 1,
min: 25270,
max: 25309
}, {
id: 4067,
title: "剡",
type: 1,
min: 25310,
max: 25349
}, {
id: 4068,
title: "梢",
type: 1,
min: 25350,
max: 25389
}, {
id: 4069,
title: "烧",
type: 1,
min: 25390,
max: 25429
}, {
id: 4070,
title: "姺",
type: 1,
min: 25430,
max: 25469
}, {
id: 4071,
title: "渗",
type: 1,
min: 25470,
max: 25509
}, {
id: 4072,
title: "声",
type: 1,
min: 25510,
max: 25549
}, {
id: 4073,
title: "蕂",
type: 1,
min: 25550,
max: 25589
}, {
id: 4074,
title: "驶",
type: 1,
min: 25590,
max: 25629
}, {
id: 4075,
title: "逝",
type: 1,
min: 25630,
max: 25669
}, {
id: 4076,
title: "筮",
type: 1,
min: 25670,
max: 25709
}, {
id: 4077,
title: "莳",
type: 1,
min: 25710,
max: 25749
}, {
id: 4078,
title: "饰",
type: 1,
min: 25750,
max: 25789
}, {
id: 4079,
title: "属",
type: 1,
min: 25790,
max: 25829
}, {
id: 4080,
title: "曙",
type: 1,
min: 25830,
max: 25869
}, {
id: 4081,
title: "恕",
type: 1,
min: 25870,
max: 25909
}, {
id: 4082,
title: "耍",
type: 1,
min: 25910,
max: 25949
}, {
id: 4083,
title: "拴",
type: 1,
min: 25950,
max: 25989
}, {
id: 4084,
title: "司空",
type: 1,
min: 25990,
max: 26029
}, {
id: 4085,
title: "丝",
type: 1,
min: 26030,
max: 26069
}, {
id: 4086,
title: "伺",
type: 1,
min: 26070,
max: 26109
}, {
id: 4087,
title: "祀",
type: 1,
min: 26110,
max: 26149
}, {
id: 4088,
title: "嗽",
type: 1,
min: 26150,
max: 26189
}, {
id: 4089,
title: "葰",
type: 1,
min: 26190,
max: 26229
}, {
id: 4090,
title: "荪",
type: 1,
min: 26230,
max: 26269
}, {
id: 4091,
title: "他",
type: 1,
min: 26270,
max: 26309
}, {
id: 4092,
title: "她",
type: 1,
min: 26310,
max: 26349
}, {
id: 4093,
title: "塌",
type: 1,
min: 26350,
max: 26389
}, {
id: 4094,
title: "邰",
type: 1,
min: 26390,
max: 26429
}, {
id: 4095,
title: "倘",
type: 1,
min: 26430,
max: 26469
}, {
id: 4096,
title: "叨",
type: 1,
min: 26470,
max: 26509
}, {
id: 4097,
title: "逃",
type: 1,
min: 26510,
max: 26549
}, {
id: 4098,
title: "套",
type: 1,
min: 26550,
max: 26589
}, {
id: 4099,
title: "誊",
type: 1,
min: 26590,
max: 26629
}, {
id: 4100,
title: "剃",
type: 1,
min: 26630,
max: 26669
}, {
id: 4101,
title: "挑",
type: 1,
min: 26670,
max: 26709
}, {
id: 4102,
title: "跳",
type: 1,
min: 26710,
max: 26749
}, {
id: 4103,
title: "筒",
type: 1,
min: 26750,
max: 26789
}, {
id: 4104,
title: "透",
type: 1,
min: 26790,
max: 26829
}, {
id: 4105,
title: "湍",
type: 1,
min: 26830,
max: 26869
}, {
id: 4106,
title: "驮",
type: 1,
min: 26870,
max: 26909
}, {
id: 4107,
title: "挖",
type: 1,
min: 26910,
max: 26949
}, {
id: 4108,
title: "歪",
type: 1,
min: 26950,
max: 26989
}, {
id: 4109,
title: "湾",
type: 1,
min: 26990,
max: 27029
}, {
id: 4110,
title: "玩",
type: 1,
min: 27030,
max: 27069
}, {
id: 4111,
title: "碗",
type: 1,
min: 27070,
max: 27109
}, {
id: 4112,
title: "往",
type: 1,
min: 27110,
max: 27149
}, {
id: 4113,
title: "巍",
type: 1,
min: 27150,
max: 27189
}, {
id: 4114,
title: "玮",
type: 1,
min: 27190,
max: 27229
}, {
id: 4115,
title: "胃",
type: 1,
min: 27230,
max: 27269
}, {
id: 4116,
title: "纹",
type: 1,
min: 27270,
max: 27309
}, {
id: 4117,
title: "稳",
type: 1,
min: 27310,
max: 27349
}, {
id: 4118,
title: "窝",
type: 1,
min: 27350,
max: 27389
}, {
id: 4119,
title: "卧",
type: 1,
min: 27390,
max: 27429
}, {
id: 4120,
title: "悟",
type: 1,
min: 27430,
max: 27469
}, {
id: 4121,
title: "误",
type: 1,
min: 27470,
max: 27509
}, {
id: 4122,
title: "禧",
type: 1,
min: 27510,
max: 27549
}, {
id: 4123,
title: "狭",
type: 1,
min: 27550,
max: 27589
}, {
id: 4124,
title: "洗",
type: 1,
min: 27590,
max: 27629
}, {
id: 4125,
title: "铣",
type: 1,
min: 27630,
max: 27669
}, {
id: 4126,
title: "陷",
type: 1,
min: 27670,
max: 27709
}, {
id: 4127,
title: "湘",
type: 1,
min: 27710,
max: 27749
}, {
id: 4128,
title: "享",
type: 1,
min: 27750,
max: 27789
}, {
id: 4129,
title: "削",
type: 1,
min: 27790,
max: 27829
}, {
id: 4130,
title: "啸",
type: 1,
min: 27830,
max: 27869
}, {
id: 4131,
title: "偕",
type: 1,
min: 27870,
max: 27909
}, {
id: 4132,
title: "写",
type: 1,
min: 27910,
max: 27949
}, {
id: 4133,
title: "鑫",
type: 1,
min: 27950,
max: 27989
}, {
id: 4134,
title: "省",
type: 1,
min: 27990,
max: 28029
}, {
id: 4135,
title: "兄",
type: 1,
min: 28030,
max: 28069
}, {
id: 4136,
title: "朽",
type: 1,
min: 28070,
max: 28109
}, {
id: 4137,
title: "岫",
type: 1,
min: 28110,
max: 28149
}, {
id: 4138,
title: "吁",
type: 1,
min: 28150,
max: 28189
}, {
id: 4139,
title: "熏",
type: 1,
min: 28190,
max: 28229
}, {
id: 4140,
title: "恂",
type: 1,
min: 28230,
max: 28269
}, {
id: 4141,
title: "丫",
type: 1,
min: 28270,
max: 28309
}, {
id: 4142,
title: "哑",
type: 1,
min: 28310,
max: 28349
}, {
id: 4143,
title: "阏",
type: 1,
min: 28350,
max: 28389
}, {
id: 4144,
title: "筵",
type: 1,
min: 28390,
max: 28429
}, {
id: 4145,
title: "掩",
type: 1,
min: 28430,
max: 28469
}, {
id: 4146,
title: "厌",
type: 1,
min: 28470,
max: 28509
}, {
id: 4147,
title: "秧",
type: 1,
min: 28510,
max: 28549
}, {
id: 4148,
title: "爻",
type: 1,
min: 28550,
max: 28589
}, {
id: 4149,
title: "瑶里",
type: 1,
min: 28590,
max: 28629
}, {
id: 4150,
title: "耀",
type: 1,
min: 28630,
max: 28669
}, {
id: 4151,
title: "椰",
type: 1,
min: 28670,
max: 28709
}, {
id: 4152,
title: "以",
type: 1,
min: 28710,
max: 28749
}, {
id: 4153,
title: "已",
type: 1,
min: 28750,
max: 28789
}, {
id: 4154,
title: "扆",
type: 1,
min: 28790,
max: 28829
}, {
id: 4155,
title: "屹",
type: 1,
min: 28830,
max: 28869
}, {
id: 4156,
title: "轶",
type: 1,
min: 28870,
max: 28909
}, {
id: 4157,
title: "樱",
type: 1,
min: 28910,
max: 28949
}, {
id: 4158,
title: "泳",
type: 1,
min: 28950,
max: 28989
}, {
id: 4159,
title: "畬",
type: 1,
min: 28990,
max: 29029
}, {
id: 4160,
title: "偊",
type: 1,
min: 29030,
max: 29069
}, {
id: 4161,
title: "谷浑",
type: 1,
min: 29070,
max: 29109
}, {
id: 4162,
title: "煜",
type: 1,
min: 29110,
max: 29149
}, {
id: 4163,
title: "钰",
type: 1,
min: 29150,
max: 29189
}, {
id: 4164,
title: "猿",
type: 1,
min: 29190,
max: 29229
}, {
id: 4165,
title: "怨",
type: 1,
min: 29230,
max: 29269
}, {
id: 4166,
title: "樾",
type: 1,
min: 29270,
max: 29309
}, {
id: 4167,
title: "粤",
type: 1,
min: 29310,
max: 29349
}, {
id: 4168,
title: "晕",
type: 1,
min: 29350,
max: 29389
}, {
id: 4169,
title: "耘",
type: 1,
min: 29390,
max: 29429
}, {
id: 4170,
title: "愠",
type: 1,
min: 29430,
max: 29469
}, {
id: 4171,
title: "蕴",
type: 1,
min: 29470,
max: 29509
}, {
id: 4172,
title: "哉",
type: 1,
min: 29510,
max: 29549
}, {
id: 4173,
title: "咱",
type: 1,
min: 29550,
max: 29589
}, {
id: 4174,
title: "暂",
type: 1,
min: 29590,
max: 29629
}, {
id: 4175,
title: "藏",
type: 1,
min: 29630,
max: 29669
}, {
id: 4176,
title: "灶",
type: 1,
min: 29670,
max: 29709
}, {
id: 4177,
title: "责",
type: 1,
min: 29710,
max: 29749
}, {
id: 4178,
title: "甑",
type: 1,
min: 29750,
max: 29789
}, {
id: 4179,
title: "渣",
type: 1,
min: 29790,
max: 29829
}, {
id: 4180,
title: "札",
type: 1,
min: 29830,
max: 29869
}, {
id: 4181,
title: "栅",
type: 1,
min: 29870,
max: 29909
}, {
id: 4182,
title: "斋",
type: 1,
min: 29910,
max: 29949
}, {
id: 4183,
title: "寨",
type: 1,
min: 29950,
max: 29989
}, {
id: 4184,
title: "沾",
type: 1,
min: 29990,
max: 30029
}, {
id: 4185,
title: "崭",
type: 1,
min: 30030,
max: 30069
}, {
id: 4186,
title: "佔",
type: 1,
min: 30070,
max: 30109
}, {
id: 4187,
title: "爪",
type: 1,
min: 30110,
max: 30149
}, {
id: 4188,
title: "赭",
type: 1,
min: 30150,
max: 30189
}, {
id: 4189,
title: "阵",
type: 1,
min: 30190,
max: 30229
}, {
id: 4190,
title: "铮",
type: 1,
min: 30230,
max: 30269
}, {
id: 4191,
title: "证",
type: 1,
min: 30270,
max: 30309
}, {
id: 4192,
title: "芷",
type: 1,
min: 30310,
max: 30349
}, {
id: 4193,
title: "至",
type: 1,
min: 30350,
max: 30389
}, {
id: 4194,
title: "洲",
type: 1,
min: 30390,
max: 30429
}, {
id: 4195,
title: "胄",
type: 1,
min: 30430,
max: 30469
}, {
id: 4196,
title: "珠",
type: 1,
min: 30470,
max: 30509
}, {
id: 4197,
title: "逐",
type: 1,
min: 30510,
max: 30549
}, {
id: 4198,
title: "瞩",
type: 1,
min: 30550,
max: 30589
}, {
id: 4199,
title: "桩",
type: 1,
min: 30590,
max: 30629
}, {
id: 4200,
title: "撞",
type: 1,
min: 30630,
max: 30669
}, {
id: 4201,
title: "屯",
type: 1,
min: 30670,
max: 30709
}, {
id: 4202,
title: "捉",
type: 1,
min: 30710,
max: 30749
}, {
id: 4203,
title: "桌",
type: 1,
min: 30750,
max: 30789
}, {
id: 4204,
title: "倬",
type: 1,
min: 30790,
max: 30829
}, {
id: 4205,
title: "仔",
type: 1,
min: 30830,
max: 30869
}, {
id: 4206,
title: "综",
type: 1,
min: 30870,
max: 30909
}, {
id: 4207,
title: "踪",
type: 1,
min: 30910,
max: 30949
}, {
id: 4208,
title: "租",
type: 1,
min: 30950,
max: 30989
}, {
id: 4209,
title: "阻",
type: 1,
min: 30990,
max: 31029
}, {
id: 4210,
title: "醉",
type: 1,
min: 31030,
max: 31069
}, {
id: 4211,
title: "琢",
type: 1,
min: 31070,
max: 31109
}, {
id: 4212,
title: "祚",
type: 1,
min: 31110,
max: 31149
}, {
id: 4213,
title: "淳于",
type: 1,
min: 31150,
max: 31199
}, {
id: 4214,
title: "笪",
type: 1,
min: 31200,
max: 31249
}, {
id: 4215,
title: "东",
type: 1,
min: 31250,
max: 31299
}, {
id: 4216,
title: "东方",
type: 1,
min: 31300,
max: 31349
}, {
id: 4217,
title: "堵",
type: 1,
min: 31350,
max: 31399
}, {
id: 4218,
title: "段干",
type: 1,
min: 31400,
max: 31449
}, {
id: 4219,
title: "酆",
type: 1,
min: 31450,
max: 31499
}, {
id: 4220,
title: "干",
type: 1,
min: 31500,
max: 31549
}, {
id: 4221,
title: "缑",
type: 1,
min: 31550,
max: 31599
}, {
id: 4222,
title: "广",
type: 1,
min: 31600,
max: 31649
}, {
id: 4223,
title: "怀",
type: 1,
min: 31650,
max: 31699
}, {
id: 4224,
title: "宦",
type: 1,
min: 31700,
max: 31749
}, {
id: 4225,
title: "皇甫",
type: 1,
min: 31750,
max: 31799
}, {
id: 4226,
title: "郏",
type: 1,
min: 31800,
max: 31849
}, {
id: 4227,
title: "居",
type: 1,
min: 31850,
max: 31899
}, {
id: 4228,
title: "隗",
type: 1,
min: 31900,
max: 31949
}, {
id: 4229,
title: "利",
type: 1,
min: 31950,
max: 31999
}, {
id: 4230,
title: "隆",
type: 1,
min: 32e3,
max: 32049
}, {
id: 4231,
title: "镂",
type: 1,
min: 32050,
max: 32099
}, {
id: 4232,
title: "陋",
type: 1,
min: 32100,
max: 32149
}, {
id: 4233,
title: "南宫",
type: 1,
min: 32150,
max: 32199
}, {
id: 4234,
title: "溥",
type: 1,
min: 32200,
max: 32249
}, {
id: 4235,
title: "汝",
type: 1,
min: 32250,
max: 32299
}, {
id: 4236,
title: "蕊",
type: 1,
min: 32300,
max: 32349
}, {
id: 4237,
title: "山",
type: 1,
min: 32350,
max: 32399
}, {
id: 4238,
title: "佘",
type: 1,
min: 32400,
max: 32449
}, {
id: 4239,
title: "申屠",
type: 1,
min: 32450,
max: 32499
}, {
id: 4240,
title: "慎",
type: 1,
min: 32500,
max: 32549
}, {
id: 4241,
title: "双",
type: 1,
min: 32550,
max: 32599
}, {
id: 4242,
title: "通",
type: 1,
min: 32600,
max: 32649
}, {
id: 4243,
title: "西门",
type: 1,
min: 32650,
max: 32699
}, {
id: 4244,
title: "咸",
type: 1,
min: 32700,
max: 32749
}, {
id: 4245,
title: "幸",
type: 1,
min: 32750,
max: 32799
}, {
id: 4246,
title: "乐正",
type: 1,
min: 32800,
max: 32849
}, {
id: 4247,
title: "员",
type: 1,
min: 32850,
max: 32899
}, {
id: 4248,
title: "訾",
type: 1,
min: 32900,
max: 32949
}, {
id: 4249,
title: "伯",
type: 1,
min: 32950,
max: 33009
}, {
id: 4250,
title: "昌",
type: 1,
min: 33010,
max: 33069
}, {
id: 4251,
title: "巢",
type: 1,
min: 33070,
max: 33129
}, {
id: 4252,
title: "达",
type: 1,
min: 33130,
max: 33189
}, {
id: 4253,
title: "端木",
type: 1,
min: 33190,
max: 33249
}, {
id: 4254,
title: "顿",
type: 1,
min: 33250,
max: 33309
}, {
id: 4255,
title: "风",
type: 1,
min: 33310,
max: 33369
}, {
id: 4256,
title: "富",
type: 1,
min: 33370,
max: 33429
}, {
id: 4257,
title: "弓",
type: 1,
min: 33430,
max: 33489
}, {
id: 4258,
title: "恭",
type: 1,
min: 33490,
max: 33549
}, {
id: 4259,
title: "冠",
type: 1,
min: 33550,
max: 33609
}, {
id: 4260,
title: "汲",
type: 1,
min: 33610,
max: 33669
}, {
id: 4261,
title: "亢",
type: 1,
min: 33670,
max: 33729
}, {
id: 4262,
title: "夔",
type: 1,
min: 33730,
max: 33789
}, {
id: 4263,
title: "令狐",
type: 1,
min: 33790,
max: 33849
}, {
id: 4264,
title: "逯",
type: 1,
min: 33850,
max: 33909
}, {
id: 4265,
title: "宓",
type: 1,
min: 33910,
max: 33969
}, {
id: 4266,
title: "缪",
type: 1,
min: 33970,
max: 34029
}, {
id: 4267,
title: "慕容",
type: 1,
min: 34030,
max: 34089
}, {
id: 4268,
title: "那",
type: 1,
min: 34090,
max: 34149
}, {
id: 4269,
title: "能",
type: 1,
min: 34150,
max: 34209
}, {
id: 4270,
title: "钮",
type: 1,
min: 34210,
max: 34269
}, {
id: 4271,
title: "逄",
type: 1,
min: 34270,
max: 34329
}, {
id: 4272,
title: "蓬",
type: 1,
min: 34330,
max: 34389
}, {
id: 4273,
title: "濮阳",
type: 1,
min: 34390,
max: 34449
}, {
id: 4274,
title: "普",
type: 1,
min: 34450,
max: 34509
}, {
id: 4275,
title: "漆雕",
type: 1,
min: 34510,
max: 34569
}, {
id: 4276,
title: "谯",
type: 1,
min: 34570,
max: 34629
}, {
id: 4277,
title: "阙",
type: 1,
min: 34630,
max: 34689
}, {
id: 4278,
title: "融",
type: 1,
min: 34690,
max: 34749
}, {
id: 4279,
title: "韶",
type: 1,
min: 34750,
max: 34809
}, {
id: 4280,
title: "司寇",
type: 1,
min: 34810,
max: 34869
}, {
id: 4281,
title: "相",
type: 1,
min: 34870,
max: 34929
}, {
id: 4282,
title: "莘",
type: 1,
min: 34930,
max: 34989
}, {
id: 4283,
title: "宣",
type: 1,
min: 34990,
max: 35049
}, {
id: 4284,
title: "养",
type: 1,
min: 35050,
max: 35109
}, {
id: 4285,
title: "益",
type: 1,
min: 35110,
max: 35169
}, {
id: 4286,
title: "鱼",
type: 1,
min: 35170,
max: 35229
}, {
id: 4287,
title: "蔚",
type: 1,
min: 35230,
max: 35289
}, {
id: 4288,
title: "宰",
type: 1,
min: 35290,
max: 35349
}, {
id: 4289,
title: "仉",
type: 1,
min: 35350,
max: 35409
}, {
id: 4290,
title: "诸葛",
type: 1,
min: 35410,
max: 35469
}, {
id: 4291,
title: "贲",
type: 1,
min: 35470,
max: 35539
}, {
id: 4292,
title: "彩",
type: 1,
min: 35540,
max: 35609
}, {
id: 4293,
title: "储",
type: 1,
min: 35610,
max: 35679
}, {
id: 4294,
title: "从",
type: 1,
min: 35680,
max: 35749
}, {
id: 4295,
title: "丰",
type: 1,
min: 35750,
max: 35819
}, {
id: 4296,
title: "扶",
type: 1,
min: 35820,
max: 35889
}, {
id: 4297,
title: "福",
type: 1,
min: 35890,
max: 35959
}, {
id: 4298,
title: "公",
type: 1,
min: 35960,
max: 36029
}, {
id: 4299,
title: "贡",
type: 1,
min: 36030,
max: 36099
}, {
id: 4300,
title: "句",
type: 1,
min: 36100,
max: 36169
}, {
id: 4301,
title: "果",
type: 1,
min: 36170,
max: 36239
}, {
id: 4302,
title: "衡",
type: 1,
min: 36240,
max: 36309
}, {
id: 4303,
title: "红",
type: 1,
min: 36310,
max: 36379
}, {
id: 4304,
title: "後",
type: 1,
min: 36380,
max: 36449
}, {
id: 4305,
title: "滑",
type: 1,
min: 36450,
max: 36519
}, {
id: 4306,
title: "暨",
type: 1,
min: 36520,
max: 36589
}, {
id: 4307,
title: "家",
type: 1,
min: 36590,
max: 36659
}, {
id: 4308,
title: "经",
type: 1,
min: 36660,
max: 36729
}, {
id: 4309,
title: "拉",
type: 1,
min: 36730,
max: 36799
}, {
id: 4310,
title: "劳",
type: 1,
min: 36800,
max: 36869
}, {
id: 4311,
title: "郦",
type: 1,
min: 36870,
max: 36939
}, {
id: 4312,
title: "牧",
type: 1,
min: 36940,
max: 37009
}, {
id: 4313,
title: "胖",
type: 1,
min: 37010,
max: 37079
}, {
id: 4314,
title: "皮",
type: 1,
min: 37080,
max: 37149
}, {
id: 4315,
title: "平",
type: 1,
min: 37150,
max: 37219
}, {
id: 4316,
title: "濮",
type: 1,
min: 37220,
max: 37289
}, {
id: 4317,
title: "浦",
type: 1,
min: 37290,
max: 37359
}, {
id: 4318,
title: "琴",
type: 1,
min: 37360,
max: 37429
}, {
id: 4319,
title: "璩",
type: 1,
min: 37430,
max: 37499
}, {
id: 4320,
title: "荣",
type: 1,
min: 37500,
max: 37569
}, {
id: 4321,
title: "芮",
type: 1,
min: 37570,
max: 37639
}, {
id: 4322,
title: "赏",
type: 1,
min: 37640,
max: 37709
}, {
id: 4323,
title: "寿",
type: 1,
min: 37710,
max: 37779
}, {
id: 4324,
title: "束",
type: 1,
min: 37780,
max: 37849
}, {
id: 4325,
title: "帅",
type: 1,
min: 37850,
max: 37919
}, {
id: 4326,
title: "松",
type: 1,
min: 37920,
max: 37989
}, {
id: 4327,
title: "危",
type: 1,
min: 37990,
max: 38059
}, {
id: 4328,
title: "蔚",
type: 1,
min: 38060,
max: 38129
}, {
id: 4329,
title: "郗",
type: 1,
min: 38130,
max: 38199
}, {
id: 4330,
title: "夏侯",
type: 1,
min: 38200,
max: 38269
}, {
id: 4331,
title: "兴",
type: 1,
min: 38270,
max: 38339
}, {
id: 4332,
title: "须",
type: 1,
min: 38340,
max: 38409
}, {
id: 4333,
title: "羊",
type: 1,
min: 38410,
max: 38479
}, {
id: 4334,
title: "仰",
type: 1,
min: 38480,
max: 38549
}, {
id: 4335,
title: "於",
type: 1,
min: 38550,
max: 38619
}, {
id: 4336,
title: "庾",
type: 1,
min: 38620,
max: 38689
}, {
id: 4337,
title: "诸",
type: 1,
min: 38690,
max: 38759
}, {
id: 4338,
title: "暴",
type: 1,
min: 38760,
max: 38839
}, {
id: 4339,
title: "禇",
type: 1,
min: 38840,
max: 38919
}, {
id: 4340,
title: "法",
type: 1,
min: 38920,
max: 38999
}, {
id: 4341,
title: "戈",
type: 1,
min: 39e3,
max: 39079
}, {
id: 4342,
title: "归",
type: 1,
min: 39080,
max: 39159
}, {
id: 4343,
title: "过",
type: 1,
min: 39160,
max: 39239
}, {
id: 4344,
title: "杭",
type: 1,
min: 39240,
max: 39319
}, {
id: 4345,
title: "桓",
type: 1,
min: 39320,
max: 39399
}, {
id: 4346,
title: "惠",
type: 1,
min: 39400,
max: 39479
}, {
id: 4347,
title: "阚",
type: 1,
min: 39480,
max: 39559
}, {
id: 4348,
title: "蒯",
type: 1,
min: 39560,
max: 39639
}, {
id: 4349,
title: "禄",
type: 1,
min: 39640,
max: 39719
}, {
id: 4350,
title: "麻",
type: 1,
min: 39720,
max: 39799
}, {
id: 4351,
title: "慕",
type: 1,
min: 39800,
max: 39879
}, {
id: 4352,
title: "农",
type: 1,
min: 39880,
max: 39959
}, {
id: 4353,
title: "蒲",
type: 1,
min: 39960,
max: 40039
}, {
id: 4354,
title: "亓",
type: 1,
min: 40040,
max: 40119
}, {
id: 4355,
title: "钦",
type: 1,
min: 40120,
max: 40199
}, {
id: 4356,
title: "权",
type: 1,
min: 40200,
max: 40279
}, {
id: 4357,
title: "容",
type: 1,
min: 40280,
max: 40359
}, {
id: 4358,
title: "上官",
type: 1,
min: 40360,
max: 40439
}, {
id: 4359,
title: "师",
type: 1,
min: 40440,
max: 40519
}, {
id: 4360,
title: "司马",
type: 1,
min: 40520,
max: 40599
}, {
id: 4361,
title: "司徒",
type: 1,
min: 40600,
max: 40679
}, {
id: 4362,
title: "沃",
type: 1,
min: 40680,
max: 40759
}, {
id: 4363,
title: "乌",
type: 1,
min: 40760,
max: 40839
}, {
id: 4364,
title: "荀",
type: 1,
min: 40840,
max: 40919
}, {
id: 4365,
title: "雍",
type: 1,
min: 40920,
max: 40999
}, {
id: 4366,
title: "有",
type: 1,
min: 41e3,
max: 41079
}, {
id: 4367,
title: "禹",
type: 1,
min: 41080,
max: 41159
}, {
id: 4368,
title: "越",
type: 1,
min: 41160,
max: 41239
}, {
id: 4369,
title: "支",
type: 1,
min: 41240,
max: 41319
}, {
id: 4370,
title: "终",
type: 1,
min: 41320,
max: 41399
}, {
id: 4371,
title: "贝",
type: 1,
min: 41400,
max: 41489
}, {
id: 4372,
title: "凤",
type: 1,
min: 41490,
max: 41579
}, {
id: 4373,
title: "扈",
type: 1,
min: 41580,
max: 41669
}, {
id: 4374,
title: "蓟",
type: 1,
min: 41670,
max: 41759
}, {
id: 4375,
title: "邝",
type: 1,
min: 41760,
max: 41849
}, {
id: 4376,
title: "况",
type: 1,
min: 41850,
max: 41939
}, {
id: 4377,
title: "骆",
type: 1,
min: 41940,
max: 42029
}, {
id: 4378,
title: "满",
type: 1,
min: 42030,
max: 42119
}, {
id: 4379,
title: "茅",
type: 1,
min: 42120,
max: 42209
}, {
id: 4380,
title: "年",
type: 1,
min: 42210,
max: 42299
}, {
id: 4381,
title: "尚",
type: 1,
min: 42300,
max: 42389
}, {
id: 4382,
title: "水",
type: 1,
min: 42390,
max: 42479
}, {
id: 4383,
title: "宿",
type: 1,
min: 42480,
max: 42569
}, {
id: 4384,
title: "言",
type: 1,
min: 42570,
max: 42659
}, {
id: 4385,
title: "元",
type: 1,
min: 42660,
max: 42749
}, {
id: 4386,
title: "祖",
type: 1,
min: 42750,
max: 42839
}, {
id: 4387,
title: "巴",
type: 1,
min: 42840,
max: 42939
}, {
id: 4388,
title: "班",
type: 1,
min: 42940,
max: 43039
}, {
id: 4389,
title: "保",
type: 1,
min: 43040,
max: 43139
}, {
id: 4390,
title: "步",
type: 1,
min: 43140,
max: 43239
}, {
id: 4391,
title: "岑",
type: 1,
min: 43240,
max: 43339
}, {
id: 4392,
title: "晁",
type: 1,
min: 43340,
max: 43439
}, {
id: 4393,
title: "谌",
type: 1,
min: 43440,
max: 43539
}, {
id: 4394,
title: "代",
type: 1,
min: 43540,
max: 43639
}, {
id: 4395,
title: "丹",
type: 1,
min: 43640,
max: 43739
}, {
id: 4396,
title: "狄",
type: 1,
min: 43740,
max: 43839
}, {
id: 4397,
title: "伏",
type: 1,
min: 43840,
max: 43939
}, {
id: 4398,
title: "国",
type: 1,
min: 43940,
max: 44039
}, {
id: 4399,
title: "海",
type: 1,
min: 44040,
max: 44139
}, {
id: 4400,
title: "寒",
type: 1,
min: 44140,
max: 44239
}, {
id: 4401,
title: "和",
type: 1,
min: 44240,
max: 44339
}, {
id: 4402,
title: "河",
type: 1,
min: 44340,
max: 44439
}, {
id: 4403,
title: "弘",
type: 1,
min: 44440,
max: 44539
}, {
id: 4404,
title: "厚",
type: 1,
min: 44540,
max: 44639
}, {
id: 4405,
title: "呼",
type: 1,
min: 44640,
max: 44739
}, {
id: 4406,
title: "湖",
type: 1,
min: 44740,
max: 44839
}, {
id: 4407,
title: "皇",
type: 1,
min: 44840,
max: 44939
}, {
id: 4408,
title: "回",
type: 1,
min: 44940,
max: 45039
}, {
id: 4409,
title: "嵇",
type: 1,
min: 45040,
max: 45139
}, {
id: 4410,
title: "荆",
type: 1,
min: 45140,
max: 45239
}, {
id: 4411,
title: "鞠",
type: 1,
min: 45240,
max: 45339
}, {
id: 4412,
title: "寇",
type: 1,
min: 45340,
max: 45439
}, {
id: 4413,
title: "蔺",
type: 1,
min: 45440,
max: 45539
}, {
id: 4414,
title: "楼",
type: 1,
min: 45540,
max: 45639
}, {
id: 4415,
title: "明",
type: 1,
min: 45640,
max: 45739
}, {
id: 4416,
title: "南",
type: 1,
min: 45740,
max: 45839
}, {
id: 4417,
title: "区",
type: 1,
min: 45840,
max: 45939
}, {
id: 4418,
title: "綦",
type: 1,
min: 45940,
max: 46039
}, {
id: 4419,
title: "乾",
type: 1,
min: 46040,
max: 46139
}, {
id: 4420,
title: "羌",
type: 1,
min: 46140,
max: 46239
}, {
id: 4421,
title: "桥",
type: 1,
min: 46240,
max: 46339
}, {
id: 4422,
title: "勤",
type: 1,
min: 46340,
max: 46439
}, {
id: 4423,
title: "清",
type: 1,
min: 46440,
max: 46539
}, {
id: 4424,
title: "秋",
type: 1,
min: 46540,
max: 46639
}, {
id: 4425,
title: "裘",
type: 1,
min: 46640,
max: 46739
}, {
id: 4426,
title: "渠",
type: 1,
min: 46740,
max: 46839
}, {
id: 4427,
title: "桑",
type: 1,
min: 46840,
max: 46939
}, {
id: 4428,
title: "僧",
type: 1,
min: 46940,
max: 47039
}, {
id: 4429,
title: "沙",
type: 1,
min: 47040,
max: 47139
}, {
id: 4430,
title: "台",
type: 1,
min: 47140,
max: 47239
}, {
id: 4431,
title: "太",
type: 1,
min: 47240,
max: 47339
}, {
id: 4432,
title: "腾",
type: 1,
min: 47340,
max: 47439
}, {
id: 4433,
title: "铁",
type: 1,
min: 47440,
max: 47539
}, {
id: 4434,
title: "仝",
type: 1,
min: 47540,
max: 47639
}, {
id: 4435,
title: "同",
type: 1,
min: 47640,
max: 47739
}, {
id: 4436,
title: "尉",
type: 1,
min: 47740,
max: 47839
}, {
id: 4437,
title: "闻",
type: 1,
min: 47840,
max: 47939
}, {
id: 4438,
title: "巫",
type: 1,
min: 47940,
max: 48039
}, {
id: 4439,
title: "习",
type: 1,
min: 48040,
max: 48139
}, {
id: 4440,
title: "鲜",
type: 1,
min: 48140,
max: 48239
}, {
id: 4441,
title: "肖",
type: 1,
min: 48240,
max: 48339
}, {
id: 4442,
title: "镡",
type: 1,
min: 48340,
max: 48439
}, {
id: 4443,
title: "胥",
type: 1,
min: 48440,
max: 48539
}, {
id: 4444,
title: "闫",
type: 1,
min: 48540,
max: 48639
}, {
id: 4445,
title: "扬",
type: 1,
min: 48640,
max: 48739
}, {
id: 4446,
title: "银",
type: 1,
min: 48740,
max: 48839
}, {
id: 4447,
title: "荫",
type: 1,
min: 48840,
max: 48939
}, {
id: 4448,
title: "应",
type: 1,
min: 48940,
max: 49039
}, {
id: 4449,
title: "乐",
type: 1,
min: 49040,
max: 49139
}, {
id: 4450,
title: "云",
type: 1,
min: 49140,
max: 49239
}, {
id: 4451,
title: "雲",
type: 1,
min: 49240,
max: 49339
}, {
id: 4452,
title: "中",
type: 1,
min: 49340,
max: 49439
}, {
id: 4453,
title: "卞",
type: 1,
min: 49440,
max: 49639
}, {
id: 4454,
title: "楚",
type: 1,
min: 49640,
max: 49839
}, {
id: 4455,
title: "都",
type: 1,
min: 49840,
max: 50039
}, {
id: 4456,
title: "封",
type: 1,
min: 50040,
max: 50239
}, {
id: 4457,
title: "巩",
type: 1,
min: 50240,
max: 50439
}, {
id: 4458,
title: "井",
type: 1,
min: 50440,
max: 50639
}, {
id: 4459,
title: "匡",
type: 1,
min: 50640,
max: 50839
}, {
id: 4460,
title: "乐",
type: 1,
min: 50840,
max: 51039
}, {
id: 4461,
title: "栗",
type: 1,
min: 51040,
max: 51239
}, {
id: 4462,
title: "佟",
type: 1,
min: 51240,
max: 51439
}, {
id: 4463,
title: "衣",
type: 1,
min: 51440,
max: 51639
}, {
id: 4464,
title: "虞",
type: 1,
min: 51640,
max: 51839
}, {
id: 4465,
title: "原",
type: 1,
min: 51840,
max: 52039
}, {
id: 4466,
title: "仲",
type: 1,
min: 52040,
max: 52239
}, {
id: 4467,
title: "竺",
type: 1,
min: 52240,
max: 52439
}, {
id: 4468,
title: "宗",
type: 1,
min: 52440,
max: 52639
}, {
id: 4469,
title: "艾",
type: 1,
min: 52640,
max: 52939
}, {
id: 4470,
title: "敖",
type: 1,
min: 52940,
max: 53239
}, {
id: 4471,
title: "迟",
type: 1,
min: 53240,
max: 53539
}, {
id: 4472,
title: "窦",
type: 1,
min: 53540,
max: 53839
}, {
id: 4473,
title: "花",
type: 1,
min: 53840,
max: 54139
}, {
id: 4474,
title: "计",
type: 1,
min: 54140,
max: 54439
}, {
id: 4475,
title: "揭",
type: 1,
min: 54440,
max: 54739
}, {
id: 4476,
title: "蓝",
type: 1,
min: 54740,
max: 55039
}, {
id: 4477,
title: "冷",
type: 1,
min: 55040,
max: 55339
}, {
id: 4478,
title: "栾",
type: 1,
min: 55340,
max: 55639
}, {
id: 4479,
title: "蒙",
type: 1,
min: 55640,
max: 55939
}, {
id: 4480,
title: "糜",
type: 1,
min: 55940,
max: 56239
}, {
id: 4481,
title: "仇",
type: 1,
min: 56240,
max: 56539
}, {
id: 4482,
title: "商",
type: 1,
min: 56540,
max: 56839
}, {
id: 4483,
title: "鄢",
type: 1,
min: 56840,
max: 57139
}, {
id: 4484,
title: "晏",
type: 1,
min: 57140,
max: 57439
}, {
id: 4485,
title: "宇",
type: 1,
min: 57440,
max: 57739
}, {
id: 4486,
title: "郁",
type: 1,
min: 57740,
max: 58039
}, {
id: 4487,
title: "喻",
type: 1,
min: 58040,
max: 58339
}, {
id: 4488,
title: "卓",
type: 1,
min: 58340,
max: 58639
}, {
id: 4489,
title: "褚",
type: 1,
min: 58640,
max: 59039
}, {
id: 4490,
title: "党",
type: 1,
min: 59040,
max: 59439
}, {
id: 4491,
title: "邸",
type: 1,
min: 59440,
max: 59839
}, {
id: 4492,
title: "杜",
type: 1,
min: 59840,
max: 60239
}, {
id: 4493,
title: "符",
type: 1,
min: 60240,
max: 60639
}, {
id: 4494,
title: "盖",
type: 1,
min: 60640,
max: 61039
}, {
id: 4495,
title: "郜",
type: 1,
min: 61040,
max: 61439
}, {
id: 4496,
title: "姬",
type: 1,
min: 61440,
max: 61839
}, {
id: 4497,
title: "冀",
type: 1,
min: 61840,
max: 62239
}, {
id: 4498,
title: "简",
type: 1,
min: 62240,
max: 62639
}, {
id: 4499,
title: "郎",
type: 1,
min: 62640,
max: 63039
}, {
id: 4500,
title: "连",
type: 1,
min: 63040,
max: 63439
}, {
id: 4501,
title: "廉",
type: 1,
min: 63440,
max: 63839
}, {
id: 4502,
title: "娄",
type: 1,
min: 63840,
max: 64239
}, {
id: 4503,
title: "木",
type: 1,
min: 64240,
max: 64639
}, {
id: 4504,
title: "穆",
type: 1,
min: 64640,
max: 65039
}, {
id: 4505,
title: "全",
type: 1,
min: 65040,
max: 65439
}, {
id: 4506,
title: "谈",
type: 1,
min: 65440,
max: 65839
}, {
id: 4507,
title: "屠",
type: 1,
min: 65840,
max: 66239
}, {
id: 4508,
title: "奚",
type: 1,
min: 66240,
max: 66639
}, {
id: 4509,
title: "燕",
type: 1,
min: 66640,
max: 67039
}, {
id: 4510,
title: "畅",
type: 1,
min: 67040,
max: 67539
}, {
id: 4511,
title: "宫",
type: 1,
min: 67540,
max: 68039
}, {
id: 4512,
title: "苟",
type: 1,
min: 68040,
max: 68539
}, {
id: 4513,
title: "晋",
type: 1,
min: 68540,
max: 69039
}, {
id: 4514,
title: "来",
type: 1,
min: 69040,
max: 69539
}, {
id: 4515,
title: "嵺",
type: 1,
min: 69540,
max: 70039
}, {
id: 4516,
title: "滕",
type: 1,
min: 70040,
max: 70539
}, {
id: 4517,
title: "邬",
type: 1,
min: 70540,
max: 71039
}, {
id: 4518,
title: "苑",
type: 1,
min: 71040,
max: 71539
}, {
id: 4519,
title: "臧",
type: 1,
min: 71540,
max: 72039
}, {
id: 4520,
title: "池",
type: 1,
min: 72040,
max: 72639
}, {
id: 4521,
title: "刁",
type: 1,
min: 72640,
max: 73239
}, {
id: 4522,
title: "古",
type: 1,
min: 73240,
max: 73839
}, {
id: 4523,
title: "吉",
type: 1,
min: 73840,
max: 74439
}, {
id: 4524,
title: "米",
type: 1,
min: 74440,
max: 75039
}, {
id: 4525,
title: "戚",
type: 1,
min: 75040,
max: 75639
}, {
id: 4526,
title: "丘",
type: 1,
min: 75640,
max: 76239
}, {
id: 4527,
title: "瞿",
type: 1,
min: 76240,
max: 76839
}, {
id: 4528,
title: "饶",
type: 1,
min: 76840,
max: 77439
}, {
id: 4529,
title: "边",
type: 1,
min: 77440,
max: 78139
}, {
id: 4530,
title: "柴",
type: 1,
min: 78140,
max: 78839
}, {
id: 4531,
title: "车",
type: 1,
min: 78840,
max: 79539
}, {
id: 4532,
title: "房",
type: 1,
min: 79540,
max: 80239
}, {
id: 4533,
title: "华",
type: 1,
min: 80240,
max: 80939
}, {
id: 4534,
title: "闵",
type: 1,
min: 80940,
max: 81639
}, {
id: 4535,
title: "欧阳",
type: 1,
min: 81640,
max: 82339
}, {
id: 4536,
title: "强",
type: 1,
min: 82340,
max: 83039
}, {
id: 4537,
title: "冉",
type: 1,
min: 83040,
max: 83739
}, {
id: 4538,
title: "解",
type: 1,
min: 83740,
max: 84439
}, {
id: 4539,
title: "柏",
type: 1,
min: 84440,
max: 85239
}, {
id: 4540,
title: "包",
type: 1,
min: 85240,
max: 86039
}, {
id: 4541,
title: "薄",
type: 1,
min: 86040,
max: 86839
}, {
id: 4542,
title: "桂",
type: 1,
min: 86840,
max: 87639
}, {
id: 4543,
title: "景",
type: 1,
min: 87640,
max: 88439
}, {
id: 4544,
title: "柯",
type: 1,
min: 88440,
max: 89239
}, {
id: 4545,
title: "宁",
type: 1,
min: 89240,
max: 90039
}, {
id: 4546,
title: "阮",
type: 1,
min: 90040,
max: 90839
}, {
id: 4547,
title: "单",
type: 1,
min: 90840,
max: 91639
}, {
id: 4548,
title: "司",
type: 1,
min: 91640,
max: 92439
}, {
id: 4549,
title: "鲍",
type: 1,
min: 92440,
max: 93339
}, {
id: 4550,
title: "甘",
type: 1,
min: 93340,
max: 94239
}, {
id: 4551,
title: "霍",
type: 1,
min: 94240,
max: 95139
}, {
id: 4552,
title: "覃",
type: 1,
min: 95140,
max: 96039
}, {
id: 4553,
title: "屈",
type: 1,
min: 96040,
max: 96939
}, {
id: 4554,
title: "隋",
type: 1,
min: 96940,
max: 97839
}, {
id: 4555,
title: "位",
type: 1,
min: 97840,
max: 98739
}, {
id: 4556,
title: "翁",
type: 1,
min: 98740,
max: 99639
}, {
id: 4557,
title: "查",
type: 1,
min: 99640,
max: 100539
}, {
id: 4558,
title: "植",
type: 1,
min: 100540,
max: 101439
}, {
id: 4559,
title: "成",
type: 1,
min: 101440,
max: 102439
}, {
id: 4560,
title: "欧",
type: 1,
min: 102440,
max: 103439
}, {
id: 4561,
title: "裴",
type: 1,
min: 103440,
max: 104439
}, {
id: 4562,
title: "曲",
type: 1,
min: 104440,
max: 105439
}, {
id: 4563,
title: "卫",
type: 1,
min: 105440,
max: 106439
}, {
id: 4564,
title: "席",
type: 1,
min: 106440,
max: 107439
}, {
id: 4565,
title: "项",
type: 1,
min: 107440,
max: 108439
}, {
id: 4566,
title: "阳",
type: 1,
min: 108440,
max: 109439
}, {
id: 4567,
title: "游",
type: 1,
min: 109440,
max: 110439
}, {
id: 4568,
title: "甄",
type: 1,
min: 110440,
max: 111439
}, {
id: 4569,
title: "费",
type: 1,
min: 111440,
max: 112539
}, {
id: 4570,
title: "关",
type: 1,
min: 112540,
max: 113639
}, {
id: 4571,
title: "纪",
type: 1,
min: 113640,
max: 114739
}, {
id: 4572,
title: "靳",
type: 1,
min: 114740,
max: 115839
}, {
id: 4573,
title: "凌",
type: 1,
min: 115840,
max: 116939
}, {
id: 4574,
title: "苗",
type: 1,
min: 116940,
max: 118039
}, {
id: 4575,
title: "盛",
type: 1,
min: 118040,
max: 119139
}, {
id: 4576,
title: "童",
type: 1,
min: 119140,
max: 120239
}, {
id: 4577,
title: "詹",
type: 1,
min: 120240,
max: 121339
}, {
id: 4578,
title: "卜",
type: 1,
min: 121340,
max: 122539
}, {
id: 4579,
title: "耿",
type: 1,
min: 122540,
max: 123739
}, {
id: 4580,
title: "谷",
type: 1,
min: 123740,
max: 124939
}, {
id: 4581,
title: "牟",
type: 1,
min: 124940,
max: 126139
}, {
id: 4582,
title: "祁",
type: 1,
min: 126140,
max: 127339
}, {
id: 4583,
title: "时",
type: 1,
min: 127340,
max: 128539
}, {
id: 4584,
title: "舒",
type: 1,
min: 128540,
max: 129739
}, {
id: 4585,
title: "涂",
type: 1,
min: 129740,
max: 130939
}, {
id: 4586,
title: "祝",
type: 1,
min: 130940,
max: 132139
}, {
id: 4587,
title: "左",
type: 1,
min: 132140,
max: 133339
}, {
id: 4588,
title: "管",
type: 1,
min: 133340,
max: 134639
}, {
id: 4589,
title: "路",
type: 1,
min: 134640,
max: 135939
}, {
id: 4590,
title: "梅",
type: 1,
min: 135940,
max: 137239
}, {
id: 4591,
title: "莫",
type: 1,
min: 137240,
max: 138539
}, {
id: 4592,
title: "辛",
type: 1,
min: 138540,
max: 139839
}, {
id: 4593,
title: "邢",
type: 1,
min: 139840,
max: 141139
}, {
id: 4594,
title: "沿",
type: 1,
min: 141140,
max: 142439
}, {
id: 4595,
title: "岳",
type: 1,
min: 142440,
max: 143739
}, {
id: 4596,
title: "庄",
type: 1,
min: 143740,
max: 145039
}, {
id: 4597,
title: "毕",
type: 1,
min: 145040,
max: 146439
}, {
id: 4598,
title: "丛",
type: 1,
min: 146440,
max: 147839
}, {
id: 4599,
title: "焦",
type: 1,
min: 147840,
max: 149239
}, {
id: 4600,
title: "柳",
type: 1,
min: 149240,
max: 150639
}, {
id: 4601,
title: "聂",
type: 1,
min: 150640,
max: 152039
}, {
id: 4602,
title: "齐",
type: 1,
min: 152040,
max: 153439
}, {
id: 4603,
title: "申",
type: 1,
min: 153440,
max: 154839
}, {
id: 4604,
title: "韦",
type: 1,
min: 154840,
max: 156239
}, {
id: 4605,
title: "伍",
type: 1,
min: 156240,
max: 157639
}, {
id: 4606,
title: "向",
type: 1,
min: 157640,
max: 159039
}, {
id: 4607,
title: "尤",
type: 1,
min: 159040,
max: 160439
}, {
id: 4608,
title: "葛",
type: 1,
min: 160440,
max: 161939
}, {
id: 4609,
title: "季",
type: 1,
min: 161940,
max: 163439
}, {
id: 4610,
title: "芦",
type: 1,
min: 163440,
max: 164939
}, {
id: 4611,
title: "鲁",
type: 1,
min: 164940,
max: 166439
}, {
id: 4612,
title: "倪",
type: 1,
min: 166440,
max: 167939
}, {
id: 4613,
title: "牛",
type: 1,
min: 167940,
max: 169439
}, {
id: 4614,
title: "温",
type: 1,
min: 169440,
max: 170939
}, {
id: 4615,
title: "严",
type: 1,
min: 170940,
max: 172439
}, {
id: 4616,
title: "俞",
type: 1,
min: 172440,
max: 173939
}, {
id: 4617,
title: "章",
type: 1,
min: 173940,
max: 175439
}, {
id: 4618,
title: "安",
type: 1,
min: 175440,
max: 177039
}, {
id: 4619,
title: "樊",
type: 1,
min: 177040,
max: 178639
}, {
id: 4620,
title: "洪",
type: 1,
min: 178640,
max: 180239
}, {
id: 4621,
title: "兰",
type: 1,
min: 180240,
max: 181839
}, {
id: 4622,
title: "庞",
type: 1,
min: 181840,
max: 183439
}, {
id: 4623,
title: "施",
type: 1,
min: 183440,
max: 185039
}, {
id: 4624,
title: "陶",
type: 1,
min: 185040,
max: 186639
}, {
id: 4625,
title: "颜",
type: 1,
min: 186640,
max: 188239
}, {
id: 4626,
title: "殷",
type: 1,
min: 188240,
max: 189839
}, {
id: 4627,
title: "翟",
type: 1,
min: 189840,
max: 191439
}, {
id: 4628,
title: "龚",
type: 1,
min: 191440,
max: 193139
}, {
id: 4629,
title: "文",
type: 1,
min: 193140,
max: 194839
}, {
id: 4630,
title: "常",
type: 1,
min: 194840,
max: 196639
}, {
id: 4631,
title: "贺",
type: 1,
min: 196640,
max: 198439
}, {
id: 4632,
title: "赖",
type: 1,
min: 198440,
max: 200239
}, {
id: 4633,
title: "乔",
type: 1,
min: 200240,
max: 202039
}, {
id: 4634,
title: "武",
type: 1,
min: 202040,
max: 203839
}, {
id: 4635,
title: "黎",
type: 1,
min: 203840,
max: 205739
}, {
id: 4636,
title: "汤",
type: 1,
min: 205740,
max: 207639
}, {
id: 4637,
title: "易",
type: 1,
min: 207640,
max: 209539
}, {
id: 4638,
title: "尹",
type: 1,
min: 209540,
max: 211439
}, {
id: 4639,
title: "钱",
type: 1,
min: 211440,
max: 213639
}, {
id: 4640,
title: "段",
type: 1,
min: 213640,
max: 215939
}, {
id: 4641,
title: "雷",
type: 1,
min: 215940,
max: 218239
}, {
id: 4642,
title: "龙",
type: 1,
min: 218240,
max: 220639
}, {
id: 4643,
title: "孟",
type: 1,
min: 220640,
max: 223039
}, {
id: 4644,
title: "邵",
type: 1,
min: 223040,
max: 225439
}, {
id: 4645,
title: "万",
type: 1,
min: 225440,
max: 227839
}, {
id: 4646,
title: "顾",
type: 1,
min: 227840,
max: 230339
}, {
id: 4647,
title: "侯",
type: 1,
min: 230340,
max: 232839
}, {
id: 4648,
title: "史",
type: 1,
min: 232840,
max: 235339
}, {
id: 4649,
title: "江",
type: 1,
min: 235340,
max: 237939
}, {
id: 4650,
title: "秦",
type: 1,
min: 237940,
max: 240539
}, {
id: 4651,
title: "毛",
type: 1,
min: 240540,
max: 243239
}, {
id: 4652,
title: "邱",
type: 1,
min: 243240,
max: 245939
}, {
id: 4653,
title: "崔",
type: 1,
min: 245940,
max: 248739
}, {
id: 4654,
title: "康",
type: 1,
min: 248740,
max: 251539
}, {
id: 4655,
title: "白",
type: 1,
min: 251540,
max: 254439
}, {
id: 4656,
title: "孔",
type: 1,
min: 254440,
max: 257339
}, {
id: 4657,
title: "郝",
type: 1,
min: 257340,
max: 260339
}, {
id: 4658,
title: "陆",
type: 1,
min: 260340,
max: 263439
}, {
id: 4659,
title: "金",
type: 1,
min: 263440,
max: 266639
}, {
id: 4660,
title: "熊",
type: 1,
min: 266640,
max: 269839
}, {
id: 4661,
title: "邹",
type: 1,
min: 269840,
max: 273139
}, {
id: 4662,
title: "廖",
type: 1,
min: 273140,
max: 276539
}, {
id: 4663,
title: "谭",
type: 1,
min: 276540,
max: 279939
}, {
id: 4664,
title: "石",
type: 1,
min: 279940,
max: 283439
}, {
id: 4665,
title: "姚",
type: 1,
min: 283440,
max: 286939
}, {
id: 4666,
title: "范",
type: 1,
min: 286940,
max: 290539
}, {
id: 4667,
title: "方",
type: 1,
min: 290540,
max: 294139
}, {
id: 4668,
title: "姜",
type: 1,
min: 294140,
max: 297739
}, {
id: 4669,
title: "任",
type: 1,
min: 297740,
max: 301439
}, {
id: 4670,
title: "田",
type: 1,
min: 301440,
max: 305139
}, {
id: 4671,
title: "汪",
type: 1,
min: 305140,
max: 308839
}, {
id: 4672,
title: "钟",
type: 1,
min: 308840,
max: 312639
}, {
id: 4673,
title: "戴",
type: 1,
min: 312640,
max: 316539
}, {
id: 4674,
title: "夏",
type: 1,
min: 316540,
max: 320439
}, {
id: 4675,
title: "潘",
type: 1,
min: 320440,
max: 324539
}, {
id: 4676,
title: "阎",
type: 1,
min: 324540,
max: 328639
}, {
id: 4677,
title: "余",
type: 1,
min: 328640,
max: 332739
}, {
id: 4678,
title: "丁",
type: 1,
min: 332740,
max: 336939
}, {
id: 4679,
title: "贾",
type: 1,
min: 336940,
max: 341139
}, {
id: 4680,
title: "薛",
type: 1,
min: 341140,
max: 345339
}, {
id: 4681,
title: "叶",
type: 1,
min: 345340,
max: 349539
}, {
id: 4682,
title: "魏",
type: 1,
min: 349540,
max: 354039
}, {
id: 4683,
title: "蔡",
type: 1,
min: 354040,
max: 358639
}, {
id: 4684,
title: "蒋",
type: 1,
min: 358640,
max: 363339
}, {
id: 4685,
title: "卢",
type: 1,
min: 363340,
max: 368039
}, {
id: 4686,
title: "吕",
type: 1,
min: 368040,
max: 372739
}, {
id: 4687,
title: "苏",
type: 1,
min: 372740,
max: 377439
}, {
id: 4688,
title: "彭",
type: 1,
min: 377440,
max: 382339
}, {
id: 4689,
title: "沈",
type: 1,
min: 382340,
max: 387339
}, {
id: 4690,
title: "曾",
type: 1,
min: 387340,
max: 392339
}, {
id: 4691,
title: "傅",
type: 1,
min: 392340,
max: 397439
}, {
id: 4692,
title: "邓",
type: 1,
min: 397440,
max: 402839
}, {
id: 4693,
title: "许",
type: 1,
min: 402840,
max: 408239
}, {
id: 4694,
title: "袁",
type: 1,
min: 408240,
max: 413639
}, {
id: 4695,
title: "曹",
type: 1,
min: 413640,
max: 419339
}, {
id: 4696,
title: "程",
type: 1,
min: 419340,
max: 425039
}, {
id: 4697,
title: "萧",
type: 1,
min: 425040,
max: 430939
}, {
id: 4698,
title: "董",
type: 1,
min: 430940,
max: 437039
}, {
id: 4699,
title: "于",
type: 1,
min: 437040,
max: 443239
}, {
id: 4700,
title: "冯",
type: 1,
min: 443240,
max: 449639
}, {
id: 4701,
title: "唐",
type: 1,
min: 449640,
max: 456139
}, {
id: 4702,
title: "韩",
type: 1,
min: 456140,
max: 462939
}, {
id: 4703,
title: "谢",
type: 1,
min: 462940,
max: 470139
}, {
id: 4704,
title: "郑",
type: 1,
min: 470140,
max: 477939
}, {
id: 4705,
title: "宋",
type: 1,
min: 477940,
max: 486039
}, {
id: 4706,
title: "梁",
type: 1,
min: 486040,
max: 494439
}, {
id: 4707,
title: "罗",
type: 1,
min: 494440,
max: 503039
}, {
id: 4708,
title: "马",
type: 1,
min: 503040,
max: 513539
}, {
id: 4709,
title: "郭",
type: 1,
min: 513540,
max: 525039
}, {
id: 4710,
title: "何",
type: 1,
min: 525040,
max: 536739
}, {
id: 4711,
title: "林",
type: 1,
min: 536740,
max: 548539
}, {
id: 4712,
title: "高",
type: 1,
min: 548540,
max: 560639
}, {
id: 4713,
title: "朱",
type: 1,
min: 560640,
max: 573239
}, {
id: 4714,
title: "胡",
type: 1,
min: 573240,
max: 586339
}, {
id: 4715,
title: "孙",
type: 1,
min: 586340,
max: 601739
}, {
id: 4716,
title: "徐",
type: 1,
min: 601740,
max: 618439
}, {
id: 4717,
title: "吴",
type: 1,
min: 618440,
max: 638939
}, {
id: 4718,
title: "周",
type: 1,
min: 638940,
max: 660139
}, {
id: 4719,
title: "黄",
type: 1,
min: 660140,
max: 682439
}, {
id: 4720,
title: "赵",
type: 1,
min: 682440,
max: 705339
}, {
id: 4721,
title: "杨",
type: 1,
min: 705340,
max: 736139
}, {
id: 4722,
title: "陈",
type: 1,
min: 736140,
max: 781439
}, {
id: 4723,
title: "刘",
type: 1,
min: 781440,
max: 835239
}, {
id: 4724,
title: "张",
type: 1,
min: 835240,
max: 905939
}, {
id: 4725,
title: "王",
type: 1,
min: 905940,
max: 980039
}, {
id: 4726,
title: "李",
type: 1,
min: 980040,
max: 1059439
}, {
id: 4727,
title: "伯",
type: 2,
min: "",
max: ""
}, {
id: 4728,
title: "仲",
type: 2,
min: "",
max: ""
}, {
id: 4729,
title: "叔",
type: 2,
min: "",
max: ""
}, {
id: 4730,
title: "季",
type: 2,
min: "",
max: ""
}, {
id: 4731,
title: "孟",
type: 2,
min: "",
max: ""
}, {
id: 4732,
title: "子",
type: 2,
min: "",
max: ""
}, {
id: 4733,
title: "为",
type: 2,
min: "",
max: ""
}, {
id: 4734,
title: "永",
type: 2,
min: "",
max: ""
}, {
id: 4735,
title: "世",
type: 2,
min: "",
max: ""
}, {
id: 4736,
title: "继",
type: 2,
min: "",
max: ""
}, {
id: 4737,
title: "自",
type: 2,
min: "",
max: ""
}, {
id: 4738,
title: "长",
type: 2,
min: "",
max: ""
}, {
id: 4739,
title: "克",
type: 2,
min: "",
max: ""
}, {
id: 4740,
title: "人",
type: 2,
min: "",
max: ""
}, {
id: 4741,
title: "公",
type: 2,
min: "",
max: ""
}, {
id: 4742,
title: "夫",
type: 2,
min: "",
max: ""
}, {
id: 4743,
title: "书",
type: 2,
min: "",
max: ""
}, {
id: 4744,
title: "令",
type: 2,
min: "",
max: ""
}, {
id: 4745,
title: "凡",
type: 2,
min: "",
max: ""
}, {
id: 4746,
title: "孝",
type: 2,
min: "",
max: ""
}, {
id: 4747,
title: "志",
type: 2,
min: "",
max: ""
}, {
id: 4748,
title: "敦",
type: 2,
min: "",
max: ""
}, {
id: 4749,
title: "修",
type: 2,
min: "",
max: ""
}, {
id: 4750,
title: "汉",
type: 2,
min: "",
max: ""
}, {
id: 4751,
title: "先",
type: 2,
min: "",
max: ""
}, {
id: 4752,
title: "安",
type: 2,
min: "",
max: ""
}, {
id: 4753,
title: "求",
type: 2,
min: "",
max: ""
}, {
id: 4754,
title: "延",
type: 2,
min: "",
max: ""
}, {
id: 4755,
title: "嗣",
type: 2,
min: "",
max: ""
}, {
id: 4756,
title: "愈",
type: 2,
min: "",
max: ""
}, {
id: 4757,
title: "呈",
type: 2,
min: "",
max: ""
}, {
id: 4758,
title: "天",
type: 2,
min: "",
max: ""
}, {
id: 4759,
title: "重",
type: 2,
min: "",
max: ""
}, {
id: 4760,
title: "春",
type: 2,
min: "",
max: ""
}, {
id: 4761,
title: "学",
type: 2,
min: "",
max: ""
}, {
id: 4762,
title: "才",
type: 2,
min: "",
max: ""
}, {
id: 4763,
title: "玄",
type: 2,
min: "",
max: ""
}, {
id: 4764,
title: "元",
type: 2,
min: "",
max: ""
}, {
id: 4765,
title: "振",
type: 2,
min: "",
max: ""
}, {
id: 4766,
title: "承",
type: 2,
min: "",
max: ""
}, {
id: 4767,
title: "祥",
type: 2,
min: "",
max: ""
}, {
id: 4768,
title: "从",
type: 2,
min: "",
max: ""
}, {
id: 4769,
title: "正",
type: 2,
min: "",
max: ""
}, {
id: 4770,
title: "之",
type: 2,
min: "",
max: ""
}, {
id: 4771,
title: "立",
type: 2,
min: "",
max: ""
}, {
id: 4772,
title: "智",
type: 2,
min: "",
max: ""
}, {
id: 4773,
title: "利",
type: 2,
min: "",
max: ""
}, {
id: 4774,
title: "真",
type: 2,
min: "",
max: ""
}, {
id: 4775,
title: "一",
type: 2,
min: "",
max: ""
}, {
id: 4776,
title: "定",
type: 2,
min: "",
max: ""
}, {
id: 4777,
title: "佑",
type: 2,
min: "",
max: ""
}, {
id: 4778,
title: "显",
type: 2,
min: "",
max: ""
}, {
id: 4779,
title: "景",
type: 2,
min: "",
max: ""
}, {
id: 4780,
title: "益",
type: 2,
min: "",
max: ""
}, {
id: 4781,
title: "弘",
type: 2,
min: "",
max: ""
}, {
id: 4782,
title: "扬",
type: 2,
min: "",
max: ""
}, {
id: 4783,
title: "懋",
type: 2,
min: "",
max: ""
}, {
id: 4784,
title: "彦",
type: 2,
min: "",
max: ""
}, {
id: 4785,
title: "大",
type: 2,
min: "",
max: ""
}, {
id: 4786,
title: "千",
type: 2,
min: "",
max: ""
}, {
id: 4787,
title: "万",
type: 2,
min: "",
max: ""
}, {
id: 4788,
title: "攸",
type: 2,
min: "",
max: ""
}, {
id: 4789,
title: "敏",
type: 2,
min: "",
max: ""
}, {
id: 4790,
title: "敕",
type: 2,
min: "",
max: ""
}, {
id: 4791,
title: "敦",
type: 2,
min: "",
max: ""
}, {
id: 4792,
title: "恂",
type: 2,
min: "",
max: ""
}, {
id: 4793,
title: "恒",
type: 2,
min: "",
max: ""
}, {
id: 4794,
title: "恕",
type: 2,
min: "",
max: ""
}, {
id: 4795,
title: "恤",
type: 2,
min: "",
max: ""
}, {
id: 4796,
title: "恬",
type: 2,
min: "",
max: ""
}, {
id: 4797,
title: "恪",
type: 2,
min: "",
max: ""
}, {
id: 4798,
title: "悟",
type: 2,
min: "",
max: ""
}, {
id: 4799,
title: "念",
type: 2,
min: "",
max: ""
}, {
id: 4800,
title: "感",
type: 2,
min: "",
max: ""
}, {
id: 4801,
title: "意",
type: 2,
min: "",
max: ""
}, {
id: 4802,
title: "斯",
type: 2,
min: "",
max: ""
}, {
id: 4803,
title: "新",
type: 2,
min: "",
max: ""
}, {
id: 4804,
title: "殿",
type: 2,
min: "",
max: ""
}, {
id: 4805,
title: "毓",
type: 2,
min: "",
max: ""
}, {
id: 4806,
title: "盈",
type: 2,
min: "",
max: ""
}, {
id: 4807,
title: "盟",
type: 2,
min: "",
max: ""
}, {
id: 4808,
title: "相",
type: 2,
min: "",
max: ""
}, {
id: 4809,
title: "盼",
type: 2,
min: "",
max: ""
}, {
id: 4810,
title: "知",
type: 2,
min: "",
max: ""
}, {
id: 4811,
title: "羨",
type: 2,
min: "",
max: ""
}, {
id: 4812,
title: "耀",
type: 2,
min: "",
max: ""
}, {
id: 4813,
title: "御",
type: 2,
min: "",
max: ""
}, {
id: 4814,
title: "微",
type: 2,
min: "",
max: ""
}, {
id: 4815,
title: "德",
type: 2,
min: "",
max: ""
}, {
id: 4816,
title: "彦",
type: 2,
min: "",
max: ""
}, {
id: 4817,
title: "弘",
type: 2,
min: "",
max: ""
}, {
id: 4818,
title: "弛",
type: 2,
min: "",
max: ""
}, {
id: 4819,
title: "弼",
type: 2,
min: "",
max: ""
}, {
id: 4820,
title: "弥",
type: 2,
min: "",
max: ""
}, {
id: 4821,
title: "延",
type: 2,
min: "",
max: ""
}, {
id: 4822,
title: "廷",
type: 2,
min: "",
max: ""
}, {
id: 4823,
title: "建",
type: 2,
min: "",
max: ""
}, {
id: 4824,
title: "守",
type: 2,
min: "",
max: ""
}, {
id: 4825,
title: "定",
type: 2,
min: "",
max: ""
}, {
id: 4826,
title: "安",
type: 2,
min: "",
max: ""
}, {
id: 4827,
title: "宏",
type: 2,
min: "",
max: ""
}, {
id: 4828,
title: "宜",
type: 2,
min: "",
max: ""
}, {
id: 4829,
title: "家",
type: 2,
min: "",
max: ""
}, {
id: 4830,
title: "友",
type: 2,
min: "",
max: ""
}, {
id: 4831,
title: "初",
type: 2,
min: "",
max: ""
}, {
id: 4832,
title: "克",
type: 2,
min: "",
max: ""
}, {
id: 4833,
title: "允",
type: 2,
min: "",
max: ""
}, {
id: 4834,
title: "兆",
type: 2,
min: "",
max: ""
}, {
id: 4835,
title: "先",
type: 2,
min: "",
max: ""
}, {
id: 4836,
title: "匡",
type: 2,
min: "",
max: ""
}, {
id: 4837,
title: "占",
type: 2,
min: "",
max: ""
}, {
id: 4838,
title: "韶",
type: 2,
min: "",
max: ""
}, {
id: 4839,
title: "文",
type: 3,
min: "",
max: ""
}, {
id: 4840,
title: "武",
type: 3,
min: "",
max: ""
}, {
id: 4841,
title: "仁",
type: 3,
min: "",
max: ""
}, {
id: 4842,
title: "义",
type: 3,
min: "",
max: ""
}, {
id: 4843,
title: "礼",
type: 3,
min: "",
max: ""
}, {
id: 4844,
title: "智",
type: 3,
min: "",
max: ""
}, {
id: 4845,
title: "信",
type: 3,
min: "",
max: ""
}, {
id: 4846,
title: "勇",
type: 3,
min: "",
max: ""
}, {
id: 4847,
title: "福",
type: 3,
min: "",
max: ""
}, {
id: 4848,
title: "禄",
type: 3,
min: "",
max: ""
}, {
id: 4849,
title: "寿",
type: 3,
min: "",
max: ""
}, {
id: 4850,
title: "喜",
type: 3,
min: "",
max: ""
}, {
id: 4851,
title: "明",
type: 3,
min: "",
max: ""
}, {
id: 4852,
title: "清",
type: 3,
min: "",
max: ""
}, {
id: 4853,
title: "卫",
type: 3,
min: "",
max: ""
}, {
id: 4854,
title: "正",
type: 3,
min: "",
max: ""
}, {
id: 4855,
title: "江",
type: 3,
min: "",
max: ""
}, {
id: 4856,
title: "河",
type: 3,
min: "",
max: ""
}, {
id: 4857,
title: "湖",
type: 3,
min: "",
max: ""
}, {
id: 4858,
title: "海",
type: 3,
min: "",
max: ""
}, {
id: 4859,
title: "山",
type: 3,
min: "",
max: ""
}, {
id: 4860,
title: "川",
type: 3,
min: "",
max: ""
}, {
id: 4861,
title: "峰",
type: 3,
min: "",
max: ""
}, {
id: 4862,
title: "岭",
type: 3,
min: "",
max: ""
}, {
id: 4863,
title: "宏",
type: 3,
min: "",
max: ""
}, {
id: 4864,
title: "泰",
type: 3,
min: "",
max: ""
}, {
id: 4865,
title: "云",
type: 3,
min: "",
max: ""
}, {
id: 4866,
title: "荣",
type: 3,
min: "",
max: ""
}, {
id: 4867,
title: "风",
type: 3,
min: "",
max: ""
}, {
id: 4868,
title: "良",
type: 3,
min: "",
max: ""
}, {
id: 4869,
title: "胜",
type: 3,
min: "",
max: ""
}, {
id: 4870,
title: "毅",
type: 3,
min: "",
max: ""
}, {
id: 4871,
title: "启",
type: 3,
min: "",
max: ""
}, {
id: 4872,
title: "坚",
type: 3,
min: "",
max: ""
}, {
id: 4873,
title: "俊",
type: 3,
min: "",
max: ""
}, {
id: 4874,
title: "瑜",
type: 3,
min: "",
max: ""
}, {
id: 4875,
title: "宇",
type: 3,
min: "",
max: ""
}, {
id: 4876,
title: "芥",
type: 3,
min: "",
max: ""
}, {
id: 4877,
title: "挺",
type: 3,
min: "",
max: ""
}, {
id: 4878,
title: "青",
type: 3,
min: "",
max: ""
}, {
id: 4879,
title: "达",
type: 3,
min: "",
max: ""
}, {
id: 4880,
title: "鼎",
type: 3,
min: "",
max: ""
}, {
id: 4881,
title: "赞",
type: 3,
min: "",
max: ""
}, {
id: 4882,
title: "庆",
type: 3,
min: "",
max: ""
}, {
id: 4883,
title: "康",
type: 3,
min: "",
max: ""
}, {
id: 4884,
title: "魁",
type: 3,
min: "",
max: ""
}, {
id: 4885,
title: "昌",
type: 3,
min: "",
max: ""
}, {
id: 4886,
title: "华",
type: 3,
min: "",
max: ""
}, {
id: 4887,
title: "进",
type: 3,
min: "",
max: ""
}, {
id: 4888,
title: "剑",
type: 3,
min: "",
max: ""
}, {
id: 4889,
title: "光",
type: 3,
min: "",
max: ""
}, {
id: 4890,
title: "昭",
type: 3,
min: "",
max: ""
}, {
id: 4891,
title: "通",
type: 3,
min: "",
max: ""
}, {
id: 4892,
title: "璨",
type: 3,
min: "",
max: ""
}, {
id: 4893,
title: "迁",
type: 3,
min: "",
max: ""
}, {
id: 4894,
title: "宽",
type: 3,
min: "",
max: ""
}, {
id: 4895,
title: "廉",
type: 3,
min: "",
max: ""
}, {
id: 4896,
title: "全",
type: 3,
min: "",
max: ""
}, {
id: 4897,
title: "鹤",
type: 3,
min: "",
max: ""
}, {
id: 4898,
title: "逊",
type: 3,
min: "",
max: ""
}, {
id: 4899,
title: "朗",
type: 3,
min: "",
max: ""
}, {
id: 4900,
title: "英",
type: 3,
min: "",
max: ""
}, {
id: 4901,
title: "杰",
type: 3,
min: "",
max: ""
}, {
id: 4902,
title: "盛",
type: 3,
min: "",
max: ""
}, {
id: 4903,
title: "朝",
type: 3,
min: "",
max: ""
}, {
id: 4904,
title: "亮",
type: 3,
min: "",
max: ""
}, {
id: 4905,
title: "飞",
type: 3,
min: "",
max: ""
}, {
id: 4906,
title: "用",
type: 3,
min: "",
max: ""
}, {
id: 4907,
title: "冲",
type: 3,
min: "",
max: ""
}, {
id: 4908,
title: "策",
type: 3,
min: "",
max: ""
}, {
id: 4909,
title: "岩",
type: 3,
min: "",
max: ""
}, {
id: 4910,
title: "纲",
type: 3,
min: "",
max: ""
}, {
id: 4911,
title: "平",
type: 3,
min: "",
max: ""
}, {
id: 4912,
title: "诚",
type: 3,
min: "",
max: ""
}, {
id: 4913,
title: "秉",
type: 3,
min: "",
max: ""
}, {
id: 4914,
title: "睿",
type: 3,
min: "",
max: ""
}, {
id: 4915,
title: "仝",
type: 3,
min: "",
max: ""
}, {
id: 4916,
title: "威",
type: 3,
min: "",
max: ""
}, {
id: 4917,
title: "蒙",
type: 3,
min: "",
max: ""
}, {
id: 4918,
title: "珲",
type: 3,
min: "",
max: ""
}, {
id: 4919,
title: "昂",
type: 3,
min: "",
max: ""
}, {
id: 4920,
title: "丕",
type: 3,
min: "",
max: ""
}, {
id: 4921,
title: "存",
type: 3,
min: "",
max: ""
}, {
id: 4922,
title: "绪",
type: 3,
min: "",
max: ""
}, {
id: 4923,
title: "敬",
type: 3,
min: "",
max: ""
}, {
id: 4924,
title: "巍",
type: 3,
min: "",
max: ""
}, {
id: 4925,
title: "哲",
type: 3,
min: "",
max: ""
}, {
id: 4926,
title: "松",
type: 3,
min: "",
max: ""
}, {
id: 4927,
title: "柏",
type: 3,
min: "",
max: ""
}, {
id: 4928,
title: "雄",
type: 3,
min: "",
max: ""
}, {
id: 4929,
title: "靖",
type: 3,
min: "",
max: ""
}, {
id: 4930,
title: "胄",
type: 3,
min: "",
max: ""
}, {
id: 4931,
title: "航",
type: 3,
min: "",
max: ""
}, {
id: 4932,
title: "翼",
type: 3,
min: "",
max: ""
}, {
id: 4933,
title: "渊",
type: 3,
min: "",
max: ""
}, {
id: 4934,
title: "琼",
type: 3,
min: "",
max: ""
}, {
id: 4935,
title: "恭",
type: 3,
min: "",
max: ""
}, {
id: 4936,
title: "炯",
type: 3,
min: "",
max: ""
}, {
id: 4937,
title: "淳",
type: 3,
min: "",
max: ""
}, {
id: 4938,
title: "祖",
type: 3,
min: "",
max: ""
}, {
id: 4939,
title: "宗",
type: 3,
min: "",
max: ""
}, {
id: 4940,
title: "之",
type: 3,
min: "",
max: ""
}, {
id: 4941,
title: "儒",
type: 3,
min: "",
max: ""
}, {
id: 4942,
title: "道",
type: 3,
min: "",
max: ""
}, {
id: 4943,
title: "贤",
type: 3,
min: "",
max: ""
}, {
id: 4944,
title: "功",
type: 3,
min: "",
max: ""
}, {
id: 4945,
title: "言",
type: 3,
min: "",
max: ""
}, {
id: 4946,
title: "吉",
type: 3,
min: "",
max: ""
}, {
id: 4947,
title: "富",
type: 3,
min: "",
max: ""
}, {
id: 4948,
title: "贵",
type: 3,
min: "",
max: ""
}, {
id: 4949,
title: "羊",
type: 3,
min: "",
max: ""
}, {
id: 4950,
title: "牛",
type: 3,
min: "",
max: ""
}, {
id: 4951,
title: "禾",
type: 3,
min: "",
max: ""
}, {
id: 4952,
title: "年",
type: 3,
min: "",
max: ""
}, {
id: 4953,
title: "乐",
type: 3,
min: "",
max: ""
}, {
id: 4954,
title: "官",
type: 3,
min: "",
max: ""
}, {
id: 4955,
title: "金",
type: 3,
min: "",
max: ""
}, {
id: 4956,
title: "银",
type: 3,
min: "",
max: ""
}, {
id: 4957,
title: "玉",
type: 3,
min: "",
max: ""
}, {
id: 4958,
title: "士",
type: 3,
min: "",
max: ""
}, {
id: 4959,
title: "玎",
type: 3,
min: "",
max: ""
}, {
id: 4960,
title: "玔",
type: 3,
min: "",
max: ""
}, {
id: 4961,
title: "玕",
type: 3,
min: "",
max: ""
}, {
id: 4962,
title: "玖",
type: 3,
min: "",
max: ""
}, {
id: 4963,
title: "玗",
type: 3,
min: "",
max: ""
}, {
id: 4964,
title: "玘",
type: 3,
min: "",
max: ""
}, {
id: 4965,
title: "玞",
type: 3,
min: "",
max: ""
}, {
id: 4966,
title: "玟",
type: 3,
min: "",
max: ""
}, {
id: 4967,
title: "玠",
type: 3,
min: "",
max: ""
}, {
id: 4968,
title: "玦",
type: 3,
min: "",
max: ""
}, {
id: 4969,
title: "玧",
type: 3,
min: "",
max: ""
}, {
id: 4970,
title: "玫",
type: 3,
min: "",
max: ""
}, {
id: 4971,
title: "玭",
type: 3,
min: "",
max: ""
}, {
id: 4972,
title: "玷",
type: 3,
min: "",
max: ""
}, {
id: 4973,
title: "玹",
type: 3,
min: "",
max: ""
}, {
id: 4974,
title: "玻",
type: 3,
min: "",
max: ""
}, {
id: 4975,
title: "珀",
type: 3,
min: "",
max: ""
}, {
id: 4976,
title: "珆",
type: 3,
min: "",
max: ""
}, {
id: 4977,
title: "珈",
type: 3,
min: "",
max: ""
}, {
id: 4978,
title: "珉",
type: 3,
min: "",
max: ""
}, {
id: 4979,
title: "珌",
type: 3,
min: "",
max: ""
}, {
id: 4980,
title: "珏",
type: 3,
min: "",
max: ""
}, {
id: 4981,
title: "珒",
type: 3,
min: "",
max: ""
}, {
id: 4982,
title: "珖",
type: 3,
min: "",
max: ""
}, {
id: 4983,
title: "珙",
type: 3,
min: "",
max: ""
}, {
id: 4984,
title: "珝",
type: 3,
min: "",
max: ""
}, {
id: 4985,
title: "珞",
type: 3,
min: "",
max: ""
}, {
id: 4986,
title: "珠",
type: 3,
min: "",
max: ""
}, {
id: 4987,
title: "珢",
type: 3,
min: "",
max: ""
}, {
id: 4988,
title: "珣",
type: 3,
min: "",
max: ""
}, {
id: 4989,
title: "珤",
type: 3,
min: "",
max: ""
}, {
id: 4990,
title: "珥",
type: 3,
min: "",
max: ""
}, {
id: 4991,
title: "珦",
type: 3,
min: "",
max: ""
}, {
id: 4992,
title: "珩",
type: 3,
min: "",
max: ""
}, {
id: 4993,
title: "珪",
type: 3,
min: "",
max: ""
}, {
id: 4994,
title: "珫",
type: 3,
min: "",
max: ""
}, {
id: 4995,
title: "班",
type: 3,
min: "",
max: ""
}, {
id: 4996,
title: "珵",
type: 3,
min: "",
max: ""
}, {
id: 4997,
title: "珹",
type: 3,
min: "",
max: ""
}, {
id: 4998,
title: "珽",
type: 3,
min: "",
max: ""
}, {
id: 4999,
title: "琁",
type: 3,
min: "",
max: ""
}, {
id: 5e3,
title: "琅",
type: 3,
min: "",
max: ""
}, {
id: 5001,
title: "琇",
type: 3,
min: "",
max: ""
}, {
id: 5002,
title: "琉",
type: 3,
min: "",
max: ""
}, {
id: 5003,
title: "琓",
type: 3,
min: "",
max: ""
}, {
id: 5004,
title: "珷",
type: 3,
min: "",
max: ""
}, {
id: 5005,
title: "琛",
type: 3,
min: "",
max: ""
}, {
id: 5006,
title: "琠",
type: 3,
min: "",
max: ""
}, {
id: 5007,
title: "琡",
type: 3,
min: "",
max: ""
}, {
id: 5008,
title: "琢",
type: 3,
min: "",
max: ""
}, {
id: 5009,
title: "琤",
type: 3,
min: "",
max: ""
}, {
id: 5010,
title: "琥",
type: 3,
min: "",
max: ""
}, {
id: 5011,
title: "琦",
type: 3,
min: "",
max: ""
}, {
id: 5012,
title: "琨",
type: 3,
min: "",
max: ""
}, {
id: 5013,
title: "琪",
type: 3,
min: "",
max: ""
}, {
id: 5014,
title: "琫",
type: 3,
min: "",
max: ""
}, {
id: 5015,
title: "琮",
type: 3,
min: "",
max: ""
}, {
id: 5016,
title: "琯",
type: 3,
min: "",
max: ""
}, {
id: 5017,
title: "琰",
type: 3,
min: "",
max: ""
}, {
id: 5018,
title: "琱",
type: 3,
min: "",
max: ""
}, {
id: 5019,
title: "琲",
type: 3,
min: "",
max: ""
}, {
id: 5020,
title: "琸",
type: 3,
min: "",
max: ""
}, {
id: 5021,
title: "琺",
type: 3,
min: "",
max: ""
}, {
id: 5022,
title: "瑀",
type: 3,
min: "",
max: ""
}, {
id: 5023,
title: "瑁",
type: 3,
min: "",
max: ""
}, {
id: 5024,
title: "瑃",
type: 3,
min: "",
max: ""
}, {
id: 5025,
title: "瑄",
type: 3,
min: "",
max: ""
}, {
id: 5026,
title: "瑅",
type: 3,
min: "",
max: ""
}, {
id: 5027,
title: "瑆",
type: 3,
min: "",
max: ""
}, {
id: 5028,
title: "瑎",
type: 3,
min: "",
max: ""
}, {
id: 5029,
title: "瑕",
type: 3,
min: "",
max: ""
}, {
id: 5030,
title: "瑙",
type: 3,
min: "",
max: ""
}, {
id: 5031,
title: "瑚",
type: 3,
min: "",
max: ""
}, {
id: 5032,
title: "瑜",
type: 3,
min: "",
max: ""
}, {
id: 5033,
title: "瑝",
type: 3,
min: "",
max: ""
}, {
id: 5034,
title: "瑞",
type: 3,
min: "",
max: ""
}, {
id: 5035,
title: "瑠",
type: 3,
min: "",
max: ""
}, {
id: 5036,
title: "瑢",
type: 3,
min: "",
max: ""
}, {
id: 5037,
title: "瑥",
type: 3,
min: "",
max: ""
}, {
id: 5038,
title: "瑭",
type: 3,
min: "",
max: ""
}, {
id: 5039,
title: "瑯",
type: 3,
min: "",
max: ""
}, {
id: 5040,
title: "瑾",
type: 3,
min: "",
max: ""
}, {
id: 5041,
title: "璀",
type: 3,
min: "",
max: ""
}, {
id: 5042,
title: "璂",
type: 3,
min: "",
max: ""
}, {
id: 5043,
title: "璃",
type: 3,
min: "",
max: ""
}, {
id: 5044,
title: "璆",
type: 3,
min: "",
max: ""
}, {
id: 5045,
title: "璇",
type: 3,
min: "",
max: ""
}, {
id: 5046,
title: "璋",
type: 3,
min: "",
max: ""
}, {
id: 5047,
title: "璜",
type: 3,
min: "",
max: ""
}, {
id: 5048,
title: "璞",
type: 3,
min: "",
max: ""
}, {
id: 5049,
title: "璟",
type: 3,
min: "",
max: ""
}, {
id: 5050,
title: "璘",
type: 3,
min: "",
max: ""
}, {
id: 5051,
title: "璥",
type: 3,
min: "",
max: ""
}, {
id: 5052,
title: "璨",
type: 3,
min: "",
max: ""
}, {
id: 5053,
title: "璪",
type: 3,
min: "",
max: ""
}, {
id: 5054,
title: "璿",
type: 3,
min: "",
max: ""
}, {
id: 5055,
title: "旭",
type: 3,
min: "",
max: ""
}, {
id: 5056,
title: "旴",
type: 3,
min: "",
max: ""
}, {
id: 5057,
title: "旺",
type: 3,
min: "",
max: ""
}, {
id: 5058,
title: "旼",
type: 3,
min: "",
max: ""
}, {
id: 5059,
title: "昀",
type: 3,
min: "",
max: ""
}, {
id: 5060,
title: "昕",
type: 3,
min: "",
max: ""
}, {
id: 5061,
title: "昑",
type: 3,
min: "",
max: ""
}, {
id: 5062,
title: "昛",
type: 3,
min: "",
max: ""
}, {
id: 5063,
title: "昞",
type: 3,
min: "",
max: ""
}, {
id: 5064,
title: "映",
type: 3,
min: "",
max: ""
}, {
id: 5065,
title: "昡",
type: 3,
min: "",
max: ""
}, {
id: 5066,
title: "昭",
type: 3,
min: "",
max: ""
}, {
id: 5067,
title: "昶",
type: 3,
min: "",
max: ""
}, {
id: 5068,
title: "晈",
type: 3,
min: "",
max: ""
}, {
id: 5069,
title: "晧",
type: 3,
min: "",
max: ""
}, {
id: 5070,
title: "晫",
type: 3,
min: "",
max: ""
}, {
id: 5071,
title: "晰",
type: 3,
min: "",
max: ""
}, {
id: 5072,
title: "暄",
type: 3,
min: "",
max: ""
}, {
id: 5073,
title: "暖",
type: 3,
min: "",
max: ""
}, {
id: 5074,
title: "暲",
type: 3,
min: "",
max: ""
}, {
id: 5075,
title: "旻",
type: 3,
min: "",
max: ""
}, {
id: 5076,
title: "昌",
type: 3,
min: "",
max: ""
}, {
id: 5077,
title: "昇",
type: 3,
min: "",
max: ""
}, {
id: 5078,
title: "易",
type: 3,
min: "",
max: ""
}, {
id: 5079,
title: "昆",
type: 3,
min: "",
max: ""
}, {
id: 5080,
title: "易",
type: 3,
min: "",
max: ""
}, {
id: 5081,
title: "昰",
type: 3,
min: "",
max: ""
}, {
id: 5082,
title: "昱",
type: 3,
min: "",
max: ""
}, {
id: 5083,
title: "昴",
type: 3,
min: "",
max: ""
}, {
id: 5084,
title: "昺",
type: 3,
min: "",
max: ""
}, {
id: 5085,
title: "昻",
type: 3,
min: "",
max: ""
}, {
id: 5086,
title: "晃",
type: 3,
min: "",
max: ""
}, {
id: 5087,
title: "晏",
type: 3,
min: "",
max: ""
}, {
id: 5088,
title: "晟",
type: 3,
min: "",
max: ""
}, {
id: 5089,
title: "晢",
type: 3,
min: "",
max: ""
}, {
id: 5090,
title: "晨",
type: 3,
min: "",
max: ""
}, {
id: 5091,
title: "普",
type: 3,
min: "",
max: ""
}, {
id: 5092,
title: "景",
type: 3,
min: "",
max: ""
}, {
id: 5093,
title: "晷",
type: 3,
min: "",
max: ""
}, {
id: 5094,
title: "暠",
type: 3,
min: "",
max: ""
}, {
id: 5095,
title: "懿",
type: 3,
min: "",
max: ""
}, {
id: 5096,
title: "斌",
type: 3,
min: "",
max: ""
}, {
id: 5097,
title: "斐",
type: 3,
min: "",
max: ""
}, {
id: 5098,
title: "旌",
type: 3,
min: "",
max: ""
}, {
id: 5099,
title: "旗",
type: 3,
min: "",
max: ""
}, {
id: 5100,
title: "旃",
type: 3,
min: "",
max: ""
}, {
id: 5101,
title: "旒",
type: 3,
min: "",
max: ""
}, {
id: 5102,
title: "朔",
type: 3,
min: "",
max: ""
}, {
id: 5103,
title: "望",
type: 3,
min: "",
max: ""
}, {
id: 5104,
title: "朝",
type: 3,
min: "",
max: ""
}, {
id: 5105,
title: "期",
type: 3,
min: "",
max: ""
}, {
id: 5106,
title: "杉",
type: 3,
min: "",
max: ""
}, {
id: 5107,
title: "材",
type: 3,
min: "",
max: ""
}, {
id: 5108,
title: "松",
type: 3,
min: "",
max: ""
}, {
id: 5109,
title: "枚",
type: 3,
min: "",
max: ""
}, {
id: 5110,
title: "柏",
type: 3,
min: "",
max: ""
}, {
id: 5111,
title: "柘",
type: 3,
min: "",
max: ""
}, {
id: 5112,
title: "柳",
type: 3,
min: "",
max: ""
}, {
id: 5113,
title: "桐",
type: 3,
min: "",
max: ""
}, {
id: 5114,
title: "桓",
type: 3,
min: "",
max: ""
}, {
id: 5115,
title: "桯",
type: 3,
min: "",
max: ""
}, {
id: 5116,
title: "梓",
type: 3,
min: "",
max: ""
}, {
id: 5117,
title: "棕",
type: 3,
min: "",
max: ""
}, {
id: 5118,
title: "樟",
type: 3,
min: "",
max: ""
}, {
id: 5119,
title: "民",
type: 3,
min: "",
max: ""
}, {
id: 5120,
title: "江",
type: 3,
min: "",
max: ""
}, {
id: 5121,
title: "汾",
type: 3,
min: "",
max: ""
}, {
id: 5122,
title: "河",
type: 3,
min: "",
max: ""
}, {
id: 5123,
title: "泉",
type: 3,
min: "",
max: ""
}, {
id: 5124,
title: "波",
type: 3,
min: "",
max: ""
}, {
id: 5125,
title: "法",
type: 3,
min: "",
max: ""
}, {
id: 5126,
title: "泱",
type: 3,
min: "",
max: ""
}, {
id: 5127,
title: "津",
type: 3,
min: "",
max: ""
}, {
id: 5128,
title: "浩",
type: 3,
min: "",
max: ""
}, {
id: 5129,
title: "涯",
type: 3,
min: "",
max: ""
}, {
id: 5130,
title: "渝",
type: 3,
min: "",
max: ""
}, {
id: 5131,
title: "渡",
type: 3,
min: "",
max: ""
}, {
id: 5132,
title: "湘",
type: 3,
min: "",
max: ""
}, {
id: 5133,
title: "渭",
type: 3,
min: "",
max: ""
}, {
id: 5134,
title: "湖",
type: 3,
min: "",
max: ""
}, {
id: 5135,
title: "源",
type: 3,
min: "",
max: ""
}, {
id: 5136,
title: "溏",
type: 3,
min: "",
max: ""
}, {
id: 5137,
title: "漠",
type: 3,
min: "",
max: ""
}, {
id: 5138,
title: "灼",
type: 3,
min: "",
max: ""
}, {
id: 5139,
title: "炆",
type: 3,
min: "",
max: ""
}, {
id: 5140,
title: "炫",
type: 3,
min: "",
max: ""
}, {
id: 5141,
title: "烈",
type: 3,
min: "",
max: ""
}, {
id: 5142,
title: "炳",
type: 3,
min: "",
max: ""
}, {
id: 5143,
title: "烽",
type: 3,
min: "",
max: ""
}, {
id: 5144,
title: "煊",
type: 3,
min: "",
max: ""
}, {
id: 5145,
title: "煥",
type: 3,
min: "",
max: ""
}, {
id: 5146,
title: "煜",
type: 3,
min: "",
max: ""
}, {
id: 5147,
title: "煦",
type: 3,
min: "",
max: ""
}, {
id: 5148,
title: "煖",
type: 3,
min: "",
max: ""
}, {
id: 5149,
title: "熙",
type: 3,
min: "",
max: ""
}, {
id: 5150,
title: "熲",
type: 3,
min: "",
max: ""
}, {
id: 5151,
title: "皇",
type: 3,
min: "",
max: ""
}, {
id: 5152,
title: "皓",
type: 3,
min: "",
max: ""
}, {
id: 5153,
title: "皋",
type: 3,
min: "",
max: ""
}, {
id: 5154,
title: "皎",
type: 3,
min: "",
max: ""
}, {
id: 5155,
title: "矩",
type: 3,
min: "",
max: ""
}, {
id: 5156,
title: "粲",
type: 3,
min: "",
max: ""
}, {
id: 5157,
title: "翊",
type: 3,
min: "",
max: ""
}, {
id: 5158,
title: "翔",
type: 3,
min: "",
max: ""
}, {
id: 5159,
title: "徽",
type: 3,
min: "",
max: ""
}, {
id: 5160,
title: "彧",
type: 3,
min: "",
max: ""
}, {
id: 5161,
title: "彪",
type: 3,
min: "",
max: ""
}, {
id: 5162,
title: "彰",
type: 3,
min: "",
max: ""
}, {
id: 5163,
title: "彤",
type: 3,
min: "",
max: ""
}, {
id: 5164,
title: "庚",
type: 3,
min: "",
max: ""
}, {
id: 5165,
title: "康",
type: 3,
min: "",
max: ""
}, {
id: 5166,
title: "廉",
type: 3,
min: "",
max: ""
}, {
id: 5167,
title: "庸",
type: 3,
min: "",
max: ""
}, {
id: 5168,
title: "圭",
type: 3,
min: "",
max: ""
}, {
id: 5169,
title: "均",
type: 3,
min: "",
max: ""
}, {
id: 5170,
title: "坦",
type: 3,
min: "",
max: ""
}, {
id: 5171,
title: "坡",
type: 3,
min: "",
max: ""
}, {
id: 5172,
title: "堃",
type: 3,
min: "",
max: ""
}, {
id: 5173,
title: "固",
type: 3,
min: "",
max: ""
}, {
id: 5174,
title: "勃",
type: 3,
min: "",
max: ""
}, {
id: 5175,
title: "勘",
type: 3,
min: "",
max: ""
}, {
id: 5176,
title: "功",
type: 3,
min: "",
max: ""
}, {
id: 5177,
title: "勤",
type: 3,
min: "",
max: ""
}, {
id: 5178,
title: "勣",
type: 3,
min: "",
max: ""
}, {
id: 5179,
title: "勖",
type: 3,
min: "",
max: ""
}, {
id: 5180,
title: "冕",
type: 3,
min: "",
max: ""
}, {
id: 5181,
title: "典",
type: 3,
min: "",
max: ""
}, {
id: 5182,
title: "亭",
type: 3,
min: "",
max: ""
}, {
id: 5183,
title: "亨",
type: 3,
min: "",
max: ""
}, {
id: 5184,
title: "亶",
type: 3,
min: "",
max: ""
}, {
id: 5185,
title: "亢",
type: 3,
min: "",
max: ""
}, {
id: 5186,
title: "丕",
type: 3,
min: "",
max: ""
}, {
id: 5187,
title: "丞",
type: 3,
min: "",
max: ""
}, {
id: 5188,
title: "丘",
type: 3,
min: "",
max: ""
}, {
id: 5189,
title: "卓",
type: 3,
min: "",
max: ""
}, {
id: 5190,
title: "厚",
type: 3,
min: "",
max: ""
}, {
id: 5191,
title: "霆",
type: 3,
min: "",
max: ""
}, {
id: 5192,
title: "霖",
type: 3,
min: "",
max: ""
}, {
id: 5193,
title: "霑",
type: 3,
min: "",
max: ""
}, {
id: 5194,
title: "雷",
type: 3,
min: "",
max: ""
}, {
id: 5195,
title: "馥",
type: 3,
min: "",
max: ""
}, {
id: 5196,
title: "大郎",
type: 4,
min: "",
max: ""
}, {
id: 5197,
title: "二郎",
type: 4,
min: "",
max: ""
}, {
id: 5198,
title: "三郎",
type: 4,
min: "",
max: ""
}, {
id: 5199,
title: "四郎",
type: 4,
min: "",
max: ""
}, {
id: 5200,
title: "五郎",
type: 4,
min: "",
max: ""
}, {
id: 5201,
title: "六郎",
type: 4,
min: "",
max: ""
}, {
id: 5202,
title: "七郎",
type: 4,
min: "",
max: ""
}, {
id: 5203,
title: "八郎",
type: 4,
min: "",
max: ""
}, {
id: 5204,
title: "九郎",
type: 4,
min: "",
max: ""
}, {
id: 5205,
title: "十郎",
type: 4,
min: "",
max: ""
}, {
id: 5206,
title: "小哥",
type: 4,
min: "",
max: ""
}, {
id: 5207,
title: "小二",
type: 4,
min: "",
max: ""
}, {
id: 5208,
title: "小三",
type: 4,
min: "",
max: ""
}, {
id: 5209,
title: "小四",
type: 4,
min: "",
max: ""
}, {
id: 5210,
title: "小五",
type: 4,
min: "",
max: ""
}, {
id: 5211,
title: "小六",
type: 4,
min: "",
max: ""
}, {
id: 5212,
title: "小七",
type: 4,
min: "",
max: ""
}, {
id: 5213,
title: "小八",
type: 4,
min: "",
max: ""
}, {
id: 5214,
title: "小九",
type: 4,
min: "",
max: ""
}, {
id: 5215,
title: "小十",
type: 4,
min: "",
max: ""
}, {
id: 5216,
title: "铁蛋",
type: 4,
min: "",
max: ""
}, {
id: 5217,
title: "狗剩",
type: 4,
min: "",
max: ""
}, {
id: 5218,
title: "铁柱",
type: 4,
min: "",
max: ""
}, {
id: 5219,
title: "金锁",
type: 4,
min: "",
max: ""
}, {
id: 5220,
title: "大山",
type: 4,
min: "",
max: ""
}, {
id: 5221,
title: "大树",
type: 4,
min: "",
max: ""
}, {
id: 5222,
title: "小河",
type: 4,
min: "",
max: ""
}, {
id: 5223,
title: "小树",
type: 4,
min: "",
max: ""
}, {
id: 5224,
title: "板凳",
type: 4,
min: "",
max: ""
}, {
id: 5225,
title: "扁担",
type: 4,
min: "",
max: ""
}, {
id: 5226,
title: "嘎子",
type: 4,
min: "",
max: ""
}, {
id: 5227,
title: "柱子",
type: 4,
min: "",
max: ""
}, {
id: 5228,
title: "金子",
type: 4,
min: "",
max: ""
}, {
id: 5229,
title: "银子",
type: 4,
min: "",
max: ""
}, {
id: 5230,
title: "虎子",
type: 4,
min: "",
max: ""
}, {
id: 5231,
title: "狗子",
type: 4,
min: "",
max: ""
}, {
id: 5232,
title: "筏子",
type: 4,
min: "",
max: ""
}, {
id: 5233,
title: "板子",
type: 4,
min: "",
max: ""
}, {
id: 5234,
title: "勺子",
type: 4,
min: "",
max: ""
}, {
id: 5235,
title: "叉子",
type: 4,
min: "",
max: ""
}, {
id: 5236,
title: "丢儿",
type: 4,
min: "",
max: ""
}, {
id: 5237,
title: "兔儿",
type: 4,
min: "",
max: ""
}, {
id: 5238,
title: "狗儿",
type: 4,
min: "",
max: ""
}, {
id: 5239,
title: "猫儿",
type: 4,
min: "",
max: ""
}, {
id: 5240,
title: "驴儿",
type: 4,
min: "",
max: ""
}, {
id: 5241,
title: "锁儿",
type: 4,
min: "",
max: ""
}, {
id: 5242,
title: "羊儿",
type: 4,
min: "",
max: ""
}, {
id: 5243,
title: "扣儿",
type: 4,
min: "",
max: ""
}, {
id: 5244,
title: "锅儿",
type: 4,
min: "",
max: ""
}, {
id: 5245,
title: "雀儿",
type: 4,
min: "",
max: ""
}, {
id: 5246,
title: "襟儿",
type: 4,
min: "",
max: ""
}, {
id: 5247,
title: "勺儿",
type: 4,
min: "",
max: ""
}, {
id: 5248,
title: "木儿",
type: 4,
min: "",
max: ""
}, {
id: 5249,
title: "板儿",
type: 4,
min: "",
max: ""
}, {
id: 5250,
title: "筐儿",
type: 4,
min: "",
max: ""
}, {
id: 5251,
title: "土儿",
type: 4,
min: "",
max: ""
}, {
id: 5252,
title: "苗儿",
type: 4,
min: "",
max: ""
}, {
id: 5253,
title: "车儿",
type: 4,
min: "",
max: ""
}, {
id: 5254,
title: "萝儿",
type: 4,
min: "",
max: ""
}, {
id: 5255,
title: "鼻儿",
type: 4,
min: "",
max: ""
}, {
id: 5256,
title: "斧头",
type: 4,
min: "",
max: ""
}, {
id: 5257,
title: "锄头",
type: 4,
min: "",
max: ""
}, {
id: 5258,
title: "犁头",
type: 4,
min: "",
max: ""
}, {
id: 5259,
title: "木头",
type: 4,
min: "",
max: ""
}, {
id: 5260,
title: "镢头",
type: 4,
min: "",
max: ""
}, {
id: 5261,
title: "虎头",
type: 4,
min: "",
max: ""
}, {
id: 5262,
title: "榔头",
type: 4,
min: "",
max: ""
}, {
id: 5263,
title: "尺头",
type: 4,
min: "",
max: ""
}, {
id: 5264,
title: "石头",
type: 4,
min: "",
max: ""
}, {
id: 5265,
title: "砖头",
type: 4,
min: "",
max: ""
}, {
id: 5266,
title: "大",
type: 4,
min: "",
max: ""
}, {
id: 5267,
title: "二",
type: 4,
min: "",
max: ""
}, {
id: 5268,
title: "三",
type: 4,
min: "",
max: ""
}, {
id: 5269,
title: "四",
type: 4,
min: "",
max: ""
}, {
id: 5270,
title: "五",
type: 4,
min: "",
max: ""
}, {
id: 5271,
title: "六",
type: 4,
min: "",
max: ""
}, {
id: 5272,
title: "七",
type: 4,
min: "",
max: ""
}, {
id: 5273,
title: "八",
type: 4,
min: "",
max: ""
}, {
id: 5274,
title: "阿大",
type: 4,
min: "",
max: ""
}, {
id: 5275,
title: "阿二",
type: 4,
min: "",
max: ""
}, {
id: 5276,
title: "阿三",
type: 4,
min: "",
max: ""
}, {
id: 5277,
title: "阿四",
type: 4,
min: "",
max: ""
}, {
id: 5278,
title: "阿五",
type: 4,
min: "",
max: ""
}, {
id: 5279,
title: "阿六",
type: 4,
min: "",
max: ""
}, {
id: 5280,
title: "阿七",
type: 4,
min: "",
max: ""
}, {
id: 5281,
title: "阿八",
type: 4,
min: "",
max: ""
}, {
id: 5282,
title: "阿九",
type: 4,
min: "",
max: ""
}, {
id: 5283,
title: "阿小",
type: 4,
min: "",
max: ""
}, {
id: 5284,
title: "小哥",
type: 4,
min: "",
max: ""
}, {
id: 5285,
title: "小二",
type: 4,
min: "",
max: ""
}, {
id: 5286,
title: "小三",
type: 4,
min: "",
max: ""
}, {
id: 5287,
title: "小四",
type: 4,
min: "",
max: ""
}, {
id: 5288,
title: "小五",
type: 4,
min: "",
max: ""
}, {
id: 5289,
title: "小六",
type: 4,
min: "",
max: ""
}, {
id: 5290,
title: "小七",
type: 4,
min: "",
max: ""
}, {
id: 5291,
title: "阿毛",
type: 4,
min: "",
max: ""
}, {
id: 5292,
title: "阿狗",
type: 4,
min: "",
max: ""
}, {
id: 5293,
title: "阿牛",
type: 4,
min: "",
max: ""
}, {
id: 5294,
title: "阿水",
type: 4,
min: "",
max: ""
}, {
id: 5295,
title: "阿根",
type: 4,
min: "",
max: ""
}, {
id: 5296,
title: "阿仔",
type: 4,
min: "",
max: ""
}, {
id: 5297,
title: "阿金",
type: 4,
min: "",
max: ""
}, {
id: 5298,
title: "阿嗲",
type: 4,
min: "",
max: ""
}, {
id: 5299,
title: "阿旺",
type: 4,
min: "",
max: ""
}, {
id: 5300,
title: "阿用",
type: 4,
min: "",
max: ""
}, {
id: 5301,
title: "阿喜",
type: 4,
min: "",
max: ""
}, {
id: 5302,
title: "阿太",
type: 4,
min: "",
max: ""
}, {
id: 5303,
title: "阿佬",
type: 4,
min: "",
max: ""
}, {
id: 5304,
title: "阿郎",
type: 4,
min: "",
max: ""
}, {
id: 5305,
title: "阿土",
type: 4,
min: "",
max: ""
}, {
id: 5306,
title: "阿阳",
type: 4,
min: "",
max: ""
}, {
id: 5307,
title: "阿苗",
type: 4,
min: "",
max: ""
}, {
id: 5308,
title: "阿板",
type: 4,
min: "",
max: ""
}, {
id: 5309,
title: "阿宏",
type: 4,
min: "",
max: ""
}, {
id: 5310,
title: "阿发",
type: 4,
min: "",
max: ""
}, {
id: 5311,
title: "丢儿",
type: 4,
min: "",
max: ""
}, {
id: 5312,
title: "犇儿",
type: 4,
min: "",
max: ""
}, {
id: 5313,
title: "狗儿",
type: 4,
min: "",
max: ""
}, {
id: 5314,
title: "猫儿",
type: 4,
min: "",
max: ""
}, {
id: 5315,
title: "驴儿",
type: 4,
min: "",
max: ""
}, {
id: 5316,
title: "锁儿",
type: 4,
min: "",
max: ""
}, {
id: 5317,
title: "根儿",
type: 4,
min: "",
max: ""
}, {
id: 5318,
title: "扣儿",
type: 4,
min: "",
max: ""
}, {
id: 5319,
title: "锅儿",
type: 4,
min: "",
max: ""
}, {
id: 5320,
title: "勺儿",
type: 4,
min: "",
max: ""
}, {
id: 5321,
title: "旺财",
type: 4,
min: "",
max: ""
}, {
id: 5322,
title: "旺喜",
type: 4,
min: "",
max: ""
}, {
id: 5323,
title: "旺发",
type: 4,
min: "",
max: ""
}, {
id: 5324,
title: "旺福",
type: 4,
min: "",
max: ""
}, {
id: 5325,
title: "旺发",
type: 4,
min: "",
max: ""
}, {
id: 5326,
title: "旺根",
type: 4,
min: "",
max: ""
}, {
id: 5327,
title: "福根",
type: 4,
min: "",
max: ""
}, {
id: 5328,
title: "禄根",
type: 4,
min: "",
max: ""
}, {
id: 5329,
title: "喜根",
type: 4,
min: "",
max: ""
}, {
id: 5330,
title: "长根",
type: 4,
min: "",
max: ""
}, {
id: 5331,
title: "水根",
type: 4,
min: "",
max: ""
}, {
id: 5332,
title: "水福",
type: 4,
min: "",
max: ""
}, {
id: 5333,
title: "水旺",
type: 4,
min: "",
max: ""
}, {
id: 5334,
title: "才福",
type: 4,
min: "",
max: ""
}, {
id: 5335,
title: "德福",
type: 4,
min: "",
max: ""
}, {
id: 5336,
title: "喜服",
type: 4,
min: "",
max: ""
}, {
id: 5337,
title: "添寿",
type: 4,
min: "",
max: ""
}, {
id: 5338,
title: "尽喜",
type: 4,
min: "",
max: ""
}, {
id: 5339,
title: "进喜",
type: 4,
min: "",
max: ""
}, {
id: 5340,
title: "才喜",
type: 4,
min: "",
max: ""
}, {
id: 5341,
title: "无忌",
type: 4,
min: "",
max: ""
}, {
id: 5342,
title: "相如",
type: 4,
min: "",
max: ""
}, {
id: 5343,
title: "去病",
type: 4,
min: "",
max: ""
}, {
id: 5344,
title: "弃疾",
type: 4,
min: "",
max: ""
}, {
id: 5345,
title: "长恭",
type: 4,
min: "",
max: ""
}, {
id: 5346,
title: "灵运",
type: 4,
min: "",
max: ""
}, {
id: 5347,
title: "容若",
type: 4,
min: "",
max: ""
}, {
id: 5348,
title: "伯牙",
type: 4,
min: "",
max: ""
}, {
id: 5349,
title: "禹锡",
type: 4,
min: "",
max: ""
}, {
id: 5350,
title: "崇焕",
type: 4,
min: "",
max: ""
}, {
id: 5351,
title: "道元",
type: 4,
min: "",
max: ""
}, {
id: 5352,
title: "玄霸",
type: 4,
min: "",
max: ""
}, {
id: 5353,
title: "居易",
type: 4,
min: "",
max: ""
}, {
id: 5354,
title: "行简",
type: 4,
min: "",
max: ""
}, {
id: 5355,
title: "渐离",
type: 4,
min: "",
max: ""
}, {
id: 5356,
title: "望之",
type: 4,
min: "",
max: ""
}, {
id: 5357,
title: "道济",
type: 4,
min: "",
max: ""
}, {
id: 5358,
title: "僧辨",
type: 4,
min: "",
max: ""
}, {
id: 5359,
title: "真卿",
type: 4,
min: "",
max: ""
}, {
id: 5360,
title: "舜臣",
type: 4,
min: "",
max: ""
}, {
id: 5361,
title: "楚才",
type: 4,
min: "",
max: ""
}, {
id: 5362,
title: "汉卿",
type: 4,
min: "",
max: ""
}, {
id: 5363,
title: "居正",
type: 4,
min: "",
max: ""
}, {
id: 5364,
title: "好问",
type: 4,
min: "",
max: ""
}, {
id: 5365,
title: "九龄",
type: 4,
min: "",
max: ""
}, {
id: 5366,
title: "浩然",
type: 4,
min: "",
max: ""
}, {
id: 5367,
title: "审言",
type: 4,
min: "",
max: ""
}, {
id: 5368,
title: "应物",
type: 4,
min: "",
max: ""
}, {
id: 5369,
title: "若虚",
type: 4,
min: "",
max: ""
}, {
id: 5370,
title: "致远",
type: 4,
min: "",
max: ""
}, {
id: 5371,
title: "克己",
type: 4,
min: "",
max: ""
}, {
id: 5372,
title: "光祖",
type: 4,
min: "",
max: ""
}, {
id: 5373,
title: "希夷",
type: 4,
min: "",
max: ""
}, {
id: 5374,
title: "知章",
type: 4,
min: "",
max: ""
}, {
id: 5375,
title: "爱",
type: 5,
min: "",
max: ""
}, {
id: 5376,
title: "念",
type: 5,
min: "",
max: ""
}, {
id: 5377,
title: "恋",
type: 5,
min: "",
max: ""
}, {
id: 5378,
title: "彩",
type: 5,
min: "",
max: ""
}, {
id: 5379,
title: "菲",
type: 5,
min: "",
max: ""
}, {
id: 5380,
title: "雪",
type: 5,
min: "",
max: ""
}, {
id: 5381,
title: "春",
type: 5,
min: "",
max: ""
}, {
id: 5382,
title: "夏",
type: 5,
min: "",
max: ""
}, {
id: 5383,
title: "秋",
type: 5,
min: "",
max: ""
}, {
id: 5384,
title: "冬",
type: 5,
min: "",
max: ""
}, {
id: 5385,
title: "碧",
type: 5,
min: "",
max: ""
}, {
id: 5386,
title: "香",
type: 5,
min: "",
max: ""
}, {
id: 5387,
title: "艳",
type: 5,
min: "",
max: ""
}, {
id: 5388,
title: "玉",
type: 5,
min: "",
max: ""
}, {
id: 5389,
title: "双",
type: 5,
min: "",
max: ""
}, {
id: 5390,
title: "红",
type: 5,
min: "",
max: ""
}, {
id: 5391,
title: "紫",
type: 5,
min: "",
max: ""
}, {
id: 5392,
title: "青",
type: 5,
min: "",
max: ""
}, {
id: 5393,
title: "翠",
type: 5,
min: "",
max: ""
}, {
id: 5394,
title: "丽",
type: 5,
min: "",
max: ""
}, {
id: 5395,
title: "映",
type: 5,
min: "",
max: ""
}, {
id: 5396,
title: "美",
type: 5,
min: "",
max: ""
}, {
id: 5397,
title: "贞",
type: 5,
min: "",
max: ""
}, {
id: 5398,
title: "若",
type: 5,
min: "",
max: ""
}, {
id: 5399,
title: "素",
type: 5,
min: "",
max: ""
}, {
id: 5400,
title: "如",
type: 5,
min: "",
max: ""
}, {
id: 5401,
title: "敏",
type: 5,
min: "",
max: ""
}, {
id: 5402,
title: "感",
type: 5,
min: "",
max: ""
}, {
id: 5403,
title: "意",
type: 5,
min: "",
max: ""
}, {
id: 5404,
title: "盈",
type: 5,
min: "",
max: ""
}, {
id: 5405,
title: "相",
type: 5,
min: "",
max: ""
}, {
id: 5406,
title: "盼",
type: 5,
min: "",
max: ""
}, {
id: 5407,
title: "知",
type: 5,
min: "",
max: ""
}, {
id: 5408,
title: "羨",
type: 5,
min: "",
max: ""
}, {
id: 5409,
title: "芳",
type: 6,
min: "",
max: ""
}, {
id: 5410,
title: "香",
type: 6,
min: "",
max: ""
}, {
id: 5411,
title: "芬",
type: 6,
min: "",
max: ""
}, {
id: 5412,
title: "兰",
type: 6,
min: "",
max: ""
}, {
id: 5413,
title: "秀",
type: 6,
min: "",
max: ""
}, {
id: 5414,
title: "菊",
type: 6,
min: "",
max: ""
}, {
id: 5415,
title: "莲",
type: 6,
min: "",
max: ""
}, {
id: 5416,
title: "莉",
type: 6,
min: "",
max: ""
}, {
id: 5417,
title: "萍",
type: 6,
min: "",
max: ""
}, {
id: 5418,
title: "芸",
type: 6,
min: "",
max: ""
}, {
id: 5419,
title: "芹",
type: 6,
min: "",
max: ""
}, {
id: 5420,
title: "英",
type: 6,
min: "",
max: ""
}, {
id: 5421,
title: "茵",
type: 6,
min: "",
max: ""
}, {
id: 5422,
title: "茹",
type: 6,
min: "",
max: ""
}, {
id: 5423,
title: "菁",
type: 6,
min: "",
max: ""
}, {
id: 5424,
title: "菱",
type: 6,
min: "",
max: ""
}, {
id: 5425,
title: "蓓",
type: 6,
min: "",
max: ""
}, {
id: 5426,
title: "蕾",
type: 6,
min: "",
max: ""
}, {
id: 5427,
title: "薇",
type: 6,
min: "",
max: ""
}, {
id: 5428,
title: "芙",
type: 6,
min: "",
max: ""
}, {
id: 5429,
title: "蓉",
type: 6,
min: "",
max: ""
}, {
id: 5430,
title: "燕",
type: 6,
min: "",
max: ""
}, {
id: 5431,
title: "玲",
type: 6,
min: "",
max: ""
}, {
id: 5432,
title: "珍",
type: 6,
min: "",
max: ""
}, {
id: 5433,
title: "婉",
type: 6,
min: "",
max: ""
}, {
id: 5434,
title: "花",
type: 6,
min: "",
max: ""
}, {
id: 5435,
title: "琴",
type: 6,
min: "",
max: ""
}, {
id: 5436,
title: "瑛",
type: 6,
min: "",
max: ""
}, {
id: 5437,
title: "琪",
type: 6,
min: "",
max: ""
}, {
id: 5438,
title: "琳",
type: 6,
min: "",
max: ""
}, {
id: 5439,
title: "瑶",
type: 6,
min: "",
max: ""
}, {
id: 5440,
title: "珠",
type: 6,
min: "",
max: ""
}, {
id: 5441,
title: "玦",
type: 6,
min: "",
max: ""
}, {
id: 5442,
title: "珂",
type: 6,
min: "",
max: ""
}, {
id: 5443,
title: "琅",
type: 6,
min: "",
max: ""
}, {
id: 5444,
title: "珮",
type: 6,
min: "",
max: ""
}, {
id: 5445,
title: "瑜",
type: 6,
min: "",
max: ""
}, {
id: 5446,
title: "姗",
type: 6,
min: "",
max: ""
}, {
id: 5447,
title: "娜",
type: 6,
min: "",
max: ""
}, {
id: 5448,
title: "娟",
type: 6,
min: "",
max: ""
}, {
id: 5449,
title: "婵",
type: 6,
min: "",
max: ""
}, {
id: 5450,
title: "娇",
type: 6,
min: "",
max: ""
}, {
id: 5451,
title: "姬",
type: 6,
min: "",
max: ""
}, {
id: 5452,
title: "娣",
type: 6,
min: "",
max: ""
}, {
id: 5453,
title: "婷",
type: 6,
min: "",
max: ""
}, {
id: 5454,
title: "姝",
type: 6,
min: "",
max: ""
}, {
id: 5455,
title: "春",
type: 6,
min: "",
max: ""
}, {
id: 5456,
title: "秋",
type: 6,
min: "",
max: ""
}, {
id: 5457,
title: "梅",
type: 6,
min: "",
max: ""
}, {
id: 5458,
title: "翠",
type: 6,
min: "",
max: ""
}, {
id: 5459,
title: "凤",
type: 6,
min: "",
max: ""
}, {
id: 5460,
title: "鸾",
type: 6,
min: "",
max: ""
}, {
id: 5461,
title: "红",
type: 6,
min: "",
max: ""
}, {
id: 5462,
title: "倩",
type: 6,
min: "",
max: ""
}, {
id: 5463,
title: "霞",
type: 6,
min: "",
max: ""
}, {
id: 5464,
title: "碧",
type: 6,
min: "",
max: ""
}, {
id: 5465,
title: "艳",
type: 6,
min: "",
max: ""
}, {
id: 5466,
title: "玉",
type: 6,
min: "",
max: ""
}, {
id: 5467,
title: "双",
type: 6,
min: "",
max: ""
}, {
id: 5468,
title: "桂",
type: 6,
min: "",
max: ""
}, {
id: 5469,
title: "杏",
type: 6,
min: "",
max: ""
}, {
id: 5470,
title: "梨",
type: 6,
min: "",
max: ""
}, {
id: 5471,
title: "柔",
type: 6,
min: "",
max: ""
}, {
id: 5472,
title: "棠",
type: 6,
min: "",
max: ""
}, {
id: 5473,
title: "莺",
type: 6,
min: "",
max: ""
}, {
id: 5474,
title: "雯",
type: 6,
min: "",
max: ""
}, {
id: 5475,
title: "慈",
type: 6,
min: "",
max: ""
}, {
id: 5476,
title: "慧",
type: 6,
min: "",
max: ""
}, {
id: 5477,
title: "灵",
type: 6,
min: "",
max: ""
}, {
id: 5478,
title: "君",
type: 6,
min: "",
max: ""
}, {
id: 5479,
title: "娘",
type: 6,
min: "",
max: ""
}, {
id: 5480,
title: "娥",
type: 6,
min: "",
max: ""
}, {
id: 5481,
title: "玎",
type: 6,
min: "",
max: ""
}, {
id: 5482,
title: "玔",
type: 6,
min: "",
max: ""
}, {
id: 5483,
title: "玕",
type: 6,
min: "",
max: ""
}, {
id: 5484,
title: "玖",
type: 6,
min: "",
max: ""
}, {
id: 5485,
title: "玗",
type: 6,
min: "",
max: ""
}, {
id: 5486,
title: "玘",
type: 6,
min: "",
max: ""
}, {
id: 5487,
title: "玞",
type: 6,
min: "",
max: ""
}, {
id: 5488,
title: "玟",
type: 6,
min: "",
max: ""
}, {
id: 5489,
title: "玠",
type: 6,
min: "",
max: ""
}, {
id: 5490,
title: "玦",
type: 6,
min: "",
max: ""
}, {
id: 5491,
title: "玧",
type: 6,
min: "",
max: ""
}, {
id: 5492,
title: "玫",
type: 6,
min: "",
max: ""
}, {
id: 5493,
title: "玭",
type: 6,
min: "",
max: ""
}, {
id: 5494,
title: "玷",
type: 6,
min: "",
max: ""
}, {
id: 5495,
title: "玹",
type: 6,
min: "",
max: ""
}, {
id: 5496,
title: "玻",
type: 6,
min: "",
max: ""
}, {
id: 5497,
title: "珀",
type: 6,
min: "",
max: ""
}, {
id: 5498,
title: "珆",
type: 6,
min: "",
max: ""
}, {
id: 5499,
title: "珈",
type: 6,
min: "",
max: ""
}, {
id: 5500,
title: "珉",
type: 6,
min: "",
max: ""
}, {
id: 5501,
title: "珌",
type: 6,
min: "",
max: ""
}, {
id: 5502,
title: "珏",
type: 6,
min: "",
max: ""
}, {
id: 5503,
title: "珒",
type: 6,
min: "",
max: ""
}, {
id: 5504,
title: "珖",
type: 6,
min: "",
max: ""
}, {
id: 5505,
title: "珙",
type: 6,
min: "",
max: ""
}, {
id: 5506,
title: "珝",
type: 6,
min: "",
max: ""
}, {
id: 5507,
title: "珞",
type: 6,
min: "",
max: ""
}, {
id: 5508,
title: "珠",
type: 6,
min: "",
max: ""
}, {
id: 5509,
title: "珢",
type: 6,
min: "",
max: ""
}, {
id: 5510,
title: "珣",
type: 6,
min: "",
max: ""
}, {
id: 5511,
title: "珤",
type: 6,
min: "",
max: ""
}, {
id: 5512,
title: "珥",
type: 6,
min: "",
max: ""
}, {
id: 5513,
title: "珦",
type: 6,
min: "",
max: ""
}, {
id: 5514,
title: "珩",
type: 6,
min: "",
max: ""
}, {
id: 5515,
title: "珪",
type: 6,
min: "",
max: ""
}, {
id: 5516,
title: "珫",
type: 6,
min: "",
max: ""
}, {
id: 5517,
title: "班",
type: 6,
min: "",
max: ""
}, {
id: 5518,
title: "珵",
type: 6,
min: "",
max: ""
}, {
id: 5519,
title: "珹",
type: 6,
min: "",
max: ""
}, {
id: 5520,
title: "珽",
type: 6,
min: "",
max: ""
}, {
id: 5521,
title: "琁",
type: 6,
min: "",
max: ""
}, {
id: 5522,
title: "琅",
type: 6,
min: "",
max: ""
}, {
id: 5523,
title: "琇",
type: 6,
min: "",
max: ""
}, {
id: 5524,
title: "琉",
type: 6,
min: "",
max: ""
}, {
id: 5525,
title: "琓",
type: 6,
min: "",
max: ""
}, {
id: 5526,
title: "珷",
type: 6,
min: "",
max: ""
}, {
id: 5527,
title: "琛",
type: 6,
min: "",
max: ""
}, {
id: 5528,
title: "琠",
type: 6,
min: "",
max: ""
}, {
id: 5529,
title: "琡",
type: 6,
min: "",
max: ""
}, {
id: 5530,
title: "琢",
type: 6,
min: "",
max: ""
}, {
id: 5531,
title: "琤",
type: 6,
min: "",
max: ""
}, {
id: 5532,
title: "琥",
type: 6,
min: "",
max: ""
}, {
id: 5533,
title: "琦",
type: 6,
min: "",
max: ""
}, {
id: 5534,
title: "琨",
type: 6,
min: "",
max: ""
}, {
id: 5535,
title: "琪",
type: 6,
min: "",
max: ""
}, {
id: 5536,
title: "琫",
type: 6,
min: "",
max: ""
}, {
id: 5537,
title: "琮",
type: 6,
min: "",
max: ""
}, {
id: 5538,
title: "琯",
type: 6,
min: "",
max: ""
}, {
id: 5539,
title: "琰",
type: 6,
min: "",
max: ""
}, {
id: 5540,
title: "琱",
type: 6,
min: "",
max: ""
}, {
id: 5541,
title: "琲",
type: 6,
min: "",
max: ""
}, {
id: 5542,
title: "琸",
type: 6,
min: "",
max: ""
}, {
id: 5543,
title: "琺",
type: 6,
min: "",
max: ""
}, {
id: 5544,
title: "瑀",
type: 6,
min: "",
max: ""
}, {
id: 5545,
title: "瑁",
type: 6,
min: "",
max: ""
}, {
id: 5546,
title: "瑃",
type: 6,
min: "",
max: ""
}, {
id: 5547,
title: "瑄",
type: 6,
min: "",
max: ""
}, {
id: 5548,
title: "瑅",
type: 6,
min: "",
max: ""
}, {
id: 5549,
title: "瑆",
type: 6,
min: "",
max: ""
}, {
id: 5550,
title: "瑎",
type: 6,
min: "",
max: ""
}, {
id: 5551,
title: "瑕",
type: 6,
min: "",
max: ""
}, {
id: 5552,
title: "瑙",
type: 6,
min: "",
max: ""
}, {
id: 5553,
title: "瑚",
type: 6,
min: "",
max: ""
}, {
id: 5554,
title: "瑜",
type: 6,
min: "",
max: ""
}, {
id: 5555,
title: "瑝",
type: 6,
min: "",
max: ""
}, {
id: 5556,
title: "瑞",
type: 6,
min: "",
max: ""
}, {
id: 5557,
title: "瑠",
type: 6,
min: "",
max: ""
}, {
id: 5558,
title: "瑢",
type: 6,
min: "",
max: ""
}, {
id: 5559,
title: "瑥",
type: 6,
min: "",
max: ""
}, {
id: 5560,
title: "瑭",
type: 6,
min: "",
max: ""
}, {
id: 5561,
title: "瑯",
type: 6,
min: "",
max: ""
}, {
id: 5562,
title: "瑾",
type: 6,
min: "",
max: ""
}, {
id: 5563,
title: "璀",
type: 6,
min: "",
max: ""
}, {
id: 5564,
title: "璂",
type: 6,
min: "",
max: ""
}, {
id: 5565,
title: "璃",
type: 6,
min: "",
max: ""
}, {
id: 5566,
title: "璆",
type: 6,
min: "",
max: ""
}, {
id: 5567,
title: "璇",
type: 6,
min: "",
max: ""
}, {
id: 5568,
title: "璋",
type: 6,
min: "",
max: ""
}, {
id: 5569,
title: "璜",
type: 6,
min: "",
max: ""
}, {
id: 5570,
title: "璞",
type: 6,
min: "",
max: ""
}, {
id: 5571,
title: "璟",
type: 6,
min: "",
max: ""
}, {
id: 5572,
title: "璘",
type: 6,
min: "",
max: ""
}, {
id: 5573,
title: "璥",
type: 6,
min: "",
max: ""
}, {
id: 5574,
title: "璨",
type: 6,
min: "",
max: ""
}, {
id: 5575,
title: "璪",
type: 6,
min: "",
max: ""
}, {
id: 5576,
title: "璿",
type: 6,
min: "",
max: ""
}, {
id: 5577,
title: "旭",
type: 6,
min: "",
max: ""
}, {
id: 5578,
title: "旴",
type: 6,
min: "",
max: ""
}, {
id: 5579,
title: "旺",
type: 6,
min: "",
max: ""
}, {
id: 5580,
title: "旼",
type: 6,
min: "",
max: ""
}, {
id: 5581,
title: "昀",
type: 6,
min: "",
max: ""
}, {
id: 5582,
title: "昕",
type: 6,
min: "",
max: ""
}, {
id: 5583,
title: "昑",
type: 6,
min: "",
max: ""
}, {
id: 5584,
title: "昛",
type: 6,
min: "",
max: ""
}, {
id: 5585,
title: "昞",
type: 6,
min: "",
max: ""
}, {
id: 5586,
title: "映",
type: 6,
min: "",
max: ""
}, {
id: 5587,
title: "昡",
type: 6,
min: "",
max: ""
}, {
id: 5588,
title: "昭",
type: 6,
min: "",
max: ""
}, {
id: 5589,
title: "昶",
type: 6,
min: "",
max: ""
}, {
id: 5590,
title: "晈",
type: 6,
min: "",
max: ""
}, {
id: 5591,
title: "晧",
type: 6,
min: "",
max: ""
}, {
id: 5592,
title: "晫",
type: 6,
min: "",
max: ""
}, {
id: 5593,
title: "晰",
type: 6,
min: "",
max: ""
}, {
id: 5594,
title: "暄",
type: 6,
min: "",
max: ""
}, {
id: 5595,
title: "暖",
type: 6,
min: "",
max: ""
}, {
id: 5596,
title: "暲",
type: 6,
min: "",
max: ""
}, {
id: 5597,
title: "旻",
type: 6,
min: "",
max: ""
}, {
id: 5598,
title: "昌",
type: 6,
min: "",
max: ""
}, {
id: 5599,
title: "昇",
type: 6,
min: "",
max: ""
}, {
id: 5600,
title: "易",
type: 6,
min: "",
max: ""
}, {
id: 5601,
title: "昆",
type: 6,
min: "",
max: ""
}, {
id: 5602,
title: "易",
type: 6,
min: "",
max: ""
}, {
id: 5603,
title: "昰",
type: 6,
min: "",
max: ""
}, {
id: 5604,
title: "昱",
type: 6,
min: "",
max: ""
}, {
id: 5605,
title: "昴",
type: 6,
min: "",
max: ""
}, {
id: 5606,
title: "昺",
type: 6,
min: "",
max: ""
}, {
id: 5607,
title: "昻",
type: 6,
min: "",
max: ""
}, {
id: 5608,
title: "晃",
type: 6,
min: "",
max: ""
}, {
id: 5609,
title: "晏",
type: 6,
min: "",
max: ""
}, {
id: 5610,
title: "晟",
type: 6,
min: "",
max: ""
}, {
id: 5611,
title: "晢",
type: 6,
min: "",
max: ""
}, {
id: 5612,
title: "晨",
type: 6,
min: "",
max: ""
}, {
id: 5613,
title: "普",
type: 6,
min: "",
max: ""
}, {
id: 5614,
title: "景",
type: 6,
min: "",
max: ""
}, {
id: 5615,
title: "晷",
type: 6,
min: "",
max: ""
}, {
id: 5616,
title: "暠",
type: 6,
min: "",
max: ""
}, {
id: 5617,
title: "斐",
type: 6,
min: "",
max: ""
}, {
id: 5618,
title: "旌",
type: 6,
min: "",
max: ""
}, {
id: 5619,
title: "旗",
type: 6,
min: "",
max: ""
}, {
id: 5620,
title: "旃",
type: 6,
min: "",
max: ""
}, {
id: 5621,
title: "旒",
type: 6,
min: "",
max: ""
}, {
id: 5622,
title: "奴",
type: 6,
min: "",
max: ""
}, {
id: 5623,
title: "好",
type: 6,
min: "",
max: ""
}, {
id: 5624,
title: "妯",
type: 6,
min: "",
max: ""
}, {
id: 5625,
title: "姃",
type: 6,
min: "",
max: ""
}, {
id: 5626,
title: "姝",
type: 6,
min: "",
max: ""
}, {
id: 5627,
title: "娃",
type: 6,
min: "",
max: ""
}, {
id: 5628,
title: "姿",
type: 6,
min: "",
max: ""
}, {
id: 5629,
title: "娑",
type: 6,
min: "",
max: ""
}, {
id: 5630,
title: "姞",
type: 6,
min: "",
max: ""
}, {
id: 5631,
title: "姸",
type: 6,
min: "",
max: ""
}, {
id: 5632,
title: "娉",
type: 6,
min: "",
max: ""
}, {
id: 5633,
title: "娥",
type: 6,
min: "",
max: ""
}, {
id: 5634,
title: "娟",
type: 6,
min: "",
max: ""
}, {
id: 5635,
title: "婉",
type: 6,
min: "",
max: ""
}, {
id: 5636,
title: "婀",
type: 6,
min: "",
max: ""
}, {
id: 5637,
title: "婧",
type: 6,
min: "",
max: ""
}, {
id: 5638,
title: "媄",
type: 6,
min: "",
max: ""
}, {
id: 5639,
title: "媛",
type: 6,
min: "",
max: ""
}, {
id: 5640,
title: "婷",
type: 6,
min: "",
max: ""
}, {
id: 5641,
title: "媚",
type: 6,
min: "",
max: ""
}, {
id: 5642,
title: "嫄",
type: 6,
min: "",
max: ""
}, {
id: 5643,
title: "嫦",
type: 6,
min: "",
max: ""
}, {
id: 5644,
title: "嬉",
type: 6,
min: "",
max: ""
}, {
id: 5645,
title: "竽",
type: 6,
min: "",
max: ""
}, {
id: 5646,
title: "笙",
type: 6,
min: "",
max: ""
}, {
id: 5647,
title: "笛",
type: 6,
min: "",
max: ""
}, {
id: 5648,
title: "簪",
type: 6,
min: "",
max: ""
}, {
id: 5649,
title: "艾",
type: 6,
min: "",
max: ""
}, {
id: 5650,
title: "芊",
type: 6,
min: "",
max: ""
}, {
id: 5651,
title: "芙",
type: 6,
min: "",
max: ""
}, {
id: 5652,
title: "芍",
type: 6,
min: "",
max: ""
}, {
id: 5653,
title: "芝",
type: 6,
min: "",
max: ""
}, {
id: 5654,
title: "芦",
type: 6,
min: "",
max: ""
}, {
id: 5655,
title: "芩",
type: 6,
min: "",
max: ""
}, {
id: 5656,
title: "芫",
type: 6,
min: "",
max: ""
}, {
id: 5657,
title: "芬",
type: 6,
min: "",
max: ""
}, {
id: 5658,
title: "芭",
type: 6,
min: "",
max: ""
}, {
id: 5659,
title: "芮",
type: 6,
min: "",
max: ""
}, {
id: 5660,
title: "芯",
type: 6,
min: "",
max: ""
}, {
id: 5661,
title: "芷",
type: 6,
min: "",
max: ""
}, {
id: 5662,
title: "芸",
type: 6,
min: "",
max: ""
}, {
id: 5663,
title: "芹",
type: 6,
min: "",
max: ""
}, {
id: 5664,
title: "苑",
type: 6,
min: "",
max: ""
}, {
id: 5665,
title: "苓",
type: 6,
min: "",
max: ""
}, {
id: 5666,
title: "苔",
type: 6,
min: "",
max: ""
}, {
id: 5667,
title: "苗",
type: 6,
min: "",
max: ""
}, {
id: 5668,
title: "苞",
type: 6,
min: "",
max: ""
}, {
id: 5669,
title: "苣",
type: 6,
min: "",
max: ""
}, {
id: 5670,
title: "苧",
type: 6,
min: "",
max: ""
}, {
id: 5671,
title: "苹",
type: 6,
min: "",
max: ""
}, {
id: 5672,
title: "苿",
type: 6,
min: "",
max: ""
}, {
id: 5673,
title: "茉",
type: 6,
min: "",
max: ""
}, {
id: 5674,
title: "茗",
type: 6,
min: "",
max: ""
}, {
id: 5675,
title: "苽",
type: 6,
min: "",
max: ""
}, {
id: 5676,
title: "茜",
type: 6,
min: "",
max: ""
}, {
id: 5677,
title: "茯",
type: 6,
min: "",
max: ""
}, {
id: 5678,
title: "茱",
type: 6,
min: "",
max: ""
}, {
id: 5679,
title: "茳",
type: 6,
min: "",
max: ""
}, {
id: 5680,
title: "茵",
type: 6,
min: "",
max: ""
}, {
id: 5681,
title: "茹",
type: 6,
min: "",
max: ""
}, {
id: 5682,
title: "荃",
type: 6,
min: "",
max: ""
}, {
id: 5683,
title: "草",
type: 6,
min: "",
max: ""
}, {
id: 5684,
title: "荑",
type: 6,
min: "",
max: ""
}, {
id: 5685,
title: "荳",
type: 6,
min: "",
max: ""
}, {
id: 5686,
title: "荷",
type: 6,
min: "",
max: ""
}, {
id: 5687,
title: "荻",
type: 6,
min: "",
max: ""
}, {
id: 5688,
title: "莉",
type: 6,
min: "",
max: ""
}, {
id: 5689,
title: "莎",
type: 6,
min: "",
max: ""
}, {
id: 5690,
title: "莘",
type: 6,
min: "",
max: ""
}, {
id: 5691,
title: "莞",
type: 6,
min: "",
max: ""
}, {
id: 5692,
title: "莠",
type: 6,
min: "",
max: ""
}, {
id: 5693,
title: "莢",
type: 6,
min: "",
max: ""
}, {
id: 5694,
title: "菊",
type: 6,
min: "",
max: ""
}, {
id: 5695,
title: "菁",
type: 6,
min: "",
max: ""
}, {
id: 5696,
title: "菂",
type: 6,
min: "",
max: ""
}, {
id: 5697,
title: "菘",
type: 6,
min: "",
max: ""
}, {
id: 5698,
title: "菫",
type: 6,
min: "",
max: ""
}, {
id: 5699,
title: "菱",
type: 6,
min: "",
max: ""
}, {
id: 5700,
title: "萊",
type: 6,
min: "",
max: ""
}, {
id: 5701,
title: "萋",
type: 6,
min: "",
max: ""
}, {
id: 5702,
title: "萍",
type: 6,
min: "",
max: ""
}, {
id: 5703,
title: "萌",
type: 6,
min: "",
max: ""
}, {
id: 5704,
title: "萩",
type: 6,
min: "",
max: ""
}, {
id: 5705,
title: "萱",
type: 6,
min: "",
max: ""
}, {
id: 5706,
title: "萸",
type: 6,
min: "",
max: ""
}, {
id: 5707,
title: "萼",
type: 6,
min: "",
max: ""
}, {
id: 5708,
title: "葩",
type: 6,
min: "",
max: ""
}, {
id: 5709,
title: "葭",
type: 6,
min: "",
max: ""
}, {
id: 5710,
title: "葳",
type: 6,
min: "",
max: ""
}, {
id: 5711,
title: "葺",
type: 6,
min: "",
max: ""
}, {
id: 5712,
title: "葵",
type: 6,
min: "",
max: ""
}, {
id: 5713,
title: "蒟",
type: 6,
min: "",
max: ""
}, {
id: 5714,
title: "蓉",
type: 6,
min: "",
max: ""
}, {
id: 5715,
title: "蒹",
type: 6,
min: "",
max: ""
}, {
id: 5716,
title: "蓓",
type: 6,
min: "",
max: ""
}, {
id: 5717,
title: "蓼",
type: 6,
min: "",
max: ""
}, {
id: 5718,
title: "蕊",
type: 6,
min: "",
max: ""
}, {
id: 5719,
title: "蕾",
type: 6,
min: "",
max: ""
}, {
id: 5720,
title: "薇",
type: 6,
min: "",
max: ""
}, {
id: 5721,
title: "藤",
type: 6,
min: "",
max: ""
}, {
id: 5722,
title: "衫",
type: 6,
min: "",
max: ""
}, {
id: 5723,
title: "衽",
type: 6,
min: "",
max: ""
}, {
id: 5724,
title: "袂",
type: 6,
min: "",
max: ""
}, {
id: 5725,
title: "衿",
type: 6,
min: "",
max: ""
}, {
id: 5726,
title: "袖",
type: 6,
min: "",
max: ""
}, {
id: 5727,
title: "袗",
type: 6,
min: "",
max: ""
}, {
id: 5728,
title: "裀",
type: 6,
min: "",
max: ""
}, {
id: 5729,
title: "裳",
type: 6,
min: "",
max: ""
}, {
id: 5730,
title: "褒",
type: 6,
min: "",
max: ""
}, {
id: 5731,
title: "蚕",
type: 6,
min: "",
max: ""
}, {
id: 5732,
title: "蛾",
type: 6,
min: "",
max: ""
}, {
id: 5733,
title: "蝴",
type: 6,
min: "",
max: ""
}, {
id: 5734,
title: "蝶",
type: 6,
min: "",
max: ""
}, {
id: 5735,
title: "杏",
type: 6,
min: "",
max: ""
}, {
id: 5736,
title: "果",
type: 6,
min: "",
max: ""
}, {
id: 5737,
title: "柔",
type: 6,
min: "",
max: ""
}, {
id: 5738,
title: "柳",
type: 6,
min: "",
max: ""
}, {
id: 5739,
title: "桂",
type: 6,
min: "",
max: ""
}, {
id: 5740,
title: "桐",
type: 6,
min: "",
max: ""
}, {
id: 5741,
title: "梅",
type: 6,
min: "",
max: ""
}, {
id: 5742,
title: "桔",
type: 6,
min: "",
max: ""
}, {
id: 5743,
title: "桃",
type: 6,
min: "",
max: ""
}, {
id: 5744,
title: "梨",
type: 6,
min: "",
max: ""
}, {
id: 5745,
title: "棠",
type: 6,
min: "",
max: ""
}, {
id: 5746,
title: "梧",
type: 6,
min: "",
max: ""
}, {
id: 5747,
title: "椿",
type: 6,
min: "",
max: ""
}, {
id: 5748,
title: "榕",
type: 6,
min: "",
max: ""
}, {
id: 5749,
title: "檀",
type: 6,
min: "",
max: ""
}, {
id: 5750,
title: "祥",
type: 6,
min: "",
max: ""
}, {
id: 5751,
title: "窈",
type: 6,
min: "",
max: ""
}, {
id: 5752,
title: "窊",
type: 6,
min: "",
max: ""
}, {
id: 5753,
title: "窕",
type: 6,
min: "",
max: ""
}, {
id: 5754,
title: "眉",
type: 6,
min: "",
max: ""
}, {
id: 5755,
title: "甁",
type: 6,
min: "",
max: ""
}, {
id: 5756,
title: "瓷",
type: 6,
min: "",
max: ""
}, {
id: 5757,
title: "翡",
type: 6,
min: "",
max: ""
}, {
id: 5758,
title: "翠",
type: 6,
min: "",
max: ""
}, {
id: 5759,
title: "翎",
type: 6,
min: "",
max: ""
}, {
id: 5760,
title: "翊",
type: 6,
min: "",
max: ""
}, {
id: 5761,
title: "舞",
type: 6,
min: "",
max: ""
}, {
id: 5762,
title: "舫",
type: 6,
min: "",
max: ""
}, {
id: 5763,
title: "舸",
type: 6,
min: "",
max: ""
}, {
id: 5764,
title: "艀",
type: 6,
min: "",
max: ""
}, {
id: 5765,
title: "舷",
type: 6,
min: "",
max: ""
}, {
id: 5766,
title: "雅",
type: 6,
min: "",
max: ""
}, {
id: 5767,
title: "雉",
type: 6,
min: "",
max: ""
}, {
id: 5768,
title: "雀",
type: 6,
min: "",
max: ""
}, {
id: 5769,
title: "雁",
type: 6,
min: "",
max: ""
}, {
id: 5770,
title: "雯",
type: 6,
min: "",
max: ""
}, {
id: 5771,
title: "霞",
type: 6,
min: "",
max: ""
}, {
id: 5772,
title: "零",
type: 6,
min: "",
max: ""
}, {
id: 5773,
title: "霏",
type: 6,
min: "",
max: ""
}, {
id: 5774,
title: "凌菲",
type: 7,
min: "",
max: ""
}, {
id: 5775,
title: "诗茵",
type: 7,
min: "",
max: ""
}, {
id: 5776,
title: "雨婷",
type: 7,
min: "",
max: ""
}, {
id: 5777,
title: "欣妍",
type: 7,
min: "",
max: ""
}, {
id: 5778,
title: "琪涵",
type: 7,
min: "",
max: ""
}, {
id: 5779,
title: "沐卉",
type: 7,
min: "",
max: ""
}, {
id: 5780,
title: "婉婷",
type: 7,
min: "",
max: ""
}, {
id: 5781,
title: "熙雯",
type: 7,
min: "",
max: ""
}, {
id: 5782,
title: "雅芙",
type: 7,
min: "",
max: ""
}, {
id: 5783,
title: "佳琦",
type: 7,
min: "",
max: ""
}, {
id: 5784,
title: "妙菱",
type: 7,
min: "",
max: ""
}, {
id: 5785,
title: "可馨",
type: 7,
min: "",
max: ""
}, {
id: 5786,
title: "婧瑶",
type: 7,
min: "",
max: ""
}, {
id: 5787,
title: "静琪",
type: 7,
min: "",
max: ""
}, {
id: 5788,
title: "歆瑶",
type: 7,
min: "",
max: ""
}, {
id: 5789,
title: "惠然",
type: 7,
min: "",
max: ""
}, {
id: 5790,
title: "婉玗",
type: 7,
min: "",
max: ""
}, {
id: 5791,
title: "梦洁",
type: 7,
min: "",
max: ""
}, {
id: 5792,
title: "清照",
type: 7,
min: "",
max: ""
}, {
id: 5793,
title: "道韫",
type: 7,
min: "",
max: ""
}, {
id: 5794,
title: "伽罗",
type: 7,
min: "",
max: ""
}, {
id: 5795,
title: "婉儿",
type: 7,
min: "",
max: ""
}, {
id: 5796,
title: "采萍",
type: 7,
min: "",
max: ""
}, {
id: 5797,
title: "幼微",
type: 7,
min: "",
max: ""
}, {
id: 5798,
title: "如是",
type: 7,
min: "",
max: ""
}, {
id: 5799,
title: "横波",
type: 7,
min: "",
max: ""
}, {
id: 5800,
title: "小小",
type: 7,
min: "",
max: ""
}, {
id: 5801,
title: "香君",
type: 7,
min: "",
max: ""
}, {
id: 5802,
title: "雅瑶",
type: 7,
min: "",
max: ""
}, {
id: 5803,
title: "璇落",
type: 7,
min: "",
max: ""
}, {
id: 5804,
title: "红蝶",
type: 7,
min: "",
max: ""
}, {
id: 5805,
title: "露娣",
type: 7,
min: "",
max: ""
}, {
id: 5806,
title: "浮玫",
type: 7,
min: "",
max: ""
}, {
id: 5807,
title: "玲滢",
type: 7,
min: "",
max: ""
}, {
id: 5808,
title: "妙娥",
type: 7,
min: "",
max: ""
}, {
id: 5809,
title: "凡醉",
type: 7,
min: "",
max: ""
}, {
id: 5810,
title: "娜爱",
type: 7,
min: "",
max: ""
}, {
id: 5811,
title: "佳青",
type: 7,
min: "",
max: ""
}, {
id: 5812,
title: "可莉",
type: 7,
min: "",
max: ""
}, {
id: 5813,
title: "梦筱",
type: 7,
min: "",
max: ""
}, {
id: 5814,
title: "慕媛",
type: 7,
min: "",
max: ""
}, {
id: 5815,
title: "染凡",
type: 7,
min: "",
max: ""
}, {
id: 5816,
title: "巧墨",
type: 7,
min: "",
max: ""
}, {
id: 5817,
title: "祖扇",
type: 7,
min: "",
max: ""
}, {
id: 5818,
title: "诗甜",
type: 7,
min: "",
max: ""
}, {
id: 5819,
title: "娇丽",
type: 7,
min: "",
max: ""
}, {
id: 5820,
title: "筱玫",
type: 7,
min: "",
max: ""
}, {
id: 5821,
title: "半云",
type: 7,
min: "",
max: ""
}, {
id: 5822,
title: "浅霖",
type: 7,
min: "",
max: ""
}, {
id: 5823,
title: "冰盈",
type: 7,
min: "",
max: ""
}, {
id: 5824,
title: "诗开",
type: 7,
min: "",
max: ""
}, {
id: 5825,
title: "雪绿",
type: 7,
min: "",
max: ""
}, {
id: 5826,
title: "海娜",
type: 7,
min: "",
max: ""
}, {
id: 5827,
title: "问绡",
type: 7,
min: "",
max: ""
}, {
id: 5828,
title: "玫滢",
type: 7,
min: "",
max: ""
}, {
id: 5829,
title: "倩敏",
type: 7,
min: "",
max: ""
}, {
id: 5830,
title: "淇诗",
type: 7,
min: "",
max: ""
}, {
id: 5831,
title: "星嫣",
type: 7,
min: "",
max: ""
}, {
id: 5832,
title: "宛如",
type: 7,
min: "",
max: ""
}, {
id: 5833,
title: "怀灵",
type: 7,
min: "",
max: ""
}, {
id: 5834,
title: "依颖",
type: 7,
min: "",
max: ""
}, {
id: 5835,
title: "晓歌",
type: 7,
min: "",
max: ""
}, {
id: 5836,
title: "蝶尽",
type: 7,
min: "",
max: ""
}, {
id: 5837,
title: "如雪",
type: 7,
min: "",
max: ""
}, {
id: 5838,
title: "丹依",
type: 7,
min: "",
max: ""
}, {
id: 5839,
title: "墨梦",
type: 7,
min: "",
max: ""
}, {
id: 5840,
title: "曦馥",
type: 7,
min: "",
max: ""
}, {
id: 5841,
title: "思染",
type: 7,
min: "",
max: ""
}, {
id: 5842,
title: "琦君",
type: 7,
min: "",
max: ""
}, {
id: 5843,
title: "碧衡",
type: 7,
min: "",
max: ""
}, {
id: 5844,
title: "萱瑶",
type: 7,
min: "",
max: ""
}, {
id: 5845,
title: "滢白",
type: 7,
min: "",
max: ""
}, {
id: 5846,
title: "雪苓",
type: 7,
min: "",
max: ""
}, {
id: 5847,
title: "寄诗",
type: 7,
min: "",
max: ""
}, {
id: 5848,
title: "晗雪",
type: 7,
min: "",
max: ""
}, {
id: 5849,
title: "可琴",
type: 7,
min: "",
max: ""
}, {
id: 5850,
title: "云雪",
type: 7,
min: "",
max: ""
}, {
id: 5851,
title: "淇丹",
type: 7,
min: "",
max: ""
}, {
id: 5852,
title: "惜梅",
type: 7,
min: "",
max: ""
}, {
id: 5853,
title: "子菱",
type: 7,
min: "",
max: ""
}, {
id: 5854,
title: "从兰",
type: 7,
min: "",
max: ""
}, {
id: 5855,
title: "沅言",
type: 7,
min: "",
max: ""
}, {
id: 5856,
title: "蝶清",
type: 7,
min: "",
max: ""
}, {
id: 5857,
title: "璇梦",
type: 7,
min: "",
max: ""
}, {
id: 5858,
title: "芷若",
type: 7,
min: "",
max: ""
}, {
id: 5859,
title: "语嫣",
type: 7,
min: "",
max: ""
}, {
id: 5860,
title: "婉清",
type: 7,
min: "",
max: ""
}, {
id: 5861,
title: "灵素",
type: 7,
min: "",
max: ""
}, {
id: 5862,
title: "若兰",
type: 7,
min: "",
max: ""
}, {
id: 5863,
title: "念慈",
type: 7,
min: "",
max: ""
}, {
id: 5864,
title: "非烟",
type: 7,
min: "",
max: ""
}, {
id: 5865,
title: "霓裳",
type: 7,
min: "",
max: ""
}, {
id: 5866,
title: "秋荻",
type: 7,
min: "",
max: ""
}, {
id: 5867,
title: "星竹",
type: 7,
min: "",
max: ""
}, {
id: 5868,
title: "青桐",
type: 7,
min: "",
max: ""
}, {
id: 5869,
title: "瑶伽",
type: 7,
min: "",
max: ""
}, {
id: 5870,
title: "霜华",
type: 7,
min: "",
max: ""
}, {
id: 5871,
title: "沅芷",
type: 7,
min: "",
max: ""
}, {
id: 5872,
title: "无双",
type: 7,
min: "",
max: ""
}, {
id: 5873,
title: "涵",
type: 7,
min: "",
max: ""
}, {
id: 5874,
title: "菡",
type: 7,
min: "",
max: ""
}, {
id: 5875,
title: "慧",
type: 7,
min: "",
max: ""
}, {
id: 5876,
title: "佳",
type: 7,
min: "",
max: ""
}, {
id: 5877,
title: "瑾",
type: 7,
min: "",
max: ""
}, {
id: 5878,
title: "岚",
type: 7,
min: "",
max: ""
}, {
id: 5879,
title: "乐",
type: 7,
min: "",
max: ""
}, {
id: 5880,
title: "琳",
type: 7,
min: "",
max: ""
}, {
id: 5881,
title: "玲",
type: 7,
min: "",
max: ""
}, {
id: 5882,
title: "璐",
type: 7,
min: "",
max: ""
}, {
id: 5883,
title: "萌",
type: 7,
min: "",
max: ""
}, {
id: 5884,
title: "梦",
type: 7,
min: "",
max: ""
}, {
id: 5885,
title: "敏",
type: 7,
min: "",
max: ""
}, {
id: 5886,
title: "娜",
type: 7,
min: "",
max: ""
}, {
id: 5887,
title: "怡",
type: 7,
min: "",
max: ""
}, {
id: 5888,
title: "嫣",
type: 7,
min: "",
max: ""
}, {
id: 5889,
title: "娴",
type: 7,
min: "",
max: ""
}, {
id: 5890,
title: "钰",
type: 7,
min: "",
max: ""
}, {
id: 5891,
title: "婷",
type: 7,
min: "",
max: ""
}, {
id: 5892,
title: "倩",
type: 7,
min: "",
max: ""
}, {
id: 5893,
title: "姝",
type: 7,
min: "",
max: ""
}, {
id: 5894,
title: "雨",
type: 7,
min: "",
max: ""
}, {
id: 5895,
title: "雪",
type: 7,
min: "",
max: ""
}, {
id: 5896,
title: "妍",
type: 7,
min: "",
max: ""
}, {
id: 5897,
title: "玥",
type: 7,
min: "",
max: ""
}, {
id: 5898,
title: "彤",
type: 7,
min: "",
max: ""
}, {
id: 5899,
title: "瑶",
type: 7,
min: "",
max: ""
}, {
id: 5900,
title: "雯",
type: 7,
min: "",
max: ""
}, {
id: 5901,
title: "红",
type: 7,
min: "",
max: ""
}, {
id: 5902,
title: "英",
type: 7,
min: "",
max: ""
}, {
id: 5903,
title: "贞",
type: 7,
min: "",
max: ""
}, {
id: 5904,
title: "丹",
type: 7,
min: "",
max: ""
}, {
id: 5905,
title: "芮",
type: 7,
min: "",
max: ""
}, {
id: 5906,
title: "仪",
type: 7,
min: "",
max: ""
}, {
id: 5907,
title: "芳",
type: 7,
min: "",
max: ""
}, {
id: 5908,
title: "丽",
type: 7,
min: "",
max: ""
}, {
id: 5909,
title: "璇",
type: 7,
min: "",
max: ""
}, {
id: 5910,
title: "凤",
type: 7,
min: "",
max: ""
}, {
id: 5911,
title: "荷",
type: 7,
min: "",
max: ""
}, {
id: 5912,
title: "娟",
type: 7,
min: "",
max: ""
}, {
id: 5913,
title: "琼",
type: 7,
min: "",
max: ""
} ];
cc._RF.pop();
}, {} ],
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
}, {} ],
promise: [ function(t, e) {
"use strict";
cc._RF.push(e, "fbe4dGtqsxO4r2X+vpdeV+b", "promise");
cc._RF.pop();
}, {} ],
rankBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "61489uqPXtMpa1NpOORU/Tn", "rankBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list: cc.Node,
typeBox: cc.Node,
barBox: cc.Node,
pageBox: cc.Node,
levBox: cc.Node,
myItem: cc.Node,
coin: cc.Label,
tipsBox: cc.Node,
type: {
default: 0,
visible: !1
},
lev: {
default: 0,
visible: !1
},
selLev: {
default: 0,
visible: !1
},
page: {
default: 0,
visible: !1
},
myRank: {
default: -1,
visible: !1
}
},
onLoad: function() {
var t = this;
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.lev = [ [ 10, 27 ], [ 28, 45 ], [ 46, 63 ] ][e];
t.showSelLev(e);
t.showRank(e);
t.showTips(e);
t.showCoin();
});
var e = this.levBox.children, i = function(i) {
G.setBup(e[i], function() {
t.lev = [ [ 10, 27 ], [ 28, 45 ], [ 46, 63 ] ][i];
t.showSelLev(i);
t.showRank(t.type);
});
};
for (var n in e) i(n);
},
onEnable: function() {
G.wxAd.showClubBup(!1);
this.showCoin();
this.typeBox.getComponent("typeBox").showType(0);
},
onDisable: function() {
G.wxAd.showClubBup(!0);
},
showCoin: function() {
G.wxAd.showClubBup(!1);
this.coin.string = "灵石：" + G.getNum(G.user.coin);
},
updateInfo: function() {
this.lev = [ [ 10, 27 ], [ 28, 45 ], [ 46, 63 ] ][this.selLev];
this.showSelLev(this.selLev);
this.showRank(this.type);
this.showTips(this.type);
this.showCoin();
},
showSelLev: function(t) {
this.selLev = t;
var e = this.levBox.children;
for (var i in e) e[i].getChildByName("font").color = i == t ? cc.color("#78EA8E") : cc.color("ffffff");
},
showTips: function(t) {
var e = this.tipsBox.children;
for (var i in e) e[i].active = i == t;
},
showRank: function(t) {
this.node.active = !0;
this.type = t;
this.page = 0;
var e = this.barBox.children;
for (var i in e) e[i].active = i == t;
this.levBox.parent.active = 2 != t;
this.levBox.children[0].active = 0 == t;
this.list.removeAllChildren();
var n = [ G._.assign([], G.user.rank), G._.assign([], G.user.homeRank), G._.assign([], G.user.relifeRank) ], a = n[t].length - 1, o = 1, m = [], r = this.showMyInfo(), s = -1;
for (var l in n[t]) {
var p = n[t][l];
0 == t ? 2 * r[7] + r[8] >= 2 * p[7] + p[8] && (s = l) : 1 == t ? 2 * r[10] + r[11] >= 2 * p[10] + p[11] && (s = l) : r[0] >= p[0] && (s = l);
}
-1 != s && (n[t][s] = r);
for (var d = [ 20, 30, 50 ], c = a; c >= 0; c--) {
var u = n[t][c], y = 0 == t && u[5] >= this.lev[0] && u[5] <= this.lev[1], f = 1 == t && u[8] >= this.lev[0] && u[8] <= this.lev[1];
if (y || f || 2 == t) {
if (!(m.length < d[t])) break;
m.push([ o++, u ]);
}
}
for (var x = 0, h = m; x < h.length; x++) {
var g = h[x], v = cc.instantiate(this.item);
v.parent = this.list;
var _ = v.getComponent("rankItem");
_.showInfo(g[0], t, g[1]);
_.updateCost(this.selLev);
}
this.updateMyRank(m);
},
showMyInfo: function() {
var t = null, e = G.getFightData(!0, G.user.lev), i = G.getFight(!0);
if (0 == this.type) {
i = e[0] + 10 * e[1] + 30 * e[2];
t = [ e[0], e[1], e[2], e[3], i, G.user.lev, G.user.name, G.user.win[0], G.user.win[1] ];
} else if (1 == this.type) {
var n = G._.size(G.user.home.man), a = G.user.home.lev, o = G.user.home.name;
t = [ e[0], e[1], e[2], e[3], i, n, a, o, G.user.lev, G.user.name, G.user.homeWin[0], G.user.homeWin[1] ];
} else t = [ G.user.point, G.user.lev, G.user.name ];
this.myItem.getComponent("rankItem").showInfo(1, this.type, t);
return t;
},
updateMyRank: function(t) {
var e = -1;
for (var i in t) {
var n = "", a = t[i][1];
0 == this.type ? n = a[6] : 1 == this.type ? n = a[9] : 2 == this.type && (n = a[2]);
G.user.name == n && (e = Number(i) + 1);
}
G.temp.myRank = e;
var o = this.myItem.getComponent("rankItem");
o.updataRank(e);
o.updateCost(0);
}
});
cc._RF.pop();
}, {} ],
rankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "fbf3544P6dOILkScwcaRxjH", "rankItem");
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
rImg: cc.Node,
rFont: cc.Label,
font0: cc.Label,
font1_0: cc.Label,
font1_1: cc.Label,
font2: cc.Label,
fightBup: cc.Node,
giftBup: cc.Node,
cost: cc.Label,
gift: cc.Label,
info: cc.Label,
type: {
default: 0,
visible: !1
},
lev: {
default: 0,
visible: !1
},
data: {
default: null,
visible: !1
},
rank: {
default: -1,
visible: !1
},
fCost: {
default: 0,
visible: !1
},
fCoin: {
default: 0,
visible: !1
},
gCoin: {
default: 0,
visible: !1
},
userName: {
default: "",
visible: !1
},
isMy: !1
},
onLoad: function() {
var t = this;
G.setBup(this.fightBup, function() {
t.toFight();
});
G.setBup(this.giftBup, function() {
t.getGift();
});
},
showInfo: function(t, e, i) {
this.type = e;
this.data = i;
this.fightBup.active = 2 != e;
this.info.node.active = 2 != e;
this.updataRank(t);
this.font1_1.node.active = 1 == e;
if (0 == e) {
var n = G.levConf[i[5] - 1];
this.font0.string = i[6];
this.font1_0.string = n.stage_name + n.step_name;
this.font2.string = 2 * i[7] + i[8];
this.userName = i[6];
this.info.string = "胜" + i[7] + "  负" + i[8] + "  战力" + G.getNum(i[4]);
} else if (1 == e) {
var a = G.levConf[i[8] - 1];
this.font0.string = "" == i[7] ? "无宗门" : i[7];
this.font1_0.string = i[9];
this.font1_1.string = a.stage_name + a.step_name;
this.font2.string = 2 * i[10] + i[11];
this.userName = i[9];
this.info.string = "胜" + i[10] + "  负" + i[11] + "  战力" + G.getNum(i[4]);
} else if (2 == e) {
var o = G.levConf[i[1] - 1];
this.font0.string = i[2];
this.font1_0.string = o.stage_name + o.step_name;
this.font2.string = i[0];
this.userName = i[2];
}
},
updateCost: function(t) {
this.lev = Number(t) + 1;
var e = 0;
this.fCoin = 0;
if (this.rank <= 30) for (var n, a = i(G._19Conf); !(n = a()).done; ) {
var o = n.value;
if (o.type == this.type + 1 && o.list == this.lev) {
var m = (o.ranking + "").split("|");
if (1 == m.length && this.rank == m[0]) {
e = o.entry;
this.fCoin = o.bonus;
} else if (m.length > 1 && this.rank >= m[0] && this.rank <= m[1]) {
e = o.entry;
this.fCoin = o.bonus;
}
}
}
if (this.isMy) {
e = 800;
this.fCoin = 2 * e;
} else {
G.temp.myRank > 0 && G.temp.myRank <= this.rank && (e = 0);
this.fightBup.active = e > 0 && this.userName != G.user.name;
}
this.cost.node.active = e > 0;
this.cost.string = "费用 " + e;
this.fCost = e;
},
updataRank: function(t) {
this.rank = t;
this.rImg.active = t < 4 && t >= 0;
this.rImg.active && (this.rImg.children[t - 1].active = !0);
this.rFont.node.active = t > 3 || t < 0;
this.rFont.string = t > 0 ? t : "未上榜";
this.giftBup.active = this.isMy && 2 == this.type && -1 != t;
this.gCoin = G.getNum(G.VAL.POINT_COIN * G.user.point);
this.gift.string = "灵石 x" + this.gCoin;
},
toFight: function() {
if (!this.isMy && G.temp.myRank < 0) G.showTips("未上榜，无法挑战！"); else if (1 != this.type || "" != G.user.home.name) {
var t = G.getFightData(!0, G.user.lev);
if (G.user.hp < t[0] / 10) {
var e = G.getMsgBox();
e.showMsg("经过连番战斗，你已经灵力耗尽，气血不足，为了接下来更好的应对挑战，建议你恢复后再继续历练。", function() {
G.getNode("Canvas/rankBox", "rankBox").node.active = !1;
G.getNode("Canvas/bupBox", "bupBox").js.jumpTo(0);
});
e.setBupTxt("修练恢复");
e.showOtherBup("放弃挑战");
} else if (G.user.coin >= this.fCost) {
G.user.coin -= this.fCost;
if (this.isMy) {
var i = 1 + G._.random(-20, 30) / 100;
G.temp.rankFight = [ Math.ceil(i * this.data[0]), Math.ceil(i * this.data[1]), Math.ceil(i * this.data[2]), Math.ceil(i * this.data[3]), Math.ceil(i * this.data[4]), G.getRoleName(G._.random(0, 1)), this.fCoin, this.type ];
} else G.temp.rankFight = [ this.data[0], this.data[1], this.data[2], this.data[3], this.data[4], this.userName, this.fCoin, this.type ];
G.save();
G.getNode("Canvas/rankBox", "rankBox").js.showCoin();
G.getNode("Canvas/fightBox", "fightBox").js.initFight("3001");
} else G.noCoinTips(function() {
G.getNode("Canvas/rankBox", "rankBox").js.showCoin();
});
} else G.showTips("未建立宗门");
},
getGift: function() {
if (G.getItem("xx_relife_gife") != G.getNow()) {
G.user.coin += G.VAL.POINT_COIN * G.user.point;
G.save();
G.setItem("xx_relife_gife", G.getNow());
G.getNode("Canvas/rankBox", "rankBox").js.showCoin();
G.showTips("领取成功");
} else G.showTips("本日已领取");
}
});
cc._RF.pop();
}, {} ],
relifeFbBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "684deTcJmtDFppHscRXQWLD", "relifeFbBox");
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
font0: cc.Node,
font1: cc.Node,
objBox: cc.Node,
bup0: cc.Node,
bup1: cc.Node,
fbList: {
default: null,
visible: !1
},
selNum: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup0, function() {
t.getFb(!1);
});
G.setBup(this.bup1, function() {
G.showVedio(function() {
t.getFb(!0);
});
});
var e = this.objBox.children, i = function(i) {
G.setBup(e[i], function() {
t.objSel(i);
});
};
for (var n in e) i(n);
},
onEnable: function() {
this.selNum = G.user.isWin ? [ 5, 3 ] : [ 3, 1 ];
this.font0.active = !G.user.isWin;
this.font1.active = G.user.isWin;
this.showInfo();
},
showInfo: function() {
if (G.user.isWin) {
this.fbList = [];
for (var t, e = [ [], [], [], [] ], n = i(G.user.relifeFb[0]); !(t = n()).done; ) {
var a = t.value, o = Number(a.split("_")[1]), m = G.getConf(G.objConf, o);
e[0].push({
id: o,
name: m.name,
sub_type: m.sub_type,
qua: m.qua,
sel: !1
});
}
for (var r, s = G._.reverse(G._.sortBy(e[0], [ "qua" ])), l = i(G.user.relifeFb[1]); !(r = l()).done; ) {
var p = r.value, d = Number(p.split("_")[1]), c = G.getConf(G.objConf, d);
e[1].push({
id: d,
name: c.name,
sub_type: c.sub_type,
qua: c.qua,
sel: !1
});
}
for (var u, y = G._.reverse(G._.sortBy(e[1], [ "qua" ])), f = i(G.user.relifeFb[3]); !(u = f()).done; ) {
var x = u.value, h = Number(x.split("_")[1]), g = G.getConf(G.objConf, h);
e[2].push({
id: h,
name: g.name,
sub_type: g.sub_type,
qua: g.qua,
sel: !1
});
}
for (var v, _ = G._.reverse(G._.sortBy(e[2], [ "qua" ])), b = i(G.user.relifeFb[4]); !(v = b()).done; ) {
var w = v.value, k = Number(w.split("_")[1]), C = G.getConf(G.objConf, k);
e[3].push({
id: k,
name: C.name,
sub_type: C.sub_type,
qua: C.qua,
sel: !1
});
}
for (var A = G._.reverse(G._.sortBy(e[3], [ "qua" ])), S = 0; S < 1; S++) s[S] && this.fbList.push(s[S]);
for (var B = 0; B < 1; B++) y[B] && this.fbList.push(y[B]);
for (var I = 0; I < 2; I++) _[I] && this.fbList.push(_[I]);
for (var N = 0; N < 1; N++) A[N] && this.fbList.push(A[N]);
} else {
for (var T, j = [], L = i(G.user.relifeFb[3]); !(T = L()).done; ) {
var M = T.value, O = Number(M.split("_")[1]), F = G.getConf(G.objConf, O);
j.push({
id: O,
name: F.name,
sub_type: F.sub_type,
qua: F.qua,
sel: !1
});
}
var E = G._.reverse(G._.sortBy(j, [ "qua" ]));
this.fbList = E;
}
for (var D = Math.min(this.fbList.length, this.selNum[0]), R = this.objBox.children, P = 0; P < D; P++) {
R[P].active = !0;
var V = R[P].getChildByName("img");
this.getImg(this.fbList[P].id, V);
R[P].getChildByName("title").getComponent(cc.Label).string = this.fbList[P].name;
R[P].getChildByName("yes").active = P < this.selNum[1];
this.fbList[P].sel = P < this.selNum[1];
}
G.user.relifeFb = [];
G.user.isWin = !1;
G.save(!0);
},
getImg: function(t, e) {
var i = G.getConf(G.objConf, t);
if (1 == i.type) {
var n = i.qua - 1;
G.setLogo(e, "obj/", "obj", "book_" + n, !0, 90);
} else if (11 == i.type) {
var a = null == G.temp.fsIcon["_" + t] ? G._.random(0, 4) : G.temp.fsIcon["_" + t];
G.temp.fsIcon["_" + t] = a;
G.setLogo(e, "obj/", "obj", "fs_" + a + "_" + i.qua, !0, 90);
} else if (5 == i.type || 7 == i.type) {
var o = "obj_" + i.sub_type + "_" + i.qua;
G.setLogo(e, "obj/", "obj", o, !0, 90);
} else if (6 == i.type || 8 == i.type) G.setLogo(e, "img/", "img", "img_38", !0, 90); else {
var m = null == G.temp.danIcon["_" + t] ? G._.random(0, 9) : G.temp.danIcon["_" + t];
G.temp.danIcon["_" + t] = m;
G.setLogo(e, "obj/", "obj", "dan_" + m, !0, 90);
}
},
objSel: function(t) {
var e = this.objBox.children;
if (1 == this.selNum[1]) {
for (var i in e) if (e[i].active) {
e[i].getChildByName("yes").active = i == t;
this.fbList[i].sel = i == t;
}
} else {
var n = 0;
for (var a in e) e[a].active && e[a].getChildByName("yes").active && n++;
if (n >= this.selNum[1] && !this.fbList[t].sel) G.showTips("最多选" + this.selNum[1] + "件"); else if (e[t].active) {
var o = e[t].getChildByName("yes");
o.active = !o.active;
this.fbList[t].sel = o.active;
}
}
},
getFb: function(t) {
for (var e = Math.min(this.fbList.length, this.selNum[0]), i = 0; i < e; i++) {
var n = this.fbList[i];
(t || n.sel) && (G.user.obj["_" + n.id] = 1);
}
G.save(!0);
this.node.active = !1;
t ? this.scheduleOnce(function() {
cc.director.loadScene("login");
}, 1) : cc.director.loadScene("login");
}
});
cc._RF.pop();
}, {} ],
relifeTipsBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "ba5d0xXj/tEiK29U57wzxz4", "relifeTipsBox");
cc.Class({
extends: cc.Component,
properties: {
bup: cc.Node,
relifeFbBox: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
var e = !1;
G.user.relifeFb.length > 0 && (e = G.user.relifeFb[3].length > 0);
if (e) {
t.relifeFbBox.active = !0;
t.node.active = !1;
} else cc.director.loadScene("login");
});
},
onEnable: function() {
G.showInter();
}
});
cc._RF.pop();
}, {} ],
retBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "e7a32BR5A9J3JmIQ6SqTIlC", "retBox");
cc.Class({
extends: cc.Component,
properties: {
win: cc.Node,
lose: cc.Node,
dead: cc.Node
},
showRet: function(t) {
this.win.active = 0 == t;
this.lose.active = 1 == t;
this.dead.active = 2 == t;
this.node.active = !0;
}
});
cc._RF.pop();
}, {} ],
rotationJs: [ function(t, e) {
"use strict";
cc._RF.push(e, "d4188MykR5Hq6qIX834A+x7", "rotationJs");
cc.Class({
extends: cc.Component,
properties: {
t: .1,
r: 10
},
onLoad: function() {
var t = cc.rotateBy(this.t, this.r).repeatForever();
this.node.runAction(t);
}
});
cc._RF.pop();
}, {} ],
scaleFit: [ function(t, e) {
"use strict";
cc._RF.push(e, "a18e2nGiKVPAaUdDmRqqre1", "scaleFit");
cc.Class({
extends: cc.Component,
properties: {
sx: !0,
sy: !0,
type: 0
},
onLoad: function() {
if (0 == this.type) {
this.sx && (this.node.scaleX *= G.VAL.SCALE);
this.sy && (this.node.scaleY *= G.VAL.SCALE);
} else {
this.sx && (this.node.width *= G.VAL.SCALE);
this.sy && (this.node.height *= G.VAL.SCALE);
}
}
});
cc._RF.pop();
}, {} ],
scaleJs: [ function(t, e) {
"use strict";
cc._RF.push(e, "f132fa/N9NN2pt8M2yE8Nwr", "scaleJs");
cc.Class({
extends: cc.Component,
properties: {
t: .3,
s0: .9,
s1: 1
},
onLoad: function() {
var t = this.node.scaleX * this.s0, e = this.node.scaleY * this.s0, i = this.node.scaleX * this.s1, n = this.node.scaleY * this.s1, a = cc.scaleTo(this.t, t, e), o = cc.scaleTo(this.t, i, n), m = cc.sequence(a, o).repeatForever();
this.node.runAction(m);
}
});
cc._RF.pop();
}, {} ],
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
}, {} ],
shopBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "1976cnZ+IlCmI+CQlKC6SaF", "shopBox");
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
item: cc.Prefab,
list: cc.Node,
title: cc.Label,
type: cc.Label,
rar: cc.Label,
desc: cc.Label,
typeBox: cc.Node,
updateBup: cc.Node,
updateFont: cc.Label,
buyBup: cc.Node,
coin: cc.Node,
time: cc.Label,
adBup: cc.Node,
buyBup1: cc.Node,
adCountBox: cc.Node,
adCount: cc.RichText,
adSkip: cc.RichText,
adTips: cc.Label,
objList: {
default: null,
visible: !1
},
typeIndex: {
default: null,
visible: !1
},
selId: {
default: null,
visible: !1
},
timeOut: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.showList(e);
});
G.setBup(this.updateBup, function() {
if (G.user.shopFree > 0) {
G.user.shopFree--;
G.user.shopTime = 0;
t.setList();
t.updateList(t.typeIndex);
G.user.shopTime = G.getNowSec();
} else {
var e = G.getAdConf(), i = Math.ceil(e.money / 2);
if (G.user.coin >= i) {
G.user.coin -= i;
G.user.shopFree = 1;
} else G.noCoinTips();
}
t.updateFree();
G.save();
});
G.setBup(this.buyBup, function() {
t.buyObj();
});
G.setBup(this.buyBup1, function() {
G.ylAdEvent("坊市获取特殊物品");
G.showVedio(function() {
t.adBuyObj();
});
});
G.setBup(this.adBup, function() {
G.ylAdEvent("坊市获取灵石");
G.showVedio(function() {
t.getCoin();
});
});
this.adTips.string = "备注：每次轮回，观看" + G.VAL.MAX_AD[0] + "次广告可获得免广告卷" + G.VAL.MAX_AD[1] + "张，免广告卷使用完后，观看" + G.VAL.MAX_AD[0] + "次可再获得" + G.VAL.MAX_AD[1] + "张，本轮重生后所有数据清零。";
this.objList = [];
},
onEnable: function() {
this.time.node.active = G.user.shopFree < 1;
this.objList.length < 1 && this.setList();
this.updateList(0);
this.updateTime();
this.updateFree();
if (G.user.adTimes < G.VAL.MAX_AD[0]) {
var t = G.VAL.MAX_AD[0] - G.user.adTimes;
t < 3 && G.showTips("还差" + t + "次视频，可解锁【免广】福利~");
}
},
setList: function() {
for (var t, e = [ [], [], [], [], [], [] ], n = G.levConf[G.user.lev - 1].stage, a = i(G.objConf); !(t = a()).done; ) {
var o = t.value, m = "_" + o.id;
if ("" != o.ad) 162001 != o.id && e[5].push(m); else if ("" != o.pri) if (7 == o.type) e[4].push(m); else if (o.qua < 4) if (1 == o.type) e[0].push(m); else if (11 == o.type) e[1].push(m); else if (5 == o.type) e[3].push(m); else {
if (6 == o.type) continue;
if (8 == o.type) continue;
var r = -1 == o.attr.indexOf("lf"), s = -1 == o.attr.indexOf("cn"), l = -1 == o.attr.indexOf("in");
r && s && l && e[2].push(m);
}
}
this.objList = [];
this.objList[0] = G.randomArray(e[0], 5);
this.objList[1] = G.randomArray(e[1], 5);
this.objList[2] = [ "_" + [ 143001, 143001, 143002, 143003, 144001, 144002, 144003, 144003 ][n], "_261000", "_271000" ].concat(G.randomArray(e[2], 11));
this.objList[3] = G.randomArray(e[3], 5);
this.objList[4] = G.randomArray(e[4], 10);
this.objList[5] = e[5];
},
updateList: function(t) {
this.typeIndex = t;
this.updateFree();
this.typeBox.getComponent("typeBox").showType(t);
},
updateFree: function() {
var t = G.getAdConf(), e = Math.ceil(t.money / 2);
this.updateFont.string = G.user.shopFree < 1 ? "灵石加速 " + G.getNum(e) : "刷 新(" + G.user.shopFree + ")";
this.time.node.active = G.user.shopFree < 1;
},
showList: function(t) {
this.buyBup.active = 5 != t;
this.buyBup1.active = 5 == t;
this.updateBup.active = 5 != t;
this.typeIndex = t;
this.list.removeAllChildren();
for (var e, n = i(this.objList[t]); !(e = n()).done; ) {
var a = e.value, o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("bagItem").showInfo(a, 1);
}
if (this.objList[t].length > 0) this.showDesc(this.objList[t][0]); else {
this.title.string = "未选择";
this.type.string = "未知";
this.rar.string = "未知";
this.desc.string = "暂无详情...";
this.rar.node.color = cc.color("#000000");
}
},
showDesc: function(t) {
var e = Number(t.split("_")[1]);
this.selId = e;
var n = G.getConf(G.objConf, e);
this.title.string = n.name;
this.type.string = G.VAL.OBJ["_" + n.type];
this.rar.string = G.VAL.RAR[n.qua];
this.rar.node.color = cc.color(G.VAL.R_COLOR[n.qua]);
this.desc.string = n.des;
if (1 == n.type) this.desc.string += "修练效率提升：" + n.eff + "%"; else if (11 == n.type) {
var a = G.getConf(G._15Conf, n.magic), o = G.fsDesc(n.id), m = a.des.replace("eff1", o.eff1);
m = (m = m.replace("eff2", o.eff2)).replace("rate", a.rate + "%");
this.desc.string += m;
}
"" != n.stage && (this.desc.string += "【" + G.VAL.LEV[n.stage - 1] + "】可使用。");
G.showCost(this.coin, G.user.coin, n.pri);
for (var r, s = i(this.list.children); !(r = s()).done; ) r.value.getComponent("bagItem").showSel(t);
},
buyObj: function() {
var t = this, e = G.getConf(G.objConf, this.selId);
if (G.user.coin >= e.pri) if (G.r_item(this.selId + "|1")) {
G.user.coin -= e.pri;
G.showCost(this.coin, G.user.coin, e.pri);
G.save();
G.showTips("购买成功");
} else {
var i = "" == e.unique ? 1 : e.unique;
G.showTips("该物品最多持有" + i + "件");
} else G.noCoinTips(function() {
var e = G.getConf(G.objConf, t.selId);
G.showCost(t.coin, G.user.coin, e.pri);
});
},
adBuyObj: function() {
G.r_item(this.selId + "|1");
G.save();
G.showTips("获取成功");
},
updateTime: function() {
this.adCount.string = "本轮已观看广告次数：<color=#3971FF>" + G.user.adTimes + "/" + G.VAL.MAX_AD[0] + "</c>";
this.adSkip.string = "本轮免广告卷数量：<color=#16B334>" + G.user.adSkip + "</c>";
if (G.user.shopFree < 1) {
var t = G.VAL.SHOP_TIME - (G.getNowSec() - G.user.shopTime);
if (t > 0) this.time.string = "刷新冷却 " + G.getTime(t).ms; else {
G.user.shopTime = G.getNowSec();
G.user.shopFree = 1;
G.save();
this.updateFree();
}
}
},
getCoin: function() {
var t = G.getAdConf();
G.user.coin += t.money;
G.showTips("获得" + t.money + "灵石");
var e = G.getConf(G.objConf, this.selId);
G.showCost(this.coin, G.user.coin, e.pri);
G.save();
},
update: function(t) {
if (G.temp.gameStart) {
this.timeOut += t;
if (this.timeOut >= 1) {
this.timeOut = 0;
this.updateTime();
}
}
}
});
cc._RF.pop();
}, {} ],
skillItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "23b33jUXklMp55H7/zoAU+t", "skillItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
rar: cc.Label,
desc: cc.Label,
buff: cc.Label,
sel: cc.Node,
skillId: {
default: 0,
visible: !1
}
},
onLoad: function() {},
setSkill: function(t, e) {
var i = this;
void 0 === e && (e = !1);
this.skillId = t;
var n = G.getConf(G.skillConf, t);
this.title.string = n.title;
this.desc.string = n.desc;
this.title.string = n.title;
this.rar.string = [ "玄级", "地级", "天级" ][n.rar];
this.rar.node.color = cc.color([ "#4169E1", "#6A5ACD", "#FF4500" ][n.rar]);
this.sel.active = e;
e || G.setBup(this.node, function() {
i.setSel(i.skillId);
});
var a = [];
for (var o in G.VAL.KEY_TITLE) if (n[o] && "" != n[o]) {
var m = Number(n[o]), r = m > 0 ? "+" : "", s = "";
"hp" != o && "at" != o && "df" != o && "mp" != o || (s = "%");
a.push(G.VAL.KEY_TITLE[o] + r + m + s);
}
this.buff.node.active = a.length > 0;
this.buff.string = a.join("  ");
},
setSel: function(t) {
if (t == this.skillId) {
if (this.sel.active) {
var e = G.user.skill.indexOf(this.skillId);
G.user.skill.splice(e, 1);
this.sel.active = !1;
} else if (G.user.skill.length < G.temp.maxSkill) {
if (-1 == G.user.skill.indexOf(this.skillId)) {
G.user.skill.push(this.skillId);
this.sel.active = !0;
}
} else G.showTips("最多选择" + G.temp.maxSkill + "个天赋");
G.getNode("Canvas/dataBox", "dataBox").js.updateCount();
}
}
});
cc._RF.pop();
}, {} ],
stateBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "dea5ch2aeFB9YAMMQZYG1xm", "stateBox");
cc.Class({
extends: cc.Component,
properties: {
own: cc.Label,
lev: cc.Label,
manImg: cc.Node,
girlImg: cc.Node,
roleName: cc.Label,
dataBox: cc.Node,
red0: cc.Node,
red1: cc.Node,
firstGiftBox: cc.Node,
homeLock: cc.Node,
rankLock: cc.Node,
timeOut: {
default: 0,
visible: !1
},
relife: {
default: !1,
visible: !1
}
},
onLoad: function() {
this.updateState();
},
showRole: function() {
this.manImg.active = 1 == G.user.sex;
this.girlImg.active = 0 == G.user.sex;
this.roleName.string = G.user.name;
},
updateState: function() {
if (!this.dataBox.active) {
if (this.own) if ("" != G.user.home.name) {
this.own.string = G.user.home.name;
this.own.node.color = cc.color("#FED056");
} else if (-1 != G.user.own) {
var t = G.getConf(G.ownConf, G.user.own);
this.own.string = t.name;
this.own.node.color = cc.color("#FED056");
} else {
this.own.string = "无宗门";
this.own.node.color = cc.color("#dddddd");
}
var e = G.levConf[G.user.lev - 1];
this.lev.string = e.stage_name + e.step_name;
var i = [ "寿元", "家世", "灵石", "根骨", "悟性", "运气" ], n = [ Math.max(0, G.user.age - G.user.year), G.user.data[3], G.getNum(G.user.coin), G.user.data[0], G.user.data[1], G.user.data[2] ], a = this.node.children;
for (var o in a) a[o].getChildByName("font").getComponent(cc.Label).string = i[o] + "：" + n[o];
a[0].getChildByName("font").color = n[0] < 10 ? cc.color("#ff0000") : cc.color("#000000");
this.red0.active = G.user.exp >= e.exp;
this.showRole();
var m = G.getItem("xx_first_auto");
17 != G.user.year || m || (this.firstGiftBox.active = !0);
this.rankLock.active = e.stage < 2;
this.homeLock.active = e.stage < 4;
}
},
updateBagRed: function() {},
update: function(t) {
if (G.temp.gameStart) {
this.timeOut += t;
if (this.timeOut >= .5) {
this.timeOut = 0;
this.updateState();
}
}
}
});
cc._RF.pop();
}, {} ],
taskItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "42328WK6DRC5ImGElBDExiE", "taskItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
lev: cc.Label,
desc: cc.RichText,
gift: cc.Label,
rate: cc.Label,
time: cc.Label,
getBup: cc.Node,
manBup: cc.Node,
mImg: cc.Node,
mName: cc.Label,
mLev: cc.Label,
id: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.getBup, function() {
t.getGift();
});
G.setBup(this.manBup, function() {
t.setMan();
});
},
showInfo: function(t) {
this.id = t;
var e = G.user.home.task["_" + t], i = G.getConf(G._18Conf, t);
this.title.string = "【" + i.name + "】";
var n = G.levConf[i.lvp - 1];
this.lev.string = "弟子等级要求：" + n.stage_name + n.step_name;
var a = "$" + i.desc.split("$")[1] + "$", o = "<color=#4169E1>" + e.attr + "</>";
this.desc.string = i.desc.replace(a, o);
if (e.coin > 0) this.gift.string = "奖励：灵石 x" + e.coin; else {
var m = G.getConf(G.objConf, e.item[0]);
this.gift.string = "奖励：" + m.name + " x" + e.item[1];
}
if ("" != i.pupil) {
this.rate.string = "招新：" + i.pupil + "%";
this.rate.node.active = !0;
}
this.updateMan();
this.updateTime();
},
setMan: function() {
if (this.mImg.active) G.showTips("任务进行中"); else {
G.temp.taskId = this.id;
G.getNode("Canvas/homeBox/box/typeBox", "typeBox").js.showType(1);
G.getNode("Canvas/homeBox/box/view1", "homeView1").js.showViewType(1);
}
},
getGift: function() {
var t = G.user.home.task["_" + this.id];
t.coin > 0 ? G.user.coin += t.coin : G.r_item(t.item[0] + "|" + t.item[1]);
var e = G.getConf(G._18Conf, this.id), i = !1;
if ("" != e.pupil && G._.random(1, 100) <= e.pupil) {
var n = G.getConf(G._17Conf, G.user.home.lev, "lvc");
if (G._.size(G.user.home.man) < n.num_p) {
i = !0;
G.addMan();
}
}
var a = i ? "领取成功，新增1名弟子" : "领取成功";
G.showTips(a);
delete G.user.home.task["_" + this.id];
G.getNode("Canvas/homeBox/box/view2", "homeView2").js.updateCount();
G.save();
this.node.destroy();
},
updateMan: function() {
var t = G.user.home.task["_" + this.id];
if (-1 != t.manId) {
var e = G.user.home.man[t.manId];
G.setLogo(this.mImg, "role/", "role", "image" + e.img);
this.mName.string = e.name;
var i = G.levConf[e.lev - 1];
this.mLev.string = i.stage_name + i.step_name;
this.mLev.node.active = !0;
} else {
this.mImg.active = !1;
this.mName.string = "未指派";
this.mLev.node.active = !1;
}
},
updateTime: function() {
var t = G.user.home.task["_" + this.id], e = 0;
t.start > 0 && (e = t.time - (G.getNowSec() - t.start));
this.time.string = "时间：" + G.getTime(e).hms;
this.getBup.active = t.start > 0 && e < 1;
}
});
cc._RF.pop();
}, {} ],
tipsBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "b729dgYruxAhrVcNsz2/ilB", "tipsBox");
cc.Class({
extends: cc.Component,
properties: {
font: cc.Label
},
onLoad: function() {},
showTips: function(t, e) {
var i = this;
this.node.stopAllActions();
this.font.string = t;
var n = cc.moveTo(.6, cc.v2(0, 200)), a = cc.sequence(n, cc.delayTime(1), cc.callFunc(function() {
i.node.y = 0;
i.node.active = !1;
e && e();
}));
this.node.y = 0;
this.node.active = !0;
this.node.runAction(a);
}
});
cc._RF.pop();
}, {} ],
titleBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "c4b283eZLZKTJVWLLPPN7Oz", "titleBox");
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
item: cc.Prefab,
list: cc.Node,
count: cc.Label,
tips: cc.Node,
type: 0
},
onLoad: function() {
G.temp.tList = [];
},
onEnable: function() {
1 == this.type && G.showBanner();
this.showList();
},
onDisable: function() {
G.closeBanner();
},
showList: function() {
this.list.removeAllChildren();
var t = 0 == this.type ? G.userTitle() : G.user.title;
0 == this.type ? G.temp.tList = t : G.temp.tList = [];
for (var e, n = i(t); !(e = n()).done; ) {
var a = e.value, o = cc.instantiate(this.item);
o.parent = this.list;
o.getComponent("titleItem").showInfo(a, this.type > 0);
}
this.count && (this.count.string = "数量：" + G.user.title.length + "/" + G.titleConf.length);
if (0 == this.type) {
this.tips && (this.tips.active = t.length < 1);
G.user.title = [];
}
}
});
cc._RF.pop();
}, {} ],
titleItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "e4bdeN6KaFDVJRVPq+atH4s", "titleItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
rar: cc.Label,
desc: cc.Label,
buff: cc.Label,
sel: cc.Node,
skillId: {
default: 0,
visible: !1
}
},
onLoad: function() {},
showInfo: function(t, e) {
var i = this;
void 0 === e && (e = !1);
this.skillId = t;
var n = G.getConf(G.titleConf, t);
this.title.string = n.title;
this.desc.string = n.desc;
this.title.string = n.title;
this.rar.string = [ "玄级", "地级", "天级" ][n.rar];
this.rar.node.color = cc.color([ "#4169E1", "#6A5ACD", "#FF4500" ][n.rar]);
this.sel.active = e;
e || G.setBup(this.node, function() {
i.setSel(i.skillId);
});
var a = [];
for (var o in G.VAL.KEY_TITLE) if (n[o] && "" != n[o]) {
var m = Number(n[o]), r = m > 0 ? "+" : "", s = "";
"hp" != o && "at" != o && "df" != o && "mp" != o || (s = "%");
a.push(G.VAL.KEY_TITLE[o] + r + m + s);
}
this.buff.node.active = a.length > 0;
this.buff.string = a.join("  ");
},
setSel: function(t) {
if (t == this.skillId) {
if (this.sel.active) {
var e = G.user.title.indexOf(this.skillId);
G.user.title.splice(e, 1);
this.sel.active = !1;
} else if (G.user.title.length < 2) {
if (-1 == G.user.title.indexOf(this.skillId)) {
G.user.title.push(this.skillId);
this.sel.active = !0;
}
} else G.showTips("最多选择2个");
G.getNode("Canvas/dataBox", "dataBox").js.updateCount();
}
}
});
cc._RF.pop();
}, {} ],
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
}, {} ],
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
}, {} ],
ttGiftBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "a632cSq9LlE3LU8m8LnNVzu", "ttGiftBox");
cc.Class({
extends: cc.Component,
properties: {
toBup: cc.Node,
getBup: cc.Node,
state: cc.Node,
tt0: cc.Node,
tt1: cc.Node,
tt2: cc.Node,
tt3: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.toBup, function() {
t.toSideBar();
});
G.setBup(this.getBup, function() {
t.getGift();
});
this.tt0.active = 0 == G.fromVer;
this.tt1.active = 1 == G.fromVer;
this.tt2.active = 2 == G.fromVer;
this.tt3.active = 3 == G.fromVer;
},
onEnable: function() {
var t = G.getItem("tt_from");
console.log("launch_from", t);
if ("homepage" == t) {
this.toBup.active = !1;
this.getBup.active = !0;
}
var e = G.getItem("xx_tt_gift");
this.state.active = e == G.getNow();
if (this.state.active) {
this.toBup.active = !1;
this.getBup.active = !1;
}
},
getGift: function() {
if (G.getItem("xx_tt_gift") != G.getNow()) {
G.user.adSkip++;
G.save();
G.setItem("xx_tt_gift", G.getNow());
G.showMsg("获得免广告券1张");
} else G.showTips("本日奖励已领取");
this.node.active = !1;
},
toSideBar: function() {
this.node.active = !1;
tt.navigateToScene({
scene: "sidebar",
success: function() {
console.log("navigate to scene success");
},
fail: function(t) {
console.log("navigate to scene fail: ", t);
}
});
}
});
cc._RF.pop();
}, {} ],
ttJs: [ function(t, e) {
"use strict";
cc._RF.push(e, "46016K8TyxNWIV1KABhZ8Ba", "ttJs");
cc.Class({
extends: cc.Component,
properties: {
giftBup: cc.Node,
recorderBup: cc.Node,
recorderFont: cc.Label,
recorder0: cc.Node,
recorder1: cc.Node,
ttGiftBox: cc.Node,
timeOut: {
default: 0,
visible: !1
},
checkTime: {
default: 0,
visible: !1
},
checkTime1: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.giftBup, function() {
t.ttGiftBox.active = !0;
});
G.setBup(this.recorderBup, function() {
if (t.recorder0.active) {
t.timeOut = 0;
t.startRecorder();
} else t.stopRecorder();
});
this.ttInit();
},
onDestroy: function() {
G.ttAd.stopRecorder();
},
ttInit: function() {
this.giftBup.active = !1;
this.recorderBup.active = "tt" == G.from && "Android" == cc.sys.os && G.ttAd.recorderIsOk();
this.checkScene();
},
checkScene: function() {
var t = this;
"tt" == G.from && tt.checkScene({
scene: "sidebar",
success: function(e) {
console.log("check scene success: ", e);
t.giftBup.active = !0;
},
fail: function(t) {
console.log("check scene fail:", t);
}
});
},
checkSideBack: function() {
if (!G.temp.ttSideBack) if ("homepage" == G.getItem("tt_from")) {
G.temp.ttSideBack = !0;
this.ttGiftBox.active = !0;
} else G.getItem("xx_tt_gift") == G.getNow() && (G.temp.ttSideBack = !0);
},
startRecorder: function(t) {
var e = this;
void 0 === t && (t = 300);
this.recorder0.active = !1;
this.recorder1.active = !0;
G.ttAd.startRecorder(function() {
e.timeCount = t;
e.recorderFont.string = "录屏中";
G.showTips("录屏开始!");
}, function() {
e.timeCount = 0;
e.recorder0.active = !0;
e.recorder1.active = !1;
e.recorderFont.string = "录屏";
G.showTips("录屏异常，请稍后再试!");
}, t);
},
stopRecorder: function() {
this.timeCount = 0;
this.recorderFont.string = "录屏";
this.recorder0.active = !0;
this.recorder1.active = !1;
G.ttAd.stopRecorder(function() {
var t = G.getMsgBox();
t.showMsg("录屏结束，是否分享精彩视频？", function() {
setTimeout(function() {
G.ttAd.recordShare(function() {
G.showTips("分享成功");
}, function() {
G.showTips("分享失败");
});
}, .5);
});
t.showCancel(!0);
});
},
update: function(t) {
if ("tt" == G.from && this.timeCount > 0) {
this.timeCount -= t;
this.timeCount <= 0 && this.stopRecorder();
}
if ("tt" == G.from && !this.recorderBup.active) {
this.checkTime += t;
if (this.checkTime > 1) {
this.checkTime = 0;
this.recorderBup.active = "Android" == cc.sys.os && G.ttAd.recorderIsOk();
}
}
if ("tt" == G.from) {
this.checkTime1 += t;
if (this.checkTime1 > 1) {
this.checkTime1 = 0;
this.checkSideBack();
}
}
}
});
cc._RF.pop();
}, {} ],
txtBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "77262JZAr9NartZEiz9Xkk1", "txtBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list0: cc.Node,
list1: cc.Node,
scView0: cc.ScrollView,
scView1: cc.ScrollView,
timeId: {
default: 0,
visible: !1
}
},
onLoad: function() {
this.list0.parent.active = !0;
this.list1.parent.active = !1;
},
initStory: function() {
if (G.user.sid < 1) {
G.user.sid = 1e7;
G.user.step = 0;
G.getStory(G.user.sid);
} else G.getStory(G.user.sid, !1);
},
addTxt: function(t, e, i) {
void 0 === i && (i = !1);
var n = -1 == G.temp.fbId ? this.list0 : this.list1, a = -1 == G.temp.fbId ? this.scView0 : this.scView1, o = n.children, m = null;
o.length > 0 && (m = o[o.length - 1].getComponent("txtItem"));
-1 == G.temp.fbId && (G.temp.ageFlag || i) && m && m.setSide();
m && m.endClick();
if ("" != t) {
var r = cc.instantiate(this.item);
r.getComponent("txtItem").showTxt(t, e);
r.parent = n;
if (-1 == G.temp.fbId) {
var s = this.list0.children;
s.length > 10 && s[0].destroy();
}
clearTimeout(this.timeId);
this.timeId = setTimeout(function() {
a.scrollToBottom(.5);
}, 200);
}
},
toFb: function() {
G.save();
this.list1.removeAllChildren();
this.list0.parent.active = !1;
this.list1.parent.active = !0;
G.temp.fbStep = 0;
G.getFbStory();
},
quitFb: function() {
this.list0.parent.active = !0;
this.list1.parent.active = !1;
G.setOpType(1);
G.temp.fbId = -1;
G.temp.fbStep = 0;
}
});
cc._RF.pop();
}, {} ],
txtItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "efe95oDWvROp5Zb5+rlrljH", "txtItem");
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
font: cc.RichText,
res: cc.Label,
action: {
default: "",
visible: !1
}
},
onLoad: function() {
this.font.maxWidth = 640 * G.VAL.SCALE;
this.res.node.width = 640 * G.VAL.SCALE;
},
showTxt: function(t, e) {
void 0 === e && (e = "end");
this.action = e;
t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(new RegExp("RED", "g"), "color=" + G.VAL.T_COLOR.RED)).replace(new RegExp("YEL", "g"), "color=" + G.VAL.T_COLOR.YEL)).replace(new RegExp("PNK", "g"), "color=" + G.VAL.T_COLOR.PNK)).replace(new RegExp("BLU", "g"), "color=" + G.VAL.T_COLOR.BLU)).replace(new RegExp("CYN", "g"), "color=" + G.VAL.T_COLOR.CYN)).replace(new RegExp("GRN", "g"), "color=" + G.VAL.T_COLOR.GRN)).replace(new RegExp("GRY", "g"), "color=" + G.VAL.T_COLOR.GRY)).replace(new RegExp("BLK", "g"), "color=" + G.VAL.T_COLOR.BLK)).replace(new RegExp("EGG", "g"), "color=" + G.VAL.T_COLOR.EGG);
var n = new RegExp("<[0-9]>|<[1-9][0-9]>|<[1-9][0-9][0-9]>|<[1-9][0-9][0-9][0-9]>|<[1-9][0-9][0-9][0-9][0-9]>|<[1-9][0-9][0-9][0-9][0-9][0-9]>", "g"), a = t.match(n);
if (a && a.length > 0) for (var o, m = i(a); !(o = m()).done; ) {
var r = o.value, s = r.replace("<", "").replace(">", "");
t = t.replace(r, "<on click='click' param='" + s + "'>");
}
t = (t = (t = t.replace(/\$S/g, G.user.name_s)).replace(/\$N/g, G.user.name_n)).replace(/\$C/g, G.user.home.name);
if ("" == G.temp.manName[0] || "" == G.temp.manName[1]) {
var l = G.getRandMan(2);
if (l.length > 1) {
G.temp.manName[0] = l[0].name;
G.temp.manName[1] = l[1].name;
}
}
t = (t = t.replace(/\$P1/g, G.temp.manName[0])).replace(/\$P2/g, G.temp.manName[1]);
var p = G.preAddMan();
if (-1 != (t = t.replace(/#pupil#/g, p.name)).indexOf("$")) {
var d = t.split("$");
for (var c in d) if (!isNaN(Number(d[c]))) {
var u = G.getTaskItem(Number(d[c]));
if (u) {
if (1 == u.type) d[c] = u.txt; else if (2 == u.type) {
var y = G.getConf(G.objConf, u.item);
d[c] = y.name;
} else if (3 == u.type) {
var f = G.getConf(G.guaiConf, u.monster);
d[c] = f.name;
}
} else d[c] = "未知";
}
t = d.join("");
}
if (-1 == G.temp.fbId) {
var x = 0 != G.temp.fight[0] ? G.temp.fight[1] : G.user.step;
if ("" != t) {
var h = G.temp.ageFlag ? "【" + G.user.year + "岁】" : "";
G.temp.ageFlag = !1;
0 == x && (G.temp.txtId = 1);
var g = [ "end", "dead", "finish" ].indexOf(e);
if ("home" == e) G.temp.txtId = 1; else if ("vedioEnd" == e) {
G.temp.txtId = 2;
G.setLogo(this.node, "img/", "img", "img_51");
} else if (-1 != [ "vedio", "dan", "tp" ].indexOf(e)) {
G.temp.txtId = 1;
G.setLogo(this.node, "img/", "img", "img_53");
} else if (0 == x && -1 != g) G.temp.txtId = 1; else if (0 == x && 0 != G.temp.fight[0]) G.setLogo(this.node, "img/", "img", "img_53"); else if ("" != h && -1 != g) G.temp.txtId = 1; else if ("" != h && -1 == g) {
G.temp.txtId = 1;
G.setLogo(this.node, "img/", "img", "img_53");
} else if (0 != x && "" == h && -1 == g) {
G.temp.txtId++;
G.setLogo(this.node, "img/", "img", "img_52");
} else if (0 != x && "" == h && -1 != g) {
G.temp.txtId++;
G.setLogo(this.node, "img/", "img", "img_51");
}
this.font.string = h + t;
this.font.node.active = !0;
}
} else if ("" != t) {
this.font.string = t;
this.font.node.active = !0;
}
G.temp.res = G.temp.res.concat(G.temp.drop);
if (G.temp.res.length > 0) {
this.res.node.active = !0;
this.res.string = G.temp.res.join("  ");
G.temp.res = [];
G.temp.drop = [];
}
var v = cc.fadeIn(.8);
this.node.runAction(v);
},
setSide: function() {
G.temp.txtId <= 1 || "home" == this.action ? G.setLogo(this.node, "img/", "img", "img_25") : G.setLogo(this.node, "img/", "img", "img_51");
},
endClick: function() {
this.font.node.getComponent("fontClick").endClick();
}
});
cc._RF.pop();
}, {} ],
typeBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "e9c37yJtapE8ZvbTX1hB2AD", "typeBox");
cc.Class({
extends: cc.Component,
properties: {
showList: {
default: null,
visible: !1
},
cb: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this, e = this.node.children, i = function(i) {
G.setBup(e[i], function() {
-1 == G.temp.bagType && t.showType(Number(i));
});
};
for (var n in e) i(n);
},
setCb: function(t, e) {
this.cb = t;
var i = this.node.children;
if (e) this.showList = e; else {
this.showList = [];
for (var n in i) this.showList.push(Number(n));
}
},
showType: function(t) {
var e = this.node.children;
for (var i in e) {
e[i].active = -1 != this.showList.indexOf(Number(i));
e[i].active && (e[i].getChildByName("sel").active = i == t);
}
-1 != this.showList.indexOf(Number(t)) && this.cb && this.cb(t);
},
showOne: function(t) {
var e = this.node.children;
for (var i in e) {
e[i].active = i == t;
i == t && (e[i].getChildByName("sel").active = !0);
}
this.cb && this.cb(t);
}
});
cc._RF.pop();
}, {} ],
ugcBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "3a0b6MM0PlDgqaI9EDCk2ue", "ugcBox");
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
item0: cc.Prefab,
item1: cc.Prefab,
item2: cc.Prefab,
title: cc.Label,
scView: cc.ScrollView,
list: cc.Node,
addBup: cc.Node,
quitBup: cc.Node,
clrBup: cc.Node,
saveBup: cc.Node,
typeBar: cc.Node,
toggle: cc.ToggleContainer,
typeFont0: cc.Label,
typeFont1: cc.Label,
typeFont2: cc.Label,
uName: cc.EditBox,
help0: cc.Node,
help1: cc.Node,
help2: cc.Node,
ugc: [ cc.Node ],
addType: {
default: 0,
visible: !1
},
count: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.addBup, function() {
t.addItem();
});
G.setBup(this.clrBup, function() {
t.clrAll();
});
G.setBup(this.saveBup, function() {
t.saveUgc();
});
G.setBup(this.help0, function() {
t.showHelp(0);
});
G.setBup(this.help1, function() {
t.showHelp(1);
});
G.setBup(this.help2, function() {
t.showHelp(2);
});
},
onEnable: function() {
var t = G.getItem("xx_name");
t && (this.uName.string = t);
},
showUgc: function() {
this.title.string = G.temp.editInfo.title;
for (var t, e = i(this.list.children); !(t = e()).done; ) {
var n = t.value;
"typeBar" != n.name ? n.destroy() : n.active = !0;
}
this.count = G._.assign([], G.VAL.UGC_MAX);
this.showCount();
this.addType = 0;
this.toggle.toggleItems[0].isChecked = !0;
this.addItem();
this.clrBup.active = !0;
this.saveBup.active = !0;
this.node.active = !0;
},
selType: function(t) {
this.addType = Number(t.node.name.split("_")[1]);
},
addItem: function() {
var t = this;
if (this.count[this.addType] < 1) G.showTips("已达类型上限"); else {
var e = null;
0 == this.addType ? e = cc.instantiate(this.item0) : 1 == this.addType ? e = cc.instantiate(this.item1) : 2 == this.addType && (e = cc.instantiate(this.item2));
e.parent = this.list;
this.count[this.addType]--;
this.showCount();
this.typeBar.zIndex = 100;
this.scheduleOnce(function() {
t.scView.scrollToBottom(.1);
}, .5);
}
},
saveUgc: function() {
var t = this;
if ("" != this.uName.string) {
for (var e, n = [], a = i(this.list.children); !(e = a()).done; ) for (var o = e.value, m = 0; m < 3; m++) {
var r = o.getComponent("editItem" + m);
r && n.push(r.getData());
}
for (var s = 0, l = n; s < l.length; s++) {
var p = l[s];
for (var d in p) if ("" === p[d]) {
G.showTips("请完整填写内容，不要留空");
return;
}
}
if (n.length < 1) G.showTips("请填写至少一项内容"); else {
G.setItem("xx_name", this.uName.string);
G.myHttp(G.URL.FB_ADD, {
fb: G.temp.editInfo.id,
name: G.enGbkStr(this.uName.string),
txt: n
}, function(e) {
if (0 == e.errno) {
G.showTips("投稿成功");
G.myHttp(G.URL.FB_LIST, {}, function(t) {
0 == t.errno && (G.temp.ugcList = t.record);
});
t.getCoin();
t.node.active = !1;
} else G.showTips(e.errMsg);
});
}
} else G.showTips("请输入玩家昵称");
},
getCoin: function() {
var t = G.getAdConf(), e = Math.ceil(t.money / 2);
G.user.coin += e;
G.save();
G.showTips("获得" + G.getNum(e) + "灵石");
},
clrAll: function() {
var t = this, e = G.getMsgBox();
e.showMsg("是否清空所有内容？", function() {
t.count = G._.assign([], G.VAL.UGC_MAX);
t.showCount();
for (var e, n = i(t.list.children); !(e = n()).done; ) {
var a = e.value;
"typeBar" != a.name && a.destroy();
}
});
e.showCancel(!0);
},
showCount: function() {
this.typeFont0.string = "文本（" + this.count[0] + "/" + G.VAL.UGC_MAX[0] + "）";
this.typeFont1.string = "选项（" + this.count[1] + "/" + G.VAL.UGC_MAX[1] + "）";
this.typeFont2.string = "战斗（" + this.count[2] + "/" + G.VAL.UGC_MAX[2] + "）";
},
updateCount: function(t) {
var e = G.VAL.UGC_MAX;
this.count[t] = Math.min(e[t], this.count[t] + 1);
this.showCount();
},
loadRecord: function(t) {
this.clrBup.active = !1;
this.saveBup.active = !1;
var e = G.getConf(G.temp.editList, t.fb);
this.title.string = e ? e.title : "未知";
for (var n, a = i(this.list.children); !(n = a()).done; ) {
var o = n.value;
"typeBar" != o.name ? o.destroy() : o.active = !1;
}
for (var m, r = i(JSON.parse(t.json)); !(m = r()).done; ) {
var s = m.value, l = null;
0 == s.type ? (l = cc.instantiate(this.item0)).getComponent("editItem0").showData(s) : 1 == s.type ? (l = cc.instantiate(this.item1)).getComponent("editItem1").showData(s) : 2 == s.type && (l = cc.instantiate(this.item2)).getComponent("editItem2").showData(s);
l.parent = this.list;
}
this.node.active = !0;
},
showHelp: function(t) {
for (var e in this.ugc) this.ugc[e].active = e == t;
this.ugc[t].parent.active = !0;
}
});
cc._RF.pop();
}, {} ],
ugcItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "56debM3JdpJ6bexuZ3pWXDA", "ugcItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
good: cc.Label,
bad: cc.Label,
state: cc.Label,
info: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.loadRecord(t.info);
e.stopPropagation();
});
},
showInfo: function(t) {
this.info = t;
var e = G.getConf(G.temp.editList, t.fb);
this.title.string = e.title;
var i = t.point.split(",");
this.good.string = "点赞" + i[0];
this.bad.string = "点踩" + i[1];
this.state.string = 0 == t.state ? "审核中" : "已通过";
this.state.node.color = 0 == t.state ? cc.color("#FEBF32") : cc.color("#B7EB94");
}
});
cc._RF.pop();
}, {} ],
userAgreeBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "037ffpDLHxA9o4ZG9DYPStv", "userAgreeBox");
cc.Class({
extends: cc.Component,
properties: {
yesBup: cc.Node,
noBup: cc.Node,
viewBup0: cc.Node,
viewBup1: cc.Node,
viewBox0: cc.Node,
viewBox1: cc.Node,
wv0: cc.WebView,
wv1: cc.WebView,
quit0: cc.Node,
quit1: cc.Node,
url0: {
default: null,
visible: !1
},
url1: {
default: null,
visible: !1
},
quitFlag: !1
},
onLoad: function() {
var t = this;
G.setBup(this.viewBup0, function() {
t.viewBox0.active = !0;
t.viewBox1.active = !1;
});
G.setBup(this.viewBup1, function() {
t.viewBox0.active = !1;
t.viewBox1.active = !0;
});
G.setBup(this.yesBup, function() {
t.yes();
});
G.setBup(this.noBup, function() {
t.no();
});
G.setBup(this.quit0, function() {
t.viewBox0.active = !1;
t.quitFlag && (t.node.active = !1);
});
G.setBup(this.quit1, function() {
t.viewBox1.active = !1;
t.quitFlag && (t.node.active = !1);
});
var e = "apk_hw" == G.from ? "apk_hw_" + G.fromVer : G.from;
this.wv0.url = {
apk_vivo: "https://docs.qq.com/doc/DYnZleVp5cHprZVRY",
vivo: "https://docs.qq.com/doc/DYnZleVp5cHprZVRY",
apk_mi: "https://docs.qq.com/doc/DYnZleVp5cHprZVRY",
apk_hw_0: "https://docs.qq.com/doc/DYnZleVp5cHprZVRY",
apk_hw_1: "https://protocol.cygame666.cn/agreement/hzy-agreement.html"
}[e];
this.wv1.url = {
apk_vivo: "https://docs.qq.com/doc/DYkFhaWRpelBucnJM",
vivo: "https://docs.qq.com/doc/DYmljYm5HdUhCY1Ru",
apk_mi: "https://docs.qq.com/doc/DYllCZm1uZEpoUVpJ",
apk_hw_0: "https://docs.qq.com/doc/DYlJ4QW9ybGdPRUFl",
apk_hw_1: "https://protocol.cygame666.cn/privacy/hzy-privacy.html"
}[e];
},
yes: function() {
-1 != G.from.indexOf("apk") ? G.askAppLogin() : G.getNode("Canvas", "login").js.loadJson();
G.setItem("xx_tips", "ok");
G.save();
this.node.active = !1;
},
no: function() {
this.node.active = !1;
cc.game.end();
}
});
cc._RF.pop();
}, {} ],
userTips: [ function(t, e) {
"use strict";
cc._RF.push(e, "12523vzMUROXrfJkfmU6tuO", "userTips");
cc.Class({
extends: cc.Component,
properties: {
typeBup: [ cc.Node ],
view: [ cc.Node ],
bup0: cc.Node,
bup1: cc.Node,
wv: cc.WebView,
loadFlag: !1
},
onLoad: function() {
var t = this;
G.setBup(this.typeBup[0], function() {
t.showView(0);
});
G.setBup(this.typeBup[1], function() {
t.showView(1);
});
G.setBup(this.bup0, function() {
t.no();
});
G.setBup(this.bup1, function() {
t.yes();
});
},
showView: function(t) {
this.view[0].active = 0 == t;
this.view[1].active = 1 == t;
this.node.active = !0;
},
yes: function() {
G.askAppLogin();
G.setItem("xx_tips", "ok");
G.save();
this.node.active = !1;
},
no: function() {
cc.game.end();
}
});
cc._RF.pop();
}, {} ],
valConf: [ function(t, e) {
"use strict";
cc._RF.push(e, "a8fc04KRotH0rutez9I+ZRN", "valConf");
e.exports = {
DW: 750,
DH: 1334,
SW: 750,
SH: 1334,
SCALE: 1,
COLOR: {
_0: "#16B334",
_1: "#E33715",
_2: "#FEBF32",
_3: "#FF4500"
},
TITLE: [ "根 骨", "悟 性", "运 气", "家 世" ],
LEV: [ "练气期", "筑基期", "金丹期", "元婴期", "炼神期", "返虚期", "大乘期", "真仙", "金仙" ],
OBJ: {
_1: "功法书",
_2: "灵气丹药",
_3: "属性丹药",
_4: "破境丹药",
_5: "法宝",
_6: "特殊",
_7: "材料",
_8: "傀儡",
_11: "法术书",
_12: "回血丹药",
_13: "回蓝丹药",
_14: "驱散丹药",
_15: "加持丹药",
_16: "功法丹药",
_17: "法术丹药"
},
RAR: [ "未知", "黄级", "玄级", "地级", "天级" ],
R_COLOR: [ "#3D9140", "#3D9140", "#4169E1", "#6A5ACD", "#FF4500" ],
T_COLOR: {
RED: "#E3170D",
YEL: "#873324",
PNK: "#8A2BE2",
BLU: "#4169E1",
CYN: "#3190B7",
GRN: "#3D9140",
GRY: "#6A5ACD",
BLK: "#000000",
EGG: "#FF9912"
},
YEAR_SEC: 360,
YEAR_UNIT: [ 1, 2, 3, 5, 7, 10, 14, 20 ],
KEY_TITLE: {
cn: "根骨",
in: "悟性",
ly: "运气",
lf: "寿元",
money: "灵石",
hp: "气血",
at: "攻击",
df: "防御",
miss: "闪避",
crit: "暴击",
crit_hit: "暴伤"
},
SHOP_TIME: 180,
SHOP_FREE: 3,
MAKE_TIME: 180,
MAKE_FREE: 3,
AD_COIN: 1e3,
AD_EVENT_TIME: 180,
DAN_OFF: [ 5, 300 ],
FIGHT_CD: 5,
LIAN_TIME: 120,
CODE: [ "@#", 0, 0 ],
GIFT_0: [ 1024, 1e4, 133002, 151001 ],
GIFT_1: [ 6973, 212e3, 131001, 162003 ],
GIFT_2: [ 8756, 143001, 143002, 143003, 144001, 144002, 144003 ],
GIFT_3: [ 5821, 154001, 114001, 214e3, 134001, 162003 ],
GIFT_4: [ 3686, 162003, 162003, 162003 ],
GIFT_5: [ 1979, 1e5 ],
GIFT_6: [ 2084, 2e5 ],
CODE_LIST: [ 3523, 6826, 9084, 2145, 7709 ],
GF_GJ_TIME: 3600,
GF_GJ_EXP: 24,
FS_TYPE: {
dmg: "伤害",
heal: "治疗",
at: "攻击",
df: "防御",
miss: "闪避",
crit: "暴击",
crit_hit: "暴伤",
flee: "遁逃",
ghost: "鬼修"
},
FS_CD: 2,
MAX_PEI: 3,
EXP_GJ_TIME: 600,
DATA_POT: [ 20, 30 ],
COIN_TIME: 300,
SELL_PER: .25,
FREE_REFRESH: [ 2, 2 ],
TP_RATE: 5,
MAX_AD: [ 5, 1 ],
UGC: 2,
UGC_MAX: [ 3, 1, 1 ],
ROLE_IMG: [ [ 4, 9, 10, 11, 12, 13, 14, 15 ], [ 1, 2, 3, 5, 6, 7, 8 ] ],
MAN_EXP_COST: [ 1e3, 5e4 ],
RANK_TIME: 600,
RELIFT_POINT: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
WIN_POINT: 20,
POINT_COIN: 1e4,
EGG: {
MAN: {
"5_10_5_0": {
txt: "刘备，前世是三国时期蜀汉开国皇帝。",
gift: [ "111002|1", "131001|1" ]
},
"10_5_0_5": {
txt: "吕布，前世是三国武力第一人。",
gift: [ "151005|1", "111003|1" ]
},
"5_0_10_5": {
txt: "超人，前世是美国漫画史上第一个超级英雄。",
gift: [ "131002|1", "131005|1" ]
},
"2_8_2_8": {
txt: "关羽，上辈子是战神武帝。",
gift: [ "131005|2" ]
},
"3_7_3_7": {
txt: "钟馗，上一世，我很丑但我很厉害。",
gift: [ "111006|1", "131001|1" ]
},
"7_3_7_3": {
txt: "孙悟空，上一辈子我会七十二变。",
gift: [ "111002|1", "151008|1" ]
},
"9_1_1_9": {
txt: "钢铁侠，前世是穿着战甲的超级工程师。",
gift: [ "131006|1", "151006|1" ]
},
"4_6_5_5": {
txt: "荆轲，上一世我刺杀失败，这一世。。。。。。",
gift: [ "111003|1", "131005|1" ]
},
"6_4_5_5": {
txt: "美国队长，上辈子我吃了药水变强。",
gift: [ "131002|1", "151006|1" ]
},
"6_5_4_5": {
txt: "爱因斯坦，前期我脑袋最灵光。",
gift: [ "131003|2" ]
},
"10_0_0_10": {
txt: "蝙蝠侠，上一世，我很有钱。",
coin: 1e4
}
},
GIRL: {
"5_10_5_0": {
txt: "李白，前世是伟大的浪漫主义诗人。",
gift: [ "111002|1", "131003|1" ]
},
"10_5_0_5": {
txt: "老子，说话间带点道味。",
gift: [ "111002|1", "211003|1" ]
},
"5_0_10_5": {
txt: "李世民，上一世我是古代的“国民老板”，开创了繁荣稳定的唐朝。",
gift: [ "151005|1", "211000|1" ]
},
"2_8_2_8": {
txt: "武则天，上辈子我是古代“女强人”。",
gift: [ "151002|1", "211004|1" ]
},
"3_7_3_7": {
txt: "吕雉，上辈子是古代版的“智谋女神”。",
gift: [ "151004|1", "131003|1" ]
},
"7_3_7_3": {
txt: "陈圆圆，前世之我是清朝美女。",
gift: [ "151002|1", "111006|1" ]
},
"9_1_1_9": {
txt: "诸葛亮，上一世我料事如神。",
gift: [ "131003|1", "151009|1" ]
},
"4_6_5_5": {
txt: "曹操，上一世我含恨。。。。。。",
gift: [ "131005|1", "151005|1" ]
},
"6_4_5_5": {
txt: "黑寡妇，前世之我很美，但我很厉害系列。",
gift: [ "111003|1", "131005|1" ]
},
"6_5_4_5": {
txt: "貂蝉，上一世我很美。。。。。。",
gift: [ "111006|1" ],
coin: 5e3
},
"10_0_0_10": {
txt: "鲁训，上辈子我没有说过。",
gift: [ "131003|1", "111001|1" ]
}
}
}
};
cc._RF.pop();
}, {} ],
vedioSkillBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "96b0dnVEBBALrlZshLlKI8D", "vedioSkillBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Node,
dataBox: cc.Node,
bup: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
G.temp.maxSkill = 4;
t.node.active = !1;
});
},
showSkill: function(t) {
this.item.getComponent("skillItem").setSkill(t, !0);
this.node.active = !0;
}
});
cc._RF.pop();
}, {} ],
vivoAd: [ function(t, e) {
"use strict";
cc._RF.push(e, "150aaFH8RdLUbvpS8Ur09to", "vivoAd");
var i = null, n = null, a = null, o = 0, m = !0;
function r() {
if ("vivo" == G.from && null != i) {
i.destroy();
(i = qg.createBannerAd({
posId: "376ff09ef6c244949918ccbf0d14b1bf",
style: {}
})).onLoad(function() {
console.log("banner 重新加载成功111");
i.hide();
});
}
}
function s() {
if ("vivo" == G.from) {
var t = qg.createInterstitialAd({
posId: "9e7c9442e9684a64b86df6d9dab3e0b7"
});
t.onError(function(t) {
console.log("插屏广告加载失败", t);
});
t.show().then(function() {
console.log("插屏广告展示完成");
}).catch(function(t) {
console.log("插屏广告展示失败", JSON.stringify(t));
});
}
}
function l() {
"vivo" == G.from && null != a && a.load();
}
function p(t) {
if ("vivo" == G.from && null != i) try {
if (t) {
console.log("normal banner show");
i.show().then(function() {
console.log("banner广告展示完成");
}).catch(function(t) {
console.log("banner广告展示失败", JSON.stringify(t));
});
} else {
i.hide();
console.log("ad time:", G.temp.adTime);
if (G.temp.adTime > 60) {
G.temp.adTime = 0;
r();
}
}
} catch (t) {
console.log("vivo hide banner err:", t);
}
}
e.exports = {
createNativeNode: function(t) {
void 0 === t && (t = !1);
if (null == cc.find("Canvas/vivoNative")) {
console.log("native node create");
G.loadPrefab("prefab/vivoNative", function(e) {
var i = cc.instantiate(e);
i.name = "vivoNative";
i.parent = cc.find("Canvas");
t && i.getComponent("vivoNative").show(a, null);
});
}
},
setAdPos: function() {},
init: function() {
if ("vivo" == G.from) {
console.log("init vivo");
m = !0;
qg.getSystemInfo({
success: function(t) {
o = t.platformVersionCode;
console.log("平台版本号：" + o);
if (o >= 1101) {
(n = qg.createRewardedVideoAd({
posId: "e38d71f0cf8a4d108ab460d409f924d4"
})).onLoad(function() {
if (m) m = !1; else {
console.log("init vedio load");
n.show();
}
});
n.onError(function(t) {
G.showMsg("广告加载异常，请稍后再试!" + JSON.stringify(t));
});
}
},
fail: function(t) {
console.log(t);
G.showMsg("获取平台信息失败");
},
complete: function(t) {
console.log(t);
}
});
}
},
showInter: s,
showVedio: function(t, e) {
if ("h5" != G.form) if ("vivo" == G.from && null != n) {
cc.audioEngine.pause(G.temp.audioId);
t = t;
e = e;
n.offClose();
n.onClose(function(e) {
if (e && e.isEnded && t) {
G.freeAd();
t();
}
G.replayAudio();
});
n.load();
} else {
G.showMsg("广告加载异常，请稍后再试" + o);
null != e && null != e && e();
} else t();
},
onOffBanner: p,
loadNativeInter: l,
showNativeInter: function() {
if ("vivo" == G.from && null != a) {
var t = cc.find("Canvas/vivoNative");
t ? t.getComponent("vivoNative").showInter(a, null) : s();
}
},
showNativeInterBak: function() {
if ("vivo" == G.from && null != a) {
var t = cc.find("Canvas/vivoNative");
if (t) {
console.log("fuck1");
t.getComponent("vivoNative").showInterBak(a, null);
} else s();
}
},
hideNativeInter: function(t) {
void 0 === t && (t = !0);
if ("vivo" == G.from && null != a) {
l();
var e = cc.find("Canvas/vivoNative");
if (e) {
e.getChildByName("inter").active = !1;
e.getChildByName("interBak").active = !1;
}
}
},
setInterPos: function(t) {
void 0 === t && (t = 0);
if (1 == t) {
p(!0);
var e = cc.find("Canvas/vivoNative");
e && (e.getChildByName("inter").active = !1);
}
},
loadNativeIcon: function() {
G.from, 0;
},
showNativeIcon: function(t) {
var e = cc.find("Canvas/vivoNative");
if (e) {
console.log("native icon show");
t ? -1 != cc.director.getScene().name.indexOf("story_map") && e.getComponent("vivoNative").showIcon(null, null) : e.getComponent("vivoNative").hideIcon();
}
}
};
cc._RF.pop();
}, {} ],
winBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "ea1d0bU0atPva9NdOzLAm2e", "winBox");
cc.Class({
extends: cc.Component,
properties: {
bup: cc.Node,
box: cc.Node,
relifeFbBox: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
var e = !1;
if (G.user.isWin) for (var i in G.user.relifeFb) if (2 != (i = Number(i)) && 5 != i && G.user.relifeFb[i].length > 0) {
e = !0;
break;
}
if (e) {
t.relifeFbBox.active = !0;
t.node.active = !1;
} else cc.director.loadScene("login");
});
},
onEnable: function() {
G.playAudio("lev", 1);
G.user.point += G.VAL.WIN_POINT;
G.save();
var t = this.box.children;
for (var e in t) {
var i = cc.fadeIn(2), n = cc.sequence(cc.delayTime(1.2 * e), i);
t[e].runAction(n);
}
}
});
cc._RF.pop();
}, {} ],
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
}, {} ],
ylEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "c95e5/Bc8RDE4tNXuLvS4Mw", "ylEvent");
e.exports = {
ge: null,
adPos: "",
event: function(t, e) {
if ("tt" == G.from) {
console.log("引力上报事件开始：", t, e);
if ("plot" == t) {
var i = G.getItem("xx_yl_plot");
if (i) {
if ((i = Number(i)) > 100) return;
i++;
G.setItem("xx_yl_plot", i);
} else G.setItem("xx_yl_plot", 1);
}
G.yl.ge.track({
eventName: t,
properties: e,
time: new Date(),
onComplete: function(t) {
console.log("引力上报事件结果：", t);
}
});
}
}
};
cc._RF.pop();
}, {} ],
zfManItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "b80a36OHWVK3Z2++ICH51eg", "zfManItem");
cc.Class({
extends: cc.Component,
properties: {
mask: cc.Node,
img: cc.Node,
del: cc.Node,
title: cc.Label,
lev: cc.Label,
key: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.mask, function() {
t.key ? t.del.active = !0 : t.setMan();
});
G.setBup(this.del, function() {
t.delMan();
});
},
reset: function() {
this.img.active = !1;
this.title.node.active = !1;
this.lev.node.active = !1;
this.del.active = !1;
this.key = null;
},
showInfo: function(t) {
if (t) {
this.key = t;
var e = G.user.home.man[t];
this.title.string = e.name;
this.title.node.active = !0;
G.setLogo(this.img, "role/", "role", "image" + e.img);
var i = G.levConf[e.lev - 1];
this.lev.string = i.stage_name + i.step_name;
this.lev.node.active = !0;
} else this.reset();
},
delMan: function() {
var t = G.user.home.zf.indexOf(this.key);
G.user.home.zf.splice(t, 1);
this.reset();
G.save();
var e = G.getNode("Canvas/homeBox/box/view3", "homeView3");
e.js.showMan();
e.js.showFight();
},
setMan: function() {
G.getNode("Canvas/homeBox/box/typeBox", "typeBox").js.showType(1);
G.getNode("Canvas/homeBox/box/view1", "homeView1").js.showViewType(2);
}
});
cc._RF.pop();
}, {} ],
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