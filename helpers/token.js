const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function createToken(userData) {
    const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '5h' });

    return token;
}

module.exports = createToken;
