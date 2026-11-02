// Decrypted 1:1 module `copyItem` from assets/main/index.231ca.js
copyItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "674c9EkOENJVI2sg9Q38a9z", "copyItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
stage: cc.Label,
bup: cc.Node,
lock: cc.Node,
type: {
default: 0,
visible: !1
},
id: {
default: 0,
visible: !1
},
info: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.bup, function() {
0 == t.type ? t.toMainCopy() : 1 == t.type && t.toSubCopy();
});
G.setBup(this.lock, function() {
0 == t.type ? G.showTips("主线剧情可解锁副本") : 1 == t.type && G.showTips(t.stage.string);
});
},
showInfo: function(t) {
this.type = 0;
this.id = t;
var e = G.getConf(G.copyConf, t);
this.title.string = e.copy;
this.lock.active = -1 == G.user.copy.indexOf(t) || "" != e.lock;
this.bup.active = !this.lock.active;
},
showEdit: function(t) {
this.type = 1;
this.id = t.id;
this.info = t;
this.title.string = t.title;
this.stage.string = "【" + G.VAL.LEV[t.stage - 1] + "】解锁";
var e = G.levConf[G.user.lev - 1].stage;
this.lock.active = e < t.stage;
this.stage.node.active = this.lock.active;
this.bup.active = !this.lock.active;
},
toMainCopy: function() {
G.temp.fbType = 0;
G.getNode("Canvas/copyBox", "copyBox").js.toCopy(this.id);
},
toSubCopy: function() {
G.temp.fbType = 1;
G.getNode("Canvas/copyBox", "copyBox").js.toCopy(this.id);
}
});
cc._RF.pop();
}, {} ]
