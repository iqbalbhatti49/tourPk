const { Restaurant, Service, RestaurantImage, Review } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addRestaurant = async (req, res) => {
    const service = req.body.service;
    const restaurant = req.body.restaurant;
    const images = req.body.images;
    const serviceObj = await Service.create(service);
    restaurant.ServiceId = serviceObj.id;
    const restaurantObj = await Restaurant.create(restaurant);
    for (const img in images) {
        // extract image url from images array and create a new object
        const image = {
            imageUrl: images[img],
            RestaurantId: restaurantObj.id
        };
        await RestaurantImage.create(image);
    }

    let img = {};
    images.forEach((image, index) => {
        img[`image${index + 1}`] = image;
    });

    const response = {
        serviceObj: serviceObj.dataValues,
        restaurantObj: restaurantObj.dataValues,
        images: img
    };
    console.log("--> Back.end --> ", response);
    res.status(200).json(response);
}

exports.getRestaurantById = async (req, res) => {

}

exports.getAllRestaurants = async (req, res) => {
    const restaurants = await Restaurant.findAll({
        include: [
            {
                model: Service,
                include: [
                    {
                        model: Review,
                    },
                ],
            },
        ],
    });
    res.json(restaurants);
}