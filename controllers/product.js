const Product = require('../models/Product');

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({error}))
};

exports.addProduct = (req, res, next) => {
    const product = new Product({...req.body});
    product.save()
        .then(() => res.status(201).json({message: 'product created'}))
        .catch(error => res.status(400).json({error}))
}

exports.getProduct = (req, res, next) => {
    Product.findOne({'_id': req.params.id})
        .then(product => res.status(200).json(product))
        .catch(error => res.status(400).json({error}))
}
