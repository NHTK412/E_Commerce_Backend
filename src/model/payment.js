const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');


const paymentSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    method: {
        type: String,
        enum: ['stripe', 'paypal', 'vnpay'],
        required: true
    },
    payment_status: {
        type: String,
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    },
    transaction_id: {
        type: String,
        required: true
    },
    paid_at: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

paymentSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('Payment', paymentSchema);