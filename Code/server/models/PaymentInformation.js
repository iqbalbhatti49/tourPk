module.exports = (sequelize, DataTypes) => {
    const PaymentInformation = sequelize.define("PaymentInformation", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        startAt: 1,
        increment: 1,
      },
      cardNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expirationMonth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expirationYear: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });
  
    PaymentInformation.associate = (models) => {
      PaymentInformation.belongsTo(models.User, {
        onDelete: "cascade",
      });
    };
  
    return PaymentInformation;
  };
  