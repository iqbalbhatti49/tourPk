const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addRestaurant, getRestaurantById } = require("../controllers/restaurant.js");

router.post("/addRestaurant", addRestaurant);
router.post("/restaurantListing/:name", getRestaurantById);

module.exports = router;