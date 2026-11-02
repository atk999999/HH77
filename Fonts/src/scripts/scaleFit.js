// Decrypted 1:1 module `scaleFit` from assets/main/index.231ca.js
scaleFit: [ function(t, e) {
"use strict";
cc._RF.push(e, "a18e2nGiKVPAaUdDmRqqre1", "scaleFit");
cc.Class({
extends: cc.Component,
properties: {
sx: !0,
sy: !0,
type: 0
},
onLoad: function() {
if (0 == this.type) {
this.sx && (this.node.scaleX *= G.VAL.SCALE);
this.sy && (this.node.scaleY *= G.VAL.SCALE);
} else {
this.sx && (this.node.width *= G.VAL.SCALE);
this.sy && (this.node.height *= G.VAL.SCALE);
}
}
});
cc._RF.pop();
}, {} ]
