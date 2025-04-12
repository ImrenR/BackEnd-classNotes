'use strict';

//Call Models:
const {BlogCategory, BlogPost} = require("../models/blog.model") // import BlogCategory and BlogPost from blog.model

module.exports = {

  list: async(req,res)=>{
   
    const result = await BlogCategory.find();
   
    res.status(200).send({  
      error:false,
      result
    });
  },

 create: async(req,res)=>{
   
    const result = await BlogCategory.create(req.body);
   
    res.status(201).send({
      error:false,
      result
    });
  },

  read: async(req,res)=>{
   
    const result = await BlogCategory.findById(req.params.id);
   
    res.status(200).send({
      error:false,
      result
    });
  },

update: async(req,res)=>{
   //acknowledged: true, // if update is successful
  //modifiedCount: 1, // number of documents modified
  //upsertedId: null, // id of the inserted document
  //upsertedCount: 0, // number of documents inserted
  //matchedCount: 1 // number of documents matched
  
  
  // const result = await BlogCategory.updateOne({_id:req.params.id}, req.body)
  const result = await BlogCategory.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})

 
  res.status(200).send({
    error:false,
    result,
    new: await BlogCategory.findById(req.params.id)
  });
},

delete: async(req,res)=>{
   
  const result = await BlogCategory
 
  res.status(200).send({
    error:false,
    result
  });
},



}