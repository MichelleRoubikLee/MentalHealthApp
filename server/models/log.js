const mongoose = require('mongoose');
const Joi = require('joi');
const CORS = require('cors');
const config = require('config');


//log schema goes here
const logSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    result: {type: Number, required: true}
});
    

const Log = mongoose.model('log',logSchema);

function validateLog(log) {
    const schema = Joi.object({
        date: Joi.date().iso(),
        result: Joi.number()
    });
    return schema.validate(log);
}


exports.Log = Log;
exports.validateLog = validateLog;
exports.logSchema = logSchema;