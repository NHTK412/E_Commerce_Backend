const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const cartItemSchema = new mongoose.Schema({
    cart_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
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
    }
}, { timestamps: true });

cartItemSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('CartItem', cartItemSchema);
