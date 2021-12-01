const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const { Check, addOrganization, addUser, loginUser } = require('./loginController');

router.get("/app", checkAuth, (req, res) => {
    console.log('hello')
    res.status(200).json(true);
})
router.get('/check/:email', Check);
router.post('/addOrganization', addOrganization)
router.post('/addUser', addUser);
router.post('/login', loginUser);
module.exports = router;