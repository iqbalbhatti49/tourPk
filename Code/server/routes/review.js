const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { addReview } = require("../controllers/review.js");

router.post("/addReview", authenticateMiddleware, addReview);

module.exports = router;