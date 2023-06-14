const { Restaurant, Service, RestaurantImage, Review, User } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addRestaurant = async (req, res) => {
    const service = req.body.service;
    const restaurant = req.body.restaurant;
    const images = req.body.images;
    const serviceObj = await Service.create(service);
    restaurant.ServiceId = serviceObj.id;
    const restaurantObj = await Restaurant.create(restaurant);
    let rootPath = "../static/images/upload/";
    for (const img in images) {
        let imgUrl = rootPath + images[img];
        const image = {
            imageUrl: imgUrl,
            RestaurantId: restaurantObj.id
        };
        await RestaurantImage.create(image);
    }
    res.status(200).json(restaurantObj.dataValues.id);
}

exports.getRestaurantById = async (req, res) => {
    const id = req.params.id;
    const data = await Restaurant.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: Service,
                include: [
                    {
                        model: Review,
                        attributes: ['rating', 'review', 'date'],
                        include: [
                            {
                                model: User,
                                attributes: ['name'],
                            },
                        ],
                    },
                ],
            },
            {
                model: RestaurantImage,
            },
        ]
    });
    res.json(data);
}

exports.getAllRestaurants = async (req, res) => {
    const restaurants = await Restaurant.findAll({
        attributes: ['id'],
        include: [
            {
                model: Service,
                attributes: ['name', 'address'], // Include attributes from the Service table: name, address
                include: [
                    {
                        model: Review,
                    },
                ],
            },
            {
                model: RestaurantImage,
                attributes: ['imageUrl']
            },
        ],
    });
    res.json(restaurants);
}


exports.deleteRestaurant = async (req, res) => {
    console.log(req.body)
    await RestaurantImage.destroy({ where: { RestaurantId: req.body.RestaurantId } });
    await Restaurant.destroy({ where: { ServiceId: req.body.ServiceId } });
    await Review.destroy({ where: { ServiceId: req.body.ServiceId } });
    await Service.destroy({ where: { id: req.body.ServiceId } });
    res.status(200).json("deleted sucessfully");
}


exports.updaterestaurant = async (req, res) => {
    console.log(req.body);
    const { service, restaurant } = req.body; // Destructure the objects from the request body
    const images = service.images;

    const servicDta = {
        name: service.name,
        description: service.description,
        email: service.email,
        website: service.website,
        phone: service.phone,
        city: service.city,
        province: service.province,
        address: service.address,
    }

    try {
        const updatedService = await Service.update(servicDta, {
            where: { id: service.id }
        });

        const updatedRestaurant = await Restaurant.update(restaurant, {
            where: { id: service.serviceId }
        });


        if (images) {
            let rootPath = "../static/images/upload/";
            const restaurantImages = images.map((image) => ({
                imageUrl: rootPath + image,
                RestaurantId: service.serviceId
            }));

            await RestaurantImage.bulkCreate(restaurantImages, {
                updateOnDuplicate: ['imageUrl'] // Update the image URL if already exists
            });
        }
        res.status(200).json(service.serviceId);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update restaurant' });
    }
};
