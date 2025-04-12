'useStrtict';

const User= require('../models/user.model');

list =async (req,res)=>{

  const result = await User.find()
  res.status(200).send({
    error: false, 
    result
  })
}