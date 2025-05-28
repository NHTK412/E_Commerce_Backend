const mongoose = require('mongoose');
// const mongooseDelete = require('mongoose-delete');

const addressSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    full_name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address_line: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    district: {
        type: String,
        required: true,
        trim: true
    },
    ward: {
        type: String,
        required: true,
        trim: true
    },
    is_default: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });


module.exports = mongoose.model('Address', addressSchema);
