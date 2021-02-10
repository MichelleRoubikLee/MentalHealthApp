const { User, validateUser } = require("../models/user");
const { Factor, validateFactor} = require("../models/factor");
const { WeatherFactor, validateWeatherFactor} = require("../models/weatherFactor");
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();

//add a new factor
router.put('/:userId/factor', async (req, res) => {
    try{
        const { error } = validateFactor(req.body);
        if(error) return res.status(400).send("ValidationError " + error);
        
        const factor = new Factor ({
            factorName: req.body.factorName,
            question: req.body.question,
            answers: req.body.answers,
            tracking: req.body.tracking
        });
        
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push: {factors: factor}},
            {new: true}
        );
        
        if (!user) return res.status(400).send(`The user with id "${req.params.userid}" does not exist.`);

        await user.save();
        return res.send(user);

    } catch(err) {
        return res.status(500).send(`Internal Server Error: ${err}`);
    }
});

//add a new factor
router.put('/:userId/weatherfactor', async (req, res) => {
    try{
        const { error } = validateWeatherFactor(req.body);
        if(error) return res.status(400).send("ValidationError " + error);
        
        const weatherFactor = new WeatherFactor ({
            factorName: req.body.factorName,
            tracking: req.body.tracking
        });
        
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push: {weatherFactors: weatherFactor}},
            {new: true}
        );
        
        if (!user) return res.status(400).send(`The user with id "${req.params.userid}" does not exist.`);

        await user.save();
        return res.send(user);

    } catch(err) {
        return res.status(500).send(`Internal Server Error: ${err}`);
    }
});



module.exports = router;