const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Or your email provider
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS  // Your email password or app password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.RECEIVER_EMAIL, // Your email address to receive the message
        subject: `New contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ msg: 'Failed to send message' });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ msg: 'Message sent successfully' });
    });
});

module.exports = router;
