const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const cartSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

// categorySchema.plugin(mongooseDelete, {
//     deletedAt: true,
//     deleted: true,
//     overrideMethods: 'all'
// });

module.exports = mongoose.model('Cart', cartSchema);