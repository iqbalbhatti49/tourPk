const { BillingAddress } = require("../models");

exports.updateAddress = async (req, res) => {
  const { id, address } = req.body;
  try {
    const checkout = await BillingAddress.findOne({ where: { UserId: id } });
    const billingAddress = {
      firstName: address.firstName,
      lastName: address.lastName,
      email: address.email,
      streetAddress1: address.streetAddress1,
      city: address.city,
      zipCode: address.zipCode,
      phoneNumber: address.phoneNumber,
    };
    if (checkout) {
      await BillingAddress.update(billingAddress, { where: { UserId: id } });
      return res.status(200).json({ billingAddress, message: "Address updated successfully" });
    } else {
      billingAddress.UserId = id;
      await BillingAddress.create(billingAddress);
      return res.status(200).json({ billingAddress, message: "Address added successfully" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
