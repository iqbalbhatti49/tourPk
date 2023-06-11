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
        bookingDate: {
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

