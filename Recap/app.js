'use strict';

const express= require('express');
const app= express();
const PORT = process.env?.PORT || 8000;
require('dotenv').config();
 app.use(express.json());
 require('express-async-errors'); 


app.all('/',(req,res)=> res.send('welcome'));


app.listen(PORT, ()=> console.log(`Running at ${PORT}`));