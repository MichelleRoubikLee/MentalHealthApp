
const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const { factorSchema } = require('./factor');

//user schema goes here
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, minlength: 3, maxlength: 255 },
    joinDate: {type: Date, default: Date.now()},
    email: {type: String, required: false},
    password: {type: String, required: false},
    factors: [factorSchema]
});
    
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id, name: this.name, isAdmin: this.isAdmin}, config.get('jwtSecret'));
};

const User = mongoose.model('user',userSchema);

function validateUser(user) {
    const schema = Joi.object({
        userName: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(3).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
    });
    return schema.validate(user);
}


exports.User = User;
exports.validateUser = validateUser;
exports.userSchema = userSchema;