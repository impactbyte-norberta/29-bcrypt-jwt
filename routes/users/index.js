const express = require('express');
const router = express.Router();

const { userRegistration, userLogin } = require('./controllers');

router.post('/', userRegistration);
router.post('/login', userLogin);

module.exports = router;
