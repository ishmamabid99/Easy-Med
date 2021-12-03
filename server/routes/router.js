const router = require('express').Router();
const multer = require('multer')
const checkAuth = require('../middleware/checkAuth');
const { Check, addOrganization, addUser, loginUser } = require('./loginController');
const { updateRes, updateProfile, getInfo, postProduct, updateProduct, getInventory, getMarketInfo } = require('./updateController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
router.get("/app", checkAuth, (req, res) => {
    res.status(200).json(true);
})
router.get('/getmarketinfo', checkAuth, getMarketInfo)
router.get('/check/:email', Check);
router.get('/getinventory/:_id', checkAuth, getInventory)
router.post('/addOrganization', addOrganization)
router.post('/addUser', addUser);
router.post('/login', loginUser);
router.post('/updateres', checkAuth, updateRes);
router.post('/updateProfile', checkAuth, upload.single('articleImage'), updateProfile)
router.get('/getinfo/:_id', checkAuth, getInfo);
router.post('/postproduct', checkAuth, postProduct);
router.post('/updateproduct', checkAuth, upload.single('articleImage'), updateProduct)
module.exports = router;