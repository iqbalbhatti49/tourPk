const { Restaurant, Service, RestaurantImage } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addRestaurant = async (req, res) => {
    const service = req.body.service;
    const restaurant = req.body.restaurant;
    const images = req.body.images;
    const resp = await Service.create(service);
    restaurant.ServiceId = resp.id;
    const resp2 = await Restaurant.create(restaurant);
    for (const img in images) {
        const image = {
            imageUrl: images[img],
            RestaurantId: resp2.id
        };
        await RestaurantImage.create(image);
    }
    res.status(200).json(resp2.id);
}