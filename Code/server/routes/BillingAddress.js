const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { updateAddress } = require("../controllers/BillingAddress.js");

router.post("/updateAddress/", updateAddress);

module.exports = router;