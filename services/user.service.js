const jwt = require('jsonwebtoken');

const DBService = require('./db.service');
const dbService = new DBService();
const singupuser = require('../models/user.models');
const config = require('../configurations/config')
class UserController {
    constructor() { }
    check_email_exist(email) {
        return new Promise(async (resolve, reject) => {
            try {
                const emailexist = await dbService.findOne(singupuser, { email: email }).catch(err => {
                    throw err
                })
                resolve((emailexist && emailexist !== null) ? true : false)
            } catch (err) {
                reject(err)
            }
        })
    }
    signup(body) {
        return new Promise(async (resolve, reject) => {
            try {
                const model = new singupuser(body);
                const newUser = await dbService.save(model).catch(err => {
                    reject(err);
                });
                resolve(newUser);
            } catch (err) {
                reject(err);
            }
        })
    }
    check_email_exist_send_Data(email) {
        return new Promise(async (resolve, reject) => {
            try {
                const emailexist = await dbService.findOne(singupuser, { email: email }).catch(err => {
                    throw err
                })
                resolve((emailexist && emailexist !== null) ? emailexist : false)
            } catch (err) {
                reject(err)
            }
        })
    }
    createUserToken(data) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(data);
                const token = jwt.sign({
                    email: data.email,
                    userId: data._id,
                }, config.jwtSecret, { expiresIn: '1h' })
                resolve(token);
            } catch (err) {
                reject(err);
            }
        })
    }
}
module.exports = UserController;
