const { User, validateUser } = require("../models/user");
const { Factor, validateFactor } = require("../models/factor");
const { Log, validateLog } = require("../models/log");

const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();

//add a new log
router.put('/:userId/:factorId/log', auth, async (req, res) => {
    try{
        const { error } = validateLog(req.body);
        if(error) return res.status(400).send("ValidationError " + error);
        
        const log = new Log ({
            result: req.body.result,
            date: req.body.date
        });
        const user = await User.findById(req.params.userId);
        await user.factors.id(req.params.factorId).logs.push(log);
        await user.save()
                
        if (!user) return res.status(400).send(`The user with id "${req.params.userid}" does not exist.`);

        return res.send(user);

    } catch(err) {
        return res.status(500).send(`Internal Server Error: ${err}`);
    }
});

router.put('/:userId/:factorId/weatherlog', auth, async (req, res) => {
    try{
        const { error } = validateLog(req.body);
        if(error) return res.status(400).send("ValidationError " + error);
        
        const log = new Log ({
            result: req.body.result,
            date: req.body.date
        });
        const user = await User.findById(req.params.userId);
        await user.weatherFactors.id(req.params.factorId).logs.push(log);
        await user.save()
                
        if (!user) return res.status(400).send(`The user with id "${req.params.userid}" does not exist.`);

        return res.send(user);

    } catch(err) {
        return res.status(500).send(`Internal Server Error: ${err}`);
    }
});


module.exports = router;