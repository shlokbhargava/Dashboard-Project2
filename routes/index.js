const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.homePage);
router.post('/uploads', homeController.uploads);
router.use('/users', require('./users'));

module.exports = router;