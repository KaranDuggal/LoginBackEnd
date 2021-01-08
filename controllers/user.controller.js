const bcrypt = require('bcrypt')
const UserService = require('../services/user.service')
const userService = new UserService();
const ValidatorService = require('../services/validator.service')
const validatorService = new ValidatorService()

module.exports = UserController = function () {
    this.user_signup = async (req, res) => {
        try {
            let existingUser = await userService.check_email_exist(req.body.email);

            if (existingUser === true) { throw { custom_err_message: "User Already Exists" } }
            // ==================================================================================
            const validate = await validatorService.schemas.signupSchema.validate(req.body)
            if (existingUser.error) { throw { custom_err_message: "error in validatorService.schemas.signupSchema" } }
            // ==================================================================================
            console.log(validate.value.password);
            let hashedPassword = await bcrypt.hash(validate.value.password, 10);
            validate.value.password = hashedPassword;
            const user = await userService.signup(validate.value);
            // ==================================================================================
            return res.status(200).json({ success: true, message: `created successfully.`, data: user });
        } catch (err) {
            console.log("inside catch user_signup", err);
            return res.status(400).json({ success: false, error: err, message: err.custom_err_message ? err.custom_err_message : "Could not Signup" });
        }
    }

    this.user_login = async (req, res) => {
        res.send('login')
    }
}