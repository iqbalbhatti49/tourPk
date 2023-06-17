const express = require("express");
const router = express.Router();
const { getServicesByUserId, spotsByCities, getBookingsByUserId, getAllServicesByCitiesDivision } = require("../controllers/service.js");

router.get("/getServicesByUserId/:id", getServicesByUserId);
router.get("/Bookings/:id", getBookingsByUserId);
router.get("/spotsByCities", getAllServicesByCitiesDivision);
router.post("/spotsByCities", spotsByCities);


module.exports = router;