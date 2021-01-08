var express = require('express');
var router = express.Router();
const userRoutes = require('./users.routes')

/* GET home page. */
router.use('/user', userRoutes)

module.exports = router;
