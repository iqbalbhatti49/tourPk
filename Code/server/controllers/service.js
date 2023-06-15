const { Restaurant, Service, TravelAgent, TourGuide, Hotel, User, BookingHotel, BookingRestaurant, BookingTourGuide, BookingTravelAgent } = require("../models");
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
    console.log(services)
    res.json(services);
}


exports.getBookingsByUserId = async (req, res) => {
    const id = req.params.id;
    const tourguideBookings = await BookingTourGuide.findAll({
        where: {
            UserId: id
        },
        attributes: ['bookingDate', 'totalPrice'],
        include: [
            {
                model: TourGuide,
                attributes: ['id'],
                include: [
                    {
                        model: Service,
                        attributes: ['name'],
                    },
                ],
            },
            {
                model: User,
                attributes: ['name', 'phoneNumber'],
            }
        ]
    });

    const hotelBookings = await BookingHotel.findAll({
        attributes: ['startDate', 'totalPrice'],
        where: {
            UserId: id
        },
        include: [
            {

                model: Hotel,
                attributes: ['id'],
                include: [
                    {
                        model: Service,
                        attributes: ['name'],
                    },
                ],
            },
            {
                model: User,
                attributes: ['name', 'phoneNumber'],
            }
        ]
    });

    const travelAgentBookings = await BookingTravelAgent.findAll({
        attributes: ['bookingDate', 'totalPrice'],
        where: {
            UserId: id
        },
        include: [
            {
                model: TravelAgent,
                attributes: ['id'],
                include: [
                    {
                        model: Service,
                        attributes: ['name'],
                    },
                ],
            },
            {
                model: User,
                attributes: ['name', 'phoneNumber'],
            }
        ]
    });

    const bookings = {
        tourguideBookings, hotelBookings, travelAgentBookings
    }
    res.json(bookings);
}