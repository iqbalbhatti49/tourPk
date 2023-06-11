const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addTravelAgentPackage, getAllTravelAgents, getTravelAgentById, deleteTourPackage } = require("../controllers/travelagent.js");

router.post("/addTravelAgentPackage", authenticateMiddleware, addTravelAgentPackage);
router.get("/getTravelAgents", authenticateMiddleware, getAllTravelAgents);
router.get("/getTravelAgentById/:id", getTravelAgentById);
router.post("/deleteTourPackage/", deleteTourPackage);

module.exports = router;