const mongoose = require('mongoose');
const {ProviderSchema} = require("./Provider");

const productSchema = mongoose.Schema({
    availableColor: {type: Array, required: true},
    availableSize: {type: Array, required: true},
    name: {type: String, required: true},
    images: {type: Array, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    provider: {type: ProviderSchema, required: true}
});

module.exports = mongoose.model('Product', productSchema);