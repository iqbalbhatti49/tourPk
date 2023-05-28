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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
    // TourGuide.associate = (models) => {
    //     TourGuide.hasMany(models.?, {
    //         onDelete: "cascade",
    //         foreignKey: 'TourGuideId'
    //     });
    //     TourGuide.hasMany(models.?, {
    //         onDelete: "cascade",
    //         foreignKey: 'TourGuideId'
    //     });
    // };
    // TourGuide.sync({ alter: true })
    return TourGuide;
}