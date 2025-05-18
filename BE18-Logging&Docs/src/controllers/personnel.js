"use strict";

const Personnel = require("../models/personnel");

module.exports = {
  list: async (req, res) => {
    const result = await res.getModelList(Personnel);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Personnel),
      result,
    });
  },
  create: async (req, res) => {
    // todo : if it is created a new lead, make the old lead false
   const isLead= req.body?. islead || false

   if(isLead) {
    await Personnel.updateMany({departmentId:req.body.departmentId, isLead: true})
   }
    const result = await Personnel.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const result = await Personnel.findOne({ _id: req.params.id });

    res.status(201).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {

    // todo: if there is any update and and this update is lead, make the old one false:
  const isLead = req.body?.isLead || false

   if(isLead){
     const {departmentId} = await Personnel.findOne({_id:req.params.id}, {departmentId: 1})
      
     await Personnel.updateMany({departmentId, isLead:true},{isLead:false})
    }


    const result = await Personnel.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true, // runs validation method
      new: true,
    });
    res.status(202).send({
      error: false,
      result,
    });
  },
  delete: async (req, res) => {
    const result = await Personnel.deleteOne({ _id: req.params.id });
    // 204 no content 404 not found
    res.status(result.deletedCount ? 2044 : 404).send({
      error: false,
      deletedCount: true,
      result,
    });
  },
};
