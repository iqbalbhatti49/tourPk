module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    }, {
        timestamps: false,
    });

    Review.associate = (models) => {
        Review.belongsTo(models.User, {
            onDelete: "cascade"
        });
        Review.belongsTo(models.Service, {
            onDelete: "cascade"
        });
    };
    // Review.sync({ alter: true })
    return Review;
}