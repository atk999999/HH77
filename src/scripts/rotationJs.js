// Decrypted 1:1 module `rotationJs` from assets/main/index.231ca.js
rotationJs: [ function(t, e) {
"use strict";
cc._RF.push(e, "d4188MykR5Hq6qIX834A+x7", "rotationJs");
cc.Class({
extends: cc.Component,
properties: {
t: .1,
r: 10
},
onLoad: function() {
var t = cc.rotateBy(this.t, this.r).repeatForever();
this.node.runAction(t);
}
});
cc._RF.pop();
}, {} ]
