const User = require('../models/User')
const Organization = require('../models/Organization')
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const Order = require('../models/Order');
const PastOrder = require('../models/PastOrder')
const LocalInventory = require('../models/LocalInventory');
const UserOrder = require('../models/UserOrder');
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
            const product = new Product({
                ...req.body,
                initial: req.body.quantity
            });
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
module.exports.postLocalOrder = async (req, res) => {
    try {
        const data = req.body.data;
        const result = await Order.insertMany(data);
        if (result) {
            res.status(200).json(true);
        }
        else {
            res.status(404).json(false)
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
}
module.exports.getOrderLarge = async (req, res) => {
    try {
        const result = await Order.find({ productId: req.params._id });
        if (result.length !== 0) {
            res.status(200).json(result)
        }
        else {
            res.status(200).json(false)
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.deleteOrder = async (req, res) => {
    try {
        const result = await Order.findByIdAndDelete(req.body.data._id);
        if (result) {
            res.status(200).json(true);
        }
        else {
            res.status(200).json(false);
        }

    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.updateProductOrder = async (req, res) => {
    try {
        const result = await Product.find({ name: req.body.data.seller });
        if (result.length !== 0) {
            result[0].quantity -= req.body.data.quantity;
            result[0].save(err => {
                if (!err) {
                    res.status(200).json(true);
                }
                else {
                    res.status(200).json(false);
                }
            })
        }

    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.addToLocal = async (req, res) => {
    try {
        const result = await Organization.findById(req.body.data.my_id);
        const result2 = await LocalInventory.find({
            seller: req.body.data.seller
        });
        console.log(result2);
        if (result2[0] && result) {
            result2[0].quantity = parseInt(result2[0].quantity) - parseInt(req.body.data.quantity);
            result2[0].save(err => {
                if (!err) {
                    res.status(200).json(true)
                }
                else {
                    console.log(err)
                    res.status(404).json(err)
                }
            })
        }
        else if (!result2[0] && result) {
            data = { ...req.body.data, geoLocation: result.geoLocation, initial: req.body.data.quantity }
            const inventory = new LocalInventory(data);
            inventory.save(err => {
                if (!err) {
                    res.status(200).json(true)
                }
                else {
                    console.log(err)
                    res.status(404).json(err)
                }
            });
        }
    }
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}
function toRad(Value) {
    return Value * Math.PI / 180;
}
function harvesine_algorithm(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}
module.exports.getUserMarket = async (req, res) => {
    try {
        let data = [];
        const result = await LocalInventory.find({});
        result.forEach(element => {
            const distance = harvesine_algorithm(req.body.data.geoLocation.lat,
                req.body.data.geoLocation.lng, element.geoLocation.lat, element.geoLocation.lng);
            if (distance <= 15) {
                data.push(element)
            }
        });
        console.log(data)
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.getLocalInventory = async (req, res) => {
    try {

        const result = await LocalInventory.find({ buyer: req.params._id });
        if (result.length !== 0) {
            res.status(200).json(result)
        }
        else {
            res.status(200).json(false)
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.orderFromUser = async (req, res) => {
    try {
        const result = await UserOrder.insertMany(req.body.data);
        if (result) {
            res.status(200).json(true);
        }
        else {
            res.status(404).json(false)
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.getUserOrder = async (req, res) => {
    try {
        const result = await UserOrder.find({ seller: req.params._id });
        if (result.length !== 0) {
            res.status(200).json(result)
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.deleteUserOrder = async (req, res) => {
    try {
        const result = await UserOrder.findByIdAndDelete(req.params._id);
        if (result) {
            res.status(200).json(true)
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.accpetUserOrder = async (req, res) => {
    try {
        const result = await LocalInventory.find({
            buyer: req.body.data.seller,
            productId: req.body.data.productId
        });
        const result2 = await PastOrder.insertMany(req.body.data);
        if (result.length !== 0 && result2) {
            result[0].quantity = parseInt(result[0].quantity) - parseInt(req.body.data.quantity);
            result[0].save()
            const res2 = await UserOrder.findByIdAndDelete(req.body.data._id);
            console.log(res2);
            if (res2) res.status(200).json(true);
            else res.status(404).json(false)

        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.getLargeData = async (req, res) => {
    try {
        const result = await Product.find({ _oid: req.params._id });
        if (result.length !== 0) {
            res.status(200).json(result)
        }
    }
    catch (err) {
        res.status(404).json(err)
    }
}
module.exports.getSmallData = async (req, res) => {
    try {
        const result = await LocalInventory.find({ buyer: req.params._id });
        if (result.length !== 0) {
            res.status(200).json(result)
        }
    }
    catch (err) {
        res.status(404).json(result)
    }
}
module.exports.showSearch = async (req, res) => {

    try {
        const finder = req.params._id;
        var regex = new RegExp(finder);
        await Product.find({
            name: regex
        }, (err, found) => {
            if (found) {

                res.status(200).json(found)
            }
            else {
                console.log(err);
            }
        })
    }
    catch (err) {

        res.status(404).json(err)
    }
}
module.exports.getMyOrder = async (req, res) => {
    try {
        const result = await PastOrder.find({ buyer: req.params._id });
        if (result.length !== 0) {
            res.status(200).json(result)
        } else {
            res.status(200).json(false)
        }

    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.getAllOrg = async (req, res) => {
    try {
        const result = await Organization.find({});
        console.log(result)
        if (result.length !== 0) {
            res.status(200).json(result)
        }
        else {
            res.status(202).json(false)
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.deleteOrg = async (req, res) => {
    try {
        const result = await Organization.deleteOne({ _id: req.params._id });
        if (result) {
            res.status(200).json(true);
        }

    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}
module.exports.getAllUserData = async (req, res) => {
    try {
        const result = await User.find({});
        if (result) {
            res.status(200).json(result);
        }
    }
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}
module.exports.deleteUser = async (req, res) => {
    try {
        const result = await User.deleteOne({ _id: req.params._id });
        if (result) {
            res.status(200).json(true)
        }
        else null
    }
    catch (err) {
        console.log(err);
        res.status(404).json(err)
    }
}