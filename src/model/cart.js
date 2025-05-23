const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const categorySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

categorySchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Cart', categorySchema);