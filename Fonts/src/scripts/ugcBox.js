// Decrypted 1:1 module `ugcBox` from assets/main/index.231ca.js
ugcBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "3a0b6MM0PlDgqaI9EDCk2ue", "ugcBox");
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
item0: cc.Prefab,
item1: cc.Prefab,
item2: cc.Prefab,
title: cc.Label,
scView: cc.ScrollView,
list: cc.Node,
addBup: cc.Node,
quitBup: cc.Node,
clrBup: cc.Node,
saveBup: cc.Node,
typeBar: cc.Node,
toggle: cc.ToggleContainer,
typeFont0: cc.Label,
typeFont1: cc.Label,
typeFont2: cc.Label,
uName: cc.EditBox,
help0: cc.Node,
help1: cc.Node,
help2: cc.Node,
ugc: [ cc.Node ],
addType: {
default: 0,
visible: !1
},
count: {
default: null,
visible: !1
}
},
onLoad: function() {
var t = this;
G.setBup(this.addBup, function() {
t.addItem();
});
G.setBup(this.clrBup, function() {
t.clrAll();
});
G.setBup(this.saveBup, function() {
t.saveUgc();
});
G.setBup(this.help0, function() {
t.showHelp(0);
});
G.setBup(this.help1, function() {
t.showHelp(1);
});
G.setBup(this.help2, function() {
t.showHelp(2);
});
},
onEnable: function() {
var t = G.getItem("xx_name");
t && (this.uName.string = t);
},
showUgc: function() {
this.title.string = G.temp.editInfo.title;
for (var t, e = i(this.list.children); !(t = e()).done; ) {
var n = t.value;
"typeBar" != n.name ? n.destroy() : n.active = !0;
}
this.count = G._.assign([], G.VAL.UGC_MAX);
this.showCount();
this.addType = 0;
this.toggle.toggleItems[0].isChecked = !0;
this.addItem();
this.clrBup.active = !0;
this.saveBup.active = !0;
this.node.active = !0;
},
selType: function(t) {
this.addType = Number(t.node.name.split("_")[1]);
},
addItem: function() {
var t = this;
if (this.count[this.addType] < 1) G.showTips("已达类型上限"); else {
var e = null;
0 == this.addType ? e = cc.instantiate(this.item0) : 1 == this.addType ? e = cc.instantiate(this.item1) : 2 == this.addType && (e = cc.instantiate(this.item2));
e.parent = this.list;
this.count[this.addType]--;
this.showCount();
this.typeBar.zIndex = 100;
this.scheduleOnce(function() {
t.scView.scrollToBottom(.1);
}, .5);
}
},
saveUgc: function() {
var t = this;
if ("" != this.uName.string) {
for (var e, n = [], a = i(this.list.children); !(e = a()).done; ) for (var o = e.value, m = 0; m < 3; m++) {
var r = o.getComponent("editItem" + m);
r && n.push(r.getData());
}
for (var s = 0, l = n; s < l.length; s++) {
var p = l[s];
for (var d in p) if ("" === p[d]) {
G.showTips("请完整填写内容，不要留空");
return;
}
}
if (n.length < 1) G.showTips("请填写至少一项内容"); else {
G.setItem("xx_name", this.uName.string);
G.myHttp(G.URL.FB_ADD, {
fb: G.temp.editInfo.id,
name: G.enGbkStr(this.uName.string),
txt: n
}, function(e) {
if (0 == e.errno) {
G.showTips("投稿成功");
G.myHttp(G.URL.FB_LIST, {}, function(t) {
0 == t.errno && (G.temp.ugcList = t.record);
});
t.getCoin();
t.node.active = !1;
} else G.showTips(e.errMsg);
});
}
} else G.showTips("请输入玩家昵称");
},
getCoin: function() {
var t = G.getAdConf(), e = Math.ceil(t.money / 2);
G.user.coin += e;
G.save();
G.showTips("获得" + G.getNum(e) + "灵石");
},
clrAll: function() {
var t = this, e = G.getMsgBox();
e.showMsg("是否清空所有内容？", function() {
t.count = G._.assign([], G.VAL.UGC_MAX);
t.showCount();
for (var e, n = i(t.list.children); !(e = n()).done; ) {
var a = e.value;
"typeBar" != a.name && a.destroy();
}
});
e.showCancel(!0);
},
showCount: function() {
this.typeFont0.string = "文本（" + this.count[0] + "/" + G.VAL.UGC_MAX[0] + "）";
this.typeFont1.string = "选项（" + this.count[1] + "/" + G.VAL.UGC_MAX[1] + "）";
this.typeFont2.string = "战斗（" + this.count[2] + "/" + G.VAL.UGC_MAX[2] + "）";
},
updateCount: function(t) {
var e = G.VAL.UGC_MAX;
this.count[t] = Math.min(e[t], this.count[t] + 1);
this.showCount();
},
loadRecord: function(t) {
this.clrBup.active = !1;
this.saveBup.active = !1;
var e = G.getConf(G.temp.editList, t.fb);
this.title.string = e ? e.title : "未知";
for (var n, a = i(this.list.children); !(n = a()).done; ) {
var o = n.value;
"typeBar" != o.name ? o.destroy() : o.active = !1;
}
for (var m, r = i(JSON.parse(t.json)); !(m = r()).done; ) {
var s = m.value, l = null;
0 == s.type ? (l = cc.instantiate(this.item0)).getComponent("editItem0").showData(s) : 1 == s.type ? (l = cc.instantiate(this.item1)).getComponent("editItem1").showData(s) : 2 == s.type && (l = cc.instantiate(this.item2)).getComponent("editItem2").showData(s);
l.parent = this.list;
}
this.node.active = !0;
},
showHelp: function(t) {
for (var e in this.ugc) this.ugc[e].active = e == t;
this.ugc[t].parent.active = !0;
}
});
cc._RF.pop();
}, {} ]
