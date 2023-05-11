const express = require("express");
const { signupAsSeller, signupAsTourist, login, logout } = require("../controllers/authUser.js");
const { authenticateMiddleware } = require("../middleware/auth.js");
const router = express.Router();

router.post("/signupAsTourist", authenticateMiddleware, signupAsTourist);
router.post("/signupAsSeller", authenticateMiddleware, signupAsSeller);
router.post("/login", authenticateMiddleware, login);
router.post("/logout", authenticateMiddleware, logout);

module.exports = router;