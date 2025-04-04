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

/*----------------------------------------------------------------*/
                     //ROUTERS:
/*----------------------------------------------------------------*/
const router = express.Router();
const Todo = require('./models/todo.model.js');

//LIST
router.get('/todos', async(req,res) => {
 
  // const result = await Todo.findAll(); // select * from todos
  // const result = await Todo.findAll({attributes: ['title', 'description']}); // select title description from todos
  const result = await Todo.findAndCountAll();
  res.status(200).send({
    error: false,
    result
  })
  });
//* CRUD OPERATIONS


//* Create
/*--------------------------------------------------------*/
router.post('/todos', async(req,res) => {

// const result = await Todo.create({
//   title: 'todo-2',
//   description: 'desc-2',
//   priority: 0,
//   isDoneCustom: false,


const result = await Todo.create(req.body);


  res.status(201).send({
   error: false,
   result:result
  })
});

// Read
/*--------------------------------------------------------*/

router.get("/todos", async (req, res) => {
     
  // const result = await Todo.findOne({
  //   where: {
  //     id: req.params.id
  //   }
  // });
  // const result = await Todo.findByPk(req.params.id)

  // res.status(200).send({
  //   error: false,
  //   result
  // });

})

//UPDATE
/*--------------------------------------------------------*/
router.put('/todos/:id', async (req, res) => {

// const result= await Todo.update({...newData}, {...where});
const result = await Todo.update (req.body, {
  where :{
    id: req.params.id
  }
}); // returns array [number of affected rows, affectedRows]
// if it s successful, it returns the number 1 , if not it returns 0

res.status(202).send({
  error:false,
  result,
  new: await Todo.findByPk(req.params.id)
})

});


//DELETE
/*--------------------------------------------------------*/
router.delete('/todos/:id', async (req, res) => {
// await Todo.destroy({ where: { id: req.params.id } });
// const result= await Todo.update({...newData}, {...where});
 const result = await Todo.destroy ({where :{id:req.params.id}}); // returns array [number of affected rows, affectedRows]

//  res.status(204).send({
//   error:false,
//   result,
//   new: await Todo.findByPk(req.params.id)
// })


if (result){
  res.sendStatus(204);
} else {
  // res.status(404).send({
  //   error: true,
  //   message: 'Todo not found'
  // });
  res.errorStatusCode = 404;
  throw new Error('Todo not found');
}
});
app.use(router);
/*------------------------------------------*/
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
app.use(errorHandler);
/*--------------------------------------------------------------------*/
// Server

  app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});