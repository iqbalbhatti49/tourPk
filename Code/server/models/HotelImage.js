module.exports = (sequelize, DataTypes) => {
    const HotelImage = sequelize.define('HotelImage', {
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
    // HotelImage.sync({ alter: true })

    return HotelImage;
};