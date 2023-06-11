module.exports = (sequelize, DataTypes) => {
    const TravelAgent = sequelize.define("TravelAgent", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        daysCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        packagePrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hotelDetails: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        foodDetails: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        transportDetails: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        exclude: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        itenerary: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
    TravelAgent.associate = (models) => {
        TravelAgent.hasMany(models.TravelAgentImage, {
            onDelete: "cascade",
        });
        TravelAgent.hasMany(models.BookingTravelAgent, {
            onDelete: "cascade",
        });
        TravelAgent.belongsTo(models.Service);
        TravelAgent.belongsTo(models.User);
    };
    // TravelAgent.sync({ alter: true })
    return TravelAgent;
}