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

app.use(require('./router/todo.router'));
/*------------------------------------------*/
// Error handling
/*------------------------------------------*/
app.use(require('./middlewares/errorHandler'));

// Server

  app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)});