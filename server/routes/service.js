const express = require('express');

const router = express.Router();

const Service = require('../controllers/service');

router.get('/', Service.index);

module.exports = router;
