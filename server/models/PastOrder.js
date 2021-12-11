const mongoose = require("mongoose");


const pastOrderSchema = new mongoose.Schema({
    buyer: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
});

const PastOrder = mongoose.model('pastOrder', pastOrderSchema);

module.exports = PastOrder;