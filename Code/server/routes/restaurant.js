const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addRestaurant } = require("../controllers/restaurant.js");

router.post("/addRestaurant", addRestaurant);

module.exports = router;