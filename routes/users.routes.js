var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user.controller')
const userController = new UserController

/* GET users listing. */
router.post('/login', userController.user_login);
router.post('/signup', userController.user_signup);
router.get('/allusers', userController.get_all_users)
router.put('/allusers/:id/edit', userController.edit_user)
router.delete('/allusers/:id/delete', userController.delete_user)

module.exports = router;
