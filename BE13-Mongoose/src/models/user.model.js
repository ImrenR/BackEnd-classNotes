"use strict";
 
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({  // name of the schema is UserSchema
      email:{
        type: String,
        required: true,
        unique: true, // unique field
        trim: true, // remove spaces from start and end
      },
      password:{
        type: String,
        required: true,
        trim: true, // remove spaces from start and end
      },
      firstName :String,
      lastName: String,

},{
  collection: 'users',  // Table Name
  timestamps: true, // createdAt, updatedAt
});

module.exports= mongoose.model('User', UserSchema); // name of the model is User