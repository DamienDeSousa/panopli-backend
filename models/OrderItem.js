const mongoose = require('mongoose');

const orderItemSchema = mongoose.Schema({
    product_id: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    size: {type: String, required: true},
    color: {type: String, required: true}
});

module.exports = {
    OrderItemSchema: orderItemSchema
}