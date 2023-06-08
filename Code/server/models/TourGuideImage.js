module.exports = (sequelize, DataTypes) => {
    const TourGuideImage = sequelize.define('TourGuideImage', {
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
    // TourGuideImage.sync({ alter: true })

    return TourGuideImage;
};