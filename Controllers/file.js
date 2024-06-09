const mailService = require("../utils/sendEmail")
const dotenv = require("dotenv");

dotenv.config();

const data = async (req, res, next) => {
    try {
        const {name, email, message} = req.body;
    
        if(!name || !email || !message){
            return next(
                res.status(404).json({
                    success : false,
                    message : "Please provid all the details.",
                })
            )
        }
        const info = await mailService.sendMail({
            from: process.env.EMAIL_USERNAME, // Replace with your email address
            to: process.env.MAIL_RECIVE, // Replace with the recipient's email address
            subject: 'Club 7 Fitness Contact', // Replace with your desired subject
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Plain text content 
            
        });
        
        res.status(200).json({
            success : true,
            message : "Email sent Successfully.",
        })
    } 
    catch (error) {
        res.status(500).json({
            success : false,
            message : "Something went wrong ! Try again later."
        })
    }
}

// Container to share all the files
const fileController = {
    data,
}

module.exports = fileController;