module.exports = (sequelize, DataTypes) => {
  const BookingHotel = sequelize.define("BookingHotel", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      startAt: 1,
      increment: 1,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    numberOfDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    timestamps: false
  });

  BookingHotel.associate = (models) => {
    BookingHotel.belongsTo(models.User, {
      onDelete: "cascade"
    });
    BookingHotel.belongsTo(models.Hotel, {
      onDelete: "cascade"
    });
    BookingHotel.belongsTo(models.Room, {
      onDelete: "cascade"
    });
  };

  return BookingHotel;
};
