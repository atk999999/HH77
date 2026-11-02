// Decrypted 1:1 module `userTips` from assets/main/index.231ca.js
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
}, {} ]
