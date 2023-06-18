const accountSid = 'ACed81bfc8f7b0d3512974d966973fe41e';
const authToken = '851ed7213d5632220f91deed5d9e3863';
const verifySid = 'VAf3da994bbf1ba7a18439c383e1e1d6e9';
const client = require('twilio')(accountSid, authToken);

exports.startVerification = (req, res) => {
  const { phoneNumber } = req.body;

  client.verify.v2.services(verifySid)
    .verifications
    .create({ to: phoneNumber, channel: 'sms' })
    .then((verification) => {
      res.status(200).json({ success: true, message: 'Verification initiated successfully' });
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: 'Failed to initiate verification' });
    });
};

exports.checkVerification = (req, res) => {
  const { phoneNumber, verificationCode } = req.body;

  client.verify.v2.services(verifySid)
    .verificationChecks
    .create({ to: phoneNumber, code: verificationCode })
    .then((verificationCheck) => {
      if (verificationCheck.status === 'approved') {
        res.status(200).json({ success: true, message: 'Verification code is valid' });
      } else {
        res.status(400).json({ success: false, message: 'Verification code is invalid or expired' });
      }
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: 'Failed to check verification code' });
    });
};
