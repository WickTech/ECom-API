const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
    name: String,
    sku: String,
    additionalCost: Number,
    stock: Number,
});
const ProductSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    variant: [variantSchema],
},
{ timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);