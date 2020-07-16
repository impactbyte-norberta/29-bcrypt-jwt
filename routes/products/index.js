const express = require('express');
const router = express.Router();

const { addProduct } = require('./controllers');
const { verifyToken } = require('../../helpers');

router.post('/', verifyToken, addProduct);

module.exports = router;
