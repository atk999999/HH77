// Decrypted 1:1 module `audioBox` from assets/main/index.231ca.js
audioBox: [ function(t, e) {
"use strict";
cc._RF.push(e, "42675RCsulB6Y/aLNlQ5b/w", "audioBox");
cc.Class({
extends: cc.Component,
properties: {
bgMp3: {
type: cc.AudioClip,
default: null
},
fightMp3: {
type: cc.AudioClip,
default: null
},
bupMp3: {
type: cc.AudioClip,
default: null
},
clrMp3: {
type: cc.AudioClip,
default: null
},
hitMp3: {
type: cc.AudioClip,
default: null
},
levMp3: {
type: cc.AudioClip,
default: null
},
fsMp3: {
type: cc.AudioClip,
default: null
}
},
onDestroy: function() {},
playMp3: function(t) {
if (G.user.audio[0] && G.temp.audio != t) {
cc.audioEngine.setMusicVolume(1);
G.temp.audio = t;
switch (t) {
case "bg":
cc.audioEngine.stopMusic();
G.temp.audioId = cc.audioEngine.playMusic(this.bgMp3, !0);
break;

case "fight":
cc.audioEngine.stopMusic();
G.temp.audioId = cc.audioEngine.playMusic(this.fightMp3, !0);
}
}
},
playEffect: function(t) {
if (G.user.audio[1]) {
cc.audioEngine.setEffectsVolume(1);
switch (t) {
case "bup":
cc.audioEngine.playEffect(this.bupMp3, !1);
break;

case "clr":
cc.audioEngine.playEffect(this.clrMp3, !1);
break;

case "hit":
cc.audioEngine.playEffect(this.hitMp3, !1);
break;

case "lev":
cc.audioEngine.playEffect(this.levMp3, !1);
break;

case "fs":
cc.audioEngine.playEffect(this.fsMp3, !1);
}
}
}
});
cc._RF.pop();
}, {} ]
