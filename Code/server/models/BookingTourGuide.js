
module.exports = (sequelize, DataTypes) => {
    const BookingTourGuide = sequelize.define("BookingTourGuide", {
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
    BookingTourGuide.associate = (models) => {
        BookingTourGuide.belongsTo(models.User, {
            onDelete: "cascade",
        });
        BookingTourGuide.belongsTo(models.TourGuide, {
            onDelete: "cascade",
        });
    };
    // BookingTourGuide.sync({ alter: true })
    return BookingTourGuide;
}

