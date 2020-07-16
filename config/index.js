const { PORT, MONGODB_URI_LOCAL } = require('./environment');
const db = require('./database');

module.exports = {
    PORT,
    MONGODB_URI_LOCAL,
    db,
};
