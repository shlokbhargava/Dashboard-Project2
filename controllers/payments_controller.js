const Payment = require('../models/payments');
const User = require('../models/users');

// Add a Payment
exports.addPayment = async (req, res) => {
    let user = await User.findOne({ contact_number: req.body.contact_number });

    if(user) {
        let payment = await Payment.findOne({ contact_number: req.body.contact_number });
        
        if (payment) {
            payment.amount = parseInt(req.body.amount) + parseInt(payment.amount);
            payment.noOfTran = parseInt( payment.noOfTran) + parseInt(req.body.noOfTran);

            payment.save();
            req.flash('success', 'Payment added');
            return res.redirect('back');
        }else {
            let payment = await Payment.create(req.body);
            user.payment.push(payment);
            user.save();
            req.flash('success', 'Payment added');
            return res.redirect('back');
        }
    }else{
        req.flash('error', 'User does not exist');
        req.flash('info', 'Create a user');
    }
}


// Edit a Payment
exports.editPayment = async (req, res) => {
    let payment = await Payment.findById(req.params.id);

    if(payment) {

        payment.customer_name = req.body.customer_name;
        payment.category = req.body.category;
        payment.transaction_ID = req.body.transaction_ID;
        payment.contact_number = req.body.contact_number;
        payment.amount = req.body.amount;
        payment.transaction_type = req.body.transaction_type;
        payment.other_info = req.body.other_info;

        payment.save();

        req.flash('success', 'Your Payment has been updated');
        return res.redirect('back');
    }
}


// delete a Payment
exports.delete = async (req, res) => {
    let payment = await Payment.findById(req.params.id);

    payment.remove();

    req.flash('success', 'Payment deleted');
    return res.redirect('back');
}