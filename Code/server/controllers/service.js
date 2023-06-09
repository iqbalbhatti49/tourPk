const { Restaurant, Service, TravelAgent, TourGuide, Hotel, User } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.getServicesByUserId = async (req, res) => {
    const userId = req.params.id;
    const hotels = await Service.findAll({
        include: [
            {
                model: Hotel,
                where: { UserId: userId }, // Filter hotels by UserId
            }
        ],
    });
    const travelAgent = await Service.findAll({
        include: [
            {
                model: TravelAgent,
                where: { UserId: userId }, // Filter travel agents by UserId
            }
        ],
    });
    const restaurant = await Service.findAll({
        include: [
            {
                model: Restaurant,
                where: { UserId: userId }, // Filter restaurants by UserId
            }
        ],
    });
    const tourGuide = await Service.findAll({
        include: [
            {
                model: TourGuide,
                where: { UserId: userId }, // Filter tour guides by UserId
            },
        ],
    });

    const services = {
        hotels, travelAgent, restaurant, tourGuide
    }

    res.json(services);
}