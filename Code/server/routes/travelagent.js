const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addTravelAgentPackage, getAllTravelAgents, getTravelAgentById, deleteTourPackage, addBooking, updatetravelagent } = require("../controllers/travelagent.js");

router.post("/addTravelAgentPackage", authenticateMiddleware, addTravelAgentPackage);
router.get("/getTravelAgents", getAllTravelAgents);
router.get("/getTravelAgentById/:id", getTravelAgentById);
router.post("/deleteTourPackage/", deleteTourPackage);
router.post("/addBooking/", addBooking);
router.post("/updateTravelAgentPackage/", updatetravelagent);

module.exports = router;