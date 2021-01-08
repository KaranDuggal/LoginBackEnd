const bcrypt = require("bcrypt");
const DBService = require('./db.service');
const dbService = new DBService();
const singupuser = require('../models/user.models');

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

}
module.exports = UserController;
