const bcrypt    = require('bcrypt');
const userRepository = require('../../user/repositories/user-repository');

const find = async (filter) => {
    try {
        return await userRepository.find(filter);
    } catch (err) {
        return err;
    }
}

const findOne = async (filter) => {
    try {
        return {user: await userRepository.findOne(filter)};
    } catch (err) {
        return err;
    }
};

const save = async (data) => {
    try {
        data.password = bcrypt.hashSync(data.password, 10)
        return await userRepository.save(data);
    } catch (err) {
        return err;
    }
};

module.exports = {
    find,
    findOne,
    save
};
