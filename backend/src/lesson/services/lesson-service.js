const lessonRepository = require('../repositories/lesson-repository');

const find = async (filter) => {
    try {
        return await lessonRepository.find(filter);
    } catch (err) {
        return err;
    }
};

const findOne = async (filter) => {
    try {
        return await lessonRepository.findOne(filter);
    } catch (err) {
        return err;
    }
};

const findOneAndUpdate = async (filter, data) => {
    try {
        return await lessonRepository.findOneAndUpdate(filter, data);
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
    find,
    findOne,
    findOneAndUpdate,
    save
};
