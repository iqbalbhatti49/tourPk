const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addTravelAgentPackage, getAllTravelAgents } = require("../controllers/travelagent.js");

router.post("/addTravelAgentPackage", authenticateMiddleware, addTravelAgentPackage);
router.get("/getTravelAgents", authenticateMiddleware, getAllTravelAgents);

module.exports = router;