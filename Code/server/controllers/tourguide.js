const { Service, TourGuide, TourGuideImage, Review, BookingTourGuide } = require("../models");
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
    let rootPath = "../static/images/upload/";
    for (const img in images) {
        let imgUrl = rootPath + images[img];
        const image = {
            imageUrl: imgUrl,
            TourGuideId: tourGuideObj.id
        };
        await TourGuideImage.create(image);
    }

    // let img = {};
    // images.forEach((image, index) => {
    //     img[`image${index + 1}`] = rootPath + image;
    // });
    // const response = {
    //     serviceObj: serviceObj.dataValues,
    //     tourGuideObj: tourGuideObj.dataValues,
    //     images: img
    // };

    console.log("--> Back.end --> ", tourGuideObj.dataValues.id);
    res.status(200).json(tourGuideObj.dataValues.id);
}


exports.getAllTourGuides = async (req, res) => {
    const tourGuides = await TourGuide.findAll({
        attributes: ['id', 'perHourRate'],
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
                model: TourGuideImage,
                attributes: ['imageUrl']

            }
        ],
    });
    res.json(tourGuides);
}

exports.getTourGuideById = async (req, res) => {
    try {
      const id = req.params.id;
      const data = await TourGuide.findOne({
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
            model: TourGuideImage,
          },
        ]
      });
      return res.json(data);
    } catch (error) {
      console.log('Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
  

exports.addBooking = async (req, res) => {
  const { userId, id, totalPrice, selectedDate } = req.body;
  console.log(selectedDate)
  try {
    const newBooking = await BookingTourGuide.create({
      bookingDate: selectedDate,
      totalPrice,
      UserId: userId,
      TourGuideId: id,
    });
    res.status(200).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add booking' });
  }
};


exports.deleteTourGuide = async (req, res) => {
    console.log(req.body)
    await TourGuideImage.destroy({ where: { TourGuideId: req.body.TourGuideId } });
    await TourGuide.destroy({ where: { ServiceId: req.body.ServiceId } });
    await Review.destroy({ where: { ServiceId: req.body.ServiceId } });
    await Service.destroy({ where: { id: req.body.ServiceId } });
    res.status(200).json("deleted sucessfully");
}
