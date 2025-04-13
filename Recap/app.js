'use strict';

const express= require('express');
const app= express();
const PORT = process.env?.PORT || 8000;
require('dotenv').config();

require('express-async-errors');

app.use(express.json());


const dbConnection = require('./src/dbConnection');
dbConnection();
/*------------------------------------------------------------ */
/* ROUTES */
app.all('/',(req,res)=> res.send('welcome'));





app.use(require('./src/middlewares/errorHandlers'));




/*------------------------------------------------------------ */
app.listen(PORT, ()=> console.log(`Running at ${PORT}`));