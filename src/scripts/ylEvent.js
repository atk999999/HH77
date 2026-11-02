// Decrypted 1:1 module `ylEvent` from assets/main/index.231ca.js
ylEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "c95e5/Bc8RDE4tNXuLvS4Mw", "ylEvent");
e.exports = {
ge: null,
adPos: "",
event: function(t, e) {
if ("tt" == G.from) {
console.log("引力上报事件开始：", t, e);
if ("plot" == t) {
var i = G.getItem("xx_yl_plot");
if (i) {
if ((i = Number(i)) > 100) return;
i++;
G.setItem("xx_yl_plot", i);
} else G.setItem("xx_yl_plot", 1);
}
G.yl.ge.track({
eventName: t,
properties: e,
time: new Date(),
onComplete: function(t) {
console.log("引力上报事件结果：", t);
}
});
}
}
};
cc._RF.pop();
}, {} ]
