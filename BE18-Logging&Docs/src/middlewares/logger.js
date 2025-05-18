'use strict'
// Logger 
//npm i morgan
const morgan= require('morgan');
// app.use(morgan('tiny'));
//Custom Log
// app.use(morgan(" TIME=':date[iso]' - URL=':url' - METHOD=':method' - IP=':remote-addr' - STATUS=':status' - SIGN=':sign' - (:response-time[digits]ms)"))
const customLog = " TIME=':date[iso]' - URL=':url' - METHOD=':method' - IP=':remote-addr' - STATUS=':status' - SIGN=':sign' - (:response-time[digits]ms)"
const fs = require('node:fs');
const now= new Date()
const today=now.toISOString().split('T')[0]


 module.exports = (morgan(customLog, {
  stream: fs.createWriteStream(`./logs/${today}.log`, {flags : 'a'})
}))