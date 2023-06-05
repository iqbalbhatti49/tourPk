
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
    checkInTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkOutTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quantity: //multiple of basic offer of a service
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalPrice:
    {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  BookingHotel.associate = (models) => {
    BookingHotel.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };
  // BookingHotel.sync({ alter: true })
  return BookingHotel;
}

