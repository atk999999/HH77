// Decrypted 1:1 module `acBox` from assets/main/index.231ca.js
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
}, {} ]
