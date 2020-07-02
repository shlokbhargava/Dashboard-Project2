const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    sNo: {
        type: Number,
    },
    customer_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact_number: {
        type: Number,
        required: true,
        unique: true
    },
    no_of_warehouse: {
        type: Number
    },
    warehouse_name: {
        type: String
    },
    warehouse_area: {
        type: Number
    },
    payment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payment'
        }
    ],
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);
module.exports = User;