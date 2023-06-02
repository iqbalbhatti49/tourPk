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

    RestaurantImage.associate = (models) => {
        RestaurantImage.belongsTo(models.Restaurant, {
            onDelete: "cascade"
        });
    };
    return RestaurantImage;
};