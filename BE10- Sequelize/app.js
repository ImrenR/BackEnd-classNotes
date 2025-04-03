const express= require('express');
const app= express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;

/*------------------------*/
// Accept json data
/*------------------------*/
app.use(express.json());

app.all ('/', (req, res) => {
    res.send('Hello World');
}
);
/*------------------------*/
// Models :  
// Sequelize:
  const { Sequelize, DataTypes } = require('sequelize');
  // sequelize instance :
  const sequelize = new Sequelize ('sqlite:' + process.env.SQLITE)
// define method aims to create model 
  const Todo = sequelize.define ('todo', {})


/*------------------------*/

const errorHandler = (err, req, res, next) => {
  const errorStatusCode =res.errorStatusCode ?? 500;
  res.status (errorStatusCode).send ({
    error: true, // true if error
    message: err.message, // error string message
    cause : err.cause, // error cause
    // stack: err.stack, // error stack
    // status: err.status, // error status
    // code: err.code, // error code
  })}