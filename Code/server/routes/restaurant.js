const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addRestaurant, getRestaurantById, getAllRestaurants } = require("../controllers/restaurant.js");

router.post("/addRestaurant", authenticateMiddleware, addRestaurant);
router.get("/restaurantListing/:id", authenticateMiddleware, getRestaurantById);
router.get("/getRestaurants", authenticateMiddleware, getAllRestaurants);
router.get("/getRestaurantById/:id", getRestaurantById);

module.exports = router;