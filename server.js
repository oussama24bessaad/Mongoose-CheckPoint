// *****************************import***********************************
const express = require("express");
const connectDB=require("./config/connectDB");

// *****************************instance methods*************************
const app=express();
// ---our env variables
require("dotenv").config();
// ---connect the DB
connectDB();
//---global middlwareto parse data to json type
app.use(express.json()); 

// *****************************ROUTES************************************
// ---global middlware for user routes 
// ---@PATH: /api/person
app.use("/api/person",require("./routes/person"));

// *****************************PORT*************************************
const PORT=process.env.PORT;

// *****************************creact server****************************
app.listen(PORT,(err)=>err?console.log(err):console.log(`Your server running in port : ${PORT}`));