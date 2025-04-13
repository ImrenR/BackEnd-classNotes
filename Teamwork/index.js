'use strict';

const express = require('express');
const app = express();
const PORT = process.env?.PORT || 8000;

require('dotenv').config();

const users = [
  {name : 'imren', age: 22},
  {name : 'kelvin', age: 32},
  {name : 'melvin', age: 42},
]

const posts = [
  {title:'My favorite foods'},
  {title:'My favorite games'}
]
app.get('/', (req,res)=> {
  res.send({
    msg: 'Hi There',
    user : {}
  })
});

app.get('/users', (req,res)=> {
  res.status(200).send(users)
});

app.get('/posts', (req,res)=> {
  const quer = posts.find(a => a.title === req.query.title);
  res.status(quer? 200 :404).send(quer ?? 'Fav title not found, try again!');
});

app.get('/users/:name', (req,res)=> {

  const user = users.find((u=> u.name === req.params.name));

  res.status(user ? 200 :404).send(user ?? 'User not found, try again!');
});

app.listen(PORT,()=> console.log(`Running at ${PORT}`))