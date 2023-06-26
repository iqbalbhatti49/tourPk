const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { getServicesByUserId, getBookingsByUserId, spotsByCities } = require("../controllers/service.js");

router.get("/getServicesByUserId/:id", getServicesByUserId);
router.get("/Bookings/:id", authenticateMiddleware, getBookingsByUserId);
router.get("/spotsByCities/:city", spotsByCities);

module.exports = router;