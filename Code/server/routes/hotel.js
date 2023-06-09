const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addHotel, getAllHotels } = require("../controllers/hotel.js");

router.post("/addHotel", authenticateMiddleware, addHotel);
router.get("/getHotels", authenticateMiddleware, getAllHotels);

module.exports = router;