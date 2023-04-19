const { Tourist } = require('../models');
const { Seller } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

exports.signupAsSeller = async (req, res) => {
    try {
        const existingUser = await Seller.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.Email },
                    { phoneNumber: req.body.PhoneNumber },
                    { businessTitle: req.body.BusinessTitle }
                ]
            }
        });

        if (existingUser)
            return res.status(409).json("User already exists!");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.Password, salt);

        await Seller.create({
            name: req.body.FullName,
            password: hashedPassword,
            email: req.body.Email,
            phoneNumber: req.body.PhoneNumber,
            businessTitle: req.body.BusinessTitle
        });
        return res.status(200).json("User has been created."); // 200: the request was successful
    }
    catch (err) {
        return res.status(500).json(err); //500 -> Internal Server Error:something is wrong
    }
};

exports.signupAsTourist = async (req, res) => {
    try {
        existingUser = await Tourist.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.Email },
                    { phoneNumber: req.body.PhoneNumber }
                ]
            }
        });
        if (existingUser)
            return res.status(409).json("User already exists!");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.Password, salt);

        await Tourist.create({
            name: req.body.FullName,
            password: hashedPassword,
            email: req.body.Email,
            phoneNumber: req.body.PhoneNumber,
        });
        return res.status(200).json("User has been created."); // 200: the request was successful
    }
    catch (err) {
        return res.status(500).json(err); //500 -> Internal Server Error:something is wrong
    }
};

exports.login = async (req, res) => {
    try {
        console.log("aaaaaaaaaaaa 1");
        const sellerUser = await Seller.findOne({
            where: {
                email: req.body.Email
            }
        });
        console.log("aaaaaaaaaaaaaa 2");

        if (!sellerUser) //its a tourist login..
        {
            console.log("aaaaaaaaaaaa 3");
            const buyerUser = await Tourist.findOne({
                where: {
                    email: req.body.Email
                }
            })
            console.log("aaaaaaaaaaaa 4");
            if (!buyerUser)
                return res.status(404).json("User not found");

            console.log("aaaaaaaaaaaa 5");

            // Verify the password for the buyer user
            const validPassword = await bcrypt.compare(req.body.Password, buyerUser.password);
            console.log("aaaaaaaaaaaa 6");
            if (!validPassword) {
                return res.status(401).json("Invalid credentials"); //client request has not been completed because it lacks valid authentication credentials for the requested resource.
            }
            console.log("aaaaaaaaaaaa 7");
        }
        else //its a seller login..
        {
            console.log("aaaaaaaaaaaa 8....");
            // Verify the password for the seller user
            const validPassword = await bcrypt.compare(req.body.Password, sellerUser.password);
            console.log("aaaaaaaaaaaa 9....");
            if (!validPassword) {
                return res.status(401).json("Invalid credentials"); //client request has not been completed because it lacks valid authentication credentials for the requested resource.
            }
            console.log("aaaaaaaaaaaa 10");
        }
        console.log("...done with login stuff...");

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
