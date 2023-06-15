const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addTourGuide, getAllTourGuides, getTourGuideById, addBooking, deleteTourGuide, getAllBookings, updatetourguide } = require("../controllers/tourguide.js");

router.post("/addtourguide", addTourGuide);
router.get("/getTourGuides", getAllTourGuides);
router.get("/getTourGuideById/:id", getTourGuideById);
router.post("/addBooking", addBooking);
router.post("/deleteTourGuide/", deleteTourGuide);
router.get("/getAllBookings/:id", getAllBookings)
router.post("/updatetourguide/", updatetourguide);

module.exports = router;