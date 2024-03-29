const express = require('express');
const transactionController = require('../controllers/transactionController')

const router = express.Router();

router
    .route('/')
    .post(transactionController.transaction);

module.exports = router;

