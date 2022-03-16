const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require("bcrypt");

const User = require('./schemas/User.js');

const router = require("express").Router();

dotenv.config();
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected db')).catch((err) => console.log(err))


//signup
router.post("/signup", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPhoneNumber = await bcrypt.hash(req.body.phoneNumber, salt);
        const newUser = new User({
            email: req.body.email,
            businessName: req.body.businessName,
            phoneNumber: hashedPhoneNumber,
        })
        const user = await newUser.save();
        res.status(200).json(user);
        console.log("user created")
    } catch(err){
        res.status(500).json(err)
    }   
});
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("listening on port" + PORT)
});

