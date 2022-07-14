const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    status: {
        type: String,
    },
    typeofaccount: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);