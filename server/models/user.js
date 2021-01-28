
const mongoose = require('mongoose');
const Joi = require('joi');
// const CORS = require('cors');
const config = require('config');
const jwt = require('jsonwebtoken');

//user schema goes here
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, minlength: 5, maxlength: 255 },
    joinDate: {type: Date, default: Date.now()},
    location: {type: String, maxlength: 500},
    email: {type: String, required: false},
    password: {type: String, required: false}
});
    
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id: this._id, name: this.name, isAdmin: this.isAdmin}, config.get('jwtSecret'));
};

const User = mongoose.model('user',userSchema);

function validateUser(user) {
    const schema = Joi.object({
        userName: Joi.string().min(5).max(50).required(),
        joinDate: Joi.number(),
        location: Joi.string().min(5).max(255),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
    });
    return schema.validate(user);
}


exports.User = User;
exports.validateUser = validateUser;
exports.userSchema = userSchema;