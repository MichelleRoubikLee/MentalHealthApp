const mongoose = require('mongoose');
const Joi = require('joi');
const CORS = require('cors');
const config = require('config');
const { logSchema } = require('./log');



//day schema goes here
const factorSchema = new mongoose.Schema({
    factorName: {type: String, required: true, minlength: 3, maxlength: 255 },
    question: {type: String, required: true},
    answers: {type: Array},
    tracking: {type: Boolean},
    logs: [logSchema]
});
    

const Factor = mongoose.model('factor',factorSchema);

function validateFactor(factor) {
    const schema = Joi.object({
       factorName: Joi.string().min(3).max(255).required(),
       question: Joi.string().required(),
       answers: Joi.array().required(),
       tracking: Joi.boolean().required()
    });
    return schema.validate(factor);
}

exports.Factor = Factor;
exports.validateFactor = validateFactor;
exports.factorSchema = factorSchema;