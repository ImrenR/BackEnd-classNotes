"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken */

    const express = require ('express');
    const app = express();
    require('dotenv').config();

    const PORT=process.env.POT || 8000;

    // Middleware; 
    app.use(express.json())
    require('express-async-errors');

    // Session Cookies
    const session = require('cookie-session');

    app.use(session({
        secret: process.env.SECRET_KEY,
     }))

     require('./src/configs/dbConnection')

     //Query Handler;
     app.use(require('./src/middlewares/queryHandler'))

     // Routes:
     app.all('/', (req,res)=>{
        res.send({
            message:'Welcome to Personnel API'
        })
     })
      app.use(require('./src/routes/department'))
     // Error Handler
   app.use('/departments',require('./src/middlewares/errorHandler'))

   
     //Run server
     app.listen(PORT,console.log(`Running at ${PORT}`))