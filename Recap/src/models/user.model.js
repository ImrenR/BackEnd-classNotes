"use strict";
const mongoose = require("mongoose");
const crypto = require('crypto');

const passwordEncrypte = (password) => {
  const salt = '223894fshjfg23947hjs';
  const iteration = 10000;
  const keylen = 100;
  const digest = 'sha512';
  return crypto.pbkdf2Sync(password,salt,iteration,keylen,digest).toString('hex'); 

  
}

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      set :(password)=> {return password}
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model('UserTable',UserSchema );