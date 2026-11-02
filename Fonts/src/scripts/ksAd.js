// Decrypted 1:1 module `ksAd` from assets/main/index.231ca.js
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
} ]
