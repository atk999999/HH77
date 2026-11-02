// Decrypted 1:1 module `editItem1` from assets/main/index.231ca.js
editItem1: [ function(t, e) {
"use strict";
cc._RF.push(e, "4960aVZRDpHq7ayCd27ho4u", "editItem1");
cc.Class({
extends: cc.Component,
properties: {
del: cc.Node,
sel0: cc.EditBox,
desc0: cc.EditBox,
sel1: cc.EditBox,
desc1: cc.EditBox
},
onLoad: function() {
var t = this;
G.setBup(this.del, function() {
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.updateCount(1);
t.node.destroy();
});
},
showData: function(t) {
this.sel0.string = G.deGbkStr(t.sel0);
this.desc0.string = G.deGbkStr(t.desc0);
this.sel1.string = G.deGbkStr(t.sel1);
this.desc1.string = G.deGbkStr(t.desc1);
},
getData: function() {
return {
type: 1,
sel0: G.enGbkStr(this.sel0.string),
desc0: G.enGbkStr(this.desc0.string),
sel1: G.enGbkStr(this.sel1.string),
desc1: G.enGbkStr(this.desc1.string)
};
}
});
cc._RF.pop();
}, {} ]
