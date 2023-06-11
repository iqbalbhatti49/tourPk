const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addHotel, getAllHotels, getHotelById } = require("../controllers/hotel.js");

router.post("/addHotel", addHotel);
router.get("/getHotels", authenticateMiddleware, getAllHotels);
router.get("/getHotelById/:id", getHotelById);

module.exports = router;