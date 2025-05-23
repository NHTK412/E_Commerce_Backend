const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');



const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    address_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

orderSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('Order', orderSchema);