const Agent = require("../models/agent")

exports.getAllCities = (req,res) =>{
    Agent.find({}).distinct('city')
    .then((cities)=>{
        res.json(cities)
    })
    .catch(err =>{
        console.log(err)
    })
}