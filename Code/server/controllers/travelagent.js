const { Service, TravelAgent, TravelAgentImage, Review, BookingTravelAgent } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addTravelAgentPackage = async (req, res) => {
    //extract 3 objects each to add in services, travelAgent and TravelAgentImage table respectively
    const service = req.body.service.values;
    const travelAgent = req.body.travelAgent;
    const images = req.body.service.values.images;
    console.log("---> ", service, "---> ", travelAgent, "---> ", images);
    const serviceObj = await Service.create(service);
    travelAgent.ServiceId = serviceObj.id;
    const travelAgentObj = await TravelAgent.create(travelAgent);
    let rootPath = "../static/images/upload/";
    for (const img in images) {
        let imgUrl = rootPath + images[img];
        const image = {
            imageUrl: imgUrl,
            TravelAgentId: travelAgentObj.id
        };
        await TravelAgentImage.create(image);
    }

    // let img = {};
    // images.forEach((image, index) => {
    //     img[`image${index + 1}`] = image;
    // });
    // const response = {
    //     serviceObj: serviceObj.dataValues,
    //     travelAgentObj: travelAgentObj.dataValues,
    //     images: img
    // };
    console.log("--> Back.end --> ", travelAgentObj.dataValues.id);
    res.status(200).json(travelAgentObj.dataValues.id);
}

exports.getAllTravelAgents = async (req, res) => {
    const travelAgent = await TravelAgent.findAll({
        attributes: ['id', 'packagePrice'],
        include: [
            {
                model: Service,
                attributes: ['name', 'address'],
                include: [
                    {
                        model: Review,
                    }
                ],
            },
            {
                model: TravelAgentImage,
                attributes: ['imageUrl']
            }
        ],
    });

    res.json(travelAgent);
}


exports.getTravelAgentById = async (req, res) => {
    const id = req.params.id;
    const data = await TravelAgent.findOne({
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
                model: TravelAgentImage,
            },
        ]
    });
    res.json(data);
}

exports.deleteTourPackage = async (req, res) => {
    console.log(req.body)
    await TravelAgentImage.destroy({ where: { TravelAgentId: req.body.TravelAgentId } });
    await TravelAgent.destroy({ where: { ServiceId: req.body.ServiceId } });
    await Review.destroy({ where: { ServiceId: req.body.ServiceId } });
    await Service.destroy({ where: { id: req.body.ServiceId } });
    res.status(200).json("deleted sucessfully");
}

exports.addBooking = async (req, res) => {
        const { userId, id, totalPrice, selectedDate, guestCount } = req.body;
    console.log(selectedDate)
    try {
      const newBooking = await BookingTravelAgent.create({
        bookingDate: selectedDate,
        totalPrice,
        UserId: userId,
        guestCount:guestCount,
        TravelAgentId: id,
      });
      res.status(200).json(newBooking);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add booking' });
    }
  };