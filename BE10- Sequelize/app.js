"use strict";
/*-------------------------------------------------------------------
            EXPRESS - TODO PROJECT WITH SEQUELIZE
---------------------------------------------------------------------*/
const express= require('express');
const app= express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;

require('express-async-errors'); // for async error handling

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
  const Todo = sequelize.define ('todos', {
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
  // This needs to be done only once, when you create the model
  // sequelize.sync()

  // Connect to the database
  sequelize.authenticate()
  .then(() => console.log('Connected to the database'))
  .catch(() => console.error('Unable to connect to the database:'));
/*------------------------*/
// ROUTERS:
const router = express.Router();

//LIST
router.get('/todos', async(req,res) => {
 
  // const result = await Todo.findAll(); // select * from todos
  // const result = await Todo.findAll({attributes: ['title', 'description']}); // select title description from todos
  // const result = await Todo.findAndCountAll();
  // res.status(200).send({
  //   error: false,
  //   result
  // })
  })

//* Create
router.post('/todos', async(req,res) => {

// const result = await Todo.create({
//   title: 'todo-2',
//   description: 'desc-2',
//   priority: 0,
//   isDoneCustom: false,
});

// const result = await Todo.create(req.body);


//   res.status(201).send({
//    error: false,
//    result:result
//   })
// });

// Read
router.get("/todos", async (req, res) => {
     
  // const result = await Todo.findOne({
  //   where: {
  //     id: req.params.id
  //   }
  // });
  const result = await Todo.findByPk(req.params.id)

  res.status(200).send({
    error: false,
    result
  });

})

app.use(router);
/*------------------------*/
// CRUD Transactions:








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


  app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});