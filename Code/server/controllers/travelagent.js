const { Service, TravelAgent, TravelAgentImage } = require("../models");
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
    for (const img in images) {
        const image = {
            imageUrl: images[img],
            TravelAgentId: travelAgentObj.id
        };
        await TravelAgentImage.create(image);
    }

    let img = {};
    images.forEach((image, index) => {
        img[`image${index + 1}`] = image;
    });
    const response = {
        serviceObj: serviceObj.dataValues,
        travelAgentObj: travelAgentObj.dataValues,
        images: img
    };
    console.log("--> Back.end --> ", response);
    res.status(200).json(response);
}
