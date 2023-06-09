const { Service, Hotel, HotelImage, Review } = require("../models/");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addHotel = async (req, res) => {

}

exports.getAllHotels = async (req, res) => {
    const hotels = await Hotel.findAll({
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
    res.json(hotels);
}