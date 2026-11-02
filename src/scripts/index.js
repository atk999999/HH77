// Decrypted 1:1 module `index` from assets/main/index.231ca.js
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
}, {} ]
