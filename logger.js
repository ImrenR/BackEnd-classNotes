var url='http://mylogger.io/log';

function log(message) {
  // send an HTTP request

console.log(message);

}
// so we need to make it local and outside

module.export.log = log; // so I am adding metod called "log" there is exports object and simply setting into function log
module.exports.endPoint = url;