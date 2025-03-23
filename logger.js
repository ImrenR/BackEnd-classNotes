


var url='http://mylogger.io/log';

function log(message) {
  // send an HTTP request

console.log(message);

}
// so we need to make it local and outside

module.exports = log; // so I am adding metod called "log" there is exports object and simply setting into function log
// in your modules you can export a single function or an object