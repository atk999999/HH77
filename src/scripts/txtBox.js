// Decrypted 1:1 module `txtBox` from assets/main/index.231ca.js
txtBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "77262JZAr9NartZEiz9Xkk1", "txtBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list0: cc.Node,
list1: cc.Node,
scView0: cc.ScrollView,
scView1: cc.ScrollView,
timeId: {
default: 0,
visible: !1
}
},
onLoad: function() {
this.list0.parent.active = !0;
this.list1.parent.active = !1;
},
initStory: function() {
if (G.user.sid < 1) {
G.user.sid = 1e7;
G.user.step = 0;
G.getStory(G.user.sid);
} else G.getStory(G.user.sid, !1);
},
addTxt: function(t, e, i) {
void 0 === i && (i = !1);
var n = -1 == G.temp.fbId ? this.list0 : this.list1, a = -1 == G.temp.fbId ? this.scView0 : this.scView1, o = n.children, m = null;
o.length > 0 && (m = o[o.length - 1].getComponent("txtItem"));
-1 == G.temp.fbId && (G.temp.ageFlag || i) && m && m.setSide();
m && m.endClick();
if ("" != t) {
var r = cc.instantiate(this.item);
r.getComponent("txtItem").showTxt(t, e);
r.parent = n;
if (-1 == G.temp.fbId) {
var s = this.list0.children;
s.length > 10 && s[0].destroy();
}
clearTimeout(this.timeId);
this.timeId = setTimeout(function() {
a.scrollToBottom(.5);
}, 200);
}
},
toFb: function() {
G.save();
this.list1.removeAllChildren();
this.list0.parent.active = !1;
this.list1.parent.active = !0;
G.temp.fbStep = 0;
G.getFbStory();
},
quitFb: function() {
this.list0.parent.active = !0;
this.list1.parent.active = !1;
G.setOpType(1);
G.temp.fbId = -1;
G.temp.fbStep = 0;
}
});
cc._RF.pop();
}, {} ]
