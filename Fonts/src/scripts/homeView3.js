// Decrypted 1:1 module `homeView3` from assets/main/index.231ca.js
homeView3: [ function(t, e) {
"use strict";
cc._RF.push(e, "eb1f84Ss6NCPqRjI7zULL61", "homeView3");
cc.Class({
extends: cc.Component,
properties: {
item: cc.Prefab,
list: cc.Node,
zfImg: cc.Node,
zfTitle: cc.Label,
fight: cc.Label,
descBox: cc.Node
},
onLoad: function() {
for (var t = 0; t < 8; t++) cc.instantiate(this.item).parent = this.list;
},
onEnable: function() {
this.showInfo();
},
showInfo: function() {
var t = G.getConf(G._17Conf, G.user.home.lev, "lvc");
G.setLogo(this.zfImg, "zf/", "zf", "zf" + G.user.home.lev);
this.zfTitle.string = t.ar_name;
this.showMan();
this.showFight();
this.showDesc();
},
showMan: function() {
var t = G.getConf(G._17Conf, G.user.home.lev, "lvc"), e = this.list.children;
for (var i in e) {
e[i].active = i < t.array;
if (i < t.array) {
var n = G.user.home.zf[i];
e[i].getComponent("zfManItem").showInfo(n);
}
}
},
showFight: function() {
var t = G.getManBuff(), e = [ "血气+" + G.getNum(t[0]), "攻击+" + G.getNum(t[1]), "防御+" + G.getNum(t[2]), "法力+" + G.getNum(t[3]) ];
this.fight.string = e.join("  ");
},
showDesc: function() {
var t = this.descBox.children, e = G.user.home.lev, i = Math.min(9, e + 1), n = G.getConf(G._17Conf, e, "lvc"), a = G.getConf(G._17Conf, i, "lvc"), o = [ "当前：【" + n.ar_name + "】", "最多可上阵" + n.array + "名弟子", "下一级：【" + a.ar_name + "】", "最多可上阵" + a.array + "名弟子" ];
for (var m in t) 4 != m && (t[m].getComponent(cc.Label).string = o[m]);
}
});
cc._RF.pop();
}, {} ]
