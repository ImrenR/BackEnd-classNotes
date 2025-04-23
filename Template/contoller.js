'use strict'; 

const Deparmant = require('../models/department.js')

module.exports={
  list: async (req,res)=>{
   
  const result = await Department.find()

    res.send({
      error:false,
      result
    })
  },
  create: async (req,res)=>{
    
  },
  read: async (req,res)=>{
    
  },
  update: async (req,res)=>{
    
  },
  delete: async (req,res)=>{
    
  }
}