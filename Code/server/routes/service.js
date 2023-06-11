const express = require("express");
const router = express.Router();
const authenticateMiddleware = require("../middleware/auth.js");
const { getServicesByUserId } = require("../controllers/service.js");

router.get("/getServicesByUserId/:id", getServicesByUserId);

module.exports = router;