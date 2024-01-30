const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    product_id: String,
    user_id: String,
    date: Date,
    rating: Number,
    text: String,
});

module.exports = mongoose.model('Review', reviewsSchema);