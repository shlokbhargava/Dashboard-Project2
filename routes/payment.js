const express = require('express');
const router = express.Router();

const paymentsController = require('../controllers/payments_controller');

router.post('/add-payment', paymentsController.addPayment);
router.get('/delete/:id', paymentsController.delete);
router.post('/edit-payment/:id', paymentsController.editPayment);


module.exports = router;