// Decrypted 1:1 module `checkStep` from assets/main/index.231ca.js
checkStep: [ function(t, e) {
"use strict";
cc._RF.push(e, "657c9KxtQ5OzoUM+kPXLS8V", "checkStep");
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
conf: {
default: null,
visible: !1
}
},
onLoad: function() {
"h5" == G.from && this.checkStep();
},
checkStep: function() {
console.log("check step....");
var t = [ G.temp.step, G.temp.fbStory, G.fStepConf ];
for (var e in t) {
console.log("check step conf", e);
this.conf = t[e];
var i = [ null, null, 0, 0, 0, 0, 0, 0, 0 ];
for (var n in this.conf) {
var a = this.conf[n];
if (-1 != a.action.indexOf("|")) switch (a.type) {
case "sel":
this._sel(a);
break;

case "roll":
this._roll(a);
break;

case "fight":
case "combat":
i[a.action.split("|").length - 1]++;
this._fight(a);
break;

case "msg":
this._msg(a);
break;

case "chg":
this._chg(a);
break;

case "jdg":
this._jdg(a);
break;

case "pay":
this._pay(a);
}
}
console.log(i);
}
},
_sel: function(t) {
for (var e, n = i(t.action.split(",")); !(e = n()).done; ) {
var a = e.value;
a = a.split("|");
var o = t.id + "_" + a[1];
this.conf[o] || console.log("sel err:", t.id + "_" + t.step, a[1]);
}
},
_roll: function(t) {
for (var e, n = i(t.action.split(",")); !(e = n()).done; ) {
var a = e.value;
a = a.split("|");
var o = t.id + "_" + a[1];
this.conf[o] || console.log("roll err:", t.id + "_" + t.step, a[1]);
}
},
_fight: function(t) {
var e = t.action.split("|");
for (var i in e) if (i > 0) {
var n = t.id + "_" + e[i];
this.conf[n] || console.log("fight err:", t.id + "_" + t.step, e[i]);
}
},
_msg: function(t) {
var e = t.action.split("|"), i = t.id + "_" + e[1];
this.conf[i] || console.log("msg err:", t.id + "_" + t.step, e[1]);
},
_chg: function(t) {
var e = t.action.split("|"), i = t.id + "_" + e[3];
-1 == e[3] || this.conf[i] || console.log("chg err:", t.id + "_" + t.step, e[3]);
},
_jdg: function(t) {
var e = t.action.split("|");
for (var i in e) if (i > 1 && -1 != e[i]) {
var n = t.id + "_" + e[i];
this.conf[n] || console.log("jdg err:", t.id + "_" + t.step, e[i]);
}
},
_pay: function(t) {
var e = t.action.split("|");
for (var i in e) if (i > 0) {
var n = t.id + "_" + e[i];
this.conf[n] || console.log("pay err:", t.id + "_" + t.step, e[i]);
}
}
});
cc._RF.pop();
}, {} ]
