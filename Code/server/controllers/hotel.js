const { Service, Hotel, HotelImage, Review } = require("../models/");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addHotel = async (req, res) => {
    // TODO: IMPORTANT  modifiy capacity to ->> capacity = capacity + "persons" (string)
}


exports.getHotelById = async (req, res) => {
    const id = req.params.id;
    const data = await Hotel.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: Service,
                include: [
                    {
                        model: Review,
                    },
                ],
            },
            {
                model: HotelImage,
            },
        ]
    });
    res.json(data);
}


exports.getAllHotels = async (req, res) => {
    const hotels = await Hotel.findAll({
        attributes: ['id', 'pricePerDay'],
        include: [
            {
                model: Service,
                attributes: ['name', 'address'],
                include: [
                    {
                        model: Review,
                    },
                ],
            },
            {
                model: HotelImage,
                attributes: ['imageUrl']
            }
        ],
    });

    res.json(hotels);
}