const jwt = require("jsonwebtoken")

const checkAuth = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const { name, _id, _role } = decode;
        req.name = name;
        req._id = _id;
        req.role = _role
        next();
    }
    catch (err) {
        console.log(err)
        next(err)
    }
}


module.exports = checkAuth;