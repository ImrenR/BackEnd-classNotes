"use strict";

/*----------------------------------------*/
// Importing mongoose
const mongoose = require("mongoose");

  mongoose.connect(process.env.MONGOURI || "mongodb://localhost:27017/personnelAPI")
  .then(() => console.log("Database connected successfully"))
  .catch(() => console.log("Database connection failed"));

module.exports = mongoose;
