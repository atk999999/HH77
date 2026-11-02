// Decrypted 1:1 module `editItem2` from assets/main/index.231ca.js
editItem2: [ function(t, e) {
"use strict";
cc._RF.push(e, "acaf3KS6J9Pe5qWGC2DrEoL", "editItem2");
cc.Class({
extends: cc.Component,
properties: {
del: cc.Node,
guai: cc.EditBox,
win: cc.EditBox,
lose: cc.EditBox
},
onLoad: function() {
var t = this;
G.setBup(this.del, function() {
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.updateCount(2);
t.node.destroy();
});
},
showData: function(t) {
this.guai.string = G.deGbkStr(t.guai);
this.win.string = G.deGbkStr(t.win);
this.lose.string = G.deGbkStr(t.lose);
},
getData: function() {
return {
type: 2,
guai: G.enGbkStr(this.guai.string),
win: G.enGbkStr(this.win.string),
lose: G.enGbkStr(this.lose.string)
};
}
});
cc._RF.pop();
}, {} ]
