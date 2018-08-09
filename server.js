const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const multer = require("multer");
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");
const users = require('./routes/api/users');

const app = express();


//_________________________Setting up multer________________________________
const storeage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, '/upload/' )
  },
  filename: function (req, file, cb) {
    const dateTimeStamp = Date.now();
    cb(null, file.filename + '-' + dateTimeStamp + '.' + file.origionalname.split('.')[file.originalname.split('.').length - 1])
  }
})
var upload = multer({
  storeage: storeage,
  fileFilter: function (req, file, callback) {
    if (['xls', 'xlsx'].indexOf(file.origionalname.split('.')[file.originalname.split('.').length - 1]) === -1) {
      return callback(new Error("Wrong file extension"));
    }
    callback(null, true)
  }
}).single("file");

//API path that will upload the file

app.post('/upload', (req, res) => {
  const exceltojson='';
  upload(req, res, (err) => {
    if (err) {
      res.json({
        error_code: 1,
        err_desc: err
      })
      return;
    }
    // *** Multer gives us file info in the req.file object
    if (!req.file) {
      res.json({
        error_code: 1,
        err_desc: "No file passed"
      });
      return;
    }
    /** check the expression of incomming file file and
     * use the  appropriate module
     */

    if (req.file.originalname.split('.')[req.file.originalname.split('.').length - 1] === 'xlsx') {
      exceltojson = xlsxtojson;
    } else {
      exceltojson = xlstojson;
    }
    try {
      exceltojson({
        input: req.file.path, //the same path where we uploaded our file
        output: null, //since we don't need output.json
        lowerCaseHeaders: true
      }, function (err, result) {
        if (err) {
          return res.json({
            error_code: 1,
            err_desc: err,
            data: null
          });
        }
        res.json({
          error_code: 0,
          err_desc: null,
          data: result
        });
      });
    } catch (e) {
      res.json({
        error_code: 1,
        err_desc: "Corupted excel file"
      });
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

//_______________________________________________________________________________________

// Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));