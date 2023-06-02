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
        URL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
    });

    TourGuideImage.associate = (models) => {
        TourGuideImage.belongsTo(models.TourGuide, {
            onDelete: "cascade"
        });
    };
    return TourGuideImage;
};