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
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),
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