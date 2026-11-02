// Decrypted 1:1 module `coinBox` from assets/main/index.231ca.js
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
}, {} ]
