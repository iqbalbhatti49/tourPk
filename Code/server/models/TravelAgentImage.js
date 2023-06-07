module.exports = (sequelize, DataTypes) => {
    const TravelAgentImage = sequelize.define('TravelAgentImage', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
    });
    // TravelAgentImage.sync({ alter: true })

    return TravelAgentImage;
};