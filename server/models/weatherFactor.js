const mongoose = require('mongoose');
const Joi = require('joi');
const CORS = require('cors');
const config = require('config');
const { logSchema } = require('./log');



//day schema goes here
const weatherFactorSchema = new mongoose.Schema({
    factorName: {type: String, required: true, minlength: 3, maxlength: 255 },
    tracking: {type: Boolean},
    logs: [logSchema]
});
    

const WeatherFactor = mongoose.model('weatherFactor',weatherFactorSchema);

function validateWeatherFactor(weatherFactor) {
    const schema = Joi.object({
       factorName: Joi.string().min(3).max(255).required(),
       tracking: Joi.boolean().required()
    });
    return schema.validate(weatherFactor);
}

exports.WeatherFactor = WeatherFactor;
exports.validateWeatherFactor = validateWeatherFactor;
exports.weatherFactorSchema = weatherFactorSchema;