'use strict';

  const {mongoose }= require('mongoose');

  const blogCategorySchema = new mongoose.Schema({
    // _id is default
       name: {
        type : String,
        trim: true,
        required: true,
        unique: true
       }

  }, {
    collection: 'blogCategories',
    timestamps : true
  })

  const blogPostSchema = new mongoose.Schema({
    // _id is default
       categoryId: { // default relation ManyToOne
        type : mongoose.Schema.Types.ObjectId,
        ref : 'BlogCategory', // gave model name not Schema/Table name!
        required: true,
        unique: true // to convert One to One
       },
       title:{
        type : String,
        trim: true,
        required: true,
        unique: true
      
       },
       content:{
        type : String,
        trim: true,
        required: true,
        unique: true
       },


  }, {
    collection: 'blogPosts',
    timestamps : true
  })

/* Convert Schema to Model  */
  module.exports = mongoose.model('BlogCategory', blogCategorySchema);