const express = require('express');

const router = express.Router();

const productCtrl = require('../controllers/product');

router.get('/', productCtrl.getAllProducts);
router.post('/', productCtrl.addProduct);
router.get('/:id', productCtrl.getProduct);
module.exports = router;
