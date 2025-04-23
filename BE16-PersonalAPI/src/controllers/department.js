'use strict'; 

const Deparmant = require('../models/department.js')

module.exports={
  list: async (req,res)=>{
   
  const result = await getModelList(Deparmant)

    res.status(200).send({
      error:false,
      details: await getModelListDetails (Department),
      result
    })
  },
  create: async (req,res)=>{


    res.status(201).send({
      error:false,
      result
    })
  },
  read: async (req,res)=>{


    res.status(200).send({
      error:false,
      result
    })
  },
  update: async (req,res)=>{


    res.status(200).send({
      error:false,
      result
    })
  },
  delete: async (req,res)=>{


    res.status(404).send({
      error:false,
      result
    })
  }
}