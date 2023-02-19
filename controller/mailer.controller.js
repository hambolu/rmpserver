const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

exports.sendmail = (req, res) =>{

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
     user: "henryhambolu@gmail.com",
     pass: process.env.NODEMAILER,
   },
});
var attachementList = [];
        for (var i = 0; i < req.files.lenght; i++) {
            attachementList.push({
                filename: req.files[i].originalname,
                path: req.files[i].path
            })}
const mailOptions = {
   from: "example@gmail.com",
   to: "henryhambolu@gmail.com",
   subject: "NOTARY APP SUBMITION",
   text: " New Notary"+
   ",\n" +
   "First Name: "+req.body.fname +
   ",\n" +
   "Middle Name: "+req.body.mname+
   ",\n" +
   "Last Name: "+req.body.lname+
   ",\n" +
   "Email: "+req.body.email+
   ",\n" +
   "First Name :"+req.body.phone +
   ",\n" +
   "Attached with this mail is the are document submitted by the user.. ",
   attachments: attachementList,

};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      res.status(500).send(error);
   }else{
      res.status(200).send("Email sent Successfully ");
   }
});
}