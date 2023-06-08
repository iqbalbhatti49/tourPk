const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addReview, getReviewsById } = require("../controllers/review.js");

router.post("/addReview", authenticateMiddleware, addReview);
router.get("/getReviewsByServiceId", authenticateMiddleware, getReviewsById);

module.exports = router;