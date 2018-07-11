const express = require('express');

const router = express.Router();

const Service = require('../controllers/service');

router.get('/', Service.index);

router.post('/update', Service.updateService);

module.exports = router;
