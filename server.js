var path = require('path');
var av = require('tessel-av');
var sound = new av.Speaker();
var tessel = require('tessel');
var servolib = require('servo-pca9685');
var servo = servolib.use(tessel.port['A']);
var servo1 = 1;
var ip = require('ip');
var ipAddress = ip.address();

var question = "There is an anonymous question from the poll. A student wants to know the context of this within a getter method"

setTimeout(function(){
        sound.say(question);
      }, 3000)

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


var http = require('http');
var server = http.createServer(function(req,res){
//   console.log("We have received a new question");
//   var question = new Buffer(0);

//   req.on('data', function(chunk){
//     question = Buffer.concat([question, chunk]);
//   })

//   req.on('end', function(){
//     question = JSON.parse(question);

//     var position = 0;  //  Target position of the servo between 0 (min) and 1 (max).
//     servo.configure(servo1, 0.05, 0.12, function () {
//       setInterval(function () {
//         console.log('Position (in range 0-1):', position);
//         //  Set servo #1 to position pos.
//         servo.move(servo1, position);
//         position += 1;
//         if (position > 2) {
//           position = 0; // Reset servo position
//         }
//       }, 500); // Every 500 milliseconds
//     });

//     setTimeout(function(){
//         sound.say(question);
//       }, 3000)

  // })
});


server.listen(3000, function (err) {
  console.log(err);
  // console.log(`http://${ipAddress}.local:${3000}`)
  console.log("server is listening");
});
