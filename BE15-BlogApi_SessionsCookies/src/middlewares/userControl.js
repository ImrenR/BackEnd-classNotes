"use strict";

// Authentication middleware:
module.exports =async (req,res,next)=> {

  req.user = null;
  next();
  

};