"use strict";

const {BlogCategory, BlogPosts} = require('../models/blog.model');

module.exports = {
  list : async (req,res)=> {

const result = await BlogCategory.find( );

  res.status(200).send({
        error:false,
        result
  });
},

create : async (req,res)=> {

  const result = await BlogCategory.create(req.body)
  
    res.status(201).send({
          error:false,
          result
    });
  },

  read : async (req,res)=> {

    const result = await BlogCategory.findById(req.params.id);
    
      res.status(200).send({
            error:false,
            result
      });
    },

    update : async (req,res)=> {

      const result = await BlogCategory.updateOne({_id:req.params.id},req.body)
      // findOneAndUpdate {new : true}  another method
        res.status(200).send({
              error:false,
              result,
              new: await BlogCategory.findById(req.params.id)
        });
      },

      delete: async (req,res)=> {

        const result = await BlogCategory.deleteOne({_id:req.params.id});
        
        if(result.deletedCount){
          res.send(204);
          }else {
            res.errorStatusCode = 404;
            throw new Error('Data is not found');
          }
        }
          
        },
}