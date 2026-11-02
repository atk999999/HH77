// Decrypted 1:1 module `editItem0` from assets/main/index.231ca.js
editItem0: [ function(t, e) {
"use strict";
cc._RF.push(e, "47425ZB+Y5PbaDwYEZBeMyn", "editItem0");
cc.Class({
extends: cc.Component,
properties: {
del: cc.Node,
txt: cc.EditBox
},
onLoad: function() {
var t = this;
G.setBup(this.del, function() {
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.updateCount(0);
t.node.destroy();
});
},
showData: function(t) {
this.txt.string = G.deGbkStr(t.txt);
},
getData: function() {
return {
type: 0,
txt: G.enGbkStr(this.txt.string)
};
}
});
cc._RF.pop();
}, {} ]
