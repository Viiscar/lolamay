const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'mail.gmx.com', // Host	smtp.ethereal.email
    port: 587,
    tls: {
        ciphers:'SSLv3',
        rejectUnauthorized: false
      },
    auth: {
        user: process.env.PLAZA_EMAIL, // Username 'eloisa17@ethereal.email'	
        pass: process.env.PLAZA_PASS // Password	'xVZ4uakUKvtbpb8Rb2'
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