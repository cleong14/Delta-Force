var EventEmitter = require('events');
var util = require('util');


// export timer function
module.exports = Timer;

// 1. Basic Timer
function Timer () {
  EventEmitter.call(this);

  var self = this;
  var i = 0;

  setInterval(function () {
    self.emit('tick', { interval : i++ });
  }, 1000);
}

util.inherits(Timer, EventEmitter);

var myTimer = new Timer();
myTimer.addListener('tick', function (event) {
  process.stdout.write('tick ' + event.interval + '\n');
});

// function tickHandler (event) {
//   process.stdout.write('tick ' + event.interval + '\n');
// }
// myTimer.addListener('tick', tickHandler);