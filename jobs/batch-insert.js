const csv = require("csvtojson");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const Agent = require("../models/agent");
const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error connecting to MongoDB:", err.message);
  });

const csvFile = `C:/cyber4s3/database-agents/assets/agents.csv`;

csv()
  .fromFile(csvFile)
  .then((agents) => {
    const agentsCollection = agents
      .map((agent) => {
        return {
          license_id: Object.values(agent)[0].trim(),
          full_name: Object.values(agent)[1].trim(),
          city: Object.values(agent)[2].trim(),
        };
      })
      .filter((agent) => {
        return agent.license_id && agent.full_name && agent.city;
      });
    Agent.insertMany(agentsCollection)
      .then(() => {
        console.log("Data inserted");
      })
      .catch((err) => {
        console.log(err);
      });
  });
