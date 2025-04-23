'use strict';

const {mongoose}= require('../configs/dbConnection');
const passwordEncrypte = require('../helpers/passwordEncrypte');


const PersonnelSchema = new mongoose.Schema({

  departmentId : {
    type: mongoose.Types.Schema.ObjectId,
    ref: 'Department',
    required: true
  },
  username: {
    type: String,
    required: true,
    trim:true,
    unique:true
},
 password: {
  type: String,
  required: true,
  trim:true,
  set:(password)=> passwordEncrypte(password)
},
firstName: {
  type: String,
  required: true,
  trim:true,
}, 
lastName: {
  type: String,
  required: true,
  trim:true,
},
phone: {
  type: String,
  required: true,
  trim:true,
  unique:true,
  minlength:11,
  
},
email: {
  type: String,
  required: true,
  trim:true,
  unique:true
},
title: {
  type: String,
  required: true,
  trim:true,
  unique:true
},
salary: {
  type: String,
  required: true,
  trim:true,
  unique:true
},
},
{
  collection : 'personnel',
  timestamps : true
})