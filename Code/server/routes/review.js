const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addReview, getReviewsById } = require("../controllers/review.js");

router.post("/addReview", addReview);
router.get("/getReviewsByServiceId/:id", getReviewsById);

module.exports = router;