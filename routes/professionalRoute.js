const express = require("express");
const professionalController = require("../controllers/professionalController.js");

const router = express.Router();

router.get("/", professionalController.userData);

module.exports = router;