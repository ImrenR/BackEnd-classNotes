'use strict';
const express =require ('express');
const app = express();

require("dotenv").config();
const PORT=process.env.PORT || 8000;
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

//Main Routes
app.all("/", (req,res)=>{
  res.send("Welcome to the home page");
})
//Blog Route
app.use(require('./src/routes/blog.router'));
app.use(require('./src/routes/user.router'));

// Error Handler:
app.use (require("./src/middlewares/errorHandler"));
// app.use(require("./src/dbConnection"));
/*---------------------------------------*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);