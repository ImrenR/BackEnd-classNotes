const express= require('express');
const app= express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;

/*------------------------*/
// Accept json data
/*------------------------*/
app.use(express.json());

app.all ('/', (req, res) => {
    res.send('Hello World');
}
);
/*------------------------*/
// Models :  
/*------------------------*/

const errorHandler = (err, req, res, next) => {
  const errorStatusCode =res.errorStatusCode ?? 500;
  res.status (errorStatusCode).send ({
    error: true, // true if error
    message: err.message, // error string message
    cause : err.cause, // error cause
  })}