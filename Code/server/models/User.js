module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        businessTitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        discount: { 
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        advancedSupport: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    }, {
        timestamps: false
    });
    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
            onDelete: "cascade",
        });
        User.hasMany(models.Review, {
            onDelete: "cascade",
        });
        User.hasMany(models.Comment, {
            onDelete: "cascade",
        });
        User.hasMany(models.BookingTravelAgent, {
            onDelete: "cascade",
        });
        User.hasMany(models.BookingTourGuide, {
            onDelete: "cascade",
        });
        User.hasMany(models.BookingHotel, {
            onDelete: "cascade",
        });
        User.hasMany(models.Hotel, {
            onDelete: "cascade",
        });
        User.hasMany(models.TravelAgent, {
            onDelete: "cascade",
        });
        User.hasMany(models.Restaurant, {
            onDelete: "cascade",
        });
        User.hasMany(models.TourGuide, {
            onDelete: "cascade",
        });
    };
    // User.sync({ alter: true })
    return User;
}
