// Import necessary modules
require('dotenv').config(); // Load environment variables
const twilio = require('twilio');

// Environment variables for sensitive data
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;

// Initialize Twilio client
const client = twilio(accountSid, authToken);

/**
 * Send verification code to email using a template.
 */
async function sendVerificationCodeByEmailWithTemplate(req, res) {
  try {
    // Validate input
    if (!req.body.email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    const verification = await client.verify.v2.services(verifySid).verifications.create({
      channelConfiguration: {
        template_id: process.env.TWILIO_TEMPLATE_ID,
        from: process.env.SENDER_EMAIL,
        from_name: process.env.SENDER_NAME
      },
      to: req.body.email,
      channel: 'email',
    });

    res.status(200).json({ success: true, message: 'Verification initiated successfully', verification });
  } catch (error) {
    console.error('Error initiating verification:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to initiate verification. Please try again.',
    });
  }
}

/**
 * Check the verification code sent to the email.
 */
async function checkVerificationCode(req, res) {
  try {
    // Validate input
    if (!req.body.email || !req.body.verificationCode) {
      return res.status(400).json({
        success: false,
        message: 'Email and verification code are required.',
      });
    }

    const verificationCheck = await client.verify.v2.services(verifySid).verificationChecks.create({
      to: req.body.email,
      code: req.body.verificationCode,
    });

    if (verificationCheck.status === 'approved') {
      res.status(200).json({ success: true, message: 'Verification code is valid' });
    } else {
      res.status(400).json({
        success: false,
        message: 'Verification code is invalid or expired.',
      });
    }
  } catch (error) {
    console.error('Error checking verification code:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to check verification code. Please try again.',
    });
  }
}

module.exports = {
  sendVerificationCodeByEmailWithTemplate,
  checkVerificationCode,
};
