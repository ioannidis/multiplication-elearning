const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    prerequisites: {
        type: [String]
    },
    order: {
        type: Number,
        required: true
    }
});

module.exports = lessonSchema;
