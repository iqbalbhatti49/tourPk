const { Review } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addReview = async (req, res) => {
    const review = req.body;
    console.log("---->::>> ", review);
    await Review.create(review);
    res.status(200);
}