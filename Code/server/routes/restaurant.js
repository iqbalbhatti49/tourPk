const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addRestaurant, getRestaurantById, getAllRestaurants, deleteRestaurant, updaterestaurant } = require("../controllers/restaurant.js");

router.post("/addRestaurant", addRestaurant);
router.get("/restaurantListing/:id", getRestaurantById);
router.get("/getRestaurants", getAllRestaurants);
router.get("/getRestaurantById/:id", getRestaurantById);
router.post("/deleteRestaurant/", deleteRestaurant);
router.post("/updateRestaurant/", updaterestaurant);

module.exports = router;