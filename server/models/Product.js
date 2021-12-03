const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({

    img: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    _oid: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    MFD: {
        type: String,
        required: true
    },
    EXP: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;