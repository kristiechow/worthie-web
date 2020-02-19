const express = require('express');
const router = express.Router();

const brand_controller = require('../controllers/brand.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', brand_controller.test);
module.exports = router;
