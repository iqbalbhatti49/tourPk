module.exports = (sequelize, DataTypes) => {
    const BookingTravelAgent = sequelize.define("BookingTravelAgent", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        bookingDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        totalPrice:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        guestCount:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    BookingTravelAgent.associate = (models) => {
        BookingTravelAgent.belongsTo(models.User, {
            onDelete: "cascade",
        });
        BookingTravelAgent.belongsTo(models.TravelAgent, {
            onDelete: "cascade",
        });
    };
    // BookingTravelAgent.sync({ alter: true })
    return BookingTravelAgent;
}

