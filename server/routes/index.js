const express = require('express');

const router = express.Router();

const Index = require('../controllers/index');

router.post('/login', Index.login);
router.post('/register', Index.register);

module.exports = router;
