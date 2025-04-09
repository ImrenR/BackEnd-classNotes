'use strict';
const express =require ('express');
const app = express();

require("dotenv").config();
const PORT=process.env.PORT || 8000;
/*---------------------------------------*/
// Parse data
app.use(express.json());
 // Catch async errors 
 require("express-async-errors")


/*---------------------------------------*/
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);