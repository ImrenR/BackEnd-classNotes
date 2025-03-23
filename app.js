
 // console.log(); // global 

 // setTimeout()
 // clearTimeout();

 //setInterval()
 // clearInterval() // all these functions globally belongs to window object

//! In Node we dont have window obkect, instead we have "global"


// console.log(module);

const logger = require('./logger'); // to load a module we use require function.. 
//..this function takes one argument
logger('message');