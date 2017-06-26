// // Import the interface to Tessel hardware
// var tessel = require('tessel');

// // Turn one of the LEDs on to start.
// tessel.led[2].on();

// // Blink!
// setInterval(function () {
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
// }, 100);

// console.log("I'm blinking! (Press CTRL + C to stop)");


// console.log("I'm here...")
// var path = require('path');
// var av = require('tessel-av');
// // console.log(__dirname)
// var mp3 = '/Users/benmccain/Desktop/FS-Junior/tessel/audio/yoda-mudhole.mp3';
// console.log(mp3)
// var sound = new av.Speaker(mp3);

// sound.play();

// sound.on('ended', function(seconds) {
//   sound.play();
// });

// var tessel = require('tessel-av');
// var fs = require('fs');
// var audio = require('audio-vs1053b').use(tessel.port['A']);

// var audioFile = 'yoda-mudhole.mp3';

// //

var path = require('path');
var av = require('tessel-av');
// var mp3 = path.join(__dirname, 'yoda-mudhole.mp3');
var mp3 = '/Users/benmccain/Desktop/FS-Junior/tessel/audio/yoda-mudhole.mp3';
var sound = new av.Speaker();

var test = "testing"

sound.say(test);

// sound.on('ended', function(seconds) {
//   sound.play();
// });

