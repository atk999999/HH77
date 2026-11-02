// Decrypted 1:1 module `typeBox` from assets/main/index.231ca.js
typeBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "e9c37yJtapE8ZvbTX1hB2AD", "typeBox");
cc.Class({
extends: cc.Component,
properties: {
showList: {
default: null,
visible: !1
},
cb: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this, e = this.node.children, i = function(i) {
G.setBup(e[i], function() {
-1 == G.temp.bagType && t.showType(Number(i));
});
};
for (var n in e) i(n);
},
setCb: function(t, e) {
this.cb = t;
var i = this.node.children;
if (e) this.showList = e; else {
this.showList = [];
for (var n in i) this.showList.push(Number(n));
}
},
showType: function(t) {
var e = this.node.children;
for (var i in e) {
e[i].active = -1 != this.showList.indexOf(Number(i));
e[i].active && (e[i].getChildByName("sel").active = i == t);
}
-1 != this.showList.indexOf(Number(t)) && this.cb && this.cb(t);
},
showOne: function(t) {
var e = this.node.children;
for (var i in e) {
e[i].active = i == t;
i == t && (e[i].getChildByName("sel").active = !0);
}
this.cb && this.cb(t);
}
});
cc._RF.pop();
}, {} ]
