// Decrypted 1:1 module `apk_vivo` from assets/main/index.231ca.js
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
}, {} ]
