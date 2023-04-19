const express = require("express");
const { signupAsSeller, signupAsTourist, login, logout } = require("../controllers/authUser.js");

const router = express.Router();

router.post("/signupAsTourist", signupAsTourist);
router.post("/signupAsSeller", signupAsSeller);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;