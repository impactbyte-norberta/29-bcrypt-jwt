const express = require('express');
const router = express.Router();

const { userRegistration } = require('./controllers');

router.post('/', userRegistration);

module.exports = router;
