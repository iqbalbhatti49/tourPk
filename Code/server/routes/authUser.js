const express = require("express");
const { signupAsSeller, signupAsTourist, login, logout, forgetPassword, resetPassword } = require("../controllers/authUser");
const router = express.Router();

router.post("/signupAsTourist", signupAsTourist);
router.post("/signupAsSeller", signupAsSeller);
router.post("/login", login);
router.post("/logout", logout);
router.post("/resetPassword/:id/:token", resetPassword);
router.post("/forgetPassword", forgetPassword); //get email whose password is forgot..

module.exports = router;