const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addHotel, getAllHotels, getHotelById, addBooking, deleteHotel, updatehotel, addRoom, getBookingsByIds } = require("../controllers/hotel.js");

router.post("/addHotel", addHotel);
router.get("/getHotels", authenticateMiddleware, getAllHotels);
router.get("/getHotelById/:id", getHotelById);
router.post("/deleteHotel", deleteHotel);
router.post("/updateHotel", updatehotel);
router.post("/addBooking", addBooking);
router.post("/addRoom", addRoom);
router.get("/getBookingsByIds", getBookingsByIds);

module.exports = router;