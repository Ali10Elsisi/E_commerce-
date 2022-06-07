let express = require('express');
let router = express.Router();
let ordercontrollers = require('../controllers/ordercontrollers');
router.get('/', ordercontrollers.getAllOrder)
router.get('/find/:userId', ordercontrollers.getUserOrder)

router.post('/', ordercontrollers.createOrder)
router.delete('/:id', ordercontrollers.deleteOrder)
router.put('/:id', ordercontrollers.updatedOrder)
module.exports = router;