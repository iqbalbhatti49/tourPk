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
        URL: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
    });

    TravelAgentImage.associate = (models) => {
        TravelAgentImage.belongsTo(models.TravelAgent, {
            onDelete: "cascade"
        });
    };
    return TravelAgentImage;
};