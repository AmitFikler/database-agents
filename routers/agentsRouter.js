const express = require("express");
const router = express.Router();

const {allAgentIn, changeAgentCity} = require("../controllers/agent")


router.get("/",allAgentIn)
router.put("/:id/edit", changeAgentCity)


module.exports = router