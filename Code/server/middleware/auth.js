const jwt = require("jsonwebtoken");
const { User } = require('../models');

// Middleware function for authentication

module.exports = async (req, res, next) => {

    // Get the authorization header from the request
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
        // console.log("----- verified token gives -->>> ", decode);
        // const user = await User.findByPk(decode.id);
        // console.log("decode.id:", decode.id);
        // if (!user) {
        //     return res.status(404).json("No user found with this id");
        // }
        // Attach the user object to the request object and call next middleware
        // req.user = user;   
    }
    else {
        // If the header doesn't exist, send a 401 status code with error message
        res.status(401).json({ message: "Not authorized to access this route" });
    }
};