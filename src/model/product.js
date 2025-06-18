const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image_path: {
        type: String,
        required: true
    }
}, { timestamps: true });

productSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Product', productSchema);