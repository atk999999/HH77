// Decrypted 1:1 module `vedioSkillBox` from assets/main/index.231ca.js
vedioSkillBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "96b0dnVEBBALrlZshLlKI8D", "vedioSkillBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Node,
dataBox: cc.Node,
bup: cc.Node
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
G.temp.maxSkill = 4;
t.node.active = !1;
});
},
showSkill: function(t) {
this.item.getComponent("skillItem").setSkill(t, !0);
this.node.active = !0;
}
});
cc._RF.pop();
}, {} ]
