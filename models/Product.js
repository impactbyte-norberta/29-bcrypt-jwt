const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleString(),
    },
    updatedAt: {
        type: Date,
        required: true,
        default: new Date().toLocaleString(),
    },
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
