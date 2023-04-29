const { User } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
require('dotenv').config();


exports.signup = async (req, res, data) => {
    try {
        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        await User.create({
            name: req.body.name,
            password: hashedPassword,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            ...data
        });
        return res.status(200).json("User has been created."); // 200: the request was successful
    }
    catch (err) {
        return res.status(500).json(err); //500 -> Internal Server Error:something is wrong
    }
};

exports.signupAsSeller = async (req, res) => {

    try {
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                    { phoneNumber: req.body.phoneNumber },
                    { businessTitle: req.body.businessTitle }
                ]
            }
        });

        if (existingUser)
            return res.status(409).json("User/ Business already exists!");

        this.signup(req, res, { role: "seller", businessTitle: req.body.businessTitle });
    }
    catch (err) {
        return res.status(500).json(err); //500 -> Internal Server Error:something is wrong
    }
}

exports.signupAsTourist = async (req, res) => {
    try {
        const existingUser = await User.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                    { phoneNumber: req.body.phoneNumber }
                ]
            }
        });
        if (existingUser)
            return res.status(409).json("User already exists!");

        this.signup(req, res, { role: "tourist" });
    }
    catch (err) {
        return res.status(500).json(err); //500 -> Internal Server Error:something is wrong
    }
};

exports.login = async (req, res) => {
    try {
        console.log("aaaaaaaaaaaa 1");
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        console.log("aaaaaaaaaaaaaa 2");

        // Verify the password
        const validPassword = await bcrypt.compare(req.body.password, sellerUser.password);
        console.log("aaaaaaaaaaaa 3....");
        if (!validPassword) {
            return res.status(401).json("Invalid credentials"); //client request has not been completed because it lacks valid authentication credentials for the requested resource.
        }
        console.log("aaaaaaaaaaaa 4");

        console.log(process.env.JWT_EXPIRE);

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRE,
        });

        const { password, ...other } = user;

        res.status(201).json({
            status: 'success',
            token,
            data: other
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
};

exports.logout = (req, res) => {

};




// import jwt from "jsonwebtoken";


exports.loginn = async (req, res) => {
    try {

        const token = jwt.sign({ id: user.id }, "jwtkey");
        const { password, ...other } = user.toJSON();

        res.cookie("access_token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: true,
        }).json(other);
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
};

exports.logoutt = async (req, res) => {
    try {
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true,
        }).json("User has been logged out.");
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
};
