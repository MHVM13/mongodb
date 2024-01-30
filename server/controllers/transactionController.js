const mongoose = require('mongoose');
const User = require('./../models/userModel');
const Product = require('./../models/productModel');

exports.transaction = async (req, res) => {
    try {
        let count;
        const session = await mongoose.startSession();

        await session.withTransaction(async () => {
            await User.create({
                full_name: 'Михеев Максим Михайлович',
                phone_number: '79150000101',
                email: 'i@mikheev-m.ru',
                shipping_addresses: [
                    {city: 'Москва', street: 'Введенского', house_number: '13',}
                ],
                cards: [
                    {card_number: '4792356272037367', exp_date: '07/26',}
                ]
            }, {session: session});

            count = await User.countDocuments();
        })

        await session.commitTransaction();
        await session.endSession();

        res.status(200).json({
            status: 'success',
            count: count,
        });
    } catch (err) {
        console.log(`🔥 Error: ${err.message}`);
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};