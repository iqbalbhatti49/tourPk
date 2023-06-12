const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { sendVerificationCodeByEmailWithTemplate, checkVerificationCode } = require("../controllers/EmailVerification.js");

router.post("/start-verification", sendVerificationCodeByEmailWithTemplate);
router.post("/check-verification", checkVerificationCode);

module.exports = router;
