"use strict";
const mongoose = require("mongoose");
const crypto = require ('cyrpto');
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