var EventEmitter = require('events');
var util = require('util');


// export timer function
module.exports = Timer;

// 1. Basic Timer
function Timer (max, deviation) {
  // default max value or user set max value
  this.max = max || 10;

  // default deviation
  this.deviation = deviation || 50;

  EventEmitter.call(this);

  // self(this) is the instance of Timer constructor
  var self = this;
  var i = 0;
  var startTime;
  var stopTime;
  var totalTime;
  var previousTime;
  var currentTime;
  var lagTime;

  // declared this outside so that we can access startTimer inside the function later
  var startTimer;
  var stopTimer;

  this.start = function () {
    startTime = Date.now();
    console.log('Start Time: ', startTime);
    startTimer = setInterval(function () {
      // currentTime = Date.now();
      // lagTime = currentTime - startTime;

      // if (lagTime > self.deviation || lagTime < self.deviation) {
      //   console.log('You died because you LAGGED', 'Lag: ', lagTime);
      //   // self.emit('tick', { laggedOut: lagTime });
      // }
      // emitting makes information usable for event emitting to
      self.emit('tick', { interval : ++i });
    }, 1000);
  };

  this.stop = function () {
    clearInterval(startTimer);
    // emitting makes information usable for event emitting to
    self.emit('tick', { interval : self.max});
    stopTime = Date.now();
    totalTime = stopTime - startTime;
    console.log('Stop Time: ', stopTime);
    console.log('Total Time: ', totalTime);
    self.emit('tick', { complete: totalTime });
  };
}

util.inherits(Timer, EventEmitter);

var myTimer = new Timer(5);

function tickHandler (event) {
  var deviation;
  var currentTime = Date.now();
  console.log(1, currentTime);
  process.stdout.write('tick ' + event.interval + '\n');
  // access to this.max because we emitted self.max
  if (event.interval === this.max) {
    myTimer.removeListener('tick', tickHandler);
    myTimer.stop();
  }
  if (deviation > this.deviation || deviation < this.deviation) {

  }
}

myTimer.addListener('tick', tickHandler);

myTimer.start();