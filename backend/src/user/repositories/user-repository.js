const mongoose      = require('./connection');

const userSchema    = require('../schemas/user-schema');
const User          = mongoose.model('User', userSchema);


const find = async (filter) => {
    try {
        return await User.find(filter)
    } catch (err) {
        return err;
    }
}

const findOne = async (filter) => {
    try {
        return await User.findOne(filter)
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
    find,
    findOne,
    save
};
