const { PaymentInformation } = require("../models");

exports.updatePayment = async (req, res) => {
  const { id, cardInfo } = req.body;

  try {
    const paymentObj = await PaymentInformation.findOne({ where: { UserId: id } });
    const obj = {
      cardNumber: cardInfo.cardNumber,
      expirationMonth: cardInfo.expirationMonth,
      expirationYear: cardInfo.expirationYear,
      cardType: cardInfo.cardType,
    };
    if (paymentObj) {
      await paymentObj.update(obj, { where: { UserId: id } });
      return res.status(200).json({ cardInfo: obj, message: "cardInfo information updated successfully" });
    } else {
      obj.UserId = id;
      await PaymentInformation.create(obj);
      return res.status(200).json({ cardInfo: obj, message: "cardInfo information added successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
