const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addTourGuide, getAllTourGuides } = require("../controllers/tourguide.js");

router.post("/addtourguide", authenticateMiddleware, addTourGuide);
router.get("/getTourGuides", authenticateMiddleware, getAllTourGuides);

module.exports = router;