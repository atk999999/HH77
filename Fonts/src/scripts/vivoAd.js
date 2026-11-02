// Decrypted 1:1 module `vivoAd` from assets/main/index.231ca.js
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
}, {} ]
