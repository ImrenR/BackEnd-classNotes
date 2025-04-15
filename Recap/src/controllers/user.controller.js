'use strict';

const UserSchema = require('../models/user.model');

module.exports = {
  list: async (req,res)=> {
   const result = await UserSchema.find();

    res.status(200).send({
      error : false,
      result
     });
  },
  create: async (req,res)=> {
    const result = await UserSchema.create(req.params);
 
     res.status(200).send({
       error : false,
       result
      });
   },
  read : async (req,res)=> {
    const result = await UserSchema.findById(req.params.id);
 
     res.status(200).send({
       error : false,
       result
      });
   },
   update: async (req,res)=> {
    const result = await UserSchema.findOneAndUpdate();
 
     res.status(200).send({
       error : false,
       result
      });
   },

}