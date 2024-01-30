const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    user_id: String,
    date: Date,
    status: String,
    products: [ {
        product_id: String,
        count: Number,
    }],
});

module.exports = mongoose.model('Order', ordersSchema) ;