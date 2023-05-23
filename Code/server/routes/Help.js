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
   const sendTo = [
      'bsef19m012@pucit.edu.pk',
      'bsef19m003@pucit.edu.pk',
      'bsef19m027@pucit.edu.pk'
   ]
   transport
      .sendMail({
         from: 'iqrasarwarm012@gmail.com',
         to: sendTo,
         subject: "Help Call - TourPk",
         html: body,
         attachments: [
            {
               filename: req.body.file,
               path: "../frontend/tourpk/public/upload/" + req.body.file,
            },
         ],
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
