const express = require('express');

const router = express.Router();

const Admin = require('../controllers/admin');

router.get('/', Admin.index);

module.exports = router;
