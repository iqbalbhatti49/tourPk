module.exports = (sequelize, DataTypes) => {
    const Seller = sequelize.define("Seller", {
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
        businessTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Seller"
        }
    }, {
        timestamps: false
    });
    Seller.sync({ alter: true })
    return Seller;
}