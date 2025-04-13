'use strict';

const express = require('express');
const app = express();
const PORT = process.env?.PORT || 8000;

require('dotenv').config();

app.get('/', (req,res)=> {
  res.send('Hi There')
}
);


app.listen(PORT,()=> console.log(`Running at ${PORT}`))