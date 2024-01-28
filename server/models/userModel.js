const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    full_name: String,
    phone_number: String,
    email: String,
    shipping_addresses: [{
        city: String,
        street: String,
        house_number: Number,
    }],
    cards: [{
        card_number: String,
        exp_date: String,
    }],
});

module.exports = mongoose.model('Users', usersSchema);