const User = require('./User');
const Service = require('./services');

module.exports = (sequelize, DataTypes) => {

    const Hotel = sequelize.define('Hotel', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        startAt: 1,
        increment: 1,
      },
      service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Service',
          key: 'id',
        },
      },
    }, {
      timestamps: false,
    });
  
    const Room = sequelize.define('Room', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        startAt: 1,
        increment: 1,
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hotel',
          key: 'id',
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      room_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      floor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price_per_night: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      is_available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    const Amenity = sequelize.define('Amenity', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        startAt: 1,
        increment: 1,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    const HotelAmenities = sequelize.define('HotelAmenities', {}, {
      timestamps: false,
    });
  
    const Review = sequelize.define('Review', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        startAt: 1,
        increment: 1,
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Hotel',
          key: 'id',
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });

    const RoomAmenities = sequelize.define('RoomAmenities', {}, {
        timestamps: false,
      });
  
      const Booking = sequelize.define('Booking', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          startAt: 1,
          increment: 1,
        },
        room_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Room',
            key: 'id',
          },
        },
        user_id: {  // Add the user_id field
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'User',  // Reference the User model/table
            key: 'id',
          },
        },
        start_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        end_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      }, {
        timestamps: false,
      });

    Service.hasOne(Hotel, { foreignKey: 'service_id' });
    Hotel.belongsTo(Service, { foreignKey: 'service_id' });
  
    Hotel.hasMany(Room, { foreignKey: 'hotel_id' });
    Room.belongsTo(Hotel, { foreignKey: 'hotel_id' });
  
    Hotel.belongsToMany(Amenity, { through: HotelAmenities, foreignKey: 'hotel_id' });
    Amenity.belongsToMany(Hotel, { through: HotelAmenities, foreignKey: 'amenity_id' });
  
    Room.belongsToMany(Amenity, { through: RoomAmenities, foreignKey: 'room_id' });
    Amenity.belongsToMany(Room, { through: RoomAmenities, foreignKey: 'amenity_id' });
  
    Hotel.hasMany(Review, { foreignKey: 'hotel_id' });
    Review.belongsTo(Hotel, { foreignKey: 'hotel_id' });
    Hotel.hasMany(Booking, { foreignKey: 'hotel_id' });
    Booking.belongsTo(Hotel, { foreignKey: 'hotel_id' });

    Room.hasMany(Booking, { foreignKey: 'room_id' });
    Booking.belongsTo(Room, { foreignKey: 'room_id' });

    User.hasMany(Booking, { foreignKey: 'user_id' }); // Establish the association between User and Booking
    Booking.belongsTo(User, { foreignKey: 'user_id' });

    Service.sync({ alter: true });
    Hotel.sync({ alter: true });
    Room.sync({ alter: true });
    Amenity.sync({ alter: true });
    HotelAmenities.sync({ alter: true });
    Review.sync({ alter: true });
    Booking.sync({ alter: true });

    return {
      Service,
      Hotel,
      Room,
      Amenity,
      HotelAmenities,
      Review,
      Booking,
    };
};