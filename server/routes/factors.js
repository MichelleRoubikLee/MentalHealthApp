const { User, validateUser } = require("../models/user");
const { Factor, validateFactor } = require("../models/factor");
const { Log, validateLog } = require("../models/log");


//add a new factor
router.put('/:userId/factor', async (req, res) => {
    try{
        const { error } = validateFactor(req.body);
        if(error) return res.status(400).send("ValidationError " + error);
        
        const factor = new Factor ({
            
        });
        
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {$push: {factors: factor}},
            {new: true}
        );
        
        if (!day) return res.status(400).send(`The user with id "${req.params.userid}" does not exist.`);

        await user.save();
        return res.send(user);

    } catch(err) {
        return res.status(500).send(`Internal Server Error: ${err}`);
    }
});

//add a new log

module.exports = router;