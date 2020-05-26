const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.ObjectId,
        required: true,
        unique: true,
        index: true
    },
    lessons: [{
        lesson_id: mongoose.ObjectId,
        percentage: Number,
        retries: Number
    }],
    stickers: [String]
});

module.exports = achievementSchema;
