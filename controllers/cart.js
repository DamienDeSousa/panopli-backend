const Cart = require('../models/Cart');
const {ObjectId} = require('mongodb');

exports.createCart = (req, res, next) => {
    const cart = new Cart();
    cart.save()
        .then((cart) => {
            res.status(201).json({'_id': cart._id.toString()});
        })
        .catch(error => res.status(400).json({error}));
}

exports.addCartItem = (req, res, next) => {
    const cartId = new ObjectId(req.body.cartId);
    const newItem = {
        product: new ObjectId(req.body.product._id),
        quantity: req.body.quantity,
        selectedSize: req.body.selectedSize,
        selectedColor: req.body.selectedColor
    };
    Cart.findOne({
        '_id': cartId,
        'selectedProducts.product': new ObjectId(req.body.product._id),
        'selectedProducts.selectedSize': req.body.selectedSize,
        'selectedProducts.selectedColor': req.body.selectedColor
    }).then((cart) => {
        if (cart === null) {
            Cart.updateOne(
                {_id: cartId},
                {
                    $push: {
                        selectedProducts: newItem
                    }
                }
            ).then(() => res.status(200).json({'message': 'product successfully added to cart'}))
            .catch(error => res.status(400).json({error}));
        } else {
            let item = cart.selectedProducts.filter(selectedProduct => {
                    return selectedProduct.selectedSize === req.body.selectedSize
                        && selectedProduct.selectedColor === req.body.selectedColor
                        && selectedProduct.product.toString() === req.body.product._id;
                }
            ).shift();
            let newQuantity = parseInt(item.quantity) + parseInt(req.body.quantity);
            Cart.findOneAndUpdate({
                _id: cartId,
                selectedProducts: {
                    $elemMatch: {
                        product: item.product,
                        selectedSize: item.selectedSize,
                        selectedColor: item.selectedColor
                    }
                }
            }, {
                $set: {
                    'selectedProducts.$.quantity': newQuantity
                }
            }).then(() => res.status(200).json({'message': 'product successfully added to cart'}))
            .catch(error => res.status(400).json({error}));
        }
    }).catch(error => res.status(400).json({error}));
}

exports.getCart = (req, res, next) => {
    const cartId = new ObjectId(req.params.id);
    Cart.findOne({_id: cartId})
        .then(cart => res.status(200).json(cart))
        .catch(error => res.status(400).json({error}));
}

exports.flushCart = (req, res, next) => {
    const cartId = new ObjectId(req.params.id);
    Cart.findOneAndUpdate(
        {_id: cartId},
        {
            $set: {
                selectedProducts: []
            }
        },
        {new: true} //set this to get the modified document after the current update
    ).then((cart) => res.status(200).json(cart))
        .catch(error => res.status(400).json({error}));
}
