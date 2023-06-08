const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { startVerification, checkVerification } = require("../controllers/phoneNumberVerification.js");

router.post("/start-verification", startVerification);
router.post("/check-verification", checkVerification);

module.exports = router;
