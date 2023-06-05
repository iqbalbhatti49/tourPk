module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });


  Service.associate = (models) => {
    Service.hasMany(models.Hotel, {
      onDelete: "cascade",
    });
    Service.hasMany(models.Restaurant, {
      onDelete: "cascade",
    });
    Service.hasMany(models.TourGuide, {
      onDelete: "cascade",
    });
    Service.hasMany(models.TravelAgent, {
      onDelete: "cascade",
    });
    Service.hasMany(models.Review, {
      onDelete: "cascade",
    });
  };
  // Service.sync({ alter: true })
  return Service;
};
