module.exports = (sequelize, DataTypes) => {
    const TourGuide = sequelize.define("TourGuide", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        experience: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        primaryAreas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otherAreas: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        perHourRate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false
    });
    TourGuide.associate = (models) => {
        TourGuide.hasMany(models.TourGuideImage, {
            onDelete: "cascade",
        });
        TourGuide.hasMany(models.BookingTourGuide, {
            onDelete: "cascade",
        });
        TourGuide.belongsTo(models.Service);
        TourGuide.belongsTo(models.User);
    };
    // TourGuide.sync({ alter: true })
    return TourGuide;
}