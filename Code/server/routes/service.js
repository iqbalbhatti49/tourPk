const express = require("express");
const router = express.Router();
const { getServicesByUserId, getBookingsByUserId, spotsByCities } = require("../controllers/service.js");

router.get("/getServicesByUserId/:id", getServicesByUserId);
router.get("/Bookings/:id", getBookingsByUserId);
router.get("/spotsByCities", spotsByCities);

module.exports = router;