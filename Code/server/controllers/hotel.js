const { Service, Hotel, HotelImage, Review, Room, BookingHotel } = require("../models/");
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

// Controller method to add a booking
exports.addBooking = async (req, res) => {
  try {
    const { startDate, numberOfDays, totalPrice, userId, hotelId, roomId } = req.body; // Assuming you receive the necessary data in the request body

    // Create the booking in the database
    const newBooking = await BookingHotel.create({
      startDate,
      numberOfDays,
      totalPrice,
      UserId: userId, // Assuming you have a foreign key 'UserId' in the BookingHotel model
      HotelId: hotelId, // Assuming you have a foreign key 'HotelId' in the BookingHotel model
      RoomId: roomId // Assuming you have a foreign key 'RoomId' in the BookingHotel model
    });

    // Retrieve the associated user, hotel, and room data
    // const user = await User.findByPk(userId);
    const hotel = await Hotel.findByPk(hotelId);
    const room = await Room.findByPk(roomId);

    // Respond with the created booking and associated data
    res.status(201).json({
      newBooking,
    //   user,
      hotel,
      room
    });
  } catch (error) {
    console.error('Error adding booking:', error);
    res.status(500).json({ error: 'Failed to add booking' });
  }
};
