// Decrypted 1:1 module `fontClick` from assets/main/index.231ca.js
fontClick: [ function(t, e) {
"use strict";
cc._RF.push(e, "73b71z/1VBK7Zi/S1PXcmRM", "fontClick");
cc.Class({
extends: cc.Component,
properties: {
canClick: {
default: !0,
visible: !1
},
pList: {
default: null,
visible: !1
}
},
onLoad: function() {
this.pList = [];
},
endClick: function() {
this.canClick = !1;
},
click: function(t, e) {
if (this.canClick && -1 == this.pList.indexOf(e)) {
this.pList.push(e);
G.getNode("Canvas/gameBox/opBox", "opBox").js.showSel(!1);
G.gj(!1);
G.setOpType(0);
G.setStep(Number(e));
G.nextStory();
}
}
});
cc._RF.pop();
}, {} ]
