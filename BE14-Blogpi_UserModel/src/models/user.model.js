"use strict";
 
const mongoose = require('mongoose');
 
// Password Encryption:
const crypto = require('node:crypto'); // import crypto module
const passwordEncrypte = (password)=> {
  

     const salt='sdlkjewriuodsg349857skjhf9a8w7sd';
     const iteration= 100000;
     const heylen= 32;
      const digest= 'sha512';


  return crypto.pbkdf2Sync(password,salt,iteration,heylen,digest).toString('hex');
}

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