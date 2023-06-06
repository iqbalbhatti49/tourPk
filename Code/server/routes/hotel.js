const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addHotel } = require("../controllers/hotel.js");

router.post("/addHotel", authenticateMiddleware, addHotel);

module.exports = router;