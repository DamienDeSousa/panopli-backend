const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    street: {type: String, required: true},
    postalcode: {type: String, required: true},
    town: {type: String, required: true},
    country: {type: String, required: true}
});

module.exports = {
    AddressSchema: addressSchema
};