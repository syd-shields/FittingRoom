const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

async function connect() {
    MongoClient.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(console.log('connected db')).catch((err) => console.log(err))
}

var conn = await connect();

app.post("/api/newsletter", async (req, res) => {
    const email = req.body.email;
    const businessName = req.body.businessName;
    const phoneNumber = req.body.phoneNumber;
    conn.collection('users').insertOne({ email: email, businessname: businessName, phoneNumber: phoneNumber }, (err, result) => {
        console.log(result)
    })
})
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("listening on port" + PORT)
});
