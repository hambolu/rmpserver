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

  }