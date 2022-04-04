// The Nodemailer module makes it easy to send emails from your computer.
// The Nodemailer module can be downloaded and installed using npm:

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashoknkjp@gmail.com',
    pass: 'toxrcgkgmczgdejw'
  }
});

var mailOptions = {
  from: 'ashoknkjp@gmail.com',
  to: 'ashopknk@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});