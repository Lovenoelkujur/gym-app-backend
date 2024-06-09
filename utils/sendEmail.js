const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

// Gmail
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com', // Replace with your provider's SMTP server
    port: 465, // Port may vary depending on your provider
    secure: true, // Use true for TLS, false for non-TLS (consult your provider)
    auth: {
      user: process.env.EMAIL_USERNAME, // Replace with your email address
      pass: process.env.EMAIL_PASSWORD // Replace with your email password
    }
});



module.exports = transporter;