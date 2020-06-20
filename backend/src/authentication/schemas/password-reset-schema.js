const mongoose = require('mongoose');

const passwordResetSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    token: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = passwordResetSchema;
