module.exports = (sequelize) => {
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
    postal_code: {
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


  Services.associate = (models) => {
    Services.hasMany(models.Hotel, {
      onDelete: "cascade",
    });
    Services.hasMany(models.Restaurant, {
      onDelete: "cascade",
    });
    Services.hasMany(models.TourGuide, {
      onDelete: "cascade",
    });
    Services.hasMany(models.TravelAgent, {
      onDelete: "cascade",
    });
    Services.hasMany(models.Review, {
      onDelete: "cascade",
    });
  };
  // Services.sync({ alter: true })
  return Service;
};
