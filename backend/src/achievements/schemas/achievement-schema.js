const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    lessons: {
        type: {
            lessonId: mongoose.ObjectId,
            percentage: Number
        }
    }
});

module.exports = achievementSchema;
