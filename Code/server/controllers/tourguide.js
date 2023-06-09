const { Service, TourGuide, TourGuideImage, Review } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addTourGuide = async (req, res) => {
    //extract 3 objects each to add in services, tourGuide and tourGuideImage table respectively
    const service = req.body.service.values;
    const tourGuide = req.body.tourGuide;
    const images = req.body.service.values.images;
    const serviceObj = await Service.create(service);
    tourGuide.ServiceId = serviceObj.id;
    const tourGuideObj = await TourGuide.create(tourGuide);
    for (const img in images) {
        const image = {
            imageUrl: images[img],
            TourGuideId: tourGuideObj.id
        };
        await TourGuideImage.create(image);
    }

    let img = {};
    images.forEach((image, index) => {
        img[`image${index + 1}`] = image;
    });
    const response = {
        serviceObj: serviceObj.dataValues,
        tourGuideObj: tourGuideObj.dataValues,
        images: img
    };

    console.log("--> Back.end --> ", response);
    res.status(200).json(response);
}


exports.getAllTourGuides = async (req, res) => {
    const tourGuides = await TourGuide.findAll({
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
    res.json(tourGuides);
}