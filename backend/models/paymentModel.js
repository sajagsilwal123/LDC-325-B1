let mongoose = require('mongoose');

let PaymentSchema = new mongoose.Schema({
    pid: {
        type: String,
        required: [true, "can't be blank"],
        index: true
    },
    refId: String,
    success: Boolean,
    amt: String,
    remarks: String,
    club: String,
}, { timestamps: true, usePushEach: true });

const Payment = mongoose.model('Payment', PaymentSchema);
module.exports = Payment;
