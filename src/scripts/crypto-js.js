// Decrypted 1:1 module `crypto-js` from assets/main/index.231ca.js
"crypto-js": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5c610EcrLxGpYSvIuTcl/6Q", "crypto-js");
n = function() {
var t, e, i = i || function(t) {
var e = {}, i = e.lib = {}, n = i.Base = function() {
function t() {}
return {
extend: function(e) {
t.prototype = this;
var i = new t();
e && i.mixIn(e);
i.hasOwnProperty("init") || (i.init = function() {
i.$super.init.apply(this, arguments);
});
i.init.prototype = i;
i.$super = this;
return i;
},
create: function() {
var t = this.extend();
t.init.apply(t, arguments);
return t;
},
init: function() {},
mixIn: function(t) {
for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
t.hasOwnProperty("toString") && (this.toString = t.toString);
},
clone: function() {
return this.init.prototype.extend(this);
}
};
}(), a = i.WordArray = n.extend({
init: function(t, e) {
t = this.words = t || [];
this.sigBytes = null != e ? e : 4 * t.length;
},
toString: function(t) {
return (t || m).stringify(this);
},
concat: function(t) {
var e = this.words, i = t.words, n = this.sigBytes, a = t.sigBytes;
this.clamp();
if (n % 4) for (var o = 0; o < a; o++) {
var m = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
e[n + o >>> 2] |= m << 24 - (n + o) % 4 * 8;
} else for (o = 0; o < a; o += 4) e[n + o >>> 2] = i[o >>> 2];
this.sigBytes += a;
return this;
},
clamp: function() {
var e = this.words, i = this.sigBytes;
e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8;
e.length = t.ceil(i / 4);
},
clone: function() {
var t = n.clone.call(this);
t.words = this.words.slice(0);
return t;
},
random: function(e) {
for (var i, n = [], o = function(e) {
e = e;
var i = 987654321, n = 4294967295;
return function() {
var a = ((i = 36969 * (65535 & i) + (i >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n;
a /= 4294967296;
return (a += .5) * (t.random() > .5 ? 1 : -1);
};
}, m = 0; m < e; m += 4) {
var r = o(4294967296 * (i || t.random()));
i = 987654071 * r();
n.push(4294967296 * r() | 0);
}
return new a.init(n, e);
}
}), o = e.enc = {}, m = o.Hex = {
stringify: function(t) {
for (var e = t.words, i = t.sigBytes, n = [], a = 0; a < i; a++) {
var o = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;
n.push((o >>> 4).toString(16));
n.push((15 & o).toString(16));
}
return n.join("");
},
parse: function(t) {
for (var e = t.length, i = [], n = 0; n < e; n += 2) i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
return new a.init(i, e / 2);
}
}, r = o.Latin1 = {
stringify: function(t) {
for (var e = t.words, i = t.sigBytes, n = [], a = 0; a < i; a++) {
var o = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;
n.push(String.fromCharCode(o));
}
return n.join("");
},
parse: function(t) {
for (var e = t.length, i = [], n = 0; n < e; n++) i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
return new a.init(i, e);
}
}, s = o.Utf8 = {
stringify: function(t) {
try {
return decodeURIComponent(escape(r.stringify(t)));
} catch (t) {
throw new Error("Malformed UTF-8 data");
}
},
parse: function(t) {
return r.parse(unescape(encodeURIComponent(t)));
}
}, l = i.BufferedBlockAlgorithm = n.extend({
reset: function() {
this._data = new a.init();
this._nDataBytes = 0;
},
_append: function(t) {
"string" == typeof t && (t = s.parse(t));
this._data.concat(t);
this._nDataBytes += t.sigBytes;
},
_process: function(e) {
var i = this._data, n = i.words, o = i.sigBytes, m = this.blockSize, r = o / (4 * m), s = (r = e ? t.ceil(r) : t.max((0 | r) - this._minBufferSize, 0)) * m, l = t.min(4 * s, o);
if (s) {
for (var p = 0; p < s; p += m) this._doProcessBlock(n, p);
var d = n.splice(0, s);
i.sigBytes -= l;
}
return new a.init(d, l);
},
clone: function() {
var t = n.clone.call(this);
t._data = this._data.clone();
return t;
},
_minBufferSize: 0
}), p = (i.Hasher = l.extend({
cfg: n.extend(),
init: function(t) {
this.cfg = this.cfg.extend(t);
this.reset();
},
reset: function() {
l.reset.call(this);
this._doReset();
},
update: function(t) {
this._append(t);
this._process();
return this;
},
finalize: function(t) {
t && this._append(t);
return this._doFinalize();
},
blockSize: 16,
_createHelper: function(t) {
return function(e, i) {
return new t.init(i).finalize(e);
};
},
_createHmacHelper: function(t) {
return function(e, i) {
return new p.HMAC.init(t, i).finalize(e);
};
}
}), e.algo = {});
return e;
}(Math);
e = (t = i).lib.WordArray, t.enc.Base64 = {
stringify: function(t) {
var e = t.words, i = t.sigBytes, n = this._map;
t.clamp();
for (var a = [], o = 0; o < i; o += 3) for (var m = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, r = 0; r < 4 && o + .75 * r < i; r++) a.push(n.charAt(m >>> 6 * (3 - r) & 63));
var s = n.charAt(64);
if (s) for (;a.length % 4; ) a.push(s);
return a.join("");
},
parse: function(t) {
var i = t.length, n = this._map, a = n.charAt(64);
if (a) {
var o = t.indexOf(a);
-1 != o && (i = o);
}
for (var m = [], r = 0, s = 0; s < i; s++) if (s % 4) {
var l = n.indexOf(t.charAt(s - 1)) << s % 4 * 2 | n.indexOf(t.charAt(s)) >>> 6 - s % 4 * 2;
m[r >>> 2] |= l << 24 - r % 4 * 8;
r++;
}
return e.create(m, r);
},
_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};
(function(t) {
var e = i, n = e.lib, a = n.WordArray, o = n.Hasher, m = e.algo, r = [];
(function() {
for (var e = 0; e < 64; e++) r[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
})();
var s = m.MD5 = o.extend({
_doReset: function() {
this._hash = new a.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
},
_doProcessBlock: function(t, e) {
for (var i = 0; i < 16; i++) {
var n = e + i, a = t[n];
t[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
}
var o = this._hash.words, m = t[e + 0], s = t[e + 1], u = t[e + 2], y = t[e + 3], f = t[e + 4], x = t[e + 5], h = t[e + 6], g = t[e + 7], v = t[e + 8], G = t[e + 9], _ = t[e + 10], b = t[e + 11], w = t[e + 12], k = t[e + 13], C = t[e + 14], A = t[e + 15], S = o[0], B = o[1], I = o[2], N = o[3];
S = l(S, B, I, N, m, 7, r[0]);
N = l(N, S, B, I, s, 12, r[1]);
I = l(I, N, S, B, u, 17, r[2]);
B = l(B, I, N, S, y, 22, r[3]);
S = l(S, B, I, N, f, 7, r[4]);
N = l(N, S, B, I, x, 12, r[5]);
I = l(I, N, S, B, h, 17, r[6]);
B = l(B, I, N, S, g, 22, r[7]);
S = l(S, B, I, N, v, 7, r[8]);
N = l(N, S, B, I, G, 12, r[9]);
I = l(I, N, S, B, _, 17, r[10]);
B = l(B, I, N, S, b, 22, r[11]);
S = l(S, B, I, N, w, 7, r[12]);
N = l(N, S, B, I, k, 12, r[13]);
I = l(I, N, S, B, C, 17, r[14]);
S = p(S, B = l(B, I, N, S, A, 22, r[15]), I, N, s, 5, r[16]);
N = p(N, S, B, I, h, 9, r[17]);
I = p(I, N, S, B, b, 14, r[18]);
B = p(B, I, N, S, m, 20, r[19]);
S = p(S, B, I, N, x, 5, r[20]);
N = p(N, S, B, I, _, 9, r[21]);
I = p(I, N, S, B, A, 14, r[22]);
B = p(B, I, N, S, f, 20, r[23]);
S = p(S, B, I, N, G, 5, r[24]);
N = p(N, S, B, I, C, 9, r[25]);
I = p(I, N, S, B, y, 14, r[26]);
B = p(B, I, N, S, v, 20, r[27]);
S = p(S, B, I, N, k, 5, r[28]);
N = p(N, S, B, I, u, 9, r[29]);
I = p(I, N, S, B, g, 14, r[30]);
S = d(S, B = p(B, I, N, S, w, 20, r[31]), I, N, x, 4, r[32]);
N = d(N, S, B, I, v, 11, r[33]);
I = d(I, N, S, B, b, 16, r[34]);
B = d(B, I, N, S, C, 23, r[35]);
S = d(S, B, I, N, s, 4, r[36]);
N = d(N, S, B, I, f, 11, r[37]);
I = d(I, N, S, B, g, 16, r[38]);
B = d(B, I, N, S, _, 23, r[39]);
S = d(S, B, I, N, k, 4, r[40]);
N = d(N, S, B, I, m, 11, r[41]);
I = d(I, N, S, B, y, 16, r[42]);
B = d(B, I, N, S, h, 23, r[43]);
S = d(S, B, I, N, G, 4, r[44]);
N = d(N, S, B, I, w, 11, r[45]);
I = d(I, N, S, B, A, 16, r[46]);
S = c(S, B = d(B, I, N, S, u, 23, r[47]), I, N, m, 6, r[48]);
N = c(N, S, B, I, g, 10, r[49]);
I = c(I, N, S, B, C, 15, r[50]);
B = c(B, I, N, S, x, 21, r[51]);
S = c(S, B, I, N, w, 6, r[52]);
N = c(N, S, B, I, y, 10, r[53]);
I = c(I, N, S, B, _, 15, r[54]);
B = c(B, I, N, S, s, 21, r[55]);
S = c(S, B, I, N, v, 6, r[56]);
N = c(N, S, B, I, A, 10, r[57]);
I = c(I, N, S, B, h, 15, r[58]);
B = c(B, I, N, S, k, 21, r[59]);
S = c(S, B, I, N, f, 6, r[60]);
N = c(N, S, B, I, b, 10, r[61]);
I = c(I, N, S, B, u, 15, r[62]);
B = c(B, I, N, S, G, 21, r[63]);
o[0] = o[0] + S | 0;
o[1] = o[1] + B | 0;
o[2] = o[2] + I | 0;
o[3] = o[3] + N | 0;
},
_doFinalize: function() {
var e = this._data, i = e.words, n = 8 * this._nDataBytes, a = 8 * e.sigBytes;
i[a >>> 5] |= 128 << 24 - a % 32;
var o = t.floor(n / 4294967296), m = n;
i[15 + (a + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
i[14 + (a + 64 >>> 9 << 4)] = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8);
e.sigBytes = 4 * (i.length + 1);
this._process();
for (var r = this._hash, s = r.words, l = 0; l < 4; l++) {
var p = s[l];
s[l] = 16711935 & (p << 8 | p >>> 24) | 4278255360 & (p << 24 | p >>> 8);
}
return r;
},
clone: function() {
var t = o.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
function l(t, e, i, n, a, o, m) {
var r = t + (e & i | ~e & n) + a + m;
return (r << o | r >>> 32 - o) + e;
}
function p(t, e, i, n, a, o, m) {
var r = t + (e & n | i & ~n) + a + m;
return (r << o | r >>> 32 - o) + e;
}
function d(t, e, i, n, a, o, m) {
var r = t + (e ^ i ^ n) + a + m;
return (r << o | r >>> 32 - o) + e;
}
function c(t, e, i, n, a, o, m) {
var r = t + (i ^ (e | ~n)) + a + m;
return (r << o | r >>> 32 - o) + e;
}
e.MD5 = o._createHelper(s);
e.HmacMD5 = o._createHmacHelper(s);
})(Math);
(function() {
var t = i, e = t.lib, n = e.WordArray, a = e.Hasher, o = t.algo, m = [], r = o.SHA1 = a.extend({
_doReset: function() {
this._hash = new n.init([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(t, e) {
for (var i = this._hash.words, n = i[0], a = i[1], o = i[2], r = i[3], s = i[4], l = 0; l < 80; l++) {
if (l < 16) m[l] = 0 | t[e + l]; else {
var p = m[l - 3] ^ m[l - 8] ^ m[l - 14] ^ m[l - 16];
m[l] = p << 1 | p >>> 31;
}
var d = (n << 5 | n >>> 27) + s + m[l];
d += l < 20 ? 1518500249 + (a & o | ~a & r) : l < 40 ? 1859775393 + (a ^ o ^ r) : l < 60 ? (a & o | a & r | o & r) - 1894007588 : (a ^ o ^ r) - 899497514;
s = r;
r = o;
o = a << 30 | a >>> 2;
a = n;
n = d;
}
i[0] = i[0] + n | 0;
i[1] = i[1] + a | 0;
i[2] = i[2] + o | 0;
i[3] = i[3] + r | 0;
i[4] = i[4] + s | 0;
},
_doFinalize: function() {
var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[14 + (n + 64 >>> 9 << 4)] = Math.floor(i / 4294967296);
e[15 + (n + 64 >>> 9 << 4)] = i;
t.sigBytes = 4 * e.length;
this._process();
return this._hash;
},
clone: function() {
var t = a.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
t.SHA1 = a._createHelper(r);
t.HmacSHA1 = a._createHmacHelper(r);
})();
(function(t) {
var e = i, n = e.lib, a = n.WordArray, o = n.Hasher, m = e.algo, r = [], s = [];
(function() {
function e(e) {
for (var i = t.sqrt(e), n = 2; n <= i; n++) if (!(e % n)) return !1;
return !0;
}
function i(t) {
return 4294967296 * (t - (0 | t)) | 0;
}
for (var n = 2, a = 0; a < 64; ) {
if (e(n)) {
a < 8 && (r[a] = i(t.pow(n, .5)));
s[a] = i(t.pow(n, 1 / 3));
a++;
}
n++;
}
})();
var l = [], p = m.SHA256 = o.extend({
_doReset: function() {
this._hash = new a.init(r.slice(0));
},
_doProcessBlock: function(t, e) {
for (var i = this._hash.words, n = i[0], a = i[1], o = i[2], m = i[3], r = i[4], p = i[5], d = i[6], c = i[7], u = 0; u < 64; u++) {
if (u < 16) l[u] = 0 | t[e + u]; else {
var y = l[u - 15], f = (y << 25 | y >>> 7) ^ (y << 14 | y >>> 18) ^ y >>> 3, x = l[u - 2], h = (x << 15 | x >>> 17) ^ (x << 13 | x >>> 19) ^ x >>> 10;
l[u] = f + l[u - 7] + h + l[u - 16];
}
var g = n & a ^ n & o ^ a & o, v = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22), G = c + ((r << 26 | r >>> 6) ^ (r << 21 | r >>> 11) ^ (r << 7 | r >>> 25)) + (r & p ^ ~r & d) + s[u] + l[u];
c = d;
d = p;
p = r;
r = m + G | 0;
m = o;
o = a;
a = n;
n = G + (v + g) | 0;
}
i[0] = i[0] + n | 0;
i[1] = i[1] + a | 0;
i[2] = i[2] + o | 0;
i[3] = i[3] + m | 0;
i[4] = i[4] + r | 0;
i[5] = i[5] + p | 0;
i[6] = i[6] + d | 0;
i[7] = i[7] + c | 0;
},
_doFinalize: function() {
var e = this._data, i = e.words, n = 8 * this._nDataBytes, a = 8 * e.sigBytes;
i[a >>> 5] |= 128 << 24 - a % 32;
i[14 + (a + 64 >>> 9 << 4)] = t.floor(n / 4294967296);
i[15 + (a + 64 >>> 9 << 4)] = n;
e.sigBytes = 4 * i.length;
this._process();
return this._hash;
},
clone: function() {
var t = o.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
e.SHA256 = o._createHelper(p);
e.HmacSHA256 = o._createHmacHelper(p);
})(Math);
(function() {
var t = i, e = t.lib.WordArray, n = t.enc;
n.Utf16 = n.Utf16BE = {
stringify: function(t) {
for (var e = t.words, i = t.sigBytes, n = [], a = 0; a < i; a += 2) {
var o = e[a >>> 2] >>> 16 - a % 4 * 8 & 65535;
n.push(String.fromCharCode(o));
}
return n.join("");
},
parse: function(t) {
for (var i = t.length, n = [], a = 0; a < i; a++) n[a >>> 1] |= t.charCodeAt(a) << 16 - a % 2 * 16;
return e.create(n, 2 * i);
}
};
n.Utf16LE = {
stringify: function(t) {
for (var e = t.words, i = t.sigBytes, n = [], o = 0; o < i; o += 2) {
var m = a(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
n.push(String.fromCharCode(m));
}
return n.join("");
},
parse: function(t) {
for (var i = t.length, n = [], o = 0; o < i; o++) n[o >>> 1] |= a(t.charCodeAt(o) << 16 - o % 2 * 16);
return e.create(n, 2 * i);
}
};
function a(t) {
return t << 8 & 4278255360 | t >>> 8 & 16711935;
}
})();
(function() {
if ("function" == typeof ArrayBuffer) {
var t = i.lib.WordArray, e = t.init;
(t.init = function(t) {
t instanceof ArrayBuffer && (t = new Uint8Array(t));
(t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
if (t instanceof Uint8Array) {
for (var i = t.byteLength, n = [], a = 0; a < i; a++) n[a >>> 2] |= t[a] << 24 - a % 4 * 8;
e.call(this, n, i);
} else e.apply(this, arguments);
}).prototype = t;
}
})();
(function() {
var t = i, e = t.lib, n = e.WordArray, a = e.Hasher, o = t.algo, m = n.create([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13 ]), r = n.create([ 5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11 ]), s = n.create([ 11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6 ]), l = n.create([ 8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11 ]), p = n.create([ 0, 1518500249, 1859775393, 2400959708, 2840853838 ]), d = n.create([ 1352829926, 1548603684, 1836072691, 2053994217, 0 ]), c = o.RIPEMD160 = a.extend({
_doReset: function() {
this._hash = n.create([ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ]);
},
_doProcessBlock: function(t, e) {
for (var i = 0; i < 16; i++) {
var n = e + i, a = t[n];
t[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
}
var o, c, v, G, _, b, w, k, C, A, S, B = this._hash.words, I = p.words, N = d.words, T = m.words, j = r.words, L = s.words, M = l.words;
b = o = B[0];
w = c = B[1];
k = v = B[2];
C = G = B[3];
A = _ = B[4];
for (i = 0; i < 80; i += 1) {
S = o + t[e + T[i]] | 0;
S += i < 16 ? u(c, v, G) + I[0] : i < 32 ? y(c, v, G) + I[1] : i < 48 ? f(c, v, G) + I[2] : i < 64 ? x(c, v, G) + I[3] : h(c, v, G) + I[4];
S = (S = g(S |= 0, L[i])) + _ | 0;
o = _;
_ = G;
G = g(v, 10);
v = c;
c = S;
S = b + t[e + j[i]] | 0;
S += i < 16 ? h(w, k, C) + N[0] : i < 32 ? x(w, k, C) + N[1] : i < 48 ? f(w, k, C) + N[2] : i < 64 ? y(w, k, C) + N[3] : u(w, k, C) + N[4];
S = (S = g(S |= 0, M[i])) + A | 0;
b = A;
A = C;
C = g(k, 10);
k = w;
w = S;
}
S = B[1] + v + C | 0;
B[1] = B[2] + G + A | 0;
B[2] = B[3] + _ + b | 0;
B[3] = B[4] + o + w | 0;
B[4] = B[0] + c + k | 0;
B[0] = S;
},
_doFinalize: function() {
var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
t.sigBytes = 4 * (e.length + 1);
this._process();
for (var a = this._hash, o = a.words, m = 0; m < 5; m++) {
var r = o[m];
o[m] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
}
return a;
},
clone: function() {
var t = a.clone.call(this);
t._hash = this._hash.clone();
return t;
}
});
function u(t, e, i) {
return t ^ e ^ i;
}
function y(t, e, i) {
return t & e | ~t & i;
}
function f(t, e, i) {
return (t | ~e) ^ i;
}
function x(t, e, i) {
return t & i | e & ~i;
}
function h(t, e, i) {
return t ^ (e | ~i);
}
function g(t, e) {
return t << e | t >>> 32 - e;
}
t.RIPEMD160 = a._createHelper(c);
t.HmacRIPEMD160 = a._createHmacHelper(c);
})(Math);
(function() {
var t = i, e = t.lib.Base, n = t.enc.Utf8;
t.algo.HMAC = e.extend({
init: function(t, e) {
t = this._hasher = new t.init();
"string" == typeof e && (e = n.parse(e));
var i = t.blockSize, a = 4 * i;
e.sigBytes > a && (e = t.finalize(e));
e.clamp();
for (var o = this._oKey = e.clone(), m = this._iKey = e.clone(), r = o.words, s = m.words, l = 0; l < i; l++) {
r[l] ^= 1549556828;
s[l] ^= 909522486;
}
o.sigBytes = m.sigBytes = a;
this.reset();
},
reset: function() {
var t = this._hasher;
t.reset();
t.update(this._iKey);
},
update: function(t) {
this._hasher.update(t);
return this;
},
finalize: function(t) {
var e = this._hasher, i = e.finalize(t);
e.reset();
return e.finalize(this._oKey.clone().concat(i));
}
});
})();
(function() {
var t = i, e = t.lib, n = e.Base, a = e.WordArray, o = t.algo, m = o.SHA1, r = o.HMAC, s = o.PBKDF2 = n.extend({
cfg: n.extend({
keySize: 4,
hasher: m,
iterations: 1
}),
init: function(t) {
this.cfg = this.cfg.extend(t);
},
compute: function(t, e) {
for (var i = this.cfg, n = r.create(i.hasher, t), o = a.create(), m = a.create([ 1 ]), s = o.words, l = m.words, p = i.keySize, d = i.iterations; s.length < p; ) {
var c = n.update(e).finalize(m);
n.reset();
for (var u = c.words, y = u.length, f = c, x = 1; x < d; x++) {
f = n.finalize(f);
n.reset();
for (var h = f.words, g = 0; g < y; g++) u[g] ^= h[g];
}
o.concat(c);
l[0]++;
}
o.sigBytes = 4 * p;
return o;
}
});
t.PBKDF2 = function(t, e, i) {
return s.create(i).compute(t, e);
};
})();
(function() {
var t = i, e = t.lib, n = e.Base, a = e.WordArray, o = t.algo, m = o.MD5, r = o.EvpKDF = n.extend({
cfg: n.extend({
keySize: 4,
hasher: m,
iterations: 1
}),
init: function(t) {
this.cfg = this.cfg.extend(t);
},
compute: function(t, e) {
for (var i = this.cfg, n = i.hasher.create(), o = a.create(), m = o.words, r = i.keySize, s = i.iterations; m.length < r; ) {
l && n.update(l);
var l = n.update(t).finalize(e);
n.reset();
for (var p = 1; p < s; p++) {
l = n.finalize(l);
n.reset();
}
o.concat(l);
}
o.sigBytes = 4 * r;
return o;
}
});
t.EvpKDF = function(t, e, i) {
return r.create(i).compute(t, e);
};
})();
(function() {
var t = i, e = t.lib.WordArray, n = t.algo, a = n.SHA256, o = n.SHA224 = a.extend({
_doReset: function() {
this._hash = new e.init([ 3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428 ]);
},
_doFinalize: function() {
var t = a._doFinalize.call(this);
t.sigBytes -= 4;
return t;
}
});
t.SHA224 = a._createHelper(o);
t.HmacSHA224 = a._createHmacHelper(o);
})();
(function() {
var t = i, e = t.lib, n = e.Base, a = e.WordArray, o = t.x64 = {};
o.Word = n.extend({
init: function(t, e) {
this.high = t;
this.low = e;
}
}), o.WordArray = n.extend({
init: function(t, e) {
t = this.words = t || [];
this.sigBytes = null != e ? e : 8 * t.length;
},
toX32: function() {
for (var t = this.words, e = t.length, i = [], n = 0; n < e; n++) {
var o = t[n];
i.push(o.high);
i.push(o.low);
}
return a.create(i, this.sigBytes);
},
clone: function() {
for (var t = n.clone.call(this), e = t.words = this.words.slice(0), i = e.length, a = 0; a < i; a++) e[a] = e[a].clone();
return t;
}
});
})();
(function(t) {
var e = i, n = e.lib, a = n.WordArray, o = n.Hasher, m = e.x64.Word, r = e.algo, s = [], l = [], p = [];
(function() {
for (var t = 1, e = 0, i = 0; i < 24; i++) {
s[t + 5 * e] = (i + 1) * (i + 2) / 2 % 64;
var n = (2 * t + 3 * e) % 5;
t = e % 5;
e = n;
}
for (t = 0; t < 5; t++) for (e = 0; e < 5; e++) l[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
for (var a = 1, o = 0; o < 24; o++) {
for (var r = 0, d = 0, c = 0; c < 7; c++) {
if (1 & a) {
var u = (1 << c) - 1;
u < 32 ? d ^= 1 << u : r ^= 1 << u - 32;
}
128 & a ? a = a << 1 ^ 113 : a <<= 1;
}
p[o] = m.create(r, d);
}
})();
var d = [];
(function() {
for (var t = 0; t < 25; t++) d[t] = m.create();
})();
var c = r.SHA3 = o.extend({
cfg: o.cfg.extend({
outputLength: 512
}),
_doReset: function() {
for (var t = this._state = [], e = 0; e < 25; e++) t[e] = new m.init();
this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
},
_doProcessBlock: function(t, e) {
for (var i = this._state, n = this.blockSize / 2, a = 0; a < n; a++) {
var o = t[e + 2 * a], m = t[e + 2 * a + 1];
o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
m = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8);
(B = i[a]).high ^= m;
B.low ^= o;
}
for (var r = 0; r < 24; r++) {
for (var c = 0; c < 5; c++) {
for (var u = 0, y = 0, f = 0; f < 5; f++) {
u ^= (B = i[c + 5 * f]).high;
y ^= B.low;
}
var x = d[c];
x.high = u;
x.low = y;
}
for (c = 0; c < 5; c++) {
var h = d[(c + 4) % 5], g = d[(c + 1) % 5], v = g.high, G = g.low;
for (u = h.high ^ (v << 1 | G >>> 31), y = h.low ^ (G << 1 | v >>> 31), f = 0; f < 5; f++) {
(B = i[c + 5 * f]).high ^= u;
B.low ^= y;
}
}
for (var _ = 1; _ < 25; _++) {
var b = (B = i[_]).high, w = B.low, k = s[_];
k < 32 ? (u = b << k | w >>> 32 - k, y = w << k | b >>> 32 - k) : (u = w << k - 32 | b >>> 64 - k, 
y = b << k - 32 | w >>> 64 - k);
var C = d[l[_]];
C.high = u;
C.low = y;
}
var A = d[0], S = i[0];
A.high = S.high;
A.low = S.low;
for (c = 0; c < 5; c++) for (f = 0; f < 5; f++) {
var B = i[_ = c + 5 * f], I = d[_], N = d[(c + 1) % 5 + 5 * f], T = d[(c + 2) % 5 + 5 * f];
B.high = I.high ^ ~N.high & T.high;
B.low = I.low ^ ~N.low & T.low;
}
B = i[0];
var j = p[r];
B.high ^= j.high;
B.low ^= j.low;
}
},
_doFinalize: function() {
var e = this._data, i = e.words, n = (this._nDataBytes, 8 * e.sigBytes), o = 32 * this.blockSize;
i[n >>> 5] |= 1 << 24 - n % 32;
i[(t.ceil((n + 1) / o) * o >>> 5) - 1] |= 128;
e.sigBytes = 4 * i.length;
this._process();
for (var m = this._state, r = this.cfg.outputLength / 8, s = r / 8, l = [], p = 0; p < s; p++) {
var d = m[p], c = d.high, u = d.low;
c = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
l.push(u);
l.push(c);
}
return new a.init(l, r);
},
clone: function() {
for (var t = o.clone.call(this), e = t._state = this._state.slice(0), i = 0; i < 25; i++) e[i] = e[i].clone();
return t;
}
});
e.SHA3 = o._createHelper(c);
e.HmacSHA3 = o._createHmacHelper(c);
})(Math);
(function() {
var t = i, e = t.lib.Hasher, n = t.x64, a = n.Word, o = n.WordArray, m = t.algo;
function r() {
return a.create.apply(a, arguments);
}
var s = [ r(1116352408, 3609767458), r(1899447441, 602891725), r(3049323471, 3964484399), r(3921009573, 2173295548), r(961987163, 4081628472), r(1508970993, 3053834265), r(2453635748, 2937671579), r(2870763221, 3664609560), r(3624381080, 2734883394), r(310598401, 1164996542), r(607225278, 1323610764), r(1426881987, 3590304994), r(1925078388, 4068182383), r(2162078206, 991336113), r(2614888103, 633803317), r(3248222580, 3479774868), r(3835390401, 2666613458), r(4022224774, 944711139), r(264347078, 2341262773), r(604807628, 2007800933), r(770255983, 1495990901), r(1249150122, 1856431235), r(1555081692, 3175218132), r(1996064986, 2198950837), r(2554220882, 3999719339), r(2821834349, 766784016), r(2952996808, 2566594879), r(3210313671, 3203337956), r(3336571891, 1034457026), r(3584528711, 2466948901), r(113926993, 3758326383), r(338241895, 168717936), r(666307205, 1188179964), r(773529912, 1546045734), r(1294757372, 1522805485), r(1396182291, 2643833823), r(1695183700, 2343527390), r(1986661051, 1014477480), r(2177026350, 1206759142), r(2456956037, 344077627), r(2730485921, 1290863460), r(2820302411, 3158454273), r(3259730800, 3505952657), r(3345764771, 106217008), r(3516065817, 3606008344), r(3600352804, 1432725776), r(4094571909, 1467031594), r(275423344, 851169720), r(430227734, 3100823752), r(506948616, 1363258195), r(659060556, 3750685593), r(883997877, 3785050280), r(958139571, 3318307427), r(1322822218, 3812723403), r(1537002063, 2003034995), r(1747873779, 3602036899), r(1955562222, 1575990012), r(2024104815, 1125592928), r(2227730452, 2716904306), r(2361852424, 442776044), r(2428436474, 593698344), r(2756734187, 3733110249), r(3204031479, 2999351573), r(3329325298, 3815920427), r(3391569614, 3928383900), r(3515267271, 566280711), r(3940187606, 3454069534), r(4118630271, 4000239992), r(116418474, 1914138554), r(174292421, 2731055270), r(289380356, 3203993006), r(460393269, 320620315), r(685471733, 587496836), r(852142971, 1086792851), r(1017036298, 365543100), r(1126000580, 2618297676), r(1288033470, 3409855158), r(1501505948, 4234509866), r(1607167915, 987167468), r(1816402316, 1246189591) ], l = [];
(function() {
for (var t = 0; t < 80; t++) l[t] = r();
})();
var p = m.SHA512 = e.extend({
_doReset: function() {
this._hash = new o.init([ new a.init(1779033703, 4089235720), new a.init(3144134277, 2227873595), new a.init(1013904242, 4271175723), new a.init(2773480762, 1595750129), new a.init(1359893119, 2917565137), new a.init(2600822924, 725511199), new a.init(528734635, 4215389547), new a.init(1541459225, 327033209) ]);
},
_doProcessBlock: function(t, e) {
for (var i = this._hash.words, n = i[0], a = i[1], o = i[2], m = i[3], r = i[4], p = i[5], d = i[6], c = i[7], u = n.high, y = n.low, f = a.high, x = a.low, h = o.high, g = o.low, v = m.high, G = m.low, _ = r.high, b = r.low, w = p.high, k = p.low, C = d.high, A = d.low, S = c.high, B = c.low, I = u, N = y, T = f, j = x, L = h, M = g, O = v, F = G, E = _, D = b, R = w, P = k, V = C, U = A, q = S, z = B, H = 0; H < 80; H++) {
var Y = l[H];
if (H < 16) var J = Y.high = 0 | t[e + 2 * H], W = Y.low = 0 | t[e + 2 * H + 1]; else {
var $ = l[H - 15], K = $.high, X = $.low, Z = (K >>> 1 | X << 31) ^ (K >>> 8 | X << 24) ^ K >>> 7, Q = (X >>> 1 | K << 31) ^ (X >>> 8 | K << 24) ^ (X >>> 7 | K << 25), tt = l[H - 2], et = tt.high, it = tt.low, nt = (et >>> 19 | it << 13) ^ (et << 3 | it >>> 29) ^ et >>> 6, at = (it >>> 19 | et << 13) ^ (it << 3 | et >>> 29) ^ (it >>> 6 | et << 26), ot = l[H - 7], mt = ot.high, rt = ot.low, st = l[H - 16], lt = st.high, pt = st.low;
J = (J = (J = Z + mt + ((W = Q + rt) >>> 0 < Q >>> 0 ? 1 : 0)) + nt + ((W += at) >>> 0 < at >>> 0 ? 1 : 0)) + lt + ((W += pt) >>> 0 < pt >>> 0 ? 1 : 0);
Y.high = J;
Y.low = W;
}
var dt, ct = E & R ^ ~E & V, ut = D & P ^ ~D & U, yt = I & T ^ I & L ^ T & L, ft = N & j ^ N & M ^ j & M, xt = (I >>> 28 | N << 4) ^ (I << 30 | N >>> 2) ^ (I << 25 | N >>> 7), ht = (N >>> 28 | I << 4) ^ (N << 30 | I >>> 2) ^ (N << 25 | I >>> 7), gt = (E >>> 14 | D << 18) ^ (E >>> 18 | D << 14) ^ (E << 23 | D >>> 9), vt = (D >>> 14 | E << 18) ^ (D >>> 18 | E << 14) ^ (D << 23 | E >>> 9), Gt = s[H], _t = Gt.high, bt = Gt.low, wt = q + gt + ((dt = z + vt) >>> 0 < z >>> 0 ? 1 : 0), kt = ht + ft;
q = V;
z = U;
V = R;
U = P;
R = E;
P = D;
E = O + (wt = (wt = (wt = wt + ct + ((dt += ut) >>> 0 < ut >>> 0 ? 1 : 0)) + _t + ((dt += bt) >>> 0 < bt >>> 0 ? 1 : 0)) + J + ((dt += W) >>> 0 < W >>> 0 ? 1 : 0)) + ((D = F + dt | 0) >>> 0 < F >>> 0 ? 1 : 0) | 0;
O = L;
F = M;
L = T;
M = j;
T = I;
j = N;
I = wt + (xt + yt + (kt >>> 0 < ht >>> 0 ? 1 : 0)) + ((N = dt + kt | 0) >>> 0 < dt >>> 0 ? 1 : 0) | 0;
}
y = n.low = y + N;
n.high = u + I + (y >>> 0 < N >>> 0 ? 1 : 0);
x = a.low = x + j;
a.high = f + T + (x >>> 0 < j >>> 0 ? 1 : 0);
g = o.low = g + M;
o.high = h + L + (g >>> 0 < M >>> 0 ? 1 : 0);
G = m.low = G + F;
m.high = v + O + (G >>> 0 < F >>> 0 ? 1 : 0);
b = r.low = b + D;
r.high = _ + E + (b >>> 0 < D >>> 0 ? 1 : 0);
k = p.low = k + P;
p.high = w + R + (k >>> 0 < P >>> 0 ? 1 : 0);
A = d.low = A + U;
d.high = C + V + (A >>> 0 < U >>> 0 ? 1 : 0);
B = c.low = B + z;
c.high = S + q + (B >>> 0 < z >>> 0 ? 1 : 0);
},
_doFinalize: function() {
var t = this._data, e = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
e[n >>> 5] |= 128 << 24 - n % 32;
e[30 + (n + 128 >>> 10 << 5)] = Math.floor(i / 4294967296);
e[31 + (n + 128 >>> 10 << 5)] = i;
t.sigBytes = 4 * e.length;
this._process();
return this._hash.toX32();
},
clone: function() {
var t = e.clone.call(this);
t._hash = this._hash.clone();
return t;
},
blockSize: 32
});
t.SHA512 = e._createHelper(p);
t.HmacSHA512 = e._createHmacHelper(p);
})();
(function() {
var t = i, e = t.x64, n = e.Word, a = e.WordArray, o = t.algo, m = o.SHA512, r = o.SHA384 = m.extend({
_doReset: function() {
this._hash = new a.init([ new n.init(3418070365, 3238371032), new n.init(1654270250, 914150663), new n.init(2438529370, 812702999), new n.init(355462360, 4144912697), new n.init(1731405415, 4290775857), new n.init(2394180231, 1750603025), new n.init(3675008525, 1694076839), new n.init(1203062813, 3204075428) ]);
},
_doFinalize: function() {
var t = m._doFinalize.call(this);
t.sigBytes -= 16;
return t;
}
});
t.SHA384 = m._createHelper(r);
t.HmacSHA384 = m._createHmacHelper(r);
})();
i.lib.Cipher || function(t) {
var e = i, n = e.lib, a = n.Base, o = n.WordArray, m = n.BufferedBlockAlgorithm, r = e.enc, s = (r.Utf8, 
r.Base64), l = e.algo.EvpKDF, p = n.Cipher = m.extend({
cfg: a.extend(),
createEncryptor: function(t, e) {
return this.create(this._ENC_XFORM_MODE, t, e);
},
createDecryptor: function(t, e) {
return this.create(this._DEC_XFORM_MODE, t, e);
},
init: function(t, e, i) {
this.cfg = this.cfg.extend(i);
this._xformMode = t;
this._key = e;
this.reset();
},
reset: function() {
m.reset.call(this);
this._doReset();
},
process: function(t) {
this._append(t);
return this._process();
},
finalize: function(t) {
t && this._append(t);
return this._doFinalize();
},
keySize: 4,
ivSize: 4,
_ENC_XFORM_MODE: 1,
_DEC_XFORM_MODE: 2,
_createHelper: function() {
function t(t) {
return "string" == typeof t ? v : h;
}
return function(e) {
return {
encrypt: function(i, n, a) {
return t(n).encrypt(e, i, n, a);
},
decrypt: function(i, n, a) {
return t(n).decrypt(e, i, n, a);
}
};
};
}()
}), d = (n.StreamCipher = p.extend({
_doFinalize: function() {
return this._process(!0);
},
blockSize: 1
}), e.mode = {}), c = n.BlockCipherMode = a.extend({
createEncryptor: function(t, e) {
return this.Encryptor.create(t, e);
},
createDecryptor: function(t, e) {
return this.Decryptor.create(t, e);
},
init: function(t, e) {
this._cipher = t;
this._iv = e;
}
}), u = d.CBC = function() {
var e = c.extend();
e.Encryptor = e.extend({
processBlock: function(t, e) {
var n = this._cipher, a = n.blockSize;
i.call(this, t, e, a);
n.encryptBlock(t, e);
this._prevBlock = t.slice(e, e + a);
}
});
e.Decryptor = e.extend({
processBlock: function(t, e) {
var n = this._cipher, a = n.blockSize, o = t.slice(e, e + a);
n.decryptBlock(t, e);
i.call(this, t, e, a);
this._prevBlock = o;
}
});
function i(e, i, n) {
var a = this._iv;
if (a) {
var o = a;
this._iv = t;
} else o = this._prevBlock;
for (var m = 0; m < n; m++) e[i + m] ^= o[m];
}
return e;
}(), y = (e.pad = {}).Pkcs7 = {
pad: function(t, e) {
for (var i = 4 * e, n = i - t.sigBytes % i, a = n << 24 | n << 16 | n << 8 | n, m = [], r = 0; r < n; r += 4) m.push(a);
var s = o.create(m, n);
t.concat(s);
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
}, f = (n.BlockCipher = p.extend({
cfg: p.cfg.extend({
mode: u,
padding: y
}),
reset: function() {
p.reset.call(this);
var t = this.cfg, e = t.iv, i = t.mode;
if (this._xformMode == this._ENC_XFORM_MODE) var n = i.createEncryptor; else {
n = i.createDecryptor;
this._minBufferSize = 1;
}
this._mode = n.call(i, this, e && e.words);
},
_doProcessBlock: function(t, e) {
this._mode.processBlock(t, e);
},
_doFinalize: function() {
var t = this.cfg.padding;
if (this._xformMode == this._ENC_XFORM_MODE) {
t.pad(this._data, this.blockSize);
var e = this._process(!0);
} else {
e = this._process(!0);
t.unpad(e);
}
return e;
},
blockSize: 4
}), n.CipherParams = a.extend({
init: function(t) {
this.mixIn(t);
},
toString: function(t) {
return (t || this.formatter).stringify(this);
}
})), x = (e.format = {}).OpenSSL = {
stringify: function(t) {
var e = t.ciphertext, i = t.salt;
if (i) var n = o.create([ 1398893684, 1701076831 ]).concat(i).concat(e); else n = e;
return n.toString(s);
},
parse: function(t) {
var e = s.parse(t), i = e.words;
if (1398893684 == i[0] && 1701076831 == i[1]) {
var n = o.create(i.slice(2, 4));
i.splice(0, 4);
e.sigBytes -= 16;
}
return f.create({
ciphertext: e,
salt: n
});
}
}, h = n.SerializableCipher = a.extend({
cfg: a.extend({
format: x
}),
encrypt: function(t, e, i, n) {
n = this.cfg.extend(n);
var a = t.createEncryptor(i, n), o = a.finalize(e), m = a.cfg;
return f.create({
ciphertext: o,
key: i,
iv: m.iv,
algorithm: t,
mode: m.mode,
padding: m.padding,
blockSize: t.blockSize,
formatter: n.format
});
},
decrypt: function(t, e, i, n) {
n = this.cfg.extend(n);
e = this._parse(e, n.format);
return t.createDecryptor(i, n).finalize(e.ciphertext);
},
_parse: function(t, e) {
return "string" == typeof t ? e.parse(t, this) : t;
}
}), g = (e.kdf = {}).OpenSSL = {
execute: function(t, e, i, n) {
n || (n = o.random(8));
var a = l.create({
keySize: e + i
}).compute(t, n), m = o.create(a.words.slice(e), 4 * i);
a.sigBytes = 4 * e;
return f.create({
key: a,
iv: m,
salt: n
});
}
}, v = n.PasswordBasedCipher = h.extend({
cfg: h.cfg.extend({
kdf: g
}),
encrypt: function(t, e, i, n) {
var a = (n = this.cfg.extend(n)).kdf.execute(i, t.keySize, t.ivSize);
n.iv = a.iv;
var o = h.encrypt.call(this, t, e, a.key, n);
o.mixIn(a);
return o;
},
decrypt: function(t, e, i, n) {
n = this.cfg.extend(n);
e = this._parse(e, n.format);
var a = n.kdf.execute(i, t.keySize, t.ivSize, e.salt);
n.iv = a.iv;
return h.decrypt.call(this, t, e, a.key, n);
}
});
}();
i.mode.CFB = function() {
var t = i.lib.BlockCipherMode.extend();
t.Encryptor = t.extend({
processBlock: function(t, i) {
var n = this._cipher, a = n.blockSize;
e.call(this, t, i, a, n);
this._prevBlock = t.slice(i, i + a);
}
});
t.Decryptor = t.extend({
processBlock: function(t, i) {
var n = this._cipher, a = n.blockSize, o = t.slice(i, i + a);
e.call(this, t, i, a, n);
this._prevBlock = o;
}
});
function e(t, e, i, n) {
var a = this._iv;
if (a) {
var o = a.slice(0);
this._iv = void 0;
} else o = this._prevBlock;
n.encryptBlock(o, 0);
for (var m = 0; m < i; m++) t[e + m] ^= o[m];
}
return t;
}();
i.mode.ECB = function() {
var t = i.lib.BlockCipherMode.extend();
t.Encryptor = t.extend({
processBlock: function(t, e) {
this._cipher.encryptBlock(t, e);
}
});
t.Decryptor = t.extend({
processBlock: function(t, e) {
this._cipher.decryptBlock(t, e);
}
});
return t;
}();
i.pad.AnsiX923 = {
pad: function(t, e) {
var i = t.sigBytes, n = 4 * e, a = n - i % n, o = i + a - 1;
t.clamp();
t.words[o >>> 2] |= a << 24 - o % 4 * 8;
t.sigBytes += a;
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
};
i.pad.Iso10126 = {
pad: function(t, e) {
var n = 4 * e, a = n - t.sigBytes % n;
t.concat(i.lib.WordArray.random(a - 1)).concat(i.lib.WordArray.create([ a << 24 ], 1));
},
unpad: function(t) {
var e = 255 & t.words[t.sigBytes - 1 >>> 2];
t.sigBytes -= e;
}
};
i.pad.Iso97971 = {
pad: function(t, e) {
t.concat(i.lib.WordArray.create([ 2147483648 ], 1));
i.pad.ZeroPadding.pad(t, e);
},
unpad: function(t) {
i.pad.ZeroPadding.unpad(t);
t.sigBytes--;
}
};
i.mode.OFB = function() {
var t = i.lib.BlockCipherMode.extend(), e = t.Encryptor = t.extend({
processBlock: function(t, e) {
var i = this._cipher, n = i.blockSize, a = this._iv, o = this._keystream;
if (a) {
o = this._keystream = a.slice(0);
this._iv = void 0;
}
i.encryptBlock(o, 0);
for (var m = 0; m < n; m++) t[e + m] ^= o[m];
}
});
t.Decryptor = e;
return t;
}();
i.pad.NoPadding = {
pad: function() {},
unpad: function() {}
};
(function() {
var t = i, e = t.lib.CipherParams, n = t.enc.Hex;
t.format.Hex = {
stringify: function(t) {
return t.ciphertext.toString(n);
},
parse: function(t) {
var i = n.parse(t);
return e.create({
ciphertext: i
});
}
};
})();
(function() {
var t = i, e = t.lib.BlockCipher, n = t.algo, a = [], o = [], m = [], r = [], s = [], l = [], p = [], d = [], c = [], u = [];
(function() {
for (var t = [], e = 0; e < 256; e++) t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
var i = 0, n = 0;
for (e = 0; e < 256; e++) {
var y = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
y = y >>> 8 ^ 255 & y ^ 99;
a[i] = y;
o[y] = i;
var f = t[i], x = t[f], h = t[x], g = 257 * t[y] ^ 16843008 * y;
m[i] = g << 24 | g >>> 8;
r[i] = g << 16 | g >>> 16;
s[i] = g << 8 | g >>> 24;
l[i] = g;
g = 16843009 * h ^ 65537 * x ^ 257 * f ^ 16843008 * i;
p[y] = g << 24 | g >>> 8;
d[y] = g << 16 | g >>> 16;
c[y] = g << 8 | g >>> 24;
u[y] = g;
if (i) {
i = f ^ t[t[t[h ^ f]]];
n ^= t[t[n]];
} else i = n = 1;
}
})();
var y = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ], f = n.AES = e.extend({
_doReset: function() {
for (var t = this._key, e = t.words, i = t.sigBytes / 4, n = 4 * ((this._nRounds = i + 6) + 1), o = this._keySchedule = [], m = 0; m < n; m++) if (m < i) o[m] = e[m]; else {
var r = o[m - 1];
if (m % i) i > 6 && m % i == 4 && (r = a[r >>> 24] << 24 | a[r >>> 16 & 255] << 16 | a[r >>> 8 & 255] << 8 | a[255 & r]); else {
r = a[(r = r << 8 | r >>> 24) >>> 24] << 24 | a[r >>> 16 & 255] << 16 | a[r >>> 8 & 255] << 8 | a[255 & r];
r ^= y[m / i | 0] << 24;
}
o[m] = o[m - i] ^ r;
}
for (var s = this._invKeySchedule = [], l = 0; l < n; l++) {
m = n - l;
r = l % 4 ? o[m] : o[m - 4];
s[l] = l < 4 || m <= 4 ? r : p[a[r >>> 24]] ^ d[a[r >>> 16 & 255]] ^ c[a[r >>> 8 & 255]] ^ u[a[255 & r]];
}
},
encryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._keySchedule, m, r, s, l, a);
},
decryptBlock: function(t, e) {
var i = t[e + 1];
t[e + 1] = t[e + 3];
t[e + 3] = i;
this._doCryptBlock(t, e, this._invKeySchedule, p, d, c, u, o);
i = t[e + 1];
t[e + 1] = t[e + 3];
t[e + 3] = i;
},
_doCryptBlock: function(t, e, i, n, a, o, m, r) {
for (var s = this._nRounds, l = t[e] ^ i[0], p = t[e + 1] ^ i[1], d = t[e + 2] ^ i[2], c = t[e + 3] ^ i[3], u = 4, y = 1; y < s; y++) {
var f = n[l >>> 24] ^ a[p >>> 16 & 255] ^ o[d >>> 8 & 255] ^ m[255 & c] ^ i[u++], x = n[p >>> 24] ^ a[d >>> 16 & 255] ^ o[c >>> 8 & 255] ^ m[255 & l] ^ i[u++], h = n[d >>> 24] ^ a[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ m[255 & p] ^ i[u++], g = n[c >>> 24] ^ a[l >>> 16 & 255] ^ o[p >>> 8 & 255] ^ m[255 & d] ^ i[u++];
l = f;
p = x;
d = h;
c = g;
}
f = (r[l >>> 24] << 24 | r[p >>> 16 & 255] << 16 | r[d >>> 8 & 255] << 8 | r[255 & c]) ^ i[u++], 
x = (r[p >>> 24] << 24 | r[d >>> 16 & 255] << 16 | r[c >>> 8 & 255] << 8 | r[255 & l]) ^ i[u++], 
h = (r[d >>> 24] << 24 | r[c >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & p]) ^ i[u++], 
g = (r[c >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[p >>> 8 & 255] << 8 | r[255 & d]) ^ i[u++];
t[e] = f;
t[e + 1] = x;
t[e + 2] = h;
t[e + 3] = g;
},
keySize: 8
});
t.AES = e._createHelper(f);
})();
(function() {
var t = i, e = t.lib, n = e.WordArray, a = e.BlockCipher, o = t.algo, m = [ 57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ], r = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32 ], s = [ 1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28 ], l = [ {
0: 8421888,
268435456: 32768,
536870912: 8421378,
805306368: 2,
1073741824: 512,
1342177280: 8421890,
1610612736: 8389122,
1879048192: 8388608,
2147483648: 514,
2415919104: 8389120,
2684354560: 33280,
2952790016: 8421376,
3221225472: 32770,
3489660928: 8388610,
3758096384: 0,
4026531840: 33282,
134217728: 0,
402653184: 8421890,
671088640: 33282,
939524096: 32768,
1207959552: 8421888,
1476395008: 512,
1744830464: 8421378,
2013265920: 2,
2281701376: 8389120,
2550136832: 33280,
2818572288: 8421376,
3087007744: 8389122,
3355443200: 8388610,
3623878656: 32770,
3892314112: 514,
4160749568: 8388608,
1: 32768,
268435457: 2,
536870913: 8421888,
805306369: 8388608,
1073741825: 8421378,
1342177281: 33280,
1610612737: 512,
1879048193: 8389122,
2147483649: 8421890,
2415919105: 8421376,
2684354561: 8388610,
2952790017: 33282,
3221225473: 514,
3489660929: 8389120,
3758096385: 32770,
4026531841: 0,
134217729: 8421890,
402653185: 8421376,
671088641: 8388608,
939524097: 512,
1207959553: 32768,
1476395009: 8388610,
1744830465: 2,
2013265921: 33282,
2281701377: 32770,
2550136833: 8389122,
2818572289: 514,
3087007745: 8421888,
3355443201: 8389120,
3623878657: 0,
3892314113: 33280,
4160749569: 8421378
}, {
0: 1074282512,
16777216: 16384,
33554432: 524288,
50331648: 1074266128,
67108864: 1073741840,
83886080: 1074282496,
100663296: 1073758208,
117440512: 16,
134217728: 540672,
150994944: 1073758224,
167772160: 1073741824,
184549376: 540688,
201326592: 524304,
218103808: 0,
234881024: 16400,
251658240: 1074266112,
8388608: 1073758208,
25165824: 540688,
41943040: 16,
58720256: 1073758224,
75497472: 1074282512,
92274688: 1073741824,
109051904: 524288,
125829120: 1074266128,
142606336: 524304,
159383552: 0,
176160768: 16384,
192937984: 1074266112,
209715200: 1073741840,
226492416: 540672,
243269632: 1074282496,
260046848: 16400,
268435456: 0,
285212672: 1074266128,
301989888: 1073758224,
318767104: 1074282496,
335544320: 1074266112,
352321536: 16,
369098752: 540688,
385875968: 16384,
402653184: 16400,
419430400: 524288,
436207616: 524304,
452984832: 1073741840,
469762048: 540672,
486539264: 1073758208,
503316480: 1073741824,
520093696: 1074282512,
276824064: 540688,
293601280: 524288,
310378496: 1074266112,
327155712: 16384,
343932928: 1073758208,
360710144: 1074282512,
377487360: 16,
394264576: 1073741824,
411041792: 1074282496,
427819008: 1073741840,
444596224: 1073758224,
461373440: 524304,
478150656: 0,
494927872: 16400,
511705088: 1074266128,
528482304: 540672
}, {
0: 260,
1048576: 0,
2097152: 67109120,
3145728: 65796,
4194304: 65540,
5242880: 67108868,
6291456: 67174660,
7340032: 67174400,
8388608: 67108864,
9437184: 67174656,
10485760: 65792,
11534336: 67174404,
12582912: 67109124,
13631488: 65536,
14680064: 4,
15728640: 256,
524288: 67174656,
1572864: 67174404,
2621440: 0,
3670016: 67109120,
4718592: 67108868,
5767168: 65536,
6815744: 65540,
7864320: 260,
8912896: 4,
9961472: 256,
11010048: 67174400,
12058624: 65796,
13107200: 65792,
14155776: 67109124,
15204352: 67174660,
16252928: 67108864,
16777216: 67174656,
17825792: 65540,
18874368: 65536,
19922944: 67109120,
20971520: 256,
22020096: 67174660,
23068672: 67108868,
24117248: 0,
25165824: 67109124,
26214400: 67108864,
27262976: 4,
28311552: 65792,
29360128: 67174400,
30408704: 260,
31457280: 65796,
32505856: 67174404,
17301504: 67108864,
18350080: 260,
19398656: 67174656,
20447232: 0,
21495808: 65540,
22544384: 67109120,
23592960: 256,
24641536: 67174404,
25690112: 65536,
26738688: 67174660,
27787264: 65796,
28835840: 67108868,
29884416: 67109124,
30932992: 67174400,
31981568: 4,
33030144: 65792
}, {
0: 2151682048,
65536: 2147487808,
131072: 4198464,
196608: 2151677952,
262144: 0,
327680: 4198400,
393216: 2147483712,
458752: 4194368,
524288: 2147483648,
589824: 4194304,
655360: 64,
720896: 2147487744,
786432: 2151678016,
851968: 4160,
917504: 4096,
983040: 2151682112,
32768: 2147487808,
98304: 64,
163840: 2151678016,
229376: 2147487744,
294912: 4198400,
360448: 2151682112,
425984: 0,
491520: 2151677952,
557056: 4096,
622592: 2151682048,
688128: 4194304,
753664: 4160,
819200: 2147483648,
884736: 4194368,
950272: 4198464,
1015808: 2147483712,
1048576: 4194368,
1114112: 4198400,
1179648: 2147483712,
1245184: 0,
1310720: 4160,
1376256: 2151678016,
1441792: 2151682048,
1507328: 2147487808,
1572864: 2151682112,
1638400: 2147483648,
1703936: 2151677952,
1769472: 4198464,
1835008: 2147487744,
1900544: 4194304,
1966080: 64,
2031616: 4096,
1081344: 2151677952,
1146880: 2151682112,
1212416: 0,
1277952: 4198400,
1343488: 4194368,
1409024: 2147483648,
1474560: 2147487808,
1540096: 64,
1605632: 2147483712,
1671168: 4096,
1736704: 2147487744,
1802240: 2151678016,
1867776: 4160,
1933312: 2151682048,
1998848: 4194304,
2064384: 4198464
}, {
0: 128,
4096: 17039360,
8192: 262144,
12288: 536870912,
16384: 537133184,
20480: 16777344,
24576: 553648256,
28672: 262272,
32768: 16777216,
36864: 537133056,
40960: 536871040,
45056: 553910400,
49152: 553910272,
53248: 0,
57344: 17039488,
61440: 553648128,
2048: 17039488,
6144: 553648256,
10240: 128,
14336: 17039360,
18432: 262144,
22528: 537133184,
26624: 553910272,
30720: 536870912,
34816: 537133056,
38912: 0,
43008: 553910400,
47104: 16777344,
51200: 536871040,
55296: 553648128,
59392: 16777216,
63488: 262272,
65536: 262144,
69632: 128,
73728: 536870912,
77824: 553648256,
81920: 16777344,
86016: 553910272,
90112: 537133184,
94208: 16777216,
98304: 553910400,
102400: 553648128,
106496: 17039360,
110592: 537133056,
114688: 262272,
118784: 536871040,
122880: 0,
126976: 17039488,
67584: 553648256,
71680: 16777216,
75776: 17039360,
79872: 537133184,
83968: 536870912,
88064: 17039488,
92160: 128,
96256: 553910272,
100352: 262272,
104448: 553910400,
108544: 0,
112640: 553648128,
116736: 16777344,
120832: 262144,
124928: 537133056,
129024: 536871040
}, {
0: 268435464,
256: 8192,
512: 270532608,
768: 270540808,
1024: 268443648,
1280: 2097152,
1536: 2097160,
1792: 268435456,
2048: 0,
2304: 268443656,
2560: 2105344,
2816: 8,
3072: 270532616,
3328: 2105352,
3584: 8200,
3840: 270540800,
128: 270532608,
384: 270540808,
640: 8,
896: 2097152,
1152: 2105352,
1408: 268435464,
1664: 268443648,
1920: 8200,
2176: 2097160,
2432: 8192,
2688: 268443656,
2944: 270532616,
3200: 0,
3456: 270540800,
3712: 2105344,
3968: 268435456,
4096: 268443648,
4352: 270532616,
4608: 270540808,
4864: 8200,
5120: 2097152,
5376: 268435456,
5632: 268435464,
5888: 2105344,
6144: 2105352,
6400: 0,
6656: 8,
6912: 270532608,
7168: 8192,
7424: 268443656,
7680: 270540800,
7936: 2097160,
4224: 8,
4480: 2105344,
4736: 2097152,
4992: 268435464,
5248: 268443648,
5504: 8200,
5760: 270540808,
6016: 270532608,
6272: 270540800,
6528: 270532616,
6784: 8192,
7040: 2105352,
7296: 2097160,
7552: 0,
7808: 268435456,
8064: 268443656
}, {
0: 1048576,
16: 33555457,
32: 1024,
48: 1049601,
64: 34604033,
80: 0,
96: 1,
112: 34603009,
128: 33555456,
144: 1048577,
160: 33554433,
176: 34604032,
192: 34603008,
208: 1025,
224: 1049600,
240: 33554432,
8: 34603009,
24: 0,
40: 33555457,
56: 34604032,
72: 1048576,
88: 33554433,
104: 33554432,
120: 1025,
136: 1049601,
152: 33555456,
168: 34603008,
184: 1048577,
200: 1024,
216: 34604033,
232: 1,
248: 1049600,
256: 33554432,
272: 1048576,
288: 33555457,
304: 34603009,
320: 1048577,
336: 33555456,
352: 34604032,
368: 1049601,
384: 1025,
400: 34604033,
416: 1049600,
432: 1,
448: 0,
464: 34603008,
480: 33554433,
496: 1024,
264: 1049600,
280: 33555457,
296: 34603009,
312: 1,
328: 33554432,
344: 1048576,
360: 1025,
376: 34604032,
392: 33554433,
408: 34603008,
424: 0,
440: 34604033,
456: 1049601,
472: 1024,
488: 33555456,
504: 1048577
}, {
0: 134219808,
1: 131072,
2: 134217728,
3: 32,
4: 131104,
5: 134350880,
6: 134350848,
7: 2048,
8: 134348800,
9: 134219776,
10: 133120,
11: 134348832,
12: 2080,
13: 0,
14: 134217760,
15: 133152,
2147483648: 2048,
2147483649: 134350880,
2147483650: 134219808,
2147483651: 134217728,
2147483652: 134348800,
2147483653: 133120,
2147483654: 133152,
2147483655: 32,
2147483656: 134217760,
2147483657: 2080,
2147483658: 131104,
2147483659: 134350848,
2147483660: 0,
2147483661: 134348832,
2147483662: 134219776,
2147483663: 131072,
16: 133152,
17: 134350848,
18: 32,
19: 2048,
20: 134219776,
21: 134217760,
22: 134348832,
23: 131072,
24: 0,
25: 131104,
26: 134348800,
27: 134219808,
28: 134350880,
29: 133120,
30: 2080,
31: 134217728,
2147483664: 131072,
2147483665: 2048,
2147483666: 134348832,
2147483667: 133152,
2147483668: 32,
2147483669: 134348800,
2147483670: 134217728,
2147483671: 134219808,
2147483672: 134350880,
2147483673: 134217760,
2147483674: 134219776,
2147483675: 0,
2147483676: 133120,
2147483677: 2080,
2147483678: 131104,
2147483679: 134350848
} ], p = [ 4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679 ], d = o.DES = a.extend({
_doReset: function() {
for (var t = this._key.words, e = [], i = 0; i < 56; i++) {
var n = m[i] - 1;
e[i] = t[n >>> 5] >>> 31 - n % 32 & 1;
}
for (var a = this._subKeys = [], o = 0; o < 16; o++) {
var l = a[o] = [], p = s[o];
for (i = 0; i < 24; i++) {
l[i / 6 | 0] |= e[(r[i] - 1 + p) % 28] << 31 - i % 6;
l[4 + (i / 6 | 0)] |= e[28 + (r[i + 24] - 1 + p) % 28] << 31 - i % 6;
}
l[0] = l[0] << 1 | l[0] >>> 31;
for (i = 1; i < 7; i++) l[i] = l[i] >>> 4 * (i - 1) + 3;
l[7] = l[7] << 5 | l[7] >>> 27;
}
var d = this._invSubKeys = [];
for (i = 0; i < 16; i++) d[i] = a[15 - i];
},
encryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._subKeys);
},
decryptBlock: function(t, e) {
this._doCryptBlock(t, e, this._invSubKeys);
},
_doCryptBlock: function(t, e, i) {
this._lBlock = t[e];
this._rBlock = t[e + 1];
c.call(this, 4, 252645135);
c.call(this, 16, 65535);
u.call(this, 2, 858993459);
u.call(this, 8, 16711935);
c.call(this, 1, 1431655765);
for (var n = 0; n < 16; n++) {
for (var a = i[n], o = this._lBlock, m = this._rBlock, r = 0, s = 0; s < 8; s++) r |= l[s][((m ^ a[s]) & p[s]) >>> 0];
this._lBlock = m;
this._rBlock = o ^ r;
}
var d = this._lBlock;
this._lBlock = this._rBlock;
this._rBlock = d;
c.call(this, 1, 1431655765);
u.call(this, 8, 16711935);
u.call(this, 2, 858993459);
c.call(this, 16, 65535);
c.call(this, 4, 252645135);
t[e] = this._lBlock;
t[e + 1] = this._rBlock;
},
keySize: 2,
ivSize: 2,
blockSize: 2
});
function c(t, e) {
var i = (this._lBlock >>> t ^ this._rBlock) & e;
this._rBlock ^= i;
this._lBlock ^= i << t;
}
function u(t, e) {
var i = (this._rBlock >>> t ^ this._lBlock) & e;
this._lBlock ^= i;
this._rBlock ^= i << t;
}
t.DES = a._createHelper(d);
var y = o.TripleDES = a.extend({
_doReset: function() {
var t = this._key.words;
this._des1 = d.createEncryptor(n.create(t.slice(0, 2)));
this._des2 = d.createEncryptor(n.create(t.slice(2, 4)));
this._des3 = d.createEncryptor(n.create(t.slice(4, 6)));
},
encryptBlock: function(t, e) {
this._des1.encryptBlock(t, e);
this._des2.decryptBlock(t, e);
this._des3.encryptBlock(t, e);
},
decryptBlock: function(t, e) {
this._des3.decryptBlock(t, e);
this._des2.encryptBlock(t, e);
this._des1.decryptBlock(t, e);
},
keySize: 6,
ivSize: 2,
blockSize: 2
});
t.TripleDES = a._createHelper(y);
})();
(function() {
var t = i, e = t.lib.StreamCipher, n = t.algo, a = n.RC4 = e.extend({
_doReset: function() {
for (var t = this._key, e = t.words, i = t.sigBytes, n = this._S = [], a = 0; a < 256; a++) n[a] = a;
a = 0;
for (var o = 0; a < 256; a++) {
var m = a % i, r = e[m >>> 2] >>> 24 - m % 4 * 8 & 255;
o = (o + n[a] + r) % 256;
var s = n[a];
n[a] = n[o];
n[o] = s;
}
this._i = this._j = 0;
},
_doProcessBlock: function(t, e) {
t[e] ^= o.call(this);
},
keySize: 8,
ivSize: 0
});
function o() {
for (var t = this._S, e = this._i, i = this._j, n = 0, a = 0; a < 4; a++) {
i = (i + t[e = (e + 1) % 256]) % 256;
var o = t[e];
t[e] = t[i];
t[i] = o;
n |= t[(t[e] + t[i]) % 256] << 24 - 8 * a;
}
this._i = e;
this._j = i;
return n;
}
t.RC4 = e._createHelper(a);
var m = n.RC4Drop = a.extend({
cfg: a.cfg.extend({
drop: 192
}),
_doReset: function() {
a._doReset.call(this);
for (var t = this.cfg.drop; t > 0; t--) o.call(this);
}
});
t.RC4Drop = e._createHelper(m);
})();
i.mode.CTRGladman = function() {
var t = i.lib.BlockCipherMode.extend();
function e(t) {
if (255 == (t >> 24 & 255)) {
var e = t >> 16 & 255, i = t >> 8 & 255, n = 255 & t;
if (255 === e) {
e = 0;
if (255 === i) {
i = 0;
255 === n ? n = 0 : ++n;
} else ++i;
} else ++e;
t = 0;
t += e << 16;
t += i << 8;
t += n;
} else t += 1 << 24;
return t;
}
function n(t) {
0 === (t[0] = e(t[0])) && (t[1] = e(t[1]));
return t;
}
var a = t.Encryptor = t.extend({
processBlock: function(t, e) {
var i = this._cipher, a = i.blockSize, o = this._iv, m = this._counter;
if (o) {
m = this._counter = o.slice(0);
this._iv = void 0;
}
n(m);
var r = m.slice(0);
i.encryptBlock(r, 0);
for (var s = 0; s < a; s++) t[e + s] ^= r[s];
}
});
t.Decryptor = a;
return t;
}();
(function() {
var t = i, e = t.lib.StreamCipher, n = t.algo, a = [], o = [], m = [], r = n.Rabbit = e.extend({
_doReset: function() {
for (var t = this._key.words, e = this.cfg.iv, i = 0; i < 4; i++) t[i] = 16711935 & (t[i] << 8 | t[i] >>> 24) | 4278255360 & (t[i] << 24 | t[i] >>> 8);
var n = this._X = [ t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16 ], a = this._C = [ t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0] ];
this._b = 0;
for (i = 0; i < 4; i++) s.call(this);
for (i = 0; i < 8; i++) a[i] ^= n[i + 4 & 7];
if (e) {
var o = e.words, m = o[0], r = o[1], l = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8), p = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), d = l >>> 16 | 4294901760 & p, c = p << 16 | 65535 & l;
a[0] ^= l;
a[1] ^= d;
a[2] ^= p;
a[3] ^= c;
a[4] ^= l;
a[5] ^= d;
a[6] ^= p;
a[7] ^= c;
for (i = 0; i < 4; i++) s.call(this);
}
},
_doProcessBlock: function(t, e) {
var i = this._X;
s.call(this);
a[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16;
a[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16;
a[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16;
a[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
for (var n = 0; n < 4; n++) {
a[n] = 16711935 & (a[n] << 8 | a[n] >>> 24) | 4278255360 & (a[n] << 24 | a[n] >>> 8);
t[e + n] ^= a[n];
}
},
blockSize: 4,
ivSize: 2
});
function s() {
for (var t = this._X, e = this._C, i = 0; i < 8; i++) o[i] = e[i];
e[0] = e[0] + 1295307597 + this._b | 0;
e[1] = e[1] + 3545052371 + (e[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0;
e[2] = e[2] + 886263092 + (e[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0;
e[3] = e[3] + 1295307597 + (e[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0;
e[4] = e[4] + 3545052371 + (e[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0;
e[5] = e[5] + 886263092 + (e[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0;
e[6] = e[6] + 1295307597 + (e[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0;
e[7] = e[7] + 3545052371 + (e[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0;
this._b = e[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
for (i = 0; i < 8; i++) {
var n = t[i] + e[i], a = 65535 & n, r = n >>> 16, s = ((a * a >>> 17) + a * r >>> 15) + r * r, l = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
m[i] = s ^ l;
}
t[0] = m[0] + (m[7] << 16 | m[7] >>> 16) + (m[6] << 16 | m[6] >>> 16) | 0;
t[1] = m[1] + (m[0] << 8 | m[0] >>> 24) + m[7] | 0;
t[2] = m[2] + (m[1] << 16 | m[1] >>> 16) + (m[0] << 16 | m[0] >>> 16) | 0;
t[3] = m[3] + (m[2] << 8 | m[2] >>> 24) + m[1] | 0;
t[4] = m[4] + (m[3] << 16 | m[3] >>> 16) + (m[2] << 16 | m[2] >>> 16) | 0;
t[5] = m[5] + (m[4] << 8 | m[4] >>> 24) + m[3] | 0;
t[6] = m[6] + (m[5] << 16 | m[5] >>> 16) + (m[4] << 16 | m[4] >>> 16) | 0;
t[7] = m[7] + (m[6] << 8 | m[6] >>> 24) + m[5] | 0;
}
t.Rabbit = e._createHelper(r);
})();
i.mode.CTR = function() {
var t = i.lib.BlockCipherMode.extend(), e = t.Encryptor = t.extend({
processBlock: function(t, e) {
var i = this._cipher, n = i.blockSize, a = this._iv, o = this._counter;
if (a) {
o = this._counter = a.slice(0);
this._iv = void 0;
}
var m = o.slice(0);
i.encryptBlock(m, 0);
o[n - 1] = o[n - 1] + 1 | 0;
for (var r = 0; r < n; r++) t[e + r] ^= m[r];
}
});
t.Decryptor = e;
return t;
}();
(function() {
var t = i, e = t.lib.StreamCipher, n = t.algo, a = [], o = [], m = [], r = n.RabbitLegacy = e.extend({
_doReset: function() {
var t = this._key.words, e = this.cfg.iv, i = this._X = [ t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16 ], n = this._C = [ t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0] ];
this._b = 0;
for (var a = 0; a < 4; a++) s.call(this);
for (a = 0; a < 8; a++) n[a] ^= i[a + 4 & 7];
if (e) {
var o = e.words, m = o[0], r = o[1], l = 16711935 & (m << 8 | m >>> 24) | 4278255360 & (m << 24 | m >>> 8), p = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), d = l >>> 16 | 4294901760 & p, c = p << 16 | 65535 & l;
n[0] ^= l;
n[1] ^= d;
n[2] ^= p;
n[3] ^= c;
n[4] ^= l;
n[5] ^= d;
n[6] ^= p;
n[7] ^= c;
for (a = 0; a < 4; a++) s.call(this);
}
},
_doProcessBlock: function(t, e) {
var i = this._X;
s.call(this);
a[0] = i[0] ^ i[5] >>> 16 ^ i[3] << 16;
a[1] = i[2] ^ i[7] >>> 16 ^ i[5] << 16;
a[2] = i[4] ^ i[1] >>> 16 ^ i[7] << 16;
a[3] = i[6] ^ i[3] >>> 16 ^ i[1] << 16;
for (var n = 0; n < 4; n++) {
a[n] = 16711935 & (a[n] << 8 | a[n] >>> 24) | 4278255360 & (a[n] << 24 | a[n] >>> 8);
t[e + n] ^= a[n];
}
},
blockSize: 4,
ivSize: 2
});
function s() {
for (var t = this._X, e = this._C, i = 0; i < 8; i++) o[i] = e[i];
e[0] = e[0] + 1295307597 + this._b | 0;
e[1] = e[1] + 3545052371 + (e[0] >>> 0 < o[0] >>> 0 ? 1 : 0) | 0;
e[2] = e[2] + 886263092 + (e[1] >>> 0 < o[1] >>> 0 ? 1 : 0) | 0;
e[3] = e[3] + 1295307597 + (e[2] >>> 0 < o[2] >>> 0 ? 1 : 0) | 0;
e[4] = e[4] + 3545052371 + (e[3] >>> 0 < o[3] >>> 0 ? 1 : 0) | 0;
e[5] = e[5] + 886263092 + (e[4] >>> 0 < o[4] >>> 0 ? 1 : 0) | 0;
e[6] = e[6] + 1295307597 + (e[5] >>> 0 < o[5] >>> 0 ? 1 : 0) | 0;
e[7] = e[7] + 3545052371 + (e[6] >>> 0 < o[6] >>> 0 ? 1 : 0) | 0;
this._b = e[7] >>> 0 < o[7] >>> 0 ? 1 : 0;
for (i = 0; i < 8; i++) {
var n = t[i] + e[i], a = 65535 & n, r = n >>> 16, s = ((a * a >>> 17) + a * r >>> 15) + r * r, l = ((4294901760 & n) * n | 0) + ((65535 & n) * n | 0);
m[i] = s ^ l;
}
t[0] = m[0] + (m[7] << 16 | m[7] >>> 16) + (m[6] << 16 | m[6] >>> 16) | 0;
t[1] = m[1] + (m[0] << 8 | m[0] >>> 24) + m[7] | 0;
t[2] = m[2] + (m[1] << 16 | m[1] >>> 16) + (m[0] << 16 | m[0] >>> 16) | 0;
t[3] = m[3] + (m[2] << 8 | m[2] >>> 24) + m[1] | 0;
t[4] = m[4] + (m[3] << 16 | m[3] >>> 16) + (m[2] << 16 | m[2] >>> 16) | 0;
t[5] = m[5] + (m[4] << 8 | m[4] >>> 24) + m[3] | 0;
t[6] = m[6] + (m[5] << 16 | m[5] >>> 16) + (m[4] << 16 | m[4] >>> 16) | 0;
t[7] = m[7] + (m[6] << 8 | m[6] >>> 24) + m[5] | 0;
}
t.RabbitLegacy = e._createHelper(r);
})();
i.pad.ZeroPadding = {
pad: function(t, e) {
var i = 4 * e;
t.clamp();
t.sigBytes += i - (t.sigBytes % i || i);
},
unpad: function(t) {
for (var e = t.words, i = t.sigBytes - 1; !(e[i >>> 2] >>> 24 - i % 4 * 8 & 255); ) i--;
t.sigBytes = i + 1;
}
};
return i;
}, "object" == typeof i ? e.exports = i = n() : "function" == typeof define && define.amd ? define([], n) : (void 0).CryptoJS = n();
var n;
cc._RF.pop();
}, {} ]
