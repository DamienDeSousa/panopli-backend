const mongoose = require('mongoose');
const {ObjectId} = require("mongodb");

const cartItemSchema = mongoose.Schema({
    product: {type: ObjectId, required: true},
    quantity: {type: Number, required: true},
    selectedSize: {type: String, required: true},
    selectedColor: {type: String, required: true}
});

module.exports = {
    CartItemSchema: cartItemSchema
}