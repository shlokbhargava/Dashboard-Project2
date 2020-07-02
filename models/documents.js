const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const DOCUMENT_PATH = path.join('/uploads');

const documentSchema = new mongoose.Schema({
    contact_number: {
        type: Number,
        required: true,
    },
    document: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', DOCUMENT_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
 
// static methods
documentSchema.statics.uploadedDocument = multer({ storage: storage }).single('document');
documentSchema.statics.documentPath = DOCUMENT_PATH;



const Document = mongoose.model('Document', documentSchema);
module.exports = Document;