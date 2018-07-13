const express = require('express');

const router = express.Router();

const Service = require('../controllers/service');

router.get('/', Service.index);

router.post('/update', Service.updateService);

router.get('/beds', Service.getBeds);
router.post('/beds/update/:bedID', Service.updateBeds);
router.post('/beds/edit', Service.editBeds);
router.post('/beds/edit/:bedID', Service.editBeds);

module.exports = router;
