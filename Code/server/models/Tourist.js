module.exports = (sequelize, DataTypes) => {
    const Tourist = sequelize.define("Tourist", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1, // start the auto increment at 1
            increment: 1, // increment by 1
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "tourist"
        }
    }, {
        timestamps: false
    });
    Tourist.sync({ alter: true })
    return Tourist;
}