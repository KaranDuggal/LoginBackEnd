const jwt = require('jsonwebtoken')
const config = require('../configurations/config');
const user = require('../models/user.models');
// middleware is just function
CheckAuth = async (req, res, next) => {
    try {
        console.log("token", token);
        const token = req.headers.authorization.split(" ")[1]
        console.log("token", token);
        const decodedToken = jwt.verify(token, config.jwtSecret);

        const User = await user.findOne({ _id: decodedToken.userId });
        if (!User) { throw Error; }
        req.user = User;
        next();
    }
    catch (error) {
        res.status(401).json({
            message: "Auth Failed! "
        })
    }
    // next();
}
module.exports = CheckAuth;