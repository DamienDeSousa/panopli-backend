const express = require('express');

const router = express.Router();

const cartCtrl = require('../controllers/cart');

router.post('/', cartCtrl.createCart);
router.patch('/add-product/', cartCtrl.addCartItem);
router.get('/:id', cartCtrl.getCart);
router.patch('/flush-items/:id', cartCtrl.flushCart);
module.exports = router;
