const { hashSync } = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const RestaurantImage = sequelize.define('RestaurantImage', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
    });
    // RestaurantImage.sync({ alter: true })

    return RestaurantImage;
};