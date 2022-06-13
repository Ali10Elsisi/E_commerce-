let express = require('express');
let router = express.Router();
let ProductController = require('../controllers/ProductController');
let auth = require('../middleware/auth')
router.get('/', ProductController.getAllProduct)
router.post('/', ProductController.createProduct)
router.delete('/:id', ProductController.deleteProduct)
router.put('/:id', ProductController.editProduct)
module.exports = router;