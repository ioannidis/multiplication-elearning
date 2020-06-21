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
        await user.save();
        return {data: {user}};
    } catch (err) {
        return err;
    }
};

const findOneAndUpdate = async (data) => {
    try {
        const user = new User(data);
        await User.updateOne({username: data.user.username}, {password: data.password})
        return {data: {user}};
    } catch (err) {
        return err;
    }
};

const findByIdAndUpdate = async (id, data) => {
    try {
        return await User.findByIdAndUpdate(id, data).exec();
    } catch (err) {
        return err;
    }
};

const findOneAndDelete = async (filter) => {
    try {
        return await User.findOneAndDelete(filter).exec();
    } catch (err) {
        return err;
    }
};

module.exports = {
    find,
    findOne,
    findOneAndUpdate,
    findOneAndDelete,
    findByIdAndUpdate,
    save
};


//{
//     "_id" : ObjectId("5ecfde664ece471958666bb0"),
//     "enabled" : true,
//     "username" : "klanos",
//     "password" : "$2b$10$bOMnGrOaedz.EPQPPJ7Dje4bKXf0WB7lWvWqMkPBz6KtkCHZpM/T6",
//     "email" : "klanos@gmail.comg",
//     "role" : "student",
//     "firstName" : "Klanos",
//     "lastName" : "Klanidis",
//     "__v" : 0
// }
