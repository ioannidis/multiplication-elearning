const passwordResetRepository = require('../../authentication/repositories/passoword-reset-repository');


const findOne = async (filter) => {
    try {
        return await passwordResetRepository.findOne(filter);
    } catch (err) {
        return err;
    }
};

const save = async (data) => {
    try {
        return await passwordResetRepository.save(data);
    } catch (err) {
        return err;
    }
};

const updateOne = async (filter, data) => {
    try {
        return await passwordResetRepository.updateOne(filter, data);
    } catch (err) {
        return err;
    }
}

module.exports = {
    findOne,
    save,
    updateOne
};
