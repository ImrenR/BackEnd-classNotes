'use strict';


const router = require("express").Router();
const todoController = require('../controllers/todo.controller.js');

//LIST
router.get('/todos', todoController.list);


//* CRUD OPERATIONS

router.post('/todos', todoController.create);

router.get("/todos", todoController.read);

router.put('/todos/:id', todoController.update);

router.delete('/todos/:id', todoController.delete);

modules.exports = router;