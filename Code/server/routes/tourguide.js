const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addTourGuide } = require("../controllers/tourguide.js");

router.post("/addtourguide", addTourGuide);

module.exports = router;