require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const citiesRouter = require("./routers/citiesRouter")
const agentsRouter = require("./routers/agentsRouter")
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


app.use("/cities", citiesRouter)
app.use("/agents", agentsRouter)



app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

