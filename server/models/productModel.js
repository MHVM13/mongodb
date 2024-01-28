import mongoose from "mongoose";
import {Schema} from "mongoose";

const productsSchema = new Schema({
    product_name: String,
    description: String,
    average_rating: Number,
    price: Number,
    amount: Number,
});

module.exports = mongoose.model('Product', productsSchema) ;