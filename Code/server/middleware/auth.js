const jwt = require("jsonwebtoken");
const { User } = require('../models');

// Middleware function for authentication
module.exports = async (req, res, next) => {
    // Get the authorization header from the request
    const bearerHeader = req.headers["authorization"];

    // If the header exists, extract the token from it and attach to request object
    if (typeof bearerHeader !== "undefined") {
        const token = bearerHeader.split(" ")[1];
        req.token = token;

        try {
            // Verify the token and decode it to get user id
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findByPk(decode.id);

            if (!user) {
                return res.status(404).json("No user found with this id");
            }
            // Attach the user object to the request object and call next middleware
            req.user = user;
            next();
        }
        catch (err) {
            return res.status(401).json("Authentication failed");
        }
        next();
    }
    else {
        // If the header doesn't exist, send a 401 status code with error message
        res.status(401).json({ message: "Not authorized to access this route" });
        next();
    }
};