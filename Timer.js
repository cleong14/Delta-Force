// var EventEmitter = require('events');


// export timer function
module.exports = Timer;

// 1. Basic Timer
function Timer () {
  // EventEmitter.call(this);

  setInterval(function () {
    console.log('tick');
  }, 1000);
}

// Timer.prototype = new Object(EventEmitter.prototype, {
//   constructor: {
//     value: EventEmitter,
//     configurable: true,
//     enumerable: true,
//     writable: true
//   }
// });

Timer();