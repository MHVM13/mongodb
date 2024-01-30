const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        required: true,
    },
    product_name: String,
    description: String,
    average_rating: Number,
    price: Number,
    amount: Number,
});

module.exports = mongoose.model('Product', productsSchema) ;