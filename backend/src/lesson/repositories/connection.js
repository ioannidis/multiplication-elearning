const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mltelearing', {useNewUrlParser: true});

module.exports = mongoose;
