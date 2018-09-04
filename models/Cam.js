const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CamBrandSchema = new Schema({
    brandName: {
        type: String
    },
    productName: {
        type: String
    },
    category: {
        type: String
    },
    language: {
        type: String
    },
    duration: {
        type: Number
    }

})
const CamSchema = new Schema({
    year: {
        type: Number
    },
    Month: {
        type: String
    },
    zone: {
        type: String
    },
    city: {
        type: String
    },
    before: [CamBrandSchema],
    after: [CamBrandSchema]
});

module.exports = Cam = mongoose.model('Cam', CamSchema);