const User = require('../models/User')
const Organization = require('../models/Organization')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports.Check = async (req, res) => {
    try {

        const resUser = await User.find({ email: req.params.email });
        const resOrganization = await Organization.find({ email: req.params.email })
        Promise.all([resUser, resOrganization]).then(() => {
            if (resUser.length === 0 && resOrganization.length === 0) {
                res.status(200).json(false);
            }
            else {
                res.status(200).json(true);
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(404).json(`${err}`);
    }
}
module.exports.addOrganization = async (req, res) => {
    try {
        let data = req.body.data;
        bcrypt.hash(data.password, 10, function (err, hash) {
            data.password = hash.toString();
            data = { ...data, role: "INCOMPLETE" }
            const organization = new Organization(data);
            organization.save(err => {
                if (!err) {
                    res.status(200).json('added successfully')
                }
                else {
                    console.log(err)
                }
            });

        })
    }
    catch (err) {
        console.log(err);
        res.status(404).json((`${err}`));
    }
}
module.exports.addUser = async (req, res) => {
    try {
        let data = req.body.data;
        bcrypt.hash(data.password, 10, function (err, hash) {
            data.password = hash.toString();
            data = { ...data, role: "USER" }
            const User = new User(data);
            User.save(err => {
                if (!err) {
                    res.status(200).json('added successfully')
                }
            });
        })
    }
    catch (err) {
        console.log(err);
        res.status(404).json(`${err}`);
    }
}
module.exports.loginUser = async (req, res) => {
    try {
        const data = req.body.data;
        const resUser = await User.findOne({ email: data.email });
        const resOrganization = await Organization.findOne({ email: data.email });
        if (resUser || resOrganization) {
            result = resUser || resOrganization;
            const password = result.password;
            bcrypt.compare(data.password, password, function (err, done) {
                if (!err) {
                    if (done) {
                        const token = jwt.sign({

                            _name: result.name,
                            _id: result._id,
                            _role: result.role
                        }, process.env.JWT_SECRET, {
                            expiresIn: "1d"
                        })
                        const ret = { ...result, access_token: token };
                        res.status(200).json(ret);
                    }
                    else {
                        res.status(202).json('Passwords not matching')
                    }
                }
                else {
                    res.status(404).json(`${err}`)
                }
            })
        }
        else {
            res.status(200).json(false)
        }
    }
    catch (err) {
        console.log(err);
        res.status(404).json(`${err}`)
    }
}