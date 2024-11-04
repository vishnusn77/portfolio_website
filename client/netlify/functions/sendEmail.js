const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use the appropriate email service
      auth: {
        user: process.env.EMAIL_USER,  // Add this environment variable in Netlify
        pass: process.env.EMAIL_PASS,  // Add this environment variable in Netlify
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // Your email or recipient's email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};
