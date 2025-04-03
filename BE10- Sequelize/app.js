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
  const Todo = sequelize.define ('todo', {
     // We dont need to define the id field, sequelize will create it automatically
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false, // default : true 
    //   unique: true, // default : false 
    //   comment: 'description',
    //   primaryKey: true, // default : false
    //   autoIncrement: true, // default : false
    //   // field: 'id', // default : name of the attribute  
    //   defaultValue: 'default', // default : null
  
    // }
    title :{
      type : DataTypes.STRING(256),
      allowNull : false,
    },
    description:{
      type : DataTypes.STRING,
    },
    // -1: Low, 0: Normal, 1:High
    priority:{
      type : DataTypes.TINYINT,
      allowNull : false,
      defaultValue : 0,
    },
    isDoneCustom:{
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : false,
    }
    // No need to define createdAt and updatedAt fields, sequelize will create them automatically
  })

  // Sync the model with the database
  sequelize.sync({force: true})
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