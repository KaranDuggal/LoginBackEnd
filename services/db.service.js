const mongoose = require('mongoose');

class DBService {
    constructor() { }
    findOne(collection, email) {
        return new Promise((resolve, reject) => {
            collection.findOne(email).exec((err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
    save(model) {
        return new Promise((resolve, reject) => {
            model.save((err, modelsaved) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(modelsaved);
                }
            });
        });
    }
    findMany(collection) {
        return new Promise((resolve, reject) => {
            collection.find().exec((err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        });
    }
    deleteOne(collection, deletequery) {
        return new Promise((resolve, reject) => {
            collection.findOneAndDelete(deletequery, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }
}

module.exports = DBService;