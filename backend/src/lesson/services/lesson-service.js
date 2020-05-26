const lessonRepository = require('../repositories/lesson-repository');

const findOne = async (filter) => {
    try {
        return await lessonRepository.findOne(filter);
    } catch (err) {
        return err;
    }
};

const save = async (data) => {
    try {
        return await lessonRepository.save(data);
    } catch (err) {
        return err;
    }
};

module.exports = {
    findOne,
    save
};
