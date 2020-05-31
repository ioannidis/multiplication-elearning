const achievementRepository = require('../repositories/achievement-repository');

const find = async (filter) => {
    try {
        return await achievementRepository.find(filter);
    } catch (err) {
        return err;
    }
};

const findOne = async (filter) => {
    try {
        return await achievementRepository.findOne(filter);
    } catch (err) {
        return err;
    }
};

const findOneAndUpdate = async (filter, data) => {
    try {
        return await achievementRepository.findOneAndUpdate(filter, data);
    } catch (err) {
        return err;
    }
};

const save = async (data) => {
    try {
        return await achievementRepository.save(data);
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
