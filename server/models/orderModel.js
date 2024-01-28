import mongoose from "mongoose";
import {Schema} from "mongoose";

const ordersSchema = new Schema({
    user_id: String,
    date: Date,
    status: String,
});

module.exports = mongoose.model('Order', ordersSchema) ;