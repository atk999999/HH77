// Decrypted 1:1 module `firstGifeBox` from assets/main/index.231ca.js
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
}, {} ]
