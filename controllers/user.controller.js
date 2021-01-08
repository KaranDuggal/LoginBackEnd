module.exports = UserController = function () {
    this.user_login = async (req, res) => {
        res.send('login')
    }
    this.user_signup = async (req, res) => {
        res.send('singup')
    }
}