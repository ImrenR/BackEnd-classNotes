'use strict';

const express= require('express');
const app= express();
const PORT = process.env?.PORT || 8000;
require('dotenv').config();

app.use(express.json());

require('express-async-errors');

const dbConnection = require('./src/dbConnection');
dbConnection();
/*------------------------------------------------------------ */
/* ROUTES */
app.all('/',(req,res)=> res.send('welcome'));
app.use(require('./src/routes/blog.router'));
app.use(require('./src/routes/user.router'));





app.use(require('./src/middlewares/errorHandlers'));




/*------------------------------------------------------------ */
app.listen(PORT, ()=> console.log(`Running at ${PORT}`));