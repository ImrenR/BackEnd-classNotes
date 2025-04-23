'use strict';


const {mongoose} = require('../configs/dbConnection');


const DepartmentSchema = new mongoose.Schema ({
  name:{
    type: String,
    trim:true,
    required:true,
  }
},{
  collection: ' departments',
  timestamps: true
})

module.exports=mongoose.model("Department", DepartmentSchema)


