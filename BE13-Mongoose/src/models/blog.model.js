'use strict';

const {mongoose} = require ('mongoose');

const blogCategorySchema = new mongoose.Schema({
    // _id: // auto generated
    name:{
      type: String,
      trim: true, // remove spaces from start and end
      unique: true, // unique field
    }
},{
    collection:'blogCategories',  // Table Name
    
   })

    const BlogCategory= mongoose.model ('BlogCategory', blogCategorySchema);

    /*------------------------------------*/
    // BlogPost Schema 
    /*------------------------------------*/
 const blogPostSchema = new mongoose.Schema ({
  categoryId:{ // DEFAULT RELATION : MANYTOONE
         type:mongoose.Schema.Types.ObjectId,
          ref:'BlogCategory', // reference to BlogCategory model
          required: true,
          // unique: true, // convert relation to OnetoOne
  
        },
     title :{
       type: String,
       trim: true, // remove spaces from start and end
       required: true,
     },
     content:{
      type: Text,
      trim: true, // remove spaces from start and end
      required: true,
    },

 }, {
  collection:'blogPosts', // Table Name
  timestamps:true, // createdAt, updatedAt
 })

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

/*------------------------------------*/
module.exports = {BlogCategory, BlogPost};
/*------------------------------------*/





// const { Collection } = require("mongoose");
// // new mongoose.Schema({field},{options});

// const newSchema = new mongoose.Schema({
//    //_id: // auto generated
//   fieldName:Number,
//   fieldName2:Boolean,
//   fieldName3:mongoose.Schema.Types.String,
//   fieldName4: {
//     type: String,
//     default: null;
//     trim: true, // remove spaces from start and end 
//     unique: true, // unique field
//     select:false,
//     required: [true, "Please provide a value for fieldName4"], // custom error message
//     enum: ['1','2','3'], // only these values are allowed
//     enum:[[1,2,3], 'custom error message'], // only these values are allowed
//     min: 1, // minimum value
//     max: 100, // maximum value
//     // validate: ()=> true // custom validation function
//      validate:[()=> true, "custom error message"], // custom validation function
//      get:()=>{return data}, // custom getter function,default
//     set:()=>{return data} // custom setter function,it works default
//    }

// },{
//     collection:'collectionName', // Table Name
//     timestamps:true, // createdAt, updatedAt
// });
// module.exports = mongoose.model('ModelName', newSchema);