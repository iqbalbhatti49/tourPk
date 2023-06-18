const express = require('express');
const router = express.Router();
const { simple_authorization_internet } = require('../controllers/payment');

router.post('/payment', (req, res) => {
   const { cardNumber, expirationMonth, expirationYear, cardType, totalAmount, firstName, lastName, address1, city, email, phoneNumber } = req.body;
   simple_authorization_internet((error, data, response) => {
      if (error) {
         return res.status(500).send('Payment failed');
      } else if (data) {
         return res.status(200).send('Payment successful');
      }
   }, true, cardNumber, expirationMonth, expirationYear, cardType, totalAmount, firstName, lastName, address1, city, email, phoneNumber);
});

module.exports = router;
