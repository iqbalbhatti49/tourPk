module.exports = (sequelize, DataTypes) => {
    const Restaurant = sequelize.define("Restaurant", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        cuisineType: // Cuisine Type like -> Italian, Mexican, Chinese, etc.
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mealType: // Meal Type like -> Breakfast, Lunch, Dinner, Snacks, etc.
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reservationTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        basePrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false
    });
    // Restaurant.associate = (models) => {
    //     Restaurant.hasMany(models.?, {
    //         onDelete: "cascade",
    //         foreignKey: 'RestaurantId'
    //     });
    //     Restaurant.hasMany(models.?, {
    //         onDelete: "cascade",
    //         foreignKey: 'RestaurantId'
    //     });
    // };
    // Restaurant.sync({ alter: true })
    return Restaurant;
}