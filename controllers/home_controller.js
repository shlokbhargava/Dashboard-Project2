const Document = require('../models/documents');

exports.homePage = (req, res) => {
    return res.render('home', {
        title: 'Home Page'
    });
}


exports.uploads = async (req, res) => {

    Document.uploadedDocument(req, res, function (err) {

        let document = Document.create({
            contact_number: req.body.contact_number
        });

        if (req.file) {
            // this is saving the path of the uploaded file into the document field
            document.document = Document.documentPath + '/' + req.file.filename;
        }

        req.flash('success', 'Document Uploaded');
        return res.redirect('back');
    });
}