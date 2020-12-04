const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', //'mail.gmx.com'
    port: 587,
    tls: {
        ciphers:'SSLv3',
        rejectUnauthorized: false
      },
    auth: {
        user: 'eloisa17@ethereal.email', //process.env.PLAZA_EMAIL	
        pass:  'xVZ4uakUKvtbpb8Rb2' //process.env.PLAZA_PASS
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