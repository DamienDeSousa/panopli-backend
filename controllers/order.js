const Order = require("../models/Order");
const Product = require("../models/Product");
const {ObjectId} = require('mongodb');

exports.createOrder = (req, res, next) => {
    const order = new Order({items: req.body.items, customer: req.body.customer});
    order.save()
        .then(order => {
            order.items.map(item => {
                Product.updateOne(
                    {_id: new ObjectId(item.product_id)},
                    {$inc: {stock: -(item.quantity)}}
                )
                    .then(() => {})
                    .catch(error => console.log(error));
            });
            res.status(201).json(order)
        })
        .catch(error => res.status(400).json({error}));
};