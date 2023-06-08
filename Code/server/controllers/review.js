const { Review } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addReview = async (req, res) => {
    const review = req;
    console.log("---->::>> ", review);
    await Review.create(review);
    res.status(200);
}

exports.getReviewsById = async (req, res) => {
    const id = req.params.id;
    console.log("---->::>> ", id);
    const reviews = await Review.findAll({
        where: {
            ServiceId: id
        }
    });
    res.json(reviews);
}