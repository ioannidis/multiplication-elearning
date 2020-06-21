const userRepository = require('../repositories/user-repository');

const find = async (filter) => {
    try {
        return await userRepository.find(filter);
    } catch (err) {
        return err;
    }
};

const findOne = async (filter) => {
    try {
        return await userRepository.findOne(filter);
    } catch (err) {
        return err;
    }
};

const save = async (data) => {
    try {
        return await userRepository.save(data);
    } catch (err) {
        return err;
    }
};

const findByIdAndUpdate = async (id, data) => {
    try {
        return await userRepository.findByIdAndUpdate(id, data);
    } catch (err) {
        return err;
    }
};

const findOneAndDelete = async (filter) => {
    try {
        return await userRepository.findOneAndDelete(filter);
    } catch (err) {
        return err;
    }
};

module.exports = {
    find,
    findOne,
    save,
    findByIdAndUpdate,
    findOneAndDelete
};
