const Order = require('../models/orderModel');

exports.createOrder= async (req, res) => {
    try {
        const newProduct = await Order.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                newProduct
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();

        res.status(200).json({
            status: 'success',
            results: orders.length,
            data: {
                orders,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getOrder = async (req, res) => {
    try {
        const orders = await Order.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                orders,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

// В req.body содержится json что будет заменено
exports.updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body);

        console.log(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                order,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await Order.deleteOne({"_id": req.params.id});

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};


