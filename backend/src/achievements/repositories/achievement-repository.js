const mongoose      = require('./connection');

const achievement    = require('../schemas/achievement-schema');
const Achievement    = mongoose.model('Achievement', achievement);


const find = async (filter) => {
    try {
        return await Achievement.find(filter)
    } catch (err) {
        return err;
    }
}

const findOne = async (filter) => {
    try {
        return await Achievement.findOne(filter)
    } catch (err) {
        return err;
    }
};

const save = async (data) => {
    try {
        const user = new Achievement(data);
        user.save();
        return {data: {user}};
    } catch (err) {
        return err;
    }
}

module.exports = {
    find,
    findOne,
    save
};
