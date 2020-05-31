const mongoose      = require('./connection');

const lessonSchema    = require('../schemas/lesson-schema');
const Lesson          = mongoose.model('Lesson', lessonSchema);


const find = async (filter) => {
    try {
        return await Lesson.find(filter)
    } catch (err) {
        return err;
    }

};

const findOne = async (filter) => {
    try {
        return await Lesson.findOne(filter)
    } catch (err) {
        return err;
    }

};

const findOneAndUpdate = async (filter, data) => {
    try {
        return await Lesson.findOneAndUpdate(filter, data)
    } catch (err) {
        return err;
    }

};


module.exports = {
    find,
    findOne,
    findOneAndUpdate
};
