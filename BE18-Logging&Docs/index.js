"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken */

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;

// Middleware;
app.use(express.json());
require("express-async-errors");



// Session Cookies
const session = require("cookie-session");

app.use(
  session({
    secret: process.env.SECRET_KEY,
  })
);

require("./src/configs/dbConnection");


//Query Handler;
app.use(require("./src/middlewares/queryHandler"));
//DB Connection
require("./src/configs/dbConnection");
//Authantication
app.use(require("./src/middlewares/authantication"));
// Logger 
//npm i morgan
const morgan= require('morgan');
app.use(morgan('tiny'))
// Routes:
app.all("/", (req, res) => {
  res.send({
    message: "Welcome to Personnel API",
  });
});
//Departments route
app.use("/departments", require("./src/routes/department"))

//Personnel route
app.use("/personnels", require("./src/routes/personnel"))


//Token route
app.use('/tokens',require("./src/routes/token"))

// Auth Route

app.use('/auth', require('./src/routes/auth'))

//Not Found Page
app.use('*', (req,res)=>{

  res.status(404).send({
    error:true,
    message: 'This page not found'
  })
})


//Error Handler
app.use("/departments", require("./src/middlewares/errorHandler"))


//Run server
app.listen(PORT, console.log(`Running at ${PORT}`));

/*------------------------------------------------------------*/
//! Syncronization : Run it only once.
// require('./src/helpers/sync')()
