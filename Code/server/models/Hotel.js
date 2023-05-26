module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define("Hotel", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        basePrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
    // Hotel.associate = (models) => {
    //     Hotel.hasMany(models.?, {
    //         onDelete: "cascade",
    //         foreignKey: 'HotelId'
    //     });
    //     Hotel.hasMany(models.?, {
    //         onDelete: "cascade",
    //         foreignKey: 'HotelId'
    //     });
    // };
    // Hotel.sync({ alter: true })
    return Hotel;
}