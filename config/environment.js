require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGODB_URI_LOCAL: process.env.MONGODB_URI_LOCAL,
    JWT_SECRET: process.env.JWT_SECRET,
};
