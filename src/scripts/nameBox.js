// Decrypted 1:1 module `nameBox` from assets/main/index.231ca.js
nameBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "d034cQTxxVJaYpvu46yZE4L", "nameBox");
cc.Class({
extends: cc.Component,
properties: {
man: cc.Node,
girl: cc.Node,
nameFont: cc.Label,
nameBup: cc.Node,
dataBox: cc.Node,
sel: [ cc.Node ]
},
onLoad: function() {
var t = this;
G.setBup(this.man, function() {
t.setSex(1);
});
G.setBup(this.girl, function() {
t.setSex(0);
});
G.setBup(this.nameBup, function() {
t.randomName();
});
this.randomName();
},
onDisable: function() {
G.save();
this.dataBox.getComponent("dataBox").showRole();
},
setSex: function(t) {
G.user.sex = t;
this.sel[0].active = 1 == t;
this.sel[1].active = 0 == t;
this.randomName();
},
randomName: function() {
G.user.name = G.getRoleName(G.user.sex, !0);
this.nameFont.string = G.user.name;
}
});
cc._RF.pop();
}, {} ]
