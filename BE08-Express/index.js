'use strict'

const express = require ('express');
const app = express ();

require('dotenv').config();
const PORT = process.env?.PORT || 8000

app.listen (PORT, ()=> console.log('Runnig at: http://127.0.0.1:' + PORT));