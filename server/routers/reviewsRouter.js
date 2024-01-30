const express = require('express');
const reviewsController = require('../controllers/reviewsController')

const router = express.Router();

router
    .route('/')
    .get(reviewsController.getAllReviews)
    .post(reviewsController.createReview);

router
    .route('/:id')
    .get(reviewsController.getReview)
    .patch(reviewsController.updateReview)
    .delete(reviewsController.deleteReview);

module.exports = router;