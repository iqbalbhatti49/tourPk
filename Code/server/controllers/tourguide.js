const { Service, TourGuide, TourGuideImage, Review, BookingTourGuide, User } = require("../models");
const { Op } = require("sequelize");
const Sequelize = require('sequelize');

exports.addTourGuide = async (req, res) => {
  const service = req.body.service;
  const tourGuide = req.body.tourGuide;
  const images = req.body.service.images;
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
  res.status(200).json(tourGuideObj.dataValues.id);
}


exports.updatetourguide = async (req, res) => {
  const { service, tourGuide } = req.body;
  const images = service.images;

  const servicDta = {
    name: service.name,
    description: service.description,
    email: service.email,
    website: service.website,
    phone: service.phone,
    city: service.city,
    province: service.province,
    address: service.address,
  }

  try {
    const updatedService = await Service.update(servicDta, {
      where: { id: service.id }
    });

    const updatedTourGuide = await TourGuide.update(tourGuide, {
      where: { id: service.serviceId }
    });

    let rootPath = "../static/images/upload/";
    const tourGuideImages = images.map((image) => ({
      imageUrl: rootPath + image,
      TourGuideId: service.serviceId
    }));

    await TourGuideImage.bulkCreate(tourGuideImages, {
      updateOnDuplicate: ['imageUrl'] // Update the image URL if already exists
    });


    res.status(200).json(service.serviceId);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update tour guide' });
  }
};


exports.getAllTourGuides = async (req, res) => {
  const tourGuides = await TourGuide.findAll({
    attributes: ['id', 'perDayRate'],
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
            attributes: ['rating', 'review', 'date'],
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          },
        ],
      },
      {
        model: TourGuideImage,
      },
    ]
  });
  res.json(data);
}

exports.addBooking = async (req, res) => {
  const { userId, id, totalPrice, selectedDate } = req.body;
  try {
    const newBooking = await BookingTourGuide.create({
      bookingDate: selectedDate,
      totalPrice,
      UserId: userId,
      TourGuideId: id,
    });
    res.status(200).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add booking' });
  }
};

exports.deleteTourGuide = async (req, res) => {
  await TourGuideImage.destroy({ where: { TourGuideId: req.body.TourGuideId } });
  await TourGuide.destroy({ where: { ServiceId: req.body.ServiceId } });
  await Review.destroy({ where: { ServiceId: req.body.ServiceId } });
  await Service.destroy({ where: { id: req.body.ServiceId } });
  res.status(200).json("deleted sucessfully");
}

exports.getAllBookings = async (req, res) => {
  try {
    const tourGuideId = req.params.id;
    const bookings = await BookingTourGuide.findAll({
      where: {
        TourGuideId: tourGuideId
      },
      include: [
        {
          model: TourGuide
        }
      ]
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get tour guide bookings' });
  }
};

exports.searchTourGuide = async (req, res) => {
  const result = await TourGuide.findAll({
    attributes: ['id', 'perDayRate'],
    include: [
      {
        model: Service,
        where: {
          [Op.or]: [
            { name: { [Op.like]: '%' + req.params.searchkey + '%' } },
            { address: { [Op.like]: '%' + req.params.searchkey + '%' } },
            { city: { [Op.like]: '%' + req.params.searchkey + '%' } },
            { description: { [Op.like]: '%' + req.params.searchkey + '%' } }
          ]
        },
        attributes: ['name', 'address'], // Include attributes from the Service table: name, address
        include: [
          {
            model: Review,
          },
        ],
      },
      {
        model: TourGuideImage,
        attributes: ['imageUrl']
      },
    ],
  });
  res.json(result);
}