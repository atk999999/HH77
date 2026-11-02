// Decrypted 1:1 module `fightTxtBox` from assets/main/index.231ca.js
fightTxtBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "280b2Hu73RCdptgBq29869F", "fightTxtBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list: cc.Node,
scView: cc.ScrollView
},
onEnable: function() {
this.list.removeAllChildren();
},
addTxt: function(t) {
var e = cc.instantiate(this.item);
e.parent = this.list;
e.getComponent("fightTxtItem").showTxt(t);
this.scView.scrollToBottom(.5);
}
});
cc._RF.pop();
}, {} ]
