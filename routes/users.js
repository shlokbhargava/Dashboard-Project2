const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile-info', usersController.profileInfo);
router.get('/payments', usersController.payments);
router.get('/reports', usersController.reports);

router.post('/add-profile', usersController.addProfile);
router.get('/delete/:id', usersController.delete);
router.post('/edit-profile/:id', usersController.editProfile);

router.use('/payment', require('./payment'));

module.exports = router;