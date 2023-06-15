const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { getServicesByUserId, getSellerBookingsById, getTouristBookingsById, getBookingsByUserId } = require("../controllers/service.js");

router.get("/getServicesByUserId/:id", getServicesByUserId);
router.get("/Bookings/:id", getBookingsByUserId);

module.exports = router;