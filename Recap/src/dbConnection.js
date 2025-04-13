'use strict';

const mongoose = require('mongoose');

const dbConnection = ()=> {
  mongoose.connect('mongodb://localhost:27017/database')
  .then(()=> console.log('DB connected !'))
  .catch((err)=>console.log('DB not connected',err))
}

module.exports = dbConnection;