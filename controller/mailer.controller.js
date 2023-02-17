const nodemailer = require("nodemailer");
exports.sendmail = (req, res) =>{

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
     user: "henryhambolu@gmail.com",
     pass: process.env.NODEMAILER,
   },
});

const mailOptions = {
   from: "example@gmail.com",
   to: "example@example.com",
   subject: "Nodemailer Test",
   test: " New Notary"+
   ",\n\n" +
   req.body.fname +
   ",\n\n" +
   req.body.mname+
   ",\n\n" +
   req.body.lname+
   ",\n\n" +
   req.body.email+
   ",\n\n" +
   req.body.phone +
   ",\n\n" +
   req.files
   
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});
}