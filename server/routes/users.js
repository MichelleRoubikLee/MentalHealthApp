const { User, validateUser } = require("../models/user");
const { Factor, validateFactor } = require("../models/factor");
const { Log, validateLog } = require("../models/log");


const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
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
        const{error} = validateUser(req.body);
        if (error)
            return res.status(500).send(error.details[0].message);
        let user = await User.findOne({ email:req.body.email});
        if (user) return res.status(400).send('User already registered.');
        const salt = await bcrypt.genSalt(10);
        user = new User ({
            userName: req.body.userName,
            email: req.body.email,
            password:await bcrypt.hash(req.body.password, salt),
        });
        
        await user.save();
        const token = user.generateAuthToken();
        console.log(token)
        return res.send(token);
      } catch (ex) {
        return res.status(500).send(`InternalServerError:${ex}`);
    }
});

router.post("/login", async (req, res) => {
    try {
    
        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send("Invalid email or password.");
    
        const validPassword = await bcrypt.compare(req.body.password, user.password);
    
        if (!validPassword) return res.status(400).send("Invalid email or password.");
        const token = user.generateAuthToken();
        console.log(token)
        return res.send(token);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
  


module.exports = router;