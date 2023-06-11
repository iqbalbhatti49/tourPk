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
        checkIn: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        checkOut: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        totalPrice:
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
    };
    // BookingTravelAgent.sync({ alter: true })
    return BookingTravelAgent;
}

