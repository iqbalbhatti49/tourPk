const express = require("express");
const router = express.Router();
const { getServicesByUserId, getBookingsByUserId, getAllServicesByCitiesDivision } = require("../controllers/service.js");

router.get("/getServicesByUserId/:id", getServicesByUserId);
router.get("/Bookings/:id", getBookingsByUserId);
router.get("/spotsByCities", getAllServicesByCitiesDivision);


module.exports = router;