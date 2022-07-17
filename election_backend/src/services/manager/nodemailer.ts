const nodemailer = require("nodemailer");

export default async function(email : string, subject : string, text : {}){
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: "smtp.gmail.com",
      port: 465,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'server@ngmail.com', // generated ethereal user
        pass: 'Server2022716', // generated ethereal password
      },
    });
    
    var mailOptions = {
      from: '"q745235"<server@gmail.com>',
      to: email,
      subject: subject,
      text: text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          return {
              info: 'error' + error
          };
      } else {
        //console.log('Email sent: ' + info.response);
      }
    });
}