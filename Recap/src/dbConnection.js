'use strict';

const mongoose = require('mongoose');

const dbConnection = ()=> {

  const uri = process.env.DB_CONNECTION

  if(!uri) throw new Error ('DB_URI not found')

    mongoose.connect(process.env.DB_CONNECTION)
  .then(()=> console.log('DB connected !'))
  .catch((err)=>console.log('DB not connected',err))
}

module.exports = dbConnection;