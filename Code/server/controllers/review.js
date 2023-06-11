const { Review } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addReview = async (req, res) => {
    const review = req.body;
    console.log("---->::>> ", review);
    await Review.create(review);
    res.status(200);
}

exports.getReviewsById = async (req, res) => {
    const id = req.params.id;
    console.log("---->::>> ", id);
    const reviews = await Review.findAll({
        attributes: { exclude: ['UserId'] },
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
        where: {
            ServiceId: id,
        },
    });
    res.json(reviews);
}