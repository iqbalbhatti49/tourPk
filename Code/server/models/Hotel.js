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
    amenities: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    timestamps: false,
  });

  Hotel.associate = (models) => {
    Hotel.belongsTo(models.Service, {
      onDelete: "cascade"
    });
    Hotel.hasMany(models.Room, {
      onDelete: "cascade"
    });
    Hotel.hasMany(models.ImageHotel, {
      onDelete: "cascade"
    });
  };
  return Hotel;
};

