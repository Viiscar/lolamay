const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com', // 'mail.gmx.com'
    port: 465, //587
    secure: true,
    tls: {
        ciphers:'SSLv3',
        rejectUnauthorized: false
      },
    auth: {
        user: process.env.SENDER_EMAIL, //'eloisa17@ethereal.email'
        pass: process.env.SENDER_PASS //'xVZ4uakUKvtbpb8Rb2'
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