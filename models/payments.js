const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    sNo: {
        type: Number,
    },
    customer_name: {
        type: String,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    transaction_ID: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    transaction_type: {
        type: String,
        required: true
    },
    other_info: {
        type: String
    },
    noOfTran: {
        type: Number
    }
}, {
    timestamps: true
});


const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;