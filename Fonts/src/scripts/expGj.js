// Decrypted 1:1 module `expGj` from assets/main/index.231ca.js
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
}, {} ]
