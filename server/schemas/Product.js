//this is the schema for produts
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        dimensions: [{
            dimensionType: {
                type: String,
                required: true,
            },
            dimensionValue: {
                type: Number,
                required: true,
            }
        }],
    }
)

module.exports = mongoose.model("Product", ProductSchema);