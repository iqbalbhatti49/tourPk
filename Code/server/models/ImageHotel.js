module.exports = (sequelize, DataTypes) => {
    const HotelImage = sequelize.define('HotelImage', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        URL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
    });

    HotelImage.associate = (models) => {
        HotelImage.belongsTo(models.Hotel, {
            onDelete: "cascade"
        });
    };
    return HotelImage;
};