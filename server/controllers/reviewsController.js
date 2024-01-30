const Review = require('../models/reviewModel');

exports.createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                newReview
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();

        res.status(200).json({
            status: 'success',
            results: reviews.length,
            data: {
                reviews,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.getReview = async (req, res) => {
    try {
        const reviews = await Review.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                reviews,
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
exports.updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body);

        console.log(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                review,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message,
        });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        await Review .deleteOne({"_id": req.params.id});

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


