// Decrypted 1:1 module `retBox` from assets/main/index.231ca.js
retBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "e7a32BR5A9J3JmIQ6SqTIlC", "retBox");
cc.Class({
extends: cc.Component,
properties: {
win: cc.Node,
lose: cc.Node,
dead: cc.Node
},
showRet: function(t) {
this.win.active = 0 == t;
this.lose.active = 1 == t;
this.dead.active = 2 == t;
this.node.active = !0;
}
});
cc._RF.pop();
}, {} ]
