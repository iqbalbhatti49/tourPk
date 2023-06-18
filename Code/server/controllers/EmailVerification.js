const accountSid = 'ACed81bfc8f7b0d3512974d966973fe41e';
const authToken = '851ed7213d5632220f91deed5d9e3863';
const verifySid = 'VAd5a507cf48317670548cf5249f1be226';
const client = require('twilio')(accountSid, authToken);

function sendVerificationCodeByEmailWithTemplate(req, res) {
  return client.verify.v2.services(verifySid)
    .verifications
    .create({
      channelConfiguration: {
        template_id: 'd-3270807b029d4aad842c356982f203aa',
        from: 'iqrasarwarm012@gmail.com',
        from_name: 'Tourpk'
      },
      to: req.body.email,
      channel: 'email'
    })
    .then((verification) => {
      res.status(200).json({ success: true, message: 'Verification initiated successfully' });
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: 'Failed to initiate verification' });
    });
};

function checkVerificationCode(req, res) {
  return client.verify.v2.services(verifySid)
    .verificationChecks
    .create({ to: req.body.email, code: req.body.verificationCode })
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


module.exports = {
  sendVerificationCodeByEmailWithTemplate,
  checkVerificationCode
};
