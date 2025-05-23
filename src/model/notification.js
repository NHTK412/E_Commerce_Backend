const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const notificationSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['order_status', 'promo', 'alert'],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    is_read: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
notificationSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('Notification', notificationSchema);
