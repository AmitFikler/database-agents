const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  license_id: {
    type: Number,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Agent', agentSchema)
