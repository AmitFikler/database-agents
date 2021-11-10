const express = require("express");
const router = express.Router();

const { getAllCities } = require("../controllers/city");

router.get("/", getAllCities);

module.exports = router;
