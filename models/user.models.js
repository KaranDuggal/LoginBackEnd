const { string } = require('joi');
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    age: Number,
    date: Date,
    gender: String
})

const singUpUsers = mongoose.model('singUpUsers', userSchema)
module.exports = singUpUsers;