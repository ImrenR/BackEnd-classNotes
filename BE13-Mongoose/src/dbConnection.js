'use strict';

/*----------------------------------------*/
// Importing mongoose
const mongoose = require('mongoose');  

const dbConnection = () => {
  mongoose.connect('mongodb://localhost:27017/blogAPI')
  .then(()=>console.log("Database connected successfully"))
  .catch((err)=>console.log("Database connection failed", err));
}

module.exports = dbConnection;