const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/Help.js");
const { authenticateMiddleware } = require("../middleware/auth.js");

router.post("/", authenticateMiddleware, sendEmail);

module.exports = router;
