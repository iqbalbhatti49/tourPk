const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addTravelAgentPackage } = require("../controllers/travelagent.js");

router.post("/addTravelAgentPackage", addTravelAgentPackage);

module.exports = router;