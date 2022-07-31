const mongoose = require('mongoose');
const {AddressSchema} = require("./Address");

const customerSchema = mongoose.Schema({
    civility: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    address: AddressSchema
});

module.exports = {
    CustomerSchema: customerSchema
}