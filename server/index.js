const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected db')).catch((err) => console.log(err))

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("listening on port" + PORT)
});
