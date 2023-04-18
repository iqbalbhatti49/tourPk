const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();

const transport = nodemailer.createTransport(
   nodemailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY
   })
);

router.post("/", async (req) => {
   console.log(req.body);
   const body = '<strong>Name:</strong> ' + req.body.username + '<br><strong>Email:</strong> ' + req.body.email + '<br><strong>Question:</strong> ' + req.body.questionTitle + '<br><strong>Description:</strong> ' + req.body.questionDescription;
   transport
      .sendMail({
         from: 'iqrasarwarm012@gmail.com',
         to: 'bsef19m012@pucit.edu.pk',
         subject: "Help Call - TourPk",
         html: body
      })
      .then(([res]) => {
         console.log('Message delivered with code %s %s', res.statusCode, res.statusMessage);
      })
      .catch(err => {
         console.log('Errors occurred, failed to deliver message');
         if (err.response && err.response.body && err.response.body.errors) {
            err.response.body.errors.forEach(error => console.log('%s: %s', error.field, error.message));
         } else {
            console.log(err);
         }
      });
});

module.exports = router;
