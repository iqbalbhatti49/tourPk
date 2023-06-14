const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { updatePayment  } = require("../controllers/paymentInformation.js");

router.post("/updatePayment/", authenticateMiddleware, updatePayment);

module.exports = router;