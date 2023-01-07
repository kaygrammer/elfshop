const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection successful"))
.catch((err) => {
    console.log(err);
})


app.listen(process.env.PORT || 5000, ()=>{
    console.log("server is currently running");
})
