"use strict";
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
/*---------------------------------------*/
// Parse data
app.use(express.json());
// Catch async errors
require("express-async-errors");

// DB Connection
const dbConnection = require("./src/dbConnection");
dbConnection();
//or
// require('./src/dbConnection');

// SessionCookie
const session = require("cookie-session");

app.use(
  session({
    secret: process.env.PASS_SALT,
    // maxAge: 1000 * 60 * 60 * 24 * 3// 3 days in milliseconds// with this session will became a cookie
  })
);
// User Control (check user data from session)
app.use(require("./src/middlewares/userControl"));
app.use(require("./src/middlewares/findSearchSortPagination"));
/*---------------------------------------*/
//Main Routes
app.all("/", (req, res) => {
  res.send({
    message: "Welcome to the home page",
    session: req.session,
  });
});

//Blog Route
app.use(require("./src/routes/blog.router"));
// User Route
app.use("/users", require("./src/routes/user.router"));
// Not Found route
app.all("*", (req, res) => {
  res.status(404).send({
    error: true,
    message: "The route you are looking for is not found!",
  });
});

// Error Handler:
app.use(require("./src/middlewares/errorHandler"));
// app.use(require("./src/dbConnection"));
/*---------------------------------------*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//! Syncronization: (once run)
// require('./sync')()