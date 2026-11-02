// Decrypted 1:1 module `dataItem` from assets/main/index.231ca.js
dataItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "53931datNNCJJBW213Dok5u", "dataItem");
cc.Class({
extends: cc.Component,
properties: {
title: cc.Label,
num: cc.Label,
delBup: cc.Node,
addBup: cc.Node,
dataId: {
default: 0,
visible: !1
}
},
onLoad: function() {
var t = this;
this.delBup.getComponent("bup").setCb(function() {
t.setData(-1);
});
this.addBup.getComponent("bup").setCb(function() {
t.setData(1);
});
},
showData: function(t) {
this.dataId = t;
var e = G.VAL.TITLE;
this.title.string = e[t];
this.num.string = G.user.data[this.dataId];
},
setData: function(t) {
if (t < 0) {
if (G.user.data[this.dataId] > 0) {
G.user.data[this.dataId]--;
G.temp.dataPot++;
}
} else {
if (G.user.data[this.dataId] >= 10) {
G.showTips("属性上限为10");
return;
}
if (G.temp.dataPot > 0) {
G.user.data[this.dataId]++;
G.temp.dataPot--;
}
}
this.num.string = G.user.data[this.dataId];
cc.find("Canvas/dataBox").getComponent("dataBox").updatePot();
},
randNum: function() {
this.num.string = G.user.data[this.dataId];
}
});
cc._RF.pop();
}, {} ]
