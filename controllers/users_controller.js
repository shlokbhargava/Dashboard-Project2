const User = require('../models/users');
const Payment = require('../models/payments');


// Render Personal Information Page
exports.profileInfo = async (req, res) => {
    let users = await User.find({});

    return res.render('personal-info', {
        title: 'Personal Information',
        users: users
    });
}


// Render Payments Transaction Page
exports.payments = async (req, res) => {
    let users = await User.find({});
    let payments = await Payment.find({});

    return res.render('payments', {
        title: 'Payment Transactions',
        users: users,
        payment: payments
    })
}


// Render Payments Report Page
exports.reports = async (req, res) => {
    let payments = await Payment.find({});

    return res.render('reports', {
        title: 'Payment Reports',
        payments: payments
    })
}


// Add a Profile
exports.addProfile = async (req, res) => {
    let user = await User.findOne({ contact_number: req.body.contact_number });

    if(user) {
        req.flash('error', 'User already exists');
        return res.redirect('back');
    }else{
        User.create(req.body, (err, user) => {
            if(err) {
                req.flash('error', 'User could not be created');
                console.log('error in creating user', err);
                return res.redirect('back');
            }

            req.flash('success', 'User Profile added');
            return res.redirect('back');
        });
    }
}


// Edit a Profile
exports.editProfile = async (req, res) => {
    let user = await User.findById(req.params.id);

    if(user) {

        user.customer_name = req.body.customer_name;
        user.category = req.body.category;
        user.address = req.body.address;
        user.contact_number = req.body.contact_number;
        user.no_of_warehouse = req.body.no_of_warehouse;
        user.warehouse_name = req.body.warehouse_name;
        user.warehouse_area = req.body.warehouse_area;

        user.save();

        req.flash('success', 'Your Profile has been updated');
        return res.redirect('back');
    }
}


// delete a Profile
exports.delete = async (req, res) => {
    let user = await User.findById(req.params.id);

    user.remove();

    req.flash('success', 'User deleted');
    return res.redirect('back');
}