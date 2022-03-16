//this is the schema for business registration
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        businessName: {
            type: String,
            required: true,
        }
    }
)

