// Decrypted 1:1 module `aStar` from assets/main/index.231ca.js
aStar: [ function(t, e) {
"use strict";
cc._RF.push(e, "4ff1cfz4LVE4Z5YtBG0NqEQ", "aStar");
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
function o(t, e) {
return {
x: t,
y: e,
eq: function(t) {
return this.x === t.x && this.y === t.y;
}
};
}
e.exports = {
Array2D: function(t, e, i) {
for (var n = [], a = i || 0, o = 0; o < t; o++) {
for (var m = [], r = 0; r < e; r++) m.push(a);
n.push(m);
}
return {
w: t,
h: e,
data: n,
showArray2D: function() {
for (var t = "", e = 0; e < this.h; e++) {
for (var i = 0; i < this.w; i++) t += this.data[i][e] + " ";
t += "\n";
}
console.log(t);
}
};
},
Point: o,
AStar: function(t, e, n, a) {
var m = function(t, e, i) {
return {
point: t,
father: null,
g: i || 0,
h: 10 * (Math.abs(e.x - t.x) + Math.abs(e.y - t.y))
};
};
return {
map2d: t,
startPoint: e,
endPoint: n,
passTag: a || 1,
openList: [],
closeList: [],
getMinNode: function() {
for (var t, e = this.openList[0], n = i(this.openList); !(t = n()).done; ) {
var a = t.value;
a.g + a.h < e.g + e.h && (e = a);
}
return e;
},
pointInCloseList: function(t) {
for (var e, n = i(this.closeList); !(e = n()).done; ) if (e.value.point.eq(t)) return !0;
return !1;
},
pointInOpenList: function(t) {
for (var e, n = i(this.openList); !(e = n()).done; ) {
var a = e.value;
if (a.point.eq(t)) return a;
}
return null;
},
endPointInCloseList: function() {
for (var t, e = i(this.closeList); !(t = e()).done; ) {
var n = t.value;
if (n.point.eq(this.endPoint)) return n;
}
return null;
},
searchNear: function(t, e, i) {
if (t.point.x + e < 0 || t.point.x + e > this.map2d.w - 1 || t.point.y + i < 0 || t.point.y + i > this.map2d.h - 1) return null;
if (this.map2d.data[t.point.x + e][t.point.y + i] !== this.passTag) return null;
var n = o(t.point.x + e, t.point.y + i);
if (this.pointInCloseList(n)) return null;
var a;
a = 0 === e || 0 === i ? 10 : 14;
var r = this.pointInOpenList(n);
if (null == r) {
(r = m(n, this.endPoint, t.g + a)).father = t;
this.openList.push(r);
return null;
}
if (t.g + a < r.g) {
r.g = t + a;
r.father = t;
}
},
start: function() {
var t = m(this.startPoint, this.endPoint);
this.openList.push(t);
for (;;) {
var e = this.getMinNode();
this.closeList.push(e);
var i = this.openList.indexOf(e);
this.openList.splice(i, 1);
this.searchNear(e, 0, -1);
this.searchNear(e, 0, 1);
this.searchNear(e, -1, 0);
this.searchNear(e, 1, 0);
this.searchNear(e, 1, 1);
this.searchNear(e, -1, -1);
this.searchNear(e, 1, -1);
this.searchNear(e, -1, 1);
var n = this.endPointInCloseList();
if (n) for (var a = n, o = []; ;) {
if (!a.father) return o.reverse();
o.push(a.point);
a = a.father;
}
if (0 === this.openList.length) return null;
}
}
};
}
};
cc._RF.pop();
}, {} ]
