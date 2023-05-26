module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
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
            allowNull: false
        },
        quantity: //multiple of basic offer of a service
        {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    // Booking.associate = (models) => {
    //     Booking.hasMany(models.??, {
    //         onDelete: "cascade",
    //         foreignKey: 'BookingId'
    //     });
    //     Booking.hasMany(models.??, {
    //         onDelete: "cascade",
    //         foreignKey: 'BookingId'
    //     });
    // };
    // Booking.sync({ alter: true })
    return Booking;
}
