const mongoose = require("mongoose");


const inventorySchema = new mongoose.Schema({

    productId: {
        type: String,
        required: true
    },
    initial: {
        type: String,
        requried: true
    },
    quantity: {
        type: String,
        requried: true
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
    },
    geoLocation: {
        type: Object,
        required: true
    }
});

const LocalInventory = mongoose.model('inventory', inventorySchema);

module.exports = LocalInventory;