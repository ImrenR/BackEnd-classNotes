"use strict";
 
const mongoose = require('mongoose');
const passwordEncrypte  = require('../utils/passwordEncrypte'); // import encrypt function

const UserSchema = new mongoose.Schema({  // name of the schema is UserSchema
      email:{
        type: String,
        required: true,
        unique: [
          true, 'Email field is required' // error message
        ], // unique field
        trim: true, // remove spaces from start and end
        //* How validate works
        /*-------------------------------------------*/
        // validate: (email)=> {return false}
        // validate: (email)=> {
        //   if (email.includes('@') && email.includes('.')) {
        //     return true; // return true
        //     }else {
        //       throw new Error('Email is not valid'); // throw error
        //     }
        //   }
        validate: [ (email)=>{
          return(email.includes('@') && email.includes('.'))
        }, 'Email is not valid' // error message
        ]
      },
      password:{
        type: String,
        required: [
          true, 'Password field is required' // error message
        ],
        trim: true, // remove spaces from start and end
        //* How set works
         // set:(password)=>{  
        //  return password
        // } // hide password

      //* Using cyrpto module in set method
      // set:(pass)=>{return passwordEncrypte(pass) }
      set: passwordEncrypte // encrypt password
      },
      firstName :String,
      lastName: String,

},{
  collection: 'users',  // Table Name
  timestamps: true, // createdAt, updatedAt
});

module.exports= mongoose.model('User', UserSchema); // name of the model is User