const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes')

const CheckAuth = require('../middleware/check-auth')

/* GET home page. */
router.use('/user', userRoutes)
router.get('/auth', CheckAuth, async (req, res) => {
    console.log('in auth route');
    res.send('Auth')
})

module.exports = router;
