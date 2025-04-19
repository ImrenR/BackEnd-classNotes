'use strict';


const UserTable = require('../models/user.model');

module.exports = {
  list: async (req,res)=> {
   const result = await UserTable.find();

    res.status(200).send({
      error : false,
      result
     });
  },
  create: async (req,res)=> {
    const result = await UserTable.create(req.params);
 
     res.status(200).send({
       error : false,
       result
      });
   },
  read : async (req,res)=> {
    const result = await UserTable.findById(req.params.id);
 Table
     res.status(200).send({
       error : false,
       result
      });
   },
   update: async (req,res)=> {
    const result = await UserTable.findOneAndUpdate();
 
     res.status(200).send({
       error : false,
       result
      });
   },

}