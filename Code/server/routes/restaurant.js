const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addRestaurant, getRestaurantById, getAllRestaurants } = require("../controllers/restaurant.js");

router.post("/addRestaurant", authenticateMiddleware, addRestaurant);
router.get("/restaurantListing/:name", authenticateMiddleware, getRestaurantById);
router.get("/getRestaurants", authenticateMiddleware, getAllRestaurants);

module.exports = router;