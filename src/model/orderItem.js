const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const oderItemSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

oderItemSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('OrderItem', oderItemSchema);