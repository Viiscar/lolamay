const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'eloisa17@ethereal.email',
        pass: 'xVZ4uakUKvtbpb8Rb2'
    }
});

module.exports = {
    transporter,
};

// Host	smtp.ethereal.email
// Port	587
// Security	STARTTLS
// Username	eloisa17@ethereal.email
// Password	xVZ4uakUKvtbpb8Rb2