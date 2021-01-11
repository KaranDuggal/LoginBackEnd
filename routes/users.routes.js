var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller')
const userController = new UserController

/* GET users listing. */
router.post('/login', userController.user_login);
router.post('/signup', userController.user_signup);

module.exports = router;
