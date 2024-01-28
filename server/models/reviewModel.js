import mongoose from "mongoose";
import {Schema} from "mongoose";

const reviewsSchema = new Schema({
    product_name: String, // ???
    user_id: String, // ??
    date: Date,
    rating: Number,
    text: String,
});

module.exports = mongoose.model('Review', reviewsSchema);