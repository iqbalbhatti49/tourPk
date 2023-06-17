const express = require("express");
const router = express.Router();
const { getServicesByUserId, spotsByCities, getBookingsByUserId } = require("../controllers/service.js");

router.get("/getServicesByUserId/:id", getServicesByUserId);
router.get("/Bookings/:id", getBookingsByUserId);
router.post("/spotsByCities", spotsByCities);


module.exports = router;