// Decrypted 1:1 module `rankBox` from assets/main/index.231ca.js
rankBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "61489uqPXtMpa1NpOORU/Tn", "rankBox");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list: cc.Node,
typeBox: cc.Node,
barBox: cc.Node,
pageBox: cc.Node,
levBox: cc.Node,
myItem: cc.Node,
coin: cc.Label,
tipsBox: cc.Node,
type: {
default: 0,
visible: !1
},
lev: {
default: 0,
visible: !1
},
selLev: {
default: 0,
visible: !1
},
page: {
default: 0,
visible: !1
},
myRank: {
default: -1,
visible: !1
}
},
onLoad: function() {
var t = this;
this.typeBox.getComponent("typeBox").setCb(function(e) {
t.lev = [ [ 10, 27 ], [ 28, 45 ], [ 46, 63 ] ][e];
t.showSelLev(e);
t.showRank(e);
t.showTips(e);
t.showCoin();
});
var e = this.levBox.children, i = function(i) {
G.setBup(e[i], function() {
t.lev = [ [ 10, 27 ], [ 28, 45 ], [ 46, 63 ] ][i];
t.showSelLev(i);
t.showRank(t.type);
});
};
for (var n in e) i(n);
},
onEnable: function() {
G.wxAd.showClubBup(!1);
this.showCoin();
this.typeBox.getComponent("typeBox").showType(0);
},
onDisable: function() {
G.wxAd.showClubBup(!0);
},
showCoin: function() {
G.wxAd.showClubBup(!1);
this.coin.string = "灵石：" + G.getNum(G.user.coin);
},
updateInfo: function() {
this.lev = [ [ 10, 27 ], [ 28, 45 ], [ 46, 63 ] ][this.selLev];
this.showSelLev(this.selLev);
this.showRank(this.type);
this.showTips(this.type);
this.showCoin();
},
showSelLev: function(t) {
this.selLev = t;
var e = this.levBox.children;
for (var i in e) e[i].getChildByName("font").color = i == t ? cc.color("#78EA8E") : cc.color("ffffff");
},
showTips: function(t) {
var e = this.tipsBox.children;
for (var i in e) e[i].active = i == t;
},
showRank: function(t) {
this.node.active = !0;
this.type = t;
this.page = 0;
var e = this.barBox.children;
for (var i in e) e[i].active = i == t;
this.levBox.parent.active = 2 != t;
this.levBox.children[0].active = 0 == t;
this.list.removeAllChildren();
var n = [ G._.assign([], G.user.rank), G._.assign([], G.user.homeRank), G._.assign([], G.user.relifeRank) ], a = n[t].length - 1, o = 1, m = [], r = this.showMyInfo(), s = -1;
for (var l in n[t]) {
var p = n[t][l];
0 == t ? 2 * r[7] + r[8] >= 2 * p[7] + p[8] && (s = l) : 1 == t ? 2 * r[10] + r[11] >= 2 * p[10] + p[11] && (s = l) : r[0] >= p[0] && (s = l);
}
-1 != s && (n[t][s] = r);
for (var d = [ 20, 30, 50 ], c = a; c >= 0; c--) {
var u = n[t][c], y = 0 == t && u[5] >= this.lev[0] && u[5] <= this.lev[1], f = 1 == t && u[8] >= this.lev[0] && u[8] <= this.lev[1];
if (y || f || 2 == t) {
if (!(m.length < d[t])) break;
m.push([ o++, u ]);
}
}
for (var x = 0, h = m; x < h.length; x++) {
var g = h[x], v = cc.instantiate(this.item);
v.parent = this.list;
var _ = v.getComponent("rankItem");
_.showInfo(g[0], t, g[1]);
_.updateCost(this.selLev);
}
this.updateMyRank(m);
},
showMyInfo: function() {
var t = null, e = G.getFightData(!0, G.user.lev), i = G.getFight(!0);
if (0 == this.type) {
i = e[0] + 10 * e[1] + 30 * e[2];
t = [ e[0], e[1], e[2], e[3], i, G.user.lev, G.user.name, G.user.win[0], G.user.win[1] ];
} else if (1 == this.type) {
var n = G._.size(G.user.home.man), a = G.user.home.lev, o = G.user.home.name;
t = [ e[0], e[1], e[2], e[3], i, n, a, o, G.user.lev, G.user.name, G.user.homeWin[0], G.user.homeWin[1] ];
} else t = [ G.user.point, G.user.lev, G.user.name ];
this.myItem.getComponent("rankItem").showInfo(1, this.type, t);
return t;
},
updateMyRank: function(t) {
var e = -1;
for (var i in t) {
var n = "", a = t[i][1];
0 == this.type ? n = a[6] : 1 == this.type ? n = a[9] : 2 == this.type && (n = a[2]);
G.user.name == n && (e = Number(i) + 1);
}
G.temp.myRank = e;
var o = this.myItem.getComponent("rankItem");
o.updataRank(e);
o.updateCost(0);
}
});
cc._RF.pop();
}, {} ]
