const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.post('/api/product/getproductbyfeatures', productController.getProductsByFeatures);

router.post('/api/product/addproduct', productController.addProduct);

router.post('/api/product/addfeatures', productController.addFeatures);

router.post('/api/product/addfilters', productController.addFilters);

router.get('/api/product/getproductbyid', productController.getProductById)

module.exports = router;
