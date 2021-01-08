const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)

class ValidatorService {
    constructor() {
        this.schemas = {};
        this.initializeScemas();
    }
    initializeScemas() {
        this.schemas.signupSchema = Joi.object({
            firstname: Joi.string().required(),
            lastname: Joi.string(),
            email: Joi.string().required(),
            password: Joi.string().required(),
            age: Joi.number(),
            date: Joi.date(),
            gender: Joi.string(),
        });
        this.schemas.loginScema = Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required(),
        });
    }
}

module.exports = ValidatorService;