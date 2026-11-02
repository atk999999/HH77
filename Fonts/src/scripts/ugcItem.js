// Decrypted 1:1 module `ugcItem` from assets/main/index.231ca.js
ugcItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "56debM3JdpJ6bexuZ3pWXDA", "ugcItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
good: cc.Label,
bad: cc.Label,
state: cc.Label,
info: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
G.getNode("Canvas/copyBox/ugcBox", "ugcBox").js.loadRecord(t.info);
e.stopPropagation();
});
},
showInfo: function(t) {
this.info = t;
var e = G.getConf(G.temp.editList, t.fb);
this.title.string = e.title;
var i = t.point.split(",");
this.good.string = "点赞" + i[0];
this.bad.string = "点踩" + i[1];
this.state.string = 0 == t.state ? "审核中" : "已通过";
this.state.node.color = 0 == t.state ? cc.color("#FEBF32") : cc.color("#B7EB94");
}
});
cc._RF.pop();
}, {} ]
