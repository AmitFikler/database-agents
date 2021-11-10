require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());

const url = process.env.MONGODB_URI

console.log('connecting to' + url);

mongoose.connect(url)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log('error connecting to MongoDB:', err.message);
})

app.get("/", (req,res)=>{
    res.send("hello")
})


app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

