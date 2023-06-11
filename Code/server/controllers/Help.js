const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();

const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
);

exports.sendEmail = async (req) => {

    const body = '<strong>Name:</strong> ' + req.body.username + '<br><strong>Email:</strong> ' + req.body.email + '<br><strong>Question:</strong> ' + req.body.questionTitle + '<br><strong>Description:</strong> ' + req.body.questionDescription;
    const sendTo = [
        'bsef19m012@pucit.edu.pk',
        'bsef19m003@pucit.edu.pk',
        'bsef19m027@pucit.edu.pk'
    ]
    const subject = req.body.role == "Tourist" && req.body.advancedSupport ? "Urgent Help Call - TourPk" :"Help Call - TourPk";
    const sendObj = {
        from: 'iqrasarwarm012@gmail.com',
        to: sendTo,
        subject: subject,
        html: body,
        attachments: [
            {
                filename: req.body.file,
                path: "../frontend/tourpk/public/static/images/upload/" + req.body.file,
            },
        ],
    };
    console.log(sendObj)
    transport
        .sendMail(sendObj)
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
}