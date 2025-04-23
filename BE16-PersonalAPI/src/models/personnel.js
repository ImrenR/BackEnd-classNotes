'use strict';

const {mongoose}= require('../configs/dbConnection')


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
  unique:true
},
firstName: {
  type: String,
  required: true,
  trim:true,
  unique:true
}, 
lastName: {
  type: String,
  required: true,
  trim:true,
  unique:true
},
username: {
  type: String,
  required: true,
  trim:true,
  unique:true
},
username: {
  type: String,
  required: true,
  trim:true,
  unique:true
},
username: {
  type: String,
  required: true,
  trim:true,
  unique:true
},
username: {
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