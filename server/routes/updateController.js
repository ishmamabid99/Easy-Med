const User = require('../models/User')
const Organization = require('../models/Organization')
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');

module.exports.updateRes = async (req, res) => {
    try {
        const resUpdate = await Organization.findById(req.body._id);
        resUpdate.role = req.body.data.role;
        resUpdate.sales = req.body.data.sales;
        resUpdate.products = req.body.data.products;
        resUpdate.save(err => {
            if (!err) {
                res.status(200).json(true)
            }
            else {
                res.status(404).json(false)
            }
        })
    }
    catch (err) {
        res.status(404).json(`${err}`)
    }

}
module.exports.updateProfile = async (req, res) => {
    try {
        const resUpdate = await Organization.findById(req.body._id);
        resUpdate.img = req.file.originalname;
        await resUpdate.save(err => {
            if (!err) {
                res.status(200).json(true);
            }
            else {
                res.status(404).json(false)
            }
        })
    }
    catch (err) {
        res.status(404).json(`${err}`)
    }
}
module.exports.updateProduct = async (req, res) => {
    try {
        const resUpdate = await Product.findById(req.body._id);
        resUpdate.img = req.file.originalname;
        await resUpdate.save(err => {
            if (!err) {
                res.status(200).json(true);
            }
            else {
                console.log(err);
                res.status(404).json(`${err}`)
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(404).json(`${err}`)
    }
}
module.exports.postProduct = async (req, res) => {
    try {
        const check = await Product.find({
            name: req.body.name
        });
        if (check.length != 0) {
            res.status(200).json(false);
        }
        else {
            const product = new Product(req.body);
            const result = await product.save();
            if (result) {
                res.status(200).json(result);
            }
        }
    }
    catch (err) {
        console.log(err)
        res.status(404).json(`${err}`)
    }
}
module.exports.getInfo = async (req, res) => {
    try {
        const res1 = await Organization.findById(req.params._id);
        const res2 = await User.findById(req.params._id);
        if (res1 || res2) {
            res.status(200).json(res1 || res2)
        }
        else {
            res.status(200).json(false)
        }
    }
    catch (err) {
        console.log(err)
        res.status(404).json(`${err}`)
    }
}
module.exports.getInventory = async (req, res) => {
    try {
        const result = await Product.find({ _oid: req.params._id });
        if (result) {
            res.status(200).json(result)
        }
    }
    catch (err) {
        console.log(err)
        res.status(404).json(`${err}`)
    }
}
module.exports.getMarketInfo = async (req, res) => {
    try {
        const result = await Product.find();
        if (result) {
            res.status(200).json(result)
        }
        else {
            console.log('hoy nai')
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(`${err}`)
    }
}