// Decrypted 1:1 module `dataBox` from assets/main/index.231ca.js
dataBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "d72c0jB6dVP1Ic6PbfPC4DX", "dataBox");
function i(t, e) {
var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (i) return (i = i.call(t)).next.bind(i);
if (Array.isArray(t) || (i = n(t)) || e && t && "number" == typeof t.length) {
i && (t = i);
var a = 0;
return function() {
return a >= t.length ? {
done: !0
} : {
done: !1,
value: t[a++]
};
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function n(t, e) {
if (t) {
if ("string" == typeof t) return a(t, e);
var i = Object.prototype.toString.call(t).slice(8, -1);
"Object" === i && t.constructor && (i = t.constructor.name);
return "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(t, e) : void 0;
}
}
function a(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
return n;
}
cc.Class({
extends: cc.Component,
properties: {
dataItem: cc.Prefab,
dataList: cc.Node,
dataPot: cc.Label,
randBup: cc.Node,
gameBup: cc.Node,
gameBox: cc.Node,
skillBup: cc.Node,
skillBox: cc.Node,
roleBup: cc.Node,
manImg: cc.Node,
girlImg: cc.Node,
roleName: cc.Label,
nameBox: cc.Node,
txtBox: cc.Node,
vedioSkillBox: cc.Node,
skillCount: cc.Label,
titleCount: cc.Label,
refreshBup: cc.Node,
refreshVedio: cc.Node,
refreshFont: cc.Label
},
onLoad: function() {
var t = this;
G.setBup(this.roleBup, function() {
t.nameBox.active = !0;
});
G.setBup(this.randBup, function() {
t.randNum();
});
G.setBup(this.gameBup, function() {
t.startGame();
});
G.setBup(this.skillBup, function() {
t.skillBup.active = !1;
G.showVedio(function() {
t.addTopSkill();
});
});
this.refreshVedio.active = G.temp.freeRefresh < 1;
this.refreshFont.string = G.temp.freeRefresh < 1 ? "刷 新" : "刷 新(" + G.temp.freeRefresh + ")";
G.setBup(this.refreshBup, function() {
if (G.temp.freeRefresh > 0) {
G.temp.freeRefresh--;
t.refreshVedio.active = G.temp.freeRefresh < 1;
t.refreshFont.string = G.temp.freeRefresh < 1 ? "刷 新" : "刷 新(" + G.temp.freeRefresh + ")";
t.resetSkill();
4 == G.temp.maxSkill && t.addTopSkill(!1);
} else G.showVedio(function() {
t.refreshVedio.active = !1;
G.temp.freeRefresh = G.VAL.FREE_REFRESH[1];
t.refreshFont.string = "刷 新(" + G.VAL.FREE_REFRESH[1] + ")";
});
});
},
onEnable: function() {
G.user.dataPot < G.VAL.DATA_POT[0] && (G.user.dataPot = G.VAL.DATA_POT[0]);
G.temp.adTime = 0;
G.temp.dataPot = G.user.dataPot;
G.user.data = [ 0, 0, 0, 0 ];
G.user.skill = [];
G.user.fightSkill = [ 0, 0, 0, 0, 0, 0, 0 ];
this.updatePot();
this.showData();
this.nameBox.active = !0;
this.skillBup.active = G.user.skillAd;
this.refreshBup.active = G.user.skillAd;
},
updatePot: function() {
this.dataPot.string = "可用属性：" + G.temp.dataPot;
},
showRole: function() {
this.manImg.active = 1 == G.user.sex;
this.girlImg.active = 0 == G.user.sex;
this.roleName.string = G.user.name;
},
showData: function() {
this.dataList.removeAllChildren();
for (var t = 0; t < 4; t++) {
var e = cc.instantiate(this.dataItem);
e.parent = this.dataList;
e.getComponent("dataItem").showData(Number(t));
}
},
randNum: function() {
var t = Math.floor(G.user.dataPot / 4);
G.temp.dataPot = G.user.dataPot - 4 * t;
G.user.data = [ t, t, t, t ];
for (var e = 0; e < 20 && G.temp.dataPot > 0; e++) {
G.user.data[e % 4]++;
G.temp.dataPot--;
}
var i = this.dataList.children;
for (var n in i) i[n].getComponent("dataItem").randNum();
this.updatePot();
},
startGame: function() {
if (G.temp.dataPot > 0) G.showTips("有属性点未分配"); else if (G.user.skill.length < 1) G.showTips("请选择至少1个天赋"); else if (G.temp.tList.length > 0 && G.user.title.length < 1) G.showTips("请选择传承"); else {
G.user.age = G.getAge();
G.user.skillAd = !0;
G.user.bakData = G._.assign([], G.user.data);
var t = G.user.data.join("_");
G.addEgg(t);
this.activeSkill();
this.titleSkill();
G.getFightData(!0, G.user.lev);
this.txtBox.getComponent("txtBox").initStory();
G.save();
this.gameBox.active = !0;
G.temp.gameStart = !0;
this.node.active = !1;
}
},
resetSkill: function() {
G.user.skill = [];
this.skillBox.getComponent("dataSkillBox").showList(!0);
},
addRanSkill: function() {
G.temp.maxSkill = 4;
for (var t, e = [], n = i(G.skillConf); !(t = n()).done; ) {
var a = t.value;
-1 == G.user.skill.indexOf(a.id) && e.push(a.id);
}
G.user.skill.push(G.randomArray(e, 1)[0]);
this.startGame();
},
addTopSkill: function(t) {
void 0 === t && (t = !0);
var e = this.skillBox.getComponent("dataSkillBox").addVedioSkill();
t && this.vedioSkillBox.getComponent("vedioSkillBox").showSkill(e);
},
activeSkill: function() {
for (var t, e = i(G.user.skill); !(t = e()).done; ) {
var n = t.value, a = G.getConf(G.skillConf, n);
if (a) for (var o in a) if ("" != a[o]) {
var m = Number(a[o]);
"cn" == o ? G.user.data[0] = Math.max(0, G.user.data[0] + m) : "in" == o ? G.user.data[1] = Math.max(0, G.user.data[1] + m) : "ly" == o ? G.user.data[2] = Math.max(0, G.user.data[2] + m) : "lf" == o ? G.user.age += m : "money" == o ? G.user.coin = Math.max(0, G.user.coin + m) : "hp" == o ? G.user.fightSkill[0] += m : "at" == o ? G.user.fightSkill[1] += m : "df" == o ? G.user.fightSkill[2] += m : "mp" == o ? G.user.fightSkill[3] += m : "miss" == o ? G.user.fightSkill[4] += m : "crit" == o ? G.user.fightSkill[5] += m : "crit_hit" == o && (G.user.fightSkill[6] += m);
}
}
},
titleSkill: function() {
for (var t, e = i(G.user.title); !(t = e()).done; ) {
var n = t.value, a = G.getConf(G.titleConf, n);
if (a) for (var o in a) if ("" != a[o]) {
var m = Number(a[o]);
"cn" == o ? G.user.data[0] = Math.max(0, G.user.data[0] + m) : "in" == o ? G.user.data[1] = Math.max(0, G.user.data[1] + m) : "ly" == o ? G.user.data[2] = Math.max(0, G.user.data[2] + m) : "lf" == o ? G.user.age += m : "money" == o ? G.user.coin = Math.max(0, G.user.coin + m) : "hp" == o ? G.user.fightSkill[0] += m : "at" == o ? G.user.fightSkill[1] += m : "df" == o ? G.user.fightSkill[2] += m : "miss" == o ? G.user.fightSkill[4] += m : "crit" == o ? G.user.fightSkill[5] += m : "crit_hit" == o && (G.user.fightSkill[6] += m);
}
}
},
updateCount: function() {
if (this.node.active) {
this.skillCount.string = "(" + G.user.skill.length + "/" + G.temp.maxSkill + ")";
this.titleCount.string = "(" + G.user.title.length + "/2)";
}
}
});
cc._RF.pop();
}, {} ]
