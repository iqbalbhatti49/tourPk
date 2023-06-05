
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
        checkInTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        checkOutTime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        quantity: //multiple of basic offer of a service
        {
            type: DataTypes.INTEGER,
            allowNull: false
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
        BookingTravelAgent.belongsTo(models.Room, {
            onDelete: "cascade",
        });
    };
    // BookingTravelAgent.sync({ alter: true })
    return BookingTravelAgent;
}

