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
        URL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
    });

    return RestaurantImage;
};