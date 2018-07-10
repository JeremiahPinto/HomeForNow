const express = require('express');

const router = express.Router();

const Admin = require('../controllers/admin');

router.get('/', Admin.index);

router.post('/create_service', Admin.createService);

router.get('/wipe_services', Admin.wipeServices);

module.exports = router;
