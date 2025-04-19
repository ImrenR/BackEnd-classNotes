'use strict';



module.exports = (err,rew,res,next)=> {
  const customErrorCode = res?.customErrorCode || 500;
  res.status(customErrorCode).send({
    error : true,
    msg:err.msg
  });
};