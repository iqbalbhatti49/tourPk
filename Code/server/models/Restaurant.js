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
        openTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        closeTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        menuUrl: {
            type: DataTypes.STRING,
            allowNull: false,
        }, menuStartingPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        features: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        timestamps: false
    });
    Restaurant.associate = (models) => {
        Restaurant.hasMany(models.RestaurantImage, {
            onDelete: "cascade",
        });
    };
    // Restaurant.sync({ alter: true })
    return Restaurant;
}