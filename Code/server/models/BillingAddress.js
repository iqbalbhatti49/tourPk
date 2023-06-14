module.exports = (sequelize, DataTypes) => {
    const BillingAddress = sequelize.define("BillingAddress", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        startAt: 1,
        increment: 1,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      streetAddress1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    BillingAddress.associate = (models) => {
      BillingAddress.belongsTo(models.User, {
        onDelete: "cascade",
      });
    };
  
    return BillingAddress;
  };
  