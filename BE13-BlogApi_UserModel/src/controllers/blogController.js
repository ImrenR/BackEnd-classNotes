'use strict';

//Call Models:
const {BlogCategory, BlogPost} = require("../models/blog.model") // import BlogCategory and BlogPost from blog.model

//BlogCategory Controller
module.exports.BlogCategory = {

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

delete: async (req,res)=>{
   
  const result = await BlogCategory.deleteOne({_id:req.params.id});
  // const result = await BlogCategory.findByIdAndDelete(req.params.id)
  // const result = await BlogCategory.findByIdAndRemove(req.params.id)
 
  if(result.deletedCount === 1){
    res.status(204);
  }else {
     res.errorStatuscode =404;
     throw new Error ('Blog not found');
  }
  res.status(200).send({
    error:false,
    result
  });
},
}
// BlogPost Controller
module.exports.BlogPost = {

  list: async(req,res)=>{
   
    const result = await BlogPost.find().populate('categoryId'); // populate categoryId with name field from BlogCategory
   
    res.status(200).send({  
      error:false,
      result
    });
  },

 create: async(req,res)=>{
   
    const result = await BlogPost.create(req.body);
   
    res.status(201).send({
      error:false,
      result
    });
  },

  read: async(req,res)=>{
   
    const result = await BlogPost.findById(req.params.id);
   
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
  
  
  // const result = await BlogPost.updateOne({_id:req.params.id}, req.body)
  const result = await BlogPost.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})

 
  res.status(200).send({
    error:false,
    result,
    new: await BlogPost.findById(req.params.id)
  });
},

delete: async (req,res)=>{
   
  const result = await BlogCategory.deleteOne({_id:req.params.id});
  // const result = await BlogCategory.findByIdAndDelete(req.params.id)
  // const result = await BlogCategory.findByIdAndRemove(req.params.id)
 
  if(result.deletedCount === 1){
    res.status(204);
  }else {
     res.errorStatuscode =404;
     throw new Error ('Blog not found');
  }
  res.status(200).send({
    error:false,
    result
  });
},
}