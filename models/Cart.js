const mongoose = require('mongoose');
const {CartItemSchema} = require("./CartItem");

const cartSchema = mongoose.Schema({
   selectedProducts: [CartItemSchema],
});

module.exports = mongoose.model('Cart', cartSchema);