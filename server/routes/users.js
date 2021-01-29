const { User, validateUser } = require("../models/user");
const { Day, validateDay } = require("../models/day");

const bcrypt = require('bcrypt');
// const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();


//get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        return res.send(users);
    } catch (ex) {
        return res.status(500).send(`Internal server Error: ${ex}`);
    }
});

//get single user
router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal server Error: ${ex}`);
    }
});

//register new user
router.post('/new', async (req,res) => {
    try {
        const{error}=validateUser(req.body);
        if (error)
            return res.status(500).send(error.details[0].message);
        let user = await User.findOne({ email:req.body.email});
        if (user) return res.status(400).send('User already registered.');
        const salt = await bcrypt.genSalt(10);
        user = new User ({
            userName: req.body.userName,
            // joinDate: req.body.joinDate, -- may want to switch this to Date.now() and pass in on registration
            email: req.body.email,
            password:await bcrypt.hash(req.body.password, salt),
        });
        
        await user.save();
        return res.send(user);
        // const token = user.generateAuthToken();
        // // const token = user.generateAuthToken();
        // return res
        //     .header('x-auth-token', token)
        //     .header('access-control-expose-headers', 'x-auth-token')
        //     .send({_id: user._id, userName: user.userName, email: user.email});
      } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});



//add a day
router.put('/:userId/day', async (req, res) => {
    try{
        const { error } = validateDay(req.body);
        if(error) return res.status(400).send("ValidationError " + error);
        
        const day = new Day ({
            // location: req.body.location,
            anxiety: req.body.anxiety,
            depression: req.body.depression,
            stress: req.body.stress,

            temperature: req.body.temperature,
            airQuality: req.body.airQuality,
            sleepTime: req.body.sleepTime,
            meditation: req.body.meditation,
            exerciseTime: req.body.exerciseTime,
            eatBreakfast: req.body.eatBreakfast
        });
        
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push: {logs: day}},
            {new: true}
        );
        
        if (!day) return res.status(400).send(`The user with id "${req.params.userid}" does not exist.`);

        await user.save();
        return res.send(user);

    } catch(err) {
        return res.status(500).send(`Internal Server Error: ${err}`);
    }
});

module.exports = router;