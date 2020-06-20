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
        console.log(data);
        console.log("==========")
        console.log(user)
        console.log("===========")
        console.log("ANTE GAMISOU")
        // await user.updateOne({_id: user._id}, user, () => {});
        const a = await User.updateOne({username: data.user.username}, {password: data.password})
        console.log(a)
        return {data: {user}};
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
