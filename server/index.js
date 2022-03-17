const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const signupRoute = require('./signup')

dotenv.config();
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected db')).catch((err) => console.log(err))

app.use('/api/v1', signupRoute)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("listening on port" + PORT)
});

