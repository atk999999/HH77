// Decrypted 1:1 module `userAgreeBox` from assets/main/index.231ca.js
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
}, {} ]
