"use strict";
// Error handler middleware
// This middleware is used to handle errors in the application.
// It takes in an error object, request object, response object, and next function.
// It logs the error message to the console and sends a response to the client with the error message and status code.
// The status code is set to 500 by default, but can be overridden by setting the customErrorCode property on the response object.
// It also sets the error property to true in the response object.
// The response object is sent back to the client with the error message and status code.
module.exports= (err,req,res,next)=>{
  console.log("Error handler middleware");
  const customErorCode=res?.customErorCode || 500;
  res.status(customErrorCode).send({
    error:true,
    message:err.message || "Something went wrong",
  });
};