const mongoose      = require('./connection');

const lessonSchema    = require('../schemas/lesson-schema');
const Lesson          = mongoose.model('Lesson', lessonSchema);


const findOne = async (filter) => {
    try {
        return await Lesson.findOne(filter)
    } catch (err) {
        return err;
    }

};

const save = async (data) => {
    try {
        const user = new User(data);
        user.save();
        return {data: {user}};
    } catch (err) {
        return err;
    }
}

module.exports = {
    findOne,
    save
};
