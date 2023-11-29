const express = require('express');
const router = express.Router();
const productsController =  require('../controllers/products');

router.get('/', productsController.index);
router.get('/add-product', productsController.addProduct);

module.exports = router;