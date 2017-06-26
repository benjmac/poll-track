// Import the interface to Tessel hardware
// var tessel = require('tessel');

// // Turn one of the LEDs on to start.
// tessel.led[2].on();

// // Blink!
// setInterval(function () {
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
// }, 100);

// console.log("I'm blinking! (Press CTRL + C to stop)");

var tessel = require('tessel');
var servolib = require('servo-pca9685');

var servo = servolib.use(tessel.port['A']);

var servo1 = 1; // We have a servo plugged in at position 1

servo.on('ready', function () {
  var position = 0;  //  Target position of the servo between 0 (min) and 1 (max).
  servo.configure(servo1, 0.05, 0.12, function () {
    setInterval(function () {
      console.log('Position (in range 0-1):', position);
      //  Set servo #1 to position pos.
      servo.move(servo1, position);
      position += 1;
      if (position > 2) {
        position = 0; // Reset servo position
      }
    }, 500); // Every 500 milliseconds
  });
});
