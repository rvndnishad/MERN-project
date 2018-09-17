const express = require('express');
const multer = require("multer");
const formatCamData = require("../../validation/formatCamData");
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json");
const passport = require('passport');
var mongoose = require("mongoose");

const router = express.Router();

router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/uploadExcel
// @desc    Upload excel
// @access  Private
const errors = {};
//_________________________Setting up multer________________________________
const storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();    
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
});

var upload = multer({ //multer settings
                storage: storage,
                fileFilter : function(req, file, callback) { //file filter
                    if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                        return callback(new Error('Wrong extension type'));
                    }
                    callback(null, true);
                }
            }).single('file');

//API path that will upload the file

router.post('/',  function(req, res) {  
    let errors = {};
    console.log("Starting upload...");
        let exceltojson;

        upload(req,res, (err) => {
            if(err){
                errors.err = err;
                 //res.json({error_code:1,err_desc:err});
                 return res.status(400).json(errors);
                 //return;
            }
            console.log("req.file => ", req.file);
            
            /** Multer gives us file info in req.file object */
            if(!req.file){
                errors.file = 'No file selected.';
                //res.json({error_code:1,err_desc:"No file passed"});
                return res.status(400).json(errors);
                 //return;
            }
            /** Check the extension of the incoming file and 
             *  use the appropriate module
             */
            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
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
                    errors.xls = err;
                    //return res.json({ error_code: 1, err_desc: err, data: null });
                    return res.status(400).json(errors);
                }
                res.json(result);

                //new Cam().save().then(CamDatabase => res.json(CamDatabase));

                  res.json({
                    error_code: 0,
                    err_desc: null,
                    data: result
                  });
            });
        } catch (e) {
            errors.fileCorupt = "Corupted excel file";
            return res.status(400).json(errors);
            //res.json({ error_code: 1, err_desc: "Corupted excel file" });
        }
    });
});

//_______________________________________________________________________________________
module.exports = router;