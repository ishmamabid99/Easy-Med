const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({

    productId: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    buyer: {
        type: String,
        required: true
    },
    seller: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Order = mongoose.model('order', orderSchema);

module.exports = Order;