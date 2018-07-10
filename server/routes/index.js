const express = require('express');

const router = express.Router();

const Index = require('../controllers/index');
const Request = require('../controllers/request');

router.post('/login', Index.login);
router.post('/register', Index.register);

router.post('/search', Request.search);

module.exports = router;
