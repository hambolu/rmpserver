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
   to: "henryhambolu@gmail.com",
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
   req.file.filename
   
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      res.status(500).send(error);
   }else{
      res.status(200).send("Email sent: " + info.response);
   }
});
}