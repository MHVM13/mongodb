const User = require('../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                newUser
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                users,
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
exports.updateUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        console.log(user);

        console.log(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteOne({"_id": req.params.id});

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
