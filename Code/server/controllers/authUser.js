const { User } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();

// common function for signup as seller and tourist
exports.signup = async (req, res, data) => {
    try {
        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(req.body.password, salt);

        await User.create({
            name: req.body.name,
            password: encryptedPassword,
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
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        // Verify the password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json("Invalid credentials"); //client request has not been completed because it lacks valid authentication credentials for the requested resource.
        } const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
        user.password = "";
        res.status(200).json({ user, token });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
};

exports.logout = async (req, res) => {
    try {
        res.status(200).json("User has been logged out.")
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
};

exports.forgetPassword = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.forgetEmail }
        });
        if (!user) {
            return res.json("User Does Not Exist!");
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "5m",
        });

        const transport = nodemailer.createTransport(
            nodemailerSendgrid({
                apiKey: process.env.SENDGRID_API_KEY
            })
        );
        const link = `http://localhost:3000/reset-password/${user.id}/${token}`;
        const body = '<strong>Click the link below to reset password:</strong> <br> <br> ' + link;
        transport
            .sendMail({
                from: 'iqrasarwarm012@gmail.com',
                to: req.body.forgetEmail,
                subject: "Reset password link - TourPk",
                html: body,
            })
        return res.json(`Check Email to reset password ${req.body.forgetEmail}`);
    }
    catch (err) {
        console.log('Errors occurred, failed to deliver message');
        return res.status(500).json(err);
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(req.body.password, salt);
        await User.update({ password: encryptedPassword }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json("Password Updated Successfully");
    } catch (error) {
        console.log(error);
        res.json({ status: "Something Went Wrong" });
    }
};

exports.updateUserWithPlanDetails = async (req, res) => {
    console.log(req.body);
    try {
        await User.update(
            {
                discount: req.body.discount,
                advancedSupport: req.body.advancedSupport,
            },
            {
                where: {
                    id: req.body.userId,
                },
            }
        );
        console.log("User plan details updated successfully");
        res.status(200).json({
            discount: req.body.discount,
            advancedSupport: req.body.advancedSupport,
            message: "User plan details updated successfully"
        });
    } catch (error) {
        console.log("Failed to update user plan details:", error);
        res.status(500).json({ error: "Failed to update user plan details" });
    }
};
