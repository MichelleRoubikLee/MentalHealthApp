
const mongoose = require('mongoose');
const Joi = require('joi');
const CORS = require('cors');
const config = require('config');


//day schema goes here
const daySchema = new mongoose.Schema({
    // userId: {type: String, required: true, minlength: 5, maxlength: 255 },
    date: {type: Date, default: Date.now()},
    location: {type: String, required: false},

    anxiety: {type: Number, required: false},
    depression: {type: Number, required: false},
    stress: {type: Number, required: false},

    temperature: {type: String, required: false},
    airQuality: {type: String, required: false},
    sleepTime: {type: Number, required: false},
    meditation: {type: Boolean, required: false},
    exerciseTime: {type: Number, required: false},
    eatBreakfast: {type: Boolean, required: false}
});
    

const Day = mongoose.model('day',daySchema);

function validateDay(day) {
    const schema = Joi.object({
        // userId: Joi.string().min(5).max(50).required(),

        anxiety: Joi.number(),
        depression: Joi.number(),
        stress: Joi.number(),

        temperature: Joi.string(),
        airQuality: Joi.string(),
        sleepTime:  Joi.number(),
        meditation:  Joi.boolean(),
        exerciseTime:  Joi.number(),
        eatBreakfast: Joi.boolean()
    });
    return schema.validate(day);
}


exports.Day = Day;
exports.validateDay = validateDay;
exports.daySchema = daySchema;