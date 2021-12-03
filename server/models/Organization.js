const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    geoLocation: {
        type: Object,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: false
    },
    sales: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    }
});

const Organization = mongoose.model('organization', organizationSchema);

module.exports = Organization;