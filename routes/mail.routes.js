const mailcontroller = require("../controller/mailer.controller");
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, ('public/images/'));
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
  var upload = multer({ storage: storage })

  module.exports = function (app) {

   
    app.post(
      "/sendmail",
      upload.array('files', 10),
      mailcontroller.sendmail
    );

    // app.post('/api/email', upload.array('attachment', 4), function(req, res, next) {
    //     var attachementList = [];
    //     for (var i = 0; i < req.files.length; i++) {
    //         attachementList.push({
    //             filename: req.files[i].originalname,
    //             path: req.files[i].path
    //         })}
    //     var mailOptions = {
    //         to: req.body.to,
    //         from: req.body.from,
    //         subject: req.body.subject,
    //         text: req.body.text,
    //         attachments: attachementList}
    //         mailer.sendMail(mailOptions, function(err, res) {if (err) {console.log(err);}console.log(res);});});

  }