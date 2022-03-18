const router = require("express").Router();
const User = require('./schemas/User.js');
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    try {
        const newUser = new User({
            email: req.body.email,
            organization: req.body.organization,
            phoneNo: req.body.phoneNo,
        })
        const user = await newUser.save();
        res.status(200).json(user);
        console.log("user created")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;