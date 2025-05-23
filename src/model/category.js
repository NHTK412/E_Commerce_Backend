const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const categorySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        }
    }
);

categorySchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Category', categorySchema);
