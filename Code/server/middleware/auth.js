const jwt = require("jsonwebtoken");
const { User } = require('../models');

// Middleware function for authentication
module.exports = async (req, res, next) => {

    const token = req.headers["authorization"];
    if (typeof token !== "undefined") {
        req.token = token;
        // Verify the token and decode it to get user id
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const currentTime = Date.now() / 1000; // Get current time in seconds
        if (decodedToken.exp <= currentTime)
            res.status(401).json({ message: "Not authorized to access this route" });
        else
            next();
    }
    else {
        res.status(401).json({ message: "Not authorized to access this route" });
    }
};