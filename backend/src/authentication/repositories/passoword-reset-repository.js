const mongoose      = require('./connection');

const passwordResetSchema    = require('../schemas/password-reset-schema');
const PasswordReset          = mongoose.model('PasswordReset', passwordResetSchema);


const findOne = async (filter) => {
    try {
        const passwordReset = await PasswordReset.findOne(filter)
            .exec();
        return passwordReset;
    } catch (err) {
        return err;
    }

};

const save = async (data) => {
    try {
        const passwordReset = new PasswordReset(data);
        passwordReset.save();
        return {data: {passwordReset}};
    } catch (err) {
        return err;
    }
}

const updateOne = async (filter, data) => {
    try {
        return await PasswordReset.updateOne(filter, data);
    } catch (err) {
        return err;
    }
}

module.exports = {
    findOne,
    save,
    updateOne
};
