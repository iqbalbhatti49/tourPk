const { Service, Hotel, HotelImage, Review, Room } = require("../models/");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addHotel = async (req, res) => {
    // TODO: IMPORTANT  modifiy capacity to ->> capacity = capacity + "persons" (string)
    console.log("*********----START--", req.body, "----END----***********");

    const service = req.body.service;
    const hotel = req.body.hotel;
    const images = req.body.images;
    const room = req.body.room;

    const serviceObj = await Service.create(service); //1. add in service table
    hotel.ServiceId = serviceObj.id;
    const hotelObj = await Hotel.create(hotel); //2. add in hotel table
    let rootPath = "../static/images/upload/";
    for (const img in images) {
        let imgUrl = rootPath + images[img];
        const image = {
            imageUrl: imgUrl,
            HotelId: hotelObj.id
        };
        await HotelImage.create(image); //3. add in images table
    }
    room.HotelId = hotelObj.id;
    const roomObj = await Room.create(room); //4. add in room table
    res.status(200).json(roomObj.dataValues.id);
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
            {
                model: Room,
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


exports.deleteHotel = async (req, res) => {
    console.log(req.body)
    await Room.destroy({ where: { HotelId: req.body.HotelId } });
    await HotelImage.destroy({ where: { HotelId: req.body.HotelId } });
    await Hotel.destroy({ where: { ServiceId: req.body.ServiceId } });
    await Review.destroy({ where: { ServiceId: req.body.ServiceId } });
    await Service.destroy({ where: { id: req.body.ServiceId } });
    res.status(200).json("deleted sucessfully");
}