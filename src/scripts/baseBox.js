// Decrypted 1:1 module `baseBox` from assets/main/index.231ca.js
baseBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "327f9lXcyJG0aOy+zxOPVNM", "baseBox");
cc.Class({
extends: cc.Component,
properties: {
close: cc.Node,
closeFlag: !1,
bannerFlag: !0,
interFlag: !0
},
onLoad: function() {
var t = this;
if (this.close) {
this.close.active = this.closeFlag;
this.closeFlag && this.close.getComponent("bup").setCb(function() {
t.node.active = !1;
});
}
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
t.closeFlag || (t.node.active = !1);
e.stopPropagation();
});
},
onEnable: function() {
this.bannerFlag && G.showBanner(!0);
},
onDisable: function() {
this.bannerFlag && G.showBanner(!1);
}
});
cc._RF.pop();
}, {} ]
