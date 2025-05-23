"use strict";

const Department = require("../models/department.js");
const Personnel = require("../models/personnel.js");

module.exports = {
  list: async (req, res) => {
    /*  #swagger.tags = ['Authentication']
        #swagger.summary = 'List Departments'
        #swagger.description =
        You can send query with endpoint for search[], sort[], page and limit.
         }
    
*/
    const result = await res.getModelList(Department);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Department),
      result,
    });
  },
  create: async (req, res) => {

    
    const result = await Department.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const result = await Department.findOne({ _id: req.params.id });

    res.status(201).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
    const result = await Department.updateOne(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true, // runs validation method
        new: true,
      }
    );
    res.status(202).send({
      error: false,
      result,
    });
  },
  deleteDepartment: async (req, res) => {
    const result = await Department.deleteOne({ _id: req.params.id });
    // 204 no content 404 not found
    res.status(result.deletedCount ? 204 : 404).send({
      error: false,
      deletedCount: true,
      result,
    });
  },
  //todo: list all personnels related with their departments
  personnels: async (req, res) => {
    const { id: departmentId } = req.params;
    const result = await res.getModelList(Personnel, { departmentId });

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Personnel, { departmentId }),
      result,
    });
  },
};
