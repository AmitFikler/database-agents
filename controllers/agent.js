const Agent = require("../models/agent");

exports.allAgentIn = (req, res) => {
  const { city } = req.query;
  Agent.find({ city })
    .then((agent) => {
      res.json(agent);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.changeAgentCity = (req,res) =>{
    const id = req.params.id
    Agent.findOneAndUpdate({license_id: id}, {city:req.body.city})
    .then(res.send("updated"))
    .catch(err=>{
        console.log(err)
    })
}
