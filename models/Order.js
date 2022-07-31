const mongoose = require('mongoose');
const {OrderItemSchema} = require("./OrderItem");
const {CustomerSchema} = require("./Customer");

const orderSchema = mongoose.Schema({
    items: [OrderItemSchema],
    customer: {type: CustomerSchema, required: true},
});

module.exports = mongoose.model('Order', orderSchema);