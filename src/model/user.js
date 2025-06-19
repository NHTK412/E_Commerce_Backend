const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password_hash: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'admin', 'vendor'],
        default: 'customer'
    },
    // cart_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Cart',
    // }
}, { timestamps: true });


userSchema.post("save", async (doc, next) => {
    try {
        const cart = require("./cart")
        await cart.create({
            user_id: doc._id
        })
        next()
    } catch (error) {
        console.log("Bị lỗi khi tạo giỏi hàng - ", error);
        next(error);
    }
})

userSchema.plugin(mongooseDelete, {
    deletedAt: true,
    deleted: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('User', userSchema);

