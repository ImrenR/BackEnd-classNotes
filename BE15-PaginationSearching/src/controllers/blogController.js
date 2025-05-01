"use strict";

//Call Models:
const { BlogCategory, BlogPost } = require("../models/blog.model"); // import BlogCategory and BlogPost from blog.model

//BlogCategory Controller
module.exports.BlogCategory = {
  list: async (req, res) => {
    const result = await BlogCategory.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  create: async (req, res) => {
    const result = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const result = await BlogCategory.findById(req.params.id);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    //acknowledged: true, // if update is successful
    //modifiedCount: 1, // number of documents modified
    //upsertedId: null, // id of the inserted document
    //upsertedCount: 0, // number of documents inserted
    //matchedCount: 1 // number of documents matched

    // const result = await BlogCategory.updateOne({_id:req.params.id}, req.body)
    const result = await BlogCategory.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      error: false,
      result,
      new: await BlogCategory.findById(req.params.id),
    });
  },

  delete: async (req, res) => {
    const result = await BlogCategory.deleteOne({ _id: req.params.id });
    // const result = await BlogCategory.findByIdAndDelete(req.params.id)
    // const result = await BlogCategory.findByIdAndRemove(req.params.id)

    if (result.deletedCount === 1) {
      res.status(204);
    } else {
      res.errorStatuscode = 404;
      throw new Error("Blog not found");
    }
    res.status(200).send({
      error: false,
      result,
    });
  },
};
// BlogPost Controller
module.exports.BlogPost = {
  list: async (req, res) => {
// //*  Filtering :

// const filter = req.query?.filter || {};

// //* SEARCHING :
// const search = req.query?.search || "";

// for ( let key in search) search[key] ={$regex: search[key], $options: 'i'}

// //* SORTING :
// const sort = req.query?.sort || {};  

// //* LIMITING :
// const limit = parseInt(req.query?.limit)
// limit = limit > 0 ? limit : parseInt(process.env.PAGE_SIZE) || 20
   
// //*PAGE :
// let page = parseInt(req.query?.page)
// page = page > 0 ? page : 1;

// //* SKIP */
// let skip = parseInt
// skip = skip > 0 ? skip :(page - 1) * limit ;

// const result = await BlogPost.find(...filter, ...search).sort(sort).skip(skip).limit(limit);

 const result = await res.getModelList(BlogPost, ['categoryId', 'userId']);
    
 res.status(200).send({
      error: false,
      details: await res.getModelListDetails(BlogPost),
      result,
    });
  },

  create: async (req, res) => {
    console.log(req.user);

    req.body.userId = req.user._id;
    const result = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const result = await BlogPost.findById(req.params.id);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    //acknowledged: true, // if update is successful
    //modifiedCount: 1, // number of documents modified
    //upsertedId: null, // id of the inserted document
    //upsertedCount: 0, // number of documents inserted
    //matchedCount: 1 // number of documents matched

    // const result = await BlogPost.updateOne({_id:req.params.id}, req.body)
    const result = await BlogPost.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).send({
      error: false,
      result,
      new: await BlogPost.findById(req.params.id),
    });
  },

  delete: async (req, res) => {
    const result = await BlogCategory.deleteOne({ _id: req.params.id });
    // const result = await BlogCategory.findByIdAndDelete(req.params.id)
    // const result = await BlogCategory.findByIdAndRemove(req.params.id)

    if (result.deletedCount === 1) {
      res.status(204);
    } else {
      res.errorStatuscode = 404;
      throw new Error("Blog not found");
    }
    res.status(200).send({
      error: false,
      result,
    });
  },
};
