const express = require('express');
const { productsController, productController, stylesController } = require('../controller/productController.js');

const router = express.Router();

router.get('/', productsController);

router.get('/:product_id', productController);

router.get('/:product_id/styles', stylesController);

module.exports = router;