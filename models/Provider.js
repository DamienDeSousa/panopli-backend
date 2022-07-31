const mongoose = require('mongoose');
const {AddressSchema} = require("./Address");

const providerSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: AddressSchema, required: true}
});

module.exports = {
    ProviderSchema: providerSchema
};