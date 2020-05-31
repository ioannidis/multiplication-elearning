const mongoose = require('mongoose');

const principalSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    role: {
        type: String,
        required: true
    },
    firstName: {
        type: Stirng,
        required: true
    },
    enabled: {
        type: Boolean,
        default: false
    }
});

module.exports = principalSchema;
