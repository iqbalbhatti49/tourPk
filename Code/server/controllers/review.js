const { Review, User } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addReview = async (req, res) => {
    const review = req.body;
    await Review.create(review);
    res.status(200);
}

exports.getReviewsById = async (req, res) => {
    const id = req.params.id;
    const reviews = await Review.findAll({
        attributes: ['rating', 'review', 'date'],
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