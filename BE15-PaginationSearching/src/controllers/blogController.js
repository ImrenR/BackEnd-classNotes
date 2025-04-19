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
    // Filtering & Searching & Sorting & Pagination
    //* Filter: searches for absolute equality, Search; searches for partial equality
    
    //*FILTERING:
    // URL?filter[fieldName1]=value1&filter[fieldName2]=value2
    const filter = req.query?.filter || {};
   
    
    //* SEARCHING:
    // URL?search[fieldName1]=value1&search[fieldName2]=value2
    // {"<field>" : {"$regex" : "pattern", "$options": "<options"}}
    const search = req.query?.search || {};
  
    // console.log(search.title);
    // console.log(search['title']);
    // search['title']= 'this is new value' // to change the value
    for (let key in search )search[key] = {$regex: search[key], $options: 'i'}

     //* SORTING:
    // URL?sort[fieldName1]=value1&sort[fieldName2]=value2
     const sort = req.query?.sort || {}

    //* PAGINATION:
    // URL?page=3&limit=15&skip=20

    //*LIMIT:
    let limit = parseInt(req.query?.limit)
    limit = limit > 0 ? limit : parseInt(process.env.PAGE_SIZE) || 20



    const result = await BlogPost.find({...filter,...search}).sort(sort); // populate categoryId with name field from BlogCategory

    res.status(200).send({
      error: false,
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
