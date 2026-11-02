// Decrypted 1:1 module `debugBox` from assets/main/index.231ca.js
debugBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "0f358pPB8NL67Nt/UkL9vBD", "debugBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
debupBup: cc.Node,
view: cc.Node,
list: cc.Node,
num: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.debupBup, function() {
t.num++;
if (10 == t.num) t.showView(); else if (t.num > 11) {
t.num = 0;
t.view.active = !1;
}
});
},
showView: function() {
this.view.active = !0;
this.list.removeAllChildren();
for (var t in G.user.var) {
var e = cc.instantiate(this.item);
e.getComponent(cc.Label).string = t + ":" + G.user.var[t];
e.parent = this.list;
}
}
});
cc._RF.pop();
}, {} ]
