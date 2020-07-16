const mongoose = require('mongoose');

const { MONGODB_URI_LOCAL } = require('./environment');

mongoose.connect(MONGODB_URI_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

module.exports = db;
