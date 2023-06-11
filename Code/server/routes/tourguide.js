const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addTourGuide, getAllTourGuides, getTourGuideById, addBooking } = require("../controllers/tourguide.js");

router.post("/addtourguide", authenticateMiddleware, addTourGuide);
router.get("/getTourGuides", authenticateMiddleware, getAllTourGuides);
router.get("/getTourGuideById/:id", getTourGuideById);
router.post("/addBooking", addBooking);
module.exports = router;