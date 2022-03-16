const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

app.use(express.json())

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("listening on port" + PORT)
});
