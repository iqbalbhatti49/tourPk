module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("Review", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        timestamps: false
    });
    // Review.associate = (models) => {
    //     Review.hasMany(models.?, {
    //         onDelete: "cascade",
    //         foreignKey: 'ReviewId'
    //     });
    //     Review.hasMany(models.?, {
    //         onDelete: "cascade",
    //         foreignKey: 'ReviewId'
    //     });
    // };
    // Review.sync({ alter: true })
    return Review;
}

