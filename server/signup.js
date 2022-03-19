const router = require("express").Router();
const User = require('./schemas/User.js');
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    try {
        const newUser = new User({
            email: req.body.email,
            businessName: req.body.businessName,
            phoneNumber: req.body.phoneNumber,
        })
        const user = await newUser.save();
        res.status(200).json(user);
        console.log("user created")
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;