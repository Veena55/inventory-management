const express = require('express');
const router = express.Router();

const productsApi = require('../../../controllers/api/v1/products_api');

router.get('/', productsApi.index);
router.post('/create', productsApi.create);
router.get('/update/:id', productsApi.update);
router.get('/delete/:id', productsApi.delete);

module.exports = router;